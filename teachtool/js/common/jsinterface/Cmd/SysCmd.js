BuildLibrary.loadJS('/TeachTool/js/common/shellbridge/BridgingUtil.js');

/**迁移说明
 *1.如果注释上面有方法名称的表示是原来的方法名
 *2.将所有方法都迁移到SysCmd对象下面
 *
 */

// SysCmd对象
var SysCmd = function () {
}

SysCmd.namespace = "SysCmd";

/**
 * 发送一条sql查询数据库
 * @param sql 查询数据的SQL语句
 * @return Result对象JSON  
 */
SysCmd.query = function (sql, callback, error) {
    callClient(SysCmd.namespace, 'opensql', sql, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            showDialog(result.errorMsg);
            console.log("SysCmd.query Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

/**
 * 执行一条SQL语句
 * @param sql 需要执行的SQL语句
 * @return Result对象JSON
 */
SysCmd.execute = function (sql, callback, error) {
    callClient(SysCmd.namespace, 'execsql', sql, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            showDialog(result.errorMsg);
            console.log("SysCmd.execute Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
/**
 * 操作用户信息
 * userInfo
 */
SysCmd.user = function (args, callback, error) {
    return callClient(SysCmd.namespace, 'user', args, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.user Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
/**
* 获取配置中的链接
*/
SysCmd.getDirect = function (key, callback, error) {
    return callClient(SysCmd.namespace, 'getdirect', key, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.getDirect Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}


/** ---没有用到 被注释 ----yunyang 2013-7-5
* 获取客户端配置信息
* @param key 配置的关键字
* @param Result对象JSON
*/
/*function getConfig(key) {
    
}*/
/**
 * 设置客户端的配置信息。
 * @param key 配置的关键字
 * @param Result对象JSON
 */
/*function setConfig(key, value) {
    
}*/

/**
* 读取本地文件
* @param url 根目录为系统的ClientApp 如：/pages/.../*.html
*/
SysCmd.load = function (url, callback, error) {
    return callClient(SysCmd.namespace, 'openfile', url, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.load Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

/**
* 获取客户端缓存
* @param key 关键字
* @return 对象字符串
*getCacheFromSyscmd
*/
SysCmd.loadCache = function (json, callback, error) {
    return callClient(SysCmd.namespace, "cachemanage", json, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.loadCache Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}
/**
 * 设置客户端缓存
 * @param key 关键字
 * @param value 对象字符串
 *setCacheToSyscmd
 */
SysCmd.saveCache = function (json, callback, error) {

    //console.debug(json);
    callClient(SysCmd.namespace, "cachemanage", json, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.saveCache Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });

}
/**
 * 返回网络状态
 * 返回json串，串中的data值，1为联网状态，0为断网状态
 */
SysCmd.getInternetStatus = function (callback, error) {
    return callClient(SysCmd.namespace, "internetconnect", "", 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.getInternetStatus Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}

/**
* 在外部的浏览器打开指定的链接
* @param url 需要打开的链接
* openUrlOutside
*/
SysCmd.openUrl = function (url, callback, error) {
    callClient(SysCmd.namespace, "openurl", url, 0, function (protocol) {
        var result = protocol.toObject();
        if (result.flag == 1) {
            callback && callback.call(this, result.data);
        }
        else {
            alert(result.errorMsg);
            console.log("SysCmd.openUrl Error" + protocol);
            error && error.call(this, result.errorMsg);
        }
    });
}