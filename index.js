
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
        layers: ['公民記者直播','公民記者錄影'],
        urls: ['https://livelink.firebaseio.com/live/.json'], //,'https://skywater.firebaseio.com/sample/.json'], //'https://livelink.firebaseio.com/live'
        layerIcons: ['https://www.moedict.tw/直.png?font=wt006'], //, 'https://www.moedict.tw/錄.png?font=wt006'],
        types: ['json','json'], //'firebase'
        logins:[],
        defaultLatLng: "23.9,120.9",
        toFlags: [toFlag,toFlag],
        toLabels: [toLabel,toLabel],
        frames: ['frame2.html','frame2.html'],
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