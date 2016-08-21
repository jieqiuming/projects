<?php

class DataHelper{
    const SEARCH_PAGE_URL = 'http://m.baidu.com/news?#search/';
    const SEARCH_API_URL = 'http://m.baidu.com/news?tn=bdapinewsearch&word=';
    const NEWS_CONTENT_API_URL = 'http://m.baidu.com/news?tn=bdapiinstantfulltext&src=';
    const PAGE_COUNT = 50;
    function __construct(){
        
    }
    /**
     * [外部调用]
     * 关键词搜索新闻 
     *
     * @return [array] [新闻列表数据]
     */
    public function keysearch($keyword='')
    {
        $stime=microtime(true); 
        # code...
        //$pageArr = [0,50,100,150];
        //$pageArr = [0,50];
        $pageArr = array(0,50);
        $jsonArr = array();
        foreach ($pageArr as $key => $value) {
            # code...
            $json = $this->searchbypage(DataHelper::SEARCH_API_URL.''.$keyword,$value,DataHelper::PAGE_COUNT);
            
            $jsonArr = array_merge($jsonArr,$json);
        }
        // foreach ($jsonArr as $key => &$value) {
        //     # code...
        //     if(!empty($value['imgUrl'])){
        //         $value['imgUrl'] = $this->saveImage($value['imgUrl'],time(),'./thumbtail/');
        //     }
        // }
        //出于性能考虑，不再获取正文内容
        //$jsonArr = $this->getContent(DataHelper::NEWS_CONTENT_API_URL,$jsonArr);
        $etime=microtime(true); 
        $total = $etime - $stime;
        //echo "<br /> keysearch {$total} times";
        return $this->filter($jsonArr);
    }
    
    private function saveImage($url,$imgName,$imgPath){
        $img = file_get_contents($url); 
        $imgExt = substr($url,strripos($url,"."));
        $newImgName = $imgPath.''.$imgName.''.$imgExt;
        file_put_contents($newImgName,$img);
        return $newImgName;
    }
    
    /**
     * [内部调用]
     * 过滤相似新闻列表 
     *
     * @return [array] [过滤后的新闻列表数据]
     */
    private function filter($newsJsonArray){
        # code...
        $stime=microtime(true); 
        $returnArray = array();
        $GLOBALS['segments'] = array();
        foreach ($newsJsonArray as $key => $value) {
            # 对数组中的每一个新闻标题+新闻简介进行分词、相识度比较
            if($key > 0){
                if(!$this->IsSimilarity($returnArray,$value)){
                    //$returnArray[] = $value;
                    array_push($returnArray,$value);
                }
                
            }else{
                //$returnArray[] = $value;
                array_push($returnArray,$value);
            }
    
        }
        $etime=microtime(true); 
        $total = $etime - $stime;
        //echo "<br /> 过滤重复新闻 {$total} times";
        return $returnArray;
    }
    
    /**
     * [内部调用]
     * 利用TextSimilarity判断新闻文本相似度 
     *
     * @return [array] [过滤后的新闻列表数据]
     */
    private function IsSimilarity($txtArr,$txt){

        $epsilon = 0;
        $baseVal = 0.5;
        
        foreach ($txtArr as $key => $value) {
            # code...
            $str1 = $value["title"]."".$value["abs"];
            $str2 = $txt["title"]."".$txt["abs"];
            $stime1=microtime(true); 
            $textSimilarityObj = new TextSimilarity($str1,$str2);
            $stime2=microtime(true); 
            $txtSValue = $textSimilarityObj->run();
            $stime3=microtime(true); 
            $total1 = $stime2 - $stime1;
            $total2 = $stime3 - $stime2;
            //echo "<br /> textSimilarity {$total1}/{$total2} times";
            $compVal = bccomp($txtSValue,$baseVal,2);

            // -1 0 1
            if($compVal >= $epsilon) {
                //var_dump($compVal.'='.$txtSValue.'vs'.$baseVal);
                //echo $str1.'<br/>'.$str2;
                return true;
            }
            
        }
        
        return false;
    }
    
    
    
    private function searchbypage($url,$page,$pageCount){
        # code...
        
        $jsonapi = $url.'&pn='.$page.'&rn='.$pageCount.'&ct=1';
        
        $json = file_get_contents($jsonapi);

        $json = json_decode($json,true);
        
        return $json["list"];
    }
    
    private function getContent($apiUrl,$jsonArr){
        $srcUrl = "";
        $json = "";
        foreach ($jsonArr as $key => &$value) {
            # code...
            $srcUrl = $value["url"];
            $json = file_get_contents($apiUrl.''.$srcUrl);
            $jsonObj = json_decode($json,true);
            $value["content"] = $this->parseContent($jsonObj);
        }
        
        return $jsonArr;
    }
    
    private function parseContent($jsonObj){
        
        $contentArr = $jsonObj["data"]["news"][0]["content"];
        $content = "";
        $passageCount = 0;
        if(!$contentArr || count($contentArr) == 0){
            return $content;
        }
        foreach ($contentArr as $key => $value) {
            # code...
            if($value["type"] == "text"){
                $content .= $value["data"]; 
                $passageCount ++;
            }
            
            if($passageCount > 2){
                break;
            }
        }
        return $content;
    }

}