
	var serverString='';
    var XmlHttpRequest = new XMLHttpRequest();
    XmlHttpRequest.overrideMimeType("application/json");
    XmlHttpRequest.open('GET', '/arcade_config.json', false);
    XmlHttpRequest.onreadystatechange = function ()
    {
        if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
        {
            var serverConfig = JSON.parse(XmlHttpRequest.responseText);
            var session =  sessionStorage.getItem('gameSessionId')
            // console.log(serverConfig)
            // console.log(session)
            // serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port + '/eyJpdiI6IjNxNk5PK2h2VjBsWjNibWY5ZVN4akE9PSIsInZhbHVlIjoia1JlRDNNMjhvUEJDYmJJcG0wcUpxSW9oM3pocEVMZThXQkJ2WkdKSmU2MWJwTGY2MXVxNmQyWmZPMG1vZFAxSVIvSXQ4TEJEa01ybWw3aWh6N1FSRnJlSkYxWTlDZCtFNHNYNHo2dVJ1a0tiMFFjaW9OWUFpTFVaZGEvNUF6RFgiLCJtYWMiOiIwYmMwNmQ0YThiNzEwYThiMGM2NTgxNzZmNTk5ZTk1MGQ2YzdhMjg4Yjg5N2FmZGYyNjhhN2Y3NmQ4NWI0YjliIiwidGFnIjoiIn0%3D';
            serverString=serverConfig.prefix_ws+serverConfig.host_ws+':'+serverConfig.port +'/'+ session
            console.log(serverString)
          
        }
    }
    XmlHttpRequest.send(null);
! function(t) {
    function e(e) {
        for (var n, s, r = e[0], h = e[1], l = e[2], u = 0, d = []; u < r.length; u++) s = r[u], Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), o[s] = 0;
        for (n in h) Object.prototype.hasOwnProperty.call(h, n) && (t[n] = h[n]);
        for (c && c(e); d.length;) d.shift()();
        return a.push.apply(a, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < a.length; e++) {
            for (var i = a[e], n = !0, r = 1; r < i.length; r++) {
                var h = i[r];
                0 !== o[h] && (n = !1)
            }
            n && (a.splice(e--, 1), t = s(s.s = i[0]))
        }
        return t
    }
    var n = {},
        o = {
            4: 0
        },
        a = [];

    function s(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, s), i.l = !0, i.exports
    }
    s.m = t, s.c = n, s.d = function(t, e, i) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) s.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "";
    var r = window.webpackJsonp = window.webpackJsonp || [],
        h = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var c = h;
    a.push([169, 1, 2, 0, 3]), i()
}([function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        return function() {
            this.backHome = !0, this.dvcList = new Map, this.isSkip = !1
        }
    }();
    e.default = new n
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {
            this.gameCode = "F-SF02", this.width = 1440, this.height = 810, this.scale = 1
        }
        return t.prototype.init = function(t) {
            if (t)
                for (var e in t) this[e] = t[e]
        }, t
    }();
    e.default = new n
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(308),
        a = i(1),
        s = i(0),
        r = i(32),
        h = function() {
            function t() {}
            return t.getAngle = function(t, e) {
                var i = e.x - t.x,
                    n = (e.y, t.y, i < 0 ? Math.PI : 0);
                return Math.atan((e.y - t.y) / (e.x - t.x)) + n
            }, t.getAngles = function(e) {
                if (e.length < 1) return [];
                for (var i = [], n = 1; n < e.length; n++) {
                    var o = t.getAngle(e[n - 1], e[n]),
                        a = o - i[i.length - 1];
                    a > Math.PI && (o -= 2 * Math.PI), a < -Math.PI && (o += 2 * Math.PI), i.push(o)
                }
                return i
            }, t.getDistance = function(t) {
                for (var e = 0, i = 1; i < t.length; i++) {
                    var n = t[i - 1],
                        o = t[i];
                    e += Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2))
                }
                return e
            }, t.getTriangleSide = function(t, e) {
                return Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2))
            }, t.getRotatedPoint = function(t, e, i) {
                return new n.Point(t.x * Math.cos(i) - t.y * Math.sin(i) + e.x, t.x * Math.sin(i) + t.y * Math.cos(i) + e.y)
            }, t.checkRectHit = function(t, e) {
                if (!t || !e) return !1;
                for (var i = 0, n = e; i < n.length; i++)
                    for (var a = n[i], s = new o.OBB(new o.Vector2(a.rect.x + a.rect.width / 2, a.rect.y + a.rect.height / 2), a.rect.width, a.rect.height, a.rotation), r = 0, h = t; r < h.length; r++) {
                        var l = h[r],
                            c = new o.OBB(new o.Vector2(l.rect.x + l.rect.width / 2, l.rect.y + l.rect.height / 2), l.rect.width, l.rect.height, l.rotation);
                        if (s.detectCollision(c)) return l.rect
                    }
                return !1
            }, t.getLocalPosition = function(t, e) {
                return void 0 === e && (e = 1), t.x = t.x / e, t.y = t.y / e, t
            }, t.getTextStyle = function(t, e, i) {
                return void 0 === t && (t = 18), new PIXI.TextStyle({
                    fontFamily: e || "roboto",
                    fontSize: t,
                    fill: i || "#FFFFFF",
                    wordWrap: !0,
                    fontWeight: "normal"
                })
            }, t.getChairLine = function(t) {
                return t < 3 ? 0 : 1
            }, t.getAngleForView = function(t, e) {
                return void 0 === e && (e = !1), e ? t + Math.PI : t
            }, t.getPointForView = function(t, e) {
                return void 0 === e && (e = !1), e ? new n.Point(a.default.width - t.x, a.default.height - t.y) : t
            }, t.getCenterPoint = function() {
                return new n.Point(a.default.width / 2, a.default.height / 2)
            }, t.checkInScreen = function(t, e) {
                return void 0 === e && (e = 50), t.x < a.default.width - e && t.x > 0 + e && t.y < a.default.height - e && t.y > 0 + e
            }, t.createSprites = function(t, e, i) {
                for (var o = new Array, a = 0; a < t.length; a++) {
                    var s = PIXI.Sprite.fromFrame(t[a]);
                    s.position = e && e[a] || new n.Point(0, 0), o.push(s), i && i.addChild(s)
                }
                return o
            }, t.resetAmount = function(t) {
                return Math.floor(100 * t) / 100
            }, t.clone = function(t) {
                var e = {};
                for (var i in t) e[i] = t[i];
                return e
            }, t.formatAmount = function(t, e) {
                var i = a.default.currencyRatio[s.default.acct.currency],
                    n = i && -1 == ["THB"].indexOf(s.default.acct.currency) ? i < 100 ? 1 : 0 : e || 2;
                if (t *= i || 1, a.default.showCurrency) return s.default.acct.currency + t.toFixed(n);
                for (var o = Math.abs(t).toString(), r = t < 0 ? "-" : "", h = (o = parseFloat((o + "").replace(/[^\d\.-]/g, "")).toFixed(n)).split(".")[0].split("").reverse(), l = 0 == n ? "" : "." + o.split(".")[1], c = "", u = 0; u < h.length; u++) c += h[u] + ((u + 1) % 3 == 0 && u + 1 != h.length ? "," : "");
                return r + c.split("").reverse().join("") + l
            }, t.getRatioMultiply = function() {
                return a.default.currencyRatio[s.default.acct.currency] || 1
            }, t.getVisibilityChangeEventData = function() {
                var t = "",
                    e = "";
                return void 0 !== document.hidden ? (t = "hidden", e = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", e = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", e = "webkitvisibilitychange"), {
                    docHidden: t,
                    docVisibilityChange: e
                }
            }, t.getTimeZoneMillDiff = function(t) {
                var e = parseInt(t);
                return 60 * ((new Date).getTimezoneOffset() - -(e / 100 * 60 + 60 * (e % 100 == 0 ? 0 : .5))) * 1e3
            }, t.formatStr = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = t.length;
                if (i < 1) return "";
                var n = t[0],
                    o = !0;
                "object" == typeof n && (o = !1);
                for (var a = 1; a < i; ++a) {
                    var s = t[a];
                    if (o)
                        for (;;) {
                            if ("number" == typeof s && n.match(/(%d)|(%s)/)) {
                                n = n.replace(/(%d)|(%s)/, s);
                                break
                            }
                            n.match(/%s/) ? n = n.replace(/%s/, s) : n += "    " + s;
                            break
                        } else n += "    " + s
                }
                return n
            }, t.multiplyWithoutLoss = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var i = 1, n = 0, o = 0, a = t; o < a.length; o++) {
                    var s = a[o];
                    n += s.toString().split(".")[1] ? s.toString().split(".")[1].length : 0, i *= Number(s.toString().replace(".", ""))
                }
                return i / Math.pow(10, n)
            }, t.divideWithoutLoss = function(e) {
                for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                var o = e,
                    a = 0,
                    s = e.toString().split(".")[1] ? e.toString().split(".")[1].length : 0;
                o = Number(e.toString().replace(".", ""));
                for (var r = 0, h = i; r < h.length; r++) {
                    var l = h[r];
                    a += l.toString().split(".")[1] ? l.toString().split(".")[1].length : 0, o /= Number(l.toString().replace(".", ""))
                }
                return t.multiplyWithoutLoss(o, Math.pow(10, a - s))
            }, t.ignoreAmountDecimal = function(e) {
                return t.divideWithoutLoss(Math.floor(t.multiplyWithoutLoss(e, 100)), 100)
            }, t.decimalAdd = function(e) {
                for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                var o = 0;
                return o += t.multiplyWithoutLoss(e, 100), i.forEach(function(e) {
                    o += t.multiplyWithoutLoss(100 * e)
                }), t.divideWithoutLoss(o, 100)
            }, t.formatDateStrWithMS = function(t) {
                var e = t.split("."),
                    i = e[0],
                    n = e[1];
                i = i.replace(/[-]/g, "/");
                var o = new Date(i),
                    a = Number(n);
                return new Date(o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), a)
            }, t.upperStrByLan = function(t) {
                return [r.Language.Indonesian, r.Language.Vietnamese].indexOf(s.default.locale.lan) > -1 ? t.toLocaleUpperCase() : t
            }, t
        }();
    e.default = h
}, , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(311),
        s = i(73),
        r = i(2),
        h = i(0),
        l = i(3),
        c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.switchBack = !0, e.switchEffect = !0, e.bMute = !1, e.setToMute = !1, e.isLightnPlaying = !1, e.nowMusicArr = [], e
            }
            return o(e, t), e.prototype.init = function(t) {
                this.preLoad(), this.groupBg = new a.SoundGroup;
                for (var e = 0; e < 3; e++) this.groupBg.push(this.getSound(s.resourceSound["main_bg" + e], this.bMute)), this.groupBg.push(this.getSound(s.resourceSound["main_effect_bg" + e], this.bMute));
                this.initEvent()
            }, e.prototype.preLoad = function() {
                var t = h.default.locale.lan.toLocaleLowerCase();
                for (var e in t = ["en_us", "zh_cn", "th_th", "vi_vn"].indexOf(t) > -1 ? t : "en_us", s.resourceSound) "string" == typeof s.resourceSound[e] ? s.resourceSound[e] = s.resourceSound[e].replace(/\[lan\]/gi, t) : s.resourceSound[e].src = s.resourceSound[e].src.replace(/\[lan\]/gi, t)
            }, e.prototype.playAwakeningDragonIntro = function() {
                var t = this.getSound(s.resourceSound.awakening_dragon_hurt, this.bMute);
                t && t.play()
            }, e.prototype.playAwakeningDragonDead = function() {
                var t = this.getSound(s.resourceSound.awakening_dragon_dead, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeyKindAppear = function() {
                var t = this.getSound(s.resourceSound.monkey_king_appear, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeyKindDead = function() {
                var t = this.getSound(s.resourceSound.monkey_king_dead, this.bMute);
                t && t.play()
            }, e.prototype.speakGhostShipDead = function() {
                var t = this.getSound(s.resourceSound.ghostship_dead, this.bMute);
                t && t.play()
            }, e.prototype.speakGhostShipAppear = function() {
                var t = this.getSound(s.resourceSound.ghostship_appear, this.bMute);
                t && t.play()
            }, e.prototype.playDragonKingDead = function() {
                var t = this.getSound(s.resourceSound["dragon_king_hit_" + (Math.floor(2 * Math.random()) + 1)], this.bMute);
                t && t.play()
            }, e.prototype.playGoldenToadDead = function() {
                var t = this.getSound(s.resourceSound["golden_toad_hit_" + (Math.floor(2 * Math.random()) + 1)], this.bMute);
                t && t.play()
            }, e.prototype.playGoldenToadAppear = function() {
                var t = this.getSound(s.resourceSound.golden_toad_celebration, this.bMute);
                t && t.play()
            }, e.prototype.playEclipticCrabDead = function() {
                var t = this.getSound(s.resourceSound["ecliptic_crab_hit_" + (Math.floor(2 * Math.random()) + 1)], this.bMute);
                t && t.play()
            }, e.prototype.playEclipticCrabAppear = function() {
                var t = this.getSound(s.resourceSound.ecliptic_crab_celebration, this.bMute);
                t && t.play()
            }, e.prototype.playAzureDead = function() {
                var t = this.getSound(s.resourceSound.azure_hit, this.bMute);
                t && t.play()
            }, e.prototype.playAzureFreeze = function() {
                var t = this.getSound(s.resourceSound.azure_freeze, this.bMute);
                t && t.play()
            }, e.prototype.playThunderHammerDead = function() {
                var t = this.getSound(s.resourceSound.thunder_hammer_dead, this.bMute);
                t && t.play()
            }, e.prototype.playThunderHammerEffect = function() {
                var t = this.getSound(s.resourceSound.thunder_hammer_effect, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormDead = function() {
                var t = this.getSound(s.resourceSound.firestorm_dead, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormEffect = function() {
                var t = this.getSound(s.resourceSound.firestorm_effect, this.bMute);
                t && t.play()
            }, e.prototype.playMediumFishDead = function() {
                var t = this.getSound(s.resourceSound["mediumfish_" + Math.floor(2 * Math.random()) + "_" + (Math.floor(3 * Math.random()) + 1)], this.bMute);
                t && t.play()
            }, e.prototype.playLowFishDead = function() {
                var t = this.getSound(s.resourceSound["lowfish_" + Math.floor(2 * Math.random()) + "_" + (Math.floor(2 * Math.random()) + 1)], this.bMute);
                t && t.play()
            }, e.prototype.playBtnClick = function() {
                var t = this.getSound(s.resourceSound.btn_click, this.bMute);
                t && t.play()
            }, e.prototype.playIntroBg = function() {
                var t = this.getSound(s.resourceSound.intro_bg, this.bMute);
                if (t) {
                    var e = t.play();
                    t.fade(0, 1, 300, e)
                }
            }, e.prototype.stopIntroBg = function() {
                var t = this.getSound(s.resourceSound.intro_bg, this.bMute);
                t && t.stop()
            }, e.prototype.playMainBg = function(t) {
                this.clearSounds(), this.groupBg && this.groupBg.switchBySenceIndex(t, this.bMute)
            }, e.prototype.rePlayMainBg = function() {
                this.groupBg && this.groupBg.rePlay(this.bMute)
            }, e.prototype.stopMainBg = function() {
                this.groupBg && this.groupBg.stop()
            }, e.prototype.playAwakenDragonEffectIntro = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_effect_intro, this.bMute);
                t && t.play()
            }, e.prototype.playWaveEffect = function() {
                var t = this.getSound(s.resourceSound.wave_effect, this.bMute);
                t && t.play()
            }, e.prototype.playAwakenDragonEffectEnd = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_effect_end, this.bMute);
                t && t.play()
            }, e.prototype.playAwakenDragonEffectBg = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_effect_bg, this.bMute);
                if (t) {
                    var e = t.play();
                    t.fade(0, 1, 100, e), this.stopMainBg()
                }
            }, e.prototype.stopAwakenDragonEffectBg = function(t) {
                var e = this.getSound(s.resourceSound.awaken_dragon_effect_bg, this.bMute);
                e && e.stop(), !t && this.rePlayMainBg()
            }, e.prototype.playAwakenEffectCount = function(t) {
                t = t > 4 ? 4 : t;
                var e = this.getSound(s.resourceSound["countdown_" + t], this.bMute);
                e && e.play()
            }, e.prototype.playAwakenDragonSwim = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_swim, this.bMute);
                t && t.play()
            }, e.prototype.playAwakenDragonDead = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_dead, this.bMute);
                t && t.play()
            }, e.prototype.playAwakenDragonExplode = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_explode, this.bMute);
                t && t.play()
            }, e.prototype.stopAwakenDragonExplode = function() {
                var t = this.getSound(s.resourceSound.awaken_dragon_explode, this.bMute);
                t && t.stop()
            }, e.prototype.playCoinCounting = function() {
                var t = this.getSound(s.resourceSound.effect_coin_counting, this.bMute);
                t && t.play()
            }, e.prototype.playEffectCoinsGet = function() {
                var t = this.getSound(s.resourceSound.effect_coins_get, this.bMute);
                t && t.play()
            }, e.prototype.playGhostshipEffectIntro = function() {
                var t = this.getSound(s.resourceSound.ghostship_effect_intro, this.bMute);
                t && t.play()
            }, e.prototype.playGhostshipEffectAppear = function() {
                var t = this.getSound(s.resourceSound.ghostship_effect_appear, this.bMute);
                t && t.play()
            }, e.prototype.playGhostshipCannonExplode = function() {
                var t = this.getSound(s.resourceSound.ghostship_cannon_explode, this.bMute);
                t && t.play()
            }, e.prototype.stopGhostshipCannonExplode = function() {
                var t = this.getSound(s.resourceSound.ghostship_cannon_explode, this.bMute);
                t && t.stop()
            }, e.prototype.playGhostshipFinalExplode = function() {
                var t = this.getSound(s.resourceSound.ghostship_final_explode, this.bMute);
                t && t.play()
            }, e.prototype.playGhostshipMove = function() {
                var t = this.getSound(s.resourceSound.ghostship_move, this.bMute);
                t && t.play()
            }, e.prototype.stopGhostshipMove = function() {
                var t = this.getSound(s.resourceSound.ghostship_move, this.bMute);
                t && t.stop()
            }, e.prototype.playGhostshipEffectEnd = function() {
                var t = this.getSound(s.resourceSound.ghostship_effect_end, this.bMute);
                t && t.play()
            }, e.prototype.playGhostshipDead = function() {
                var t = this.getSound(s.resourceSound.ghostship_die, this.bMute);
                t && t.play()
            }, e.prototype.playTresureboxAppear = function() {
                var t = this.getSound(s.resourceSound.tresurebox_appear, this.bMute);
                t && t.play()
            }, e.prototype.playTresureboxWin = function() {
                var t = this.getSound(s.resourceSound.tresurebox_win, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerDead = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_dead, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerLight = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_light, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerHit = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_hit, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerEffectAppear = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_effect_appear, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerEffectWin = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_effect_win, this.bMute);
                t && t.play()
            }, e.prototype.playThunderhammerEffectMove = function() {
                var t = this.getSound(s.resourceSound.thunderhammer_effect_move, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingEffectIntro = function() {
                var t = this.getSound(s.resourceSound.monkeyking_effect_intro, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingEffectAppear = function() {
                var t = this.getSound(s.resourceSound.monkeyking_effect_appear, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingJump = function() {
                var t = this.getSound(s.resourceSound.monkeyking_jump, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingHit = function() {
                var t = this.getSound(s.resourceSound.monkeyking_hit, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingWin = function() {
                var t = this.getSound(s.resourceSound.monkeyking_effect_win, this.bMute);
                t && t.play()
            }, e.prototype.playMonkeykingBgFire = function() {
                var t = this.getSound(s.resourceSound.monkeyking_bg_fire, this.bMute);
                if (t) {
                    var e = t.play();
                    t.fade(0, 1, 100, e)
                }
            }, e.prototype.stopMonkeykingBgFire = function() {
                var t = this.getSound(s.resourceSound.monkeyking_bg_fire, this.bMute);
                t && t.stop()
            }, e.prototype.playGoldentoadMove = function() {
                var t = this.getSound(s.resourceSound.goldentoad_move, this.bMute);
                t && t.play()
            }, e.prototype.stopGoldentoadMove = function() {
                var t = this.getSound(s.resourceSound.goldentoad_move, this.bMute);
                t && t.stop()
            }, e.prototype.playGoldentoadWin = function() {
                var t = this.getSound(s.resourceSound.goldentoad_win, this.bMute);
                t && t.play()
            }, e.prototype.stopDragonKingIntro = function() {
                this.getSound(s.resourceSound.dragonking_intro, this.bMute).stop(), this.removeMusicArr("dragonking_intro")
            }, e.prototype.playDragonKingIntro = function(t, e) {
                var i = this,
                    n = this.getSound(s.resourceSound.dragonking_intro, this.bMute);
                n && n.play(), this.addMusicArr("dragonking_intro"), this.updateBgMusic();
                var o = t * (1 - e);
                o > 3 && (e <= 0 ? this.dragonKingTimer = setTimeout(function() {
                    i.dragonKingTimer = null, i.playDragonkingSwim()
                }, 3e3) : this.playDragonkingSwim(), this.dragonKingTimer2 = setTimeout(function() {
                    i.dragonKingTimer2 = null, i.stopDragonkingSwim()
                }, 1e3 * (o - 3)))
            }, e.prototype.addMusicArr = function(t) {
                this.nowMusicArr.unshift({
                    name: t
                })
            }, e.prototype.removeMusicArr = function(t) {
                var e = this;
                this.nowMusicArr.length < 1 || this.nowMusicArr.slice(0).forEach(function(i, n) {
                    i.name == t && e.nowMusicArr.splice(n, 1)
                })
            }, e.prototype.updateBgMusic = function() {
                var t = this,
                    e = -1,
                    i = -1;
                if (this.nowMusicArr.length > 0)
                    if (this.stopMainBg(), ["dragonking_intro", "dragonking_swim", "azurestone_bg", "wealth_packet_music"].forEach(function(e) {
                            var i = t.getSound(s.resourceSound[e], t.bMute);
                            i && i.volume(0)
                        }), this.nowMusicArr.forEach(function(t, n) {
                            "wealth_packet_music" == t.name ? e = n : "azurestone_bg" == t.name && (i = n)
                        }), -1 == e && -1 == i)(n = this.getSound(s.resourceSound[this.nowMusicArr[0].name], this.bMute)) && n.volume(1);
                    else if (-1 == e && -1 != i) {
                    (n = this.getSound(s.resourceSound.azurestone_bg, this.bMute)) && n.volume(1)
                } else if (-1 != e && -1 == i) {
                    (n = this.getSound(s.resourceSound.wealth_packet_music, this.bMute)) && n.volume(1)
                } else {
                    var n, o = e < i ? "wealth_packet_music" : "azurestone_bg";
                    (n = this.getSound(s.resourceSound[o], this.bMute)) && n.volume(1)
                } else this.rePlayMainBg()
            }, e.prototype.playDragonkingSwim = function() {
                this.stopDragonKingIntro();
                var t = this.getSound(s.resourceSound.dragonking_swim, this.bMute);
                t && t.play(), this.addMusicArr("dragonking_swim"), this.updateBgMusic()
            }, e.prototype.stopDragonkingSwim = function(t) {
                var e = this.getSound(s.resourceSound.dragonking_swim, this.bMute);
                e && e.stop(), this.removeMusicArr("dragonking_swim"), !t && this.updateBgMusic()
            }, e.prototype.playBigfishWin = function() {
                var t = this.getSound(s.resourceSound.bigfish_win, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormExplode = function() {
                var t = this.getSound(s.resourceSound.firestorm_explode, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormEffectAppear = function() {
                var t = this.getSound(s.resourceSound.firestorm_effect_appear, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormEffectWin = function() {
                var t = this.getSound(s.resourceSound.firestorm_effect_win, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormGunMove = function() {
                var t = this.getSound(s.resourceSound.firestorm_gun_move, this.bMute);
                t && t.play()
            }, e.prototype.playFirestormEffectStart = function() {
                var t = this.getSound(s.resourceSound.firestorm_effect_start, this.bMute);
                t && t.play()
            }, e.prototype.playAzureStoneEffectExplode = function() {
                var t = this.getSound(s.resourceSound.azurestone_effect_explode, this.bMute);
                t && t.play()
            }, e.prototype.playAzureStoneBg = function() {
                var t = this.getSound(s.resourceSound.azurestone_bg, this.bMute);
                t && t.play(), this.addMusicArr("azurestone_bg"), this.updateBgMusic()
            }, e.prototype.stopAzureStoneBg = function(t) {
                var e = this.getSound(s.resourceSound.azurestone_bg, this.bMute);
                e && e.stop(), this.removeMusicArr("azurestone_bg"), !t && this.updateBgMusic()
            }, e.prototype.playShot = function(t, e) {
                var i = this.getSound(s.resourceSound["gun_" + t + (e ? "_1" : "")], this.bMute);
                i && i.play()
            }, e.prototype.playGunChange = function() {
                var t = this.getSound(s.resourceSound.gun_change, this.bMute);
                t && t.play()
            }, e.prototype.playSpecialShot = function() {
                var t = this.getSound(s.resourceSound.special_shot, this.bMute);
                t && t.play()
            }, e.prototype.playFishLightHurt = function() {
                var t = this;
                if (!this.isLightnPlaying) {
                    var e = this.getSound(s.resourceSound.fish_light_hurt, this.bMute);
                    if (e) this.isLightnPlaying = !0, e.play(), (new l.TimelineLite).call(function() {
                        t.isLightnPlaying = !1
                    }, null, null, "+=2")
                }
            }, e.prototype.playDragonWheelAppear = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_appear, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelIntro = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_intro, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelDropOff = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_drop_eff, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelSway = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_sway, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelWin = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_win, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelWin100 = function() {
                var t = this.getSound(s.resourceSound.deliver_wheel_win_x100, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelElecricShock = function() {
                var t = this.getSound(s.resourceSound.elecric_shock, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelSelect = function() {
                var t = this.getSound(s.resourceSound.wheel_select, this.bMute);
                t && t.play()
            }, e.prototype.playDragonWheelSpin = function() {
                var t = this.getSound(s.resourceSound.wheel_spin, this.bMute);
                t && t.play()
            }, e.prototype.playWealthPacketaway = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_angpow_away, this.bMute);
                t && t.play()
            }, e.prototype.playWealthPacketClose = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_close, this.bMute);
                t && t.play()
            }, e.prototype.playWealthPacketBg = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_music, this.bMute);
                t && t.play(), this.addMusicArr("wealth_packet_music"), this.updateBgMusic()
            }, e.prototype.stopWealthPacketBg = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_music, this.bMute);
                t && t.stop(), this.removeMusicArr("wealth_packet_music"), this.updateBgMusic()
            }, e.prototype.playWealthPacketOpen = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_open, this.bMute);
                t && t.play()
            }, e.prototype.playWealthPacketSelect = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_select_button, this.bMute);
                t && t.play()
            }, e.prototype.playWealthPacketTotalWin = function() {
                var t = this.getSound(s.resourceSound.wealth_packet_totalwin, this.bMute);
                t && t.play()
            }, e.prototype.clearSounds = function() {
                this.dragonKingTimer && (clearTimeout(this.dragonKingTimer), this.dragonKingTimer = null), this.dragonKingTimer2 && (clearTimeout(this.dragonKingTimer2), this.dragonKingTimer2 = null), this.stopMainBg(), this.stopMonkeykingBgFire(), this.stopAwakenDragonEffectBg(!0), this.stopAzureStoneBg(!0), this.stopDragonkingSwim(!0), this.stopGhostshipMove(), this.stopGoldentoadMove()
            }, e.prototype.initEvent = function() {
                var t = this,
                    e = r.default.getVisibilityChangeEventData(),
                    i = e.docHidden,
                    n = e.docVisibilityChange;
                document.addEventListener(n, function() {
                    document[i] ? (t.mute(), t.bMute = !0) : (t.switchBack && t.getChannel("back") && t.getChannel("back").unmute(), t.switchEffect && t.getChannel("effect") && t.getChannel("effect").unmute(), t.bMute = t.setToMute)
                })
            }, e.prototype.switchSound = function() {
                var t = this.getChannel("effect"),
                    e = this.getChannel("back");
                this.switchBack && this.switchEffect ? (this.switchBack = !1, this.switchEffect = !1, this.bMute = !0, this.setToMute = !0, t && t.mute(), e && e.mute()) : (this.switchBack = !0, this.switchEffect = !0, this.bMute = !1, this.setToMute = !1, t && t.unmute(), e && e.unmute())
            }, e
        }(a.SoundManager);
    e.default = new c
}, , , , , function(t, e, i) {
    "use strict";
    var n, o;
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            t[t.Small = 0] = "Small", t[t.Medium = 1] = "Medium", t[t.Large = 2] = "Large", t[t.Special = 3] = "Special"
        }(n || (n = {})), e.FishType = n,
        function(t) {
            t[t.EclipticCrab = 19] = "EclipticCrab", t[t.GoldenToad = 20] = "GoldenToad", t[t.DragonKing = 21] = "DragonKing", t[t.FireStorm = 100] = "FireStorm", t[t.ThunderHammer = 101] = "ThunderHammer", t[t.AzureStone = 102] = "AzureStone", t[t.Dragon = 103] = "Dragon", t[t.MonkeyKing = 104] = "MonkeyKing", t[t.GhostShip = 105] = "GhostShip", t[t.DragonWheel = 106] = "DragonWheel", t[t.Redpacket = 107] = "Redpacket"
        }(o || (o = {})), e.FishKind = o;
    var a = function() {
        function t() {}
        return t.isSpecialFish = function(t) {
            return t >= o.FireStorm && t <= o.DragonWheel || t == o.Redpacket
        }, t.isBigEffectFish = function(t) {
            return t >= o.Dragon && t <= o.GhostShip
        }, t.isAniFish = function(t) {
            return [19, 21, 100, 101, 104, 106].indexOf(t) > -1
        }, t.isNoRotationFish = function(t) {
            return t >= o.FireStorm && t <= o.DragonWheel || [o.DragonKing].indexOf(t) > -1
        }, t
    }();
    e.FishUtils = a
}, , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
        return function() {}
    }();
    e.Session = a;
    var s = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(a);
    e.MyRequest = s
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {}
        return t.isMobile = function() {
            return !!navigator.userAgent.replace("SpadeGaming", "").match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || this.isIpad()
        }, t.isIpad = function() {
            var t = !!navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/),
                e = !!/macintosh/.test(navigator.userAgent.toLowerCase()) && "ontouchend" in document;
            return !!t || !!e
        }, t.isAndroid = function() {
            return !!navigator.userAgent.replace("SpadeGaming", "").match(/(Android)/i)
        }, t.isIos = function() {
            return !!/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        }, t.isIphoneX = function() {
            var t = 375 == screen.width && 812 == screen.height || 320 == screen.width && 693 == screen.height;
            return !!(this.isIos() && t && 3 == window.devicePixelRatio)
        }, t.iosVersion = function() {
            var t = (navigator.userAgent.toLowerCase().match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
            return t = t.split(".")[0], parseInt(t)
        }, t.iphoneVersion = function() {
            return navigator.userAgent.indexOf("iPhone") > -1 && 568 == screen.height && 320 == screen.width ? "iphone5S || iphone5" : ""
        }, t.isIE = function() {
            return !!window.ActiveXObject || "ActiveXObject" in window
        }, t.isEdge = function() {
            return !this.isIE() && (navigator.userAgent.indexOf("Trident/7.0;") > -1 && !this.isIE() || navigator.userAgent.indexOf("Edge") > -1)
        }, t.getOSName = function() {
            var t = navigator,
                e = "Unknown",
                i = !1,
                n = !1,
                o = "",
                a = /android (\d+(?:\.\d+)+)/i.exec(t.userAgent) || /android (\d+(?:\.\d+)+)/i.exec(t.platform);
            if (a && (i = !0, o = a[1] || "", parseInt(o) || 0), (a = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(t.userAgent)) && (n = !0, o = a[2] || "", parseInt(o) || 0), -1 !== t.appVersion.indexOf("Win")) {
                if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(t.userAgent) && "NT" == RegExp.$1) switch (RegExp.$2) {
                    case "5.0":
                        e = "Windows2000";
                        break;
                    case "5.1":
                        e = "WindowsXP";
                        break;
                    case "6.0":
                        e = "WindowsVista";
                        break;
                    case "6.1":
                        e = "Windows7";
                        break;
                    case "6.2":
                        e = "Windows8";
                        break;
                    case "10.0":
                        e = "Windows10";
                        break;
                    default:
                        e = "NT"
                }
            } else n ? e = "iOS_" + o : -1 !== t.appVersion.indexOf("Mac") ? e = "OS X_" : -1 !== t.appVersion.indexOf("X11") && -1 === t.appVersion.indexOf("Linux") ? e = "OS X" : i ? e = "Android_" + o : -1 !== t.appVersion.indexOf("Linux") && (e = "Linux");
            return e
        }, t.getBrowserInfo = function() {
            var t = navigator.userAgent.toLowerCase(),
                e = navigator.userAgent,
                i = !1;
            (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("android") > -1 && e.indexOf("WebKit") > -1) && (i = !0);
            var n = e.indexOf("Opera") > -1,
                o = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !n,
                a = e.indexOf("Trident/7.0;") > -1 && !o || e.indexOf("Edge") > -1,
                s = e.indexOf("Firefox") > -1,
                r = e.indexOf("Safari") > -1 && -1 == e.indexOf("Chrome"),
                h = e.indexOf("Chrome") > -1 && e.indexOf("Safari") > -1,
                l = "";
            if (o) {
                var c = parseFloat(RegExp.$1);
                new RegExp("MSIE (\\d+\\.\\d+);").test(e), l = c < 7 ? "IE版本过低" : "IE-" + c
            } else if (s) {
                l = "Firefox-" + t.match(/firefox\/([\d.]+)/)[1]
            } else if (n) {
                l = "Opera-" + t.match(/opera.([\d.]+)/)[1]
            } else if (r) {
                if (i) l = "Safari";
                else l = "Safari-" + t.match(/version\/([\d.]+)/)[1]
            } else if (h) {
                l = "Chrome-" + t.match(/chrome\/([\d.]+)/)[1]
            } else a && (l = "Edge");
            return l
        }, t.isIE10 = function() {
            var t = navigator.userAgent;
            if (t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 && (new RegExp("MSIE (\\d+\\.\\d+);").test(t), 10 == parseFloat(RegExp.$1))) return !0;
            return !1
        }, t
    }();
    e.default = n
}, , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(16);
    e.MyRequest = n.MyRequest;
    var o = i(138);
    e.MyResponse = o.MyResponse;
    var a = i(273),
        s = i(274),
        r = i(1),
        h = i(277),
        l = i(282),
        c = function() {
            function t(t, e) {
                void 0 === e && (e = !1), this.LOGIN = 1, this.LOGOUT = 2, this.SERVER_TIME = 6, this.PUSH_KICKOUT = -1, this.INFO_UPDATE = -3, this.BALANCE_UPDATE = -4, this.EncryptionCommand = 99999, this.AES_Key = "", this.AES_IV = "", this.AES_Key_Original = "", this.timeCode = "", this.regUrl = /^wss?:\/\/.+\.[a-zA-Z]*(:\d+)?/, this.regMessage = /^-?\d+\.{.*}$/, this.isManualClose = !1, this.recCounter = 0, this.recCounterMax = 0, this.timeout = 6e4, this.regUrl.test(t) && (this.url = t, this.register = {}, this.timerMap = new Map, this.recCounterMax = e ? this.recCounterMax : 0, this.queue = new Array, this.connect())
            }
            return t.prototype.enCrypt = function(t) {
                if (!1 === r.default.showEncrypt) return t;
                var e = l.AES.encrypt(t, this.AES_Key, {
                    iv: this.AES_IV
                }).ciphertext;
                return l.enc.Base64.stringify(e)
            }, t.prototype.deCrypt = function(t) {
                return !1 === r.default.showEncrypt ? t : l.AES.decrypt(t, this.AES_Key, {
                    iv: this.AES_IV
                }).toString(l.enc.Utf8)
            }, t.prototype.isEncryptionCommandMsg = function(t) {
                var e = parseInt(t.split(".")[0]);
                return !1 !== r.default.showEncrypt && e == this.EncryptionCommand
            }, t.prototype.initAESKey = function(t, e, i) {
                t && 0 != t.length ? (this.totp = h.TOTP(t, 1800), this.timeCode = this.totp.now(), this.AES_Key_Original = e, this.AES_IV = l.enc.Hex.parse(i), this.AES_Key = l.MD5(this.AES_Key_Original + this.timeCode)) : (this.AES_Key = l.enc.Hex.parse(e), this.AES_IV = l.enc.Hex.parse(i))
            }, t.prototype.connect = function() {
                var t = this,
                    e = new WebSocket(serverString);
                    // e = io("ws://localhost:8080/game",{withCredentials: true,
                    // transports: ['websocket']})
                // e.on("connect", () => {
                //     console.log(e.id); // x8WIv7-mJelg7on_ALbx
                //     t.onOpen(e)
                //   });
                //   e.on("connect_error", (err) => {
                //     console.log(err); // x8WIv7-mJelg7on_ALbx
                //   });
                e.onopen = function(e) {
                    t.onOpen(e)
                }, e.onclose = function(e) {
                    t.onClose(e)
                }, e.onmessage = function(e) {
                    t.onMessage(e)
                }, e.onerror = function(e) {
                    t.onError(e)
                }, this.socket = e
            }, t.prototype.reConnect = function() {
                var t = this;
                clearTimeout(this.recTimer), this.recCounter != this.recCounterMax ? this.recTimer = setTimeout(function() {
                    t.recCounter++, t.connect()
                }, 5e3) : !this.isManualClose && this.onErrorHandle && this.onErrorHandle(a.default.SOCKET_ERR)
            }, t.prototype.parseJsonData = function(t) {
                try {
                    var e = t.indexOf("{");
                    return {
                        command: parseInt(t.substr(0, e)),
                        data: JSON.parse(t.substr(e))
                    }
                } catch (t) {
                    return null
                }
            }, t.prototype.onMessageAfter = function(t, e, i) {
                delete t.serialNo, delete t.sessionId, delete t.token, t.code > 0 ? i && i(t.code, t.extMsg) || this.onErrorHandle && this.onErrorHandle(t.code, t.extMsg) : e && e(t)
            }, t.prototype.send = function(t, e, i, n) {
                 var o = this;
            if (this.socket.readyState != WebSocket.OPEN)
                this.queue.push({
                    command: t,
                    data: e,
                    callback: i
                });
            else {
                var s = t == this.EncryptionCommand ? t + "." : (u++).toString();
                var sess = sessionStorage.getItem('gameSessionId')
                var j = JSON.parse(localStorage.getItem('user'))
                var id = j.user.id
                // console.log( id)
                // console.log(typeof id)
                 this.register[s] = {
                    callback: i,
                    errCallback: n
                },
                e.serialNo = s,
                this.session = j
                this.session && (e.sessionId = this.session.user.id,
                e.token = this.session.access_token),
                e = this.compressData(t, e);
				e.t=t;
                var r = JSON.stringify(e);
				var tmpPar=':::{"sessionId":"'+sess+'","userId":"'+id+'","gameData":'+r+',"cookie":"'+document.cookie+'","gameName":"FishingWarSG"}';
                console.log(tmpPar)
                this.socket.send(tmpPar),
                this.printMessage("websocket Request: " + t + "." + JSON.stringify(e), t);
                var h = setTimeout(function() {
               //     o.onErrorHandle && o.onErrorHandle(a.default.TIMEOUT, "Timeout!"),
               //    o.socket.close()
                }, this.timeout);
                //this.timerMap.set(s, h)
            }
            }, t.prototype.onMessage = function(t) {
                
            var e = this;
            
            var c = t.data;
			
			
            
                var u = this.parseJsonData(c);
			
                if (u) {
                    this.printMessage("websocket Response: " + c, u.command);
                    var d = u.data;
                    if (this.session || (this.session = new n.Session,
                    this.session.sessionId = d.sessionId,
                    this.session.token = d.token),
                    d = this.uncompressData(u.command, d),
                    u.command > 0) {
                        clearTimeout(this.timerMap.get(d.serialNo)),
                        this.timerMap.delete(d.serialNo);
                        var f = this.register[d.serialNo];
                        delete this.register[d.serialNo],
                        this.onMessageAfter(d, f.callback, f.errCallback)
                    } else {
                        (f = this.register[u.command]) && f.callback && f.callback(d)
                    }
                }
            }, t.prototype.compressData = function(t, e) {
                return e
            }, t.prototype.uncompressData = function(t, e) {
                return e
            }, t.prototype.bindPushEvent = function(t, e) {
                t < 0 && (this.register[t] = {
                    callback: e
                })
            }, t.prototype.printMessage = function(t, e) {}, t.prototype.clearPushEvent = function(t) {
                if (s.isUndefined(t)) {
                    for (var e in this.register)
                        if (/^\-\d+$/.test(e)) {
                            var i = parseInt(e);
                            i < 0 && (this.register[i] = null, delete this.register[i])
                        }
                } else this.register[t] = null, delete this.register[t]
            }, t.prototype.onOpen = function(t) {
                console.log(this)
                var e = this,
                    i = function() {
                        console.log(e.recTimer)
                        e.recTimer > 0 && clearTimeout(e.recTimer), e.recCounter = 0, e.isManualClose = !1, e.onOpenHandle && e.onOpenHandle();
                        var t = function() {
                            if (e.queue.length > 0) {
                                var i = e.queue.shift();
                                e.send(i.command, i.data, i.callback), e.queue.length > 0 && setTimeout(function() {
                                    t()
                                }, 100)
                            }
                        };
                        t()
                    };
                !1 === r.default.showEncrypt ? i() : this.send(this.EncryptionCommand, new n.MyRequest, i)
            }, t.prototype.onClose = function(t) {
                this.reConnect()
            }, t.prototype.onError = function(t) {
                this.onErrorHandle && this.onErrorHandle(a.default.SOCKET_ERR)
            }, t.prototype.login = function(t, e) {
                this.send(this.LOGIN, t, e)
            }, t.prototype.logout = function(t, e) {
                this.send(this.LOGOUT, t, e)
            }, t.prototype.getServerTime = function(t) {
                this.send(this.SERVER_TIME, new n.MyRequest, t)
            }, t.prototype.bindKickout = function(t) {
                this.bindPushEvent(this.PUSH_KICKOUT, t)
            }, t.prototype.bindUpdate = function(t) {
                this.bindPushEvent(this.INFO_UPDATE, t)
            }, t.prototype.bindBalanceUpdate = function(t) {
                this.bindPushEvent(this.BALANCE_UPDATE, t)
            }, t
        }();
    e.Service = c;
    var u = 0
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function() {
            function t() {}
            return t.drawLine = function(t) {
                var e = new PIXI.Graphics;
                e.lineStyle(4, 16767232, 1);
                for (var i = 0, o = t; i < o.length; i++) {
                    var a = o[i];
                    e.moveTo(a.start.x, a.start.y), e.lineTo(a.end.x, a.end.y)
                }
                n.default.app.stage.addChild(e)
            }, t.drawPoint = function(t) {
                var e = new PIXI.Graphics;
                e.beginFill(16724736, .8);
                for (var i = 0, o = t; i < o.length; i++) {
                    var a = o[i];
                    e.drawCircle(a.x, a.y, 10)
                }
                e.endFill(), n.default.app.stage.addChild(e)
            }, t.drawRect = function(t, e, i, o) {
                if (void 0 === e && (e = n.default.app.stage), void 0 === i && (i = 65280), void 0 === o && (o = .5), t) {
                    var a = new PIXI.Graphics;
                    a.beginFill(i, o);
                    for (var s = 0, r = t; s < r.length; s++) {
                        var h = r[s];
                        a.drawRect(h.x, h.y, h.width, h.height)
                    }
                    return a.endFill(), e.addChild(a)
                }
            }, t.drawPolygon = function(t, e) {
                var i = new PIXI.Graphics;
                i.beginFill(65280, .5);
                for (var o = 0; o < t.length; o++) 0 == o ? i.moveTo(t[o].x, t[o].y) : i.lineTo(t[o].x, t[o].y);
                i.lineTo(t[0].x, t[0].y), i.endFill(), (e || n.default.app.stage).addChild(i)
            }, t
        }();
    e.Graph = o
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(80),
        a = i(3),
        s = i(2),
        r = i(0),
        h = i(1),
        l = i(14),
        c = function() {
            function t(t) {
                this.hasDoTakeWin = !1, this.isHighSeat = !1, this.allShotWin = 0, this.signalInterrupt = !1, this.isReady = !1, this.tmlList = [], this.maxWinTxtLen = 300, this.scene = t.scene, this.batteryContainer = t.batteryContainer, this.effectContainer = t.effectContainer, this.winContainer = t.winContainer, this.fishKind = t.fishKind, this.chairId = t.chairId, this.fishId = t.fishId, this.fish = t.fish, this.totalBet = t.totalBet, this.odds = t.odds, this.totalWin = t.totalWin, this.background = t.background, this.hasDestroy = !1, this.onIntro = t.onIntro, this.onRemoveFish = t.onRemoveFish, this.onCatch = t.onCatch, this.onShot = t.onShot, this.onPreComplete = t.onPreComplete, this.onComplete = t.onComplete, this.onEffectStart = t.onEffectStart, this.isHighSeat = this.batteryContainer.getChairNo(this.chairId) > 2, this.coinPos = s.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), h.default.scale), this.destPos = this.getTargetPos(), this.winTextPos = this.effectContainer.toLocal(s.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId, !0)))
            }
            return t.prototype.intro = function(t, e, i) {
                this.initWinText(), this.chairId < 0 ? this.introMine() : this.introOthers()
            }, t.prototype.initWinText = function() {
                this.container = new PIXI.Container, this.effectContainer.addChild(this.container), this.winEffect = new PIXI.spine.Spine(r.default.resources.bigfish_intro.spineData), this.winEffect.skeleton.setToSetupPose(), this.winTxt = this.createTxt("number_effect_intro", 60), this.winTxt.position.set(0, 150), this.winEffect.addChild(this.winTxt), this.chairId > 0 && this.winEffect.scale.set(.8), this.container.addChild(this.winEffect), this.container.scale.set(0)
            }, t.prototype.updateWinTxt = function(t) {
                this.winTxt.text = t, this.winTxt.width = this.winTxt.width > this.maxWinTxtLen ? this.maxWinTxtLen : this.winTxt.width
            }, t.prototype.introMine = function(t, e) {
                var i = this;
                void 0 === t && (t = 2);
                var n = this.container.scale,
                    o = this.container.position,
                    s = this.getWinAniNameArr(),
                    r = s[0],
                    h = s[1],
                    l = (s[2], new a.TimelineLite);
                l.call(function() {
                    i.winEffect.state.setAnimation(0, r, !1), h && i.winEffect.state.addAnimation(0, h, !0, 0), e && e()
                }, null, null, "+=" + t), l.to(n, .5, {
                    x: 1,
                    y: 1,
                    ease: a.Elastic.easeOut.config(1, .5)
                }).to(n, .5, {
                    x: .5,
                    y: .5,
                    ease: a.Power1.easeIn,
                    onStart: function() {
                        return i.effectStartMove()
                    }
                }, "+=1").to(o, .5, {
                    x: this.destPos.x,
                    y: this.destPos.y,
                    ease: a.Power1.easeIn
                }, "-=0.5"), l.call(function() {
                    return i.effectStart()
                }), this.tmlList.push(l)
            }, t.prototype.introOthers = function(t, e, i) {
                var n = this;
                void 0 === t && (t = 2), void 0 === e && (e = 1);
                var o = this.container.scale,
                    s = this.container.position,
                    r = this.getWinAniNameArr(),
                    h = r[0],
                    l = r[1],
                    c = (r[2], new a.TimelineLite);
                c.call(function() {
                    n.winEffect.state.setAnimation(0, h, !1), l && n.winEffect.state.addAnimation(0, l, !0, 0), i && i()
                }, null, null, "+=" + t), c.set(s, {
                    x: this.destPos.x,
                    y: this.destPos.y
                }), c.to(o, .8, {
                    x: .5,
                    y: .5,
                    ease: a.Elastic.easeIn.config(.8, .4)
                }), c.call(function() {
                    return n.effectStart()
                }, null, null, "+=" + e), this.tmlList.push(c)
            }, t.prototype.initTotalWinTxt = function() {
                var t = s.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), h.default.scale),
                    e = new n.Point(t.x - h.default.width / 2, t.y - h.default.height / 2),
                    i = this.chairId; - 1 == this.chairId && (i = r.default.deskInfo.chairId);
                var o = [1, 3].indexOf(i) > -1,
                    a = new PIXI.extras.BitmapText("", {
                        font: "30px number_gold"
                    });
                a.anchor = .5, a.alpha = 0, a.position = {
                    x: e.x + (o ? 150 : 30),
                    y: e.y > 0 ? e.y + 40 : e.y - 40
                }, this.totalWinTxt = a, this.effectContainer.addChild(this.totalWinTxt)
            }, t.prototype.getTargetPos = function(t) {
                void 0 === t && (t = 50);
                var e = this.effectContainer.toLocal(s.default.getLocalPosition(this.batteryContainer.getBatteryPosition(this.chairId, !0)));
                return {
                    x: e.x,
                    y: e.y > 0 ? e.y - t : e.y + t
                }
            }, t.prototype.winEffectEnd = function(t) {
                var e = this.getWinAniNameArr(),
                    i = e[0],
                    n = e[1],
                    o = e[2];
                this.winEffect.state.clearTracks(), this.winEffect.state.setAnimation(0, i, !1), n && this.winEffect.state.addAnimation(0, n, !0, 0), o && this.winEffect.skeleton.setSkinByName(o), this.chairId < 0 ? this.endMine(t) : this.endOthers(t)
            }, t.prototype.endMine = function(t) {
                var e = this,
                    i = this.container.scale,
                    n = this.container.position,
                    o = new a.TimelineLite({
                        onComplete: function() {
                            e.endMineAni(t)
                        }
                    });
                o.to(i, .5, {
                    x: 1,
                    y: 1,
                    ease: a.Power1.easeIn
                }).to(n, .5, {
                    x: 0,
                    y: 0,
                    ease: a.Power1.easeIn
                }, "-=0.5"), this.tmlList.push(o)
            }, t.prototype.endMineAni = function(t) {
                this.startDestroyAni()
            }, t.prototype.startDestroyAni = function(t, e) {
                var i = this;
                void 0 === t && (t = !0), void 0 === e && (e = 1.5);
                var n = this.container.scale,
                    o = new a.TimelineLite;
                o.to(n, .5, {
                    x: 0,
                    y: 0,
                    ease: a.Elastic.easeIn.config(.8, .4)
                }, "+=" + e), o.call(function() {
                    t && i.destroy()
                }), this.tmlList.push(o)
            }, t.prototype.endOthers = function(t) {
                var e = this,
                    i = this.container.scale,
                    n = new a.TimelineLite;
                n.to(i, .5, {
                    x: 0,
                    y: 0,
                    ease: a.Elastic.easeIn.config(.8, .4)
                }, "+=2"), n.call(function() {
                    e.destroy()
                }), this.tmlList.push(n)
            }, t.prototype.getWinAniNameArr = function() {
                var t;
                switch (this.fishKind) {
                    case l.FishKind.FireStorm:
                        t = ["fire_enter", "fire_wait", "fire_enter2"];
                        break;
                    case l.FishKind.Dragon:
                        t = ["dragon_enter2", "dragon_wait2", "dragon_2"];
                        break;
                    case l.FishKind.ThunderHammer:
                        t = ["hammer_enter", "", "hammer_1"];
                        break;
                    case l.FishKind.MonkeyKing:
                        t = ["monkey_enter2", "monkey_wait2", "monkey_2"];
                        break;
                    case l.FishKind.AzureStone:
                        t = ["ice_enter", "", ""];
                        break;
                    case l.FishKind.GhostShip:
                        t = ["pirate_enter2", "", "pirate_1"]
                }
                return t
            }, t.prototype.playSweepEnd = function(t, e) {}, t.prototype.playSweepEndOther = function(t, e) {}, t.prototype.sweep = function(t, e, i) {
                t.forEach(function(t, i) {
                    e(t, i)
                })
            }, t.prototype.showCoins = function(t) {
                this.coinContainer = new o.default, this.coinContainer.position.set(.5 * -h.default.width, .5 * -h.default.height), this.effectContainer.addChild(this.coinContainer), this.coinContainer.show(t)
            }, t.prototype.showWinAni = function(t, e, i) {
                var o = this;
                void 0 === i && (i = !0);
                var r = -1 == this.chairId,
                    h = this.createTxt("number" + (r ? "_gold" : "_gray"), 50);
                this.effectContainer.addChild(h);
                var l = this.winTextPos,
                    c = l.y < 0,
                    u = l.x < 0;
                l.x = u ? l.x + 100 : l.x + 180, l.y = c ? l.y + 40 : l.y - 40, h.anchor = new n.Point(u ? 0 : 1, .5), h.position.set(l.x, l.y), h.alpha = 1, h.text = "+" + s.default.formatAmount(t), h.scale.set(0);
                var d = new a.TimelineLite({
                    onComplete: function() {
                        i && o.destroy(), e && e(o.allShotWin)
                    }
                });
                d.to(h, .55, {
                    y: c ? l.y + 70 : l.y - 70,
                    ease: a.Power4.easeInOut
                }), d.to(h.scale, .4, {
                    x: 1.2,
                    y: 1.2,
                    ease: a.Power4.easeInOut
                }, "-=0.55"), d.to(h.scale, .15, {
                    x: 1,
                    y: 1,
                    ease: a.Power4.easeInOut
                }, "-=0.4"), d.to(h, .5, {
                    alpha: 0
                }, "+=1.5"), d.to(h.scale, .5, {
                    x: 0,
                    y: 0
                }, "-=0.5"), this.tmlList.push(d)
            }, t.prototype.createTxt = function(t, e) {
                var i = new PIXI.extras.BitmapText("", {
                    font: {
                        name: t,
                        size: e
                    }
                });
                return i.anchor = .5, i
            }, t.prototype.effectStartMove = function() {}, t.prototype.effectStart = function() {}, t.prototype.takeWin = function(t) {
                if (!this.hasDestroy) {
                    if (this.allShotWin += t, !this.hasDoTakeWin) {
                        this.hasDoTakeWin = !0;
                        var e = this.totalWinTxt.y > 0 ? "-=100" : "+=140",
                            i = a.TweenMax.to(this.totalWinTxt, .3, {
                                alpha: 1
                            }),
                            n = a.TweenMax.to(this.totalWinTxt, .3, {
                                y: e
                            });
                        this.tmlList.push(i, n)
                    }
                    this.totalWinTxt.text = "+" + s.default.formatAmount(this.allShotWin)
                }
            }, t.prototype.destroy = function() {
                for (var t = this.effectContainer.children.length, e = 0; e < t; e++) {
                    var i = this.effectContainer.children[0];
                    this.effectContainer.removeChild(i), i.destroy(), i = null
                }
                this.onComplete(), this.hasDestroy = !0, this.tmlList.forEach(function(t) {
                    return t.kill()
                })
            }, t.prototype.interrupt = function() {
                this.signalInterrupt = !0, this.isReady && this.destroy()
            }, t
        }();
    e.default = c
}, , , , , , , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = function() {
        function t(t) {
            this.map = {}, this.setLanguage(t), this.initMap(a[this.lan])
        }
        return t.prototype.setLanguage = function(t) {
            switch (t) {
                case n.Chinese:
                case n.English:
                case n.Thai:
                case n.Indonesian:
                case n.Vietnamese:
                case n.Japanese:
                case n.Korean:
                case n.Russian:
                case n.Turkish:
                    return void(this.lan = t)
            }
            this.lan = n.English
        }, t.prototype.initMap = function(t) {
            for (var e in t) this.map[e] = t[e]
        }, t.prototype.getString = function(t) {
            return this.map[t] || t
        }, t
    }();
    e.Locale = o,
        function(t) {
            t.Chinese = "zh_CN", t.English = "en_US", t.Thai = "th_TH", t.Indonesian = "id_ID", t.Vietnamese = "vi_VN", t.Japanese = "ja_JP", t.Korean = "ko_KR", t.Russian = "ru_RU", t.Turkish = "tr_TR"
        }(n || (n = {})), e.Language = n;
    var a = {
        en_US: {
            TXT_INIT: "Initializing..."
        },
        zh_CN: {
            TXT_INIT: "正在初始化..."
        },
        th_TH: {
            TXT_INIT: "เริ่มต้น..."
        },
        id_ID: {
            TXT_INIT: "inisialisasi..."
        },
        vi_VN: {
            TXT_INIT: "Khởi tạo..."
        },
        ja_JP: {
            TXT_INIT: "初期化中..."
        },
        ko_KR: {
            TXT_INIT: "초기화 중..."
        },
        ru_RU: {
            TXT_INIT: "Инициализация..."
        },
        tr_TR: {
            TXT_INIT: "başlatılıyor..."
        }
    }
}, , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(49),
        s = i(2),
        r = i(1),
        h = i(0),
        l = i(3),
        c = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.closeDuring = 2e3, e.interactive = !0, e.initBack(0, .6), e.initText(), e
            }
            return o(e, t), e.prototype.initMessageFrame = function() {
                if (!this.frameSnippets) {
                    this.frameSnippets = [];
                    this.frameSnippets = s.default.createSprites(["Frame_Left.png", "Frame_Center.png", "Frame_Right.png"], [], this), this.frameSnippets.forEach(function(t, e) {
                        0 == e && t.anchor.set(1, .5), 1 == e && t.anchor.set(.5), 2 == e && t.anchor.set(0, .5), t.position.set(r.default.width / 2, r.default.height / 2)
                    })
                }
            }, e.prototype.initText = function() {
                var t = new PIXI.Text("", s.default.getTextStyle(28));
                t.style.align = "center", t.style.wordWrapWidth = 970, t.anchor.set(.5), t.position.set(r.default.width / 2, r.default.height / 2), this.addChild(t), this.text = t
            }, e.prototype.setMessageFrameScale = function() {
                var t = this.text.width,
                    e = t < 140 ? 200 : t + 60;
                this.frameSnippets[1].scale.set(e / 222, 1), this.frameSnippets[0].x = (r.default.width - e + 1) / 2, this.frameSnippets[2].x = (r.default.width + e - 1) / 2;
                var i = (this.text.height - 34 + 88) / 88;
                this.frameSnippets.forEach(function(t) {
                    return t.scale.y = i
                })
            }, e.prototype.showMessage = function(t, e) {
                void 0 === e && (e = !1), this.text.text = t, this.visible = !0, h.default.app.stage.addChild(this), l.TweenLite.to(this, .2, {
                    alpha: 1
                }), this.showFormat(e)
            }, e.prototype.showError = function(t, e, i) {
                void 0 === e && (e = !1);
                var n = i || h.default.locale.getString("RES_" + t);
                document.getElementById("barProgress") ? this.showErrorInProgressBar(n) : this.parent && this.visible ? (this.text.text = n, this.showFormat(e)) : this.showMessage(n, e)
            }, e.prototype.showErrorInProgressBar = function(t) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("mymessage", !1, !1), e.txtMessage = t, document.dispatchEvent(e)
            }, e.prototype.showFormat = function(t) {
                var e = this;
                this.initMessageFrame(), this.setMessageFrameScale(), this.setChildIndex(this.text, this.children.length - 1), t ? (this.autoCloseTimer && clearTimeout(this.autoCloseTimer), this.autoCloseTimer = setTimeout(function() {
                    e.hide(), e.autoCloseTimer = null
                }, this.closeDuring)) : ["App-i", "App-a"].indexOf(h.default.params.channel) > -1 && this.once("pointerdown", function() {
                    document.location.href = "message://login"
                })
            }, e.prototype.hide = function() {
                t.prototype.hide.call(this), this.alpha = 0, this.parent && this.parent.removeChild(this)
            }, e
        }(a.default);
    e.default = new c
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(21),
        s = i(1),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e.prototype.initBack = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = .8), this.back = a.Graph.drawRect([{
                    x: 0,
                    y: 0,
                    width: s.default.width,
                    height: s.default.height
                }], this, t, e), this.back.interactive = !0
            }, e.prototype.show = function() {
                this.visible = !0
            }, e.prototype.hide = function() {
                this.visible = !1
            }, e
        }(PIXI.Container);
    e.default = r
}, , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(3),
        s = i(0),
        r = i(73),
        h = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.ticker = new PIXI.ticker.Ticker, e.ticker.start(), e
            }
            return o(e, t), e.prototype.init = function() {}, e.prototype.addToStage = function() {
                var t = this;
                s.default.scene && s.default.scene.unload(), this.load(function() {
                    s.default.app.stage.addChildAt(t, 0), s.default.scene && s.default.scene.hide(), s.default.scene = t, t.init(), s.default.dvcList.set(t.name + "_docVisibilityChange", t.docVisibilityChange.bind(t))
                })
            }, e.prototype.show = function() {
                this.visible = !0
            }, e.prototype.hide = function() {
                this.visible = !1, this.destroy({
                    children: !0
                }), s.default.dvcList.delete(this.name + "_docVisibilityChange")
            }, e.prototype.docVisibilityChange = function(t) {}, e.prototype.load = function(t) {
                var e = r.resourceMap[this.name];
                if (!e || e.length < 1) return t();
                for (var i = 0, n = s.default.app.renderer.textureManager, o = [], a = [], h = 0, l = e; h < l.length; h++) {
                    var c = l[h],
                        u = PIXI.utils.BaseTextureCache[c.tag];
                    u && (o.push(u), c.keep && a.push(u))
                }
                if (o.length < 1) return t();
                if (!n) return t();
                for (; i < o.length;) n.updateTexture(o[i]), i++;
                t(), a.length > 0 && this.ticker.add(function() {
                    for (var t = s.default.app.renderer.textureGC, e = 0, i = a; e < i.length; e++) {
                        i[e].touched = t.count
                    }
                })
            }, e.prototype.unload = function() {
                var t = r.resourceMap[this.name];
                if (t && !(t.length < 1)) {
                    var e = s.default.app.renderer.textureManager;
                    if (e)
                        for (var i = 0, n = t; i < n.length; i++) {
                            var o = n[i],
                                a = PIXI.utils.BaseTextureCache[o.tag];
                            a && e.destroyTexture(a)
                        }
                }
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this), this.ticker.destroy(), a.TweenMax.killAll()
            }, e
        }(PIXI.Container);
    e.default = h
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.resource = {
        intro: "./assets/lobby/intro_lobby.json",
        intro_banner: "./assets/lobby/banner.json",
        intro_wave: "./assets/lobby/bg_wave.json",
        intro_bg: "./assets/lobby/intro_bg.jpg",
        intro_number: "./assets/lobby/intro_number.xml",
        bg1: "./assets/bg/bg1.jpg",
        bg2: "./assets/bg/bg2.jpg",
        bg4: "./assets/bg/bg4.jpg",
        bg6: "./assets/bg/bg6.jpg",
        bg_transition: "./assets/bg/bg_transition.json",
        fire_light: "./assets/bg/fire_light.json",
        fire_bg: "./assets/bg/fire_bg.json",
        dragon_after: "./assets/bg/dragon_after.json",
        monkey_after: "./assets/bg/monkey_after.json",
        tutorial: "./assets/tutorial/tutorial.json",
        gun_halo: "./assets/tutorial/gun_halo.json",
        gun: "./assets/gun/gun.json",
        gun_spe: "assets/gun/gun_spe.json",
        acct_board: "./assets/gun/acct_board.png",
        gun_bet_back: "./assets/gun/gun_bet_back.png",
        controlpanel: "./assets/controlpanel/controlpanel.json",
        aimFish: "./assets/aim_fish/aim_fish_target.json",
        Target: "./assets/controlpanel/Target.png",
        bullet: "./assets/bullet/bullet.json",
        aim_target: "./assets/aim_target.png",
        auto_target: "./assets/auto_target.png",
        lightn_target: "./assets/lightn_target.png",
        wallet: "./assets/walletcheck/wlck.png",
        number_gold: "./assets/bitmapfont/number_gold.xml",
        number_gray: "./assets/bitmapfont/number_gray.xml",
        hammer_number: "./assets/bitmapfont/hammer_number.xml",
        lightn_number: "./assets/bitmapfont/lightn_number.xml",
        redpacket_number: "./assets/bitmapfont/redpacket_number.xml",
        redpacket_number_gray: "./assets/bitmapfont/redpacket_number_gray.xml",
        fish0to2: "./assets/hq/fishes/fish0to2.json",
        fish3: "./assets/hq/fishes/fish3.json",
        fish4to7: "./assets/hq/fishes/fish4to7.json",
        fish8_9: "./assets/hq/fishes/fish8_9.json",
        fish10_11: "./assets/hq/fishes/fish10_11.json",
        fish12_13: "./assets/hq/fishes/fish12_13.json",
        fish14: "./assets/hq/fishes/fish14.json",
        fish15_16: "./assets/hq/fishes/fish15_16.json",
        fish17: "./assets/hq/fishes/fish17.json",
        fish18: "./assets/hq/fishes/fish18.json",
        fish20: "./assets/hq/fishes/fish20.json",
        fish102: "./assets/hq/fishes/fish102.json",
        fish103_1: "./assets/hq/fishes/fish103_1.json",
        fish103_2: "./assets/hq/fishes/fish103_2.json",
        fish103_3: "./assets/hq/fishes/fish103_3.json",
        fish103_4: "./assets/hq/fishes/fish103_4.json",
        fish105_1: "./assets/hq/fishes/fish105_1.json",
        fish105_2: "./assets/hq/fishes/fish105_2.json",
        fishes_lightn_0to2: "./assets/hq/fishes_lightn/fish_lightn_0to2.json",
        fishes_lightn_3: "./assets/hq/fishes_lightn/fish_lightn_3.json",
        fishes_lightn_4: "./assets/hq/fishes_lightn/fish_lightn_4.json",
        fishes_lightn_5: "./assets/hq/fishes_lightn/fish_lightn_5.json",
        fishes_lightn_6: "./assets/hq/fishes_lightn/fish_lightn_6.json",
        fishes_lightn_7: "./assets/hq/fishes_lightn/fish_lightn_7.json",
        fishes_lightn_8: "./assets/hq/fishes_lightn/fish_lightn_8.json",
        fishes_lightn_9: "./assets/hq/fishes_lightn/fish_lightn_9.json",
        fishes_lightn_10: "./assets/hq/fishes_lightn/fish_lightn_10.json",
        fishes_lightn_11: "./assets/hq/fishes_lightn/fish_lightn_11.json",
        fishes_lightn_12: "./assets/hq/fishes_lightn/fish_lightn_12.json",
        fishes_lightn_13: "./assets/hq/fishes_lightn/fish_lightn_13.json",
        fishes_lightn_14: "./assets/hq/fishes_lightn/fish_lightn_14.json",
        fishes_lightn_15: "./assets/hq/fishes_lightn/fish_lightn_15.json",
        fishes_lightn_16: "./assets/hq/fishes_lightn/fish_lightn_16.json",
        fishes_lightn_17to18: "./assets/hq/fishes_lightn/fish_lightn_17to18.json",
        fishes_lightn_20_1: "./assets/hq/fishes_lightn/fish_lightn_20_1.json",
        fishes_lightn_20_2: "./assets/hq/fishes_lightn/fish_lightn_20_2.json",
        fishes_lightn_102_1: "./assets/hq/fishes_lightn/fish_lightn_102_1.json",
        fishes_lightn_102_2: "./assets/hq/fishes_lightn/fish_lightn_102_2.json",
        fishes_lightn_103_1: "./assets/hq/fishes_lightn/fish_lightn_103_1.json",
        fishes_lightn_103_2: "./assets/hq/fishes_lightn/fish_lightn_103_2.json",
        fishes_lightn_103_3: "./assets/hq/fishes_lightn/fish_lightn_103_3.json",
        fishes_lightn_105_1: "./assets/hq/fishes_lightn/fish_lightn_105_1.json",
        fishes_lightn_105_2: "./assets/hq/fishes_lightn/fish_lightn_105_2.json",
        trail: "./assets/trail.png",
        shadow1: "./assets/fishes/shadow1.json",
        shadow2: "./assets/fishes/shadow2.json",
        shadow3: "./assets/fishes/shadow3.json",
        shadow4: "./assets/fishes/shadow4.json",
        shadow5: "./assets/fishes/shadow5.json",
        shadow6: "./assets/fishes/shadow6.json",
        boomeffect: "./assets/shoteffect/boomeffect.json",
        coin: "./assets/shoteffect/coin.json",
        bigfish_celebration: "./assets/bigfish_celebration/catch_effect.json",
        win_number: "./assets/bigfish_celebration/win_number.xml",
        bigfish_intro: "./assets/bigfish_intro/board.json",
        bigfish_intro_up: "./assets/bigfish_intro/board_up.json",
        fish_intro: "./assets/fish_intro/coming.json",
        crab: "./assets/fishes/crab.json",
        crab_light: "./assets/fishes/crab_light.json",
        goldentoad_die_eff: "./assets/effect/goldentoad/goldentoad_die.json",
        dragonKing: "./assets/fishes/longwang.json",
        dragonKing_light: "./assets/fishes/longwang_light.json",
        dragon_bg: "./assets/dragon/dragon_bg.json",
        dragon_boom: "./assets/dragon/long_boom.json",
        dragon_effect_round_bg: "./assets/dragon/dragon_effect_round_bg.png",
        auto_select_panel: "./assets/autoselectpanel/auto_select_panel.json",
        auto_select_panel_bg: "./assets/autoselectpanel/auto_select_bg.png",
        hammer: "./assets/effect/thunderhammer/hammer.json",
        hammer_light: "./assets/effect/thunderhammer/hammer_light.json",
        hammer_bg: "./assets/effect/thunderhammer/hammer_bg.json",
        monkeyking: "./assets/effect/monkeyking/monkey.json",
        monkeyking_light: "./assets/effect/monkeyking/monkey_light.json",
        monkeyking_rolling: "./assets/effect/monkeyking/rolling.json",
        monkeyking_fire: "./assets/effect/monkeyking/fire_column.json",
        monkey_bg: "./assets/effect/monkeyking/monkey_bg.json",
        firestorm: "./assets/firestorm/firestorm.json",
        firestorm_light: "./assets/firestorm/firestorm_light.json",
        ice_bg: "./assets/bg/ice_bg.json",
        ghostship_ani_swim: "./assets/effect/ghostship/pirateship_boom/pirateship_boom.json",
        ghostship_ani_boom: "./assets/effect/ghostship/pirateship_boom/ship_boom.json",
        ghostship_box_ani: "./assets/effect/ghostship/box.json",
        ghostship_box: "./assets/effect/ghostship/gs_box.png",
        ghostship_box_num_bg: "./assets/effect/ghostship/gs_num_bg.png",
        redpacket_bag: "./assets/effect/redpacket/packet.json",
        radpacket_board: "./assets/effect/redpacket/packet_board.json",
        redpacket: "./assets/effect/redpacket/redpacket.json",
        redpacket_totalwin: "./assets/effect/redpacket/[lan]/redpacket_totalwin.png",
        light_flow: "./assets/wheel/light_flow/center_wheel.json",
        bigwheel: "./assets/wheel/big/bigwheel.json",
        normalWheel: "./assets/wheel/normal/normalwheel.json",
        smallWheel: "./assets/wheel/small/smallwheel.json",
        cursor: "./assets/wheel/cursor/cursor.json",
        circle_pic: "./assets/wheel/circle_pic/circle_pic.json",
        dragonWheel: "./assets/fishes/dragon_wheel.json",
        dragonWheel_light: "./assets/fishes/dragon_wheel_light.json",
        dragonWheel_panel: "./assets/effect/dragonwheel/dragon_panel.json",
        paytable_lan: "./assets/paytable/[lan]/paytable_lan.png",
        paytable_common: "./assets/paytable/paytable_com.png",
        messagelayer: "./assets/messagelayer/messagelayer.json",
        number_effect_intro: "./assets/bitmapfont/number_effect_intro.xml",
        number_dragon_round: "./assets/dragon/number_dragon_round.xml",
        firestorm_number: "./assets/bitmapfont/firestorm_number.xml",
        number_free_info: "./assets/bitmapfont/number_free_info.xml",
        freeContBg: "./assets/firestorm/freeContBg.png",
        lightning: "./assets/lightning/lightning.json",
        l10n: "./assets/l10n/[lan]/l10n.json"
    };
    e.resourceMap = {
        home: []
    };
    e.resourceSound = {
        btn_click: "./assets/sound/btn_click.mp3",
        awakening_dragon_hurt: "./assets/sound/voice/[lan]/male/awakening_dragon_hurt.mp3",
        awakening_dragon_dead: "./assets/sound/voice/[lan]/male/awakening_dragon_dead.mp3",
        monkey_king_appear: "./assets/sound/voice/[lan]/male/monkey_king_appear.mp3",
        monkey_king_dead: "./assets/sound/voice/[lan]/male/monkey_king_dead.mp3",
        ghostship_dead: "./assets/sound/voice/[lan]/female/ghostship_dead.mp3",
        ghostship_appear: "./assets/sound/voice/[lan]/female/ghostship_appear.mp3",
        dragon_king_hit_1: "./assets/sound/voice/[lan]/male/dragon_king_hit_1.mp3",
        dragon_king_hit_2: "./assets/sound/voice/[lan]/male/dragon_king_hit_2.mp3",
        golden_toad_hit_1: "./assets/sound/voice/[lan]/male/golden_toad_hit_1.mp3",
        golden_toad_hit_2: "./assets/sound/voice/[lan]/male/golden_toad_hit_2.mp3",
        golden_toad_celebration: "./assets/sound/goldentoad/goldentoad_celebration.mp3",
        ecliptic_crab_hit_1: "./assets/sound/voice/[lan]/male/ecliptic_crab_hit_1.mp3",
        ecliptic_crab_hit_2: "./assets/sound/voice/[lan]/male/ecliptic_crab_hit_2.mp3",
        ecliptic_crab_celebration: "./assets/sound/eclipticcrab/ecliptic_crab_celebration.mp3",
        azure_hit: "./assets/sound/voice/[lan]/female/azure_hit.mp3",
        azure_freeze: "./assets/sound/voice/[lan]/female/azure_freeze.mp3",
        thunder_hammer_dead: "./assets/sound/voice/[lan]/male/thunder_hammer_dead.mp3",
        thunder_hammer_effect: "./assets/sound/voice/[lan]/male/thunder_hammer_effect.mp3",
        firestorm_dead: "./assets/sound/voice/[lan]/male/firestorm_dead.mp3",
        firestorm_effect: "./assets/sound/voice/[lan]/male/firestorm_effect.mp3",
        mediumfish_0_1: "./assets/sound/voice/[lan]/female/mediumfish_1.mp3",
        mediumfish_0_2: "./assets/sound/voice/[lan]/female/mediumfish_2.mp3",
        mediumfish_0_3: "./assets/sound/voice/[lan]/female/mediumfish_3.mp3",
        mediumfish_1_1: "./assets/sound/voice/[lan]/male/mediumfish_1.mp3",
        mediumfish_1_2: "./assets/sound/voice/[lan]/male/mediumfish_2.mp3",
        mediumfish_1_3: "./assets/sound/voice/[lan]/male/mediumfish_3.mp3",
        lowfish_0_1: "./assets/sound/voice/[lan]/female/lowfish_1.mp3",
        lowfish_0_2: "./assets/sound/voice/[lan]/female/lowfish_2.mp3",
        lowfish_1_1: "./assets/sound/voice/[lan]/male/lowfish_1.mp3",
        lowfish_1_2: "./assets/sound/voice/[lan]/male/lowfish_2.mp3",
        intro_bg: {
            src: "./assets/sound/intro/intro_bg.mp3",
            loop: !0,
            group: "back"
        },
        main_bg0: {
            src: "./assets/sound/maingame/main_bg0.mp3",
            loop: !0,
            group: "back"
        },
        main_bg1: {
            src: "./assets/sound/maingame/main_bg1.mp3",
            loop: !0,
            group: "back"
        },
        main_bg2: {
            src: "./assets/sound/maingame/main_bg2.mp3",
            loop: !0,
            group: "back"
        },
        main_effect_bg0: {
            src: "./assets/sound/maingame/main_effect_bg0.mp3",
            loop: !0,
            group: "back"
        },
        main_effect_bg1: {
            src: "./assets/sound/maingame/main_effect_bg1.mp3",
            loop: !0,
            group: "back"
        },
        main_effect_bg2: {
            src: "./assets/sound/maingame/main_effect_bg2.mp3",
            loop: !0,
            group: "back"
        },
        awaken_dragon_effect_intro: "./assets/sound/awakendragon/effect_intro.mp3",
        awaken_dragon_effect_end: "./assets/sound/awakendragon/effect_end.mp3",
        wave_effect: "./assets/sound/awakendragon/wave_effect.mp3",
        awaken_dragon_effect_bg: {
            src: "./assets/sound/awakendragon/effect_bg.mp3",
            loop: !0,
            group: "back"
        },
        countdown_1: "./assets/sound/awakendragon/countdown_1.mp3",
        countdown_2: "./assets/sound/awakendragon/countdown_2.mp3",
        countdown_3: "./assets/sound/awakendragon/countdown_3.mp3",
        countdown_4: "./assets/sound/awakendragon/countdown_4.mp3",
        awaken_dragon_swim: "./assets/sound/awakendragon/dragon_swim.mp3",
        awaken_dragon_dead: "./assets/sound/awakendragon/dragon_dead.mp3",
        awaken_dragon_explode: "./assets/sound/awakendragon/dragon_explode.mp3",
        effect_coins_get: "./assets/sound/awakendragon/coins_effect.mp3",
        effect_coin_counting: "./assets/sound/effect/coin_counting.mp3",
        ghostship_effect_intro: "./assets/sound/ghostship/effect_intro.mp3",
        ghostship_effect_appear: "./assets/sound/ghostship/effect_appear.mp3",
        ghostship_cannon_explode: "./assets/sound/ghostship/cannon_explode.mp3",
        ghostship_final_explode: "./assets/sound/ghostship/final_explode.mp3",
        ghostship_move: {
            src: "./assets/sound/ghostship/ghostship_move.mp3",
            loop: !0,
            group: "effect"
        },
        ghostship_effect_end: "./assets/sound/ghostship/effect_end.mp3",
        tresurebox_appear: "./assets/sound/ghostship/tresurebox_appear.mp3",
        tresurebox_win: "./assets/sound/ghostship/tresurebox_win.mp3",
        thunderhammer_light: "./assets/sound/thunderhammer/effect_light.mp3",
        thunderhammer_dead: "./assets/sound/thunderhammer/hammer_dead.mp3",
        thunderhammer_hit: "./assets/sound/thunderhammer/hammer_hit.mp3",
        thunderhammer_effect_appear: "./assets/sound/thunderhammer/effect_appear.mp3",
        thunderhammer_effect_win: "./assets/sound/thunderhammer/effect_win.mp3",
        thunderhammer_effect_move: "./assets/sound/thunderhammer/effect_move.mp3",
        monkeyking_effect_intro: "./assets/sound/monkeyking/effect_intro.mp3",
        monkeyking_effect_appear: "./assets/sound/monkeyking/effect_appear.mp3",
        monkeyking_effect_win: "./assets/sound/monkeyking/effect_win.mp3",
        monkeyking_jump: "./assets/sound/monkeyking/monkey_jump.mp3",
        monkeyking_hit: "./assets/sound/monkeyking/monkey_hit.mp3",
        monkeyking_bg_fire: {
            src: "./assets/sound/monkeyking/monkey_bg_fire.mp3",
            loop: !0,
            group: "effect"
        },
        goldentoad_move: {
            src: "./assets/sound/goldentoad/goldentoad_move.mp3",
            loop: !0,
            group: "effect"
        },
        goldentoad_win: "./assets/sound/goldentoad/goldentoad_win.mp3",
        dragonking_intro: "./assets/sound/dragonking/dragonking_intro.mp3",
        dragonking_ending: "./assets/sound/dragonking/dragonking_ending.mp3",
        dragonking_swim: {
            src: "./assets/sound/dragonking/dragonking_swim.mp3",
            loop: !0,
            group: "effect"
        },
        bigfish_win: "./assets/sound/bigfish_win.mp3",
        firestorm_explode: "./assets/sound/firestorm/firestorm_explode.mp3",
        firestorm_effect_appear: "./assets/sound/firestorm/effect_appear.mp3",
        firestorm_effect_win: "./assets/sound/firestorm/effect_win.mp3",
        firestorm_gun_move: "./assets/sound/firestorm/gun_move.mp3",
        firestorm_effect_start: "./assets/sound/firestorm/effect_start.mp3",
        azurestone_effect_explode: "./assets/sound/azurestone/azurestone_explode.mp3",
        azurestone_bg: "./assets/sound/azurestone/azurestone_bg.mp3",
        gun_1: "./assets/sound/gun/gun_1.mp3",
        gun_1_1: "./assets/sound/gun/gun_1_1.mp3",
        gun_2: "./assets/sound/gun/gun_2.mp3",
        gun_2_1: "./assets/sound/gun/gun_2_1.mp3",
        gun_3: "./assets/sound/gun/gun_3.mp3",
        gun_3_1: "./assets/sound/gun/gun_3_1.mp3",
        gun_4: "./assets/sound/gun/gun_4.mp3",
        gun_4_1: "./assets/sound/gun/gun_4_1.mp3",
        gun_5: "./assets/sound/gun/gun_5.mp3",
        gun_5_1: "./assets/sound/gun/gun_5_1.mp3",
        gun_6: "./assets/sound/gun/gun_6.mp3",
        gun_6_1: "./assets/sound/gun/gun_6_1.mp3",
        gun_change: "./assets/sound/gun/gun_change.mp3",
        special_shot: "./assets/sound/gun/firestorm_shoot.mp3",
        fish_light_hurt: "./assets/sound/fish_light_hurt.mp3",
        deliver_wheel_intro: "./assets/sound/dragonwheel/deliver_wheel_intro.mp3",
        deliver_wheel_appear: "./assets/sound/dragonwheel/deliver_wheel_appear.mp3",
        deliver_wheel_drop_eff: "./assets/sound/dragonwheel/deliver_wheel_drop_eff.mp3",
        deliver_wheel_sway: "./assets/sound/dragonwheel/deliver_wheel_sway.mp3",
        deliver_wheel_win: "./assets/sound/dragonwheel/deliver_wheel_win.mp3",
        deliver_wheel_win_x100: "./assets/sound/dragonwheel/deliver_wheel_win_x100.mp3",
        elecric_shock: "./assets/sound/dragonwheel/elecric_shock.mp3",
        wheel_select: "./assets/sound/dragonwheel/wheel_select.mp3",
        wheel_spin: "./assets/sound/dragonwheel/wheel_spin.mp3",
        wealth_packet_music: {
            src: "./assets/sound/wealthpacket/wealth_packet_music.mp3",
            loop: !0,
            group: "effect"
        },
        wealth_packet_angpow_away: "./assets/sound/wealthpacket/wealth_packet_angpow_away.mp3",
        wealth_packet_close: "./assets/sound/wealthpacket/wealth_packet_close.mp3",
        wealth_packet_open: "./assets/sound/wealthpacket/wealth_packet_open.mp3",
        wealth_packet_select_button: "./assets/sound/wealthpacket/wealth_packet_select_button.mp3",
        wealth_packet_totalwin: "./assets/sound/wealthpacket/wealth_packet_totalwin.mp3"
    }
}, , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            void 0 === t && (t = 50), this.max = 80, this.list = [], this.aliveList = [], this.max = t
        }
        return t.prototype.create = function(t) {
            var e;
            return e = this.list.length > 0 ? this.list.shift() : t(), this.aliveList.push(e), e
        }, t.prototype.delete = function(t) {
            var e = this.removeFromAlive(t);
            e && (this.list.length > this.max ? e.destroy() : this.list.push(e))
        }, t.prototype.removeFromAlive = function(t) {
            for (var e = 0; e < this.aliveList.length; e++) {
                if (t == this.aliveList[e]) return this.aliveList.splice(e, 1)[0]
            }
        }, t
    }();
    e.Pool = n
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(3),
        a = i(2),
        s = i(14),
        r = i(1),
        h = function() {
            function t() {}
            return t.prototype.trace = function(t, e, i, a, s) {
                var r;
                switch (e) {
                    case n.LINE1:
                        r = this.trace1.bind(this);
                        break;
                    case n.LINE2:
                        r = this.trace2.bind(this);
                        break;
                    case n.LINE3:
                        r = this.trace3.bind(this);
                        break;
                    case n.LINE4:
                        r = this.trace4.bind(this);
                        break;
                    case n.LINE5:
                        r = this.trace5.bind(this);
                        break;
                    case n.LINE6:
                        r = this.trace6.bind(this);
                        break;
                    case n.LINE7:
                        r = this.trace7.bind(this);
                        break;
                    case n.LINE8:
                        r = this.trace8.bind(this);
                        break;
                    case n.LINE9:
                        r = this.trace9.bind(this);
                        break;
                    case n.LINE10:
                        r = this.trace10.bind(this);
                        break;
                    case n.LINE11:
                        r = this.trace11.bind(this);
                        break;
                    case n.LINE12:
                        r = this.trace12.bind(this);
                        break;
                    case n.LINE13:
                        r = this.trace13.bind(this);
                        break;
                    case n.LINE14:
                        r = this.trace14.bind(this);
                        break;
                    case n.LINE15:
                        r = this.trace15.bind(this);
                        break;
                    case n.LINE16:
                        r = this.trace16.bind(this)
                }
                var h = this.getDuring(a, s || t.speed),
                    l = new o.TimelineLite;
                return 1 != t.alpha && l.call(function() {
                    return t.alpha = 1
                }), l.add(r(t, h, i, a)), l
            }, t.prototype.getDuring = function(t, e) {
                return a.default.getDistance(t) / e
            }, t.prototype.trace1 = function(t, e, i, n) {
                if (!(n.length < 2)) {
                    var r = n[0],
                        h = n[1];
                    return t.x = r.x, t.y = r.y, !s.FishUtils.isNoRotationFish(t.realKind) && (t.rotation = t.angle + a.default.getAngle(r, h)), t.swim(), o.TweenLite.to(t, e, {
                        ease: o.Linear.easeNone,
                        x: h.x,
                        y: h.y,
                        onComplete: i
                    })
                }
            }, t.prototype.trace2 = function(t, e, i, n) {
                if (!(n.length < 3)) {
                    var r = n[0];
                    e /= n.length - 1;
                    var h = a.default.getAngles(n);
                    t.swim();
                    var l = new o.TimelineLite({
                        onComplete: i
                    });
                    l.set(t, {
                        x: r.x,
                        y: r.y
                    }), !s.FishUtils.isNoRotationFish(t.realKind) && l.set(t, {
                        rotation: t.angle + h[0]
                    });
                    for (var c = 1; c < n.length; c++) {
                        var u = n[c];
                        l.to(t, e, {
                            x: u.x,
                            y: u.y,
                            ease: o.Linear.easeNone
                        }, c > 1 ? "-=0.2" : ""), !s.FishUtils.isNoRotationFish(t.realKind) && l.to(t, .3, {
                            ease: o.Linear.easeNone,
                            rotation: t.angle + h[c]
                        }, "-=0.1")
                    }
                    return l
                }
            }, t.prototype.trace3 = function(t, e, i, n) {
                if (!(n.length < 3)) {
                    e /= n.length - 1;
                    for (var r = a.default.getAngles(n), h = t.angle, l = new o.TimelineLite({
                            onComplete: i
                        }), c = 0; c < n.length; c++) {
                        var u = n[c];
                        c > 0 ? (l.to(t, e, {
                            ease: o.Power1.easeOut,
                            x: u.x,
                            y: u.y
                        }, c > 1 ? "-=1" : ""), l.call(function() {
                            return t.swim()
                        }), !s.FishUtils.isNoRotationFish(t.realKind) && l.to(t, 2, {
                            ease: o.Elastic.easeInOut,
                            rotation: r[c] + h
                        })) : (l.set(t, {
                            x: u.x,
                            y: u.y
                        }), !s.FishUtils.isNoRotationFish(t.realKind) && l.set(t, {
                            rotation: r[0] + h
                        }))
                    }
                    return l
                }
            }, t.prototype.trace4 = function(t, e, i, n) {
                t.swim();
                var a = n[0],
                    r = new o.TimelineMax({
                        onComplete: i
                    });
                return r.set(t, {
                    x: a.x,
                    y: a.y
                }), r.to(t, e, {
                    ease: o.Linear.easeNone,
                    bezier: {
                        type: "soft",
                        autoRotate: !s.FishUtils.isNoRotationFish(t.kind) && !0,
                        values: n
                    },
                    onUpdate: function() {
                        s.FishUtils.isNoRotationFish(t.kind) || (t.rotation = Math.PI / 180 * t.rotation + t.angle)
                    }
                }), r
            }, t.prototype.trace5 = function(t, e, i, n) {
                if (!(n.length < 5)) {
                    e /= n.length - 1, t.swim();
                    for (var r = a.default.getAngles(n), h = new o.TimelineMax({
                            onComplete: i
                        }), l = 0; l < n.length; l++) {
                        var c = n[l];
                        l > 0 ? (h.to(t, e, {
                            ease: o.Linear.easeNone,
                            x: c.x,
                            y: c.y
                        }, l > 1 ? "-=0.2" : ""), !s.FishUtils.isNoRotationFish(t.realKind) && h.to(t, .4, {
                            ease: o.Linear.easeNone,
                            rotation: r[l] + t.angle
                        }, "-=0.2")) : (h.set(t, {
                            x: c.x,
                            y: c.y
                        }), !s.FishUtils.isNoRotationFish(t.realKind) && h.set(t, {
                            rotation: r[0] + t.angle
                        }))
                    }
                    return h
                }
            }, t.prototype.trace6 = function(t, e, i, n) {
                return this.trace4(t, e, i, n)
            }, t.prototype.trace7 = function(t, e, i, n) {
                return this.trace4(t, e, i, n)
            }, t.prototype.trace8 = function(t, e, i, n) {
                var r = {
                        f6: [1, .7],
                        f8: [1, .7],
                        f9: [1.6, 1],
                        f11: [1.8, .6]
                    } ["f" + t.kind],
                    h = n[0],
                    l = a.default.getAngles(n);
                t.loop = !1;
                for (var c = new o.TimelineMax({
                        onComplete: i
                    }), u = 0; u < n.length; u++) {
                    var d = n[u];
                    if (u > 0) {
                        c.call(function() {
                            t.swim()
                        });
                        var f = {
                            ease: o.Power1.easeInOut,
                            delay: r[1],
                            x: d.x,
                            y: d.y
                        };
                        !s.FishUtils.isNoRotationFish(t.realKind) && (f.rotation = t.angle + l[u]), c.to(t, r[0], f)
                    } else c.set(t, {
                        x: h.x,
                        y: h.y
                    }), !s.FishUtils.isNoRotationFish(t.realKind) && c.set(t, {
                        rotation: t.angle + l[0]
                    })
                }
                return c
            }, t.prototype.trace9 = function(t, e, i, n) {
                if (!(n.length < 3)) {
                    e /= n.length - 1, t.swim();
                    var r = n[0],
                        h = n[1],
                        l = n[2],
                        c = a.default.getAngles(n),
                        u = t.animationSpeed,
                        d = Math.abs(c[1] - c[0]) / PIXI.PI_2 * 4,
                        f = new o.TimelineMax({
                            onComplete: i
                        });
                    f.set(t, {
                        x: r.x,
                        y: r.y
                    }), !s.FishUtils.isNoRotationFish(t.realKind) && f.set(t, {
                        rotation: t.angle + c[0]
                    }), f.to(t, 2 * e, {
                        ease: o.Power2.easeOut,
                        x: h.x,
                        y: h.y,
                        animationSpeed: .7 * u
                    });
                    var p = {
                        ease: o.Power2.easeIn,
                        animationSpeed: u
                    };
                    return !s.FishUtils.isNoRotationFish(t.realKind) && (p.rotation = t.angle + c[1]), f.to(t, d, p, "-=" + .7 * d), f.to(t, e, {
                        ease: o.Linear.easeNone,
                        x: l.x,
                        y: l.y
                    }, "-=" + .3 * d), f
                }
            }, t.prototype.trace10 = function(t, e, i, n) {
                if (!(n.length < 1)) {
                    var r = n[0],
                        h = n[1] || a.default.getPointForView(r, !0);
                    return t.x = r.x, t.y = r.y, t.kind == s.FishKind.GoldenToad ? t.rotation = t.angle + a.default.getAngle(r, h) : t.rotation = 0, t.swim(), e = this.getDuring([r, h], t.speed), o.TweenLite.to(t, e, {
                        ease: o.Linear.easeNone,
                        x: h.x,
                        y: h.y,
                        onComplete: i
                    })
                }
            }, t.prototype.trace11 = function(t, e, i, n) {
                return this.trace1(t, e, i, n)
            }, t.prototype.trace12 = function(t, e, i, n) {
                return this.trace2(t, e, i, n)
            }, t.prototype.trace13 = function(t, e, i, n) {
                return this.trace4(t, e, i, n)
            }, t.prototype.trace14 = function(t, e, i, n) {
                if (!(n.length < 4)) {
                    var h = n[0],
                        l = [];
                    if (h.y == r.default.height / 2) {
                        var c = h.x >= r.default.width,
                            u = Math.abs(n[2].x - n[1].x) / 2,
                            d = n[1].x - 2 * u * (c ? -1 : 1),
                            f = h.y;
                        l = [{
                            x: 0,
                            y: f
                        }, {
                            x: u,
                            y: f + u
                        }, {
                            x: 2 * u,
                            y: f
                        }, {
                            x: 3 * u,
                            y: f - u
                        }, {
                            x: 4 * u,
                            y: f
                        }, {
                            x: 3 * u,
                            y: f + u
                        }, {
                            x: 2 * u,
                            y: f
                        }, {
                            x: 3 * u,
                            y: f - u
                        }, {
                            x: 4 * u,
                            y: f
                        }, {
                            x: 5 * u,
                            y: f + u
                        }, {
                            x: 6 * u,
                            y: f
                        }], c && (d -= r.default.width, l.forEach(function(t) {
                            var e = a.default.getPointForView(t, !0);
                            t.x = e.x, t.y = e.y
                        })), l.forEach(function(t) {
                            return t.x += d
                        })
                    } else if (h.x == r.default.width / 2) {
                        c = h.y >= r.default.height, u = Math.abs(n[2].y - n[1].y) / 2;
                        var p = h.x,
                            y = n[1].y - 2 * u * (c ? -1 : 1);
                        l = [{
                            x: p,
                            y: 0
                        }, {
                            x: p + u,
                            y: u
                        }, {
                            x: p,
                            y: 2 * u
                        }, {
                            x: p - u,
                            y: 3 * u
                        }, {
                            x: p,
                            y: 4 * u
                        }, {
                            x: p + u,
                            y: 3 * u
                        }, {
                            x: p,
                            y: 2 * u
                        }, {
                            x: p - u,
                            y: 3 * u
                        }, {
                            x: p,
                            y: 4 * u
                        }, {
                            x: p + u,
                            y: 5 * u
                        }, {
                            x: p,
                            y: 6 * u
                        }], c && (y -= r.default.height, l.forEach(function(t) {
                            var e = a.default.getPointForView(t, !0);
                            t.x = e.x, t.y = e.y
                        })), l.forEach(function(t) {
                            return t.y += y
                        })
                    }
                    var g = a.default.getDistance([n[0], l[0]]) / t.speed;
                    t.swim();
                    var m = n[0],
                        w = new o.TimelineMax({
                            onComplete: i
                        });
                    return w.set(t, {
                        x: m.x,
                        y: m.y
                    }), w.to(t, g, {
                        x: l[0].x,
                        y: l[0].y
                    }), w.to(t, e - g, {
                        ease: o.Linear.easeNone,
                        bezier: {
                            type: "soft",
                            autoRotate: !s.FishUtils.isNoRotationFish(t.kind) && !0,
                            values: l
                        },
                        onUpdate: function() {
                            s.FishUtils.isNoRotationFish(t.kind) || (t.rotation = Math.PI / 180 * t.rotation + t.angle)
                        }
                    }), w
                }
            }, t.prototype.trace15 = function(t, e, i, n) {
                return this.trace1(t, e, i, n)
            }, t.prototype.trace16 = function(t, e, i, n) {
                if (!(n.length < 2)) {
                    var a = n[0];
                    t.x = a.x, t.y = a.y, e /= n.length - 1, t.swim();
                    var s = new o.TimelineLite({
                        onComplete: i
                    });
                    s.set(t, {
                        x: a.x,
                        y: a.y
                    });
                    for (var r = 1; r < n.length; r++) {
                        var h = n[r];
                        s.to(t, e, {
                            x: h.x,
                            y: h.y,
                            ease: o.Linear.easeNone
                        })
                    }
                    return s
                }
            }, t
        }();
    ! function(t) {
        t[t.LINE1 = 0] = "LINE1", t[t.LINE2 = 1] = "LINE2", t[t.LINE3 = 2] = "LINE3", t[t.LINE4 = 3] = "LINE4", t[t.LINE5 = 4] = "LINE5", t[t.LINE6 = 5] = "LINE6", t[t.LINE7 = 6] = "LINE7", t[t.LINE8 = 7] = "LINE8", t[t.LINE9 = 8] = "LINE9", t[t.LINE10 = 9] = "LINE10", t[t.LINE11 = 10] = "LINE11", t[t.LINE12 = 11] = "LINE12", t[t.LINE13 = 12] = "LINE13", t[t.LINE14 = 13] = "LINE14", t[t.LINE15 = 14] = "LINE15", t[t.LINE16 = 15] = "LINE16"
    }(n || (n = {})), e.TraceMode = n;
    var l = new h;
    e.traceManager = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(78),
        r = i(326),
        h = i(327),
        l = i(3),
        c = i(2),
        u = i(0),
        d = i(328),
        f = i(9),
        p = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.winTextQueueList = [], e.init(), e
            }
            return o(e, t), e.prototype.init = function() {
                this.poolCoin = new s.Pool, this.poolText = new s.Pool, this.initbigFishCelebrationContainer(), this.initWinTextQueue()
            }, e.prototype.initbigFishCelebrationContainer = function() {
                this.bigFishCelebrationContainer = new a.Container, this.addChild(this.bigFishCelebrationContainer)
            }, e.prototype.initWinTextQueue = function() {
                for (var t = 1; t <= 4; t++) {
                    var e = void 0,
                        i = void 0,
                        n = t == u.default.deskInfo.chairId;
                    n ? e = [1, 3].indexOf(u.default.deskInfo.chairId) > -1 : u.default.isView ? (e = [2, 3].indexOf(t) > -1, i = [3, 4].indexOf(t) > -1) : (e = [1, 4].indexOf(t) > -1, i = [1, 2].indexOf(t) > -1);
                    var o = new d.default;
                    o.init({
                        chairId: t == u.default.deskInfo.chairId ? -1 : t,
                        direction: n ? -1 : i ? -1 : 1,
                        isLeftChair: e
                    }), o.position.set(e ? 128 : 1280, n ? 715 : i ? 715 : 95), this.winTextQueueList[t - 1] = o, this.addChild(o)
                }
            }, e.prototype.showWinText = function(t, e) {
                var i = e < 0 ? u.default.deskInfo.chairId : e;
                this.winTextQueueList[i - 1].addWin(t)
            }, e.prototype.show = function(t) {
                var e, i = this;
                this.iconPositons = t.isKindCoin ? h.default[t.kind].end : t.isBigWin ? h.default.bigWin : h.default.normal;
                for (var n = new l.TimelineLite({
                        onComplete: function() {
                            e && (e.parent.removeChild(e), i.poolText.delete(e)), t.onComplete && t.onComplete()
                        }
                    }), o = 0; o < this.iconPositons.length; o++) {
                    var a = this.createCoin(o, t.position, t.isMe),
                        s = this.createAnimation(a, t, o),
                        r = 0 == Math.floor(o % 8) ? 0 : 8 - Math.floor(o % 8);
                    n.add(s, .02 * r)
                }
                t.isMe && f.default.playEffectCoinsGet(), t.isHideWin || (e = this.createWin(t.amount, t.position, t.isMe), n.to(e.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: l.Elastic.easeOut
                }, 0), n.to(e, 1, {
                    alpha: 0
                }, "-=1.5"), n.call(function() {
                    i.removeChild(e), e.destroy(), e = null
                }), this.setChildIndex(e, this.children.length - 1))
            }, e.prototype.showSweep = function(t) {
                var e = this;
                this.iconPositons = h.default[t.kind];
                var i = this.createWin(t.amount, t.position, t.isMe),
                    n = new l.TimelineLite({
                        onComplete: function() {
                            i && (i.parent.removeChild(i), e.poolText.delete(i)), t.onComplete && t.onComplete()
                        }
                    });
                n.to(i.scale, 1, {
                    x: 1,
                    y: 1,
                    ease: l.Elastic.easeOut
                }, 0), n.to(i, 1, {
                    alpha: 0
                }), n.call(function() {
                    e.removeChild(i), i.destroy(), i = null
                }), this.setChildIndex(i, this.children.length - 1)
            }, e.prototype.showCoins = function(t) {
                if (t.kind && 103 == t.kind) this.showDragonCoins(t);
                else {
                    this.iconPositons = h.default[t.kind].start;
                    for (var e = new l.TimelineLite({
                            onComplete: function() {
                                t.onComplete && t.onComplete()
                            }
                        }), i = 0; i < this.iconPositons.length; i++) {
                        var n = this.createCoin(i, t.position, t.isMe),
                            o = this.createAnimation(n, t, i);
                        e.add(o, 0)
                    }
                }
            }, e.prototype.showDragonCoins = function(t) {
                this.iconPositons = h.default[t.kind].start;
                for (var e = new l.TimelineLite({
                        onComplete: function() {
                            t.onComplete && t.onComplete()
                        }
                    }), i = 0; i < this.iconPositons.length; i++) {
                    var n = this.iconPositons[i],
                        o = this.createCoin(i, n, t.isMe),
                        a = this.createAnimationDragon(o, t);
                    e.add(a, 0)
                }
            }, e.prototype.showDragonEndCoins = function(t) {
                this.iconPositons = t.isKindCoin ? h.default[t.kind].end : t.isBigWin ? h.default.bigWin : h.default.normal;
                for (var e = new l.TimelineLite({
                        onComplete: function() {
                            t.onComplete && t.onComplete()
                        }
                    }), i = 0; i < this.iconPositons.length; i++) {
                    var n = this.createCoin(i, t.position, t.isMe),
                        o = this.createAnimationDragonEnd(n, t, i),
                        a = 0 == Math.floor(i % 8) ? 0 : 8 - Math.floor(i % 8);
                    e.add(o, .02 * a)
                }
            }, e.prototype.createAnimation = function(t, e, i) {
                var n = this,
                    o = {
                        x: this.iconPositons[i].x + e.position.x,
                        y: this.iconPositons[i].y + e.position.y
                    },
                    a = new l.TimelineLite({
                        onComplete: function() {
                            t.gotoAndStop(0), n.removeChild(t), n.poolCoin.delete(t)
                        }
                    }),
                    s = Math.ceil(i / 8) * Math.floor(i % 8) == 0 ? 0 : 8 - Math.floor(i % 8);
                return a.call(function() {
                    t.renderable = !0
                }), a.to(t, .5, {
                    alpha: 1,
                    x: o.x,
                    y: o.y,
                    ease: l.Power2.easeIn
                }), a.to(t.scale, .5, {
                    x: 1.2,
                    y: 1.2,
                    ease: l.Power2.easeIn
                }, "-=0.5"), a.to(t, 1, {
                    x: e.endPosition.x,
                    y: e.endPosition.y,
                    ease: l.Power2.easeOut
                }, "+=" + (.4 + .05 * s)), a.to(t.scale, 1, {
                    x: .7,
                    y: .7
                }, "-=1"), a
            }, e.prototype.createAnimationDragon = function(t, e) {
                var i = this,
                    n = new l.TimelineLite({
                        onComplete: function() {
                            t.gotoAndStop(0), i.removeChild(t), i.poolCoin.delete(t)
                        }
                    });
                return n.call(function() {
                    t.alpha = 1, t.scale.set(1), t.renderable = !0
                }), n.set(t.scale, {
                    x: 1.2,
                    y: 1.2
                }), n.call(function() {
                    return t.play()
                }), n.to(t, .3, {
                    ease: l.Linear.easeNone,
                    y: "-=80"
                }), n.to(t, 1, {
                    delay: 1,
                    x: e.endPosition.x,
                    y: e.endPosition.y,
                    onStart: function() {}
                }), n.to(t.scale, 1, {
                    x: .7,
                    y: .7
                }, "-=1"), n
            }, e.prototype.createAnimationDragonEnd = function(t, e, i) {
                var n = this,
                    o = {
                        x: this.iconPositons[i].x + e.position.x,
                        y: this.iconPositons[i].y + e.position.y
                    },
                    a = new l.TimelineLite({
                        onComplete: function() {
                            t.gotoAndStop(0), n.removeChild(t), n.poolCoin.delete(t)
                        }
                    }),
                    s = Math.ceil(i / 8) * Math.floor(i % 8) == 0 ? 0 : 8 - Math.floor(i % 8);
                return a.call(function() {
                    t.renderable = !0, t.alpha = 1, t.scale.set(1.2)
                }), a.to(t, .5, {
                    x: o.x,
                    y: o.y,
                    ease: l.Power2.easeIn
                }), a.to(t, 1, {
                    x: e.endPosition.x,
                    y: e.endPosition.y,
                    ease: l.Power2.easeOut
                }, "+=" + (.4 + .05 * s)), a.to(t.scale, 1, {
                    x: .7,
                    y: .7
                }, "-=1"), a
            }, e.prototype.createWin = function(t, e, i) {
                var n = "+" + c.default.formatAmount(t),
                    o = i ? "number_gold" : "number_gray",
                    a = this.poolText.create(function() {
                        return new PIXI.extras.BitmapText(n, {
                            font: o
                        })
                    });
                return a.text = n, a.font = o, a.x = e.x - a.width / 2, a.y = e.y - 150, a.alpha = 1, a.scale.set(0), this.addChild(a), a
            }, e.prototype.createCoin = function(t, e, i) {
                var n = this.poolCoin.create(function() {
                    return new r.default
                });
                return n.scale.set(0), n.alpha = 0, n.renderable = !1, n.rotation = 2 * Math.PI * Math.random(), n.textures = n.initFrames(i), n.play(), n.position.set(e.x, e.y), this.addChild(n), n
            }, e
        }(a.Container);
    e.default = p
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(i(16).MyRequest);
    e.MyResponse = a
}, , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(7),
        r = i(309),
        h = i(72),
        l = i(3),
        c = i(1),
        u = i(359),
        d = i(360),
        f = i(2),
        p = i(151),
        y = i(9),
        g = i(361),
        m = i(32),
        w = i(48),
        x = i(150),
        v = i(362),
        _ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.coordinateRateX = .28, e.name = "home", e.preInit(), e
            }
            return o(e, t), e.prototype.preInit = function() {
                this.initBackGround(), this.initTitle(), this.initBanner()
            }, e.prototype.init = function() {
                this.initRoomInfoList(), this.showBanner(), this.initHeartBeat(), this.initPushEvent(), this.initMenu(), y.default.playIntroBg(), window.walletCheckIn = v.default
            }, e.prototype.initMenu = function() {
                var t = this;
                this.menu = new x.Menu({
                    onHistory: function() {
                        return t.onHistory()
                    },
                    onHome: function() {
                        return t.onExit()
                    },
                    onPaytable: function(e) {
                        return t.onPaytable(e)
                    }
                }), this.addChild(this.menu)
            }, e.prototype.initBackGround = function() {
                var t = PIXI.Sprite.fromFrame("intro_bg");
                this.addChild(t)
            }, e.prototype.initRoomInfoList = function() {
                var t = this;
                this.btnEnters = [], this.spineEnters = [], this.sortRoomInfos(a.default.roomInfos);
                for (var e = a.default.resources, i = a.default.roomInfos, n = i.length, o = function(o) {
                        var a = i[o],
                            r = new PIXI.spine.Spine(e.intro.spineData);
                        r.skeleton.setToSetupPose(), r.x = c.default.width * (.5 + (o - (n - 1) / 2) * s.coordinateRateX), r.y = c.default.height / 2, r.buttonMode = !0, r.on("pointerdown", function() {
                            return t.onClickBtn(t.btnEnters[o], a)
                        }), s.spineEnters.push(r), r.once("pointerover", function() {
                            return t.onMoveOverBtn(r)
                        }), s.addChildAt(r, s.children.length - 1 - o);
                        var h = "wait_" + Number(a.id.substr(1));
                        r.state.setAnimation(0, h, !0), r.hitArea = new PIXI.Rectangle(-135, -175, 290, 370), s.createEnterButtons(o, a, n)
                    }, s = this, r = 0; r < n; r++) o(r);
                var h = new PIXI.spine.Spine(e.intro_wave.spineData);
                h.skeleton.setToSetupPose(), h.state.setAnimation(0, "wait", !0), h.position.set(c.default.width / 2, c.default.height / 2), this.addChildAt(h, this.children.length - 1 - 2 * n)
            }, e.prototype.sortRoomInfos = function(t) {
                t.sort(function(t, e) {
                    return Number(t.id.substr(1)) - Number(e.id.substr(1))
                })
            }, e.prototype.createEnterButtons = function(t, e, i) {
                var n = this,
                    o = Number(e.id.substr(1)),
                    s = PIXI.Sprite.fromFrame("Enter_button_" + o + ".png");
                s.buttonMode = !0, s.anchor.set(.5), s.x = c.default.width * (.5 + (t - (i - 1) / 2) * this.coordinateRateX), s.y = 620, s.on("pointerdown", function() {
                    return n.onClickBtn(s, e)
                });
                var r = PIXI.Sprite.fromFrame("Enter_text_" + o + ".png");
                r.anchor.set(.5), r.y = -35, s.addChild(r);
                var h = this.getHallDomination(a.default.roomInfos[t].domination),
                    l = this.createText(h);
                l.anchor = .5, l.y = 30, s.addChild(l), this.btnEnters.push(s), l.width = s.width - 160 < l.width ? s.width - 160 : l.width, this.addChild(s), this.btnEnterShake(s, t)
            }, e.prototype.createText = function(t) {
                return new PIXI.extras.BitmapText(t, {
                    font: "36px intro_number"
                })
            }, e.prototype.onClickBtn = function(t, e) {
                var i = this;
                y.default.playBtnClick(), a.default.acct.balance <= 0 ? w.default.showError(11101, !0) : (this.btnEnterShake2(t), a.default.acct.oneWallet && !a.default.isSkip ? v.default.show(a.default.acct.balance, function(t) {
                    v.default.hide(), i.onBtnDown(e, t)
                }, function() {
                    i.btnEnters.forEach(function(t) {
                        return t.interactive = !0
                    }), i.spineEnters.forEach(function(t) {
                        return t.interactive = !0
                    })
                }) : this.onBtnDown(e))
            }, e.prototype.btnEnterShake = function(t, e) {
                var i = this,
                    n = t.scale,
                    o = new l.TimelineLite({
                        onComplete: function() {
                            t.interactive = !0, i.spineEnters[e].interactive = !0
                        }
                    });
                o.set(n, {
                    x: 0,
                    y: 0
                }), o.to(n, 1, {
                    x: 1,
                    y: 1,
                    ease: l.Elastic.easeOut
                })
            }, e.prototype.btnEnterShake2 = function(t) {
                var e = this,
                    i = t.scale;
                this.tween = new l.TimelineLite({
                    onStart: function() {
                        e.btnEnters.forEach(function(t) {
                            return t.interactive = !1
                        }), e.spineEnters.forEach(function(t) {
                            return t.interactive = !1
                        })
                    }
                }), this.tween.to(i, .1, {
                    x: .8,
                    y: .8
                }), this.tween.to(i, .1, {
                    x: 1.1,
                    y: 1.1
                }), this.tween.to(i, .1, {
                    x: 1,
                    y: 1
                })
            }, e.prototype.onMoveOverBtn = function(t) {
                var e = this;
                t.once("pointerout", function() {
                    return e.onMoveOutBtn(t)
                }), t.scale.set(1.1);
                var i = t.state.tracks[0],
                    n = i.animation.name,
                    o = i.trackTime,
                    a = n.substring(n.indexOf("_"), n.length);
                t.state.setAnimation(0, "click" + a, !0), t.state.tracks[0].trackTime = o
            }, e.prototype.onMoveOutBtn = function(t) {
                var e = this;
                t.once("pointerover", function() {
                    return e.onMoveOverBtn(t)
                }), t.scale.set(1);
                var i = t.state.tracks[0],
                    n = i.animation.name,
                    o = i.trackTime,
                    a = n.substring(n.indexOf("_"), n.length);
                t.state.setAnimation(0, "wait" + a, !0), t.state.tracks[0].trackTime = o
            }, e.prototype.initTitle = function() {
                -1 == [m.Language.Chinese, m.Language.English].indexOf(a.default.locale.lan) ? m.Language.English : a.default.locale.lan;
                var t = PIXI.Sprite.fromFrame("title.png");
                t.position.set(40, 29), this.addChild(t)
            }, e.prototype.initBanner = function() {
                this.bannerContainer = new s.Container;
                f.default.createSprites(["Player_frame.png", "Player_Coin.png", "Player_frame.png", "Player_icon.png"], [{
                    x: 770,
                    y: 36
                }, {
                    x: 990,
                    y: 23
                }, {
                    x: 1114,
                    y: 36
                }, {
                    x: 1344,
                    y: 2
                }], this.bannerContainer), this.addChild(this.bannerContainer), this.balance = new PIXI.Text("", {
                    fontFamily: "roboto-medium",
                    fontSize: 24,
                    fill: "#FCEE82"
                }), this.balance.anchor.set(.5), this.balance.position = {
                    x: 907,
                    y: 64
                }, this.acctName = new PIXI.Text("", {
                    fontFamily: "roboto-medium",
                    fontSize: 24,
                    fill: "#FFFFFF"
                }), this.acctName.anchor.set(.5), this.acctName.position = {
                    x: 1255,
                    y: 64
                }, this.bannerContainer.addChild(this.balance, this.acctName)
            }, e.prototype.showBanner = function() {
                this.setBalance(a.default.acct.balance), this.acctName.text = a.default.acct.acctName.toString();
                var t = new l.TimelineLite;
                t.set(this.bannerContainer, {
                    x: c.default.width / 2
                }), t.to(this.bannerContainer, .3, {
                    x: -30
                }), t.to(this.bannerContainer, .05, {
                    x: 0
                })
            }, e.prototype.showLoadingTxt = function() {
                var t = new PIXI.Container,
                    e = new PIXI.Graphics;
                e.beginFill(16740363, .3), e.drawRoundedRect(0, 0, 250, 40, 10), e.endFill();
                var i = new PIXI.Text(a.default.locale.getString("TXT_INIT"), {
                    fontFamily: "roboto",
                    fontSize: 20,
                    fill: "rgb(194, 181, 86)"
                });
                i.anchor.set(.5), i.position.set(125, 20), t.position.set(c.default.width / 2 - 125, 730), t.addChild(e, i), this.addChild(t)
            }, e.prototype.getHallDomination = function(t) {
                var e = f.default.getRatioMultiply();
                return Math.min.apply(Math, t[0]) * e + " - " + Math.max.apply(Math, t[t.length - 1]) * e
            }, e.prototype.onExit = function() {
               window.parent.postMessage('CloseGame',"*");	
            }, e.prototype.onHistory = function() {
                g.default.show()
            }, e.prototype.onPaytable = function(t) {
                this.paytable || (this.paytable = new p.default), this.paytable.show()
            }, e.prototype.onBtnDown = function(t, e) {
                a.default.roomInfo = t, a.default.betData = new d.default, this.showLoadingTxt(), this.gameStart(e)
            }, e.prototype.switchGameScene = function() {
                (new r.default).addToStage(), document.querySelector("#loaderContent").style.visibility = "hidden"
            }, e.prototype.gameStart = function(t) {
                var e = this,
                    i = new u.RequestStart;
                i.roomId = a.default.roomInfo.id, a.default.acct.oneWallet && t && (i.in = f.default.divideWithoutLoss(t, f.default.getRatioMultiply())), a.default.service.start(i, function(t) {
                    e.resetDateFormat(t), a.default.deskInfo = t.deskInfo, a.default.acct.balance = f.default.ignoreAmountDecimal(t.deskInfo.balance), e.switchGameScene()
                })
            }, e.prototype.resetDateFormat = function(t) {
                var e = t.deskInfo,
                    i = e.traceMessages,
                    n = e.groupMessages;
                i && i.length > 0 && i.forEach(function(t) {
                    t && t.createTime && (t.createTime = t.createTime.replace(/[-]/g, "/"))
                }), n && n.length > 0 && n.forEach(function(t) {
                    t && t.createTime && (t.createTime = t.createTime.replace(/[-]/g, "/"))
                })
            }, e.prototype.setBalance = function(t) {
                this.balance.text = f.default.formatAmount(t)
            }, e.prototype.initHeartBeat = function() {
                setInterval(function() {
                    var t = (new Date).getTime();
                    a.default.service.getServerTime(function() {
                        return a.default.pingValue = (new Date).getTime() - t
                    })
                }, 4e3)
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), a.default.service.clearPushEvent()
            }, e.prototype.initPushEvent = function() {
                var t = this,
                    e = a.default.service;
                e.bindUpdate(function(e) {
                    a.default.acct.balance += e.acct.balance, t.setBalance(a.default.acct.balance)
                }), e.bindBalanceUpdate(function(e) {
                    a.default.acct.balance = e.acct.balance, t.setBalance(a.default.acct.balance)
                }), e.bindTransferCancel(function(e) {
                    e.chairId === a.default.deskInfo.chairId && (a.default.acct.balance += e.cancelAmt, t.setBalance(a.default.acct.balance))
                }), e.bindKickout(function(t) {
                    v.default.isShowing && v.default.hide(), w.default.showMessage(a.default.locale.getString("MSG_KICK_OUT")), a.default.service.close()
                })
            }, e
        }(h.default);
    e.default = _
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {
            this.initAudioContext()
        }
        return t.prototype.load = function(t, e, i) {
            var n = this;
            this.res = t, this.onComplete = e, this.onProgress = i;
            var o = [];
            for (var a in t) {
                var s = t[a];
                o.push("string" == typeof s ? s : s.src)
            }
            this.async(o, function(t, e, i) {
                n.queryString && (t += "?" + n.queryString), n.loadAudio(t, i)
            }, function(t) {
                e(t)
            }, i)
        }, t.prototype.async = function(t, e, i, n) {
            for (var o = t.length, a = 0, s = function(t) {
                    a++, n && n(Math.ceil(a / o * 100)), t && (a = o), a === o && i(t)
                }, r = 0; r < t.length; r++) e(t[r], r, s)
        }, t.prototype.initAudioContext = function() {
            "undefined" != typeof AudioContext ? this.ctx = new AudioContext : void 0 !== window.webkitAudioContext && (this.ctx = new window.webkitAudioContext)
        }, t.prototype.getXMLHttpRequest = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        }, t.prototype.loadAudio = function(t, e) {
            var i = this,
                n = this.getXMLHttpRequest();
            n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
                var o = (n.status + "")[0];
                "0" !== o && "2" !== o && "3" !== o || (i.ctx ? i.ctx.decodeAudioData(n.response, function(i) {
                    window.HowlerCache[t] = i, e()
                }) : e())
            }, n.onerror = function() {
                e("Failed loading audio file:" + t)
            };
            try {
                n.send()
            } catch (t) {
                n.onerror()
            }
        }, t
    }();
    e.default = new n
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(14),
        r = i(3),
        h = i(2),
        l = i(21),
        c = i(1),
        u = i(0),
        d = i(17),
        f = function(t) {
            function e(e, i) {
                var n = this,
                    o = [a.Texture.fromFrame("fish_" + i.kind + "_swim_00.png")];
                return (n = t.call(this, o) || this).id = e, n.isShadow = !0, n.isLightShaking = !1, n.initFish(i), n.initOtherLightnMarix(), n
            }
            return o(e, t), e.prototype.initOtherLightnMarix = function() {
                var t = new a.filters.ColorMatrixFilter;
                t.matrix = [.49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, 0, 0, 0, 1, 0], this.nowFilter = t
            }, e.prototype.initFish = function(t) {
                this.name = t.name, this.kind = t.kind, this.type = t.type, this.speed = t.speed, this.rects = t.rects, this.aimRects = t.aimRects, this.level = t.level, this.framesCountSwim = this.getValue(t.swim_frames, p.swim_frames), this.framesCountCatch = this.getValue(t.catch_frames, p.catch_frames), this.animationSpeed = this.getValue(t.aniSpeed, p.aniSpeed), this.loop = this.getValue(t.aniLoop, p.loop), this.angle = this.getValue(t.angle, p.angle), this.defaultScale = this.getValue(t.scale, p.scale), this.scale.set(this.defaultScale), this.anchor.set(.5), this.shadowDistance = this.getValue(t.shadowDistance, p.shadowDistance), this.radius = this.getValue(t.radius, p.radius), this.framesSwim = this.initFrames(), this.textures = this.framesSwim
            }, e.prototype.initLightnFish = function(t) {
                var e = this.initLightnFrames(),
                    i = new a.extras.AnimatedSprite(e);
                return i.name = this.name, i.kind = this.kind, i.type = this.type, i.speed = this.speed, i.rects = this.rects, i.aimRects = this.aimRects, i.level = this.level, i.framesCountSwim = this.getValue(this.framesCountSwim, p.swim_frames), i.framesCountCatch = this.getValue(this.framesCountCatch, p.catch_frames), i.animationSpeed = this.getValue(this.animationSpeed, p.aniSpeed), i.loop = this.getValue(this.loop, p.loop), i.angle = this.getValue(this.angle, p.angle), i.anchor.set(.5), t && (i.filters = [this.nowFilter]), this.addChild(i), i.blendMode = d.default.isIos() && d.default.iosVersion() >= 14 ? a.BLEND_MODES.SCREEN : a.BLEND_MODES.ADD, i
            }, e.prototype.getValue = function(t, e) {
                return void 0 == t ? e : t
            }, e.prototype.addLockIcon = function() {
                if (this.lockSprite) return this.lockSprite.texture = a.Texture.fromFrame("aim_target"), this.lockSprite.scale.set(1 / this.defaultScale), void this.addChild(this.lockSprite);
                var t = a.Sprite.fromFrame("aim_target");
                t.anchor.set(.5), t.scale.set(1 / this.defaultScale), this.addChild(t), this.lockSprite = t
            }, e.prototype.initAniHurt = function() {
                var t = this,
                    e = new r.TimelineMax({
                        repeat: 1,
                        onComplete: function() {
                            t.destroyAnimateSprite()
                        }
                    });
                e.set(this, {
                    tint: 16711680
                }), e.set(this, {
                    delay: .3,
                    tint: 16777215
                }), e.set(this, {
                    delay: .3
                }), this.aniHurt = e
            }, e.prototype.initAniShake = function() {
                var t = this;
                if (!this.isLightShaking) {
                    var e = function() {
                        t.isLightShaking && (t.isLightShaking = !1, t.shakeTimer && (clearTimeout(t.shakeTimer), t.shakeTimer = null), t.animatedSprite && (t.removeChild(t.animatedSprite), t.animatedSprite.destroy(), t.animatedSprite = null, t.alpha = 1))
                    };
                    this.isLightShaking = !0;
                    var i = function(n, o) {
                        n && n.parent && (o <= 0 ? e() : (n.x += 10 * Math.random() - 5, n.y += 10 * Math.random() - 5, t.shakeTimer = setTimeout(function() {
                            t.shakeTimer = null, i(n, --o)
                        }, 50)))
                    };
                    i(this, 12), (new r.TimelineLite).call(function() {
                        return e()
                    }, null, null, "+=0.6")
                }
            }, e.prototype.getFrameName = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = "swim");
                var i = t < 10 ? "0" + t : t;
                return "fish_" + this.kind + "_" + e + "_" + i + ".png"
            }, e.prototype.initFrames = function(t) {
                void 0 === t && (t = "swim");
                for (var e = [], i = 0; i < this.framesCountSwim; i++) e.push(a.Texture.fromFrame(this.getFrameName(i, t)));
                return e
            }, e.prototype.getLightnFrameName = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = "swim");
                var i = t < 10 ? "0" + t : t;
                return "fish_lightn_" + this.kind + "_" + e + "_" + i + ".png"
            }, e.prototype.initLightnFrames = function(t) {
                void 0 === t && (t = "swim");
                for (var e = [], i = this.framesCountSwim, n = 0; n < i; n++) e.push(a.Texture.from(this.getLightnFrameName(n, t)));
                return e
            }, e.prototype.playGoldenToadCatchAni = function(t) {
                for (var e = this, i = new r.TimelineLite, n = 0; n < 10; n++) i.to(this, .1, {
                    x: this.x + (10 * Math.random() - 5),
                    y: this.y + (10 * Math.random() - 5)
                });
                i.to(this, .2, {
                    alpha: 0
                }, "-=0.2"), i.call(function() {
                    var i = new a.spine.Spine(u.default.resources.goldentoad_die_eff.spineData);
                    i.skeleton.setToSetupPose();
                    var n = e.parent.getChildIndex(e) + 1;
                    i.position.set(e.x, e.y), e.parent.addChildAt(i, n), i.state.setAnimation(0, "die", !1), i.state.addListener({
                        complete: function() {
                            i.state.clearListeners(), e.shakeTimer = setTimeout(function() {
                                e.shakeTimer = null, i.parent.removeChild(i), i.destroy(), i = null, t()
                            })
                        }
                    })
                }, null, null, "-=0.4")
            }, e.prototype.playCatchAni = function(t) {
                for (var e = new r.TimelineLite({
                        onComplete: t
                    }), i = 0; i < 10; i++) e.to(this, .1, {
                    x: this.x + (10 * Math.random() - 5),
                    y: this.y + (10 * Math.random() - 5)
                });
                e.to(this.scale, 1, {
                    x: 0,
                    y: 0
                }), e.to(this, 1, {
                    alpha: 0,
                    delay: 1
                }, "-=1")
            }, e.prototype.swim = function() {
                this.gotoAndPlay(0), this.animatedSprite && this.animatedSprite.gotoAndPlay(0)
            }, e.prototype.pause = function() {
                this.iceEffect || (this.gotoAndStop(this.currentFrame), this.animatedSprite && this.animatedSprite.gotoAndStop(this.currentFrame), this.trace && this.trace.timeScale(0), this.trace2 && this.trace2.timeScale(0), this.addIceEffect())
            }, e.prototype.resume = function() {
                this.gotoAndPlay(this.currentFrame), this.animatedSprite && this.animatedSprite.gotoAndPlay(this.currentFrame), this.trace && this.trace.timeScale(1), this.trace2 && this.trace2.timeScale(1), this.removeIceEffect()
            }, e.prototype.addIceEffect = function() {
                var t = this.textures[this.currentFrame],
                    e = new a.Sprite(t),
                    i = new a.filters.ColorMatrixFilter;
                i.matrix = [25 / 255, 8 / 255, 25 / 255, 0, 0, 8 / 255, 174 / 255, 174 / 255, 0, 0, 25 / 255, 174 / 255, 1, 0, 0, 0, 0, 0, 1, 0];
                var n = new a.filters.AlphaFilter(.3);
                e.filters = [i, n];
                var o = u.default.app.renderer.generateTexture(e);
                this.iceEffect = new a.Sprite(o), this.iceEffect.anchor.set(.5), e.filters = [], this.addChildAt(this.iceEffect, 0), e.destroy(), e = null
            }, e.prototype.removeIceEffect = function() {
                this.iceEffect && (this.removeChild(this.iceEffect), this.iceEffect.destroy(), this.iceEffect = null)
            }, e.prototype.catch = function(t, e) {
                if (this.catched = !0, this.lock = !1, t && !s.FishUtils.isSpecialFish(this.realKind)) {
                    var i = new a.filters.ColorMatrixFilter;
                    i.greyscale(.2), this.filters = [i]
                }
                this.trace && this.trace.kill(), this.aniHurt && this.aniHurt.kill(), this.tint = 16777215, this.removeIceEffect(), s.FishKind.GoldenToad == this.kind ? this.playGoldenToadCatchAni(e) : this.playCatchAni(e)
            }, e.prototype.del = function(t) {
                this.catched = !0, this.lock = !1, this.tint = 16777215, this.trace && this.trace.kill(), this.aniHurt && this.aniHurt.kill(), this.removeIceEffect(), t()
            }, e.prototype.hurt = function() {
                this.aniHurt ? this.aniHurt.restart() : this.initAniHurt(), this.kind <= 21 && this.initAniShake()
            }, e.prototype.lightnHurt = function(t) {
                this.destroyAnimateSprite(), this.animatedSprite || (this.animatedSprite = this.initLightnFish(t), this.initAniShake())
            }, e.prototype.destroyAnimateSprite = function() {
                this.animatedSprite && (this.removeChild(this.animatedSprite), this.animatedSprite.destroy(), this.animatedSprite = null, this.alpha = 1)
            }, e.prototype.allowCatch = function(t) {
                this.tint = t ? 16777215 : 5263440
            }, e.prototype.stay = function() {
                this.catched = !0, this.trace && this.trace.kill()
            }, e.prototype.createLockArea = function() {
                var t = this.aimRects[0];
                this.hitArea = new a.Rectangle(t.x, t.y, t.width, t.height)
            }, e.prototype.reset = function(t, e, i) {
                this.tint = 16777215, this.catched = !1, this.inSpecialCathed = !1, this.loop = !0, this.alpha = 1, this.id = t, this.realKind = e, this.type = i.type, this.level = i.level, this.speed = i.speed, this.rects = i.rects, this.aimRects = i.aimRects, this.createLockArea(), this.rotation = 0, this.tint = 16777215, this.filters = null, this.framesSwim = null, this.framesCatch = null, this.initFish(i), this.isLightShaking = !1, this.animatedSprite && this.destroyAnimateSprite()
            }, e.prototype.translate = function(t) {
                t && (t.x > c.default.width / 2 ? u.default.isView && this.scale.set(1, -1) : u.default.isView ? this.scale.set(-1) : this.scale.set(-1, 1))
            }, e.prototype.clear = function() {
                this.aniHurt && this.aniHurt.kill(), this.removeAllListeners(), this.interactive = !1, this.lock = !1, this.autoLock = !1, this.trace && this.trace.kill(), this.trace = null, this.trace2 = null, this.removeIceEffect(), this.shakeTimer && (clearTimeout(this.shakeTimer), this.shakeTimer = null)
            }, e.prototype.getRects = function(t) {
                void 0 === t && (t = this.rects);
                for (var e = new Array, i = 0, n = t; i < n.length; i++) {
                    var o = n[i],
                        s = h.default.getRotatedPoint(new a.Point((o.x + o.width / 2) * this.scale.x, (o.y + o.height / 2) * this.scale.y), this.position, this.rotation),
                        r = h.default.clone(o);
                    r.width = r.width * Math.abs(this.scale.x), r.height = r.height * Math.abs(this.scale.y), r.x = s.x - r.width / 2, r.y = s.y - r.height / 2, e.push({
                        rect: r,
                        rotation: this.rotation
                    })
                }
                return e
            }, e.prototype.showDebugger = function() {
                for (var t = this.rects, e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e];
                    n instanceof a.Graphics && (this.removeChild(n), l.Graph.drawRect(t, this))
                }
                0 === this.children.length && l.Graph.drawRect(t, this)
            }, Object.defineProperty(e.prototype, "lock", {
                get: function() {
                    return this.locked
                },
                set: function(t) {
                    this.locked != t && (this.locked = t, t ? this.addLockIcon() : this.removeChild(this.lockSprite))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "autoLock", {
                get: function() {
                    return this.autoLocked
                },
                set: function(t) {
                    this.autoLocked != t && (this.autoLocked = t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.renderWebGL = function(e) {
                if (!this.isShadow || !this.alpha) return t.prototype.renderWebGL.call(this, e);
                this.animatedSprite && this.animatedSprite.gotoAndPlay(this.currentFrame);
                var i = this.shadowDistance;
                this.transform.updateTransform(this.parent.transform), this.calculateVertices();
                var n = this.textures[this.currentFrame],
                    o = new a.Sprite;
                o.anchor = this.anchor, o.texture = a.Texture.fromFrame(n.textureCacheIds[0] + "_gray"), this.localTransform.copy(o.localTransform), this.worldTransform.copy(o.worldTransform), o.worldTransform.tx += i * c.default.scale, o.worldTransform.ty += i * c.default.scale, o.worldAlpha = .3, o.calculateVertices(), e.plugins[this.pluginName].render(o), e.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this);
                for (var s = 0, r = this.children.length; s < r; ++s) this.children[s].renderWebGL(e);
                t.prototype.renderWebGL.call(this, e)
            }, e
        }(a.extras.AnimatedSprite);
    e.default = f;
    var p = {
        scale: 1,
        aniSpeed: 1,
        loop: !0,
        angle: 3 * Math.PI / 2,
        swim_frames: 20,
        catch_frames: 0,
        shadowDistance: 60,
        radius: 0
    }
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestSweepFire = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseSweepFire = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(0),
        r = i(3),
        h = i(78),
        l = i(2),
        c = i(9),
        u = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.init(), e
            }
            return o(e, t), e.prototype.init = function() {
                this.effectConitainer = new a.Container, this.addChild(this.effectConitainer), this.celebrationFish = new PIXI.spine.Spine(s.default.resources.bigfish_celebration.spineData), this.celebrationFish.skeleton.setToSetupPose(), this.effectConitainer.addChild(this.celebrationFish), this.celebrateWinTxt = this.createTxt("win_number", 50), this.scaleEffectTxt = this.createTxt("win_number", 50), this.effectConitainer.addChild(this.celebrateWinTxt), this.effectConitainer.addChild(this.scaleEffectTxt), this.winTxt = this.createTxt("number_gold", 50), this.addChild(this.winTxt), this.leftChair = [1, 3].indexOf(s.default.deskInfo.chairId) > -1
            }, e.prototype.createTxt = function(t, e) {
                var i = new PIXI.extras.BitmapText("", {
                    font: {
                        name: t,
                        size: e
                    }
                });
                return i.anchor = .5, i
            }, e.prototype.reset = function(t, e, i) {
                this.celebrationFish.state.setAnimation(0, "catch_effect_" + t, !0), this.celebrationFish.position = i, this.celebrateWinTxt.text = l.default.formatAmount(e), this.celebrateWinTxt.position.set(i.x, i.y + 60), this.scaleEffectTxt.text = l.default.formatAmount(e), this.scaleEffectTxt.scale.set(1), this.scaleEffectTxt.alpha = 1, this.scaleEffectTxt.position.set(i.x, i.y + 60), this.winTxt.text = "+" + l.default.formatAmount(e), this.winTxt.position.set(this.leftChair ? 128 + this.winTxt.width / 2 : 1280, 750), this.winTxt.alpha = 0, this.effectConitainer.scale.set(0), this.effectConitainer.position = i, this.effectConitainer.pivot = i, this.pos = i, this.queueId = d.getQueueId()
            }, e.prototype.move = function() {
                var t = d.celebrationList.length;
                d.celebrationList.forEach(function(e, i) {
                    i < t && r.TweenMax.to(e.effectConitainer, .3, {
                        y: e.pos.y - 70 * (t - i - 1)
                    })
                })
            }, e.prototype.show = function(t) {
                var e = this,
                    i = this.effectConitainer.scale;
                t.bigFishCelebrationContainer.addChild(this), new r.TimelineLite({
                    onComplete: function() {
                        d.removeBigFishCelebration(), t.bigFishCelebrationContainer.removeChild(e)
                    }
                }).to(i, 1, {
                    x: 1,
                    y: 1,
                    ease: r.Elastic.easeOut.config(1, .5),
                    onComplete: function() {
                        r.TweenMax.to(e.scaleEffectTxt.scale, .5, {
                            x: 2,
                            y: 2
                        }), r.TweenMax.to(e.scaleEffectTxt, .5, {
                            alpha: 0
                        })
                    }
                }).to(i, 1, {
                    x: 0,
                    y: 0,
                    ease: r.Elastic.easeIn.config(.8, .4)
                }, "+=1").call(function() {}, null, null, "+=1"), this.move(), c.default.playBigfishWin()
            }, e.prototype.takeWin = function() {
                this.winTxt.alpha = 1, this.winTxt.scale.set(0), (new r.TimelineLite).to(this.winTxt, .55, {
                    y: 700 - 32 * this.queueId,
                    ease: r.Power4.easeOut
                }, "+=1.8").to(this.winTxt.scale, .55, {
                    x: 1,
                    y: 1,
                    ease: r.Back.easeOut
                }, "-=0.55").to(this.winTxt, .5, {
                    alpha: 0
                }, "+=1")
            }, e
        }(a.Container);
    e.BigFishCelebration = u;
    var d = new(function() {
        function t() {
            this.reset()
        }
        return t.prototype.removeBigFishCelebration = function() {
            this.celebrationList.length > 0 && this.celebrationList.shift()
        }, t.prototype.createBigFishCelebration = function(t, e, i) {
            var n = this.poolBigFishCelebration.create(function() {
                return new u
            });
            return n.reset(t, e, i), this.celebrationList.push(n), n
        }, t.prototype.getQueueId = function() {
            for (var t = this.celebrationList.map(function(t) {
                    return t.queueId
                }), e = 1; e <= this.celebrationList.length; e++)
                if (-1 == t.indexOf(e)) return e;
            return this.celebrationList.length + 1
        }, t.prototype.reset = function() {
            this.celebrationList = [], this.poolBigFishCelebration = new h.Pool
        }, t
    }());
    e.celebrationManager = d
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(7),
        a = i(0),
        s = i(1),
        r = i(14),
        h = i(325),
        l = i(331),
        c = i(332),
        u = i(333),
        d = i(334),
        f = i(335),
        p = i(336),
        y = i(337),
        g = function() {
            function t() {
                this.reset()
            }
            return t.prototype.init = function(t) {
                this.effectContainer = t, this.effectContainer.addChild(this.effectIntroBox)
            }, t.prototype.getNo = function(t) {
                return (t = t > -1 ? t : a.default.deskInfo.chairId) - 1
            }, t.prototype.getEffectContainer = function(t) {
                var e = this.getNo(t.chairId);
                if (this.containerList[e] || (this.containerList[e] = {}), this.containerList[e][t.effectKind]) return this.keepMyEffectLayerIndex(t), this.containerList[e][t.effectKind];
                var i = new o.Container;
                return i.position.set(s.default.width / 2, s.default.height / 2), this.containerList[e][t.effectKind] = i, this.effectContainer.addChildAt(i, this.effectContainer.children.length), this.keepMyEffectLayerIndex(t), i
            }, t.prototype.keepMyEffectLayerIndex = function(t) {
                var e = this.effectContainer.children.length;
                this.containerList[a.default.deskInfo.chairId - 1] || (this.containerList[a.default.deskInfo.chairId - 1] = {});
                for (var i = r.FishKind.FireStorm; i <= r.FishKind.Redpacket; i++) {
                    var n = this.containerList[a.default.deskInfo.chairId - 1][i];
                    n && this.effectContainer.setChildIndex(n, e - 1)
                }
            }, t.prototype.setMyRedPacketLayerIndex = function() {
                var t = this.effectContainer.children.length;
                this.containerList[a.default.deskInfo.chairId - 1] || (this.containerList[a.default.deskInfo.chairId - 1] = {});
                var e = this.containerList[a.default.deskInfo.chairId - 1][r.FishKind.Redpacket];
                e && this.effectContainer.setChildIndex(e, t - 1)
            }, t.prototype.hasEffect = function(t) {
                void 0 === t && (t = -1);
                var e = !1,
                    i = this.effectList[this.getNo(t)];
                if (!i) return e;
                for (var n = 0, o = Object.keys(i); n < o.length; n++) {
                    var a = o[n];
                    i[Number(a)] && (e = !0)
                }
                return e
            }, t.prototype.getAnyIceEffect = function() {
                for (var t = null, e = 0; e < 4; e++) {
                    var i = this.effectList[e];
                    i && (i[r.FishKind.AzureStone] && (t = i[r.FishKind.AzureStone]))
                }
                return t
            }, t.prototype.getEffect = function(t, e) {
                return void 0 === e && (e = -1), this.effectList[this.getNo(e)] && this.effectList[this.getNo(e)][t]
            }, t.prototype.removeEffect = function(t, e) {
                void 0 === e && (e = -1), this.effectList[this.getNo(e)] && (this.effectList[this.getNo(e)][t] = null)
            }, t.prototype.createEffect = function(t) {
                var e;
                switch (t.effectContainer = this.getEffectContainer(t), t.fishKind) {
                    case r.FishKind.FireStorm:
                        e = new h.default(t);
                        break;
                    case r.FishKind.ThunderHammer:
                        e = new l.default(t);
                        break;
                    case r.FishKind.AzureStone:
                        e = new c.default(t);
                        break;
                    case r.FishKind.Dragon:
                        e = new u.default(t);
                        break;
                    case r.FishKind.MonkeyKing:
                        e = new d.default(t);
                        break;
                    case r.FishKind.GhostShip:
                        e = new f.default(t);
                        break;
                    case r.FishKind.DragonWheel:
                        e = new y.default(t);
                        break;
                    case r.FishKind.Redpacket:
                        e = new p.default(t)
                }
                return this.effectList[this.getNo(t.chairId)] || (this.effectList[this.getNo(t.chairId)] = {}), this.effectList[this.getNo(t.chairId)][t.effectKind] = e, e
            }, t.prototype.addEffectIntro = function(t) {
                var e = this.effectContainer.children.length;
                this.effectIntroBox.addChild(t), this.effectContainer.addChildAt(this.effectIntroBox, e - 1), this.setMyRedPacketLayerIndex()
            }, t.prototype.interruptEffect = function(t) {
                void 0 === t && (t = -1);
                var e = this.effectList[this.getNo(t)];
                if (e) {
                    for (var i in e) e[i] && Number(i) !== r.FishKind.AzureStone && (e[i].interrupt(), this.removeEffect(Number(i), t));
                    e = null
                }
            }, t.prototype.reset = function() {
                this.containerList = [], this.effectList = [], this.resetEffectIntroBox()
            }, t.prototype.resetEffectIntroBox = function() {
                var t = this.effectIntroBox;
                t && t.parent.removeChild(t), this.effectIntroBox = new o.Container, this.effectContainer && this.effectContainer.addChild(this.effectIntroBox)
            }, t
        }();
    ! function(t) {
        t[t.None = 0] = "None", t[t.Intro = 1] = "Intro", t[t.Ready = 2] = "Ready", t[t.Wait = 3] = "Wait"
    }(n || (n = {})), e.SpecialTag = n;
    var m = new g;
    e.specialManager = m
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(3);
    i(330);
    var s = i(21),
        r = i(9),
        h = function(t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this, e) || this;
                return n.isMe = i, n.kind = 0, n.double = !1, n.skeleton.setSkinByName(i ? "spark1" : "spark2"), n
            }
            return o(e, t), e.prototype.open = function() {
                this.state.setAnimation(0, "gun_" + this.kind + "_open" + (this.double ? "_2" : ""), !1)
            }, e.prototype.shot = function() {
                this.state.setAnimation(0, "gun_" + this.kind + "_shot" + (this.double ? "_2" : ""), !1), this.isMe && r.default.playShot(this.kind, this.double)
            }, e.prototype.change = function(t) {
                this.kind && this.kind == t || (this.kind = t, this.open(), this.isMe && r.default.playGunChange())
            }, e.prototype.wait = function() {
                this.state.setAnimation(0, "gun_" + this.kind + "_wait" + (this.double ? "_2" : ""), !0)
            }, e.prototype.turnDouble = function(t) {
                this.double = t, this.isMe && this.state.setAnimation(0, "gun_" + this.kind + (this.double ? "_change_2" : "_ease_out_3"), !1)
            }, e.prototype.easeOut = function() {
                this.state.setAnimation(0, "gun_" + this.kind + "_ease_out" + (this.double ? "_2" : ""), !1)
            }, e.prototype.easeIn = function() {
                this.state.setAnimation(0, "gun_" + this.kind + "_ease_in" + (this.double ? "_2" : ""), !1)
            }, e.prototype.show = function() {
                var t = this;
                (new a.TimelineLite).call(function() {
                    return t.easeIn()
                }).call(function() {
                    return t.cancelMask()
                }, null, null, "+=0.8")
            }, e.prototype.hide = function() {
                this.setMask(), this.easeOut()
            }, e.prototype.setMask = function() {
                if (!this.graphics) {
                    this.graphics = s.Graph.drawRect([{
                        x: -100,
                        y: -300,
                        width: 200,
                        height: 325
                    }], this.parent)
                }
                this.parent.addChild(this.graphics), this.mask = this.graphics
            }, e.prototype.cancelMask = function() {
                this.graphics.parent.removeChild(this.graphics), this.mask = null
            }, e
        }(PIXI.spine.Spine);
    e.Gun = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(21),
        s = i(3),
        r = i(1),
        h = i(7),
        l = i(2),
        c = i(0),
        u = i(9),
        d = function(t) {
            function i(e, i) {
                var n = this,
                    o = [PIXI.Texture.fromFrame("fish_" + i.kind + "_swim_u_d_00.png")];
                return (n = t.call(this, o) || this).id = e, n.isShadow = !0, n.isLightShaking = !1, n.formatRects(), n.initFish(i), n.stop(), n.initOtherLightnMarix(), n
            }
            return o(i, t), i.prototype.initFish = function(t) {
                this.name = t.name, this.kind = t.kind, this.type = t.type, this.speed = t.speed, this.level = t.level, this.framesCountSwim = t.swim_frames, this.animationSpeed = t.aniSpeed, this.anchor.set(.5), this.shadowDistance = t.shadowDistance, this.radius = 0, this.totalCount = 4, this.curCount = 0, this.curFrameNum = 0, this.scale.set(1), this.hurtCount = 0, this.lockPos = y[0], this.framesSwim = this.initFrames(), this.textures = this.framesSwim, this.position.set(r.default.width / 2, r.default.height / 2)
            }, i.prototype.initOtherLightnMarix = function() {
                var t = new PIXI.filters.ColorMatrixFilter;
                t.matrix = [.49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, 0, 0, 0, 1, 0], this.nowFilter = t
            }, i.prototype.initLightnFish = function(t) {
                var e = this.initLightnFrames(),
                    i = new PIXI.extras.AnimatedSprite(e);
                return i.name = this.name, i.kind = this.kind, i.type = this.type, i.speed = this.speed, i.rects = this.rects, i.aimRects = this.aimRects, i.level = this.level, i.framesCountSwim = this.framesCountSwim, i.animationSpeed = this.animationSpeed, i.loop = this.loop, t && (i.filters = [this.nowFilter]), i.anchor.set(.5), i.gotoAndStop(this.currentFrame), this.addChild(i), i
            }, i.prototype.initDirection = function(t) {
                var e = 0,
                    i = r.default.width,
                    n = r.default.height;
                e = t.x < i / 2 && t.y < n / 2 ? 0 : t.x > i / 2 && t.y < n / 2 ? 1 : t.x < i / 2 && t.y > n / 2 ? 2 : 3, e *= this.framesCountSwim, this.direction = e
            }, i.prototype.addLockIcon = function() {
                if (this.lockSprite) return this.lockSprite.texture = PIXI.Texture.fromFrame("aim_target"), void this.addChild(this.lockSprite);
                var t = PIXI.Sprite.fromFrame("aim_target");
                t.anchor.set(.5), this.addChild(t), this.lockSprite = t
            }, i.prototype.getFrameName = function(t) {
                var i = t < 10 ? "0" + t : t;
                return "fish_" + this.kind + "_swim_" + e.Directions[this.curCount] + i + ".png"
            }, i.prototype.initFrames = function() {
                for (var t = [], e = 0; e < this.framesCountSwim; e++) t.push(PIXI.Texture.fromFrame(this.getFrameName(e)));
                return t
            }, i.prototype.getLightnFrameName = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = "swim");
                var n = t < 10 ? "0" + t : t;
                return "fish_lightn_" + this.kind + "_" + i + "_" + e.Directions[this.curCount] + n + ".png"
            }, i.prototype.initLightnFrames = function(t) {
                void 0 === t && (t = "swim");
                for (var e = [], i = this.framesCountSwim, n = 0; n < i; n++) e.push(PIXI.Texture.from(this.getLightnFrameName(n, t)));
                return e
            }, i.prototype.swim = function() {
                this.totalTickerCount = 60 * m, this.tmpCount = 0, this.swimTicker = c.default.scene.ticker.add(this.updateTicker, this)
            }, i.prototype.updateTicker = function(t) {
                var e = Date.now() - (l.default.formatDateStrWithMS(this.createTime2).getTime() - c.default.serverTimeDiff),
                    i = (e = (e += l.default.getTimeZoneMillDiff(c.default.serverTimeZone)) < 0 ? 0 : e) / (1e3 * (w + m)),
                    n = Math.floor((Math.floor(this.totalTickerCount * i) - 60 * w) / x);
                if (n >= this.totalTickerCount / x) return c.default.scene.ticker.remove(this.updateTicker, this), void(this.onMoveOut && this.onMoveOut());
                n < 0 || (this.tmpCount % x == 0 && this.onUpdate(n), this.tmpCount++)
            }, i.prototype.stay = function() {
                this.catched = !0, this.swimTween && this.swimTween.kill()
            }, i.prototype.pause = function() {}, i.prototype.resume = function() {}, i.prototype.hurt = function() {
                this.aniHurt ? this.aniHurt.restart() : this.initAniHurt(), this.hurtCount++
            }, i.prototype.lightnHurt = function(t) {
                this.destroyAnimateSprite(), this.animatedSprite || (this.animatedSprite = this.initLightnFish(t), this.initAniShake(), this.hurtCount++)
            }, i.prototype.destroyAnimateSprite = function() {
                this.animatedSprite && (this.removeChild(this.animatedSprite), this.animatedSprite.destroy(), this.animatedSprite = null, this.alpha = 1)
            }, i.prototype.initAniShake = function() {
                var t = this;
                if (!this.isLightShaking) {
                    this.isLightShaking = !0;
                    var e = function(i, n) {
                        if (i && i.parent) {
                            if (n <= 0) return t.isLightShaking = !1, i.position.set(r.default.width / 2, r.default.height / 2), void t.destroyAnimateSprite();
                            i.x += 10 * Math.random() - 5, i.y += 10 * Math.random() - 5, setTimeout(function() {
                                e(i, --n)
                            }, 50)
                        }
                    };
                    e(this, 12), (new s.TimelineLite).call(function() {
                        t.destroyAnimateSprite()
                    }, null, null, "+=0.6")
                }
            }, i.prototype.addLightGrayEffect = function() {
                var t = this.textures[this.currentFrame];
                this.lightGraySprite = new PIXI.Sprite, this.lightGraySprite.anchor.set(.5), this.lightGraySprite.texture = t, this.addChild(this.lightGraySprite), this.gotoAndStop(0);
                var e = new PIXI.filters.ColorMatrixFilter;
                e.greyscale(.2), this.lightGraySprite.filters = [e], this.animatedSprite && (this.animatedSprite.filters = [e])
            }, i.prototype.destoryLightGraySprite = function() {
                this.lightGraySprite && (this.removeChild(this.lightGraySprite), this.lightGraySprite.destroy(), this.lightGraySprite = null)
            }, i.prototype.catch = function(t, e) {
                this.catched = !0, this.lock = !1, t ? this.addLightGrayEffect() : this.stop(), this.tint = 16777215, this.swimTicker && (c.default.scene.ticker.remove(this.updateTicker, this), this.swimTicker = null), this.trace && this.trace.kill(), this.aniHurt && this.aniHurt.kill(), this.playCatchAni(e), u.default.playAwakenDragonDead()
            }, i.prototype.playCatchAni = function(t) {
                for (var e = this, i = new s.TimelineLite({
                        onComplete: function() {
                            e.destoryLightGraySprite(), t()
                        }
                    }), n = 0; n < 50; n++) i.to(this, .02, {
                    x: this.x + (30 * Math.random() - 15),
                    y: this.y + (30 * Math.random() - 15)
                });
                i.to(this, 1, {
                    alpha: 0
                })
            }, i.prototype.destroy = function() {}, i.prototype.getRects = function(t) {
                void 0 === t && (t = this.rects);
                for (var e = new Array, i = 0, n = t; i < n.length; i++) {
                    var o = n[i],
                        a = l.default.getRotatedPoint(new PIXI.Point((o.x + o.width / 2) * this.scale.x, (o.y + o.height / 2) * this.scale.y), this.position, this.rotation),
                        s = l.default.clone(o);
                    s.width = s.width * Math.abs(this.scale.x), s.height = s.height * Math.abs(this.scale.y), s.x = a.x - s.width / 2, s.y = a.y - s.height / 2, e.push({
                        rect: s,
                        rotation: this.rotation
                    })
                }
                return e
            }, i.prototype.createLockArea = function() {
                var t = this.curCount >= 2 ? p[this.curFrameNum] : f[this.curFrameNum];
                this.hitArea = new PIXI.Rectangle(t.x - this.width / 2, t.y - this.height / 2, t.width, t.height)
            }, i.prototype.reset = function(t, e, i) {
                this.tint = 16777215, this.filters = null, this.catched = !1, this.inSpecialCathed = !1, this.loop = !1, this.alpha = 1, this.id = t, this.realKind = e, this.type = i.type, this.level = i.level, this.speed = i.speed, this.createLockArea(), this.onMoveOut = null, this.onSingleMoveOut = null, this.initFish(i), this.destroyAnimateSprite(), this.destoryLightGraySprite(), this.rects = this.frameRects[0], this.isLightShaking = !1
            }, i.prototype.setCreateTime = function(t) {
                this.createTime2 = t
            }, i.prototype.allowCatch = function(t) {
                this.tint = t ? 16777215 : 5263440
            }, i.prototype.clear = function() {
                this.aniHurt && this.aniHurt.kill(), this.removeAllListeners(), this.interactive = !1, this.lock = !1, this.autoLock = !1, this.trace && this.trace.kill(), this.trace = null, this.onMoveOut = null, this.onSingleMoveOut = null, this.scale.set(1), this.createTime2 = null, this.swimTicker && (c.default.scene.ticker.remove(this.updateTicker, this), this.swimTicker = null)
            }, i.prototype.translate = function(t) {}, i.prototype.initAniHurt = function() {
                var t = new s.TimelineMax({
                    repeat: 1,
                    onComplete: function() {}
                });
                t.set(this, {
                    tint: 16711680
                }), t.set(this, {
                    delay: .3,
                    tint: 16777215
                }), t.set(this, {
                    delay: .3
                }), this.aniHurt = t
            }, i.prototype.showDebugger = function() {
                for (var t = this.rects, e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e];
                    if (n instanceof PIXI.Graphics) {
                        this.removeChild(n);
                        a.Graph.drawRect([this.hitArea], this)
                    }
                }
                0 === this.children.length && a.Graph.drawRect(t, this)
            }, i.prototype.initMoveOut = function(t, e, i) {
                this.initDirection(t), this.swim(), this.onMoveOut = e, this.onSingleMoveOut = i, c.default.isView && (this.angle = 180)
            }, i.prototype.formatRects = function() {
                this.frameRects = [];
                for (var t = 0; t < e.DragonRects.length; t++) {
                    for (var i = [], n = 0; n < e.DragonRects[t].length; n++) i.push({
                        x: e.DragonRects[t][n].x - this.width / 2,
                        y: e.DragonRects[t][n].y - this.height / 2,
                        width: e.DragonRects[t][n].width,
                        height: e.DragonRects[t][n].height
                    });
                    this.frameRects.push(i)
                }
                this.frameRects2 = [];
                for (t = 0; t < e.DragonRects2.length; t++) {
                    for (i = [], n = 0; n < e.DragonRects2[t].length; n++) i.push({
                        x: e.DragonRects2[t][n].x - this.width / 2,
                        y: e.DragonRects2[t][n].y - this.height / 2,
                        width: e.DragonRects2[t][n].width,
                        height: e.DragonRects2[t][n].height
                    });
                    this.frameRects2.push(i)
                }
            }, i.prototype.getNewLockPos = function() {
                return this.curCount >= 2 ? this.getRotatedPoint(g[this.curFrameNum], 2 != this.curCount, !1) : this.getRotatedPoint(y[this.curFrameNum], !1, 0 != this.curCount)
            }, i.prototype.getRotatedPoint = function(t, e, i) {
                return new h.Point(e ? this.width - t.x : t.x, i ? this.height - t.y : t.y)
            }, Object.defineProperty(i.prototype, "lock", {
                get: function() {
                    return this.locked
                },
                set: function(t) {
                    this.locked != t && (this.locked = t, t ? this.addLockIcon() : this.removeChild(this.lockSprite))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "autoLock", {
                get: function() {
                    return this.autoLocked
                },
                set: function(t) {
                    this.autoLocked != t && (this.autoLocked = t)
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.renderWebGL = function(e) {
                if (!this.isShadow) return t.prototype.renderWebGL.call(this, e);
                var i = this.shadowDistance;
                this.transform.updateTransform(this.parent.transform), this.calculateVertices();
                var n = this.textures[this.currentFrame],
                    o = new PIXI.Sprite;
                o.anchor = this.anchor, o.texture = PIXI.Texture.fromFrame(n.textureCacheIds[0] + "_gray"), this.localTransform.copy(o.localTransform), this.worldTransform.copy(o.worldTransform), o.worldTransform.tx += i * r.default.scale, o.worldTransform.ty += i * r.default.scale, o.worldAlpha = .39, o.calculateVertices(), e.plugins[this.pluginName].render(o), e.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this);
                for (var a = 0, s = this.children.length; a < s; ++a) this.children[a].renderWebGL(e);
                t.prototype.renderWebGL.call(this, e)
            }, i.prototype.resetFrameCount = function(t) {
                return (t + this.direction) % (4 * this.framesCountSwim)
            }, i.prototype.onUpdate = function(t) {
                var e = this.resetFrameCount(t);
                this.curFrameNum = e % this.framesCountSwim;
                var i = Math.floor(e / this.framesCountSwim);
                this.curCount != i && this.destroyAnimateSprite(), this.curCount = i, this.curCount < this.totalCount && (this.textures = this.initFrames(), this.gotoAndStop(this.curFrameNum), this.createLockArea(), this.scale.y = 1 == this.curCount ? -1 : 1, this.scale.x = 3 == this.curCount ? -1 : 1, this.scale.y *= v, this.scale.x *= v), this.animatedSprite && this.animatedSprite.gotoAndStop(this.curFrameNum), this.rects = this.curCount >= 2 ? this.frameRects2[this.curFrameNum] : this.frameRects[this.curFrameNum], this.lockPos = this.curCount >= 2 ? g[this.curFrameNum] : y[this.curFrameNum], this.lockSprite && this.lockSprite.position.set(this.lockPos.x - this.width / 2, this.lockPos.y - this.height / 2), 0 == this.curFrameNum && t < 4 * this.framesCountSwim && (u.default.playAwakenDragonSwim(), (this.locked || this.autoLock) && this.onSingleMoveOut && this.onSingleMoveOut(), this.aniHurt && (this.aniHurt.kill(), this.tint = 16777215))
            }, i
        }(PIXI.extras.AnimatedSprite);
    e.default = d, e.Directions = ["u_d_", "u_d_", "l_r_", "l_r_"], e.DragonRects = [
        [],
        [{
            x: 297,
            y: 0,
            width: 108,
            height: 51
        }],
        [{
            x: 297,
            y: 0,
            width: 108,
            height: 51
        }],
        [{
            x: 295,
            y: 0,
            width: 127,
            height: 100
        }],
        [{
            x: 295,
            y: 0,
            width: 155,
            height: 152
        }],
        [{
            x: 295,
            y: 0,
            width: 155,
            height: 152
        }],
        [{
            x: 295,
            y: 0,
            width: 149,
            height: 197
        }],
        [{
            x: 313,
            y: 0,
            width: 139,
            height: 258
        }],
        [{
            x: 313,
            y: 0,
            width: 139,
            height: 258
        }],
        [{
            x: 313,
            y: 0,
            width: 156,
            height: 300
        }],
        [{
            x: 292,
            y: 0,
            width: 166,
            height: 210
        }, {
            x: 342,
            y: 210,
            width: 137,
            height: 125
        }],
        [{
            x: 292,
            y: 0,
            width: 166,
            height: 210
        }, {
            x: 342,
            y: 210,
            width: 137,
            height: 125
        }],
        [{
            x: 307,
            y: 0,
            width: 157,
            height: 230
        }, {
            x: 381,
            y: 230,
            width: 138,
            height: 137
        }],
        [{
            x: 307,
            y: 0,
            width: 157,
            height: 230
        }, {
            x: 406,
            y: 230,
            width: 178,
            height: 166
        }],
        [{
            x: 307,
            y: 0,
            width: 157,
            height: 230
        }, {
            x: 406,
            y: 230,
            width: 178,
            height: 166
        }],
        [{
            x: 312,
            y: 0,
            width: 144,
            height: 225
        }, {
            x: 373,
            y: 225,
            width: 206,
            height: 83
        }, {
            x: 456,
            y: 308,
            width: 177,
            height: 97
        }],
        [{
            x: 322,
            y: 0,
            width: 118,
            height: 241
        }, {
            x: 385,
            y: 238,
            width: 251,
            height: 86
        }, {
            x: 519,
            y: 324,
            width: 155,
            height: 81
        }],
        [{
            x: 322,
            y: 0,
            width: 118,
            height: 241
        }, {
            x: 385,
            y: 238,
            width: 251,
            height: 86
        }, {
            x: 519,
            y: 324,
            width: 155,
            height: 81
        }],
        [{
            x: 325,
            y: 0,
            width: 104,
            height: 300
        }, {
            x: 428,
            y: 228,
            width: 214,
            height: 84
        }, {
            x: 484,
            y: 310,
            width: 226,
            height: 79
        }],
        [{
            x: 331,
            y: 0,
            width: 94,
            height: 231
        }, {
            x: 371,
            y: 230,
            width: 147,
            height: 107
        }, {
            x: 517,
            y: 278,
            width: 235,
            height: 119
        }],
        [{
            x: 331,
            y: 0,
            width: 94,
            height: 231
        }, {
            x: 371,
            y: 230,
            width: 147,
            height: 107
        }, {
            x: 517,
            y: 278,
            width: 235,
            height: 119
        }],
        [{
            x: 319,
            y: 0,
            width: 116,
            height: 66
        }, {
            x: 348,
            y: 66,
            width: 83,
            height: 170
        }, {
            x: 397,
            y: 235,
            width: 103,
            height: 119
        }, {
            x: 496,
            y: 271,
            width: 302,
            height: 121
        }],
        [{
            x: 313,
            y: 0,
            width: 134,
            height: 111
        }, {
            x: 351,
            y: 111,
            width: 80,
            height: 114
        }, {
            x: 385,
            y: 218,
            width: 83,
            height: 78
        }, {
            x: 432,
            y: 275,
            width: 401,
            height: 142
        }],
        [{
            x: 313,
            y: 0,
            width: 134,
            height: 111
        }, {
            x: 351,
            y: 111,
            width: 80,
            height: 114
        }, {
            x: 385,
            y: 218,
            width: 83,
            height: 78
        }, {
            x: 432,
            y: 275,
            width: 401,
            height: 142
        }],
        [{
            x: 333,
            y: 0,
            width: 110,
            height: 240
        }, {
            x: 400,
            y: 239,
            width: 112,
            height: 91
        }, {
            x: 511,
            y: 279,
            width: 351,
            height: 126
        }],
        [{
            x: 321,
            y: 0,
            width: 126,
            height: 203
        }, {
            x: 369,
            y: 201,
            width: 105,
            height: 111
        }, {
            x: 466,
            y: 279,
            width: 304,
            height: 99
        }, {
            x: 771,
            y: 307,
            width: 117,
            height: 134
        }],
        [{
            x: 321,
            y: 0,
            width: 126,
            height: 203
        }, {
            x: 369,
            y: 201,
            width: 105,
            height: 111
        }, {
            x: 466,
            y: 279,
            width: 304,
            height: 99
        }, {
            x: 771,
            y: 307,
            width: 117,
            height: 134
        }],
        [{
            x: 345,
            y: 0,
            width: 104,
            height: 293
        }, {
            x: 433,
            y: 255,
            width: 205,
            height: 110
        }, {
            x: 634,
            y: 312,
            width: 170,
            height: 114
        }, {
            x: 803,
            y: 303,
            width: 116,
            height: 164
        }],
        [{
            x: 352,
            y: 0,
            width: 73,
            height: 314
        }, {
            x: 424,
            y: 231,
            width: 68,
            height: 110
        }, {
            x: 491,
            y: 293,
            width: 354,
            height: 95
        }, {
            x: 843,
            y: 320,
            width: 94,
            height: 162
        }],
        [{
            x: 352,
            y: 0,
            width: 73,
            height: 314
        }, {
            x: 424,
            y: 231,
            width: 68,
            height: 110
        }, {
            x: 491,
            y: 293,
            width: 354,
            height: 95
        }, {
            x: 843,
            y: 320,
            width: 94,
            height: 162
        }],
        [{
            x: 355,
            y: 0,
            width: 62,
            height: 261
        }, {
            x: 415,
            y: 220,
            width: 60,
            height: 164
        }, {
            x: 474,
            y: 285,
            width: 344,
            height: 90
        }, {
            x: 679,
            y: 340,
            width: 291,
            height: 118
        }, {
            x: 888,
            y: 457,
            width: 81,
            height: 71
        }],
        [{
            x: 367,
            y: 0,
            width: 52,
            height: 257
        }, {
            x: 418,
            y: 211,
            width: 59,
            height: 94
        }, {
            x: 470,
            y: 267,
            width: 62,
            height: 159
        }, {
            x: 532,
            y: 301,
            width: 337,
            height: 91
        }, {
            x: 865,
            y: 363,
            width: 121,
            height: 180
        }],
        [{
            x: 367,
            y: 0,
            width: 52,
            height: 257
        }, {
            x: 418,
            y: 211,
            width: 59,
            height: 94
        }, {
            x: 470,
            y: 267,
            width: 62,
            height: 159
        }, {
            x: 532,
            y: 301,
            width: 337,
            height: 91
        }, {
            x: 865,
            y: 363,
            width: 121,
            height: 180
        }],
        [{
            x: 373,
            y: 0,
            width: 50,
            height: 269
        }, {
            x: 421,
            y: 232,
            width: 89,
            height: 101
        }, {
            x: 510,
            y: 285,
            width: 104,
            height: 150
        }, {
            x: 613,
            y: 312,
            width: 295,
            height: 93
        }, {
            x: 871,
            y: 403,
            width: 153,
            height: 161
        }],
        [{
            x: 384,
            y: 78,
            width: 33,
            height: 197
        }, {
            x: 413,
            y: 229,
            width: 73,
            height: 85
        }, {
            x: 485,
            y: 285,
            width: 213,
            height: 78
        }, {
            x: 579,
            y: 322,
            width: 318,
            height: 103
        }, {
            x: 872,
            y: 381,
            width: 82,
            height: 81
        }, {
            x: 929,
            y: 425,
            width: 112,
            height: 223
        }],
        [{
            x: 384,
            y: 78,
            width: 33,
            height: 197
        }, {
            x: 413,
            y: 229,
            width: 73,
            height: 85
        }, {
            x: 485,
            y: 285,
            width: 213,
            height: 78
        }, {
            x: 579,
            y: 322,
            width: 318,
            height: 103
        }, {
            x: 872,
            y: 381,
            width: 82,
            height: 81
        }, {
            x: 929,
            y: 425,
            width: 112,
            height: 223
        }],
        [{
            x: 391,
            y: 162,
            width: 35,
            height: 86
        }, {
            x: 421,
            y: 237,
            width: 52,
            height: 62
        }, {
            x: 474,
            y: 279,
            width: 96,
            height: 59
        }, {
            x: 568,
            y: 313,
            width: 290,
            height: 93
        }, {
            x: 856,
            y: 358,
            width: 83,
            height: 95
        }, {
            x: 927,
            y: 424,
            width: 133,
            height: 284
        }],
        [{
            x: 394,
            y: 196,
            width: 55,
            height: 67
        }, {
            x: 483,
            y: 260,
            width: 131,
            height: 69
        }, {
            x: 565,
            y: 310,
            width: 328,
            height: 95
        }, {
            x: 888,
            y: 378,
            width: 86,
            height: 96
        }, {
            x: 953,
            y: 472,
            width: 106,
            height: 306
        }],
        [{
            x: 394,
            y: 196,
            width: 55,
            height: 67
        }, {
            x: 483,
            y: 260,
            width: 131,
            height: 69
        }, {
            x: 565,
            y: 310,
            width: 328,
            height: 95
        }, {
            x: 888,
            y: 378,
            width: 86,
            height: 96
        }, {
            x: 953,
            y: 472,
            width: 106,
            height: 306
        }],
        [{
            x: 414,
            y: 217,
            width: 62,
            height: 73
        }, {
            x: 466,
            y: 273,
            width: 213,
            height: 73
        }, {
            x: 673,
            y: 324,
            width: 235,
            height: 81
        }, {
            x: 843,
            y: 405,
            width: 153,
            height: 78
        }, {
            x: 967,
            y: 481,
            width: 89,
            height: 323
        }],
        [{
            x: 443,
            y: 254,
            width: 83,
            height: 64
        }, {
            x: 525,
            y: 295,
            width: 315,
            height: 76
        }, {
            x: 798,
            y: 349,
            width: 117,
            height: 133
        }, {
            x: 914,
            y: 405,
            width: 101,
            height: 152
        }, {
            x: 957,
            y: 553,
            width: 116,
            height: 262
        }],
        [{
            x: 443,
            y: 254,
            width: 83,
            height: 64
        }, {
            x: 525,
            y: 295,
            width: 315,
            height: 76
        }, {
            x: 798,
            y: 349,
            width: 117,
            height: 133
        }, {
            x: 914,
            y: 405,
            width: 101,
            height: 152
        }, {
            x: 957,
            y: 553,
            width: 116,
            height: 262
        }],
        [{
            x: 514,
            y: 297,
            width: 334,
            height: 63
        }, {
            x: 780,
            y: 360,
            width: 161,
            height: 105
        }, {
            x: 907,
            y: 431,
            width: 127,
            height: 122
        }, {
            x: 962,
            y: 553,
            width: 103,
            height: 257
        }],
        [{
            x: 549,
            y: 300,
            width: 296,
            height: 72
        }, {
            x: 820,
            y: 360,
            width: 107,
            height: 116
        }, {
            x: 919,
            y: 428,
            width: 128,
            height: 162
        }, {
            x: 972,
            y: 589,
            width: 83,
            height: 220
        }],
        [{
            x: 549,
            y: 300,
            width: 296,
            height: 72
        }, {
            x: 820,
            y: 360,
            width: 107,
            height: 116
        }, {
            x: 919,
            y: 428,
            width: 128,
            height: 162
        }, {
            x: 972,
            y: 589,
            width: 83,
            height: 220
        }],
        [{
            x: 583,
            y: 295,
            width: 262,
            height: 70
        }, {
            x: 831,
            y: 354,
            width: 113,
            height: 126
        }, {
            x: 929,
            y: 424,
            width: 133,
            height: 208
        }, {
            x: 975,
            y: 631,
            width: 93,
            height: 179
        }],
        [{
            x: 633,
            y: 307,
            width: 204,
            height: 61
        }, {
            x: 837,
            y: 343,
            width: 80,
            height: 82
        }, {
            x: 883,
            y: 406,
            width: 136,
            height: 134
        }, {
            x: 972,
            y: 539,
            width: 102,
            height: 271
        }],
        [{
            x: 633,
            y: 307,
            width: 204,
            height: 61
        }, {
            x: 837,
            y: 343,
            width: 80,
            height: 82
        }, {
            x: 883,
            y: 406,
            width: 136,
            height: 134
        }, {
            x: 972,
            y: 539,
            width: 102,
            height: 271
        }],
        [{
            x: 667,
            y: 309,
            width: 175,
            height: 51
        }, {
            x: 819,
            y: 358,
            width: 119,
            height: 76
        }, {
            x: 903,
            y: 429,
            width: 141,
            height: 138
        }, {
            x: 972,
            y: 567,
            width: 105,
            height: 243
        }],
        [{
            x: 666,
            y: 311,
            width: 177,
            height: 47
        }, {
            x: 820,
            y: 358,
            width: 107,
            height: 47
        }, {
            x: 883,
            y: 405,
            width: 98,
            height: 57
        }, {
            x: 934,
            y: 462,
            width: 110,
            height: 119
        }, {
            x: 969,
            y: 581,
            width: 96,
            height: 229
        }],
        [{
            x: 666,
            y: 311,
            width: 177,
            height: 47
        }, {
            x: 820,
            y: 358,
            width: 107,
            height: 47
        }, {
            x: 883,
            y: 405,
            width: 98,
            height: 57
        }, {
            x: 934,
            y: 462,
            width: 110,
            height: 119
        }, {
            x: 969,
            y: 581,
            width: 96,
            height: 229
        }],
        [{
            x: 725,
            y: 324,
            width: 108,
            height: 34
        }, {
            x: 820,
            y: 345,
            width: 72,
            height: 47
        }, {
            x: 874,
            y: 392,
            width: 76,
            height: 52
        }, {
            x: 930,
            y: 444,
            width: 72,
            height: 70
        }, {
            x: 949,
            y: 514,
            width: 112,
            height: 128
        }, {
            x: 974,
            y: 642,
            width: 98,
            height: 168
        }],
        [{
            x: 750,
            y: 328,
            width: 92,
            height: 34
        }, {
            x: 840,
            y: 354,
            width: 72,
            height: 51
        }, {
            x: 895,
            y: 405,
            width: 86,
            height: 68
        }, {
            x: 937,
            y: 473,
            width: 85,
            height: 79
        }, {
            x: 957,
            y: 552,
            width: 108,
            height: 260
        }],
        [{
            x: 750,
            y: 328,
            width: 92,
            height: 34
        }, {
            x: 840,
            y: 354,
            width: 72,
            height: 51
        }, {
            x: 895,
            y: 405,
            width: 86,
            height: 68
        }, {
            x: 937,
            y: 473,
            width: 85,
            height: 79
        }, {
            x: 957,
            y: 552,
            width: 108,
            height: 260
        }],
        [{
            x: 856,
            y: 361,
            width: 58,
            height: 44
        }, {
            x: 889,
            y: 405,
            width: 80,
            height: 53
        }, {
            x: 934,
            y: 457,
            width: 79,
            height: 68
        }, {
            x: 960,
            y: 525,
            width: 107,
            height: 285
        }],
        [{
            x: 868,
            y: 380,
            width: 53,
            height: 26
        }, {
            x: 894,
            y: 406,
            width: 65,
            height: 48
        }, {
            x: 934,
            y: 454,
            width: 68,
            height: 71
        }, {
            x: 963,
            y: 523,
            width: 102,
            height: 287
        }],
        [{
            x: 868,
            y: 380,
            width: 53,
            height: 26
        }, {
            x: 894,
            y: 406,
            width: 65,
            height: 48
        }, {
            x: 934,
            y: 454,
            width: 68,
            height: 71
        }, {
            x: 963,
            y: 523,
            width: 102,
            height: 287
        }],
        [{
            x: 901,
            y: 403,
            width: 49,
            height: 29
        }, {
            x: 930,
            y: 432,
            width: 48,
            height: 54
        }, {
            x: 952,
            y: 486,
            width: 61,
            height: 53
        }, {
            x: 970,
            y: 538,
            width: 98,
            height: 273
        }],
        [{
            x: 922,
            y: 420,
            width: 40,
            height: 39
        }, {
            x: 945,
            y: 455,
            width: 39,
            height: 47
        }, {
            x: 963,
            y: 497,
            width: 62,
            height: 59
        }, {
            x: 976,
            y: 556,
            width: 92,
            height: 254
        }],
        [{
            x: 922,
            y: 420,
            width: 40,
            height: 39
        }, {
            x: 945,
            y: 455,
            width: 39,
            height: 47
        }, {
            x: 963,
            y: 497,
            width: 62,
            height: 59
        }, {
            x: 976,
            y: 556,
            width: 92,
            height: 254
        }],
        [{
            x: 961,
            y: 484,
            width: 35,
            height: 43
        }, {
            x: 976,
            y: 525,
            width: 46,
            height: 47
        }, {
            x: 987,
            y: 572,
            width: 72,
            height: 238
        }],
        [{
            x: 925,
            y: 459,
            width: 47,
            height: 33
        }, {
            x: 957,
            y: 492,
            width: 45,
            height: 42
        }, {
            x: 990,
            y: 530,
            width: 27,
            height: 70
        }, {
            x: 998,
            y: 594,
            width: 55,
            height: 216
        }],
        [{
            x: 925,
            y: 459,
            width: 47,
            height: 33
        }, {
            x: 957,
            y: 492,
            width: 45,
            height: 42
        }, {
            x: 990,
            y: 530,
            width: 27,
            height: 70
        }, {
            x: 998,
            y: 594,
            width: 55,
            height: 216
        }],
        [{
            x: 978,
            y: 527,
            width: 39,
            height: 61
        }, {
            x: 1005,
            y: 587,
            width: 27,
            height: 59
        }, {
            x: 1001,
            y: 646,
            width: 50,
            height: 164
        }],
        [{
            x: 985,
            y: 562,
            width: 55,
            height: 82
        }, {
            x: 1003,
            y: 643,
            width: 47,
            height: 167
        }],
        [{
            x: 985,
            y: 562,
            width: 55,
            height: 82
        }, {
            x: 1003,
            y: 643,
            width: 47,
            height: 167
        }],
        [{
            x: 1e3,
            y: 615,
            width: 52,
            height: 195
        }],
        [{
            x: 1001,
            y: 680,
            width: 56,
            height: 130
        }],
        [{
            x: 1001,
            y: 680,
            width: 56,
            height: 130
        }],
        [{
            x: 1003,
            y: 782,
            width: 58,
            height: 82
        }],
        [{
            x: 1014,
            y: 781,
            width: 45,
            height: 29
        }],
        [{
            x: 1014,
            y: 781,
            width: 45,
            height: 29
        }]
    ], e.DragonRects2 = [
        [],
        [{
            x: 0,
            y: 504,
            width: 81,
            height: 92
        }],
        [{
            x: 0,
            y: 504,
            width: 81,
            height: 92
        }],
        [{
            x: 0,
            y: 486,
            width: 107,
            height: 83
        }],
        [{
            x: 0,
            y: 476,
            width: 147,
            height: 94
        }],
        [{
            x: 0,
            y: 476,
            width: 147,
            height: 94
        }],
        [{
            x: 0,
            y: 485,
            width: 213,
            height: 77
        }],
        [{
            x: 0,
            y: 491,
            width: 263,
            height: 77
        }],
        [{
            x: 0,
            y: 491,
            width: 263,
            height: 77
        }],
        [{
            x: 0,
            y: 496,
            width: 296,
            height: 77
        }],
        [{
            x: 0,
            y: 496,
            width: 239,
            height: 77
        }, {
            x: 239,
            y: 527,
            width: 117,
            height: 86
        }],
        [{
            x: 0,
            y: 496,
            width: 239,
            height: 77
        }, {
            x: 239,
            y: 527,
            width: 117,
            height: 86
        }],
        [{
            x: 0,
            y: 493,
            width: 273,
            height: 91
        }, {
            x: 273,
            y: 541,
            width: 128,
            height: 86
        }],
        [{
            x: 0,
            y: 484,
            width: 258,
            height: 91
        }, {
            x: 256,
            y: 530,
            width: 89,
            height: 69
        }, {
            x: 345,
            y: 556,
            width: 128,
            height: 86
        }],
        [{
            x: 0,
            y: 484,
            width: 258,
            height: 91
        }, {
            x: 256,
            y: 530,
            width: 89,
            height: 69
        }, {
            x: 345,
            y: 556,
            width: 128,
            height: 86
        }],
        [{
            x: 0,
            y: 484,
            width: 258,
            height: 91
        }, {
            x: 258,
            y: 541,
            width: 132,
            height: 69
        }, {
            x: 390,
            y: 556,
            width: 157,
            height: 86
        }],
        [{
            x: 0,
            y: 487,
            width: 258,
            height: 65
        }, {
            x: 244,
            y: 535,
            width: 183,
            height: 78
        }, {
            x: 427,
            y: 519,
            width: 157,
            height: 86
        }],
        [{
            x: 0,
            y: 487,
            width: 258,
            height: 65
        }, {
            x: 244,
            y: 535,
            width: 183,
            height: 78
        }, {
            x: 427,
            y: 519,
            width: 157,
            height: 86
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 538,
            width: 183,
            height: 78
        }, {
            x: 490,
            y: 476,
            width: 157,
            height: 86
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 538,
            width: 183,
            height: 78
        }, {
            x: 490,
            y: 505,
            width: 90,
            height: 62
        }, {
            x: 548,
            y: 419,
            width: 115,
            height: 86
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 538,
            width: 183,
            height: 78
        }, {
            x: 490,
            y: 505,
            width: 90,
            height: 62
        }, {
            x: 548,
            y: 419,
            width: 115,
            height: 86
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 533,
            width: 216,
            height: 78
        }, {
            x: 523,
            y: 464,
            width: 105,
            height: 72
        }, {
            x: 564,
            y: 385,
            width: 128,
            height: 78
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 533,
            width: 228,
            height: 78
        }, {
            x: 535,
            y: 448,
            width: 83,
            height: 88
        }, {
            x: 606,
            y: 327,
            width: 91,
            height: 121
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 533,
            width: 228,
            height: 78
        }, {
            x: 535,
            y: 448,
            width: 83,
            height: 88
        }, {
            x: 606,
            y: 327,
            width: 91,
            height: 121
        }],
        [{
            x: 0,
            y: 505,
            width: 307,
            height: 73
        }, {
            x: 307,
            y: 533,
            width: 228,
            height: 78
        }, {
            x: 535,
            y: 441,
            width: 89,
            height: 101
        }, {
            x: 609,
            y: 295,
            width: 91,
            height: 151
        }],
        [{
            x: 0,
            y: 505,
            width: 343,
            height: 73
        }, {
            x: 343,
            y: 539,
            width: 233,
            height: 78
        }, {
            x: 576,
            y: 405,
            width: 68,
            height: 137
        }, {
            x: 643,
            y: 254,
            width: 91,
            height: 151
        }],
        [{
            x: 0,
            y: 505,
            width: 343,
            height: 73
        }, {
            x: 343,
            y: 539,
            width: 233,
            height: 78
        }, {
            x: 576,
            y: 405,
            width: 68,
            height: 137
        }, {
            x: 643,
            y: 254,
            width: 91,
            height: 151
        }],
        [{
            x: 0,
            y: 505,
            width: 343,
            height: 73
        }, {
            x: 343,
            y: 539,
            width: 163,
            height: 78
        }, {
            x: 506,
            y: 482,
            width: 93,
            height: 78
        }, {
            x: 599,
            y: 384,
            width: 83,
            height: 137
        }, {
            x: 661,
            y: 233,
            width: 91,
            height: 151
        }],
        [{
            x: 0,
            y: 505,
            width: 343,
            height: 73
        }, {
            x: 343,
            y: 539,
            width: 163,
            height: 78
        }, {
            x: 506,
            y: 473,
            width: 105,
            height: 87
        }, {
            x: 614,
            y: 337,
            width: 83,
            height: 140
        }, {
            x: 669,
            y: 209,
            width: 148,
            height: 126
        }],
        [{
            x: 0,
            y: 505,
            width: 343,
            height: 73
        }, {
            x: 343,
            y: 539,
            width: 163,
            height: 78
        }, {
            x: 506,
            y: 473,
            width: 105,
            height: 87
        }, {
            x: 614,
            y: 337,
            width: 83,
            height: 140
        }, {
            x: 669,
            y: 209,
            width: 148,
            height: 126
        }],
        [{
            x: 159,
            y: 496,
            width: 167,
            height: 64
        }, {
            x: 326,
            y: 542,
            width: 163,
            height: 78
        }, {
            x: 489,
            y: 477,
            width: 105,
            height: 87
        }, {
            x: 594,
            y: 349,
            width: 83,
            height: 146
        }, {
            x: 661,
            y: 287,
            width: 69,
            height: 72
        }, {
            x: 720,
            y: 194,
            width: 148,
            height: 95
        }],
        [{
            x: 159,
            y: 496,
            width: 167,
            height: 64
        }, {
            x: 326,
            y: 542,
            width: 163,
            height: 78
        }, {
            x: 489,
            y: 477,
            width: 105,
            height: 87
        }, {
            x: 594,
            y: 349,
            width: 83,
            height: 146
        }, {
            x: 673,
            y: 255,
            width: 93,
            height: 97
        }, {
            x: 754,
            y: 207,
            width: 177,
            height: 95
        }],
        [{
            x: 159,
            y: 496,
            width: 167,
            height: 64
        }, {
            x: 326,
            y: 542,
            width: 163,
            height: 78
        }, {
            x: 489,
            y: 477,
            width: 105,
            height: 87
        }, {
            x: 594,
            y: 349,
            width: 83,
            height: 146
        }, {
            x: 673,
            y: 255,
            width: 93,
            height: 97
        }, {
            x: 754,
            y: 207,
            width: 177,
            height: 95
        }],
        [{
            x: 305,
            y: 542,
            width: 122,
            height: 64
        }, {
            x: 428,
            y: 512,
            width: 108,
            height: 78
        }, {
            x: 534,
            y: 455,
            width: 105,
            height: 87
        }, {
            x: 622,
            y: 319,
            width: 66,
            height: 146
        }, {
            x: 677,
            y: 241,
            width: 120,
            height: 78
        }, {
            x: 798,
            y: 193,
            width: 197,
            height: 95
        }],
        [{
            x: 332,
            y: 554,
            width: 154,
            height: 49
        }, {
            x: 486,
            y: 504,
            width: 84,
            height: 70
        }, {
            x: 570,
            y: 417,
            width: 84,
            height: 87
        }, {
            x: 651,
            y: 289,
            width: 82,
            height: 128
        }, {
            x: 716,
            y: 211,
            width: 120,
            height: 78
        }, {
            x: 836,
            y: 194,
            width: 217,
            height: 95
        }],
        [{
            x: 332,
            y: 554,
            width: 154,
            height: 49
        }, {
            x: 486,
            y: 504,
            width: 84,
            height: 70
        }, {
            x: 570,
            y: 417,
            width: 84,
            height: 87
        }, {
            x: 651,
            y: 289,
            width: 82,
            height: 128
        }, {
            x: 716,
            y: 211,
            width: 120,
            height: 78
        }, {
            x: 836,
            y: 194,
            width: 217,
            height: 95
        }],
        [{
            x: 387,
            y: 551,
            width: 109,
            height: 49
        }, {
            x: 496,
            y: 505,
            width: 70,
            height: 72
        }, {
            x: 566,
            y: 405,
            width: 69,
            height: 100
        }, {
            x: 643,
            y: 297,
            width: 70,
            height: 116
        }, {
            x: 713,
            y: 233,
            width: 110,
            height: 86
        }, {
            x: 823,
            y: 202,
            width: 289,
            height: 74
        }],
        [{
            x: 387,
            y: 551,
            width: 109,
            height: 49
        }, {
            x: 496,
            y: 505,
            width: 70,
            height: 72
        }, {
            x: 566,
            y: 405,
            width: 69,
            height: 100
        }, {
            x: 643,
            y: 297,
            width: 70,
            height: 116
        }, {
            x: 713,
            y: 233,
            width: 110,
            height: 86
        }, {
            x: 823,
            y: 202,
            width: 339,
            height: 95
        }],
        [{
            x: 387,
            y: 551,
            width: 109,
            height: 49
        }, {
            x: 496,
            y: 505,
            width: 70,
            height: 72
        }, {
            x: 566,
            y: 405,
            width: 69,
            height: 100
        }, {
            x: 643,
            y: 297,
            width: 70,
            height: 116
        }, {
            x: 713,
            y: 233,
            width: 110,
            height: 86
        }, {
            x: 823,
            y: 202,
            width: 339,
            height: 95
        }],
        [{
            x: 500,
            y: 494,
            width: 77,
            height: 51
        }, {
            x: 561,
            y: 422,
            width: 70,
            height: 72
        }, {
            x: 631,
            y: 322,
            width: 69,
            height: 100
        }, {
            x: 700,
            y: 247,
            width: 93,
            height: 116
        }, {
            x: 792,
            y: 211,
            width: 316,
            height: 86
        }, {
            x: 1107,
            y: 260,
            width: 149,
            height: 95
        }],
        [{
            x: 546,
            y: 468,
            width: 45,
            height: 41
        }, {
            x: 589,
            y: 388,
            width: 58,
            height: 80
        }, {
            x: 646,
            y: 297,
            width: 69,
            height: 100
        }, {
            x: 715,
            y: 233,
            width: 98,
            height: 85
        }, {
            x: 813,
            y: 214,
            width: 316,
            height: 84
        }, {
            x: 1129,
            y: 277,
            width: 158,
            height: 81
        }],
        [{
            x: 546,
            y: 468,
            width: 45,
            height: 41
        }, {
            x: 589,
            y: 388,
            width: 58,
            height: 80
        }, {
            x: 646,
            y: 297,
            width: 69,
            height: 100
        }, {
            x: 715,
            y: 233,
            width: 98,
            height: 85
        }, {
            x: 813,
            y: 214,
            width: 316,
            height: 84
        }, {
            x: 1129,
            y: 277,
            width: 158,
            height: 81
        }],
        [{
            x: 593,
            y: 388,
            width: 45,
            height: 69
        }, {
            x: 638,
            y: 314,
            width: 58,
            height: 80
        }, {
            x: 696,
            y: 254,
            width: 69,
            height: 70
        }, {
            x: 765,
            y: 220,
            width: 366,
            height: 85
        }, {
            x: 1131,
            y: 276,
            width: 122,
            height: 84
        }, {
            x: 1253,
            y: 347,
            width: 120,
            height: 81
        }],
        [{
            x: 637,
            y: 326,
            width: 45,
            height: 89
        }, {
            x: 684,
            y: 257,
            width: 72,
            height: 80
        }, {
            x: 756,
            y: 211,
            width: 209,
            height: 70
        }, {
            x: 965,
            y: 239,
            width: 208,
            height: 85
        }, {
            x: 1173,
            y: 314,
            width: 122,
            height: 84
        }, {
            x: 1295,
            y: 372,
            width: 128,
            height: 81
        }],
        [{
            x: 637,
            y: 326,
            width: 45,
            height: 89
        }, {
            x: 684,
            y: 257,
            width: 72,
            height: 80
        }, {
            x: 756,
            y: 211,
            width: 209,
            height: 70
        }, {
            x: 965,
            y: 239,
            width: 208,
            height: 85
        }, {
            x: 1173,
            y: 314,
            width: 122,
            height: 84
        }, {
            x: 1295,
            y: 372,
            width: 128,
            height: 81
        }],
        [{
            x: 672,
            y: 287,
            width: 51,
            height: 77
        }, {
            x: 721,
            y: 239,
            width: 92,
            height: 59
        }, {
            x: 811,
            y: 203,
            width: 317,
            height: 70
        }, {
            x: 1104,
            y: 264,
            width: 86,
            height: 67
        }, {
            x: 1190,
            y: 308,
            width: 122,
            height: 84
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 672,
            y: 287,
            width: 51,
            height: 48
        }, {
            x: 721,
            y: 239,
            width: 90,
            height: 48
        }, {
            x: 811,
            y: 203,
            width: 317,
            height: 70
        }, {
            x: 1104,
            y: 264,
            width: 86,
            height: 67
        }, {
            x: 1190,
            y: 308,
            width: 122,
            height: 84
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 672,
            y: 287,
            width: 51,
            height: 48
        }, {
            x: 721,
            y: 239,
            width: 90,
            height: 48
        }, {
            x: 811,
            y: 203,
            width: 317,
            height: 70
        }, {
            x: 1104,
            y: 264,
            width: 86,
            height: 67
        }, {
            x: 1190,
            y: 308,
            width: 122,
            height: 84
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 707,
            y: 275,
            width: 35,
            height: 33
        }, {
            x: 742,
            y: 226,
            width: 54,
            height: 62
        }, {
            x: 796,
            y: 205,
            width: 268,
            height: 70
        }, {
            x: 1064,
            y: 257,
            width: 112,
            height: 67
        }, {
            x: 1176,
            y: 322,
            width: 136,
            height: 66
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 707,
            y: 275,
            width: 35,
            height: 33
        }, {
            x: 742,
            y: 226,
            width: 54,
            height: 62
        }, {
            x: 796,
            y: 205,
            width: 268,
            height: 70
        }, {
            x: 1064,
            y: 257,
            width: 112,
            height: 67
        }, {
            x: 1176,
            y: 322,
            width: 136,
            height: 66
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 707,
            y: 275,
            width: 35,
            height: 33
        }, {
            x: 742,
            y: 226,
            width: 54,
            height: 62
        }, {
            x: 796,
            y: 205,
            width: 268,
            height: 70
        }, {
            x: 1064,
            y: 257,
            width: 112,
            height: 67
        }, {
            x: 1176,
            y: 322,
            width: 136,
            height: 66
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 772,
            y: 227,
            width: 42,
            height: 40
        }, {
            x: 813,
            y: 205,
            width: 313,
            height: 70
        }, {
            x: 1126,
            y: 257,
            width: 84,
            height: 85
        }, {
            x: 1209,
            y: 322,
            width: 103,
            height: 66
        }, {
            x: 1312,
            y: 364,
            width: 128,
            height: 81
        }],
        [{
            x: 807,
            y: 219,
            width: 78,
            height: 28
        }, {
            x: 884,
            y: 207,
            width: 186,
            height: 64
        }, {
            x: 1069,
            y: 208,
            width: 109,
            height: 123
        }, {
            x: 1164,
            y: 294,
            width: 108,
            height: 74
        }, {
            x: 1257,
            y: 344,
            width: 103,
            height: 89
        }, {
            x: 1360,
            y: 369,
            width: 80,
            height: 126
        }],
        [{
            x: 807,
            y: 219,
            width: 78,
            height: 28
        }, {
            x: 884,
            y: 207,
            width: 186,
            height: 64
        }, {
            x: 1069,
            y: 208,
            width: 109,
            height: 123
        }, {
            x: 1164,
            y: 294,
            width: 108,
            height: 74
        }, {
            x: 1257,
            y: 344,
            width: 103,
            height: 89
        }, {
            x: 1360,
            y: 369,
            width: 80,
            height: 126
        }],
        [{
            x: 821,
            y: 211,
            width: 130,
            height: 35
        }, {
            x: 951,
            y: 211,
            width: 136,
            height: 62
        }, {
            x: 1157,
            y: 292,
            width: 142,
            height: 124
        }, {
            x: 1241,
            y: 301,
            width: 51,
            height: 96
        }, {
            x: 1291,
            y: 343,
            width: 149,
            height: 108
        }],
        [{
            x: 888,
            y: 206,
            width: 111,
            height: 39
        }, {
            x: 989,
            y: 219,
            width: 115,
            height: 57
        }, {
            x: 1102,
            y: 257,
            width: 173,
            height: 56
        }, {
            x: 1244,
            y: 359,
            width: 134,
            height: 92
        }, {
            x: 1311,
            y: 372,
            width: 129,
            height: 84
        }],
        [{
            x: 888,
            y: 206,
            width: 111,
            height: 39
        }, {
            x: 989,
            y: 219,
            width: 115,
            height: 57
        }, {
            x: 1102,
            y: 257,
            width: 173,
            height: 56
        }, {
            x: 1244,
            y: 359,
            width: 134,
            height: 92
        }, {
            x: 1311,
            y: 372,
            width: 129,
            height: 84
        }],
        [{
            x: 853,
            y: 219,
            width: 100,
            height: 26
        }, {
            x: 952,
            y: 222,
            width: 109,
            height: 38
        }, {
            x: 1052,
            y: 248,
            width: 126,
            height: 61
        }, {
            x: 1164,
            y: 309,
            width: 177,
            height: 68
        }, {
            x: 1190,
            y: 373,
            width: 249,
            height: 80
        }],
        [{
            x: 936,
            y: 222,
            width: 100,
            height: 22
        }, {
            x: 1035,
            y: 229,
            width: 76,
            height: 46
        }, {
            x: 1109,
            y: 261,
            width: 83,
            height: 54
        }, {
            x: 1182,
            y: 304,
            width: 88,
            height: 62
        }, {
            x: 1253,
            y: 354,
            width: 187,
            height: 110
        }],
        [{
            x: 936,
            y: 222,
            width: 100,
            height: 22
        }, {
            x: 1035,
            y: 229,
            width: 76,
            height: 46
        }, {
            x: 1109,
            y: 261,
            width: 83,
            height: 54
        }, {
            x: 1182,
            y: 304,
            width: 88,
            height: 62
        }, {
            x: 1253,
            y: 354,
            width: 187,
            height: 110
        }],
        [{
            x: 1050,
            y: 244,
            width: 97,
            height: 36
        }, {
            x: 1140,
            y: 278,
            width: 68,
            height: 44
        }, {
            x: 1206,
            y: 316,
            width: 91,
            height: 71
        }, {
            x: 1297,
            y: 367,
            width: 143,
            height: 116
        }],
        [{
            x: 1085,
            y: 260,
            width: 95,
            height: 44
        }, {
            x: 1178,
            y: 298,
            width: 59,
            height: 48
        }, {
            x: 1236,
            y: 328,
            width: 98,
            height: 77
        }, {
            x: 1334,
            y: 370,
            width: 106,
            height: 108
        }],
        [{
            x: 1085,
            y: 260,
            width: 95,
            height: 44
        }, {
            x: 1178,
            y: 298,
            width: 59,
            height: 48
        }, {
            x: 1236,
            y: 328,
            width: 98,
            height: 77
        }, {
            x: 1334,
            y: 370,
            width: 106,
            height: 108
        }],
        [{
            x: 1180,
            y: 293,
            width: 86,
            height: 57
        }, {
            x: 1258,
            y: 348,
            width: 66,
            height: 49
        }, {
            x: 1323,
            y: 363,
            width: 117,
            height: 84
        }],
        [{
            x: 1250,
            y: 335,
            width: 84,
            height: 70
        }, {
            x: 1334,
            y: 352,
            width: 106,
            height: 88
        }],
        [{
            x: 1250,
            y: 335,
            width: 84,
            height: 70
        }, {
            x: 1334,
            y: 352,
            width: 106,
            height: 88
        }],
        [{
            x: 1257,
            y: 347,
            width: 69,
            height: 50
        }, {
            x: 1321,
            y: 386,
            width: 119,
            height: 56
        }],
        [{
            x: 1317,
            y: 382,
            width: 123,
            height: 46
        }],
        [{
            x: 1317,
            y: 382,
            width: 123,
            height: 46
        }],
        [{
            x: 1341,
            y: 395,
            width: 99,
            height: 25
        }],
        [{
            x: 1378,
            y: 387,
            width: 53,
            height: 22
        }],
        [{
            x: 1378,
            y: 387,
            width: 53,
            height: 22
        }]
    ];
    var f = [{
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, {
            x: 302,
            y: 0,
            width: 116,
            height: 75
        }, {
            x: 302,
            y: 0,
            width: 116,
            height: 75
        }, {
            x: 266,
            y: 0,
            width: 156,
            height: 103
        }, {
            x: 261,
            y: 0,
            width: 186,
            height: 160
        }, {
            x: 261,
            y: 0,
            width: 186,
            height: 160
        }, {
            x: 260,
            y: 0,
            width: 217,
            height: 207
        }, {
            x: 262,
            y: 0,
            width: 230,
            height: 258
        }, {
            x: 262,
            y: 0,
            width: 230,
            height: 258
        }, {
            x: 272,
            y: 0,
            width: 217,
            height: 302
        }, {
            x: 255,
            y: 0,
            width: 222,
            height: 355
        }, {
            x: 255,
            y: 0,
            width: 222,
            height: 355
        }, {
            x: 293,
            y: 0,
            width: 231,
            height: 384
        }, {
            x: 288,
            y: 0,
            width: 309,
            height: 404
        }, {
            x: 288,
            y: 0,
            width: 309,
            height: 404
        }, {
            x: 309,
            y: 0,
            width: 328,
            height: 419
        }, {
            x: 313,
            y: 0,
            width: 374,
            height: 417
        }, {
            x: 313,
            y: 0,
            width: 374,
            height: 417
        }, {
            x: 326,
            y: 0,
            width: 414,
            height: 421
        }, {
            x: 317,
            y: 0,
            width: 460,
            height: 423
        }, {
            x: 317,
            y: 0,
            width: 460,
            height: 423
        }, {
            x: 303,
            y: 0,
            width: 520,
            height: 424
        }, {
            x: 302,
            y: 0,
            width: 553,
            height: 435
        }, {
            x: 302,
            y: 0,
            width: 553,
            height: 435
        }, {
            x: 303,
            y: 0,
            width: 588,
            height: 445
        }, {
            x: 295,
            y: 0,
            width: 610,
            height: 465
        }, {
            x: 295,
            y: 0,
            width: 610,
            height: 465
        }, {
            x: 291,
            y: 0,
            width: 643,
            height: 481
        }, {
            x: 313,
            y: 0,
            width: 643,
            height: 508
        }, {
            x: 313,
            y: 0,
            width: 643,
            height: 508
        }, {
            x: 340,
            y: 0,
            width: 648,
            height: 542
        }, {
            x: 342,
            y: 0,
            width: 665,
            height: 582
        }, {
            x: 342,
            y: 0,
            width: 665,
            height: 582
        }, {
            x: 355,
            y: 0,
            width: 674,
            height: 624
        }, {
            x: 370,
            y: 43,
            width: 690,
            height: 629
        }, {
            x: 370,
            y: 43,
            width: 690,
            height: 629
        }, {
            x: 372,
            y: 90,
            width: 716,
            height: 634
        }, {
            x: 388,
            y: 141,
            width: 730,
            height: 650
        }, {
            x: 388,
            y: 141,
            width: 730,
            height: 650
        }, {
            x: 396,
            y: 173,
            width: 736,
            height: 637
        }, {
            x: 423,
            y: 206,
            width: 722,
            height: 603
        }, {
            x: 423,
            y: 206,
            width: 722,
            height: 603
        }, {
            x: 451,
            y: 230,
            width: 686,
            height: 579
        }, {
            x: 489,
            y: 253,
            width: 636,
            height: 557
        }, {
            x: 489,
            y: 253,
            width: 636,
            height: 557
        }, {
            x: 528,
            y: 264,
            width: 553,
            height: 546
        }, {
            x: 569,
            y: 286,
            width: 530,
            height: 524
        }, {
            x: 569,
            y: 286,
            width: 530,
            height: 524
        }, {
            x: 611,
            y: 297,
            width: 499,
            height: 513
        }, {
            x: 643,
            y: 306,
            width: 465,
            height: 504
        }, {
            x: 643,
            y: 306,
            width: 465,
            height: 504
        }, {
            x: 687,
            y: 317,
            width: 420,
            height: 493
        }, {
            x: 720,
            y: 324,
            width: 369,
            height: 486
        }, {
            x: 720,
            y: 324,
            width: 369,
            height: 486
        }, {
            x: 754,
            y: 336,
            width: 344,
            height: 474
        }, {
            x: 786,
            y: 352,
            width: 321,
            height: 458
        }, {
            x: 786,
            y: 352,
            width: 321,
            height: 458
        }, {
            x: 820,
            y: 376,
            width: 294,
            height: 434
        }, {
            x: 844,
            y: 394,
            width: 272,
            height: 416
        }, {
            x: 844,
            y: 394,
            width: 272,
            height: 416
        }, {
            x: 866,
            y: 424,
            width: 214,
            height: 386
        }, {
            x: 891,
            y: 447,
            width: 176,
            height: 363
        }, {
            x: 891,
            y: 447,
            width: 176,
            height: 363
        }, {
            x: 929,
            y: 490,
            width: 136,
            height: 360
        }, {
            x: 948,
            y: 534,
            width: 115,
            height: 276
        }, {
            x: 948,
            y: 534,
            width: 115,
            height: 276
        }, {
            x: 972,
            y: 578,
            width: 93,
            height: 232
        }, {
            x: 980,
            y: 643,
            width: 91,
            height: 167
        }, {
            x: 980,
            y: 643,
            width: 91,
            height: 167
        }, {
            x: 984,
            y: 687,
            width: 92,
            height: 123
        }, {
            x: 994,
            y: 761,
            width: 84,
            height: 49
        }, {
            x: 994,
            y: 761,
            width: 84,
            height: 49
        }],
        p = [{
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, {
            x: 0,
            y: 490,
            width: 66,
            height: 120
        }, {
            x: 0,
            y: 490,
            width: 66,
            height: 120
        }, {
            x: 0,
            y: 462,
            width: 125,
            height: 192
        }, {
            x: 0,
            y: 438,
            width: 181,
            height: 211
        }, {
            x: 0,
            y: 438,
            width: 181,
            height: 211
        }, {
            x: 0,
            y: 389,
            width: 240,
            height: 249
        }, {
            x: 0,
            y: 386,
            width: 294,
            height: 274
        }, {
            x: 0,
            y: 386,
            width: 294,
            height: 274
        }, {
            x: 0,
            y: 386,
            width: 347,
            height: 258
        }, {
            x: 0,
            y: 409,
            width: 395,
            height: 232
        }, {
            x: 0,
            y: 409,
            width: 395,
            height: 232
        }, {
            x: 0,
            y: 424,
            width: 449,
            height: 239
        }, {
            x: 0,
            y: 434,
            width: 511,
            height: 250
        }, {
            x: 0,
            y: 434,
            width: 511,
            height: 250
        }, {
            x: 0,
            y: 459,
            width: 571,
            height: 228
        }, {
            x: 0,
            y: 465,
            width: 622,
            height: 203
        }, {
            x: 0,
            y: 465,
            width: 622,
            height: 203
        }, {
            x: 0,
            y: 449,
            width: 669,
            height: 223
        }, {
            x: 0,
            y: 405,
            width: 702,
            height: 275
        }, {
            x: 0,
            y: 405,
            width: 702,
            height: 275
        }, {
            x: 0,
            y: 341,
            width: 738,
            height: 334
        }, {
            x: 0,
            y: 300,
            width: 763,
            height: 362
        }, {
            x: 0,
            y: 300,
            width: 763,
            height: 362
        }, {
            x: 0,
            y: 268,
            width: 796,
            height: 364
        }, {
            x: 0,
            y: 238,
            width: 818,
            height: 400
        }, {
            x: 0,
            y: 238,
            width: 818,
            height: 400
        }, {
            x: 0,
            y: 208,
            width: 847,
            height: 451
        }, {
            x: 0,
            y: 171,
            width: 887,
            height: 532
        }, {
            x: 0,
            y: 171,
            width: 887,
            height: 532
        }, {
            x: 60,
            y: 143,
            width: 862,
            height: 564
        }, {
            x: 124,
            y: 120,
            width: 848,
            height: 543
        }, {
            x: 124,
            y: 120,
            width: 848,
            height: 543
        }, {
            x: 192,
            y: 102,
            width: 840,
            height: 521
        }, {
            x: 253,
            y: 91,
            width: 843,
            height: 529
        }, {
            x: 253,
            y: 91,
            width: 843,
            height: 529
        }, {
            x: 311,
            y: 89,
            width: 859,
            height: 523
        }, {
            x: 357,
            y: 108,
            width: 877,
            height: 506
        }, {
            x: 357,
            y: 108,
            width: 877,
            height: 506
        }, {
            x: 403,
            y: 133,
            width: 891,
            height: 480
        }, {
            x: 450,
            y: 156,
            width: 916,
            height: 436
        }, {
            x: 450,
            y: 156,
            width: 916,
            height: 436
        }, {
            x: 487,
            y: 151,
            width: 941,
            height: 407
        }, {
            x: 527,
            y: 151,
            width: 913,
            height: 375
        }, {
            x: 527,
            y: 151,
            width: 913,
            height: 375
        }, {
            x: 567,
            y: 153,
            width: 873,
            height: 349
        }, {
            x: 602,
            y: 155,
            width: 838,
            height: 360
        }, {
            x: 602,
            y: 155,
            width: 838,
            height: 360
        }, {
            x: 635,
            y: 148,
            width: 805,
            height: 312
        }, {
            x: 664,
            y: 154,
            width: 776,
            height: 308
        }, {
            x: 664,
            y: 154,
            width: 776,
            height: 308
        }, {
            x: 693,
            y: 168,
            width: 747,
            height: 320
        }, {
            x: 724,
            y: 183,
            width: 716,
            height: 332
        }, {
            x: 724,
            y: 183,
            width: 716,
            height: 332
        }, {
            x: 762,
            y: 198,
            width: 678,
            height: 265
        }, {
            x: 797,
            y: 206,
            width: 643,
            height: 257
        }, {
            x: 797,
            y: 206,
            width: 643,
            height: 257
        }, {
            x: 833,
            y: 211,
            width: 607,
            height: 255
        }, {
            x: 890,
            y: 214,
            width: 550,
            height: 274
        }, {
            x: 890,
            y: 214,
            width: 550,
            height: 274
        }, {
            x: 973,
            y: 223,
            width: 467,
            height: 308
        }, {
            x: 1043,
            y: 238,
            width: 406,
            height: 282
        }, {
            x: 1043,
            y: 238,
            width: 406,
            height: 282
        }, {
            x: 1101,
            y: 257,
            width: 339,
            height: 199
        }, {
            x: 1171,
            y: 285,
            width: 269,
            height: 170
        }, {
            x: 1171,
            y: 285,
            width: 269,
            height: 170
        }, {
            x: 1239,
            y: 290,
            width: 201,
            height: 166
        }, {
            x: 1301,
            y: 349,
            width: 139,
            height: 89
        }, {
            x: 1301,
            y: 349,
            width: 139,
            height: 89
        }, {
            x: 1339,
            y: 364,
            width: 101,
            height: 89
        }, {
            x: 1368,
            y: 357,
            width: 72,
            height: 79
        }, {
            x: 1368,
            y: 357,
            width: 72,
            height: 79
        }],
        y = [{
            x: -1,
            y: -1
        }, {
            x: 123.66666666666667,
            y: 12
        }, {
            x: 247.33333333333334,
            y: 24
        }, {
            x: 371,
            y: 36
        }, {
            x: 372.6666666666667,
            y: 53
        }, {
            x: 374.3333333333333,
            y: 70
        }, {
            x: 376,
            y: 87
        }, {
            x: 379.3333333333333,
            y: 104
        }, {
            x: 382.6666666666667,
            y: 121
        }, {
            x: 386,
            y: 138
        }, {
            x: 391,
            y: 156.66666666666666
        }, {
            x: 396,
            y: 175.33333333333334
        }, {
            x: 401,
            y: 194
        }, {
            x: 408.3333333333333,
            y: 212.66666666666666
        }, {
            x: 415.6666666666667,
            y: 231.33333333333334
        }, {
            x: 423,
            y: 250
        }, {
            x: 438,
            y: 266
        }, {
            x: 453,
            y: 282
        }, {
            x: 468,
            y: 298
        }, {
            x: 486.3333333333333,
            y: 308
        }, {
            x: 504.6666666666667,
            y: 318
        }, {
            x: 523,
            y: 328
        }, {
            x: 541,
            y: 333
        }, {
            x: 559,
            y: 338
        }, {
            x: 577,
            y: 343
        }, {
            x: 596.6666666666666,
            y: 344.3333333333333
        }, {
            x: 616.3333333333334,
            y: 345.6666666666667
        }, {
            x: 636,
            y: 347
        }, {
            x: 655.6666666666666,
            y: 349.3333333333333
        }, {
            x: 675.3333333333334,
            y: 351.6666666666667
        }, {
            x: 695,
            y: 354
        }, {
            x: 714,
            y: 358.3333333333333
        }, {
            x: 733,
            y: 362.6666666666667
        }, {
            x: 752,
            y: 367
        }, {
            x: 770,
            y: 370.3333333333333
        }, {
            x: 788,
            y: 373.6666666666667
        }, {
            x: 806,
            y: 377
        }, {
            x: 821.6666666666666,
            y: 386.3333333333333
        }, {
            x: 837.3333333333334,
            y: 395.6666666666667
        }, {
            x: 853,
            y: 405
        }, {
            x: 869,
            y: 416
        }, {
            x: 885,
            y: 427
        }, {
            x: 901,
            y: 438
        }, {
            x: 915.3333333333334,
            y: 450.3333333333333
        }, {
            x: 929.6666666666666,
            y: 462.6666666666667
        }, {
            x: 944,
            y: 475
        }, {
            x: 956.6666666666666,
            y: 487
        }, {
            x: 969.3333333333334,
            y: 499
        }, {
            x: 982,
            y: 511
        }, {
            x: 986,
            y: 522
        }, {
            x: 990,
            y: 533
        }, {
            x: 994,
            y: 544
        }, {
            x: 996.3333333333334,
            y: 554.6666666666666
        }, {
            x: 998.6666666666666,
            y: 565.3333333333334
        }, {
            x: 1001,
            y: 576
        }, {
            x: 1004,
            y: 587
        }, {
            x: 1007,
            y: 598
        }, {
            x: 1010,
            y: 609
        }, {
            x: 1012.6666666666666,
            y: 625
        }, {
            x: 1015.3333333333334,
            y: 641
        }, {
            x: 1018,
            y: 657
        }, {
            x: 1019.3333333333334,
            y: 670.3333333333334
        }, {
            x: 1020.6666666666666,
            y: 683.6666666666666
        }, {
            x: 1022,
            y: 697
        }, {
            x: 1023,
            y: 709.6666666666666
        }, {
            x: 1024,
            y: 722.3333333333334
        }, {
            x: 1025,
            y: 735
        }, {
            x: 1027.6666666666667,
            y: 747.6666666666666
        }, {
            x: 1030.3333333333333,
            y: 760.3333333333334
        }, {
            x: 1033,
            y: 773
        }, {
            x: 1033,
            y: 773
        }, {
            x: 1033,
            y: 811
        }],
        g = [{
            x: -1,
            y: -1
        }, {
            x: 13.666666666666666,
            y: 180.66666666666666
        }, {
            x: 27.333333333333332,
            y: 361.3333333333333
        }, {
            x: 41,
            y: 542
        }, {
            x: 57,
            y: 533.6666666666666
        }, {
            x: 73,
            y: 525.3333333333334
        }, {
            x: 89,
            y: 517
        }, {
            x: 107.66666666666667,
            y: 519.6666666666666
        }, {
            x: 126.33333333333334,
            y: 522.3333333333334
        }, {
            x: 145,
            y: 525
        }, {
            x: 168.33333333333334,
            y: 529.3333333333334
        }, {
            x: 191.66666666666666,
            y: 533.6666666666666
        }, {
            x: 215,
            y: 538
        }, {
            x: 236.66666666666666,
            y: 546
        }, {
            x: 258.3333333333333,
            y: 554
        }, {
            x: 280,
            y: 562
        }, {
            x: 304.6666666666667,
            y: 569.6666666666666
        }, {
            x: 329.3333333333333,
            y: 577.3333333333334
        }, {
            x: 354,
            y: 585
        }, {
            x: 376,
            y: 587
        }, {
            x: 398,
            y: 589
        }, {
            x: 420,
            y: 591
        }, {
            x: 447.6666666666667,
            y: 578.3333333333334
        }, {
            x: 475.3333333333333,
            y: 565.6666666666666
        }, {
            x: 503,
            y: 553
        }, {
            x: 525.3333333333334,
            y: 531
        }, {
            x: 547.6666666666666,
            y: 509
        }, {
            x: 570,
            y: 487
        }, {
            x: 586,
            y: 468
        }, {
            x: 602,
            y: 449
        }, {
            x: 618,
            y: 430
        }, {
            x: 634.6666666666666,
            y: 414
        }, {
            x: 651.3333333333334,
            y: 398
        }, {
            x: 668,
            y: 382
        }, {
            x: 690.3333333333334,
            y: 356.3333333333333
        }, {
            x: 712.6666666666666,
            y: 330.6666666666667
        }, {
            x: 735,
            y: 305
        }, {
            x: 763.6666666666666,
            y: 283.3333333333333
        }, {
            x: 792.3333333333334,
            y: 261.6666666666667
        }, {
            x: 821,
            y: 240
        }, {
            x: 851,
            y: 236.33333333333334
        }, {
            x: 881,
            y: 232.66666666666666
        }, {
            x: 911,
            y: 229
        }, {
            x: 939,
            y: 234.66666666666666
        }, {
            x: 967,
            y: 240.33333333333334
        }, {
            x: 995,
            y: 246
        }, {
            x: 1019.6666666666666,
            y: 254.66666666666666
        }, {
            x: 1044.3333333333333,
            y: 263.3333333333333
        }, {
            x: 1069,
            y: 272
        }, {
            x: 1092.6666666666667,
            y: 285
        }, {
            x: 1116.3333333333333,
            y: 298
        }, {
            x: 1140,
            y: 311
        }, {
            x: 1160.3333333333333,
            y: 317.3333333333333
        }, {
            x: 1180.6666666666667,
            y: 323.6666666666667
        }, {
            x: 1201,
            y: 330
        }, {
            x: 1218.3333333333333,
            y: 336
        }, {
            x: 1235.6666666666667,
            y: 342
        }, {
            x: 1253,
            y: 348
        }, {
            x: 1265,
            y: 355.3333333333333
        }, {
            x: 1277,
            y: 362.6666666666667
        }, {
            x: 1289,
            y: 370
        }, {
            x: 1295.3333333333333,
            y: 374
        }, {
            x: 1301.6666666666667,
            y: 378
        }, {
            x: 1308,
            y: 382
        }, {
            x: 1322,
            y: 390
        }, {
            x: 1336,
            y: 398
        }, {
            x: 1350,
            y: 406
        }, {
            x: 1363.3333333333333,
            y: 409.6666666666667
        }, {
            x: 1376.6666666666667,
            y: 413.3333333333333
        }, {
            x: 1390,
            y: 417
        }, {
            x: 1390,
            y: 417
        }, {
            x: 1441,
            y: 409
        }],
        m = 24,
        w = 3,
        x = 5,
        v = 1.02
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(1),
        s = i(3),
        r = i(9),
        h = i(346),
        l = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.btnItems = [], i.panelWidth = 110, i.enable = !0, i.isMenuOn = !1, i.callbackHistory = e.onHistory, i.callbackPaytable = e.onPaytable, i.callbackHome = e.onHome, i.initBack(0, 0), i.showMask(!1), i.container = new PIXI.Container, i.addChild(i.container), i.initMenuType(), i.initPanel(), i.initButton(), i.initIcon(), i.createHitArea(), i.container.position = {
                    x: a.default.width + i.panelWidth,
                    y: a.default.height / 2
                }, i
            }
            return o(e, t), e.prototype.initBack = function(e, i) {
                var n = this;
                void 0 === e && (e = 0), void 0 === i && (i = .8), t.prototype.initBack.call(this, e, i), this.back.on("pointerdown", function() {
                    n.isMenuOn && n.onMenuSwitch()
                })
            }, e.prototype.showMask = function(t) {
                this.back.interactive = t, this.back.renderable = t
            }, e.prototype.initMenuType = function() {
                this.callbackHistory ? this.type = "lobby" : (this.type = "game", this.exitTipLayer = new h.default)
            }, e.prototype.initPanel = function() {
                var t = PIXI.Sprite.fromFrame("menu_bg.png");
                t.anchor.set(1, .5), this.container.addChild(t), this.panel = t
            }, e.prototype.initButton = function() {
                var t = this,
                    e = PIXI.Sprite.fromFrame("game_setting.png");
                e.anchor.set(.5), e.name = "arrow", e.x = -(this.panel.width - this.panelWidth) / 2 - this.panelWidth + 5, e.y = 2, this.container.addChild(e), this.btnArrow = e, e.interactive = !0, e.buttonMode = !0, e.on("pointerdown", function() {
                    return t.onMenuSwitch()
                })
            }, e.prototype.initIcon = function() {
                var t = this,
                    e = ["menu_paytable", "menu_sound", "menu_exit"],
                    i = 0;
                e.forEach(function(n, o) {
                    var a = PIXI.Sprite.fromFrame(n + ".png");
                    a.name = n, a.anchor.set(.5), t.panel.addChild(a), a.interactive = !0, a.buttonMode = !0, a.on("pointerdown", function(e) {
                        return t.onClick(a, e)
                    }), t.btnItems.push(a);
                    var s = (t.panel.height - 20) / e.length / 2;
                    a.x = -t.panelWidth / 2 + 5, o > 0 ? a.y = i + 2 * s * o : (i = (e.length - 1) * s * -1, a.y = i), "menu_sound" == n && t.setSoundBtnTexture(a)
                })
            }, e.prototype.createHitArea = function() {
                this.panel.hitArea = new PIXI.Polygon([0, -198, -92, -198, -107, -176, -107, -72, -143, -72, -164, -63, -199, -13, -199, 13, -164, 63, -143, 72, -107, 72, -107, 176, -92, 198, 0, 198]), this.panel.interactive = !0
            }, e.prototype.onClick = function(t, e) {
                switch (this.playClickAni(t), t.name) {
                    case "menu_history":
                        return this.callbackHistory();
                    case "menu_paytable":
                        return this.callbackPaytable(e);
                    case "menu_sound":
                        return this.onSwitchSound(t);
                    case "menu_exit":
                        return this.enable ? this.callbackHome() : this.exitTipLayer.show()
                }
            }, e.prototype.playClickAni = function(t) {
                (new s.TimelineLite).to(t.scale, .15, {
                    x: .9,
                    y: .9
                }).to(t.scale, .15, {
                    x: 1,
                    y: 1
                }), r.default.playBtnClick()
            }, e.prototype.onSwitchSound = function(t) {
                r.default.switchBack && r.default.switchEffect ? t.texture = PIXI.Texture.fromFrame("menu_sound_close.png") : t.texture = PIXI.Texture.fromFrame("menu_sound.png"), r.default.switchSound()
            }, e.prototype.setSoundBtnTexture = function(t) {
                r.default.switchBack && r.default.switchEffect ? t.texture = PIXI.Texture.fromFrame("menu_sound.png") : t.texture = PIXI.Texture.fromFrame("menu_sound_close.png")
            }, e.prototype.onMenuSwitch = function() {
                var t = this,
                    e = a.default.width + this.panelWidth;
                s.TweenLite.to(this.container, .5, {
                    x: this.isMenuOn ? e : e - this.panelWidth,
                    onStart: function() {
                        t.isMenuOn = !t.isMenuOn, t.active = !1, t.btnArrow.texture = PIXI.Texture.fromFrame(t.isMenuOn ? "menu_arrow_in.png" : "game_setting.png"), t.showMask(t.isMenuOn)
                    },
                    onComplete: function() {
                        return t.active = !0
                    }
                }), r.default.playBtnClick()
            }, e.prototype.setEnable = function(t) {
                this.enable = t
            }, Object.defineProperty(e.prototype, "active", {
                set: function(t) {
                    this.btnArrow.interactive = t, this.btnItems.forEach(function(e) {
                        return e.interactive = t
                    })
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(i(49).default);
    e.Menu = l
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(19),
        o = i(0),
        a = i(1),
        s = i(348),
        r = i(9),
        h = i(2),
        l = i(349),
        c = function() {
            function t() {
                this.isFirst = !0
            }
            return t.prototype.initDom = function() {
                var t = '\n        <div class="paytable ' + o.default.locale.lan.toLowerCase() + '">\n          <div class="paytable_main">\n                <span class="close_btn event">\n                    <i class="paytable_common close"></i>\n                </span>\n                <div class="topMenu">\n                    <div class="li active">\n                        <span class="paytable_common paytable_titlebg"></span>\n                        <span class="paytable_common paytable_titlebg_on"></span>\n                        <i>' + h.default.upperStrByLan(this.data.title.normal) + '</i>\n                     </div>\n                    <div class="li"> \n                        <span class="paytable_common paytable_titlebg"></span>\n                        <span class="paytable_common paytable_titlebg_on"></span>\n                        <i>' + h.default.upperStrByLan(this.data.title.special) + '</i>\n                     </div>\n                    <div class="li"> \n                        <span class="paytable_common paytable_titlebg"></span>\n                        <span class="paytable_common paytable_titlebg_on"></span>\n                        <i>' + h.default.upperStrByLan(this.data.title.tutorial) + '</i>\n                     </div>\n                </div>\n                <div class="togMain paytable_common paytable_bg">\n                    <div class="togmain-scroll">\n                        <div class="scroll-main">\n                            <div class="fish-main fish-normal">\n                                <div class="paytable_common fish_paytable"></div>\n                            </div>\n                            <div class="fish-main fish-special none">\n                                <ul>\n                                ' + this.getSpecialFishDom() + '\n                                </ul>\n                            </div>\n                            <div class="fish-main fish-tutorial none">\n                                <div class="paytable_lan"></div>\n                            ' + this.getTutorialFishDom() + "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n          </div>\n        </div>\n        ";
                this.me = n(t), n("body").append(this.me)
            }, t.prototype.getSpecialFishDom = function() {
                var t = "";
                return this.data.special.forEach(function(e, i) {
                    t += '\n            <li>\n                <div class="bg paytable_common paytable_special_bg"></div>\n                <div class="info">\n                    <div class="fish"><div class="paytable_common special_fish_0' + (i - 0 + 1) + '"></div></div>\n                    <div class="text">\n                        <h3>' + e.title + "</h3>\n                        <p>" + h.default.upperStrByLan(e.content) + "</p>\n                    </div>\n                </div>\n            </li>\n        "
                }), t
            }, t.prototype.getTutorialFishDom = function() {
                var t = "<ul>";
                return this.data.tutorial.forEach(function(e, i) {
                    t += '\n            <li>\n                <div class="bg paytable_common paytable_tutorial_bg"></div>\n                <div class="info">\n                    <div class="tutorial">\n                        <div class="paytable_common tutorial_0' + (i - 0 + 1) + '"></div>\n                        <h3>' + h.default.upperStrByLan(e.title) + '</h3>\n                    </div>\n                    <div class="text">\n                        <p>' + h.default.upperStrByLan(e.content) + "</p>\n                    </div>\n                </div>\n            </li>\n        "
                }), t += "</ul>"
            }, t.prototype.getUI = function() {
                this.paytableCloseBtn = this.me.find(".close_btn"), this.topMenu = this.me.find(".topMenu"), this.topMenuLi = this.topMenu.find(".li"), this.paytableMain = this.me.find(".paytable_main"), this.togMainScroll = this.me.find(".togmain-scroll"), this.fishList = this.me.find(".fish-main")
            }, t.prototype.bindEvent = function() {
                var t = this,
                    e = this;
                window.addEventListener("resize", function() {
                    return t.onResizeWindow()
                }), this.paytableCloseBtn.on("click", function() {
                    t.hide(), r.default.playBtnClick()
                }), this.topMenuLi.on("click", function() {
                    if (!n(this).hasClass("active")) {
                        var t = n(this).index();
                        e.topMenuLi.removeClass("active").eq(t).addClass("active"), e.fishList.addClass("none").eq(t).removeClass("none"), e.checkScollVisible(), e.scroll.refresh(), e.scroll.scrollTo(0, 0, 0), r.default.playBtnClick()
                    }
                }), this.bindScroll()
            }, t.prototype.bindScroll = function() {
                this.scroll = new l(this.togMainScroll.get(0), {
                    mouseWheel: !0,
                    scrollbars: !0,
                    useTransform: !1,
                    moveScale: .8 / this.computedScale()
                })
            }, t.prototype.computedScale = function() {
                return document.documentElement.clientWidth / a.default.width < document.documentElement.clientHeight / a.default.height ? document.documentElement.clientWidth / a.default.width : document.documentElement.clientHeight / a.default.height
            }, t.prototype.onResizeWindow = function() {
                var t = this.computedScale();
                this.me.css({
                    "-webkit-transform": " scale(" + t + ")",
                    "-ms-transform": " scale(" + t + ")",
                    transform: " scale(" + t + ")"
                }), this.scroll.refreshMoveScale(.8 / this.computedScale())
            }, t.prototype.show = function() {
                this.isFirst && (this.resetIScrollBaseEvent(), this.data = s.default[o.default.locale.lan.toLowerCase()], this.addCssImageVersion([{
                    className: ".paytable .paytable_lan",
                    url: o.default.resources.paytable_lan.url
                }, {
                    className: ".paytable .paytable_common",
                    url: o.default.resources.paytable_common.url
                }]), this.initDom(), this.getUI(), this.bindEvent(), this.onResizeWindow(), this.checkScollVisible()), this.isFirst = !1, this.me.show(), this.scroll.refresh()
            }, t.prototype.resetIScrollBaseEvent = function() {}, t.prototype.checkScollVisible = function() {
                this.topMenuLi.eq(0).hasClass("active") ? this.paytableMain.addClass("no-bar") : this.paytableMain.removeClass("no-bar")
            }, t.prototype.hide = function() {
                this.me.hide()
            }, t.prototype.addCssImageVersion = function(t) {
                t.forEach(function(t) {
                    var e = t.className + "{background-image:url(" + t.url + ")}";
                    document.body.appendChild(document.createElement("style")).innerHTML += e
                })
            }, t
        }();
    e.default = c
}, , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n = this && this.__assign || Object.assign || function(t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7),
        a = i(19),
        s = i(0),
        r = i(3),
        h = i(1),
        l = i(271),
        c = i(17);
    i(365), i(391);
    var u = {
            width: h.default.width,
            height: h.default.height
        },
        d = c.default.isMobile() ? n({}, u, {
            resolution: window.devicePixelRatio || 1,
            autoResize: !0
        }) : u;
    o.utils.skipHello(), r.TweenMax.lagSmoothing(0, null), r.TweenLite.lagSmoothing(0, null);
    var f = new o.Application(d);
    s.default.app = f, a("body").append(f.view), s.default.params = window.config, (new l.default).addToStage();
    var p = document.createEvent("HTMLEvents");
    p.initEvent("myResize", !1, !1), document.dispatchEvent(p)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(19),
        s = i(72),
        r = i(272),
        h = i(306),
        l = i(48),
        c = i(0),
        u = i(142),
        d = i(363),
        f = i(73),
        p = i(32),
        y = i(1),
        g = i(9),
        m = i(143),
        w = i(17),
        x = i(2),
        v = i(364),
        _ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.name = "loading", e.initLocale(), e.initConfig(), e.ignoreIE10Tint(), e
            }
            return o(e, t), e.prototype.initLocale = function() {
                console.log(c)
                var t = c.default.params.language;
                c.default.locale = new p.Locale(t)
            }, e.prototype.initConfig = function() {
                var t = window,
                    e = document.querySelector("base") && document.querySelector("base").getAttribute("host") ? document.querySelector("base").getAttribute("host") : t.location.origin;
                y.default.init(t.config), y.default.historyUrl = e, delete t.config, this.loadJson()
            }, e.prototype.loadJson = function() {
                var t = this,
                    e = c.default.locale.lan,
                    i = PIXI.loader;
                i.defaultQueryString = y.default.uid, i.add("locale", "./json/" + e + ".json"), i.load(function(e, i) {
                    c.default.locale.initMap(i.locale.data), t.loadFont()
                })
            }, e.prototype.loadFont = function() {
                v.load({
                    custom: {
                        families: ["roboto", "roboto-bold", "roboto-medium", "roboto-light", "fztjlsjw", "fyrkt"]
                    },
                    active: this.loadCss.bind(this),
                    inactive: this.loadCss.bind(this)
                })
            }, e.prototype.loadCss = function() {
                y.default.cssList.forEach(function(t) {
                    t = t.replace("[lan]", c.default.locale.lan.toLocaleLowerCase()), t = y.default.uid ? "./style/" + t + "?" + y.default.uid : "./style/" + t, a("head").append('<link rel="stylesheet" href="' + t + '">')
                }), this.loadResources();
                var t = document.createEvent("HTMLEvents");
                t.initEvent("mytips", !1, !1), t.txtIntroTips = c.default.locale.getString("TXT_INTRO_TIPS"), document.dispatchEvent(t)
            }, e.prototype.loadResources = function() {
                var t = this,
                    e = PIXI.loader,
                    i = c.default.locale.lan.toLowerCase();
                for (var n in f.resource) {
                    var o = f.resource[n];
                    e.add(n, o)
                }
                e.pre(function(t, e) {
                    t.url = t.url.replace(/\[lan\]/gi, i), e()
                }), e.on("progress", function(t) {
                    var e = document.createEvent("HTMLEvents");
                    e.initEvent("myprogress", !1, !1), document.dispatchEvent(e)
                }).load(function(e, i) {
                    c.default.resources = i, t.loadSounds(), t.initService(), t.login()
                })
            }, e.prototype.loadSounds = function() {
                m.default.queryString = y.default.uid, g.default.init()
            }, e.prototype.addHomeScene = function() {
                this.homeScene = new u.default, this.homeScene.addToStage();
                var t = document.createEvent("HTMLEvents");
                t.initEvent("mycompete", !1, !1), document.dispatchEvent(t)
            }, e.prototype.initService = function() {
                var t = new h.ServiceFish(y.default.service);
                t.onErrorHandle = function(t, e) {
                    "game" == c.default.scene.name && c.default.scene.switchHomeScene(), l.default.showError(t, !1, e)
                }, t.onOpenHandle = function() {
                    l.default.hide()
                }, c.default.service = t
            }, e.prototype.login = function() {
                var t = this,
                    e = new d.RequestLogin;
                e.acctId = c.default.params.acctId || "", e.passwd = "000000", e.device = w.default.getOSName() + "-" + w.default.getBrowserInfo(), e.sessionId = c.default.params.sid, e.token = c.default.params.token;
                var i = c.default.params.channel,
                    n = c.default.params.type,
                    o = ["mobile", "web", "pc", "App-a", "App-i"];
                n = -1 == o.indexOf(n) ? "mobile" : n, e.channel = i && o.indexOf(i) > -1 ? i : n, c.default.service.login(e, function(e) {
                    e.acct.balance = x.default.ignoreAmountDecimal(e.acct.balance), c.default.lobbyUrl = e.lobbyUrl, c.default.acct = e.acct, c.default.backHome = e.params && e.params.backHome, t.acctLeft(), t.getServerTime(), t.bindUpdate()
                })
            }, e.prototype.acctLeft = function() {
                var t = this;
                c.default.service.acctLeft(function(e) {
                    var i = e.acctInfo.balance;
                    c.default.acct.balance = x.default.ignoreAmountDecimal(i), t.getRoomInfo()
                })
            }, e.prototype.getRoomInfo = function() {
                var t = this,
                    e = new r.RequestRoomInfo;
                c.default.service.getRoomInfo(e, function(e) {
                    c.default.roomInfos = e.roomInfos, c.default.isSkip = e.skip, t.addHomeScene()
                })
            }, e.prototype.getServerTime = function() {
                var t = Date.now();
                c.default.service.getServerTime(function(e) {
                    var i = Date.now(),
                        n = (i - t) / 2 + parseFloat(e.timeMillis);
                    c.default.serverTimeDiff = n - i, c.default.serverTimeZone = e.timeZone
                })
            }, e.prototype.bindUpdate = function() {
                c.default.service.bindUpdate(function(t) {
                    c.default.acct.balance += t.acct.balance
                }), c.default.service.bindBalanceUpdate(function(t) {
                    c.default.acct.balance = t.acct.balance
                })
            }, e.prototype.ignoreIE10Tint = function() {
                w.default.isIE10() && (PIXI.CanvasTinter.tintWithPerPixel = function(t, e, i) {
                    var n = i.getContext("2d"),
                        o = t._frame.clone(),
                        a = t.baseTexture.resolution;
                    o.x *= a, o.y *= a, o.width *= a, o.height *= a, i.width = Math.ceil(o.width), i.height = Math.ceil(o.height), n.save(), n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height), n.restore()
                }, PIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.tintWithPerPixel)
            }, e
        }(s.default);
    e.default = _
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestRoomInfo = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseRoomInfo = h
}, function(t, e, i) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t) {
            t[t.TIMEOUT = -2] = "TIMEOUT", t[t.SOCKET_ERR = -1] = "SOCKET_ERR", t[t.SUCCESS = 0] = "SUCCESS", t[t.SYSTEM_ERR = 1] = "SYSTEM_ERR", t[t.REQUEST_ERR = 2] = "REQUEST_ERR", t[t.NEED_LOGIN = 5] = "NEED_LOGIN", t[t.SESSION_EXPIRED = 7] = "SESSION_EXPIRED", t[t.ACCT_ID_REQUIRED = 10101] = "ACCT_ID_REQUIRED", t[t.ACCT_PASS_REQUIRED = 10102] = "ACCT_PASS_REQUIRED", t[t.ACCT_NOT_FOUND = 10103] = "ACCT_NOT_FOUND", t[t.ACCT_PASS_ERR = 10104] = "ACCT_PASS_ERR", t[t.ACCT_STA_INACTIVED = 10105] = "ACCT_STA_INACTIVED", t[t.ACCT_ROLE_ERR = 10106] = "ACCT_ROLE_ERR", t[t.ACCT_ROLE_INVALID = 10107] = "ACCT_ROLE_INVALID", t[t.ACCT_LOCKED = 10110] = "ACCT_LOCKED", t[t.BALANCE_NOT_ENOUGH = 11101] = "BALANCE_NOT_ENOUGH"
        }(n || (n = {})), e.default = n
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(20),
        s = i(16),
        r = i(1),
        h = i(307),
        l = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.ROOM_INFO = 700, i.START = 701, i.FIRE = 702, i.SHOT = 703, i.SWEEP = 704, i.SWEEP_FIRE = 705, i.LEFT = 708, i.PLAYER_BALANCE = 709, i.MULTI_FIRE = 710, i.PUSH_SITDOWN = -100, i.PUSH_LEFT = -101, i.PUSH_FIRE = -110, i.PUSH_CATCH_FISH = -111, i.PUSH_CATCH_SWEEP_FISH = -112, i.PUSH_CATCH_SPECIAL_FISH = -113, i.PUSH_FISH_TRACE = -114, i.PUSH_FISH_TRACE_GROUP = -115, i.PUSH_SCENE_SWITCH = -116, i.PUSH_SCENE_CHANGE_READY_END = -123, i.PUSH_SCENE_CHANGE_END = -117, i.PUSH_SCENE_END = -118, i.PUSH_SWEEP_FIRE = -119, i.PUSH_SPECIAL_START = -120, i.PUSH_FIRESTORM_END = -121, i.PUSH_FIRE_CANCEL = -122, i.PUSH_MULTI_FIRE = -124, i.PUSH_NOTICE = -125, i.PUSH_FISH_TRACE_GROUP_EXT = -126, i.PUSH_TRANSFER_CANCEL = -127, i
            }
            return o(e, t), e.prototype.printMessage = function(e, i) {
                -114 != i && 6 != i && t.prototype.printMessage.call(this, e)
            }, e.prototype.send = function(e, i, n, o) {
                i.gameCode = r.default.gameCode, t.prototype.send.call(this, e, i, n, o)
            }, e.prototype.getRoomInfo = function(t, e) {
                this.send(this.ROOM_INFO, t, e)
            }, e.prototype.start = function(t, e) {
                this.send(this.START, t, e)
            }, e.prototype.fire = function(t, e, i) {
                this.send(this.FIRE, t, e, i)
            }, e.prototype.shot = function(t, e, i) {
                this.send(this.SHOT, t, e, i)
            }, e.prototype.sweep = function(t, e, i) {
                this.send(this.SWEEP, t, e, i)
            }, e.prototype.sweepFire = function(t, e, i) {
                this.send(this.SWEEP_FIRE, t, e, i)
            }, e.prototype.acctLeft = function(t) {
                this.send(this.LEFT, new s.MyRequest, t)
            }, e.prototype.playerBalance = function(t, e) {
                this.send(this.PLAYER_BALANCE, new s.MyRequest, t, e)
            }, e.prototype.multiFire = function(t, e, i) {
                this.send(this.MULTI_FIRE, t, e, i)
            }, e.prototype.bindSitDown = function(t) {
                this.bindPushEvent(this.PUSH_SITDOWN, t)
            }, e.prototype.bindLeft = function(t) {
                this.bindPushEvent(this.PUSH_LEFT, t)
            }, e.prototype.bindFire = function(t) {
                this.bindPushEvent(this.PUSH_FIRE, t)
            }, e.prototype.bindFireCancel = function(t) {
                this.bindPushEvent(this.PUSH_FIRE_CANCEL, t)
            }, e.prototype.bindCatchFish = function(t) {
                this.bindPushEvent(this.PUSH_CATCH_FISH, t)
            }, e.prototype.bindCatchSweepFish = function(t) {
                this.bindPushEvent(this.PUSH_CATCH_SWEEP_FISH, t)
            }, e.prototype.bindCatchSpecialFish = function(t) {
                this.bindPushEvent(this.PUSH_CATCH_SPECIAL_FISH, t)
            }, e.prototype.bindFishTrace = function(t) {
                this.bindPushEvent(this.PUSH_FISH_TRACE, t)
            }, e.prototype.bindFishTraceGroup = function(t) {
                this.bindPushEvent(this.PUSH_FISH_TRACE_GROUP, t)
            }, e.prototype.bindSceneSwitch = function(t) {
                this.bindPushEvent(this.PUSH_SCENE_SWITCH, t)
            }, e.prototype.bindSceneChangeReadyEnd = function(t) {
                this.bindPushEvent(this.PUSH_SCENE_CHANGE_READY_END, t)
            }, e.prototype.bindSceneChangeEnd = function(t) {
                this.bindPushEvent(this.PUSH_SCENE_CHANGE_END, t)
            }, e.prototype.bindSceneEnd = function(t) {
                this.bindPushEvent(this.PUSH_SCENE_END, t)
            }, e.prototype.bindSweepFire = function(t) {
                this.bindPushEvent(this.PUSH_SWEEP_FIRE, t)
            }, e.prototype.bindSpecialStart = function(t) {
                this.bindPushEvent(this.PUSH_SPECIAL_START, t)
            }, e.prototype.bindFireStormEnd = function(t) {
                this.bindPushEvent(this.PUSH_FIRESTORM_END, t)
            }, e.prototype.bindMultiFire = function(t) {
                this.bindPushEvent(this.PUSH_MULTI_FIRE, t)
            }, e.prototype.bindNotice = function(t) {
                this.bindPushEvent(this.PUSH_NOTICE, t)
            }, e.prototype.bindFishTraceGroupExt = function(t) {
                this.bindPushEvent(this.PUSH_FISH_TRACE_GROUP_EXT, t)
            }, e.prototype.bindTransferCancel = function(t) {
                this.bindPushEvent(this.PUSH_TRANSFER_CANCEL, t)
            }, e.prototype.compressData = function(t, e) {
                return h.default.encodeData(t, e)
            }, e.prototype.uncompressData = function(t, e) {
                return h.default.decodeData(t, e)
            }, e.prototype.close = function() {
                this.isManualClose = !0, this.socket.close()
            }, e
        }(a.Service);
    e.ServiceFish = l
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {}
        return t.encodeData = function(e, i) {
            var n = o[e];
            return n ? t.handler(i, n) : i
        }, t.decodeData = function(e, i) {
            var n = a[e];
            return n ? t.handler(i, n) : i
        }, t.handler = function(e, i) {
            var n = {};
            if (!(e instanceof Object)) return e;
            if (e instanceof Array) {
                for (var o = [], a = 0; a < e.length; a++) {
                    var s = e[a];
                    o.push(t.handler(s, i))
                }
                return o
            }
            for (var r = 0, h = Object.keys(e); r < h.length; r++) {
                var l = h[r],
                    c = i && i[l],
                    u = e[l];
                n[c ? c[0] : l] = t.handler(u, c && c[1])
            }
            return n
        }, t
    }();
    e.default = n;
    var o = {
            700: {},
            701: {
                roomId: ["rmId"]
            },
            702: {
                domination: ["bet"],
                angle: ["ang"],
                lockFishId: ["lfId"],
                bulletId: ["blId"],
                type: ["ty"]
            },
            703: {
                bulletId: ["blId"],
                fishId: ["fhId"],
                domination: ["bet"],
                refFishId: ["rfId"],
                kindId: ["kd"],
                type: ["ty"]
            },
            704: {
                fishId: ["rfId"],
                fishIds: ["fhIds"],
                angle: ["ang"],
                Point: ["p"],
                status: ["st"],
                kindId: ["kd"]
            },
            705: {
                angle: ["ang"],
                fishId: ["fhId"],
                domination: ["bet"],
                bulletId: ["blId"],
                lockFishId: ["lfId"]
            },
            708: {},
            709: {},
            710: {
                totalBet: ["bet"],
                angle: ["ang"],
                lockFishId: ["lfId"],
                bulletIds: ["blIds"]
            }
        },
        a = {
            700: {
                ris: ["roomInfos", {
                    dm: ["domination"],
                    ddm: ["defaultDomination"]
                }]
            },
            701: {
                di: ["deskInfo", {
                    dkId: ["deskId"],
                    ciId: ["chairId"],
                    atId: ["tranId"],
                    rmId: ["roomId"],
                    pis: ["playerInfos", {
                        an: ["acctName"],
                        ciId: ["chairId"],
                        bal: ["balance"]
                    }],
                    st: ["status"],
                    skId: ["sceneKindId"],
                    scId: ["sceneChangeId"],
                    tms: ["traceMessages", {
                        fhes: ["fishes", {
                            kd: ["kind"],
                            em: ["effectMills"]
                        }],
                        tc: ["trace", {
                            ps: ["points"],
                            tp: ["type"]
                        }],
                        cti: ["createTime"]
                    }],
                    gms: ["groupMessages", {
                        fhes: ["fishes", {
                            kd: ["kind"],
                            em: ["effectMills"]
                        }],
                        gpId: ["groupId"],
                        cti: ["createTime"]
                    }],
                    gems: ["groupExtMessages", {
                        fhes: ["fishes", {
                            kd: ["kind"],
                            em: ["effectMills"]
                        }],
                        gpId: ["groupId"],
                        cti: ["createTime"],
                        it: ["intervalTime"],
                        sp: ["speed"]
                    }],
                    bal: ["balance"],
                    mbs: ["maxBulletSize"],
                    kis: ["fishKindInfos", {
                        kd: ["kind"],
                        sp: ["speed"],
                        se: ["specialEffect"]
                    }],
                    lscet: ["lastScenePreChangeEndTime"]
                }]
            },
            702: {
                cnt: ["count"]
            },
            703: {
                bal: ["balance"],
                win: ["totalWin"],
                fhes: ["fishes", {
                    kd: ["kind"],
                    od: ["odds"]
                }],
                scBet: ["successBet"],
                fi: ["freeInfo", {
                    c: ["count"],
                    i: ["index"]
                }],
                et: ["endTime"],
                efs: ["effectFishIds"],
                ty: ["type"]
            },
            704: {
                bal: ["balance"],
                win: ["totalWin"],
                fhes: ["fishes", {
                    kd: ["kind"],
                    od: ["odds"]
                }],
                st: ["status"],
                kd: ["fishKind"]
            },
            705: {
                blId: ["bulletId"],
                fi: ["freeInfo", {
                    c: ["count"],
                    i: ["index"]
                }],
                cnt: ["count"],
                kd: ["fishKind"]
            },
            708: {
                ai: ["acctInfo"]
            },
            709: {
                pis: ["playerInfos", {
                    an: ["acctName"],
                    ciId: ["chairId"],
                    bal: ["balance"]
                }]
            },
            "-100": {
                an: ["acctName"],
                ciId: ["chairId"],
                bal: ["balance"],
                dkId: ["deskId"]
            },
            "-101": {
                dkId: ["deskId"],
                ciId: ["chairId"]
            },
            "-110": {
                ciId: ["chairId"],
                bal: ["balance"],
                blId: ["bulletId"],
                ang: ["angle"],
                bet: ["domination"],
                lfId: ["lockFishId"],
                ty: ["type"]
            },
            "-111": {
                ciId: ["chairId"],
                fhes: ["fishes", {
                    kd: ["kind"],
                    od: ["odds"]
                }],
                bet: ["domination"],
                win: ["totalWin"],
                bal: ["balance"],
                fr: ["free"],
                fi: ["freeInfo", {
                    c: ["count"],
                    i: ["index"]
                }],
                et: ["endTime"],
                efs: ["effectFishIds"],
                ty: ["type"]
            },
            "-112": {
                ciId: ["chairId"],
                fhes: ["fishes", {
                    kd: ["kind"],
                    od: ["odds"]
                }],
                bet: ["domination"],
                win: ["totalWin"],
                bal: ["balance"],
                kd: ["fishKind"],
                ang: ["angle"],
                p: ["Point"],
                st: ["status"]
            },
            "-113": {
                rmId: ["roomId"],
                dkId: ["deskId"],
                an: ["acctName"],
                kd: ["fishKind"],
                bet: ["domination"],
                win: ["totalWin"]
            },
            "-114": {
                fhes: ["fishes", {
                    kd: ["kind"],
                    em: ["effectMills"]
                }],
                tc: ["trace", {
                    ps: ["points"],
                    tp: ["type"]
                }],
                cti: ["createTime"]
            },
            "-115": {
                fhes: ["fishes", {
                    kd: ["kind"],
                    em: ["effectMills"]
                }],
                gpId: ["groupId"]
            },
            "-116": {
                skId: ["sceneKindId"],
                scId: ["sceneChangeId"]
            },
            "-117": {
                scId: ["sceneChangeId"]
            },
            "-118": {
                skId: ["sceneKindId"]
            },
            "-119": {
                ciId: ["chairId"],
                bal: ["balance"],
                blId: ["bulletId"],
                ang: ["angle"],
                bet: ["domination"],
                kd: ["fishKind"],
                lfId: ["lockFishId"]
            },
            "-120": {
                ciId: ["chairId"],
                fhId: ["fishId"],
                kd: ["fishKind"],
                efs: ["effectFishIds"]
            },
            "-121": {
                ciId: ["chairId"],
                kd: ["FishKind"],
                win: ["totalWin"]
            },
            "-122": {
                ciId: ["chairId"],
                blId: ["bulletId"],
                bet: ["domination"]
            },
            "-123": {
                scId: ["sceneChangeId"]
            },
            "-124": {
                ciId: ["chairId"],
                bal: ["balance"],
                blIds: ["bulletIds"],
                ang: ["angle"],
                bet: ["totalBet"],
                lfId: ["lockFishId"]
            },
            "-125": {
                an: ["acctName"],
                hlId: ["hallId"],
                rmId: ["roomId"],
                kd: ["fishKind"],
                od: ["odds"]
            },
            "-126": {
                fhes: ["fishes", {
                    kd: ["kind"],
                    em: ["effectMills"]
                }],
                gpId: ["groupId"],
                cti: ["createTime"],
                it: ["intervalTime"],
                sp: ["speed"]
            },
            "-127": {
                ciId: ["chairId"],
                amt: ["cancelAmt"]
            }
        }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t, e) {
            this.x = t, this.y = e
        }
        return t.prototype.multiply = function(t) {
            return this.x * t.x + this.y * t.y
        }, t.prototype.add = function(e) {
            return new t(this.x + e.x, this.y + e.y)
        }, t.prototype.subtract = function(e) {
            return new t(this.x - e.x, this.y - e.y)
        }, t
    }();
    e.Vector2 = n;
    var o = function() {
        function t(t, e, i, o) {
            this.centerPoint = t, this.extents = [e / 2, i / 2], this.axis = [new n(Math.cos(o), Math.sin(o)), new n(-1 * Math.sin(o), Math.cos(o))], this.rotation = o
        }
        return t.prototype.getProjectionRadius = function(t) {
            return this.extents[0] * Math.abs(t.multiply(this.axis[0])) + this.extents[1] * Math.abs(t.multiply(this.axis[1]))
        }, t.prototype.detectCollision = function(t) {
            var e = this.centerPoint.subtract(t.centerPoint),
                i = this.axis[0];
            if (this.getProjectionRadius(i) + t.getProjectionRadius(i) <= Math.abs(e.multiply(i))) return !1;
            var n = this.axis[1];
            if (this.getProjectionRadius(n) + t.getProjectionRadius(n) <= Math.abs(e.multiply(n))) return !1;
            var o = t.axis[0];
            if (this.getProjectionRadius(o) + t.getProjectionRadius(o) <= Math.abs(e.multiply(o))) return !1;
            var a = t.axis[1];
            return !(this.getProjectionRadius(a) + t.getProjectionRadius(a) <= Math.abs(e.multiply(a)))
        }, t
    }();
    e.OBB = o
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(310),
        s = i(7),
        r = i(314),
        h = i(72),
        l = i(0),
        c = i(150),
        u = i(347),
        d = i(151),
        f = i(142),
        p = i(80),
        y = i(350),
        g = i(1),
        m = i(3),
        w = i(9),
        x = i(354),
        v = i(48),
        _ = i(355),
        b = i(356),
        k = i(146),
        S = i(2),
        I = i(357),
        T = i(147),
        C = i(358),
        P = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.name = "game", l.default.gameScene = e, e
            }
            return o(e, t), e.prototype.init = function() {
                this.initContainer(), this.initMenu(), this.initHallInfo(), this.initAutoSelectPanel(), this.initTutorial(), this.initGameManager(), this.initView(), this.initPushEvent(), this.initHeartBeat(), w.default.stopIntroBg(), w.default.playMainBg(l.default.deskInfo.sceneChangeId), this.gameManager.init()
            }, e.prototype.initContainer = function() {
                var t = this;
                this.mainContainer = new s.Container, this.background = new a.default(this, l.default.deskInfo.sceneKindId, l.default.deskInfo.sceneChangeId, l.default.deskInfo.isSc), this.ghostFishEffectContainer = new s.Container, this.fishContainer = new s.Container, this.bulletContainer = new s.Container, this.centerEffectContainer = new s.Container, this.batteryContainer = new y.default(function() {
                    return t.changeGunStatus()
                }), this.winContainer = new p.default, this.effectContainer = new s.Container, this.lightnTipContainer = new s.Container, this.lightnContainer = new C.default({
                    batteryContainer: this.batteryContainer,
                    lightnTipContainer: this.lightnTipContainer
                }), this.initToolLayer(), this.mainContainer.addChild(this.background, this.fishContainer, this.ghostFishEffectContainer, this.bulletContainer), this.addChild(this.mainContainer, this.lightnTipContainer, this.centerEffectContainer, this.batteryContainer, this.toolLayer, this.winContainer, this.lightnContainer, this.effectContainer)
            }, e.prototype.initMenu = function() {
                var t = this;
                this.menu = new c.Menu({
                    onHome: function() {
                        t.gameManager.removeKeyBoardEvent(), t.onHome()
                    },
                    onPaytable: function(e) {
                        return t.onPaytable(e)
                    }
                }), this.addChild(this.menu)
            }, e.prototype.initTutorial = function() {
                var t = this;
                this.tutorial = new x.default({
                    batteryContainer: this.batteryContainer,
                    toolLayer: this.toolLayer,
                    menu: this.menu,
                    onCallback: function() {
                        return t.gameManager.addKeyBoardEvent()
                    }
                }), this.addChild(this.tutorial)
            }, e.prototype.initToolLayer = function() {
                var t = this;
                return this.toolLayer = new u.ToolLayer({
                    onAuto: function() {
                        return t.onAuto()
                    },
                    onLock: function() {
                        return t.onLock()
                    },
                    onDouble: function() {
                        return t.onDouble()
                    },
                    onThunder: function() {
                        return t.onThunder()
                    }
                }), this.toolLayer
            }, e.prototype.initHallInfo = function() {
                this.hallInfo = new _.default, this.addChild(this.hallInfo)
            }, e.prototype.initAutoSelectPanel = function() {
                var t = this;
                this.autoSelectPanel = new I.default(function(e) {
                    t.onAutoSelect(e)
                }), this.addChild(this.autoSelectPanel)
            }, e.prototype.initGameManager = function() {
                this.gameManager = new r.default({
                    scene: this,
                    background: this.background,
                    ghostFishEffectContainer: this.ghostFishEffectContainer,
                    fishContainer: this.fishContainer,
                    bulletContainer: this.bulletContainer,
                    centerEffectContainer: this.centerEffectContainer,
                    batteryContainer: this.batteryContainer,
                    lightnContainer: this.lightnContainer,
                    winContainer: this.winContainer,
                    effectContainer: this.effectContainer,
                    toolLayer: this.toolLayer,
                    tutorial: this.tutorial,
                    hallInfo: this.hallInfo,
                    menu: this.menu,
                    autoSelectPanel: this.autoSelectPanel
                })
            }, e.prototype.initView = function() {
                if (l.default.isView) {
                    var t = new s.Point(g.default.width / 2, g.default.height / 2),
                        e = this.mainContainer;
                    e.pivot.x = t.x, e.pivot.y = t.y, e.x = t.x, e.y = t.y, e.rotation = Math.PI
                }
            }, e.prototype.onHome = function() {
                var t = this;
                l.default.service.acctLeft(function(e) {
                    var i = e.acctInfo.balance;
                    l.default.acct.balance = S.default.ignoreAmountDecimal(i), t.switchHomeScene()
                })
            }, e.prototype.switchEffectLayerIndex = function(t) {}, e.prototype.switchHomeScene = function() {
                (new f.default).addToStage(), document.querySelector("#loaderContent").style.visibility = "visible", w.default.clearSounds(), T.specialManager.reset(), k.celebrationManager.reset(), b.behaviorCollect.reset()
            }, e.prototype.onPaytable = function(t) {
                this.paytable || (this.paytable = new d.default), this.paytable.show()
            }, e.prototype.onAuto = function() {
                this.gameManager.auto()
            }, e.prototype.onAutoSelect = function(t) {
                this.gameManager.autoSelect(t)
            }, e.prototype.onLock = function() {
                this.gameManager.lock()
            }, e.prototype.onDouble = function() {
                this.gameManager.turnDouble()
            }, e.prototype.onThunder = function() {
                this.gameManager.lightning()
            }, e.prototype.changeGunStatus = function() {
                this.gameManager.changeGunStatus()
            }, e.prototype.initHeartBeat = function() {
                this.timer = setInterval(function() {
                    l.default.service.getServerTime(null)
                }, 6e4)
            }, e.prototype.quake = function(t) {
                void 0 === t && (t = 12);
                for (var e = new m.TimelineLite, i = 0; i < t; i++) 0 === i ? (e.to(this.scale, .06, {
                    x: 1.03,
                    y: 1.03
                }), e.to(this, .06, {
                    x: -20,
                    y: 12
                }, "-=0.06")) : i < t - 1 ? e.to(this, .06, {
                    x: 30 * Math.random() - 15,
                    y: 24 * Math.random() - 12
                }) : (e.to(this, .06, {
                    x: 0,
                    y: 0
                }), e.to(this.scale, .06, {
                    x: 1,
                    y: 1
                }, "-=0.06"))
            }, e.prototype.docVisibilityChange = function(e) {
                t.prototype.docVisibilityChange.call(this, e), !e && this.gameManager.clearSpaceAuto()
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), clearInterval(this.timer), l.default.service.clearPushEvent()
            }, e.prototype.initPushEvent = function() {
                var t = this,
                    e = l.default.service;
                e.bindFishTrace(function(e) {
                    t.gameManager.sendFish(e.fishes, e.trace, void 0, e.createTime)
                }), e.bindFishTraceGroup(function(e) {
                    t.gameManager.sendFishScene(e.fishes, e.groupId)
                }), e.bindSitDown(function(e) {
                    t.batteryContainer.addPlayer(e.acctName, e.chairId, e.balance)
                }), e.bindLeft(function(e) {
                    e.chairId == l.default.deskInfo.chairId || (T.specialManager.interruptEffect(e.chairId), t.batteryContainer.removePlayer(e.chairId))
                }), e.bindFire(function(e) {
                    t.gameManager.fireByOthers(e)
                }), e.bindMultiFire(function(e) {
                    t.gameManager.multiFireByOthers(e)
                }), e.bindNotice(function(e) {
                    t.gameManager.noticeMessage(e)
                }), e.bindFireCancel(function(e) {
                    t.gameManager.fireCancel(e)
                }), e.bindSweepFire(function(e) {
                    t.gameManager.sweepFireByOthers(e)
                }), e.bindCatchFish(function(e) {
                    e.endTime && (e.endTime = e.endTime.replace(/[-]/g, "/")), t.gameManager.catchFishByOthers(e)
                }), e.bindCatchSweepFish(function(e) {
                    t.gameManager.catchSweepFishByOthers(e)
                }), e.bindSceneSwitch(function(e) {
                    t.gameManager.swtichScene(e)
                }), e.bindSceneChangeEnd(function(e) {
                    t.gameManager.stopScene(), setTimeout(function() {
                        t.gameManager.swtichSceneEnd(e)
                    }, 1e3)
                }), e.bindSceneChangeReadyEnd(function(e) {
                    t.gameManager.changeReadyScene()
                }), e.bindSceneEnd(function(e) {
                    t.gameManager.stopScene()
                }), e.bindSpecialStart(function(e) {
                    t.gameManager.specialGameStart(e)
                }), e.bindFireStormEnd(function(e) {
                    t.gameManager.fireStormEnd(e)
                }), e.bindFishTraceGroupExt(function(e) {
                    t.gameManager.sendFishExtScene(e.fishes, e.groupId, e.intervalTime, e.speed)
                }), e.bindTransferCancel(function(e) {
                    t.gameManager.transferCancel(e)
                }), e.bindKickout(function(e) {
                    t.switchHomeScene(), v.default.showMessage(l.default.locale.getString("MSG_KICK_OUT")), l.default.service.close()
                })
            }, e
        }(h.default);
    e.default = P
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(3),
        s = i(0),
        r = i(1),
        h = i(7),
        l = i(9),
        c = function(t) {
            function e(e, i, n, o) {
                var a = t.call(this) || this;
                return a.boomAniList = [], a.transAniName = ["", "", "dragon_after", "fire_bg", "monkey_after", "", ""], a.scene = e, a.currBg = a.createBg(i), a.addChild(a.currBg), a.initMask(), a.initTransition(), a
            }
            return o(e, t), e.prototype.initMask = function() {
                var t = new h.Graphics;
                t.beginFill(0, 1), t.position.set(0, 0), t.drawRect(0, 0, r.default.width, r.default.height), t.visible = !1, this.addChild(t), this.bgMask = t
            }, e.prototype.initTransition = function() {
                var t = new PIXI.spine.Spine(s.default.resources.bg_transition.spineData);
                t.skeleton.setToSetupPose(), t.alpha = 0, t.position.set(r.default.width / 2, r.default.height / 2), this.addChild(t), this.transitionAni = t
            }, e.prototype.createBg = function(t) {
                var e = this.initBg(t);
                return this.sceneKindId = t, e
            }, e.prototype.initBg = function(t) {
                var e, i = this.transAniName[t],
                    n = new h.Container;
                if (n.position.set(.5 * r.default.width, .5 * r.default.height), [3, 5].indexOf(t + 1) < 0) {
                    var o = PIXI.Sprite.fromFrame("bg" + (t + 1));
                    o.anchor.set(.5), n.addChild(o)
                }
                if (i) {
                    var a = new PIXI.spine.Spine(s.default.resources[i].spineData);
                    a.skeleton.setToSetupPose(), a.state.setAnimation(0, "wait", !0), n.addChild(a)
                }(e = n, i) && ((e.children[1] ? e.children[1] : e.children[0]).state.tracks[0].trackTime = 0);
                return e
            }, e.prototype.change = function(t, e) {
                var i = t,
                    n = this.currBg,
                    o = this.createBg(i);
                switch (this.addChildAt(o, 0), this.currBg = o, !0) {
                    case 0 == i:
                    case 1 == i:
                    case 2 == i:
                        this.changeMask(n, o);
                        break;
                    case 3 == i:
                        this.scenetoMonkey(n, o);
                        break;
                    case 4 == i:
                        this.monkeytoAfter(n, o);
                        break;
                    case 5 == i:
                        this.scenetoGhost(n, o)
                }
                l.default.playMainBg(i)
            }, e.prototype.changeMask = function(t, e) {
                var i = this,
                    n = this.bgMask;
                n.visible = !0, t.mask = n, this.changeTranstion(), a.TweenMax.to(n, 1, {
                    width: 0,
                    delay: .5,
                    ease: a.Linear.easeNone,
                    onComplete: function() {
                        t.mask = null, i.removeChild(t), i.bgMask.width = r.default.width, i.bgMask.visible = !1
                    }
                })
            }, e.prototype.scenetoMonkey = function(t, e) {
                var i = this,
                    n = t.children[1] ? t.children[1] : t.children[0],
                    o = e.children[1] ? e.children[1] : e.children[0];
                n.state.setAnimation(0, "leave", !1), n.state.addListener({
                    complete: function() {
                        o.state.clearListeners(), setTimeout(function() {
                            i.removeChild(t)
                        }, 0)
                    }
                });
                var s = new a.TimelineLite;
                o.state.setAnimation(0, "wait", !0), e.scale.set(.67), s.to(e.scale, .5, {
                    x: 1,
                    y: 1
                })
            }, e.prototype.monkeytoAfter = function(t, e) {
                var i = this,
                    n = e.children[1] ? e.children[1] : e.children[0];
                this.setChildIndex(e, 1), n.state.setAnimation(0, "enter", !1), n.state.addAnimation(0, "wait", !0, 0), n.state.addListener({
                    complete: function() {
                        n.state.clearListeners(), setTimeout(function() {
                            i.removeChild(t)
                        }, 0)
                    }
                })
            }, e.prototype.scenetoGhost = function(t, e) {
                var i = this,
                    n = t.children[1] ? t.children[1] : t.children[0];
                n.state.setAnimation(0, "leave", !1), n.state.addListener({
                    complete: function() {
                        n.state.clearListeners(), setTimeout(function() {
                            i.removeChild(t)
                        }, 0)
                    }
                });
                var o = new a.TimelineLite;
                e.scale.set(2), o.to(e.scale, 26 / 30, {
                    x: 1,
                    y: 1
                }), this.scene.quake(18)
            }, e.prototype.changeTranstion = function() {
                var t = this;
                this.transitionAni.alpha = 1, this.transitionAni.state.clearTracks(), this.transitionAni.state.setAnimation(0, "enter", !1), this.transitionAni.state.addListener({
                    complete: function() {
                        t.transitionAni.alpha = 0
                    }
                }), l.default.playWaveEffect()
            }, e.prototype.startIceAni = function() {
                if (!this.iceAni) {
                    var t = new PIXI.spine.Spine(s.default.resources.ice_bg.spineData);
                    t.position.set(.5 * r.default.width, .5 * r.default.height), t.skeleton.setToSetupPose(), this.addChild(t), this.iceAni = t
                }
                var e = this.iceAni;
                e.renderable = !0, e.state.setAnimation(0, "enter", !1), e.state.addAnimation(0, "wait", !0, 0)
            }, e.prototype.endIceAni = function(t) {
                var e = this.iceAni;
                e && (t ? e.renderable = !1 : (e.state.setAnimation(0, "leave", !1), e.state.addListener({
                    complete: function() {
                        e.state.clearListeners(), e.renderable = !1
                    }
                })))
            }, e.prototype.startFireAni = function() {
                var t = new PIXI.spine.Spine(s.default.resources.fire_light.spineData);
                t.skeleton.setToSetupPose(), t.position.set(r.default.width / 2, r.default.height / 2), t.state.setAnimation(0, "fire_wait", !0), t.alpha = 0, this.fireAni = t, this.addChild(t), a.TweenLite.to(t, .3, {
                    alpha: 1
                })
            }, e.prototype.endFireAni = function() {
                var t = this;
                this.fireAni && a.TweenLite.to(this.fireAni, .3, {
                    alpha: 0,
                    onComplete: function() {
                        t.fireAni.renderable = !1, t.fireAni.destroy(), t.removeChild(t.fireAni), t.fireAni = null
                    }
                })
            }, e.prototype.startHammerBoomAni = function() {
                var t = new PIXI.spine.Spine(s.default.resources.hammer_bg.spineData);
                t.skeleton.setBonesToSetupPose(), t.state.setAnimation(0, "wait", !1), t.position.set(.5 * r.default.width, .5 * r.default.height), this.addChild(t), this.boomAniList.push(t)
            }, e.prototype.endHammerBoomAni = function() {
                var t = this;
                if (0 != this.boomAniList.length) {
                    var e = this.boomAniList.shift();
                    a.TweenMax.to(e, .5, {
                        alpha: 0,
                        onComplete: function() {
                            t.removeChild(e)
                        }
                    })
                }
            }, e.prototype.startMonkeyAni = function(t, e) {
                if (void 0 === e && (e = !1), !this.monkeyAni) {
                    var i = new PIXI.spine.Spine(s.default.resources.monkey_bg.spineData);
                    i.skeleton.setBonesToSetupPose(), this.monkeyAni = i, this.addChild(this.monkeyAni)
                }
                this.monkeyAni.position.set(.5 * r.default.width, .5 * r.default.height), this.monkeyAni.state.setAnimation(0, t, e);
                var n = this.currBg.children[1];
                n && (n.state.timeScale = 0)
            }, e.prototype.endMonkeyAni = function() {
                var t = this,
                    e = this.monkeyAni;
                if (e) {
                    a.TweenMax.to(e, .5, {
                        alpha: 0,
                        onComplete: function() {
                            t.monkeyAni.destroy(), t.removeChild(e), t.monkeyAni = null
                        }
                    });
                    var i = this.currBg.children[1];
                    i && (i.state.timeScale = 1)
                }
            }, e
        }(h.Container);
    e.default = c
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(312),
        o = i(143);
    e.soundLoader = o.default;
    var a = i(313),
        s = function() {
            function t() {
                this.soundList = {}, this.channelList = {}
            }
            return t.prototype.init = function(t) {
                for (var e in t) {
                    var i = t[e],
                        n = "object" == typeof i ? i : {
                            src: i
                        };
                    this.createSound(n)
                }
            }, t.prototype.createSound = function(t) {
                var e = new n.Howl({
                    src: t.src + "?" + o.default.queryString,
                    loop: !!t.loop
                });
                this.soundList[t.src] = e, this.setSoundChannel(e, t.group)
            }, t.prototype.getSound = function(t, e) {
                var i, a = !1,
                    s = "",
                    r = 0,
                    h = null;
                return "string" == typeof t ? i = t : (i = t.src, a = t.loop, s = t.group, r = t.duration || 0), (h = this.soundList[i]) ? h.mute(e) : ((h = r ? new n.Howl({
                    src: i + "?" + o.default.queryString,
                    sprite: {
                        gapless: [100, r, a]
                    }
                }) : new n.Howl({
                    src: i + "?" + o.default.queryString,
                    loop: a
                })).mute(e), this.soundList[i] = h, this.setSoundChannel(h, s), h)
            }, t.prototype.setSoundChannel = function(t, e) {
                e = e || "effect";
                var i = this.channelList[e] || new a.default;
                i.addSound(t), this.channelList[e] = i
            }, t.prototype.getChannel = function(t) {
                return this.channelList[t]
            }, t.prototype.mute = function() {
                for (var t in this.soundList) {
                    this.soundList[t].mute(!0)
                }
            }, t.prototype.unmute = function() {
                for (var t in this.soundList) {
                    this.soundList[t].mute(!1)
                }
            }, t
        }();
    e.SoundManager = s;
    var r = function() {
        function t() {
            this.index = 0, this.list = []
        }
        return t.prototype.push = function(t) {
            this.list.push(t)
        }, t.prototype.switchBySenceIndex = function(t, e) {
            this.play(this.list[t], e), this.index
        }, t.prototype.play = function(t, e) {
            this.currSound && this.currSound.stop(), this.currSound && this.id && this.currSound.fade(1, 0, 100, this.id), this.id = t.play(), t.mute(e), t.fade(0, 1, 100, this.id), this.currSound = t
        }, t.prototype.rePlay = function(t) {
            this.currSound && !this.currSound.playing(this.id) && (this.id = this.currSound.play(), this.currSound.mute(t), this.currSound.fade(0, 1, 100, this.id))
        }, t.prototype.stop = function() {
            this.currSound && this.currSound.stop()
        }, t
    }();
    e.SoundGroup = r
}, , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {
            this.list = []
        }
        return t.prototype.addSound = function(t) {
            this.list.push(t)
        }, t.prototype.mute = function() {
            for (var t = 0, e = this.list; t < e.length; t++) {
                e[t].mute(!0)
            }
        }, t.prototype.unmute = function() {
            for (var t = 0, e = this.list; t < e.length; t++) {
                e[t].mute(!1)
            }
        }, t.prototype.stop = function() {}, t.prototype.fadeIn = function() {}, t.prototype.stofadeOutp = function() {}, t.prototype.pause = function() {}, t.prototype.resume = function() {}, t.prototype.volume = function() {}, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";
    var n = this && this.__assign || Object.assign || function(t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        a = i(315),
        s = i(78),
        r = i(144),
        h = i(316),
        l = i(79),
        c = i(7),
        u = i(2),
        d = i(14),
        f = i(317),
        p = i(318),
        y = i(319),
        g = i(1),
        m = i(320),
        w = i(321),
        x = i(322),
        v = i(145),
        _ = i(3),
        b = i(146),
        k = i(323),
        S = i(17),
        I = i(324),
        T = i(147),
        C = i(339),
        P = i(340),
        F = i(341),
        M = i(343),
        A = i(9),
        E = i(149),
        L = i(344),
        O = i(48),
        D = i(345),
        B = function() {
            function t(t) {
                this.specialTag = T.SpecialTag.None, this.firestormTag = T.SpecialTag.None, this.updateCounter = 0, this.bulletCount = 0, this.isAllowShot = !0, this.isAuto = !1, this.isAutoLock = !1, this.isDouble = !1, this.inAutoShotting = !1, this.isInPress = !1, this.throttle = 1, this.hasShowMessageInAutoLock = !1, this.isLightned = !1, this.preLockFishInfo = [-1, -1], this.lastFishTapTime = 0, this.lastContainerTapTime = 0, this.isSpaceAuto = !1, this.isSpaceDownFromUp = !0, this.playLastFireTime = [], this.checkPeriod = 5e3, this.multiBoomFishIds = [], this.dragonAniId = 0, this.bltId = 0, this.isMyFireStromPreparing = !1, this.curSceneBossCount = 0, this.nowFrozenFishIds = null, this.lastUpdateCounter1 = 0, this.lastUpdateCounter2 = 0, this.lastUpdateCounter3 = 0, this.scene = t.scene, this.background = t.background, this.batteryContainer = t.batteryContainer, this.ghostFishEffectContainer = t.ghostFishEffectContainer, this.fishContainer = t.fishContainer, this.bulletContainer = t.bulletContainer, this.centerEffectContainer = t.centerEffectContainer, this.winContainer = t.winContainer, this.effectContainer = t.effectContainer, this.toolLayer = t.toolLayer, this.tutorial = t.tutorial, this.hallInfo = t.hallInfo, this.menu = t.menu, this.autoSelectPanel = t.autoSelectPanel, this.lightnContainer = t.lightnContainer, this.lightn = new F.default(this.scene, this.fishContainer), this.aim = new k.default(this.scene, this.fishContainer, this.lightn), this.lockInfo = new R, this.autoLockInfo = new R, this.throttle = S.default.isIE() ? 2 : 1, this.bltId = 0, this.curSceneBossCount = 0, T.specialManager.init(this.effectContainer)
            }
            return t.prototype.init = function() {
                var t = this;
                this.poolFish = new s.Pool, this.poolBullet = new s.Pool, this.poolNet = new s.Pool, this.poolDragon = new s.Pool, this.poolAniFish = new s.Pool, this.poolBigEffectFish = new s.Pool, this.fishList = [], this.fishMap = {}, this.fishGroupList = [], this.fishLevel = [], o.default.scene.ticker.add(this.onUpdate.bind(this));
                var e = this.fishContainer.parent;
                e.interactive = !0, e.on("pointerdown", function(e) {
                    var i = e.data.getLocalPosition(t.fishContainer);
                    if (!t.isMultiTouch(e) && !(t.specialTag > T.SpecialTag.None || t.inFireStorm() && t.firestormTag != T.SpecialTag.Ready)) {
                        if (t.isLightned && !t.inFireStorm() && t.specialTag == T.SpecialTag.None) {
                            if (t.lightn.getIsLightShow()) return;
                            return t.lightnPosition = i, t.lightn.setLightAble(!0), void t.interactiveAllForLight(!1)
                        }
                        if ((t.specialTag == T.SpecialTag.None || t.inFireStorm()) && !(e.target instanceof r.default || e.target instanceof M.default || e.target instanceof E.default)) {
                            var n = (new Date).getTime();
                            if (n - t.lastContainerTapTime < 300 ? (t.toolLayer.activeAim(!1), t.lastContainerTapTime = 0) : (t.lockInfo.unlockFish(), t.toolLayer.setAimFish(!1), t.autoLockInfo.unlockAutoFish(), t.closeAuto(), t.lastContainerTapTime = n), t.lockInfo.locked) return
                        }
                        t.autoLockInfo.locked || (t.toolLayer.interactiveChildren = !1, t.pressStatusTimer = setTimeout(function() {
                            return t.isInPress = !0
                        }, 200), t.evtPoint = new c.Point(i.x, i.y), t.doShot(t.evtPoint))
                    }
                }), e.on("pointermove", function(e) {
                    var i = e.data.getLocalPosition(t.fishContainer);
                    t.tutorial.parent || u.default.checkInScreen(i, 0) && (t.isLightned ? t.lightnPosition && (t.lightnPosition = i) : t.checkCanShot() && (t.lockInfo.fish || t.autoLockInfo.fish || (t.evtPoint = new c.Point(i.x, i.y), t.batteryContainer.setShotAngle(i))))
                }), ["pointerup", "pointerout", "pointerupoutside"].forEach(function(i) {
                    e.on(i, function() {
                        clearTimeout(t.pressStatusTimer), t.isInPress = !1, t.setMenuEnable(), t.lightnPosition = null, t.lightn.setLightAble(!1), t.interactiveAllForLight(!0), t.toolLayer.interactiveChildren = !0
                    })
                }), this.isAllowShot = 1 == o.default.deskInfo.status, this.bulletMax = o.default.deskInfo.maxBulletSize, a.default.forEach(function(t, e) {
                    return t.speed = o.default.deskInfo.fishKindInfos[e].speed
                }), this.restoreFish(), this.fixMode20Fish(), o.default.specialEffectKindIds = o.default.deskInfo.fishKindInfos[24] && o.default.deskInfo.fishKindInfos[24].specialEffect
            }, t.prototype.isMultiTouch = function(t) {
                return "undefined" != typeof TouchEvent && t.data.originalEvent instanceof TouchEvent && t.data.originalEvent.touches.length > 1
            }, t.prototype.addKeyBoardEvent = function() {
                var t = this,
                    e = this.batteryContainer.getGunGlobalPos();
                this.keydownFn = function(i) {
                    if (!t.lockInfo.fish && !t.autoLockInfo.fish && (!t.isLightned || t.inFireStorm()) && t.checkCanShot() && (32 == i.keyCode && t.isSpaceDownFromUp && (t.spaceDownTimer = setTimeout(function() {
                            return t.isSpaceAuto = !0
                        }, 300), t.isSpaceDownFromUp = !1, t.evtPoint = t.evtPoint || new c.Point(g.default.width / 2, g.default.height / 2), t.doShot(t.evtPoint)), !t.tutorial.parent && (37 == i.keyCode || 39 == i.keyCode))) {
                        var n = 37 == i.keyCode ? -1 : 1,
                            a = t.evtPoint && u.default.getPointForView(t.evtPoint, o.default.isView) || new c.Point(e.x, 0);
                        a.y = a.y >= e.y ? e.y : a.y;
                        var s = new c.Point(a.x - e.x, a.y - e.y);
                        t.evtPoint = u.default.getPointForView(u.default.getRotatedPoint(s, e, Math.PI / 60 * n), o.default.isView), t.batteryContainer.setShotAngle(t.evtPoint), t.aim.setAimVisible(!0, u.default.getPointForView(t.evtPoint, o.default.isView))
                    }
                }, this.keyupFn = function(e) {
                    32 == e.keyCode && (t.spaceDownTimer && clearTimeout(t.spaceDownTimer), t.isSpaceAuto = !1, t.isSpaceDownFromUp = !0, t.setMenuEnable()), 27 == e.keyCode && t.lightnPosition && (t.lightnPosition = null, t.lightn.setLightAble(!1), t.interactiveAllForLight(!0), t.lightn.resetCursor(), t.toolLayer.interactiveChildren = !0)
                }, window.addEventListener("keydown", this.keydownFn), window.addEventListener("keyup", this.keyupFn)
            }, t.prototype.removeKeyBoardEvent = function() {
                window.removeEventListener("keydown", this.keydownFn), window.removeEventListener("keyup", this.keyupFn)
            }, t.prototype.auto = function() {
                this.isAutoLock ? (this.isAutoLock = !this.isAutoLock, this.autoLockInfo.locked && this.closeAuto()) : (this.toolLayer.activeAim(!1), this.autoSelectPanel.show(), this.setMenuEnable()), this.cancelLightnFish()
            }, t.prototype.autoSelect = function(t) {
                var e = this;
                !t || t.length <= 0 || (this.autoSelectFish(t, function() {
                    e.isAutoLock = !0, e.toolLayer.activeAutoLock(!0), e.autoLockInfo.locked = !e.autoLockInfo.locked, e.autoLockInfo.arr = t
                }), this.cancelLightnFish())
            }, t.prototype.closeAuto = function() {
                this.isAutoLock = !1, this.toolLayer.activeAutoLock(!1), this.autoLockInfo.clear()
            }, t.prototype.lightning = function() {
                (this.autoLockInfo.locked || this.autoLockInfo.fish) && (this.autoLockInfo.unlockAutoFish(), this.closeAuto()), this.lockInfo.locked && (this.fishContainer.interactive = !1, this.lockInfo.fish && (this.lockInfo.fish.lock = !1, this.lockInfo.fish = null, this.toolLayer.setAimFish(!1)), this.toolLayer.activeAim(!1)), !this.isLightned && this.isDouble && this.toolLayer.activeDouble(!1), this.isLightned = !this.isLightned, this.isLightned && this.batteryContainer.setMyLightnAngle(), this.isLightned ? this.lightnContainer.showTips(-1) : this.lightnContainer.hideTips(-1), this.aim.hide(), this.isLightned ? (this.fishContainer.hitArea || (this.fishContainer.hitArea = new PIXI.Rectangle(0, 0, g.default.width, g.default.height)), this.fishContainer.interactive = !0, this.lightn.show()) : (this.lightn.hide(), this.fishContainer.interactive = !1)
            }, t.prototype.lock = function() {
                this.lockInfo.locked = !this.lockInfo.locked, this.cancelLightnFish(), (this.autoLockInfo.locked || this.autoLockInfo.fish) && (this.autoLockInfo.unlockAutoFish(), this.closeAuto()), this.lockInfo.locked ? (this.fishContainer.hitArea || (this.fishContainer.hitArea = new PIXI.Rectangle(0, 0, g.default.width, g.default.height)), this.fishContainer.interactive = !0, this.aim.show()) : (this.aim.hide(), this.fishContainer.interactive = !1, this.lockInfo.fish && (this.lockInfo.fish.lock = !1, this.lockInfo.fish = null, this.toolLayer.setAimFish(!1)))
            }, t.prototype.lockSameKindFish = function(t, e) {
                var i = [],
                    n = u.default.getLocalPosition(this.batteryContainer.getBatteryPosition(), g.default.scale),
                    a = 1e4,
                    s = null;
                this.fishList.forEach(function(t) {
                    return t && (i = i.concat(t))
                });
                for (var r = 0, h = i.length; r < h; r++) {
                    var l = i[r].realKind == d.FishKind.Dragon ? i[r].getNewLockPos() : i[r].position;
                    if (i[r].realKind == t && i[r].id != e && !i[r].catched && u.default.checkInScreen(l, -1 * i[r].radius)) {
                        var c = u.default.getPointForView(i[r].position, o.default.isView),
                            f = u.default.getDistance([n, c]);
                        a > f && (a = f, s = i[r])
                    }
                }
                s && this.lockFish(s), this.preLockFishInfo = [-1, -1]
            }, t.prototype.autoSelectFish = function(t, e) {
                if (this.checkCanShot() && t) {
                    var i = [],
                        n = u.default.getLocalPosition(this.batteryContainer.getBatteryPosition(), g.default.scale),
                        a = 1e4,
                        s = null;
                    this.fishList.forEach(function(t) {
                        return t && (i = i.concat(t))
                    });
                    for (var r = 0, h = t; r < h.length; r++) {
                        for (var l = h[r], c = 0, f = i.length; c < f; c++)
                            if (!this.inFireStorm() || !d.FishUtils.isSpecialFish(i[c].realKind) || i[c].realKind == d.FishKind.FireStorm || d.FishUtils.isBigEffectFish(i[c].realKind)) {
                                var p = i[c].realKind == d.FishKind.Dragon ? i[c].getNewLockPos() : i[c].position;
                                if (i[c].realKind == l && !i[c].catched && u.default.checkInScreen(p, -1 * i[c].radius)) {
                                    var y = u.default.getPointForView(i[c].position, o.default.isView),
                                        m = u.default.getDistance([n, y]);
                                    a > m && (a = m, s = i[c])
                                }
                            } if (s) break
                    }
                    return e && e(), s ? this.autoLockFish(s) : this.autoLockInfo && (this.autoLockInfo.fish = null), s
                }
            }, t.prototype.removeLockStyle = function() {
                this.aim.hide(), this.toolLayer.enableForShot(!1)
            }, t.prototype.rebackLockStyle = function() {
                this.lockInfo.locked && (this.lockInfo.locked = !1, this.lock()), this.toolLayer.enableForShot(!0)
            }, t.prototype.turnDouble = function() {
                this.isDouble = !this.isDouble, this.batteryContainer.turnDouble(-1, this.isDouble), this.cancelLightnFish()
            }, t.prototype.changeGunStatus = function() {
                this.toolLayer.enableForShot() && this.toolLayer.getActiveForFirestorm() && (this.isLightned ? (this.toolLayer.activeLightn(!1), this.isDouble && this.toolLayer.activeDouble(!1)) : this.isDouble ? (this.toolLayer.activeLightn(!0), this.isDouble && this.toolLayer.activeDouble(!1)) : this.toolLayer.activeDouble(!0))
            }, t.prototype.sendFish = function(t, e, i, n) {
                if (1 == t.length && this.sendFishOne(t[0], e, i, n), t.length > 1 && this.sendFishGroup(t, e, i), this.nowFrozenFishIds)
                    for (var a in this.fishMap) {
                        var s = this.fishMap[a];
                        s && this.nowFrozenFishIds.indexOf(s.id) > -1 && o.default.specialEffectKindIds.indexOf(s.kind) > -1 && s.pause()
                    }
            }, t.prototype.sendFishScene = function(t, e, i) {
                for (var n = this, o = [], a = 0, s = t; a < s.length; a++) {
                    var r = s[a];
                    if (r) {
                        var h = this.createFish(r.id, r.kind);
                        o.push(h)
                    } else o.push(null)
                }
                if (y.traceSceneManager.createTrace(o, e, function(t) {
                        n.removeFish(t)
                    }), this.fishGroupList.push(new N(o, e)), i)
                    for (var l = 0, c = o; l < c.length; l++) {
                        var u = c[l];
                        this.restoreTrace(u, i, e)
                    }
            }, t.prototype.sendFishExtScene = function(t, e, i, n, o) {
                var a = this,
                    s = [];
                for (var r in t) {
                    s[r] = [];
                    for (var h = 0, l = t[r]; h < l.length; h++) {
                        var c = l[h];
                        if (c) {
                            var u = this.createFish(c.id, c.kind);
                            s[r].push(u)
                        } else s[r].push(null)
                    }
                }
                var d = y.traceSceneManager.createTraceExt(s, e, function(t) {
                    a.removeFish(t)
                }, i, n, o);
                if (o)
                    for (r = 0; r < d.length; r++) {
                        var f = d[r],
                            p = 0 == f.totalDuration() ? 1 : this.getTraceProgress(f, o);
                        f.progress(p < 1 ? p : 1), f.play()
                    }
            }, t.prototype.sendFishOne = function(t, e, i, n) {
                var o = t.kind;
                o == d.FishKind.Dragon ? this.sendDragon(t, e, i, n) : o == d.FishKind.GhostShip ? this.sendBigEffectFish(t, e, i) : d.FishUtils.isAniFish(o) ? this.sendAniFish(t, e, i) : this.sendRegularFish(t, e, i), d.FishUtils.isBigEffectFish(o) && this.curSceneBossCount++
            }, t.prototype.sendRegularFish = function(t, e, i) {
                var n = this,
                    o = this.createFish(t.id, t.kind);
                if (d.FishUtils.isSpecialFish(o.realKind) && o.translate(e.points[0]), o.trace = l.traceManager.trace(o, e.type, function() {
                        n.removeFish(o)
                    }, e.points), i && this.restoreTrace(o, i), o.realKind == d.FishKind.GoldenToad) {
                    var a = L.fishIntroManager.getFishIntro();
                    T.specialManager.addEffectIntro(a), a.showIntro(t.kind), A.default.playGoldenToadAppear(), A.default.playGoldentoadMove()
                }
            }, t.prototype.sendDragon = function(t, e, i, n) {
                var o = this,
                    a = this.createFish(t.id, t.kind);
                if (a.setCreateTime(n), a.initMoveOut(e.points[0], function() {
                        return o.removeFish(a)
                    }, function() {
                        o.lockInfo.fish == a && (o.lockInfo.fish.lock = !1, o.lockInfo.fish = null, o.toolLayer.setAimFish(!1)), o.autoLockInfo.fish == a && (o.autoLockInfo.fish.lock = !1, o.autoLockInfo.fish = null)
                    }), i);
                else if (this.curSceneBossCount <= 0) {
                    var s = C.bigFishIntroManager.getBigFishIntro();
                    T.specialManager.addEffectIntro(s), s.showDragonIntro()
                }
            }, t.prototype.sendAniFish = function(t, e, i) {
                var n = this,
                    o = this.createFish(t.id, t.kind),
                    a = e.points,
                    s = e.type;
                if (o.translate(a[0]), o.trace = l.traceManager.trace(o, s, function() {
                        n.removeFish(o)
                    }, a), i) this.restoreTrace(o, i);
                else if (d.FishUtils.isBigEffectFish(t.kind) && this.curSceneBossCount <= 0) {
                    var r = C.bigFishIntroManager.getBigFishIntro();
                    T.specialManager.addEffectIntro(r), r.showIntro(t.kind)
                } else if (t.kind == d.FishKind.EclipticCrab) {
                    r = L.fishIntroManager.getFishIntro();
                    T.specialManager.addEffectIntro(r), r.showIntro(t.kind)
                }
                switch (!0) {
                    case t.kind == d.FishKind.EclipticCrab:
                        A.default.playEclipticCrabAppear();
                        break;
                    case t.kind == d.FishKind.DragonWheel:
                        A.default.playDragonWheelAppear();
                        break;
                    case t.kind == d.FishKind.DragonKing:
                        A.default.playDragonKingIntro(o.trace.totalDuration(), o.trace.progress())
                }
            }, t.prototype.sendBigEffectFish = function(t, e, i) {
                var n = this,
                    o = this.createFish(t.id, t.kind);
                if (o.translate(e.points[0]), o.trace = l.traceManager.trace(o, e.type, function() {
                        n.removeFish(o)
                    }, e.points), i) this.restoreTrace(o, i);
                else if (d.FishUtils.isBigEffectFish(t.kind) && this.curSceneBossCount <= 0) {
                    var a = C.bigFishIntroManager.getBigFishIntro();
                    T.specialManager.addEffectIntro(a), a.showIntro(t.kind)
                }
            }, t.prototype.createFish = function(t, e) {
                var i = this,
                    n = e < d.FishKind.FireStorm ? a.default[e] : a.default[e - 78],
                    o = null;
                return (o = e == d.FishKind.Dragon ? this.poolDragon.create(function() {
                    return new E.default(t, n)
                }) : d.FishUtils.isAniFish(e) ? this.poolAniFish.create(function() {
                    return new M.default(t, n)
                }) : d.FishUtils.isBigEffectFish(e) ? this.poolBigEffectFish.create(function() {
                    return new P.default(t, n)
                }) : this.poolFish.create(function() {
                    return new r.default(t, n)
                })).reset(t, e, n), this.addFishToContainer(o), this.inFireStorm() && d.FishUtils.isSpecialFish(o.realKind) && o.realKind != d.FishKind.FireStorm && !d.FishUtils.isBigEffectFish(o.realKind) && o.allowCatch(!1), o.interactive = !0, o.on("pointerdown", function(t) {
                    if (!i.isMultiTouch(t))
                        if (!i.isLightned || i.inFireStorm() || i.specialTag != T.SpecialTag.None) {
                            if (!o.catched && (!i.inFireStorm() || !d.FishUtils.isSpecialFish(o.realKind) || o.realKind == d.FishKind.FireStorm || d.FishUtils.isBigEffectFish(o.realKind)) && i.specialTag == T.SpecialTag.None) {
                                var e = (new Date).getTime(),
                                    n = e - i.lastFishTapTime < 300;
                                (o.realKind == d.FishKind.Dragon || u.default.checkInScreen(o.position, -1 * o.radius)) && (n ? (i.toolLayer.activeAim(!0), i.lastFishTapTime = 0) : i.lastFishTapTime = e, i.lockFish(o))
                            }
                        } else {
                            var a = t.data.getLocalPosition(i.fishContainer);
                            i.lightnPosition = a
                        }
                }), o.on("pointermove", function(t) {
                    if (!i.isMultiTouch(t) && i.isLightned && i.lightnPosition) {
                        var e = t.data.getLocalPosition(i.fishContainer);
                        i.lightnPosition = e
                    }
                }), o
            }, t.prototype.lightningFish = function(t) {
                var e = this;
                if (o.default.betData.currentDomination > o.default.acct.balance) return this.menu.setEnable(!0), void O.default.showError(11101, !0);
                var i = 0;
                this.lightLastTime && (i = (new Date).getTime() - this.lightLastTime > 1e3 / 6 ? 0 : 1e3 / 6 - (new Date).getTime() + this.lightLastTime), this.lightnDelayTween || (this.lightnDelayTween = setTimeout(function() {
                    e.lightLastTime = (new Date).getTime(), e.lightnDelayTween = null;
                    var i = e.fishMap[t.id];
                    if (i && (!i || !i.catched)) {
                        var n = o.default.betData.currentDomination;
                        e.batteryContainer.setBalanceDiff(0 - n), e.onLightnFire(n, t)
                    }
                }, i))
            }, t.prototype.sendFishGroup = function(t, e, i) {
                for (var n, o, a = this, s = [], r = 0; r < t.length; r++) {
                    var h = t[r];
                    if (h) {
                        n || (n = h.kind);
                        var l = this.createFish(h.id, h.kind);
                        s.push(l)
                    } else s.push(null)
                }
                0 == n ? o = f.TraceGroupMode.MODE1 : 1 == n ? o = f.TraceGroupMode.MODE2 : 2 == n ? o = f.TraceGroupMode.MODE3 : n == d.FishKind.EclipticCrab && (o = f.TraceGroupMode.MODE4), n == d.FishKind.EclipticCrab && A.default.playEclipticCrabAppear();
                var c = e.type,
                    u = f.traceGroupManager.createTrace(s, o, c, function(t) {
                        a.removeFish(t)
                    }, e.points);
                if (!i) {
                    var p = L.fishIntroManager.getFishIntro();
                    return T.specialManager.addEffectIntro(p), void p.showIntro(t[0].kind)
                }
                if (u) this.restoreTraceGroup(s, u, i);
                else
                    for (var y = 0, g = s; y < g.length; y++) {
                        l = g[y];
                        this.restoreTrace(l, i)
                    }
            }, t.prototype.getTraceProgress = function(t, e) {
                if (!t) return 0;
                var i = Date.now() + o.default.serverTimeDiff - u.default.formatDateStrWithMS(e).getTime();
                return (i = (i += u.default.getTimeZoneMillDiff(o.default.serverTimeZone)) < 0 ? 0 : i) / (1e3 * t.totalDuration())
            }, t.prototype.restoreTrace = function(t, e, i) {
                if (t) {
                    var n = t.trace,
                        o = this.getTraceProgress(n, e),
                        a = i == y.TraceSceneMode.MODE20;
                    o < 1 || a ? (o = a ? 0 : o, n.progress(o), n.play()) : this.removeFish(t)
                }
            }, t.prototype.restoreTraceGroup = function(t, e, i) {
                var n = this.getTraceProgress(e, i);
                if (n < 1) e.progress(n), e.play();
                else {
                    e.kill();
                    for (var o = 0, a = t; o < a.length; o++) {
                        var s = a[o];
                        s && (s.trace2 = null, this.removeFish(s))
                    }
                }
            }, t.prototype.restoreFish = function() {
                var t = o.default.deskInfo.traceMessages,
                    e = o.default.deskInfo.groupMessages,
                    i = o.default.deskInfo.groupExtMessages;
                if (t)
                    for (var n = 0, a = t; n < a.length; n++) {
                        var s = a[n],
                            r = s.fishes;
                        if (1 == r.length && this.sendFishOne(r[0], s.trace, this.resetCreateTime(s.createTime, r[0].effectMills), this.resetCreateTime(s.createTime, r[0].effectMills)), r.length > 1) {
                            for (var h = void 0, l = 0, c = r; l < c.length; l++) {
                                var u = c[l];
                                u && (h = u)
                            }
                            this.sendFishGroup(r, s.trace, this.resetCreateTime(s.createTime, h.effectMills))
                        }
                    }
                if (e)
                    for (var d = 0, f = e; d < f.length; d++) {
                        var p = f[d];
                        this.sendFishScene(p.fishes, p.groupId, this.resetCreateTime(p.createTime, p.fishes[0].effectMills))
                    }
                if (i)
                    for (var y = 0, g = i; y < g.length; y++) {
                        p = g[y];
                        this.sendFishExtScene(p.fishes, p.groupId, p.intervalTime, p.speed, p.createTime)
                    }
            }, t.prototype.resetCreateTime = function(t, e) {
                if (!e) return t;
                var i = new Date(u.default.formatDateStrWithMS(t).getTime() + e);
                return i.getFullYear() + "/" + (i.getMonth() + 1) + "/" + i.getDate() + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds()
            }, t.prototype.addFishToContainer = function(t) {
                var e, i = this.fishList,
                    n = i[0],
                    o = i[1],
                    a = i[2],
                    s = i[3];
                switch (n = n || [], o = o || [], a = a || [], s = s || [], t.type) {
                    case d.FishType.Small:
                        e = n;
                        break;
                    case d.FishType.Medium:
                        e = o;
                        break;
                    case d.FishType.Large:
                        e = a;
                        break;
                    case d.FishType.Special:
                        e = s
                }
                this.fishMap[t.id], e.push(t), this.fishList[t.type] = e, this.fishMap[t.id] = t;
                var r = this.fishLevel[t.level];
                r = void 0 == r ? 0 : r, this.fishLevel[t.level] = r + 1, r = 0;
                for (var h = 0; h < t.level; h++) r += this.fishLevel[h] || 0;
                this.fishContainer.addChildAt(t, r)
            }, t.prototype.removeFish = function(t) {
                var e = this.fishList[t.type];
                if (this.fishMap[t.id]) {
                    for (var i = 0; i < e.length; i++) {
                        if (e[i] == t) {
                            e.splice(i, 1);
                            break
                        }
                    }
                    var n = this.fishLevel[t.level];
                    n = void 0 == n ? 0 : n, this.fishLevel[t.level] = n - 1, this.fishContainer.removeChild(t), this.fishMap[t.id] = null, delete this.fishMap[t.id], this.lockInfo.fish == t && (this.lockInfo.fish = null, this.toolLayer.setAimFish(!1)), this.autoLockInfo.fish == t && (this.autoLockInfo.fish = null), t.realKind == d.FishKind.Dragon ? this.poolDragon.delete(t) : d.FishUtils.isAniFish(t.realKind) ? this.poolAniFish.delete(t) : d.FishUtils.isBigEffectFish(t.realKind) ? this.poolBigEffectFish.delete(t) : (this.poolFish.delete(t), t.realKind == d.FishKind.GoldenToad && A.default.stopGoldentoadMove()), t.clear()
                }
            }, t.prototype.lockFish = function(t) {
                var e = this.lockInfo;
                e.locked && e.fish != t && (e.fish && (e.fish.lock = !1), t.lock = e.locked, e.fish = t, this.toolLayer.setAimFish(!0, t.realKind), this.poolBullet.aliveList.forEach(function(t) {
                    return t.isLock = !1
                }))
            }, t.prototype.autoLockFish = function(t) {
                var e = this.autoLockInfo;
                e.locked && e.fish != t && (e.fish && (e.fish.autoLock = !1), t.autoLock = e.locked, e.fish = t, this.poolBullet.aliveList.forEach(function(t) {
                    return t.isLock = !1
                }))
            }, t.prototype.doShot = function(t, e) {
                var i = this;
                if (void 0 === e && (e = !1), !this.inRedPacket()) {
                    if (this.firestormTag > T.SpecialTag.None) return this.doShotSpecial(t, -1);
                    if (this.isAllowShot && !(this.bulletCount >= this.bulletMax)) {
                        var n = o.default.betData,
                            a = this.isDouble ? 2 : 1;
                        if (n.currentDomination * a > o.default.acct.balance) return this.menu.setEnable(!0), e || O.default.showError(11101, !0), e && !this.hasShowMessageInAutoLock && (this.hasShowMessageInAutoLock = !0, O.default.showError(11101, !0)), void(this.lockInfo.fish ? (this.lockInfo.unlockFish(), this.toolLayer.setAimFish(!1)) : this.autoLockInfo.fish && (this.autoLockInfo.unlockAutoFish(), this.closeAuto()));
                        this.hasShowMessageInAutoLock = !1, this.batteryContainer.shot(t, function(t, e, a, s) {
                            var r = o.default.isView,
                                l = n.currentDomTypeIndex;
                            e = u.default.getAngleForView(e, r);
                            for (var c = o.default.betData.currentDomination, d = [], f = 0, p = t; f < p.length; f++) {
                                var y = p[f];
                                y = u.default.getPointForView(y, r);
                                var g = o.default.deskInfo.tranId + "_" + i.bulletId;
                                d.push(g);
                                var m = i.poolBullet.create(function() {
                                    return new h.Bullet
                                });
                                m.reset(g, l, !0, y, e), m.isLock = !!i.lockInfo.fish || !!i.autoLockInfo.fish, m.totalBet = c, m.move(), i.bulletContainer.addChild(m), i.bulletCount++, i.batteryContainer.setBalanceDiff(0 - m.totalBet)
                            }
                            i.menu.setEnable(!1), 1 == t.length ? i.onFire(e, d, c) : 2 == t.length && i.onMultiFire(e, d, 2 * c)
                        })
                    }
                }
            }, t.prototype.doShotSpecial = function(t, e) {
                var i = this;
                if (void 0 === e && (e = -1), this.firestormTag == T.SpecialTag.Ready) {
                    var n = T.specialManager.getEffect(d.FishKind.FireStorm);
                    n.fishKind;
                    n.fishKind == d.FishKind.FireStorm && (e < 0 && n.isFinishShot() || this.batteryContainer.shot(t, function(t, e, a, s) {
                        var r = t[0],
                            h = o.default.isView;
                        e = u.default.getAngleForView(e, h), r = u.default.getPointForView(r, h);
                        var l = o.default.deskInfo.tranId + "_" + i.bulletId,
                            c = n.totalBet;
                        i.onSweepFire(e, n.fishId, l, c);
                        var d = i.createSpecialBulletFire(r, e, a, l);
                        i.bulletContainer.addChild(d)
                    }))
                }
            }, t.prototype.createSpecialBulletFire = function(t, e, i, n, o) {
                void 0 === o && (o = -1);
                var a = this.poolBullet.create(function() {
                        return new h.Bullet(n)
                    }),
                    s = T.specialManager.getEffect(d.FishKind.FireStorm, o);
                return s && s.fishKind == d.FishKind.FireStorm && s.updateFreeCount(-1), a.reset(n, i, o < 0, t, e), o < 0 && (a.isLock = !!this.lockInfo.fish || !!this.autoLockInfo.fish), a.isSpecial = !0, a.move(), a
            }, t.prototype.updateFishAllowState = function() {
                var t = [];
                this.fishList.forEach(function(e) {
                    return e && (t = t.concat(e))
                }), this.inFireStorm() ? t.forEach(function(t) {
                    d.FishUtils.isSpecialFish(t.realKind) && t.realKind != d.FishKind.FireStorm && !d.FishUtils.isBigEffectFish(t.realKind) && t.allowCatch(!1)
                }) : t.forEach(function(t) {
                    d.FishUtils.isSpecialFish(t.realKind) && t.realKind != d.FishKind.FireStorm && !d.FishUtils.isBigEffectFish(t.realKind) && t.allowCatch(!0)
                })
            }, t.prototype.onLightnFire = function(t, e) {
                var i = this,
                    n = new m.RequestFire;
                n.angle = Math.PI / 2, n.totalBet = t, n.domination = t, n.bulletId = o.default.deskInfo.tranId + "_" + this.bulletId, n.type = 1, n.lockFishId = e.id, o.default.service.fire(n, function(t) {
                    i.catchLightnFish(n.bulletId, n.totalBet, e)
                }, function(t) {
                    return !0
                }), this.batteryContainer.setMyLightnAngle(), A.default.playFishLightHurt(), this.playLastFireTime[o.default.deskInfo.chairId] = (new Date).getTime()
            }, t.prototype.onFire = function(t, e, i) {
                var n = new m.RequestFire;
                n.angle = t, n.totalBet = i, n.domination = i, n.bulletId = e[0], this.lockInfo.fish ? n.lockFishId = this.lockInfo.fish.id : this.autoLockInfo.fish && (n.lockFishId = this.autoLockInfo.fish.id), o.default.service.fire(n, function(t) {}, function(t) {
                    return !0
                }), this.playLastFireTime[o.default.deskInfo.chairId] = (new Date).getTime()
            }, t.prototype.onMultiFire = function(t, e, i) {
                var n = new I.RequestMultiFire;
                n.angle = t, n.bulletIds = e, n.totalBet = i, this.lockInfo.fish ? n.lockFishId = this.lockInfo.fish.id : this.autoLockInfo.fish && (n.lockFishId = this.autoLockInfo.fish.id), o.default.service.multiFire(n, function(t) {}, function(t) {
                    return !0
                }), this.playLastFireTime[o.default.deskInfo.chairId] = (new Date).getTime()
            }, t.prototype.onLightnShoot = function(t, e, i, n, a) {
                setTimeout(function() {
                    return (s = new w.RequestShot).bulletId = t, s.fishId = i, s.kindId = n, s.domination = e, s.type = 1, void o.default.service.shot(s, function(t) {
                        t.endTime && (t.endTime = t.endTime.replace(/[-]/g, "/")), a(t)
                    }, function(t) {
                        return !0
                    });
                    var s
                }, 5)
            }, t.prototype.onShoot = function(t, e, i, n) {
                ! function(t, e, i, n) {
                    setTimeout(function() {
                        return function(t, e, i, n) {
                            var a = t,
                                s = new w.RequestShot;
                            s.bulletId = a.id, s.fishId = e, s.kindId = i, s.domination = a.totalBet;
                            var r = T.specialManager.getEffect(d.FishKind.FireStorm);
                            r && a.isSpecial && (s.domination = r.totalBet, s.refFishId = r.fishId), o.default.service.shot(s, function(t) {
                                t.endTime && (t.endTime = t.endTime.replace(/[-]/g, "/")), n(t)
                            }, function(t) {
                                return !0
                            })
                        }(t, e, i, n)
                    }, 5)
                }({
                    id: t.id,
                    isSpecial: t.isSpecial,
                    totalBet: t.totalBet
                }, e, i, n)
            }, t.prototype.onSweep = function(t, e, i, n) {
                var a = new x.RequestSweep;
                a.fishId = t, a.kindId = e, a.fishIds = i, o.default.service.sweep(a, function(t) {
                    n(t.totalWin, t.balance, t.fishes || [], t.status)
                }, function(t) {
                    return !0
                })
            }, t.prototype.onSweepFire = function(t, e, i, n) {
                var a = new v.RequestSweepFire;
                a.fishId = e, a.angle = t, a.bulletId = i, a.domination = n;
                var s = T.specialManager.getEffect(d.FishKind.FireStorm);
                a.domination = s.totalBet, this.lockInfo.fish ? a.lockFishId = this.lockInfo.fish.id : this.autoLockInfo.fish && (a.lockFishId = this.autoLockInfo.fish.id), s.isFinishShot() || o.default.service.sweepFire(a, function(t) {}, function(t) {
                    return !0
                })
            }, t.prototype.onUpdate = function(t) {
                this.updateCounter += t, this.lockInfo.fish || this.autoLockInfo.fish ? Math.floor(this.updateCounter) % this.throttle == 0 && this.checkFishCatchLock() : Math.floor(this.updateCounter) % this.throttle == 0 && this.checkFishCatch(), this.isLightned && this.checkFishLightnCatch(), Math.floor(this.updateCounter / 10) > this.lastUpdateCounter1 && (this.lastUpdateCounter1 = Math.floor(this.updateCounter / 10), this.shotFishAuto(), this.updateFishLock(), this.updateFishAutoLock(), this.shotFishLocked(), this.shotFishAutoLocked()), Math.floor(this.updateCounter / 60) > this.lastUpdateCounter2 && (this.lastUpdateCounter2 = Math.floor(this.updateCounter / 60), this.updatePlayerBalance(), this.updateFishAllowState(), this.checkAutoSelect())
            }, t.prototype.checkAutoSelect = function() {
                this.inRedPacket() || this.checkCanShot() && this.isAutoLock && !this.autoLockInfo.fish && this.autoSelectFish(this.autoLockInfo.arr)
            }, t.prototype.checkCanShot = function() {
                return !(this.specialTag > T.SpecialTag.None && !this.inFireStorm() || this.firestormTag > T.SpecialTag.None && this.firestormTag != T.SpecialTag.Ready)
            }, t.prototype.updatePlayerBalance = function() {
                for (var t = this, e = function(e) {
                        var n = i.playLastFireTime[e],
                            a = e == o.default.deskInfo.chairId,
                            s = T.specialManager.hasEffect(a ? -1 : e);
                        n && n + i.checkPeriod < (new Date).getTime() && !s && (i.playLastFireTime[e] = null, o.default.service.playerBalance(function(i) {
                            i.playerInfos && i.playerInfos.forEach(function(i) {
                                i.chairId == e && t.batteryContainer.setBalance(i.balance, a ? -1 : e)
                            })
                        }, function(t) {
                            return !0
                        }))
                    }, i = this, n = 1; n < this.playLastFireTime.length; n++) e(n)
            }, t.prototype.checkFishLightnCatch = function() {
                if (this.lightnPosition && this.specialTag == T.SpecialTag.None && !this.inFireStorm()) {
                    var t = {
                            x: this.lightnPosition.x - 1,
                            y: this.lightnPosition.y - 1,
                            width: 2,
                            height: 2
                        },
                        e = u.default.clone(t);
                    e.width = e.width * g.default.scale, e.height = e.height * g.default.scale;
                    var i = [{
                            rect: e,
                            rotation: 0
                        }],
                        n = [];
                    this.fishList.forEach(function(t) {
                        return t && (n = n.concat(t))
                    });
                    for (var o = n.length, a = [], s = 0; s < o; s++) {
                        var r = n[o - s - 1];
                        if (!r.catched) u.default.checkRectHit(i, r.getRects()) && a.push(r)
                    }
                    a.length <= 0 || (1 != a.length ? (a.sort(function(t, e) {
                        return e.level - t.level
                    }), a.filter(function(t) {
                        return t.level == a[0].level
                    }), a.length <= 0 || (1 != a.length ? (a.sort(function(t, e) {
                        return e.parent.getChildIndex(e) - t.parent.getChildIndex(t)
                    }), this.lightningFish(a[0])) : this.lightningFish(a[0]))) : this.lightningFish(a[0]))
                }
            }, t.prototype.checkFishCatch = function(t) {
                var e = [];
                this.fishList.forEach(function(t) {
                    return t && (e = e.concat(t))
                });
                for (var i = 0, n = t = t || this.poolBullet.aliveList; i < n.length; i++)
                    for (var o = n[i], a = e.length, s = 0; s < a && o.enable; s++) {
                        var r = e[a - s - 1];
                        if (!r.catched && (o.checkInScreen() && !(o.kind == d.FishKind.FireStorm && [d.FishKind.ThunderHammer, d.FishKind.AzureStone, d.FishKind.DragonWheel].indexOf(r.realKind) > -1)))
                            if (o.isMain || !o.lockFishId) {
                                var h = u.default.checkRectHit(o.getRects(), r.getRects());
                                if (h) {
                                    this.catchFish(o, r, h);
                                    break
                                }
                            } else {
                                var l = this.getOtherLockFish(o.lockFishId);
                                l ? this.checkOtherLockFish(o, l) : o.lockFishId = 0
                            }
                    }
            }, t.prototype.checkFishCatchLock = function() {
                var t = this.lockInfo,
                    e = this.autoLockInfo,
                    i = t.fish || e.fish;
                if (i) {
                    for (var n = 0, o = this.poolBullet.aliveList; n < o.length; n++) {
                        var a = o[n];
                        if (a.isMain && a.isLock) {
                            if (!a.checkInScreen()) continue;
                            var s = i.realKind == d.FishKind.Dragon ? i.getNewLockPos() : i.position,
                                r = u.default.getAngle(a.position, s);
                            a.rotation = r + Math.PI / 2;
                            var h = u.default.checkRectHit(a.getRects(), i.getRects());
                            if (h) {
                                this.catchFish(a, i, h);
                                break
                            }
                        } else if (a.isMain && !a.isLock) this.checkFishCatch([a]);
                        else if (a.lockFishId && this.getOtherLockFish(a.lockFishId)) {
                            var l = this.getOtherLockFish(a.lockFishId);
                            l ? this.checkOtherLockFish(a, l) : a.lockFishId = 0
                        } else Math.floor(this.updateCounter / 5) > this.lastUpdateCounter3 && this.checkFishCatch([a])
                    }
                    Math.floor(this.updateCounter / 5) > this.lastUpdateCounter3 && (this.lastUpdateCounter3 = Math.floor(this.updateCounter / 5))
                }
            }, t.prototype.getOtherLockFish = function(t) {
                var e = [];
                this.fishList.forEach(function(t) {
                    return t && (e = e.concat(t))
                });
                for (var i = 0, n = e.length; i < n; i++) {
                    var o = e[n - i - 1];
                    if (o.id == t) return o
                }
            }, t.prototype.checkOtherLockFish = function(t, e) {
                if (e.catched) t.lockFishId = 0;
                else if (t.checkInScreen()) {
                    var i = e.realKind == d.FishKind.Dragon ? e.getNewLockPos() : e.position,
                        n = u.default.getAngle(t.position, i);
                    if (t.rotation = n + Math.PI / 2, u.default.checkInScreen(i, -1 * e.radius)) {
                        var o = u.default.checkRectHit(t.getRects(), e.getRects());
                        o && (this.catchFish(t, e, o), t.lockFishId = 0)
                    } else t.lockFishId = 0
                }
            }, t.prototype.shotFishLocked = function() {
                if (this.lockInfo.locked && this.lockInfo.fish) {
                    var t = new c.Point(this.lockInfo.fish.x, this.lockInfo.fish.y);
                    this.lockInfo.fish.realKind == d.FishKind.Dragon && (t = this.lockInfo.fish.getNewLockPos()), this.doShot(t, !0)
                }
            }, t.prototype.shotFishAutoLocked = function() {
                if (this.autoLockInfo.locked && this.autoLockInfo.fish && this.checkCanShot) {
                    var t = this.autoLockInfo,
                        e = new c.Point(t.fish.x, t.fish.y);
                    t.fish.realKind == d.FishKind.Dragon && (e = t.fish.getNewLockPos()), this.doShot(e)
                }
            }, t.prototype.updateFishLock = function() {
                var t = this.lockInfo,
                    e = t.fish;
                if (t.locked && e) {
                    var i = new c.Point(e.x, e.y),
                        n = e.realKind,
                        o = e.id;
                    e.realKind == d.FishKind.Dragon && (i = e.getNewLockPos()), (i.x > g.default.width + e.radius || i.y > g.default.height + e.radius || i.x < 0 - e.radius || i.y < 0 - e.radius) && (t.fish.lock = !1, t.fish = null, this.toolLayer.setAimFish(!1), this.lockSameKindFish(n, o))
                }
            }, t.prototype.updateFishAutoLock = function() {
                var t = this.autoLockInfo,
                    e = t.fish,
                    i = t.arr;
                if (t.locked && e) {
                    var n = new c.Point(e.x, e.y);
                    e.realKind == d.FishKind.Dragon && (n = e.getNewLockPos()), (n.x > g.default.width + e.radius || n.y > g.default.height + e.radius || n.x < 0 - e.radius || n.y < 0 - e.radius) && (t.fish.autoLock = !1, t.fish = null, this.toolLayer.setAimFish(!1), this.autoSelectFish(i))
                }
            }, t.prototype.shotFishAuto = function() {
                var t = this.specialTag == T.SpecialTag.None || this.inFireStorm();
                !this.lockInfo.fish && t && (this.isAuto && this.inAutoShotting || this.isInPress || this.isSpaceAuto && (!this.isLightned || this.isLightned && this.inFireStorm())) && this.doShot(this.evtPoint, !0)
            }, t.prototype.inFireStorm = function() {
                var t = T.specialManager.getEffect(d.FishKind.FireStorm);
                return !(!t || t.fishKind != d.FishKind.FireStorm || this.firestormTag != T.SpecialTag.Ready && this.firestormTag != T.SpecialTag.Intro || t.isFinishShot())
            }, t.prototype.inRedPacket = function() {
                return T.specialManager.getEffect(d.FishKind.Redpacket)
            }, t.prototype.catchLightnFish = function(t, e, i) {
                var n = this;
                i && (i.lightnHurt(), this.lightnContainer.show(-1), this.onLightnShoot(t, e, i.id, i.realKind, function(e) {
                    var o = e.totalWin,
                        a = (e.balance, e.fishes),
                        s = e.freeInfo,
                        r = e.successBet,
                        h = e.endTime,
                        l = e.type;
                    if (a)
                        if (n.fishMap[a[0].id]) {
                            if (d.FishUtils.isSpecialFish(a[0].kind)) return n.catchFishSpeAfter({
                                fish: i,
                                totalBet: r,
                                totalWin: o,
                                freeInfo: s,
                                odds: a[0].odds,
                                endTime: h,
                                isLightn: 1 == l
                            });
                            o > 0 && n.catchFishAfter({
                                fish: i,
                                win: o,
                                chairId: -1,
                                soundSinglePlay: !0,
                                isLightn: 1 == l
                            })
                        } else {
                            if (a[0].kind == d.FishKind.Redpacket) {
                                var c = new D.default(a[0].id, a[0].kind);
                                return n.catchFishSpeAfter({
                                    fish: c,
                                    totalBet: r,
                                    totalWin: o,
                                    freeInfo: s,
                                    odds: a[0].odds,
                                    endTime: h,
                                    ext: a[0].ext,
                                    ext2: [t, r],
                                    type: l
                                })
                            }
                            if (d.FishUtils.isSpecialFish(a[0].kind)) return;
                            o > 0 && n.batteryContainer.setBalanceDiff(o, -1)
                        }
                }), this.setMenuEnable())
            }, t.prototype.catchFish = function(t, e, i) {
                var n = this;
                if (t.isSpecial) return this.catchFishSpecail(t, e, i);
                var o = t.isMain,
                    a = this.poolNet.create(function() {
                        return new p.default(function(t) {
                            t.parent && t.parent.removeChild(t), n.poolNet.delete(t)
                        })
                    }),
                    s = t.getHitPoint(i);
                a.setScale(!1), a.playAni(o), a.position.set(s.x, s.y), this.bulletContainer.addChild(a), t.clear(), t.parent.removeChild(t), this.poolBullet.delete(t), o && (e.hurt(), this.bulletCount--, this.onShoot(t, e.id, e.realKind, function(i) {
                    var o = i.totalWin,
                        a = (i.balance, i.fishes),
                        s = i.freeInfo,
                        r = i.successBet,
                        h = i.endTime;
                    if (a)
                        if (n.fishMap[a[0].id]) {
                            if (d.FishUtils.isSpecialFish(a[0].kind)) return n.catchFishSpeAfter({
                                fish: e,
                                totalBet: r,
                                totalWin: o,
                                freeInfo: s,
                                odds: a[0].odds,
                                endTime: h
                            });
                            o > 0 && n.catchFishAfter({
                                fish: e,
                                win: o,
                                chairId: -1,
                                soundSinglePlay: !0
                            })
                        } else {
                            if (a[0].kind == d.FishKind.Redpacket) {
                                var l = new D.default(a[0].id, a[0].kind);
                                return n.catchFishSpeAfter({
                                    fish: l,
                                    totalBet: r,
                                    totalWin: o,
                                    freeInfo: s,
                                    odds: a[0].odds,
                                    endTime: h,
                                    ext: a[0].ext,
                                    ext2: [t.id, t.totalBet]
                                })
                            }
                            if (d.FishUtils.isSpecialFish(a[0].kind)) return;
                            o > 0 && n.batteryContainer.setBalanceDiff(o, -1)
                        }
                }), this.setMenuEnable())
            }, t.prototype.setMenuEnable = function() {
                this.menu.setEnable(!(this.bulletCount > 0 || this.specialTag !== T.SpecialTag.None || this.firestormTag !== T.SpecialTag.None || this.isAuto && this.inAutoShotting || this.isInPress || this.isSpaceAuto))
            }, t.prototype.catchFishSpecail = function(t, e, i) {
                t.isMain;
                if (t.kind == d.FishKind.FireStorm) return this.catchFishSpecailFireStorm(t, e, i)
            }, t.prototype.catchFishSpecailFireStorm = function(t, e, i) {
                var n = this,
                    o = t.isMain,
                    a = this.poolNet.create(function() {
                        return new p.default(function(t) {
                            t.parent && t.parent.removeChild(t), n.poolNet.delete(t)
                        })
                    }),
                    s = t.getHitPoint(i);
                a.setScale(!0), a.playAni(o), a.position.set(s.x, s.y), this.bulletContainer.addChild(a), t.clear(), t.parent.removeChild(t), this.poolBullet.delete(t), o && (e.hurt(), this.onShoot(t, e.id, e.realKind, function(i) {
                    var o = i.totalWin,
                        a = (i.balance, i.fishes),
                        s = i.freeInfo,
                        r = i.successBet;
                    if (o > 0)
                        if (n.fishMap[a[0].id]) e.inSpecialCathed = !0, n.catchFishAfter({
                            fish: e,
                            win: o,
                            chairId: -1
                        });
                        else {
                            if (a[0].kind == d.FishKind.Redpacket) {
                                var h = new D.default(a[0].id, a[0].kind);
                                return n.catchFishSpeAfter({
                                    fish: h,
                                    totalBet: r,
                                    totalWin: o,
                                    freeInfo: s,
                                    odds: a[0].odds,
                                    ext: a[0].ext,
                                    ext2: [t.id, t.totalBet]
                                })
                            }
                            n.batteryContainer.setBalanceDiff(o)
                        }
                    else a && (d.FishUtils.isBigEffectFish(a[0].kind) || a[0].kind == d.FishKind.FireStorm) && n.fishMap[a[0].id] && n.catchFishSpeAfter({
                        fish: e,
                        totalBet: t.totalBet,
                        totalWin: o,
                        freeInfo: s,
                        odds: a[0].odds
                    })
                }))
            }, t.prototype.catchSweepFishAfter = function(t, e, i, n, o, a) {
                var s = this;
                void 0 === n && (n = !0), void 0 === o && (o = !1);
                var r = t.lock,
                    h = t.autoLock,
                    l = d.FishKind.DragonKing == t.realKind;
                !l && t.catch(!1, function() {
                    s.removeFish(t)
                }), r && !l ? (this.lockInfo.fish = null, t.lock = !1, this.toolLayer.setAimFish(!1), this.lockSameKindFish(t.realKind, t.id)) : h && (this.autoLockInfo.fish = null, t.autoLock = !1, !this.inRedPacket() && this.autoSelectFish(this.autoLockInfo.arr)), this.takeSweepWin(t, e, i, a)
            }, t.prototype.catchFishAfter = function(t) {
                var e = this,
                    i = t.fish,
                    n = t.win,
                    o = t.chairId,
                    a = !!t.soundSinglePlay,
                    s = !!t.catchInSweep,
                    r = !!t.isLightn,
                    h = i.lock,
                    l = i.autoLock,
                    c = d.FishKind.DragonKing == i.realKind;
                !c && i.catch(r, function() {
                    e.removeFish(i)
                }), h && !c ? (this.lockInfo.fish = null, i.lock = !1, this.toolLayer.setAimFish(!1), this.lockSameKindFish(i.realKind, i.id)) : l && (this.autoLockInfo.fish = null, i.autoLock = !1, !this.inRedPacket() && this.autoSelectFish(this.autoLockInfo.arr)), this.takeWin(i, n, o, a, s)
            }, t.prototype.cancelLightnFish = function() {
                this.isLightned && (this.toolLayer.activeThunderLock(!1), this.lightnPosition = null, this.lightn.setLightAble(!1), this.interactiveAllForLight(!0), this.isLightned = !1, this.lightn.hide(), this.lightnContainer.hideTips(-1))
            }, t.prototype.catchFishSpeAfter = function(t) {
                var e = this,
                    i = t.fish,
                    n = t.totalBet,
                    a = t.totalWin,
                    s = t.freeInfo,
                    r = void 0 == t.chairId ? -1 : t.chairId,
                    h = t.odds || 0,
                    l = t.endTime,
                    c = t.ext,
                    f = t.ext2,
                    p = !!t.isLightn;
                d.FishUtils.isBigEffectFish(i.realKind) && (this.curSceneBossCount = 0);
                var y = T.specialManager.getEffect(i.kind, r);
                if (y && y.fishKind == d.FishKind.FireStorm) return y.updateFreeCount(0, !0, s, h), i.catch(p, function() {
                    return e.removeFish(i)
                }), this.lockInfo.fish && (this.lockInfo.fish = null, i.lock = !1, this.toolLayer.setAimFish(!1)), this.autoLockInfo.fish && (this.autoLockInfo.fish = null, i.autoLock = !1, !this.inRedPacket() && this.autoSelectFish(this.autoLockInfo.arr)), void this.updateFishAllowState();
                var g = i.realKind;
                if (g == d.FishKind.AzureStone) {
                    var m = T.specialManager.getAnyIceEffect();
                    m && m.clear()
                } - 1 == r && this.autoLockInfo.fish && (this.autoLockInfo.fish = null, i.autoLock = !1);
                var w = {
                    scene: this.scene,
                    batteryContainer: this.batteryContainer,
                    winContainer: this.winContainer,
                    background: this.background,
                    fish: i,
                    fishKind: g,
                    fishId: i.id,
                    chairId: r,
                    totalBet: n,
                    totalWin: a,
                    odds: h,
                    freeInfo: s,
                    effectKind: g,
                    onIntro: function() {
                        e.sweepFishBomb(g), r < 0 && e.scene.quake(), r < 0 && i.realKind == d.FishKind.ThunderHammer && A.default.playThunderHammerEffect()
                    },
                    onRemoveFish: function() {
                        var t = w.fish,
                            i = !!e.autoLockInfo.fish;
                        t.del(function() {
                            e.removeFish(t)
                        }), r > -1 && e.isAutoLock && !e.autoLockInfo.fish && i && e.autoSelectFish(e.autoLockInfo.arr), t.realKind == d.FishKind.MonkeyKing && A.default.playMonkeyKindDead()
                    },
                    onCatch: function() {
                        var t = w.fish;
                        t.catch(p, function() {
                            e.removeFish(t)
                        }, r), r > -1 && e.isAutoLock && e.autoLockInfo.fish && e.autoLockInfo.fish.catched && e.autoSelectFish(e.autoLockInfo.arr)
                    },
                    onComplete: function() {
                        r < 0 && (y.fishKind != d.FishKind.AzureStone && (y.fishKind == d.FishKind.FireStorm ? e.firestormTag = T.SpecialTag.None : e.specialTag = T.SpecialTag.None, e.aim.setAimVisible(!0, e.evtPoint ? u.default.getPointForView(e.evtPoint, o.default.isView) : null), e.menu.setEnable(!(e.bulletCount > 0))), y.fishKind != d.FishKind.Redpacket && e.inRedPacket() || (e.isAutoLock && y.fishKind != d.FishKind.AzureStone && e.autoSelectFish(e.autoLockInfo.arr), e.rebackLockStyle(), y.fishKind == d.FishKind.FireStorm && e.toolLayer.activeForFirestorm(!0), e.isLightned && (e.lightn.show(), e.aim.hideEffectAim(), i.realKind != d.FishKind.AzureStone && e.lightnContainer.showTips(-1), e.pressStatusTimer && clearTimeout(e.pressStatusTimer), e.isInPress = !1), y.fishKind !== d.FishKind.AzureStone && e.batteryContainer.enableChangeGun())), T.specialManager.removeEffect(g, r)
                    }
                };
                switch (i.kind) {
                    case d.FishKind.FireStorm:
                        y = this.createSpecialFireStorm(w);
                        break;
                    case d.FishKind.ThunderHammer:
                    case d.FishKind.Redpacket:
                    case d.FishKind.DragonWheel:
                        y = T.specialManager.createEffect(w);
                        break;
                    case d.FishKind.AzureStone:
                        y = this.createAzureStoneEffect(w);
                        break;
                    case d.FishKind.Dragon:
                        this.multiBoomFishIds = [], y = this.createDragonEffect(w);
                        break;
                    case d.FishKind.MonkeyKing:
                        this.multiBoomFishIds = [], y = this.createMonkeyKingEffect(w);
                        break;
                    case d.FishKind.GhostShip:
                        y || (y = this.createGhostShipEffect(w))
                }
                if (r < 0 && (y.fishKind == d.FishKind.FireStorm ? this.firestormTag = T.SpecialTag.Intro : this.specialTag = T.SpecialTag.Intro, this.aim.setAimVisible(!1), this.menu.setEnable(!1), y.fishKind == d.FishKind.FireStorm && (this.isMyFireStromPreparing = !0), y.fishKind !== d.FishKind.AzureStone && this.batteryContainer.disableChangeGun()), i.realKind == d.FishKind.GhostShip) {
                    var x = a > 0;
                    y.introByType(x, a), !x && i.stay()
                } else i.stay(), y.intro(l, c, f), r < 0 && i.realKind == d.FishKind.DragonWheel && this.scene.quake();
                this.lockInfo.fish && (this.preLockFishInfo = [this.lockInfo.fish.realKind, this.lockInfo.fish.id]), r < 0 ? (this.lockInfo.unlockFish(), this.toolLayer.setAimFish(!1), i.realKind != d.FishKind.FireStorm && i.realKind != d.FishKind.AzureStone && this.removeLockStyle(), i.realKind == d.FishKind.FireStorm && this.toolLayer.activeForFirestorm(!1)) : (this.lockInfo.fish == i && (this.lockInfo.unlockFish(), this.toolLayer.setAimFish(!1)), this.autoLockInfo.fish == i && (this.autoLockInfo.unlockAutoFish(), this.autoSelectFish(this.autoLockInfo.arr))), r < 0 && this.isLightned && (this.lightnPosition = null, this.lightn.hide(), this.lightn.setLightAble(!1), this.interactiveAllForLight(!0), this.lightnContainer.hideTips(-1), i.realKind == d.FishKind.FireStorm && this.cancelLightnFish()), i.realKind == d.FishKind.AzureStone ? A.default.playAzureFreeze() : i.realKind == d.FishKind.ThunderHammer ? A.default.playThunderHammerDead() : i.realKind == d.FishKind.GhostShip ? A.default.speakGhostShipDead() : i.realKind == d.FishKind.FireStorm && A.default.playFirestormDead(), this.updateFishAllowState()
            }, t.prototype.interactiveAllForLight = function(t) {
                this.toolLayer.interactiveChildren = t, this.batteryContainer.interactiveMyBattery(t), this.menu.interactiveChildren = t
            }, Object.defineProperty(t.prototype, "dragonAniFishCount", {
                get: function() {
                    return this.dragonAniId++
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createAniDragon = function() {
                var t = a.default[25],
                    e = this.dragonAniFishCount,
                    i = this.poolDragon.create(function() {
                        return new E.default(e, t)
                    });
                return i.reset(e, d.FishKind.Dragon, t), i.speed = 1200, i.animationSpeed = .5, i.scale.set(1, -1), this.centerEffectContainer.addChild(i), i
            }, t.prototype.createDragonEffect = function(t) {
                var e = this;
                return T.specialManager.createEffect(n({}, t, {
                    centerEffectContainer: this.centerEffectContainer,
                    onIntro: function() {
                        t.chairId < 0 && e.scene.quake()
                    },
                    onShot: function() {
                        t.chairId < 0 && (e.sweepFishBomb(t.fishKind), e.scene.quake())
                    },
                    onEffectStart: function(t) {
                        t.points.forEach(function(t) {
                            e.createAniDragon()
                        })
                    }
                }))
            }, t.prototype.createAzureStoneEffect = function(t) {
                var e = this;
                return T.specialManager.createEffect(n({}, t, {
                    onPause: function(t) {
                        for (var i in e.nowFrozenFishIds = t, e.fishMap) {
                            var n = e.fishMap[i];
                            n && t.indexOf(n.id) > -1 && o.default.specialEffectKindIds.indexOf(n.kind) > -1 && n.pause()
                        }
                        A.default.playAzureDead()
                    },
                    onResume: function(t) {
                        for (var i in e.fishMap) {
                            var n = e.fishMap[i];
                            n && t.indexOf(n.id) > -1 && o.default.specialEffectKindIds.indexOf(n.kind) > -1 && n.resume()
                        }
                        e.nowFrozenFishIds = null
                    },
                    onCanShot: function() {
                        if (t.chairId < 0) {
                            if (e.inRedPacket()) return;
                            e.specialTag = T.SpecialTag.None, e.isAutoLock && e.autoSelectFish(e.autoLockInfo.arr), e.aim.setAimVisible(!0, e.evtPoint ? u.default.getPointForView(e.evtPoint, o.default.isView) : null), e.menu.setEnable(!(e.bulletCount > 0)), e.isLightned && (e.lightnContainer.showTips(-1), e.lightn.show(), e.aim.hideEffectAim())
                        }
                    }
                }))
            }, t.prototype.createMonkeyKingEffect = function(t) {
                var e = this;
                return T.specialManager.createEffect(n({}, t, {
                    onShot: function() {
                        t.chairId < 0 && e.sweepFishBomb(t.fishKind)
                    }
                }))
            }, t.prototype.createGhostShipEffect = function(t) {
                var e = this;
                return T.specialManager.createEffect(n({}, t, {
                    ghostFishEffectContainer: this.ghostFishEffectContainer,
                    onShot: function() {
                        t.chairId < 0 && e.sweepFishBomb(t.fishKind)
                    }
                }))
            }, t.prototype.createSpecialFireStorm = function(t) {
                var e = this;
                return T.specialManager.createEffect(n({}, t, {
                    onIntro: function() {
                        t.chairId < 0 && (e.firestormTag = T.SpecialTag.Ready, e.aim.setAimVisible(!0, e.evtPoint ? u.default.getPointForView(e.evtPoint, o.default.isView) : null), e.isMyFireStromPreparing = !1, e.isAutoLock && !e.inRedPacket() && e.autoSelectFish(e.autoLockInfo.arr))
                    },
                    onPreComplete: function() {
                        if (t.chairId < 0 && (e.firestormTag = T.SpecialTag.Wait, e.autoLockInfo.fish)) {
                            var i = e.autoLockInfo.fish;
                            e.autoLockInfo.fish = null, i.autoLock = !1
                        }
                    }
                }))
            }, t.prototype.sweepFishBomb = function(t) {
                var e = this,
                    i = [];
                for (var n in this.fishMap) {
                    var o = parseInt(n),
                        a = this.fishMap[n];
                    t == d.FishKind.Dragon && this.multiBoomFishIds.indexOf(o) > -1 || a.realKind <= 18 && u.default.checkInScreen(a.position) && i.push(o)
                }
                i.length < 1 ? setTimeout(function() {
                    e.sweepFishBomb(t)
                }, 300) : this.sweep(i, t)
            }, t.prototype.sweep = function(t, e) {
                var i = this,
                    n = T.specialManager.getEffect(e),
                    o = n.fishId,
                    a = n.fishKind;
                this.onSweep(o, a, t, function(t, n, o, a) {
                    return i.sweepFishAfter(o, -1, t, a, e)
                })
            }, t.prototype.sweepFishAfter = function(t, e, i, n, o) {
                for (var a = this, s = [], r = 0, h = t || []; r < h.length; r++) {
                    var l = h[r],
                        f = this.fishMap[l.id];
                    f ? (f.inSpecialCathed = !0, s.push({
                        fish: f,
                        win: l.win,
                        id: l.id
                    })) : this.batteryContainer.setBalanceDiff(l.win, -1)
                }
                var p = T.specialManager.getEffect(o, e);
                if (!p) return s.forEach(function(t) {
                    return a.batteryContainer.setBalanceDiff(t.win, e)
                });
                p.fishKind == d.FishKind.Dragon && t && t.forEach(function(t) {
                    return a.multiBoomFishIds.push(t.id)
                });
                var y = e < 0;
                p.sweep(s, function(t) {
                    a.fishMap[t.id] && (a.catchSweepFishAfter(t.fish, t.win, e, y, !0, o), y = !1)
                }, n);
                var m = u.default.getLocalPosition(this.batteryContainer.getBatteryPosition(e), g.default.scale),
                    w = -1 == e,
                    x = function() {
                        if (a.batteryContainer.getBattery(e)) {
                            var t = u.default.getLocalPosition(a.batteryContainer.getCoinPosition(e), g.default.scale),
                                n = {
                                    isMe: -1 == e,
                                    chairId: e,
                                    amount: i,
                                    position: new c.Point(.5 * g.default.width, .5 * g.default.height),
                                    endPosition: t,
                                    kind: p.fishKind == d.FishKind.Dragon ? 103 : 101,
                                    isBigWin: !0,
                                    isHideWin: !0,
                                    isKindCoin: !0,
                                    onComplete: function(t) {
                                        var n = void 0 !== t ? t : i;
                                        a.batteryContainer.setBalanceDiff(n, e), p.showWinAni(n, function() {})
                                    }
                                };
                            w ? p.playSweepEnd(n) : p.playSweepEndOther(n)
                        }
                    };
                p.fishKind == d.FishKind.Dragon ? (m.y -= m.y > .5 * g.default.height ? 50 : -50, this.winContainer.showCoins({
                    isMe: w,
                    position: new c.Point(.5 * g.default.width, .5 * g.default.height - 100),
                    endPosition: m,
                    kind: p.fishKind == d.FishKind.Dragon ? 103 : 101,
                    onComplete: x
                }), A.default.playEffectCoinsGet()) : (new _.TimelineLite).call(x, null, null, "+=2")
            }, t.prototype.takeSweepWin = function(t, e, i, n) {
                if (0 != e) {
                    var a = u.default.getPointForView(new c.Point(t.x, t.y), o.default.isView),
                        s = u.default.getLocalPosition(this.batteryContainer.getCoinPosition(i), g.default.scale),
                        r = T.specialManager.getEffect(n, i);
                    r && (r.fishKind, d.FishKind.Dragon);
                    103 == r.fishKind ? this.winContainer.showSweep({
                        isMe: -1 == i,
                        amount: e,
                        kind: t.kind,
                        endPosition: s,
                        position: a
                    }) : ((s = u.default.getLocalPosition(this.batteryContainer.getBatteryPosition(i), g.default.scale)).y -= s.y > .5 * g.default.height ? 50 : -50, this.winContainer.show({
                        isMe: -1 == i,
                        amount: e,
                        kind: t.kind,
                        endPosition: s,
                        position: a
                    }))
                }
            }, t.prototype.takeWin = function(t, e, i, n, a) {
                var s = this;
                if (void 0 === n && (n = !0), void 0 === a && (a = !1), 0 != e) {
                    var r, h = u.default.getLocalPosition(this.batteryContainer.getCoinPosition(i), g.default.scale),
                        l = t.realKind >= 16 && t.realKind <= 21;
                    if (i < 0 && l) {
                        var f = [1, 3].indexOf(o.default.deskInfo.chairId) > -1;
                        this.takeBigWin(t.realKind, e, new c.Point(f ? 422 : 1017, 510))
                    }
                    r = u.default.getPointForView(new c.Point(t.x, t.y), o.default.isView), -1 == i && (t.realKind == d.FishKind.DragonKing ? A.default.playDragonKingDead() : t.realKind == d.FishKind.GoldenToad ? (A.default.playGoldenToadDead(), A.default.playGoldentoadWin()) : t.realKind == d.FishKind.EclipticCrab ? A.default.playEclipticCrabDead() : t.realKind < d.FishKind.EclipticCrab && t.realKind >= 14 ? A.default.playMediumFishDead() : t.realKind < 14 && t.realKind >= 7 && A.default.playLowFishDead()), this.winContainer.show({
                        isMe: -1 == i,
                        amount: e,
                        position: r,
                        endPosition: h,
                        isSingle: n,
                        isBigWin: i < 0 && l && t.realKind > 18,
                        onComplete: function() {
                            if (s.batteryContainer.setBalanceDiff(e, i), s.winContainer.showWinText(e, i), t.inSpecialCathed) {
                                var n = T.specialManager.getEffect(t.realKind, i);
                                n && n.fishKind == d.FishKind.FireStorm && n.takeWin(e), d.FishKind.DragonKing == t.realKind && (t.inSpecialCathed = !1)
                            }
                        }
                    })
                }
            }, t.prototype.takeBigWin = function(t, e, i) {
                b.celebrationManager.createBigFishCelebration(t, e, i).show(this.winContainer), this.scene.quake()
            }, t.prototype.lightnByOthers = function(t) {
                var e = t.chairId,
                    i = t.domination,
                    n = t.lockFishId;
                this.batteryContainer.setDomination(i, e), this.batteryContainer.setBalanceDiff(0 - i, e);
                var o = this.fishMap[n];
                o && (o.lightnHurt(!0), this.lightnContainer.show(e), this.batteryContainer.setLightnAngle(e), this.playLastFireTime[t.chairId] = (new Date).getTime())
            }, t.prototype.fireByOthers = function(t) {
                var e = this,
                    i = t.angle,
                    n = t.chairId,
                    a = t.domination;
                if (1 == t.type) return this.lightnByOthers(t);
                var s = o.default.betData.getDomIndex(a);
                this.batteryContainer.setDomination(a, n), this.batteryContainer.setBalanceDiff(0 - a, n), this.batteryContainer.turnDouble(n, !1), this.batteryContainer.shotFromAngle(n, i, function(n) {
                    for (var o = 0, r = n; o < r.length; o++) {
                        var l = r[o],
                            c = e.poolBullet.create(function() {
                                return new h.Bullet
                            });
                        c.reset(t.bulletId, s, !1, l, i), c.totalBet = a, t.lockFishId && (c.lockFishId = t.lockFishId), c.move(), e.bulletContainer.addChild(c)
                    }
                }), this.playLastFireTime[t.chairId] = (new Date).getTime()
            }, t.prototype.multiFireByOthers = function(t) {
                var e = this,
                    i = t.angle,
                    n = t.chairId,
                    a = t.totalBet,
                    s = t.bulletIds,
                    r = a / 2,
                    l = o.default.betData.getDomIndex(r);
                this.batteryContainer.setDomination(r, n), this.batteryContainer.setBalanceDiff(0 - a, n), this.batteryContainer.turnDouble(n, !0), this.batteryContainer.shotFromAngle(n, i, function(n) {
                    n.forEach(function(n, o) {
                        if (n) {
                            var a = e.poolBullet.create(function() {
                                return new h.Bullet
                            });
                            a.reset(s[o], l, !1, n, i), a.totalBet = r, t.lockFishId && (a.lockFishId = t.lockFishId), a.move(), e.bulletContainer.addChild(a)
                        }
                    })
                }), this.playLastFireTime[t.chairId] = (new Date).getTime()
            }, t.prototype.catchFishByOthers = function(t) {
                for (var e = t.fishes, i = t.freeInfo, n = 1 == t.type, o = 0, a = e; o < a.length; o++) {
                    var s = a[o],
                        r = this.fishMap[s.id];
                    if (s.kind != d.FishKind.Redpacket) r ? r.type == d.FishType.Special ? this.catchFishSpeAfter({
                        fish: r,
                        totalBet: u.default.divideWithoutLoss(s.win, s.odds),
                        totalWin: s.win,
                        freeInfo: i,
                        chairId: t.chairId,
                        odds: s.odds,
                        endTime: t.endTime,
                        isLightn: n
                    }) : (r.inSpecialCathed = t.free, this.catchFishAfter({
                        fish: r,
                        win: s.win,
                        chairId: t.chairId,
                        isLightn: n
                    })) : this.batteryContainer.setBalanceDiff(s.win, t.chairId);
                    else {
                        var h = new D.default(e[0].id, e[0].kind);
                        this.catchFishSpeAfter({
                            fish: h,
                            totalBet: u.default.divideWithoutLoss(s.win, s.odds),
                            totalWin: s.win,
                            freeInfo: i,
                            chairId: t.chairId,
                            odds: s.odds,
                            endTime: t.endTime,
                            ext: s.ext,
                            isLightn: n
                        })
                    }
                }
            }, t.prototype.sweepFireByOthers = function(t) {
                var e = this,
                    i = t.chairId,
                    n = t.fishKind,
                    o = t.angle,
                    a = t.bulletId;
                o && this.batteryContainer.shotFromAngle(i, o, function(s) {
                    var r = s[0],
                        h = e.createSpecialBulletFire(r, o, n, a, i);
                    h.kind == d.FishKind.FireStorm && t.lockFishId && (h.lockFishId = t.lockFishId), e.bulletContainer.addChild(h)
                })
            }, t.prototype.catchSweepFishByOthers = function(t) {
                this.sweepFishAfter(t.fishes, t.chairId, t.totalWin, t.status, t.fishKind)
            }, t.prototype.fireCancel = function(t) {
                this.batteryContainer.setBalanceDiff(t.domination, t.chairId)
            }, t.prototype.specialGameStart = function(t) {
                if (t.fishKind == d.FishKind.AzureStone) {
                    var e = T.specialManager.getEffect(d.FishKind.AzureStone, t.chairId);
                    e && e.pauseFish(t.effectFishIds)
                }
            }, t.prototype.fireStormEnd = function(t) {
                var e = T.specialManager.getEffect(d.FishKind.FireStorm, t.chairId);
                e && e.endShot(t.totalWin)
            }, t.prototype.swtichScene = function(t) {
                o.default.deskInfo.sceneKindId = t.sceneKindId, this.isAllowShot = !0, this.background.change(t.sceneKindId, t.sceneChangeId), this.curSceneBossCount = 0
            }, t.prototype.swtichSceneEnd = function(t) {
                this.isAllowShot = !0
            }, t.prototype.changeReadyScene = function(t) {
                for (var e = this, i = 0, n = this.fishGroupList; i < n.length; i++) {
                    var o = n[i];
                    if (o.id == y.TraceSceneMode.MODE20)
                        for (var a = 1.5 * g.default.width, s = g.default.height / 2, r = function(i) {
                                if (!i) return "continue";
                                if (i.trace && i.trace.add(l.traceManager.trace(i, l.TraceMode.LINE1, function() {
                                        e.removeFish(i)
                                    }, [{
                                        x: i.x,
                                        y: i.y
                                    }, {
                                        x: a,
                                        y: s
                                    }])), t) {
                                    var n = h.getTraceProgress(i.trace, t);
                                    n < 1 && i.trace.progress(n)
                                }
                            }, h = this, c = 0, u = o.fishes; c < u.length; c++) {
                            r(u[c])
                        }
                }
                this.fishGroupList = []
            }, t.prototype.noticeMessage = function(t) {
                this.hallInfo.pushMessage(t)
            }, t.prototype.stopScene = function() {
                this.isAllowShot = !1;
                for (var t = 0, e = this.fishList; t < e.length; t++) {
                    var i = e[t];
                    if (i)
                        for (var n = 0, o = i; n < o.length; n++) {
                            var a = o[n];
                            a.trace && a.trace.timeScale(8), a.trace2 && a.trace2.timeScale(8)
                        }
                }
            }, t.prototype.fixMode20Fish = function() {
                var t = o.default.deskInfo.lastScenePreChangeEndTime;
                t && this.changeReadyScene(t)
            }, Object.defineProperty(t.prototype, "bulletId", {
                get: function() {
                    return ++this.bltId
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.clearSpaceAuto = function() {
                !this.isSpaceAuto || this.lockInfo.fish || this.autoLockInfo.fish || (this.spaceDownTimer && clearTimeout(this.spaceDownTimer), this.isSpaceAuto = !1, this.setMenuEnable())
            }, t.prototype.transferCancel = function(t) {
                var e = t.chairId === o.default.deskInfo.chairId ? -1 : t.chairId;
                this.batteryContainer.setBalanceDiff(t.cancelAmt, e)
            }, t
        }();
    e.default = B;
    var R = function() {
            function t() {}
            return t.prototype.unlockFish = function() {
                this.fish && (this.fish.lock = !1, this.fish = null)
            }, t.prototype.unlockAutoFish = function() {
                this.fish && (this.fish.autoLock = !1, this.fish = null)
            }, t.prototype.clear = function() {
                this.fish = null, this.locked = !1, this.arr = null
            }, t
        }(),
        N = function() {
            return function(t, e) {
                this.id = e, this.fishes = t
            }
        }()
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(14),
        o = [{
            kind: 0,
            name: "Flying Fish",
            speed: 200,
            aniSpeed: .2,
            type: n.FishType.Small,
            level: 5,
            shadowDistance: 20,
            rects: [{
                x: -30,
                y: -30,
                width: 60,
                height: 60
            }],
            aimRects: [{
                x: -30,
                y: -30,
                width: 60,
                height: 60
            }]
        }, {
            kind: 1,
            name: "Clownfish",
            speed: 150,
            aniSpeed: .2,
            type: n.FishType.Small,
            level: 6,
            shadowDistance: 15,
            rects: [{
                x: -25,
                y: -30,
                width: 50,
                height: 62
            }],
            aimRects: [{
                x: -25,
                y: -30,
                width: 50,
                height: 62
            }]
        }, {
            kind: 2,
            name: "Butterflyfish",
            speed: 180,
            aniSpeed: .15,
            type: n.FishType.Small,
            level: 7,
            shadowDistance: 15,
            rects: [{
                x: -22,
                y: -48,
                width: 44,
                height: 96
            }],
            aimRects: [{
                x: -37,
                y: -50,
                width: 75,
                height: 104
            }]
        }, {
            kind: 3,
            name: "Pufferfish Small",
            speed: 100,
            aniSpeed: .2,
            type: n.FishType.Small,
            level: 8,
            shadowDistance: 60,
            rects: [{
                x: -31,
                y: -30,
                width: 62,
                height: 71
            }],
            aimRects: [{
                x: -47,
                y: -48,
                width: 95,
                height: 100
            }]
        }, {
            kind: 4,
            name: "MandarinFish",
            speed: 100,
            aniSpeed: .35,
            type: n.FishType.Small,
            level: 9,
            shadowDistance: 60,
            rects: [{
                x: -15,
                y: -49,
                width: 36,
                height: 101
            }],
            aimRects: [{
                x: -30,
                y: -50,
                width: 65,
                height: 104
            }]
        }, {
            kind: 5,
            name: "Flatfish",
            speed: 100,
            aniSpeed: .2,
            type: n.FishType.Small,
            level: 2,
            shadowDistance: 10,
            rects: [{
                x: -34,
                y: -41,
                width: 70,
                height: 26
            }, {
                x: -44,
                y: -15,
                width: 88,
                height: 58
            }, {
                x: -25,
                y: 43,
                width: 55,
                height: 23
            }],
            aimRects: [{
                x: -58,
                y: -70,
                width: 120,
                height: 140
            }]
        }, {
            kind: 6,
            name: "Lobster",
            speed: 70,
            aniSpeed: .15,
            type: n.FishType.Small,
            level: 1,
            shadowDistance: 5,
            rects: [{
                x: -8,
                y: -55,
                width: 29,
                height: 70
            }, {
                x: -38,
                y: 15,
                width: 92,
                height: 50
            }],
            aimRects: [{
                x: -48,
                y: -68,
                width: 110,
                height: 135
            }]
        }, {
            kind: 7,
            name: "Swordfish",
            speed: 90,
            aniSpeed: .25,
            type: n.FishType.Medium,
            level: 10,
            shadowDistance: 60,
            rects: [{
                x: -14,
                y: -80,
                width: 32,
                height: 140
            }],
            aimRects: [{
                x: -37,
                y: -86,
                width: 75,
                height: 166
            }]
        }, {
            kind: 8,
            name: "Octopus",
            speed: 120,
            aniSpeed: .2,
            angle: Math.PI / 2,
            type: n.FishType.Medium,
            level: 11,
            shadowDistance: 60,
            rects: [{
                x: -40,
                y: -60,
                width: 76,
                height: 120
            }],
            aimRects: [{
                x: -60,
                y: -65,
                width: 120,
                height: 134
            }]
        }, {
            kind: 9,
            name: "Jellyfish",
            speed: 120,
            aniSpeed: 1 / 6,
            angle: Math.PI / 2,
            type: n.FishType.Medium,
            level: 12,
            shadowDistance: 60,
            rects: [{
                x: -38,
                y: -91,
                width: 78,
                height: 128
            }],
            aimRects: [{
                x: -62,
                y: -128,
                width: 127,
                height: 211
            }]
        }, {
            kind: 10,
            name: "Lightfish",
            speed: 70,
            aniSpeed: .15,
            type: n.FishType.Medium,
            level: 13,
            shadowDistance: 60,
            rects: [{
                x: -45,
                y: -67,
                width: 90,
                height: 130
            }],
            aimRects: [{
                x: -40,
                y: -80,
                width: 80,
                height: 130
            }]
        }, {
            kind: 11,
            name: "Sea turtle",
            speed: 150,
            aniSpeed: .2,
            type: n.FishType.Medium,
            level: 16,
            shadowDistance: 60,
            rects: [{
                x: -70,
                y: -85,
                width: 140,
                height: 135
            }, {
                x: -40,
                y: 50,
                width: 80,
                height: 62
            }],
            aimRects: [{
                x: -120,
                y: -100,
                width: 245,
                height: 220
            }]
        }, {
            kind: 12,
            name: "Sawfish",
            speed: 100,
            aniSpeed: .2,
            type: n.FishType.Medium,
            level: 17,
            shadowDistance: 60,
            rects: [{
                x: -31,
                y: -120,
                width: 63,
                height: 150
            }, {
                x: -12,
                y: 30,
                width: 23,
                height: 60
            }],
            aimRects: [{
                x: -50,
                y: -132,
                width: 100,
                height: 230
            }]
        }, {
            kind: 13,
            name: "Stringray",
            speed: 100,
            aniSpeed: .15,
            type: n.FishType.Medium,
            level: 18,
            shadowDistance: 60,
            rects: [{
                x: -24,
                y: -57,
                width: 48,
                height: 78
            }, {
                x: -93,
                y: 22,
                width: 194,
                height: 90
            }],
            aimRects: [{
                x: -144,
                y: -10,
                width: 238,
                height: 130
            }]
        }, {
            kind: 14,
            name: "Pufferfish Big",
            speed: 100,
            aniSpeed: .2,
            type: n.FishType.Large,
            level: 20,
            shadowDistance: 60,
            rects: [{
                x: -74,
                y: -48,
                width: 153,
                height: 158
            }],
            aimRects: [{
                x: -91,
                y: -113,
                width: 184,
                height: 224
            }]
        }, {
            kind: 15,
            name: "Shark",
            speed: 70,
            aniSpeed: .25,
            type: n.FishType.Large,
            level: 21,
            shadowDistance: 100,
            rects: [{
                x: -40,
                y: -120,
                width: 68,
                height: 120
            }, {
                x: -40,
                y: 0,
                width: 91,
                height: 177
            }],
            aimRects: [{
                x: -77,
                y: -151,
                width: 147,
                height: 325
            }]
        }, {
            kind: 16,
            name: "Shark Gold",
            speed: 70,
            type: n.FishType.Large,
            aniSpeed: .25,
            level: 22,
            shadowDistance: 100,
            rects: [{
                x: -40,
                y: -120,
                width: 68,
                height: 120
            }, {
                x: -40,
                y: 0,
                width: 91,
                height: 177
            }],
            aimRects: [{
                x: -84,
                y: -161,
                width: 165,
                height: 326
            }]
        }, {
            kind: 17,
            name: "Hammer Shark",
            speed: 70,
            aniSpeed: .2,
            type: n.FishType.Large,
            level: 23,
            shadowDistance: 100,
            swim_frames: 32,
            rects: [{
                x: -60,
                y: -124,
                width: 124,
                height: 242
            }, {
                x: -104,
                y: 118,
                width: 207,
                height: 54
            }],
            aimRects: [{
                x: -110,
                y: -160,
                width: 220,
                height: 345
            }]
        }, {
            kind: 18,
            name: "Gold Hammer Shark",
            speed: 70,
            aniSpeed: .2,
            type: n.FishType.Large,
            level: 24,
            shadowDistance: 100,
            swim_frames: 32,
            rects: [{
                x: -40,
                y: -197,
                width: 81,
                height: 182
            }, {
                x: -93,
                y: -15,
                width: 182,
                height: 206
            }],
            aimRects: [{
                x: -150,
                y: -200,
                width: 300,
                height: 400
            }]
        }, {
            kind: 19,
            name: "Eclipic Crab",
            speed: 70,
            aniSpeed: 4 / 3,
            type: n.FishType.Large,
            level: 3,
            swim_frames: 32,
            rects: [{
                x: -142,
                y: -125,
                width: 305,
                height: 196
            }, {
                x: -34,
                y: 71,
                width: 163,
                height: 77
            }],
            aimRects: [{
                x: -157,
                y: -135,
                width: 321,
                height: 282
            }]
        }, {
            kind: 20,
            name: "Golden Toad",
            speed: 70,
            aniSpeed: .15,
            type: n.FishType.Large,
            level: 4,
            scale: 1.2,
            shadowDistance: 10,
            rects: [{
                x: -72,
                y: -168,
                width: 144,
                height: 124
            }, {
                x: -160,
                y: -46,
                width: 320,
                height: 177
            }, {
                x: -63,
                y: 131,
                width: 131,
                height: 97
            }],
            aimRects: [{
                x: -163,
                y: -172,
                width: 330,
                height: 400
            }]
        }, {
            kind: 21,
            name: "Dragon King",
            speed: 70,
            aniSpeed: 1,
            type: n.FishType.Large,
            level: 19,
            rects: [{
                x: -106,
                y: -203,
                width: 237,
                height: 175
            }, {
                x: -174,
                y: -28,
                width: 347,
                height: 78
            }, {
                x: -139,
                y: 50,
                width: 250,
                height: 128
            }],
            aimRects: [{
                x: -175,
                y: -190,
                width: 350,
                height: 390
            }]
        }, {
            kind: 100,
            name: "FireStorm",
            speed: 70,
            aniSpeed: 1,
            type: n.FishType.Special,
            level: 26,
            rects: [{
                x: -87,
                y: -139,
                width: 177,
                height: 64
            }, {
                x: -127,
                y: -75,
                width: 254,
                height: 136
            }],
            aimRects: [{
                x: -126,
                y: -150,
                width: 254,
                height: 226
            }]
        }, {
            kind: 101,
            name: "ThunderHammer",
            speed: 70,
            aniSpeed: 1,
            type: n.FishType.Special,
            level: 27,
            rects: [{
                x: -156,
                y: -115,
                width: 295,
                height: 115
            }, {
                x: -84,
                y: 0,
                width: 200,
                height: 74
            }],
            aimRects: [{
                x: -118,
                y: -134,
                width: 248,
                height: 209
            }]
        }, {
            kind: 102,
            name: "AzureStone",
            speed: 70,
            aniSpeed: .125,
            type: n.FishType.Special,
            level: 25,
            shadowDistance: 10,
            swim_frames: 30,
            rects: [{
                x: -83,
                y: -125,
                width: 150,
                height: 232
            }],
            aimRects: [{
                x: -83,
                y: -125,
                width: 150,
                height: 232
            }]
        }, {
            kind: 103,
            name: "AwakeningDragon",
            speed: 180,
            aniSpeed: .2,
            type: n.FishType.Special,
            level: 29,
            shadowDistance: 80,
            swim_frames: 72
        }, {
            kind: 104,
            name: "MonkeyKing",
            speed: 70,
            aniSpeed: 1,
            type: n.FishType.Special,
            level: 14,
            radius: 170,
            rects: [{
                x: -145,
                y: -184,
                width: 145,
                height: 390
            }, {
                x: 0,
                y: -58,
                width: 145,
                height: 250
            }],
            aimRects: [{
                x: -175,
                y: -245,
                width: 375,
                height: 464
            }]
        }, {
            kind: 105,
            name: "PirateGhostShip",
            speed: 70,
            aniSpeed: .35,
            type: n.FishType.Special,
            level: 15,
            shadowDistance: 10,
            radius: 180,
            rects: [{
                x: -385,
                y: -154,
                width: 127,
                height: 288
            }, {
                x: -260,
                y: -196,
                width: 618,
                height: 381
            }, {
                x: 359,
                y: -115,
                width: 80,
                height: 229
            }],
            aimRects: [{
                x: -387,
                y: -283,
                width: 824,
                height: 572
            }]
        }, {
            kind: 106,
            name: "DragonWheel",
            speed: 70,
            aniSpeed: 1,
            type: n.FishType.Special,
            level: 28,
            rects: [{
                x: -121,
                y: -120,
                width: 112,
                height: 237
            }, {
                x: -9,
                y: -64,
                width: 131,
                height: 165
            }],
            aimRects: [{
                x: -143,
                y: -125,
                width: 271,
                height: 240
            }]
        }];
    e.default = o
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(21),
        r = i(1),
        h = i(2),
        l = i(14),
        c = function(t) {
            function e(e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = !1);
                var n = t.call(this) || this;
                return n.enable = !0, n.isLock = !1, n.step = 25, n.anchor.set(.5), n.scale.set(2), n.id = e, n.isMain = i, n.name = "bullet", n
            }
            return o(e, t), e.prototype.move = function() {
                a.default.scene.ticker.add(this.collisionTest, this)
            }, e.prototype.reset = function(t, e, i, n, o) {
                this.id = t, this.lockFishId = 0, this.isMain = i, this.position = n, this.rotation = o, this.enable = !0, this.isSpecial = !1, this.isLock = !1, this.kind = e, this.rects = u[e], this.texture = PIXI.Texture.fromFrame("bullet_" + e + (this.isMain ? "" : "_gray") + ".png")
            }, e.prototype.clear = function() {
                a.default.scene.ticker.remove(this.collisionTest, this), this.enable = !1
            }, e.prototype.getRects = function() {
                for (var t = new Array, e = 0, i = this.rects; e < i.length; e++) {
                    var n = i[e],
                        o = h.default.getRotatedPoint(new PIXI.Point((n.x + n.width / 2) * this.scale.x, (n.y + n.height / 2) * this.scale.y), this.position, this.rotation),
                        a = h.default.clone(n);
                    a.width = a.width * this.scale.x, a.height = a.height * this.scale.y, a.x = o.x - a.width / 2, a.y = o.y - a.height / 2, t.push({
                        rect: a,
                        rotation: this.rotation
                    })
                }
                return t
            }, e.prototype.checkInScreen = function() {
                for (var t = 0, e = this.rects; t < e.length; t++) {
                    var i = e[t],
                        n = h.default.getRotatedPoint(new PIXI.Point(i.x + i.width / 2, i.y + i.height / 2), this.position, this.rotation);
                    if (h.default.checkInScreen(n, 0)) return !0
                }
                return !1
            }, e.prototype.getHitPoint = function(t) {
                var e = {
                    x: t.x + t.width / 2,
                    y: t.y + t.height / 2
                };
                return h.default.getRotatedPoint(new PIXI.Point(0, -t.height / 2), e, this.rotation)
            }, e.prototype.showDebugger = function() {
                for (var t = 0, e = this.children; t < e.length; t++) {
                    var i = e[t];
                    i instanceof PIXI.Graphics && (this.removeChild(i), s.Graph.drawRect(this.rects, this))
                }
                0 === this.children.length && s.Graph.drawRect(this.rects, this)
            }, e.prototype.collisionTest = function(t) {
                this.x += this.step * t * Math.sin(this.rotation), this.y -= this.step * t * Math.cos(this.rotation), this.x <= 0 ? (this.x = 0, this.rotation = -this.rotation) : this.x >= r.default.width ? (this.x = r.default.width, this.rotation = -this.rotation) : this.y <= 0 ? (this.y = 0, this.rotation = Math.PI - this.rotation) : this.y >= r.default.height && (this.y = r.default.height, this.rotation = Math.PI - this.rotation)
            }, e
        }(PIXI.Sprite);
    e.Bullet = c;
    var u = [
        [{
            x: -8,
            y: -25,
            width: 16,
            height: 19
        }],
        [{
            x: -5,
            y: -24,
            width: 12,
            height: 32
        }],
        [{
            x: -6,
            y: -29,
            width: 11,
            height: 25
        }, {
            x: -3,
            y: -4,
            width: 5,
            height: 15
        }],
        [{
            x: -12,
            y: -20,
            width: 22,
            height: 27
        }],
        [{
            x: -5,
            y: -28,
            width: 10,
            height: 5
        }, {
            x: -10,
            y: -23,
            width: 20,
            height: 6
        }, {
            x: -13,
            y: -17,
            width: 28,
            height: 22
        }, {
            x: -10,
            y: 5,
            width: 20,
            height: 3
        }],
        [{
            x: -6,
            y: -28,
            width: 13,
            height: 12
        }, {
            x: -11,
            y: -16,
            width: 24,
            height: 8
        }, {
            x: -16,
            y: -8,
            width: 32,
            height: 16
        }, {
            x: -7,
            y: 8,
            width: 15,
            height: 19
        }]
    ];
    u[l.FishKind.FireStorm] = [{
        x: -14,
        y: -30,
        width: 28,
        height: 42
    }]
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(79),
        a = i(7),
        s = i(2),
        r = i(3),
        h = function() {
            function t() {}
            return t.prototype.createTrace = function(t, e, i, o, a) {
                var s;
                switch (e) {
                    case n.MODE1:
                        s = this.getTrace1.bind(this);
                        break;
                    case n.MODE2:
                        s = this.getTrace2.bind(this);
                        break;
                    case n.MODE3:
                        s = this.getTrace3.bind(this);
                        break;
                    case n.MODE4:
                        s = this.getTrace4.bind(this)
                }
                return s(t, i, o, a)
            }, t.prototype.getTrace1 = function(t, e, i, n) {
                if (14 == t.length && 2 == n.length)
                    for (var h = [1, 5, 5, 1, 1, 1], l = [{
                            x: -130,
                            y: 0
                        }, {
                            x: -65,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        }, {
                            x: 65,
                            y: 0
                        }, {
                            x: 130,
                            y: 0
                        }], c = s.default.getAngle(n[0], n[1]), u = 0, d = 0; d < h.length; d++)
                        for (var f = h[d], p = function(s) {
                                if (!t[u]) return "continue";
                                var h = new r.TimelineLite,
                                    p = t[u],
                                    y = 1 == f ? n : [new a.Point(n[0].x + l[s].x * Math.sin(c), n[0].y - l[s].x * Math.cos(c)), new a.Point(n[1].x + l[s].x * Math.sin(c), n[1].y - l[s].x * Math.cos(c))];
                                h.add(o.traceManager.trace(p, e, function() {
                                    i(p)
                                }, y), .3 * d), p.trace = h
                            }, y = 0; y < f; y++, u++) p(y)
            }, t.prototype.getTrace2 = function(t, e, i, n) {
                for (var a = function(a) {
                        if (!t[a]) return "continue";
                        var s = new r.TimelineLite,
                            h = t[a];
                        h.alpha = 0, s.add(o.traceManager.trace(h, e, function() {
                            i(h)
                        }, n), .5 * a), h.trace = s
                    }, s = 0; s < t.length; s++) a(s)
            }, t.prototype.getTrace3 = function(t, e, i, n) {
                for (var a = function(a) {
                        if (!t[a]) return "continue";
                        var s = new r.TimelineLite,
                            h = t[a];
                        h.alpha = 0, s.add(o.traceManager.trace(h, e, function() {
                            i(h)
                        }, n), .7 * a), h.trace = s
                    }, s = 0; s < t.length; s++) a(s)
            }, t.prototype.getTrace4 = function(t, e, i, n) {
                if (2 == t.length)
                    for (var a = function(a) {
                            if (!t[a]) return "continue";
                            var s = new r.TimelineLite,
                                h = t[a],
                                l = n.slice();
                            if (1 == a) {
                                var c = n[2].x - n[1].x,
                                    u = n[2].y - n[1].y,
                                    d = {
                                        x: n[1].x - c,
                                        y: n[1].y - u
                                    };
                                l.splice(0, 1, d), l[l.length - 1].x += d.x - n[0].x, l[l.length - 1].y += d.y - n[0].y, l.reverse()
                            }
                            s.add(o.traceManager.trace(h, e, function() {
                                i(h)
                            }, l)), h.trace = s
                        }, s = 0; s < t.length; s++) a(s)
            }, t
        }();
    ! function(t) {
        t[t.MODE1 = 0] = "MODE1", t[t.MODE2 = 1] = "MODE2", t[t.MODE3 = 2] = "MODE3", t[t.MODE4 = 3] = "MODE4"
    }(n || (n = {})), e.TraceGroupMode = n;
    var l = new h;
    e.traceGroupManager = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        function e(e) {
            var i = t.call(this, [PIXI.Texture.fromFrame("bomb_effect_000.png")]) || this;
            return i.framesCount = 9, i.name = "net", i.anchor.set(.5), i.loop = !1, i.animationSpeed = .5, i.textures = i.initFrames(), i.scale.set(1.3), i.onComplete = function() {
                e && e(i)
            }, i
        }
        return o(e, t), e.prototype.initFrames = function(t) {
            for (var e = [], i = 0; i < this.framesCount; i++) {
                var n = t ? "" : "_gray";
                e.push(PIXI.Texture.fromFrame("bomb_effect_00" + i + n + ".png"))
            }
            return e
        }, e.prototype.setScale = function(t) {
            this.scale.set(t ? 2 : 1.3)
        }, e.prototype.updateTextures = function(t) {
            this.textures = this.initFrames(t)
        }, e.prototype.playAni = function(t) {
            this.updateTextures(t), this.gotoAndPlay(0)
        }, e
    }(PIXI.extras.AnimatedSprite);
    e.default = a
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(7),
        a = i(2),
        s = i(79),
        r = i(3),
        h = i(1),
        l = i(0),
        c = function() {
            function t() {}
            return t.prototype.createTrace = function(t, e, i, s, r) {
                var l;
                switch (e) {
                    case n.MODE1:
                        l = this.trace1.bind(this);
                        break;
                    case n.MODE2:
                        l = this.trace2.bind(this);
                        break;
                    case n.MODE3:
                        l = this.trace3.bind(this);
                        break;
                    case n.MODE4:
                        l = this.trace4.bind(this);
                        break;
                    case n.MODE5:
                        l = this.trace5.bind(this);
                        break;
                    case n.MODE6:
                        l = this.trace6.bind(this);
                        break;
                    case n.MODE7:
                        l = this.trace7.bind(this);
                        break;
                    case n.MODE8:
                        l = this.trace8.bind(this);
                        break;
                    case n.MODE9:
                        l = this.trace9.bind(this);
                        break;
                    case n.MODE10:
                        l = this.trace10.bind(this);
                        break;
                    case n.MODE20:
                        l = this.trace20.bind(this);
                        break;
                    case n.MODE21:
                        l = this.trace21.bind(this);
                        break;
                    case n.MODE22:
                        l = this.trace22.bind(this);
                        break;
                    case n.MODE23:
                        l = this.trace23.bind(this);
                        break;
                    case n.MODE24:
                        l = this.trace24.bind(this)
                }
                this.center || (this.offsetDistance = 50, this.center = new o.Point(h.default.width / 2, h.default.height / 2), this.radius = a.default.getTriangleSide(this.center.x, this.center.y) + this.offsetDistance), l(t, i, s, r)
            }, t.prototype.createTraceExt = function(t, e, i, n, o, a) {
                return this.traceExt.bind(this)(t, e, i, n, o, a)
            }, t.prototype.trace1 = function(t, e) {
                var i = t.length;
                if (!(i < 8))
                    for (var n = this.center, a = this.radius, h = 2 * Math.PI / i, l = function(i) {
                            if (!t[i]) return "continue";
                            var l = t[i],
                                c = h * i,
                                u = n.x + a * Math.cos(c),
                                d = n.y + a * Math.sin(c),
                                f = new o.Point(u, d),
                                p = new r.TimelineLite;
                            p.set(l, {
                                alpha: 0
                            }), p.to(l, .3, {
                                alpha: 1
                            }), p.add(s.traceManager.trace(l, s.TraceMode.LINE1, function() {
                                e(l)
                            }, [n, f]), "-=0.3"), l.trace = p
                        }, c = 0; c < i; c++) l(c)
            }, t.prototype.trace2 = function(t, e) {
                var i = t.length;
                if (!(i < 8))
                    for (var n = this.center, a = this.radius, h = 2 * Math.PI / i, l = function(i) {
                            if (!t[i]) return "continue";
                            var l = t[i],
                                c = h * i + h / 2,
                                u = n.x + a * Math.cos(c),
                                d = n.y + a * Math.sin(c),
                                f = new o.Point(u, d),
                                p = new r.TimelineLite;
                            p.set(l, {
                                alpha: 0
                            }), p.to(l, .3, {
                                alpha: 1
                            }), p.add(s.traceManager.trace(l, s.TraceMode.LINE1, function() {
                                e(l)
                            }, [n, f]), "-=0.3"), l.trace = p
                        }, c = 0; c < i; c++) l(c)
            }, t.prototype.trace3 = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = t.length;
                if (!(n < 8))
                    for (var o = this.radius, a = 2 * Math.PI / n, h = {
                            x: this.center.x,
                            y: this.center.y
                        }, l = function(n) {
                            if (!t[n]) return "continue";
                            var l = t[n],
                                c = a * n - a / 2 * (i ? -1 : 1),
                                u = {
                                    x: h.x + o * Math.cos(c) * .68,
                                    y: h.y + o * Math.sin(c) * .68
                                },
                                d = a * n + a / 2 * (i ? -1 : 1),
                                f = {
                                    x: h.x + o * Math.cos(d),
                                    y: h.y + o * Math.sin(d)
                                },
                                p = new r.TimelineLite;
                            p.set(l, {
                                alpha: 0
                            }), p.to(l, .3, {
                                alpha: 1
                            }), p.add(s.traceManager.trace(l, s.TraceMode.LINE4, function() {
                                e(l)
                            }, [h, u, f]), "-=0.3"), l.trace = p
                        }, c = 0; c < n; c++) l(c)
            }, t.prototype.trace4 = function(t, e) {
                this.trace3(t, e, !0)
            }, t.prototype.trace5 = function(t, e, i) {
                void 0 === i && (i = 0);
                var n = t.length;
                if (!(n < 8))
                    for (var o = Math.max(h.default.width, h.default.height) / 2 + this.offsetDistance, l = [
                            [{
                                x: 0,
                                y: -100
                            }, {
                                x: o,
                                y: -100
                            }],
                            [{
                                x: 0,
                                y: -100
                            }, {
                                x: -o,
                                y: -100
                            }],
                            [{
                                x: 100,
                                y: 0
                            }, {
                                x: 100,
                                y: -o
                            }],
                            [{
                                x: 100,
                                y: 0
                            }, {
                                x: 100,
                                y: o
                            }],
                            [{
                                x: 0,
                                y: 100
                            }, {
                                x: o,
                                y: 100
                            }],
                            [{
                                x: 0,
                                y: 100
                            }, {
                                x: -o,
                                y: 100
                            }],
                            [{
                                x: -100,
                                y: 0
                            }, {
                                x: -100,
                                y: -o
                            }],
                            [{
                                x: -100,
                                y: 0
                            }, {
                                x: -100,
                                y: o
                            }]
                        ], c = function(n) {
                            if (!t[n]) return "continue";
                            var o = t[n],
                                h = a.default.getRotatedPoint(l[n][0], u.center, i),
                                c = a.default.getRotatedPoint(l[n][1], u.center, i),
                                d = new r.TimelineLite;
                            d.set(o, {
                                alpha: 0
                            }), d.to(o, .3, {
                                alpha: 1
                            }), d.add(s.traceManager.trace(o, s.TraceMode.LINE1, function() {
                                e(o)
                            }, [h, c]), "-=0.3"), o.trace = d
                        }, u = this, d = 0; d < n; d++) c(d)
            }, t.prototype.trace6 = function(t, e) {
                this.trace5(t, e, Math.PI / 4)
            }, t.prototype.trace7 = function(t, e, i) {
                if (void 0 === i && (i = 0), !(t.length < 4))
                    for (var n = {
                            x: this.center.x,
                            y: this.center.y
                        }, o = Math.min(h.default.width, h.default.height) / 2 + this.offsetDistance, l = [
                            [{
                                x: 0,
                                y: .7 * -o
                            }, {
                                x: o,
                                y: -o
                            }],
                            [{
                                x: 0,
                                y: .7 * -o
                            }, {
                                x: -o,
                                y: -o
                            }],
                            [{
                                x: 0,
                                y: .7 * o
                            }, {
                                x: -o,
                                y: o
                            }],
                            [{
                                x: 0,
                                y: .7 * o
                            }, {
                                x: o,
                                y: o
                            }]
                        ], c = function(o) {
                            if (!t[o]) return "continue";
                            var h = t[o],
                                c = a.default.getRotatedPoint(l[o][0], u.center, i),
                                d = a.default.getRotatedPoint(l[o][1], u.center, i),
                                f = new r.TimelineLite;
                            f.set(h, {
                                alpha: 0
                            }), f.to(h, .3, {
                                alpha: 1
                            }), f.add(s.traceManager.trace(h, s.TraceMode.LINE4, function() {
                                e(h)
                            }, [n, c, d]), "-=0.3"), h.trace = f
                        }, u = this, d = 0; d < 4; d++) c(d)
            }, t.prototype.trace8 = function(t, e) {
                this.trace7(t, e, Math.PI / 2)
            }, t.prototype.trace9 = function(t, e) {
                var i = t.length;
                if (!(i < 8)) {
                    for (var n = this.center, o = this.radius, h = 2 * Math.PI / i, l = 65 / 180 * Math.PI, c = 70 / 180 * Math.PI, u = -1, d = [{
                            x: 0,
                            y: 0
                        }, {
                            x: 100,
                            y: 0
                        }, a.default.getRotatedPoint({
                            x: 200,
                            y: 0
                        }, {
                            x: 100,
                            y: 0
                        }, l)]; a.default.getDistance([d[0], d[d.length - 1]]) < o;) {
                        var f = d[d.length - 2],
                            p = d[d.length - 1],
                            y = a.default.getRotatedPoint({
                                x: f.x - p.x,
                                y: f.y - p.y
                            }, p, c * (u = -u));
                        d.push(y)
                    }
                    for (var g = function(i) {
                            if (!t[i]) return "continue";
                            var o = t[i],
                                l = d.map(function(t) {
                                    return a.default.getRotatedPoint(t, n, h * i)
                                });
                            l = [{
                                x: l[0].x,
                                y: l[0].y
                            }].concat(l.slice(1));
                            var c = new r.TimelineLite;
                            c.set(o, {
                                alpha: 0
                            }), c.to(o, .3, {
                                alpha: 1
                            }), c.add(s.traceManager.trace(o, s.TraceMode.LINE4, function() {
                                e(o)
                            }, l), "-=0.3"), o.trace = c
                        }, m = 0; m < i; m++) g(m)
                }
            }, t.prototype.trace10 = function(t, e) {
                var i = t.length;
                if (!(i < 8))
                    for (var n = this.center, o = Math.min(h.default.width, h.default.height) + this.offsetDistance, l = 2 * Math.PI / i, c = function(i) {
                            if (!t[i]) return "continue";
                            var h = t[i],
                                c = a.default.getRotatedPoint({
                                    x: -100,
                                    y: 0
                                }, n, l * i),
                                u = a.default.getRotatedPoint({
                                    x: -100,
                                    y: -o
                                }, n, l * i),
                                d = new r.TimelineLite;
                            d.set(h, {
                                alpha: 0
                            }), d.to(h, .3, {
                                alpha: 1
                            }), d.add(s.traceManager.trace(h, s.TraceMode.LINE1, function() {
                                e(h)
                            }, [c, u]), "-=0.3"), h.trace = d
                        }, u = 0; u < i; u++) c(u)
            }, t.prototype.trace20 = function(t, e) {
                var i = t.length;
                if (!(i < 3))
                    for (var n = [{
                            x: h.default.width / 6,
                            y: h.default.height / 2
                        }, {
                            x: h.default.width / 2,
                            y: h.default.height / 2
                        }, {
                            x: 5 * h.default.width / 6,
                            y: h.default.height / 2
                        }], o = 0; o < i; o++)
                        if (t[o]) {
                            var a = t[o];
                            a.swim();
                            var s = new r.TimelineLite;
                            s.set(a, {
                                alpha: 0,
                                x: n[o].x,
                                y: n[o].y,
                                rotation: -Math.PI / 2
                            }), s.to(a, .3, {
                                alpha: 1
                            }), a.trace = s
                        }
            }, t.prototype.trace21 = function(t, e) {
                var i = t.length;
                if (!(i < 4)) {
                    for (var n = h.default.width / 6, o = h.default.height / 2, l = new Array, c = 0; c < i; c++) {
                        for (var u = new Array, d = 0; d < 8; d++) {
                            var f = 1 == c || 2 == c ? 60 : 0,
                                p = {
                                    x: n * d,
                                    y: d % 2 == 0 ? o - 60 + f : 90 + f
                                };
                            7 == d && (p.y = 2 * o - 210 + f), p = a.default.getPointForView(p, c > 1), u.push(p)
                        }
                        l.push(u)
                    }
                    var y = function(i) {
                        if (!t[i]) return "continue";
                        var n = t[i],
                            o = new r.TimelineLite;
                        o.set(n, {
                            alpha: 0
                        }), o.to(n, .3, {
                            alpha: 1
                        }), o.add(s.traceManager.trace(n, s.TraceMode.LINE5, function() {
                            e(n)
                        }, l[i]), "-=0.3"), n.trace = o
                    };
                    for (c = 0; c < i; c++) y(c)
                }
            }, t.prototype.trace22 = function(t, e, i, n) {
                var a = t.length;
                if (!(a < 4)) {
                    var l = [new o.Point(0, h.default.height / 4), new o.Point(0, h.default.height / 4 * 3), new o.Point(h.default.width / 12 * 11, 0), new o.Point(h.default.width / 12 * 11, h.default.height)],
                        c = [
                            [-100, -28],
                            [-100, 28],
                            [83, -56],
                            [83, 56]
                        ];
                    l.forEach(function(t, e) {
                        var i = c[e],
                            n = i[0],
                            o = i[1];
                        t.x += n, t.y += o
                    });
                    for (var u = new Array, d = 0; d < a; d++) {
                        var f = new Array,
                            p = l[d];
                        f.push(p);
                        var y = new o.Point(h.default.width - p.x, h.default.height - p.y);
                        f.push(y), u.push(f)
                    }
                    var g = function(o) {
                            if (!t[o]) return "continue";
                            var a = t[o],
                                h = new r.TimelineLite;
                            if (h.set(a, {
                                    alpha: 0
                                }), h.to(a, .3, {
                                    alpha: 1
                                }), h.add(s.traceManager.trace(a, s.TraceMode.LINE1, function() {
                                    e(a)
                                }, u[o], i), "-=0.3"), a.trace = h, n) {
                                var l = m.getTraceProgress(h, n);
                                if (l < 0) return "continue";
                                l < 1 ? (h.progress(l), h.play()) : e(a)
                            }
                        },
                        m = this;
                    for (d = 0; d < a; d++) g(d)
                }
            }, t.prototype.trace23 = function(t, e, i, n) {
                var a = t.length;
                if (!(a < 4))
                    for (var l = new o.Point(0, h.default.height + 90), c = new o.Point(325, h.default.height - 200), u = new o.Point(325, h.default.height / 2), d = new o.Point((l.x + c.x) / 2, (l.y + c.y) / 2), f = new o.Point(c.x, h.default.height - c.y), p = new o.Point(d.x, h.default.height - d.y), y = new o.Point(l.x, h.default.height - l.y), g = new o.Point(487, h.default.height + 100), m = new o.Point(h.default.width - g.x, h.default.height - g.y), w = function(a) {
                            if (!t[a]) return "continue";
                            var w = t[a],
                                v = new r.TimelineLite;
                            if (v.set(w, {
                                    alpha: 0
                                }), v.to(w, .3, {
                                    alpha: 1
                                }), a < 2) {
                                var _ = [{
                                    x: l.x,
                                    y: l.y
                                }, {
                                    x: d.x,
                                    y: d.y
                                }, {
                                    x: c.x,
                                    y: c.y
                                }, {
                                    x: u.x,
                                    y: u.y
                                }, {
                                    x: f.x,
                                    y: f.y
                                }, {
                                    x: p.x,
                                    y: p.y
                                }, {
                                    x: y.x,
                                    y: y.y
                                }];
                                0 != a && _.forEach(function(t) {
                                    return t.x = h.default.width - t.x
                                }), v.add(s.traceManager.trace(w, s.TraceMode.LINE7, function() {
                                    e(w)
                                }, _, i), "-=0.3")
                            } else {
                                _ = [new o.Point(2 == a ? g.x : h.default.width - g.x, g.y), new o.Point(2 == a ? m.x : h.default.width - m.x, m.y)];
                                v.add(s.traceManager.trace(w, s.TraceMode.LINE1, function() {
                                    e(w)
                                }, _, i), "-=0.3")
                            }
                            if (w.trace = v, n) {
                                var b = x.getTraceProgress(v, n);
                                if (b < 0) return "continue";
                                b < 1 ? (v.progress(b), v.play()) : e(w)
                            }
                        }, x = this, v = 0; v < a; v++) w(v)
            }, t.prototype.trace24 = function(t, e, i, n) {
                var a = t.length;
                if (!(a < 2))
                    for (var l = new o.Point(-200, 82), c = new o.Point(h.default.width / 5, h.default.height / 3), u = new o.Point(h.default.width + 200, h.default.height / 3), d = new o.Point((l.x + c.x) / 2, (l.y + c.y) / 2), f = new o.Point((c.x + u.x) / 2, (c.y + u.y) / 2), p = function(o) {
                            if (!t[o]) return "continue";
                            var a = t[o],
                                p = new r.TimelineLite;
                            p.set(a, {
                                alpha: 0
                            }), p.to(a, .3, {
                                alpha: 1
                            });
                            var g = [{
                                x: l.x,
                                y: l.y
                            }, {
                                x: d.x,
                                y: d.y
                            }, {
                                x: c.x,
                                y: c.y
                            }, {
                                x: f.x,
                                y: f.y
                            }, {
                                x: u.x,
                                y: u.y
                            }];
                            if (0 != o && g.forEach(function(t) {
                                    t.x = h.default.width - t.x, t.y = h.default.height - t.y
                                }), p.add(s.traceManager.trace(a, s.TraceMode.LINE4, function() {
                                    e(a)
                                }, g, i), "-=0.3"), a.trace = p, n) {
                                var m = y.getTraceProgress(p, n);
                                if (m < 0) return "continue";
                                m < 1 ? (p.progress(m), p.play()) : e(a)
                            }
                        }, y = this, g = 0; g < a; g++) p(g)
            }, t.prototype.traceExt = function(t, e, i, n, o, a) {
                for (var s = this, h = [], l = t.length, c = t[0].length, u = 0; u < c; u++) {
                    h[u] = [];
                    for (var d = 0; d < l; d++) {
                        var f = t[d][u];
                        f && (h[u][d] = f)
                    }
                }
                var p = [],
                    y = function(t) {
                        if (!h[t]) return "continue";
                        var l = new r.TimelineLite,
                            c = h[t],
                            u = a && g.resetCreateTime(a, t * n);
                        l.set(c, {
                            x: -500,
                            y: -500
                        }), l.add(function() {
                            return s.createTrace(c, e, i, o, u)
                        }, t * n / 1e3), p.push(l)
                    },
                    g = this;
                for (u = 0; u < h.length; u++) y(u);
                return p
            }, t.prototype.resetCreateTime = function(t, e) {
                return e ? new Date(t).getTime() + e : new Date(t).getTime()
            }, t.prototype.getTraceProgress = function(t, e) {
                if (!t) return 0;
                var i = Date.now() + l.default.serverTimeDiff - e;
                return (i += a.default.getTimeZoneMillDiff(l.default.serverTimeZone)) / (1e3 * t.totalDuration())
            }, t
        }();
    ! function(t) {
        t[t.MODE1 = 0] = "MODE1", t[t.MODE2 = 1] = "MODE2", t[t.MODE3 = 2] = "MODE3", t[t.MODE4 = 3] = "MODE4", t[t.MODE5 = 4] = "MODE5", t[t.MODE6 = 5] = "MODE6", t[t.MODE7 = 6] = "MODE7", t[t.MODE8 = 7] = "MODE8", t[t.MODE9 = 8] = "MODE9", t[t.MODE10 = 9] = "MODE10", t[t.MODE20 = 20] = "MODE20", t[t.MODE21 = 21] = "MODE21", t[t.MODE22 = 22] = "MODE22", t[t.MODE23 = 23] = "MODE23", t[t.MODE24 = 24] = "MODE24"
    }(n || (n = {})), e.TraceSceneMode = n;
    var u = new c;
    e.traceSceneManager = u
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestFire = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseFire = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestShot = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseShot = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(20),
        s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestSweep = s;
    var r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(a.MyResponse);
    e.ResponseSweep = r
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(17),
        s = i(3),
        r = i(1),
        h = i(0),
        l = function(t) {
            function e(e, i, n) {
                var o = t.call(this, PIXI.Texture.fromFrame("aim_target")) || this;
                return o.activeAim = !1, o.activeAuto = !1, o.init(e, i, n), o
            }
            return o(e, t), e.prototype.init = function(t, e, i) {
                var n = this,
                    o = e.parent;
                this.anchor.set(.5), this.fishContainer = e, this.scene = t, this.lightn = i, this.aimEffectSprite = PIXI.Sprite.fromFrame("Target"), this.aimEffectSprite.anchor.set(.5), o.on("pointermove", function(t) {
                    var e = t.data.getLocalPosition(n.scene);
                    if (n.position.set(e.x, e.y), !n.activeAim) {
                        if ((e.x < 0 || e.x > r.default.width || e.y < 0 || e.y > r.default.height) && n.activeAuto) return;
                        n.aimEffectSprite.position.set(e.x, e.y)
                    }
                }), o.on("pointerout", function() {
                    n.visible = !1, n.activeAim || n.activeAuto || n.hideEffectAim()
                }), o.on("pointerover", function() {
                    return n.visible = !0
                }), o.on("pointerdown", function(t) {
                    if (!n.activeAim && !n.lightn.activelightn && n.aimEffectSprite.visible) {
                        var e = t.data.getLocalPosition(n.scene);
                        n.showEffectAim(e)
                    }
                }), o.on("pointerup", function(t) {
                    n.activeAim || n.lightn.activelightn || n.aimEffectSprite.visible && (n.activeAuto || n.hideEffectAim())
                })
            }, e.prototype.showEffectAim = function(t) {
                var e = this;
                this.aimEffectSprite.parent && this.scene.removeChild(this.aimEffectSprite), this.aimShowTween && this.aimShowTween.kill(), this.aimHideTween && this.aimHideTween.kill(), this.aimShowTween = new s.TimelineLite({
                    onStart: function() {
                        e.scene.addChild(e.aimEffectSprite), e.aimEffectSprite.alpha = .5, e.aimEffectSprite.scale.set(1.3), e.aimEffectSprite.visible && e.aimEffectSprite.position.set(t.x, t.y)
                    }
                }), this.aimShowTween.to(this.aimEffectSprite, .3, {
                    alpha: 1
                }), this.aimShowTween.to(this.aimEffectSprite.scale, .3, {
                    x: 1,
                    y: 1
                }, "-=0.3")
            }, e.prototype.hideEffectAim = function() {
                var t = this;
                this.aimEffectSprite && (this.aimHideTween = s.TweenMax.to(this.aimEffectSprite, .2, {
                    alpha: 0,
                    onComplete: function() {
                        return t.scene.removeChild(t.aimEffectSprite)
                    }
                }))
            }, e.prototype.show = function() {
                a.default.isIE() || a.default.isEdge() ? this.scene.addChild(this) : this.fishContainer.cursor = "url('" + h.default.resources.aim_target.url + "') 49 49,auto", this.activeAim = !0
            }, e.prototype.hide = function() {
                a.default.isIE() || a.default.isEdge() ? this.scene.removeChild(this) : this.fishContainer.cursor = "default", this.activeAim = !1
            }, e.prototype.setAutoState = function(t) {
                this.activeAuto = t, this.activeAuto || this.scene.removeChild(this.aimEffectSprite)
            }, e.prototype.setAimVisible = function(t, e) {
                this.aimEffectSprite.visible = t, e && (this.aimEffectSprite.position = e)
            }, e.prototype.showAimEffect = function(t) {
                this.aimEffectSprite.visible = !0, this.aimEffectSprite.alpha = 1, this.aimEffectSprite.position = t, this.scene.addChild(this.aimEffectSprite)
            }, e
        }(PIXI.Sprite);
    e.default = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestMultiFire = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseMultiFire = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(7),
        r = i(2),
        h = i(1),
        l = i(329),
        c = i(0),
        u = i(3),
        d = i(9),
        f = i(32),
        p = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                i.freeInfo = e.freeInfo, i.batteryPos = r.default.getLocalPosition(i.batteryContainer.getBatteryPosition(i.chairId), h.default.scale);
                var n = r.default.getPointForView(new s.Point(e.fish.x, e.fish.y), c.default.isView);
                return i.fishPos = new s.Point(n.x - h.default.width / 2, n.y - h.default.height / 2), i
            }
            return o(e, t), e.prototype.intro = function() {
                var t = this,
                    e = new l.default(c.default.resources.gun_spe.spineData, this.fishKind, this.fishId, this.chairId < 0);
                e.skeleton.setToSetupPose(), this.effectContainer.addChild(e);
                var i = new PIXI.spine.Spine(c.default.resources.firestorm.spineData);
                i.skeleton.setToSetupPose(), this.effectContainer.addChild(i);
                var n = new u.TimelineLite;
                n.call(function() {
                    t.onRemoveFish(), i.position.set(t.fishPos.x, t.fishPos.y), i.state.setAnimation(0, "leave", !1), t.chairId < 0 && t.scene.quake(), d.default.playFirestormExplode()
                }), n.to(i, .5, {
                    x: 0,
                    y: 0
                }), n.call(function() {
                    if (t.signalInterrupt) return t.destroy();
                    t.batteryContainer.addSpecailGun(e, t.chairId), d.default.playFirestormEffect()
                }, null, null, "+=0.5"), n.call(function() {
                    if (t.signalInterrupt) return t.destroy();
                    t.initWinText(), t.initTotalWinTxt(), t.showIntroBox()
                }, null, null, "+=2"), this.tmlList.push(n)
            }, e.prototype.initWinText = function() {
                this.container = new PIXI.Container, this.effectContainer.addChild(this.container), this.winEffect = new PIXI.spine.Spine(c.default.resources.bigfish_intro.spineData), this.winEffect.skeleton.setToSetupPose(), this.winTxt = this.createTxt("firestorm_number", 50), this.showBulletNum(this.freeInfo.count), this.container.addChild(this.winEffect, this.winTxt), this.container.scale.set(0)
            }, e.prototype.showBulletNum = function(t) {
                var e = null,
                    i = 1,
                    n = .5;
                switch (c.default.locale.lan) {
                    case f.Language.Indonesian:
                        e = {
                            x: -6,
                            y: 104
                        }, i = .8;
                        break;
                    case f.Language.Thai:
                        e = {
                            x: -36,
                            y: 105
                        }, i = .8;
                        break;
                    case f.Language.Vietnamese:
                        e = {
                            x: 47,
                            y: 105
                        }, i = .8;
                        break;
                    case f.Language.Japanese:
                        e = {
                            x: -75,
                            y: 102
                        }, n = 1;
                        break;
                    case f.Language.Russian:
                        e = {
                            x: 188,
                            y: 103
                        }, i = .8, n = 0;
                        break;
                    case f.Language.Turkish:
                        e = {
                            x: -125,
                            y: 104
                        }, i = .8, n = 1;
                        break;
                    default:
                        e = {
                            x: 0,
                            y: 102
                        }
                }
                this.winTxt.text = t + "", this.winTxt.position.set(e.x, e.y), this.winTxt.scale.set(i), this.winTxt.anchor = new s.Point(n, .5)
            }, e.prototype.clearWinText = function() {
                this.winTxt.text = "", this.winTxt.scale.set(1), this.winTxt.anchor = .5
            }, e.prototype.showIntroBox = function() {
                var t = this,
                    e = this.container.scale,
                    i = this.container.position,
                    n = this.chairId < 0,
                    o = this.getTargetPos(55),
                    a = this.getWinAniNameArr(),
                    s = a[0],
                    r = a[1];
                this.leftShotCount = this.freeInfo.count - this.freeInfo.index;
                var h = new u.TimelineLite;
                h.call(function() {
                    t.winEffect.state.setAnimation(0, s, !1), t.winEffect.state.addAnimation(0, r, !0, 0), d.default.playFirestormEffectAppear()
                }), n && h.set(i, {
                    x: 0,
                    y: 0
                }), !n && h.set(i, {
                    x: o.x,
                    y: o.y
                }), h.to(e, .5, {
                    x: n ? 1 : .5,
                    y: n ? 1 : .5,
                    ease: u.Elastic.easeOut.config(1, .5)
                }), h.call(function() {
                    t.clearWinText(), t.winEffect.state.setAnimation(0, "fire_leave", !1), d.default.playFirestormEffectStart()
                }, null, null, "+=2"), h.call(function() {
                    return t.setWaitShot()
                }, null, null, "+=0.8"), this.tmlList.push(h)
            }, e.prototype.setWaitShot = function() {
                if (this.onIntro(), this.isReady = !0, this.signalInterrupt) return this.destroy();
                this.initFreeInfo()
            }, e.prototype.initFreeInfo = function() {
                this.freeCont = new PIXI.Container, this.effectContainer.addChild(this.freeCont);
                var t = this.getTargetPos(10),
                    e = t.y < 0;
                this.freeCont.position.set(t.x, t.y);
                var i = PIXI.Sprite.fromFrame("freeContBg");
                i.anchor.set(.5), this.freeCont.addChild(i);
                var n = PIXI.Sprite.fromFrame("freeCountTitle.png");
                n.anchor.set(.5), this.freeCont.addChild(n), n.y = e ? 30 : -30;
                var o = new PIXI.extras.BitmapText(this.leftShotCount.toString(), {
                    font: "number_free_info"
                });
                o.anchor = .5, this.freeCont.addChild(o), this.freeNum = o
            }, e.prototype.winEffectEnd = function(t) {
                var e = this.getWinAniNameArr()[2];
                this.winEffect.state.setAnimation(0, e, !1), this.freeCont && (this.freeCont.visible = !1), this.endAni()
            }, e.prototype.endAni = function() {
                var t = this,
                    e = this.container.scale,
                    i = this.container.position,
                    n = this.chairId < 0,
                    o = this.getTargetPos(55),
                    a = new u.TimelineLite({});
                a.set(e, {
                    x: 0,
                    y: 0
                }), n && a.set(i, {
                    x: 0,
                    y: 0
                }), !n && a.set(i, {
                    x: o.x,
                    y: o.y
                }), a.call(function() {
                    return d.default.playFirestormEffectWin()
                }), a.to(e, .5, {
                    x: n ? 1 : .5,
                    y: n ? 1 : .5,
                    ease: u.Elastic.easeOut.config(.8, .4)
                }).to(e, .5, {
                    x: 0,
                    y: 0,
                    ease: u.Back.easeIn.config(.2)
                }, "+=2"), a.call(function() {
                    t.destroy()
                }, null, null, "-=0.5"), this.tmlList.push(a)
            }, e.prototype.updateFreeCount = function(t, e, i, n) {
                void 0 === e && (e = !1), void 0 === i && (i = null), void 0 === n && (n = 0), e && (this.leftShotCount += n), this.leftShotCount += t, this.freeNum && (this.freeNum.text = this.leftShotCount.toString())
            }, e.prototype.isFinishShot = function() {
                return 0 == this.leftShotCount
            }, e.prototype.endShot = function(t) {
                var e = this,
                    i = new u.TimelineLite;
                i.call(function() {
                    e.onPreComplete(), e.takeAllWin(t), e.winEffectEnd()
                }), i.add(u.TweenMax.to(this.totalWinTxt, .3, {
                    alpha: 0
                }), "+=1"), this.tmlList.push(i)
            }, e.prototype.takeAllWin = function(t) {
                this.winTxt.text = r.default.formatAmount(t), this.winTxt.position.set(0, 102)
            }, e.prototype.destroy = function() {
                var e = this,
                    i = new u.TimelineLite;
                i.call(function() {
                    return e.batteryContainer.removeSpecialGun(e.chairId)
                }), i.call(function() {
                    return t.prototype.destroy.call(e)
                }, null, null, "+=0.8")
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, this.isReady && this.destroy()
            }, e
        }(a.default);
    e.default = p
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        function e() {
            var e = t.call(this, [PIXI.Texture.fromFrame("coin_00.png")]) || this;
            return e.anchor.set(.5), e.animationSpeed = .5, e
        }
        return o(e, t), e.prototype.initFrames = function(t) {
            for (var e = t ? "" : "gray_", i = [], n = 0; n < 15; n++) {
                var o = n < 10 ? "0" + n : n;
                i.push(PIXI.Texture.fromFrame("coin_" + (e + o) + ".png"))
            }
            return i
        }, e
    }(PIXI.extras.AnimatedSprite);
    e.default = a
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        bigWin: [{
            x: 48,
            y: -198.5
        }, {
            x: 140,
            y: -138
        }, {
            x: 171,
            y: -221
        }, {
            x: 107.5,
            y: -175.5
        }, {
            x: 57.5,
            y: -129.5
        }, {
            x: 105.5,
            y: -233
        }, {
            x: 67.5,
            y: -247
        }, {
            x: 96.5,
            y: -140
        }, {
            x: 106,
            y: -324.5
        }, {
            x: 244,
            y: -51
        }, {
            x: 107,
            y: -37
        }, {
            x: 207.5,
            y: -125.5
        }, {
            x: 154.5,
            y: 84.5
        }, {
            x: 284.5,
            y: -50.5
        }, {
            x: -21.5,
            y: -186
        }, {
            x: 175.5,
            y: 6
        }, {
            x: -43,
            y: -240.5
        }, {
            x: -185,
            y: -68
        }, {
            x: -126,
            y: -53
        }, {
            x: -88.5,
            y: -165.5
        }, {
            x: -125.5,
            y: -40.5
        }, {
            x: -189.5,
            y: -168
        }, {
            x: -121.5,
            y: -272
        }, {
            x: 259.5,
            y: -175
        }],
        normal: [{
            x: 644.4 - 538.5,
            y: -324.4
        }, {
            x: 244,
            y: -51
        }, {
            x: 645.4 - 538.5,
            y: 556.6 - 593.5
        }, {
            x: 207.5,
            y: -125.5
        }, {
            x: 692.9 - 538.5,
            y: 678.1 - 593.5
        }, {
            x: 809.2 - 538.5,
            y: 545.9 - 593.5
        }, {
            x: 516.9 - 538.5,
            y: 407.6 - 593.5
        }, {
            x: 175.5,
            y: 6
        }],
        101: {
            start: [{
                x: 48,
                y: -198.5
            }, {
                x: 140,
                y: -138
            }, {
                x: 171,
                y: -221
            }, {
                x: 107.5,
                y: -175.5
            }, {
                x: 57.5,
                y: -129.5
            }, {
                x: 105.5,
                y: -234
            }, {
                x: 67.5,
                y: -247
            }, {
                x: 96.5,
                y: -140
            }, {
                x: 106,
                y: -324.5
            }, {
                x: 244,
                y: -51
            }, {
                x: 107,
                y: -37
            }, {
                x: 207.5,
                y: -125.5
            }, {
                x: 154.5,
                y: 84.5
            }, {
                x: 284.5,
                y: -50
            }, {
                x: -21.5,
                y: -186
            }, {
                x: 175.5,
                y: 6
            }, {
                x: -43,
                y: -240.5
            }, {
                x: -185,
                y: -68
            }, {
                x: -126,
                y: -53
            }, {
                x: -88.5,
                y: -165.5
            }, {
                x: -125.5,
                y: -40.5
            }, {
                x: -189.5,
                y: -168
            }, {
                x: -121.5,
                y: -272
            }, {
                x: 259.5,
                y: -175
            }],
            end: [{
                x: -517.3,
                y: -100
            }, {
                x: 303 - 632.3,
                y: -239
            }, {
                x: 426.6 - 632.3,
                y: -341
            }, {
                x: 623 - 632.3,
                y: 285.5
            }, {
                x: -263.9,
                y: -187.5
            }, {
                x: 518.5 - 632.3,
                y: 157
            }, {
                x: 368 - 632.3,
                y: -235
            }, {
                x: 426.7 - 632.3,
                y: 125.5
            }, {
                x: 717 - 632.3,
                y: -235
            }, {
                x: 566 - 632.3,
                y: -92
            }, {
                x: 514 - 632.3,
                y: -139
            }, {
                x: 565 - 632.3,
                y: 188.5
            }, {
                x: 619 - 632.3,
                y: -41.5
            }, {
                x: 602.5 - 632.3,
                y: 43
            }, {
                x: 580.5 - 632.3,
                y: -94
            }, {
                x: 668.5 - 632.3,
                y: -34.5
            }, {
                x: -473.4,
                y: 4
            }, {
                x: 214 - 632.3,
                y: -115
            }, {
                x: 225 - 632.3,
                y: -140
            }, {
                x: 1136 - 632.3,
                y: 24.5
            }, {
                x: 921 - 632.3,
                y: 234.5
            }, {
                x: 784.5 - 632.3,
                y: -19
            }, {
                x: 542.2,
                y: -67
            }, {
                x: 377.5 - 632.3,
                y: -273.5
            }, {
                x: 343.6,
                y: -21
            }, {
                x: 748 - 632.3,
                y: -134
            }, {
                x: 549 - 632.3,
                y: -224
            }, {
                x: 771 - 632.3,
                y: -91.5
            }, {
                x: 763 - 632.3,
                y: 284.5
            }, {
                x: 784.5 - 632.3,
                y: -19
            }, {
                x: 774.5 - 632.3,
                y: 11
            }, {
                x: 453.1 - 632.3,
                y: -187.5
            }, {
                x: 323 - 632.3,
                y: -155
            }, {
                x: 549 - 632.3,
                y: -14
            }, {
                x: 833 - 632.3,
                y: -420
            }, {
                x: 614 - 632.3,
                y: .5
            }, {
                x: 702 - 632.3,
                y: -136.5
            }, {
                x: 363.5 - 632.3,
                y: -23
            }, {
                x: 460.3 - 632.3,
                y: 188
            }, {
                x: 685.5 - 632.3,
                y: 137.5
            }]
        },
        103: {
            start: [{
                x: 191,
                y: 178
            }, {
                x: 234,
                y: 372.5
            }, {
                x: 110,
                y: 547
            }, {
                x: 328,
                y: 145.5
            }, {
                x: 368.5,
                y: 430.5
            }, {
                x: 479,
                y: 270.5
            }, {
                x: 373,
                y: 540.7
            }, {
                x: 418,
                y: 678.3
            }, {
                x: 598,
                y: 154.5
            }, {
                x: 665,
                y: 128.5
            }, {
                x: 625,
                y: 286
            }, {
                x: 752.6,
                y: 209
            }, {
                x: 718.5,
                y: 404.5
            }, {
                x: 679.5,
                y: 539
            }, {
                x: 738.1,
                y: 712.5
            }, {
                x: 922,
                y: 127.5
            }, {
                x: 897.5,
                y: 331
            }, {
                x: 871,
                y: 470
            }, {
                x: 1041,
                y: 168
            }, {
                x: 950.1,
                y: 540.1
            }, {
                x: 962,
                y: 810
            }, {
                x: 1043,
                y: 368.5
            }, {
                x: 1125.5,
                y: 528.5
            }, {
                x: 1193,
                y: 753.5
            }, {
                x: 1270,
                y: 193.5
            }, {
                x: 1230,
                y: 375.5
            }, {
                x: 1341.1,
                y: 594
            }],
            end: [{
                x: -529,
                y: -307
            }, {
                x: -486,
                y: -112.5
            }, {
                x: -610,
                y: 62
            }, {
                x: -392,
                y: -339.5
            }, {
                x: -351.5,
                y: -54.5
            }, {
                x: -241,
                y: -214.5
            }, {
                x: -347,
                y: 460.7 - 405
            }, {
                x: -302,
                y: 598.3 - 405
            }, {
                x: -122,
                y: -330.5
            }, {
                x: -55,
                y: -356.5
            }, {
                x: -95,
                y: -199
            }, {
                x: 752.6 - 720,
                y: -276
            }, {
                x: -1.5,
                y: -80.5
            }, {
                x: -40.5,
                y: 54
            }, {
                x: 738.1 - 720,
                y: 227.5
            }, {
                x: 202,
                y: -357.5
            }, {
                x: 177.5,
                y: -154
            }, {
                x: 151,
                y: -15
            }, {
                x: 321,
                y: -317
            }, {
                x: 950.1 - 720,
                y: 460.1 - 405
            }, {
                x: 242,
                y: 325
            }, {
                x: 323,
                y: -116.5
            }, {
                x: 405.5,
                y: 43.5
            }, {
                x: 473,
                y: 268.5
            }, {
                x: 550,
                y: -291.5
            }, {
                x: 510,
                y: -109.5
            }, {
                x: 1341.1 - 720,
                y: 109
            }]
        }
    }
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(3),
        r = i(2),
        h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.winTweenList = [], e
            }
            return o(e, t), e.prototype.init = function(t) {
                this.chairId = t.chairId, this.direction = t.direction, this.isLeftChair = t.isLeftChair
            }, e.prototype.createText = function() {
                var t = this.chairId < 0,
                    e = new PIXI.extras.BitmapText("", {
                        font: {
                            name: "number_" + (t ? "gold" : "gray"),
                            size: 50
                        }
                    });
                return e.anchor = .5, e
            }, e.prototype.createAni = function(t) {
                var e = this,
                    i = new s.TimelineLite({
                        onComplete: function() {
                            t && (t.parent.removeChild(t), t.destroy(), t = null), e.winTweenList.shift(), i.kill()
                        }
                    });
                return i.call(function() {
                    return t.scale.set(0)
                }), i.to(t, 2, {
                    y: (-1 == this.direction ? "-" : "+") + "=250",
                    ease: s.Linear.easeNone
                }), i.to(t.scale, .5, {
                    x: 1.2,
                    y: 1.2
                }, "-=2"), i.to(t.scale, .5, {
                    x: 1,
                    y: 1
                }, "-=1.5"), i.to(t, .5, {
                    alpha: 0
                }, "-=0.5"), i.to(t, .4, {
                    y: (-1 == this.direction ? "-" : "+") + "=50",
                    ease: s.Linear.easeNone
                }), i
            }, e.prototype.addWin = function(t) {
                var e = this.createText();
                if (e.text = "+" + r.default.formatAmount(t), this.isLeftChair && (e.x = e.width / 2), this.addChild(e), this.winTweenList && this.winTweenList.length > 0 && this.lastWinTime) {
                    var i = (new Date).getTime() - this.lastWinTime;
                    i < 400 && this.winTweenList.forEach(function(t) {
                        if (t) {
                            var e = t.progress() + (400 - i) / 400 * (50 / 300);
                            t.progress(e > 1 ? 1 : e)
                        }
                    })
                }
                var n = this.createAni(e);
                this.winTweenList.push(n), this.lastWinTime = (new Date).getTime()
            }, e
        }(a.Container);
    e.default = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(148),
        s = i(9),
        r = function(t) {
            function e(e, i, n, o) {
                var a = t.call(this, e, o) || this;
                return a.kind = i, a.id = n, a
            }
            return o(e, t), e.prototype.shot = function() {
                this.state.setAnimation(0, "gun_spe_shot", !1), this.isMe && s.default.playSpecialShot()
            }, e.prototype.hide = function() {
                this.state.setAnimation(0, "gun_spe_out", !1)
            }, e.prototype.show = function() {
                this.state.setAnimation(0, "gun_spe_in", !1)
            }, e
        }(a.Gun);
    e.default = r
}, , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(7),
        r = i(0),
        h = i(2),
        l = i(1),
        c = i(3),
        u = i(9),
        d = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.iconPositions = {}, i.isBgAniPlaying = !1, i.background = e.background, i
            }
            return o(e, t), e.prototype.intro = function() {
                this.initWinText(), this.initAni(this.fish.position), this.onRemoveFish(), u.default.playThunderHammerDead()
            }, e.prototype.initWinText = function() {
                t.prototype.initWinText.call(this), this.winTxt.y -= 18, this.winTxt.font = {
                    name: "hammer_number",
                    size: 59
                }
            }, e.prototype.playAni = function() {
                var t = this;
                this.ani.state.setAnimation(0, "bomm", !1);
                var e = new c.TimelineLite;
                e.call(function() {
                    return u.default.playThunderhammerLight()
                }, null, null, "+=1.5"), e.call(function() {
                    if (t.signalInterrupt) return t.destroy();
                    t.isBgAniPlaying = !0, t.background.startHammerBoomAni(), -1 == t.chairId && t.onIntro(), u.default.playThunderhammerHit()
                }, null, null, "+=3.2"), this.tmlList.push(e)
            }, e.prototype.initAni = function(t) {
                var e = this,
                    i = new PIXI.spine.Spine(r.default.resources.hammer.spineData);
                i.skeleton.setToSetupPose(), i.state.setAnimation(0, "other_hit", !1);
                var n = new c.TimelineLite;
                n.call(function() {
                    if (e.signalInterrupt) return e.destroy();
                    e.chairId < 0 ? e.introMine(0, function() {
                        return u.default.playThunderhammerEffectAppear()
                    }) : e.introOthers(0, .7)
                }, null, null, "+=" + 25 / 30), this.tmlList.push(n), t = h.default.getPointForView(new s.Point(t.x, t.y), r.default.isView), i.position.set(t.x - .5 * l.default.width, t.y - .5 * l.default.height), this.effectContainer.addChildAt(i, 0), this.ani = i, c.TweenMax.to(i, .5, {
                    x: 0,
                    y: 0
                })
            }, e.prototype.effectStartMove = function() {
                this.playAni(), u.default.playThunderhammerEffectMove()
            }, e.prototype.effectStart = function() {
                this.chairId < 0 || this.playAni()
            }, e.prototype.playSweepEnd = function(t) {
                this.winEffectEnd(t), this.isBgAniPlaying = !1, this.background.endHammerBoomAni()
            }, e.prototype.playSweepEndOther = function(t) {
                var e = this,
                    i = this.ani,
                    n = new c.TimelineLite({
                        onComplete: function() {
                            e.winEffectEnd(t)
                        }
                    });
                n.to(i, .5, {
                    alpha: 0,
                    ease: c.Linear.easeInOut
                }), this.tmlList.push(n), this.background.endHammerBoomAni()
            }, e.prototype.winEffectEnd = function(t) {
                this.chairId < 0 ? this.endMine(t) : this.endOthers(t)
            }, e.prototype.endMineAni = function(t) {
                var e = this;
                this.ani.destroy(), this.ani = null, u.default.playThunderhammerEffectWin();
                var i = this.getWinAniNameArr()[2];
                i && this.winEffect.skeleton.setSkinByName(i);
                var n = h.default.formatAmount(t.amount),
                    o = this.createTxt("hammer_number", 59);
                this.updateWinTxt(n), o.text = n, o.position = this.winTxt.position, this.container.addChild(o);
                var a = new c.TimelineLite;
                a.to(o.scale, .8, {
                    x: 5,
                    y: 5,
                    ease: c.Linear.easeOut
                }), a.to(o, .6, {
                    alpha: 0,
                    ease: c.Linear.easeOut
                }, "-=0.8"), a.call(function() {
                    return e.winEffect.state.setAnimation(0, "hammer_enter", !1)
                }), a.call(function() {
                    if (e.signalInterrupt) return e.destroy(); - 1 == e.chairId ? e.showCoins(t) : t.onComplete && t.onComplete(), e.startDestroyAni(!1, 1)
                }, null, null, "+=" + 22 / 30), this.tmlList.push(a)
            }, e.prototype.endOthers = function(t) {
                this.endMineAni(t)
            }, e.prototype.destroy = function() {
                this.isBgAniPlaying && this.background.endHammerBoomAni(), t.prototype.destroy.call(this)
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, this.destroy()
            }, e
        }(a.default);
    e.default = d
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(3),
        r = i(2),
        h = i(0),
        l = i(1),
        c = i(9),
        u = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.iceEndTime = 0, i.isBgAniPlaying = !1, i.isFishStop = !1, i.onPause = e.onPause, i.onResume = e.onResume, i.onCanShot = e.onCanShot, i
            }
            return o(e, t), e.prototype.intro = function(e) {
                t.prototype.intro.call(this), this.onCatch(), this.winTxt.x = 16, this.winTxt.y = 96, this.iceEndTime = new Date(e).getTime() - h.default.serverTimeDiff - r.default.getTimeZoneMillDiff(h.default.serverTimeZone), c.default.playAzureStoneEffectExplode()
            }, e.prototype.introMine = function(t) {
                var e = this;
                void 0 === t && (t = 2), t = 1;
                var i = this.container.scale,
                    n = this.container.position,
                    o = this.getWinAniNameArr(),
                    a = o[0],
                    r = (o[1], o[2], new s.TimelineLite);
                r.call(function() {
                    e.winEffect.state.setAnimation(0, a, !1)
                }, null, null, "+=" + t), r.call(function() {
                    e.isBgAniPlaying = !0, e.background.startIceAni(), e.chairId < 0 && e.scene.quake()
                }), r.to(i, .5, {
                    x: 1,
                    y: 1,
                    ease: s.Elastic.easeOut.config(1, .5)
                }), r.call(function() {
                    e.showTextAni()
                }).to(i, .5, {
                    x: 0,
                    y: 0,
                    ease: s.Power1.easeIn
                }, "+=1.5").to(n, .5, {
                    x: this.coinPos.x - .5 * l.default.width + 50,
                    y: this.coinPos.y - .5 * l.default.height,
                    ease: s.Power1.easeIn
                }, "-=0.5"), this.tmlList.push(r)
            }, e.prototype.introOthers = function() {
                this.introMine()
            }, e.prototype.pauseFish = function(t) {
                var e = this;
                this.effectFishIds = t;
                var i = new s.TimelineLite;
                i.call(function() {
                    e.isFishStop = !0, t && e.onPause(t)
                }), i.call(function() {
                    return e.effectStart()
                }, null, null, "+=0.5"), c.default.playAzureStoneBg()
            }, e.prototype.effectStart = function() {
                var t = this;
                this.onCanShot();
                var e = this.iceEndTime - (new Date).getTime() < 0 ? 0 : this.iceEndTime - (new Date).getTime(),
                    i = this.effectFishIds,
                    n = new s.TimelineLite;
                n.call(function() {
                    t.isFishStop = !1, t.isBgAniPlaying = !1, i && t.onResume(i), t.background.endIceAni(), c.default.stopAzureStoneBg(), t.destroy()
                }, null, null, "+=" + e / 1e3), this.tmlList.push(n), this.showWinAni(this.totalWin, function() {
                    t.batteryContainer.setBalanceDiff(t.totalWin, t.chairId)
                }, !1)
            }, e.prototype.showTextAni = function() {
                var t = this.createTxt("number_effect_intro", 60);
                t.text = this.winTxt.text, t.position = this.winTxt.position, this.container.addChild(t);
                var e = new s.TimelineLite;
                e.to(t.scale, .7, {
                    x: 2,
                    y: 2,
                    ease: s.Linear.easeInOut
                }), e.to(t, .5, {
                    alpha: 0
                }, "-=0.3"), this.tmlList.push(e)
            }, e.prototype.destroy = function() {
                this.isBgAniPlaying = !1, this.isFishStop = !1, this.effectFishIds = null, t.prototype.destroy.call(this)
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, this.destroy()
            }, e.prototype.clear = function() {
                this.onCanShot && this.onCanShot(), this.isBgAniPlaying && this.background.endIceAni(!0), this.isBgAniPlaying = !1, this.isFishStop && this.effectFishIds && this.onResume(this.effectFishIds), this.isFishStop = !1, this.effectFishIds = null, t.prototype.destroy.call(this)
            }, e
        }(a.default);
    e.default = u
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(0),
        r = i(3),
        h = i(1),
        l = i(7),
        c = i(2),
        u = i(80),
        d = i(9),
        f = i(149),
        p = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.curRound = 0, i.centerEffectContainer = e.centerEffectContainer, i
            }
            return o(e, t), e.prototype.initWinText = function() {
                this.container = new PIXI.Container, this.effectContainer.addChild(this.container), this.winEffect = new PIXI.spine.Spine(s.default.resources.bigfish_intro.spineData), this.winEffect.skeleton.setToSetupPose(), this.winTxt = this.createTxt("number_effect_intro", 60), this.winTxt.position.set(0, 140), this.winEffect.addChild(this.winTxt), this.effectAniUp = new PIXI.spine.Spine(s.default.resources.bigfish_intro_up.spineData), this.effectAniUp.skeleton.setToSetupPose(), this.container.addChild(this.winEffect, this.effectAniUp), this.container.scale.set(0)
            }, e.prototype.intro = function() {
                this.curRound = 0, this.totalWin = 0, t.prototype.intro.call(this), this.onIntro(), this.onCatch(), d.default.playAwakeningDragonDead(), this.boomContainer || (this.boomContainer = new PIXI.Container), this.centerEffectContainer.addChild(this.boomContainer), this.dragonEffectContainer || (this.dragonEffectContainer = new PIXI.Container, this.dragonEffectContainer.position.set(h.default.width / 2, h.default.height / 2)), this.centerEffectContainer.addChild(this.dragonEffectContainer), d.default.playAwakenDragonEffectBg()
            }, e.prototype.introMine = function() {
                var e = this;
                t.prototype.introMine.call(this), this.bgAni || (this.bgAni = new PIXI.spine.Spine(s.default.resources.dragon_bg.spineData)), this.bgAni.skeleton.setToSetupPose(), this.effectContainer.addChildAt(this.bgAni, 0);
                var i = new r.TimelineLite;
                i.call(function() {
                    e.bgAni.state.setAnimation(0, "enter", !1), e.effectAniUp.state.setAnimation(0, "dragon_enter2", !1), d.default.playAwakeningDragonIntro()
                }, null, null, "+=2"), this.tmlList.push(i)
            }, e.prototype.introOthers = function() {
                this.chairId > 0 && this.winEffect.scale.set(.85), t.prototype.introOthers.call(this, 2, 1, function() {
                    d.default.playAwakeningDragonIntro()
                })
            }, e.prototype.effectStart = function() {
                var t = this;
                if (this.signalInterrupt) return this.destroy();
                var e = this.getWinAniNameArr()[2];
                e && this.winEffect.skeleton.setSkinByName(e), this.updateWinTxt("0.00");
                var i = new r.TimelineLite;
                i.call(function() {
                    t.playDragonEffect(), t.curRound++, t.showRound()
                }), i.call(function() {
                    return t.showScreenBoom()
                }, null, null, "+=0.5"), i.call(function() {
                    return t.onShot()
                }, null, null, "+=1"), this.tmlList.push(i)
            }, e.prototype.playDragonEffect = function() {
                if (!this.dragonEffectList) {
                    this.dragonEffectList = [];
                    for (var t = 0; t < 4; t++) {
                        for (var e = [], i = 0; i < 72; i++) {
                            var n = i < 10 ? "0" + i : i,
                                o = "fish_103_swim_" + f.Directions[t] + n + ".png";
                            e.push(PIXI.Texture.fromFrame(o))
                        }
                        var a = new PIXI.extras.AnimatedSprite(e);
                        this.dragonEffectContainer.addChild(a), this.dragonEffectList.push(a)
                    }
                }
                this.dragonEffectList.forEach(function(t, e) {
                    t.renderable = !0, e % 2 == 1 && t.scale.set(-1), t.anchor.set(.5), t.animationSpeed = .4, t.loop = !1, t.gotoAndPlay(0), t.onComplete = function() {
                        t.renderable = !1
                    }
                })
            }, e.prototype.sweep = function(t, e, i) {
                var n = this,
                    o = new r.TimelineLite;
                o.call(function() {
                    t.forEach(function(t, i) {
                        e(t, i)
                    })
                }), void 0 != i && 9 != i && (o.call(function() {
                    n.playDragonEffect(), n.curRound++, n.showRound()
                }, null, null, "+=2.5"), o.call(function() {
                    n.showScreenBoom()
                }, null, null, "+=0.5"), o.call(function() {
                    n.onShot()
                }, null, null, "+=1")), void 0 != i && 9 == i && o.call(function() {
                    n.endEffect()
                }, null, null, "+=2.5"), this.tmlList.push(o)
            }, e.prototype.showRound = function() {
                this.roundSp || (this.roundSp = new y), this.effectContainer.addChild(this.roundSp), this.roundSp.setRoundNum(this.curRound), d.default.playAwakenEffectCount(this.curRound)
            }, e.prototype.showScreenBoom = function() {
                this.boomContainer.removeChildren();
                var t = new PIXI.spine.Spine(s.default.resources.dragon_boom.spineData);
                t.skeleton.setToSetupPose(), t.state.setAnimation(0, "wait", !1), t.position.set(h.default.width / 2, h.default.height / 2), this.boomContainer.addChild(t), d.default.playAwakenDragonExplode()
            }, e.prototype.playSweepEnd = function(t, e) {
                this.totalWin += Number(t.amount), this.runToNum(this.winTxt, this.totalWin), this.onShowEndText = t.onComplete
            }, e.prototype.playSweepEndOther = function(t, e) {
                this.totalWin += Number(t.amount), this.runToNum(this.winTxt, this.totalWin), this.onShowEndText = t.onComplete
            }, e.prototype.runToNum = function(t, e) {
                var i = this;
                this.numTween && this.numTween.kill();
                var n = {
                    win: Number(this.winTxt.text.replace(/,/g, ""))
                };
                this.numTween = r.TweenMax.to(n, .3, {
                    win: e,
                    ease: r.Linear.easeNone,
                    onUpdate: function() {
                        i.updateWinTxt(c.default.formatAmount(n.win))
                    },
                    onComplete: function() {
                        i.numTween.kill(), i.numTween = null
                    }
                }), d.default.playCoinCounting()
            }, e.prototype.endEffect = function() {
                var t = this;
                this.roundSp.hide(function() {
                    if (t.winEffectEnd(), d.default.stopAwakenDragonEffectBg(), d.default.playAwakenDragonEffectEnd(), -1 != t.chairId) {
                        var e = new r.TimelineLite;
                        e.call(function() {
                            return t.onShowEndText(t.totalWin)
                        }, null, null, "+=1"), t.tmlList.push(e)
                    }
                })
            }, e.prototype.endMine = function(t) {
                var e = this,
                    i = this.container.scale,
                    n = this.container.position,
                    o = new r.TimelineLite({
                        onComplete: function() {
                            e.endMineAni(t)
                        }
                    });
                o.call(function() {
                    return e.effectAniUp.state.setAnimation(0, "dragon_enter2", !1)
                }), o.to(i, .5, {
                    x: 1,
                    y: 1,
                    ease: r.Power1.easeIn
                }).to(n, .5, {
                    x: 0,
                    y: 0,
                    ease: r.Power1.easeIn
                }, "-=0.5")
            }, e.prototype.endOthers = function(t) {
                var e = this,
                    i = this.container.scale,
                    n = new r.TimelineLite;
                n.call(function() {
                    return e.effectAniUp.state.setAnimation(0, "dragon_enter2", !1)
                }), n.to(i, .5, {
                    x: 0,
                    y: 0,
                    ease: r.Elastic.easeIn.config(.8, .4)
                }, "+=2"), n.call(function() {
                    e.destroy()
                }), this.tmlList.push(n)
            }, e.prototype.getTargetPos = function() {
                var t = this.effectContainer.toLocal(c.default.getLocalPosition(this.batteryContainer.getBatteryPosition(this.chairId, !0))),
                    e = t.y > 0 ? t.y - 55 : t.y + 55;
                return this.chairId < 0 && (e = t.y > 0 ? e - 15 : e + 15), {
                    x: t.x,
                    y: e
                }
            }, e.prototype.startDestroyAni = function(e) {
                var i = this;
                void 0 === e && (e = !0), t.prototype.startDestroyAni.call(this, e);
                var n = c.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), h.default.scale),
                    o = {
                        isMe: -1 == this.chairId,
                        chairId: this.chairId,
                        position: new l.Point(.5 * h.default.width, .5 * h.default.height),
                        endPosition: n,
                        kind: 103,
                        isBigWin: !0,
                        isHideWin: !0,
                        isKindCoin: !0
                    };
                this.showCoins(o);
                var a = new r.TimelineLite;
                a.call(function() {
                    return i.onShowEndText(i.totalWin)
                }, null, null, "+=1"), this.tmlList.push(a)
            }, e.prototype.showCoins = function(t) {
                this.coinContainer = new u.default, this.coinContainer.position.set(.5 * -h.default.width, .5 * -h.default.height), this.effectContainer.addChild(this.coinContainer), this.coinContainer.showDragonEndCoins(t)
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this), this.centerEffectContainer.removeChild(this.boomContainer)
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, d.default.stopAwakenDragonEffectBg(), d.default.stopAwakenDragonExplode(), this.destroy()
            }, e
        }(a.default);
    e.default = p;
    h.default.width, h.default.width, h.default.width, h.default.width;
    var y = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.init(), e
        }
        return o(e, t), e.prototype.init = function() {
            this.bg = PIXI.Sprite.fromFrame("dragon_effect_round_bg"), this.bg.anchor.set(.5), this.numTxt = new PIXI.extras.BitmapText("", {
                font: "70px number_dragon_round"
            }), this.numTxt.anchor = .5, this.shadow = new PIXI.extras.BitmapText("", {
                font: "70px number_dragon_round"
            }), this.shadow.anchor = .5, this.shadow.renderable = !1, this.boomEffect = new PIXI.spine.Spine(s.default.resources.dragon_boom.spineData), this.boomEffect.skeleton.setToSetupPose(), this.boomEffect.renderable = !1, this.addChild(this.bg, this.numTxt, this.shadow, this.boomEffect)
        }, e.prototype.setRoundNum = function(t) {
            var e = this;
            this.numTxt.text = "" + t, this.shadow.text = "" + t, this.shadowTween = new r.TimelineLite, this.shadowTween.call(function() {
                e.scale.set(1), e.alpha = 1, e.shadow.renderable = !0, e.shadow.alpha = 1, e.shadow.scale.set(1)
            }), this.shadowTween.to(this.shadow, .5, {
                alpha: 0
            }), this.shadowTween.to(this.shadow.scale, .5, {
                x: 3,
                y: 3
            }, "-=0.5"), this.shadowTween.call(function() {
                e.shadow.renderable = !1, e.shadowTween.kill()
            })
        }, e.prototype.hide = function(t) {
            var e = this;
            this.shadowTween = new r.TimelineLite, this.shadowTween.to(this.scale, .25, {
                x: 2,
                y: 2
            }), this.shadowTween.to(this, .25, {
                alpha: 0
            }, "-=0.25"), this.shadowTween.call(function() {
                t(), e.boomEffect.renderable = !1
            }), this.boomEffect.renderable = !0, this.boomEffect.state.setAnimation(0, "nunmber_wait", !1)
        }, e
    }(PIXI.Container)
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(0),
        r = i(2),
        h = i(3),
        l = i(7),
        c = i(1),
        u = i(9),
        d = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.curRound = 0, i.background = e.background, i
            }
            return o(e, t), e.prototype.intro = function() {
                this.initAni(), this.chairId < 0 && this.scene.quake(), this.onRemoveFish()
            }, e.prototype.initAni = function() {
                var t = this;
                this.monkeyFireAni = new PIXI.spine.Spine(s.default.resources.monkeyking_fire.spineData), this.monkeyFireAni.skeleton.setToSetupPose(), this.monkeyAni = new PIXI.spine.Spine(s.default.resources.monkeyking.spineData), this.monkeyAni.skeleton.setToSetupPose(), this.effectContainer.addChild(this.monkeyFireAni, this.monkeyAni);
                var e = new h.TimelineLite;
                e.call(function() {
                    t.monkeyAni.state.setAnimation(0, "change", !1)
                }), e.call(function() {
                    t.background.startMonkeyAni("change")
                }, null, null, "+=0.3"), e.call(function() {
                    t.monkeyAni.renderable = !1, t.introEffect()
                }, null, null, "+=2.9"), this.tmlList.push(e);
                var i = r.default.getPointForView(new l.Point(this.fish.position.x, this.fish.position.y), s.default.isView);
                this.monkeyAni.position.set(i.x - .5 * c.default.width, i.y - .5 * c.default.height), u.default.playMonkeykingJump()
            }, e.prototype.initWinText = function() {
                t.prototype.initWinText.call(this), this.chairId > 0 && this.winEffect.scale.set(.9), this.winTxt.y -= 80
            }, e.prototype.introEffect = function() {
                this.initWinText(), this.chairId < 0 ? this.introMine(2, function() {
                    u.default.playMonkeykingEffectAppear()
                }) : this.introOthers()
            }, e.prototype.introOthers = function(e, i) {
                void 0 === e && (e = 2), void 0 === i && (i = 1), t.prototype.introOthers.call(this, e, 1.5, function() {
                    u.default.playMonkeykingEffectAppear()
                })
            }, e.prototype.effectStart = function() {
                var t = this;
                if (this.signalInterrupt) return this.destroy();
                var e = this.getWinAniNameArr()[2];
                e && this.winEffect.skeleton.setSkinByName(e), this.updateWinTxt("0.00");
                var i = new h.TimelineLite;
                i.call(function() {
                    t.monkeyAni.renderable = !0, t.monkeyAni.state.setAnimation(0, "hit_enter", !1), t.monkeyAni.state.addAnimation(0, "hit_wait", !0, 0), t.monkeyAni.position.set(0, 0)
                }), i.call(function() {
                    t.background.startMonkeyAni("enter")
                }, null, null, "+=0.2"), i.call(function() {
                    t.onShot(), u.default.playMonkeykingHit()
                }, null, null, "+=0.3"), i.call(function() {
                    t.background.startMonkeyAni("wait", !0)
                }, null, null, "+=1"), this.tmlList.push(i), u.default.playMonkeyKindAppear()
            }, e.prototype.getTargetPos = function() {
                var t = this.effectContainer.toLocal(r.default.getLocalPosition(this.batteryContainer.getBatteryPosition(this.chairId, !0))),
                    e = t.y > 0 ? t.y - 30 : t.y + 30;
                return this.chairId < 0 && (e = t.y > 0 ? e - 6 : e + 6), {
                    x: t.x,
                    y: e
                }
            }, e.prototype.sweep = function(t, e, i) {
                var n = this,
                    o = new h.TimelineLite;
                o.call(function() {
                    n.curRound++, n.showRound(), n.chairId < 0 && n.scene.quake(), 1 == n.curRound && n.background.startFireAni(), n.monkeyFireAni.state.setAnimation(0, "wait", !1), u.default.playMonkeykingBgFire(), t.forEach(function(t, i) {
                        e(t, i)
                    })
                }), o.call(function() {
                    if (void 0 == i || 9 != i) {
                        var t = new h.TimelineLite;
                        t.call(function() {
                            n.monkeyAni.state.setAnimation(0, "hit_hit", !1), n.monkeyAni.state.addAnimation(0, "hit_wait", !0, 0)
                        }), t.call(function() {
                            n.onShot(), u.default.playMonkeykingHit()
                        }, null, null, "+=" + 20 / 30), n.tmlList.push(t), n.background.startMonkeyAni("wait", !0)
                    } else n.endEffect()
                }, null, null, "+=2"), this.tmlList.push(o)
            }, e.prototype.showRound = function() {
                this.roundSp || (this.roundSp = new f), this.effectContainer.addChild(this.roundSp), this.roundSp.setRoundNum(this.curRound)
            }, e.prototype.playSweepEnd = function(t, e) {
                this.totalWin += Number(t.amount), this.updateWinTxt(r.default.formatAmount(this.totalWin)), this.onShowEndText = t.onComplete
            }, e.prototype.playSweepEndOther = function(t, e) {
                this.totalWin += Number(t.amount), this.updateWinTxt(r.default.formatAmount(this.totalWin)), this.onShowEndText = t.onComplete
            }, e.prototype.endEffect = function() {
                var t = this;
                this.monkeyAni.state.setAnimation(0, "hit_leave", !1), this.background.endFireAni(), this.background.endMonkeyAni(), this.roundSp.hide(function() {
                    if (t.winEffectEnd(), -1 != t.chairId) {
                        var e = new h.TimelineLite;
                        e.call(function() {
                            return t.onShowEndText(t.totalWin)
                        }, null, null, "+=1"), t.tmlList.push(e)
                    } else u.default.playMonkeykingWin();
                    u.default.stopMonkeykingBgFire()
                })
            }, e.prototype.startDestroyAni = function(e) {
                var i = this;
                void 0 === e && (e = !0), t.prototype.startDestroyAni.call(this, e);
                var n = r.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), c.default.scale),
                    o = {
                        isMe: -1 == this.chairId,
                        chairId: this.chairId,
                        position: new l.Point(.5 * c.default.width, .5 * c.default.height),
                        endPosition: n,
                        isBigWin: !0,
                        isKindCoin: !0,
                        kind: 103,
                        isHideWin: !0
                    };
                this.showCoins(o);
                var a = new h.TimelineLite;
                a.call(function() {
                    return i.onShowEndText(i.totalWin)
                }, null, null, "+=1"), this.tmlList.push(a)
            }, e.prototype.destroy = function() {
                this.background.endFireAni(), this.background.endMonkeyAni(), t.prototype.destroy.call(this)
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, this.destroy()
            }, e
        }(a.default);
    e.default = d;
    var f = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.init(), e
        }
        return o(e, t), e.prototype.init = function() {
            this.bg = new PIXI.spine.Spine(s.default.resources.monkeyking_rolling.spineData), this.bg.skeleton.setToSetupPose(), this.numTxt = new PIXI.extras.BitmapText("", {
                font: "70px number_dragon_round"
            }), this.numTxt.anchor = .5, this.addChild(this.bg, this.numTxt)
        }, e.prototype.setRoundNum = function(t) {
            var e = this;
            this.numTxt.text = "" + t, this.tween = new h.TimelineLite, 1 == t && this.tween.call(function() {
                e.bg.state.setAnimation(0, "wait", !0), e.numTxt.scale.set(0)
            }), 1 == t && this.tween.to(this.numTxt.scale, .3, {
                x: 1,
                y: 1,
                ease: h.Elastic.easeOut
            })
        }, e.prototype.hide = function(t) {
            this.bg.state.setAnimation(0, "leave", !1), this.tween = new h.TimelineLite, this.tween.to(this.numTxt.scale, .5, {
                x: 0,
                y: 0,
                ease: h.Power4.easeIn
            }), this.tween.call(function() {
                return t()
            }, null, null, "+=0.5")
        }, e
    }(PIXI.Container)
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(0),
        r = i(2),
        h = i(7),
        l = i(1),
        c = i(3),
        u = i(9),
        d = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                i.boxConts = [], i.boomAniList = [], i.boomCount = 0, i.isBoxing = [], i.isDying = !1, i.ghostFishEffectContainer = e.ghostFishEffectContainer;
                var n = r.default.getPointForView(new h.Point(e.fish.x, e.fish.y), s.default.isView);
                return i.fishPos = new h.Point(n.x - l.default.width / 2, n.y - l.default.height / 2), i
            }
            return o(e, t), e.prototype.introByType = function(t, e) {
                t ? (this.boxWin = e, this.introNoDie(), this.initNoDieAni(), this.isBoxing.push(!0), this.chairId < 0 && u.default.playTresureboxAppear()) : (this.intro(), this.isDying = !0)
            }, e.prototype.introNoDie = function() {
                var t = new PIXI.Container;
                this.effectContainer.addChild(t), this.boxConts.push(t);
                var e = PIXI.Sprite.fromFrame("ghostship_box");
                e.anchor.set(.5), e.renderable = !1;
                var i = new PIXI.spine.Spine(s.default.resources.ghostship_box_ani.spineData);
                i.skeleton.setToSetupPose();
                var n = PIXI.Sprite.fromFrame("ghostship_box_num_bg");
                n.anchor.set(.5), n.position.set(0, 120), n.renderable = !1;
                var o = r.default.formatAmount(this.boxWin),
                    a = new PIXI.extras.BitmapText("+" + o, {
                        font: "number_effect_intro"
                    });
                a.anchor = .5, a.y = -2, n.addChild(a), a.width = a.width > this.maxWinTxtLen ? this.maxWinTxtLen : a.width, t.addChild(i, e, n)
            }, e.prototype.initNoDieAni = function() {
                var t = this,
                    e = this.boxConts[this.boxConts.length - 1],
                    i = e.children,
                    n = i[0],
                    o = i[1],
                    a = i[2],
                    r = this.fishPos.x < 0,
                    h = -1 == this.chairId,
                    l = this.getTargetPos(),
                    u = new c.TimelineLite;
                u.set(o, {
                    x: this.fishPos.x,
                    y: this.fishPos.y,
                    renderable: !0
                }), u.set(o.scale, {
                    x: .3,
                    y: .3
                }), u.to(o, .2, {
                    x: r ? "+=220" : "-=220",
                    y: "-=20",
                    ease: c.Linear.easeNone
                }), u.to(o, .2, {
                    rotation: (r ? "+" : "-") + "=" + Math.PI / 6
                }, "-=0.3"), u.to(o, .3, {
                    x: r ? "+=135" : "-=135",
                    y: "+=70"
                }), u.to(o, .3, {
                    rotation: 0,
                    ease: c.Back.easeOut
                }), h && u.to(o, .2, {
                    x: 0,
                    y: 0,
                    ease: c.Linear.easeNone
                }), h && u.to(o.scale, .3, {
                    x: 1,
                    y: 1,
                    ease: c.Linear.easeNone
                }, "-=0.3"), !h && u.to(o, .2, {
                    x: l.x,
                    y: l.y,
                    ease: c.Linear.easeNone
                }), u.call(function() {
                    o.renderable = !1, !h && e.position.set(l.x, l.y + (s.default.isView ? -20 : 20)), !h && e.scale.set(.5), n.state.setAnimation(0, "open", !1), n.state.addListener({
                        event: function(e, i) {
                            "show" == i.data.name && (a.renderable = !0, t.showBoxCoin(h))
                        },
                        complete: function(e) {
                            "open" == e.animation.name && (n.state.clearListeners(), t.hideNoDieAni())
                        }
                    })
                }), this.tmlList.push(u)
            }, e.prototype.getTargetPos = function() {
                return t.prototype.getTargetPos.call(this, 75)
            }, e.prototype.showBoxCoin = function(t) {
                var e = this;
                if (t) {
                    var i = r.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), l.default.scale),
                        n = {
                            isMe: -1 == this.chairId,
                            chairId: this.chairId,
                            position: new h.Point(.5 * l.default.width, .5 * l.default.height),
                            endPosition: i,
                            kind: 101,
                            isBigWin: !0,
                            isHideWin: !0,
                            isKindCoin: !0
                        };
                    this.showCoins(n), u.default.playTresureboxWin()
                }
                this.showWinAni(this.boxWin, function() {
                    e.batteryContainer.setBalanceDiff(e.boxWin, e.chairId)
                })
            }, e.prototype.showWinAni = function(t, e) {
                var i = this,
                    n = -1 == this.chairId,
                    o = this.createTxt("number" + (n ? "_gold" : "_gray"), 50);
                this.effectContainer.addChild(o);
                var a = this.effectContainer.toLocal(r.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId, !0))),
                    s = a.y < 0,
                    l = a.x < 0;
                a.x = l ? a.x + 100 : a.x + 180, a.y = s ? a.y + 40 : a.y - 40, o.anchor = new h.Point(l ? 0 : 1, .5), o.position.set(a.x, a.y), o.alpha = 1, o.text = "+" + r.default.formatAmount(t), o.scale.set(0);
                var u = new c.TimelineLite({
                    onComplete: function() {
                        e && e(i.allShotWin)
                    }
                });
                u.to(o, .55, {
                    y: s ? a.y + 70 : a.y - 70,
                    ease: c.Power4.easeInOut
                }), u.to(o.scale, .4, {
                    x: 1.2,
                    y: 1.2,
                    ease: c.Power4.easeInOut
                }, "-=0.55"), u.to(o.scale, .15, {
                    x: 1,
                    y: 1,
                    ease: c.Power4.easeInOut
                }, "-=0.4"), u.to(o, .5, {
                    alpha: 0
                }, "+=1.5"), u.to(o.scale, .5, {
                    x: 0,
                    y: 0
                }, "-=0.5"), this.tmlList.push(u)
            }, e.prototype.hideNoDieAni = function() {
                var t = this,
                    e = r.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), l.default.scale),
                    i = new h.Point(e.x - l.default.width / 2, e.y - l.default.height / 2),
                    n = -1 == this.chairId,
                    o = this.boxConts.shift(),
                    a = new c.TimelineLite;
                n && a.to(o, .3, {
                    x: i.x,
                    y: i.y,
                    ease: c.Linear.easeNone
                }), a.to(o.scale, .3, {
                    x: 0,
                    y: 0,
                    ease: c.Linear.easeNone
                }, n ? "-=0.3" : null), a.call(function() {
                    o.destroy(), t.effectContainer.removeChild(o), o = null, t.isBoxing.shift(), t.destroy()
                }), this.tmlList.push(a)
            }, e.prototype.intro = function() {
                this.initAni(), this.initWinText(), this.onRemoveFish(), this.boomCount = 0
            }, e.prototype.initWinText = function() {
                this.container = new PIXI.Container, this.effectContainer.addChild(this.container), this.winEffect = new PIXI.spine.Spine(s.default.resources.bigfish_intro.spineData), this.winEffect.skeleton.setToSetupPose(), this.winTxt = this.createTxt("number_effect_intro", 60), this.winTxt.position.set(0, 155), this.container.addChild(this.winEffect, this.winTxt), this.container.scale.set(0)
            }, e.prototype.initAni = function() {
                var t = this;
                r.default.getPointForView(new h.Point(this.fish.position.x, this.fish.position.y), s.default.isView);
                this.fishAni = new PIXI.spine.Spine(s.default.resources.ghostship_ani_swim.spineData), this.fishAni.skeleton.setToSetupPose(), this.fishAni.position.set(this.fish.position.x, this.fish.position.y), this.ghostFishEffectContainer.addChild(this.fishAni);
                for (var e = 0; e < 2; e++) {
                    var i = new PIXI.spine.Spine(s.default.resources.ghostship_ani_boom.spineData);
                    i.skeleton.setToSetupPose(), i.position.set(l.default.width / 2, l.default.height / 2), this.ghostFishEffectContainer.addChild(i), this.boomAniList.push(i)
                }
                this.fishAni.state.setAnimation(0, "wait_0", !0), this.fishAni.scale.x = this.fish.scale.x, c.TweenMax.to(this.fishAni, .5, {
                    x: l.default.width / 2,
                    y: l.default.height / 2
                });
                var n = new c.TimelineLite;
                n.call(function() {
                    t.chairId < 0 ? t.introMine(2, function() {
                        u.default.speakGhostShipAppear()
                    }) : t.introOthers(2, 1, function() {
                        u.default.speakGhostShipAppear()
                    })
                }, null, null, "+=2"), this.tmlList.push(n)
            }, e.prototype.effectStart = function() {
                var t = this;
                if (this.signalInterrupt) return this.destroy();
                var e = this.getWinAniNameArr()[2];
                e && this.winEffect.skeleton.setSkinByName(e), this.updateWinTxt("0.00");
                var i = new c.TimelineLite;
                i.call(function() {
                    u.default.playGhostshipCannonExplode(), t.fishAni.state.setAnimation(0, "wait_1", !0), t.fishAni.state.addListener({
                        event: function(e, i) {
                            "again" == i.data.name && t.playBoom()
                        }
                    })
                }, null, null, "+=2"), i.call(function() {
                    t.onShot()
                }, null, null, "+=1"), this.tmlList.push(i)
            }, e.prototype.sweep = function(t, e, i) {
                var n = this,
                    o = new c.TimelineLite;
                o.call(function() {
                    t.forEach(function(t, i) {
                        e(t, i)
                    })
                }), void 0 != i && 9 != i && o.call(function() {
                    n.onShot()
                }, null, null, "+=2"), void 0 != i && 9 == i && o.call(function() {
                    n.playFishEnd()
                }, null, null, "+=2.5"), this.tmlList.push(o)
            }, e.prototype.playSweepEnd = function(t, e) {
                this.totalWin += Number(t.amount), this.runToNum(this.winTxt, this.totalWin), this.onShowEndText = t.onComplete
            }, e.prototype.playSweepEndOther = function(t, e) {
                this.totalWin += Number(t.amount), this.runToNum(this.winTxt, this.totalWin), this.onShowEndText = t.onComplete
            }, e.prototype.runToNum = function(t, e) {
                var i = this;
                this.numTween && this.numTween.kill();
                var n = {
                    win: Number(this.winTxt.text.replace(/,/g, ""))
                };
                this.numTween = c.TweenMax.to(n, .3, {
                    win: e,
                    ease: c.Linear.easeNone,
                    onUpdate: function() {
                        i.updateWinTxt(r.default.formatAmount(n.win))
                    },
                    onComplete: function() {
                        i.numTween.kill(), i.numTween = null
                    }
                }), u.default.playCoinCounting()
            }, e.prototype.startDestroyAni = function(t, e) {
                var i = this;
                void 0 === t && (t = !0), void 0 === e && (e = 1.5);
                var n = this.container.scale,
                    o = new c.TimelineLite;
                o.to(n, .5, {
                    x: 0,
                    y: 0,
                    ease: c.Elastic.easeIn.config(.8, .4)
                }, "+=" + e), o.call(function() {
                    i.isDying = !1, t && i.destroy()
                }), this.tmlList.push(o);
                var a = r.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), l.default.scale),
                    s = {
                        isMe: -1 == this.chairId,
                        chairId: this.chairId,
                        position: new h.Point(.5 * l.default.width, .5 * l.default.height),
                        endPosition: a,
                        kind: 103,
                        isBigWin: !0,
                        isHideWin: !0,
                        isKindCoin: !0
                    };
                this.showCoins(s), (o = new c.TimelineLite).call(function() {
                    return i.onShowEndText(i.totalWin)
                }, null, null, "+=1"), this.tmlList.push(o)
            }, e.prototype.playBoom = function() {
                this.boomCount++, this.boomCount >= 3 && (this.boomCount = 1), this.boomAniList[this.boomCount - 1].state.setAnimation(0, "wait", !1)
            }, e.prototype.playFishEnd = function() {
                var t = this;
                this.fishAni.state.setAnimation(0, "leave", !1), this.fishAni.state.addListener({
                    event: function(t, e) {
                        "boom" == e.data.name && u.default.playGhostshipFinalExplode()
                    },
                    complete: function(e) {
                        "leave" == e.animation.name && (t.fishAni.state.clearListeners(), t.endEffect())
                    }
                })
            }, e.prototype.endEffect = function() {
                var t = this;
                if (this.winEffectEnd(), u.default.playGhostshipEffectEnd(), -1 != this.chairId) {
                    var e = new c.TimelineLite;
                    e.call(function() {
                        return t.onShowEndText(t.totalWin)
                    }, null, null, "+=1"), this.tmlList.push(e)
                }
            }, e.prototype.endOthers = function(t) {
                var e = this,
                    i = this.container.scale,
                    n = new c.TimelineLite;
                n.to(i, .5, {
                    x: 0,
                    y: 0,
                    ease: c.Elastic.easeIn.config(.8, .4)
                }, "+=2"), n.call(function() {
                    e.isDying = !1, e.destroy()
                }), this.tmlList.push(n)
            }, e.prototype.destroy = function() {
                this.isBoxing.length > 0 || this.isDying || (this.fishAni && (this.fishAni.state.clearListeners(), this.ghostFishEffectContainer.removeChild(this.fishAni), this.fishAni = null), t.prototype.destroy.call(this))
            }, e.prototype.interrupt = function() {
                this.signalInterrupt = !0, u.default.stopGhostshipCannonExplode(), this.isBoxing = [], this.isDying = !1, this.destroy()
            }, e
        }(a.default);
    e.default = d
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(2),
        r = i(7),
        h = i(1),
        l = i(3),
        c = i(21),
        u = i(0),
        d = i(9),
        f = i(145),
        p = function(t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i.extArr = [], i.extArr2 = [], i.leftTime = 0, i.beginTime = 0, i.countdownTime = 10, i.batteryPos = s.default.getLocalPosition(i.batteryContainer.getBatteryPosition(i.chairId), h.default.scale), i
            }
            return o(e, t), e.prototype.intro = function(t, e, i) {
                var n = this,
                    o = new l.TimelineLite;
                this.extArr = e, this.extArr2 = i;
                var a = this.chairId < 0 ? .6 : .4;
                o.call(function() {
                    return n.onCatch()
                }), this.chairId < 0 && o.call(function() {
                    return n.introMine()
                }, null, null, a), this.chairId > 0 && o.call(function() {
                    return n.introOthers()
                }, null, null, a), o.call(function() {
                    if (n.isReady = !0, n.signalInterrupt) return n.destroy()
                }), this.tmlList.push(o)
            }, e.prototype.introMine = function() {
                this.initBack(0, .3), this.initContainer(), this.initContent(), this.initChooseItems(), this.playBoxAni(), d.default.playWealthPacketOpen(), this.batteryContainer.disableChangeGun(), d.default.playWealthPacketBg()
            }, e.prototype.introOthers = function() {
                var t = this,
                    e = new PIXI.Container;
                e.position.set(-h.default.width / 2, -h.default.height / 2), this.effectContainer.addChild(e);
                var i = PIXI.Sprite.fromFrame("redpacket_bg_other.png"),
                    n = {
                        x: this.batteryPos.x,
                        y: this.isHighSeat ? this.batteryPos.y + 90 : this.batteryPos.y - 90
                    },
                    o = new l.TimelineLite;
                o.call(function() {
                    i.anchor.set(.5), i.position.set(n.x, n.y), i.scale.set(0), e.addChild(i)
                }), o.to(i.scale, .5, {
                    x: .9,
                    y: .9,
                    ease: l.Back.easeOut
                }), this.totalwinContainer = new PIXI.Container, this.totalwinContainer.scale.set(.5), this.totalwinContainer.position.set(n.x, n.y);
                var a = [];
                ["redpacket_back", "redpacket_bg", "redpacket_totalwin"].forEach(function(e, i) {
                    var n = 2 == i ? PIXI.Sprite.fromImage(e) : PIXI.Sprite.fromFrame(e + ".png");
                    n.anchor.set(.5), n.scale.set(0), t.totalwinContainer.addChild(n), a.push(n)
                });
                var r = this.createLotteryTxt("redpacket_number", 62);
                this.totalwinContainer.addChild(r), a.push(r), r.scale.set(0), r.text = s.default.formatAmount(this.totalWin), r.y = 30, a[2].y = -30, o.call(function() {
                    e.addChild(t.totalwinContainer)
                }, null, null, "+=2.5"), a.forEach(function(t, e) {
                    0 == e && o.add(l.TweenMax.to(t, 8, {
                        rotation: 2 * Math.PI,
                        repeat: -1,
                        ease: l.Linear.easeNone
                    })), o.to(t.scale, .5, {
                        x: 1,
                        y: 1,
                        ease: l.Back.easeOut
                    }, "-=" + (0 == e ? 8 : 1 == e ? .5 : .4))
                }), o.to(this.totalwinContainer.scale, .5, {
                    x: 0,
                    y: 0
                }, "+=2"), o.to(i.scale, .5, {
                    x: 0,
                    y: 0
                }, "+=0.5"), o.call(function() {
                    o.kill(), t.playEndAni(n)
                }), this.tmlList.push(o)
            }, e.prototype.initBack = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = .8), this.back = c.Graph.drawRect([{
                    x: -h.default.width / 2,
                    y: -h.default.height / 2,
                    width: h.default.width,
                    height: h.default.height
                }], this.effectContainer, t, e), this.back.interactive = !0
            }, e.prototype.initContainer = function() {
                var t = new PIXI.Container;
                t.pivot.set(h.default.width / 2, h.default.height / 2), this.effectContainer.addChild(t), this.boxContainer = t;
                var e = new PIXI.Container;
                this.boxContainer.addChild(e), this.bgContainer = e;
                var i = new PIXI.Container;
                this.boxContainer.addChild(i)
            }, e.prototype.initContent = function() {
                var t = new PIXI.spine.Spine(u.default.resources.radpacket_board.spineData);
                t.skeleton.setToSetupPose(), t.position.set(h.default.width / 2, h.default.height / 2), this.bgContainer.addChild(t), this.boardAni = t, this.chooseContainer = this.boardAni.slotContainers[4]
            }, e.prototype.initChooseItems = function() {
                var t = this;
                this.chooseBags = [], this.lotteryTxts = [];
                for (var e = [{
                        x: -300,
                        y: -40
                    }, {
                        x: 0,
                        y: -90
                    }, {
                        x: 300,
                        y: -40
                    }, {
                        x: -135,
                        y: 100
                    }, {
                        x: 135,
                        y: 100
                    }], i = [-25, 0, 25, -10, 10], n = function(n) {
                        var a = e[n].x,
                            s = e[n].y,
                            r = i[n],
                            h = o.createLotteryTxt("redpacket_number", 62);
                        h.position.set(a, -1 * s), o.chooseContainer.addChild(h), o.lotteryTxts.push(h);
                        var l = new PIXI.spine.Spine(u.default.resources.redpacket_bag.spineData);
                        l.skeleton.setToSetupPose(), l.position.set(a, -1 * s), l.interactive = !0, l.once("pointerdown", function() {
                            return t.onChoose(l, n)
                        }), o.chooseContainer.addChild(l), o.chooseBags.push(l), h.scale.set(1, -1), l.rotation = r * Math.PI / 180 * -1, l.scale.set(1, -1)
                    }, o = this, a = 0; a < 5; a++) n(a)
            }, e.prototype.startCountdown = function() {
                var t = this;
                this.timer = setTimeout(function() {
                    var e = Math.floor(Math.random() * t.chooseBags.length);
                    t.onChoose(t.chooseBags[e], e)
                }, 1e3 * this.countdownTime), this.beginTime = (new Date).getTime()
            }, e.prototype.createLotteryTxt = function(t, e) {
                var i = new PIXI.extras.BitmapText("", {
                    font: {
                        name: t,
                        size: e
                    }
                });
                return i.anchor = .5, i
            }, e.prototype.playBoxAni = function() {
                var t = this;
                this.boardAni.state.setAnimation(0, "enter", !1), this.boardAni.state.addAnimation(0, "wait", !0, 0), this.boardAni.state.addListener({
                    event: function(e) {
                        if ("enter" == e.animation.name) {
                            var i = new l.TimelineLite;
                            t.chooseBags.forEach(function(t, e) {
                                i.call(function() {
                                    t.state.setAnimation(0, "enter", !1), t.state.addAnimation(0, "wait", !0, 0)
                                }, null, null, "+=" + .01 * e)
                            }), i.call(function() {
                                t.initTipPanel(), t.startCountdown(), u.default.app.ticker.add(t.setLeftTime, t), t.chooseBags.forEach(function(t) {
                                    return t.interactive = !0
                                })
                            })
                        }
                    }
                })
            }, e.prototype.initTipPanel = function() {
                var t, e = new PIXI.Container,
                    i = this.countdownTime,
                    n = new PIXI.Text(u.default.locale.getString("TXT_REDPACKET_AUTO_OPEN_LEFT"), {
                        fontFamily: "roboto",
                        fontSize: 20,
                        fill: "#FFFFFF"
                    });
                n.anchor.set(0, .5), n.position.set(0, 0);
                var o = new PIXI.Text(i.toString(), {
                    fontFamily: "roboto",
                    fontSize: 20,
                    fill: "rgb(237, 252, 1)"
                });
                o.anchor.set(.5), o.position.set(n.width + 20, 0), this.countdownTxt = o;
                var a = new PIXI.Text(u.default.locale.getString("TXT_REDPACKET_AUTO_OPEN_RIGHT"), {
                    fontFamily: "roboto-medium",
                    fontSize: 20,
                    fill: "#FFFFFF"
                });
                a.anchor.set(0, .5), a.position.set(o.x + 20, 0), t = n.width + 40 + a.width;
                var s = PIXI.Sprite.fromFrame("redpacket_tips_bg.png");
                s.anchor.set(.5), s.position.set(t / 2, 0), t + 50 > s.width && (s.scale.x = (t + 50) / s.width), e.alpha = 0, e.addChild(s, n, o, a), e.position.set(-t / 2, 255 + s.height / 2), this.effectContainer.addChild(e), this.tipPanel = e, this.tipTween = l.TweenMax.to(e, .3, {
                    alpha: 1
                })
            }, e.prototype.onChoose = function(t, e) {
                var i = this;
                this.requestSweepFire(), d.default.playWealthPacketSelect(), t.state.setAnimation(0, "leave_1", !1), t.state.addListener({
                    complete: function() {
                        setTimeout(function() {
                            i.randomLotteryTxtValue(e), i.openOtherBag(t)
                        })
                    }
                });
                var n = this.chooseContainer.children.length;
                this.chooseBags.forEach(function(t) {
                    return t.interactive = !1
                }), this.chooseContainer.setChildIndex(t, n - 1), this.clearTimer()
            }, e.prototype.requestSweepFire = function() {
                var t = this.extArr2,
                    e = t[0],
                    i = t[1],
                    n = new f.RequestSweepFire;
                n.fishId = this.fishId, n.bulletId = e, n.domination = i, u.default.service.sweepFire(n, function() {})
            }, e.prototype.randomLotteryTxtValue = function(t) {
                var e = this,
                    i = this.shuffle(this.extArr),
                    n = this.extArr2[1],
                    o = 0;
                this.lotteryTxts.forEach(function(a, r) {
                    if (r == t) a.text = s.default.formatAmount(e.totalWin);
                    else {
                        var h = n * i[i.length - 1];
                        a.text = s.default.formatAmount(h), a.font.name = "redpacket_number_gray", i.pop()
                    }
                    o = o < a.width ? a.width : o
                }), o > 210 && this.lotteryTxts.forEach(function(t) {
                    return t.scale.set(210 / o, -210 / o)
                })
            }, e.prototype.shuffle = function(t) {
                var e = t.slice(0),
                    i = this.extArr2[1];
                e.splice(e.indexOf(Math.ceil(s.default.divideWithoutLoss(this.totalWin, i))), 1);
                for (var n, o = e.length; o;) {
                    var a = Math.floor(Math.random() * o--);
                    n = [e[o], e[a]], e[a] = n[0], e[o] = n[1]
                }
                return e
            }, e.prototype.openOtherBag = function(t) {
                var e = this,
                    i = !1;
                this.chooseBags.forEach(function(n) {
                    n.interactive = !1, n.removeAllListeners(), n != t && (n.state.setAnimation(0, "leave_2", !1), i || (n.state.addListener({
                        complete: function() {
                            return setTimeout(function() {
                                return e.showWin()
                            }, 700)
                        }
                    }), i = !0))
                })
            }, e.prototype.showWin = function() {
                var t = this;
                d.default.stopWealthPacketBg(), d.default.playWealthPacketTotalWin(), this.totalwinContainer = new PIXI.Container, this.boxContainer.addChild(this.totalwinContainer), this.totalwinContainer.position.set(h.default.width / 2, h.default.height / 2);
                var e = [];
                ["redpacket_back", "redpacket_bg", "redpacket_totalwin"].forEach(function(i, n) {
                    var o = 2 == n ? PIXI.Sprite.fromImage(i) : PIXI.Sprite.fromFrame(i + ".png");
                    o.anchor.set(.5), o.scale.set(0), t.totalwinContainer.addChild(o), e.push(o)
                });
                var i = this.createLotteryTxt("redpacket_number", 62),
                    n = 1;
                this.totalwinContainer.addChild(i), e.push(i), i.text = s.default.formatAmount(this.totalWin), i.width > 380 && (n = 380 / i.width), i.y = 30, i.scale.set(0), e[2].y = -30;
                var o = new l.TimelineLite;
                e.forEach(function(t, e) {
                    0 == e && o.add(l.TweenMax.to(t, 8, {
                        rotation: 2 * Math.PI,
                        repeat: -1,
                        ease: l.Linear.easeNone
                    })), o.to(t.scale, .5, {
                        x: t == i ? n : 1,
                        y: t == i ? n : 1,
                        ease: l.Back.easeOut
                    }, "-=" + (0 == e ? 8 : 1 == e ? .5 : .4))
                }), o.to(this.totalwinContainer.scale, .5, {
                    x: 0,
                    y: 0
                }, "+=2"), o.call(function() {
                    o.kill(), t.playEndAni()
                })
            }, e.prototype.playEndAni = function(t) {
                var e = this;
                t = t || new r.Point(h.default.width / 2, h.default.height / 2), this.chairId < 0 ? (this.boardAni.state.setAnimation(0, "leave", !1), this.boardAni.state.addListener({
                    event: function(i) {
                        "leave" == i.animation.name && setTimeout(function() {
                            e.showWinCoins(t), e.back.visible = !1
                        })
                    }
                }), d.default.playWealthPacketClose()) : this.showWinCoins(t)
            }, e.prototype.showWinCoins = function(t) {
                var e = this,
                    i = s.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), h.default.scale),
                    n = {
                        isMe: -1 == this.chairId,
                        amount: this.totalWin,
                        position: new r.Point(t.x, t.y),
                        endPosition: i,
                        isBigWin: !0,
                        onComplete: function() {
                            e.batteryContainer.setBalanceDiff(e.totalWin, e.chairId), e.showWinAni(e.totalWin, function() {
                                e.complete()
                            })
                        }
                    };
                this.showCoins(n)
            }, e.prototype.showWinAni = function(t, e, i) {
                var n = this;
                void 0 === i && (i = !0);
                var o = -1 == this.chairId,
                    a = this.createTxt("number" + (o ? "_gold" : "_gray"), 50);
                this.effectContainer.addChild(a);
                var h = this.effectContainer.toLocal(s.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId, !0))),
                    c = h.y < 0,
                    u = h.x < 0;
                h.x = u ? h.x + 100 : h.x + 180, h.y = c ? h.y + 40 : h.y - 40, a.anchor = new r.Point(u ? 0 : 1, .5), a.position.set(h.x, h.y), a.alpha = 1, a.text = "+" + s.default.formatAmount(t), a.scale.set(0);
                var d = new l.TimelineLite({
                    onComplete: function() {
                        i && n.destroy(), e && e(n.allShotWin)
                    }
                });
                d.to(a, .2, {
                    y: c ? h.y + 70 : h.y - 70,
                    ease: l.Power4.easeInOut
                }), d.to(a.scale, .2, {
                    x: 1.2,
                    y: 1.2,
                    ease: l.Power4.easeInOut
                }, "-=0.2"), d.to(a.scale, .15, {
                    x: 1,
                    y: 1,
                    ease: l.Power4.easeInOut
                }, "-=0.2"), d.to(a, .2, {
                    alpha: 0
                }, "+=0.2"), d.to(a.scale, .2, {
                    x: 0,
                    y: 0
                }, "-=0.2"), this.tmlList.push(d)
            }, e.prototype.complete = function() {
                this.clearTimer(), t.prototype.destroy.call(this)
            }, e.prototype.setLeftTime = function() {
                var t = 1e3 * this.countdownTime - ((new Date).getTime() - this.beginTime);
                t = t < 0 ? 0 : t, this.leftTime = t, this.countdownTxt.text = Math.ceil(this.leftTime / 1e3).toString()
            }, e.prototype.clearTimer = function() {
                var t = this;
                this.timer && (clearTimeout(this.timer), u.default.app.ticker.remove(this.setLeftTime, this), this.tipTween.kill(), l.TweenMax.to(this.tipPanel, .3, {
                    alpha: 0,
                    onComplete: function() {
                        return t.tipPanel.visible = !1
                    }
                }), this.timer = 0)
            }, e
        }(a.default);
    e.default = p
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        s = i(338),
        r = i(3),
        h = i(2),
        l = i(0),
        c = i(1),
        u = i(7),
        d = i(9),
        f = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e.prototype.intro = function() {
                var t = this,
                    e = new s.Wheel(this.chairId);
                this.effectContainer.addChild(e), this.wheel = e, this.batteryNo = this.batteryContainer.getChairNo(this.chairId), this.chairId < 0 && this.batteryContainer.disableChangeGun(), this.winEffect = new PIXI.spine.Spine(l.default.resources.dragonWheel_panel.spineData), this.winEffect.skeleton.setToSetupPose(), this.winEffect.name = "winEffect", this.effectContainer.addChild(this.winEffect);
                var i = this.winEffect.slotContainers[7];
                this.winTxt = this.createTxt("number_effect_intro", 60), this.winTxt.text = h.default.formatAmount(this.totalWin), this.winTxt.scale.set(1, -1), this.chairId > 0 && this.winTxt.y, i.addChild(this.winTxt);
                var n = new r.TimelineLite;
                n.call(function() {
                    return t.onCatch()
                }), this.chairId < 0 ? (n.call(function() {
                    return t.introMine()
                }, null, null, "+=0.5"), n.call(function() {
                    return e.show(t.batteryNo)
                }, null, null, "+=1.5")) : n.call(function() {
                    return t.introOthers()
                }, null, null, "+=0.5"), n.call(function() {
                    if (t.isReady = !0, t.signalInterrupt) return t.destroy();
                    e.playIntro(t.odds, t.takeWin.bind(t))
                }, null, null, "+=" + (this.chairId < 0 ? 1 : 2.5)), this.tmlList.push(n), d.default.playDragonWheelDropOff(), d.default.playDragonWheelIntro()
            }, e.prototype.introMine = function() {
                this.winEffect.state.setAnimation(0, "enter", !1), this.winEffect.state.addAnimation(0, "leave", !1, 0)
            }, e.prototype.introOthers = function() {
                this.wheel.show(this.batteryNo)
            }, e.prototype.takeWin = function(t) {
                var e = this,
                    i = this.chairId < 0 ? "enter2" : "enter3",
                    n = this.chairId < 0 ? "wait2" : "wait3",
                    o = this.chairId < 0 ? "leave2" : "leave3",
                    a = new r.TimelineLite;
                this.chairId > 0 && a.call(function() {
                    e.winEffect.renderable = !0, e.winEffect.scale.set(.7);
                    var t = s.WheelPos[e.batteryNo - 1];
                    e.winEffect.position.set(t.x - c.default.width / 2, t.y - c.default.height / 2)
                }), a.call(function() {
                    e.winEffect.state.setAnimation(0, i, !1), e.winEffect.state.addAnimation(0, n, !0, 0);
                    var t = e.chairId < 0 ? new u.Point(c.default.width / 2, c.default.height / 2) : new u.Point(s.WheelPos[e.batteryNo - 1].x, s.WheelPos[e.batteryNo - 1].y);
                    e.showWinCoins(t), d.default.playDragonWheelWin()
                }), a.call(function() {
                    e.wheel.hide(), e.winEffect.state.setAnimation(0, o, !1), d.default.playDragonWheelElecricShock()
                }, null, null, "+=2")
            }, e.prototype.showWinCoins = function(t) {
                var e = this,
                    i = h.default.getLocalPosition(this.batteryContainer.getCoinPosition(this.chairId), c.default.scale),
                    n = {
                        isMe: -1 == this.chairId,
                        amount: this.totalWin,
                        position: new u.Point(t.x, t.y),
                        endPosition: i,
                        isBigWin: !0,
                        onComplete: function() {
                            e.batteryContainer.setBalanceDiff(e.totalWin, e.chairId), e.showWinAni(e.totalWin, function() {
                                e.destroy()
                            })
                        }
                    };
                this.showCoins(n)
            }, e
        }(a.default);
    e.default = f
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(7),
        r = i(1),
        h = i(3),
        l = i(9),
        c = function(t) {
            function i(e) {
                var i = t.call(this) || this;
                return i.chairId = e, i.initContainer(), i.initCursorAndLightFlow(), i.initWheel(), i
            }
            return o(i, t), i.prototype.initContainer = function() {
                this.centerPoint = new s.Point(r.default.width / 2, r.default.height / 2), this.container = new s.Container, this.container.pivot = this.centerPoint, this.container.position = this.centerPoint, this.position = {
                    x: -r.default.width / 2,
                    y: -r.default.height / 2
                }, this.addChild(this.container), this.visible = !1
            }, i.prototype.initWheel = function() {
                var t = this,
                    e = ["Base.png", "Deco.png", "CenterButton.png"].map(function(e) {
                        var i = PIXI.Sprite.fromFrame(e);
                        return i.position = t.centerPoint, i.anchor.set(.5), i
                    }),
                    i = e[0],
                    n = e[1],
                    o = e[2];
                this.bigCircle = new u({
                    type: "BigCircle",
                    spineName: "bigwheel",
                    frameName: "LowerWheel",
                    lotteryItems: ["(jian)", "(30)_1", "(jian)", "(40)", "(jian)", "(50)", "(jian)", "(30)_2"],
                    highIndexes: [0, 2, 4, 6],
                    chairId: this.chairId
                }), this.normalCircle = new u({
                    type: "NormalCirle",
                    spineName: "normalWheel",
                    frameName: "MediumWheel",
                    lotteryItems: ["(70)", "(60)", "(jian)", "(80)", "(90)", "(jian)"],
                    highIndexes: [2, 5],
                    chairId: this.chairId
                }), this.smallCircle = new u({
                    type: "SmallCircle",
                    spineName: "smallWheel",
                    frameName: "HigherWheel",
                    lotteryItems: ["(200)", "(100)", "(300)"],
                    chairId: this.chairId
                }), this.container.addChild(i, this.bigCircle, this.normalCircle, this.smallCircle, n, this.cursorSpine, this.lightFlow, o)
            }, i.prototype.initCursorAndLightFlow = function() {
                var t = this;
                this.lightFlow = new PIXI.spine.Spine(a.default.resources.light_flow.spineData), this.cursorSpine = new PIXI.spine.Spine(a.default.resources.cursor.spineData), [this.cursorSpine, this.lightFlow].forEach(function(e) {
                    e.skeleton.setToSetupPose(), e.position = t.centerPoint
                })
            }, i.prototype.playIntro = function(t, e) {
                var i = this;
                this.lightFlow.state.setAnimation(0, "pan", !1), this.lightFlow.state.addListener({
                    complete: function() {
                        i.onSpin(t, function() {
                            i.playEnd(e)
                        }), i.cursorSpine.state.setAnimation(0, "da", !0)
                    }
                }), [this.bigCircle, this.normalCircle, this.smallCircle].forEach(function(t) {
                    return t.playIntro()
                })
            }, i.prototype.onSpin = function(t, e) {
                var i = this,
                    n = this.bigCircle.getIndexByValue(t);
                if (this.bigCircle.spin(n), l.default.playDragonWheelSpin(), this.bigCircle.highIndexes.indexOf(n) > -1) {
                    var o = this.normalCircle.getIndexByValue(t);
                    if (this.bigCircle.callback = function() {
                            l.default.playDragonWheelSelect(), i.bigCircle.setDarken(), i.cursorSpine.state.setAnimation(0, "zhong_enter", !1), i.cursorSpine.state.addAnimation(0, "zhong_wait", !0, 0), setTimeout(function() {
                                i.normalCircle.spin(o), l.default.playDragonWheelSpin()
                            }, 1200)
                        }, this.normalCircle.highIndexes.indexOf(o) > -1) {
                        var a = this.smallCircle.getIndexByValue(t);
                        this.normalCircle.callback = function() {
                            l.default.playDragonWheelSelect(), i.normalCircle.setDarken(), i.cursorSpine.state.setAnimation(0, "xiao_enter", !1), i.cursorSpine.state.addAnimation(0, "xiao_wait", !0, 0), setTimeout(function() {
                                i.smallCircle.spin(a), l.default.playDragonWheelSpin()
                            }, 1200)
                        }, this.smallCircle.callback = function() {
                            l.default.playDragonWheelSelect(), l.default.playDragonWheelWin100(), e()
                        }
                    } else this.normalCircle.callback = function() {
                        l.default.playDragonWheelSelect(), e()
                    }
                } else this.bigCircle.callback = function() {
                    e()
                }
            }, i.prototype.playEnd = function(t) {
                var e = this,
                    i = new h.TimelineLite({
                        onComplete: function() {
                            e.chairId < 0 && t()
                        }
                    });
                this.chairId > 0 ? i.call(function() {
                    return t()
                }, null, null, "+=1") : (l.default.playDragonWheelSway(), i.to(this.container, 1, {
                    x: this.centerPoint.x,
                    y: this.centerPoint.y,
                    ease: h.Linear.easeNone
                }))
            }, i.prototype.show = function(t) {
                var i = new h.TimelineLite;
                this.container.scale.set(0), this.visible = !0, this.chairId > 0 ? i.to(this.container.scale, 1.5, {
                    x: 1,
                    y: 1,
                    ease: h.Elastic.easeOut
                }) : i.set(this.container.scale, {
                    x: 1,
                    y: 1
                });
                var n = this.chairId > 0 ? e.WheelPos[t - 1].y : t - 1 > 1 ? e.WheelPos[t - 1].y + 40 : e.WheelPos[t - 1].y - 40;
                i.to(this.container, .5, {
                    x: e.WheelPos[t - 1].x,
                    y: n,
                    ease: h.Power1.easeOut
                }), this.chairId > 0 && i.to(this.container.scale, .5, {
                    x: .8,
                    y: .8,
                    ease: h.Power1.easeOut
                }, "-=0.5")
            }, i.prototype.hide = function() {
                this.renderable = !1, this.parent && this.parent.removeChild(this), this.destroy({
                    children: !0
                })
            }, i
        }(s.Container);
    e.Wheel = c, e.WheelPos = [{
        x: 430,
        y: 670
    }, {
        x: 1010,
        y: 670
    }, {
        x: 1010,
        y: 150
    }, {
        x: 430,
        y: 150
    }];
    var u = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.type = e.type, i.lotteryItems = e.lotteryItems, i.highIndexes = e.highIndexes, i.len = i.lotteryItems.length, i.regExp = /[^\(\)]+(?=\))/g, i.sprite = PIXI.Sprite.fromFrame(e.frameName + ".png"), i.darkCircle = PIXI.Sprite.fromFrame("CircleGray.png"), i.spine = new PIXI.spine.Spine(a.default.resources[e.spineName].spineData), i.position = {
                x: r.default.width / 2,
                y: r.default.height / 2
            }, i.chairId = e.chairId, i.init(), i
        }
        return o(e, t), e.prototype.init = function() {
            var t = this;
            this.sprite.anchor.set(.5), this.darkCircle.anchor.set(.5), this.darkCircle.alpha = 0, this.addChild(this.sprite, this.darkCircle), this.offset = "NormalCirle" === this.type ? 0 : 2 * Math.PI / this.len / 2, this.spine.state.addListener({
                complete: function(e) {
                    "pan" != e.animation.name && t.callback && t.callback()
                }
            })
        }, e.prototype.playIntro = function() {
            this.addChild(this.spine), this.spine.skeleton.setToSetupPose(), this.spine.state.setAnimation(0, "pan", !1)
        }, e.prototype.spin = function(t) {
            var e = this;
            (new h.TimelineLite).to(this.sprite, 1, {
                ease: h.Linear.easeNone,
                rotation: 2 * Math.PI * 2,
                onComplete: function() {
                    return e.sprite.rotation = 0
                }
            }).to(this.sprite, 1 * (t + 1) / this.len, {
                ease: h.Power1.easeOut,
                rotation: 2 * Math.PI / this.len * t + this.offset,
                onComplete: function() {
                    return e.lightResult(t)
                }
            })
        }, e.prototype.getIndexByValue = function(t) {
            for (var e = 0; e < this.lotteryItems.length; e++)
                if (parseInt(this.lotteryItems[e].match(this.regExp)[0]) == t) return "BigCircle" === this.type && 1 === e && (e = Math.random() > .5 ? 1 : 7), e;
            return this.highIndexes[Math.floor(Math.random() * this.highIndexes.length)]
        }, e.prototype.setDarken = function() {
            "NormalCirle" === this.type && this.darkCircle.scale.set(.75), h.TweenMax.to(this.darkCircle, .2, {
                alpha: 1
            })
        }, e.prototype.lightResult = function(t) {
            var e = "pange_" + this.lotteryItems[t].match(this.regExp)[0];
            this.spine.skeleton.setToSetupPose(), this.spine.state.setAnimation(0, e, !1), "SmallCircle" === this.type && this.parent.setChildIndex(this, this.parent.children.length - 1)
        }, e
    }(s.Container)
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(3),
        r = i(1),
        h = i(14),
        l = i(9),
        c = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.init(), e
            }
            return o(e, t), e.prototype.init = function() {
                this.container = new PIXI.Container, this.addChild(this.container), this.container.position.set(r.default.width / 2, r.default.height / 2), this.refreshAni(), this.aniUp = new PIXI.spine.Spine(a.default.resources.bigfish_intro_up.spineData), this.aniUp.skeleton.setToSetupPose(), this.container.addChild(this.aniUp), this.resetAni()
            }, e.prototype.refreshAni = function() {
                this.ani && (this.container.removeChild(this.ani), this.ani.destroy(), this.ani = null), this.ani = new PIXI.spine.Spine(a.default.resources.bigfish_intro.spineData), this.ani.skeleton.setToSetupPose(), this.container.addChild(this.ani)
            }, e.prototype.resetAni = function() {
                this.refreshAni(), this.container.scale.set(0), this.container.visible = !1, this.aniUp.renderable = !1
            }, e.prototype.showIntro = function(t) {
                t == h.FishKind.MonkeyKing && this.showMonkeyKindIntro(), t == h.FishKind.GhostShip && this.showGhostShipIntro()
            }, e.prototype.showDragonIntro = function() {
                this.showAni("dragon_enter", "dragon_1"), this.aniUp.renderable = !0, this.aniUp.state.setAnimation(0, "dragon_enter", !1), l.default.playAwakenDragonEffectIntro()
            }, e.prototype.showMonkeyKindIntro = function() {
                this.showAni("monkey_enter", "monkey_1"), l.default.playMonkeykingEffectIntro()
            }, e.prototype.showGhostShipIntro = function() {
                this.showAni("pirate_enter"), l.default.playGhostshipEffectIntro()
            }, e.prototype.showAni = function(t, e) {
                var i = this,
                    n = this.container.scale;
                (new s.TimelineLite).to(n, .5, {
                    x: 1,
                    y: 1,
                    ease: s.Elastic.easeOut,
                    onStart: function() {
                        i.ani.state.setAnimation(0, t, !1), e && i.ani.skeleton.setSkinByName(e), i.container.visible = !0
                    }
                }).to(n, .6, {
                    x: 0,
                    y: 0,
                    ease: s.Elastic.easeIn.config(.4, .2),
                    onComplete: function() {
                        i.resetAni()
                    }
                }, "+=1")
            }, e
        }(PIXI.Container);
    e.BigFishIntro = c;
    var u = new(function() {
        function t() {}
        return t.prototype.getBigFishIntro = function() {
            return this.instance || (this.instance = new c)
        }, t
    }());
    e.bigFishIntroManager = u
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(144),
        s = i(9),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e.prototype.reset = function(e, i, n) {
                t.prototype.reset.call(this, e, i, n), this.hurtCount = 0
            }, e.prototype.hurt = function() {
                t.prototype.hurt.call(this), this.hurtCount++
            }, e.prototype.lightnHurt = function(e) {
                t.prototype.lightnHurt.call(this, e), this.hurtCount++
            }, e.prototype.swim = function() {
                t.prototype.swim.call(this), s.default.playGhostshipMove()
            }, e.prototype.clear = function() {
                t.prototype.clear.call(this), s.default.stopGhostshipMove()
            }, e
        }(a.default);
    e.default = r
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(17),
        s = i(0),
        r = i(342),
        h = i(2),
        l = function(t) {
            function e(e, i) {
                var n = t.call(this, PIXI.Texture.fromFrame("lightn_target")) || this;
                return n.activelightn = !1, n.isLightShow = !1, n.init(e, i), n
            }
            return o(e, t), e.prototype.init = function(t, e) {
                var i = this,
                    n = e.parent;
                this.fishContainer = e, this.scene = t, this.anchor.set(.5), n.on("pointerdown", function(t) {
                    var e = t.data.getLocalPosition(i.scene);
                    i.position.set(e.x, e.y), i.touchPos = e
                }), n.on("pointermove", function(t) {
                    var e = t.data.getLocalPosition(i.scene);
                    i.position.set(e.x, e.y), i.touchPos = e
                }), n.on("pointerout", function() {
                    i.visible = !1
                }), n.on("pointerover", function() {
                    return i.visible = !0
                })
            }, e.prototype.show = function() {
                a.default.isMobile() || a.default.isIE() || a.default.isEdge() ? this.scene.addChild(this) : (this.fishContainer.cursor = "url('" + s.default.resources.lightn_target.url + "') 43 43,auto", this.fishContainer.interactive = !0), this.activelightn = !0
            }, e.prototype.resetCursor = function() {
                var t = this;
                if (!(a.default.isMobile() || a.default.isIE() || a.default.isEdge())) {
                    var e = PIXI.Sprite.fromImage(s.default.resources.lightn_target.url);
                    e.anchor.set(.5), e.renderable = !1, e.interactive = !0, e.position.set(this.touchPos.x, this.touchPos.y), this.scene.addChild(e);
                    var i = "ontouchstart" in window ? "touchmove" : "mousemove",
                        n = function() {
                            t.scene.removeChild(e), document.body.removeEventListener(i, n, !0)
                        };
                    document.body.addEventListener(i, n, !0)
                }
            }, e.prototype.hide = function() {
                a.default.isMobile() || a.default.isIE() || a.default.isEdge() ? this.scene.removeChild(this) : (this.fishContainer.cursor = "default", this.fishContainer.interactive = !1), this.activelightn = !1
            }, e.prototype.setLightAble = function(t) {
                this.isLightShow = t, this.isLightShow ? this.initMouseLight() : this.destroyMouseLight()
            }, e.prototype.getIsLightShow = function() {
                return this.isLightShow
            }, e.prototype.initMouseLight = function() {
                var t = h.default.clone(this.touchPos);
                this.rope = new r.default, this.rope.init(t), this.scene.addChild(this.rope), s.default.app.ticker.add(this.updateTail, this), this.lightEff = new PIXI.spine.Spine(s.default.resources.lightning.spineData), this.lightEff.skeleton.setToSetupPose(), this.lightEff.state.setAnimation(0, "wait", !0), this.scene.addChild(this.lightEff)
            }, e.prototype.updateTail = function() {
                var t = h.default.clone(this.touchPos);
                this.rope.update(t), this.lightEff.position.set(t.x, t.y)
            }, e.prototype.destroyMouseLight = function() {
                this.rope && (s.default.app.ticker.remove(this.updateTail, this), this.scene.removeChild(this.rope), this.rope.destroy(), this.rope = null, this.lightEff && (this.scene.removeChild(this.lightEff), this.lightEff.destroy(), this.lightEff = null))
            }, e
        }(PIXI.Sprite);
    e.default = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(17),
        r = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.historyX = [], e.historyY = [], e.ropeSize = 60, e.historySize = 30, e.points = [], e
            }
            return o(e, t), e.prototype.init = function(t) {
                this.trailTexture = PIXI.Texture.fromImage("trail");
                for (var e = t || new a.Point(0, 0), i = 0; i < this.ropeSize; i++) this.points.push(new a.Point(e.x, e.y));
                for (i = 0; i < this.historySize; i++) this.historyX.push(e.x), this.historyY.push(e.y);
                var n = new a.mesh.Rope(this.trailTexture, this.points);
                n.blendMode = s.default.isIos() && s.default.iosVersion() >= 14 ? PIXI.BLEND_MODES.SCREEN : PIXI.BLEND_MODES.ADD, n.alpha = .8, this.addChild(n)
            }, e.prototype.update = function(t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = 5), this.historyX.pop(), this.historyX.unshift(t.x), this.historyY.pop(), this.historyY.unshift(t.y);
                for (var n = 0; n < this.ropeSize; n++) {
                    var o = this.points[n],
                        a = this.cubicInterpolation(this.historyX, n / this.ropeSize * this.historySize),
                        s = this.cubicInterpolation(this.historyY, n / this.ropeSize * this.historySize);
                    o.x = a, o.y = s
                }
            }, e.prototype.cubicInterpolation = function(t, e, i) {
                null == i && (i = 1);
                var n = Math.floor(e),
                    o = [this.getTangent(n, i, t), this.getTangent(n + 1, i, t)],
                    a = [this.clipInput(n, t), this.clipInput(n + 1, t)],
                    s = (e -= n) * e,
                    r = e * s;
                return (2 * r - 3 * s + 1) * a[0] + (r - 2 * s + e) * o[0] + (-2 * r + 3 * s) * a[1] + (r - s) * o[1]
            }, e.prototype.clipInput = function(t, e) {
                return t < 0 && (t = 0), t > e.length - 1 && (t = e.length - 1), e[t]
            }, e.prototype.getTangent = function(t, e, i) {
                return e * (this.clipInput(t + 1, i) - this.clipInput(t - 1, i)) / 2
            }, e
        }(a.Container);
    e.default = r
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(14),
        s = i(3),
        r = i(0),
        h = i(1),
        l = i(21),
        c = function(t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n.container = new PIXI.Container, n.addChild(n.container), n.id = e, n.initFish(i), n.isNormalShaking = !1, n.isLightShaking = !1, n.initOtherLightnMarix(), n
            }
            return o(e, t), e.prototype.initOtherLightnMarix = function() {
                var t = new PIXI.filters.ColorMatrixFilter;
                t.matrix = [.49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, .49376, .6094 * 1.6, .1312, 0, 0, 0, 0, 0, 1, 0], this.nowFilter = t
            }, e.prototype.initFish = function(t) {
                this.name = t.name, this.kind = t.kind, this.type = t.type, this.speed = t.speed, this.rects = t.rects, this.aimRects = t.aimRects, this.level = t.level, this.angle = 0, this.aniSpeed = t.aniSpeed || 1, this.radius = t.radius || 0, this.createPx(), this.createLockArea()
            }, e.prototype.createPx = function() {
                this.aniFish && (this.aniFish.destroy(), this.container.removeChild(this.aniFish), this.aniFish = null, this.aniHurt && (this.aniHurt.kill(), this.aniHurt = null));
                var t = new PIXI.spine.Spine(r.default.resources[u[this.kind]].spineData);
                t.skeleton.setToSetupPose(), t.state.setAnimation(0, "wait", !0), t.state.timeScale = this.aniSpeed, this.container.addChild(t), this.aniFish = t
            }, e.prototype.getTracePoint = function(t) {
                return this.kind >= a.FishKind.MonkeyKing ? this.getBigEffTracePoint(t) : this.getUndeadTracePoint(t)
            }, e.prototype.getUndeadTracePoint = function(t) {
                var e = 0;
                return e = t.x > 0 && 0 == t.y ? 2 : t.x > 0 && t.y > 0 ? 3 : 0 == t.x && 0 == t.y ? 0 : 0 == t.x && t.y > 0 ? 1 : 0, d[e]
            }, e.prototype.getBigEffTracePoint = function(t) {
                return f[t.x < h.default.width / 2 ? 0 : 1]
            }, e.prototype.reset = function(t, e, i) {
                this.aniFish.tint = 16777215, this.aniFish.filters = null, this.id = t, this.kind = e, this.realKind = e, this.catched = !1, this.inSpecialCathed = !1, this.scale.set(1), this.alpha = 1, this.rotation = 0, this.destroyLightnFish(), this.initFish(i), this.isNormalShaking = !1, this.isLightShaking = !1
            }, e.prototype.translate = function(t) {
                t && (t.x > h.default.width / 2 ? r.default.isView && this.scale.set(1, -1) : r.default.isView ? this.scale.set(-1) : this.scale.set(-1, 1))
            }, e.prototype.hurt = function() {
                this.aniHurt ? this.aniHurt.restart() : this.initAniHurt(), this.kind <= 21 && this.initNormalShake()
            }, e.prototype.initNormalShake = function() {
                var t = this;
                if (!this.isNormalShaking) {
                    this.aniShake && this.aniShake.kill(), this.isNormalShaking = !0;
                    for (var e = new s.TimelineMax({
                            repeat: 1,
                            onComplete: function() {
                                t.isNormalShaking = !1
                            }
                        }), i = 0; i < 6; i++) e.to(this.container, .05, {
                        x: 10 * Math.random() - 5 + 0,
                        y: 10 * Math.random() - 5 + 0
                    });
                    e.to(this.container, .05, {
                        x: 0,
                        y: 0
                    }), this.aniShake = e
                }
            }, e.prototype.lightnHurt = function(t) {
                this.initAniShake(t)
            }, e.prototype.initAniHurt = function() {
                var t = new s.TimelineMax({
                    repeat: 1
                });
                t.set(this.aniFish, {
                    tint: 16711680
                }), t.set(this.aniFish, {
                    delay: .3,
                    tint: 16777215
                }), t.set(this.aniFish, {
                    delay: .3
                }), this.aniHurt = t
            }, e.prototype.setAniWait = function() {
                this.destroyLightnFish();
                var t = this.aniFish.state.tracks[0],
                    e = t.trackTime % t.animation.duration;
                this.kind == a.FishKind.DragonWheel && this.createPx(), this.aniFish.state.setAnimation(0, "wait", !0), this.aniFish.state.tracks[0].trackTime = e
            }, e.prototype.setAniLight = function(t) {
                this.destroyLightnFish();
                var e = this.aniFish.state.tracks[0],
                    i = e.trackTime % e.animation.duration;
                this.kind == a.FishKind.DragonWheel && this.createPx();
                var n = new PIXI.spine.Spine(r.default.resources[u[this.kind] + "_light"].spineData);
                n.skeleton.setToSetupPose(), this.container.addChild(n), this.aniLightnFish = n, this.aniLightnFish.state.setAnimation(0, "wait_light", !0), this.aniLightnFish.state.tracks[0].trackTime = i, t && (this.aniLightnFish.filters = [this.nowFilter])
            }, e.prototype.destroyLightnFish = function() {
                this.aniLightnFish && (this.container.removeChild(this.aniLightnFish), this.aniLightnFish.destroy(), this.aniLightnFish = null)
            }, e.prototype.initAniShake = function(t) {
                var e = this;
                if (!this.isLightShaking) {
                    this.aniShake && this.aniShake.kill(), this.isLightShaking = !0, this.setAniLight(t);
                    for (var i = new s.TimelineMax({
                            repeat: 1,
                            onComplete: function() {
                                e.isLightShaking = !1, e.setAniWait()
                            }
                        }), n = 0; n < 6; n++) i.to(this.container, .05, {
                        x: 10 * Math.random() - 5 + 0,
                        y: 10 * Math.random() - 5 + 0
                    });
                    i.to(this.container, .05, {
                        x: 0,
                        y: 0
                    }), this.aniShake = i
                }
            }, e.prototype.playCatchAni = function(t) {
                for (var e = new s.TimelineLite({
                        onComplete: t
                    }), i = 0; i < 10; i++) e.to(this, .1, {
                    x: this.x + (10 * Math.random() - 5),
                    y: this.y + (10 * Math.random() - 5)
                });
                e.to(this.scale, 1, {
                    x: 0,
                    y: 0
                }), e.to(this, 1, {
                    alpha: 0,
                    delay: 1
                }, "-=1")
            }, e.prototype.swim = function() {}, e.prototype.allowCatch = function(t) {
                this.aniFish.tint = t ? 16777215 : 5263440
            }, e.prototype.stay = function() {
                this.catched = !0, this.trace && this.trace.kill()
            }, e.prototype.pause = function() {
                this.trace && this.trace.pause()
            }, e.prototype.resume = function() {
                this.trace && this.trace.resume()
            }, e.prototype.catch = function(t, e) {
                if (this.catched = !0, this.lock = !1, t && !a.FishUtils.isSpecialFish(this.realKind)) {
                    var i = new PIXI.filters.ColorMatrixFilter;
                    i.greyscale(.2), this.aniFish.filters = [i]
                }
                this.trace && this.trace.kill(), this.aniHurt && this.aniHurt.kill(), this.aniShake && this.aniShake.kill(), this.destroyLightnFish(), this.realKind == a.FishKind.EclipticCrab ? this.playBoomEffect(e) : this.playCatchAni(e)
            }, e.prototype.playBoomEffect = function(t) {
                var e = this.aniFish;
                e.state.setAnimation(0, "die", !1), e.state.addListener({
                    complete: function() {
                        e.state.clearListeners(), setTimeout(function() {
                            t()
                        })
                    }
                })
            }, e.prototype.del = function(t) {
                this.catched = !0, this.lock = !1, this.aniFish.tint = 16777215, this.trace && this.trace.kill(), this.aniHurt && this.aniHurt.kill(), t()
            }, e.prototype.getRects = function() {
                var t = this;
                return this.rects.map(function(e) {
                    return {
                        rect: {
                            x: e.x + t.position.x,
                            y: e.y + t.position.y,
                            width: e.width,
                            height: e.height
                        },
                        rotation: 0
                    }
                })
            }, e.prototype.clear = function() {
                this.aniHurt && this.aniHurt.kill(), this.removeAllListeners(), this.interactive = !1, this.lock = !1, this.trace && this.trace.kill(), this.trace = null
            }, e.prototype.addLockIcon = function() {
                if (this.lockSprite) this.addChild(this.lockSprite);
                else {
                    var t = PIXI.Sprite.fromFrame("aim_target");
                    t.anchor.set(.5), this.addChild(t), this.lockSprite = t
                }
            }, Object.defineProperty(e.prototype, "lock", {
                get: function() {
                    return this.locked
                },
                set: function(t) {
                    this.locked != t && (this.locked = t, t ? this.addLockIcon() : this.removeChild(this.lockSprite))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "autoLock", {
                get: function() {
                    return this.autoLocked
                },
                set: function(t) {
                    this.autoLocked != t && (this.autoLocked = t)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.createLockArea = function() {
                var t = this.aimRects[0];
                this.hitArea = new PIXI.Rectangle(t.x, t.y, t.width, t.height)
            }, e.prototype.showDebugger = function() {
                for (var t = this.rects, e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e];
                    n instanceof PIXI.Graphics && (this.removeChild(n), l.Graph.drawRect(t, this))
                }
                l.Graph.drawRect(t, this)
            }, e
        }(PIXI.Container);
    e.default = c;
    var u = {
            19: "crab",
            21: "dragonKing",
            100: "firestorm",
            101: "hammer",
            104: "monkeyking",
            106: "dragonWheel"
        },
        d = [
            [{
                x: -192,
                y: -108
            }, {
                x: h.default.width + 160,
                y: h.default.height + 80
            }],
            [{
                x: -192,
                y: h.default.height + 108
            }, {
                x: h.default.width + 160,
                y: -80
            }],
            [{
                x: h.default.width + 192,
                y: -108
            }, {
                x: -160,
                y: h.default.height + 80
            }],
            [{
                x: h.default.width + 192,
                y: h.default.height + 108
            }, {
                x: -160,
                y: -80
            }]
        ],
        f = [
            [{
                x: -450,
                y: h.default.height / 2
            }, {
                x: h.default.width + 450,
                y: h.default.height / 2
            }],
            [{
                x: h.default.width + 450,
                y: h.default.height / 2
            }, {
                x: -450,
                y: h.default.height / 2
            }]
        ]
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(1),
        s = i(0),
        r = i(14),
        h = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.init(), e
            }
            return o(e, t), e.prototype.init = function() {
                this.container = new PIXI.Container, this.addChild(this.container), this.container.position.set(a.default.width / 2, a.default.height / 2), this.ani = new PIXI.spine.Spine(s.default.resources.fish_intro.spineData), this.ani.skeleton.setToSetupPose(), this.container.addChild(this.ani)
            }, e.prototype.showIntro = function(t) {
                t == r.FishKind.EclipticCrab && this.showAni("crab"), t == r.FishKind.GoldenToad && this.showAni("toad")
            }, e.prototype.showAni = function(t) {
                this.ani.state.setAnimation(0, t, !1)
            }, e
        }(PIXI.Container);
    e.FishIntro = h;
    var l = new(function() {
        function t() {}
        return t.prototype.getFishIntro = function() {
            return this.instance || (this.instance = new h)
        }, t
    }());
    e.fishIntroManager = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function(t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.id = e, n.kind = i, n.realKind = i, n
        }
        return o(e, t), e.prototype.catch = function(t, e, i) {
            this.parent && this.parent.removeChild(this), this.destroy()
        }, e.prototype.swim = function() {}, e.prototype.pause = function() {}, e.prototype.resume = function() {}, e.prototype.hurt = function() {}, e.prototype.getRects = function() {
            return null
        }, e.prototype.clear = function() {}, e.prototype.translate = function(t) {}, e.prototype.reset = function() {}, e.prototype.stay = function() {}, e
    }(PIXI.Container);
    e.default = a
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(49),
        r = i(1),
        h = i(2),
        l = i(3),
        c = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.interactive = !0, e.initBack(0, .6), e.initContent(), e
            }
            return o(e, t), e.prototype.initContent = function() {
                var t = this,
                    e = [{
                        x: r.default.width / 2,
                        y: r.default.height / 2
                    }, {
                        x: r.default.width / 2,
                        y: 488
                    }];
                h.default.createSprites(["exit_tip_bg.png", "exit_tip_ok.png"], e, this).forEach(function(e, i) {
                    e.anchor.set(.5), t.addChild(e), 1 == i && t.bindEvent(e)
                });
                var i = this.createText("TXT_EXIT_TITLE", 36, "#000201", null, "roboto-medium"),
                    n = this.createText("TXT_EXIT_TIP");
                this.setTextScaleByWidth(n, 540), i.position.set(r.default.width / 2, r.default.height / 2 - 85 - 40), n.position.set(r.default.width / 2, r.default.height / 2 - 14), this.addChild(n, i)
            }, e.prototype.createText = function(t, e, i, n, o) {
                void 0 === e && (e = 26), void 0 === i && (i = "#FFF");
                var s = new PIXI.TextStyle({
                    fontFamily: o || "roboto",
                    fontSize: e,
                    fill: i,
                    align: "center"
                });
                n && (s.stroke = n, s.strokeThickness = 1);
                var r = new PIXI.Text(a.default.locale.getString(t), s);
                return r.anchor.set(.5), r
            }, e.prototype.setTextScaleByWidth = function(t, e) {
                t.width > e && t.scale.set(e / t.width)
            }, e.prototype.btnShake = function(t, e) {
                var i = t.scale,
                    n = new l.TimelineLite({
                        onComplete: function() {
                            return e()
                        }
                    });
                n.to(i, .1, {
                    x: .8,
                    y: .8
                }), n.to(i, .1, {
                    x: 1.1,
                    y: 1.1
                }), n.to(i, .1, {
                    x: 1,
                    y: 1
                })
            }, e.prototype.bindEvent = function(t) {
                var e = this,
                    i = this.createText("TXT_EXIT_OK", 32, "#0b1c43", "#fff", "roboto-bold");
                this.setTextScaleByWidth(i, 150), i.position.set(1, -4), t.addChild(i), t.interactive = !0, t.buttonMode = !0, t.on("pointerdown", function() {
                    t.interactive = !1, e.btnShake(t, function() {
                        return e.hide()
                    })
                }), this.btnOK = t
            }, e.prototype.show = function() {
                var t = this;
                this.visible = !0, a.default.app.stage.addChild(this), l.TweenLite.to(this, .2, {
                    alpha: 1,
                    onComplete: function() {
                        return t.btnOK.interactive = !0
                    }
                })
            }, e.prototype.hide = function() {
                this.visible = !1, this.alpha = 0, this.parent && this.parent.removeChild(this)
            }, e
        }(s.default);
    e.default = c
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        s = i(3),
        r = i(9),
        h = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.isOnLock = !1, i.isOnAuto = !1, i.isOnDouble = !1, i.isOnThunder = !1, i.btnList = [], i.isActiveForFirestorm = !0, i.callbackOnLock = e.onLock, i.callbackOnAuto = e.onAuto, i.callbackOnDouble = e.onDouble, i.callbackOnThunder = e.onThunder, i.initPanel(), i.initAimFish(), i
            }
            return o(e, t), e.prototype.initPanel = function() {
                var t = this;
                this.container = new PIXI.Container, this.addChild(this.container);
                this.btnList = a.default.createSprites(["tb_aim_up.png", "tb_auto_up.png", "tb_double_up.png", "tb_thunder_up.png"], [{
                    x: 67,
                    y: 175
                }, {
                    x: 67,
                    y: 321
                }, {
                    x: 67,
                    y: 466
                }, {
                    x: 67,
                    y: 614
                }], this.container);
                var e, i = this.btnList.slice(),
                    n = i[0],
                    o = i[1],
                    r = i[2],
                    h = i[3];
                e = ["tb_aim_", "tb_auto_", "tb_double_", "tb_thunder_"], n.name = e[0], o.name = e[1], r.name = e[2], h.name = e[3], this.btnList.forEach(function(e) {
                    e.interactive = !0, e.buttonMode = !0, e.anchor.set(.5), e.on("pointerdown", function() {
                        return t.onEvent(e)
                    });
                    var i = PIXI.Sprite.fromFrame(e.name + "text.png");
                    i.anchor.set(.5), i.position.set(e.position.x, e.position.y + 65), t.addChild(i)
                }), this.btnAuto = o, this.btnAim = n, this.btnDouble = r, this.btnThunder = h, this.container.x = -120, this.interactive = !0, setTimeout(function() {
                    return s.TweenMax.to(t.container, .5, {
                        x: 0
                    })
                })
            }, e.prototype.onEvent = function(t) {
                this.preSetFlag(t), this.setFrame(t, this.getBtnStatus(t)), r.default.playBtnClick()
            }, e.prototype.getBtnStatus = function(t) {
                return "tb_aim_" == t.name ? this.isOnLock : "tb_auto_" == t.name ? this.isOnAuto : "tb_double_" == t.name ? this.isOnDouble : this.isOnThunder
            }, e.prototype.setFrame = function(t, e) {
                t.texture = e ? PIXI.Texture.fromFrame(t.name + "down.png") : PIXI.Texture.fromFrame(t.name + "up.png")
            }, e.prototype.initAimFish = function() {
                var t = this;
                this.aimSprites = a.default.createSprites(["aim_target_bg1.png", "aim_target_bg2.png", "aim_fish_0.png"]), this.aimSprites.forEach(function(e, i) {
                    e.anchor.set(.5), t.btnAim.addChild(e), 2 == i && (t.aimFish = e)
                }), this.setAimFish(!1)
            }, e.prototype.preSetFlag = function(t) {
                "tb_auto_" == t.name ? (this.isOnAuto && (this.isOnAuto = !this.isOnAuto), this.callbackOnAuto()) : "tb_aim_" == t.name ? (this.isOnLock = !this.isOnLock, this.callbackOnLock()) : "tb_double_" == t.name ? (this.isOnDouble = !this.isOnDouble, this.callbackOnDouble()) : (this.isOnThunder = !this.isOnThunder, this.callbackOnThunder())
            }, e.prototype.activeAim = function(t) {
                this.isOnLock != t && this.onEvent(this.btnAim)
            }, e.prototype.activeAutoLock = function(t) {
                this.isOnAuto != t && (this.isOnAuto = t, this.setFrame(this.btnAuto, this.getBtnStatus(this.btnAuto)))
            }, e.prototype.activeDouble = function(t) {
                this.isOnDouble != t && this.onEvent(this.btnDouble)
            }, e.prototype.activeThunderLock = function(t) {
                this.isOnThunder != t && (this.isOnThunder = t, this.setFrame(this.btnThunder, this.getBtnStatus(this.btnThunder)))
            }, e.prototype.activeLightn = function(t) {
                this.isOnThunder != t && this.onEvent(this.btnThunder)
            }, e.prototype.setAimFish = function(t, e) {
                this.aimSprites.forEach(function(e) {
                    return e.visible = t
                }), "number" == typeof e && (this.aimFish.texture = PIXI.Texture.fromFrame("aim_fish_" + e + ".png"))
            }, e.prototype.activeForFirestorm = function(t) {
                this.isActiveForFirestorm = t, this.btnDouble.interactive = t, this.btnThunder.interactive = t
            }, e.prototype.getActiveForFirestorm = function() {
                return this.isActiveForFirestorm
            }, e.prototype.enableForShot = function(t) {
                return void 0 !== t && (this.container.interactiveChildren = t), this.container.interactiveChildren
            }, e
        }(PIXI.Container);
    e.ToolLayer = h
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        en_us: {
            title: {
                normal: "Fish Paytable",
                special: "Special Fish",
                tutorial: "Tutorial"
            },
            special: [{
                title: "Dragon King",
                content: "Immortal-type with <i>x10 to x300</i> rewards.<br><br>When Dragon King appears, players shall work together to win lucky bonus."
            }, {
                title: "Firestorm",
                content: "Rapid fire cannon will be armed and randomly rewards <i>30-100 bullets.</i><br>Firestorm mode will ends after all free bullets have been fired.<br><br>In case of interruption, system will automatically fix the score at <i>x30</i>."
            }, {
                title: "Thunder Hammer",
                content: "Players will get <i>x30 to x100</i> rewards.<br>Once obtained, chain-style lightning effect will be released and randomly strike fishes across<br>the pool.<br><br>In case of interruption, system will automatically fix the score at <i>x30</i>."
            }, {
                title: "Azure Stone",
                content: "Players will get <i>x10</i> rewards.<br>Once obtained, the pool will be frozen for <i>10 seconds</i> and multiplier of fishes will be increased.<br><br>In case of interruption, system will automatically fix the score at <i>x10</i>."
            }, {
                title: "Wealth Packet",
                content: "Unveil the Wealth Packet to win reward up to <i>x200</i>.<br>Wealth Packet has a chance to randomly appear when player hits any fish.<br>Once trigger, player stands a chance to select one red packet and claim prize from it.<br><br>In case of interruption, system will choose the wealth packet of any position."
            }, {
                title: "Dragon Wheel",
                content: "Players will get up to <i>x300</i> rewards.<br><br>Once obtained, a roulette will appear and randomly offer high multiple rewards.<br><br>In case of interruption, system will automatically fix the score."
            }, {
                title: "Awakening Dragon",
                content: "Players will get <i>x100 to x488</i> rewards.<br>Once Gold Dragon is caught, the pool will turn into explosion zone and detonate continuously<br>for <i>2 times or more</i> to capture fishes across the pool.<br><br>In case of interruption, system will automatically fix the score at <i>x100</i>."
            }, {
                title: "The Monkey King",
                content: "Players will get <i>x100 to x688</i> rewards.<br>Once Monkey King is caught, the pool will turn into explosion zone and detonate continuously<br>for <i>2 times or more</i> to capture fishes across the pool.<br><br>In case of interruption, system will automatically fix the score at <i>x100</i>."
            }, {
                title: "Pirate Ghost Ship",
                content: "Players will get <i>x100 to x888</i> rewards.<br>There will be a count down for the mega monster's arrival. Players shall work together to hunt<br>it down and once succeed, it causes an earthquake to destroy all fishes in the pool.<br><br>In case of interruption, system will automatically fix the score at <i>x100</i>."
            }],
            tutorial: [{
                title: "Target",
                content: "Select feature or double click on specific fish type to lock-on target.<br>Click on the background to unlock target."
            }, {
                title: "Auto",
                content: "Cannon shoots against the selected fishes automatically."
            }, {
                title: "Double",
                content: "Select feature or click once cannon to transform to Dual Cannon. <br>Cannon becomes dual and fire doubled-bullets concurrently with <br>doubled calculation."
            }, {
                title: "Lightning",
                content: "Select feature or click twice cannon to transform to Lightning Cannon. <br>Activate electricity power to strike by holding or click on the fish."
            }]
        },
        zh_cn: {
            title: {
                normal: "鱼类赔付表",
                special: "特种鱼",
                tutorial: "游戏教程"
            },
            special: [{
                title: "龙王",
                content: "奖励<i>x10至x300</i>的永生鱼种。<br><br>当海龙王出现时，玩家可协力捕捉其手中宝藏以获取幸运奖励。"
            }, {
                title: "雷霆火炮",
                content: "雷霆火炮安装于炮台上，并随机奖励<i>30-100发免费炮弹</i>。<br>雷霆火炮模式将在所有免费炮弹发射完毕后结束。<br><br>若功能遭遇中断，系统将自行指定为<i>x30</i>奖励。"
            }, {
                title: "震天锤",
                content: "玩家将获得<i>x30至x100</i>奖励。<br>捕获后将释放闪电效果，并以链状连环电击鱼池范围内的鱼儿。<br><br>若功能遭遇中断，系统将自行指定为<i>x30</i>奖励。"
            }, {
                title: "补天石",
                content: "玩家将获得<i>x10</i>奖励。<br>捕获后将冻结全场鱼群<i>10秒</i>，并提升鱼类赔率。<br><br>若功能遭遇中断，系统将自行指定为<i>x10</i>奖励。"
            }, {
                title: "幸运福袋",
                content: "开启幸运福袋赢取高达<i>x200</i>奖赏。<br>幸运福袋将在玩家击中任何鱼类时随机出现。<br>一旦触发，玩家可从福袋中选择一个红包以赢取奖励。<br><br>若功能遭遇中断，系统将随机选择任何位置的福袋。"
            }, {
                title: "腾龙转盘",
                content: "玩家将获得高达<i>x300</i>奖励<br>捕获后将出现转盘，并随机获得高倍数奖励。<br><br>若功能遭遇中断，系统将自行指定奖励数额。"
            }, {
                title: "金龙翻腾",
                content: "玩家将获得<i>x100至x488</i>奖励。<br>捕获金龙后，渔场将进入轰炸范围，有机会连续爆炸<i>2次或更多</i>，捕获范围内的鱼群。<br><br>若功能遭遇中断，系统将自行指定为<i>x100</i>奖励。"
            }, {
                title: "齐天大圣",
                content: "玩家将获得<i>x100至x688</i>奖励。<br>捕获齐天大圣后，渔场将进入轰炸范围，有机会连续爆炸<i>2次或更多</i>，捕获范围内的鱼群。<br><br>若功能遭遇中断，系统将自行指定为<i>x100</i>奖励。"
            }, {
                title: "鬼盗船",
                content: "玩家将获得<i>x100至x888</i>奖励。<br>怪兽出现前将进行倒数。玩家可协力把它打下，成功后将产生强震以摧毁鱼池内所有鱼种。<br><br>若功能遭遇中断，系统将自行指定为<i>x100</i>奖励。"
            }],
            tutorial: [{
                title: "瞄准",
                content: "选择功能或双击特定鱼种以锁定目标发射炮弹。<br>点击背景解锁目标。"
            }, {
                title: "自动",
                content: "炮管针对指定鱼类进行自动发射。"
            }, {
                title: "双管",
                content: "选择此技能或点击一次炮台升级为双管。<br>炮台转换成两座，并以双倍计算同时发射两发炮弹。"
            }, {
                title: "电击",
                content: "选择此技能或点击两次炮台升级为电击。<br>长按或点击鱼类进行射杀。"
            }]
        },
        id_id: {
            title: {
                normal: "Tabel pembayaran ikan",
                special: "Special Fish",
                tutorial: "Tutorial"
            },
            special: [{
                title: "Dragon King",
                content: "Tipe abadi dengan hadiah <i>x10 hingga x300</i>. <br><br>Ketika Dragon King muncul, pemain harus bekerja sama untuk memenangkan bonus keberuntungan."
            }, {
                title: "Firestorm",
                content: "Meriam api cepat akan dipersenjatai dan secara acak memberi hadiah <i>30-100 peluru.</i> <br>Mode Firestorm akan berakhir setelah semua peluru gratis ditembakkan.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x30</i>."
            }, {
                title: "Thunder Hammer",
                content: "Pemain akan mendapatkan hadiah <i>x30 hingga x100</i>. <br>Setelah diperoleh, efek kilat rantai akan dirilis dan menyerang ikan secara acak di kolam.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x30</i>."
            }, {
                title: "Azure Stone",
                content: "Pemain akan mendapatkan hadiah <i>x10</i>.<br>Setelah diperoleh, kolam akan dibekukan selama <i>10 detik</i> dan pengganda ikan akan meningkat.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x10</i>."
            }, {
                title: "Wealth Packet",
                content: "Luncurkan Paket Kekayaan untuk memenangkan hadiah hingga <i>x200</i>.<br>Paket Kekayaan memiliki kesempatan untuk muncul secara acak ketika pemain menembak ikan apa pun. Setelah dipicu, pemain memiliki kesempatan untuk memilih satu red pocket dan mengklaim hadiah darinya.<br><br>Jika terjadi gangguan, sistem akan memilih paket kekayaan dari posisi apa pun."
            }, {
                title: "Dragon Wheel",
                content: "Pemain akan mendapatkan hadiah <i>x300</i>.<br>Setelah diperoleh, roulette akan muncul dan secara acak menawarkan beberapa hadiah tinggi.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor."
            }, {
                title: "Awakening Dragon",
                content: "Pemain akan mendapatkan hadiah <i>x100 hingga x488</i>.<br>Setelah Naga Emas ditangkap, kolam akan berubah menjadi zona ledakan dan meledak terus menerus selama <i>2 kali atau lebih</i> untuk menangkap ikan di kolam.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x100</i>."
            }, {
                title: "The Monkey King",
                content: "Pemain akan mendapatkan hadiah <i>x100 hingga x688</i>.<br>Setelah Monkey King ditangkap, kolam akan berubah menjadi zona ledakan dan meledak terus menerus selama <i>2 kali atau lebih</i> untuk menangkap ikan di kolam.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x100</i>."
            }, {
                title: "Pirate Ghost Ship",
                content: "Pemain akan mendapatkan hadiah <i>x100 hingga x888</i>.<br>Akan ada hitungan mundur untuk kedatangan monster mega. Pemain harus bekerja bersama untuk memburunya dan sekali berhasil, itu menyebabkan gempa bumi menghancurkan semua ikan di kolam.<br><br>Jika terjadi gangguan, sistem akan secara otomatis memperbaiki skor di <i>x100</i>."
            }],
            tutorial: [{
                title: "Target",
                content: "Pilih fitur atau klik dua kali pada jenis ikan tertentu untuk mengunci target. Klik pada background untuk membuka kunci target."
            }, {
                title: "Auto",
                content: "Meriam menembak ikan yang dipilih secara otomatis."
            }, {
                title: "Dua kali lipat",
                content: "Pilih fitur atau klik satu kali pada meriam untuk berubah menjadi Meriam Ganda. Meriam menjadi dua dan menembakkan peluru dua kali lipat secara bersamaan dengan perhitungan dua kali lipat."
            }, {
                title: "Petir",
                content: "Pilih fitur atau klik dua kali pada meriam untuk mengubah ke Lightning Cannon. Aktifkan daya listrik untuk menyerang dengan memegang atau mengklik pada ikan."
            }]
        },
        th_th: {
            title: {
                normal: "ฟิชเพย์เทเบิล",
                special: "ปลาพิเศษ",
                tutorial: "สอนเกี่ยวกับการเล่น"
            },
            special: [{
                title: "Dragon King",
                content: "อิมมอลทอล - ประเภท รางวัล <i>x10 ถึง x300</i><br><br>เมื่อดราก้อน คิง ปรากฏ ผู้เล่นจะต้องทำงานร่วมกันเพื่อชนะโบนัสลัคกี้"
            }, {
                title: "Firestorm",
                content: "ปืนใหญ่จะได้เป็นอาวุธและสุ่มรางวัล <i>30-100 กระสุน</i><br>โหมดทะเลเพลิงจะสิ้นสุดหลังจากกระสุนฟรีทั้งหมดที่มีหมด<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x30</i>"
            }, {
                title: "Thunder Hammer",
                content: "ผู้เล่นจะได้รับรางวัล <i>x30 ถึง x100</i><br>เมื่อได้รับเอฟเฟกต์ สายฟ้าผ่าแบบโซ่จะถูกปล่อยออกมาและโจมตีปลาแบบสุ่มข้ามสระน้ำ<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x30</i>"
            }, {
                title: "Azure Stone",
                content: "ผู้เล่นจะได้รับรางวัล <i>x10</i><br>เมื่อได้รับแล้ว สระน้ำจะเป็นน้ำแข็งเป็นเวลา <i>10 วินาที</i>และตัวคูณของปลาจะเพิ่มขึ้น<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x10</i>"
            }, {
                title: "Wealth Packet",
                content: "เปิดเผยเวลท์ แพ็คเกจเพื่อชนะรางวัลสูงถึง <i>x200</i><br>เวลท์ แพ็คเกจ มีโอกาศที่จะสุ่มปรากฏขึ้นเมื่อผู้เล่นตีปลาใดๆเมื่อทริกเกอร์ ผู้เล่นจะมีโอกาสเลือกหนึ่งเรด แพ็คเกจและรับรางวัลจากมัน<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะเลือกเวลท์ แพ็คเกจของตำแหน่งใดๆ"
            }, {
                title: "Dragon Wheel",
                content: "ผู้เล่นจะได้รับรางวัลสูงถึง <i>x300</i><br>ทันทีที่ได้รับ รูเล็ตจะปรากฏขึ้นและเสนอสุ่มรางวัลมัลติเพิลสูง<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขสกอร์โดยอัตโนมัติ"
            }, {
                title: "Awakening Dragon",
                content: "ผู้เล่นจะได้รับรางวัล <i>x100 ถึง x488</i><br>ทันทีที่จับดราก้อนโกล สระน้ำจะกลับไปเป็นโซนระเบิดและระเบิดอย่างต่อเนื่องเป็นเวลา <i>2 ครั้งหรือมากกว่า</i>เพื่อจับปลาข้ามสระ<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x100</i>"
            }, {
                title: "The Monkey King",
                content: "ผู้เล่นจะได้รับรางวัล <i>x100 ถึง x688</i><br>ทันทีที่จับราชาวานร สระน้ำจะกลายเป็นโซนระเบิดและระเบิดต่อเนื่องสำหรับ <i>2 ครั้งหรือมากกว่า</i>เพื่อจับปลาข้ามสระ<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x100</i>"
            }, {
                title: "Pirate Ghost Ship",
                content: "ผู้เล่นจะได้รับรางวัล <i>x100 ถึง x888</i><br>จะมีการนับถอยหลังสำหรับการมาถึงของมอนสเตอร์ขนาดใหญ่ ผู้เล่นจะต้องทำงานร่วมกันเพื่อล่ามันและเมื่อสำเร็จก็จะทำให้เกิดแผ่นดินไหวที่จะทำลายปลาทั้งหมดในสระน้ำ<br><br>ในกรณีที่มีการขัดจังหวะ ระบบจะแก้ไขโดยอัตโนมัติที่สกอร์ <i>x100</i>"
            }],
            tutorial: [{
                title: "เป้าหมาย",
                content: "ฟีเจอร์เลือกหรือคลิกสองครั้งที่ประเภทปลาพิเศษเพื่อล็อคเป้าหมาย<br>คลิกที่พื้นหลังเพื่อปลดล็อคเป้าหมาย"
            }, {
                title: "ออโต้",
                content: "ปืนใหญ่ยิงอีกครั้งกับปลาที่เลือกโดยอัตโนมัติ"
            }, {
                title: "สองครั้ง",
                content: "เลือกฟีเจอร์หรือคลิกหนึ่งครั้งที่ปืนใหญ่เพื่อเปลี่ยนเป็นปืนใหญ่คู่ <br>ปืนใหญ่กลายเป้นกระสุนสองนัดและกระสุนสองเท่าพร้อมกับคำนวณสองเท่า"
            }, {
                title: "ฟ้าแลบ",
                content: "เลือกฟีเจอร์หรือคลิกปืนใหญ่คู่เพื่อเปลี่ยนเป็นปืนใหญ่ฟ้าแลบ <br>เปิดใช้งานพลังานไฟฟ้าเพื่อโจมตีโดยการจับหรือคลิกที่ปลา"
            }]
        },
        vi_vn: {
            title: {
                normal: "cá cò thể thanh toán",
                special: "Cá đặc biệt",
                tutorial: "Hướng dẫn"
            },
            special: [{
                title: "Dragon King",
                content: "Loại bất tử với phần thưởng từ <i>x10 đến x300</i>.<br><br>Khi Long Vương xuất hiện, người chơi sẽ hợp tác với nhau để giành phần thưởng may mắn."
            }, {
                title: "Firestorm",
                content: "Pháo bắn nhanh sẽ được trang bị và thưởng ngẫu nhiên <i>30-100 viên đạn.</i><br>Chế độ Bão lửa sẽ kết thúc sau khi tất cả các viên đạn miễn phí đã được bắn.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x30</i>."
            }, {
                title: "Thunder Hammer",
                content: "Người chơi sẽ nhận được phần thưởng <i>x30 đến x100</i>.<br>Sau khi đã đạt đươc, hiệu ứng chuỗi sấm sét sẽ được giải phóng và tấn công ngẫu nhiên các loài cá trên khắp hồ bơi.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x30</i>."
            }, {
                title: "Azure Stone",
                content: "Người chơi sẽ nhận được phần thưởng <i>x10</i>.<br>Sau khi đã đạt được, hồ bơi sẽ bị đóng băng trong <i>10 giây</i> và số nhân của cá sẽ được tăng lên.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x10</i>."
            }, {
                title: "Wealth Packet",
                content: "Mở Gói Tài lộc để giành phần thưởng lên tới <i>x200</i>.<br>Gói tài lộc có cơ hội xuất hiện ngẫu nhiên khi người chơi đánh bất kỳ con cá nào. Khi kích hoạt, người chơi có cơ hội chọn một bao lì xì và nhận giải thưởng từ nó.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ chọn gói tài lộc của bất kỳ vị trí nào."
            }, {
                title: "Dragon Wheel",
                content: "Người chơi sẽ nhận được tới <i>x300</i> phần thưởng.<br>Sau khi đã có được, một vòng quay sẽ xuất hiện và ngẫu nhiên cung cấp nhiều phần thưởng cao.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm."
            }, {
                title: "Awakening Dragon",
                content: "Người chơi sẽ nhận được phần thưởng từ <i>x100 đến x488</i>.<br>Khi Rồng Vàng bị bắt, hồ bơi sẽ biến thành vùng nổ và phát nổ liên tục từ <i>2 lần trở lên</i> để bắt cá bơi qua hồ.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x100</i>."
            }, {
                title: "The Monkey King",
                content: "Người chơi sẽ nhận được phần thưởng từ <i>x100 đến x688</i>.<br>Khi Hầu Vương bị bắt, hồ bơi sẽ biến thành vùng nổ và phát nổ liên tục từ <i>2 lần trở lên</i> để bắt cá bơi qua hồ.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x100</i>."
            }, {
                title: "Pirate Ghost Ship",
                content: "Người chơi sẽ nhận được phần thưởng từ <i>x100 đến x888</i>.<br>Sẽ có thời gian đếm ngược cho sự xuất hiện của quái vật lớn. Người chơi sẽ làm việc cùng nhau để săn lùng nó và một khi thành công, quái vật sẽ gây ra một trận động đất để tiêu diệt tất cả các loài cá trong hồ.<br><br>Trong trường hợp bị gián đoạn, hệ thống sẽ tự động sửa điểm tại <i>x100</i>."
            }],
            tutorial: [{
                title: "Mục tiêu",
                content: "Chọn tính năng hoặc nhấp đúp chuột vào loại cá cụ thể để khóa mục tiêu.<br>Nhấp vào nền để mở khóa mục tiêu."
            }, {
                title: "Tự động",
                content: "Pháo bắn tự động vào những con cá được chọn."
            }, {
                title: "Gấp đôi",
                content: "Chọn tính năng hoặc nhấp một lần pháo để chuyển đổi thành Pháo kép. <br>Pháo trở thành kép và bắn hai viên đạn đồng thời với tính toán nhân đôi."
            }, {
                title: "Tia chớp",
                content: "Chọn tính năng hoặc nhấp hai lần pháo để chuyển thành Pháo tia chớp. <br>Kích hoạt năng lượng điện để tấn công bằng cách giữ hoặc nhấp vào cá."
            }]
        },
        ja_jp: {
            title: {
                normal: "フィッシュ配当表",
                special: "スペシャルフィッシュ",
                tutorial: "チュートリアル"
            },
            special: [{
                title: "Dragon King",
                content: "<i>x10～x300</i>リワードの不死身タイプ。<br><br>ドラゴンキングが現れると、プレーヤーは協力してラッキーボーナスを獲得できます。"
            }, {
                title: "Firestorm",
                content: "ラピッド火炎大砲で武装すると、ランダムに<i>30～100発の弾丸</i>を受け取ることができます。<br>ファイヤーストームモードはすべての無料弾丸を発射し尽くすと終了します。<br><br>中断した場合、システムによりスコアが自動的に<i>x30</i>に修正されます。"
            }, {
                title: "Thunder Hammer",
                content: "プレーヤーは<i>x30～x100</i>リワードを獲得できます。<br>入手すると、チェーンスタイルの稲妻効果を放ち、ランダムにプール内の魚を攻撃します。<br><br>中断した場合、システムによりスコアが自動的に<i>x30</i>に修正されます。"
            }, {
                title: "Azure Stone",
                content: "プレーヤーは<i>x10</i>リワードを獲得できます。<br>入手すると、プールは<i>10秒</i>間フリーズし、魚のマルチプライヤーが増加します。<br><br>中断した場合、システムによりスコアが自動的に<i>x10</i>に修正されます。"
            }, {
                title: "Wealth Packet",
                content: "マネー封筒を表示して、最大<i>x200</i>のリワードを獲得します。<br>マネー封筒は、プレーヤーが魚をヒットするとランダムに現れます。トリガーすると、プレーヤーは赤い封筒を1つ選択し、そのプライズを獲得するチャンスとなります。<br><br>中断した場合、システムによりいずれかのポジションのマネー封筒が選ばれます。"
            }, {
                title: "Dragon Wheel",
                content: "プレーヤーは最大<i>x300</i>リワードを獲得できます。<br>入手すると、ルーレットが現れ、ランダムに高い複数のリワードが提供されます。<br><br>中断した場合、システムによりスコアが自動的に修正されます。"
            }, {
                title: "Awakening Dragon",
                content: "プレーヤーは<i>x100～x488</i>リワードを獲得できます。<br>ゴールドドラゴンを捕まえると、プールは爆発ゾーンに変化し、プール内の魚を捕まえるために連続<i>2回以上</i>爆破します。<br><br>中断した場合、システムによりスコアが自動的に<i>x100</i>に修正されます。"
            }, {
                title: "The Monkey King",
                content: "プレーヤーは<i>x100～x688</i>リワードを獲得できます。<br>モンキーキングを捕まえると、プールは爆発ゾーンに変化し、プール内の魚を捕まえるために連続<i>2回以上</i>爆破します。<br><br>中断した場合、システムによりスコアが自動的に<i>x100</i>に修正されます。"
            }, {
                title: "Pirate Ghost Ship",
                content: "プレーヤーは<i>x100～x888</i>リワードを獲得できます。<br>メガモンスターの到着に、カウントダウンがあります。プレーヤーは協力して追い詰め、成功すると、地震を発生させてプール内のすべての魚を破壊します。<br><br>中断した場合、システムによりスコアが自動的に<i>x100</i>に修正されます。"
            }],
            tutorial: [{
                title: "ターゲット",
                content: "フィーチャーを選ぶか、特定の魚の種類をクリックしてターゲットをロックオンします。背景をクリックすると、ターゲットをロック解除します。"
            }, {
                title: "自動",
                content: "大砲は、選択した魚に対して自動的に発射します。"
            }, {
                title: "ダブル",
                content: "フィーチャーを選ぶか、大砲を1回クリックしてデュアル大砲に変化させます。大砲は2台になり、2倍の弾を同時に、2倍計算で発射します。"
            }, {
                title: "稲妻",
                content: "フィーチャーを選ぶか、大砲を2回クリックして稲妻大砲に変化させます。エレキパワーを有効にして、魚をホールドまたはクリックして攻撃します。"
            }]
        },
        ko_kr: {
            title: {
                normal: "물고기 배당표",
                special: "스페셜 물고기",
                tutorial: "자습서"
            },
            special: [{
                title: "Dragon King",
                content: "<i>x10에서 x300</i> 보상을 제공하는 불멸의 유형입니다.<br><br>드래곤 킹이 나타나면 플레이어들이 협력하여 행운 보너스를 획득합니다."
            }, {
                title: "Firestorm",
                content: "초고속 발사 캐논이 장전되고 무작위로 <i>30-100</i>발 총알이 제공됩니다.<br>모든 무료 총알을 발사한 후에 파이어스톰이 종료됩니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>30x</i>로 고정합니다."
            }, {
                title: "Thunder Hammer",
                content: "플레이어는 <i>x30에서 x100</i> 보상을 획득합니다.<br>획득하면 체인 형식의 번개 효과가 배포되어 연못의 물고기를 무작위로 맞춥니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>30x</i>로 고정합니다."
            }, {
                title: "Azure Stone",
                content: "플레이어는 <i>x10</i> 보상을 획득합니다.<br>획득하면 연못은 <i>10초</i> 동안 얼어버리고 물고기의 배수가 높아집니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>10x</i>로 고정합니다."
            }, {
                title: "Wealth Packet",
                content: "부귀 봉투가 나타나면 최대 <i>x200</i>까지 보상을 획득합니다.<br>플레이어가 물고기를 맞추면 부귀 봉투가 무작위로 나타날 가능성이 있습니다.<br>트리거되면 플레이어는 빨간 봉투 하나를 선택할 수 있으며, 그 상금을 청구할 수 있습니다.<br><br>중단이 발생하는 경우 시스템에서 부귀 봉투를 선택합니다."
            }, {
                title: "Dragon Wheel",
                content: "플레이어는 최대 <i>x300</i> 보상을 획득합니다.<br>획득하면 룰렛이 나타나고 무작위로 높은 여러 보상을 제공합니다.<br><br>중단이 발생하는 경우, 시스템에서 자동으로 스코어를 수정합니다."
            }, {
                title: "Awakening Dragon",
                content: "플레이어는 <i>x100에서 x488</i>까지 보상을 획득합니다.<br>골드 드래곤이 잡히면 연못은 폭파 구역으로 바뀌고 <i>2번 이상</i> 연속으로 폭발하여 연못 전체에서 물고기를 잡습니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>100x</i>로 고정합니다."
            }, {
                title: "The Monkey King",
                content: "플레이어는 <i>x100에서 x688</i>까지 보상을 획득합니다.<br>몽키 킹이 잡히면 연못은 폭파 구역으로 바뀌고 <i>2번 이상</i> 연속으로 폭발하여 연못 전체에서 물고기를 잡습니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>100x</i>로 고정합니다."
            }, {
                title: "Pirate Ghost Ship",
                content: "플레이어는 <i>x100에서 x888</i>까지 보상을 획득합니다.<br>메가 몬스터의 도착까지 카운트다운이 있습니다. 플레이들은 협력하여 사냥을 하고 성공하는 경우 지진이 발생하여 연못의 모든 물고기를 파괴합니다.<br><br>중단이 발생하는 경우, 시스템은 자동으로 스코어를 <i>100x</i>로 고정합니다."
            }],
            tutorial: [{
                title: "목표",
                content: "기능을 선택하거나 특정 물고기 유형을 선택하여 목표에 조준합니다.<br>배경을 클릭하여 목표에 조준을 해제합니다."
            }, {
                title: "자동",
                content: "캐논은 선택한 물고기들을 자동으로 쏩니다."
            }, {
                title: "더블",
                content: "기능을 선택하거나 캐논을 한 번 클릭하여 듀얼 캐논으로 변환합니다. <br>캐논은 듀얼 캐논이 되며 더블 계산으로 동시에 더블 탄환을 발사합니다."
            }, {
                title: "번개",
                content: "기능을 선택하거나 캐논을 두 번 클릭하여 번개 캐논으로 변환합니다. <br>물고기를 누르거나 클릭하여 전기 파워로 공격하도록 활성화합니다."
            }]
        },
        tr_tr: {
            title: {
                normal: "Balık Kazanç Tablosu",
                special: "Özel Balık",
                tutorial: "Öğretici"
            },
            special: [{
                title: "Dragon King",
                content: "<i>10 ila 300 kat</i> ödüllü ölümsüz tür.<br><br>Ejderha Kral çıktığında, oyuncular hep birlikte şanslı bonusu kazanmaya çalışacak."
            }, {
                title: "Firestorm",
                content: "Seri top kuşanılır ve rastgele olarak <i>30-100 mermi verir.</i><br>Tüm ücretsiz mermiler atıldıktan sonra alev fırtınası modu sona erer.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>30 kata</i> sabitler."
            }, {
                title: "Thunder Hammer",
                content: "Oyuncular <i>30 ila 100 kat</i> ödül alır.<br>Kazandıktan sonra, alev tarzı yıldırım efekti serbest bırakılır ve havuzun her yerinden rastgele balıkları vurur.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>30 kata</i> sabitler."
            }, {
                title: "Azure Stone",
                content: "Oyuncular <i>10 kat</i> ödül alır.<br>Kazandıktan sonra, havuz <i>10 saniyeliğine</i> donar ve balık çarpanları yükselir.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>10 kata</i> sabitler."
            }, {
                title: "Wealth Packet",
                content: "<i>200 kata</i> kadar ödül almak için Servet Paketini aç.<br>Servet Paketi, oyuncu herhangi bir balığı vurduğunda rastgele olarak çıkabilir.<br>Başladığında, oyuncu kırmızı bir paket seçip ödülünü alabilir.<br><br>Kesinti halinde, sistem herhangi bir konumdaki servet paketini kendisi seçer."
            }, {
                title: "Dragon Wheel",
                content: "Oyuncular <i>300 kata</i> kadar ödül alır.<br>Kazandıktan sonra, bir rulet çarkı çıkacak ve rastgele olarak yüksek çarpanlı ödüller kazandıracak.<br><br>Kesinti halinde, sistem skoru otomatik olarak sabitler."
            }, {
                title: "Awakening Dragon",
                content: "Oyuncular <i>100 ila 488 kat</i> ödül alır.<br>Altın Ejderha yakalandığında, havuz patlama bölgesine dönüşür ve art arda <i>2 veya daha fazla defa</i> patlayarak havuzun her yerinden balıklar yakalar.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>100 kata</i> sabitler."
            }, {
                title: "The Monkey King",
                content: "Oyuncular <i>100 ila 688 kat</i> ödül alır.<br>Maymun Kral yakalandığında, havuz patlama bölgesine dönüşür ve art arda <i>2 veya daha fazla defa</i> patlayarak havuzun her yerinden balıklar yakalar.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>100 kata</i> sabitler."
            }, {
                title: "Pirate Ghost Ship",
                content: "Oyuncular <i>100 ila 888 kat</i> ödül alır.<br>Mega canavarın gelişi için geri sayım başlar. Oyuncular avlamak için beraber çalışır ve başarılı olduklarında bir deprem gerçekleşip havuzdaki tüm balıkları yok eder.<br><br>Kesinti halinde, sistem skoru otomatik olarak <i>100 kata</i> sabitler."
            }],
            tutorial: [{
                title: "Hedef",
                content: "Hedefe kilitlenmek için ilgili özelliği seç veya belirli bir balık türünü çift tıkla. Hedefin kilidini bırakmak için arka planı tıkla."
            }, {
                title: "Otomatik",
                content: "Top otomatik olarak seçili balıklara atış yapar."
            }, {
                title: "İki Kat",
                content: "Çiftli Topa dönüştürmek için ilgili özelliği seç veya topu bir defa tıkla. Top çiftli olur ve attığı çift toplar iki kat olarak hesaplanır."
            }, {
                title: "Yıldırım",
                content: "Yıldırım Topuna dönüştürmek için ilgili özelliği seç veya topu iki defa tıkla. Tutarak veya balığı tıklayarak elektrik gücüyle vurmayı seç."
            }]
        },
        ru_ru: {
            title: {
                normal: "Таблица выплат для рыбы",
                special: "Специальная рыба",
                tutorial: "Обучение"
            },
            special: [{
                title: "Dragon King",
                content: "Бессмертный герой с выигрышем <i>от x10 до x300</i>.<br><br>При появлении Короля Драконов игроки должны взаимодействовать, чтобы выиграть счастливый бонус."
            }, {
                title: "Firestorm",
                content: "Игрок получает быстро стреляющую пушку и <i>от 30 до 100 снарядов.</i><br>Режим Firestorm закончится после того, как будут использованы все бесплатные снаряды.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x30</i>."
            }, {
                title: "Thunder Hammer",
                content: "Игроки получают бонусы <i>от x30 до x100</i>.<br>После получения будет запущена молния, которая будет случайным образом бить в рыбок в бассейне.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x30</i>."
            }, {
                title: "Azure Stone",
                content: "Игроки получают бонус <i>x10</i>.<br>После получения бассейн будет заморожен на <i>десять секунд</i> и множитель рыб будет увеличен.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x10</i>."
            }, {
                title: "Wealth Packet",
                content: "Откройте Wealth Packet и выиграйте бонус <i>до x200</i>.<br>Wealth Packet может случайно появиться, когда игр поражает любую рыбу.<br>После активации у игроков есть шанс выбрать один красный конверт и получить приз.<br><br>В случае прерывания игры система выберет пакет из любой позиции."
            }, {
                title: "Dragon Wheel",
                content: "Игроки получают бонусы <i>до x300</i>.<br>После получения появится рулетка и случайным образом предложит призы с высокими множителями.<br><br>В случае прерывания игры система автоматически зафиксирует счет."
            }, {
                title: "Awakening Dragon",
                content: "Игроки получают бонусы <i>от x100 до x488</i>.<br>После того, как Золотой Дракон будет пойман, бассейн будет взрываться <i>2 или более раз</i> подряд, что дает возможность поймать больше рыбы.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x100</i>."
            }, {
                title: "The Monkey King",
                content: "Игроки получают бонусы <i>от x100 до x688</i>.<br>После того, как Король Обезьян пойман, бассейн будет взрываться <i>2 или более раз</i> подряд, что дает возможность поймать больше рыбы.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x100</i>."
            }, {
                title: "Pirate Ghost Ship",
                content: "Игроки получают бонусы <i>от x100 до x888</i>.<br>Начинается обратный отчет до появления мегамонстра. Игроки должны вместе его поймать, после чего начнется землетрясение, которое уничтожит всех рыб в бассейне.<br><br>В случае прерывания игры система автоматически зафиксирует счет с бонусом <i>x100</i>."
            }],
            tutorial: [{
                title: "Цель",
                content: "Выберите функцию или дважды нажмите на конкретной рыбе, чтобы навести цель. Нажмите на фон, чтобы снять цель."
            }, {
                title: "Авто",
                content: "Пушка стреляет по выбранным рыбам автоматически."
            }, {
                title: "Двойной",
                content: "Выберите функцию или нажмите один раз на пушку, чтобы взять Двуствольную пушку. Двуствольная пушка стреляет двойными снарядами одновременно с двойным счетом."
            }, {
                title: "Молния",
                content: "Выберите функцию или нажмите дважды  на пушку, чтобы взять Пушку-молнию. Активируйте электричество для удара, удерживая рыбу или нажав на нее."
            }]
        }
    }
}, , function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(351),
        s = i(1),
        r = i(0),
        h = i(2),
        l = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.chairArr1 = [0, 1, 2, 3, 4], i.chairArr2 = [0, 3, 4, 1, 2], i.cb = e, i.init(), i
            }
            return o(e, t), e.prototype.init = function() {
                var t = this,
                    e = r.default.deskInfo,
                    i = r.default.acct;
                this.batteries = [], this.balances = [];
                var n = e.chairId,
                    o = h.default.getChairLine(n) > 0,
                    a = r.default.roomInfo.defaultDomination;
                this.chairArr = o ? this.chairArr2 : this.chairArr1, r.default.isView = o;
                var s = this.createBattery(this.chairArr[n], !0);
                s.setPlayerInfo(i.acctName, i.balance, a), this.addChild(s), this.mainBattery = s, this.batteries[n - 1] = s, this.balances[n - 1] = i.balance;
                for (var l = 0, c = e.playerInfos || []; l < c.length; l++) {
                    var u = c[l],
                        d = u.chairId,
                        f = this.createBattery(this.chairArr[d]);
                    f.setPlayerInfo(u.acctName, u.balance, a), this.addChild(f), this.addChild(f), this.batteries[d - 1] = f, this.balances[d - 1] = u.balance
                }
                setTimeout(function() {
                    for (var e = 0, i = t.batteries; e < i.length; e++) {
                        var n = i[e];
                        n && n.show()
                    }
                }, 200)
            }, e.prototype.createBattery = function(t, e) {
                void 0 === e && (e = !1);
                var i = new a.Battery(t, e, this.cb);
                return i.x = 1 == t || 4 == t ? 10 : s.default.width - 573, i.y = 0 == h.default.getChairLine(t) ? s.default.height - 90 : 0, i
            }, e.prototype.getChairNo = function(t) {
                void 0 === t && (t = -1);
                var e = r.default.deskInfo.chairId;
                return t = t < 0 ? e : t, this.chairArr[t]
            }, e.prototype.addPlayer = function(t, e, i) {
                var n = this.batteries[e - 1];
                n && this.removeChild(n);
                var o = this.createBattery(this.chairArr[e]);
                o.setPlayerInfo(t, i, r.default.roomInfo.defaultDomination), o.show(), this.addChild(o), this.batteries[e - 1] = o, this.balances[e - 1] = i
            }, e.prototype.removePlayer = function(t) {
                var e = this.batteries[t - 1];
                this.batteries[t - 1] = null, e && this.removeChild(e)
            }, e.prototype.getBattery = function(t) {
                return t < 0 ? this.mainBattery : this.batteries[t - 1]
            }, e.prototype.setBalance = function(t, e) {
                void 0 === e && (e = -1);
                var i = e < 0,
                    n = i ? r.default.deskInfo.chairId : e;
                n--, t = h.default.ignoreAmountDecimal(t), this.balances[n] = t, i && (r.default.acct.balance = t);
                var o = this.batteries[n];
                o && o.setAmount(t)
            }, e.prototype.setBalanceDiff = function(t, e) {
                void 0 === e && (e = -1);
                var i = e < 0 ? r.default.deskInfo.chairId : e,
                    n = this.balances[i - 1];
                n = h.default.decimalAdd(n, t), this.setBalance(n, e)
            }, e.prototype.setDomination = function(t, e) {
                var i = this.batteries[e - 1];
                i && i.setDomination(t)
            }, e.prototype.shot = function(t, e) {
                this.mainBattery.shot(t, e)
            }, e.prototype.shotFromAngle = function(t, e, i) {
                var n = this.batteries[t - 1];
                n && n.shotFromAngle(e, i)
            }, e.prototype.setShotAngle = function(t) {
                return this.mainBattery.setShotAngle(t)
            }, e.prototype.setMyLightnAngle = function() {
                return this.mainBattery.setLightnAngle()
            }, e.prototype.setLightnAngle = function(t) {
                void 0 === t && (t = -1);
                var e = this.batteries[t - 1];
                e && e.setLightnAngle()
            }, e.prototype.getGunGlobalPos = function() {
                return this.mainBattery.getGunGlobalPos()
            }, e.prototype.getCoinPosition = function(t, e) {
                return void 0 === t && (t = -1), this.getBattery(t).getCoinPosition(e)
            }, e.prototype.getBatteryPosition = function(t, e) {
                return void 0 === t && (t = -1), this.getBattery(t).getBatteryPosition(e)
            }, e.prototype.addSpecailGun = function(t, e) {
                return void 0 === e && (e = -1), this.getBattery(e).addSpecailGun(t)
            }, e.prototype.addSpecailGunImmediately = function(t, e) {
                return void 0 === e && (e = -1), this.getBattery(e).addSpecailGunImmediately(t)
            }, e.prototype.removeSpecialGun = function(t) {
                void 0 === t && (t = -1);
                var e = this.getBattery(t);
                e && e.removeSpecialGun()
            }, e.prototype.disableChangeGun = function() {
                this.mainBattery.disableChangeGun()
            }, e.prototype.enableChangeGun = function() {
                this.mainBattery.enableChangeGun()
            }, e.prototype.turnDouble = function(t, e) {
                void 0 === t && (t = -1);
                var i = this.getBattery(t);
                i && i.turnDouble(e)
            }, e.prototype.interactiveMyBattery = function(t) {
                this.mainBattery.interactiveChildren = t
            }, e
        }(PIXI.Container);
    e.default = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(352),
        s = i(353),
        r = i(2),
        h = function(t) {
            function e(e, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = null);
                var o = t.call(this) || this;
                return o.artilleryWidth = 300, o.no = e, o.isMe = i, o.initBoard(), o.initArtillery(n), o.initPosition(), o
            }
            return o(e, t), e.prototype.initBoard = function() {
                this.board = new a.default, this.addChild(this.board)
            }, e.prototype.initArtillery = function(t) {
                this.artillery = new s.default(this.no, this.isMe, t), this.artillery.x = this.board.width + this.artilleryWidth / 2, this.addChildAt(this.artillery, 0)
            }, e.prototype.initPosition = function() {
                2 != this.no && 3 != this.no || (this.artillery.x = this.artilleryWidth / 2, this.board.x = this.artilleryWidth), 1 == r.default.getChairLine(this.no) ? (this.artillery.turnaround(), this.board.y = 50, this.artillery.y = 60) : (this.board.y = 40, this.artillery.y = 30)
            }, e.prototype.setPlayerInfo = function(t, e, i) {
                this.board.setPlayer(t), this.board.setAmount(e), this.artillery.setDomination(i)
            }, e.prototype.setAmount = function(t) {
                this.board.setAmount(t)
            }, e.prototype.setDomination = function(t) {
                this.artillery.setDomination(t)
            }, e.prototype.shot = function(t, e) {
                this.artillery.shot(t, e)
            }, e.prototype.shotFromAngle = function(t, e) {
                this.artillery.shotFromAngle(t, e)
            }, e.prototype.setShotAngle = function(t) {
                return this.artillery.setShotAngle(t)
            }, e.prototype.setLightnAngle = function() {
                return this.artillery.setLigtnAngle()
            }, e.prototype.getGunGlobalPos = function() {
                return this.artillery.getGunGlobalPos()
            }, e.prototype.getCoinPosition = function(t) {
                return this.board.getCoinPosition(t)
            }, e.prototype.getBatteryPosition = function(t) {
                return this.artillery.getPosition(t)
            }, e.prototype.show = function() {
                this.board.show()
            }, e.prototype.addSpecailGun = function(t) {
                return this.artillery.addSpecailGun(t)
            }, e.prototype.addSpecailGunImmediately = function(t) {
                return this.artillery.addSpecailGunImmediately(t)
            }, e.prototype.removeSpecialGun = function() {
                this.artillery.removeSpecialGun()
            }, e.prototype.disableChangeGun = function() {
                this.artillery.special = !0
            }, e.prototype.enableChangeGun = function() {
                this.artillery.special = !1
            }, e.prototype.turnDouble = function(t) {
                this.artillery.turnDouble(t)
            }, e
        }(PIXI.Container);
    e.Battery = h
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        s = i(7),
        r = i(1),
        h = i(0),
        l = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.initBoard(), e.initText(), e
            }
            return o(e, t), e.prototype.initBoard = function() {
                var t = PIXI.Sprite.fromFrame("acct_board");
                t.anchor.set(.5), t.x = t.width / 2, t.alpha = 0, this.addChild(t), this.board = t
            }, e.prototype.initText = function() {
                var t = a.default.getTextStyle(24),
                    e = new PIXI.Text("Leemoon", t);
                e.y = 7, e.alpha = 0;
                var i = new PIXI.Text("000000", a.default.getTextStyle(24, "roboto-bold"));
                i.y = -28, i.alpha = 0, this.txtAmount = i, this.txtPlayer = e, this.addChild(e, i)
            }, e.prototype.setPlayer = function(t) {
                this.txtPlayer.text = t, this.txtPlayer.x = this.board.width / 2 - this.txtPlayer.width / 2
            }, e.prototype.setAmount = function(t) {
                this.txtAmount.text = a.default.formatAmount(a.default.ignoreAmountDecimal(t)), this.txtAmount.x = this.board.width - this.txtAmount.width - 40
            }, e.prototype.show = function() {
                this.board.alpha = 1, this.txtAmount.alpha = 1, this.txtPlayer.alpha = 1, this.board.cacheAsBitmap = !0
            }, e.prototype.getCoinPosition = function(t) {
                var e = this.board.getGlobalPosition();
                if (t) return new s.Point(e.x - 100 * r.default.scale, e.y - 15 * r.default.scale);
                var i = h.default.gameScene.getGlobalPosition(),
                    n = h.default.gameScene.scale.x;
                return new s.Point((e.x - i.x) / n - 100 * r.default.scale, (e.y - i.y) / n - 15 * r.default.scale)
            }, e
        }(PIXI.Container);
    e.default = l
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        s = i(1),
        r = i(0),
        h = i(7),
        l = i(3),
        c = i(148),
        u = i(9),
        d = function(t) {
            function e(e, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = null);
                var o = t.call(this) || this;
                return o.gunIndex = 1, o.gun_double_offset_w_list = [32, 20, 52, 30, 26, 28], o.isMe = i, o.no = e, o.gunClickCb = n, o.initArtillery(), o.initControler(), o
            }
            return o(e, t), e.prototype.initArtillery = function() {
                var t = this,
                    e = new c.Gun(r.default.resources.gun.spineData, this.isMe);
                this.isMe && this.gunClickCb && (e.buttonMode = !0, e.interactive = !0, e.on("pointerdown", function() {
                    return t.gunClickCb && t.gunClickCb()
                }), e.hitArea = new PIXI.Rectangle(-37, -94, 70, 140)), this.addChild(e), this.gun = e
            }, e.prototype.initControler = function() {
                var t = this,
                    e = new PIXI.Container;
                e.y = 35, this.addChild(e);
                var i = PIXI.Sprite.fromFrame("gun_bet_back");
                i.anchor.set(.5), e.addChild(i);
                var n = new PIXI.Text("0", a.default.getTextStyle(28, "roboto-bold", "#f7e280"));
                if (n.anchor.set(.5), n.y = -1, e.addChild(n), this.txtBet = n, this.isMe) {
                    var o = PIXI.Sprite.fromFrame("btn_add_01.png");
                    o.name = "add", o.anchor.set(.5), o.x = i.width / 2 + o.width / 2 - 30, o.y = -20, e.addChild(o);
                    var s = PIXI.Sprite.fromFrame("btn_reduce_01.png");
                    s.name = "reduce", s.anchor.set(.5), s.x = 0 - i.width / 2 - s.width / 2 + 30, s.y = -20, e.addChild(s), this.btns = [o, s], this.btns.forEach(function(e) {
                        e.interactive = !0, e.buttonMode = !0, e.on("pointerdown", function() {
                            t.onBtnDown(e)
                        }), e.on("pointerup", function() {
                            e.texture = PIXI.Texture.fromFrame("btn_" + e.name + "_01.png")
                        }), e.on("pointerout", function() {
                            e.texture = PIXI.Texture.fromFrame("btn_" + e.name + "_01.png")
                        })
                    })
                }
            }, e.prototype.onBtnDown = function(t) {
                var e = r.default.betData,
                    i = t.name,
                    n = a.default.getRatioMultiply(),
                    o = "add" == i ? e.getNextDomination() : e.getPreDomination();
                this.txtBet.text = a.default.multiplyWithoutLoss(o, n).toString(), t.texture = PIXI.Texture.fromFrame("btn_" + i + "_00.png");
                var s = e.currentDomTypeIndex + 1;
                s != this.gunIndex && (this.gunIndex = s, this.gun.change(this.gunIndex)), u.default.playBtnClick()
            }, e.prototype.getBulletPos = function(t, e, i) {
                void 0 === i && (i = 1);
                var n = 70;
                return 3 == (this.gunSpe || this.gun).kind && (n = 10), new PIXI.Point(t.x + 0 * i + n * Math.sin(e), t.y - n * Math.cos(e))
            }, e.prototype.turnaround = function() {
                this.rotation = Math.PI, this.txtBet.rotation += Math.PI
            }, e.prototype.setDomination = function(t) {
                var e = a.default.getRatioMultiply();
                this.txtBet.text = a.default.multiplyWithoutLoss(t, e).toString(), this.gunIndex = r.default.betData.getDomIndex(t) + 1, this.gun.change(this.gunIndex)
            }, e.prototype.shot = function(t, e) {
                var i = this.gunSpe || this.gun,
                    n = a.default.getLocalPosition(i.getGlobalPosition(), s.default.scale),
                    o = this.setShotAngle(t, n);
                i.shot();
                var r = this.getBulletPos(n, o, 1),
                    l = [];
                if (i.double) {
                    var c = this.gun_double_offset_w_list[i.kind - 1];
                    l = [new h.Point(r.x - c * Math.cos(o), r.y - c * Math.sin(o)), new h.Point(r.x + c * Math.cos(o), r.y + c * Math.sin(o))]
                } else l = [r];
                e(l, o, i.kind, i.id)
            }, e.prototype.shotFromAngle = function(t, e) {
                var i = 1,
                    n = this.gunSpe || this.gun,
                    o = a.default.getLocalPosition(n.getGlobalPosition(), s.default.scale);
                o = a.default.getPointForView(o, r.default.isView), 0 == a.default.getChairLine(this.no) || r.default.isView ? n.rotation = t : (n.rotation = t + Math.PI, i = -1), 0 == a.default.getChairLine(this.no) && r.default.isView && (n.rotation = t + Math.PI, i = -1), n.shot();
                var l = this.getBulletPos(o, t, i),
                    c = [];
                if (n.double) {
                    var u = this.gun_double_offset_w_list[n.kind - 1];
                    c = [new h.Point(l.x - u * Math.cos(t), l.y - u * Math.sin(t)), new h.Point(l.x + u * Math.cos(t), l.y + u * Math.sin(t))]
                } else c = [l];
                e(c)
            }, e.prototype.setShotAngle = function(t, e) {
                this.isMe && (t = a.default.getPointForView(t, r.default.isView));
                var i = this.gunSpe || this.gun;
                e = e || a.default.getLocalPosition(i.getGlobalPosition(), s.default.scale);
                var n = t.x - e.x,
                    o = e.y - t.y;
                o = o < 0 ? 0 : o;
                var h = Math.atan(n / o);
                return i.rotation = h, h
            }, e.prototype.setLigtnAngle = function() {
                return (this.gunSpe || this.gun).rotation = 0, 0
            }, e.prototype.getGunGlobalPos = function() {
                var t = this.gunSpe || this.gun;
                return a.default.getLocalPosition(t.getGlobalPosition(), s.default.scale)
            }, e.prototype.addSpecailGun = function(t) {
                var e = this,
                    i = this,
                    n = new l.TimelineLite;
                return n.call(function() {
                    e.gun.hide();
                    var i = e.gun.getGlobalPosition();
                    i = new h.Point(i.x / s.default.scale, i.y / s.default.scale), i = 1 == a.default.getChairLine(e.no) ? new h.Point(i.x - .5 * s.default.width, i.y - .5 * s.default.height) : new h.Point(.5 * s.default.width - i.x, .5 * s.default.height - i.y), t.position = i, e.addChildAt(t, e.getChildIndex(e.gun))
                }, null, null, "+=0.5"), n.call(function() {
                    var n = [1, 3].indexOf(i.no) > -1 ? 1 : -1;
                    t.scale.x = n, t.state.setAnimation(0, "gun_spe_enter", !1), t.state.addListener({
                        complete: function(i) {
                            "gun_spe_enter" == i.animation.name && (t.state.clearListeners(), t.x = e.gun.x, t.y = e.gun.y, t.scale.set(1))
                        }
                    }), u.default.playFirestormGunMove()
                }, null, null, "+=0.5"), n.call(function() {
                    e.gunSpe = t
                }), n.call(function() {
                    t.x = e.gun.x, t.y = e.gun.y, t.scale.set(1)
                }, null, null, "+=1"), n
            }, e.prototype.addSpecailGunImmediately = function(t) {
                this.gun.hide(), t.position = this.gun.position, t.scale.set(1), this.addChildAt(t, this.getChildIndex(this.gun)), this.gunSpe = t
            }, e.prototype.removeSpecialGun = function() {
                var t = this,
                    e = new l.TimelineLite;
                return e.call(function() {
                    t.gunSpe.hide(), t.gunSpe.setMask()
                }).call(function() {
                    t.gun.rotation = t.gunSpe.rotation, t.gun.show()
                }).call(function() {
                    t.removeChild(t.gunSpe), t.gunSpe.cancelMask(), t.gunSpe.destroy(), t.gunSpe = null
                }, null, null, "+=0.3"), e
            }, e.prototype.getPosition = function(t) {
                var e = this.txtBet.getGlobalPosition();
                if (t) return e;
                var i = r.default.gameScene.getGlobalPosition(),
                    n = r.default.gameScene.scale.x;
                return new h.Point((e.x - i.x) / n, (e.y - i.y) / n)
            }, Object.defineProperty(e.prototype, "special", {
                get: function() {
                    return this.isSpecial
                },
                set: function(t) {
                    this.isSpecial = t, this.isMe && this.btns.forEach(function(e) {
                        e.interactive = !t
                    })
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.turnDouble = function(t) {
                this.gun.turnDouble(t)
            }, e
        }(PIXI.Container);
    e.default = d
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(1),
        r = i(49),
        h = i(2),
        l = i(3),
        c = i(32),
        u = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.options = e, i.onCallback = e.onCallback, i.leftChair = [1, 3].indexOf(a.default.deskInfo.chairId) > -1, i.renderTexture = PIXI.RenderTexture.create(s.default.width, s.default.height), i.interactive = !0, i.initBack(0, .3), i.setGunHalo(), i.renderDisplay(), i.initLabel(), a.default.app.ticker.add(i.updateRenderTexture, i), i
            }
            return o(e, t), e.prototype.initLabel = function() {
                var t = this,
                    e = new PIXI.Container;
                e.alpha = 0, this.addChild(e), l.TweenMax.to(e, 1, {
                    alpha: 1,
                    delay: 1
                });
                var i = [{
                    x: 163,
                    y: 399
                }, {
                    x: 1302,
                    y: 415
                }, {
                    x: this.leftChair ? 270 : 1170,
                    y: 680
                }, {
                    x: this.leftChair ? 422 : 1018,
                    y: 618
                }];
                h.default.createSprites(["guide_line_01.png", "guide_line_03.png", "guide_line_02.png", "guide_line_02.png"], i, e).forEach(function(t) {
                    return t.anchor.set(.5)
                });
                var n = [{
                        x: 215,
                        y: 399
                    }, {
                        x: 1237,
                        y: 415
                    }, {
                        x: this.leftChair ? 270 : 1170,
                        y: 631
                    }, {
                        x: this.leftChair ? 424 : 1018,
                        y: 568
                    }],
                    o = [{
                        x: 0,
                        y: .5
                    }, {
                        x: 1,
                        y: .5
                    }, {
                        x: .5,
                        y: 1
                    }, {
                        x: .5,
                        y: 1
                    }];
                ["TXT_GUIDE_01", "TXT_GUIDE_02", "TXT_GUIDE_03", "TXT_GUIDE_04"].forEach(function(i, a) {
                    var s = t.createText(i);
                    s.position.set(n[a].x, n[a].y), s.anchor.set(o[a].x, o[a].y), e.addChild(s)
                })
            }, e.prototype.createText = function(t, e) {
                void 0 === e && (e = 32);
                var i = new PIXI.TextStyle({
                        fontFamily: "zh_cn" == a.default.locale.lan.toLowerCase() ? "fztjlsjw" : "roboto-bold",
                        fontSize: e,
                        fill: "#FFFFFF",
                        align: "center"
                    }),
                    n = a.default.locale.getString(t);
                [c.Language.Indonesian, c.Language.Vietnamese, c.Language.Russian, c.Language.Turkish].indexOf(a.default.locale.lan) > -1 && (n = n.toLocaleUpperCase());
                var o = new PIXI.Text(n, i);
                return o.anchor.set(.5), o
            }, e.prototype.setGunHalo = function() {
                var t = new PIXI.spine.Spine(a.default.resources.gun_halo.spineData);
                t.skeleton.setToSetupPose(), t.state.setAnimation(0, "loop", !0), t.position.set(this.leftChair ? 426 : s.default.width - 426, 785), this.addChild(t)
            }, e.prototype.renderDisplay = function() {
                var t = this,
                    e = new PIXI.Sprite(this.renderTexture);
                this.addChild(e), (new l.TimelineLite).call(function() {
                    t.once("pointerdown", t.clear, t), t.addSpaceEvent()
                }, null, null, "+=1.5").call(function() {
                    a.default.app.ticker.remove(t.updateRenderTexture, t)
                }, null, null, "+=5")
            }, e.prototype.updateRenderTexture = function() {
                var t = a.default.app.renderer;
                t.render(this.options.batteryContainer.mainBattery, this.renderTexture, !0), t.render(this.options.menu, this.renderTexture, !1), 2 != t.type && t.render(this.options.toolLayer, this.renderTexture, !1)
            }, e.prototype.addSpaceEvent = function() {
                var t = this;
                this.keydownFn = function(e) {
                    return 32 == e.keyCode && t.clear()
                }, window.addEventListener("keydown", this.keydownFn)
            }, e.prototype.clear = function() {
                var t = this;
                l.TweenMax.to(this, .5, {
                    alpha: 0,
                    onComplete: function() {
                        t.onCallback(), a.default.app.ticker.remove(t.updateRenderTexture, t), t.parent.removeChild(t), t.destroy({
                            children: !0
                        })
                    }
                }), this.off("pointerdown", this.clear, this), window.removeEventListener("keydown", this.keydownFn)
            }, e
        }(r.default);
    e.default = u
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(0),
        s = i(1),
        r = i(2),
        h = i(7),
        l = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.spriteOffsetX = 5, e.txtHallLevelMaxWidth = 140, e.isMoving = !1, e.init(), e.setNetSignal(), e
            }
            return o(e, t), e.prototype.init = function() {
                var t = s.default.width / 2,
                    e = this.getHallLevel(),
                    i = this.getHallDomination();
                this.initNotice();
                var n = PIXI.Sprite.fromFrame("hall_info.png");
                n.anchor.set(.5, 0), n.position.set(t, 42), this.addChild(n);
                var o = new PIXI.Container;
                n.addChild(o);
                var a = new PIXI.Container;
                n.addChild(a);
                var h = PIXI.Sprite.fromFrame("network_bg.png");
                h.anchor.set(.5), h.position.set(15, 20);
                var l = PIXI.Sprite.fromFrame("network_4.png");
                l.anchor.set(.5), h.addChild(l), this.hallNetSignal = l;
                var c = PIXI.Sprite.fromFrame(e);
                c.anchor.set(0, .5), c.position.set(l.x + l.width + this.spriteOffsetX, 20), c.width > this.txtHallLevelMaxWidth && c.scale.set(this.txtHallLevelMaxWidth / c.width);
                var u = this.createTxt(i, 25, c.x + c.width + this.spriteOffsetX, 20, "#ffffff", !1, "roboto-medium"),
                    d = this.createTxt("1:" + r.default.getRatioMultiply(), 20, 0, 45, "#97FFFD", !0);
                this.txtRatio = d, o.addChild(h, c, u), o.x = -o.width / 2, a.addChild(d), a.x = -a.width / 2
            }, e.prototype.testMsg = function(t) {
                this.txtRatio.text = t
            }, e.prototype.initNotice = function() {
                var t = new h.Container;
                t.position.set(.5 * s.default.width, 23);
                var e = h.Sprite.fromFrame("game_messege_bar.png");
                e.anchor.set(.5);
                var i = h.Sprite.fromFrame("game_messege_speaker.png");
                i.position.set(-190, 0), i.anchor.set(.5);
                var n = h.Sprite.fromFrame("game_messege_mask.png");
                n.anchor.set(.5), n.x = 10;
                var o = new h.Container;
                o.y -= 2, o.mask = n, t.addChild(e, o, i, n), this.moveContainer = o, this.addChild(t)
            }, e.prototype.createTxt = function(t, e, i, n, o, a, s) {
                void 0 === o && (o = "#FFFFFF"), void 0 === a && (a = !1);
                var r = new PIXI.Text(t, {
                    fontFamily: s || "roboto",
                    fontSize: e,
                    fill: o,
                    dropShadow: a,
                    dropShadowBlur: 5,
                    dropShadowDistance: 0
                });
                return r.position.set(i, n), r.anchor.set(0, .5), r
            }, e.prototype.getHallLevel = function() {
                return "hall_level_text_" + a.default.roomInfo.id.substr(1) + ".png"
            }, e.prototype.getHallDomination = function() {
                var t = a.default.roomInfo.domination,
                    e = r.default.getRatioMultiply();
                return Math.min.apply(Math, t[0]) * e + " - " + Math.max.apply(Math, t[t.length - 1]) * e
            }, e.prototype.setNetSignal = function() {
                var t = this,
                    e = 0;
                a.default.scene.ticker.add(function() {
                    if (++e % 240 == 0) {
                        var i = a.default.pingValue < 100 ? 4 : a.default.pingValue < 200 ? 3 : a.default.pingValue < 300 ? 2 : 1;
                        t.hallNetSignal.texture = PIXI.Texture.fromFrame("network_" + i + ".png")
                    }
                })
            }, e.prototype.pushMessage = function(t) {
                var e = t.roomId.substr(1, 1),
                    i = [r.default.formatAmount(t.win), a.default.locale.getString("TXT_ROOM_" + e)],
                    n = i[0],
                    o = i[1];
                "en_us" != a.default.locale.lan.toLowerCase() && (n = (s = [o, n])[0], o = s[1]);
                var s, h = r.default.formatStr(a.default.locale.getString("TXT_NOTICE_MESSAGE"), t.acctName, n, o);
                this.play(h)
            }, e.prototype.addMoveText = function(t) {
                var e = this.moveContainer.width,
                    i = this.createTxt(t, 25, 0 == e ? 200 : e + 400, 0, "#97fffd");
                this.moveContainer.addChild(i)
            }, e.prototype.play = function(t) {
                this.addMoveText(t), this.isMoving || (this.isMoving = !0, a.default.app.ticker.add(this.move, this))
            }, e.prototype.move = function() {
                this.moveContainer.x -= 2, this.moveContainer.x < -this.moveContainer.width - 400 && (this.isMoving = !1, a.default.app.ticker.remove(this.move, this), this.moveContainer.removeChildren(), this.moveContainer.x = 0)
            }, e
        }(PIXI.Container);
    e.default = l
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(1),
        a = i(19),
        s = i(0),
        r = new(function() {
            function t() {
                this.reset()
            }
            return t.prototype.sendData = function(t, e) {
                if (o.default.collectBehavior) {
                    var i = new Map,
                        r = "";
                    switch (e) {
                        case n.GAME_LOCK_FIRE:
                            i.set(e, t), this.storeData.lockValue = t;
                            break;
                        case n.GAME_ATUO_FIRE:
                            if (this.storeData.autoValue == t) return;
                            i.set(e, t), this.storeData.autoValue = 1
                    }
                    i.set("gameCode", o.default.gameCode), i.set("sid", s.default.service.session.sessionId), i.set("token", s.default.service.session.token), i.forEach(function(t, e) {
                        return r += "&" + e + "=" + t
                    }), a.ajax({
                        url: o.default.historyUrl + "/collectBehavior.action?" + r.slice(1),
                        type: "get",
                        dataType: "jsonp"
                    })
                }
            }, t.prototype.setData = function(t, e) {
                e == n.GAME_ATUO_FIRE && (this.storeData.autoValue = t), e == n.GAME_LOCK_FIRE && (this.storeData.lockValue = t)
            }, t.prototype.reset = function() {
                this.storeData = {
                    lockValue: 0,
                    autoValue: 0
                }
            }, t
        }());
    e.behaviorCollect = r,
        function(t) {
            t.GAME_LOCK_FIRE = "game_lock_fire", t.GAME_ATUO_FIRE = "game_auto_fire"
        }(n || (n = {})), e.CollectType = n
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(21),
        r = i(1),
        h = i(3),
        l = i(0),
        c = i(9),
        u = i(14),
        d = i(2),
        f = i(32),
        p = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.showPos = {
                    x: 67,
                    y: 321
                }, i.isSelected = !1, i.onSelectCallback = e, i.initBack(), i.init(), i.visible = !1, i
            }
            return o(e, t), e.prototype.initBack = function() {
                this.back = s.Graph.drawRect([{
                    x: 0,
                    y: 0,
                    width: r.default.width,
                    height: r.default.height
                }], this, 0, 0), this.back.interactive = !0
            }, e.prototype.init = function() {
                var t = this;
                this.container = new a.Container, this.addChild(this.container), this.container.position.set(this.showPos.x, this.showPos.y), this.container.pivot.set(this.showPos.x, this.showPos.y), this.bg = PIXI.Sprite.fromFrame("auto_select_panel_bg"), this.bg.anchor.set(.5), this.bg.position.set(r.default.width / 2, r.default.height / 2), this.container.addChild(this.bg);
                var e = this.createText("TXT_AUTO_SELECT_TITLE");
                e.position.set(0, -322), this.bg.addChild(e), this.btnList = [], ["auto_btn_close.png", "auto_btn_select_all.png auto_btn_select_all_text.png", "auto_btn_start.png auto_btn_start_text.png"].forEach(function(e) {
                    var i = e.split(" "),
                        n = i[0],
                        o = i[1],
                        a = n.substring(9, n.length - 4),
                        s = t.createBtn(n, a, o);
                    t.btnList.push(s), t.bg.addChild(s)
                });
                [{
                    x: 0,
                    y: 300
                }, {
                    x: -290,
                    y: 302
                }, {
                    x: 290,
                    y: 302
                }].forEach(function(e, i) {
                    return t.btnList[i].position.set(e.x, e.y)
                }), this.initBoxes()
            }, e.prototype.initBoxes = function() {
                var t = this;
                this.boxes = [];
                for (var e = l.default.deskInfo.fishKindInfos, i = 0; i < 4; i++)
                    for (var n = 3 == i, o = 0; o < (n ? 8 : 7); o++) {
                        var a = e[7 * i + o].kind,
                            s = n ? 20 : 38;
                        a == u.FishKind.Dragon ? a = u.FishKind.DragonWheel : a >= u.FishKind.Dragon && (a -= 1);
                        var r = new y(a, function() {
                            return t.onSelectBox()
                        });
                        r.position.set((144 + s) * (o - (n ? 3.5 : 3)), 135 * i - 214), this.boxes.push(r), this.bg.addChild(r)
                    }
            }, e.prototype.createText = function(t, e) {
                void 0 === e && (e = 31);
                var i = [f.Language.Vietnamese, f.Language.Turkish].indexOf(l.default.locale.lan) > -1 ? "Arial" : "roboto-bold",
                    n = new PIXI.TextStyle({
                        fontFamily: i,
                        fontSize: e,
                        fill: "#000000",
                        align: "center"
                    }),
                    o = new PIXI.Text(d.default.upperStrByLan(l.default.locale.getString(t)), n);
                return o.anchor.set(.5), o
            }, e.prototype.createBtn = function(t, e, i) {
                var n = this,
                    o = PIXI.Sprite.fromFrame(t);
                if (o.anchor.set(.5), o.buttonMode = !0, o.interactive = !0, i) {
                    var a = PIXI.Sprite.fromFrame(i);
                    a.anchor.set(.5), o.addChild(a)
                }
                return o.on("pointerdown", function() {
                    return n.onClick(e)
                }), o
            }, e.prototype.onSelectBox = function() {
                var t = this;
                this.selectList = [], this.boxes.forEach(function(e) {
                    e.selected && t.selectList.push(e.kind)
                }), this.selectList.sort(function(t, e) {
                    return g.indexOf(e) - g.indexOf(t)
                })
            }, e.prototype.selectAll = function() {
                var t = this;
                this.selectList = [], this.boxes.forEach(function(e) {
                    e.selected = !0, t.selectList.push(e.kind)
                }), this.selectList.sort(function(t, e) {
                    return g.indexOf(e) - g.indexOf(t)
                }), this.isSelected = !0
            }, e.prototype.onClick = function(t) {
                "close" == t ? this.hide() : "select_all" == t ? this.isSelected ? this.clear() : this.selectAll() : "start" == t && (this.onSelectCallback && this.onSelectCallback(this.selectList), this.hide()), c.default.playBtnClick()
            }, e.prototype.clear = function() {
                this.boxes.forEach(function(t) {
                    return t.selected = !1
                }), this.selectList = [], this.isSelected = !1
            }, e.prototype.show = function() {
                var t = this;
                this.showTween && (this.showTween.kill(), this.showTween = null), this.showTween = new h.TimelineLite, this.showTween.call(function() {
                    t.container.scale.set(0), t.visible = !0, t.container.interactiveChildren = !1
                }), this.showTween.to(this.container.scale, .2, {
                    x: 1.1,
                    y: 1.1,
                    ease: h.Power1.easeIn
                }), this.showTween.to(this.container.scale, .1, {
                    x: 1,
                    y: 1,
                    ease: h.Power1.easeOut
                }), this.showTween.call(function() {
                    t.container.interactiveChildren = !0, t.showTween.kill(), t.showTween = null
                })
            }, e.prototype.hide = function() {
                var t = this;
                this.showTween && (this.showTween.kill(), this.showTween = null), this.showTween = new h.TimelineLite, this.showTween.to(this.container.scale, .2, {
                    x: 0,
                    y: 0,
                    ease: h.Power1.easeOut
                }), this.showTween.call(function() {
                    t.clear(), t.visible = !1
                })
            }, e
        }(a.Container);
    e.default = p;
    var y = function(t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._selected = !1, n._kind = e, n._onSelect = i, n.init(), n
            }
            return o(e, t), e.prototype.init = function() {
                var t = this;
                this._bg = PIXI.Sprite.fromFrame("auto_box_bg.png"), this._bg.anchor.set(.5), this._bg.buttonMode = !0, this._bg.interactive = !0, this.addChild(this._bg), this._bg.on("pointerdown", function() {
                    t._selected = !t.selected, t.updateTexture(), t._onSelect && t._onSelect(), c.default.playBtnClick()
                }), this._sp = PIXI.Sprite.fromFrame("auto_fish_" + this._kind + ".png"), this._sp.anchor.set(.5), this.addChild(this._sp), this._tick = PIXI.Sprite.fromFrame("auto_select_tick.png"), this._tick.anchor.set(.5), this._tick.position.set(50, 30), this.addChild(this._tick), this.updateTexture()
            }, e.prototype.updateTexture = function() {
                this._bg.texture = PIXI.Texture.fromFrame(this._selected ? "auto_box_selected.png" : "auto_box_bg.png"), this._tick.visible = this._selected
            }, Object.defineProperty(e.prototype, "selected", {
                get: function() {
                    return this._selected
                },
                set: function(t) {
                    this._selected = t, this.updateTexture()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kind", {
                get: function() {
                    return this._kind
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(a.Container),
        g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 102, 100, 101, 21, 106, 103, 104, 105]
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(7),
        s = i(3),
        r = i(2),
        h = i(1),
        l = i(0),
        c = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.effectContainer = [], i.countTextContainer = [], i.hitNums = [], i.delay = 2e3, i.delayTweens = [], i.tipsText = [], i.batteryContainer = e.batteryContainer, i.lightnTipContainer = e.lightnTipContainer, i.reset(), i
            }
            return o(e, t), e.prototype.reset = function() {
                this.effectContainer = [], this.countTextContainer = [], this.delayTweens = []
            }, e.prototype.initHitText = function(t) {
                var e = new a.Container,
                    i = this.createTxt("lightn_number", 60);
                i.anchor = new a.Point(0, .5);
                var n = a.Sprite.from("lightn_hits.png");
                n.anchor.set(0, .5), n.y = 5, e.addChild(i, n), this.effectContainer[this.getNo(t)] = e, this.addChild(e), this.hitNums[this.getNo(t)] = 0;
                var o = this.createSwipeTips(!1);
                return o.anchor.set(.5), o.renderable = !1, this.addChild(o), this.countTextContainer[this.getNo(t)] = o, [i, n]
            }, e.prototype.resetWinTextOffsetX = function(t, e) {
                var i = t.width + e.width + 6;
                t.x = 0, e.x = t.width + 6, t.x -= i / 2, e.x -= i / 2
            }, e.prototype.showTips = function(t) {
                if (!this.tipsText[this.getNo(t)]) {
                    var e = this.createSwipeTips(),
                        i = r.default.getLocalPosition(this.batteryContainer.getBatteryPosition(t), h.default.scale),
                        n = i.y < .5 * h.default.height;
                    i.y = n ? i.y + 130 : i.y - 130, e.position.set(i.x, i.y), e.anchor.set(.5, n ? 0 : 1), this.lightnTipContainer.addChild(e), this.tipsText[this.getNo(t)] = e
                }
            }, e.prototype.hideTips = function(t) {
                this.tipsText[this.getNo(t)] && (this.lightnTipContainer.removeChild(this.tipsText[this.getNo(t)]), this.tipsText[this.getNo(t)] = null)
            }, e.prototype.resetEffectPos = function(t) {
                var e = this.effectContainer[this.getNo(t)],
                    i = this.countTextContainer[this.getNo(t)];
                if (e && i) {
                    var n = r.default.getLocalPosition(this.batteryContainer.getBatteryPosition(t), h.default.scale),
                        o = n.y < .5 * h.default.height,
                        s = new a.Point(n.x, o ? n.y + 170 : n.y - 170);
                    e.position.set(s.x, s.y), s = new PIXI.Point(n.x, o ? n.y + 230 : n.y - 230), i.position.set(s.x, s.y), t > -1 && (i.renderable = !0)
                }
            }, e.prototype.show = function(t) {
                var e, i, n = this;
                if (this.effectContainer[this.getNo(t)]) e = this.effectContainer[this.getNo(t)].children[0], i = this.effectContainer[this.getNo(t)].children[1];
                else {
                    var o = this.initHitText(t);
                    e = o[0], i = o[1]
                }
                i.texture = PIXI.Texture.fromFrame("lightn_hit" + (0 == this.hitNums[this.getNo(t)] ? "" : "s") + ".png"), this.resetEffectPos(t);
                var a = this.effectContainer[this.getNo(t)];
                this.hitNums[this.getNo(t)]++, e.text = this.hitNums[this.getNo(t)] + "", this.resetWinTextOffsetX(e, i);
                var r = this.tween;
                if (!r) {
                    a.scale.set(1), (r = new s.TimelineLite({})).to(a.scale, .4, {
                        x: 1.3,
                        y: 1.3
                    }), r.to(a.scale, .2, {
                        x: 1,
                        y: 1
                    }), r.call(function() {
                        r.kill(), r = null
                    }), this.delayTweens[this.getNo(t)] && (clearTimeout(this.delayTweens[this.getNo(t)]), this.delayTweens[this.getNo(t)] = null);
                    var h = t;
                    t < 0 && this.showMyTip(!1), this.delayTweens[this.getNo(t)] = setTimeout(function() {
                        n.hide(h), t < 0 && n.showMyTip(!0)
                    }, this.delay)
                }
            }, e.prototype.hide = function(t) {
                this.removeChild(this.effectContainer[this.getNo(t)]), this.effectContainer[this.getNo(t)].destroy(), this.effectContainer[this.getNo(t)] = null, this.removeChild(this.countTextContainer[this.getNo(t)]), this.countTextContainer[this.getNo(t)].destroy(), this.countTextContainer[this.getNo(t)] = null, this.hitNums[this.getNo(t)] = 0
            }, e.prototype.getNo = function(t) {
                return (t = t > -1 ? t : l.default.deskInfo.chairId) - 1
            }, e.prototype.createTxt = function(t, e) {
                var i = new PIXI.extras.BitmapText("", {
                    font: {
                        name: t,
                        size: e
                    }
                });
                return i.anchor = .5, i
            }, e.prototype.createSwipeTips = function(t) {
                return void 0 === t && (t = !0), PIXI.Sprite.fromFrame("lightn_tip" + (t ? "" : "_other") + ".png")
            }, e.prototype.showMyTip = function(t) {
                this.tipsText[this.getNo(-1)] && (this.tipsText[this.getNo(-1)].renderable = t)
            }, e
        }(a.Container);
    e.default = c
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(16),
        s = i(20),
        r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(a.MyRequest);
    e.RequestStart = r;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(s.MyResponse);
    e.ResponseStart = h
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function() {
            function t() {
                this.currentDomTypeIndex = 0, this.currentDomIndex = 0, this.initDomination()
            }
            return t.prototype.initDomination = function() {
                var t = this;
                this.domination = n.default.roomInfo.domination, this.currentDomination = n.default.roomInfo.defaultDomination, this.domination.forEach(function(e, i) {
                    e.forEach(function(e, n) {
                        if (e == t.currentDomination) return t.currentDomTypeIndex = i, t.currentDomIndex = n, !1
                    })
                })
            }, t.prototype.getNextDomination = function() {
                return this.currentDomIndex++, this.currentDomIndex == this.domination[this.currentDomTypeIndex].length && (this.currentDomIndex = 0, this.currentDomTypeIndex++, this.currentDomTypeIndex = this.currentDomTypeIndex == this.domination.length ? 0 : this.currentDomTypeIndex), this.currentDomination = this.domination[this.currentDomTypeIndex][this.currentDomIndex], this.currentDomination
            }, t.prototype.getPreDomination = function() {
                return this.currentDomIndex--, this.currentDomIndex < 0 && (this.currentDomTypeIndex--, this.currentDomTypeIndex = this.currentDomTypeIndex < 0 ? this.domination.length - 1 : this.currentDomTypeIndex, this.currentDomIndex = this.domination[this.currentDomTypeIndex].length - 1), this.currentDomination = this.domination[this.currentDomTypeIndex][this.currentDomIndex], this.currentDomination
            }, t.prototype.getDomIndex = function(t) {
                for (var e = 0; e < this.domination.length; e++)
                    for (var i = this.domination[e], n = 0; n < i.length; n++) {
                        if (i[n] == t) return e
                    }
            }, t
        }();
    e.default = o
}, function(t, e, i) {
    "use strict";
    var n = this && this.__assign || Object.assign || function(t) {
        for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(19),
        a = i(1),
        s = i(3),
        r = i(0),
        h = i(9),
        l = i(2),
        c = function() {
            function t() {
                this.isFirst = !0, this.selectValue = -6, this.iconCount = 30, this.currentPage = "firstPageDom", this.searchBtnStatus = !1, this.minFishTotal = 22, this.specialNumberStart = 100
            }
            return t.prototype.initDom = function() {
                var t = '\n\t <section class="betHistoryOuter">\n\t\t<section class="betHistory">\n\t\t\t\t<section class="topMenu">\n\t\t\t\t\t\t<div class="topMenuLeft">\n\t\t\t\t\t\t\t\t<span class="historyTitle">' + r.default.locale.getString("TXT_HISTORY_BETHISTORY") + '</span>\n\t\t\t\t\t\t\t\t<section class="selectBox">\n\t\t\t\t\t\t\t\t\t\t<div class="select">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="currentSelect">' + r.default.locale.getString("TXT_HISTORY_LAST7DAYS") + '</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="historyBtn down_arrowicon"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="selectContent">\n\t\t\t\t\t\t\t\t\t\t\t\t<span data-value="0">' + r.default.locale.getString("TXT_HISTORY_TODAY") + '</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span data-value="-1">' + r.default.locale.getString("TXT_HISTORY_YESTERDAY") + '</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span data-value="-6" class="on">' + r.default.locale.getString("TXT_HISTORY_LAST7DAYS") + '</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t<span class="historySearch">' + r.default.locale.getString("TXT_HISTORY_SEARCH") + '</span>\n\t\t\t\t\t\t</div>\n                      \n\t\t\t\t\t\t<div class="topBtnRight">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<span class="historyBtn backicon"></span>\n\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t<span class="historyBtn closeicon"></span>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</section>\n\t\t\t\t<section class="bottomContent">\n\t\t\t\t</section>\n        </section>\n        \n    </section>    \n\t ';
                this.me = o(t), o("body").append(this.me)
            }, t.prototype.getUI = function() {
                this.betHistoryOuter = o(".betHistoryOuter"), this.betHistory = o(".betHistory"), this.selectContent = o(".selectContent"), this.downArrowBtn = o(".down_arrowicon"), this.backBtn = o(".backicon"), this.closeBtn = o(".closeicon"), this.currentSelect = o(".currentSelect"), this.bottomContent = o(".bottomContent"), this.searchBtn = o(".historySearch"), this.selectBox = o(".selectBox"), this.firstPageListBox = o(".firstPageDom .tbody"), this.firstPageTotalBox = o(".firstPageDom .tfoot"), this.betHistoryListBox = o(".summaryDom .tbody"), this.betHistoryTotalBox = o(".summaryDom .tfoot"), this.betHistoryDetailBox = o(".detailDom .tbody"), this.betHistoryDetailTitleBox = o(".detailDom .thead"), this.me.hide(), this.selectContent.hide(), this.backBtn.hide(), this.summaryDom.hide(), this.detailDom.hide()
            }, t.prototype.initFirstPageDom = function() {
                var t = '\n\t\t<section class="firstPageDom">\n\t\t\t\t<section class="thead">\n\t\t\t\t\t\t<div class="tr">\n\t\t\t\t\t\t\t\t<span>' + r.default.locale.getString("TXT_HISTORY_DATE") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_BETS") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_TOTALBET") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_WINORLOSE") + '</span>\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t\n\t\t\t\t<section class="tbody">\n\t\t\t\n\t\t\t\t</section>\n\t\t\n\t\t\t \n\t\t\t\t<section class="tfoot">\n\t\t\t\t<div class="tr">\n\t\t\t\t<span>' + r.default.locale.getString("TXT_HISTORY_TOTAL") + "</span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t\t</section>\n\t\t</section>\n            ";
                this.firstPageDom = o(t), o(".bottomContent").append(this.firstPageDom)
            }, t.prototype.initSummaryDom = function() {
                var t = '\n\t\t<section class="summaryDom">\n\t\t\t\t<section class="thead">\n\t\t\t\t\t\t<div class="tr">\n\t\t\t\t\t\t\t\t<span>' + r.default.locale.getString("TXT_HISTORY_DATETIME") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_TICKETNO") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_NUMBEROFSHOTS") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_TOTALBET") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_WINORLOSE") + "</span>\n\t\t\t\t\t\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_OPTION") + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t\n\t\t\t\t<section class="tbody">\n\t\t\t\n\t\t\t\t</section>\n\t\t\n\t\t\t \n\t\t\t\t<section class="tfoot">\n\t\t\t\t<div class="tr">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t\t</section>\n\t\t</section>\n\t\t\t';
                this.summaryDom = o(t), o(".bottomContent").append(this.summaryDom)
            }, t.prototype.initDetailDom = function() {
                this.detailDom = o('\n<section class="detailDom">\n\t\t<section class="thead">\n\t\t</section>\n\t\t<section class="tbody">\n\t\t</section>\n</section>\n\t\t\t'), o(".bottomContent").append(this.detailDom)
            }, t.prototype.betHistoryAction = function(t, e) {
                o.ajax({
                    url: a.default.historyUrl + "/fishTotalBetHistory.action",
                    data: n({}, this.defaultReqData, t),
                    type: "get",
                    dataType: "jsonp",
                    success: function(t) {
                        e(t)
                    }
                })
            }, t.prototype.fishBetHistory = function(t, e) {
                o.ajax({
                    url: a.default.historyUrl + "/fishBetHistory.action",
                    data: n({}, this.defaultReqData, t),
                    type: "get",
                    dataType: "jsonp",
                    success: function(t) {
                        e(t)
                    }
                })
            }, t.prototype.bindEvent = function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.onResizeWindow()
                }), this.betHistoryOuter.on("click", function() {
                    t.selectContent.data("show") && t.toggleSelectBox()
                }), this.closeBtn.on("click", function() {
                    h.default.playBtnClick(), t.hide()
                }), this.selectBox.on("click", function() {
                    h.default.playBtnClick(), t.toggleSelectBox()
                }), this.selectContent.on("click", "span", function(e) {
                    h.default.playBtnClick(), t.toggleSelectBox();
                    var i = o(e.target);
                    t.updateSelectDom(i)
                }), this.backBtn.on("click", function(e) {
                    return h.default.playBtnClick(), "detailDom" == t.currentPage ? t.doPageAni([t.summaryDom], [t.detailDom]) : "summaryDom" == t.currentPage ? t.doPageAni([t.firstPageDom, t.selectBox, t.searchBtn], [t.summaryDom, t.backBtn]) : void 0
                }), this.summaryDom.on("click", ".toDetail", function(e) {
                    h.default.playBtnClick(), t.doPageAni([t.detailDom], [t.summaryDom]), t.initBetHistoryDetail(o(e.target).attr("data-ticketId"))
                }), this.firstPageDom.on("click", ".toSummary", function(e) {
                    h.default.playBtnClick(), t.doPageAni([t.summaryDom, t.backBtn], [t.firstPageDom, t.selectBox, t.searchBtn]), setTimeout(function() {
                        t.resetbetHistoryList(o(e.target).attr("data-date"))
                    }, 150), t.selectContent.data("show") && t.toggleSelectBox()
                }), this.searchBtn.on("click", function(e) {
                    t.searchBtnStatus || (t.searchBtnStatus = !0, h.default.playBtnClick(), t.resetFirstPageList(t.selectValue, function() {
                        t.searchBtnStatus = !1
                    }), t.selectContent.data("show") && t.toggleSelectBox())
                }), this.betHistoryListBox.on("scroll", function(e) {
                    var i = o(e.target).height(),
                        n = o(e.target).get(0).scrollHeight;
                    o(e.target).scrollTop() / (n - i) >= 1 && t.loadMoreBetHistory()
                }), this.bindScroll()
            }, t.prototype.updateSelectDom = function(t) {
                this.selectValue = parseInt(t.attr("data-value")), t.hasClass("on") || (this.currentSelect.html(t.html()), this.selectContent.find("span").removeClass("on"), t.addClass("on"))
            }, t.prototype.bindScroll = function() {
                [this.firstPageListBox, this.betHistoryDetailBox, this.betHistoryListBox].forEach(function(t) {
                    var e, i, n, a = !0;
                    t.on("mousedown", function(o) {
                        a = !0, n = o.clientY, i = o.clientX, e = t.scrollTop()
                    }).on("mousemove", function(o) {
                        if (a) {
                            var s = o.clientY - n,
                                r = o.clientX - i;
                            n = o.clientY, i = o.clientX, e -= s, r, t.scrollTop(e)
                        }
                    }), o(document).on("mouseup", function(t) {
                        a = !1
                    })
                })
            }, t.prototype.doPageAni = function(t, e) {
                this.currentPage = t[0].attr("class"), "detailDom" != this.currentPage && this.betHistory.removeClass("ow");
                var i = this;
                s.TweenMax.to({
                    scale: 0
                }, .3, n({}, {
                    scale: 1
                }, {
                    onStart: function() {
                        t.forEach(function(t) {
                            t.show()
                        }), t[0].css({
                            zIndex: 1
                        }), "detailDom" == i.currentPage && i.betHistoryDetailBox.scrollTop(0)
                    },
                    onUpdate: function() {
                        var i = this;
                        t.forEach(function(t) {
                            t.css({
                                "-webkit-transform": "scale(" + i.target.scale + ") ",
                                "-ms-transform": "scale(" + i.target.scale + ") ",
                                transform: "scale(" + i.target.scale + ") "
                            })
                        }), e.forEach(function(t) {
                            t.css({
                                "-webkit-transform": "scale(" + (1 - i.target.scale) + ") ",
                                "-ms-transform": "scale(" + (1 - i.target.scale) + ") ",
                                transform: "scale(" + (1 - i.target.scale) + ") "
                            })
                        })
                    },
                    onComplete: function() {
                        e.forEach(function(t) {
                            t.hide()
                        }), t[0].css({
                            zIndex: 0
                        })
                    }
                }))
            }, t.prototype.toggleSelectBox = function() {
                var t = this;
                if (!this.selectContent.data("moving")) {
                    this.selectContent.data("moving", !0);
                    var e, i = {
                            rotate: 0,
                            scale: 0
                        },
                        o = {
                            rotate: 180,
                            scale: 1
                        },
                        a = this;
                    this.selectContent.data("show") && (i = (e = [o, i])[0], o = e[1]), s.TweenMax.to(i, .3, n({}, o, {
                        onStart: function() {
                            t.selectContent.data("show") || t.selectContent.show()
                        },
                        onUpdate: function() {
                            a.downArrowBtn.css({
                                "-webkit-transform": "rotate(" + this.target.rotate + "deg)",
                                "-ms-transform": "rotate(" + this.target.rotate + "deg)",
                                transform: "rotate(" + this.target.rotate + "deg)"
                            }), a.selectContent.css({
                                "-webkit-transform": "scale(" + this.target.scale + ") ",
                                "-ms-transform": "scale(" + this.target.scale + ") ",
                                transform: "scale(" + this.target.scale + ") "
                            })
                        },
                        onComplete: function() {
                            t.selectContent.data("moving", !1), t.selectContent.data("show") ? (t.selectContent.hide(), t.selectContent.data("show", !1)) : (t.selectContent.show(), t.selectContent.data("show", !0))
                        }
                    }))
                }
            }, t.prototype.computedScale = function() {
                return document.documentElement.clientWidth / a.default.width < document.documentElement.clientHeight / a.default.height ? document.documentElement.clientWidth / a.default.width : document.documentElement.clientHeight / a.default.height
            }, t.prototype.onResizeWindow = function() {
                var t = this.computedScale();
                this.betHistoryOuter.css({
                    "-webkit-transform": " scale(" + t + ")",
                    "-ms-transform": " scale(" + t + ")",
                    transform: " scale(" + t + ")"
                })
            }, t.prototype.formatDate = function(t) {
                var e = new Date(this.serviceDateStr);
                return e.setTime(e.getTime() + 864e5 * t), e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
            }, t.prototype.initLoadingHtml = function() {
                return '  <div class="loading"> \n\t\t<span class="loader"></span>\n\t\t<span>' + r.default.locale.getString("TXT_HISTORY_PREPARINGDATA") + "</span> \n\t</div>\n\t\t"
            }, t.prototype.toggleQueryDom = function() {
                "firstPageDom" == this.currentPage && (this.firstPageListBox.html(this.initLoadingHtml()), this.firstPageTotalBox.html(' <div class="tr">\n        <span>' + r.default.locale.getString("TXT_HISTORY_TOTAL") + "</span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>")), "summaryDom" == this.currentPage && this.betHistoryListBox.html(this.initLoadingHtml())
            }, t.prototype.initBetHistoryListAndTotalDom = function() {
                var t = "";
                this.betHistoryList.map(function(e) {
                    t += '  <div class="tr">\n\t\t\t\t<span>\n                        <div class="flex">\n                                <span>' + e.endDate.split(" ")[0] + "</span>\n\t\t\t\t\t\t\t\t<span>" + e.endDate.split(" ")[1] + "</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t</span>\n\t\t\t\t<span>\n\t\t\t\t\t\t" + e.ticketId + "\n\t\t\t\t</span>\n\t\t\t\t<span>\n\t\t\t\t\t\t" + e.betCount + "\n\t\t\t\t</span>\n\t\t\t\t<span>\n\t\t\t\t\t\t" + l.default.formatAmount(e.betAmt) + "\n\t\t\t\t</span>\n\t\t\t\t" + (e.wlAmt >= 0 ? '<span class="win">' : '<span class="lose">') + "\n\t\t\t\t" + l.default.formatAmount(e.wlAmt) + '\n\t\t\t\t</span>\n\t\t\t\t<span>\n\t\t\t\t\t\t<span class="toDetail" data-ticketId="' + e.ticketId + '" >' + r.default.locale.getString("TXT_HISTORY_DETAILS") + "</span>\n\t\t\t\t</span>\n\t\t</div>\n\t\t\t\t"
                }), this.betHistoryListBox.html(t)
            }, t.prototype.initBetHistoryDetail = function(t) {
                for (var e = this.betHistoryList.filter(function(e) {
                        return e.ticketId == t
                    })[0], i = e.balance, n = e.result, o = e.endDate, a = e.resultRule, s = e.roomId, h = e.gameCode, c = e.loginId, u = e.betAmt, d = e.winAmt, f = e.wlAmt, p = this.iconCount, y = [], g = 0; g < p; g++) y.push({
                    fishCode: g < this.minFishTotal ? g + "" : g + this.specialNumberStart - this.minFishTotal + "",
                    killed: "0",
                    winAmt: "0"
                });
                var m = n.split(";");
                y.map(function(t) {
                    m.map(function(e) {
                        var i = e.split(",");
                        i[0] == t.fishCode && (t.killed = i[1], t.winAmt = i[2])
                    })
                });
                var w = 5 * Math.ceil(p / 5) - p;
                for (g = 0; g < w; g++) y.push({
                    fishCode: "",
                    killed: "",
                    winAmt: ""
                });
                if ("OW" == a) {
                    this.betHistory.addClass("ow");
                    var x = '\n          \n            <div class="tr">\n                <span>' + r.default.locale.getString("TXT_HISTORY_TICKETNO") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_ROOM") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_GAME") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_PLAYER") + '</span>\n            </div>\n\n            <div class="tr">\n                <span>' + t + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_ROOM_" + s) + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_" + h) + "</span>\n                <span>" + c + '</span>\n            </div>\n\n            <div class="tr">\n                <span>' + r.default.locale.getString("TXT_HISTORY_ENDBALANCE") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_BET") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_WIN") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_WINLOSE") + '</span>\n            </div>\n            <div class="tr">\n                <span>' + l.default.formatAmount(parseFloat(i)) + "</span>\n                <span>" + l.default.formatAmount(parseFloat(u)) + "</span>\n                <span>" + l.default.formatAmount(parseFloat(d)) + "</span>\n                <span>" + l.default.formatAmount(parseFloat(f)) + '</span>\n            </div>\n\n\n            <div class="tr fish-kill-win">\n                <span>' + r.default.locale.getString("TXT_HISTORY_FISH") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_KILLED") + "</span>\n                <span>" + r.default.locale.getString("TXT_HISTORY_WIN") + "</span>\n            </div>\n            \n            ",
                        v = "";
                    y.filter(function(t) {
                        return t.killed && "0" != t.killed
                    }).map(function(t) {
                        v += '\n                    <div class="tr">\n                        <span>\n                            <span class="historyBtn fish_' + t.fishCode + '">\n                            </span>\n                        </span>\n                        <span>' + t.killed + "</span>\n                        <span>" + l.default.formatAmount(parseFloat(t.winAmt)) + "</span>\n                    </div>\n                "
                    }), this.betHistoryDetailBox.html(v), this.betHistoryDetailTitleBox.html(x)
                } else {
                    x = '\n\t\t\t<div class="tr">\n\t\t\t<span>' + r.default.locale.getString("TXT_HISTORY_TICKETNO") + ":" + t + "</span>\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t\t<span>" + r.default.locale.getString("TXT_HISTORY_ENDTIME") + ":" + o + "</span>\n\t</div>";
                    var _ = "";
                    for (g = 0; g < y.length;) {
                        var b = y[g],
                            k = y[g + 1],
                            S = y[g + 2],
                            I = y[g + 3],
                            T = y[g + 4];
                        _ += '   <div class="tr fishTr">\n\t\t\t <span class="itemName">' + r.default.locale.getString("TXT_HISTORY_FISH") + '</span>\n\t\t\t <span><span class="historyBtn fish_' + b.fishCode + '"></span></span>\n\t\t\t <span><span class="historyBtn fish_' + k.fishCode + '"></span></span>\n\t\t\t <span><span class="historyBtn fish_' + S.fishCode + '"></span></span>\n\t\t\t <span><span class="historyBtn fish_' + I.fishCode + '"></span></span>\n\t\t\t <span><span class="historyBtn fish_' + T.fishCode + '"></span></span>\n\t\t\n\t </div>\n\t <div class="tr">\n\t\t\t <span class="itemName">' + r.default.locale.getString("TXT_HISTORY_KILLED") + "</span>\n\t\t\t <span>" + b.killed + "</span>\n\t\t\t <span>" + k.killed + "</span>\n\t\t\t <span>" + S.killed + "</span>\n\t\t\t <span>" + I.killed + "</span>\n\t\t\t <span>" + T.killed + '</span>\n\t </div>\n\t <div class="tr">\n\t\t\t <span class="itemName">' + r.default.locale.getString("TXT_HISTORY_WIN") + "</span>\n\t\t\t <span>" + ("" !== b.winAmt ? l.default.formatAmount(parseFloat(b.winAmt)) : "") + "</span>\n\t\t\t <span>" + ("" !== k.winAmt ? l.default.formatAmount(parseFloat(k.winAmt)) : "") + "</span>\n\t\t\t <span>" + ("" !== S.winAmt ? l.default.formatAmount(parseFloat(S.winAmt)) : "") + "</span>\n\t\t\t <span>" + ("" !== I.winAmt ? l.default.formatAmount(parseFloat(I.winAmt)) : "") + "</span>\n\t\t\t <span>" + ("" !== T.winAmt ? l.default.formatAmount(parseFloat(T.winAmt)) : "") + "</span>\n\t </div>", g += 5
                    }
                    this.betHistoryDetailBox.html(_), this.betHistoryDetailTitleBox.html(x)
                }
            }, t.prototype.currency = function(t, e) {
                if ("" == t) return t;
                e = e > 0 && e <= 20 ? e : 2;
                for (var i = (t = parseFloat((t + "").replace(/[^\d\.-]/g, "")).toFixed(e) + "").split(".")[0].split("").reverse(), n = t.split(".")[1], o = "", a = 0; a < i.length; a++) o += i[a] + ((a + 1) % 3 == 0 && a + 1 != i.length ? "," : "");
                var s = o.split(""),
                    r = s.pop(),
                    h = s.pop();
                return "-" == r && "," == h && (s.push(r), o = s.join("")), o.split("").reverse().join("") + "." + n
            }, t.prototype.resetbetHistoryList = function(t) {
                var e = this;
                this.betHistoryReq = {
                    beginDate: t,
                    endDate: t,
                    pageNo: 1
                }, this.toggleQueryDom(), this.fishBetHistory(this.betHistoryReq, function(t) {
                    0 == t.code && (e.betHistoryList = t.list.filter(function(t) {
                        return 0 != t.ticketId
                    }), e.betHistoryPageInfo = t.page, e.initBetHistoryListAndTotalDom())
                })
            }, t.prototype.loadMoreBetHistory = function() {
                var t = this;
                if (!this.betHistoryPageInfo.lastPage) {
                    var e = this.betHistoryReq.pageNo;
                    this.betHistoryReq = n({}, this.betHistoryReq, {
                        pageNo: e + 1
                    }), this.fishBetHistory(this.betHistoryReq, function(e) {
                        0 == e.code && (t.betHistoryList = t.betHistoryList.concat(e.list.filter(function(t) {
                            return 0 != t.ticketId
                        })), t.betHistoryPageInfo = e.page, t.initBetHistoryListAndTotalDom())
                    })
                }
            }, t.prototype.historyAni = function(t) {
                this.computedScale();
                var e, i = this,
                    n = {
                        position: a.default.height
                    },
                    o = {
                        position: 0
                    };
                "hide" == t && (n = (e = [o, n])[0], o = e[1]), s.TweenMax.to(n, .3, {
                    position: o.position,
                    onStart: function() {
                        i.me.show()
                    },
                    onUpdate: function() {
                        i.betHistory.css({
                            "-webkit-transform": "translate3d(0," + this.target.position + "px,0) ",
                            "-ms-transform": "translate3d(0," + this.target.position + "px,0) ",
                            transform: "translate3d(0," + this.target.position + "px,0) "
                        })
                    },
                    onComplete: function() {
                        "hide" == t && (i.me.hide(), i.reset())
                    }
                })
            }, t.prototype.resetFirstPageList = function(t, e) {
                var i = this;
                this.firstPageReq = void 0 != t ? {
                    beginDate: this.formatDate(t),
                    endDate: this.formatDate(0)
                } : {
                    beginDate: "",
                    endDate: ""
                }, this.toggleQueryDom(), this.betHistoryAction(this.firstPageReq, function(n) {
                    e && e(), 0 == t || t || (i.serviceDateStr = n.endDate.replace(/-/g, "/"));
                    var o = "",
                        a = "",
                        s = 0,
                        h = 0,
                        c = 0;
                    n.list.map(function(t, e) {
                        s += t.bets, h += t.ttlBet, c += t.wlAmt, o += '  <div class="tr">\n                  <span>\n                          ' + t.tranDate + "\n                  </span>\n                  <span>\n                          " + t.bets + "\n                  </span>\n                  <span>\n                          " + t.ttlBet + "\n                  </span>\n               \n                  " + (t.wlAmt >= 0 ? '<span class="win">' : '<span class="lose">') + "\n                  " + l.default.formatAmount(t.wlAmt) + '\n                  </span>\n                  <span>\n                          <i class="toSummary historyBtn history_enter' + (e % 2 == 0 ? 2 : 1) + '" data-date="' + t.tranDate + '" ></i>\n                  </span>\n          </div>\n                  '
                    }), a += ' \n      <div class="tr">\n      <span>' + r.default.locale.getString("TXT_HISTORY_TOTAL") + "</span>\n      <span>" + s + "</span>\n      <span>" + l.default.formatAmount(h) + "</span>\n      " + (c >= 0 ? '<span class="win">' : '<span class="lose">') + "\n      " + l.default.formatAmount(parseFloat(c + "")) + "</span>\n      <span></span>\n  </div>\n      \n      ", i.firstPageListBox.html(o), i.firstPageTotalBox.html(a)
                })
            }, t.prototype.reset = function() {
                this.doPageAni([this.firstPageDom, this.selectBox, this.searchBtn], [this.summaryDom, this.detailDom, this.backBtn]), this.updateSelectDom(this.selectContent.find("span").eq(2)), this.selectContent.data("show") && this.toggleSelectBox()
            }, t.prototype.show = function() {
                this.isFirst && (this.initDom(), this.initFirstPageDom(), this.initSummaryDom(), this.initDetailDom(), this.getUI(), this.bindEvent(), this.defaultReqData = {
                    callback: "test",
                    gameType: "FH",
                    gameCode: a.default.gameCode,
                    language: r.default.locale.lan,
                    sid: r.default.service.session.sessionId,
                    token: r.default.service.session.token
                }), this.isFirst = !1, this.onResizeWindow(), this.resetFirstPageList(), this.historyAni("show")
            }, t.prototype.hide = function() {
                this.betHistory.removeClass("ow"), this.historyAni("hide")
            }, t
        }();
    e.default = new c
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(19),
        o = i(1),
        a = i(0),
        s = i(2),
        r = function() {
            function t() {
                this.isFirst = !0, this.showing = !1, this.canSubmit = !0
            }
            return t.prototype.initDom = function() {
                var t = '\n        <div class="walletCheckIn">\n           <div class="wlck_icons wlck_bg">\n              <div class="tr">\n                <span class="pl5">' + a.default.locale.getString("TXT_Wallet_Banlance") + '</span>\n                <div class="wlck_icons wlck_input"><input class="wlck_balance" type="text" value="" readonly="readonly">\n                    <i class="wlck_icons wlck_coin"></i>\n                </div>\n              </div>\n              <div class="tr">\n                <span class="pl5">' + a.default.locale.getString("TXT_Wallet_CheckIn") + '</span>\n                <div class="wlck_icons wlck_input"><input id="wlck_check" class="wlck_check" type="text">\n                    <i class="wlck_icons wlck_coin"></i>\n                </div>\n              </div>\n              <div class="tr wlck_tips">\n                <span id="wlck_tips"></span>\n              </div>\n             \n              <div class="tr">\n                 <span class="wlck_sumbit wlck_button"><i class="wlck_icons wlck_button_yes"></i><b>' + a.default.locale.getString("TXT_Wallet_Submit") + '</b></span>  \n                 <span class="wlck_cancel wlck_button"><i class="wlck_icons wlck_button_no"></i><b>' + a.default.locale.getString("TXT_Wallet_Cancel") + "</b></span>  \n              </div>\n           </div>\n        </div>\n        ";
                this.me = n(t), n("body").append(this.me)
            }, t.prototype.getUI = function() {
                this.wlckBalance = n(".wlck_balance"), this.wlckCheck = n("#wlck_check"), this.wlckTips = n("#wlck_tips"), this.wlckSumbit = n(".wlck_sumbit"), this.wlckCancel = n(".wlck_cancel")
            }, t.prototype.bindEvent = function() {
                var t = this;
                window.addEventListener("resize", function() {
                    return t.onResizeWindow()
                });
                var e = this;
                this.wlckCheck.on("input", function() {
                    switch (s.default.getRatioMultiply()) {
                        case 1:
                            var t = (n(this).val() + "").replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
                            break;
                        case 10:
                            t = (n(this).val() + "").replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d).*$/, "$1$2.$3");
                            break;
                        case 100:
                            t = (n(this).val() + "").replace(/[^\d]/g, "")
                    }
                    var i = t.split(".");
                    i[0] = isNaN(parseInt(i[0])) ? "" : parseInt(i[0]) + "", t = i.join("."), e.checkInAmount = isNaN(parseFloat(t)) ? 0 : parseFloat(t), e.checkInAmount > e.accountBalance ? (e.checkInAmount = e.accountBalance, t = e.accountBalance + "") : e.toggleTip(!1), n(this).val(t)
                }).on("focus", function() {
                    n(this).val(e.checkInAmount)
                }).on("blur", function() {
                    n(this).val(s.default.formatAmount(Number((e.checkInAmount / s.default.getRatioMultiply()).toFixed(2))))
                }).css("ime-mode", "disabled"), this.wlckCancel.on("click", function() {
                    e.hide(), e.cancelFun && e.cancelFun()
                }), this.wlckSumbit.on("click", function() {
                    e.checkInAmount ? e.canSubmit && e.checkInAmountFun(e.checkInAmount) : e.toggleTip(!0, a.default.locale.getString("TXT_Wallet_FillIn"))
                }), n(document).keyup(function(e) {
                    13 == e.keyCode && t.wlckSumbit.click()
                })
            }, t.prototype.computedScale = function() {
                return document.documentElement.clientWidth / o.default.width < document.documentElement.clientHeight / o.default.height ? document.documentElement.clientWidth / o.default.width : document.documentElement.clientHeight / o.default.height
            }, t.prototype.addCssImageVersion = function() {
                var t = ".walletCheckIn .wlck_icons{background-image:url(" + a.default.resources.wallet.url + ")}";
                document.body.appendChild(document.createElement("style")).innerHTML += t
            }, t.prototype.toggleTip = function(t, e) {
                void 0 === e && (e = ""), t ? (this.wlckTips.text(e), this.wlckTips.show(), this.canSubmit = !1) : (this.wlckTips.text(""), this.wlckTips.hide(), this.canSubmit = !0)
            }, t.prototype.onResizeWindow = function() {
                var t = this.computedScale();
                this.me.css({
                    "-webkit-transform": " scale(" + t + ")",
                    "-ms-transform": " scale(" + t + ")",
                    transform: " scale(" + t + ")"
                })
            }, t.prototype.reset = function() {
                this.wlckCheck.val(""), this.checkInAmount = 0, this.toggleTip(!1)
            }, t.prototype.show = function(t, e, i) {
                var n = this;
                void 0 === t && (t = 123456789), this.cancelFun = i, this.checkInAmountFun = e, this.isFirst && (this.addCssImageVersion(), this.initDom(), this.getUI(), this.bindEvent(), this.onResizeWindow()), this.isFirst = !1, this.me.show(), this.wlckBalance.val(s.default.formatAmount(t)), setTimeout(function() {
                    n.wlckCheck.focus()
                }, 0), this.wlckCheck.val(s.default.formatAmount(t)), this.accountBalance = this.accMul(t, s.default.getRatioMultiply()), this.checkInAmount = this.accountBalance, this.showing = !0
            }, t.prototype.accMul = function(t, e) {
                var i = 0,
                    n = t.toString(),
                    o = e.toString();
                try {
                    i += n.split(".")[1].length
                } catch (t) {}
                try {
                    i += o.split(".")[1].length
                } catch (t) {}
                return Number(n.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, i)
            }, t.prototype.hide = function() {
                this.reset(), this.showing = !1, this.me.hide()
            }, Object.defineProperty(t.prototype, "isShowing", {
                get: function() {
                    return this.showing
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.default = new r
}, function(t, e, i) {
    "use strict";
    var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        },
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(138),
        s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t), e
        }(i(16).MyRequest);
    e.RequestLogin = s;
    var r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o(e, t), e
    }(a.MyResponse);
    e.ResponseLogin = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(19),
        a = i(1),
        s = i(392),
        r = i(17);

    function h() {
        if (n.default.app) {
            var t = a.default.width,
                e = a.default.height,
                i = t / e,
                s = o(window).innerWidth(),
                h = o(window).innerHeight(),
                l = s / h;
            "iphone5S || iphone5" == r.default.iphoneVersion() && (l = s / (h = window.innerHeight));
            var c = l > i ? h / e : s / t;
            a.default.scale = c, n.default.app.stage.scale.set(c), n.default.app.renderer.resize(t * c, e * c)
        }
    }
    var l = i(2).default.getVisibilityChangeEventData(),
        c = l.docHidden,
        u = l.docVisibilityChange;
    window.addEventListener("resize", h), document.addEventListener("myResize", h), document.body.addEventListener("touchend", function() {
        if (navigator.userAgent.match(/(Android)/i))
            for (var t = window.document.body, e = ["", "moz", "webkit", "ms"], i = 0; i < e.length; i++) {
                var n = e[i] ? e[i] + "RequestFullscreen" : "requestFullscreen";
                if (t[n]) return t[n]()
            }
    }), document.documentElement.addEventListener("contextmenu", function(t) {
        return t.preventDefault(), t.stopPropagation(), t.returnvalue = !1, !1
    }), document.addEventListener(u, function() {
        n.default.app && n.default.dvcList.forEach(function(t) {
            return t(!document[c])
        })
    }), o(function() {
        (new s.default).onChangeView()
    })
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(19),
        o = i(17),
        a = function() {
            function t() {
                this.initHorizontalDom(), this.initVerticalDom(), this.bindEvent()
            }
            return t.prototype.initHorizontalDom = function() {
                this.horizontalDom = n("<div class=\"horizontal-screen-overlay\">\n                        <div class='swipper' onselectstart='javascript:return false;'>\n                            <div class='tips'></div>\n                        </div>\n                    </div>"), this.horizontalDom.hide(), n("body").append(this.horizontalDom)
            }, t.prototype.initVerticalDom = function() {
                this.verticalDom = n('<div class="vertical-screen-overlay orientationLocking">\n                        <div class="screen-text">Please rotate your device to play</div>\n                        <div class="phone">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>\n                        <div class="phone horizontal">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>                        \n                    </div>'), this.verticalDom.hide(), n("body").append(this.verticalDom)
            }, t.prototype.bindEvent = function() {
                var t = this;
                window.addEventListener("orientationchange", function() {
                    return t.onChangeView()
                }), window.addEventListener("resize", function() {
                    return t.onChangeView()
                }), window.document.addEventListener("touchstart", function(e) {
                    (t.verticalDom.is(":visible") || e.touches.length > 1) && e.preventDefault()
                }), o.default.isIos() && o.default.iosVersion() >= 13 && (document.body.style.overflow = "visible")
            }, t.prototype.onChangeView = function() {
                if (this.horizontalDom.hide(), this.verticalDom.hide(), this.isMobileLandscape()) {
                    if (!o.default.isIos() || o.default.isIpad()) return;
                    if ("iphone5S || iphone5" == o.default.iphoneVersion()) return window.scrollTo(0, 0);
                    this.horizontalDom.show(), this.horizontalDom.css("visibility", "hidden"), document.documentElement.clientHeight > window.innerHeight && (this.horizontalDom.css("visibility", "visible"), window.scrollTo(0, 0))
                } else o.default.isMobile() && this.verticalDom.show()
            }, t.prototype.isMobileLandscape = function() {
                var t = window.screen,
                    e = 90 == window.orientation || -90 == window.orientation,
                    i = t && t.orientation && t.orientation.type.indexOf("landscape") > -1;
                return e || i
            }, t
        }();
    e.default = a
}]);