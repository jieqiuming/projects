/*****
注意：
1、TmodJS预编译功能支持按照路径引用和插入模板，代价是安装NodeJS；为了降低开发环境的复杂度，此项目没有使用TmodJS预编译功能。
2、由于第一条，template在本项目中不支持按照路径引用和插入模板。
3、为了方便模板按目录管理，采用ajax请求文本的方式，变相实现按路径加载模板。
   优点：模板代码从页面剥离，统一管理。
   缺点：不支持子模板嵌入！如果一定要嵌入子模板，子模板代码只能放在页面中（<script id="xxx"></script>），强烈不建议。
*****/

function TemplateBuilder() {
    /*在此配置模板名称和路径*/
    var tpl = {
        'I_ReadAloud': 'I_ReadAloud/I_ReadAloud.html',
        'II_QuickResponse': 'II_QuickResponse/II_QuickResponse.html',
        'III_ListenWriteRetell': 'III_ListenWriteRetell/III_ListenWriteRetell.html',
        'IV_PictureTalk': 'IV_PictureTalk/IV_PictureTalk.html',
        'V_GroupDiscussion': 'V_GroupDiscussion/V_GroupDiscussion.html',
        'VI_Listening': 'VI_Listening/VI_Listening.html',
        'VII_WatchTalk': 'VII_WatchTalk/VII_WatchTalk.html',
        'MessageBox': 'common/MessageBox.html',
        'AlertBox': 'common/AlertBox.html',
        'PackageList': 'page/PackageList.html'
    };

    /*
    获得模板字符串
    参数为 模板路径
    */
    var getTemplateStr = function (path) {
        var content = '';

        //错误的写法
        //$.get('scripts/Template/QuestionTpl/' + path).success(function (result) {
        //    // content就为文件data.txt的文本内容了,注意txt文件的编码需要与html文件的编码一致，最好保存成utf-8
        //    content = result;
        //});

        $.ajax({
            url: 'js/app/' + path,
            //data: { 'id': '' },
            type: "get",
            dataType: "text",
            async: false,//同步，很重要
            success: function (result) {
                content = result;
            },
            complete: function (XHR, TS) { XHR = null; }
        });
        return content;
    }

    /*
    获得组装后的html【对外调用】
    参数为 模板名称 和 数据
    */
    this.getHtml = function (tpl_name, data) {
        var path = tpl[tpl_name];
        var render = template.compile(getTemplateStr(path));
        return render(data);
    }
}