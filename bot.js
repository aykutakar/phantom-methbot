//
// BOT SETTINGS:
//
var S = require('./settings.json')
    , REF = require('./referer.js')
    , UA_storage = require('./UA_storage.js')
    , custom_cookie = require('./cookie.js').google
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]
    //, PRETENDER_cookie = custom_cookie[getRandomInt(0, custom_cookie.length - 1)]
    , PRETENDER_headers = {
        //"Cookie": custom_cookie,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        "Accept-Encoding": "gzip, deflate, sdch, br",
        //'Upgrade-Insecure-Requests': '1',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        "Cache-Control": "no-cache",
        "Host": startRandomRefererWashingPoint,
        "Origin": startRandomRefererWashingPoint,
        "Pragma": "no - cache",
        'Referer': startRandomRefererWashingPoint,
        //'X-Forwarded-For': startRandomRefererWashingPoint,
        "User-Agent": generateNewUserAgent()
    }


var page = require('webpage').create();
var url = 'http://web-dreamteam.com';

page.settings.loadImages = false;

page.settings.userAgent = generateNewUserAgent();
page.settings.resourceTimeout = 80 * 1000;
page.viewportSize = {
    width: getRandomInt(1024, 2200),
    height: getRandomInt(768, 1900)
};
page.customHeaders = PRETENDER_headers;



page.open(startRandomRefererWashingPoint, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address for start');
        phantom.exit();
    } else {
        //
        //
        var referer = page.evaluate(function () {
            var fakeLink = document.createElement('a');
            fakeLink.setAttribute('href', 'http://web-dreamteam.com');
            fakeLink.setAttribute('id', "washingpoint")
            document.body.appendChild(fakeLink);
            document.querySelector("a#washingpoint").click();
        });
        //page.render('./screens/referer-' + new Date() + '.png');
        //
        //
    }
});
/*
page.onLoadStarted = function() {
  var currentUrl = page.evaluate(function() {
    return window.location.href;
  });
  console.log('Пытаюсь перейти на: ' + currentUrl + ' will gone...');
};
*/
page.onNavigationRequested = function (url, type, willNavigate, main) {
    console.log('Trying to navigate to: ' + url);
    console.log('Caused by: ' + type); // тип навигации
    console.log('Will actually navigate: ' + willNavigate);
    console.log('Sent from the page\'s main frame: ' + main);
}

page.onLoadFinished = function (status) {
    if (page.url == "http://web-dreamteam.com/") {
        console.log(page.url, ' TARGET !!!!!!!!!!!!!!!!!!!!');
        var scroll = page.evaluate(function () {
            //
            //
            //           
            document.body.scrollTop = 0;
            for (var i = 0; i < 3700; i += 1) {
                document.body.scrollTop += 2;
            }
            for (var i = 0; i < 3700; i += 1) {
                document.body.scrollTop -= 2;
            }
            return document.body.innerHTML;
            //
            //
            //           
        });
        console.log("ПОСКРОЛЛИЛ", scroll);
        //page.render('./screens/wdt-' + new Date() + '.png');
        var mousemove = page.evaluate(function () {
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            //
            //
            //           
            document.body.scrollTop = 0;
            var ConstructorMouseEvent = document.createEvent('MouseEvents')
                , ConstructorKeyEvent = document.createEvent('UIEvents')
                , $header = document.querySelector('header nav')
                , $div = document.querySelector('div#main-content')
                , $section = document.querySelector('section.chlidren_' + getRandomInt(1, 4))
                , $IMG = document.querySelector('section.chlidren_1 img')
                , $ = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + '  ')
                , $p = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' p');
            ConstructorKeyEvent.initUIEvent('keyup', true, true, window, 1);
            ConstructorKeyEvent.keyCode = getRandomInt(1, 30);
            // Emit:
            for (var i = 0; i < 100; i += 1) {
                document.body.scrollTop += 20;
                ConstructorMouseEvent.initMouseEvent('mousemove', true, true, window, 1, getRandomInt(10, 900), getRandomInt(10, 7500), getRandomInt(10, 900), getRandomInt(10, 7500), false, false, true, false, 0, null);
                $header.dispatchEvent(ConstructorMouseEvent);
                $section.dispatchEvent(ConstructorMouseEvent);
                $IMG.dispatchEvent(ConstructorMouseEvent);
                $.dispatchEvent(ConstructorMouseEvent);
                $p.dispatchEvent(ConstructorMouseEvent);
            }
            document.body.scrollTop = 7400;
            for (var i = 0; i < 30; i += 1) {
                document.body.scrollTop -= 20;
                ConstructorMouseEvent.initMouseEvent('click', true, true, window, 1, 500, getRandomInt(100, 5000), 300, getRandomInt(10, 500), false, false, true, false, 0, null);
                $section.dispatchEvent(ConstructorMouseEvent);
                $IMG.dispatchEvent(ConstructorMouseEvent);
                $.dispatchEvent(ConstructorMouseEvent);
                $p.dispatchEvent(ConstructorMouseEvent);

                $div.dispatchEvent(ConstructorKeyEvent);
                $header.dispatchEvent(ConstructorKeyEvent);
            }
            return document.body.scrollTop;
            //
            //
            //           
        });
        console.log("ПОВОДИЛ МЫШКОЙ", mousemove);
        //page.render('./screens/wdt-' + new Date() + '.png');
        phantom.exit();
    }
};



//
//
// utils:
//
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function generateNewUserAgent() {
    return UA_storage[getRandomInt(0, UA_storage.length - 1)];
}