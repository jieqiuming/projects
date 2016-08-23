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
        'I_PhrasesReading': 'I_PhrasesReading/index.html',
        'I_PhrasesReading_title': 'I_PhrasesReading/title.html',
        'I_SentenceReading': 'I_SentenceReading/index.html',
        'I_SentenceReading_title': 'I_SentenceReading/title.html',
        'I_TextReading': 'I_TextReading/index.html',
        'I_TextReading_title': 'I_TextReading/title.html',
        'II_QuickResponse': 'II_QuickResponse/index.html',
        'II_QuickResponse_title': 'II_QuickResponse/title.html',
        'II_TopicPresentation': 'II_TopicPresentation/index.html',
        'II_TopicPresentation_title': 'II_TopicPresentation/title.html',
        'III_MindMapping': 'III_MindMapping/index.html',
        'III_MindMapping_title': 'III_MindMapping/title.html',
        'III_ListenAndWrite': 'III_ListenAndWrite/index.html',
        'III_ListenAndRetelling': 'III_ListenAndRetelling/index.html',
        'V_GroupDiscussion_index': 'V_GroupDiscussion/index.html',
        'V_GroupDiscussion_topic': 'V_GroupDiscussion/topic.html',
        'V_GroupDiscussion_content': 'V_GroupDiscussion/content.html',
        'IV_PictureAndWrite': 'IV_PictureAndWrite/index.html',
        'IV_PictureSituationResponse': 'IV_PictureSituationResponse/index.html',
        'IV_PictureAndTalking': 'IV_PictureAndTalking/index.html',
		'VI': 'VI_PictureChoice/main.html',
		'VI_PictureChoice_index': 'VI_PictureChoice/index.html',
		'VI_PictureChoice_topic': 'VI_PictureChoice/topic.html',
		'VI_PictureChoice_content': 'VI_PictureChoice/content.html',
		'VI_ShortPassages_index': 'VI_ShortPassages/index.html',
		'VI_ShortPassages_topic': 'VI_ShortPassages/topic.html',
		'VI_ShortPassages_content': 'VI_ShortPassages/content.html',
		'VI_ConversationAndWrite_index': 'VI_ConversationAndWrite/index.html',
		'VI_ConversationAndWrite_topic': 'VI_ConversationAndWrite/topic.html',
		'VI_ConversationAndWrite_content': 'VI_ConversationAndWrite/content.html',
        'VII_WatchTalk': 'question/index.html',
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
        $.ajax({
            url: 'js/app/' + path,
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