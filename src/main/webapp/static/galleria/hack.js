(function (e, i) {
    function h(b) {
        var k = Ma[b] = {};
        d.each(b.split(H), function (b, d) {
            k[d] = !0
        });
        return k
    }

    function u(b, k, a) {
        if (a === i && b.nodeType === 1)if (a = "data-" + k.replace(nb, "-$1").toLowerCase(), a = b.getAttribute(a), typeof a === "string") {
            try {
                a = a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : +a + "" === a ? +a : ob.test(a) ? d.parseJSON(a) : a
            } catch (m) {
            }
            d.data(b, k, a)
        } else a = i;
        return a
    }

    function o(b) {
        for (var k in b)if (!(k === "data" && d.isEmptyObject(b[k])) && k !== "toJSON")return!1;
        return!0
    }

    function B() {
        return!1
    }

    function z() {
        return!0
    }

    function A(b) {
        return!b || !b.parentNode || b.parentNode.nodeType === 11
    }

    function s(b, k) {
        do b = b[k]; while (b && b.nodeType !== 1);
        return b
    }

    function C(b, k, a) {
        k = k || 0;
        if (d.isFunction(k))return d.grep(b, function (b, d) {
            return!!k.call(b, d, b) === a
        }); else if (k.nodeType)return d.grep(b, function (b) {
            return b === k === a
        }); else if (typeof k === "string") {
            var m = d.grep(b, function (b) {
                return b.nodeType === 1
            });
            if (pb.test(k))return d.filter(k, m, !a); else k = d.filter(k, m)
        }
        return d.grep(b, function (b) {
            return d.inArray(b, k) >= 0 === a
        })
    }

    function v(b) {
        var k =
            Na.split("|"), b = b.createDocumentFragment();
        if (b.createElement)for (; k.length;)b.createElement(k.pop());
        return b
    }

    function D(b, k) {
        if (k.nodeType === 1 && d.hasData(b)) {
            var a, m, F;
            m = d._data(b);
            var c = d._data(k, m), e = m.events;
            if (e)for (a in delete c.handle, c.events = {}, e) {
                m = 0;
                for (F = e[a].length; m < F; m++)d.event.add(k, a, e[a][m])
            }
            if (c.data)c.data = d.extend({}, c.data)
        }
    }

    function K(b, k) {
        var a;
        if (k.nodeType === 1) {
            k.clearAttributes && k.clearAttributes();
            k.mergeAttributes && k.mergeAttributes(b);
            a = k.nodeName.toLowerCase();
            if (a ===
                "object") {
                if (k.parentNode)k.outerHTML = b.outerHTML;
                if (d.support.html5Clone && b.innerHTML && !d.trim(k.innerHTML))k.innerHTML = b.innerHTML
            } else if (a === "input" && Oa.test(b.type)) {
                if (k.defaultChecked = k.checked = b.checked, k.value !== b.value)k.value = b.value
            } else if (a === "option")k.selected = b.defaultSelected; else if (a === "input" || a === "textarea")k.defaultValue = b.defaultValue; else if (a === "script" && k.text !== b.text)k.text = b.text;
            k.removeAttribute(d.expando)
        }
    }

    function r(b) {
        return typeof b.getElementsByTagName !== "undefined" ?
            b.getElementsByTagName("*") : typeof b.querySelectorAll !== "undefined" ? b.querySelectorAll("*") : []
    }

    function I(b) {
        if (Oa.test(b.type))b.defaultChecked = b.checked
    }

    function M(b, k) {
        if (k in b)return k;
        for (var d = k.charAt(0).toUpperCase() + k.slice(1), a = k, F = Pa.length; F--;)if (k = Pa[F] + d, k in b)return k;
        return a
    }

    function y(b, k) {
        b = k || b;
        return d.css(b, "display") === "none" || !d.contains(b.ownerDocument, b)
    }

    function J(b, k) {
        for (var a, m, F = [], c = 0, e = b.length; c < e; c++)if (a = b[c], a.style)if (F[c] = d._data(a, "olddisplay"), k) {
            if (!F[c] &&
                a.style.display === "none")a.style.display = "";
            a.style.display === "" && y(a) && (F[c] = d._data(a, "olddisplay", ca(a.nodeName)))
        } else m = O(a, "display"), !F[c] && m !== "none" && d._data(a, "olddisplay", m);
        for (c = 0; c < e; c++)if (a = b[c], a.style && (!k || a.style.display === "none" || a.style.display === ""))a.style.display = k ? F[c] || "" : "none";
        return b
    }

    function Q(b, k, d) {
        return(b = qb.exec(k)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : k
    }

    function R(b, k, a, m) {
        for (var k = a === (m ? "border" : "content") ? 4 : k === "width" ? 1 : 0, F = 0; k < 4; k += 2)a === "margin" && (F += d.css(b,
            a + ia[k], !0)), m ? (a === "content" && (F -= parseFloat(O(b, "padding" + ia[k])) || 0), a !== "margin" && (F -= parseFloat(O(b, "border" + ia[k] + "Width")) || 0)) : (F += parseFloat(O(b, "padding" + ia[k])) || 0, a !== "padding" && (F += parseFloat(O(b, "border" + ia[k] + "Width")) || 0));
        return F
    }

    function ja(b, k, a) {
        var m = k === "width" ? b.offsetWidth : b.offsetHeight, F = !0, c = d.support.boxSizing && d.css(b, "boxSizing") === "border-box";
        if (m <= 0 || m == null) {
            m = O(b, k);
            if (m < 0 || m == null)m = b.style[k];
            if (va.test(m))return m;
            F = c && (d.support.boxSizingReliable || m === b.style[k]);
            m = parseFloat(m) || 0
        }
        return m + R(b, k, a || (c ? "border" : "content"), F) + "px"
    }

    function ca(b) {
        if (Ca[b])return Ca[b];
        var k = d("<" + b + ">").appendTo(a.body), j = k.css("display");
        k.remove();
        if (j === "none" || j === "") {
            na = a.body.appendChild(na || d.extend(a.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!oa || !na.createElement)oa = (na.contentWindow || na.contentDocument).document, oa.write("<!doctype html><html><body>"), oa.close();
            k = oa.body.appendChild(oa.createElement(b));
            j = O(k, "display");
            a.body.removeChild(na)
        }
        return Ca[b] =
            j
    }

    function P(b, k, a, m) {
        var c;
        if (d.isArray(k))d.each(k, function (k, d) {
            a || rb.test(b) ? m(b, d) : P(b + "[" + (typeof d === "object" ? k : "") + "]", d, a, m)
        }); else if (!a && d.type(k) === "object")for (c in k)P(b + "[" + c + "]", k[c], a, m); else m(b, k)
    }

    function aa(b) {
        return function (k, a) {
            var j;
            typeof k !== "string" && (a = k, k = "*");
            var m, c, E = k.toLowerCase().split(H), e = 0, f = E.length;
            if (d.isFunction(a))for (; e < f; e++)m = E[e], (c = /^\+/.test(m)) && (m = m.substr(1) || "*"), j = b[m] = b[m] || [], m = j, m[c ? "unshift" : "push"](a)
        }
    }

    function da(b, k, a, d, c, E) {
        c = c || k.dataTypes[0];
        E = E || {};
        E[c] = !0;
        for (var e, c = b[c], f = 0, g = c ? c.length : 0, h = b === Da; f < g && (h || !e); f++)e = c[f](k, a, d), typeof e === "string" && (!h || E[e] ? e = i : (k.dataTypes.unshift(e), e = da(b, k, a, d, e, E)));
        if ((h || !e) && !E["*"])e = da(b, k, a, d, "*", E);
        return e
    }

    function S(b, k) {
        var a, m, c = d.ajaxSettings.flatOptions || {};
        for (a in k)k[a] !== i && ((c[a] ? b : m || (m = {}))[a] = k[a]);
        m && d.extend(!0, b, m)
    }

    function ba() {
        try {
            return new e.XMLHttpRequest
        } catch (b) {
        }
    }

    function N() {
        setTimeout(function () {
            pa = i
        }, 0);
        return pa = d.now()
    }

    function wa(b, a) {
        d.each(a, function (a, k) {
            for (var d = (ta[a] || []).concat(ta["*"]), c = 0, e = d.length; c < e; c++)if (d[c].call(b, a, k))break
        })
    }

    function V(b, a, j) {
        var m = 0, c = xa.length, e = d.Deferred().always(function () {
            delete ma.elem
        }), ma = function () {
            for (var a = pa || N(), a = Math.max(0, f.startTime + f.duration - a), k = 1 - (a / f.duration || 0), d = 0, j = f.tweens.length; d < j; d++)f.tweens[d].run(k);
            e.notifyWith(b, [f, k, a]);
            return k < 1 && j ? a : (e.resolveWith(b, [f]), !1)
        }, f = e.promise({elem: b, props: d.extend({}, a), opts: d.extend(!0, {specialEasing: {}}, j), originalProperties: a, originalOptions: j,
            startTime: pa || N(), duration: j.duration, tweens: [], createTween: function (a, k) {
                var j = d.Tween(b, f.opts, a, k, f.opts.specialEasing[a] || f.opts.easing);
                f.tweens.push(j);
                return j
            }, stop: function (a) {
                for (var k = 0, d = a ? f.tweens.length : 0; k < d; k++)f.tweens[k].run(1);
                a ? e.resolveWith(b, [f, a]) : e.rejectWith(b, [f, a]);
                return this
            }}), j = f.props;
        for (ya(j, f.opts.specialEasing); m < c; m++)if (a = xa[m].call(f, b, j, f.opts))return a;
        wa(f, j);
        d.isFunction(f.opts.start) && f.opts.start.call(b, f);
        d.fx.timer(d.extend(ma, {anim: f, queue: f.opts.queue,
            elem: b}));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function ya(b, a) {
        var k;
        var j, m, c, e, f;
        for (j in b)if (m = d.camelCase(j), c = a[m], e = b[j], d.isArray(e) && (c = e[1], k = b[j] = e[0], e = k), j !== m && (b[m] = e, delete b[j]), (f = d.cssHooks[m]) && "expand"in f)for (j in e = f.expand(e), delete b[m], e)j in b || (b[j] = e[j], a[j] = c); else a[m] = c
    }

    function L(b, a, d, m, c) {
        return new L.prototype.init(b, a, d, m, c)
    }

    function fa(b, a) {
        for (var d, m = {height: b}, c = 0, a = a ? 1 : 0; c < 4; c += 2 - a)d =
            ia[c], m["margin" + d] = m["padding" + d] = b;
        if (a)m.opacity = m.width = b;
        return m
    }

    function q(b) {
        return d.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }

    var qa, T, a = e.document, c = e.location, g = e.navigator, f = e.jQuery, l = e.$, n = Array.prototype.push, t = Array.prototype.slice, p = Array.prototype.indexOf, X = Object.prototype.toString, w = Object.prototype.hasOwnProperty, x = String.prototype.trim, d = function (b, a) {
            return new d.fn.init(b, a, qa)
        }, $ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, U = /\S/, H = /\s+/, W = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ua = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ga = /^[\],:{}\s]*$/, za = /(?:^|:|,)(?:\s*\[)+/g, Z = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Ea = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, sb = /^-ms-/, Fa = /-([\da-z])/gi, tb = function (b, a) {
            return(a + "").toUpperCase()
        }, ra = function () {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", ra, !1), d.ready()) : a.readyState === "complete" && (a.detachEvent("onreadystatechange", ra), d.ready())
        }, Qa = {};
    d.fn = d.prototype =
    {constructor: d, init: function (b, k, j) {
        var m;
        if (!b)return this;
        if (b.nodeType)return this.context = this[0] = b, this.length = 1, this;
        if (typeof b === "string")if ((m = b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3 ? [null, b, null] : ua.exec(b)) && (m[1] || !k))if (m[1])return b = (k = k instanceof d ? k[0] : k) && k.nodeType ? k.ownerDocument || k : a, b = d.parseHTML(m[1], b, !0), ea.test(m[1]) && d.isPlainObject(k) && this.attr.call(b, k, !0), d.merge(this, b); else {
            if ((k = a.getElementById(m[2])) && k.parentNode) {
                if (k.id !== m[2])return j.find(b);
                this.length = 1;
                this[0] = k
            }
            this.context = a;
            this.selector = b;
            return this
        } else return!k || k.jquery ? (k || j).find(b) : this.constructor(k).find(b); else if (d.isFunction(b))return j.ready(b);
        if (b.selector !== i)this.selector = b.selector, this.context = b.context;
        return d.makeArray(b, this)
    }, selector: "", jquery: "1.8.3", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return t.call(this)
    }, get: function (b) {
        return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
    }, pushStack: function (b, a, j) {
        b = d.merge(this.constructor(),
            b);
        b.prevObject = this;
        b.context = this.context;
        if (a === "find")b.selector = this.selector + (this.selector ? " " : "") + j; else if (a)b.selector = this.selector + "." + a + "(" + j + ")";
        return b
    }, each: function (b, a) {
        return d.each(this, b, a)
    }, ready: function (b) {
        d.ready.promise().done(b);
        return this
    }, eq: function (b) {
        b = +b;
        return b === -1 ? this.slice(b) : this.slice(b, b + 1)
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, slice: function () {
        return this.pushStack(t.apply(this, arguments), "slice", t.call(arguments).join(","))
    },
        map: function (b) {
            return this.pushStack(d.map(this, function (a, d) {
                return b.call(a, d, a)
            }))
        }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: n, sort: [].sort, splice: [].splice};
    d.fn.init.prototype = d.fn;
    d.extend = d.fn.extend = function () {
        var b, a, j, m, c, e = arguments[0] || {}, f = 1, g = arguments.length, h = !1;
        typeof e === "boolean" && (h = e, e = arguments[1] || {}, f = 2);
        typeof e !== "object" && !d.isFunction(e) && (e = {});
        g === f && (e = this, --f);
        for (; f < g; f++)if ((b = arguments[f]) != null)for (a in b)j = e[a], m = b[a], e !== m && (h && m &&
            (d.isPlainObject(m) || (c = d.isArray(m))) ? (c ? (c = !1, j = j && d.isArray(j) ? j : []) : j = j && d.isPlainObject(j) ? j : {}, e[a] = d.extend(h, j, m)) : m !== i && (e[a] = m));
        return e
    };
    d.extend({noConflict: function (b) {
        if (e.$ === d)e.$ = l;
        if (b && e.jQuery === d)e.jQuery = f;
        return d
    }, isReady: !1, readyWait: 1, holdReady: function (b) {
        b ? d.readyWait++ : d.ready(!0)
    }, ready: function (b) {
        if (!(b === !0 ? --d.readyWait : d.isReady)) {
            if (!a.body)return setTimeout(d.ready, 1);
            d.isReady = !0;
            b !== !0 && --d.readyWait > 0 || (T.resolveWith(a, [d]), d.fn.trigger && d(a).trigger("ready").off("ready"))
        }
    },
        isFunction: function (b) {
            return d.type(b) === "function"
        }, isArray: Array.isArray || function (b) {
            return d.type(b) === "array"
        }, isWindow: function (b) {
            return b != null && b == b.window
        }, isNumeric: function (b) {
            return!isNaN(parseFloat(b)) && isFinite(b)
        }, type: function (b) {
            return b == null ? String(b) : Qa[X.call(b)] || "object"
        }, isPlainObject: function (b) {
            if (!b || d.type(b) !== "object" || b.nodeType || d.isWindow(b))return!1;
            try {
                if (b.constructor && !w.call(b, "constructor") && !w.call(b.constructor.prototype, "isPrototypeOf"))return!1
            } catch (a) {
                return!1
            }
            for (var j in b);
            return j === i || w.call(b, j)
        }, isEmptyObject: function (b) {
            for (var a in b)return!1;
            return!0
        }, error: function (b) {
            throw Error(b);
        }, parseHTML: function (b, k, j) {
            var m;
            if (!b || typeof b !== "string")return null;
            typeof k === "boolean" && (j = k, k = 0);
            k = k || a;
            if (m = ea.exec(b))return[k.createElement(m[1])];
            m = d.buildFragment([b], k, j ? null : []);
            return d.merge([], (m.cacheable ? d.clone(m.fragment) : m.fragment).childNodes)
        }, parseJSON: function (b) {
            if (!b || typeof b !== "string")return null;
            b = d.trim(b);
            if (e.JSON && e.JSON.parse)return e.JSON.parse(b);
            if (ga.test(b.replace(Z, "@").replace(Ea, "]").replace(za, "")))return(new Function("return " + b))();
            d.error("Invalid JSON: " + b)
        }, parseXML: function (b) {
            var a, j;
            if (!b || typeof b !== "string")return null;
            try {
                e.DOMParser ? (j = new DOMParser, a = j.parseFromString(b, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(b))
            } catch (m) {
                a = i
            }
            (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + b);
            return a
        }, noop: function () {
        }, globalEval: function (b) {
            b && U.test(b) &&
            (e.execScript || function (b) {
                e.eval.call(e, b)
            })(b)
        }, camelCase: function (b) {
            return b.replace(sb, "ms-").replace(Fa, tb)
        }, nodeName: function (b, a) {
            return b.nodeName && b.nodeName.toLowerCase() === a.toLowerCase()
        }, each: function (b, a, j) {
            var m, c = 0, e = b.length, f = e === i || d.isFunction(b);
            if (j)if (f)for (m in b) {
                if (a.apply(b[m], j) === !1)break
            } else for (; c < e;) {
                if (a.apply(b[c++], j) === !1)break
            } else if (f)for (m in b) {
                if (a.call(b[m], m, b[m]) === !1)break
            } else for (; c < e;)if (a.call(b[c], c, b[c++]) === !1)break;
            return b
        }, trim: x && !x.call("\ufeff\u00a0") ?
            function (b) {
                return b == null ? "" : x.call(b)
            } : function (b) {
            return b == null ? "" : (b + "").replace(W, "")
        }, makeArray: function (b, a) {
            var j, m = a || [];
            b != null && (j = d.type(b), b.length == null || j === "string" || j === "function" || j === "regexp" || d.isWindow(b) ? n.call(m, b) : d.merge(m, b));
            return m
        }, inArray: function (b, a, d) {
            var m;
            if (a) {
                if (p)return p.call(a, b, d);
                m = a.length;
                for (d = d ? d < 0 ? Math.max(0, m + d) : d : 0; d < m; d++)if (d in a && a[d] === b)return d
            }
            return-1
        }, merge: function (b, a) {
            var d = a.length, m = b.length, c = 0;
            if (typeof d === "number")for (; c < d; c++)b[m++] =
                a[c]; else for (; a[c] !== i;)b[m++] = a[c++];
            b.length = m;
            return b
        }, grep: function (b, a, d) {
            for (var m, c = [], e = 0, f = b.length, d = !!d; e < f; e++)m = !!a(b[e], e), d !== m && c.push(b[e]);
            return c
        }, map: function (b, a, j) {
            var m, c, e = [], f = 0, g = b.length;
            if (b instanceof d || g !== i && typeof g === "number" && (g > 0 && b[0] && b[g - 1] || g === 0 || d.isArray(b)))for (; f < g; f++)m = a(b[f], f, j), m != null && (e[e.length] = m); else for (c in b)m = a(b[c], c, j), m != null && (e[e.length] = m);
            return e.concat.apply([], e)
        }, guid: 1, proxy: function (b, a) {
            var j, m;
            typeof a === "string" && (j = b[a],
                a = b, b = j);
            if (!d.isFunction(b))return i;
            m = t.call(arguments, 2);
            j = function () {
                return b.apply(a, m.concat(t.call(arguments)))
            };
            j.guid = b.guid = b.guid || d.guid++;
            return j
        }, access: function (b, a, j, m, c, e, f) {
            var g, h = j == null, l = 0, w = b.length;
            if (j && typeof j === "object") {
                for (l in j)d.access(b, a, l, j[l], 1, e, m);
                c = 1
            } else if (m !== i) {
                g = f === i && d.isFunction(m);
                h && (g ? (g = a, a = function (b, a, k) {
                    return g.call(d(b), k)
                }) : (a.call(b, m), a = null));
                if (a)for (; l < w; l++)a(b[l], j, g ? m.call(b[l], l, a(b[l], j)) : m, f);
                c = 1
            }
            return c ? b : h ? a.call(b) : w ? a(b[0],
                j) : e
        }, now: function () {
            return(new Date).getTime()
        }});
    d.ready.promise = function (b) {
        if (!T)if (T = d.Deferred(), a.readyState === "complete")setTimeout(d.ready, 1); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", ra, !1), e.addEventListener("load", d.ready, !1); else {
            a.attachEvent("onreadystatechange", ra);
            e.attachEvent("onload", d.ready);
            var k = !1;
            try {
                k = e.frameElement == null && a.documentElement
            } catch (j) {
            }
            k && k.doScroll && function F() {
                if (!d.isReady) {
                    try {
                        k.doScroll("left")
                    } catch (b) {
                        return setTimeout(F, 50)
                    }
                    d.ready()
                }
            }()
        }
        return T.promise(b)
    };
    d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, a) {
        Qa["[object " + a + "]"] = a.toLowerCase()
    });
    qa = d(a);
    var Ma = {};
    d.Callbacks = function (b) {
        var b = typeof b === "string" ? Ma[b] || h(b) : d.extend({}, b), a, j, m, c, e, f, g = [], l = !b.once && [], w = function (d) {
            a = b.memory && d;
            j = !0;
            f = c || 0;
            c = 0;
            e = g.length;
            for (m = !0; g && f < e; f++)if (g[f].apply(d[0], d[1]) === !1 && b.stopOnFalse) {
                a = !1;
                break
            }
            m = !1;
            g && (l ? l.length && w(l.shift()) : a ? g = [] : x.disable())
        }, x = {add: function () {
            if (g) {
                var j = g.length;
                (function ub(a) {
                    d.each(a,
                        function (a, k) {
                            var j = d.type(k);
                            j === "function" ? (!b.unique || !x.has(k)) && g.push(k) : k && k.length && j !== "string" && ub(k)
                        })
                })(arguments);
                m ? e = g.length : a && (c = j, w(a))
            }
            return this
        }, remove: function () {
            g && d.each(arguments, function (b, a) {
                for (var k; (k = d.inArray(a, g, k)) > -1;)g.splice(k, 1), m && (k <= e && e--, k <= f && f--)
            });
            return this
        }, has: function (b) {
            return d.inArray(b, g) > -1
        }, empty: function () {
            g = [];
            return this
        }, disable: function () {
            g = l = a = i;
            return this
        }, disabled: function () {
            return!g
        }, lock: function () {
            l = i;
            a || x.disable();
            return this
        },
            locked: function () {
                return!l
            }, fireWith: function (b, a) {
                a = a || [];
                a = [b, a.slice ? a.slice() : a];
                if (g && (!j || l))m ? l.push(a) : w(a);
                return this
            }, fire: function () {
                x.fireWith(this, arguments);
                return this
            }, fired: function () {
                return!!j
            }};
        return x
    };
    d.extend({Deferred: function (b) {
        var a = [
            ["resolve", "done", d.Callbacks("once memory"), "resolved"],
            ["reject", "fail", d.Callbacks("once memory"), "rejected"],
            ["notify", "progress", d.Callbacks("memory")]
        ], j = "pending", m = {state: function () {
            return j
        }, always: function () {
            c.done(arguments).fail(arguments);
            return this
        }, then: function () {
            var b = arguments;
            return d.Deferred(function (j) {
                d.each(a, function (a, k) {
                    var m = k[0], e = b[a];
                    c[k[1]](d.isFunction(e) ? function () {
                        var b = e.apply(this, arguments);
                        if (b && d.isFunction(b.promise))b.promise().done(j.resolve).fail(j.reject).progress(j.notify); else j[m + "With"](this === c ? j : this, [b])
                    } : j[m])
                });
                b = null
            }).promise()
        }, promise: function (b) {
            return b != null ? d.extend(b, m) : m
        }}, c = {};
        m.pipe = m.then;
        d.each(a, function (b, d) {
            var e = d[2], f = d[3];
            m[d[1]] = e.add;
            f && e.add(function () {
                    j = f
                }, a[b ^ 1][2].disable,
                a[2][2].lock);
            c[d[0]] = e.fire;
            c[d[0] + "With"] = e.fireWith
        });
        m.promise(c);
        b && b.call(c, c);
        return c
    }, when: function (b) {
        var a = 0, j = t.call(arguments), m = j.length, c = m !== 1 || b && d.isFunction(b.promise) ? m : 0, e = c === 1 ? b : d.Deferred(), f = function (b, a, d) {
            return function (k) {
                a[b] = this;
                d[b] = arguments.length > 1 ? t.call(arguments) : k;
                d === g ? e.notifyWith(a, d) : --c || e.resolveWith(a, d)
            }
        }, g, i, h;
        if (m > 1) {
            g = Array(m);
            i = Array(m);
            for (h = Array(m); a < m; a++)j[a] && d.isFunction(j[a].promise) ? j[a].promise().done(f(a, h, j)).fail(e.reject).progress(f(a,
                i, g)) : --c
        }
        c || e.resolveWith(h, j);
        return e.promise()
    }});
    d.support = function () {
        var b, k, j, m, c, f, g, i = a.createElement("div");
        i.setAttribute("className", "t");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        k = i.getElementsByTagName("*");
        j = i.getElementsByTagName("a")[0];
        if (!k || !j || !k.length)return{};
        m = a.createElement("select");
        c = m.appendChild(a.createElement("option"));
        k = i.getElementsByTagName("input")[0];
        j.style.cssText = "top:1px;float:left;opacity:.5";
        b = {leadingWhitespace: i.firstChild.nodeType ===
            3, tbody: !i.getElementsByTagName("tbody").length, htmlSerialize: !!i.getElementsByTagName("link").length, style: /top/.test(j.getAttribute("style")), hrefNormalized: j.getAttribute("href") === "/a", opacity: /^0.5/.test(j.style.opacity), cssFloat: !!j.style.cssFloat, checkOn: k.value === "on", optSelected: c.selected, getSetAttribute: i.className !== "t", enctype: !!a.createElement("form").enctype, html5Clone: a.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: a.compatMode === "CSS1Compat", submitBubbles: !0,
            changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1};
        k.checked = !0;
        b.noCloneChecked = k.cloneNode(!0).checked;
        m.disabled = !0;
        b.optDisabled = !c.disabled;
        try {
            delete i.test
        } catch (h) {
            b.deleteExpando = !1
        }
        !i.addEventListener && i.attachEvent && i.fireEvent && (i.attachEvent("onclick", j = function () {
            b.noCloneEvent = !1
        }), i.cloneNode(!0).fireEvent("onclick"), i.detachEvent("onclick", j));
        k = a.createElement("input");
        k.value = "t";
        k.setAttribute("type", "radio");
        b.radioValue = k.value === "t";
        k.setAttribute("checked", "checked");
        k.setAttribute("name", "t");
        i.appendChild(k);
        j = a.createDocumentFragment();
        j.appendChild(i.lastChild);
        b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.appendChecked = k.checked;
        j.removeChild(k);
        j.appendChild(i);
        if (i.attachEvent)for (f in{submit: !0, change: !0, focusin: !0})k = "on" + f, g = k in i, g || (i.setAttribute(k, "return;"), g = typeof i[k] === "function"), b[f + "Bubbles"] = g;
        d(function () {
            var d, k,
                j, m = a.getElementsByTagName("body")[0];
            if (m) {
                d = a.createElement("div");
                d.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                m.insertBefore(d, m.firstChild);
                k = a.createElement("div");
                d.appendChild(k);
                k.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                j = k.getElementsByTagName("td");
                j[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                g = j[0].offsetHeight === 0;
                j[0].style.display = "";
                j[1].style.display = "none";
                b.reliableHiddenOffsets = g && j[0].offsetHeight ===
                    0;
                k.innerHTML = "";
                k.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                b.boxSizing = k.offsetWidth === 4;
                b.doesNotIncludeMarginInBodyOffset = m.offsetTop !== 1;
                if (e.getComputedStyle)b.pixelPosition = (e.getComputedStyle(k, null) || {}).top !== "1%", b.boxSizingReliable = (e.getComputedStyle(k, null) || {width: "4px"}).width === "4px", j = a.createElement("div"), j.style.cssText = k.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    j.style.marginRight = j.style.width = "0", k.style.width = "1px", k.appendChild(j), b.reliableMarginRight = !parseFloat((e.getComputedStyle(j, null) || {}).marginRight);
                if (typeof k.style.zoom !== "undefined")k.innerHTML = "", k.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = k.offsetWidth === 3, k.style.display = "block", k.style.overflow = "visible", k.innerHTML = "<div></div>", k.firstChild.style.width = "5px", b.shrinkWrapBlocks = k.offsetWidth !==
                    3, d.style.zoom = 1;
                m.removeChild(d)
            }
        });
        j.removeChild(i);
        k = j = m = c = k = j = i = null;
        return b
    }();
    var ob = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, nb = /([A-Z])/g;
    d.extend({cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (b) {
        b = b.nodeType ? d.cache[b[d.expando]] : b[d.expando];
        return!!b && !o(b)
    }, data: function (b, a, j, m) {
        if (d.acceptData(b)) {
            var c = d.expando, e = typeof a === "string", f = b.nodeType, g =
                f ? d.cache : b, h = f ? b[c] : b[c] && c;
            if (h && g[h] && (m || g[h].data) || !(e && j === i)) {
                h || (f ? b[c] = h = d.deletedIds.pop() || d.guid++ : h = c);
                if (!g[h] && (g[h] = {}, !f))g[h].toJSON = d.noop;
                if (typeof a === "object" || typeof a === "function")m ? g[h] = d.extend(g[h], a) : g[h].data = d.extend(g[h].data, a);
                b = g[h];
                if (!m) {
                    if (!b.data)b.data = {};
                    b = b.data
                }
                j !== i && (b[d.camelCase(a)] = j);
                e ? (j = b[a], j == null && (j = b[d.camelCase(a)])) : j = b;
                return j
            }
        }
    }, removeData: function (b, a, j) {
        if (d.acceptData(b)) {
            var m, c, e, f = b.nodeType, g = f ? d.cache : b, i = f ? b[d.expando] : d.expando;
            if (g[i]) {
                if (a && (m = j ? g[i] : g[i].data)) {
                    d.isArray(a) || (a in m ? a = [a] : (a = d.camelCase(a), a = a in m ? [a] : a.split(" ")));
                    c = 0;
                    for (e = a.length; c < e; c++)delete m[a[c]];
                    if (!(j ? o : d.isEmptyObject)(m))return
                }
                if (!j && (delete g[i].data, !o(g[i])))return;
                f ? d.cleanData([b], !0) : d.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null
            }
        }
    }, _data: function (b, a, j) {
        return d.data(b, a, j, !0)
    }, acceptData: function (b) {
        var a = b.nodeName && d.noData[b.nodeName.toLowerCase()];
        return!a || a !== !0 && b.getAttribute("classid") === a
    }});
    d.fn.extend({data: function (b, a) {
        var j, m, c, e, f, g = this[0], h = 0, l = null;
        if (b === i) {
            if (this.length && (l = d.data(g), g.nodeType === 1 && !d._data(g, "parsedAttrs"))) {
                c = g.attributes;
                for (f = c.length; h < f; h++)e = c[h].name, e.indexOf("data-") || (e = d.camelCase(e.substring(5)), u(g, e, l[e]));
                d._data(g, "parsedAttrs", !0)
            }
            return l
        }
        if (typeof b === "object")return this.each(function () {
            d.data(this, b)
        });
        j = b.split(".", 2);
        j[1] = j[1] ? "." + j[1] : "";
        m = j[1] + "!";
        return d.access(this, function (a) {
            if (a === i)return l = this.triggerHandler("getData" + m, [j[0]]), l === i && g && (l = d.data(g,
                b), l = u(g, b, l)), l === i && j[1] ? this.data(j[0]) : l;
            j[1] = a;
            this.each(function () {
                var k = d(this);
                k.triggerHandler("setData" + m, j);
                d.data(this, b, a);
                k.triggerHandler("changeData" + m, j)
            })
        }, null, a, arguments.length > 1, null, !1)
    }, removeData: function (b) {
        return this.each(function () {
            d.removeData(this, b)
        })
    }});
    d.extend({queue: function (b, a, j) {
        var m;
        if (b)return a = (a || "fx") + "queue", m = d._data(b, a), j && (!m || d.isArray(j) ? m = d._data(b, a, d.makeArray(j)) : m.push(j)), m || []
    }, dequeue: function (b, a) {
        var a = a || "fx", j = d.queue(b, a), m = j.length,
            c = j.shift(), e = d._queueHooks(b, a), f = function () {
                d.dequeue(b, a)
            };
        c === "inprogress" && (c = j.shift(), m--);
        c && (a === "fx" && j.unshift("inprogress"), delete e.stop, c.call(b, f, e));
        !m && e && e.empty.fire()
    }, _queueHooks: function (b, a) {
        var j = a + "queueHooks";
        return d._data(b, j) || d._data(b, j, {empty: d.Callbacks("once memory").add(function () {
            d.removeData(b, a + "queue", !0);
            d.removeData(b, j, !0)
        })})
    }});
    d.fn.extend({queue: function (b, a) {
        var j = 2;
        typeof b !== "string" && (a = b, b = "fx", j--);
        if (arguments.length < j)return d.queue(this[0], b);
        return a === i ? this : this.each(function () {
            var j = d.queue(this, b, a);
            d._queueHooks(this, b);
            b === "fx" && j[0] !== "inprogress" && d.dequeue(this, b)
        })
    }, dequeue: function (b) {
        return this.each(function () {
            d.dequeue(this, b)
        })
    }, delay: function (b, a) {
        b = d.fx ? d.fx.speeds[b] || b : b;
        return this.queue(a || "fx", function (a, d) {
            var k = setTimeout(a, b);
            d.stop = function () {
                clearTimeout(k)
            }
        })
    }, clearQueue: function (b) {
        return this.queue(b || "fx", [])
    }, promise: function (b, a) {
        var j, m = 1, c = d.Deferred(), e = this, f = this.length, g = function () {
            --m || c.resolveWith(e,
                [e])
        };
        typeof b !== "string" && (a = b, b = i);
        for (b = b || "fx"; f--;)if ((j = d._data(e[f], b + "queueHooks")) && j.empty)m++, j.empty.add(g);
        g();
        return c.promise(a)
    }});
    var ha, Ra, Sa, Ta = /[\t\r\n]/g, vb = /\r/g, wb = /^(?:button|input)$/i, xb = /^(?:button|input|object|select|textarea)$/i, yb = /^a(?:rea|)$/i, Ua = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Va = d.support.getSetAttribute;
    d.fn.extend({attr: function (b, a) {
        return d.access(this, d.attr, b, a, arguments.length >
            1)
    }, removeAttr: function (b) {
        return this.each(function () {
            d.removeAttr(this, b)
        })
    }, prop: function (b, a) {
        return d.access(this, d.prop, b, a, arguments.length > 1)
    }, removeProp: function (b) {
        b = d.propFix[b] || b;
        return this.each(function () {
            try {
                this[b] = i, delete this[b]
            } catch (a) {
            }
        })
    }, addClass: function (b) {
        var a, j, m, c, e, f, g;
        if (d.isFunction(b))return this.each(function (a) {
            d(this).addClass(b.call(this, a, this.className))
        });
        if (b && typeof b === "string") {
            a = b.split(H);
            j = 0;
            for (m = this.length; j < m; j++)if (c = this[j], c.nodeType === 1)if (!c.className &&
                a.length === 1)c.className = b; else {
                e = " " + c.className + " ";
                f = 0;
                for (g = a.length; f < g; f++)e.indexOf(" " + a[f] + " ") < 0 && (e += a[f] + " ");
                c.className = d.trim(e)
            }
        }
        return this
    }, removeClass: function (b) {
        var a, j, m, c, e, f, g;
        if (d.isFunction(b))return this.each(function (a) {
            d(this).removeClass(b.call(this, a, this.className))
        });
        if (b && typeof b === "string" || b === i) {
            a = (b || "").split(H);
            f = 0;
            for (g = this.length; f < g; f++)if (m = this[f], m.nodeType === 1 && m.className) {
                j = (" " + m.className + " ").replace(Ta, " ");
                c = 0;
                for (e = a.length; c < e; c++)for (; j.indexOf(" " +
                    a[c] + " ") >= 0;)j = j.replace(" " + a[c] + " ", " ");
                m.className = b ? d.trim(j) : ""
            }
        }
        return this
    }, toggleClass: function (b, a) {
        var j = typeof b, c = typeof a === "boolean";
        if (d.isFunction(b))return this.each(function (j) {
            d(this).toggleClass(b.call(this, j, this.className, a), a)
        });
        return this.each(function () {
            if (j === "string")for (var e, f = 0, g = d(this), i = a, h = b.split(H); e = h[f++];)i = c ? i : !g.hasClass(e), g[i ? "addClass" : "removeClass"](e); else if (j === "undefined" || j === "boolean")this.className && d._data(this, "__className__", this.className),
                this.className = this.className || b === !1 ? "" : d._data(this, "__className__") || ""
        })
    }, hasClass: function (b) {
        for (var b = " " + b + " ", a = 0, d = this.length; a < d; a++)if (this[a].nodeType === 1 && (" " + this[a].className + " ").replace(Ta, " ").indexOf(b) >= 0)return!0;
        return!1
    }, val: function (b) {
        var a, j, c, e = this[0];
        if (arguments.length)return c = d.isFunction(b), this.each(function (j) {
            var e = d(this);
            if (this.nodeType === 1 && (j = c ? b.call(this, j, e.val()) : b, j == null ? j = "" : typeof j === "number" ? j += "" : d.isArray(j) && (j = d.map(j, function (b) {
                return b ==
                    null ? "" : b + ""
            })), a = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], !a || !("set"in a) || a.set(this, j, "value") === i))this.value = j
        }); else if (e) {
            if ((a = d.valHooks[e.type] || d.valHooks[e.nodeName.toLowerCase()]) && "get"in a && (j = a.get(e, "value")) !== i)return j;
            j = e.value;
            return typeof j === "string" ? j.replace(vb, "") : j == null ? "" : j
        }
    }});
    d.extend({valHooks: {option: {get: function (b) {
        var a = b.attributes.value;
        return!a || a.specified ? b.value : b.text
    }}, select: {get: function (b) {
        for (var a, j = b.options, c = b.selectedIndex,
                 e = (b = b.type === "select-one" || c < 0) ? null : [], f = b ? c + 1 : j.length, g = c < 0 ? f : b ? c : 0; g < f; g++)if (a = j[g], (a.selected || g === c) && (d.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) && (!a.parentNode.disabled || !d.nodeName(a.parentNode, "optgroup"))) {
            a = d(a).val();
            if (b)return a;
            e.push(a)
        }
        return e
    }, set: function (b, a) {
        var j = d.makeArray(a);
        d(b).find("option").each(function () {
            this.selected = d.inArray(d(this).val(), j) >= 0
        });
        if (!j.length)b.selectedIndex = -1;
        return j
    }}}, attrFn: {}, attr: function (b, a, j, c) {
        var e, f, g =
            b.nodeType;
        if (b && !(g === 3 || g === 8 || g === 2)) {
            if (c && d.isFunction(d.fn[a]))return d(b)[a](j);
            if (typeof b.getAttribute === "undefined")return d.prop(b, a, j);
            if (c = g !== 1 || !d.isXMLDoc(b))a = a.toLowerCase(), f = d.attrHooks[a] || (Ua.test(a) ? Ra : ha);
            if (j !== i)if (j === null)d.removeAttr(b, a); else return f && "set"in f && c && (e = f.set(b, j, a)) !== i ? e : (b.setAttribute(a, j + ""), j); else return f && "get"in f && c && (e = f.get(b, a)) !== null ? e : (e = b.getAttribute(a), e === null ? i : e)
        }
    }, removeAttr: function (b, a) {
        var j, c, e, f, g = 0;
        if (a && b.nodeType === 1)for (c =
                                           a.split(H); g < c.length; g++)if (e = c[g])j = d.propFix[e] || e, (f = Ua.test(e)) || d.attr(b, e, ""), b.removeAttribute(Va ? e : j), f && j in b && (b[j] = !1)
    }, attrHooks: {type: {set: function (b, a) {
        if (wb.test(b.nodeName) && b.parentNode)d.error("type property can't be changed"); else if (!d.support.radioValue && a === "radio" && d.nodeName(b, "input")) {
            var j = b.value;
            b.setAttribute("type", a);
            if (j)b.value = j;
            return a
        }
    }}, value: {get: function (b, a) {
        if (ha && d.nodeName(b, "button"))return ha.get(b, a);
        return a in b ? b.value : null
    }, set: function (b, a, j) {
        if (ha &&
            d.nodeName(b, "button"))return ha.set(b, a, j);
        b.value = a
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (b, a, j) {
        var c, e, f = b.nodeType;
        if (b && !(f === 3 || f === 8 || f === 2)) {
            if (f !== 1 || !d.isXMLDoc(b))a = d.propFix[a] || a, e = d.propHooks[a];
            return j !== i ? e && "set"in e && (c = e.set(b, j,
                a)) !== i ? c : b[a] = j : e && "get"in e && (c = e.get(b, a)) !== null ? c : b[a]
        }
    }, propHooks: {tabIndex: {get: function (b) {
        var a = b.getAttributeNode("tabindex");
        return a && a.specified ? parseInt(a.value, 10) : xb.test(b.nodeName) || yb.test(b.nodeName) && b.href ? 0 : i
    }}}});
    Ra = {get: function (b, a) {
        var j, c = d.prop(b, a);
        return c === !0 || typeof c !== "boolean" && (j = b.getAttributeNode(a)) && j.nodeValue !== !1 ? a.toLowerCase() : i
    }, set: function (b, a, j) {
        a === !1 ? d.removeAttr(b, j) : (a = d.propFix[j] || j, a in b && (b[a] = !0), b.setAttribute(j, j.toLowerCase()));
        return j
    }};
    if (!Va)Sa = {name: !0, id: !0, coords: !0}, ha = d.valHooks.button = {get: function (b, a) {
        var d;
        return(d = b.getAttributeNode(a)) && (Sa[a] ? d.value !== "" : d.specified) ? d.value : i
    }, set: function (b, d, j) {
        var c = b.getAttributeNode(j);
        c || (c = a.createAttribute(j), b.setAttributeNode(c));
        return c.value = d + ""
    }}, d.each(["width", "height"], function (b, a) {
        d.attrHooks[a] = d.extend(d.attrHooks[a], {set: function (b, d) {
            if (d === "")return b.setAttribute(a, "auto"), d
        }})
    }), d.attrHooks.contenteditable = {get: ha.get, set: function (b, a, d) {
        a === "" && (a = "false");
        ha.set(b, a, d)
    }};
    d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function (b, a) {
        d.attrHooks[a] = d.extend(d.attrHooks[a], {get: function (b) {
            b = b.getAttribute(a, 2);
            return b === null ? i : b
        }})
    });
    if (!d.support.style)d.attrHooks.style = {get: function (b) {
        return b.style.cssText.toLowerCase() || i
    }, set: function (b, a) {
        return b.style.cssText = a + ""
    }};
    if (!d.support.optSelected)d.propHooks.selected = d.extend(d.propHooks.selected, {get: function () {
        return null
    }});
    if (!d.support.enctype)d.propFix.enctype = "encoding";
    d.support.checkOn || d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = {get: function (b) {
            return b.getAttribute("value") === null ? "on" : b.value
        }}
    });
    d.each(["radio", "checkbox"], function () {
        d.valHooks[this] = d.extend(d.valHooks[this], {set: function (b, a) {
            if (d.isArray(a))return b.checked = d.inArray(d(b).val(), a) >= 0
        }})
    });
    var Ga = /^(?:textarea|input|select)$/i, Wa = /^([^\.]*|)(?:\.(.+)|)$/, zb = /(?:^|\s)hover(\.\S+|)\b/, Ab = /^key/, Bb = /^(?:mouse|contextmenu)|click/, Xa = /^(?:focusinfocus|focusoutblur)$/, Ya = function (b) {
        return d.event.special.hover ?
            b : b.replace(zb, "mouseenter$1 mouseleave$1")
    };
    d.event = {add: function (b, a, j, c, e) {
        var f, g, h, l, w, x, n, p, t;
        if (!(b.nodeType === 3 || b.nodeType === 8 || !a || !j || !(f = d._data(b)))) {
            if (j.handler)n = j, j = n.handler, e = n.selector;
            if (!j.guid)j.guid = d.guid++;
            h = f.events;
            if (!h)f.events = h = {};
            g = f.handle;
            if (!g)f.handle = g = function (b) {
                return typeof d !== "undefined" && (!b || d.event.triggered !== b.type) ? d.event.dispatch.apply(g.elem, arguments) : i
            }, g.elem = b;
            a = d.trim(Ya(a)).split(" ");
            for (f = 0; f < a.length; f++) {
                l = Wa.exec(a[f]) || [];
                w = l[1];
                x = (l[2] ||
                    "").split(".").sort();
                t = d.event.special[w] || {};
                w = (e ? t.delegateType : t.bindType) || w;
                t = d.event.special[w] || {};
                l = d.extend({type: w, origType: l[1], data: c, handler: j, guid: j.guid, selector: e, needsContext: e && d.expr.match.needsContext.test(e), namespace: x.join(".")}, n);
                p = h[w];
                if (!p && (p = h[w] = [], p.delegateCount = 0, !t.setup || t.setup.call(b, c, x, g) === !1))b.addEventListener ? b.addEventListener(w, g, !1) : b.attachEvent && b.attachEvent("on" + w, g);
                if (t.add && (t.add.call(b, l), !l.handler.guid))l.handler.guid = j.guid;
                e ? p.splice(p.delegateCount++,
                    0, l) : p.push(l);
                d.event.global[w] = !0
            }
            b = null
        }
    }, global: {}, remove: function (b, a, j, c, e) {
        var f, g, i, h, l, w, x, n, p, t, q = d.hasData(b) && d._data(b);
        if (q && (x = q.events)) {
            a = d.trim(Ya(a || "")).split(" ");
            for (f = 0; f < a.length; f++)if (g = Wa.exec(a[f]) || [], i = h = g[1], g = g[2], i) {
                n = d.event.special[i] || {};
                i = (c ? n.delegateType : n.bindType) || i;
                p = x[i] || [];
                l = p.length;
                g = g ? RegExp("(^|\\.)" + g.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (w = 0; w < p.length; w++)if (t = p[w], (e || h === t.origType) && (!j || j.guid === t.guid) && (!g || g.test(t.namespace)) &&
                    (!c || c === t.selector || c === "**" && t.selector))p.splice(w--, 1), t.selector && p.delegateCount--, n.remove && n.remove.call(b, t);
                p.length === 0 && l !== p.length && ((!n.teardown || n.teardown.call(b, g, q.handle) === !1) && d.removeEvent(b, i, q.handle), delete x[i])
            } else for (i in x)d.event.remove(b, i + a[f], j, c, !0);
            d.isEmptyObject(x) && (delete q.handle, d.removeData(b, "events", !0))
        }
    }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (b, k, j, c) {
        if (!j || !(j.nodeType === 3 || j.nodeType === 8)) {
            var f, g, h, l, w, x, n = b.type || b;
            h = [];
            if (!Xa.test(n + d.event.triggered) && (n.indexOf("!") >= 0 && (n = n.slice(0, -1), f = !0), n.indexOf(".") >= 0 && (h = n.split("."), n = h.shift(), h.sort()), j && !d.event.customEvent[n] || d.event.global[n]))if (b = typeof b === "object" ? b[d.expando] ? b : new d.Event(n, b) : new d.Event(n), b.type = n, b.isTrigger = !0, b.exclusive = f, b.namespace = h.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = n.indexOf(":") < 0 ? "on" + n : "", j) {
                b.result = i;
                if (!b.target)b.target = j;
                k = k != null ? d.makeArray(k) : [];
                k.unshift(b);
                l = d.event.special[n] || {};
                if (!(l.trigger && l.trigger.apply(j, k) === !1)) {
                    x = [
                        [j, l.bindType || n]
                    ];
                    if (!c && !l.noBubble && !d.isWindow(j)) {
                        w = l.delegateType || n;
                        f = Xa.test(w + n) ? j : j.parentNode;
                        for (g = j; f; f = f.parentNode)x.push([f, w]), g = f;
                        if (g === (j.ownerDocument || a))x.push([g.defaultView || g.parentWindow || e, w])
                    }
                    for (g = 0; g < x.length && !b.isPropagationStopped(); g++)f = x[g][0], b.type = x[g][1], (w = (d._data(f, "events") || {})[b.type] && d._data(f, "handle")) && w.apply(f, k), (w = h && f[h]) && d.acceptData(f) && w.apply && w.apply(f, k) === !1 && b.preventDefault();
                    b.type = n;
                    if (!c && !b.isDefaultPrevented() && (!l._default || l._default.apply(j.ownerDocument, k) === !1) && !(n === "click" && d.nodeName(j, "a")) && d.acceptData(j))if (h && j[n] && (n !== "focus" && n !== "blur" || b.target.offsetWidth !== 0) && !d.isWindow(j))(g = j[h]) && (j[h] = null), d.event.triggered = n, j[n](), d.event.triggered = i, g && (j[h] = g);
                    return b.result
                }
            } else for (g in j = d.cache, j)j[g].events && j[g].events[n] && d.event.trigger(b, k, j[g].handle.elem, !0)
        }
    }, dispatch: function (b) {
        var b = d.event.fix(b || e.event), a, j, c, f, g, h, l = (d._data(this,
            "events") || {})[b.type] || [], w = l.delegateCount, n = t.call(arguments), x = !b.exclusive && !b.namespace, p = d.event.special[b.type] || {}, q = [];
        n[0] = b;
        b.delegateTarget = this;
        if (!(p.preDispatch && p.preDispatch.call(this, b) === !1)) {
            if (w && !(b.button && b.type === "click"))for (j = b.target; j != this; j = j.parentNode || this)if (j.disabled !== !0 || b.type !== "click") {
                f = {};
                g = [];
                for (a = 0; a < w; a++)c = l[a], h = c.selector, f[h] === i && (f[h] = c.needsContext ? d(h, this).index(j) >= 0 : d.find(h, this, null, [j]).length), f[h] && g.push(c);
                g.length && q.push({elem: j,
                    matches: g})
            }
            l.length > w && q.push({elem: this, matches: l.slice(w)});
            for (a = 0; a < q.length && !b.isPropagationStopped(); a++) {
                f = q[a];
                b.currentTarget = f.elem;
                for (j = 0; j < f.matches.length && !b.isImmediatePropagationStopped(); j++)if (c = f.matches[j], x || !b.namespace && !c.namespace || b.namespace_re && b.namespace_re.test(c.namespace))if (b.data = c.data, b.handleObj = c, c = ((d.event.special[c.origType] || {}).handle || c.handler).apply(f.elem, n), c !== i)b.result = c, c === !1 && (b.preventDefault(), b.stopPropagation())
            }
            p.postDispatch && p.postDispatch.call(this,
                b);
            return b.result
        }
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (b, a) {
        if (b.which == null)b.which = a.charCode != null ? a.charCode : a.keyCode;
        return b
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (b, d) {
        var j, c, e = d.button, f = d.fromElement;
        if (b.pageX == null && d.clientX != null)j = b.target.ownerDocument || a, c = j.documentElement, j = j.body, b.pageX = d.clientX + (c && c.scrollLeft || j && j.scrollLeft || 0) - (c && c.clientLeft || j && j.clientLeft || 0), b.pageY = d.clientY + (c && c.scrollTop || j && j.scrollTop || 0) - (c && c.clientTop || j && j.clientTop || 0);
        if (!b.relatedTarget && f)b.relatedTarget = f === b.target ? d.toElement : f;
        if (!b.which && e !== i)b.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0;
        return b
    }}, fix: function (b) {
        if (b[d.expando])return b;
        var k, j, c = b, e = d.event.fixHooks[b.type] ||
        {}, f = e.props ? this.props.concat(e.props) : this.props, b = d.Event(c);
        for (k = f.length; k;)j = f[--k], b[j] = c[j];
        if (!b.target)b.target = c.srcElement || a;
        if (b.target.nodeType === 3)b.target = b.target.parentNode;
        b.metaKey = !!b.metaKey;
        return e.filter ? e.filter(b, c) : b
    }, special: {load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (b, a, j) {
        if (d.isWindow(this))this.onbeforeunload = j
    }, teardown: function (b, a) {
        if (this.onbeforeunload === a)this.onbeforeunload = null
    }}}, simulate: function (b, a, j, c) {
        b = d.extend(new d.Event, j, {type: b, isSimulated: !0, originalEvent: {}});
        c ? d.event.trigger(b, null, a) : d.event.dispatch.call(a, b);
        b.isDefaultPrevented() && j.preventDefault()
    }};
    d.event.handle = d.event.dispatch;
    d.removeEvent = a.removeEventListener ? function (b, a, d) {
        b.removeEventListener && b.removeEventListener(a, d, !1)
    } : function (b, a, d) {
        a = "on" + a;
        b.detachEvent && (typeof b[a] === "undefined" && (b[a] = null), b.detachEvent(a, d))
    };
    d.Event = function (b, a) {
        if (!(this instanceof d.Event))return new d.Event(b, a);
        b && b.type ? (this.originalEvent =
            b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? z : B) : this.type = b;
        a && d.extend(this, a);
        this.timeStamp = b && b.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = z;
        var b = this.originalEvent;
        if (b)b.preventDefault ? b.preventDefault() : b.returnValue = !1
    }, stopPropagation: function () {
        this.isPropagationStopped = z;
        var b = this.originalEvent;
        if (b)b.stopPropagation && b.stopPropagation(),
            b.cancelBubble = !0
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = z;
        this.stopPropagation()
    }, isDefaultPrevented: B, isPropagationStopped: B, isImmediatePropagationStopped: B};
    d.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (b, a) {
        d.event.special[b] = {delegateType: a, bindType: a, handle: function (b) {
            var c, e = b.relatedTarget, f = b.handleObj;
            if (!e || e !== this && !d.contains(this, e))b.type = f.origType, c = f.handler.apply(this, arguments), b.type = a;
            return c
        }}
    });
    if (!d.support.submitBubbles)d.event.special.submit =
    {setup: function () {
        if (d.nodeName(this, "form"))return!1;
        d.event.add(this, "click._submit keypress._submit", function (b) {
            b = b.target;
            if ((b = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.form : i) && !d._data(b, "_submit_attached"))d.event.add(b, "submit._submit", function (b) {
                b._submit_bubble = !0
            }), d._data(b, "_submit_attached", !0)
        })
    }, postDispatch: function (b) {
        b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && d.event.simulate("submit", this.parentNode, b, !0))
    }, teardown: function () {
        if (d.nodeName(this,
            "form"))return!1;
        d.event.remove(this, "._submit")
    }};
    if (!d.support.changeBubbles)d.event.special.change = {setup: function () {
        if (Ga.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")d.event.add(this, "propertychange._change", function (b) {
                if (b.originalEvent.propertyName === "checked")this._just_changed = !0
            }), d.event.add(this, "click._change", function (b) {
                if (this._just_changed && !b.isTrigger)this._just_changed = !1;
                d.event.simulate("change", this, b, !0)
            });
            return!1
        }
        d.event.add(this, "beforeactivate._change",
            function (b) {
                b = b.target;
                Ga.test(b.nodeName) && !d._data(b, "_change_attached") && (d.event.add(b, "change._change", function (b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && d.event.simulate("change", this.parentNode, b, !0)
                }), d._data(b, "_change_attached", !0))
            })
    }, handle: function (b) {
        var a = b.target;
        if (this !== a || b.isSimulated || b.isTrigger || a.type !== "radio" && a.type !== "checkbox")return b.handleObj.handler.apply(this, arguments)
    }, teardown: function () {
        d.event.remove(this, "._change");
        return!Ga.test(this.nodeName)
    }};
    d.support.focusinBubbles || d.each({focus: "focusin", blur: "focusout"}, function (b, c) {
        var j = 0, e = function (b) {
            d.event.simulate(c, b.target, d.event.fix(b), !0)
        };
        d.event.special[c] = {setup: function () {
            j++ === 0 && a.addEventListener(b, e, !0)
        }, teardown: function () {
            --j === 0 && a.removeEventListener(b, e, !0)
        }}
    });
    d.fn.extend({on: function (b, a, j, c, e) {
        var f, g;
        if (typeof b === "object") {
            typeof a !== "string" && (j = j || a, a = i);
            for (g in b)this.on(g, a, j, b[g], e);
            return this
        }
        j == null && c == null ? (c = a, j = a = i) : c == null && (typeof a === "string" ? (c = j, j =
            i) : (c = j, j = a, a = i));
        if (c === !1)c = B; else if (!c)return this;
        if (e === 1)f = c, c = function (b) {
            d().off(b);
            return f.apply(this, arguments)
        }, c.guid = f.guid || (f.guid = d.guid++);
        return this.each(function () {
            d.event.add(this, b, c, j, a)
        })
    }, one: function (b, a, d, c) {
        return this.on(b, a, d, c, 1)
    }, off: function (b, a, j) {
        var c;
        if (b && b.preventDefault && b.handleObj)return c = b.handleObj, d(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this;
        if (typeof b === "object") {
            for (c in b)this.off(c, a, b[c]);
            return this
        }
        if (a === !1 || typeof a === "function")j = a, a = i;
        j === !1 && (j = B);
        return this.each(function () {
            d.event.remove(this, b, j, a)
        })
    }, bind: function (b, a, d) {
        return this.on(b, null, a, d)
    }, unbind: function (b, a) {
        return this.off(b, null, a)
    }, live: function (b, a, j) {
        d(this.context).on(b, this.selector, a, j);
        return this
    }, die: function (b, a) {
        d(this.context).off(b, this.selector || "**", a);
        return this
    }, delegate: function (b, a, d, c) {
        return this.on(a, b, d, c)
    }, undelegate: function (b, a, d) {
        return arguments.length === 1 ? this.off(b, "**") : this.off(a,
            b || "**", d)
    }, trigger: function (b, a) {
        return this.each(function () {
            d.event.trigger(b, a, this)
        })
    }, triggerHandler: function (b, a) {
        if (this[0])return d.event.trigger(b, a, this[0], !0)
    }, toggle: function (b) {
        var a = arguments, j = b.guid || d.guid++, c = 0, e = function (j) {
            var e = (d._data(this, "lastToggle" + b.guid) || 0) % c;
            d._data(this, "lastToggle" + b.guid, e + 1);
            j.preventDefault();
            return a[e].apply(this, arguments) || !1
        };
        for (e.guid = j; c < a.length;)a[c++].guid = j;
        return this.click(e)
    }, hover: function (b, a) {
        return this.mouseenter(b).mouseleave(a ||
            b)
    }});
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (b, a) {
        d.fn[a] = function (b, d) {
            d == null && (d = b, b = null);
            return arguments.length > 0 ? this.on(a, null, b, d) : this.trigger(a)
        };
        if (Ab.test(a))d.event.fixHooks[a] = d.event.keyHooks;
        if (Bb.test(a))d.event.fixHooks[a] = d.event.mouseHooks
    });
    (function (b, a) {
        function j(b, a, d, j) {
            var d = d || [], a =
                a || W, c, e, k, f, m = a.nodeType;
            if (!b || typeof b !== "string")return d;
            if (m !== 1 && m !== 9)return[];
            k = H(a);
            if (!k && !j && (c = Ea.exec(b)))if (f = c[1])if (m === 9)if ((e = a.getElementById(f)) && e.parentNode) {
                if (e.id === f)return d.push(e), d
            } else return d; else {
                if (a.ownerDocument && (e = a.ownerDocument.getElementById(f)) && U(a, e) && e.id === f)return d.push(e), d
            } else if (c[2])return ea.apply(d, K.call(a.getElementsByTagName(b), 0)), d; else if ((f = c[3]) && T && a.getElementsByClassName)return ea.apply(d, K.call(a.getElementsByClassName(f), 0)), d;
            return t(b.replace(J, "$1"), a, d, j, k)
        }

        function c(b) {
            return function (a) {
                return a.nodeName.toLowerCase() === "input" && a.type === b
            }
        }

        function e(b) {
            return function (a) {
                var d = a.nodeName.toLowerCase();
                return(d === "input" || d === "button") && a.type === b
            }
        }

        function f(b) {
            return Z(function (a) {
                a = +a;
                return Z(function (d, j) {
                    for (var c, e = b([], d.length, a), k = e.length; k--;)if (d[c = e[k]])d[c] = !(j[c] = d[c])
                })
            })
        }

        function g(b, a, d) {
            if (b === a)return d;
            for (b = b.nextSibling; b;) {
                if (b === a)return-1;
                b = b.nextSibling
            }
            return 1
        }

        function i(b, a) {
            var d,
                c, e, k, f, m, g;
            if (f = ca[v][b + " "])return a ? 0 : f.slice(0);
            f = b;
            m = [];
            for (g = o.preFilter; f;) {
                if (!d || (c = L.exec(f)))c && (f = f.slice(c[0].length) || f), m.push(e = []);
                d = !1;
                if (c = S.exec(f))e.push(d = new C(c.shift())), f = f.slice(d.length), d.type = c[0].replace(J, " ");
                for (k in o.filter)if ((c = aa[k].exec(f)) && (!g[k] || (c = g[k](c))))e.push(d = new C(c.shift())), f = f.slice(d.length), d.type = k, d.matches = c;
                if (!d)break
            }
            return a ? f.length : f ? j.error(b) : ca(b, m).slice(0)
        }

        function h(b, a, d) {
            var c = a.dir, j = d && a.dir === "parentNode", e = ja++;
            return a.first ?
                function (a, d, e) {
                    for (; a = a[c];)if (j || a.nodeType === 1)return b(a, d, e)
                } : function (a, d, k) {
                if (k)for (; a = a[c];) {
                    if ((j || a.nodeType === 1) && b(a, d, k))return a
                } else for (var f, m = ga + " " + e + " ", g = m + $; a = a[c];)if (j || a.nodeType === 1)if ((f = a[v]) === g)return a.sizset; else if (typeof f === "string" && f.indexOf(m) === 0) {
                    if (a.sizset)return a
                } else {
                    a[v] = g;
                    if (b(a, d, k))return a.sizset = !0, a;
                    a.sizset = !1
                }
            }
        }

        function l(b) {
            return b.length > 1 ? function (a, d, c) {
                for (var j = b.length; j--;)if (!b[j](a, d, c))return!1;
                return!0
            } : b[0]
        }

        function w(b, a, d, c, j) {
            for (var e,
                     k = [], f = 0, m = b.length, g = a != null; f < m; f++)if (e = b[f])if (!d || d(e, c, j))k.push(e), g && a.push(f);
            return k
        }

        function n(b, a, d, c, e, k) {
            c && !c[v] && (c = n(c));
            e && !e[v] && (e = n(e, k));
            return Z(function (k, f, m, g) {
                var i, h, l = [], n = [], x = f.length, F;
                if (!(F = k)) {
                    F = a || "*";
                    for (var E = m.nodeType ? [m] : m, p = [], t = 0, ma = E.length; t < ma; t++)j(F, E[t], p);
                    F = p
                }
                F = b && (k || !a) ? w(F, l, b, m, g) : F;
                E = d ? e || (k ? b : x || c) ? [] : f : F;
                d && d(F, E, m, g);
                if (c) {
                    i = w(E, n);
                    c(i, [], m, g);
                    for (m = i.length; m--;)if (h = i[m])E[n[m]] = !(F[n[m]] = h)
                }
                if (k) {
                    if (e || b) {
                        if (e) {
                            i = [];
                            for (m = E.length; m--;)if (h =
                                E[m])i.push(F[m] = h);
                            e(null, E = [], i, g)
                        }
                        for (m = E.length; m--;)if ((h = E[m]) && (i = e ? ua.call(k, h) : l[m]) > -1)k[i] = !(f[i] = h)
                    }
                } else E = w(E === f ? E.splice(x, E.length) : E), e ? e(null, f, E, g) : ea.apply(f, E)
            })
        }

        function x(b) {
            var a, d, c, j = b.length, e = o.relative[b[0].type];
            d = e || o.relative[" "];
            for (var k = e ? 1 : 0, f = h(function (b) {
                return b === a
            }, d, !0), m = h(function (b) {
                return ua.call(a, b) > -1
            }, d, !0), g = [function (b, d, c) {
                return!e && (c || d !== A) || ((a = d).nodeType ? f(b, d, c) : m(b, d, c))
            }]; k < j; k++)if (d = o.relative[b[k].type])g = [h(l(g), d)]; else {
                d = o.filter[b[k].type].apply(null,
                    b[k].matches);
                if (d[v]) {
                    for (c = ++k; c < j; c++)if (o.relative[b[c].type])break;
                    return n(k > 1 && l(g), k > 1 && b.slice(0, k - 1).join("").replace(J, "$1"), d, k < c && x(b.slice(k, c)), c < j && x(b = b.slice(c)), c < j && b.join(""))
                }
                g.push(d)
            }
            return l(g)
        }

        function p(b, a) {
            var d = a.length > 0, c = b.length > 0, e = function (k, f, m, g, i) {
                var h, l, n = [], F = 0, x = "0", E = k && [], p = i != null, t = A, ma = k || c && o.find.TAG("*", i && f.parentNode || f), q = ga += t == null ? 1 : Math.E;
                if (p)A = f !== W && f, $ = e.el;
                for (; (i = ma[x]) != null; x++) {
                    if (c && i) {
                        for (h = 0; l = b[h]; h++)if (l(i, f, m)) {
                            g.push(i);
                            break
                        }
                        p &&
                        (ga = q, $ = ++e.el)
                    }
                    d && ((i = !l && i) && F--, k && E.push(i))
                }
                F += x;
                if (d && x !== F) {
                    for (h = 0; l = a[h]; h++)l(E, n, f, m);
                    if (k) {
                        if (F > 0)for (; x--;)!E[x] && !n[x] && (n[x] = B.call(g));
                        n = w(n)
                    }
                    ea.apply(g, n);
                    p && !k && n.length > 0 && F + a.length > 1 && j.uniqueSort(g)
                }
                p && (ga = q, A = t);
                return E
            };
            e.el = 0;
            return d ? Z(e) : e
        }

        function t(b, a, d, c, j) {
            var e, k, f, m, g = i(b);
            if (!c && g.length === 1) {
                k = g[0] = g[0].slice(0);
                if (k.length > 2 && (f = k[0]).type === "ID" && a.nodeType === 9 && !j && o.relative[k[1].type]) {
                    a = o.find.ID(f.matches[0].replace(R, ""), a, j)[0];
                    if (!a)return d;
                    b = b.slice(k.shift().length)
                }
                for (e =
                         aa.POS.test(b) ? -1 : k.length - 1; e >= 0; e--) {
                    f = k[e];
                    if (o.relative[m = f.type])break;
                    if (m = o.find[m])if (c = m(f.matches[0].replace(R, ""), ba.test(k[0].type) && a.parentNode || a, j)) {
                        k.splice(e, 1);
                        b = c.length && k.join("");
                        if (!b)return ea.apply(d, K.call(c, 0)), d;
                        break
                    }
                }
            }
            D(b, g)(c, a, j, d, ba.test(b));
            return d
        }

        function q() {
        }

        var $, z, o, r, H, U, D, s, X, A, u = !0, v = ("sizcache" + Math.random()).replace(".", ""), C = String, W = b.document, y = W.documentElement, ga = 0, ja = 0, B = [].pop, ea = [].push, K = [].slice, ua = [].indexOf || function (b) {
            for (var a = 0, d = this.length; a <
                d; a++)if (this[a] === b)return a;
            return-1
        }, Z = function (b, a) {
            b[v] = a == null || a;
            return b
        }, I = function () {
            var b = {}, a = [];
            return Z(function (d, c) {
                a.push(d) > o.cacheLength && delete b[a.shift()];
                return b[d + " "] = c
            }, b)
        }, Q = I(), ca = I(), za = I(), I = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", P = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
            I + ")|[^:]|\\\\.)*|.*))\\)|)", J = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), L = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, S = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, M = RegExp(P), Ea = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, ba = /[\x20\t\r\n\f]*[+~]/, da = /h\d/i, O = /input|select|textarea|button/i, R = /\\(?!\\)/g, aa = {ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w",
            "w*") + ")"), ATTR: RegExp("^" + I), PSEUDO: RegExp("^" + P), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")}, N = function (b) {
            var a = W.createElement("div");
            try {
                return b(a)
            } catch (d) {
                return!1
            } finally {
            }
        }, I = N(function (b) {
            b.appendChild(W.createComment(""));
            return!b.getElementsByTagName("*").length
        }), V = N(function (b) {
            b.innerHTML = "<a href='#'></a>";
            return b.firstChild && typeof b.firstChild.getAttribute !== "undefined" && b.firstChild.getAttribute("href") === "#"
        }), Fa = N(function (b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return b !== "boolean" && b !== "string"
        }), T = N(function (b) {
            b.innerHTML =
                "<div class='hidden e'></div><div class='hidden'></div>";
            if (!b.getElementsByClassName || !b.getElementsByClassName("e").length)return!1;
            b.lastChild.className = "e";
            return b.getElementsByClassName("e").length === 2
        }), ra = N(function (b) {
            b.id = v + 0;
            b.innerHTML = "<a name='" + v + "'></a><div name='" + v + "'></div>";
            y.insertBefore(b, y.firstChild);
            var a = W.getElementsByName && W.getElementsByName(v).length === 2 + W.getElementsByName(v + 0).length;
            z = !W.getElementById(v);
            y.removeChild(b);
            return a
        });
        try {
            K.call(y.childNodes, 0)
        } catch (Y) {
            K =
                function (b) {
                    for (var a, d = []; a = this[b]; b++)d.push(a);
                    return d
                }
        }
        j.matches = function (b, a) {
            return j(b, null, null, a)
        };
        j.matchesSelector = function (b, a) {
            return j(a, null, null, [b]).length > 0
        };
        r = j.getText = function (b) {
            var a, d = "", c = 0;
            if (a = b.nodeType)if (a === 1 || a === 9 || a === 11)if (typeof b.textContent === "string")return b.textContent; else for (b = b.firstChild; b; b = b.nextSibling)d += r(b); else {
                if (a === 3 || a === 4)return b.nodeValue
            } else for (; a = b[c]; c++)d += r(a);
            return d
        };
        H = j.isXML = function (b) {
            return(b = b && (b.ownerDocument || b).documentElement) ?
                b.nodeName !== "HTML" : !1
        };
        U = j.contains = y.contains ? function (b, a) {
            var d = b.nodeType === 9 ? b.documentElement : b, c = a && a.parentNode;
            return b === c || !(!c || !(c.nodeType === 1 && d.contains && d.contains(c)))
        } : y.compareDocumentPosition ? function (b, a) {
            return a && !!(b.compareDocumentPosition(a) & 16)
        } : function (b, a) {
            for (; a = a.parentNode;)if (a === b)return!0;
            return!1
        };
        j.attr = function (b, a) {
            var d, c = H(b);
            c || (a = a.toLowerCase());
            if (d = o.attrHandle[a])return d(b);
            if (c || Fa)return b.getAttribute(a);
            return(d = b.getAttributeNode(a)) ? typeof b[a] ===
                "boolean" ? b[a] ? a : null : d.specified ? d.value : null : null
        };
        o = j.selectors = {cacheLength: 50, createPseudo: Z, match: aa, attrHandle: V ? {} : {href: function (b) {
            return b.getAttribute("href", 2)
        }, type: function (b) {
            return b.getAttribute("type")
        }}, find: {ID: z ? function (b, a, d) {
            if (typeof a.getElementById !== "undefined" && !d)return(b = a.getElementById(b)) && b.parentNode ? [b] : []
        } : function (b, d, c) {
            if (typeof d.getElementById !== "undefined" && !c)return(d = d.getElementById(b)) ? d.id === b || typeof d.getAttributeNode !== "undefined" && d.getAttributeNode("id").value ===
                b ? [d] : a : []
        }, TAG: I ? function (b, a) {
            if (typeof a.getElementsByTagName !== "undefined")return a.getElementsByTagName(b)
        } : function (b, a) {
            var d = a.getElementsByTagName(b);
            if (b === "*") {
                for (var c, j = [], k = 0; c = d[k]; k++)c.nodeType === 1 && j.push(c);
                return j
            }
            return d
        }, NAME: ra && function (b, a) {
            if (typeof a.getElementsByName !== "undefined")return a.getElementsByName(name)
        }, CLASS: T && function (b, a, d) {
            if (typeof a.getElementsByClassName !== "undefined" && !d)return a.getElementsByClassName(b)
        }}, relative: {">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (b) {
            b[1] = b[1].replace(R, "");
            b[3] = (b[4] || b[5] || "").replace(R, "");
            b[2] === "~=" && (b[3] = " " + b[3] + " ");
            return b.slice(0, 4)
        }, CHILD: function (b) {
            b[1] = b[1].toLowerCase();
            b[1] === "nth" ? (b[2] || j.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * (b[2] === "even" || b[2] === "odd")), b[4] = +(b[6] + b[7] || b[2] === "odd")) : b[2] && j.error(b[0]);
            return b
        }, PSEUDO: function (b) {
            var a, d;
            if (aa.CHILD.test(b[0]))return null;
            if (b[3])b[2] =
                b[3]; else if (a = b[4]) {
                if (M.test(a) && (d = i(a, !0)) && (d = a.indexOf(")", a.length - d) - a.length))a = a.slice(0, d), b[0] = b[0].slice(0, d);
                b[2] = a
            }
            return b.slice(0, 3)
        }}, filter: {ID: z ? function (b) {
            b = b.replace(R, "");
            return function (a) {
                return a.getAttribute("id") === b
            }
        } : function (b) {
            b = b.replace(R, "");
            return function (a) {
                return(a = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id")) && a.value === b
            }
        }, TAG: function (b) {
            if (b === "*")return function () {
                return!0
            };
            b = b.replace(R, "").toLowerCase();
            return function (a) {
                return a.nodeName &&
                    a.nodeName.toLowerCase() === b
            }
        }, CLASS: function (b) {
            var a = Q[v][b + " "];
            return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && Q(b, function (b) {
                return a.test(b.className || typeof b.getAttribute !== "undefined" && b.getAttribute("class") || "")
            })
        }, ATTR: function (b, a, d) {
            return function (c) {
                c = j.attr(c, b);
                if (c == null)return a === "!=";
                if (!a)return!0;
                c += "";
                return a === "=" ? c === d : a === "!=" ? c !== d : a === "^=" ? d && c.indexOf(d) === 0 : a === "*=" ? d && c.indexOf(d) > -1 : a === "$=" ? d && c.substr(c.length - d.length) === d : a === "~=" ?
                    (" " + c + " ").indexOf(d) > -1 : a === "|=" ? c === d || c.substr(0, d.length + 1) === d + "-" : !1
            }
        }, CHILD: function (b, a, d, c) {
            if (b === "nth")return function (b) {
                var a, j;
                a = b.parentNode;
                if (d === 1 && c === 0)return!0;
                if (a) {
                    j = 0;
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType === 1 && (j++, b === a))break
                }
                j -= c;
                return j === d || j % d === 0 && j / d >= 0
            };
            return function (a) {
                var d = a;
                switch (b) {
                    case "only":
                    case "first":
                        for (; d = d.previousSibling;)if (d.nodeType === 1)return!1;
                        if (b === "first")return!0;
                        d = a;
                    case "last":
                        for (; d = d.nextSibling;)if (d.nodeType === 1)return!1;
                        return!0
                }
            }
        }, PSEUDO: function (b, a) {
            var d, c = o.pseudos[b] || o.setFilters[b.toLowerCase()] || j.error("unsupported pseudo: " + b);
            if (c[v])return c(a);
            if (c.length > 1)return d = [b, b, "", a], o.setFilters.hasOwnProperty(b.toLowerCase()) ? Z(function (b, d) {
                for (var j, k = c(b, a), e = k.length; e--;)j = ua.call(b, k[e]), b[j] = !(d[j] = k[e])
            }) : function (b) {
                return c(b, 0, d)
            };
            return c
        }}, pseudos: {not: Z(function (b) {
            var a = [], d = [], c = D(b.replace(J, "$1"));
            return c[v] ? Z(function (b, a, d, j) {
                for (var j = c(b, null, j, []), k = b.length; k--;)if (d = j[k])b[k] = !(a[k] =
                    d)
            }) : function (b, j, k) {
                a[0] = b;
                c(a, null, k, d);
                return!d.pop()
            }
        }), has: Z(function (b) {
            return function (a) {
                return j(b, a).length > 0
            }
        }), contains: Z(function (b) {
            return function (a) {
                return(a.textContent || a.innerText || r(a)).indexOf(b) > -1
            }
        }), enabled: function (b) {
            return b.disabled === !1
        }, disabled: function (b) {
            return b.disabled === !0
        }, checked: function (b) {
            var a = b.nodeName.toLowerCase();
            return a === "input" && !!b.checked || a === "option" && !!b.selected
        }, selected: function (b) {
            return b.selected === !0
        }, parent: function (b) {
            return!o.pseudos.empty(b)
        },
            empty: function (b) {
                for (var a, b = b.firstChild; b;) {
                    if (b.nodeName > "@" || (a = b.nodeType) === 3 || a === 4)return!1;
                    b = b.nextSibling
                }
                return!0
            }, header: function (b) {
                return da.test(b.nodeName)
            }, text: function (b) {
                var a, d;
                return b.nodeName.toLowerCase() === "input" && (a = b.type) === "text" && ((d = b.getAttribute("type")) == null || d.toLowerCase() === a)
            }, radio: c("radio"), checkbox: c("checkbox"), file: c("file"), password: c("password"), image: c("image"), submit: e("submit"), reset: e("reset"), button: function (b) {
                var a = b.nodeName.toLowerCase();
                return a === "input" && b.type === "button" || a === "button"
            }, input: function (b) {
                return O.test(b.nodeName)
            }, focus: function (b) {
                var a = b.ownerDocument;
                return b === a.activeElement && (!a.hasFocus || a.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            }, active: function (b) {
                return b === b.ownerDocument.activeElement
            }, first: f(function () {
                return[0]
            }), last: f(function (b, a) {
                return[a - 1]
            }), eq: f(function (b, a, d) {
                return[d < 0 ? d + a : d]
            }), even: f(function (b, a) {
                for (var d = 0; d < a; d += 2)b.push(d);
                return b
            }), odd: f(function (b, a) {
                for (var d = 1; d < a; d += 2)b.push(d);
                return b
            }), lt: f(function (b, a, d) {
                for (a = d < 0 ? d + a : d; --a >= 0;)b.push(a);
                return b
            }), gt: f(function (b, a, d) {
                for (d = d < 0 ? d + a : d; ++d < a;)b.push(d);
                return b
            })}};
        s = y.compareDocumentPosition ? function (b, a) {
            if (b === a)return X = !0, 0;
            return(!b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(a) & 4) ? -1 : 1
        } : function (b, a) {
            if (b === a)return X = !0, 0; else if (b.sourceIndex && a.sourceIndex)return b.sourceIndex - a.sourceIndex;
            var d, c, j = [], k = [];
            d = b.parentNode;
            c = a.parentNode;
            var e = d;
            if (d ===
                c)return g(b, a); else if (d) {
                if (!c)return 1
            } else return-1;
            for (; e;)j.unshift(e), e = e.parentNode;
            for (e = c; e;)k.unshift(e), e = e.parentNode;
            d = j.length;
            c = k.length;
            for (e = 0; e < d && e < c; e++)if (j[e] !== k[e])return g(j[e], k[e]);
            return e === d ? g(b, k[e], -1) : g(j[e], a, 1)
        };
        [0, 0].sort(s);
        u = !X;
        j.uniqueSort = function (b) {
            var a, d = [], c = 1, j = 0;
            X = u;
            b.sort(s);
            if (X) {
                for (; a = b[c]; c++)a === b[c - 1] && (j = d.push(c));
                for (; j--;)b.splice(d[j], 1)
            }
            return b
        };
        j.error = function (b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        D = j.compile =
            function (b, a) {
                var d, c = [], j = [], e = za[v][b + " "];
                if (!e) {
                    a || (a = i(b));
                    for (d = a.length; d--;)e = x(a[d]), e[v] ? c.push(e) : j.push(e);
                    e = za(b, p(j, c))
                }
                return e
            };
        W.querySelectorAll && function () {
            var b, a = t, d = /'|\\/g, c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [":focus"], k = [":active"], f = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            N(function (b) {
                b.innerHTML = "<select><option selected=''></option></select>";
                b.querySelectorAll("[selected]").length || e.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                b.querySelectorAll(":checked").length || e.push(":checked")
            });
            N(function (b) {
                b.innerHTML = "<p test=''></p>";
                b.querySelectorAll("[test^='']").length && e.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
                b.innerHTML = "<input type='hidden'/>";
                b.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            });
            e = RegExp(e.join("|"));
            t = function (b, c, j, k, f) {
                if (!k && !f && !e.test(b)) {
                    var m, g, h = !0, l = v;
                    g = c;
                    m = c.nodeType === 9 && b;
                    if (c.nodeType === 1 && c.nodeName.toLowerCase() !== "object") {
                        m = i(b);
                        (h = c.getAttribute("id")) ? l = h.replace(d,
                            "\\$&") : c.setAttribute("id", l);
                        l = "[id='" + l + "'] ";
                        for (g = m.length; g--;)m[g] = l + m[g].join("");
                        g = ba.test(b) && c.parentNode || c;
                        m = m.join(",")
                    }
                    if (m)try {
                        return ea.apply(j, K.call(g.querySelectorAll(m), 0)), j
                    } catch (w) {
                    } finally {
                        h || c.removeAttribute("id")
                    }
                }
                return a(b, c, j, k, f)
            };
            if (f)N(function (a) {
                b = f.call(a, "div");
                try {
                    f.call(a, "[test!='']:sizzle"), k.push("!=", P)
                } catch (d) {
                }
            }), k = RegExp(k.join("|")), j.matchesSelector = function (a, d) {
                d = d.replace(c, "='$1']");
                if (!H(a) && !k.test(d) && !e.test(d))try {
                    var m = f.call(a, d);
                    if (m ||
                        b || a.document && a.document.nodeType !== 11)return m
                } catch (g) {
                }
                return j(d, null, null, [a]).length > 0
            }
        }();
        o.pseudos.nth = o.pseudos.eq;
        o.filters = q.prototype = o.pseudos;
        o.setFilters = new q;
        j.attr = d.attr;
        d.find = j;
        d.expr = j.selectors;
        d.expr[":"] = d.expr.pseudos;
        d.unique = j.uniqueSort;
        d.text = j.getText;
        d.isXMLDoc = j.isXML;
        d.contains = j.contains
    })(e);
    var Cb = /Until$/, Db = /^(?:parents|prev(?:Until|All))/, pb = /^.[^:#\[\.,]*$/, Za = d.expr.match.needsContext, Eb = {children: !0, contents: !0, next: !0, prev: !0};
    d.fn.extend({find: function (b) {
        var a,
            c, e, f, g, i, h = this;
        if (typeof b !== "string")return d(b).filter(function () {
            a = 0;
            for (c = h.length; a < c; a++)if (d.contains(h[a], this))return!0
        });
        i = this.pushStack("", "find", b);
        a = 0;
        for (c = this.length; a < c; a++)if (e = i.length, d.find(b, this[a], i), a > 0)for (f = e; f < i.length; f++)for (g = 0; g < e; g++)if (i[g] === i[f]) {
            i.splice(f--, 1);
            break
        }
        return i
    }, has: function (b) {
        var a, c = d(b, this), e = c.length;
        return this.filter(function () {
            for (a = 0; a < e; a++)if (d.contains(this, c[a]))return!0
        })
    }, not: function (b) {
        return this.pushStack(C(this, b, !1), "not",
            b)
    }, filter: function (b) {
        return this.pushStack(C(this, b, !0), "filter", b)
    }, is: function (b) {
        return!!b && (typeof b === "string" ? Za.test(b) ? d(b, this.context).index(this[0]) >= 0 : d.filter(b, this).length > 0 : this.filter(b).length > 0)
    }, closest: function (b, a) {
        for (var c, e = 0, f = this.length, g = [], i = Za.test(b) || typeof b !== "string" ? d(b, a || this.context) : 0; e < f; e++)for (c = this[e]; c && c.ownerDocument && c !== a && c.nodeType !== 11;) {
            if (i ? i.index(c) > -1 : d.find.matchesSelector(c, b)) {
                g.push(c);
                break
            }
            c = c.parentNode
        }
        g = g.length > 1 ? d.unique(g) : g;
        return this.pushStack(g, "closest", b)
    }, index: function (b) {
        if (!b)return this[0] && this[0].parentNode ? this.prevAll().length : -1;
        if (typeof b === "string")return d.inArray(this[0], d(b));
        return d.inArray(b.jquery ? b[0] : b, this)
    }, add: function (b, a) {
        var c = typeof b === "string" ? d(b, a) : d.makeArray(b && b.nodeType ? [b] : b), e = d.merge(this.get(), c);
        return this.pushStack(A(c[0]) || A(e[0]) ? e : d.unique(e))
    }, addBack: function (b) {
        return this.add(b == null ? this.prevObject : this.prevObject.filter(b))
    }});
    d.fn.andSelf = d.fn.addBack;
    d.each({parent: function (b) {
        return(b =
            b.parentNode) && b.nodeType !== 11 ? b : null
    }, parents: function (b) {
        return d.dir(b, "parentNode")
    }, parentsUntil: function (b, a, c) {
        return d.dir(b, "parentNode", c)
    }, next: function (b) {
        return s(b, "nextSibling")
    }, prev: function (b) {
        return s(b, "previousSibling")
    }, nextAll: function (b) {
        return d.dir(b, "nextSibling")
    }, prevAll: function (b) {
        return d.dir(b, "previousSibling")
    }, nextUntil: function (b, a, c) {
        return d.dir(b, "nextSibling", c)
    }, prevUntil: function (b, a, c) {
        return d.dir(b, "previousSibling", c)
    }, siblings: function (b) {
        return d.sibling((b.parentNode ||
        {}).firstChild, b)
    }, children: function (b) {
        return d.sibling(b.firstChild)
    }, contents: function (b) {
        return d.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : d.merge([], b.childNodes)
    }}, function (b, a) {
        d.fn[b] = function (c, e) {
            var f = d.map(this, a, c);
            Cb.test(b) || (e = c);
            e && typeof e === "string" && (f = d.filter(e, f));
            f = this.length > 1 && !Eb[b] ? d.unique(f) : f;
            this.length > 1 && Db.test(b) && (f = f.reverse());
            return this.pushStack(f, b, t.call(arguments).join(","))
        }
    });
    d.extend({filter: function (b, a, c) {
        c && (b = ":not(" + b + ")");
        return a.length === 1 ? d.find.matchesSelector(a[0], b) ? [a[0]] : [] : d.find.matches(b, a)
    }, dir: function (b, a, c) {
        for (var e = [], b = b[a]; b && b.nodeType !== 9 && (c === i || b.nodeType !== 1 || !d(b).is(c));)b.nodeType === 1 && e.push(b), b = b[a];
        return e
    }, sibling: function (b, a) {
        for (var d = []; b; b = b.nextSibling)b.nodeType === 1 && b !== a && d.push(b);
        return d
    }});
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Fb = / jQuery\d+="(?:null|\d+)"/g,
        Ha = /^\s+/, $a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ab = /<([\w:]+)/, Gb = /<tbody/i, Hb = /<|&#?\w+;/, Ib = /<(?:script|style|link)/i, Jb = /<(?:script|object|embed|option|style)/i, Ia = RegExp("<(?:" + Na + ")[\\s/>]", "i"), Oa = /^(?:checkbox|radio)$/, bb = /checked\s*(?:[^=]|=\s*.checked.)/i, Kb = /\/(java|ecma)script/i, Lb = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Y = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, cb = v(a), Ja = cb.appendChild(a.createElement("div"));
    Y.optgroup = Y.option;
    Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead;
    Y.th = Y.td;
    if (!d.support.htmlSerialize)Y._default = [1, "X<div>", "</div>"];
    d.fn.extend({text: function (b) {
        return d.access(this, function (b) {
            return b === i ? d.text(this) : this.empty().append((this[0] &&
                this[0].ownerDocument || a).createTextNode(b))
        }, null, b, arguments.length)
    }, wrapAll: function (b) {
        if (d.isFunction(b))return this.each(function (a) {
            d(this).wrapAll(b.call(this, a))
        });
        if (this[0]) {
            var a = d(b, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && a.insertBefore(this[0]);
            a.map(function () {
                for (var b = this; b.firstChild && b.firstChild.nodeType === 1;)b = b.firstChild;
                return b
            }).append(this)
        }
        return this
    }, wrapInner: function (b) {
        if (d.isFunction(b))return this.each(function (a) {
            d(this).wrapInner(b.call(this,
                a))
        });
        return this.each(function () {
            var a = d(this), c = a.contents();
            c.length ? c.wrapAll(b) : a.append(b)
        })
    }, wrap: function (b) {
        var a = d.isFunction(b);
        return this.each(function (c) {
            d(this).wrapAll(a ? b.call(this, c) : b)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (b) {
            (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(b)
        })
    }, prepend: function () {
        return this.domManip(arguments,
            !0, function (b) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(b, this.firstChild)
            })
    }, before: function () {
        if (!A(this[0]))return this.domManip(arguments, !1, function (b) {
            this.parentNode.insertBefore(b, this)
        });
        if (arguments.length) {
            var b = d.clean(arguments);
            return this.pushStack(d.merge(b, this), "before", this.selector)
        }
    }, after: function () {
        if (!A(this[0]))return this.domManip(arguments, !1, function (b) {
            this.parentNode.insertBefore(b, this.nextSibling)
        });
        if (arguments.length) {
            var b = d.clean(arguments);
            return this.pushStack(d.merge(this,
                b), "after", this.selector)
        }
    }, remove: function (b, a) {
        for (var c, e = 0; (c = this[e]) != null; e++)if (!b || d.filter(b, [c]).length)!a && c.nodeType === 1 && (d.cleanData(c.getElementsByTagName("*")), d.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
        return this
    }, empty: function () {
        for (var b, a = 0; (b = this[a]) != null; a++)for (b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*")); b.firstChild;)b.removeChild(b.firstChild);
        return this
    }, clone: function (b, a) {
        b = b == null ? !1 : b;
        a = a == null ? b : a;
        return this.map(function () {
            return d.clone(this,
                b, a)
        })
    }, html: function (b) {
        return d.access(this, function (b) {
            var a = this[0] || {}, c = 0, e = this.length;
            if (b === i)return a.nodeType === 1 ? a.innerHTML.replace(Fb, "") : i;
            if (typeof b === "string" && !Ib.test(b) && (d.support.htmlSerialize || !Ia.test(b)) && (d.support.leadingWhitespace || !Ha.test(b)) && !Y[(ab.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace($a, "<$1></$2>");
                try {
                    for (; c < e; c++)if (a = this[c] || {}, a.nodeType === 1)d.cleanData(a.getElementsByTagName("*")), a.innerHTML = b;
                    a = 0
                } catch (f) {
                }
            }
            a && this.empty().append(b)
        }, null, b, arguments.length)
    },
        replaceWith: function (b) {
            if (!A(this[0])) {
                if (d.isFunction(b))return this.each(function (a) {
                    var c = d(this), e = c.html();
                    c.replaceWith(b.call(this, a, e))
                });
                typeof b !== "string" && (b = d(b).detach());
                return this.each(function () {
                    var a = this.nextSibling, c = this.parentNode;
                    d(this).remove();
                    a ? d(a).before(b) : d(c).append(b)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(b) ? b() : b), "replaceWith", b) : this
        }, detach: function (b) {
            return this.remove(b, !0)
        }, domManip: function (b, a, c) {
            var b = [].concat.apply([], b), e, f, g, h = 0, l = b[0],
                w = [], n = this.length;
            if (!d.support.checkClone && n > 1 && typeof l === "string" && bb.test(l))return this.each(function () {
                d(this).domManip(b, a, c)
            });
            if (d.isFunction(l))return this.each(function (e) {
                var f = d(this);
                b[0] = l.call(this, e, a ? f.html() : i);
                f.domManip(b, a, c)
            });
            if (this[0]) {
                e = d.buildFragment(b, this, w);
                g = e.fragment;
                f = g.firstChild;
                g.childNodes.length === 1 && (g = f);
                if (f) {
                    a = a && d.nodeName(f, "tr");
                    for (e = e.cacheable || n - 1; h < n; h++)c.call(a && d.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) :
                        this[h], h === e ? g : d.clone(g, !0, !0))
                }
                g = f = null;
                w.length && d.each(w, function (b, a) {
                    a.src ? d.ajax ? d.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : d.error("no ajax") : d.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Lb, ""));
                    a.parentNode && a.parentNode.removeChild(a)
                })
            }
            return this
        }});
    d.buildFragment = function (b, c, e) {
        var f, g, h, l = b[0], c = c || a, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c;
        if (b.length === 1 && typeof l === "string" && l.length < 512 && c === a && l.charAt(0) === "<" && !Jb.test(l) &&
            (d.support.checkClone || !bb.test(l)) && (d.support.html5Clone || !Ia.test(l)))g = !0, f = d.fragments[l], h = f !== i;
        f || (f = c.createDocumentFragment(), d.clean(b, c, f, e), g && (d.fragments[l] = h && f));
        return{fragment: f, cacheable: g}
    };
    d.fragments = {};
    d.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (b, a) {
        d.fn[b] = function (c) {
            var e, f = 0, g = [], c = d(c), i = c.length;
            e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) &&
                i === 1)return c[a](this[0]), this; else {
                for (; f < i; f++)e = (f > 0 ? this.clone(!0) : this).get(), d(c[f])[a](e), g = g.concat(e);
                return this.pushStack(g, b, c.selector)
            }
        }
    });
    d.extend({clone: function (b, a, c) {
        var e, f, g, i;
        d.support.html5Clone || d.isXMLDoc(b) || !Ia.test("<" + b.nodeName + ">") ? i = b.cloneNode(!0) : (Ja.innerHTML = b.outerHTML, Ja.removeChild(i = Ja.firstChild));
        if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !d.isXMLDoc(b)) {
            K(b, i);
            e = r(b);
            f = r(i);
            for (g = 0; e[g]; ++g)f[g] && K(e[g], f[g])
        }
        if (a &&
            (D(b, i), c)) {
            e = r(b);
            f = r(i);
            for (g = 0; e[g]; ++g)D(e[g], f[g])
        }
        return i
    }, clean: function (b, c, e, f) {
        var g, i, h, l, w, n, x = c === a && cb, p = [];
        if (!c || typeof c.createDocumentFragment === "undefined")c = a;
        for (g = 0; (h = b[g]) != null; g++)if (typeof h === "number" && (h += ""), h) {
            if (typeof h === "string")if (Hb.test(h)) {
                x = x || v(c);
                n = c.createElement("div");
                x.appendChild(n);
                h = h.replace($a, "<$1></$2>");
                i = (ab.exec(h) || ["", ""])[1].toLowerCase();
                l = Y[i] || Y._default;
                w = l[0];
                for (n.innerHTML = l[1] + h + l[2]; w--;)n = n.lastChild;
                if (!d.support.tbody) {
                    w = Gb.test(h);
                    l = i === "table" && !w ? n.firstChild && n.firstChild.childNodes : l[1] === "<table>" && !w ? n.childNodes : [];
                    for (i = l.length - 1; i >= 0; --i)d.nodeName(l[i], "tbody") && !l[i].childNodes.length && l[i].parentNode.removeChild(l[i])
                }
                !d.support.leadingWhitespace && Ha.test(h) && n.insertBefore(c.createTextNode(Ha.exec(h)[0]), n.firstChild);
                h = n.childNodes;
                n.parentNode.removeChild(n)
            } else h = c.createTextNode(h);
            h.nodeType ? p.push(h) : d.merge(p, h)
        }
        n && (h = n = x = null);
        if (!d.support.appendChecked)for (g = 0; (h = p[g]) != null; g++)d.nodeName(h, "input") ?
            I(h) : typeof h.getElementsByTagName !== "undefined" && d.grep(h.getElementsByTagName("input"), I);
        if (e) {
            b = function (b) {
                if (!b.type || Kb.test(b.type))return f ? f.push(b.parentNode ? b.parentNode.removeChild(b) : b) : e.appendChild(b)
            };
            for (g = 0; (h = p[g]) != null; g++)if (!d.nodeName(h, "script") || !b(h))e.appendChild(h), typeof h.getElementsByTagName !== "undefined" && (h = d.grep(d.merge([], h.getElementsByTagName("script")), b), p.splice.apply(p, [g + 1, 0].concat(h)), g += h.length)
        }
        return p
    }, cleanData: function (b, a) {
        for (var c, e, f, g, h = 0,
                 i = d.expando, l = d.cache, n = d.support.deleteExpando, w = d.event.special; (f = b[h]) != null; h++)if (a || d.acceptData(f))if (c = (e = f[i]) && l[e]) {
            if (c.events)for (g in c.events)w[g] ? d.event.remove(f, g) : d.removeEvent(f, g, c.handle);
            l[e] && (delete l[e], n ? delete f[i] : f.removeAttribute ? f.removeAttribute(i) : f[i] = null, d.deletedIds.push(e))
        }
    }});
    (function () {
        var b, c;
        d.uaMatch = function (b) {
            b = b.toLowerCase();
            b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) ||
                b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
            return{browser: b[1] || "", version: b[2] || "0"}
        };
        b = d.uaMatch(g.userAgent);
        c = {};
        if (b.browser)c[b.browser] = !0, c.version = b.version;
        if (c.chrome)c.webkit = !0; else if (c.webkit)c.safari = !0;
        d.browser = c;
        d.sub = function () {
            function b(a, d) {
                return new b.fn.init(a, d)
            }

            d.extend(!0, b, this);
            b.superclass = this;
            b.fn = b.prototype = this();
            b.fn.constructor = b;
            b.sub = this.sub;
            b.fn.init = function (a, e) {
                e && e instanceof d && !(e instanceof b) && (e = b(e));
                return d.fn.init.call(this,
                    a, e, c)
            };
            b.fn.init.prototype = b.fn;
            var c = b(a);
            return b
        }
    })();
    var O, na, oa, Ka = /alpha\([^)]*\)/i, Mb = /opacity=([^)]*)/, Nb = /^(top|right|bottom|left)$/, Ob = /^(none|table(?!-c[ea]).+)/, db = /^margin/, qb = RegExp("^(" + $ + ")(.*)$", "i"), va = RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"), Pb = RegExp("^([-+])=(" + $ + ")", "i"), Ca = {BODY: "block"}, Qb = {position: "absolute", visibility: "hidden", display: "block"}, eb = {letterSpacing: 0, fontWeight: 400}, ia = ["Top", "Right", "Bottom", "Left"], Pa = ["Webkit", "O", "Moz", "ms"], Rb = d.fn.toggle;
    d.fn.extend({css: function (b, a) {
        return d.access(this, function (b, a, c) {
            return c !== i ? d.style(b, a, c) : d.css(b, a)
        }, b, a, arguments.length > 1)
    }, show: function () {
        return J(this, !0)
    }, hide: function () {
        return J(this)
    }, toggle: function (b, a) {
        var c = typeof b === "boolean";
        if (d.isFunction(b) && d.isFunction(a))return Rb.apply(this, arguments);
        return this.each(function () {
            (c ? b : y(this)) ? d(this).show() : d(this).hide()
        })
    }});
    d.extend({cssHooks: {opacity: {get: function (b, a) {
        if (a) {
            var d = O(b, "opacity");
            return d === "" ? "1" : d
        }
    }}}, cssNumber: {fillOpacity: !0, fontWeight: !0,
        lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": d.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (b, a, c, e) {
        if (b && !(b.nodeType === 3 || b.nodeType === 8 || !b.style)) {
            var f, g, h, l = d.camelCase(a), n = b.style, a = d.cssProps[l] || (d.cssProps[l] = M(n, l));
            h = d.cssHooks[a] || d.cssHooks[l];
            if (c !== i) {
                g = typeof c;
                if (g === "string" && (f = Pb.exec(c)))c = (f[1] + 1) * f[2] + parseFloat(d.css(b, a)), g = "number";
                if (!(c == null || g === "number" && isNaN(c)))if (g === "number" && !d.cssNumber[l] && (c += "px"), !h || !("set"in
                    h) || (c = h.set(b, c, e)) !== i)try {
                    n[a] = c
                } catch (w) {
                }
            } else {
                if (h && "get"in h && (f = h.get(b, !1, e)) !== i)return f;
                return n[a]
            }
        }
    }, css: function (b, a, c, e) {
        var f, g;
        g = d.camelCase(a);
        a = d.cssProps[g] || (d.cssProps[g] = M(b.style, g));
        (g = d.cssHooks[a] || d.cssHooks[g]) && "get"in g && (f = g.get(b, !0, e));
        f === i && (f = O(b, a));
        f === "normal" && a in eb && (f = eb[a]);
        if (c || e !== i)return b = parseFloat(f), c || d.isNumeric(b) ? b || 0 : f;
        return f
    }, swap: function (b, a, d) {
        var c, e = {};
        for (c in a)e[c] = b.style[c], b.style[c] = a[c];
        d = d.call(b);
        for (c in a)b.style[c] =
            e[c];
        return d
    }});
    e.getComputedStyle ? O = function (b, a) {
        var c, f, g, h, i = e.getComputedStyle(b, null), l = b.style;
        if (i && (c = i.getPropertyValue(a) || i[a], c === "" && !d.contains(b.ownerDocument, b) && (c = d.style(b, a)), va.test(c) && db.test(a)))f = l.width, g = l.minWidth, h = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = i.width, l.width = f, l.minWidth = g, l.maxWidth = h;
        return c
    } : a.documentElement.currentStyle && (O = function (b, a) {
        var d, c, e = b.currentStyle && b.currentStyle[a], f = b.style;
        e == null && f && f[a] && (e = f[a]);
        if (va.test(e) && !Nb.test(a)) {
            d =
                f.left;
            if (c = b.runtimeStyle && b.runtimeStyle.left)b.runtimeStyle.left = b.currentStyle.left;
            f.left = a === "fontSize" ? "1em" : e;
            e = f.pixelLeft + "px";
            f.left = d;
            if (c)b.runtimeStyle.left = c
        }
        return e === "" ? "auto" : e
    });
    d.each(["height", "width"], function (b, a) {
        d.cssHooks[a] = {get: function (b, c, e) {
            if (c)return b.offsetWidth === 0 && Ob.test(O(b, "display")) ? d.swap(b, Qb, function () {
                return ja(b, a, e)
            }) : ja(b, a, e)
        }, set: function (b, c, e) {
            return Q(b, c, e ? R(b, a, e, d.support.boxSizing && d.css(b, "boxSizing") === "border-box") : 0)
        }}
    });
    if (!d.support.opacity)d.cssHooks.opacity =
    {get: function (b, a) {
        return Mb.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
    }, set: function (b, a) {
        var c = b.style, e = b.currentStyle, f = d.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")" : "", g = e && e.filter || c.filter || "";
        c.zoom = 1;
        if (a >= 1 && d.trim(g.replace(Ka, "")) === "" && c.removeAttribute && (c.removeAttribute("filter"), e && !e.filter))return;
        c.filter = Ka.test(g) ? g.replace(Ka, f) : g + " " + f
    }};
    d(function () {
        if (!d.support.reliableMarginRight)d.cssHooks.marginRight = {get: function (b, a) {
            return d.swap(b, {display: "inline-block"}, function () {
                if (a)return O(b, "marginRight")
            })
        }};
        !d.support.pixelPosition && d.fn.position && d.each(["top", "left"], function (b, a) {
            d.cssHooks[a] = {get: function (b, c) {
                if (c) {
                    var e = O(b, a);
                    return va.test(e) ? d(b).position()[a] + "px" : e
                }
            }}
        })
    });
    if (d.expr && d.expr.filters)d.expr.filters.hidden = function (b) {
        return b.offsetWidth === 0 && b.offsetHeight === 0 || !d.support.reliableHiddenOffsets && (b.style && b.style.display || O(b, "display")) === "none"
    }, d.expr.filters.visible = function (b) {
        return!d.expr.filters.hidden(b)
    };
    d.each({margin: "", padding: "", border: "Width"}, function (b, a) {
        d.cssHooks[b + a] = {expand: function (d) {
            for (var c = typeof d === "string" ? d.split(" ") : [d], e = {}, d = 0; d < 4; d++)e[b + ia[d] + a] = c[d] || c[d - 2] || c[0];
            return e
        }};
        if (!db.test(b))d.cssHooks[b + a].set = Q
    });
    var Sb = /%20/g, rb = /\[\]$/, fb = /\r?\n/g, Tb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ub = /^(?:select|textarea)/i;
    d.fn.extend({serialize: function () {
        return d.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ?
                d.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || Ub.test(this.nodeName) || Tb.test(this.type))
        }).map(function (b, a) {
            var c = d(this).val();
            return c == null ? null : d.isArray(c) ? d.map(c, function (b) {
                return{name: a.name, value: b.replace(fb, "\r\n")}
            }) : {name: a.name, value: c.replace(fb, "\r\n")}
        }).get()
    }});
    d.param = function (b, a) {
        var c, e = [], f = function (b, a) {
            a = d.isFunction(a) ? a() : a == null ? "" : a;
            e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
        };
        a === i && (a = d.ajaxSettings &&
            d.ajaxSettings.traditional);
        if (d.isArray(b) || b.jquery && !d.isPlainObject(b))d.each(b, function () {
            f(this.name, this.value)
        }); else for (c in b)P(c, b[c], a, f);
        return e.join("&").replace(Sb, "+")
    };
    var ka, la, Vb = /#.*$/, Wb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Xb = /^(?:GET|HEAD)$/, Yb = /^\/\//, gb = /\?/, Zb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, $b = /([?&])_=[^&]*/, hb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, ib = d.fn.load, Da = {}, jb = {}, kb = ["*/"] + ["*"];
    try {
        la = c.href
    } catch (gc) {
        la = a.createElement("a"), la.href =
            "", la = la.href
    }
    ka = hb.exec(la.toLowerCase()) || [];
    d.fn.load = function (b, a, c) {
        if (typeof b !== "string" && ib)return ib.apply(this, arguments);
        if (!this.length)return this;
        var e, f, g, h = this, l = b.indexOf(" ");
        l >= 0 && (e = b.slice(l, b.length), b = b.slice(0, l));
        d.isFunction(a) ? (c = a, a = i) : a && typeof a === "object" && (f = "POST");
        d.ajax({url: b, type: f, dataType: "html", data: a, complete: function (b, a) {
            c && h.each(c, g || [b.responseText, a, b])
        }}).done(function (b) {
            g = arguments;
            h.html(e ? d("<div>").append(b.replace(Zb, "")).find(e) : b)
        });
        return this
    };
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, a) {
        d.fn[a] = function (b) {
            return this.on(a, b)
        }
    });
    d.each(["get", "post"], function (b, a) {
        d[a] = function (b, c, e, f) {
            d.isFunction(c) && (f = f || e, e = c, c = i);
            return d.ajax({type: a, url: b, data: c, success: e, dataType: f})
        }
    });
    d.extend({getScript: function (b, a) {
        return d.get(b, i, a, "script")
    }, getJSON: function (b, a, c) {
        return d.get(b, a, c, "json")
    }, ajaxSetup: function (b, a) {
        a ? S(b, d.ajaxSettings) : (a = b, b = d.ajaxSettings);
        S(b, a);
        return b
    }, ajaxSettings: {url: la,
        isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ka[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": kb}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": d.parseJSON, "text xml": d.parseXML},
        flatOptions: {context: !0, url: !0}}, ajaxPrefilter: aa(Da), ajaxTransport: aa(jb), ajax: function (b, a) {
        function c(b, a, g, j) {
            var k, n, x, E, r = a;
            if (U !== 2) {
                U = 2;
                l && clearTimeout(l);
                h = i;
                f = j || "";
                s.readyState = b > 0 ? 4 : 0;
                if (g) {
                    E = p;
                    var j = s, v, H, D, X, A = E.contents, u = E.dataTypes, W = E.responseFields;
                    for (H in W)H in g && (j[W[H]] = g[H]);
                    for (; u[0] === "*";)u.shift(), v === i && (v = E.mimeType || j.getResponseHeader("content-type"));
                    if (v)for (H in A)if (A[H] && A[H].test(v)) {
                        u.unshift(H);
                        break
                    }
                    if (u[0]in g)D = u[0]; else {
                        for (H in g) {
                            if (!u[0] || E.converters[H +
                                " " + u[0]]) {
                                D = H;
                                break
                            }
                            X || (X = H)
                        }
                        D = D || X
                    }
                    D ? (D !== u[0] && u.unshift(D), E = g[D]) : E = void 0
                }
                if (b >= 200 && b < 300 || b === 304)if (p.ifModified && ((g = s.getResponseHeader("Last-Modified")) && (d.lastModified[e] = g), (g = s.getResponseHeader("Etag")) && (d.etag[e] = g)), b === 304)r = "notmodified", k = !0; else {
                    a:{
                        n = p;
                        x = E;
                        var C, y, r = n.dataTypes.slice();
                        v = r[0];
                        H = {};
                        D = 0;
                        n.dataFilter && (x = n.dataFilter(x, n.dataType));
                        if (r[1])for (C in n.converters)H[C.toLowerCase()] = n.converters[C];
                        for (; g = r[++D];)if (g !== "*") {
                            if (v !== "*" && v !== g) {
                                C = H[v + " " + g] || H["* " +
                                    g];
                                if (!C)for (y in H)if (k = y.split(" "), k[1] === g && (C = H[v + " " + k[0]] || H["* " + k[0]])) {
                                    C === !0 ? C = H[y] : H[y] !== !0 && (g = k[0], r.splice(D--, 0, g));
                                    break
                                }
                                if (C !== !0)if (C && n["throws"])x = C(x); else try {
                                    x = C(x)
                                } catch (ga) {
                                    k = {state: "parsererror", error: C ? ga : "No conversion from " + v + " to " + g};
                                    break a
                                }
                            }
                            v = g
                        }
                        k = {state: "success", data: x}
                    }
                    r = k.state;
                    n = k.data;
                    x = k.error;
                    k = !x
                } else if (x = r, !r || b)r = "error", b < 0 && (b = 0);
                s.status = b;
                s.statusText = (a || r) + "";
                k ? o.resolveWith(t, [n, r, s]) : o.rejectWith(t, [s, r, x]);
                s.statusCode(z);
                z = i;
                w && q.trigger("ajax" +
                    (k ? "Success" : "Error"), [s, p, k ? n : x]);
                $.fireWith(t, [s, r]);
                w && (q.trigger("ajaxComplete", [s, p]), --d.active || d.event.trigger("ajaxStop"))
            }
        }

        typeof b === "object" && (a = b, b = i);
        var a = a || {}, e, f, g, h, l, n, w, x, p = d.ajaxSetup({}, a), t = p.context || p, q = t !== p && (t.nodeType || t instanceof d) ? d(t) : d.event, o = d.Deferred(), $ = d.Callbacks("once memory"), z = p.statusCode || {}, r = {}, v = {}, U = 0, D = "canceled", s = {readyState: 0, setRequestHeader: function (b, a) {
            if (!U) {
                var d = b.toLowerCase(), b = v[d] = v[d] || b;
                r[b] = a
            }
            return this
        }, getAllResponseHeaders: function () {
            return U ===
                2 ? f : null
        }, getResponseHeader: function (b) {
            var a;
            if (U === 2) {
                if (!g)for (g = {}; a = Wb.exec(f);)g[a[1].toLowerCase()] = a[2];
                a = g[b.toLowerCase()]
            }
            return a === i ? null : a
        }, overrideMimeType: function (b) {
            if (!U)p.mimeType = b;
            return this
        }, abort: function (b) {
            b = b || D;
            h && h.abort(b);
            c(0, b);
            return this
        }};
        o.promise(s);
        s.success = s.done;
        s.error = s.fail;
        s.complete = $.add;
        s.statusCode = function (b) {
            if (b) {
                var a;
                if (U < 2)for (a in b)z[a] = [z[a], b[a]]; else a = b[s.status], s.always(a)
            }
            return this
        };
        p.url = ((b || p.url) + "").replace(Vb, "").replace(Yb,
            ka[1] + "//");
        p.dataTypes = d.trim(p.dataType || "*").toLowerCase().split(H);
        if (p.crossDomain == null)n = hb.exec(p.url.toLowerCase()), p.crossDomain = !(!n || !(n[1] !== ka[1] || n[2] !== ka[2] || (n[3] || (n[1] === "http:" ? 80 : 443)) != (ka[3] || (ka[1] === "http:" ? 80 : 443))));
        if (p.data && p.processData && typeof p.data !== "string")p.data = d.param(p.data, p.traditional);
        da(Da, p, a, s);
        if (U === 2)return s;
        w = p.global;
        p.type = p.type.toUpperCase();
        p.hasContent = !Xb.test(p.type);
        w && d.active++ === 0 && d.event.trigger("ajaxStart");
        if (!p.hasContent && (p.data &&
            (p.url += (gb.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
            n = d.now();
            var X = p.url.replace($b, "$1_=" + n);
            p.url = X + (X === p.url ? (gb.test(p.url) ? "&" : "?") + "_=" + n : "")
        }
        (p.data && p.hasContent && p.contentType !== !1 || a.contentType) && s.setRequestHeader("Content-Type", p.contentType);
        p.ifModified && (e = e || p.url, d.lastModified[e] && s.setRequestHeader("If-Modified-Since", d.lastModified[e]), d.etag[e] && s.setRequestHeader("If-None-Match", d.etag[e]));
        s.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ?
            p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== "*" ? ", " + kb + "; q=0.01" : "") : p.accepts["*"]);
        for (x in p.headers)s.setRequestHeader(x, p.headers[x]);
        if (p.beforeSend && (p.beforeSend.call(t, s, p) === !1 || U === 2))return s.abort();
        D = "abort";
        for (x in{success: 1, error: 1, complete: 1})s[x](p[x]);
        if (h = da(jb, p, a, s)) {
            s.readyState = 1;
            w && q.trigger("ajaxSend", [s, p]);
            p.async && p.timeout > 0 && (l = setTimeout(function () {
                s.abort("timeout")
            }, p.timeout));
            try {
                U = 1, h.send(r, c)
            } catch (A) {
                if (U < 2)c(-1, A); else throw A;
            }
        } else c(-1, "No Transport");
        return s
    }, active: 0, lastModified: {}, etag: {}});
    var lb = [], ac = /\?/, Aa = /(=)\?(?=&|$)|\?\?/, bc = d.now();
    d.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var b = lb.pop() || d.expando + "_" + bc++;
        this[b] = !0;
        return b
    }});
    d.ajaxPrefilter("json jsonp", function (b, a, c) {
        var f, g, h, l = b.data, n = b.url, w = b.jsonp !== !1, p = w && Aa.test(n), x = w && !p && typeof l === "string" && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Aa.test(l);
        if (b.dataTypes[0] === "jsonp" || p || x)return f = b.jsonpCallback = d.isFunction(b.jsonpCallback) ?
            b.jsonpCallback() : b.jsonpCallback, g = e[f], p ? b.url = n.replace(Aa, "$1" + f) : x ? b.data = l.replace(Aa, "$1" + f) : w && (b.url += (ac.test(n) ? "&" : "?") + b.jsonp + "=" + f), b.converters["script json"] = function () {
            h || d.error(f + " was not called");
            return h[0]
        }, b.dataTypes[0] = "json", e[f] = function () {
            h = arguments
        }, c.always(function () {
            e[f] = g;
            if (b[f])b.jsonpCallback = a.jsonpCallback, lb.push(f);
            h && d.isFunction(g) && g(h[0]);
            h = g = i
        }), "script"
    });
    d.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/}, converters: {"text script": function (b) {
            d.globalEval(b);
            return b
        }}});
    d.ajaxPrefilter("script", function (b) {
        if (b.cache === i)b.cache = !1;
        if (b.crossDomain)b.type = "GET", b.global = !1
    });
    d.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var d, c = a.head || a.getElementsByTagName("head")[0] || a.documentElement;
            return{send: function (e, f) {
                d = a.createElement("script");
                d.async = "async";
                if (b.scriptCharset)d.charset = b.scriptCharset;
                d.src = b.url;
                d.onload = d.onreadystatechange = function (b, a) {
                    if (a || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, c && d.parentNode && c.removeChild(d), d = i, a || f(200, "success")
                };
                c.insertBefore(d, c.firstChild)
            }, abort: function () {
                if (d)d.onload(0, 1)
            }}
        }
    });
    var sa, La = e.ActiveXObject ? function () {
        for (var b in sa)sa[b](0, 1)
    } : !1, cc = 0;
    d.ajaxSettings.xhr = e.ActiveXObject ? function () {
        var b;
        if (!(b = !this.isLocal && ba()))a:{
            try {
                b = new e.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (a) {
            }
            b = void 0
        }
        return b
    } : ba;
    (function (b) {
        d.extend(d.support,
            {ajax: !!b, cors: !!b && "withCredentials"in b})
    })(d.ajaxSettings.xhr());
    d.support.ajax && d.ajaxTransport(function (b) {
        if (!b.crossDomain || d.support.cors) {
            var a;
            return{send: function (c, f) {
                var g, h, l = b.xhr();
                b.username ? l.open(b.type, b.url, b.async, b.username, b.password) : l.open(b.type, b.url, b.async);
                if (b.xhrFields)for (h in b.xhrFields)l[h] = b.xhrFields[h];
                b.mimeType && l.overrideMimeType && l.overrideMimeType(b.mimeType);
                !b.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (h in c)l.setRequestHeader(h,
                        c[h])
                } catch (n) {
                }
                l.send(b.hasContent && b.data || null);
                a = function (c, e) {
                    var j, h, n, w, p;
                    try {
                        if (a && (e || l.readyState === 4)) {
                            a = i;
                            if (g)l.onreadystatechange = d.noop, La && delete sa[g];
                            if (e)l.readyState !== 4 && l.abort(); else {
                                j = l.status;
                                n = l.getAllResponseHeaders();
                                w = {};
                                if ((p = l.responseXML) && p.documentElement)w.xml = p;
                                try {
                                    w.text = l.responseText
                                } catch (x) {
                                }
                                try {
                                    h = l.statusText
                                } catch (t) {
                                    h = ""
                                }
                                !j && b.isLocal && !b.crossDomain ? j = w.text ? 200 : 404 : j === 1223 && (j = 204)
                            }
                        }
                    } catch (q) {
                        e || f(-1, q)
                    }
                    w && f(j, h, w, n)
                };
                b.async ? l.readyState === 4 ? setTimeout(a,
                    0) : (g = ++cc, La && (sa || (sa = {}, d(e).unload(La)), sa[g] = a), l.onreadystatechange = a) : a()
            }, abort: function () {
                a && a(0, 1)
            }}
        }
    });
    var pa, Ba, dc = /^(?:toggle|show|hide)$/, ec = RegExp("^(?:([-+])=|)(" + $ + ")([a-z%]*)$", "i"), fc = /queueHooks$/, xa = [function (b, a, c) {
        var e, f, g, h, i, l, n = this, w = b.style, p = {}, x = [], t = b.nodeType && y(b);
        if (!c.queue) {
            i = d._queueHooks(b, "fx");
            if (i.unqueued == null)i.unqueued = 0, l = i.empty.fire, i.empty.fire = function () {
                i.unqueued || l()
            };
            i.unqueued++;
            n.always(function () {
                n.always(function () {
                    i.unqueued--;
                    d.queue(b,
                        "fx").length || i.empty.fire()
                })
            })
        }
        if (b.nodeType === 1 && ("height"in a || "width"in a))if (c.overflow = [w.overflow, w.overflowX, w.overflowY], d.css(b, "display") === "inline" && d.css(b, "float") === "none")!d.support.inlineBlockNeedsLayout || ca(b.nodeName) === "inline" ? w.display = "inline-block" : w.zoom = 1;
        if (c.overflow)w.overflow = "hidden", d.support.shrinkWrapBlocks || n.done(function () {
            w.overflow = c.overflow[0];
            w.overflowX = c.overflow[1];
            w.overflowY = c.overflow[2]
        });
        for (e in a)g = a[e], dc.exec(g) && (delete a[e], f = f || g === "toggle",
            g !== (t ? "hide" : "show") && x.push(e));
        if (a = x.length) {
            g = d._data(b, "fxshow") || d._data(b, "fxshow", {});
            if ("hidden"in g)t = g.hidden;
            if (f)g.hidden = !t;
            t ? d(b).show() : n.done(function () {
                d(b).hide()
            });
            n.done(function () {
                var a;
                d.removeData(b, "fxshow", !0);
                for (a in p)d.style(b, a, p[a])
            });
            for (e = 0; e < a; e++)if (f = x[e], h = n.createTween(f, t ? g[f] : 0), p[f] = g[f] || d.style(b, f), !(f in g) && (g[f] = h.start, t))h.end = h.start, h.start = f === "width" || f === "height" ? 1 : 0
        }
    }], ta = {"*": [function (b, a) {
        var c, e, f = this.createTween(b, a), g = ec.exec(a), h = f.cur(),
            i = +h || 0, l = 1, n = 20;
        if (g) {
            c = +g[2];
            e = g[3] || (d.cssNumber[b] ? "" : "px");
            if (e !== "px" && i) {
                i = d.css(f.elem, b, !0) || c || 1;
                do l = l || ".5", i /= l, d.style(f.elem, b, i + e); while (l !== (l = f.cur() / h) && l !== 1 && --n)
            }
            f.unit = e;
            f.start = i;
            f.end = g[1] ? i + (g[1] + 1) * c : c
        }
        return f
    }]};
    d.Animation = d.extend(V, {tweener: function (b, a) {
        d.isFunction(b) ? (a = b, b = ["*"]) : b = b.split(" ");
        for (var c, e = 0, f = b.length; e < f; e++)c = b[e], ta[c] = ta[c] || [], ta[c].unshift(a)
    }, prefilter: function (a, d) {
        d ? xa.unshift(a) : xa.push(a)
    }});
    d.Tween = L;
    L.prototype = {constructor: L, init: function (a, c, e, f, g, h) {
        this.elem = a;
        this.prop = e;
        this.easing = g || "swing";
        this.options = c;
        this.start = this.now = this.cur();
        this.end = f;
        this.unit = h || (d.cssNumber[e] ? "" : "px")
    }, cur: function () {
        var a = L.propHooks[this.prop];
        return a && a.get ? a.get(this) : L.propHooks._default.get(this)
    }, run: function (a) {
        var c, e = L.propHooks[this.prop];
        this.pos = this.options.duration ? c = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : c = a;
        this.now = (this.end - this.start) * c + this.start;
        this.options.step && this.options.step.call(this.elem,
            this.now, this);
        e && e.set ? e.set(this) : L.propHooks._default.set(this);
        return this
    }};
    L.prototype.init.prototype = L.prototype;
    L.propHooks = {_default: {get: function (a) {
        if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null))return a.elem[a.prop];
        a = d.css(a.elem, a.prop, !1, "");
        return!a || a === "auto" ? 0 : a
    }, set: function (a) {
        if (d.fx.step[a.prop])d.fx.step[a.prop](a); else a.elem.style && (a.elem.style[d.cssProps[a.prop]] != null || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}};
    L.propHooks.scrollTop = L.propHooks.scrollLeft = {set: function (a) {
        if (a.elem.nodeType && a.elem.parentNode)a.elem[a.prop] = a.now
    }};
    d.each(["toggle", "show", "hide"], function (a, c) {
        var e = d.fn[c];
        d.fn[c] = function (f, g, h) {
            return f == null || typeof f === "boolean" || !a && d.isFunction(f) && d.isFunction(g) ? e.apply(this, arguments) : this.animate(fa(c, !0), f, g, h)
        }
    });
    d.fn.extend({fadeTo: function (a, d, c, e) {
        return this.filter(y).css("opacity", 0).show().end().animate({opacity: d}, a, c, e)
    }, animate: function (a, c, e, f) {
        var g = d.isEmptyObject(a),
            h = d.speed(c, e, f), c = function () {
                var c = V(this, d.extend({}, a), h);
                g && c.stop(!0)
            };
        return g || h.queue === !1 ? this.each(c) : this.queue(h.queue, c)
    }, stop: function (a, c, e) {
        var f = function (a) {
            var b = a.stop;
            delete a.stop;
            b(e)
        };
        typeof a !== "string" && (e = c, c = a, a = i);
        c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
            var c = !0, g = a != null && a + "queueHooks", h = d.timers, i = d._data(this);
            if (g)i[g] && i[g].stop && f(i[g]); else for (g in i)i[g] && i[g].stop && fc.test(g) && f(i[g]);
            for (g = h.length; g--;)if (h[g].elem === this && (a == null || h[g].queue ===
                a))h[g].anim.stop(e), c = !1, h.splice(g, 1);
            (c || !e) && d.dequeue(this, a)
        })
    }});
    d.each({slideDown: fa("show"), slideUp: fa("hide"), slideToggle: fa("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, c) {
        d.fn[a] = function (a, b, d) {
            return this.animate(c, a, b, d)
        }
    });
    d.speed = function (a, c, e) {
        var f = a && typeof a === "object" ? d.extend({}, a) : {complete: e || !e && c || d.isFunction(a) && a, duration: a, easing: e && c || c && !d.isFunction(c) && c};
        f.duration = d.fx.off ? 0 : typeof f.duration === "number" ?
            f.duration : f.duration in d.fx.speeds ? d.fx.speeds[f.duration] : d.fx.speeds._default;
        if (f.queue == null || f.queue === !0)f.queue = "fx";
        f.old = f.complete;
        f.complete = function () {
            d.isFunction(f.old) && f.old.call(this);
            f.queue && d.dequeue(this, f.queue)
        };
        return f
    };
    d.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
    }};
    d.timers = [];
    d.fx = L.prototype.init;
    d.fx.tick = function () {
        var a, c = d.timers, e = 0;
        for (pa = d.now(); e < c.length; e++)a = c[e], !a() && c[e] === a && c.splice(e--, 1);
        c.length || d.fx.stop();
        pa = i
    };
    d.fx.timer = function (a) {
        a() && d.timers.push(a) && !Ba && (Ba = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.interval = 13;
    d.fx.stop = function () {
        clearInterval(Ba);
        Ba = null
    };
    d.fx.speeds = {slow: 600, fast: 200, _default: 400};
    d.fx.step = {};
    if (d.expr && d.expr.filters)d.expr.filters.animated = function (a) {
        return d.grep(d.timers,function (d) {
            return a === d.elem
        }).length
    };
    var mb = /^(?:body|html)$/i;
    d.fn.offset = function (a) {
        if (arguments.length)return a === i ? this : this.each(function (c) {
            d.offset.setOffset(this, a, c)
        });
        var c, e, f, g,
            h, l = {top: 0, left: 0};
        if (g = (f = this[0]) && f.ownerDocument) {
            if ((e = g.body) === f)return d.offset.bodyOffset(f);
            c = g.documentElement;
            if (!d.contains(c, f))return l;
            typeof f.getBoundingClientRect !== "undefined" && (l = f.getBoundingClientRect());
            f = q(g);
            g = c.clientTop || e.clientTop || 0;
            e = c.clientLeft || e.clientLeft || 0;
            h = f.pageYOffset || c.scrollTop;
            return{top: l.top + h - g, left: l.left + (f.pageXOffset || c.scrollLeft) - e}
        }
    };
    d.offset = {bodyOffset: function (a) {
        var c = a.offsetTop, e = a.offsetLeft;
        d.support.doesNotIncludeMarginInBodyOffset &&
        (c += parseFloat(d.css(a, "marginTop")) || 0, e += parseFloat(d.css(a, "marginLeft")) || 0);
        return{top: c, left: e}
    }, setOffset: function (a, c, e) {
        var f = d.css(a, "position");
        if (f === "static")a.style.position = "relative";
        var g = d(a), h = g.offset(), i = d.css(a, "top"), l = d.css(a, "left"), n = {}, w = {};
        (f === "absolute" || f === "fixed") && d.inArray("auto", [i, l]) > -1 ? (w = g.position(), f = w.top, l = w.left) : (f = parseFloat(i) || 0, l = parseFloat(l) || 0);
        d.isFunction(c) && (c = c.call(a, e, h));
        if (c.top != null)n.top = c.top - h.top + f;
        if (c.left != null)n.left = c.left - h.left +
            l;
        "using"in c ? c.using.call(a, n) : g.css(n)
    }};
    d.fn.extend({position: function () {
        if (this[0]) {
            var a = this[0], c = this.offsetParent(), e = this.offset(), f = mb.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
            e.top -= parseFloat(d.css(a, "marginTop")) || 0;
            e.left -= parseFloat(d.css(a, "marginLeft")) || 0;
            f.top += parseFloat(d.css(c[0], "borderTopWidth")) || 0;
            f.left += parseFloat(d.css(c[0], "borderLeftWidth")) || 0;
            return{top: e.top - f.top, left: e.left - f.left}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var b = this.offsetParent ||
                a.body; b && !mb.test(b.nodeName) && d.css(b, "position") === "static";)b = b.offsetParent;
            return b || a.body
        })
    }});
    d.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var e = /Y/.test(c);
        d.fn[a] = function (f) {
            return d.access(this, function (a, b, f) {
                var g = q(a);
                if (f === i)return g ? c in g ? g[c] : g.document.documentElement[b] : a[b];
                g ? g.scrollTo(!e ? f : d(g).scrollLeft(), e ? f : d(g).scrollTop()) : a[b] = f
            }, a, f, arguments.length, null)
        }
    });
    d.each({Height: "height", Width: "width"}, function (a, c) {
        d.each({padding: "inner" + a,
            content: c, "": "outer" + a}, function (e, f) {
            d.fn[f] = function (f, g) {
                var h = arguments.length && (e || typeof f !== "boolean"), l = e || (f === !0 || g === !0 ? "margin" : "border");
                return d.access(this, function (c, e, f) {
                    if (d.isWindow(c))return c.document.documentElement["client" + a];
                    if (c.nodeType === 9)return e = c.documentElement, Math.max(c.body["scroll" + a], e["scroll" + a], c.body["offset" + a], e["offset" + a], e["client" + a]);
                    return f === i ? d.css(c, e, f, l) : d.style(c, e, f, l)
                }, c, h ? f : i, h, null)
            }
        })
    });
    e.jQuery = e.$ = d;
    typeof define === "function" && define.amd &&
        define.amd.jQuery && define("jquery", [], function () {
        return d
    })
})(window);
(function (e, i, h, u) {
    var o = i.document, B = e(o), z = e(i), A = Array.prototype, s = !0, C = !1, v = navigator.userAgent.toLowerCase(), D = i.location.hash.replace(/#\//, ""), K = i.location.protocol, r = Math, I = function () {
        }, M = function () {
            return!1
        }, y = function () {
            var a = 3, c = o.createElement("div"), e = c.getElementsByTagName("i");
            do c.innerHTML = "<\!--[if gt IE " + ++a + "]><i></i><![endif]--\>"; while (e[0]);
            return a > 4 ? a : o.documentMode || u
        }(), J = function () {
            return{html: o.documentElement, body: o.body, head: o.getElementsByTagName("head")[0], title: o.title}
        },
        Q = i.parent !== i.self, R = function () {
            var a = [];
            e.each("data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image".split(" "), function (c, e) {
                a.push(e);
                /_/.test(e) && a.push(e.replace(/_/g, ""))
            });
            return a
        }(), ja = function (a) {
            var c;
            if (typeof a !== "object")return a;
            e.each(a, function (g, f) {
                /^[a-z]+_/.test(g) && (c = "", e.each(g.split("_"), function (a, e) {
                    c += a > 0 ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                }),
                    a[c] = f, delete a[g])
            });
            return a
        }, ca = function (a) {
            if (e.inArray(a, R) > -1)return h[a.toUpperCase()];
            return a
        }, P = {youtube: {reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i, embed: function () {
            return"http://www.youtube.com/embed/" + this.id
        }, getUrl: function () {
            return K + "//gdata.youtube.com/feeds/api/videos/" + this.id + "?v=2&alt=json-in-script&callback=?"
        }, get_thumb: function (a) {
            return a.entry.media$group.media$thumbnail[2].url
        },
            get_image: function (a) {
                if (a.entry.yt$hd)return K + "//img.youtube.com/vi/" + this.id + "/maxresdefault.jpg";
                return a.entry.media$group.media$thumbnail[3].url
            }}, vimeo: {reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i, embed: function () {
            return"http://player.vimeo.com/video/" + this.id
        }, getUrl: function () {
            return K + "//vimeo.com/api/v2/video/" + this.id + ".json?callback=?"
        }, get_thumb: function (a) {
            return a[0].thumbnail_medium
        }, get_image: function (a) {
            return a[0].thumbnail_large
        }}, dailymotion: {reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
            embed: function () {
                return K + "//www.dailymotion.com/embed/video/" + this.id
            }, getUrl: function () {
                return"https://api.dailymotion.com/video/" + this.id + "?fields=thumbnail_240_url,thumbnail_720_url&callback=?"
            }, get_thumb: function (a) {
                return a.thumbnail_240_url
            }, get_image: function (a) {
                return a.thumbnail_720_url
            }}, _inst: []}, aa = function (a, c) {
            for (var g = 0; g < P._inst.length; g++)if (P._inst[g].id === c && P._inst[g].type == a)return P._inst[g];
            this.type = a;
            this.id = c;
            this.readys = [];
            P._inst.push(this);
            var f = this;
            e.extend(this, P[a]);
            e.getJSON(this.getUrl(), function (a) {
                f.data = a;
                e.each(f.readys, function (a, c) {
                    c(f.data)
                });
                f.readys = []
            });
            this.getMedia = function (a, c, e) {
                var e = e || I, f = this, g = function (e) {
                    c(f["get_" + a](e))
                };
                try {
                    f.data ? g(f.data) : f.readys.push(g)
                } catch (h) {
                    e()
                }
            }
        }, da = function (a) {
            var c, e;
            for (e in P)if ((c = a && P[e].reg && a.match(P[e].reg)) && c.length)return{id: c[2], provider: e};
            return!1
        }, S = {support: function () {
            var a = J().html;
            return!Q && (a.requestFullscreen || a.msRequestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullScreen)
        }(),
            callback: I, enter: function (a, c, e) {
                this.instance = a;
                this.callback = c || I;
                e = e || J().html;
                e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen()
            }, exit: function (a) {
                this.callback = a || I;
                o.exitFullscreen ? o.exitFullscreen() : o.msExitFullscreen ? o.msExitFullscreen() : o.mozCancelFullScreen ? o.mozCancelFullScreen() : o.webkitCancelFullScreen && o.webkitCancelFullScreen()
            }, instance: null, listen: function () {
                if (this.support) {
                    var a =
                        function () {
                            if (S.instance) {
                                var a = S.instance._fullscreen;
                                o.fullscreen || o.mozFullScreen || o.webkitIsFullScreen || o.msFullscreenElement && o.msFullscreenElement !== null ? a._enter(S.callback) : a._exit(S.callback)
                            }
                        };
                    o.addEventListener("fullscreenchange", a, !1);
                    o.addEventListener("MSFullscreenChange", a, !1);
                    o.addEventListener("mozfullscreenchange", a, !1);
                    o.addEventListener("webkitfullscreenchange", a, !1)
                }
            }}, ba = [], N = [], wa = !1, V = !1, ya = [], L = [], fa = function (a) {
            L.push(a);
            e.each(ya, function (c, e) {
                if (e._options.theme == a.name ||
                    !e._initialized && !e._options.theme)e.theme = a, e._init.call(e)
            })
        }, q = function () {
            return{clearTimer: function (a) {
                e.each(h.get(), function () {
                    this.clearTimer(a)
                })
            }, addTimer: function (a) {
                e.each(h.get(), function () {
                    this.addTimer(a)
                })
            }, array: function (a) {
                return A.slice.call(a, 0)
            }, create: function (a, c) {
                var e = o.createElement(c || "div");
                e.className = a;
                return e
            }, removeFromArray: function (a, c) {
                e.each(a, function (e, f) {
                    if (f == c)return a.splice(e, 1), !1
                });
                return a
            }, getScriptPath: function (a) {
                a = a || e("script:last").attr("src");
                a =
                    a.split("/");
                if (a.length == 1)return"";
                a.pop();
                return a.join("/") + "/"
            }, animate: function () {
                var a = function (a) {
                    var d = "transition WebkitTransition MozTransition OTransition".split(" "), c;
                    if (i.opera)return!1;
                    for (c = 0; d[c]; c++)if (typeof a[d[c]] !== "undefined")return d[c];
                    return!1
                }((o.body || o.documentElement).style), c = {MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[a], g = {_default: [0.25, 0.1, 0.25, 1], galleria: [0.645, 0.045, 0.355, 1], galleriaIn: [0.55,
                    0.085, 0.68, 0.53], galleriaOut: [0.25, 0.46, 0.45, 0.94], ease: [0.25, 0, 0.25, 1], linear: [0.25, 0.25, 0.75, 0.75], "ease-in": [0.42, 0, 1, 1], "ease-out": [0, 0, 0.58, 1], "ease-in-out": [0.42, 0, 0.58, 1]}, f = function (a, d, c) {
                    var f = {}, c = c || "transition";
                    e.each("webkit moz ms o".split(" "), function () {
                        f["-" + this + "-" + c] = d
                    });
                    a.css(f)
                }, l = function (a) {
                    f(a, "none", "transition");
                    h.WEBKIT && h.TOUCH && (f(a, "translate3d(0,0,0)", "transform"), a.data("revert") && (a.css(a.data("revert")), a.data("revert", null)))
                }, n, t, p, s, w, x, d;
                return function (o, z, r) {
                    r = e.extend({duration: 400, complete: I, stop: !1}, r);
                    o = e(o);
                    r.duration ? a ? (r.stop && (o.off(c), l(o)), n = !1, e.each(z, function (a, c) {
                        d = o.css(a);
                        q.parseValue(d) != q.parseValue(c) && (n = !0);
                        o.css(a, d)
                    }), n ? (t = [], p = r.easing in g ? g[r.easing] : g._default, s = " " + r.duration + "ms cubic-bezier(" + p.join(",") + ")", i.setTimeout(function (a, d, c, g) {
                        return function () {
                            a.one(d, function (a) {
                                return function () {
                                    l(a);
                                    r.complete.call(a[0])
                                }
                            }(a));
                            if (h.WEBKIT && h.TOUCH && (w = {}, x = [0, 0, 0], e.each(["left", "top"], function (d, e) {
                                e in c && (x[d] = q.parseValue(c[e]) -
                                    q.parseValue(a.css(e)) + "px", w[e] = c[e], delete c[e])
                            }), x[0] || x[1]))a.data("revert", w), t.push("-webkit-transform" + g), f(a, "translate3d(" + x.join(",") + ")", "transform");
                            e.each(c, function (a) {
                                t.push(a + g)
                            });
                            f(a, t.join(","));
                            a.css(c)
                        }
                    }(o, c, z, s), 2)) : i.setTimeout(function () {
                        r.complete.call(o[0])
                    }, r.duration)) : o.animate(z, r) : (o.css(z), r.complete.call(o[0]))
                }
            }(), removeAlpha: function (a) {
                a instanceof jQuery && (a = a[0]);
                if (y < 9 && a) {
                    var c = a.style, a = (a = a.currentStyle) && a.filter || c.filter || "";
                    if (/alpha/.test(a))c.filter =
                        a.replace(/alpha\([^)]*\)/i, "")
                }
            }, forceStyles: function (a, c) {
                a = e(a);
                a.attr("style") && a.data("styles", a.attr("style")).removeAttr("style");
                a.css(c)
            }, revertStyles: function () {
                e.each(q.array(arguments), function (a, c) {
                    c = e(c);
                    c.removeAttr("style");
                    c.attr("style", "");
                    c.data("styles") && c.attr("style", c.data("styles")).data("styles", null)
                })
            }, moveOut: function (a) {
                q.forceStyles(a, {position: "absolute", left: -1E4})
            }, moveIn: function () {
                q.revertStyles.apply(q, q.array(arguments))
            }, hide: function (a, c, g) {
                var g = g || I, f = e(a),
                    a = f[0];
                f.data("opacity") || f.data("opacity", f.css("opacity"));
                var h = {opacity: 0};
                c ? q.animate(a, h, {duration: c, complete: y < 9 && a ? function () {
                    q.removeAlpha(a);
                    a.style.visibility = "hidden";
                    g.call(a)
                } : g, stop: !0}) : y < 9 && a ? (q.removeAlpha(a), a.style.visibility = "hidden") : f.css(h)
            }, show: function (a, c, g) {
                var g = g || I, f = e(a), a = f[0], h = {opacity: parseFloat(f.data("opacity")) || 1};
                if (c) {
                    if (y < 9)f.css("opacity", 0), a.style.visibility = "visible";
                    q.animate(a, h, {duration: c, complete: y < 9 && a ? function () {
                        h.opacity == 1 && q.removeAlpha(a);
                        g.call(a)
                    } : g, stop: !0})
                } else y < 9 && h.opacity == 1 && a ? (q.removeAlpha(a), a.style.visibility = "visible") : f.css(h)
            }, wait: function (a) {
                h._waiters = h._waiters || [];
                var a = e.extend({until: M, success: I, error: function () {
                    h.raise("Could not complete wait function.")
                }, timeout: 3E3}, a), c = q.timestamp(), g, f, l, n = function () {
                    f = q.timestamp();
                    g = f - c;
                    q.removeFromArray(h._waiters, l);
                    if (a.until(g))return a.success(), !1;
                    if (typeof a.timeout == "number" && f >= c + a.timeout)return a.error(), !1;
                    h._waiters.push(l = i.setTimeout(n, 10))
                };
                h._waiters.push(l =
                    i.setTimeout(n, 10))
            }, toggleQuality: function (a, c) {
                if (!(y !== 7 && y !== 8 || !a || a.nodeName.toUpperCase() != "IMG"))typeof c === "undefined" && (c = a.style.msInterpolationMode === "nearest-neighbor"), a.style.msInterpolationMode = c ? "bicubic" : "nearest-neighbor"
            }, insertStyleTag: function (a, c) {
                if (!c || !e("#" + c).length) {
                    var g = o.createElement("style");
                    if (c)g.id = c;
                    J().head.appendChild(g);
                    if (g.styleSheet)g.styleSheet.cssText = a; else {
                        var f = o.createTextNode(a);
                        g.appendChild(f)
                    }
                }
            }, loadScript: function (a, c) {
                var g = !1, f = e("<script>").attr({src: a,
                    async: !0}).get(0);
                f.onload = f.onreadystatechange = function () {
                    if (!g && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"))g = !0, f.onload = f.onreadystatechange = null, typeof c === "function" && c.call(this, this)
                };
                J().head.appendChild(f)
            }, parseValue: function (a) {
                return typeof a === "number" ? a : typeof a === "string" ? (a = a.match(/\-?\d|\./g)) && a.constructor === Array ? a.join("") * 1 : 0 : 0
            }, timestamp: function () {
                return(new Date).getTime()
            }, loadCSS: function (a, c, g) {
                var f, i;
                e("link[rel=stylesheet]").each(function () {
                    if (RegExp(a).test(this.href))return f =
                        this, !1
                });
                typeof c === "function" && (g = c, c = u);
                g = g || I;
                if (f)return g.call(f, f), f;
                i = o.styleSheets.length;
                if (e("#" + c).length)e("#" + c).attr("href", a), i--; else if (f = e("<link>").attr({rel: "stylesheet", href: a, id: c}).get(0), c = e('link[rel="stylesheet"], style'), c.length ? c.get(0).parentNode.insertBefore(f, c[0]) : J().head.appendChild(f), y && i >= 31) {
                    h.raise("You have reached the browser stylesheet limit (31)", !0);
                    return
                }
                if (typeof g === "function") {
                    var n = e("<s>").attr("id", "galleria-loader").hide().appendTo(J().body);
                    q.wait({until: function () {
                        return n.height() == 1
                    }, success: function () {
                        n.remove();
                        g.call(f, f)
                    }, error: function () {
                        n.remove();
                        h.raise("Theme CSS could not load after 20 sec. " + (h.QUIRK ? "Your browser is in Quirks Mode, please add a correct doctype." : "Please download the latest theme at http://galleria.io/customer/."), !0)
                    }, timeout: 5E3})
                }
                return f
            }}
        }(), qa = function (a) {
            q.insertStyleTag(".galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}",
                "galleria-videoicon");
            return e(q.create("galleria-videoicon")).html("<i></i>").appendTo(a).click(function () {
                e(this).siblings("img").mouseup()
            })
        }, T = function () {
            var a = function (a, g, f, h) {
                var i = this.getOptions("easing"), t = this.getStageWidth(), p = {left: t * (a.rewind ? -1 : 1)}, o = {left: 0};
                f ? (p.opacity = 0, o.opacity = 1) : p.opacity = 1;
                e(a.next).css(p);
                q.animate(a.next, o, {duration: a.speed, complete: function (a) {
                    return function () {
                        g();
                        a.css({left: 0})
                    }
                }(e(a.next).add(a.prev)), queue: !1, easing: i});
                if (h)a.rewind = !a.rewind;
                if (a.prev) {
                    p =
                    {left: 0};
                    o = {left: t * (a.rewind ? 1 : -1)};
                    if (f)p.opacity = 1, o.opacity = 0;
                    e(a.prev).css(p);
                    q.animate(a.prev, o, {duration: a.speed, queue: !1, easing: i, complete: function () {
                        e(this).css("opacity", 0)
                    }})
                }
            };
            return{active: !1, init: function (a, e, f) {
                T.effects.hasOwnProperty(a) && T.effects[a].call(this, e, f)
            }, effects: {fade: function (a, g) {
                e(a.next).css({opacity: 0, left: 0});
                q.animate(a.next, {opacity: 1}, {duration: a.speed, complete: g});
                a.prev && (e(a.prev).css("opacity", 1).show(), q.animate(a.prev, {opacity: 0}, {duration: a.speed}))
            }, flash: function (a, g) {
                e(a.next).css({opacity: 0, left: 0});
                a.prev ? q.animate(a.prev, {opacity: 0}, {duration: a.speed / 2, complete: function () {
                    q.animate(a.next, {opacity: 1}, {duration: a.speed, complete: g})
                }}) : q.animate(a.next, {opacity: 1}, {duration: a.speed, complete: g})
            }, pulse: function (a, g) {
                a.prev && e(a.prev).hide();
                e(a.next).css({opacity: 0, left: 0}).show();
                q.animate(a.next, {opacity: 1}, {duration: a.speed, complete: g})
            }, slide: function () {
                a.apply(this, q.array(arguments))
            }, fadeslide: function () {
                a.apply(this, q.array(arguments).concat([!0]))
            },
                doorslide: function () {
                    a.apply(this, q.array(arguments).concat([!1, !0]))
                }}}
        }();
    S.listen();
    e.event.special["click:fast"] = {propagate: !0, add: function (a) {
        var c = function (a) {
            if (a.touches && a.touches.length)return a = a.touches[0], {x: a.pageX, y: a.pageY}
        }, g = {touched: !1, touchdown: !1, coords: {x: 0, y: 0}, evObj: {}};
        e(this).data({clickstate: g, timer: 0}).on("touchstart.fast",function (a) {
            i.clearTimeout(e(this).data("timer"));
            e(this).data("clickstate", {touched: !0, touchdown: !0, coords: c(a.originalEvent), evObj: a})
        }).on("touchmove.fast",
            function (a) {
                var a = c(a.originalEvent), g = e(this).data("clickstate");
                Math.max(Math.abs(g.coords.x - a.x), Math.abs(g.coords.y - a.y)) > 6 && e(this).data("clickstate", e.extend(g, {touchdown: !1}))
            }).on("touchend.fast",function (c) {
                var h = e(this);
                h.data("clickstate").touchdown && a.handler.call(this, c);
                h.data("timer", i.setTimeout(function () {
                    h.data("clickstate", g)
                }, 400))
            }).on("click.fast", function (c) {
                if (e(this).data("clickstate").touched)return!1;
                e(this).data("clickstate", g);
                a.handler.call(this, c)
            })
    }, remove: function () {
        e(this).off("touchstart.fast touchmove.fast touchend.fast click.fast")
    }};
    z.on("orientationchange", function () {
        e(this).resize()
    });
    h = function () {
        var a = this;
        this._options = {};
        this._playing = !1;
        this._playtime = 5E3;
        this._active = null;
        this._queue = {length: 0};
        this._data = [];
        this._dom = {};
        this._thumbnails = [];
        this._layers = [];
        this._firstrun = this._initialized = !1;
        this._stageHeight = this._stageWidth = 0;
        this._target = u;
        this._binds = [];
        this._id = parseInt(r.random() * 1E4, 10);
        e.each("container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip".split(" "),
            function (c, e) {
                a._dom[e] = q.create("galleria-" + e)
            });
        e.each("current total".split(" "), function (c, e) {
            a._dom[e] = q.create("galleria-" + e, "span")
        });
        var c = this._keyboard = {keys: {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, RETURN: 13, ESCAPE: 27, BACKSPACE: 8, SPACE: 32}, map: {}, bound: !1, press: function (e) {
            var f = e.keyCode || e.which;
            f in c.map && typeof c.map[f] === "function" && c.map[f].call(a, e)
        }, attach: function (a) {
            var e, d;
            for (e in a)a.hasOwnProperty(e) && (d = e.toUpperCase(), d in c.keys ? c.map[c.keys[d]] = a[e] : c.map[d] = a[e]);
            if (!c.bound)c.bound = !0, B.on("keydown", c.press)
        }, detach: function () {
            c.bound = !1;
            c.map = {};
            B.off("keydown", c.press)
        }}, g = this._controls = {0: u, 1: u, active: 0, swap: function () {
            g.active = g.active ? 0 : 1
        }, getActive: function () {
            return a._options.swipe ? g.slides[a._active] : g[g.active]
        }, getNext: function () {
            return a._options.swipe ? g.slides[a.getNext(a._active)] : g[1 - g.active]
        }, slides: [], frames: [], layers: []}, f = this._carousel = {next: a.$("thumb-nav-right"), prev: a.$("thumb-nav-left"), width: 0, current: 0, max: 0, hooks: [], update: function () {
            var c = 0, g = 0,
                d = [0];
            e.each(a._thumbnails, function (a, f) {
                if (f.ready) {
                    c += f.outerWidth || e(f.container).outerWidth(!0);
                    var h = e(f.container).width();
                    c += h - r.floor(h);
                    d[a + 1] = c;
                    g = r.max(g, f.outerHeight || e(f.container).outerHeight(!0))
                }
            });
            a.$("thumbnails").css({width: c, height: g});
            f.max = c;
            f.hooks = d;
            f.width = a.$("thumbnails-list").width();
            f.setClasses();
            a.$("thumbnails-container").toggleClass("galleria-carousel", c > f.width);
            f.width = a.$("thumbnails-list").width()
        }, bindControls: function () {
            var c;
            f.next.on("click:fast", function (e) {
                e.preventDefault();
                if (a._options.carouselSteps === "auto")for (c = f.current; c < f.hooks.length; c++) {
                    if (f.hooks[c] - f.hooks[f.current] > f.width) {
                        f.set(c - 2);
                        break
                    }
                } else f.set(f.current + a._options.carouselSteps)
            });
            f.prev.on("click:fast", function (e) {
                e.preventDefault();
                if (a._options.carouselSteps === "auto")for (c = f.current; c >= 0; c--)if (f.hooks[f.current] - f.hooks[c] > f.width) {
                    f.set(c + 2);
                    break
                } else {
                    if (c === 0) {
                        f.set(0);
                        break
                    }
                } else f.set(f.current - a._options.carouselSteps)
            })
        }, set: function (a) {
            for (a = r.max(a, 0); f.hooks[a - 1] + f.width >= f.max &&
                a >= 0;)a--;
            f.current = a;
            f.animate()
        }, getLast: function (a) {
            return(a || f.current) - 1
        }, follow: function (a) {
            if (a === 0 || a === f.hooks.length - 2)f.set(a); else {
                for (var c = f.current; f.hooks[c] - f.hooks[f.current] < f.width && c <= f.hooks.length;)c++;
                a - 1 < f.current ? f.set(a - 1) : a + 2 > c && f.set(a - c + f.current + 2)
            }
        }, setClasses: function () {
            f.prev.toggleClass("disabled", !f.current);
            f.next.toggleClass("disabled", f.hooks[f.current] + f.width >= f.max)
        }, animate: function () {
            f.setClasses();
            var c = f.hooks[f.current] * -1;
            isNaN(c) || (a.$("thumbnails").css("left",
                function () {
                    return e(this).css("left")
                }), q.animate(a.get("thumbnails"), {left: c}, {duration: a._options.carouselSpeed, easing: a._options.easing, queue: !1}))
        }}, l = this._tooltip = {initialized: !1, open: !1, timer: "tooltip" + a._id, swapTimer: "swap" + a._id, init: function () {
            l.initialized = !0;
            q.insertStyleTag(".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}",
                "galleria-tooltip");
            a.$("tooltip").css({opacity: 0.8, visibility: "visible", display: "none"})
        }, move: function (c) {
            var e = a.getMousePosition(c).x, c = a.getMousePosition(c).y, d = a.$("tooltip"), f = c, g = d.outerHeight(!0) + 1, h = d.outerWidth(!0), i = g + 15, h = a.$("container").width() - h - 2, l = a.$("container").height() - g - 2;
            !isNaN(e) && !isNaN(f) && (e += 10, f -= g + 8, e = r.max(0, r.min(h, e)), f = r.max(0, r.min(l, f)), c < i && (f = i), d.css({left: e, top: f}))
        }, bind: function (c, f) {
            if (!h.TOUCH) {
                l.initialized || l.init();
                var d = function () {
                    a.$("container").off("mousemove",
                        l.move);
                    a.clearTimer(l.timer);
                    a.$("tooltip").stop().animate({opacity: 0}, 200, function () {
                        a.$("tooltip").hide();
                        a.addTimer(l.swapTimer, function () {
                            l.open = !1
                        }, 1E3)
                    })
                }, g = function (c, f) {
                    l.define(c, f);
                    e(c).hover(function () {
                        a.clearTimer(l.swapTimer);
                        a.$("container").off("mousemove", l.move).on("mousemove", l.move).trigger("mousemove");
                        l.show(c);
                        a.addTimer(l.timer, function () {
                            a.$("tooltip").stop().show().animate({opacity: 1});
                            l.open = !0
                        }, l.open ? 0 : 500)
                    }, d).click(d)
                };
                typeof f === "string" ? g(c in a._dom ? a.get(c) : c, f) :
                    e.each(c, function (d, c) {
                        g(a.get(d), c)
                    })
            }
        }, show: function (c) {
            var c = e(c in a._dom ? a.get(c) : c), f = c.data("tt"), d = function (a) {
                i.setTimeout(function (a) {
                    return function () {
                        l.move(a)
                    }
                }(a), 10);
                c.off("mouseup", d)
            };
            if (f = typeof f === "function" ? f() : f)a.$("tooltip").html(f.replace(/\s/, "&#160;")), c.on("mouseup", d)
        }, define: function (c, f) {
            if (typeof f !== "function")var d = f, f = function () {
                return d
            };
            c = e(c in a._dom ? a.get(c) : c).data("tt", f);
            l.show(c)
        }}, n = this._fullscreen = {scrolled: 0, crop: u, active: !1, prev: e(), beforeEnter: function (a) {
            a()
        },
            beforeExit: function (a) {
                a()
            }, keymap: a._keyboard.map, parseCallback: function (c, f) {
                return T.active ? function () {
                    typeof c == "function" && c.call(a);
                    var d = a._controls.getActive(), g = a._controls.getNext();
                    a._scaleImage(g);
                    a._scaleImage(d);
                    f && a._options.trueFullscreen && e(d.container).add(g.container).trigger("transitionend")
                } : c
            }, enter: function (c) {
                n.beforeEnter(function () {
                    c = n.parseCallback(c, !0);
                    a._options.trueFullscreen && S.support ? (n.active = !0, q.forceStyles(a.get("container"), {width: "100%", height: "100%"}), a.rescale(),
                        h.MAC ? !h.SAFARI || !/version\/[1-5]/.test(v) ? (a.$("container").css("opacity", 0).addClass("fullscreen"), i.setTimeout(function () {
                            n.scale();
                            a.$("container").css("opacity", 1)
                        }, 50)) : (a.$("stage").css("opacity", 0), i.setTimeout(function () {
                            n.scale();
                            a.$("stage").css("opacity", 1)
                        }, 4)) : a.$("container").addClass("fullscreen"), z.resize(n.scale), S.enter(a, c, a.get("container"))) : (n.scrolled = z.scrollTop(), h.TOUCH || i.scrollTo(0, 0), n._enter(c))
                })
            }, _enter: function (c) {
                n.active = !0;
                if (Q)n.iframe = function () {
                    var a, d = o.referrer,
                        c = o.createElement("a"), f = i.location;
                    c.href = d;
                    if (c.protocol != f.protocol || c.hostname != f.hostname || c.port != f.port)return h.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."), !1;
                    n.pd = i.parent.document;
                    e(n.pd).find("iframe").each(function () {
                        if ((this.contentDocument || this.contentWindow.document) === o)return a = this, !1
                    });
                    return a
                }();
                q.hide(a.getActiveImage());
                if (Q && n.iframe)n.iframe.scrolled = e(i.parent).scrollTop(), i.parent.scrollTo(0, 0);
                var f = a.getData(), d = a._options,
                    g = !a._options.trueFullscreen || !S.support, l = {height: "100%", overflow: "hidden", margin: 0, padding: 0};
                if (g) {
                    a.$("container").addClass("fullscreen");
                    n.prev = a.$("container").prev();
                    if (!n.prev.length)n.parent = a.$("container").parent();
                    a.$("container").appendTo("body");
                    q.forceStyles(a.get("container"), {position: h.TOUCH ? "absolute" : "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1E4});
                    q.forceStyles(J().html, l);
                    q.forceStyles(J().body, l)
                }
                Q && n.iframe && (q.forceStyles(n.pd.documentElement, l), q.forceStyles(n.pd.body,
                    l), q.forceStyles(n.iframe, e.extend(l, {width: "100%", height: "100%", top: 0, left: 0, position: "fixed", zIndex: 1E4, border: "none"})));
                n.keymap = e.extend({}, a._keyboard.map);
                a.attachKeyboard({escape: a.exitFullscreen, right: a.next, left: a.prev});
                n.crop = d.imageCrop;
                if (d.fullscreenCrop != u)d.imageCrop = d.fullscreenCrop;
                if (f && f.big && f.image !== f.big) {
                    var d = new h.Picture, p = d.isCached(f.big), t = a.getIndex(), r = a._thumbnails[t];
                    a.trigger({type: h.LOADSTART, cached: p, rewind: !1, index: t, imageTarget: a.getActiveImage(), thumbTarget: r,
                        galleriaData: f});
                    d.load(f.big, function (d) {
                        a._scaleImage(d, {complete: function (d) {
                            a.trigger({type: h.LOADFINISH, cached: p, index: t, rewind: !1, imageTarget: d.image, thumbTarget: r});
                            var c = a._controls.getActive().image;
                            c && e(c).width(d.image.width).height(d.image.height).attr("style", e(d.image).attr("style")).attr("src", d.image.src)
                        }})
                    });
                    d = a.getNext(t);
                    f = new h.Picture;
                    d = a.getData(d);
                    f.preload(a.isFullscreen() && d.big ? d.big : d.image)
                }
                a.rescale(function () {
                    a.addTimer(!1, function () {
                        g && q.show(a.getActiveImage());
                        typeof c ===
                            "function" && c.call(a);
                        a.rescale()
                    }, 100);
                    a.trigger(h.FULLSCREEN_ENTER)
                });
                g ? z.resize(n.scale) : q.show(a.getActiveImage())
            }, scale: function () {
                a.rescale()
            }, exit: function (c) {
                n.beforeExit(function () {
                    c = n.parseCallback(c);
                    a._options.trueFullscreen && S.support ? S.exit(c) : n._exit(c)
                })
            }, _exit: function (c) {
                n.active = !1;
                var e = !a._options.trueFullscreen || !S.support, d = a.$("container").removeClass("fullscreen");
                n.parent ? n.parent.prepend(d) : d.insertAfter(n.prev);
                if (e && (q.hide(a.getActiveImage()), q.revertStyles(a.get("container"),
                    J().html, J().body), h.TOUCH || i.scrollTo(0, n.scrolled), (d = a._controls.frames[a._controls.active]) && d.image))d.image.src = d.image.src;
                Q && n.iframe && (q.revertStyles(n.pd.documentElement, n.pd.body, n.iframe), n.iframe.scrolled && i.parent.scrollTo(0, n.iframe.scrolled));
                a.detachKeyboard();
                a.attachKeyboard(n.keymap);
                a._options.imageCrop = n.crop;
                var d = a.getData().big, f = a._controls.getActive().image;
                !a.getData().iframe && f && d && d == f.src && i.setTimeout(function (a) {
                    return function () {
                        f.src = a
                    }
                }(a.getData().image), 1);
                a.rescale(function () {
                    a.addTimer(!1,
                        function () {
                            e && q.show(a.getActiveImage());
                            typeof c === "function" && c.call(a);
                            z.trigger("resize")
                        }, 50);
                    a.trigger(h.FULLSCREEN_EXIT)
                });
                z.off("resize", n.scale)
            }}, t = this._idle = {trunk: [], bound: !1, active: !1, add: function (a, c, d, f) {
            if (a && !h.TOUCH) {
                t.bound || t.addEvent();
                a = e(a);
                typeof d == "boolean" && (f = d, d = {});
                var d = d || {}, g = {}, i;
                for (i in c)c.hasOwnProperty(i) && (g[i] = a.css(i));
                a.data("idle", {from: e.extend(g, d), to: c, complete: !0, busy: !1});
                f ? a.css(c) : t.addTimer();
                t.trunk.push(a)
            }
        }, remove: function (c) {
            c = e(c);
            e.each(t.trunk,
                function (a, d) {
                    d && d.length && !d.not(c).length && (c.css(c.data("idle").from), t.trunk.splice(a, 1))
                });
            t.trunk.length || (t.removeEvent(), a.clearTimer(t.timer))
        }, addEvent: function () {
            t.bound = !0;
            a.$("container").on("mousemove click", t.showAll);
            if (a._options.idleMode == "hover")a.$("container").on("mouseleave", t.hide)
        }, removeEvent: function () {
            t.bound = !1;
            a.$("container").on("mousemove click", t.showAll);
            a._options.idleMode == "hover" && a.$("container").off("mouseleave", t.hide)
        }, addTimer: function () {
            a._options.idleMode !=
                "hover" && a.addTimer("idle", function () {
                t.hide()
            }, a._options.idleTime)
        }, hide: function () {
            if (a._options.idleMode && a.getIndex() !== !1) {
                a.trigger(h.IDLE_ENTER);
                var c = t.trunk.length;
                e.each(t.trunk, function (e, d) {
                    var f = d.data("idle");
                    if (f)d.data("idle").complete = !1, q.animate(d, f.to, {duration: a._options.idleSpeed, complete: function () {
                        if (e == c - 1)t.active = !1
                    }})
                })
            }
        }, showAll: function () {
            a.clearTimer("idle");
            e.each(t.trunk, function (a, c) {
                t.show(c)
            })
        }, show: function (c) {
            var f = c.data("idle");
            if (!t.active || !f.busy && !f.complete)f.busy = !0, a.trigger(h.IDLE_EXIT), a.clearTimer("idle"), q.animate(c, f.from, {duration: a._options.idleSpeed / 2, complete: function () {
                t.active = !0;
                e(c).data("idle").busy = !1;
                e(c).data("idle").complete = !0
            }});
            t.addTimer()
        }}, p = this._lightbox = {width: 0, height: 0, initialized: !1, active: null, image: null, elems: {}, keymap: !1, init: function () {
            if (!p.initialized) {
                p.initialized = !0;
                var c = {}, f = a._options, d = "", f = {overlay: "position:fixed;display:none;opacity:" + f.overlayOpacity + ";filter:alpha(opacity=" + f.overlayOpacity * 100 + ");top:0;left:0;width:100%;height:100%;background:" +
                    f.overlayBackground + ";z-index:99990", box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991", shadow: "position:absolute;background:#000;width:100%;height:100%;", content: "position:absolute;background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden", info: "position:absolute;bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px", close: "position:absolute;top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",
                    image: "position:absolute;top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;", prevholder: "position:absolute;width:50%;top:0;bottom:40px;cursor:pointer;", nextholder: "position:absolute;width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;", prev: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif", next: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
                    title: "float:left", counter: "float:right;margin-left:8px;"}, g = {}, i = "", i = y > 7 ? y < 9 ? "background:#000;filter:alpha(opacity=0);" : "background:rgba(0,0,0,0);" : "z-index:99999";
                f.nextholder += i;
                f.prevholder += i;
                e.each(f, function (a, c) {
                    d += ".galleria-lightbox-" + a + "{" + c + "}"
                });
                d += ".galleria-lightbox-box.iframe .galleria-lightbox-prevholder,.galleria-lightbox-box.iframe .galleria-lightbox-nextholder{width:100px;height:100px;top:50%;margin-top:-70px}";
                q.insertStyleTag(d, "galleria-lightbox");
                e.each("overlay box content shadow title info close prevholder prev nextholder next counter image".split(" "),
                    function (d, e) {
                        a.addElement("lightbox-" + e);
                        c[e] = p.elems[e] = a.get("lightbox-" + e)
                    });
                p.image = new h.Picture;
                e.each({box: "shadow content close prevholder nextholder", info: "title counter", content: "info image", prevholder: "prev", nextholder: "next"}, function (a, d) {
                    var c = [];
                    e.each(d.split(" "), function (a, d) {
                        c.push("lightbox-" + d)
                    });
                    g["lightbox-" + a] = c
                });
                a.append(g);
                e(c.image).append(p.image.container);
                e(J().body).append(c.overlay, c.box);
                (function (a) {
                    return a.hover(function () {
                        e(this).css("color", "#bbb")
                    }, function () {
                        e(this).css("color",
                            "#444")
                    })
                })(e(c.close).on("click:fast", p.hide).html("&#215;"));
                e.each(["Prev", "Next"], function (a, d) {
                    var f = e(c[d.toLowerCase()]).html(/v/.test(d) ? "&#8249;&#160;" : "&#160;&#8250;"), g = e(c[d.toLowerCase() + "holder"]);
                    g.on("click:fast", function () {
                        p["show" + d]()
                    });
                    y < 8 || h.TOUCH ? f.show() : g.hover(function () {
                        f.show()
                    }, function () {
                        f.stop().fadeOut(200)
                    })
                });
                e(c.overlay).on("click:fast", p.hide);
                if (h.IPAD)a._options.lightboxTransitionSpeed = 0
            }
        }, rescale: function (c) {
            var f = r.min(z.width() - 40, p.width), d = r.min(z.height() -
                60, p.height), d = r.min(f / p.width, d / p.height), f = r.round(p.width * d) + 40, d = r.round(p.height * d) + 60, f = {width: f, height: d, "margin-top": r.ceil(d / 2) * -1, "margin-left": r.ceil(f / 2) * -1};
            c ? e(p.elems.box).css(f) : e(p.elems.box).animate(f, {duration: a._options.lightboxTransitionSpeed, easing: a._options.easing, complete: function () {
                var d = p.image, c = a._options.lightboxFadeSpeed;
                a.trigger({type: h.LIGHTBOX_IMAGE, imageTarget: d.image});
                e(d.container).show();
                e(d.image).animate({opacity: 1}, c);
                q.show(p.elems.info, c)
            }})
        }, hide: function () {
            p.image.image =
                null;
            z.off("resize", p.rescale);
            e(p.elems.box).hide().find("iframe").remove();
            q.hide(p.elems.info);
            a.detachKeyboard();
            a.attachKeyboard(p.keymap);
            p.keymap = !1;
            q.hide(p.elems.overlay, 200, function () {
                e(this).hide().css("opacity", a._options.overlayOpacity);
                a.trigger(h.LIGHTBOX_CLOSE)
            })
        }, showNext: function () {
            p.show(a.getNext(p.active))
        }, showPrev: function () {
            p.show(a.getPrev(p.active))
        }, show: function (c) {
            p.active = c = typeof c === "number" ? c : a.getIndex() || 0;
            p.initialized || p.init();
            a.trigger(h.LIGHTBOX_OPEN);
            if (!p.keymap)p.keymap =
                e.extend({}, a._keyboard.map), a.attachKeyboard({escape: p.hide, right: p.showNext, left: p.showPrev});
            z.off("resize", p.rescale);
            var f = a.getData(c), d = a.getDataLength(), g = a.getNext(c), l, n, t;
            q.hide(p.elems.info);
            try {
                for (t = a._options.preload; t > 0; t--)n = new h.Picture, l = a.getData(g), n.preload(l.big ? l.big : l.image), g = a.getNext(g)
            } catch (o) {
            }
            p.image.isIframe = f.iframe && !f.image;
            e(p.elems.box).toggleClass("iframe", p.image.isIframe);
            e(p.image.container).find(".galleria-videoicon").remove();
            p.image.load(f.big || f.image ||
                f.iframe, function (g) {
                if (g.isIframe) {
                    var h = e(i).width(), l = e(i).height();
                    if (g.video && a._options.maxVideoSize) {
                        var n = r.min(a._options.maxVideoSize / h, a._options.maxVideoSize / l);
                        n < 1 && (h *= n, l *= n)
                    }
                    p.width = h;
                    p.height = l
                } else p.width = g.original.width, p.height = g.original.height;
                e(g.image).css({width: g.isIframe ? "100%" : "100.1%", height: g.isIframe ? "100%" : "100.1%", top: 0, bottom: 0, zIndex: 99998, opacity: 0, visibility: "visible"}).parent().height("100%");
                p.elems.title.innerHTML = f.title || "";
                p.elems.counter.innerHTML = c + 1 +
                    " / " + d;
                z.resize(p.rescale);
                p.rescale();
                if (f.image && f.iframe) {
                    e(p.elems.box).addClass("iframe");
                    if (f.video) {
                        var t = qa(g.container).hide();
                        i.setTimeout(function () {
                            t.fadeIn(200)
                        }, 200)
                    }
                    e(g.image).css("cursor", "pointer").mouseup(function (a, d) {
                        return function (c) {
                            e(p.image.container).find(".galleria-videoicon").remove();
                            c.preventDefault();
                            d.isIframe = !0;
                            d.load(a.iframe + (a.video ? "&autoplay=1" : ""), {width: "100%", height: y < 8 ? e(p.image.container).height() : "100%"})
                        }
                    }(f, g))
                }
            });
            e(p.elems.overlay).show().css("visibility",
                "visible");
            e(p.elems.box).show()
        }}, s = this._timer = {trunk: {}, add: function (a, c, d, e) {
            a = a || (new Date).getTime();
            e = e || !1;
            this.clear(a);
            if (e)var f = c, c = function () {
                f();
                s.add(a, c, d)
            };
            this.trunk[a] = i.setTimeout(c, d)
        }, clear: function (a) {
            var c = function (a) {
                i.clearTimeout(this.trunk[a]);
                delete this.trunk[a]
            }, d;
            if (a && a in this.trunk)c.call(this, a); else if (typeof a === "undefined")for (d in this.trunk)this.trunk.hasOwnProperty(d) && c.call(this, d)
        }};
        return this
    };
    h.prototype = {constructor: h, init: function (a, c) {
        c = ja(c);
        this._original =
        {target: a, options: c, data: null};
        this._target = this._dom.target = a.nodeName ? a : e(a).get(0);
        this._original.html = this._target.innerHTML;
        N.push(this);
        if (this._target) {
            this._options = {autoplay: !1, carousel: !0, carouselFollow: !0, carouselSpeed: 400, carouselSteps: "auto", clicknext: !1, dailymotion: {foreground: "%23EEEEEE", highlight: "%235BCEC5", background: "%23222222", logo: 0, hideInfos: 1}, dataConfig: function () {
                return{}
            }, dataSelector: "img", dataSort: !1, dataSource: this._target, debug: u, dummy: u, easing: "galleria", extend: function () {
            },
                fullscreenCrop: u, fullscreenDoubleTap: !0, fullscreenTransition: u, height: 0, idleMode: !0, idleTime: 3E3, idleSpeed: 200, imageCrop: !1, imageMargin: 0, imagePan: !1, imagePanSmoothness: 12, imagePosition: "50%", imageTimeout: u, initialTransition: u, keepSource: !1, layerFollow: !0, lightbox: !1, lightboxFadeSpeed: 200, lightboxTransitionSpeed: 200, linkSourceImages: !0, maxScaleRatio: u, maxVideoSize: u, minScaleRatio: u, overlayOpacity: 0.85, overlayBackground: "#0b0b0b", pauseOnInteraction: !0, popupLinks: !1, preload: 2, queue: !0, responsive: !0,
                show: 0, showInfo: !0, showCounter: !0, showImagenav: !0, swipe: "auto", theme: null, thumbCrop: !0, thumbEventType: "click:fast", thumbMargin: 0, thumbQuality: "auto", thumbDisplayOrder: !0, thumbPosition: "50%", thumbnails: !0, touchTransition: u, transition: "fade", transitionInitial: u, transitionSpeed: 400, trueFullscreen: !0, useCanvas: !1, variation: "", videoPoster: !0, vimeo: {title: 0, byline: 0, portrait: 0, color: "aaaaaa"}, wait: 5E3, width: "auto", youtube: {modestbranding: 1, autohide: 1, color: "white", hd: 1, rel: 0, showinfo: 0}};
            this._options.initialTransition =
                this._options.initialTransition || this._options.transitionInitial;
            if (c) {
                c.debug === !1 && (s = !1);
                if (typeof c.dummy === "string")C = c.dummy;
                if (typeof c.theme == "string")this._options.theme = c.theme
            }
            e(this._target).children().hide();
            h.QUIRK && h.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.");
            if (L.length)if (this._options.theme)for (var g = 0; g < L.length; g++) {
                if (this._options.theme === L[g].name) {
                    this.theme = L[g];
                    break
                }
            } else this.theme = L[0];
            typeof this.theme == "object" ? this._init() : ya.push(this);
            return this
        } else h.raise("Target not found", !0)
    }, _init: function () {
        var a = this, c = this._options;
        if (this._initialized)return h.raise("Init failed: Gallery instance already initialized."), this;
        this._initialized = !0;
        if (!this.theme)return h.raise("Init failed: No theme found.", !0), this;
        e.extend(!0, c, this.theme.defaults, this._original.options, h.configure.options);
        c.swipe = function (a) {
            if (a == "enforced")return!0;
            if (a === !1 || a == "disabled")return!1;
            return!!h.TOUCH
        }(c.swipe);
        if (c.swipe)c.clicknext = !1, c.imagePan = !1;
        (function (a) {
            "getContext"in a && (V = V || {elem: a, context: a.getContext("2d"), cache: {}, length: 0})
        })(o.createElement("canvas"));
        this.bind(h.DATA, function () {
            i.screen && i.screen.width && Array.prototype.forEach && this._data.forEach(function (a) {
                var c = "devicePixelRatio"in i ? i.devicePixelRatio : 1;
                if (r.max(i.screen.width, i.screen.height) * c < 1024)a.big = a.image
            });
            this._original.data = this._data;
            this.get("total").innerHTML = this.getDataLength();
            var c = this.$("container");
            if (a._options.height <
                2)a._userRatio = a._ratio = a._options.height;
            var e = {width: 0, height: 0}, f = function () {
                return a.$("stage").height()
            };
            q.wait({until: function () {
                e = a._getWH();
                c.width(e.width).height(e.height);
                return f() && e.width && e.height > 50
            }, success: function () {
                a._width = e.width;
                a._height = e.height;
                a._ratio = a._ratio || e.height / e.width;
                h.WEBKIT ? i.setTimeout(function () {
                    a._run()
                }, 1) : a._run()
            }, error: function () {
                f() ? h.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + e.width + "px, height: " +
                    e.height + "px.", !0) : h.raise("Could not extract a stage height from the CSS. Traced height: " + f() + "px.", !0)
            }, timeout: typeof this._options.wait == "number" ? this._options.wait : !1})
        });
        this.append({"info-text": ["info-title", "info-description"], info: ["info-text"], "image-nav": ["image-nav-right", "image-nav-left"], stage: ["images", "loader", "counter", "image-nav"], "thumbnails-list": ["thumbnails"], "thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"], container: ["stage", "thumbnails-container",
            "info", "tooltip"]});
        q.hide(this.$("counter").append(this.get("current"), o.createTextNode(" / "), this.get("total")));
        this.setCounter("&#8211;");
        q.hide(a.get("tooltip"));
        this.$("container").addClass([h.TOUCH ? "touch" : "notouch", this._options.variation, "galleria-theme-" + this.theme.name].join(" "));
        this._options.swipe || e.each(Array(2), function (c) {
            var f = new h.Picture;
            e(f.container).css({position: "absolute", top: 0, left: 0}).prepend(a._layers[c] = e(q.create("galleria-layer")).css({position: "absolute", top: 0, left: 0,
                right: 0, bottom: 0, zIndex: 2})[0]);
            a.$("images").append(f.container);
            a._controls[c] = f;
            var g = new h.Picture;
            g.isIframe = !0;
            e(g.container).attr("class", "galleria-frame").css({position: "absolute", top: 0, left: 0, zIndex: 4, background: "#000", display: "none"}).appendTo(f.container);
            a._controls.frames[c] = g
        });
        this.$("images").css({position: "relative", top: 0, left: 0, width: "100%", height: "100%"});
        if (c.swipe)this.$("images").css({position: "absolute", top: 0, left: 0, width: 0, height: "100%"}), this.finger = new h.Finger(this.get("stage"),
            {onchange: function (c) {
                a.pause().show(c)
            }, oncomplete: function (c) {
                var c = r.max(0, r.min(parseInt(c, 10), a.getDataLength() - 1)), f = a.getData(c);
                e(a._thumbnails[c].container).addClass("active").siblings(".active").removeClass("active");
                f && (a.$("images").find(".galleria-frame").css("opacity", 0).hide().find("iframe").remove(), a._options.carousel && a._options.carouselFollow && a._carousel.follow(c))
            }}), this.bind(h.RESCALE, function () {
            this.finger.setup()
        }), this.$("stage").on("click", function () {
            var c = a.getData();
            if (c)if (c.iframe) {
                a.isPlaying() &&
                a.pause();
                var f = a._controls.frames[a._active], g = a._stageWidth, h = a._stageHeight;
                e(f.container).find("iframe").length || (e(f.container).css({width: g, height: h, opacity: 0}).show().animate({opacity: 1}, 200), i.setTimeout(function () {
                    f.load(c.iframe + (c.video ? "&autoplay=1" : ""), {width: g, height: h}, function (e) {
                        a.$("container").addClass("videoplay");
                        e.scale({width: a._stageWidth, height: a._stageHeight, iframelimit: c.video ? a._options.maxVideoSize : u})
                    })
                }, 100))
            } else if (c.link)a._options.popupLinks ? i.open(c.link, "_blank") :
                i.location.href = c.link
        }), this.bind(h.IMAGE, function (c) {
            a.setCounter(c.index);
            a.setInfo(c.index);
            var c = this.getNext(), f = this.getPrev(), g = [f, c];
            g.push(this.getNext(c), this.getPrev(f), a._controls.slides.length - 1);
            var h = [];
            e.each(g, function (a, c) {
                e.inArray(c, h) == -1 && h.push(c)
            });
            e.each(h, function (c, f) {
                var g = a.getData(f), d = a._controls.slides[f], h = a.isFullscreen() && g.big ? g.big : g.image || g.iframe;
                if (g.iframe && !g.image)d.isIframe = !0;
                d.ready || a._controls.slides[f].load(h, function (d) {
                    d.isIframe || e(d.image).css("visibility",
                        "hidden");
                    a._scaleImage(d, {complete: function (a) {
                        a.isIframe || e(a.image).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200)
                    }})
                })
            })
        });
        this.$("thumbnails, thumbnails-list").css({overflow: "hidden", position: "relative"});
        this.$("image-nav-right, image-nav-left").on("click:fast",function () {
            c.pauseOnInteraction && a.pause();
            var e = /right/.test(this.className) ? "next" : "prev";
            a[e]()
        }).on("click", function (a) {
            a.preventDefault();
            (c.clicknext || c.swipe) && a.stopPropagation()
        });
        e.each(["info", "counter", "image-nav"],
            function (e, f) {
                c["show" + f.substr(0, 1).toUpperCase() + f.substr(1).replace(/-/, "")] === !1 && q.moveOut(a.get(f.toLowerCase()))
            });
        this.load();
        if (!c.keepSource && !y)this._target.innerHTML = "";
        this.get("errors") && this.appendChild("target", "errors");
        this.appendChild("target", "container");
        if (c.carousel) {
            var g = 0, f = c.show;
            this.bind(h.THUMBNAIL, function () {
                this.updateCarousel();
                ++g == this.getDataLength() && typeof f == "number" && f > 0 && this._carousel.follow(f)
            })
        }
        if (c.responsive)z.on("resize", function () {
            a.isFullscreen() ||
            a.resize()
        });
        if (c.fullscreenDoubleTap)this.$("stage").on("touchstart", function () {
            var c, e, f, g, h, i;
            a.$("stage").on("touchmove", function () {
                c = 0
            });
            return function (o) {
                if (!/(-left|-right)/.test(o.target.className))i = q.timestamp(), e = (o.originalEvent.touches ? o.originalEvent.touches[0] : o).pageX, f = (o.originalEvent.touches ? o.originalEvent.touches[0] : o).pageY, o.originalEvent.touches.length < 2 && i - c < 300 && e - g < 20 && f - h < 20 ? (a.toggleFullscreen(), o.preventDefault()) : (c = i, g = e, h = f)
            }
        }());
        e.each(h.on.binds, function (c, f) {
            e.inArray(f.hash,
                a._binds) == -1 && a.bind(f.type, f.callback)
        });
        return this
    }, addTimer: function () {
        this._timer.add.apply(this._timer, q.array(arguments));
        return this
    }, clearTimer: function () {
        this._timer.clear.apply(this._timer, q.array(arguments));
        return this
    }, _getWH: function () {
        var a = this.$("container"), c = this.$("target"), g = this, f = {}, h;
        e.each(["width", "height"], function (e, i) {
            g._options[i] && typeof g._options[i] === "number" ? f[i] = g._options[i] : (h = [q.parseValue(a.css(i)), q.parseValue(c.css(i)), a[i](), c[i]()], g["_" + i] || h.splice(h.length,
                q.parseValue(a.css("min-" + i)), q.parseValue(c.css("min-" + i))), f[i] = r.max.apply(r, h))
        });
        if (g._userRatio)f.height = f.width * g._userRatio;
        return f
    }, _createThumbnails: function (a) {
        this.get("total").innerHTML = this.getDataLength();
        var c, g, f, l = this, n = this._options, t = a ? this._data.length - a.length : 0, p = t, r = [], w = 0, x = y < 8 ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D", d = function () {
                var a = l.$("thumbnails").find(".active");
                if (!a.length)return!1;
                return a.find("img").attr("src")
            }(), s = typeof n.thumbnails === "string" ? n.thumbnails.toLowerCase() : null, z = function (a) {
                return o.defaultView && o.defaultView.getComputedStyle ? o.defaultView.getComputedStyle(c.container, null)[a] : f.css(a)
            }, v = function (a, d, c) {
                return function () {
                    e(c).append(a);
                    l.trigger({type: h.THUMBNAIL, thumbTarget: a, index: d, galleriaData: l.getData(d)})
                }
            }, D = function (a) {
                n.pauseOnInteraction && l.pause();
                var d = e(a.currentTarget).data("index");
                l.getIndex() !== d && l.show(d);
                a.preventDefault()
            },
            A = function (a, d) {
                e(a.container).css("visibility", "visible");
                l.trigger({type: h.THUMBNAIL, thumbTarget: a.image, index: a.data.order, galleriaData: l.getData(a.data.order)});
                typeof d == "function" && d.call(l, a)
            }, u = function (a, d) {
                a.scale({width: a.data.width, height: a.data.height, crop: n.thumbCrop, margin: n.thumbMargin, canvas: n.useCanvas, position: n.thumbPosition, complete: function (a) {
                    var c = ["left", "top"], f, g;
                    l.getData(a.index);
                    e.each(["Width", "Height"], function (d, h) {
                        f = h.toLowerCase();
                        if (n.thumbCrop !== !0 || n.thumbCrop ===
                            f)g = {}, g[f] = a[f], e(a.container).css(g), g = {}, g[c[d]] = 0, e(a.image).css(g);
                        a["outer" + h] = e(a.container)["outer" + h](!0)
                    });
                    q.toggleQuality(a.image, n.thumbQuality === !0 || n.thumbQuality === "auto" && a.original.width < a.width * 3);
                    n.thumbDisplayOrder && !a.lazy ? e.each(r, function (a, c) {
                        if (a === w && c.ready && !c.displayed)w++, c.displayed = !0, A(c, d)
                    }) : A(a, d)
                }})
            };
        if (!a)this._thumbnails = [], this.$("thumbnails").empty();
        for (; this._data[t]; t++)g = this._data[t], a = g.thumb || g.image, (n.thumbnails === !0 || s == "lazy") && (g.thumb || g.image) ?
            (c = new h.Picture(t), c.index = t, c.displayed = !1, c.lazy = !1, c.video = !1, this.$("thumbnails").append(c.container), f = e(c.container), f.css("visibility", "hidden"), c.data = {width: q.parseValue(z("width")), height: q.parseValue(z("height")), order: t, src: a}, n.thumbCrop !== !0 ? f.css({width: "auto", height: "auto"}) : f.css({width: c.data.width, height: c.data.height}), s == "lazy" ? (f.addClass("lazy"), c.lazy = !0, c.load(x, {height: c.data.height, width: c.data.width})) : c.load(a, u), n.preload === "all" && c.preload(g.image)) : g.iframe && s !== null ||
            s === "empty" || s === "numbers" ? (c = {container: q.create("galleria-image"), image: q.create("img", "span"), ready: !0, data: {order: t}}, s === "numbers" && e(c.image).text(t + 1), g.iframe && e(c.image).addClass("iframe"), this.$("thumbnails").append(c.container), i.setTimeout(v(c.image, t, c.container), 50 + t * 20)) : c = {container: null, image: null}, e(c.container).add(n.keepSource && n.linkSourceImages ? g.original : null).data("index", t).on(n.thumbEventType, D).data("thumbload", u), d === a && e(c.container).addClass("active"), this._thumbnails.push(c);
        r = this._thumbnails.slice(p);
        return this
    }, lazyLoad: function (a, c) {
        var g = a.constructor == Array ? a : [a], f = this, h = 0;
        e.each(g, function (a, i) {
            if (!(i > f._thumbnails.length - 1)) {
                var p = f._thumbnails[i], o = p.data, q = function () {
                    ++h == g.length && typeof c == "function" && c.call(f)
                }, x = e(p.container).data("thumbload");
                p.video ? x.call(f, p, q) : p.load(o.src, function (a) {
                    x.call(f, a, q)
                })
            }
        });
        return this
    }, lazyLoadChunks: function (a, c) {
        for (var e = this.getDataLength(), f = 0, h = 0, n = [], t = [], p = this, c = c || 0; f < e; f++)if (t.push(f), ++h == a || f == e - 1)n.push(t),
            h = 0, t = [];
        var o = function (a) {
            var e = n.shift();
            e && i.setTimeout(function () {
                p.lazyLoad(e, function () {
                    o(!0)
                })
            }, c && a ? c : 0)
        };
        o(!1);
        return this
    }, _run: function () {
        var a = this;
        a._createThumbnails();
        q.wait({timeout: 1E4, until: function () {
            h.OPERA && a.$("stage").css("display", "inline-block");
            a._stageWidth = a.$("stage").width();
            a._stageHeight = a.$("stage").height();
            return a._stageWidth && a._stageHeight > 50
        }, success: function () {
            ba.push(a);
            if (a._options.swipe) {
                var c = a.$("images").width(a.getDataLength() * a._stageWidth);
                e.each(Array(a.getDataLength()),
                    function (g) {
                        var f = new h.Picture, i = a.getData(g);
                        e(f.container).css({position: "absolute", top: 0, left: a._stageWidth * g}).prepend(a._layers[g] = e(q.create("galleria-layer")).css({position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2})[0]).appendTo(c);
                        i.video && qa(f.container);
                        a._controls.slides.push(f);
                        g = new h.Picture;
                        g.isIframe = !0;
                        e(g.container).attr("class", "galleria-frame").css({position: "absolute", top: 0, left: 0, zIndex: 4, background: "#000", display: "none"}).appendTo(f.container);
                        a._controls.frames.push(g)
                    });
                a.finger.setup()
            }
            q.show(a.get("counter"));
            a._options.carousel && a._carousel.bindControls();
            if (a._options.autoplay) {
                a.pause();
                if (typeof a._options.autoplay === "number")a._playtime = a._options.autoplay;
                a._playing = !0
            }
            a._firstrun ? (a._options.autoplay && a.trigger(h.PLAY), typeof a._options.show === "number" && a.show(a._options.show)) : (a._firstrun = !0, h.History && h.History.change(function (c) {
                isNaN(c) ? i.history.go(-1) : a.show(c, u, !0)
            }), a.trigger(h.READY), a.theme.init.call(a, a._options), e.each(h.ready.callbacks, function (c, e) {
                typeof e == "function" && e.call(a, a._options)
            }), a._options.extend.call(a, a._options), /^[0-9]{1,4}$/.test(D) && h.History ? a.show(D, u, !0) : a._data[a._options.show] && a.show(a._options.show), a._options.autoplay && a.trigger(h.PLAY))
        }, error: function () {
            h.raise("Stage width or height is too small to show the gallery. Traced measures: width:" + a._stageWidth + "px, height: " + a._stageHeight + "px.", !0)
        }})
    }, load: function (a, c, g) {
        var f = this, i = this._options;
        this._data = [];
        this._thumbnails = [];
        this.$("thumbnails").empty();
        typeof c === "function" && (g = c, c = null);
        a = a || i.dataSource;
        c = c || i.dataSelector;
        g = g || i.dataConfig;
        e.isPlainObject(a) && (a = [a]);
        e.isArray(a) ? this.validate(a) ? this._data = a : h.raise("Load failed: JSON Array not valid.") : (c += ",.video,.iframe", e(a).find(c).each(function (a, c) {
            var c = e(c), h = {}, i = c.parent(), l = i.attr("href"), i = i.attr("rel");
            l && (c[0].nodeName == "IMG" || c.hasClass("video")) && da(l) ? h.video = l : l && c.hasClass("iframe") ? h.iframe = l : h.image = h.big = l;
            if (i)h.big = i;
            e.each("big title description link layer image".split(" "),
                function (a, d) {
                    c.data(d) && (h[d] = c.data(d).toString())
                });
            if (!h.big)h.big = h.image;
            f._data.push(e.extend({title: c.attr("title") || "", thumb: c.attr("src"), image: c.attr("src"), big: c.attr("src"), description: c.attr("alt") || "", link: c.attr("longdesc"), original: c.get(0)}, h, g(c)))
        }));
        typeof i.dataSort == "function" ? A.sort.call(this._data, i.dataSort) : i.dataSort == "random" && this._data.sort(function () {
            return r.round(r.random()) - 0.5
        });
        this.getDataLength() && this._parseData(function () {
            this.trigger(h.DATA)
        });
        return this
    },
        _parseData: function (a) {
            var c = this, g, f = !1, h = function () {
                var g = !0;
                e.each(c._data, function (a, c) {
                    if (c.loading)return g = !1
                });
                g && !f && (f = !0, a.call(c))
            };
            e.each(this._data, function (a, f) {
                g = c._data[a];
                if ("thumb"in f === !1)g.thumb = f.image;
                if (!f.big)g.big = f.image;
                if ("video"in f) {
                    var i = da(f.video);
                    if (i)g.iframe = (new aa(i.provider, i.id)).embed() + function () {
                        if (typeof c._options[i.provider] == "object") {
                            var a = [];
                            e.each(c._options[i.provider], function (c, e) {
                                a.push(c + "=" + e)
                            });
                            i.provider == "youtube" && (a = ["wmode=opaque"].concat(a));
                            return"?" + a.join("&")
                        }
                        return""
                    }(), (!g.thumb || !g.image) && e.each(["thumb", "image"], function (a, e) {
                        if (e == "image" && !c._options.videoPoster)g.image = u; else {
                            var f = new aa(i.provider, i.id);
                            if (!g[e])g.loading = !0, f.getMedia(e, function (a, c) {
                                return function (e) {
                                    a[c] = e;
                                    if (c == "image" && !a.big)a.big = a.image;
                                    delete a.loading;
                                    h()
                                }
                            }(g, e))
                        }
                    })
                }
            });
            h();
            return this
        }, destroy: function () {
            this.$("target").data("galleria", null);
            this.$("container").off("galleria");
            this.get("target").innerHTML = this._original.html;
            this.clearTimer();
            q.removeFromArray(N, this);
            q.removeFromArray(ba, this);
            h._waiters.length && e.each(h._waiters, function (a, c) {
                c && i.clearTimeout(c)
            });
            return this
        }, splice: function () {
            var a = this, c = q.array(arguments);
            i.setTimeout(function () {
                A.splice.apply(a._data, c);
                a._parseData(function () {
                    a._createThumbnails()
                })
            }, 2);
            return a
        }, push: function () {
            var a = this, c = q.array(arguments);
            c.length == 1 && c[0].constructor == Array && (c = c[0]);
            i.setTimeout(function () {
                A.push.apply(a._data, c);
                a._parseData(function () {
                    a._createThumbnails(c)
                })
            }, 2);
            return a
        },
        _getActive: function () {
            return this._controls.getActive()
        }, validate: function () {
            return!0
        }, bind: function (a, c) {
            a = ca(a);
            this.$("container").on(a, this.proxy(c));
            return this
        }, unbind: function (a) {
            a = ca(a);
            this.$("container").off(a);
            return this
        }, trigger: function (a) {
            a = typeof a === "object" ? e.extend(a, {scope: this}) : {type: ca(a), scope: this};
            this.$("container").trigger(a);
            return this
        }, addIdleState: function () {
            this._idle.add.apply(this._idle, q.array(arguments));
            return this
        }, removeIdleState: function () {
            this._idle.remove.apply(this._idle,
                q.array(arguments));
            return this
        }, enterIdleMode: function () {
            this._idle.hide();
            return this
        }, exitIdleMode: function () {
            this._idle.showAll();
            return this
        }, enterFullscreen: function () {
            this._fullscreen.enter.apply(this, q.array(arguments));
            return this
        }, exitFullscreen: function () {
            this._fullscreen.exit.apply(this, q.array(arguments));
            return this
        }, toggleFullscreen: function () {
            this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this, q.array(arguments));
            return this
        }, bindTooltip: function () {
            this._tooltip.bind.apply(this._tooltip,
                q.array(arguments));
            return this
        }, defineTooltip: function () {
            this._tooltip.define.apply(this._tooltip, q.array(arguments));
            return this
        }, refreshTooltip: function () {
            this._tooltip.show.apply(this._tooltip, q.array(arguments));
            return this
        }, openLightbox: function () {
            this._lightbox.show.apply(this._lightbox, q.array(arguments));
            return this
        }, closeLightbox: function () {
            this._lightbox.hide.apply(this._lightbox, q.array(arguments));
            return this
        }, hasVariation: function (a) {
            return e.inArray(a, this._options.variation.split(/\s+/)) > -1
        }, getActiveImage: function () {
            var a = this._getActive();
            return a ? a.image : u
        }, getActiveThumb: function () {
            return this._thumbnails[this._active].image || u
        }, getMousePosition: function (a) {
            return{x: a.pageX - this.$("container").offset().left, y: a.pageY - this.$("container").offset().top}
        }, addPan: function (a) {
            if (this._options.imageCrop !== !1) {
                var a = e(a || this.getActiveImage()), c = this, g = a.width() / 2, f = a.height() / 2, h = parseInt(a.css("left"), 10), i = parseInt(a.css("top"), 10), o = h || 0, p = i || 0, s = 0, z = 0, x = !1, d = q.timestamp(), v = 0, D =
                    0, A = function (c, d, e) {
                    if (c > 0 && (D = r.round(r.max(c * -1, r.min(0, d))), v !== D))if (v = D, y === 8)a.parent()["scroll" + e](D * -1); else c = {}, c[e.toLowerCase()] = D, a.css(c)
                }, u = function (a) {
                    if (!(q.timestamp() - d < 50))x = !0, g = c.getMousePosition(a).x, f = c.getMousePosition(a).y
                };
                y === 8 && (a.parent().scrollTop(p * -1).scrollLeft(o * -1), a.css({top: 0, left: 0}));
                this.$("stage").off("mousemove", u).on("mousemove", u);
                this.addTimer("pan" + c._id, function () {
                    x && (s = a.width() - c._stageWidth, z = a.height() - c._stageHeight, h = g / c._stageWidth * s * -1, i = f / c._stageHeight *
                        z * -1, o += (h - o) / c._options.imagePanSmoothness, p += (i - p) / c._options.imagePanSmoothness, A(z, p, "Top"), A(s, o, "Left"))
                }, 50, !0);
                return this
            }
        }, proxy: function (a, c) {
            if (typeof a !== "function")return I;
            c = c || this;
            return function () {
                return a.apply(c, q.array(arguments))
            }
        }, getThemeName: function () {
            return this.theme.name
        }, removePan: function () {
            this.$("stage").off("mousemove");
            this.clearTimer("pan" + this._id);
            return this
        }, addElement: function () {
            var a = this._dom;
            e.each(q.array(arguments), function (c, e) {
                a[e] = q.create("galleria-" +
                    e)
            });
            return this
        }, attachKeyboard: function () {
            this._keyboard.attach.apply(this._keyboard, q.array(arguments));
            return this
        }, detachKeyboard: function () {
            this._keyboard.detach.apply(this._keyboard, q.array(arguments));
            return this
        }, appendChild: function (a, c) {
            this.$(a).append(this.get(c) || c);
            return this
        }, prependChild: function (a, c) {
            this.$(a).prepend(this.get(c) || c);
            return this
        }, remove: function () {
            this.$(q.array(arguments).join(",")).remove();
            return this
        }, append: function (a) {
            var c, e;
            for (c in a)if (a.hasOwnProperty(c))if (a[c].constructor ===
                Array)for (e = 0; a[c][e]; e++)this.appendChild(c, a[c][e]); else this.appendChild(c, a[c]);
            return this
        }, _scaleImage: function (a, c) {
            if (a = a || this._controls.getActive()) {
                var g, f = function (a) {
                    e(a.container).children(":first").css({top: r.max(0, q.parseValue(a.image.style.top)), left: r.max(0, q.parseValue(a.image.style.left)), width: q.parseValue(a.image.width), height: q.parseValue(a.image.height)})
                }, c = e.extend({width: this._stageWidth, height: this._stageHeight, crop: this._options.imageCrop, max: this._options.maxScaleRatio,
                    min: this._options.minScaleRatio, margin: this._options.imageMargin, position: this._options.imagePosition, iframelimit: this._options.maxVideoSize}, c);
                this._options.layerFollow && this._options.imageCrop !== !0 ? typeof c.complete == "function" ? (g = c.complete, c.complete = function () {
                    g.call(a, a);
                    f(a)
                }) : c.complete = f : e(a.container).children(":first").css({top: 0, left: 0});
                a.scale(c);
                return this
            }
        }, updateCarousel: function () {
            this._carousel.update();
            return this
        }, resize: function (a, c) {
            typeof a == "function" && (c = a, a = u);
            var a = e.extend({width: 0,
                height: 0}, a), g = this, f = this.$("container");
            e.each(a, function (c, e) {
                e || (f[c]("auto"), a[c] = g._getWH()[c])
            });
            e.each(a, function (a, c) {
                f[a](c)
            });
            return this.rescale(c)
        }, rescale: function (a, c, g) {
            var f = this;
            typeof a === "function" && (g = a, a = u);
            (function () {
                f._stageWidth = a || f.$("stage").width();
                f._stageHeight = c || f.$("stage").height();
                f._options.swipe ? (e.each(f._controls.slides, function (a, c) {
                    f._scaleImage(c);
                    e(c.container).css("left", f._stageWidth * a)
                }), f.$("images").css("width", f._stageWidth * f.getDataLength())) : f._scaleImage();
                f._options.carousel && f.updateCarousel();
                f._controls.frames[f._controls.active] && f._controls.frames[f._controls.active].scale({width: f._stageWidth, height: f._stageHeight, iframelimit: f._options.maxVideoSize});
                f.trigger(h.RESCALE);
                typeof g === "function" && g.call(f)
            }).call(f);
            return this
        }, refreshImage: function () {
            this._scaleImage();
            this._options.imagePan && this.addPan();
            return this
        }, _preload: function () {
            if (this._options.preload) {
                var a, c, e = this.getNext(), f;
                try {
                    for (c = this._options.preload; c > 0; c--)a = new h.Picture,
                        f = this.getData(e), a.preload(this.isFullscreen() && f.big ? f.big : f.image), e = this.getNext(e)
                } catch (i) {
                }
            }
        }, show: function (a, c, g) {
            var f = this._options.swipe;
            if (f || !(this._queue.length > 3 || a === !1 || !this._options.queue && this._queue.stalled))if (a = r.max(0, r.min(parseInt(a, 10), this.getDataLength() - 1)), c = typeof c !== "undefined" ? !!c : a < this.getIndex(), !g && h.History)h.History.set(a.toString()); else {
                if (this.finger && a !== this._active)this.finger.to = -(a * this.finger.width), this.finger.index = a;
                this._active = a;
                if (f) {
                    var l = this.getData(a),
                        n = this;
                    if (!l)return;
                    var o = this.isFullscreen() && l.big ? l.big : l.image || l.iframe, p = this._controls.slides[a], q = {cached: p.isCached(o), index: a, rewind: c, imageTarget: p.image, thumbTarget: this._thumbnails[a].image, galleriaData: l};
                    this.trigger(e.extend(q, {type: h.LOADSTART}));
                    n.$("container").removeClass("videoplay");
                    var s = function () {
                        n._layers[a].innerHTML = n.getData().layer || "";
                        n.trigger(e.extend(q, {type: h.LOADFINISH}));
                        n._playCheck()
                    };
                    n._preload();
                    i.setTimeout(function () {
                        if (!p.ready || e(p.image).attr("src") !=
                            o) {
                            if (l.iframe && !l.image)p.isIframe = !0;
                            p.load(o, function (a) {
                                q.imageTarget = a.image;
                                n._scaleImage(a, s).trigger(e.extend(q, {type: h.IMAGE}));
                                s()
                            })
                        } else n.trigger(e.extend(q, {type: h.IMAGE})), s()
                    }, 100)
                } else A.push.call(this._queue, {index: a, rewind: c}), this._queue.stalled || this._show();
                return this
            }
        }, _show: function () {
            var a = this, c = this._queue[0], g = this.getData(c.index);
            if (g) {
                var f = this.isFullscreen() && g.big ? g.big : g.image || g.iframe, l = this._controls.getActive(), n = this._controls.getNext(), o = n.isCached(f), p = this._thumbnails[c.index],
                    s = function () {
                        e(n.image).trigger("mouseup")
                    };
                a.$("container").toggleClass("iframe", !!g.isIframe).removeClass("videoplay");
                var r = function (c, d, f, g, l) {
                    return function () {
                        T.active = !1;
                        q.toggleQuality(d.image, a._options.imageQuality);
                        a._layers[a._controls.active].innerHTML = "";
                        e(f.container).css({zIndex: 0, opacity: 0}).show();
                        e(f.container).find("iframe, .galleria-videoicon").remove();
                        e(a._controls.frames[a._controls.active].container).hide();
                        e(d.container).css({zIndex: 1, left: 0, top: 0}).show();
                        a._controls.swap();
                        a._options.imagePan && a.addPan(d.image);
                        if (c.iframe && c.image || c.link || a._options.lightbox || a._options.clicknext)e(d.image).css({cursor: "pointer"}).on("mouseup", function (d) {
                            if (!(typeof d.which == "number" && d.which > 1))if (c.iframe) {
                                a.isPlaying() && a.pause();
                                var f = a._controls.frames[a._controls.active], g = a._stageWidth, l = a._stageHeight;
                                e(f.container).css({width: g, height: l, opacity: 0}).show().animate({opacity: 1}, 200);
                                i.setTimeout(function () {
                                    f.load(c.iframe + (c.video ? "&autoplay=1" : ""), {width: g, height: l}, function (d) {
                                        a.$("container").addClass("videoplay");
                                        d.scale({width: a._stageWidth, height: a._stageHeight, iframelimit: c.video ? a._options.maxVideoSize : u})
                                    })
                                }, 100)
                            } else a._options.clicknext && !h.TOUCH ? (a._options.pauseOnInteraction && a.pause(), a.next()) : c.link ? a._options.popupLinks ? i.open(c.link, "_blank") : i.location.href = c.link : a._options.lightbox && a.openLightbox()
                        });
                        a._playCheck();
                        a.trigger({type: h.IMAGE, index: g.index, imageTarget: d.image, thumbTarget: l.image, galleriaData: c});
                        A.shift.call(a._queue);
                        a._queue.stalled = !1;
                        a._queue.length && a._show()
                    }
                }(g, n, l, c,
                        p);
                this._options.carousel && this._options.carouselFollow && this._carousel.follow(c.index);
                a._preload();
                q.show(n.container);
                n.isIframe = g.iframe && !g.image;
                e(a._thumbnails[c.index].container).addClass("active").siblings(".active").removeClass("active");
                a.trigger({type: h.LOADSTART, cached: o, index: c.index, rewind: c.rewind, imageTarget: n.image, thumbTarget: p.image, galleriaData: g});
                a._queue.stalled = !0;
                n.load(f, function (f) {
                    var d = e(a._layers[1 - a._controls.active]).html(g.layer || "").hide();
                    a._scaleImage(f, {complete: function (f) {
                        "image"in
                            l && q.toggleQuality(l.image, !1);
                        q.toggleQuality(f.image, !1);
                        a.removePan();
                        a.setInfo(c.index);
                        a.setCounter(c.index);
                        g.layer && (d.show(), (g.iframe && g.image || g.link || a._options.lightbox || a._options.clicknext) && d.css("cursor", "pointer").off("mouseup").mouseup(s));
                        g.video && g.image && qa(f.container);
                        var i = a._options.transition;
                        e.each({initial: l.image === null, touch: h.TOUCH, fullscreen: a.isFullscreen()}, function (c, d) {
                            if (d && a._options[c + "Transition"] !== u)return i = a._options[c + "Transition"], !1
                        });
                        if (i in T.effects === !1)r(); else {
                            var n = {prev: l.container, next: f.container, rewind: c.rewind, speed: a._options.transitionSpeed || 400};
                            T.active = !0;
                            T.init.call(a, i, n, r)
                        }
                        a.trigger({type: h.LOADFINISH, cached: o, index: c.index, rewind: c.rewind, imageTarget: f.image, thumbTarget: a._thumbnails[c.index].image, galleriaData: a.getData(c.index)})
                    }})
                })
            }
        }, getNext: function (a) {
            a = typeof a === "number" ? a : this.getIndex();
            return a === this.getDataLength() - 1 ? 0 : a + 1
        }, getPrev: function (a) {
            a = typeof a === "number" ? a : this.getIndex();
            return a === 0 ? this.getDataLength() -
                1 : a - 1
        }, next: function () {
            this.getDataLength() > 1 && this.show(this.getNext(), !1);
            return this
        }, prev: function () {
            this.getDataLength() > 1 && this.show(this.getPrev(), !0);
            return this
        }, get: function (a) {
            return a in this._dom ? this._dom[a] : null
        }, getData: function (a) {
            return a in this._data ? this._data[a] : this._data[this._active]
        }, getDataLength: function () {
            return this._data.length
        }, getIndex: function () {
            return typeof this._active === "number" ? this._active : !1
        }, getStageHeight: function () {
            return this._stageHeight
        }, getStageWidth: function () {
            return this._stageWidth
        },
        getOptions: function (a) {
            return typeof a === "undefined" ? this._options : this._options[a]
        }, setOptions: function (a, c) {
            typeof a === "object" ? e.extend(this._options, a) : this._options[a] = c;
            return this
        }, play: function (a) {
            this._playing = !0;
            this._playtime = a || this._playtime;
            this._playCheck();
            this.trigger(h.PLAY);
            return this
        }, pause: function () {
            this._playing = !1;
            this.trigger(h.PAUSE);
            return this
        }, playToggle: function (a) {
            return this._playing ? this.pause() : this.play(a)
        }, isPlaying: function () {
            return this._playing
        }, isFullscreen: function () {
            return this._fullscreen.active
        },
        _playCheck: function () {
            var a = this, c = 0, e = q.timestamp(), f = "play" + this._id;
            if (this._playing) {
                this.clearTimer(f);
                var i = function () {
                    c = q.timestamp() - e;
                    c >= a._playtime && a._playing ? (a.clearTimer(f), a.next()) : a._playing && (a.trigger({type: h.PROGRESS, percent: r.ceil(c / a._playtime * 100), seconds: r.floor(c / 1E3), milliseconds: c}), a.addTimer(f, i, 20))
                };
                a.addTimer(f, i, 20)
            }
        }, setPlaytime: function (a) {
            this._playtime = a;
            return this
        }, setIndex: function (a) {
            this._active = a;
            return this
        }, setCounter: function (a) {
            typeof a === "number" ? a++ :
                typeof a === "undefined" && (a = this.getIndex() + 1);
            this.get("current").innerHTML = a;
            if (y) {
                var a = this.$("counter"), c = a.css("opacity");
                parseInt(c, 10) === 1 ? q.removeAlpha(a[0]) : this.$("counter").css("opacity", c)
            }
            return this
        }, setInfo: function (a) {
            var c = this, g = this.getData(a);
            e.each(["title", "description"], function (a, e) {
                var h = c.$("info-" + e);
                g[e] ? h[g[e].length ? "show" : "hide"]().html(g[e]) : h.empty().hide()
            });
            return this
        }, hasInfo: function (a) {
            var c = "title description".split(" "), e;
            for (e = 0; c[e]; e++)if (this.getData(a)[c[e]])return!0;
            return!1
        }, jQuery: function (a) {
            var c = this, g = [];
            e.each(a.split(","), function (a, f) {
                f = e.trim(f);
                c.get(f) && g.push(f)
            });
            var f = e(c.get(g.shift()));
            e.each(g, function (a, e) {
                f = f.add(c.get(e))
            });
            return f
        }, $: function () {
            return this.jQuery.apply(this, q.array(arguments))
        }};
    e.each(R, function (a, c) {
        var e = /_/.test(c) ? c.replace(/_/g, "") : c;
        h[c.toUpperCase()] = "galleria." + e
    });
    e.extend(h, {IE9: y === 9, IE8: y === 8, IE7: y === 7, IE6: y === 6, IE: y, WEBKIT: /webkit/.test(v), CHROME: /chrome/.test(v), SAFARI: /safari/.test(v) && !/chrome/.test(v),
        QUIRK: y && o.compatMode && o.compatMode === "BackCompat", MAC: /mac/.test(navigator.platform.toLowerCase()), OPERA: !!i.opera, IPHONE: /iphone/.test(v), IPAD: /ipad/.test(v), ANDROID: /android/.test(v), TOUCH: "ontouchstart"in o});
    h.addTheme = function (a) {
        a.name || h.raise("No theme name specified");
        a.defaults = typeof a.defaults !== "object" ? {} : ja(a.defaults);
        var c = !1, g;
        typeof a.css === "string" ? (e("link").each(function (e, h) {
            g = RegExp(a.css);
            if (g.test(h.href))return c = !0, fa(a), !1
        }), c || e(function () {
            var f = 0, l = function () {
                e("script").each(function (e, f) {
                    g = RegExp("galleria\\." + a.name.toLowerCase() + "\\.");
                    g.test(f.src) && (c = f.src.replace(/[^\/]*$/, "") + a.css, i.setTimeout(function () {
                        q.loadCSS(c, "galleria-theme-" + a.name, function () {
                            fa(a)
                        })
                    }, 1))
                });
                c || (f++ > 5 ? h.raise("No theme CSS loaded") : i.setTimeout(l, 500))
            };
            l()
        })) : fa(a);
        return a
    };
    h.loadTheme = function (a) {
        if (!e("script").filter(function () {
            return e(this).attr("src") == a
        }).length) {
            var c = !1, g;
            e(i).load(function () {
                c || (g = i.setTimeout(function () {
                    c || h.raise("Galleria had problems loading theme at " + a + ". Please check theme path or load manually.",
                        !0)
                }, 2E4))
            });
            q.loadScript(a, function () {
                c = !0;
                i.clearTimeout(g)
            });
            return h
        }
    };
    h.get = function (a) {
        if (N[a])return N[a]; else if (typeof a !== "number")return N; else h.raise("Gallery index " + a + " not found")
    };
    h.configure = function (a, c) {
        var g = {};
        typeof a == "string" && c ? (g[a] = c, a = g) : e.extend(g, a);
        h.configure.options = g;
        e.each(h.get(), function (a, c) {
            c.setOptions(g)
        });
        return h
    };
    h.configure.options = {};
    h.on = function (a, c) {
        if (a) {
            var c = c || I, g = a + c.toString().replace(/\s/g, "") + q.timestamp();
            e.each(h.get(), function (e, h) {
                h._binds.push(g);
                h.bind(a, c)
            });
            h.on.binds.push({type: a, callback: c, hash: g});
            return h
        }
    };
    h.on.binds = [];
    h.run = function (a, c) {
        e.isFunction(c) && (c = {extend: c});
        e(a || "#galleria").galleria(c);
        return h
    };
    h.addTransition = function (a, c) {
        T.effects[a] = c;
        return h
    };
    h.utils = q;
    h.log = function () {
        var a = q.array(arguments);
        if ("console"in i && "log"in i.console)try {
            return i.console.log.apply(i.console, a)
        } catch (c) {
            e.each(a, function () {
                i.console.log(this)
            })
        } else return i.alert(a.join("<br>"))
    };
    h.ready = function (a) {
        if (typeof a != "function")return h;
        e.each(ba, function (c, e) {
            a.call(e, e._options)
        });
        h.ready.callbacks.push(a);
        return h
    };
    h.ready.callbacks = [];
    h.raise = function (a, c) {
        var g = c ? "Fatal error" : "Error", f = {color: "#fff", position: "absolute", top: 0, left: 0, zIndex: 1E5}, h = function (a) {
            var h = '<div style="padding:4px;margin:0 0 2px;background:#' + (c ? "811" : "222") + ';">' + (c ? "<strong>" + g + ": </strong>" : "") + a + "</div>";
            e.each(N, function () {
                var a = this.$("errors"), c = this.$("target");
                a.length || (c.css("position", "relative"), a = this.addElement("errors").appendChild("target",
                    "errors").$("errors").css(f));
                a.append(h)
            });
            N.length || e("<div>").css(e.extend(f, {position: "fixed"})).append(h).appendTo(J().body)
        };
        if (s) {
            if (h(a), c)throw Error(g + ": " + a);
        } else c && !wa && (wa = !0, c = !1, h("Gallery could not load."))
    };
    h.version = 1.41;
    h.getLoadedThemes = function () {
        return e.map(L, function (a) {
            return a.name
        })
    };
    h.requires = function (a, c) {
        h.version < a && h.raise(c || "You need to upgrade Galleria to version " + a + " to use one or more components.", !0);
        return h
    };
    h.Picture = function (a) {
        this.id = a || null;
        this.image =
            null;
        this.container = q.create("galleria-image");
        e(this.container).css({overflow: "hidden", position: "relative"});
        this.original = {width: 0, height: 0};
        this.isIframe = this.ready = !1
    };
    h.Picture.prototype = {cache: {}, show: function () {
        q.show(this.image)
    }, hide: function () {
        q.moveOut(this.image)
    }, clear: function () {
        this.image = null
    }, isCached: function (a) {
        return!!this.cache[a]
    }, preload: function (a) {
        e(new Image).load(function (a, e) {
            return function () {
                e[a] = a
            }
        }(a, this.cache)).attr("src", a)
    }, load: function (a, c, g) {
        typeof c == "function" &&
        (g = c, c = null);
        if (this.isIframe) {
            var f = "if" + (new Date).getTime(), l = this.image = e("<iframe>", {src: a, frameborder: 0, id: f, allowfullscreen: !0, css: {visibility: "hidden"}})[0];
            c && e(l).css(c);
            e(this.container).find("iframe,img").remove();
            this.container.appendChild(this.image);
            e("#" + f).load(function (a, c) {
                return function () {
                    i.setTimeout(function () {
                        e(a.image).css("visibility", "visible");
                        typeof c == "function" && c.call(a, a)
                    }, 10)
                }
            }(this, g));
            return this.container
        }
        this.image = new Image;
        h.IE8 && e(this.image).css("filter",
            "inherit");
        !h.IE && !h.CHROME && !h.SAFARI && e(this.image).css("image-rendering", "optimizequality");
        var n = !1, o = !1, p = e(this.container), s = e(this.image), r = function (a, d, f) {
            return function () {
                var g = function () {
                    e(this).off("load");
                    a.original = c || {height: this.height, width: this.width};
                    if (h.HAS3D)this.style.MozTransform = this.style.webkitTransform = "translate3d(0,0,0)";
                    p.append(this);
                    a.cache[f] = f;
                    typeof d == "function" && i.setTimeout(function () {
                        d.call(a, a)
                    }, 1)
                };
                !this.width || !this.height ? function (a) {
                    q.wait({until: function () {
                        return a.width &&
                            a.height
                    }, success: function () {
                        g.call(a)
                    }, error: function () {
                        o ? h.raise("Could not extract width/height from image: " + a.src + ". Traced measures: width:" + a.width + "px, height: " + a.height + "px.") : (e(new Image).load(r).attr("src", a.src), o = !0)
                    }, timeout: 100})
                }(this) : g.call(this)
            }
        }(this, g, a);
        p.find("iframe,img").remove();
        s.css("display", "block");
        q.hide(this.image);
        e.each("minWidth minHeight maxWidth maxHeight".split(" "), function (a, c) {
            s.css(c, /min/.test(c) ? "0" : "none")
        });
        s.load(r).on("error",function () {
            n ? C ? e(this).attr("src",
                C) : h.raise("Image not found: " + a) : (n = !0, i.setTimeout(function (a, c) {
                return function () {
                    a.attr("src", c + (c.indexOf("?") > -1 ? "&" : "?") + q.timestamp())
                }
            }(e(this), a), 50))
        }).attr("src", a);
        return this.container
    }, scale: function (a) {
        var c = this, a = e.extend({width: 0, height: 0, min: u, max: u, margin: 0, complete: I, position: "center", crop: !1, canvas: !1, iframelimit: u}, a);
        if (this.isIframe) {
            var g = a.width, f = a.height, i, n;
            if (a.iframelimit) {
                var o = r.min(a.iframelimit / g, a.iframelimit / f);
                o < 1 ? (i = g * o, n = f * o, e(this.image).css({top: f / 2 - n / 2,
                    left: g / 2 - i / 2, position: "absolute"})) : e(this.image).css({top: 0, left: 0})
            }
            e(this.image).width(i || g).height(n || f).removeAttr("width").removeAttr("height");
            e(this.container).width(g).height(f);
            a.complete.call(c, c);
            try {
                this.image.contentWindow && e(this.image.contentWindow).trigger("resize")
            } catch (p) {
            }
            return this.container
        }
        if (!this.image)return this.container;
        var s, z, v = e(c.container), d;
        q.wait({until: function () {
            s = a.width || v.width() || q.parseValue(v.css("width"));
            z = a.height || v.height() || q.parseValue(v.css("height"));
            return s && z
        }, success: function () {
            var f = (s - a.margin * 2) / c.original.width, g = (z - a.margin * 2) / c.original.height, h = r.min(f, g), i = r.max(f, g), l = {"true": i, width: f, height: g, "false": h, landscape: c.original.width > c.original.height ? i : h, portrait: c.original.width < c.original.height ? i : h}[a.crop.toString()], f = "";
            a.max && (l = r.min(a.max, l));
            a.min && (l = r.max(a.min, l));
            e.each(["width", "height"], function (a, d) {
                e(c.image)[d](c[d] = c.image[d] = r.round(c.original[d] * l))
            });
            e(c.container).width(s).height(z);
            if (a.canvas && V)V.elem.width =
                c.width, V.elem.height = c.height, f = c.image.src + ":" + c.width + "x" + c.height, c.image.src = V.cache[f] || function (a) {
                V.context.drawImage(c.image, 0, 0, c.original.width * l, c.original.height * l);
                try {
                    return d = V.elem.toDataURL(), V.length += d.length, V.cache[a] = d
                } catch (e) {
                    return c.image.src
                }
            }(f);
            var n = {}, p = {}, f = function (a, d, f) {
                var g = 0;
                /\%/.test(a) ? (a = parseInt(a, 10) / 100, d = c.image[d] || e(c.image)[d](), g = r.ceil(d * -1 * a + f * a)) : g = q.parseValue(a);
                return g
            }, o = {top: {top: 0}, left: {left: 0}, right: {left: "100%"}, bottom: {top: "100%"}};
            e.each(a.position.toLowerCase().split(" "),
                function (a, c) {
                    c === "center" && (c = "50%");
                    n[a ? "top" : "left"] = c
                });
            e.each(n, function (a, c) {
                o.hasOwnProperty(c) && e.extend(p, o[c])
            });
            n = n.top ? e.extend(n, p) : p;
            n = e.extend({top: "50%", left: "50%"}, n);
            e(c.image).css({position: "absolute", top: f(n.top, "height", z), left: f(n.left, "width", s)});
            c.show();
            c.ready = !0;
            a.complete.call(c, c)
        }, error: function () {
            h.raise("Could not scale image: " + c.image.src)
        }, timeout: 1E3});
        return this
    }};
    e.extend(e.easing, {galleria: function (a, c, e, f, h) {
        if ((c /= h / 2) < 1)return f / 2 * c * c * c + e;
        return f / 2 * ((c -=
            2) * c * c + 2) + e
    }, galleriaIn: function (a, c, e, f, h) {
        return f * (c /= h) * c + e
    }, galleriaOut: function (a, c, e, f, h) {
        return-f * (c /= h) * (c - 2) + e
    }});
    h.Finger = function () {
        var a = h.HAS3D = function () {
                var a = o.createElement("p"), c, g = ["webkit", "O", "ms", "Moz", ""], h, i = 0;
                for (J().html.insertBefore(a, null); g[i]; i++)h = g[i] ? g[i] + "Transform" : "transform", a.style[h] !== void 0 && (a.style[h] = "translate3d(1px,1px,1px)", c = e(a).css(g[i] ? "-" + g[i].toLowerCase() + "-transform" : "transform"));
                J().html.removeChild(a);
                return c !== void 0 && c.length > 0 && c !== "none"
            }(),
            c = function () {
                return i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.oRequestAnimationFrame || i.msRequestAnimationFrame || function (a) {
                    i.setTimeout(a, 1E3 / 60)
                }
            }(), g = function (f, g) {
                this.config = {start: 0, duration: 500, onchange: function () {
                }, oncomplete: function () {
                }, easing: function (a, c, e, f, g) {
                    return-f * ((c = c / g - 1) * c * c * c - 1) + e
                }};
                this.easeout = function (a, c, e, f, g) {
                    return f * ((c = c / g - 1) * c * c * c * c + 1) + e
                };
                if (f.children.length) {
                    var h = this;
                    e.extend(this.config, g);
                    this.elem = f;
                    this.child = f.children[0];
                    this.to = this.pos = 0;
                    this.touching = !1;
                    this.start = {};
                    this.index = this.config.start;
                    this.anim = 0;
                    this.easing = this.config.easing;
                    if (!a)this.child.style.position = "absolute", this.elem.style.position = "relative";
                    e.each(["ontouchstart", "ontouchmove", "ontouchend", "setup"], function (a, c) {
                        h[c] = function (a) {
                            return function () {
                                a.apply(h, arguments)
                            }
                        }(h[c])
                    });
                    this.setX = function () {
                        var c = h.child.style;
                        a ? c.MozTransform = c.webkitTransform = c.transform = "translate3d(" + h.pos + "px,0,0)" : c.left = h.pos + "px"
                    };
                    e(f).on("touchstart", this.ontouchstart);
                    e(i).on("resize", this.setup);
                    e(i).on("orientationchange", this.setup);
                    this.setup();
                    (function p() {
                        c(p);
                        h.loop.call(h)
                    })()
                }
            };
        g.prototype = {constructor: g, setup: function () {
            this.width = e(this.elem).width();
            this.length = r.ceil(e(this.child).width() / this.width);
            if (this.index !== 0)this.index = r.max(0, r.min(this.index, this.length - 1)), this.pos = this.to = -this.width * this.index
        }, setPosition: function (a) {
            this.to = this.pos = a
        }, ontouchstart: function (a) {
            a = a.originalEvent.touches;
            this.start = {pageX: a[0].pageX, pageY: a[0].pageY,
                time: +new Date};
            this.isScrolling = null;
            this.touching = !0;
            this.deltaX = 0;
            B.on("touchmove", this.ontouchmove);
            B.on("touchend", this.ontouchend)
        }, ontouchmove: function (a) {
            var c = a.originalEvent.touches;
            if (!(c && c.length > 1 || a.scale && a.scale !== 1)) {
                this.deltaX = c[0].pageX - this.start.pageX;
                if (this.isScrolling === null)this.isScrolling = !!(this.isScrolling || r.abs(this.deltaX) < r.abs(c[0].pageY - this.start.pageY));
                if (!this.isScrolling)a.preventDefault(), this.deltaX /= !this.index && this.deltaX > 0 || this.index == this.length - 1 &&
                    this.deltaX < 0 ? r.abs(this.deltaX) / this.width + 1.8 : 1, this.to = this.deltaX - this.index * this.width;
                a.stopPropagation()
            }
        }, ontouchend: function () {
            this.touching = !1;
            var a = +new Date - this.start.time < 250 && r.abs(this.deltaX) > 40 || r.abs(this.deltaX) > this.width / 2, c = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
            this.isScrolling || this.show(this.index + (a && !c ? this.deltaX < 0 ? 1 : -1 : 0));
            B.off("touchmove", this.ontouchmove);
            B.off("touchend", this.ontouchend)
        }, show: function (a) {
            a != this.index ? this.config.onchange.call(this,
                a) : this.to = -(a * this.width)
        }, moveTo: function (a) {
            if (a != this.index)this.pos = this.to = -(a * this.width), this.index = a
        }, loop: function () {
            var a = this.to - this.pos, c = 1;
            this.width && a && (c = r.max(0.5, r.min(1.5, r.abs(a / this.width))));
            if (this.touching || r.abs(a) <= 1) {
                this.pos = this.to;
                if (this.anim && !this.touching)this.config.oncomplete(this.index);
                this.anim = 0;
                this.easing = this.config.easing
            } else {
                if (!this.anim)this.anim = {start: this.pos, time: +new Date, distance: a, factor: c, destination: this.to};
                a = +new Date - this.anim.time;
                c = this.config.duration *
                    this.anim.factor;
                if (a > c || this.anim.destination != this.to) {
                    this.anim = 0;
                    this.easing = this.easeout;
                    return
                }
                this.pos = this.easing(null, a, this.anim.start, this.anim.distance, c)
            }
            this.setX()
        }};
        return g
    }();
    e.fn.galleria = function (a) {
        var c = this.selector;
        if (!e(this).length)return e(function () {
            e(c).length ? e(c).galleria(a) : h.utils.wait({until: function () {
                return e(c).length
            }, success: function () {
                e(c).galleria(a)
            }, error: function () {
                h.raise('Init failed: Galleria could not find the element "' + c + '".')
            }, timeout: 5E3})
        }), this;
        return this.each(function () {
            e.data(this, "galleria") && (e.data(this, "galleria").destroy(), e(this).find("*").hide());
            e.data(this, "galleria", (new h).init(this, a))
        })
    };
    typeof module === "object" && module && typeof module.exports === "object" ? module.exports = h : (i.Galleria = h, typeof define === "function" && define.amd && define("galleria", ["jquery"], function () {
        return h
    }))
})(jQuery, this);
(function (e) {
    var i = {prototyping: function () {
        e('img[src="#"]').attr("src", "/media/i/placeholder.png").addClass("placeholder").each(function () {
            this.width -= 2;
            this.height -= 2
        });
        e('a[href="#"]').click(function (e) {
            e.preventDefault()
        })
    }, BROWSER: {IE: function () {
        for (var e = 3, i = document.createElement("div"); i.innerHTML = "<\!--[if gt IE " + ++e + "]><i></i><![endif]--\>", i.getElementsByTagName("i")[0];);
        return e > 4 ? e : void 0
    }()}};
    window.Aino = i;
    window.STATIC_URL = "/static/";
    window.THEMES_URL = STATIC_URL + "themes/"
})(jQuery);
var STATIC_URL = "/static/", G_DEMO_IMAGES = [
    {title: "Memory Maker", thumb: STATIC_URL + "i/s2013/2s.jpg", image: STATIC_URL + "i/s2013/2m.jpg", big: STATIC_URL + "i/s2013/2b.jpg", description: "A retro camera stilleben."},
    {title: "Athabasca Rail", thumb: STATIC_URL + "i/s2013/3s.jpg", image: STATIC_URL + "i/s2013/3m.jpg", big: STATIC_URL + "i/s2013/3b.jpg", description: "The Athabasca River railroad track at the mouth of Brul\u00e9 Lake in Alberta, Canada."},
    {title: "New York City", thumb: STATIC_URL + "i/s2013/4s.jpg", image: STATIC_URL +
        "i/s2013/4m.jpg", big: STATIC_URL + "i/s2013/4b.jpg", description: "Vintage skyline in New York City."},
    {title: "Works for Video too", video: "http://vimeo.com/25750735", thumb: "http://b.vimeocdn.com/ts/169/759/169759080_200.jpg", description: "Integrated API for YouTube, Vimeo and Dailymotion videos"},
    {title: "Interior convento", thumb: STATIC_URL + "i/s2013/5s.jpg", image: STATIC_URL + "i/s2013/5m.jpg", big: STATIC_URL + "i/s2013/5b.jpg", description: "Interior view of Yuriria Convent, founded in 1550."},
    {title: "Oxbow Bend outlook",
        thumb: STATIC_URL + "i/s2013/6s.jpg", image: STATIC_URL + "i/s2013/6m.jpg", big: STATIC_URL + "i/s2013/6b.jpg", description: "View over the Snake River to the Mount Moran with the Skillet Glacier."},
    {title: "Hazy blue hour", thumb: STATIC_URL + "i/s2013/7s.jpg", image: STATIC_URL + "i/s2013/7m.jpg", big: STATIC_URL + "i/s2013/7b.jpg", description: "Hazy blue hour in Grand Canyon. View from the South Rim."},
    {title: "Haute Severaisse valley", thumb: STATIC_URL + "i/s2013/8s.jpg", image: STATIC_URL + "i/s2013/8m.jpg", big: STATIC_URL + "i/s2013/8b.jpg",
        description: "View of Haute Severaisse valley and surrounding summits from the slopes of Les Vernets."},
    {title: "Bohinj lake", thumb: STATIC_URL + "i/s2013/9s.jpg", image: STATIC_URL + "i/s2013/9m.jpg", big: STATIC_URL + "i/s2013/9b.jpg", description: "Bohinj lake (Triglav National Park, Slovenia) in the morning."},
    {title: "Bowling Balls", thumb: STATIC_URL + "i/s2013/10s.jpg", image: STATIC_URL + "i/s2013/10m.jpg", big: STATIC_URL + "i/s2013/10b.jpg", description: "Mendocino county, California, USA."}
];
(function (e, i, h, u) {
    (function (e) {
        typeof define === "function" && define.amd ? define(["jquery"], e) : e(jQuery)
    })(function (e) {
        function h(e) {
            if (v.raw)return e;
            return decodeURIComponent(e.replace(o, " "))
        }

        function i(e) {
            e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            e = h(e);
            try {
                return v.json ? JSON.parse(e) : e
            } catch (o) {
            }
        }

        var o = /\+/g, v = e.cookie = function (o, C, r) {
            if (C !== u) {
                r = e.extend({}, v.defaults, r);
                if (typeof r.expires === "number") {
                    var B = r.expires, M = r.expires = new Date;
                    M.setDate(M.getDate() +
                        B)
                }
                C = v.json ? JSON.stringify(C) : String(C);
                return document.cookie = [v.raw ? o : encodeURIComponent(o), "=", v.raw ? C : encodeURIComponent(C), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
            }
            C = document.cookie.split("; ");
            r = o ? u : {};
            B = 0;
            for (M = C.length; B < M; B++) {
                var y = C[B].split("="), J = h(y.shift()), y = y.join("=");
                if (o && o === J) {
                    r = i(y);
                    break
                }
                o || (r[J] = i(y))
            }
            return r
        };
        v.defaults = {};
        e.removeCookie = function (h, i) {
            if (e.cookie(h) !== u)return e.cookie(h,
                "", e.extend({}, i, {expires: -1})), !0;
            return!1
        }
    });
    var o = [], B = e.G = {init: function (e) {
        this.views._global.call(this);
        for (var h = document.body.className.split(" "), i = 0; i < h.length; i++)h[i]in this.views && this.views[h[i]].call(this);
        typeof e === "number" && B.run(e)
    }, make: function (e, h) {
        o[e] = h
    }, run: function (e, u, s) {
        u = u || "#demo";
        s = s || function () {
        };
        h.utils.loadCSS(THEMES_URL + e + "/" + e + ".css", "galleria-theme-" + e, function () {
            var h = i(u).galleria({responsive: !0, height: 0.5, dataSource: G_DEMO_IMAGES, maxVideoSize: 1300, extend: function (e) {
                s.call(this,
                    e)
            }}).data("galleria");
            h.theme = i.extend(o[e], {name: ["ruza", "evlewt", "neercslluf", "cissalc", "oilof", "lminim"][e].split("").reverse().join("")});
            h._init()
        })
    }, trackDownload: function (e) {
        i(e).each(function () {
            i(this).click(function () {
                var e = this.href.split("/");
                _gaq.push(["_trackEvent", "Stats", "Download", e.length > 1 ? e[e.length - 1] : "unknown"])
            })
        })
    }, views: {_global: function () {
        i(".campaign");
        i(".main a:path").addClass("active");
        i(".secondary .box li:last").addClass("last");
        B.trackDownload("a.dl, a.download");
        i(".messages li:first").each(function () {
            var e = this;
            i("<a>", {text: "'", href: "#", "class": "close symbol", click: function (h) {
                h.preventDefault();
                i(e).animate({opacity: 0}, 300, function () {
                    i(e).animate({height: 0}, 200, function () {
                        i(e).remove()
                    })
                })
            }}).appendTo(i(this).find("p"));
            this.className == "info" ? i(this).find("p .symbol").text("/") : i(this).find("p .symbol").text("W")
        });
        i("ul.errorlist li").each(function () {
            i(this).prepend('<span class="symbol">W</span> ')
        })
    }, admin: function () {
        i(".menu a:path").addClass("active")
    },
        settings: function () {
            var h = i("form.settings"), o = h.find(".verify").hide(), s = h.find(".email"), u = s.val(), v;
            s.focus(function () {
                v = e.setInterval(function () {
                    s.val() != u && o.is(":hidden") ? o.show() : s.val() == u && o.is(":visible") && o.hide()
                }, 50)
            }).blur(function () {
                e.clearInterval(v)
            })
        }, login: function () {
            i("form.login").find(".error ul").each(function () {
                i(this).parent().prev("input").addClass("error");
                i(this).find(".symbol").remove()
            });
            i("#id_login").blur().focus()
        }, home: function () {
            i.cookie("gdbanner") && i("body").addClass("nobanner");
            i(".banner a.close").click(function (e) {
                i.cookie("gdbanner", "closed", {expires: 3});
                e.preventDefault();
                i(".banner").animate({height: 0, opacity: 0, margin: 0})
            });
            B.run(1, "#demo", function () {
                Galleria.TOUCH && this.setOptions("transition", "fadeslide");
                this.setOptions("responsive", !0)
            })
        }, tp: function () {
            var e = i("#themes");
            i("#theme-switcher").click(function () {
                e.toggle()
            }).trigger("click")
        }, docs: function () {
        }, "theme-purchase": function () {
            var h = i("form.info"), o = !1, s, u, v = h.find(".email"), D = v.parent().next(".err"), B = !1,
                r = function () {
                    h.find("input[name=residence]").each(function () {
                        if (i(this).attr("checked") && (this.className == "outside" && (i(".buy-form input[name=amount]").val(s), i(".total span").html("<strong>$" + s + "</strong>")), this.className == "addvat")) {
                            u = parseFloat(s) * 0.25;
                            var e = Math.round((parseFloat(s) + u) * 100) / 100;
                            i(".buy-form input[name=amount]").val(e);
                            i(".total span").html("$" + s + " + $" + u + " VAT = <strong>$" + e + "</strong>")
                        }
                    })
                };
            v.blur(function () {
                v.val().length ? B || (o = !0, v.removeClass("error"), D.html("")) : (o = !1, D.html("This field is required."),
                    v.attr("class", "error"))
            });
            if (v.length && v.val().length || !i(".emailwrap").length)o = !0;
            h.find("input[name=residence]").change(function () {
                r()
            });
            s = parseFloat(i(".buy-form").data("price"));
            i("input[type=image]").each(function () {
                s = s.toFixed(2);
                var r = '<div class="total">Total: <span>' + (i(this).closest(".buy-form").hasClass("hasvat") ? "$" + s * 0.8 + " + $" + (s * 0.2).toFixed(2) + " VAT = <strong>$" + s : "<strong>$" + s) + "</strong></span></div>", u = i("<a>", {href: "#", html: "Buy Now", click: function (s) {
                    s.preventDefault();
                    i(this).closest("form");
                    var r = i(this), u = arguments.callee, C = function (e) {
                        var o = h.find("input[name=paytype]:checked").val();
                        o == "paypal" ? (o = i('<input type="hidden" name="invoice" value="' + e.invoice + '">'), i(".buy-form form").append(o), r.after('<p class="loading"><em>Contacting PayPal...</em></p>').parent().addClass("disabled"), i(".buy-form input[name=amount]").val(e.total_price), i(".buy-form form").submit()) : o == "dibs" && (i.each(e, function (h) {
                            h = i('<input type="hidden" name="' + h + '" value="' + e[h] + '">');
                            i(".dibs-form form").append(h)
                        }),
                            r.after('<p class="loading"><em>Contacting Dibs...</em></p>').parent().addClass("disabled"), i(".dibs-form form").submit());
                        return!1
                    };
                    i("div.customer").length ? i.post(h.attr("action"), h.serialize(), function (e) {
                        e.errors ? alert("We are very sorry, but something went wrong with your account, please contact us at info@aino.se and describe your problem.") : C(e)
                    }, "json") : o ? (r.unbind("click").parent().addClass("disabled"), function () {
                        i.post(h.attr("action"), h.serialize(), function (h) {
                            if (h.errors)if (r.bind("click",
                                u).parent().removeClass("disabled"), h.errors.email)B = !0, D.html(h.errors.email[0]), v.attr("class", "error").focus(); else {
                                var o = i("<div>").addClass("messages"), s = i("<ul>").appendTo(o);
                                i.each(h.errors, function () {
                                    s.append('<li class="error"><p><span class="symbol">W</span>' + this[0] + "</p></li>")
                                });
                                o.insertAfter("header.main");
                                e.scrollTo(0, 0)
                            } else C(h)
                        }, "json")
                    }()) : (v.attr("class", "error").focus(), D.html("This field is required."))
                }});
                i(this).replaceWith(u);
                u.before(r);
                u.wrap('<div class="btn send" />')
            });
            r()
        }}};
    i(document).on("mousedown mouseup", "a", function (e) {
        if ("hideFocus"in this)this.hideFocus = e.type == "mousedown";
        this.blur()
    });
    e.G = B
})(window, jQuery, Galleria);
(function (e) {
    G.make(0, {defaults: {transition: "fade", transitionSpeed: 500, imageCrop: !0, thumbCrop: "height", idleMode: "hover", idleSpeed: 500, fullscreenTransition: !1, _locale: {show_captions: "Show captions", hide_captions: "Hide captions", play: "Play slideshow", pause: "Pause slideshow", enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen", next: "Next image", prev: "Previous image", showing_image: "Showing image %s of %s"}, _toggleCaption: !0, _showCaption: !0, _showTooltip: !0}, init: function (i) {
        Galleria.requires(1.4,
            "This version of Azur theme requires Galleria version 1.4 or later");
        this.addElement("bar", "fullscreen", "play", "progress").append({stage: "progress", container: "bar", bar: ["fullscreen", "play", "thumbnails-container"]}).prependChild("stage", "info").appendChild("container", "tooltip");
        var h = this, u = window.document, o = i._locale, B = "getContext"in u.createElement("canvas");
        (function () {
            if (B) {
                var i = u.createElement("canvas"), o = i.getContext("2d");
                i.width = 24;
                i.height = 24;
                e(i).css({zIndex: 1E4, position: "absolute", right: 10,
                    top: 10}).appendTo(h.get("container"));
                h.bind("progress", function (h) {
                    e(i).fadeIn(200);
                    h = h.percent * 3.6;
                    o.strokeStyle = "rgba(255,255,255,.7)";
                    o.lineWidth = 3;
                    o.clearRect(0, 0, 24, 24);
                    o.beginPath();
                    o.arc(12, 12, 10, -90 * (Math.PI / 180), (h - 90) * (Math.PI / 180), !1);
                    o.stroke();
                    o.closePath()
                });
                h.bind("pause", function () {
                    e(i).fadeOut(200, function () {
                        o.clearRect(0, 0, 24, 24)
                    })
                })
            } else {
                h.addElement("progressbar").appendChild("progress", "progressbar");
                h.$("progress").addClass("nocanvas");
                var v = h.$("progress").width();
                h.bind("progress",
                    function (e) {
                        h.$("progressbar").width(e.percent / 100 * v)
                    })
            }
        })();
        (function () {
            var i = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    window.setTimeout(e, 1E3 / 60)
                }
            }();
            if (B) {
                var o = u.createElement("canvas"), v = o.getContext("2d"), z = Math, A = function (e, h, i) {
                    i = i ? -2 : 2;
                    e.translate(h / i, h / i)
                }, r = 28;
                e(o).hide().appendTo(h.get("loader")).fadeIn(500);
                (function M() {
                    i(M);
                    var e = r, h;
                    v.clearRect(0, 0, 48, 48);
                    v.lineWidth = 1.5;
                    for (var o = 0; o < 28; o++)h = o + e >= 28 ? o - 28 + e : o + e, v.strokeStyle = "rgba(255,255,255," + z.max(0, h / 28) + ")", v.lineWidth = 1, v.beginPath(), v.moveTo(24, 8), v.lineTo(24, 0), v.stroke(), A(v, 48, !1), v.rotate(360 / 28 * z.PI / 180), A(v, 48, !0);
                    v.save();
                    A(v, 48, !1);
                    v.rotate(-1 * (360 / 28 / 8) * z.PI / 180);
                    A(v, 48, !0);
                    r = r === 0 ? 28 : r - 1
                })()
            } else h.$("loader").addClass("nocanvas")
        })();
        var z = Galleria.IE < 9 ? {bottom: -100} : {bottom: -50, opacity: 0}, A = Galleria.IE < 9 ? {top: -20} : {opacity: 0, top: -20};
        this.bind("play",function () {
            this.$("play").addClass("pause");
            B || this.$("progress").show()
        }).bind("pause",function () {
            this.$("play").removeClass("pause");
            B || this.$("progress").hide()
        }).bind("loadstart",function (e) {
            e.cached || this.$("loader").show()
        }).bind("loadfinish", function () {
            B ? this.$("loader").fadeOut(100) : this.$("loader").hide()
        });
        this.addIdleState(this.get("info"), z, Galleria.IE < 9 ? {} : {opacity: 1}, !0).addIdleState(this.get("image-nav-left"), {opacity: 0, left: 0}, {opacity: 1}, !0).addIdleState(this.get("image-nav-right"), {opacity: 0, right: 0}, {opacity: 1}, !0).addIdleState(this.get("counter"),
            A, Galleria.IE < 9 ? {} : {opacity: 0.9}, !0);
        this.$("fullscreen").on("click:fast", function (e) {
            e.preventDefault();
            h.toggleFullscreen()
        });
        this.$("play").on("click:fast", function (e) {
            e.preventDefault();
            h.playToggle()
        });
        i._toggleCaption && (this.$("info").addClass("toggler"), this.addElement("captionopen").appendChild("stage", "captionopen"), this.addElement("captionclose").appendChild("info", "captionclose"), this.$("captionopen").on("click:fast",function () {
            h.$("info").addClass("open");
            e(this).hide()
        }).html(o.show_captions),
            this.bind("loadstart", function () {
                this.$("captionopen").toggle(!h.$("info").hasClass("open") && this.hasInfo())
            }), this.$("captionclose").on("click:fast",function () {
            h.$("info").removeClass("open");
            h.hasInfo() && h.$("captionopen").show()
        }).html("&#215;"), i._showCaption && this.$("captionopen").trigger("click:fast"));
        i._showTooltip && this.bindTooltip({fullscreen: function () {
            return h.isFullscreen() ? o.exit_fullscreen : o.enter_fullscreen
        }, play: function () {
            return h.isPlaying() ? o.pause : o.play
        }, captionclose: o.hide_captions,
            "image-nav-right": o.next, "image-nav-left": o.prev, counter: function () {
                return o.showing_image.replace(/\%s/, h.getIndex() + 1).replace(/\%s/, h.getDataLength())
            }})
    }});
    G.make(1, {defaults: {transition: "pulse", transitionSpeed: 500, imageCrop: !0, thumbCrop: !0, carousel: !1, _locale: {show_thumbnails: "Show thumbnails", hide_thumbnails: "Hide thumbnails", play: "Play slideshow", pause: "Pause slideshow", enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen", popout_image: "Popout image", showing_image: "Showing image %s of %s"},
        _showFullscreen: !0, _showPopout: !0, _showProgress: !0, _showTooltip: !0}, init: function (i) {
        Galleria.requires(1.4, "This version of Twelve theme requires Galleria version 1.4 or later");
        this.addElement("bar", "fullscreen", "play", "popout", "thumblink", "s1", "s2", "s3", "s4", "progress");
        this.append({stage: "progress", container: ["bar", "tooltip"], bar: ["fullscreen", "play", "popout", "thumblink", "info", "s1", "s2", "s3", "s4"]});
        this.prependChild("info", "counter");
        var h = this, u = this.$("thumbnails-container"), o = this.$("thumblink"),
            B = this.$("fullscreen"), z = this.$("play"), A = this.$("popout"), s = this.$("bar"), C = this.$("progress"), v = i.transition, D = i._locale, K = !1, r = !1, I = !!i.autoplay, M = !1, y = function () {
                u.height(h.getStageHeight()).width(h.getStageWidth()).css("top", K ? 0 : h.getStageHeight() + 30)
            }, J = function () {
                K && M ? h.play() : (M = I, h.pause());
                Galleria.utils.animate(u, {top: K ? h.getStageHeight() + 30 : 0}, {easing: "galleria", duration: 400, complete: function () {
                    h.defineTooltip("thumblink", K ? D.show_thumbnails : D.hide_thumbnails);
                    o[K ? "removeClass" : "addClass"]("open");
                    K = !K
                }})
            };
        y();
        i._showTooltip && h.bindTooltip({thumblink: D.show_thumbnails, fullscreen: D.enter_fullscreen, play: function () {
            return I ? D.pause : D.play
        }, popout: D.popout_image, caption: function () {
            var e = h.getData(), i = "";
            e && (e.title && e.title.length && (i += "<strong>" + e.title + "</strong>"), e.description && e.description.length && (i += "<br>" + e.description));
            return i
        }, counter: function () {
            return D.showing_image.replace(/\%s/, h.getIndex() + 1).replace(/\%s/, h.getDataLength())
        }});
        i.showInfo || this.$("info").hide();
        this.bind("play",
            function () {
                I = !0;
                z.addClass("playing")
            });
        this.bind("pause", function () {
            I = !1;
            z.removeClass("playing");
            C.width(0)
        });
        i._showProgress && this.bind("progress", function (e) {
            C.width(e.percent / 100 * this.getStageWidth())
        });
        this.bind("loadstart", function (e) {
            e.cached || this.$("loader").show()
        });
        this.bind("loadfinish", function () {
            C.width(0);
            this.$("loader").hide();
            this.refreshTooltip("counter", "caption")
        });
        this.bind("thumbnail", function (i) {
            e(i.thumbTarget).hover(function () {
                    h.setInfo(i.thumbOrder);
                    h.setCounter(i.thumbOrder)
                },
                function () {
                    h.setInfo();
                    h.setCounter()
                }).on("click:fast", function () {
                    J()
                })
        });
        this.bind("fullscreen_enter", function () {
            r = !0;
            h.setOptions("transition", !1);
            B.addClass("open");
            s.css("bottom", 0);
            this.defineTooltip("fullscreen", D.exit_fullscreen);
            Galleria.TOUCH || this.addIdleState(s, {bottom: -31})
        });
        this.bind("fullscreen_exit", function () {
            r = !1;
            Galleria.utils.clearTimer("bar");
            h.setOptions("transition", v);
            B.removeClass("open");
            s.css("bottom", 0);
            this.defineTooltip("fullscreen", D.enter_fullscreen);
            Galleria.TOUCH ||
            this.removeIdleState(s, {bottom: -31})
        });
        this.bind("rescale", y);
        Galleria.TOUCH || (this.addIdleState(this.get("image-nav-left"), {left: -36}), this.addIdleState(this.get("image-nav-right"), {right: -36}));
        o.on("click:fast", J);
        i.thumbnails || (o.hide(), z.css("left", 0), this.$("s2").hide(), this.$("info").css("left", 41));
        if (i._showPopout)A.on("click:fast", function (e) {
            h.openLightbox();
            e.preventDefault()
        }); else A.remove(), i._showFullscreen && (this.$("s4").remove(), this.$("info").css("right", 40), B.css("right", 0));
        z.on("click:fast",
            function () {
                I ? h.pause() : (K && o.trigger("click:fast"), h.play())
            });
        if (i._showFullscreen)B.on("click:fast", function () {
            r ? h.exitFullscreen() : h.enterFullscreen()
        }); else B.remove(), i._show_popout && (this.$("s4").remove(), this.$("info").css("right", 40), A.css("right", 0));
        !i._showFullscreen && !i._showPopout && (this.$("s3,s4").remove(), this.$("info").css("right", 10));
        i.autoplay && this.trigger("play")
    }});
    G.make(2, {defaults: {transition: "none", imageCrop: !0, thumbCrop: "height", easing: "galleriaOut", trueFullscreen: !1, _hideDock: !0,
        _closeOnClick: !1}, init: function (i) {
        Galleria.requires(1.4, "This version of Fullscreen theme requires Galleria version 1.4 or later");
        this.addElement("thumbnails-tab");
        this.appendChild("thumbnails-container", "thumbnails-tab");
        var h = this.$("thumbnails-tab"), u = this.$("loader"), o = this.$("thumbnails-container"), B = this.$("thumbnails-list"), z = this.$("info-text"), A = this.$("info"), s = !i._hideDock, C = 0;
        Galleria.IE && (this.addElement("iefix"), this.appendChild("container", "iefix"), this.$("iefix").css({zIndex: 3, position: "absolute",
            backgroundColor: this.hasVariation("light") ? "#fff" : "#000", opacity: 0.4, top: 0}));
        i.thumbnails === !1 && o.hide();
        var v = this.proxy(function (h) {
            var i = h.width || e(h).width();
            if (h || i)i = Math.min(i, e(window).width()), z.width(i - 40), Galleria.IE && this.getOptions("showInfo") && this.$("iefix").width(A.outerWidth()).height(A.outerHeight())
        });
        this.bind("rescale", function () {
            C = this.getStageHeight() - h.height() - 2;
            o.css("top", s ? C - B.outerHeight() + 2 : C);
            var e = this.getActiveImage();
            e && v(e)
        });
        this.bind("loadstart", function (h) {
            h.cached ||
            u.show().fadeTo(100, 1);
            e(h.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
        });
        this.bind("loadfinish", function () {
            u.fadeOut(300);
            this.$("info, iefix").toggle(this.hasInfo())
        });
        this.bind("image", function (e) {
            e.imageTarget && v(e.imageTarget)
        });
        this.bind("thumbnail", function (o) {
            e(o.thumbTarget).parent(":not(.active)").children().css("opacity", 0.6);
            e(o.thumbTarget).on("click:fast", function () {
                s && i._closeOnClick && h.trigger("click:fast")
            })
        });
        this.trigger("rescale");
        Galleria.TOUCH ||
        (this.addIdleState(o, {opacity: 0}), this.addIdleState(this.get("info"), {opacity: 0}), this.$("image-nav-left, image-nav-right").css("opacity", 0.01).hover(function () {
            e(this).animate({opacity: 1}, 100)
        },function () {
            e(this).animate({opacity: 0})
        }).show());
        Galleria.IE && this.addIdleState(this.get("iefix"), {opacity: 0});
        if (i._hideDock)h.on("click:fast", this.proxy(function () {
            h.toggleClass("open", !s);
            s ? o.animate({top: C}, 400, i.easing) : o.animate({top: C - B.outerHeight() + 2}, 400, i.easing);
            s = !s
        })); else this.bind("thumbnail",
            function () {
                o.css("top", C - B.outerHeight() + 2)
            }), h.css("visibility", "hidden");
        this.$("thumbnails").children().hover(function () {
            e(this).not(".active").children().stop().fadeTo(100, 1)
        }, function () {
            e(this).not(".active").children().stop().fadeTo(400, 0.6)
        });
        this.enterFullscreen();
        this.attachKeyboard({escape: function () {
            return!1
        }, up: function (e) {
            s || h.trigger("click:fast");
            e.preventDefault()
        }, down: function (e) {
            s && h.trigger("click:fast");
            e.preventDefault()
        }})
    }});
    G.make(3, {defaults: {transition: "slide", thumbCrop: "height",
        _toggleInfo: !0}, init: function (i) {
        Galleria.requires(1.4, "This version of Classic theme requires Galleria 1.4 or later");
        this.addElement("info-link", "info-close");
        this.append({info: ["info-link", "info-close"]});
        var h = this.$("info-link,info-close,info-text"), u = Galleria.TOUCH;
        this.$("loader,counter").show().css("opacity", 0.4);
        u || (this.addIdleState(this.get("image-nav-left"), {left: -50}), this.addIdleState(this.get("image-nav-right"), {right: -50}), this.addIdleState(this.get("counter"), {opacity: 0}));
        i._toggleInfo === !0 ? h.bind("click:fast", function () {
            h.toggle()
        }) : (h.show(), this.$("info-link, info-close").hide());
        this.bind("thumbnail", function (h) {
            u ? e(h.thumbTarget).css("opacity", this.getIndex() ? 1 : 0.6).bind("click:fast", function () {
                e(this).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
            }) : (e(h.thumbTarget).css("opacity", 0.6).parent().hover(function () {
                e(this).not(".active").children().stop().fadeTo(100, 1)
            }, function () {
                e(this).not(".active").children().stop().fadeTo(400, 0.6)
            }), h.index === this.getIndex() &&
                e(h.thumbTarget).css("opacity", 1))
        });
        this.bind("loadstart", function (h) {
            h.cached || this.$("loader").show().fadeTo(200, 0.4);
            window.setTimeout(function () {
                e(h.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
            }, u ? 300 : 0);
            this.$("info").toggle(this.hasInfo())
        });
        this.bind("loadfinish", function () {
            this.$("loader").fadeOut(200)
        })
    }});
    G.make(4, {defaults: {transition: "pulse", thumbCrop: "width", imageCrop: !1, carousel: !1, show: !1, easing: "galleriaOut", trueFullscreen: !1, _webkitCursor: !1, _animate: !0,
        _center: !1, _onClick: null}, init: function (i) {
        Galleria.requires(1.4, "This version of Folio theme requires Galleria version 1.4 or later");
        this.addElement("preloader", "loaded", "close").append({container: "preloader", preloader: "loaded", stage: "close"});
        var h = this, u = this.$("stage"), o = this.$("thumbnails"), B = this.$("thumbnails-container"), z = this.$("images"), A = this.$("info"), s = this.$("loader"), C = this.$("target"), v = 0, D = C.width(), K = i._center, r = 0, I = 0, M = window.location.hash.substr(2), y = function (i) {
            h.$("info").css({left: h.finger ?
                20 : Math.max(20, e(window).width() / 2 - i / 2 + 10)})
        }, J = function (h, i) {
            var i = e.extend({speed: 400, width: 190, onbrick: function () {
            }, onheight: function () {
            }, delay: 0, debug: !1}, i), h = e(h), s = h.children(), v = h.width(), u = Math.floor(v / i.width), z = [], C, A, y, D = {"float": "none", position: "absolute", display: Galleria.SAFARI ? "inline-block" : "block"};
            K && (v = B.width(), v = (v - (u * r - 10)) / 2, o.css("left", u ? v : 0));
            if (h.data("colCount") !== u && (h.data("colCount", u), s.length)) {
                for (C = 0; C < u; C++)z[C] = 0;
                h.css("position", "relative");
                s.css(D).each(function (h, o) {
                    o = e(o);
                    for (C = u - 1; C > -1; C--)z[C] === Math.min.apply(window, z) && (A = C);
                    y = {top: z[A], left: i.width * A};
                    typeof y.top !== "number" || typeof y.left !== "number" || (i.speed ? window.setTimeout(function (e, h, i) {
                        return function () {
                            Galleria.utils.animate(e, i, {easing: "galleriaOut", duration: h.speed, complete: h.onbrick})
                        }
                    }(o, i, y), h * i.delay) : (o.css(y), i.onbrick.call(o)), o.data("height") || o.data("height", o.outerHeight(!0)), z[A] += o.data("height"))
                });
                s = Math.max.apply(window, z);
                !(s < 0) && typeof s === "number" && (i.speed ? h.animate({height: Math.max.apply(window,
                    z)}, i.speed, i.onheight) : (h.height(Math.max.apply(window, z)), i.onheight.call(h)))
            }
        };
        K && this.$("container").addClass("center");
        this.bind("fullscreen_enter", function () {
            this.$("container").css("height", "100%");
            h.finger && e.each(h._controls.slides, function (h, i) {
                e(i.container).show()
            })
        });
        this.bind("fullscreen_exit", function () {
            this.getData().iframe && (e(this._controls.getActive().container).find("iframe").remove(), this.$("container").removeClass("iframe"));
            Galleria.TOUCH || e(h._controls.getActive().container).hide();
            h.finger && e.each(h._controls.slides, function (h, i) {
                e(i.container).hide()
            })
        });
        this._fullscreen.beforeExit = function (e) {
            A.hide();
            Galleria.IE8 && Galleria.utils.animate(h.getActiveImage(), {opacity: 0}, {duration: 200});
            Galleria.utils.animate(u[0], {opacity: 0}, {duration: 200, complete: function () {
                u.css({visibility: "hidden", opacity: 1});
                o.show();
                Galleria.utils.animate(o[0], {opacity: 1}, {duration: 200});
                e()
            }})
        };
        this.bind("thumbnail", function (s) {
            this.addElement("plus");
            var A = s.thumbTarget, y = this.$("plus").css({display: "block"}).insertAfter(A),
                B = e(A).parent().data("index", s.index);
            i.showInfo && this.hasInfo(s.index) && y.append("<span>" + this.getData(s.index).title + "</span>");
            r = r || e(A).parent().outerWidth(!0);
            I = I || r - e(A).width();
            e(A).css("opacity", 0);
            B.off(i.thumbEventType);
            Galleria.IE ? y.hide() : y.css("opacity", 0);
            if (Galleria.TOUCH)B.on("touchstart",function () {
                y.css("opacity", 1)
            }).on("touchend", function () {
                y.hide()
            }); else B.hover(function () {
                Galleria.IE ? y.show() : y.stop().css("opacity", 1)
            }, function () {
                Galleria.IE ? y.hide() : y.stop().animate({opacity: 0},
                    300)
            });
            v++;
            this.$("loaded").css("width", v / this.getDataLength() * 100 + "%");
            v === this.getDataLength() && (this.$("preloader").fadeOut(100), o.data("colCount", null), J(o, {width: r, speed: i._animate ? 400 : 0, onbrick: function () {
                var r = e(this).find("img, .img");
                window.setTimeout(function (r) {
                    return function () {
                        Galleria.utils.animate(r, {opacity: 1}, {duration: i.transition_speed, complete: function () {
                            e(r).parent().css("background", "#000")
                        }});
                        r.parent().off("click:fast click").on("click:fast", function () {
                            var r = e(this).data("index");
                            Galleria.IE < 9 && e(this).find(".galleria-plus").hide();
                            e.isFunction(i._onClick) ? i._onClick.call(h, h.getData(r)) : (u.css({visibility: "visible", opacity: 0}), h.$("target").height(h.$("target").height()), h.finger && z.css("opacity", 0), Galleria.utils.animate(o[0], {opacity: 0}, {duration: 100, complete: function () {
                                o.hide();
                                h.enterFullscreen();
                                Galleria.utils.animate(u[0], {opacity: 1}, {duration: 200, complete: function () {
                                    h.finger && (z.animate({opacity: 1}), h.finger.moveTo(r));
                                    h.finger && h.finger.setPosition(-r * h.finger.width);
                                    h.show(r)
                                }})
                            }}))
                        })
                    }
                }(r), i._animate ? r.parent().data("index") * 100 : 0)
            }, onheight: function () {
                C.height(o.height())
            }}))
        });
        this.bind("loadstart", function (e) {
            e.cached || s.show()
        });
        this.bind("data", function () {
            v = 0
        });
        this.bind("loadfinish", function (h) {
            h.galleriaData && (s.hide(), this.finger || A.hide(), this.hasInfo() && i.showInfo && this.isFullscreen() && !this.finger && A.fadeIn(i.transition ? i.transitionSpeed : 0), y(e(h.imageTarget).width()), this.finger && A.show())
        });
        !Galleria.TOUCH && !i._webkitCursor && (this.addIdleState(this.get("image-nav-left"),
            {left: -100}), this.addIdleState(this.get("image-nav-right"), {right: -100}), this.addIdleState(this.get("info"), {opacity: 0}));
        this.$("container").css({width: i.width, height: "auto"});
        i._webkitCursor && Galleria.WEBKIT && !Galleria.TOUCH && this.$("image-nav-right,image-nav-left").addClass("cur");
        Galleria.TOUCH && this.setOptions({transition: "fadeslide", initialTransition: !1});
        this.$("close").on("click:fast", function () {
            h.exitFullscreen()
        });
        Galleria.History && M && (u.css("visibility", "visible"), o.css("opacity", 0), this.$("preloader").hide(),
            this.enterFullscreen(function () {
                this.show(parseInt(M, 10))
            }));
        var Q = null, R = function () {
            Q = null;
            if (h.isFullscreen())h.getActiveImage() && y(h.getActiveImage().width); else {
                var e = B.width();
                e !== D && (D = e, J(o, {width: r, delay: 50, debug: !0, onheight: function () {
                    C.height(o.height())
                }}))
            }
        };
        e(window).resize(function () {
            Q && clearTimeout(Q);
            Q = setTimeout(R, 200)
        });
        R()
    }});
    G.make(5, {defaults: {transition: "pulse", thumbCrop: !0, imageCrop: !0, carousel: !1, imagePan: !0, clicknext: !0, _locale: {enter_fullscreen: "Enter fullscreen", exit_fullscreen: "Exit fullscreen",
        click_to_close: "Click to close", show_thumbnails: "Show thumbnails", show_info: "Show info"}}, init: function (i) {
        Galleria.requires(1.4, "This version of Miniml theme requires Galleria version 1.4 or later");
        var h = this, u = !1, o;
        o = 0;
        var B, z, A;
        this.addElement("desc", "dots", "thumbs", "fs", "more");
        this.append({container: ["desc", "dots", "thumbs", "fs", "info-description", "more"]});
        A = this.$("thumbnails-container").hide().css("visibility", "visible");
        var s = function (i) {
            return e("<div>").html("&#8226;").on("click:fast",
                function (e) {
                    return function (i) {
                        i.preventDefault();
                        h.show(e)
                    }
                }(i))
        };
        for (o = 0; o < this.getDataLength(); o++)this.$("dots").append(s(o));
        o = this.$("dots").outerWidth();
        B = this.$("desc").hide().hover(function () {
            e(this).addClass("hover")
        },function () {
            e(this).removeClass("hover")
        }).on("click:fast", function () {
            e(this).hide()
        });
        z = this.$("loader");
        this.bindTooltip({fs: function () {
            return u ? i._locale.exit_fullscreen : i._locale.enter_fullscreen
        }, desc: i._locale.click_to_close, more: i._locale.show_info, thumbs: i._locale.show_thumbnails});
        this.bind("loadstart", function (e) {
            e.cached || this.$("loader").show().fadeTo(200, 0.4)
        });
        this.bind("loadfinish", function (e) {
            var o = h.getData().title, s = h.getData().description;
            z.fadeOut(200);
            this.$("dots").children("div").eq(e.index).addClass("active").siblings(".active").removeClass("active");
            o && s ? (B.empty().append("<strong>" + o + "</strong>", "<p>" + s + "</p>"), this.$("more").show()) : this.$("more").hide();
            A.fadeOut(i.fadeSpeed);
            h.$("thumbs").removeClass("active")
        });
        this.bind("thumbnail", function (i) {
            e(i.thumbTarget).hover(function () {
                    h.setInfo(i.index)
                },
                function () {
                    h.setInfo()
                })
        });
        this.$("fs").on("click:fast", function () {
            h.toggleFullscreen();
            u = !u
        });
        this.$("thumbs").on("click:fast", function (h) {
            h.preventDefault();
            A.toggle();
            e(this).toggleClass("active");
            B.hide()
        });
        this.$("more").on("click:fast", function () {
            B.toggle()
        });
        this.$("info").css({width: this.getStageWidth() - o - 30, left: o + 10})
    }})
})(jQuery);
(function (e) {
    var i = this, h = function (e) {
        var h = i.location, o, u;
        if (/^\w+:/.test(e))return e.toString();
        o = h.protocol + "//" + h.host;
        if (e.indexOf("/") === 0)return o + e.toString();
        h = h.pathname.replace(/\/[^\/]*$/, "");
        if (u = e.match(/\.\.\//g)) {
            e = e.substring(u.length * 3);
            for (u = u.length; u--;)h = h.substring(0, h.lastIndexOf("/"))
        } else e = e.toString();
        return o + h + "/" + e
    }, u = function (e, h) {
        var i;
        if (e.length !== h.length)return!1;
        for (i = 0; i < h.length; i++)if (e[i] !== h[i])return!1;
        return!0
    }, o = function (e) {
        return e.replace(/#.*$/, "").replace(/\?.*/,
            "").replace(/\/$/, "")
    }, B = o(i.location.href).split("/");
    e.extend(e.expr[":"], {path: function (e) {
        if (!(e.href && e.nodeName.toUpperCase() === "A"))return!1;
        e = o(h(e.href)).split("/");
        if (e.length === 3)return u(B, e);
        return B.length < e.length ? !1 : u(B.slice(0, e.length), e)
    }, current: function (e) {
        if (!(e.href && e.nodeName.toUpperCase() === "A"))return!1;
        e = o(h(e.href)).split("/");
        return u(B, e)
    }})
})(jQuery);