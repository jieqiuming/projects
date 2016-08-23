
// 系统页面的根路径
var pageContext;

/**
* 获取页面根路径。
*/
(function () {
    var url = window.location.href;
    pageContext = url.substring(0, url.indexOf('/pages//'));
    if (pageContext == '') {
        pageContext = url.substring(0, url.indexOf('/pages/'));
    }
})();

//定义了全部的题型
var PaperSections = {
    I_PhrasesReading: 'PhrasesReading',
    I_SentenceReading: 'SentenceReading',
    I_TextReading: 'TextReading',
    II_QuickResponse: 'QuickResponse',
    II_TopicPresentation: 'TopicPresentation',
    III_ListenAndRetelling: 'ListenAndRetelling',
    III_ListenAndWrite: 'ListenAndWrite',
    III_MindMapping: 'MindMapping',
    IV_PictureAndTalking: 'PictureAndTalking',
    IV_PictureAndWrite: 'PictureAndWrite',
    IV_PictureSituationResponse: 'PictureSituationResponse',
    V_GroupDiscussion: 'GroupDiscussion',
    VI_ConversationAndWrite: 'ConversationAndWrite',
    VI_PictureChoice: 'PictureChoice',
    VI_ShortPassages: 'ShortPassages',
    VII_WatchAndTalk: 'WatchAndTalk',
    getKeyByValue: function (val) {
        for (var p in this) {
            if (this[p] === val) {
                return p;
            }
        }
        return null;
    }
}

/*
 * 替换全部匹配字符
 * repalce方法只能替换第一个匹配字符
 */
function replaceAllStr(str, oldStr, newStr) {
    return str.split(oldStr).join(newStr);
}

/*
 * 生成随机字符串
*/
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}