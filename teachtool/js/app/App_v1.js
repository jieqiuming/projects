/// <reference path="../common/config.js" />
/// <reference path="Model.js" />

$(function () {
    //左边栏滚动
    var Sider = {
        index: 0,
        liCount: $("#orderDiv li").length,//总数
        pageIndex: 8,//一屏显示数
        liHeight: 76,//元素高度（固定）
        init: function () {
            this.liCount = $("#orderDiv li").length;
            if (this.liCount > this.pageIndex) {
                $("#scoll_down").show();
            }
        },
        siderScroll: function (direction, speed) {//p1:方向  p2:速度
            var _this = this;
            if (direction == "down") {
                if (_this.index + _this.pageIndex >= _this.liCount) {
                    return;
                }
                _this.index++;
                if (_this.index + _this.pageIndex >= _this.liCount) {
                    $("#scoll_down").hide();
                }
                $("#scoll_up").show();

            } else {
                if (_this.index <= 0) {
                    return;
                }
                _this.index--;
                if (_this.index <= 0) {
                    $("#scoll_up").hide();
                }
                $("#scoll_down").show();
            }        
            $("#orderDiv").animate({ scrollTop: _this.index * _this.liHeight }, speed);
        }
    }
    //00.初始化试卷数据
    init();
    function init() {
        //清除本地数据保存数据
        localdata.clear();

        var Request = comm.GetRequest();
        var paperId = Request["paperId"];
        //测试使用 2015.11.08 add by qmjie
        if (testData2) {
           comm.showMask(true, "页面加载中。。。");
           //testData2 = $.evalJSON(testData2);
           //TeachService.getPaperPackageData(paperId, function (result) {
           //});
           Model.InitData(testData2, function (flagList) {

               RenderLeftNavHtml(flagList);

               GotoSectionView(Model.GetDefaultSection());
               comm.showMask(false);
           });

           //return;
        }
        // if (Model.QueryRefreshData()) {
        //     comm.showMask(true, "页面加载中...");
        //     TeachService.getPaperPackageData(paperId, function (result) {
        //         if (!result.flag || result.data == "False") {
        //             comm.ShowAlertBox('异常提示', Tips.Paper.Fail, false);
        //             return;
        //         }

        //         var resultJson = $.evalJSON(result.data);
        //         //console.log(resultJson);

        //         Model.InitData(resultJson, function (flagList) {

        //             RenderLeftNavHtml(flagList);

        //             GotoSectionView(Model.GetDefaultSection());
        //             comm.showMask(false);
        //         });
        //     });
        // }
        // else {
        //     GotoSectionView(Model.GetDefaultSection());
        // }

    };
    
    //00.动态生成左侧导航栏
    function RenderLeftNavHtml(flagList) {
        var flagName = {
            'I': 'Read aloud',
            'II': 'Quick response',
            'III': 'Listen, write and retell',
            'IV': 'Picture talk',
            'V': 'Group discussion',
            'VI': 'Listen and complete',
            'VII': 'Watch and talk'
        };
        var leftNavHtml = '';
        var sectionName = '';
        var liHtmlTpl = '<li  class="clearfix {3}" hashvalue="{0}"><b>{1}</b><p><font><span>{2}</span></font></p></li>';
        var i = 0;
        for (var section in flagList) {
            sectionName = flagList[section][0].sectionName;
            var flagNum = sectionName.slice(sectionName.lastIndexOf("_") + 1);
            var className = i == 0 ? 'current' : '';

            leftNavHtml += String.format(liHtmlTpl, sectionName, flagNum, flagName[flagNum], className);
            i++;
        }

        $('#orderDiv').html(leftNavHtml);
        Sider.init();
    }

    
    
    //01.进入section视图
    function GotoSectionView(defaultSection) {
        //如有hash值，则进入hash对应的section，否则首页默认进入第一个section视图
        var hashvalue = window.location.hash ? window.location.hash.slice(1) : defaultSection;

        route(hashvalue);
    }

    //02.路由功能，负责视图切换,
    //hashvalue = {0}_Flag_{1} {0}为SectionName {1}为Flag
    //update by qmjie 2015.11.16 
    function route(hashvalue) {
        var sectionName = hashvalue.slice(0, hashvalue.indexOf('_Flag_'));
        var folder = PaperSections.getKeyByValue(sectionName);
        var sectionObj = 'Section_' + sectionName;
        if (!window[sectionObj]) {
            BuildLibrary.appendJS('js/app/' + folder + '/index.js', "UTF-8", function () {
                window[sectionObj].Render(hashvalue);
            });
        } else {
            window[sectionObj].Render(hashvalue);
        }
    }

    //03.hash变化响应事件
    $(window).bind("hashchange", function (e) {
        //hash发生改变，更改状态
        var hashvalue = window.location.hash.slice(1);
        route(hashvalue);
    });

    //04.侧边导航栏点击事件
    $("#orderDiv").on("click", "li", function (e) {

        $("#main").trigger("stopPlayAndReord");

        $("#orderDiv li").removeClass("current");

        var $this = $(e.currentTarget);

        $this.addClass("current");

        var hashValue = $this.attr("hashValue");
        window.location.hash = "#" + hashValue;
    });

    /*
    * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
    * @param func {function}  要调用的函数
    * @param wait   {number}    空闲时间
    * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
    * @return {function}实际调用函数
    */
    var debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    

    var btnplaycallback = function (e) {
        if (!audioControler.queryPlay()) {
            return;
        }
        audioControler.disablePlay();
        //停止其他播放、录音和回放操作
        audioRecorderWrapper.StopRecord(function () {
            audioPlayerWrapper.StopSound(function () {
                var audioUrl = $(e.currentTarget).attr("audiourl");
                if (!audioUrl) {
                    return;
                }
                var $ele = $(e.currentTarget);
                if ($ele.hasClass("btn-playorange")) {
                    $ele.removeClass().addClass("btn-stoporange");
                }
                else {
                    $ele.removeClass().addClass("btn-stop");
                }
                audioPlayerWrapper.PlaySound(audioUrl);
            });
        });
    };

    var btnvoicecallback = function (e) {
        if (!audioControler.queryPlay()) {
            return;
        }
        audioControler.disablePlay();
        //停止其他播放、录音和回放操作
        audioRecorderWrapper.StopRecord(function () {
            audioPlayerWrapper.StopSound(function () {


                var Request = comm.GetRequest();
                var paperId = Request["paperId"];
                var $btnVoice = $(e.currentTarget);
                var controlId = $btnVoice.attr("controlid");//

                $btnVoice.removeClass().addClass("btn-voiceblue");
                audioRecorderWrapper.Record(paperId, controlId, function (result) {
                    
                    $btnVoice.next().attr({ "audiourl": result, "class": "btn-refresh" });
                    localdata.setItem(controlId, result);
                    var voicetime = $btnVoice.attr("voicetime") || 10000;
                    //默认10的录音时间
                    timeout = setTimeout(function () {
                        audioRecorderWrapper.StopRecord(function () {
                            audioPlayerWrapper.StopSound(function () {
                                //audioControler.enablePlay();
                            });
                        });
                        
                    }, voicetime);
                });
            });
        });
    };

    var btnrefreshcallback = function (e) {
        if (!audioControler.queryPlay()) {
            return;
        }
        audioControler.disablePlay();
        //停止其他播放、录音和回放操作
        audioRecorderWrapper.StopRecord(function () {
            audioPlayerWrapper.StopSound(function () {
                var audioUrl = $(e.currentTarget).attr("audiourl");
                if (!audioUrl) {
                    return;
                }
                $(e.currentTarget).removeClass().addClass("btn-stop");
                audioPlayerWrapper.PlaySound(audioUrl);
                
            });
        });
    };

    var btnstopcallback = function (e) {
        if (!audioControler.queryPlay()) {
            return;
        }
        audioControler.disablePlay(true);

        audioRecorderWrapper.StopRecord(function(){
            audioPlayerWrapper.StopSound(function () {
                //audioControler.enablePlay();
            });
        });
    };


    //05.音频播放、录音、和回放事件绑定
    $("#main").on("click", "input[name='btn_audio'].btn-play,input[name='btn_audio'].btn-playorange,input[name='btn_audio'].btn-smallplay", btnplaycallback);

    $("#main").on("click", "input[name='btn_voice'].btn-voice", btnvoicecallback);

    $("#main").on("click", "input[name='btn_refresh'].btn-refresh", btnrefreshcallback);

    //暂停事件绑定
    $("#main").on("click", "input.btn-stop,input.btn-stoporange,input.btn-voiceblue", btnstopcallback);

    //切换页面时，停止音频播放和录音
    $("#main").on("stopPlayAndReord", btnstopcallback);

    $("#main").on("click", "input[name='btn_content']", function (e) {
        var content = $(e.currentTarget).attr("content");
        //if (content) {
        ShowBox({ title: '听力原文', iconcss: 'mark-original', content: content });
        //}
    });

    $("#main").on("click", "input[name='btn_answer']", function (e) {
        var answer = $(e.currentTarget).attr("answer");
        //if (answer) {
        ShowBox({ title: '参考答案', iconcss: 'mark-answer', content: answer });
        //}
    });

    /*文本弹出框*/
    function ShowBox(data) {
        comm.showMask(true);
        $("#pop_box").html(new TemplateBuilder().getHtml('MessageBox', data));
        var popY = (($(window).height() - $("#pop_content").height()) / 2) + $(document).scrollTop();
        var popX = ($(window).width() - $("#pop_content").width()) / 2;
        $("#pop_box").css("position", "absolute").css("top", popY).css("left", popX).css("z-index", "999");

        /*弹出框关闭按钮事件*/
        $('#pop_close').one("click", function () {
            $("#pop_box").html('');
            comm.showMask(false);
        });

        $('#btn_pop_ok').one("click", function () {
            $("#pop_box").html('');
            comm.showMask(false);
        });

        $('#btn_pop_cancle').one("click", function () {
            $("#pop_box").html('');
            comm.showMask(false);
        });
    }

    $("#pop_box").on("click", "input[name='pop_close'],input[name='btn_ok'],input[name='btn_cancel']", function () {
        $("#pop_box").html('');
        comm.showMask(false);
        TeachService.closeApp();
    });

    $("#main").on("click", "input[nav='questionPage']", function () {
        //停止录音和放音
        $("#main").trigger("stopPlayAndReord");
    });


    //section切换事件
    $("#main").on("click", "#nav_menu input", function (e) {
        //停止录音和放音
        $("#main").trigger("stopPlayAndReord");
        var hashvalue = $(e.currentTarget).attr("name");
        //console.log("hash 切换：" + window.location.hash.slice(1) + "to " + hashvalue);
        window.location.hash = '#' + hashvalue;
    });


    $('#sider').bind('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1);        
        if (delta > 0) {
            // 向上滚
            Sider.siderScroll("up", 1);
        } else if (delta < 0) {
            // 向下滚
            Sider.siderScroll("down", 1);
        }
    });
    $("#sider").on("click", "input[name='scoll']", function () {
        var id = $(this).attr("id");
        if (id == "scoll_up") {
            Sider.siderScroll("up", 200);
        }
        else {
            Sider.siderScroll("down", 200);
        }
    });
});