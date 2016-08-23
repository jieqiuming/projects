BuildLibrary.loadJS('/TeachTool/js/common/shellbridge/BridgingUtil.js');

//与外壳交互的 组件操作
var ExamCmd = function () {
}

// dll中命令的命名空间
ExamCmd._namespace = "ExamCmd";

ExamCmd.CloseApp = function (args, callback, error) {
    
    return callClient(ExamCmd._namespace, 'closeapp', args, 0, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.ShowSaveFileDialog = function (args, callback, error) {
    /// <summary>获取当前试题数据</summary>
    return callClient(ExamCmd._namespace, 'showsavedialog', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.ShowSaveFileDialog:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.ExportFile = function (args, callback, error) {
    /// <summary>导出文件</summary>
    return callClient(ExamCmd._namespace, 'exportfile', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.ExportFile:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.DeleteTaskFile = function (args, callback, error) {
    /// <summary>删除任务</summary>
    return callClient(ExamCmd._namespace, 'deletetaskfile', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.DeleteTaskFile:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.getRootDirectory = function (args, callback, error) {
    /// <summary>调用外壳进行音频播放</summary>
    return callClient(ExamCmd._namespace, "getrootpath", args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.getRootDirectory:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.Play = function (args, callback, error) {
    /// <summary>调用外壳进行音频播放</summary>
    return callClient(ExamCmd._namespace, "Play", args, 1, function (protocol) {
        //var result = protocol.toObject();
        //if (result.flag == 1) {
        //    callback && callback.call(this, result.data);
        //}
        //else {
        //    //alert(result.errorMsg);
        //showDialog(result.errorMsg, "", "", 1);
        //    console.error('ExamCmd.Play:' + protocol);
        //    error && error.call(this, result.errorMsg);
        //}
        callback(protocol);
    });
}

ExamCmd.ExportStudentExcel = function (args, callback, error) {
    /// <summary>导出学生报告excel</summary>
    return callClient(ExamCmd._namespace, "exportstudentexcel", args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.ExportStudentExcel:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.CreateTempFile = function (callback, error) {
    /// <summary>导出学生报告excel</summary>
    return callClient(ExamCmd._namespace, "createtempfile", '', 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.CreateTempFile:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.SyncPlay = function (args, callback, error) {
    /// <summary>调用外壳进行音频播放（同步）</summary>
    callClient(ExamCmd._namespace, "SyncPlay", args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.SyncPlay:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.setvolume = function (args, callback, error) {
    /// <summary>调用外壳进行设置音量</summary>
    callClient(ExamCmd._namespace, "setvolume", args, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.setvolume:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.StopPlay = function (args, callback, error) {
    /// <summary>让外壳停止音频播放</summary>
    callClient(ExamCmd._namespace, "StopPlay", args, 1, function (protocol) {
        //var result = protocol.toObject();
        //if (result.flag == 1) {
        //    callback && callback.call(this, result.data);
        //}
        //else {
        //    //alert(result.errorMsg);
        //showDialog(result.errorMsg, "", "", 1);
        //    console.error('ExamCmd.StopPlay:' + protocol);
        //    error && error.call(this, result.errorMsg);
        //}
        callback();
    });
}

ExamCmd.pause = function (args, callback, error) {
    /// <summary>暂停播放</summary>
    callClient(ExamCmd._namespace, "pause", args, 0, function (protocol) {
        //var result = protocol.toObject();
        //if (result.flag == 1) {
        //    callback && callback.call(this, result.data);
        //}
        //else {
        //    //alert(result.errorMsg);
        //showDialog(result.errorMsg, "", "", 1);
        //    console.error('ExamCmd.pause:' + protocol);
        //    error && error.call(this, result.errorMsg);
        //}
        //callback();
    });
}

ExamCmd.resume = function (args, callback, error) {
    /// <summary>继续播放</summary>
    callClient(ExamCmd._namespace, "resume", args, 0, function (protocol) {
        //var result = protocol.toObject();
        //if (result.flag == 1) {
        //    callback && callback.call(this, result.data);
        //}
        //else {
        //    //alert(result.errorMsg);
        //showDialog(result.errorMsg, "", "", 1);
        //    console.error('ExamCmd.resume:' + protocol);
        //    error && error.call(this, result.errorMsg);
        //}
        //callback();
    });
}

ExamCmd.getdata = function (args, callback, error) {
    /// <summary>获取当前试题数据</summary>
    callClient(ExamCmd._namespace, 'getdata', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.getdata:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.getuistatus = function (args, callback, error) {
    /// <summary>获取是否能进入试卷讲评和学生报告</summary>
    callClient(ExamCmd._namespace, 'getuistatus', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.getuistatus:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
ExamCmd.ConvertTaskList = function (args, callback, error) {
    /// <summary>获取当前试题数据</summary>
    callClient(ExamCmd._namespace, 'gettasklist', "", 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.ConvertTaskList:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.saveFileContent = function (args, callback, error) {
    /// <summary>获取当前试题数据</summary>
    callClient(ExamCmd._namespace, 'savefilecontent', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.saveFileContent:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.getFileContent = function (args, callback, error) {
    /// <summary>获取当前试题数据</summary>
    callClient(ExamCmd._namespace, 'getfilecontent', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.getFileContent:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.UploadData = function (args, callback, error) {
    /// <summary>初始化上传</summary>
    callClient(ExamCmd._namespace, 'uploaddata', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            callback();
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.Uploaddata:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.GetUploadProgress = function (callback, error) {
    /// <summary>获取当前上传进度信息</summary>
    callClient(ExamCmd._namespace, 'getuploadprogress', '', 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.GetUploadProgress:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.SignUp = function (args, callback, error) {
    /// <summary>提交老师注册信息</summary>
    callClient(ExamCmd._namespace, 'signup', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.SignUp:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.GetTeacherInfo = function (callback, error) {
    /// <summary>提交老师注册信息</summary>
    callClient(ExamCmd._namespace, 'getteacherinfo', '', 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.GetTeacherInfo:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.downloadresult = function (callback, error) {
    /// <summary>下载成绩到本地</summary>
    callClient(ExamCmd._namespace, 'downloadresult', '', 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.downloadresult:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.downloadreport = function (args, callback, error) {
    /// <summary>下载成绩</summary>
    callClient(ExamCmd._namespace, 'downloadreport', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.downloadreport:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.downloadzip = function (args, callback, error) {
    /// <summary>批量下载成绩</summary>
    callClient(ExamCmd._namespace, 'downloadzip', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.downloadzip:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
//导出成绩列表
ExamCmd.downloadexcel = function (args, callback, error) {
    callClient(ExamCmd._namespace, 'downloadexcel', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.downloadexcel:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.stopupload = function (args, callback, error) {
    /// <summary>停止上传</summary>
    callClient(ExamCmd._namespace, 'stopupload', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.stopupload:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
ExamCmd.getArea = function (args, callback, error) {
    /// <summary>获取地区信息</summary>
    callClient(ExamCmd._namespace, 'getarea', args, 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.getArea:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

ExamCmd.checkregist = function (callback, error) {
    /// <summary>检查加密狗是否注册</summary>
    callClient(ExamCmd._namespace, 'checkregist', "", 1, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            //alert(result.errorMsg);
            showDialog(result.errorMsg, "", "", 1);
            console.error('ExamCmd.checkregist:' + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}


/*****教师工具开始 2015-07-08*****/
ExamCmd.login = function (args, callback, error) {
    /// <summary>登录</summary>
    callClient(ExamCmd._namespace, "login", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.remember = function (args, callback, error) {
    /// <summary>获取记住的用户信息</summary>
    callClient(ExamCmd._namespace, "remember", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.importPaperPackage = function (args, callback, error) {
    /// <summary>导入试卷包</summary>
    callClient(ExamCmd._namespace, "importpaperpackage", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.getPaperPackageList = function (args, callback, error) {
    /// <summary>获取试卷包列表</summary>
    callClient(ExamCmd._namespace, "getpaperpackagelist", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.deletePaperPackage = function (args, callback, error) {
    /// <summary>删除试卷包列表</summary>
    callClient(ExamCmd._namespace, "deletepaperpackage", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.getPaperPackageData = function (args, callback, error) {
    /// <summary>获取试卷包列表</summary>
    callClient(ExamCmd._namespace, "getpaperpackagedata", args, 1, function (protocol) {        
        callback(protocol);
    });
}

ExamCmd.record = function (args, callback, error) {
    /// <summary>录音开始</summary>
    callClient(ExamCmd._namespace, "record", args, 1, function (protocol) {
        callback(protocol);
    });
}

ExamCmd.recordEnd = function (args, callback, error) {
    /// <summary>录音结束</summary>
    callClient(ExamCmd._namespace, "recordend", args, 1, function (protocol) {
        callback(protocol);
    });
}
/*****教师工具结束*****/