//开始游戏
function startGame() {
    var jsonStr = '{"playerId": "' + this.playerId + '", "action": "startGame"}';

    ajaxPost(this, jsonStr, function (obj, ResponseJson) {
        console.log("Start Game!");
        printfLog("*******************************Start Game*******************************");
        printfLog("sessionId:" + ResponseJson.sessionId);
        obj.sessionId = ResponseJson.sessionId;
        obj.numberOfWordsToGuess = ResponseJson.data.numberOfWordsToGuess;
        //清空日志
        $("#list").text("");
        //禁用开始按钮
        $("#StartBtn").attr("disabled", true);
        
        obj.getWord();
    });

}

//获得一个单词
function getWord() {

    var jsonStr = '{"sessionId":"' + this.sessionId + '","action": "nextWord"}';

    //如果已猜单词数等于80则结束
    if (this.totalWordCount === 80) {
        printfLog("*******************************End Game*******************************");

        //绑定提交事件
        $('#SubmitBtn').click(this, function (event) {
            event.data.submitResult();
        });
        //恢复开始按钮
        $("#StartBtn").attr("disabled", false);

        $('#SubmitBtn').show(1000);
        return;
    }

    ajaxPost(this, jsonStr, function (obj, ResponseJson) {
        //保存数据
        obj.word = ResponseJson.data.word;
        obj.wrongGuessCountOfCurrentWord = ResponseJson.data.wrongGuessCountOfCurrentWord;

        console.log("Give Me A Word!");
        printfLog("*******************************New Word*******************************");
        printfLog('word:' + ResponseJson.data.word);

        //获取单词长度
        obj.wordLength = obj.word.length;

        //如果该长度的单词在词库没有就跳过
        if (obj.wordLength === 2 || obj.wordLength === 26 || obj.wordLength > 28) {
            obj.getWord();
            return;
        }

        //更新分数
        obj.getResult();
        //开始猜测
        obj.beginGuessWord();

    });
}

//获取当前分数统计
function getResult() {

    var jsonStr = '{"sessionId":"' + this.sessionId + '","action": "getResult"}';

    ajaxPost(this, jsonStr, function (obj, ResponseJson) {
        obj.score = ResponseJson.data.score;
        obj.totalWordCount = ResponseJson.data.totalWordCount;
        obj.correctWordCount = ResponseJson.data.correctWordCount;
        obj.totalWrongGuessCount = ResponseJson.data.totalWrongGuessCount;

        //更新剩余单词数
        $("#remainingWord").text(80 - obj.totalWordCount);
        //显示已猜单词书
        $("#totalWordCount").text(obj.totalWordCount);
        //显示猜对单词数
        $("#correctWordCount").text(obj.correctWordCount);
        //显示猜错总次数
        $("#totalWrongGuessCount").text(obj.totalWrongGuessCount);
        //显示总分数
        $("#fraction").text(obj.score);
        //计算正确率
        $("#correctRate").text(GetPercent(obj.correctWordCount, obj.totalWordCount));
    });
}

//提交分数
function submitResult() {

    var jsonStr = '{"sessionId":"' + this.sessionId + '","action": "submitResult"}';

    ajaxPost(this, jsonStr, function (obj, ResponseJson) {
        printfLog("playerId:" + ResponseJson.data.playerId
            + "\nsessionId:" + ResponseJson.data.sessionId
            + "\ntotalWordCount:" + ResponseJson.data.totalWordCount
            + "\ncorrectWordCount:" + ResponseJson.data.correctWordCount
            + "\ntotalWrongGuessCount:" + ResponseJson.data.totalWrongGuessCount
            + "\ndatetime:" + ResponseJson.data.datetime);
        alert("Submit OK!");
    });
}

