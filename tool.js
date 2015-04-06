//Ajax post操作
function ajaxPost(obj, postJson, callback) {

    if (typeof obj === "undefined") {
        return null;
    }
    if (typeof postJson === "undefined") {
        return null;
    }
    if (typeof callback === "undefined") {
        return null;
    }

    $.ajax({
        'url': obj.url,
        'type': 'post',
        'dataType': 'json',
        'async': true,
        'data': postJson,
        'contentType': 'application/json',
        'success': function (ResponseData) {
            if (ResponseData) {
                callback(obj, ResponseData);
            } else {
                console.log("Response Json Error");
                return null;
            }
        },
        'error': function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax Error", textStatus, errorThrown);
            var r = confirm("网络连接出错,重新连接请点击确认!");
            if (r == true) {
                ajaxPost(obj, postJson, callback);
            }

            return null;
        }
    });
}

//统计词频 
//返回逆序排列的高频字母字符串
//WordArray 单词数组
function countHightWord(WordArray, currentWord) {
    var alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var countArray = new Array(26);
    var hightWordStr = "";

    if (null != WordArray && undefined != WordArray) {

        //初始化统计次数数组
        for (var n = 0; n < countArray.length; n++) {
            countArray[n] = 0;
        }


        //遍历整个数组统计词频
        for (var i = 0; i < WordArray.length; i++) {
            for (var j = 0; j < WordArray[i].length; j++) {

                //如果该字母已经猜过，则跳过该字母统计频率
                if (!judgeletterByWord(currentWord, WordArray[i].charAt(j))) {
                    //统计对应字母的次数
                    var wordIndex = alphabetStr.indexOf(WordArray[i].charAt(j));
                    countArray[wordIndex] += 1;
                }
            }
        }
        var tempWordArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                             'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                             'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        var i = 26;
        var tempExchangVal;
        var tempLetter;

        //冒泡排序逆序统计
        while (i > 0) {
            for (j = 0; j < i - 1; j++) {
                if (countArray[j] < countArray[j + 1]) {
                    tempExchangVal = countArray[j];
                    countArray[j] = countArray[j + 1];
                    countArray[j + 1] = tempExchangVal;

                    tempLetter = tempWordArray[j];
                    tempWordArray[j] = tempWordArray[j + 1];
                    tempWordArray[j + 1] = tempLetter;
                }
            }
            i--;
        }

        //返回逆序排列的高词频字符串
        return tempWordArray;
    } else {
        return null;
    }
}

//获取对应字数数组
function getWordsArray(words) {
    if (undefined === words) {
        return null;
    }
    switch (words) {
        case 3:
            return word3;
        case 4:
            return word4;
        case 5:
            return word5;
        case 6:
            return word6;
        case 7:
            return word7;
        case 8:
            return word8;
        case 9:
            return word9;
        case 10:
            return word10;
        case 11:
            return word11;
        case 12:
            return word12;
        case 13:
            return word13;
        case 14:
            return word14;
        case 15:
            return word15;
        case 16:
            return word16;
        case 17:
            return word17;
        case 18:
            return word18;
        case 19:
            return word19;
        case 20:
            return word20;
        case 21:
            return word21;
        case 22:
            return word22;
        case 23:
            return word23;
        case 24:
            return word24;
        case 25:
            return word25;
        case 27:
            return word27;
        case 28:
            return word28;
    }
}

//获取对应字母位置的数组
function getIndexWord(arr, indexJsonArray) {
    var resultArr = new Array();
    var verificationStatus;

    if (undefined === arr || null === arr || undefined === indexJsonArray || null === indexJsonArray) {
        return null;
    }
    //遍历数组
    for (var i = 0; i < arr.length; i++) {

        verificationStatus = true;
        //判断是否跟当前位置符合
        for (var j = 0; j < indexJsonArray.length; j++) {
            if (arr[i].charAt(indexJsonArray[j].index) != indexJsonArray[j].letter) {
                //不符合规则则验证失败
                verificationStatus = false;
                break;
            }
        }
        if (verificationStatus) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr;
}

//返回猜对的字母字数
function getGuessLetterNumber(currentWord) {
    var starNumber = 0;

    if (undefined === currentWord) {
        return null;
    }
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord.charAt(i) == "*") {
            starNumber++;
        }
    }
    return currentWord.length - starNumber;
}

//判断该字母是否在单词内出现
function judgeletterByWord(jword, jletter) {
    if (undefined === jword || undefined === jletter) {
        return null;
    }
    for (var i = 0; i < jword.length; i++) {
        if (-1 != jword.indexOf(jletter)) {
            return true;
        }
    }
    return false;
}

//返回该字母在单词中出现位置的Json对象
function getLettrtIndexByJson(currentWord, currentLetter) {
    var jsonArray = new Array();

    if (undefined === currentWord || undefined === currentLetter) {
        return null;
    }

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord.charAt(i) == currentLetter) {
            jsonArray.push($.parseJSON('{"index":"' + i + '","letter":"' + currentLetter + '"}'));
        }
    }

    return jsonArray;
}

//返回过滤掉该字母的单词数组
function filterWordArray(filterArray, filterLetter)
{
    var newWordArray = new Array();

    for (var i = 0; i < filterArray.length;i++)
    {
        if (-1 === filterArray[i].indexOf(filterLetter))
        {
            newWordArray.push(filterArray[i]);
        }
    }

    return newWordArray;
}

//打印游戏日志
function printfLog(log)
{
    var tempLog = $("#list").text();
    tempLog += log+"\n";
    $("#list").text(tempLog);
}

//计算正确率
function GetPercent(num, total) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");
}
