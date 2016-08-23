
/* 录音目的 */
var TRecordPurpose = {
    Tp_JustRecord: 0, // 只是录音
    Tp_4Eval: 1, // 为了评测
    Tp_4AutoTestDev: 2, // 为了自动试音
    TP_4DirectEvalSnd: 5 // 为直接评测语音
};


/*错误枚举*/
var Errors = {
    "errors": [
        { "errorCode": "10001", "description": "文件不存在", "prompt": "试卷加载失败，请重试！" },
	    { "errorCode": "10002", "description": "播放异常", "prompt": "试卷加载失败，请重试！" },
	    { "errorCode": "10003", "description": "文件不存在", "prompt": "您好，未能找到播放所需的音频！" },
	    { "errorCode": "10004", "description": "播放异常", "prompt": "您好，未能找到播放所需的音频！" }
    ]
};

var Tips = {
    Paper: {
        Fail: "您当前没有使用该学习包的权限，请联系技术人员开通权限。"
    }
};