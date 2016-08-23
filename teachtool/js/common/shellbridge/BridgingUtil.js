/*
* @author: szsheng
* @date: 2013/4/2
* @description: 与外壳通信
*/

var isMSIE = false;

function documentReady() { }

function isIEBrowse() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("msie") > 0;
}

var callClient;
if (isIEBrowse()) {
    callClient = callClient_msie;
    isMSIE = true;
} else {
    callClient = callClient_cef;
    //callClient = callClient;
    isMSIE = false;
}

/**
 * 调用客户端命令
 * @param {string} cmdRegion 模块名称
 * @param {string} cmdName 命令名
 * @param {string} cmdArgs 多个参数，参数间使用|分隔
 * @param {string=} cmdType 命令类别
 * @returns {string}
 */
//function callClient_cef(cmdRegion, cmdName, cmdArgs, cmdType) {
//    //function callClient(cmdRegion, cmdName, cmdArgs, cmdType) {
//    //向客户端发送命令
//    var retval;
//    try {
//        //通过发送cmd的方式调用client函数，返回值为client函数的执行结果
//        var delObj = cef.message.sender();
//        retval = delObj.sendcmd(cmdRegion, cmdName, cmdArgs, cmdType);
//        return retval;
//    } catch (ex) {
//        alert(ex);
//    }
//}


/**
 * 调用客户端命令
 * @param {string} cmdRegion 模块名称
 * @param {string} cmdName 命令名
 * @param {string} cmdArgs 多个参数，参数间使用|分隔
 * @param {string=} cmdType 命令类别    0(执行完了可以立即销毁),1,2(内部有多线程,不能立即销毁)
 * @returns {string}
 */
function callClient_cef(cmdRegion, cmdName, cmdArgs, cmdType, callback) {
    var funcName = cmdRegion + '.' + cmdName;

    if (callback) {
        var wrapper = function (name, args) {
            //删除注册的函数
            //cef.message.removeMessageCallback(funcName, this);
            callback(args[0]);
            //console.log('name:',name,'args:',args);
        };
        cef.message.sendMessage(funcName, [cmdArgs, cmdType.toString()]);
        cef.message.setMessageCallback(funcName, wrapper);
    } else {
        //无回调
        cef.message.sendMessage(funcName, [cmdArgs, cmdType.toString()]);

    }
}


function callClient_msie(cmdRegion, cmdName, cmdArgs, cmdType) { //向客户端发送命令
    try {
        BridgingUtil.setDataToDOM(cmdArgs);
        window.location = "trig:/" + "/" + cmdRegion + "/" + cmdName + "/" + cmdType + "/";
        var argsJson = BridgingUtil.getDataFromDOM();
        return argsJson;
        //return argsJson.toObject();
    }
    catch (ex) { alert(ex.message); }
}

function initexchangehidden() {
    BridgingUtil.init();
}

function callpage(cmdname) { //客户端调用js方法
    var argsJson = BridgingUtil.getDataFromDOM();
    argsJson = argsJson.replace(/'/g, "\\'");    // 替换字符串中的所有单引号
    argsJson = argsJson.replace(/\r/g, "\\r").replace(/\n/g, "\\n"); // 替换字符串中的所有回车和换行符号
    argsJson = "'" + argsJson + "'";
    try {
        var _result = eval(cmdname + '(' + argsJson + ')');
        BridgingUtil.setDataToDOM(_result);
    }
    catch (ex) {
        alert(ex.message);
    }
}

var ClientGlobvar = {};
ClientGlobvar.get = function () {
    return GetClientData("getglobvar");
};
ClientGlobvar.set = function (val) {
    SaveClientData("saveglobvar", val);
};


function GetClientGlobvar() {
    return GetData("getglobvar");
}

function GetClientData(key) { //从客户端获取数据 
    if (!isIEBrowse())
        return callClient("getdata", key);

    BridgingUtil.Clear();
    callClient("getdata", key);
    return BridgingUtil.getDataFromDOM();
}

function SaveClientData(key, value) { //保存数据到客户端
    var tmpStr = key + "_@#@$@#@_" + value;
    if (!isIEBrowse())
        return callClient("savedata", tmpStr);

    BridgingUtil.Clear();
    callClient("savedata", tmpStr);
    return BridgingUtil.getDataFromDOM();
}

function GetClientVariable(key) { //从客户端获取内存变量
    if (!isIEBrowse())
        return callClient("gethashvalue", key);

    BridgingUtil.Clear();
    callClient("gethashvalue", key);
    return BridgingUtil.getDataFromDOM();
}

function SaveClientVariable(key, value) { //保存数据至客户端内存变量
    var tmpStr = key + "_@#@$@#@_" + value;
    if (!isIEBrowse())
        return callClient("savehashvalue", tmpStr);

    BridgingUtil.Clear();
    callClient("savehashvalue", tmpStr);
    return BridgingUtil.getDataFromDOM();
}


/* ---------------------------------------------------------------------------------------- */
var BridgingUtil = {}; //与客户端通信桥接
BridgingUtil.exchangeElementId = "_pscp_exchangedata_hide_";
BridgingUtil.initialized = false;
BridgingUtil.init = function () {
    if (this.initialized) return;
    var ele = document.createElement("input");
    ele.id = this.exchangeElementId;
    ele.type = "hidden";
    document.body.appendChild(ele);
    this.initialized = true;
};
BridgingUtil.getDataFromDOM = function () {
    this.init();
    var ele = document.getElementById(this.exchangeElementId);
    return ele.value;
};
BridgingUtil.setDataToDOM = function (txt) {
    this.init();
    var ele = document.getElementById(this.exchangeElementId);
    ele.value = txt;
};
BridgingUtil.Clear = function () {
    if (this.initialized) {
        this.setDataToDOM("");
    }
    else {
        this.init();
    }
};
