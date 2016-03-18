```
$ npm install
npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.8
npm WARN wdio-console-log-crash@1.0.0 No repository field.
graingert@kvell:~/projects/wdio-console-log-crash$ npm start

> wdio-console-log-crash@1.0.0 start /home/graingert/projects/wdio-console-log-crash
> wdio



=======================================================================================
Selenium 2.0 / webdriver protocol bindings implementation with helper commands in nodejs.
For a complete list of commands, visit http://webdriver.io/docs.html.
=======================================================================================

[15:47:19]  COMMAND	POST 	 "/wd/hub/session"
[15:47:22]  COMMAND	POST 	 "/wd/hub/session/39027219-4a5b-4403-83be-af5b2c3a9834/url"
[15:47:24]  COMMAND	POST 	 "/wd/hub/session/39027219-4a5b-4403-83be-af5b2c3a9834/element"
․[15:47:25]  	Saved screenshot: ERROR_chrome_2016-03-18T15-47-25.559Z.png
[15:47:25]  COMMAND	GET 	 "/wd/hub/session/39027219-4a5b-4403-83be-af5b2c3a9834/screenshot"
[15:47:25]  COMMAND	DELETE 	 "/wd/hub/session/39027219-4a5b-4403-83be-af5b2c3a9834"


0 passing (7.20s)
1 failing

1) should error on no form:
Cannot read property 'log' of undefined
running chrome
TypeError: Cannot read property 'log' of undefined
    at Object.reject (/home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/build/lib/webdriverio.js:287:20)
    at Object.callErrorHandlerAndReject (/home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/build/lib/webdriverio.js:217:27)
    at /home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/build/lib/webdriverio.js:192:58
    at run (/home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/node_modules/core-js/library/modules/es6.promise.js:104:47)
    at /home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/node_modules/core-js/library/modules/es6.promise.js:115:28
    at flush (/home/graingert/projects/wdio-console-log-crash/node_modules/webdriverio/node_modules/core-js/library/modules/$.microtask.js:19:5)
    at _combinedTickCallback (node.js:376:9)
    at process._tickCallback (node.js:407:11)




npm ERR! Linux 4.2.0-34-generic
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "start"
npm ERR! node v5.9.0
npm ERR! npm  v3.7.3
npm ERR! code ELIFECYCLE
npm ERR! wdio-console-log-crash@1.0.0 start: `wdio`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the wdio-console-log-crash@1.0.0 start script 'wdio'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the wdio-console-log-crash package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     wdio
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs wdio-console-log-crash
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls wdio-console-log-crash
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/graingert/projects/wdio-console-log-crash/npm-debug.log
```
