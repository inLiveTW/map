console.log('%c拆政府 原地重建', 'font-size:100px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');

     function toLabel (hand, i, Icon, year, whichLabel) {
        if (!whichLabel) return ((hand.name || hand.title || "") + '(' + (hand.location || '') + ')' );;
        var lable = " ";
        
        switch (whichLabel) {
          case 'location':
            return (hand.location || '');
          default:
              break;

        }

                     
        if (!lable) lable = ' ';   
        return lable;

     }

     function toFlag(hand, i, Icon) {
         var flag =  '<div class = "flag">'

                      + (hand.title || hand.name)
                      + '<hr>'
                      + hand.location

                      +'</div>';
            return flag;
     }

    function toFlag1(hand, i, Icon) {
         var flag =  '<div class = "flag">'
                      + '<a href = "'+hand.url+'" target = "_blank">'+(hand.title || hand.name)+'</a>'
                      +'</div>';
            return flag;
     }
     
    function toFlagEvent(hand, i, Icon) {
         var flag =  '<div class = "flag">'
                      + '<a href = "'+hand.link+'" target = "_blank">'+(hand.title || hand.name)+'</a>'
                      +'</div>';
            return flag;
     }


     SKH.init({
      //  lat:,
      //  lng:,
        zoom: 8,
        noRPG: true,
        selectBar: 
'<input autofocus type="search" class="form-control noPhone" placeholder="輸入地址以定位地圖"ng-model="loc" ng-change = "askGeo(loc)"/>'
+'<input type="search" class="form-control noPhone" placeholder="Search" ng-model="key" ng-change = "clearMarker();makeMarkers();"/>'

        +'<select class = "form-control"'
                    +'ng-model="whichLable" ng-change = "clearMarker();makeMarkers()">'
                      +'<option value="">-- 選擇顯示標籤 --</option>'
                      +'<option value="location">地點</option>'
                  +'</select>',
        checkList: [],
        whiteList: [],        
        layers: ['公民記者直播','公民記者事件','公民記者頻道'],
        hides: [0,1,1],
        urls: [
              'https://livelink.firebaseio.com/live/.json',
              'https://livelink.firebaseio.com/channel/.json',
              'https://livelink.firebaseio.com/event/.json'], //,'https://skywater.firebaseio.com/sample/.json'], //'https://livelink.firebaseio.com/live'
        layerIcons: [
                    'https://www.moedict.tw/直.png?font=wt006',                    
                    'https://www.moedict.tw/事.png?font=wt006',
                    'https://www.moedict.tw/頻.png?font=wt006'], //, 'https://www.moedict.tw/錄.png?font=wt006'],
        types: ['json','json','json'], //'firebase'
        logins:[],
        defaultLatLng: "23.9,120.9",
        toFlags: [
           toFlag,
           toFlagEvent,
           toFlag1],
        toLabels: [toLabel,toLabel,toLabel],
        frames: ['frame2.html','frame2.html','frame2.html'],
        frameNumber: 3,
        r: 25,
        lang:'zh-tw',
        listKeys: ['name','note','address','share','ask'], //'connect_me',
        listKeyNames: {
          name:'名稱',
          address:'位於',
          share: '分享',
          ask:'尋找',
          note: '自我介紹'        
        }
     });        

        var app = angular.module('demoapp', ['shackhand','FBAngular']);