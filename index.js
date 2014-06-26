 (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/zh_TW/all.js#xfbml=1&appId=485195848253155";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  $.post(
    'https://graph.facebook.com',
    {   id: location.href,
        scrape: true  }, function(response){
        console.log(response);
    } 
  );  // FB API

     function toLabel (hand, i, Icon, year, whichLabel) {
        if (!whichLabel) return hand.name || hand.title;
        var lable = " ";
        
        switch (whichLabel) {
          case 'name':
              lable += ((hand.name || hand.title) || "");
          default:
              break;

        }

                     
        if (!lable) lable = ' ';   
        return lable;

     }

     function toFlag(hand, i, Icon) {
         var flag =  '<div class = "flag">'

                      + (hand.title || hand.name)

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
                      +'<option value="group">團體</option>'
                  +'</select>',
        checkList: [],
        whiteList: [],        
        layers: ['公民記者錄影','公民記者直播'],
        urls: ['https://skywater.firebaseio.com/sample/.json','https://livelink.firebaseio.com/live/.json'],
        layerIcons: ['https://www.moedict.tw/公.png?font=wt006'],
        types: ['json'],
        logins:[],
        toFlags: [toFlag],
        toLabels: [toLabel],
        frames: ['frame2.html','frame2.html'],
        frameNumber: 3,
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