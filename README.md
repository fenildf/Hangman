介绍
======================
该代码库主要是用于[Hangman Game](http://zh.wikipedia.org/wiki/%E7%8C%9C%E5%96%AE%E8%A9%9E%E9%81%8A%E6%88%B2)的游戏测试，基于JQuery开发，<br/>
可自动猜单词，在给定80个单词的情况下，正确率在85%以上，主要是词库不是非常完整，在词库完整的情况下正确率可以达到90%以上。运行该代码库需要服务端支持。

文档结构
======================
1.index.html
		首页，主要用于开始游戏，查看游戏日志
2.hangman.js
		Hangman对象的构造函数和方法
3.tool.js
		工具类，用于处理单词。
4.words.js
		词库，存放了单词长度3~28的单词数组

算法
======================
贪婪算法，每次猜测尽量排除最多的单词，由于每个单词的最多只能猜错十次，所以需要让猜测的步骤尽量减少。
1.获取第一个单词长度，然后选择使用哪个长度的单词库。
2.统计单词数组的字母频率，然后进行猜测
		2.1如果猜测正确，记录猜对字母的位置信息，过滤词库数组。
		2.2如果猜测错误，从词库数组中排除掉有该字母的单词。
3.重复步骤2直到猜测正确，或者错误次数超过十。
参考
======================
Ruby-china:[红宝石 大战 Hangman](https://ruby-china.org/topics/16256)<br/>
Github:<br/>
		[https://github.com/mvj3/hangman](https://github.com/mvj3/hangman)
		[https://github.com/ethiebaut/hangman](https://github.com/ethiebaut/hangman)
测试结果
======================
*******************************New Word*******************************
word:*****
Guess Letter:S
word:**S*S,totalWordCount:1,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:**SES,totalWordCount:1,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*ASES,totalWordCount:1,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:*ASES,totalWordCount:1,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:*ASES,totalWordCount:1,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:*ASES,totalWordCount:1,wrongGuessCountOfCurrentWord:3
Guess Letter:L
word:*ASES,totalWordCount:1,wrongGuessCountOfCurrentWord:4
Guess Letter:O
word:OASES,totalWordCount:1,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:2,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:2,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O**,totalWordCount:2,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:*O*S,totalWordCount:2,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*OTS,totalWordCount:2,wrongGuessCountOfCurrentWord:2
Guess Letter:B
word:*OTS,totalWordCount:2,wrongGuessCountOfCurrentWord:3
Guess Letter:C
word:*OTS,totalWordCount:2,wrongGuessCountOfCurrentWord:4
Guess Letter:D
word:*OTS,totalWordCount:2,wrongGuessCountOfCurrentWord:5
Guess Letter:H
word:*OTS,totalWordCount:2,wrongGuessCountOfCurrentWord:6
Guess Letter:J
word:JOTS,totalWordCount:2,wrongGuessCountOfCurrentWord:6
*******************************New Word*******************************
word:***
Guess Letter:A
word:***,totalWordCount:3,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:***,totalWordCount:3,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:***,totalWordCount:3,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:4
Guess Letter:S
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:5
Guess Letter:G
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:6
Guess Letter:D
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:7
Guess Letter:P
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:8
Guess Letter:T
word:*I*,totalWordCount:3,wrongGuessCountOfCurrentWord:9
Guess Letter:M
word:*IM,totalWordCount:3,wrongGuessCountOfCurrentWord:9
Guess Letter:H
word:*IM,totalWordCount:3,wrongGuessCountOfCurrentWord:10
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:4,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:4,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O**,totalWordCount:4,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:3
Guess Letter:B
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:4
Guess Letter:W
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:5
Guess Letter:D
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:6
Guess Letter:P
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:7
Guess Letter:M
word:*O*S,totalWordCount:4,wrongGuessCountOfCurrentWord:8
Guess Letter:C
word:*OCS,totalWordCount:4,wrongGuessCountOfCurrentWord:8
Guess Letter:R
word:ROCS,totalWordCount:4,wrongGuessCountOfCurrentWord:8
*******************************New Word*******************************
word:***
Guess Letter:A
word:***,totalWordCount:5,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:***,totalWordCount:5,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O*,totalWordCount:5,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*O*,totalWordCount:5,wrongGuessCountOfCurrentWord:3
Guess Letter:B
word:*O*,totalWordCount:5,wrongGuessCountOfCurrentWord:4
Guess Letter:W
word:*O*,totalWordCount:5,wrongGuessCountOfCurrentWord:5
Guess Letter:M
word:*O*,totalWordCount:5,wrongGuessCountOfCurrentWord:6
Guess Letter:D
word:*OD,totalWordCount:5,wrongGuessCountOfCurrentWord:6
Guess Letter:C
word:*OD,totalWordCount:5,wrongGuessCountOfCurrentWord:7
Guess Letter:G
word:*OD,totalWordCount:5,wrongGuessCountOfCurrentWord:8
Guess Letter:H
word:*OD,totalWordCount:5,wrongGuessCountOfCurrentWord:9
Guess Letter:N
word:*OD,totalWordCount:5,wrongGuessCountOfCurrentWord:10
*******************************New Word*******************************
word:*****
Guess Letter:S
word:*****,totalWordCount:6,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:*****,totalWordCount:6,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:*****,totalWordCount:6,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:*****,totalWordCount:6,wrongGuessCountOfCurrentWord:4
Guess Letter:I
word:*****,totalWordCount:6,wrongGuessCountOfCurrentWord:5
Guess Letter:U
word:*U***,totalWordCount:6,wrongGuessCountOfCurrentWord:5
Guess Letter:Y
word:*U**Y,totalWordCount:6,wrongGuessCountOfCurrentWord:5
Guess Letter:M
word:*UM*Y,totalWordCount:6,wrongGuessCountOfCurrentWord:5
Guess Letter:P
word:*UMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:5
Guess Letter:B
word:*UMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:6
Guess Letter:D
word:*UMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:7
Guess Letter:H
word:*UMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:8
Guess Letter:J
word:*UMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:9
Guess Letter:L
word:LUMPY,totalWordCount:6,wrongGuessCountOfCurrentWord:9
*******************************New Word*******************************
word:*****
Guess Letter:S
word:*****,totalWordCount:7,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:***E*,totalWordCount:7,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:R**ER,totalWordCount:7,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:R**ER,totalWordCount:7,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:RI*ER,totalWordCount:7,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:RI*ER,totalWordCount:7,wrongGuessCountOfCurrentWord:3
Guess Letter:D
word:RIDER,totalWordCount:7,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:8,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:8,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:****,totalWordCount:8,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:****,totalWordCount:8,wrongGuessCountOfCurrentWord:4
Guess Letter:U
word:*U**,totalWordCount:8,wrongGuessCountOfCurrentWord:4
Guess Letter:S
word:*U**,totalWordCount:8,wrongGuessCountOfCurrentWord:5
Guess Letter:R
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:5
Guess Letter:B
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:6
Guess Letter:T
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:7
Guess Letter:L
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:8
Guess Letter:C
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:9
Guess Letter:D
word:*UR*,totalWordCount:8,wrongGuessCountOfCurrentWord:10
*******************************New Word*******************************
word:*****
Guess Letter:S
word:*****,totalWordCount:9,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:E*E**,totalWordCount:9,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:E*EM*,totalWordCount:9,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:E*EMA,totalWordCount:9,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:E*EMA,totalWordCount:9,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:ENEMA,totalWordCount:9,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:10,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:10,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:***O,totalWordCount:10,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:**IO,totalWordCount:10,wrongGuessCountOfCurrentWord:2
Guess Letter:R
word:*RIO,totalWordCount:10,wrongGuessCountOfCurrentWord:2
Guess Letter:B
word:BRIO,totalWordCount:10,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*****
Guess Letter:S
word:****S,totalWordCount:11,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:****S,totalWordCount:11,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****S,totalWordCount:11,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:**O*S,totalWordCount:11,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:**O*S,totalWordCount:11,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:**O*S,totalWordCount:11,wrongGuessCountOfCurrentWord:4
Guess Letter:N
word:*NO*S,totalWordCount:11,wrongGuessCountOfCurrentWord:4
Guess Letter:K
word:KNO*S,totalWordCount:11,wrongGuessCountOfCurrentWord:4
Guess Letter:B
word:KNO*S,totalWordCount:11,wrongGuessCountOfCurrentWord:5
Guess Letter:P
word:KNO*S,totalWordCount:11,wrongGuessCountOfCurrentWord:6
Guess Letter:T
word:KNO*S,totalWordCount:11,wrongGuessCountOfCurrentWord:7
Guess Letter:W
word:KNOWS,totalWordCount:11,wrongGuessCountOfCurrentWord:7
*******************************New Word*******************************
word:*****
Guess Letter:S
word:****S,totalWordCount:12,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:****S,totalWordCount:12,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:**A*S,totalWordCount:12,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:**A*S,totalWordCount:12,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:**ALS,totalWordCount:12,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*OALS,totalWordCount:12,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:*OALS,totalWordCount:12,wrongGuessCountOfCurrentWord:3
Guess Letter:F
word:*OALS,totalWordCount:12,wrongGuessCountOfCurrentWord:4
Guess Letter:G
word:GOALS,totalWordCount:12,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:13,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:13,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O**,totalWordCount:13,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:*O**,totalWordCount:13,wrongGuessCountOfCurrentWord:3
Guess Letter:L
word:LO**,totalWordCount:13,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:LO**,totalWordCount:13,wrongGuessCountOfCurrentWord:4
Guess Letter:T
word:LO**,totalWordCount:13,wrongGuessCountOfCurrentWord:5
Guess Letter:C
word:LOC*,totalWordCount:13,wrongGuessCountOfCurrentWord:5
Guess Letter:H
word:LOC*,totalWordCount:13,wrongGuessCountOfCurrentWord:6
Guess Letter:I
word:LOCI,totalWordCount:13,wrongGuessCountOfCurrentWord:6
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:14,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:**A*,totalWordCount:14,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:S*A*,totalWordCount:14,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:STA*,totalWordCount:14,wrongGuessCountOfCurrentWord:1
Guess Letter:B
word:STA*,totalWordCount:14,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:STA*,totalWordCount:14,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:STA*,totalWordCount:14,wrongGuessCountOfCurrentWord:4
Guess Letter:W
word:STA*,totalWordCount:14,wrongGuessCountOfCurrentWord:5
Guess Letter:Y
word:STAY,totalWordCount:14,wrongGuessCountOfCurrentWord:5
*******************************New Word*******************************
word:*****
Guess Letter:S
word:****S,totalWordCount:15,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:****S,totalWordCount:15,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****S,totalWordCount:15,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:****S,totalWordCount:15,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:****S,totalWordCount:15,wrongGuessCountOfCurrentWord:4
Guess Letter:U
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:4
Guess Letter:R
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:5
Guess Letter:L
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:6
Guess Letter:M
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:7
Guess Letter:K
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:8
Guess Letter:T
word:*U**S,totalWordCount:15,wrongGuessCountOfCurrentWord:9
Guess Letter:F
word:*UFFS,totalWordCount:15,wrongGuessCountOfCurrentWord:9
Guess Letter:B
word:BUFFS,totalWordCount:15,wrongGuessCountOfCurrentWord:9
*******************************New Word*******************************
word:*****
Guess Letter:S
word:**S*S,totalWordCount:16,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:**S*S,totalWordCount:16,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:**STS,totalWordCount:16,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:**STS,totalWordCount:16,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:**STS,totalWordCount:16,wrongGuessCountOfCurrentWord:3
Guess Letter:U
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:3
Guess Letter:B
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:4
Guess Letter:D
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:5
Guess Letter:G
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:6
Guess Letter:J
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:7
Guess Letter:L
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:8
Guess Letter:M
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:9
Guess Letter:O
word:*USTS,totalWordCount:16,wrongGuessCountOfCurrentWord:10
*******************************New Word*******************************
word:*****
Guess Letter:S
word:*****,totalWordCount:17,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:E****,totalWordCount:17,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:E****,totalWordCount:17,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:E****,totalWordCount:17,wrongGuessCountOfCurrentWord:3
Guess Letter:D
word:E****,totalWordCount:17,wrongGuessCountOfCurrentWord:4
Guess Letter:N
word:E**N*,totalWordCount:17,wrongGuessCountOfCurrentWord:4
Guess Letter:I
word:E*IN*,totalWordCount:17,wrongGuessCountOfCurrentWord:4
Guess Letter:G
word:E*ING,totalWordCount:17,wrongGuessCountOfCurrentWord:4
Guess Letter:K
word:EKING,totalWordCount:17,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:18,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:18,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O**,totalWordCount:18,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:2
Guess Letter:B
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:3
Guess Letter:D
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:4
Guess Letter:L
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:5
Guess Letter:N
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:6
Guess Letter:P
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:7
Guess Letter:T
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:8
Guess Letter:U
word:SO*S,totalWordCount:18,wrongGuessCountOfCurrentWord:9
Guess Letter:W
word:SOWS,totalWordCount:18,wrongGuessCountOfCurrentWord:9
*******************************New Word*******************************
word:*****
Guess Letter:S
word:*****,totalWordCount:19,wrongGuessCountOfCurrentWord:1
Guess Letter:E
word:****E,totalWordCount:19,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****E,totalWordCount:19,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:****E,totalWordCount:19,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:**O*E,totalWordCount:19,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:**O*E,totalWordCount:19,wrongGuessCountOfCurrentWord:4
Guess Letter:L
word:**O*E,totalWordCount:19,wrongGuessCountOfCurrentWord:5
Guess Letter:P
word:P*O*E,totalWordCount:19,wrongGuessCountOfCurrentWord:5
Guess Letter:H
word:PHO*E,totalWordCount:19,wrongGuessCountOfCurrentWord:5
Guess Letter:N
word:PHONE,totalWordCount:19,wrongGuessCountOfCurrentWord:5
*******************************New Word*******************************
word:****
Guess Letter:E
word:****,totalWordCount:20,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:****,totalWordCount:20,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:****,totalWordCount:20,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:*I**,totalWordCount:20,wrongGuessCountOfCurrentWord:3
Guess Letter:S
word:*I*S,totalWordCount:20,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:3
Guess Letter:B
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:4
Guess Letter:D
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:5
Guess Letter:F
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:6
Guess Letter:G
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:7
Guess Letter:H
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:8
Guess Letter:J
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:9
Guess Letter:K
word:*INS,totalWordCount:20,wrongGuessCountOfCurrentWord:10
*******************************New Word*******************************
word:*******
Guess Letter:E
word:****E**,totalWordCount:21,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:****E*S,totalWordCount:21,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:****ERS,totalWordCount:21,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:****ERS,totalWordCount:21,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:****ERS,totalWordCount:21,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:*I**ERS,totalWordCount:21,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*I*TERS,totalWordCount:21,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:*I*TERS,totalWordCount:21,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:*INTERS,totalWordCount:21,wrongGuessCountOfCurrentWord:3
Guess Letter:H
word:*INTERS,totalWordCount:21,wrongGuessCountOfCurrentWord:4
Guess Letter:M
word:*INTERS,totalWordCount:21,wrongGuessCountOfCurrentWord:5
Guess Letter:W
word:WINTERS,totalWordCount:21,wrongGuessCountOfCurrentWord:5
*******************************New Word*******************************
word:********
Guess Letter:E
word:********,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:****I***,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:S***IS**,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:S***IST*,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:SA**IST*,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:SAC*IST*,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:SACRIST*,totalWordCount:22,wrongGuessCountOfCurrentWord:1
Guess Letter:Y
word:SACRISTY,totalWordCount:22,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:********
Guess Letter:E
word:E*E*E***,totalWordCount:23,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:E*E*E**S,totalWordCount:23,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:E*E*E**S,totalWordCount:23,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:E*EME**S,totalWordCount:23,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:ELEME**S,totalWordCount:23,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:ELEMEN*S,totalWordCount:23,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:ELEMENTS,totalWordCount:23,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*******
Guess Letter:E
word:*******,totalWordCount:24,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*******,totalWordCount:24,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:****I**,totalWordCount:24,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:****IN*,totalWordCount:24,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:****ING,totalWordCount:24,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:****ING,totalWordCount:24,wrongGuessCountOfCurrentWord:3
Guess Letter:U
word:*U**ING,totalWordCount:24,wrongGuessCountOfCurrentWord:3
Guess Letter:T
word:*U**ING,totalWordCount:24,wrongGuessCountOfCurrentWord:4
Guess Letter:L
word:*U**ING,totalWordCount:24,wrongGuessCountOfCurrentWord:5
Guess Letter:S
word:*USSING,totalWordCount:24,wrongGuessCountOfCurrentWord:5
Guess Letter:B
word:BUSSING,totalWordCount:24,wrongGuessCountOfCurrentWord:5
*******************************New Word*******************************
word:******
Guess Letter:E
word:******,totalWordCount:25,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*A****,totalWordCount:25,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:SA****,totalWordCount:25,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:SA***N,totalWordCount:25,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:SA***N,totalWordCount:25,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:SA*OON,totalWordCount:25,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:SALOON,totalWordCount:25,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:********
Guess Letter:E
word:******E*,totalWordCount:26,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:**SS**E*,totalWordCount:26,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:**SS**E*,totalWordCount:26,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*ISS**E*,totalWordCount:26,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:*ISS**E*,totalWordCount:26,wrongGuessCountOfCurrentWord:2
Guess Letter:R
word:*ISS*RE*,totalWordCount:26,wrongGuessCountOfCurrentWord:2
Guess Letter:F
word:FISS*RE*,totalWordCount:26,wrongGuessCountOfCurrentWord:2
Guess Letter:U
word:FISSURE*,totalWordCount:26,wrongGuessCountOfCurrentWord:2
Guess Letter:D
word:FISSURED,totalWordCount:26,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*******
Guess Letter:E
word:*E***E*,totalWordCount:27,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*E***E*,totalWordCount:27,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*E***E*,totalWordCount:27,wrongGuessCountOfCurrentWord:2
Guess Letter:D
word:DE***ED,totalWordCount:27,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:DE**TED,totalWordCount:27,wrongGuessCountOfCurrentWord:2
Guess Letter:B
word:DEB*TED,totalWordCount:27,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:DEBATED,totalWordCount:27,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*******
Guess Letter:E
word:*******,totalWordCount:28,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*******,totalWordCount:28,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:***I***,totalWordCount:28,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:***I**S,totalWordCount:28,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:***I**S,totalWordCount:28,wrongGuessCountOfCurrentWord:3
Guess Letter:U
word:*U*I*US,totalWordCount:28,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:*U*IOUS,totalWordCount:28,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:*U*IOUS,totalWordCount:28,wrongGuessCountOfCurrentWord:4
Guess Letter:B
word:*UBIOUS,totalWordCount:28,wrongGuessCountOfCurrentWord:4
Guess Letter:D
word:DUBIOUS,totalWordCount:28,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:*******
Guess Letter:E
word:*****E*,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:**S**E*,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:**S*IE*,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:**S*IER,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:*US*IER,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:H
word:*USHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:*USHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:*USHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:*USHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:3
Guess Letter:M
word:*USHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:4
Guess Letter:P
word:PUSHIER,totalWordCount:29,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:*******
Guess Letter:E
word:E******,totalWordCount:30,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:E******,totalWordCount:30,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:E******,totalWordCount:30,wrongGuessCountOfCurrentWord:2
Guess Letter:R
word:E******,totalWordCount:30,wrongGuessCountOfCurrentWord:3
Guess Letter:L
word:E**L***,totalWordCount:30,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:E**LO**,totalWordCount:30,wrongGuessCountOfCurrentWord:3
Guess Letter:P
word:E*PLO**,totalWordCount:30,wrongGuessCountOfCurrentWord:3
Guess Letter:D
word:E*PLO**,totalWordCount:30,wrongGuessCountOfCurrentWord:4
Guess Letter:I
word:E*PLOI*,totalWordCount:30,wrongGuessCountOfCurrentWord:4
Guess Letter:T
word:E*PLOIT,totalWordCount:30,wrongGuessCountOfCurrentWord:4
Guess Letter:X
word:EXPLOIT,totalWordCount:30,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:******
Guess Letter:E
word:******,totalWordCount:31,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:******,totalWordCount:31,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O****,totalWordCount:31,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:*O****,totalWordCount:31,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:*O**N*,totalWordCount:31,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:*O*IN*,totalWordCount:31,wrongGuessCountOfCurrentWord:3
Guess Letter:G
word:*O*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:3
Guess Letter:W
word:*O*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:4
Guess Letter:C
word:*O*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:5
Guess Letter:P
word:*O*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:6
Guess Letter:T
word:*O*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:7
Guess Letter:B
word:BO*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:7
Guess Letter:D
word:BO*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:8
Guess Letter:R
word:BO*ING,totalWordCount:31,wrongGuessCountOfCurrentWord:9
Guess Letter:X
word:BOXING,totalWordCount:31,wrongGuessCountOfCurrentWord:9
*******************************New Word*******************************
word:*******
Guess Letter:E
word:*******,totalWordCount:32,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:***A**A,totalWordCount:32,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:***A*IA,totalWordCount:32,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:*R*A*IA,totalWordCount:32,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:CR*A*IA,totalWordCount:32,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:******
Guess Letter:E
word:****E*,totalWordCount:33,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:****E*,totalWordCount:33,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:***SE*,totalWordCount:33,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:***SE*,totalWordCount:33,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:***SE*,totalWordCount:33,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:**OSE*,totalWordCount:33,wrongGuessCountOfCurrentWord:3
Guess Letter:C
word:C*OSE*,totalWordCount:33,wrongGuessCountOfCurrentWord:3
Guess Letter:H
word:CHOSE*,totalWordCount:33,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:CHOSEN,totalWordCount:33,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:********
Guess Letter:E
word:E*E*****,totalWordCount:34,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:E*E*****,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:E*E*T***,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:E*E*TI**,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:E*ECTI**,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:E*ECTI*N,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:E*ECTION,totalWordCount:34,wrongGuessCountOfCurrentWord:1
Guess Letter:J
word:E*ECTION,totalWordCount:34,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:E*ECTION,totalWordCount:34,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:ERECTION,totalWordCount:34,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:********
Guess Letter:E
word:*E******,totalWordCount:35,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*E******,totalWordCount:35,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*E****S*,totalWordCount:35,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:*E****S*,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:*E**L*S*,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:*E**LAS*,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:M
word:*E**LASM,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:NE**LASM,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:NEO*LASM,totalWordCount:35,wrongGuessCountOfCurrentWord:2
Guess Letter:P
word:NEOPLASM,totalWordCount:35,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:******
Guess Letter:E
word:****E*,totalWordCount:36,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:****ER,totalWordCount:36,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:****ER,totalWordCount:36,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:****ER,totalWordCount:36,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*OO*ER,totalWordCount:36,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*OOTER,totalWordCount:36,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:*OOTER,totalWordCount:36,wrongGuessCountOfCurrentWord:3
Guess Letter:F
word:*OOTER,totalWordCount:36,wrongGuessCountOfCurrentWord:4
Guess Letter:H
word:HOOTER,totalWordCount:36,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:******
Guess Letter:E
word:******,totalWordCount:37,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:******,totalWordCount:37,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:****O*,totalWordCount:37,wrongGuessCountOfCurrentWord:2
Guess Letter:S
word:****O*,totalWordCount:37,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:*N**O*,totalWordCount:37,wrongGuessCountOfCurrentWord:3
Guess Letter:U
word:UN**O*,totalWordCount:37,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:UN**O*,totalWordCount:37,wrongGuessCountOfCurrentWord:4
Guess Letter:C
word:UNC*O*,totalWordCount:37,wrongGuessCountOfCurrentWord:4
Guess Letter:L
word:UNCLO*,totalWordCount:37,wrongGuessCountOfCurrentWord:4
Guess Letter:G
word:UNCLOG,totalWordCount:37,wrongGuessCountOfCurrentWord:4
*******************************New Word*******************************
word:******
Guess Letter:E
word:****E*,totalWordCount:38,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:****E*,totalWordCount:38,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:**S*E*,totalWordCount:38,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:**S*ED,totalWordCount:38,wrongGuessCountOfCurrentWord:1
Guess Letter:H
word:**SHED,totalWordCount:38,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:**SHED,totalWordCount:38,wrongGuessCountOfCurrentWord:2
Guess Letter:U
word:**SHED,totalWordCount:38,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:*ISHED,totalWordCount:38,wrongGuessCountOfCurrentWord:3
Guess Letter:F
word:FISHED,totalWordCount:38,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:********
Guess Letter:E
word:E*****E*,totalWordCount:39,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:E*****ES,totalWordCount:39,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:E*****ES,totalWordCount:39,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:E*****ES,totalWordCount:39,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:E*****ES,totalWordCount:39,wrongGuessCountOfCurrentWord:3
Guess Letter:L
word:E**L**ES,totalWordCount:39,wrongGuessCountOfCurrentWord:3
Guess Letter:O
word:E**L**ES,totalWordCount:39,wrongGuessCountOfCurrentWord:4
Guess Letter:F
word:E**L**ES,totalWordCount:39,wrongGuessCountOfCurrentWord:5
Guess Letter:C
word:E*CL**ES,totalWordCount:39,wrongGuessCountOfCurrentWord:5
Guess Letter:D
word:E*CL*DES,totalWordCount:39,wrongGuessCountOfCurrentWord:5
Guess Letter:U
word:E*CLUDES,totalWordCount:39,wrongGuessCountOfCurrentWord:5
Guess Letter:X
word:EXCLUDES,totalWordCount:39,wrongGuessCountOfCurrentWord:5
*******************************New Word*******************************
word:********
Guess Letter:E
word:*****E**,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:*****ES*,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:****TEST,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*A**TEST,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*A*NTEST,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:F
word:FA*NTEST,totalWordCount:40,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:FAINTEST,totalWordCount:40,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:***********
Guess Letter:E
word:***********,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:****I***I**,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:****IN**IN*,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:****IN**ING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*A**INA*ING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:*A*CINA*ING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:*A*CINATING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:F
word:FA*CINATING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:FASCINATING,totalWordCount:41,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:**********
Guess Letter:E
word:****E**E**,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:****E**ESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:N***E**ESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:N**BE**ESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:N**BE*LESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:M
word:N*MBE*LESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:N*MBERLESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:NUMBERLESS,totalWordCount:42,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:**********
Guess Letter:E
word:********E*,totalWordCount:43,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:********E*,totalWordCount:43,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:********ED,totalWordCount:43,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:********ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:*A*A****ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:*ATA****ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:CATA****ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:CATAL***ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:CATAL*G*ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:CATALOG*ED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
Guess Letter:U
word:CATALOGUED,totalWordCount:43,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:**********
Guess Letter:E
word:E**E*****E,totalWordCount:44,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:E**E*****E,totalWordCount:44,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:E**E*****E,totalWordCount:44,wrongGuessCountOfCurrentWord:2
Guess Letter:F
word:E**E*****E,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:R
word:E**ER*R**E,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:I
word:E**ER*RI*E,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:N
word:EN*ER*RI*E,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:P
word:EN*ERPRI*E,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:S
word:EN*ERPRISE,totalWordCount:44,wrongGuessCountOfCurrentWord:3
Guess Letter:T
word:ENTERPRISE,totalWordCount:44,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:*********
Guess Letter:E
word:***E*****,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:S**E*****,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:S**ER****,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:SU*ER****,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:P
word:SUPER****,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:SUPER***A,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:SUPERN**A,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:SUPERNO*A,totalWordCount:45,wrongGuessCountOfCurrentWord:0
Guess Letter:V
word:SUPERNOVA,totalWordCount:45,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:**********
Guess Letter:E
word:*E*****E*E,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*E*****ERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:M
word:ME*****ERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:MES*S**ERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:H
word:MES*S*HERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:MESOS*HERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
Guess Letter:P
word:MESOSPHERE,totalWordCount:46,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:************
Guess Letter:E
word:***********E,totalWordCount:47,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:***********E,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:***A****A**E,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:***A****A*LE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*N*A****A*LE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:U
word:UN*A****A*LE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:B
word:UN*A****ABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:UN*AT***ABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:F
word:UNFAT***ABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:H
word:UNFATH**ABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:UNFATH*MABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:UNFATHOMABLE,totalWordCount:47,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:***********
Guess Letter:E
word:*E***E*****,totalWordCount:48,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*E***E*****,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*EN**EN****,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*ENI*EN*I**,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:*ENITENTI**,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*ENITENTIA*,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:*ENITENTIAL,totalWordCount:48,wrongGuessCountOfCurrentWord:1
Guess Letter:P
word:PENITENTIAL,totalWordCount:48,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:************
Guess Letter:E
word:*E*******E**,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:*E***S***E**,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*E*R*S*R*E**,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:*EUR*SUR*E**,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:NEUR*SUR*E*N,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:NEUROSUR*EON,totalWordCount:49,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:NEUROSURGEON,totalWordCount:49,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:*********
Guess Letter:E
word:*********,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:******I**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*****NI**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:*O***NI**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:*O*C*NI**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*O*CANI**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:*OLCANI**,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*OLCANIS*,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:*OLCANISM,totalWordCount:50,wrongGuessCountOfCurrentWord:1
Guess Letter:V
word:VOLCANISM,totalWordCount:50,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*********
Guess Letter:E
word:*********,totalWordCount:51,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:I****I***,totalWordCount:51,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:I****I***,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:I****I*L*,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:Y
word:I****I*LY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:I*A**I*LY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:B
word:I*A**IBLY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:D
word:I*A*DIBLY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:INA*DIBLY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
Guess Letter:U
word:INAUDIBLY,totalWordCount:51,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:**********
Guess Letter:E
word:**********,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*******I**,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*******IN*,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:*******ING,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*A*A***ING,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:*A*AL**ING,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*A*AL*SING,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:CA*AL*SING,totalWordCount:52,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:CA*AL*SING,totalWordCount:52,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*********
Guess Letter:E
word:*********,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:******I**,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:**N***IN*,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:**N***ING,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:*ON*O*ING,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:CON*O*ING,totalWordCount:53,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:CON*O*ING,totalWordCount:53,wrongGuessCountOfCurrentWord:2
Guess Letter:V
word:CON*O*ING,totalWordCount:53,wrongGuessCountOfCurrentWord:3
Guess Letter:L
word:CON*OLING,totalWordCount:53,wrongGuessCountOfCurrentWord:3
Guess Letter:S
word:CONSOLING,totalWordCount:53,wrongGuessCountOfCurrentWord:3
*******************************New Word*******************************
word:*********
Guess Letter:E
word:**E*E**E*,totalWordCount:54,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:**E*E**E*,totalWordCount:54,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:**E*E**E*,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:D
word:**E*E**ED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:**E*E*TED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:**ELE*TED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:**ELECTED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:N
word:*NELECTED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
Guess Letter:U
word:UNELECTED,totalWordCount:54,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:************
Guess Letter:E
word:************,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:***I***I****,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:***I*A*I**A*,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:***I*A*I*NA*,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:**TI*ATI*NA*,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:*OTI*ATIONA*,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:*OTI*ATIONAL,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:MOTI*ATIONAL,totalWordCount:55,wrongGuessCountOfCurrentWord:1
Guess Letter:V
word:MOTIVATIONAL,totalWordCount:55,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:************
Guess Letter:E
word:**********E*,totalWordCount:56,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:********S*E*,totalWordCount:56,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:********S*E*,totalWordCount:56,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:********S*E*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:H
word:********SHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:******L*SHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:***O**L*SHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:*CCO**L*SHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:ACCO**L*SHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:ACCO**LISHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:M
word:ACCOM*LISHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:P
word:ACCOMPLISHE*,totalWordCount:56,wrongGuessCountOfCurrentWord:2
Guess Letter:D
word:ACCOMPLISHED,totalWordCount:56,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:**********
Guess Letter:E
word:**********,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:***I***I**,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:***I***I*N,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:***I*A*I*N,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:***I*ATI*N,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:O**I*ATION,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:B
word:OB*I*ATION,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:OB*IGATION,totalWordCount:57,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:OBLIGATION,totalWordCount:57,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:***********
Guess Letter:E
word:*********E*,totalWordCount:58,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:*******S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*******S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:*****R*S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*****R*S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:***O*R*S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:***OCR*S*ES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:I
word:***OCRISIES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:H
word:H**OCRISIES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:P
word:H*POCRISIES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
Guess Letter:Y
word:HYPOCRISIES,totalWordCount:58,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:************
Guess Letter:E
word:*********E**,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:******S**E**,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*N***NS**EN*,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:IN***NSI*EN*,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:INT**NSI*ENT,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:INT*ANSI*ENT,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:INT*ANSIGENT,totalWordCount:59,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:INTRANSIGENT,totalWordCount:59,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:***********
Guess Letter:E
word:********E**,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:S**S****E*S,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:S**S**I*E*S,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:S**S*RI*ERS,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:S*BS*RIBERS,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:C
word:S*BSCRIBERS,totalWordCount:60,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:SUBSCRIBERS,totalWordCount:60,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:*************
Guess Letter:E
word:***E******E**,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:***E****S*ESS,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:***E****SNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:***E***USNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:***E**OUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:***E*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:***E*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:***E*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:*A*E*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:*ACE*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:2
Guess Letter:F
word:FACE*IOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:FACETIOUSNESS,totalWordCount:61,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*************
Guess Letter:E
word:E****E***E***,totalWordCount:62,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:E****E***E***,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:E****EN**EN*N,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:E****ENO*ENON,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:P
word:EP*P*ENO*ENON,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:H
word:EP*PHENO*ENON,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:EPIPHENO*ENON,totalWordCount:62,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:EPIPHENOMENON,totalWordCount:62,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:***************
Guess Letter:I
word:**I*****I******,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*NIN**N*I*N****,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:*NIN**N*I*N*LL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:*NINT*NTI*N*LL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*NINT*NTI*NALL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:*NINTENTI*NALL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:*NINTENTIONALL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:UNINTENTIONALL*,totalWordCount:63,wrongGuessCountOfCurrentWord:0
Guess Letter:Y
word:UNINTENTIONALLY,totalWordCount:63,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:********************
Guess Letter:E
word:****E***************,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:****E**************S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:***NE*********N****S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*A*NE*********NA***S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:D
word:*A*NE****D**D*NA***S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:M
word:MA*NE****D**D*NAM**S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:MA*NE*O**D*OD*NAM**S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:Y
word:MA*NE*O*YD*ODYNAM**S,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:C
word:MA*NE*O*YD*ODYNAM*CS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:MAGNE*O*YD*ODYNAM*CS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:H
word:MAGNE*OHYD*ODYNAM*CS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:MAGNE*OHYD*ODYNAMICS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:MAGNE*OHYDRODYNAMICS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:MAGNETOHYDRODYNAMICS,totalWordCount:64,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:**************
Guess Letter:E
word:*E************,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:*E*****I***I**,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:*E*****I**TI**,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*E***A*I*ATI**,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*E***A*I*ATI*N,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:*E***A*I*ATION,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:*E**LA*I*ATION,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:RE**LARI*ATION,totalWordCount:65,wrongGuessCountOfCurrentWord:0
Guess Letter:Z
word:RE**LARI*ATION,totalWordCount:65,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:**************
Guess Letter:E
word:**************,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*I**I***I**I**,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:*I**I*G*I**I*G,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*I**ING*I**ING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*IS*ING*IS*ING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:DIS*ING*IS*ING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:H
word:DIS*ING*ISHING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:DISTING*ISHING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
Guess Letter:U
word:DISTINGUISHING,totalWordCount:66,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*************
Guess Letter:E
word:****E**E***E*,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:*R**E**E*R*E*,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:*R**E**EAR*E*,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:BR**E**EAR*E*,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:D
word:BR**E**EAR*ED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:H
word:BR**E*HEAR*ED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:K
word:BR*KE*HEAR*ED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:BR*KENHEAR*ED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:O
word:BROKENHEAR*ED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:BROKENHEARTED,totalWordCount:67,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:**************
Guess Letter:E
word:**************,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*I***I*I***I**,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:*I***I*IN**IN*,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:*I***I*INA*IN*,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:*I*C*I*INA*IN*,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:DI*C*I*INA*IN*,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:DI*C*I*INA*ING,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:M
word:DI*C*IMINA*ING,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:DI*CRIMINA*ING,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:DISCRIMINA*ING,totalWordCount:68,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:DISCRIMINATING,totalWordCount:68,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:**************
Guess Letter:E
word:**************,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:I********I*I**,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:I*T***T**I*IT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:I*T*A*TA*I*IT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:B
word:I*T*A*TABI*IT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:I*T*ACTABI*IT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:I*T*ACTABILIT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:INT*ACTABILIT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:INTRACTABILIT*,totalWordCount:69,wrongGuessCountOfCurrentWord:1
Guess Letter:Y
word:INTRACTABILITY,totalWordCount:69,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*************
Guess Letter:E
word:******E******,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:****S*E*S****,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:*N**S*ENS****,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:IN*IS*ENS****,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:IN*IS*ENSA***,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:IN*IS*ENSAB**,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:D
word:INDIS*ENSAB**,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:INDIS*ENSABL*,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:P
word:INDISPENSABL*,totalWordCount:70,wrongGuessCountOfCurrentWord:0
Guess Letter:Y
word:INDISPENSABLY,totalWordCount:70,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:**************
Guess Letter:E
word:**************,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:****I******I**,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:***TI***T**I*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:**RTI***T*RI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:U
word:**RTI*U*TURI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:C
word:**RTICU*TURI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:H
word:H*RTICU*TURI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:L
word:H*RTICULTURI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:HORTICULTURI*T,totalWordCount:71,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:HORTICULTURIST,totalWordCount:71,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*****************
Guess Letter:I
word:I**I**I***I******,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:IN*I**IN**I******,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:IN*IS*IN**IS*****,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:IN*IS*IN**IS*A***,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:B
word:IN*IS*IN**IS*AB**,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:D
word:INDIS*IN**IS*AB**,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:G
word:INDIS*ING*IS*AB**,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:H
word:INDIS*ING*ISHAB**,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:INDIS*ING*ISHABL*,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:INDISTING*ISHABL*,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:U
word:INDISTINGUISHABL*,totalWordCount:72,wrongGuessCountOfCurrentWord:0
Guess Letter:E
word:INDISTINGUISHABLE,totalWordCount:72,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:*************
Guess Letter:E
word:*************,totalWordCount:73,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:*********I***,totalWordCount:73,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:*********I***,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:O
word:*O*O*****I***,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:A
word:*O*O**A**I*A*,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:P
word:*OPO**AP*I*A*,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:C
word:*OPO**AP*ICA*,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:G
word:*OPOG*AP*ICA*,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:H
word:*OPOG*APHICA*,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:L
word:*OPOG*APHICAL,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:R
word:*OPOGRAPHICAL,totalWordCount:73,wrongGuessCountOfCurrentWord:2
Guess Letter:T
word:TOPOGRAPHICAL,totalWordCount:73,wrongGuessCountOfCurrentWord:2
*******************************New Word*******************************
word:*************
Guess Letter:E
word:***E****E*E**,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:***E****E*ESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:***E****ENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:I
word:I**E*I**ENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:M
word:IMME*I**ENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:IMME*IA*ENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:D
word:IMMEDIA*ENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:IMMEDIATENESS,totalWordCount:74,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:*************
Guess Letter:E
word:*E*******E***,totalWordCount:75,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:*E*******E***,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:NE*******E*N*,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:NE**O****EON*,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:NE*RO**R*EON*,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:S
word:NE*ROS*R*EONS,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:U
word:NEUROSUR*EONS,totalWordCount:75,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:NEUROSURGEONS,totalWordCount:75,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:**************
Guess Letter:E
word:****E**E******,totalWordCount:76,wrongGuessCountOfCurrentWord:0
Guess Letter:N
word:****E**E**N***,totalWordCount:76,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:**S*E**E**N***,totalWordCount:76,wrongGuessCountOfCurrentWord:0
Guess Letter:R
word:**S*E**E**N***,totalWordCount:76,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:***************
Guess Letter:I
word:*********I*****,totalWordCount:77,wrongGuessCountOfCurrentWord:0
Guess Letter:L
word:**L******I***L*,totalWordCount:77,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:**L******I***L*,totalWordCount:77,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:***************
Guess Letter:I
word:*****I*****I***,totalWordCount:78,wrongGuessCountOfCurrentWord:0
Guess Letter:T
word:*T**TI*****I***,totalWordCount:78,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:ST**TI*****I***,totalWordCount:78,wrongGuessCountOfCurrentWord:0
Guess Letter:A
word:ST*ATI**A**I*A*,totalWordCount:78,wrongGuessCountOfCurrentWord:0
*******************************New Word*******************************
word:*************
Guess Letter:E
word:*E*********E*,totalWordCount:79,wrongGuessCountOfCurrentWord:0
Guess Letter:S
word:*E*********E*,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:RE******R**E*,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:REI**I**R**E*,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:REI**I**RA*E*,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:D
word:REI**I**RA*ED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:G
word:REI**IG*RA*ED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:REIN*IG*RA*ED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:REIN*IGORA*ED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:REIN*IGORATED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
Guess Letter:V
word:REINVIGORATED,totalWordCount:79,wrongGuessCountOfCurrentWord:1
*******************************New Word*******************************
word:*************
Guess Letter:E
word:*************,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:I
word:**I***I***I**,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:A
word:**I*A*I*A*I**,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:N
word:**I*A*I*A*I*N,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:T
word:**I*ATI*ATI*N,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:O
word:**I*ATI*ATION,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:P
word:P*I*ATI*ATION,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:R
word:PRI*ATI*ATION,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:V
word:PRIVATI*ATION,totalWordCount:80,wrongGuessCountOfCurrentWord:1
Guess Letter:Z
word:PRIVATI*ATION,totalWordCount:80,wrongGuessCountOfCurrentWord:2
*******************************End Game*******************************
