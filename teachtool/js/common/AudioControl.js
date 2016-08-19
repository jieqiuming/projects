/**
* @author haowu3
* 2015-06-19
*/
///<summary>
///音频播放器控件
///<summary>
var rootPath = null;
var audioPlayer = {
    play: function (url, callback) {//播放
        if (callback == null || callback == '')
            callback = 'audioPlayer.playEndCallBack';

        ExamService.Play(callback, url);
    },
    resumePlay: function () {//续播
        ExamService.PlayResume();
    },
    pause: function () {//暂停
        ExamService.PlayPause();
    },
    stop: function (callback) {//停止
        ExamService.StopPlay(function () {
            callback();
        });
    },
    playEndCallBack: function () {
        console.log('默认播放回调');
    }
};

function PlayPositionChanged(volume) {
    //console.log('PlayPositionChanged:' + volume);
}

function PlayVolumeCallBack(volume) {
    //console.log('Playvolume:' + volume);
}

/*
 * 教师工具音频播放功能封装对象
 * add by qmjie 2015.11.12
 */
var audioPlayerWrapper = {
    PlaySound: function (url) {
        audioPlayer.play(url, "audioPlayerWrapper.ResetAllButton");//播放
    },
    StopSound: function (callback) {
        audioPlayer.stop(function () {
            $("input[name='btn_voice'].btn-voiceblue").removeClass().addClass('btn-voice');
            var oriclass = $("input[name='btn_audio'][class^=btn-stop]").attr("oriclass");
            if (oriclass) {
                $("input[oriclass='" + oriclass + "'][class^=btn-stop]").removeClass().addClass(oriclass);
            } else {
                $("input[name='btn_audio'][class^=btn-stop]").removeClass().addClass('btn-play');
            }
            $("input[name='btn_refresh'][class^=btn-stop]").removeClass().addClass('btn-refresh');

            if (isFunction(callback)) {
                callback();
            }
        });
    },
    ResetAllButton: function () {
        $("input[name='btn_voice'].btn-voiceblue").removeClass().addClass('btn-voice');
        var oriclass = $("input[name='btn_audio'].btn-stop").attr("oriclass");
        if (oriclass) {
            $("input[oriclass='" + oriclass + "'].btn-stop").removeClass().addClass(oriclass);
            $("input[oriclass='" + oriclass + "'].btn-stoporange").removeClass().addClass(oriclass);

        }
        else {
            $("input[name='btn_audio'].btn-stop").removeClass().addClass('btn-play');
            $("input[name='btn_audio'].btn-stoporange").removeClass().addClass('btn-playorange');

        }
        $("input[name='btn_refresh'].btn-stop").removeClass().addClass('btn-refresh');

        //audioControler.enablePlay();
    }
};

/*
 * 教师工具录音功能封装对象
 */
var audioRecorderWrapper = {
    Record: function (paperId, controlId, callback) {
        TeachService.record(paperId,controlId,callback);
    },
    StopRecord: function (callback) {
        TeachService.recordEnd(callback);
    }
}

/*
 * 音频播放控制器
 */
var audioControler = {
    _enabled: true,
    _firstClick:true,
    enablePlay: function () {
        this._enabled = true;
    },
    disablePlay: function (option) {
        if (option) {
            this._enabled = option;
        } else {
            this._enabled = false;
            //2s过后可以播放其他音频
            _timeout = setTimeout(function () {
                audioControler.enablePlay();
            }, 2000);
        }
        
    },
    queryPlay: function () {
        return this._enabled;
    }
};
