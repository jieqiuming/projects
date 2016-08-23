/*
* @author: haowu3
* @date: 2015/6/25
* @description: 教师工具相关服务
*/
BuildLibrary.loadJS('/TeachTool/js/common/jsinterface/Cmd/ExamCmd.js');

var TeachService = function () { };

TeachService.closeApp = function (callback) {
    if(typeof ExamCmd == 'undefined') return;
    ExamCmd.CloseApp("", function () {
        if(typeof callback == 'function')
            callback();
    });
};

TeachService.login = function (userName, passWord, isRemember, callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.login(userName + '|' + passWord + '|' + isRemember, function (result) {
        result = $.evalJSON(result);
        console.log(result);
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.login:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.remember = function (callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.remember('', function (result) {
        result = $.evalJSON(result);
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.remember:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.importPaperPackage = function (callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.importPaperPackage('', function (result) {
        result = $.evalJSON(result);
        console.log(result);
        if (result.flag) {
            callback && callback.call(this, result);//注意
        }
        else {
            console.error('TeachService.importPaperPackage:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.getPaperPackageList = function (callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.getPaperPackageList('', function (result) {
        result = $.evalJSON(result);
        
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.getPaperPackageList:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.deletePaperPackage = function (paperId, callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.deletePaperPackage(paperId, function (result) {
        result = $.evalJSON(result);
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.deletePaperPackage:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.getPaperPackageData = function (paperId, callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.getPaperPackageData(paperId, function (result) {
        result = $.evalJSON(result);
        
        if (result.flag) {
            callback && callback.call(this, result);//注意
        }
        else {
            console.error('TeachService.getPaperPackageData:' + result);
            error && error.call(this, result);
        }
    });
}

TeachService.record = function (paperId, controlId, callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.record(paperId + '|' + controlId, function (result) {
        result = $.evalJSON(result);
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.record:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}

TeachService.recordEnd = function (callback) {
    if(typeof ExamCmd == 'undefined') return;
    
    ExamCmd.recordEnd('', function (result) {
        result = $.evalJSON(result);
        if (result.flag) {
            callback && callback.call(this, result.data);
        }
        else {
            console.error('TeachService.recordEnd:' + result);
            error && error.call(this, result.errorMsg);
        }
    });
}