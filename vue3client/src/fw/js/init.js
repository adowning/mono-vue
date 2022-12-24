"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
new( /*#__PURE__*/ function () {
    function Loader() {
        _classCallCheck(this, Loader);
        this.me = document.querySelector("#loaderContent");
        this.area = this.me.querySelector(".area");
        this.container = this.me.querySelector(".container");
        this.intro = this.container.querySelector(".intro");
        this.barContainer = this.container.querySelector(".bar");
        this.barLogo = this.container.querySelector(".bar-logo");
        this.barText = this.barContainer.querySelector(".message");
        this.barPer = this.container.querySelector("span");
        this.logoContainer = document.querySelector("#pre-load");
        this.preLogo = this.logoContainer.querySelector(".pre-logo");
        this.prePercent = this.logoContainer.querySelector(".pre-percent b");
        this.checkLogo();
        this.initConfig();
        this.initPreLogo();
        this.load()
    }
    _createClass(Loader, [{
        key: "checkLogo",
        value: function checkLogo() {
            var hideLogo = window.location.origin.indexOf("-rng") > -1 || window.location.origin.indexOf("-ss") > -1;
            hideLogo && this.me.setAttribute("data", "hideLogo")
        }
    }, {
        key: "initPreLogo",
        value: function initPreLogo() {
            var _this = this;
            var logoPath = "../../../common/componentsnew/assets/logo/";
            this.loadImage(logoPath + "client_logo.png", function (image, err) {
                if (!err) {
                    image.setAttribute("class", "client_logo");
                    _this.preLogo.appendChild(image)
                }
                _this.loadImage(logoPath + "default.png", function (image, err) {
                    if (!err) _this.preLogo.appendChild(image);
                    _this.init();
                    _this.logoContainer.removeAttribute("class")
                })
            })
        }
    }, {
        key: "init",
        value: function init() {
            var _this2 = this; //let lan = this.config.language == "zh_CN" ? "zh_CN" : "en_US";
            var lan = this.config.language;
            this.introImage = "./assets/intro/intro_" + lan + ".jpg?" + this.config.uid; //延迟加载intro图片，让client_logo显示时间长一点
            setTimeout(function () {
                _this2.loadImage(_this2.introImage, function (image, err) {
                    if (err) console.error(err);
                    _this2.prePercent.style.width = "100%"; //延迟显示intro，让preloading的100%进度条能看到
                    setTimeout(function () {
                        if (_this2.logoContainer) {
                            _this2.area.removeChild(_this2.logoContainer);
                            _this2.logoContainer = null
                        }
                        _this2.opacityAni(_this2.container, 1, 300);
                        _this2.intro.style.backgroundImage = "url(" + _this2.introImage + ")"
                    }, 100)
                })
            }, 300);
            this.resize();
            window.addEventListener("resize", function () {
                return _this2.resize()
            })
        }
    }, {
        key: "initConfig",
        value: function initConfig() {
            var _this3 = this;
            var baseUrl = window.location.href.split("?")[0];
            var txt = this.loadTxtSync("/games/FishingWarSG/touch/spadenew/fishing/fishingwar/1.0.3/project.json?" + new Date().getTime());
            this.config = JSON.parse(txt);
            this.config.language = "en_US";
            this.config.uid = this.config.uid || "";
            window.config = this.config;
            var url = window.location.href;
            url = decodeURIComponent(url); //转义URL上的特殊字符
            var pattern = /(\w+)=([\w-@:\/\.,]+)/ig;
            var cb = function cb(item, k, v) {
                _this3.config[k] = v
            };
            url.replace(pattern, cb);
            if (this.config["merchant"] && this.config["merchant"].toLowerCase() == "sky777") this.barLogo.className = ""; //如果merchant存在且merchant==sky777则不显示Spadegaming Logo
            this.config.service = this.formatConfig(this.config.service);
            if (["zh_CN", "en_US", "id_ID", "ja_JP", "ko_KR", "ru_RU", "th_TH", "tr_TR", "vi_VN"].indexOf(this.config.language) == -1) this.config.language = "en_US";
            var textMap = {
                "en_US": "Initializing...",
                "zh_CN": "\u6B63\u5728\u521D\u59CB\u5316...",
                "th_TH": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19...",
                "id_ID": "inisialisasi...",
                "vi_VN": "Kh\u1EDFi t\u1EA1o...",
                "ja_JP": "\u521D\u671F\u5316\u4E2D...",
                "ko_KR": "\uCD08\uAE30\uD654 \uC911...",
                "ru_RU": "\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F...",
                "tr_TR": "ba\u015Flat\u0131l\u0131yor..."
            };
            this.barText.innerHTML = textMap[this.config.language]
        }
    }, {
        key: "formatConfig",
        value: function formatConfig(url) {
            var baseWs = document.querySelector("base") && document.querySelector("base").attributes["ws"] && document.querySelector("base").attributes["ws"].nodeValue;
            var serviceUrl = baseWs ? baseWs : url;
            var isHttps = location.protocol === "https:";
            var socketProtocol = isHttps ? "wss://" : "ws://"; //if (this.config['channel'] && this.config['channel'] == 'App-a') socketProtocol = "ws://";
            var protocolIndex = serviceUrl.indexOf("//");
            serviceUrl = protocolIndex ? serviceUrl.substr(protocolIndex + 2) : serviceUrl;
            var hasPort = /\:\d+$/.test(serviceUrl),
                portIndex = serviceUrl.lastIndexOf(":");
            serviceUrl = isHttps && hasPort ? serviceUrl.substr(0, portIndex) : serviceUrl;
            url = socketProtocol + serviceUrl;
            return url
        }
    }, {
        key: "load",
        value: function load() {
            var _this4 = this;
            document.addEventListener("mymessage", function (e) {
                _this4.hideTips();
                _this4.setMessage(e.txtMessage)
            });
            document.addEventListener("mytips", function (e) {
                _this4.showTips(e.txtIntroTips)
            });
            document.addEventListener("myprogress", function () {
                var per = PIXI.loader.progress;
                _this4.barPer.style.width = per + "%"; //For APP call progress entry events
                var isApp = ["App-a", "App-i"].indexOf(_this4.config.channel) > -1;
                if (isApp && !isNaN(PIXI.loader.progress)) {
                    var Unity = window["Unity"];
                    Unity && Unity.call("progress:" + per)
                }
            });
            document.addEventListener("mycompete", function () {
                _this4.opacityAni(_this4.intro, 0, 300, function () {});
                _this4.opacityAni(_this4.barPer.parentElement, 0, 300, function () {
                    var className = _this4.me.getAttribute("class");
                    _this4.me.className = className + " pointerNone";
                    _this4.container.removeChild(_this4.barContainer)
                });
                _this4.hideTips()
            })
        }
    }, {
        key: "loadImage",
        value: function loadImage(path, cb) {
            var img = new Image;
            img.onload = function () {
                cb(img)
            };
            img.onerror = function () {
                cb(img, "load error:" + path)
            };
            img.src = path
        }
    }, {
        key: "loadTxtSync",
        value: function loadTxtSync(url) {
            var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP");
            xhr.open("GET", url, false);
            if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) { // IE-specific logic here
                xhr.setRequestHeader("Accept-Charset", "utf-8")
            } else {
                if (xhr.overrideMimeType) xhr.overrideMimeType("text/plain; charset=utf-8")
            }
            xhr.send(null);
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                return null
            }
            return xhr.responseText
        }
    }, {
        key: "setMessage",
        value: function setMessage(str) {
            this.barText.innerText = str
        }
    }, {
        key: "setTips",
        value: function setTips(str) {
            var _this5 = this;
            var messageEle = this.barText;
            this.opacityAni(messageEle, 0, 300, function () {
                _this5.tipTimer && _this5.setMessage(str);
                _this5.opacityAni(messageEle, 1, 400)
            })
        }
    }, {
        key: "showTips",
        value: function showTips(introTips) {
            var _this6 = this;
            var index = 0;
            var tipList = introTips.split("%d");
            if (introTips == "TXT_INTRO_TIPS") {
                this.setTips("");
                return
            }
            this.setTips(tipList[0]);
            this.tipTimer = setInterval(function () {
                if (index < tipList.length - 1) index++;
                else index = 0;
                _this6.setTips(tipList[index])
            }, 2000)
        }
    }, {
        key: "hideTips",
        value: function hideTips() {
            if (this.tipTimer) {
                clearInterval(this.tipTimer);
                this.tipTimer = null
            }
        }
    }, {
        key: "resize",
        value: function resize() {
            this.me.style.display = this.isMobilePortrait() ? "none" : "block";
            var gameWidth = 1440,
                gameHeight = 810;
            var ratio = gameWidth / gameHeight;
            var winWith = document.documentElement.clientWidth,
                winHeight = this.getWinHeight();
            var scale = 1;
            if (winWith / winHeight > ratio) {
                scale = winHeight / gameHeight
            } else {
                scale = winWith / gameWidth
            }
            var cssText = "width:" + gameWidth + "px;height:" + gameHeight + "px;transform: scale(" + scale + ") translate(-50%,-50%);-webkit-transform: \"scale(" + scale + ") translate(-50%,-50%);-moz-transform: \"scale(" + scale + ") translate(-50%,-50%);-ms-transform: \"scale(" + scale + ") translate(-50%,-50%);-o-transform: \"scale(" + scale + ") translate(-50%,-50%)";
            this.area.style.cssText = cssText
        } ///手机版竖屏
    }, {
        key: "isMobilePortrait",
        value: function isMobilePortrait() {
            var screen = window.screen;
            var isIOS = !!/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
            var isAndroid = !!navigator.userAgent.match(/(Android)/i);
            if (isIOS && window.orientation === 0) {
                return true
            }
            if (isAndroid && screen && screen.orientation && screen.orientation.type.indexOf("portrait") > -1) {
                return true
            }
            return false
        } /// iphone5, iphone5s特殊处理
    }, {
        key: "getWinHeight",
        value: function getWinHeight() {
            if (navigator.userAgent.indexOf("iPhone") > -1 && screen.height == 568 && screen.width == 320) {
                document.body.style.height = "200vh";
                return window.innerHeight
            }
            return document.documentElement.clientHeight
        }
    }, {
        key: "opacityAni",
        value: function opacityAni(target, opacity, duration, complete) {
            var count = 0;
            var originOpacity = Number(target.style.opacity || document.defaultView.getComputedStyle(target, null).opacity || 1);
            var opacityDiff = originOpacity - opacity;
            var currentOpacity = originOpacity;
            var w = window;
            var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame;
            var cancelAnimationFrame = w.cancelAnimationFrame || w.webkitRequestAnimationFrame || w.mozCancelAnimationFrame;
            var ticker = null;
            var step = function step() {
                count++;
                currentOpacity = originOpacity - opacityDiff / (duration / 16.66) * count;
                target.style.opacity = currentOpacity.toString();
                if (opacityDiff < 0 && currentOpacity > opacity || opacityDiff > 0 && currentOpacity < opacity) {
                    target.style.opacity = opacity.toString();
                    cancelAnimationFrame(ticker);
                    complete && complete()
                } else {
                    ticker = requestAnimationFrame(step)
                }
            };
            ticker = requestAnimationFrame(step)
        }
    }]);
    return Loader
}());