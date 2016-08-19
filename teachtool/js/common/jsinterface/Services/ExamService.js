/// <reference path="../Cmd/ExamCmd.js" />
/*
* @author: haowu3
* @date: 2015/7/23
* @description: 考试流程服务(教师工具版)
*/
BuildLibrary.loadJS('/TeachTool/js/common/jsinterface/Cmd/SysCmd.js');
BuildLibrary.loadJS('/TeachTool/js/common/jsinterface/Cmd/ExamCmd.js');

var ExamService = function () {

}

ExamService.Play = function (callBackData, fileName) {
    /// <summary>调用客户端进行音频播放</summary>
    /// <param name="callBackData" type="String">回调标识数据</param> 
    /// <param name="fileName" type="String">音频文件名或者是获取文件名的函数</param>
    fileName = decodeURI(fileName);
    ExamCmd.Play(callBackData + "|" + fileName, function (result) {
        if (!result) {
            if (callBackData) {
                eval(callBackData + '()');
            }
            //ExamService.StopPlay();
            return;
        }
        result = $.evalJSON(result);
        if (!result.flag) {
            for (var i = 0; i < Errors.errors.length; i++) {
                if (result.errorCode == Errors.errors[i].errorCode) {
                    comm.ShowAlertBox('温馨提示', Errors.errors[i].prompt, true);
                    return false;
                }
            }
        }
        return true;
    });
}

ExamService.SyncPlay = function (fileName) {
    /// <summary>调用客户端进行音频播放（同步）</summary>
    /// <param name="fileName" type="String">音频文件名</param>
    ExamCmd.SyncPlay(fileName);
}

ExamService.SetVolume = function (volume) {
    /// <summary>调用客户端进行设置音量</summary>
    /// <param name="volume" type="String">音量</param>
    ExamCmd.setvolume(volume);
}

ExamService.StopPlay = function (callback) {
    /// <summary>让客户端停止音频播放</summary>
    ExamCmd.StopPlay("", function () {
        callback();
    });
}

ExamService.PlayPause = function () {
    /// <summary>暂停播放</summary>
    ExamCmd.pause("");
}

ExamService.PlayResume = function () {
    /// <summary>继续播放</summary>
    ExamCmd.resume("");
}

ExamService.Getdata = function (sourceFileName) {
    /// <summary>获取数据</summary>
    /// <returns type="class">当前 JSON对象</returns>
    console.log("start get data");
    var json = ExamCmd.getdata(sourceFileName);
    console.log("get data end");
    var jsonObj = eval("(" + json + ")");
    return eval(jsonObj);
}

ExamService.SaveFileContent = function (fileName, content, callback) {
    /// <summary>保存内容到文件</summary>
    /// <returns ></returns>
    console.log("SaveFileContent");
    var res = ExamCmd.saveFileContent(fileName + '|' + content, function () {
        callback();
    });
    return res == 'true';
}

ExamService.GetFileContent = function (fileName) {
    /// <summary>保存内容到文件</summary>
    /// <returns ></returns>
    console.log("GetFileContent");
    return ExamCmd.getFileContent(fileName);
}

/* ----------------------播放音频回调函数-------------------------------- */

function OnPlayEnd(callBackData) {
    if (callBackData) {
        eval(callBackData + '()');
    }
}

function OnWaitTimeEnd(callBackData) {
    if (callBackData)
        eval(callBackData + '()');
}

function OnStopAllEnd() {
    //alert("STOP ALL");

};