//提交一个猜测字母
function guessWord(letter) {

    if (typeof letter == "undefined") {
        throw {
            msg: 'letter is invalid'
        }
        return null;
    }
    var jsonStr = '{"sessionId":"' + this.sessionId + '","action": "guessWord","guess" : "' + letter + '"}';

    //保存猜测字母
    this.letter = letter;

    ajaxPost(this, jsonStr, function (obj, ResponseJson) {
        //保存返回数据
        obj.word = ResponseJson.data.word;
        obj.totalWordCount = ResponseJson.data.totalWordCount;
        obj.wrongGuessCountOfCurrentWord = ResponseJson.data.wrongGuessCountOfCurrentWord;

        printfLog("Guess Letter:" + obj.letter);
        printfLog('word:' + obj.word + ',totalWordCount:'
                    + obj.totalWordCount + ',wrongGuessCountOfCurrentWord:'
                    + obj.wrongGuessCountOfCurrentWord);

        //如果猜对进行下一轮猜词
        if (getGuessLetterNumber(obj.word) > obj.guessLetterNumber) {

            //获取猜对字母位置可以为多个
            var tempIndexArray = getLettrtIndexByJson(obj.word, obj.letter);

            //添加到当前猜对字母位置数组
            for (var i = 0; i < tempIndexArray.length; i++) {
                obj.letterIndexArray.push(tempIndexArray[i]);
            }

            //根据当前位置数组过滤当前猜测词库
            obj.tempWordlibraryArray = getIndexWord(obj.tempWordlibraryArray, obj.letterIndexArray);

            //进行下一轮猜词
            obj.beginGuessWord();
        } else {
            //如果猜错从词库中去除该字母
            obj.tempWordlibraryArray = filterWordArray(obj.tempWordlibraryArray, obj.letter);
            //开始下一轮猜词
            obj.beginGuessWord();
        }

    });

}

//开始猜测
function beginGuessWord() {

    //如果是第一次猜测,则重新获取词库
    if (typeof this.tempWordlibraryArray === "undefined") {
        var hightLetter = countHightWord(getWordsArray(this.wordLength), this.word);
        this.tempWordlibraryArray = getWordsArray(this.wordLength);
    } else {
        var hightLetter = countHightWord(this.tempWordlibraryArray, this.word);
    }

    //如果词库内没有该单词，则停止当前单词猜词，进入下一单词
    if (this.tempWordlibraryArray.length === 0) {
        //重置词库
        this.tempWordlibraryArray = undefined;
        //重置当前猜对字母位置数组
        this.letterIndexArray = new Array();
        //获取下一个单词
        this.getWord();
        return;
    }
    //如果猜错次数超过十次,则停止当前单词猜词，进入下一单词
    if (10 === this.wrongGuessCountOfCurrentWord) {
        //重置词库
        this.tempWordlibraryArray = undefined;
        //重置当前猜对字母位置数组
        this.letterIndexArray = new Array();
        //获取下一个单词
        this.getWord();
        return;
    }
    //猜词之前先保存当前猜中的单词次数
    this.guessLetterNumber = getGuessLetterNumber(this.word);

    //如果全部猜对,则停止当前单词猜词，进入下一单词
    if (this.guessLetterNumber == this.wordLength) {
        //重置词库
        this.tempWordlibraryArray = undefined;
        //重置当前猜对字母位置数组
        this.letterIndexArray = new Array();
        //获取下一个单词
        this.getWord();
        return;
    }

    //开始猜词
    this.guessWord(hightLetter[0]);


}

//Hangman对象构造函数
function createHangman(url, playerId) {
    var Hangman = {};

    if (typeof url === "undefined" || typeof playerId === "undefined") {
        return null;
    }
    //属性
    Hangman.url = url;//游戏地址
    Hangman.playerId = playerId;//游戏ID
    Hangman.sessionId = "";//sessionId
    Hangman.numberOfWordsToGuess = 80;//剩余猜测单词
    Hangman.totalWordCount = 0; //尝试猜测总数
    Hangman.correctWordCount = 0; //猜对单词总数
    Hangman.totalWrongGuessCount = 0;//猜错总次数
    Hangman.wrongGuessCountOfCurrentWord = 0;//当前单词猜错次数
    Hangman.score = 0; //分数
    Hangman.letterIndexArray = new Array();//当前猜对字母位置数组
    Hangman.tempWordlibraryArray;//当前猜测词库数组
    Hangman.word = "";//当前单词
    Hangman.wordLength = 3;//当前单词长度
    Hangman.guessLetterNumber = 0; //猜对字母数
    Hangman.letter;//当前猜测字母


    //方法
    Hangman.startGame = startGame;
    Hangman.getWord = getWord;
    Hangman.guessWord = guessWord;
    Hangman.getResult = getResult;
    Hangman.beginGuessWord = beginGuessWord;
    Hangman.submitResult = submitResult;

    return Hangman;
}
