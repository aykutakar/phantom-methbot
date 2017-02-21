var exec = require('child_process').exec
    //, logger = require('./logger')('MFA-traffic-generator')

    , scheduleCounter = 0;

function runCrawlers() {
    for (var i = 0; i < 10; i += 1) {
        var process1 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process2 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process3 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process4 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process5 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process6 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process7 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process8 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process9 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js')
            , process10 = exec('phantomjs --proxy=127.0.0.1:3000 bot.js');

        process1.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-1]', data.trim());
        });
        process2.stdout.on('data', function (data) {
            // scheduleCounter++;
            //console.log('[process-2]', data.trim());
        });

        process3.stdout.on('data', function (data) {
            // scheduleCounter++;
            //console.log('[process-3]', data.trim());
        });

        process4.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process5.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process6.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process7.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process8.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process9.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        process10.stdout.on('data', function (data) {
            //scheduleCounter++;
            //console.log('[process-4]', data.trim());
        });
        scheduleCounter += 10;
    }
}

runCrawlers();
runCrawlers();

setInterval(function () {
    console.log("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    //logger.info("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    runCrawlers();
}, 3 * 60 * 1000);
