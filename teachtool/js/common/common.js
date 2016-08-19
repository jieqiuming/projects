var comm = {};
/**
	 * 显示或隐藏遮罩
	 * 
	 * @param 显示或隐藏遮罩（true或false）	show
	 * @param 遮罩层文字	 			msg
	 * @param 延迟消失时间	 			lagTime
	 * 
	 */
comm.showMask = function (show, msg) {
    // 显示遮罩
    if (show) {
        // 清除已有遮罩
        if ($("#util_mask").length != 0) {
            $("#util_mask").remove();
        }
        if ($("#util_mask_load").length != 0) {
            $("#util_mask_load").remove();
        }
        // 动态加载元素
        var strHtml = "";
        strHtml += "<div id='util_mask'></div>";
        $("body").css("z-index", "1");

        $("body").append(strHtml);

        var bh = $(document).height();
        var bw = $(document).width();
        // 弹出遮罩层样式
        $("#util_mask")
            .css("background-color", "#000")
            .css("left", "0")
            .css("filter", "alpha(opacity=15)")
            .css("opacity", "0.15")
            .css("position", "fixed")
            .css("top", "0")
            .css("z-index", "35")
            .css("-moz-opacity", "0.5")
            .css("-khtml-opacity", "0.5")
            .css("display", "none")
            .css("height", bh)
            .css("width", bw)
            .show();



        // 显示loading信息
        if (msg) {
            var htmlLoad = "";
            var imgSrc = "./images/loading_icon.gif";
            htmlLoad += "<div id='util_mask_load' style='position:fixed;top:50%;left:50%;margin-top:-25px;padding:0 50px 0 32px ;text-align:center;z-index:10;";
            //if (($.browser.msie) && ($.browser.version == "6.0")) {
            //    htmlLoad += "_position:absolute;";
            //    htmlLoad += "_left:expression(eval(documentElement.scrollLeft + documentElement.clientWidth/2));";
            //    htmlLoad += "_top:expression(eval(documentElement.scrollTop + documentElement.clientHeight/2));";
            //}
            htmlLoad += "'>";
            htmlLoad += "<div style='position:absolute;margin-left:-32px;z-index:-1;display: none;_overflow:hidden;_height:50px;_font-size:0;'>";
            // greatcl 标记要修改的内容
            htmlLoad += "<img border='0' src='./images/loading_bgleft.gif' width='10px' height='50px'>";
            htmlLoad += "<img id='util_mask_bgcent' border='0' src='./images/loading_bgcent.gif' height='50px' >";
            htmlLoad += "<img border='0' src='./images/loading_bgright.gif' width='10px' height='50px' >";
            htmlLoad += "</div>"
            htmlLoad += "<b id='util_mask_msg' style='font-size:14px;color:#fff;margin-left:-12px;height:50px;line-height:50px;vertical-align:middle;display:inline-block;'>" + msg + "</b>";
            htmlLoad += "<img src='" + imgSrc + "' width='24' height='24'style='position:absolute;padding-top:13px;' />";
            htmlLoad += "</div>";
            $("body").append(htmlLoad);
            $("#util_mask_load").css("margin-left", parseInt((-$("#util_mask_load").width() - 76) / 2))	// 调整窗口位置
                                .css("filter", "alpha(opacity = 60)")	// 调整窗口透明度
                                .css("opacity", "0.6")
                                .css("-moz-opacity", "0.6")
                                .css("-khtml-opacity", "0.6");
            $("#util_mask_bgcent").css("width", parseInt($("#util_mask_load").width() + 56))
                                  .parent().show();	// 调整中间图片宽度
        }

        // 绑定窗口改变大小事件
        $(window).resize(function () {
            var bh = $(document).height();
            var bw = $(document).width();

            // 改变遮罩大小
            $("#util_mask")
                .css("height", bh)
                .css("width", bw);
        });
    } else {

        // 清除遮罩
        if ($("#util_mask").length != 0) {
            $("#util_mask").remove();
        }
        if ($("#util_mask_load").length != 0) {
            $("#util_mask_load").remove();
        }
    }
}

comm.ShowAlertBox = function (title, text, type, callback) {
    comm.showMask(true);

    $("#pop_box").html(new TemplateBuilder().getHtml("AlertBox", { title: title, text: text, type: type }));
    var popY = (($(window).height() - $("#tips_popbox").height()) / 2) + $(document).scrollTop();
    var popX = ($(window).width() - $("#tips_popbox").width()) / 2;
    $("#pop_box").css("position", "absolute").css("top", popY).css("left", popX).css("z-index", "999");
    
    /*事件*/
    //$("#btnok").one("click",function () {
    //    if (typeof callback == "function")
    //        callback();
    //    $("#pop_box").html('');
    //    comm.showMask(false);
    //})
    //$("#btncancel").one("click", function () {
    //    $("#pop_box").html('');
    //    comm.showMask(false);
    //})
    //$("#btnclose").one("click", function () {
    //    $("#pop_box").html('');
    //    comm.showMask(false);
    //})
}

comm.GetRequest = function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function isType(type) {
    return function (obj) {
        return {}.toString.call(obj) == "[object " + type + "]"
    }
}

var isObject = isType("Object")
var isString = isType("String")
var isArray = Array.isArray || isType("Array")
var isFunction = isType("Function")



function $res(data, selectStr) {
    /// <summary>按选择器读取试题资源</summary>
    /// <param name="selectStr" type="String">选择器字符串</param>  
    /// <returns type="Object">资源对象</returns>
    var obj = data;
    var reFlag = /^\s*(\w+)\s*\:/;
    var mt = selectStr.match(reFlag);
    var selectBody = selectStr.replace(reFlag, "");
    var arrMember = selectBody.split(/\.|>/g);
    if (mt) {
        var flag = mt[1].toLowerCase();
        if (flag == "xt") {
            var section = data;
            var arrMember0 = arrMember.shift();
            switch (arrMember0) {
                case "item":
                    obj = section;
                    break;
                case "group":
                    obj = section.group;
                    break;
                case "question":
                    obj = section.group.question;
                    break;
            }
        }
    }
    var result = obj;
    for (var i = 0; i < arrMember.length; i++) {
        var property = arrMember[i];
        var mtProperty = property.match(/\[\s*(\w+)\s*\=\s*(\w+)\s*\]/); //[name=content]
        property = property.replace(/\[.+?\]/g, "");
        result = result[property];
        if (mtProperty) {
            if (result.constructor === Array)
                result = result.getItemByProperty(mtProperty[1], mtProperty[2]);
            else if (result[mtProperty[1]] != mtProperty[2])
                result = null;
        }
    }
    return result;
}

Array.prototype.getItemByProperty = function (property, value) { //根据属性查找数据元素
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] == value)
            return this[i];
    }
    return null;
}

/*字符串格式化函数：{0}*/
//字符串的连接
String.format = function () {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};