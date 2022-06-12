!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define('NetlifyCms', [], t)
        : 'object' == typeof exports
        ? (exports.NetlifyCms = t())
        : (e.NetlifyCms = t());
})(window, function () {
    return (function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
                    for (var i in e)
                        n.d(
                            r,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 1731))
        );
    })([
        function (e, t, n) {
            'use strict';
            e.exports = n(709);
        },
        function (e, t, n) {
            'use strict';
            function r(e) {
                return (r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          })(e);
            }
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e;
            }
            function s(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n),
                    e
                );
            }
            function l(e, t) {
                if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                })),
                    t && c(e, t);
            }
            function u(e) {
                return (u = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function c(e, t) {
                return (c =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function d() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function f(e, t, n) {
                return (f = d()
                    ? Reflect.construct
                    : function (e, t, n) {
                          var r = [null];
                          r.push.apply(r, t);
                          var i = new (Function.bind.apply(e, r))();
                          return n && c(i, n.prototype), i;
                      }).apply(null, arguments);
            }
            function p(e) {
                var t = 'function' == typeof Map ? new Map() : void 0;
                return (p = function (e) {
                    if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
                    var n;
                    if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r);
                    }
                    function r() {
                        return f(e, arguments, u(this).constructor);
                    }
                    return (
                        (r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                        c(r, e)
                    );
                })(e);
            }
            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function m(e, t) {
                return !t || ('object' != typeof t && 'function' != typeof t) ? h(e) : t;
            }
            function g(e) {
                var t = d();
                return function () {
                    var n,
                        r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return m(this, n);
                };
            }
            function v(e, t, n) {
                return (v =
                    'undefined' != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (e, t, n) {
                              var r = (function (e, t) {
                                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)); );
                                  return e;
                              })(e, t);
                              if (r) {
                                  var i = Object.getOwnPropertyDescriptor(r, t);
                                  return i.get ? i.get.call(n) : i.value;
                              }
                          })(e, t, n || e);
            }
            function y(e, t) {
                return (
                    _(e) ||
                    (function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            (i = !0), (o = e);
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return n;
                    })(e, t) ||
                    w(e, t) ||
                    k()
                );
            }
            function b(e) {
                return (
                    _(e) ||
                    (function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    w(e) ||
                    k()
                );
            }
            function _(e) {
                if (Array.isArray(e)) return e;
            }
            function w(e, t) {
                if (e) {
                    if ('string' == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
                    );
                }
            }
            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function k() {
                throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
            }
            function E(e) {
                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = w(e))) {
                        var t = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: n
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                }
                var r,
                    i,
                    o = !0,
                    a = !1;
                return {
                    s: function () {
                        r = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = r.next();
                        return (o = e.done), e;
                    },
                    e: function (e) {
                        (a = !0), (i = e);
                    },
                    f: function () {
                        try {
                            o || null == r.return || r.return();
                        } finally {
                            if (a) throw i;
                        }
                    }
                };
            }
            n.d(t, 'a', function () {
                return S;
            }),
                n.d(t, 'b', function () {
                    return j;
                }),
                n.d(t, 'c', function () {
                    return z;
                }),
                n.d(t, 'd', function () {
                    return I;
                }),
                n.d(t, 'e', function () {
                    return O;
                }),
                n.d(t, 'f', function () {
                    return F;
                }),
                n.d(t, 'g', function () {
                    return E;
                }),
                n.d(t, 'h', function () {
                    return r;
                }),
                n.d(t, 'i', function () {
                    return a;
                }),
                n.d(t, 'j', function () {
                    return i;
                }),
                n.d(t, 'k', function () {
                    return C;
                }),
                n.d(t, 'l', function () {
                    return s;
                }),
                n.d(t, 'm', function () {
                    return B;
                }),
                n.d(t, 'n', function () {
                    return N;
                }),
                n.d(t, 'o', function () {
                    return y;
                }),
                n.d(t, 'p', function () {
                    return L;
                }),
                n.d(t, 'q', function () {
                    return l;
                }),
                n.d(t, 'r', function () {
                    return g;
                }),
                n.d(t, 's', function () {
                    return v;
                }),
                n.d(t, 't', function () {
                    return u;
                }),
                n.d(t, 'u', function () {
                    return T;
                }),
                n.d(t, 'v', function () {
                    return D;
                }),
                n.d(t, 'w', function () {
                    return h;
                }),
                n.d(t, 'x', function () {
                    return b;
                }),
                n.d(t, 'y', function () {
                    return m;
                });
            var S = {
                    ANCHOR: '&',
                    COMMENT: '#',
                    TAG: '!',
                    DIRECTIVES_END: '-',
                    DOCUMENT_END: '.'
                },
                O = {
                    ALIAS: 'ALIAS',
                    BLANK_LINE: 'BLANK_LINE',
                    BLOCK_FOLDED: 'BLOCK_FOLDED',
                    BLOCK_LITERAL: 'BLOCK_LITERAL',
                    COMMENT: 'COMMENT',
                    DIRECTIVE: 'DIRECTIVE',
                    DOCUMENT: 'DOCUMENT',
                    FLOW_MAP: 'FLOW_MAP',
                    FLOW_SEQ: 'FLOW_SEQ',
                    MAP: 'MAP',
                    MAP_KEY: 'MAP_KEY',
                    MAP_VALUE: 'MAP_VALUE',
                    PLAIN: 'PLAIN',
                    QUOTE_DOUBLE: 'QUOTE_DOUBLE',
                    QUOTE_SINGLE: 'QUOTE_SINGLE',
                    SEQ: 'SEQ',
                    SEQ_ITEM: 'SEQ_ITEM'
                },
                C = 'tag:yaml.org,2002:',
                T = {
                    MAP: 'tag:yaml.org,2002:map',
                    SEQ: 'tag:yaml.org,2002:seq',
                    STR: 'tag:yaml.org,2002:str'
                };
            function A(e) {
                for (var t = [0], n = e.indexOf('\n'); -1 !== n; ) (n += 1), t.push(n), (n = e.indexOf('\n', n));
                return t;
            }
            function P(e) {
                var t, n;
                return (
                    'string' == typeof e
                        ? ((t = A(e)), (n = e))
                        : (Array.isArray(e) && (e = e[0]),
                          e && e.context && (e.lineStarts || (e.lineStarts = A(e.context.src)), (t = e.lineStarts), (n = e.context.src))),
                    { lineStarts: t, src: n }
                );
            }
            function R(e, t) {
                if ('number' != typeof e || e < 0) return null;
                var n = P(t),
                    r = n.lineStarts,
                    i = n.src;
                if (!r || !i || e > i.length) return null;
                for (var o = 0; o < r.length; ++o) {
                    var a = r[o];
                    if (e < a) return { line: o, col: e - r[o - 1] + 1 };
                    if (e === a) return { line: o + 1, col: 1 };
                }
                var s = r.length;
                return { line: s, col: e - r[s - 1] + 1 };
            }
            function M(e, t) {
                var n = P(t),
                    r = n.lineStarts,
                    i = n.src;
                if (!r || !(e >= 1) || e > r.length) return null;
                for (var o = r[e - 1], a = r[e]; a && a > o && '\n' === i[a - 1]; ) --a;
                return i.slice(o, a);
            }
            var I = (function () {
                    function e(t, n) {
                        i(this, e), (this.start = t), (this.end = n || t);
                    }
                    return (
                        a(e, null, [
                            {
                                key: 'copy',
                                value: function (t) {
                                    return new e(t.start, t.end);
                                }
                            }
                        ]),
                        a(e, [
                            {
                                key: 'isEmpty',
                                value: function () {
                                    return 'number' != typeof this.start || !this.end || this.end <= this.start;
                                }
                            },
                            {
                                key: 'setOrigRange',
                                value: function (e, t) {
                                    var n = this.start,
                                        r = this.end;
                                    if (0 === e.length || r <= e[0]) return (this.origStart = n), (this.origEnd = r), t;
                                    for (var i = t; i < e.length && !(e[i] > n); ) ++i;
                                    this.origStart = n + i;
                                    for (var o = i; i < e.length && !(e[i] >= r); ) ++i;
                                    return (this.origEnd = r + i), o;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                j = (function () {
                    function e(t, n, r) {
                        i(this, e),
                            Object.defineProperty(this, 'context', {
                                value: r || null,
                                writable: !0
                            }),
                            (this.error = null),
                            (this.range = null),
                            (this.valueRange = null),
                            (this.props = n || []),
                            (this.type = t),
                            (this.value = null);
                    }
                    return (
                        a(e, null, [
                            {
                                key: 'addStringTerminator',
                                value: function (t, n, r) {
                                    if ('\n' === r[r.length - 1]) return r;
                                    var i = e.endOfWhiteSpace(t, n);
                                    return i >= t.length || '\n' === t[i] ? r + '\n' : r;
                                }
                            },
                            {
                                key: 'atDocumentBoundary',
                                value: function (e, t, n) {
                                    var r = e[t];
                                    if (!r) return !0;
                                    var i = e[t - 1];
                                    if (i && '\n' !== i) return !1;
                                    if (n) {
                                        if (r !== n) return !1;
                                    } else if (r !== S.DIRECTIVES_END && r !== S.DOCUMENT_END) return !1;
                                    var o = e[t + 1],
                                        a = e[t + 2];
                                    if (o !== r || a !== r) return !1;
                                    var s = e[t + 3];
                                    return !s || '\n' === s || '\t' === s || ' ' === s;
                                }
                            },
                            {
                                key: 'endOfIdentifier',
                                value: function (e, t) {
                                    for (
                                        var n = e[t], r = '<' === n, i = r ? ['\n', '\t', ' ', '>'] : ['\n', '\t', ' ', '[', ']', '{', '}', ','];
                                        n && -1 === i.indexOf(n);

                                    )
                                        n = e[(t += 1)];
                                    return r && '>' === n && (t += 1), t;
                                }
                            },
                            {
                                key: 'endOfIndent',
                                value: function (e, t) {
                                    for (var n = e[t]; ' ' === n; ) n = e[(t += 1)];
                                    return t;
                                }
                            },
                            {
                                key: 'endOfLine',
                                value: function (e, t) {
                                    for (var n = e[t]; n && '\n' !== n; ) n = e[(t += 1)];
                                    return t;
                                }
                            },
                            {
                                key: 'endOfWhiteSpace',
                                value: function (e, t) {
                                    for (var n = e[t]; '\t' === n || ' ' === n; ) n = e[(t += 1)];
                                    return t;
                                }
                            },
                            {
                                key: 'startOfLine',
                                value: function (e, t) {
                                    var n = e[t - 1];
                                    if ('\n' === n) return t;
                                    for (; n && '\n' !== n; ) n = e[(t -= 1)];
                                    return t + 1;
                                }
                            },
                            {
                                key: 'endOfBlockIndent',
                                value: function (t, n, r) {
                                    var i = e.endOfIndent(t, r);
                                    if (i > r + n) return i;
                                    var o = e.endOfWhiteSpace(t, i),
                                        a = t[o];
                                    return a && '\n' !== a ? null : o;
                                }
                            },
                            {
                                key: 'atBlank',
                                value: function (e, t, n) {
                                    var r = e[t];
                                    return '\n' === r || '\t' === r || ' ' === r || (n && !r);
                                }
                            },
                            {
                                key: 'nextNodeIsIndented',
                                value: function (e, t, n) {
                                    return !(!e || t < 0) && (t > 0 || (n && '-' === e));
                                }
                            },
                            {
                                key: 'normalizeOffset',
                                value: function (t, n) {
                                    var r = t[n];
                                    return r ? ('\n' !== r && '\n' === t[n - 1] ? n - 1 : e.endOfWhiteSpace(t, n)) : n;
                                }
                            },
                            {
                                key: 'foldNewline',
                                value: function (t, n, r) {
                                    for (var i = 0, o = !1, a = '', s = t[n + 1]; ' ' === s || '\t' === s || '\n' === s; ) {
                                        switch (s) {
                                            case '\n':
                                                (i = 0), (n += 1), (a += '\n');
                                                break;
                                            case '\t':
                                                i <= r && (o = !0), (n = e.endOfWhiteSpace(t, n + 2) - 1);
                                                break;
                                            case ' ':
                                                (i += 1), (n += 1);
                                        }
                                        s = t[n + 1];
                                    }
                                    return a || (a = ' '), s && i <= r && (o = !0), { fold: a, offset: n, error: o };
                                }
                            }
                        ]),
                        a(e, [
                            {
                                key: 'getPropValue',
                                value: function (e, t, n) {
                                    if (!this.context) return null;
                                    var r = this.context.src,
                                        i = this.props[e];
                                    return i && r[i.start] === t ? r.slice(i.start + (n ? 1 : 0), i.end) : null;
                                }
                            },
                            {
                                key: 'commentHasRequiredWhitespace',
                                value: function (t) {
                                    var n = this.context.src;
                                    if (this.header && t === this.header.end) return !1;
                                    if (!this.valueRange) return !1;
                                    var r = this.valueRange.end;
                                    return t !== r || e.atBlank(n, r - 1);
                                }
                            },
                            {
                                key: 'parseComment',
                                value: function (t) {
                                    var n = this.context.src;
                                    if (n[t] === S.COMMENT) {
                                        var r = e.endOfLine(n, t + 1),
                                            i = new I(t, r);
                                        return this.props.push(i), r;
                                    }
                                    return t;
                                }
                            },
                            {
                                key: 'setOrigRanges',
                                value: function (e, t) {
                                    return (
                                        this.range && (t = this.range.setOrigRange(e, t)),
                                        this.valueRange && this.valueRange.setOrigRange(e, t),
                                        this.props.forEach(function (n) {
                                            return n.setOrigRange(e, t);
                                        }),
                                        t
                                    );
                                }
                            },
                            {
                                key: 'toString',
                                value: function () {
                                    var t = this.context.src,
                                        n = this.range,
                                        r = this.value;
                                    if (null != r) return r;
                                    var i = t.slice(n.start, n.end);
                                    return e.addStringTerminator(t, n.end, i);
                                }
                            },
                            {
                                key: 'anchor',
                                get: function () {
                                    for (var e = 0; e < this.props.length; ++e) {
                                        var t = this.getPropValue(e, S.ANCHOR, !0);
                                        if (null != t) return t;
                                    }
                                    return null;
                                }
                            },
                            {
                                key: 'comment',
                                get: function () {
                                    for (var e = [], t = 0; t < this.props.length; ++t) {
                                        var n = this.getPropValue(t, S.COMMENT, !0);
                                        null != n && e.push(n);
                                    }
                                    return e.length > 0 ? e.join('\n') : null;
                                }
                            },
                            {
                                key: 'hasComment',
                                get: function () {
                                    if (this.context)
                                        for (var e = this.context.src, t = 0; t < this.props.length; ++t) if (e[this.props[t].start] === S.COMMENT) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: 'hasProps',
                                get: function () {
                                    if (this.context)
                                        for (var e = this.context.src, t = 0; t < this.props.length; ++t) if (e[this.props[t].start] !== S.COMMENT) return !0;
                                    return !1;
                                }
                            },
                            {
                                key: 'includesTrailingLines',
                                get: function () {
                                    return !1;
                                }
                            },
                            {
                                key: 'jsonLike',
                                get: function () {
                                    return -1 !== [O.FLOW_MAP, O.FLOW_SEQ, O.QUOTE_DOUBLE, O.QUOTE_SINGLE].indexOf(this.type);
                                }
                            },
                            {
                                key: 'rangeAsLinePos',
                                get: function () {
                                    if (this.range && this.context) {
                                        var e = R(this.range.start, this.context.root);
                                        if (e)
                                            return {
                                                start: e,
                                                end: R(this.range.end, this.context.root)
                                            };
                                    }
                                }
                            },
                            {
                                key: 'rawValue',
                                get: function () {
                                    if (!this.valueRange || !this.context) return null;
                                    var e = this.valueRange,
                                        t = e.start,
                                        n = e.end;
                                    return this.context.src.slice(t, n);
                                }
                            },
                            {
                                key: 'tag',
                                get: function () {
                                    for (var e = 0; e < this.props.length; ++e) {
                                        var t = this.getPropValue(e, S.TAG, !1);
                                        if (null != t) {
                                            if ('<' === t[1]) return { verbatim: t.slice(2, -1) };
                                            var n = y(t.match(/^(.*!)([^!]*)$/), 3);
                                            n[0];
                                            return { handle: n[1], suffix: n[2] };
                                        }
                                    }
                                    return null;
                                }
                            },
                            {
                                key: 'valueRangeContainsNewline',
                                get: function () {
                                    if (!this.valueRange || !this.context) return !1;
                                    for (var e = this.valueRange, t = e.start, n = e.end, r = this.context.src, i = t; i < n; ++i) if ('\n' === r[i]) return !0;
                                    return !1;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                L = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n(e, r, o) {
                        var a;
                        if ((i(this, n), !(o && r instanceof j))) throw new Error('Invalid arguments for new '.concat(e));
                        return ((a = t.call(this)).name = e), (a.message = o), (a.source = r), a;
                    }
                    return (
                        a(n, [
                            {
                                key: 'makePretty',
                                value: function () {
                                    if (this.source) {
                                        this.nodeType = this.source.type;
                                        var e = this.source.context && this.source.context.root;
                                        if ('number' == typeof this.offset) {
                                            this.range = new I(this.offset, this.offset + 1);
                                            var t = e && R(this.offset, e);
                                            if (t) {
                                                var n = { line: t.line, col: t.col + 1 };
                                                this.linePos = { start: t, end: n };
                                            }
                                            delete this.offset;
                                        } else (this.range = this.source.range), (this.linePos = this.source.rangeAsLinePos);
                                        if (this.linePos) {
                                            var r = this.linePos.start,
                                                i = r.line,
                                                o = r.col;
                                            this.message += ' at line '.concat(i, ', column ').concat(o);
                                            var a =
                                                e &&
                                                (function (e, t) {
                                                    var n = e.start,
                                                        r = e.end,
                                                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 80,
                                                        o = M(n.line, t);
                                                    if (!o) return null;
                                                    var a = n.col;
                                                    if (o.length > i)
                                                        if (a <= i - 10) o = o.substr(0, i - 1) + '…';
                                                        else {
                                                            var s = Math.round(i / 2);
                                                            o.length > a + s && (o = o.substr(0, a + s - 1) + '…'),
                                                                (a -= o.length - i),
                                                                (o = '…' + o.substr(1 - i));
                                                        }
                                                    var l = 1,
                                                        u = '';
                                                    r &&
                                                        (r.line === n.line && a + (r.col - n.col) <= i + 1
                                                            ? (l = r.col - n.col)
                                                            : ((l = Math.min(o.length + 1, i) - a), (u = '…')));
                                                    var c = a > 1 ? ' '.repeat(a - 1) : '',
                                                        d = '^'.repeat(l);
                                                    return ''.concat(o, '\n').concat(c).concat(d).concat(u);
                                                })(this.linePos, e);
                                            a && (this.message += ':\n\n'.concat(a, '\n'));
                                        }
                                        delete this.source;
                                    }
                                }
                            }
                        ]),
                        n
                    );
                })(p(Error)),
                D = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n(e, r) {
                        return i(this, n), t.call(this, 'YAMLReferenceError', e, r);
                    }
                    return n;
                })(L),
                N = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n(e, r) {
                        return i(this, n), t.call(this, 'YAMLSemanticError', e, r);
                    }
                    return n;
                })(L),
                F = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n(e, r) {
                        return i(this, n), t.call(this, 'YAMLSyntaxError', e, r);
                    }
                    return n;
                })(L),
                B = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n(e, r) {
                        return i(this, n), t.call(this, 'YAMLWarning', e, r);
                    }
                    return n;
                })(L),
                z = (function (e) {
                    l(n, e);
                    var t = g(n);
                    function n() {
                        return i(this, n), t.apply(this, arguments);
                    }
                    return (
                        a(
                            n,
                            [
                                {
                                    key: 'parseBlockValue',
                                    value: function (e) {
                                        for (
                                            var t = this.context, r = t.indent, i = t.inFlow, o = t.src, a = e, s = e, l = o[a];
                                            '\n' === l && !j.atDocumentBoundary(o, a + 1);
                                            l = o[a]
                                        ) {
                                            var u = j.endOfBlockIndent(o, r, a + 1);
                                            if (null === u || '#' === o[u]) break;
                                            a = '\n' === o[u] ? u : (s = n.endOfLine(o, u, i));
                                        }
                                        return this.valueRange.isEmpty() && (this.valueRange.start = e), (this.valueRange.end = s), s;
                                    }
                                },
                                {
                                    key: 'parse',
                                    value: function (e, t) {
                                        this.context = e;
                                        var r = e.inFlow,
                                            i = e.src,
                                            o = t,
                                            a = i[o];
                                        return (
                                            a && '#' !== a && '\n' !== a && (o = n.endOfLine(i, t, r)),
                                            (this.valueRange = new I(t, o)),
                                            (o = j.endOfWhiteSpace(i, o)),
                                            (o = this.parseComment(o)),
                                            (this.hasComment && !this.valueRange.isEmpty()) || (o = this.parseBlockValue(o)),
                                            o
                                        );
                                    }
                                },
                                {
                                    key: 'strValue',
                                    get: function () {
                                        if (!this.valueRange || !this.context) return null;
                                        for (
                                            var e = this.valueRange, t = e.start, n = e.end, r = this.context.src, i = r[n - 1];
                                            t < n && ('\n' === i || '\t' === i || ' ' === i);

                                        )
                                            i = r[--n - 1];
                                        for (var o = '', a = t; a < n; ++a) {
                                            var s = r[a];
                                            if ('\n' === s) {
                                                var l = j.foldNewline(r, a, -1);
                                                (o += l.fold), (a = l.offset);
                                            } else if (' ' === s || '\t' === s) {
                                                for (var u = a, c = r[a + 1]; a < n && (' ' === c || '\t' === c); ) c = r[(a += 1) + 1];
                                                '\n' !== c && (o += a > u ? r.slice(u, a + 1) : s);
                                            } else o += s;
                                        }
                                        var d = r[t];
                                        switch (d) {
                                            case '\t':
                                                return {
                                                    errors: [new N(this, 'Plain value cannot start with a tab character')],
                                                    str: o
                                                };
                                            case '@':
                                            case '`':
                                                var f = 'Plain value cannot start with reserved character '.concat(d);
                                                return { errors: [new N(this, f)], str: o };
                                            default:
                                                return o;
                                        }
                                    }
                                }
                            ],
                            [
                                {
                                    key: 'endOfLine',
                                    value: function (e, t, n) {
                                        for (
                                            var r = e[t], i = t;
                                            r && '\n' !== r && (!n || ('[' !== r && ']' !== r && '{' !== r && '}' !== r && ',' !== r));

                                        ) {
                                            var o = e[i + 1];
                                            if (':' === r && (!o || '\n' === o || '\t' === o || ' ' === o || (n && ',' === o))) break;
                                            if ((' ' === r || '\t' === r) && '#' === o) break;
                                            (i += 1), (r = o);
                                        }
                                        return i;
                                    }
                                }
                            ]
                        ),
                        n
                    );
                })(j);
        },
        function (e, t, n) {
            e.exports = n(715)();
        },
        function (e, t, n) {
            'use strict';
            n.d(t, 'b', function () {
                return a;
            }),
                n.d(t, 'c', function () {
                    return s;
                }),
                n.d(t, 'd', function () {
                    return l;
                }),
                n.d(t, 'e', function () {
                    return u;
                }),
                n.d(t, 'f', function () {
                    return c;
                }),
                n.d(t, 'g', function () {
                    return d;
                }),
                n.d(t, 'h', function () {
                    return f;
                }),
                n.d(t, 'i', function () {
                    return p;
                }),
                n.d(t, 'j', function () {
                    return h;
                }),
                n.d(t, 'k', function () {
                    return m;
                }),
                n.d(t, 'l', function () {
                    return g;
                }),
                n.d(t, 'm', function () {
                    return v;
                }),
                n.d(t, 'n', function () {
                    return y;
                }),
                n.d(t, 'o', function () {
                    return b;
                }),
                n.d(t, 'p', function () {
                    return _;
                }),
                n.d(t, 'q', function () {
                    return w;
                }),
                n.d(t, 'r', function () {
                    return x;
                }),
                n.d(t, 's', function () {
                    return E;
                }),
                n.d(t, 't', function () {
                    return O;
                }),
                n.d(t, 'u', function () {
                    return C;
                }),
                n.d(t, 'v', function () {
                    return T;
                }),
                n.d(t, 'w', function () {
                    return A;
                }),
                n.d(t, 'x', function () {
                    return P;
                }),
                n.d(t, 'y', function () {
                    return R;
                }),
                n.d(t, 'z', function () {
                    return M;
                }),
                n.d(t, 'A', function () {
                    return I;
                }),
                n.d(t, 'B', function () {
                    return j;
                }),
                n.d(t, 'C', function () {
                    return L;
                }),
                n.d(t, 'D', function () {
                    return D;
                }),
                n.d(t, 'E', function () {
                    return N;
                }),
                n.d(t, 'F', function () {
                    return F;
                }),
                n.d(t, 'H', function () {
                    return B;
                }),
                n.d(t, 'I', function () {
                    return z;
                }),
                n.d(t, 'J', function () {
                    return U;
                }),
                n.d(t, 'G', function () {
                    return q;
                }),
                n.d(t, 'a', function () {
                    return H;
                });
            var r = n(27),
                i = n(181),
                o = n(57);
            function a(e) {
                for (var t = h(), n = 0, r = e.length; n < r; ++n) x(t, e[n]);
                return t;
            }
            function s(e, t, n) {
                return n ? ((n[0] = e[0] - t), (n[1] = e[1] - t), (n[2] = e[2] + t), (n[3] = e[3] + t), n) : [e[0] - t, e[1] - t, e[2] + t, e[3] + t];
            }
            function l(e, t) {
                return t ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t) : e.slice();
            }
            function u(e, t, n) {
                var r, i;
                return (r = t < e[0] ? e[0] - t : e[2] < t ? t - e[2] : 0) * r + (i = n < e[1] ? e[1] - n : e[3] < n ? n - e[3] : 0) * i;
            }
            function c(e, t) {
                return f(e, t[0], t[1]);
            }
            function d(e, t) {
                return e[0] <= t[0] && t[2] <= e[2] && e[1] <= t[1] && t[3] <= e[3];
            }
            function f(e, t, n) {
                return e[0] <= t && t <= e[2] && e[1] <= n && n <= e[3];
            }
            function p(e, t) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    a = e[3],
                    s = t[0],
                    l = t[1],
                    u = o.a.UNKNOWN;
                return (
                    s < n ? (u |= o.a.LEFT) : s > i && (u |= o.a.RIGHT),
                    l < r ? (u |= o.a.BELOW) : l > a && (u |= o.a.ABOVE),
                    u === o.a.UNKNOWN && (u = o.a.INTERSECTING),
                    u
                );
            }
            function h() {
                return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            }
            function m(e, t, n, r, i) {
                return i ? ((i[0] = e), (i[1] = t), (i[2] = n), (i[3] = r), i) : [e, t, n, r];
            }
            function g(e) {
                return m(1 / 0, 1 / 0, -1 / 0, -1 / 0, e);
            }
            function v(e, t) {
                var n = e[0],
                    r = e[1];
                return m(n, r, n, r, t);
            }
            function y(e, t) {
                return k(g(t), e);
            }
            function b(e, t, n, r, i) {
                return E(g(i), e, t, n, r);
            }
            function _(e, t) {
                return e[0] == t[0] && e[2] == t[2] && e[1] == t[1] && e[3] == t[3];
            }
            function w(e, t) {
                return t[0] < e[0] && (e[0] = t[0]), t[2] > e[2] && (e[2] = t[2]), t[1] < e[1] && (e[1] = t[1]), t[3] > e[3] && (e[3] = t[3]), e;
            }
            function x(e, t) {
                t[0] < e[0] && (e[0] = t[0]), t[0] > e[2] && (e[2] = t[0]), t[1] < e[1] && (e[1] = t[1]), t[1] > e[3] && (e[3] = t[1]);
            }
            function k(e, t) {
                for (var n = 0, r = t.length; n < r; ++n) x(e, t[n]);
                return e;
            }
            function E(e, t, n, r, i) {
                for (; n < r; n += i) S(e, t[n], t[n + 1]);
                return e;
            }
            function S(e, t, n) {
                (e[0] = Math.min(e[0], t)), (e[1] = Math.min(e[1], n)), (e[2] = Math.max(e[2], t)), (e[3] = Math.max(e[3], n));
            }
            function O(e, t, n) {
                var r;
                return (r = t.call(n, T(e))) || (r = t.call(n, A(e))) || (r = t.call(n, D(e))) ? r : (r = t.call(n, L(e))) || !1;
            }
            function C(e) {
                var t = 0;
                return B(e) || (t = N(e) * I(e)), t;
            }
            function T(e) {
                return [e[0], e[1]];
            }
            function A(e) {
                return [e[2], e[1]];
            }
            function P(e) {
                return [(e[0] + e[2]) / 2, (e[1] + e[3]) / 2];
            }
            function R(e, t) {
                var n;
                return (
                    t === i.a.BOTTOM_LEFT
                        ? (n = T(e))
                        : t === i.a.BOTTOM_RIGHT
                        ? (n = A(e))
                        : t === i.a.TOP_LEFT
                        ? (n = L(e))
                        : t === i.a.TOP_RIGHT
                        ? (n = D(e))
                        : Object(r.a)(!1, 13),
                    n
                );
            }
            function M(e, t, n, r, i) {
                var o = (t * r[0]) / 2,
                    a = (t * r[1]) / 2,
                    s = Math.cos(n),
                    l = Math.sin(n),
                    u = o * s,
                    c = o * l,
                    d = a * s,
                    f = a * l,
                    p = e[0],
                    h = e[1],
                    g = p - u + f,
                    v = p - u - f,
                    y = p + u - f,
                    b = p + u + f,
                    _ = h - c - d,
                    w = h - c + d,
                    x = h + c + d,
                    k = h + c - d;
                return m(Math.min(g, v, y, b), Math.min(_, w, x, k), Math.max(g, v, y, b), Math.max(_, w, x, k), i);
            }
            function I(e) {
                return e[3] - e[1];
            }
            function j(e, t, n) {
                var r = n || [1 / 0, 1 / 0, -1 / 0, -1 / 0];
                return (
                    F(e, t)
                        ? (e[0] > t[0] ? (r[0] = e[0]) : (r[0] = t[0]),
                          e[1] > t[1] ? (r[1] = e[1]) : (r[1] = t[1]),
                          e[2] < t[2] ? (r[2] = e[2]) : (r[2] = t[2]),
                          e[3] < t[3] ? (r[3] = e[3]) : (r[3] = t[3]))
                        : g(r),
                    r
                );
            }
            function L(e) {
                return [e[0], e[3]];
            }
            function D(e) {
                return [e[2], e[3]];
            }
            function N(e) {
                return e[2] - e[0];
            }
            function F(e, t) {
                return e[0] <= t[2] && e[2] >= t[0] && e[1] <= t[3] && e[3] >= t[1];
            }
            function B(e) {
                return e[2] < e[0] || e[3] < e[1];
            }
            function z(e, t) {
                return t ? ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t) : e;
            }
            function U(e, t) {
                var n = ((e[2] - e[0]) / 2) * (t - 1),
                    r = ((e[3] - e[1]) / 2) * (t - 1);
                (e[0] -= n), (e[2] += n), (e[1] -= r), (e[3] += r);
            }
            function q(e, t, n) {
                var r = !1,
                    i = p(e, t),
                    a = p(e, n);
                if (i === o.a.INTERSECTING || a === o.a.INTERSECTING) r = !0;
                else {
                    var s,
                        l,
                        u = e[0],
                        c = e[1],
                        d = e[2],
                        f = e[3],
                        h = t[0],
                        m = t[1],
                        g = n[0],
                        v = n[1],
                        y = (v - m) / (g - h);
                    a & o.a.ABOVE && !(i & o.a.ABOVE) && (r = (s = g - (v - f) / y) >= u && s <= d),
                        r || !(a & o.a.RIGHT) || i & o.a.RIGHT || (r = (l = v - (g - d) * y) >= c && l <= f),
                        r || !(a & o.a.BELOW) || i & o.a.BELOW || (r = (s = g - (v - c) / y) >= u && s <= d),
                        r || !(a & o.a.LEFT) || i & o.a.LEFT || (r = (l = v - (g - u) * y) >= c && l <= f);
                }
                return r;
            }
            function H(e, t, n) {
                var r = [e[0], e[1], e[0], e[3], e[2], e[1], e[2], e[3]];
                return (
                    t(r, r, 2),
                    (function (e, t, n) {
                        return m(Math.min.apply(null, e), Math.min.apply(null, t), Math.max.apply(null, e), Math.max.apply(null, t), n);
                    })([r[0], r[2], r[4], r[6]], [r[1], r[3], r[5], r[7]], n)
                );
            }
        },
        function (e, t, n) {
            e.exports = (function () {
                'use strict';
                var e = Array.prototype.slice;
                function t(e, t) {
                    t && (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
                }
                function n(e) {
                    return a(e) ? e : q(e);
                }
                function r(e) {
                    return s(e) ? e : H(e);
                }
                function i(e) {
                    return l(e) ? e : W(e);
                }
                function o(e) {
                    return a(e) && !u(e) ? e : G(e);
                }
                function a(e) {
                    return !(!e || !e[d]);
                }
                function s(e) {
                    return !(!e || !e[f]);
                }
                function l(e) {
                    return !(!e || !e[p]);
                }
                function u(e) {
                    return s(e) || l(e);
                }
                function c(e) {
                    return !(!e || !e[h]);
                }
                t(r, n),
                    t(i, n),
                    t(o, n),
                    (n.isIterable = a),
                    (n.isKeyed = s),
                    (n.isIndexed = l),
                    (n.isAssociative = u),
                    (n.isOrdered = c),
                    (n.Keyed = r),
                    (n.Indexed = i),
                    (n.Set = o);
                var d = '@@__IMMUTABLE_ITERABLE__@@',
                    f = '@@__IMMUTABLE_KEYED__@@',
                    p = '@@__IMMUTABLE_INDEXED__@@',
                    h = '@@__IMMUTABLE_ORDERED__@@',
                    m = {},
                    g = { value: !1 },
                    v = { value: !1 };
                function y(e) {
                    return (e.value = !1), e;
                }
                function b(e) {
                    e && (e.value = !0);
                }
                function _() {}
                function w(e, t) {
                    t = t || 0;
                    for (var n = Math.max(0, e.length - t), r = new Array(n), i = 0; i < n; i++) r[i] = e[i + t];
                    return r;
                }
                function x(e) {
                    return void 0 === e.size && (e.size = e.__iterate(E)), e.size;
                }
                function k(e, t) {
                    if ('number' != typeof t) {
                        var n = t >>> 0;
                        if ('' + n !== t || 4294967295 === n) return NaN;
                        t = n;
                    }
                    return t < 0 ? x(e) + t : t;
                }
                function E() {
                    return !0;
                }
                function S(e, t, n) {
                    return (0 === e || (void 0 !== n && e <= -n)) && (void 0 === t || (void 0 !== n && t >= n));
                }
                function O(e, t) {
                    return T(e, t, 0);
                }
                function C(e, t) {
                    return T(e, t, t);
                }
                function T(e, t, n) {
                    return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e);
                }
                var A,
                    P,
                    R,
                    M = 'function' == typeof Symbol && Symbol.iterator,
                    I = M || '@@iterator';
                function j(e) {
                    this.next = e;
                }
                function L(e, t, n, r) {
                    var i = 0 === e ? t : 1 === e ? n : [t, n];
                    return r ? (r.value = i) : (r = { value: i, done: !1 }), r;
                }
                function D() {
                    return { value: void 0, done: !0 };
                }
                function N(e) {
                    return !!z(e);
                }
                function F(e) {
                    return e && 'function' == typeof e.next;
                }
                function B(e) {
                    var t = z(e);
                    return t && t.call(e);
                }
                function z(e) {
                    var t = e && ((M && e[M]) || e['@@iterator']);
                    if ('function' == typeof t) return t;
                }
                function U(e) {
                    return e && 'number' == typeof e.length;
                }
                function q(e) {
                    return null == e
                        ? X()
                        : a(e)
                        ? e.toSeq()
                        : (function (e) {
                              var t = ee(e) || ('object' == typeof e && new V(e));
                              if (!t) throw new TypeError('Expected Array or iterable object of values, or keyed object: ' + e);
                              return t;
                          })(e);
                }
                function H(e) {
                    return null == e ? X().toKeyedSeq() : a(e) ? (s(e) ? e.toSeq() : e.fromEntrySeq()) : J(e);
                }
                function W(e) {
                    return null == e ? X() : a(e) ? (s(e) ? e.entrySeq() : e.toIndexedSeq()) : Z(e);
                }
                function G(e) {
                    return (null == e ? X() : a(e) ? (s(e) ? e.entrySeq() : e) : Z(e)).toSetSeq();
                }
                function $(e) {
                    (this._array = e), (this.size = e.length);
                }
                function V(e) {
                    var t = Object.keys(e);
                    (this._object = e), (this._keys = t), (this.size = t.length);
                }
                function K(e) {
                    (this._iterable = e), (this.size = e.length || e.size);
                }
                function Y(e) {
                    (this._iterator = e), (this._iteratorCache = []);
                }
                function Q(e) {
                    return !(!e || !e['@@__IMMUTABLE_SEQ__@@']);
                }
                function X() {
                    return A || (A = new $([]));
                }
                function J(e) {
                    var t = Array.isArray(e)
                        ? new $(e).fromEntrySeq()
                        : F(e)
                        ? new Y(e).fromEntrySeq()
                        : N(e)
                        ? new K(e).fromEntrySeq()
                        : 'object' == typeof e
                        ? new V(e)
                        : void 0;
                    if (!t) throw new TypeError('Expected Array or iterable object of [k, v] entries, or keyed object: ' + e);
                    return t;
                }
                function Z(e) {
                    var t = ee(e);
                    if (!t) throw new TypeError('Expected Array or iterable object of values: ' + e);
                    return t;
                }
                function ee(e) {
                    return U(e) ? new $(e) : F(e) ? new Y(e) : N(e) ? new K(e) : void 0;
                }
                function te(e, t, n, r) {
                    var i = e._cache;
                    if (i) {
                        for (var o = i.length - 1, a = 0; a <= o; a++) {
                            var s = i[n ? o - a : a];
                            if (!1 === t(s[1], r ? s[0] : a, e)) return a + 1;
                        }
                        return a;
                    }
                    return e.__iterateUncached(t, n);
                }
                function ne(e, t, n, r) {
                    var i = e._cache;
                    if (i) {
                        var o = i.length - 1,
                            a = 0;
                        return new j(function () {
                            var e = i[n ? o - a : a];
                            return a++ > o ? { value: void 0, done: !0 } : L(t, r ? e[0] : a - 1, e[1]);
                        });
                    }
                    return e.__iteratorUncached(t, n);
                }
                function re(e, t) {
                    return t
                        ? (function e(t, n, r, i) {
                              return Array.isArray(n)
                                  ? t.call(
                                        i,
                                        r,
                                        W(n).map(function (r, i) {
                                            return e(t, r, i, n);
                                        })
                                    )
                                  : oe(n)
                                  ? t.call(
                                        i,
                                        r,
                                        H(n).map(function (r, i) {
                                            return e(t, r, i, n);
                                        })
                                    )
                                  : n;
                          })(t, e, '', { '': e })
                        : ie(e);
                }
                function ie(e) {
                    return Array.isArray(e) ? W(e).map(ie).toList() : oe(e) ? H(e).map(ie).toMap() : e;
                }
                function oe(e) {
                    return e && (e.constructor === Object || void 0 === e.constructor);
                }
                function ae(e, t) {
                    if (e === t || (e != e && t != t)) return !0;
                    if (!e || !t) return !1;
                    if ('function' == typeof e.valueOf && 'function' == typeof t.valueOf) {
                        if ((e = e.valueOf()) === (t = t.valueOf()) || (e != e && t != t)) return !0;
                        if (!e || !t) return !1;
                    }
                    return !('function' != typeof e.equals || 'function' != typeof t.equals || !e.equals(t));
                }
                function se(e, t) {
                    if (e === t) return !0;
                    if (
                        !a(t) ||
                        (void 0 !== e.size && void 0 !== t.size && e.size !== t.size) ||
                        (void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash) ||
                        s(e) !== s(t) ||
                        l(e) !== l(t) ||
                        c(e) !== c(t)
                    )
                        return !1;
                    if (0 === e.size && 0 === t.size) return !0;
                    var n = !u(e);
                    if (c(e)) {
                        var r = e.entries();
                        return (
                            t.every(function (e, t) {
                                var i = r.next().value;
                                return i && ae(i[1], e) && (n || ae(i[0], t));
                            }) && r.next().done
                        );
                    }
                    var i = !1;
                    if (void 0 === e.size)
                        if (void 0 === t.size) 'function' == typeof e.cacheResult && e.cacheResult();
                        else {
                            i = !0;
                            var o = e;
                            (e = t), (t = o);
                        }
                    var d = !0,
                        f = t.__iterate(function (t, r) {
                            if (n ? !e.has(t) : i ? !ae(t, e.get(r, m)) : !ae(e.get(r, m), t)) return (d = !1), !1;
                        });
                    return d && e.size === f;
                }
                function le(e, t) {
                    if (!(this instanceof le)) return new le(e, t);
                    if (((this._value = e), (this.size = void 0 === t ? 1 / 0 : Math.max(0, t)), 0 === this.size)) {
                        if (P) return P;
                        P = this;
                    }
                }
                function ue(e, t) {
                    if (!e) throw new Error(t);
                }
                function ce(e, t, n) {
                    if (!(this instanceof ce)) return new ce(e, t, n);
                    if (
                        (ue(0 !== n, 'Cannot step a Range by 0'),
                        (e = e || 0),
                        void 0 === t && (t = 1 / 0),
                        (n = void 0 === n ? 1 : Math.abs(n)),
                        t < e && (n = -n),
                        (this._start = e),
                        (this._end = t),
                        (this._step = n),
                        (this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1)),
                        0 === this.size)
                    ) {
                        if (R) return R;
                        R = this;
                    }
                }
                function de() {
                    throw TypeError('Abstract');
                }
                function fe() {}
                function pe() {}
                function he() {}
                (j.prototype.toString = function () {
                    return '[Iterator]';
                }),
                    (j.KEYS = 0),
                    (j.VALUES = 1),
                    (j.ENTRIES = 2),
                    (j.prototype.inspect = j.prototype.toSource =
                        function () {
                            return this.toString();
                        }),
                    (j.prototype[I] = function () {
                        return this;
                    }),
                    t(q, n),
                    (q.of = function () {
                        return q(arguments);
                    }),
                    (q.prototype.toSeq = function () {
                        return this;
                    }),
                    (q.prototype.toString = function () {
                        return this.__toString('Seq {', '}');
                    }),
                    (q.prototype.cacheResult = function () {
                        return !this._cache && this.__iterateUncached && ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)), this;
                    }),
                    (q.prototype.__iterate = function (e, t) {
                        return te(this, e, t, !0);
                    }),
                    (q.prototype.__iterator = function (e, t) {
                        return ne(this, e, t, !0);
                    }),
                    t(H, q),
                    (H.prototype.toKeyedSeq = function () {
                        return this;
                    }),
                    t(W, q),
                    (W.of = function () {
                        return W(arguments);
                    }),
                    (W.prototype.toIndexedSeq = function () {
                        return this;
                    }),
                    (W.prototype.toString = function () {
                        return this.__toString('Seq [', ']');
                    }),
                    (W.prototype.__iterate = function (e, t) {
                        return te(this, e, t, !1);
                    }),
                    (W.prototype.__iterator = function (e, t) {
                        return ne(this, e, t, !1);
                    }),
                    t(G, q),
                    (G.of = function () {
                        return G(arguments);
                    }),
                    (G.prototype.toSetSeq = function () {
                        return this;
                    }),
                    (q.isSeq = Q),
                    (q.Keyed = H),
                    (q.Set = G),
                    (q.Indexed = W),
                    (q.prototype['@@__IMMUTABLE_SEQ__@@'] = !0),
                    t($, W),
                    ($.prototype.get = function (e, t) {
                        return this.has(e) ? this._array[k(this, e)] : t;
                    }),
                    ($.prototype.__iterate = function (e, t) {
                        for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++) if (!1 === e(n[t ? r - i : i], i, this)) return i + 1;
                        return i;
                    }),
                    ($.prototype.__iterator = function (e, t) {
                        var n = this._array,
                            r = n.length - 1,
                            i = 0;
                        return new j(function () {
                            return i > r ? { value: void 0, done: !0 } : L(e, i, n[t ? r - i++ : i++]);
                        });
                    }),
                    t(V, H),
                    (V.prototype.get = function (e, t) {
                        return void 0 === t || this.has(e) ? this._object[e] : t;
                    }),
                    (V.prototype.has = function (e) {
                        return this._object.hasOwnProperty(e);
                    }),
                    (V.prototype.__iterate = function (e, t) {
                        for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
                            var a = r[t ? i - o : o];
                            if (!1 === e(n[a], a, this)) return o + 1;
                        }
                        return o;
                    }),
                    (V.prototype.__iterator = function (e, t) {
                        var n = this._object,
                            r = this._keys,
                            i = r.length - 1,
                            o = 0;
                        return new j(function () {
                            var a = r[t ? i - o : o];
                            return o++ > i ? { value: void 0, done: !0 } : L(e, a, n[a]);
                        });
                    }),
                    (V.prototype[h] = !0),
                    t(K, W),
                    (K.prototype.__iterateUncached = function (e, t) {
                        if (t) return this.cacheResult().__iterate(e, t);
                        var n = B(this._iterable),
                            r = 0;
                        if (F(n)) for (var i; !(i = n.next()).done && !1 !== e(i.value, r++, this); );
                        return r;
                    }),
                    (K.prototype.__iteratorUncached = function (e, t) {
                        if (t) return this.cacheResult().__iterator(e, t);
                        var n = B(this._iterable);
                        if (!F(n)) return new j(D);
                        var r = 0;
                        return new j(function () {
                            var t = n.next();
                            return t.done ? t : L(e, r++, t.value);
                        });
                    }),
                    t(Y, W),
                    (Y.prototype.__iterateUncached = function (e, t) {
                        if (t) return this.cacheResult().__iterate(e, t);
                        for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length; ) if (!1 === e(i[o], o++, this)) return o;
                        for (; !(n = r.next()).done; ) {
                            var a = n.value;
                            if (((i[o] = a), !1 === e(a, o++, this))) break;
                        }
                        return o;
                    }),
                    (Y.prototype.__iteratorUncached = function (e, t) {
                        if (t) return this.cacheResult().__iterator(e, t);
                        var n = this._iterator,
                            r = this._iteratorCache,
                            i = 0;
                        return new j(function () {
                            if (i >= r.length) {
                                var t = n.next();
                                if (t.done) return t;
                                r[i] = t.value;
                            }
                            return L(e, i, r[i++]);
                        });
                    }),
                    t(le, W),
                    (le.prototype.toString = function () {
                        return 0 === this.size ? 'Repeat []' : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
                    }),
                    (le.prototype.get = function (e, t) {
                        return this.has(e) ? this._value : t;
                    }),
                    (le.prototype.includes = function (e) {
                        return ae(this._value, e);
                    }),
                    (le.prototype.slice = function (e, t) {
                        var n = this.size;
                        return S(e, t, n) ? this : new le(this._value, C(t, n) - O(e, n));
                    }),
                    (le.prototype.reverse = function () {
                        return this;
                    }),
                    (le.prototype.indexOf = function (e) {
                        return ae(this._value, e) ? 0 : -1;
                    }),
                    (le.prototype.lastIndexOf = function (e) {
                        return ae(this._value, e) ? this.size : -1;
                    }),
                    (le.prototype.__iterate = function (e, t) {
                        for (var n = 0; n < this.size; n++) if (!1 === e(this._value, n, this)) return n + 1;
                        return n;
                    }),
                    (le.prototype.__iterator = function (e, t) {
                        var n = this,
                            r = 0;
                        return new j(function () {
                            return r < n.size ? L(e, r++, n._value) : { value: void 0, done: !0 };
                        });
                    }),
                    (le.prototype.equals = function (e) {
                        return e instanceof le ? ae(this._value, e._value) : se(e);
                    }),
                    t(ce, W),
                    (ce.prototype.toString = function () {
                        return 0 === this.size
                            ? 'Range []'
                            : 'Range [ ' + this._start + '...' + this._end + (1 !== this._step ? ' by ' + this._step : '') + ' ]';
                    }),
                    (ce.prototype.get = function (e, t) {
                        return this.has(e) ? this._start + k(this, e) * this._step : t;
                    }),
                    (ce.prototype.includes = function (e) {
                        var t = (e - this._start) / this._step;
                        return t >= 0 && t < this.size && t === Math.floor(t);
                    }),
                    (ce.prototype.slice = function (e, t) {
                        return S(e, t, this.size)
                            ? this
                            : ((e = O(e, this.size)),
                              (t = C(t, this.size)) <= e ? new ce(0, 0) : new ce(this.get(e, this._end), this.get(t, this._end), this._step));
                    }),
                    (ce.prototype.indexOf = function (e) {
                        var t = e - this._start;
                        if (t % this._step == 0) {
                            var n = t / this._step;
                            if (n >= 0 && n < this.size) return n;
                        }
                        return -1;
                    }),
                    (ce.prototype.lastIndexOf = function (e) {
                        return this.indexOf(e);
                    }),
                    (ce.prototype.__iterate = function (e, t) {
                        for (var n = this.size - 1, r = this._step, i = t ? this._start + n * r : this._start, o = 0; o <= n; o++) {
                            if (!1 === e(i, o, this)) return o + 1;
                            i += t ? -r : r;
                        }
                        return o;
                    }),
                    (ce.prototype.__iterator = function (e, t) {
                        var n = this.size - 1,
                            r = this._step,
                            i = t ? this._start + n * r : this._start,
                            o = 0;
                        return new j(function () {
                            var a = i;
                            return (i += t ? -r : r), o > n ? { value: void 0, done: !0 } : L(e, o++, a);
                        });
                    }),
                    (ce.prototype.equals = function (e) {
                        return e instanceof ce ? this._start === e._start && this._end === e._end && this._step === e._step : se(this, e);
                    }),
                    t(de, n),
                    t(fe, de),
                    t(pe, de),
                    t(he, de),
                    (de.Keyed = fe),
                    (de.Indexed = pe),
                    (de.Set = he);
                var me =
                    'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2)
                        ? Math.imul
                        : function (e, t) {
                              var n = 65535 & (e |= 0),
                                  r = 65535 & (t |= 0);
                              return (n * r + ((((e >>> 16) * r + n * (t >>> 16)) << 16) >>> 0)) | 0;
                          };
                function ge(e) {
                    return ((e >>> 1) & 1073741824) | (3221225471 & e);
                }
                function ve(e) {
                    if (!1 === e || null == e) return 0;
                    if ('function' == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)) return 0;
                    if (!0 === e) return 1;
                    var t = typeof e;
                    if ('number' === t) {
                        if (e != e || e === 1 / 0) return 0;
                        var n = 0 | e;
                        for (n !== e && (n ^= 4294967295 * e); e > 4294967295; ) n ^= e /= 4294967295;
                        return ge(n);
                    }
                    if ('string' === t)
                        return e.length > Se
                            ? (function (e) {
                                  var t = Te[e];
                                  return void 0 === t && ((t = ye(e)), Ce === Oe && ((Ce = 0), (Te = {})), Ce++, (Te[e] = t)), t;
                              })(e)
                            : ye(e);
                    if ('function' == typeof e.hashCode) return e.hashCode();
                    if ('object' === t)
                        return (function (e) {
                            var t;
                            if (xe && void 0 !== (t = be.get(e))) return t;
                            if (void 0 !== (t = e[Ee])) return t;
                            if (!we) {
                                if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[Ee])) return t;
                                if (
                                    void 0 !==
                                    (t = (function (e) {
                                        if (e && e.nodeType > 0)
                                            switch (e.nodeType) {
                                                case 1:
                                                    return e.uniqueID;
                                                case 9:
                                                    return e.documentElement && e.documentElement.uniqueID;
                                            }
                                    })(e))
                                )
                                    return t;
                            }
                            if (((t = ++ke), 1073741824 & ke && (ke = 0), xe)) be.set(e, t);
                            else {
                                if (void 0 !== _e && !1 === _e(e)) throw new Error('Non-extensible objects are not allowed as keys.');
                                if (we)
                                    Object.defineProperty(e, Ee, {
                                        enumerable: !1,
                                        configurable: !1,
                                        writable: !1,
                                        value: t
                                    });
                                else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable)
                                    (e.propertyIsEnumerable = function () {
                                        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                                    }),
                                        (e.propertyIsEnumerable[Ee] = t);
                                else {
                                    if (void 0 === e.nodeType) throw new Error('Unable to set a non-enumerable property on object.');
                                    e[Ee] = t;
                                }
                            }
                            return t;
                        })(e);
                    if ('function' == typeof e.toString) return ye(e.toString());
                    throw new Error('Value type ' + t + ' cannot be hashed.');
                }
                function ye(e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
                    return ge(t);
                }
                var be,
                    _e = Object.isExtensible,
                    we = (function () {
                        try {
                            return Object.defineProperty({}, '@', {}), !0;
                        } catch (e) {
                            return !1;
                        }
                    })(),
                    xe = 'function' == typeof WeakMap;
                xe && (be = new WeakMap());
                var ke = 0,
                    Ee = '__immutablehash__';
                'function' == typeof Symbol && (Ee = Symbol(Ee));
                var Se = 16,
                    Oe = 255,
                    Ce = 0,
                    Te = {};
                function Ae(e) {
                    ue(e !== 1 / 0, 'Cannot perform this action with an infinite size.');
                }
                function Pe(e) {
                    return null == e
                        ? We()
                        : Re(e) && !c(e)
                        ? e
                        : We().withMutations(function (t) {
                              var n = r(e);
                              Ae(n.size),
                                  n.forEach(function (e, n) {
                                      return t.set(n, e);
                                  });
                          });
                }
                function Re(e) {
                    return !(!e || !e[Ie]);
                }
                t(Pe, fe),
                    (Pe.of = function () {
                        var t = e.call(arguments, 0);
                        return We().withMutations(function (e) {
                            for (var n = 0; n < t.length; n += 2) {
                                if (n + 1 >= t.length) throw new Error('Missing value for key: ' + t[n]);
                                e.set(t[n], t[n + 1]);
                            }
                        });
                    }),
                    (Pe.prototype.toString = function () {
                        return this.__toString('Map {', '}');
                    }),
                    (Pe.prototype.get = function (e, t) {
                        return this._root ? this._root.get(0, void 0, e, t) : t;
                    }),
                    (Pe.prototype.set = function (e, t) {
                        return Ge(this, e, t);
                    }),
                    (Pe.prototype.setIn = function (e, t) {
                        return this.updateIn(e, m, function () {
                            return t;
                        });
                    }),
                    (Pe.prototype.remove = function (e) {
                        return Ge(this, e, m);
                    }),
                    (Pe.prototype.deleteIn = function (e) {
                        return this.updateIn(e, function () {
                            return m;
                        });
                    }),
                    (Pe.prototype.update = function (e, t, n) {
                        return 1 === arguments.length ? e(this) : this.updateIn([e], t, n);
                    }),
                    (Pe.prototype.updateIn = function (e, t, n) {
                        n || ((n = t), (t = void 0));
                        var r = (function e(t, n, r, i) {
                            var o = t === m,
                                a = n.next();
                            if (a.done) {
                                var s = o ? r : t,
                                    l = i(s);
                                return l === s ? t : l;
                            }
                            ue(o || (t && t.set), 'invalid keyPath');
                            var u = a.value,
                                c = o ? m : t.get(u, m),
                                d = e(c, n, r, i);
                            return d === c ? t : d === m ? t.remove(u) : (o ? We() : t).set(u, d);
                        })(this, Yt(e), t, n);
                        return r === m ? void 0 : r;
                    }),
                    (Pe.prototype.clear = function () {
                        return 0 === this.size
                            ? this
                            : this.__ownerID
                            ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this)
                            : We();
                    }),
                    (Pe.prototype.merge = function () {
                        return Ye(this, void 0, arguments);
                    }),
                    (Pe.prototype.mergeWith = function (t) {
                        var n = e.call(arguments, 1);
                        return Ye(this, t, n);
                    }),
                    (Pe.prototype.mergeIn = function (t) {
                        var n = e.call(arguments, 1);
                        return this.updateIn(t, We(), function (e) {
                            return 'function' == typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1];
                        });
                    }),
                    (Pe.prototype.mergeDeep = function () {
                        return Ye(this, Qe, arguments);
                    }),
                    (Pe.prototype.mergeDeepWith = function (t) {
                        var n = e.call(arguments, 1);
                        return Ye(this, Xe(t), n);
                    }),
                    (Pe.prototype.mergeDeepIn = function (t) {
                        var n = e.call(arguments, 1);
                        return this.updateIn(t, We(), function (e) {
                            return 'function' == typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1];
                        });
                    }),
                    (Pe.prototype.sort = function (e) {
                        return wt(Ft(this, e));
                    }),
                    (Pe.prototype.sortBy = function (e, t) {
                        return wt(Ft(this, t, e));
                    }),
                    (Pe.prototype.withMutations = function (e) {
                        var t = this.asMutable();
                        return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
                    }),
                    (Pe.prototype.asMutable = function () {
                        return this.__ownerID ? this : this.__ensureOwner(new _());
                    }),
                    (Pe.prototype.asImmutable = function () {
                        return this.__ensureOwner();
                    }),
                    (Pe.prototype.wasAltered = function () {
                        return this.__altered;
                    }),
                    (Pe.prototype.__iterator = function (e, t) {
                        return new ze(this, e, t);
                    }),
                    (Pe.prototype.__iterate = function (e, t) {
                        var n = this,
                            r = 0;
                        return (
                            this._root &&
                                this._root.iterate(function (t) {
                                    return r++, e(t[1], t[0], n);
                                }, t),
                            r
                        );
                    }),
                    (Pe.prototype.__ensureOwner = function (e) {
                        return e === this.__ownerID
                            ? this
                            : e
                            ? He(this.size, this._root, e, this.__hash)
                            : ((this.__ownerID = e), (this.__altered = !1), this);
                    }),
                    (Pe.isMap = Re);
                var Me,
                    Ie = '@@__IMMUTABLE_MAP__@@',
                    je = Pe.prototype;
                function Le(e, t) {
                    (this.ownerID = e), (this.entries = t);
                }
                function De(e, t, n) {
                    (this.ownerID = e), (this.bitmap = t), (this.nodes = n);
                }
                function Ne(e, t, n) {
                    (this.ownerID = e), (this.count = t), (this.nodes = n);
                }
                function Fe(e, t, n) {
                    (this.ownerID = e), (this.keyHash = t), (this.entries = n);
                }
                function Be(e, t, n) {
                    (this.ownerID = e), (this.keyHash = t), (this.entry = n);
                }
                function ze(e, t, n) {
                    (this._type = t), (this._reverse = n), (this._stack = e._root && qe(e._root));
                }
                function Ue(e, t) {
                    return L(e, t[0], t[1]);
                }
                function qe(e, t) {
                    return { node: e, index: 0, __prev: t };
                }
                function He(e, t, n, r) {
                    var i = Object.create(je);
                    return (i.size = e), (i._root = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
                }
                function We() {
                    return Me || (Me = He(0));
                }
                function Ge(e, t, n) {
                    var r, i;
                    if (e._root) {
                        var o = y(g),
                            a = y(v);
                        if (((r = $e(e._root, e.__ownerID, 0, void 0, t, n, o, a)), !a.value)) return e;
                        i = e.size + (o.value ? (n === m ? -1 : 1) : 0);
                    } else {
                        if (n === m) return e;
                        (i = 1), (r = new Le(e.__ownerID, [[t, n]]));
                    }
                    return e.__ownerID ? ((e.size = i), (e._root = r), (e.__hash = void 0), (e.__altered = !0), e) : r ? He(i, r) : We();
                }
                function $e(e, t, n, r, i, o, a, s) {
                    return e ? e.update(t, n, r, i, o, a, s) : o === m ? e : (b(s), b(a), new Be(t, r, [i, o]));
                }
                function Ve(e) {
                    return e.constructor === Be || e.constructor === Fe;
                }
                function Ke(e, t, n, r, i) {
                    if (e.keyHash === r) return new Fe(t, r, [e.entry, i]);
                    var o,
                        a = 31 & (0 === n ? e.keyHash : e.keyHash >>> n),
                        s = 31 & (0 === n ? r : r >>> n);
                    return new De(t, (1 << a) | (1 << s), a === s ? [Ke(e, t, n + 5, r, i)] : ((o = new Be(t, r, i)), a < s ? [e, o] : [o, e]));
                }
                function Ye(e, t, n) {
                    for (var i = [], o = 0; o < n.length; o++) {
                        var s = n[o],
                            l = r(s);
                        a(s) ||
                            (l = l.map(function (e) {
                                return re(e);
                            })),
                            i.push(l);
                    }
                    return Je(e, t, i);
                }
                function Qe(e, t, n) {
                    return e && e.mergeDeep && a(t) ? e.mergeDeep(t) : ae(e, t) ? e : t;
                }
                function Xe(e) {
                    return function (t, n, r) {
                        if (t && t.mergeDeepWith && a(n)) return t.mergeDeepWith(e, n);
                        var i = e(t, n, r);
                        return ae(t, i) ? t : i;
                    };
                }
                function Je(e, t, n) {
                    return 0 ===
                        (n = n.filter(function (e) {
                            return 0 !== e.size;
                        })).length
                        ? e
                        : 0 !== e.size || e.__ownerID || 1 !== n.length
                        ? e.withMutations(function (e) {
                              for (
                                  var r = t
                                          ? function (n, r) {
                                                e.update(r, m, function (e) {
                                                    return e === m ? n : t(e, n, r);
                                                });
                                            }
                                          : function (t, n) {
                                                e.set(n, t);
                                            },
                                      i = 0;
                                  i < n.length;
                                  i++
                              )
                                  n[i].forEach(r);
                          })
                        : e.constructor(n[0]);
                }
                function Ze(e) {
                    return (
                        (e = ((e = (858993459 & (e -= (e >> 1) & 1431655765)) + ((e >> 2) & 858993459)) + (e >> 4)) & 252645135),
                        (e += e >> 8),
                        127 & (e += e >> 16)
                    );
                }
                function et(e, t, n, r) {
                    var i = r ? e : w(e);
                    return (i[t] = n), i;
                }
                (je[Ie] = !0),
                    (je.delete = je.remove),
                    (je.removeIn = je.deleteIn),
                    (Le.prototype.get = function (e, t, n, r) {
                        for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (ae(n, i[o][0])) return i[o][1];
                        return r;
                    }),
                    (Le.prototype.update = function (e, t, n, r, i, o, a) {
                        for (var s = i === m, l = this.entries, u = 0, c = l.length; u < c && !ae(r, l[u][0]); u++);
                        var d = u < c;
                        if (d ? l[u][1] === i : s) return this;
                        if ((b(a), (s || !d) && b(o), !s || 1 !== l.length)) {
                            if (!d && !s && l.length >= tt)
                                return (function (e, t, n, r) {
                                    e || (e = new _());
                                    for (var i = new Be(e, ve(n), [n, r]), o = 0; o < t.length; o++) {
                                        var a = t[o];
                                        i = i.update(e, 0, void 0, a[0], a[1]);
                                    }
                                    return i;
                                })(e, l, r, i);
                            var f = e && e === this.ownerID,
                                p = f ? l : w(l);
                            return (
                                d ? (s ? (u === c - 1 ? p.pop() : (p[u] = p.pop())) : (p[u] = [r, i])) : p.push([r, i]),
                                f ? ((this.entries = p), this) : new Le(e, p)
                            );
                        }
                    }),
                    (De.prototype.get = function (e, t, n, r) {
                        void 0 === t && (t = ve(n));
                        var i = 1 << (31 & (0 === e ? t : t >>> e)),
                            o = this.bitmap;
                        return 0 == (o & i) ? r : this.nodes[Ze(o & (i - 1))].get(e + 5, t, n, r);
                    }),
                    (De.prototype.update = function (e, t, n, r, i, o, a) {
                        void 0 === n && (n = ve(r));
                        var s = 31 & (0 === t ? n : n >>> t),
                            l = 1 << s,
                            u = this.bitmap,
                            c = 0 != (u & l);
                        if (!c && i === m) return this;
                        var d = Ze(u & (l - 1)),
                            f = this.nodes,
                            p = c ? f[d] : void 0,
                            h = $e(p, e, t + 5, n, r, i, o, a);
                        if (h === p) return this;
                        if (!c && h && f.length >= nt)
                            return (function (e, t, n, r, i) {
                                for (var o = 0, a = new Array(32), s = 0; 0 !== n; s++, n >>>= 1) a[s] = 1 & n ? t[o++] : void 0;
                                return (a[r] = i), new Ne(e, o + 1, a);
                            })(e, f, u, s, h);
                        if (c && !h && 2 === f.length && Ve(f[1 ^ d])) return f[1 ^ d];
                        if (c && h && 1 === f.length && Ve(h)) return h;
                        var g = e && e === this.ownerID,
                            v = c ? (h ? u : u ^ l) : u | l,
                            y = c
                                ? h
                                    ? et(f, d, h, g)
                                    : (function (e, t, n) {
                                          var r = e.length - 1;
                                          if (n && t === r) return e.pop(), e;
                                          for (var i = new Array(r), o = 0, a = 0; a < r; a++) a === t && (o = 1), (i[a] = e[a + o]);
                                          return i;
                                      })(f, d, g)
                                : (function (e, t, n, r) {
                                      var i = e.length + 1;
                                      if (r && t + 1 === i) return (e[t] = n), e;
                                      for (var o = new Array(i), a = 0, s = 0; s < i; s++) s === t ? ((o[s] = n), (a = -1)) : (o[s] = e[s + a]);
                                      return o;
                                  })(f, d, h, g);
                        return g ? ((this.bitmap = v), (this.nodes = y), this) : new De(e, v, y);
                    }),
                    (Ne.prototype.get = function (e, t, n, r) {
                        void 0 === t && (t = ve(n));
                        var i = 31 & (0 === e ? t : t >>> e),
                            o = this.nodes[i];
                        return o ? o.get(e + 5, t, n, r) : r;
                    }),
                    (Ne.prototype.update = function (e, t, n, r, i, o, a) {
                        void 0 === n && (n = ve(r));
                        var s = 31 & (0 === t ? n : n >>> t),
                            l = i === m,
                            u = this.nodes,
                            c = u[s];
                        if (l && !c) return this;
                        var d = $e(c, e, t + 5, n, r, i, o, a);
                        if (d === c) return this;
                        var f = this.count;
                        if (c) {
                            if (!d && --f < rt)
                                return (function (e, t, n, r) {
                                    for (var i = 0, o = 0, a = new Array(n), s = 0, l = 1, u = t.length; s < u; s++, l <<= 1) {
                                        var c = t[s];
                                        void 0 !== c && s !== r && ((i |= l), (a[o++] = c));
                                    }
                                    return new De(e, i, a);
                                })(e, u, f, s);
                        } else f++;
                        var p = e && e === this.ownerID,
                            h = et(u, s, d, p);
                        return p ? ((this.count = f), (this.nodes = h), this) : new Ne(e, f, h);
                    }),
                    (Fe.prototype.get = function (e, t, n, r) {
                        for (var i = this.entries, o = 0, a = i.length; o < a; o++) if (ae(n, i[o][0])) return i[o][1];
                        return r;
                    }),
                    (Fe.prototype.update = function (e, t, n, r, i, o, a) {
                        void 0 === n && (n = ve(r));
                        var s = i === m;
                        if (n !== this.keyHash) return s ? this : (b(a), b(o), Ke(this, e, t, n, [r, i]));
                        for (var l = this.entries, u = 0, c = l.length; u < c && !ae(r, l[u][0]); u++);
                        var d = u < c;
                        if (d ? l[u][1] === i : s) return this;
                        if ((b(a), (s || !d) && b(o), s && 2 === c)) return new Be(e, this.keyHash, l[1 ^ u]);
                        var f = e && e === this.ownerID,
                            p = f ? l : w(l);
                        return (
                            d ? (s ? (u === c - 1 ? p.pop() : (p[u] = p.pop())) : (p[u] = [r, i])) : p.push([r, i]),
                            f ? ((this.entries = p), this) : new Fe(e, this.keyHash, p)
                        );
                    }),
                    (Be.prototype.get = function (e, t, n, r) {
                        return ae(n, this.entry[0]) ? this.entry[1] : r;
                    }),
                    (Be.prototype.update = function (e, t, n, r, i, o, a) {
                        var s = i === m,
                            l = ae(r, this.entry[0]);
                        return (l ? i === this.entry[1] : s)
                            ? this
                            : (b(a),
                              s
                                  ? void b(o)
                                  : l
                                  ? e && e === this.ownerID
                                      ? ((this.entry[1] = i), this)
                                      : new Be(e, this.keyHash, [r, i])
                                  : (b(o), Ke(this, e, t, ve(r), [r, i])));
                    }),
                    (Le.prototype.iterate = Fe.prototype.iterate =
                        function (e, t) {
                            for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++) if (!1 === e(n[t ? i - r : r])) return !1;
                        }),
                    (De.prototype.iterate = Ne.prototype.iterate =
                        function (e, t) {
                            for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                                var o = n[t ? i - r : r];
                                if (o && !1 === o.iterate(e, t)) return !1;
                            }
                        }),
                    (Be.prototype.iterate = function (e, t) {
                        return e(this.entry);
                    }),
                    t(ze, j),
                    (ze.prototype.next = function () {
                        for (var e = this._type, t = this._stack; t; ) {
                            var n,
                                r = t.node,
                                i = t.index++;
                            if (r.entry) {
                                if (0 === i) return Ue(e, r.entry);
                            } else if (r.entries) {
                                if (i <= (n = r.entries.length - 1)) return Ue(e, r.entries[this._reverse ? n - i : i]);
                            } else if (i <= (n = r.nodes.length - 1)) {
                                var o = r.nodes[this._reverse ? n - i : i];
                                if (o) {
                                    if (o.entry) return Ue(e, o.entry);
                                    t = this._stack = qe(o, t);
                                }
                                continue;
                            }
                            t = this._stack = this._stack.__prev;
                        }
                        return { value: void 0, done: !0 };
                    });
                var tt = 8,
                    nt = 16,
                    rt = 8;
                function it(e) {
                    var t = ht();
                    if (null == e) return t;
                    if (ot(e)) return e;
                    var n = i(e),
                        r = n.size;
                    return 0 === r
                        ? t
                        : (Ae(r),
                          r > 0 && r < 32
                              ? pt(0, r, 5, null, new lt(n.toArray()))
                              : t.withMutations(function (e) {
                                    e.setSize(r),
                                        n.forEach(function (t, n) {
                                            return e.set(n, t);
                                        });
                                }));
                }
                function ot(e) {
                    return !(!e || !e[at]);
                }
                t(it, pe),
                    (it.of = function () {
                        return this(arguments);
                    }),
                    (it.prototype.toString = function () {
                        return this.__toString('List [', ']');
                    }),
                    (it.prototype.get = function (e, t) {
                        if ((e = k(this, e)) >= 0 && e < this.size) {
                            var n = vt(this, (e += this._origin));
                            return n && n.array[31 & e];
                        }
                        return t;
                    }),
                    (it.prototype.set = function (e, t) {
                        return (function (e, t, n) {
                            if ((t = k(e, t)) != t) return e;
                            if (t >= e.size || t < 0)
                                return e.withMutations(function (e) {
                                    t < 0 ? yt(e, t).set(0, n) : yt(e, 0, t + 1).set(t, n);
                                });
                            t += e._origin;
                            var r = e._tail,
                                i = e._root,
                                o = y(v);
                            return (
                                t >= _t(e._capacity) ? (r = mt(r, e.__ownerID, 0, t, n, o)) : (i = mt(i, e.__ownerID, e._level, t, n, o)),
                                o.value
                                    ? e.__ownerID
                                        ? ((e._root = i), (e._tail = r), (e.__hash = void 0), (e.__altered = !0), e)
                                        : pt(e._origin, e._capacity, e._level, i, r)
                                    : e
                            );
                        })(this, e, t);
                    }),
                    (it.prototype.remove = function (e) {
                        return this.has(e) ? (0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1)) : this;
                    }),
                    (it.prototype.insert = function (e, t) {
                        return this.splice(e, 0, t);
                    }),
                    (it.prototype.clear = function () {
                        return 0 === this.size
                            ? this
                            : this.__ownerID
                            ? ((this.size = this._origin = this._capacity = 0),
                              (this._level = 5),
                              (this._root = this._tail = null),
                              (this.__hash = void 0),
                              (this.__altered = !0),
                              this)
                            : ht();
                    }),
                    (it.prototype.push = function () {
                        var e = arguments,
                            t = this.size;
                        return this.withMutations(function (n) {
                            yt(n, 0, t + e.length);
                            for (var r = 0; r < e.length; r++) n.set(t + r, e[r]);
                        });
                    }),
                    (it.prototype.pop = function () {
                        return yt(this, 0, -1);
                    }),
                    (it.prototype.unshift = function () {
                        var e = arguments;
                        return this.withMutations(function (t) {
                            yt(t, -e.length);
                            for (var n = 0; n < e.length; n++) t.set(n, e[n]);
                        });
                    }),
                    (it.prototype.shift = function () {
                        return yt(this, 1);
                    }),
                    (it.prototype.merge = function () {
                        return bt(this, void 0, arguments);
                    }),
                    (it.prototype.mergeWith = function (t) {
                        var n = e.call(arguments, 1);
                        return bt(this, t, n);
                    }),
                    (it.prototype.mergeDeep = function () {
                        return bt(this, Qe, arguments);
                    }),
                    (it.prototype.mergeDeepWith = function (t) {
                        var n = e.call(arguments, 1);
                        return bt(this, Xe(t), n);
                    }),
                    (it.prototype.setSize = function (e) {
                        return yt(this, 0, e);
                    }),
                    (it.prototype.slice = function (e, t) {
                        var n = this.size;
                        return S(e, t, n) ? this : yt(this, O(e, n), C(t, n));
                    }),
                    (it.prototype.__iterator = function (e, t) {
                        var n = 0,
                            r = ft(this, t);
                        return new j(function () {
                            var t = r();
                            return t === dt ? { value: void 0, done: !0 } : L(e, n++, t);
                        });
                    }),
                    (it.prototype.__iterate = function (e, t) {
                        for (var n, r = 0, i = ft(this, t); (n = i()) !== dt && !1 !== e(n, r++, this); );
                        return r;
                    }),
                    (it.prototype.__ensureOwner = function (e) {
                        return e === this.__ownerID
                            ? this
                            : e
                            ? pt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash)
                            : ((this.__ownerID = e), this);
                    }),
                    (it.isList = ot);
                var at = '@@__IMMUTABLE_LIST__@@',
                    st = it.prototype;
                function lt(e, t) {
                    (this.array = e), (this.ownerID = t);
                }
                (st[at] = !0),
                    (st.delete = st.remove),
                    (st.setIn = je.setIn),
                    (st.deleteIn = st.removeIn = je.removeIn),
                    (st.update = je.update),
                    (st.updateIn = je.updateIn),
                    (st.mergeIn = je.mergeIn),
                    (st.mergeDeepIn = je.mergeDeepIn),
                    (st.withMutations = je.withMutations),
                    (st.asMutable = je.asMutable),
                    (st.asImmutable = je.asImmutable),
                    (st.wasAltered = je.wasAltered),
                    (lt.prototype.removeBefore = function (e, t, n) {
                        if (n === t ? 1 << t : 0 === this.array.length) return this;
                        var r = (n >>> t) & 31;
                        if (r >= this.array.length) return new lt([], e);
                        var i,
                            o = 0 === r;
                        if (t > 0) {
                            var a = this.array[r];
                            if ((i = a && a.removeBefore(e, t - 5, n)) === a && o) return this;
                        }
                        if (o && !i) return this;
                        var s = gt(this, e);
                        if (!o) for (var l = 0; l < r; l++) s.array[l] = void 0;
                        return i && (s.array[r] = i), s;
                    }),
                    (lt.prototype.removeAfter = function (e, t, n) {
                        if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
                        var r,
                            i = ((n - 1) >>> t) & 31;
                        if (i >= this.array.length) return this;
                        if (t > 0) {
                            var o = this.array[i];
                            if ((r = o && o.removeAfter(e, t - 5, n)) === o && i === this.array.length - 1) return this;
                        }
                        var a = gt(this, e);
                        return a.array.splice(i + 1), r && (a.array[i] = r), a;
                    });
                var ut,
                    ct,
                    dt = {};
                function ft(e, t) {
                    var n = e._origin,
                        r = e._capacity,
                        i = _t(r),
                        o = e._tail;
                    return a(e._root, e._level, 0);
                    function a(e, s, l) {
                        return 0 === s
                            ? (function (e, a) {
                                  var s = a === i ? o && o.array : e && e.array,
                                      l = a > n ? 0 : n - a,
                                      u = r - a;
                                  return (
                                      u > 32 && (u = 32),
                                      function () {
                                          if (l === u) return dt;
                                          var e = t ? --u : l++;
                                          return s && s[e];
                                      }
                                  );
                              })(e, l)
                            : (function (e, i, o) {
                                  var s,
                                      l = e && e.array,
                                      u = o > n ? 0 : (n - o) >> i,
                                      c = 1 + ((r - o) >> i);
                                  return (
                                      c > 32 && (c = 32),
                                      function () {
                                          for (;;) {
                                              if (s) {
                                                  var e = s();
                                                  if (e !== dt) return e;
                                                  s = null;
                                              }
                                              if (u === c) return dt;
                                              var n = t ? --c : u++;
                                              s = a(l && l[n], i - 5, o + (n << i));
                                          }
                                      }
                                  );
                              })(e, s, l);
                    }
                }
                function pt(e, t, n, r, i, o, a) {
                    var s = Object.create(st);
                    return (
                        (s.size = t - e),
                        (s._origin = e),
                        (s._capacity = t),
                        (s._level = n),
                        (s._root = r),
                        (s._tail = i),
                        (s.__ownerID = o),
                        (s.__hash = a),
                        (s.__altered = !1),
                        s
                    );
                }
                function ht() {
                    return ut || (ut = pt(0, 0, 5));
                }
                function mt(e, t, n, r, i, o) {
                    var a,
                        s = (r >>> n) & 31,
                        l = e && s < e.array.length;
                    if (!l && void 0 === i) return e;
                    if (n > 0) {
                        var u = e && e.array[s],
                            c = mt(u, t, n - 5, r, i, o);
                        return c === u ? e : (((a = gt(e, t)).array[s] = c), a);
                    }
                    return l && e.array[s] === i ? e : (b(o), (a = gt(e, t)), void 0 === i && s === a.array.length - 1 ? a.array.pop() : (a.array[s] = i), a);
                }
                function gt(e, t) {
                    return t && e && t === e.ownerID ? e : new lt(e ? e.array.slice() : [], t);
                }
                function vt(e, t) {
                    if (t >= _t(e._capacity)) return e._tail;
                    if (t < 1 << (e._level + 5)) {
                        for (var n = e._root, r = e._level; n && r > 0; ) (n = n.array[(t >>> r) & 31]), (r -= 5);
                        return n;
                    }
                }
                function yt(e, t, n) {
                    void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
                    var r = e.__ownerID || new _(),
                        i = e._origin,
                        o = e._capacity,
                        a = i + t,
                        s = void 0 === n ? o : n < 0 ? o + n : i + n;
                    if (a === i && s === o) return e;
                    if (a >= s) return e.clear();
                    for (var l = e._level, u = e._root, c = 0; a + c < 0; ) (u = new lt(u && u.array.length ? [void 0, u] : [], r)), (c += 1 << (l += 5));
                    c && ((a += c), (i += c), (s += c), (o += c));
                    for (var d = _t(o), f = _t(s); f >= 1 << (l + 5); ) (u = new lt(u && u.array.length ? [u] : [], r)), (l += 5);
                    var p = e._tail,
                        h = f < d ? vt(e, s - 1) : f > d ? new lt([], r) : p;
                    if (p && f > d && a < o && p.array.length) {
                        for (var m = (u = gt(u, r)), g = l; g > 5; g -= 5) {
                            var v = (d >>> g) & 31;
                            m = m.array[v] = gt(m.array[v], r);
                        }
                        m.array[(d >>> 5) & 31] = p;
                    }
                    if ((s < o && (h = h && h.removeAfter(r, 0, s)), a >= f)) (a -= f), (s -= f), (l = 5), (u = null), (h = h && h.removeBefore(r, 0, a));
                    else if (a > i || f < d) {
                        for (c = 0; u; ) {
                            var y = (a >>> l) & 31;
                            if ((y !== f >>> l) & 31) break;
                            y && (c += (1 << l) * y), (l -= 5), (u = u.array[y]);
                        }
                        u && a > i && (u = u.removeBefore(r, l, a - c)), u && f < d && (u = u.removeAfter(r, l, f - c)), c && ((a -= c), (s -= c));
                    }
                    return e.__ownerID
                        ? ((e.size = s - a),
                          (e._origin = a),
                          (e._capacity = s),
                          (e._level = l),
                          (e._root = u),
                          (e._tail = h),
                          (e.__hash = void 0),
                          (e.__altered = !0),
                          e)
                        : pt(a, s, l, u, h);
                }
                function bt(e, t, n) {
                    for (var r = [], o = 0, s = 0; s < n.length; s++) {
                        var l = n[s],
                            u = i(l);
                        u.size > o && (o = u.size),
                            a(l) ||
                                (u = u.map(function (e) {
                                    return re(e);
                                })),
                            r.push(u);
                    }
                    return o > e.size && (e = e.setSize(o)), Je(e, t, r);
                }
                function _t(e) {
                    return e < 32 ? 0 : ((e - 1) >>> 5) << 5;
                }
                function wt(e) {
                    return null == e
                        ? Et()
                        : xt(e)
                        ? e
                        : Et().withMutations(function (t) {
                              var n = r(e);
                              Ae(n.size),
                                  n.forEach(function (e, n) {
                                      return t.set(n, e);
                                  });
                          });
                }
                function xt(e) {
                    return Re(e) && c(e);
                }
                function kt(e, t, n, r) {
                    var i = Object.create(wt.prototype);
                    return (i.size = e ? e.size : 0), (i._map = e), (i._list = t), (i.__ownerID = n), (i.__hash = r), i;
                }
                function Et() {
                    return ct || (ct = kt(We(), ht()));
                }
                function St(e, t, n) {
                    var r,
                        i,
                        o = e._map,
                        a = e._list,
                        s = o.get(t),
                        l = void 0 !== s;
                    if (n === m) {
                        if (!l) return e;
                        a.size >= 32 && a.size >= 2 * o.size
                            ? ((r = (i = a.filter(function (e, t) {
                                  return void 0 !== e && s !== t;
                              }))
                                  .toKeyedSeq()
                                  .map(function (e) {
                                      return e[0];
                                  })
                                  .flip()
                                  .toMap()),
                              e.__ownerID && (r.__ownerID = i.__ownerID = e.__ownerID))
                            : ((r = o.remove(t)), (i = s === a.size - 1 ? a.pop() : a.set(s, void 0)));
                    } else if (l) {
                        if (n === a.get(s)[1]) return e;
                        (r = o), (i = a.set(s, [t, n]));
                    } else (r = o.set(t, a.size)), (i = a.set(a.size, [t, n]));
                    return e.__ownerID ? ((e.size = r.size), (e._map = r), (e._list = i), (e.__hash = void 0), e) : kt(r, i);
                }
                function Ot(e, t) {
                    (this._iter = e), (this._useKeys = t), (this.size = e.size);
                }
                function Ct(e) {
                    (this._iter = e), (this.size = e.size);
                }
                function Tt(e) {
                    (this._iter = e), (this.size = e.size);
                }
                function At(e) {
                    (this._iter = e), (this.size = e.size);
                }
                function Pt(e) {
                    var t = $t(e);
                    return (
                        (t._iter = e),
                        (t.size = e.size),
                        (t.flip = function () {
                            return e;
                        }),
                        (t.reverse = function () {
                            var t = e.reverse.apply(this);
                            return (
                                (t.flip = function () {
                                    return e.reverse();
                                }),
                                t
                            );
                        }),
                        (t.has = function (t) {
                            return e.includes(t);
                        }),
                        (t.includes = function (t) {
                            return e.has(t);
                        }),
                        (t.cacheResult = Vt),
                        (t.__iterateUncached = function (t, n) {
                            var r = this;
                            return e.__iterate(function (e, n) {
                                return !1 !== t(n, e, r);
                            }, n);
                        }),
                        (t.__iteratorUncached = function (t, n) {
                            if (2 === t) {
                                var r = e.__iterator(t, n);
                                return new j(function () {
                                    var e = r.next();
                                    if (!e.done) {
                                        var t = e.value[0];
                                        (e.value[0] = e.value[1]), (e.value[1] = t);
                                    }
                                    return e;
                                });
                            }
                            return e.__iterator(1 === t ? 0 : 1, n);
                        }),
                        t
                    );
                }
                function Rt(e, t, n) {
                    var r = $t(e);
                    return (
                        (r.size = e.size),
                        (r.has = function (t) {
                            return e.has(t);
                        }),
                        (r.get = function (r, i) {
                            var o = e.get(r, m);
                            return o === m ? i : t.call(n, o, r, e);
                        }),
                        (r.__iterateUncached = function (r, i) {
                            var o = this;
                            return e.__iterate(function (e, i, a) {
                                return !1 !== r(t.call(n, e, i, a), i, o);
                            }, i);
                        }),
                        (r.__iteratorUncached = function (r, i) {
                            var o = e.__iterator(2, i);
                            return new j(function () {
                                var i = o.next();
                                if (i.done) return i;
                                var a = i.value,
                                    s = a[0];
                                return L(r, s, t.call(n, a[1], s, e), i);
                            });
                        }),
                        r
                    );
                }
                function Mt(e, t) {
                    var n = $t(e);
                    return (
                        (n._iter = e),
                        (n.size = e.size),
                        (n.reverse = function () {
                            return e;
                        }),
                        e.flip &&
                            (n.flip = function () {
                                var t = Pt(e);
                                return (
                                    (t.reverse = function () {
                                        return e.flip();
                                    }),
                                    t
                                );
                            }),
                        (n.get = function (n, r) {
                            return e.get(t ? n : -1 - n, r);
                        }),
                        (n.has = function (n) {
                            return e.has(t ? n : -1 - n);
                        }),
                        (n.includes = function (t) {
                            return e.includes(t);
                        }),
                        (n.cacheResult = Vt),
                        (n.__iterate = function (t, n) {
                            var r = this;
                            return e.__iterate(function (e, n) {
                                return t(e, n, r);
                            }, !n);
                        }),
                        (n.__iterator = function (t, n) {
                            return e.__iterator(t, !n);
                        }),
                        n
                    );
                }
                function It(e, t, n, r) {
                    var i = $t(e);
                    return (
                        r &&
                            ((i.has = function (r) {
                                var i = e.get(r, m);
                                return i !== m && !!t.call(n, i, r, e);
                            }),
                            (i.get = function (r, i) {
                                var o = e.get(r, m);
                                return o !== m && t.call(n, o, r, e) ? o : i;
                            })),
                        (i.__iterateUncached = function (i, o) {
                            var a = this,
                                s = 0;
                            return (
                                e.__iterate(function (e, o, l) {
                                    if (t.call(n, e, o, l)) return s++, i(e, r ? o : s - 1, a);
                                }, o),
                                s
                            );
                        }),
                        (i.__iteratorUncached = function (i, o) {
                            var a = e.__iterator(2, o),
                                s = 0;
                            return new j(function () {
                                for (;;) {
                                    var o = a.next();
                                    if (o.done) return o;
                                    var l = o.value,
                                        u = l[0],
                                        c = l[1];
                                    if (t.call(n, c, u, e)) return L(i, r ? u : s++, c, o);
                                }
                            });
                        }),
                        i
                    );
                }
                function jt(e, t, n, r) {
                    var i = e.size;
                    if ((void 0 !== t && (t |= 0), void 0 !== n && (n === 1 / 0 ? (n = i) : (n |= 0)), S(t, n, i))) return e;
                    var o = O(t, i),
                        a = C(n, i);
                    if (o != o || a != a) return jt(e.toSeq().cacheResult(), t, n, r);
                    var s,
                        l = a - o;
                    l == l && (s = l < 0 ? 0 : l);
                    var u = $t(e);
                    return (
                        (u.size = 0 === s ? s : (e.size && s) || void 0),
                        !r &&
                            Q(e) &&
                            s >= 0 &&
                            (u.get = function (t, n) {
                                return (t = k(this, t)) >= 0 && t < s ? e.get(t + o, n) : n;
                            }),
                        (u.__iterateUncached = function (t, n) {
                            var i = this;
                            if (0 === s) return 0;
                            if (n) return this.cacheResult().__iterate(t, n);
                            var a = 0,
                                l = !0,
                                u = 0;
                            return (
                                e.__iterate(function (e, n) {
                                    if (!l || !(l = a++ < o)) return u++, !1 !== t(e, r ? n : u - 1, i) && u !== s;
                                }),
                                u
                            );
                        }),
                        (u.__iteratorUncached = function (t, n) {
                            if (0 !== s && n) return this.cacheResult().__iterator(t, n);
                            var i = 0 !== s && e.__iterator(t, n),
                                a = 0,
                                l = 0;
                            return new j(function () {
                                for (; a++ < o; ) i.next();
                                if (++l > s) return { value: void 0, done: !0 };
                                var e = i.next();
                                return r || 1 === t ? e : L(t, l - 1, 0 === t ? void 0 : e.value[1], e);
                            });
                        }),
                        u
                    );
                }
                function Lt(e, t, n, r) {
                    var i = $t(e);
                    return (
                        (i.__iterateUncached = function (i, o) {
                            var a = this;
                            if (o) return this.cacheResult().__iterate(i, o);
                            var s = !0,
                                l = 0;
                            return (
                                e.__iterate(function (e, o, u) {
                                    if (!s || !(s = t.call(n, e, o, u))) return l++, i(e, r ? o : l - 1, a);
                                }),
                                l
                            );
                        }),
                        (i.__iteratorUncached = function (i, o) {
                            var a = this;
                            if (o) return this.cacheResult().__iterator(i, o);
                            var s = e.__iterator(2, o),
                                l = !0,
                                u = 0;
                            return new j(function () {
                                var e, o, c;
                                do {
                                    if ((e = s.next()).done) return r || 1 === i ? e : L(i, u++, 0 === i ? void 0 : e.value[1], e);
                                    var d = e.value;
                                    (o = d[0]), (c = d[1]), l && (l = t.call(n, c, o, a));
                                } while (l);
                                return 2 === i ? e : L(i, o, c, e);
                            });
                        }),
                        i
                    );
                }
                function Dt(e, t) {
                    var n = s(e),
                        i = [e]
                            .concat(t)
                            .map(function (e) {
                                return a(e) ? n && (e = r(e)) : (e = n ? J(e) : Z(Array.isArray(e) ? e : [e])), e;
                            })
                            .filter(function (e) {
                                return 0 !== e.size;
                            });
                    if (0 === i.length) return e;
                    if (1 === i.length) {
                        var o = i[0];
                        if (o === e || (n && s(o)) || (l(e) && l(o))) return o;
                    }
                    var u = new $(i);
                    return (
                        n ? (u = u.toKeyedSeq()) : l(e) || (u = u.toSetSeq()),
                        ((u = u.flatten(!0)).size = i.reduce(function (e, t) {
                            if (void 0 !== e) {
                                var n = t.size;
                                if (void 0 !== n) return e + n;
                            }
                        }, 0)),
                        u
                    );
                }
                function Nt(e, t, n) {
                    var r = $t(e);
                    return (
                        (r.__iterateUncached = function (r, i) {
                            var o = 0,
                                s = !1;
                            return (
                                (function e(l, u) {
                                    var c = this;
                                    l.__iterate(function (i, l) {
                                        return (!t || u < t) && a(i) ? e(i, u + 1) : !1 === r(i, n ? l : o++, c) && (s = !0), !s;
                                    }, i);
                                })(e, 0),
                                o
                            );
                        }),
                        (r.__iteratorUncached = function (r, i) {
                            var o = e.__iterator(r, i),
                                s = [],
                                l = 0;
                            return new j(function () {
                                for (; o; ) {
                                    var e = o.next();
                                    if (!1 === e.done) {
                                        var u = e.value;
                                        if ((2 === r && (u = u[1]), (t && !(s.length < t)) || !a(u))) return n ? e : L(r, l++, u, e);
                                        s.push(o), (o = u.__iterator(r, i));
                                    } else o = s.pop();
                                }
                                return { value: void 0, done: !0 };
                            });
                        }),
                        r
                    );
                }
                function Ft(e, t, n) {
                    t || (t = Kt);
                    var r = s(e),
                        i = 0,
                        o = e
                            .toSeq()
                            .map(function (t, r) {
                                return [r, t, i++, n ? n(t, r, e) : t];
                            })
                            .toArray();
                    return (
                        o
                            .sort(function (e, n) {
                                return t(e[3], n[3]) || e[2] - n[2];
                            })
                            .forEach(
                                r
                                    ? function (e, t) {
                                          o[t].length = 2;
                                      }
                                    : function (e, t) {
                                          o[t] = e[1];
                                      }
                            ),
                        r ? H(o) : l(e) ? W(o) : G(o)
                    );
                }
                function Bt(e, t, n) {
                    if ((t || (t = Kt), n)) {
                        var r = e
                            .toSeq()
                            .map(function (t, r) {
                                return [t, n(t, r, e)];
                            })
                            .reduce(function (e, n) {
                                return zt(t, e[1], n[1]) ? n : e;
                            });
                        return r && r[0];
                    }
                    return e.reduce(function (e, n) {
                        return zt(t, e, n) ? n : e;
                    });
                }
                function zt(e, t, n) {
                    var r = e(n, t);
                    return (0 === r && n !== t && (null == n || n != n)) || r > 0;
                }
                function Ut(e, t, r) {
                    var i = $t(e);
                    return (
                        (i.size = new $(r)
                            .map(function (e) {
                                return e.size;
                            })
                            .min()),
                        (i.__iterate = function (e, t) {
                            for (var n, r = this.__iterator(1, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
                            return i;
                        }),
                        (i.__iteratorUncached = function (e, i) {
                            var o = r.map(function (e) {
                                    return (e = n(e)), B(i ? e.reverse() : e);
                                }),
                                a = 0,
                                s = !1;
                            return new j(function () {
                                var n;
                                return (
                                    s ||
                                        ((n = o.map(function (e) {
                                            return e.next();
                                        })),
                                        (s = n.some(function (e) {
                                            return e.done;
                                        }))),
                                    s
                                        ? { value: void 0, done: !0 }
                                        : L(
                                              e,
                                              a++,
                                              t.apply(
                                                  null,
                                                  n.map(function (e) {
                                                      return e.value;
                                                  })
                                              )
                                          )
                                );
                            });
                        }),
                        i
                    );
                }
                function qt(e, t) {
                    return Q(e) ? t : e.constructor(t);
                }
                function Ht(e) {
                    if (e !== Object(e)) throw new TypeError('Expected [K, V] tuple: ' + e);
                }
                function Wt(e) {
                    return Ae(e.size), x(e);
                }
                function Gt(e) {
                    return s(e) ? r : l(e) ? i : o;
                }
                function $t(e) {
                    return Object.create((s(e) ? H : l(e) ? W : G).prototype);
                }
                function Vt() {
                    return this._iter.cacheResult ? (this._iter.cacheResult(), (this.size = this._iter.size), this) : q.prototype.cacheResult.call(this);
                }
                function Kt(e, t) {
                    return e > t ? 1 : e < t ? -1 : 0;
                }
                function Yt(e) {
                    var t = B(e);
                    if (!t) {
                        if (!U(e)) throw new TypeError('Expected iterable or array-like: ' + e);
                        t = B(n(e));
                    }
                    return t;
                }
                function Qt(e, t) {
                    var n,
                        r = function (o) {
                            if (o instanceof r) return o;
                            if (!(this instanceof r)) return new r(o);
                            if (!n) {
                                n = !0;
                                var a = Object.keys(e);
                                !(function (e, t) {
                                    try {
                                        t.forEach(en.bind(void 0, e));
                                    } catch (e) {}
                                })(i, a),
                                    (i.size = a.length),
                                    (i._name = t),
                                    (i._keys = a),
                                    (i._defaultValues = e);
                            }
                            this._map = Pe(o);
                        },
                        i = (r.prototype = Object.create(Xt));
                    return (i.constructor = r), r;
                }
                t(wt, Pe),
                    (wt.of = function () {
                        return this(arguments);
                    }),
                    (wt.prototype.toString = function () {
                        return this.__toString('OrderedMap {', '}');
                    }),
                    (wt.prototype.get = function (e, t) {
                        var n = this._map.get(e);
                        return void 0 !== n ? this._list.get(n)[1] : t;
                    }),
                    (wt.prototype.clear = function () {
                        return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), this._map.clear(), this._list.clear(), this) : Et();
                    }),
                    (wt.prototype.set = function (e, t) {
                        return St(this, e, t);
                    }),
                    (wt.prototype.remove = function (e) {
                        return St(this, e, m);
                    }),
                    (wt.prototype.wasAltered = function () {
                        return this._map.wasAltered() || this._list.wasAltered();
                    }),
                    (wt.prototype.__iterate = function (e, t) {
                        var n = this;
                        return this._list.__iterate(function (t) {
                            return t && e(t[1], t[0], n);
                        }, t);
                    }),
                    (wt.prototype.__iterator = function (e, t) {
                        return this._list.fromEntrySeq().__iterator(e, t);
                    }),
                    (wt.prototype.__ensureOwner = function (e) {
                        if (e === this.__ownerID) return this;
                        var t = this._map.__ensureOwner(e),
                            n = this._list.__ensureOwner(e);
                        return e ? kt(t, n, e, this.__hash) : ((this.__ownerID = e), (this._map = t), (this._list = n), this);
                    }),
                    (wt.isOrderedMap = xt),
                    (wt.prototype[h] = !0),
                    (wt.prototype.delete = wt.prototype.remove),
                    t(Ot, H),
                    (Ot.prototype.get = function (e, t) {
                        return this._iter.get(e, t);
                    }),
                    (Ot.prototype.has = function (e) {
                        return this._iter.has(e);
                    }),
                    (Ot.prototype.valueSeq = function () {
                        return this._iter.valueSeq();
                    }),
                    (Ot.prototype.reverse = function () {
                        var e = this,
                            t = Mt(this, !0);
                        return (
                            this._useKeys ||
                                (t.valueSeq = function () {
                                    return e._iter.toSeq().reverse();
                                }),
                            t
                        );
                    }),
                    (Ot.prototype.map = function (e, t) {
                        var n = this,
                            r = Rt(this, e, t);
                        return (
                            this._useKeys ||
                                (r.valueSeq = function () {
                                    return n._iter.toSeq().map(e, t);
                                }),
                            r
                        );
                    }),
                    (Ot.prototype.__iterate = function (e, t) {
                        var n,
                            r = this;
                        return this._iter.__iterate(
                            this._useKeys
                                ? function (t, n) {
                                      return e(t, n, r);
                                  }
                                : ((n = t ? Wt(this) : 0),
                                  function (i) {
                                      return e(i, t ? --n : n++, r);
                                  }),
                            t
                        );
                    }),
                    (Ot.prototype.__iterator = function (e, t) {
                        if (this._useKeys) return this._iter.__iterator(e, t);
                        var n = this._iter.__iterator(1, t),
                            r = t ? Wt(this) : 0;
                        return new j(function () {
                            var i = n.next();
                            return i.done ? i : L(e, t ? --r : r++, i.value, i);
                        });
                    }),
                    (Ot.prototype[h] = !0),
                    t(Ct, W),
                    (Ct.prototype.includes = function (e) {
                        return this._iter.includes(e);
                    }),
                    (Ct.prototype.__iterate = function (e, t) {
                        var n = this,
                            r = 0;
                        return this._iter.__iterate(function (t) {
                            return e(t, r++, n);
                        }, t);
                    }),
                    (Ct.prototype.__iterator = function (e, t) {
                        var n = this._iter.__iterator(1, t),
                            r = 0;
                        return new j(function () {
                            var t = n.next();
                            return t.done ? t : L(e, r++, t.value, t);
                        });
                    }),
                    t(Tt, G),
                    (Tt.prototype.has = function (e) {
                        return this._iter.includes(e);
                    }),
                    (Tt.prototype.__iterate = function (e, t) {
                        var n = this;
                        return this._iter.__iterate(function (t) {
                            return e(t, t, n);
                        }, t);
                    }),
                    (Tt.prototype.__iterator = function (e, t) {
                        var n = this._iter.__iterator(1, t);
                        return new j(function () {
                            var t = n.next();
                            return t.done ? t : L(e, t.value, t.value, t);
                        });
                    }),
                    t(At, H),
                    (At.prototype.entrySeq = function () {
                        return this._iter.toSeq();
                    }),
                    (At.prototype.__iterate = function (e, t) {
                        var n = this;
                        return this._iter.__iterate(function (t) {
                            if (t) {
                                Ht(t);
                                var r = a(t);
                                return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n);
                            }
                        }, t);
                    }),
                    (At.prototype.__iterator = function (e, t) {
                        var n = this._iter.__iterator(1, t);
                        return new j(function () {
                            for (;;) {
                                var t = n.next();
                                if (t.done) return t;
                                var r = t.value;
                                if (r) {
                                    Ht(r);
                                    var i = a(r);
                                    return L(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t);
                                }
                            }
                        });
                    }),
                    (Ct.prototype.cacheResult = Ot.prototype.cacheResult = Tt.prototype.cacheResult = At.prototype.cacheResult = Vt),
                    t(Qt, fe),
                    (Qt.prototype.toString = function () {
                        return this.__toString(Zt(this) + ' {', '}');
                    }),
                    (Qt.prototype.has = function (e) {
                        return this._defaultValues.hasOwnProperty(e);
                    }),
                    (Qt.prototype.get = function (e, t) {
                        if (!this.has(e)) return t;
                        var n = this._defaultValues[e];
                        return this._map ? this._map.get(e, n) : n;
                    }),
                    (Qt.prototype.clear = function () {
                        if (this.__ownerID) return this._map && this._map.clear(), this;
                        var e = this.constructor;
                        return e._empty || (e._empty = Jt(this, We()));
                    }),
                    (Qt.prototype.set = function (e, t) {
                        if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + Zt(this));
                        if (this._map && !this._map.has(e) && t === this._defaultValues[e]) return this;
                        var n = this._map && this._map.set(e, t);
                        return this.__ownerID || n === this._map ? this : Jt(this, n);
                    }),
                    (Qt.prototype.remove = function (e) {
                        if (!this.has(e)) return this;
                        var t = this._map && this._map.remove(e);
                        return this.__ownerID || t === this._map ? this : Jt(this, t);
                    }),
                    (Qt.prototype.wasAltered = function () {
                        return this._map.wasAltered();
                    }),
                    (Qt.prototype.__iterator = function (e, t) {
                        var n = this;
                        return r(this._defaultValues)
                            .map(function (e, t) {
                                return n.get(t);
                            })
                            .__iterator(e, t);
                    }),
                    (Qt.prototype.__iterate = function (e, t) {
                        var n = this;
                        return r(this._defaultValues)
                            .map(function (e, t) {
                                return n.get(t);
                            })
                            .__iterate(e, t);
                    }),
                    (Qt.prototype.__ensureOwner = function (e) {
                        if (e === this.__ownerID) return this;
                        var t = this._map && this._map.__ensureOwner(e);
                        return e ? Jt(this, t, e) : ((this.__ownerID = e), (this._map = t), this);
                    });
                var Xt = Qt.prototype;
                function Jt(e, t, n) {
                    var r = Object.create(Object.getPrototypeOf(e));
                    return (r._map = t), (r.__ownerID = n), r;
                }
                function Zt(e) {
                    return e._name || e.constructor.name || 'Record';
                }
                function en(e, t) {
                    Object.defineProperty(e, t, {
                        get: function () {
                            return this.get(t);
                        },
                        set: function (e) {
                            ue(this.__ownerID, 'Cannot set on an immutable record.'), this.set(t, e);
                        }
                    });
                }
                function tn(e) {
                    return null == e
                        ? un()
                        : nn(e) && !c(e)
                        ? e
                        : un().withMutations(function (t) {
                              var n = o(e);
                              Ae(n.size),
                                  n.forEach(function (e) {
                                      return t.add(e);
                                  });
                          });
                }
                function nn(e) {
                    return !(!e || !e[on]);
                }
                (Xt.delete = Xt.remove),
                    (Xt.deleteIn = Xt.removeIn = je.removeIn),
                    (Xt.merge = je.merge),
                    (Xt.mergeWith = je.mergeWith),
                    (Xt.mergeIn = je.mergeIn),
                    (Xt.mergeDeep = je.mergeDeep),
                    (Xt.mergeDeepWith = je.mergeDeepWith),
                    (Xt.mergeDeepIn = je.mergeDeepIn),
                    (Xt.setIn = je.setIn),
                    (Xt.update = je.update),
                    (Xt.updateIn = je.updateIn),
                    (Xt.withMutations = je.withMutations),
                    (Xt.asMutable = je.asMutable),
                    (Xt.asImmutable = je.asImmutable),
                    t(tn, he),
                    (tn.of = function () {
                        return this(arguments);
                    }),
                    (tn.fromKeys = function (e) {
                        return this(r(e).keySeq());
                    }),
                    (tn.prototype.toString = function () {
                        return this.__toString('Set {', '}');
                    }),
                    (tn.prototype.has = function (e) {
                        return this._map.has(e);
                    }),
                    (tn.prototype.add = function (e) {
                        return sn(this, this._map.set(e, !0));
                    }),
                    (tn.prototype.remove = function (e) {
                        return sn(this, this._map.remove(e));
                    }),
                    (tn.prototype.clear = function () {
                        return sn(this, this._map.clear());
                    }),
                    (tn.prototype.union = function () {
                        var t = e.call(arguments, 0);
                        return 0 ===
                            (t = t.filter(function (e) {
                                return 0 !== e.size;
                            })).length
                            ? this
                            : 0 !== this.size || this.__ownerID || 1 !== t.length
                            ? this.withMutations(function (e) {
                                  for (var n = 0; n < t.length; n++)
                                      o(t[n]).forEach(function (t) {
                                          return e.add(t);
                                      });
                              })
                            : this.constructor(t[0]);
                    }),
                    (tn.prototype.intersect = function () {
                        var t = e.call(arguments, 0);
                        if (0 === t.length) return this;
                        t = t.map(function (e) {
                            return o(e);
                        });
                        var n = this;
                        return this.withMutations(function (e) {
                            n.forEach(function (n) {
                                t.every(function (e) {
                                    return e.includes(n);
                                }) || e.remove(n);
                            });
                        });
                    }),
                    (tn.prototype.subtract = function () {
                        var t = e.call(arguments, 0);
                        if (0 === t.length) return this;
                        t = t.map(function (e) {
                            return o(e);
                        });
                        var n = this;
                        return this.withMutations(function (e) {
                            n.forEach(function (n) {
                                t.some(function (e) {
                                    return e.includes(n);
                                }) && e.remove(n);
                            });
                        });
                    }),
                    (tn.prototype.merge = function () {
                        return this.union.apply(this, arguments);
                    }),
                    (tn.prototype.mergeWith = function (t) {
                        var n = e.call(arguments, 1);
                        return this.union.apply(this, n);
                    }),
                    (tn.prototype.sort = function (e) {
                        return cn(Ft(this, e));
                    }),
                    (tn.prototype.sortBy = function (e, t) {
                        return cn(Ft(this, t, e));
                    }),
                    (tn.prototype.wasAltered = function () {
                        return this._map.wasAltered();
                    }),
                    (tn.prototype.__iterate = function (e, t) {
                        var n = this;
                        return this._map.__iterate(function (t, r) {
                            return e(r, r, n);
                        }, t);
                    }),
                    (tn.prototype.__iterator = function (e, t) {
                        return this._map
                            .map(function (e, t) {
                                return t;
                            })
                            .__iterator(e, t);
                    }),
                    (tn.prototype.__ensureOwner = function (e) {
                        if (e === this.__ownerID) return this;
                        var t = this._map.__ensureOwner(e);
                        return e ? this.__make(t, e) : ((this.__ownerID = e), (this._map = t), this);
                    }),
                    (tn.isSet = nn);
                var rn,
                    on = '@@__IMMUTABLE_SET__@@',
                    an = tn.prototype;
                function sn(e, t) {
                    return e.__ownerID ? ((e.size = t.size), (e._map = t), e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t);
                }
                function ln(e, t) {
                    var n = Object.create(an);
                    return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
                }
                function un() {
                    return rn || (rn = ln(We()));
                }
                function cn(e) {
                    return null == e
                        ? mn()
                        : dn(e)
                        ? e
                        : mn().withMutations(function (t) {
                              var n = o(e);
                              Ae(n.size),
                                  n.forEach(function (e) {
                                      return t.add(e);
                                  });
                          });
                }
                function dn(e) {
                    return nn(e) && c(e);
                }
                (an[on] = !0),
                    (an.delete = an.remove),
                    (an.mergeDeep = an.merge),
                    (an.mergeDeepWith = an.mergeWith),
                    (an.withMutations = je.withMutations),
                    (an.asMutable = je.asMutable),
                    (an.asImmutable = je.asImmutable),
                    (an.__empty = un),
                    (an.__make = ln),
                    t(cn, tn),
                    (cn.of = function () {
                        return this(arguments);
                    }),
                    (cn.fromKeys = function (e) {
                        return this(r(e).keySeq());
                    }),
                    (cn.prototype.toString = function () {
                        return this.__toString('OrderedSet {', '}');
                    }),
                    (cn.isOrderedSet = dn);
                var fn,
                    pn = cn.prototype;
                function hn(e, t) {
                    var n = Object.create(pn);
                    return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
                }
                function mn() {
                    return fn || (fn = hn(Et()));
                }
                function gn(e) {
                    return null == e ? xn() : vn(e) ? e : xn().unshiftAll(e);
                }
                function vn(e) {
                    return !(!e || !e[bn]);
                }
                (pn[h] = !0),
                    (pn.__empty = mn),
                    (pn.__make = hn),
                    t(gn, pe),
                    (gn.of = function () {
                        return this(arguments);
                    }),
                    (gn.prototype.toString = function () {
                        return this.__toString('Stack [', ']');
                    }),
                    (gn.prototype.get = function (e, t) {
                        var n = this._head;
                        for (e = k(this, e); n && e--; ) n = n.next;
                        return n ? n.value : t;
                    }),
                    (gn.prototype.peek = function () {
                        return this._head && this._head.value;
                    }),
                    (gn.prototype.push = function () {
                        if (0 === arguments.length) return this;
                        for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--) t = { value: arguments[n], next: t };
                        return this.__ownerID ? ((this.size = e), (this._head = t), (this.__hash = void 0), (this.__altered = !0), this) : wn(e, t);
                    }),
                    (gn.prototype.pushAll = function (e) {
                        if (0 === (e = i(e)).size) return this;
                        Ae(e.size);
                        var t = this.size,
                            n = this._head;
                        return (
                            e.reverse().forEach(function (e) {
                                t++, (n = { value: e, next: n });
                            }),
                            this.__ownerID ? ((this.size = t), (this._head = n), (this.__hash = void 0), (this.__altered = !0), this) : wn(t, n)
                        );
                    }),
                    (gn.prototype.pop = function () {
                        return this.slice(1);
                    }),
                    (gn.prototype.unshift = function () {
                        return this.push.apply(this, arguments);
                    }),
                    (gn.prototype.unshiftAll = function (e) {
                        return this.pushAll(e);
                    }),
                    (gn.prototype.shift = function () {
                        return this.pop.apply(this, arguments);
                    }),
                    (gn.prototype.clear = function () {
                        return 0 === this.size
                            ? this
                            : this.__ownerID
                            ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this)
                            : xn();
                    }),
                    (gn.prototype.slice = function (e, t) {
                        if (S(e, t, this.size)) return this;
                        var n = O(e, this.size);
                        if (C(t, this.size) !== this.size) return pe.prototype.slice.call(this, e, t);
                        for (var r = this.size - n, i = this._head; n--; ) i = i.next;
                        return this.__ownerID ? ((this.size = r), (this._head = i), (this.__hash = void 0), (this.__altered = !0), this) : wn(r, i);
                    }),
                    (gn.prototype.__ensureOwner = function (e) {
                        return e === this.__ownerID
                            ? this
                            : e
                            ? wn(this.size, this._head, e, this.__hash)
                            : ((this.__ownerID = e), (this.__altered = !1), this);
                    }),
                    (gn.prototype.__iterate = function (e, t) {
                        if (t) return this.reverse().__iterate(e);
                        for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this); ) r = r.next;
                        return n;
                    }),
                    (gn.prototype.__iterator = function (e, t) {
                        if (t) return this.reverse().__iterator(e);
                        var n = 0,
                            r = this._head;
                        return new j(function () {
                            if (r) {
                                var t = r.value;
                                return (r = r.next), L(e, n++, t);
                            }
                            return { value: void 0, done: !0 };
                        });
                    }),
                    (gn.isStack = vn);
                var yn,
                    bn = '@@__IMMUTABLE_STACK__@@',
                    _n = gn.prototype;
                function wn(e, t, n, r) {
                    var i = Object.create(_n);
                    return (i.size = e), (i._head = t), (i.__ownerID = n), (i.__hash = r), (i.__altered = !1), i;
                }
                function xn() {
                    return yn || (yn = wn(0));
                }
                function kn(e, t) {
                    var n = function (n) {
                        e.prototype[n] = t[n];
                    };
                    return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e;
                }
                (_n[bn] = !0),
                    (_n.withMutations = je.withMutations),
                    (_n.asMutable = je.asMutable),
                    (_n.asImmutable = je.asImmutable),
                    (_n.wasAltered = je.wasAltered),
                    (n.Iterator = j),
                    kn(n, {
                        toArray: function () {
                            Ae(this.size);
                            var e = new Array(this.size || 0);
                            return (
                                this.valueSeq().__iterate(function (t, n) {
                                    e[n] = t;
                                }),
                                e
                            );
                        },
                        toIndexedSeq: function () {
                            return new Ct(this);
                        },
                        toJS: function () {
                            return this.toSeq()
                                .map(function (e) {
                                    return e && 'function' == typeof e.toJS ? e.toJS() : e;
                                })
                                .__toJS();
                        },
                        toJSON: function () {
                            return this.toSeq()
                                .map(function (e) {
                                    return e && 'function' == typeof e.toJSON ? e.toJSON() : e;
                                })
                                .__toJS();
                        },
                        toKeyedSeq: function () {
                            return new Ot(this, !0);
                        },
                        toMap: function () {
                            return Pe(this.toKeyedSeq());
                        },
                        toObject: function () {
                            Ae(this.size);
                            var e = {};
                            return (
                                this.__iterate(function (t, n) {
                                    e[n] = t;
                                }),
                                e
                            );
                        },
                        toOrderedMap: function () {
                            return wt(this.toKeyedSeq());
                        },
                        toOrderedSet: function () {
                            return cn(s(this) ? this.valueSeq() : this);
                        },
                        toSet: function () {
                            return tn(s(this) ? this.valueSeq() : this);
                        },
                        toSetSeq: function () {
                            return new Tt(this);
                        },
                        toSeq: function () {
                            return l(this) ? this.toIndexedSeq() : s(this) ? this.toKeyedSeq() : this.toSetSeq();
                        },
                        toStack: function () {
                            return gn(s(this) ? this.valueSeq() : this);
                        },
                        toList: function () {
                            return it(s(this) ? this.valueSeq() : this);
                        },
                        toString: function () {
                            return '[Iterable]';
                        },
                        __toString: function (e, t) {
                            return 0 === this.size ? e + t : e + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + t;
                        },
                        concat: function () {
                            var t = e.call(arguments, 0);
                            return qt(this, Dt(this, t));
                        },
                        includes: function (e) {
                            return this.some(function (t) {
                                return ae(t, e);
                            });
                        },
                        entries: function () {
                            return this.__iterator(2);
                        },
                        every: function (e, t) {
                            Ae(this.size);
                            var n = !0;
                            return (
                                this.__iterate(function (r, i, o) {
                                    if (!e.call(t, r, i, o)) return (n = !1), !1;
                                }),
                                n
                            );
                        },
                        filter: function (e, t) {
                            return qt(this, It(this, e, t, !0));
                        },
                        find: function (e, t, n) {
                            var r = this.findEntry(e, t);
                            return r ? r[1] : n;
                        },
                        forEach: function (e, t) {
                            return Ae(this.size), this.__iterate(t ? e.bind(t) : e);
                        },
                        join: function (e) {
                            Ae(this.size), (e = void 0 !== e ? '' + e : ',');
                            var t = '',
                                n = !0;
                            return (
                                this.__iterate(function (r) {
                                    n ? (n = !1) : (t += e), (t += null != r ? r.toString() : '');
                                }),
                                t
                            );
                        },
                        keys: function () {
                            return this.__iterator(0);
                        },
                        map: function (e, t) {
                            return qt(this, Rt(this, e, t));
                        },
                        reduce: function (e, t, n) {
                            var r, i;
                            return (
                                Ae(this.size),
                                arguments.length < 2 ? (i = !0) : (r = t),
                                this.__iterate(function (t, o, a) {
                                    i ? ((i = !1), (r = t)) : (r = e.call(n, r, t, o, a));
                                }),
                                r
                            );
                        },
                        reduceRight: function (e, t, n) {
                            var r = this.toKeyedSeq().reverse();
                            return r.reduce.apply(r, arguments);
                        },
                        reverse: function () {
                            return qt(this, Mt(this, !0));
                        },
                        slice: function (e, t) {
                            return qt(this, jt(this, e, t, !0));
                        },
                        some: function (e, t) {
                            return !this.every(Tn(e), t);
                        },
                        sort: function (e) {
                            return qt(this, Ft(this, e));
                        },
                        values: function () {
                            return this.__iterator(1);
                        },
                        butLast: function () {
                            return this.slice(0, -1);
                        },
                        isEmpty: function () {
                            return void 0 !== this.size
                                ? 0 === this.size
                                : !this.some(function () {
                                      return !0;
                                  });
                        },
                        count: function (e, t) {
                            return x(e ? this.toSeq().filter(e, t) : this);
                        },
                        countBy: function (e, t) {
                            return (function (e, t, n) {
                                var r = Pe().asMutable();
                                return (
                                    e.__iterate(function (i, o) {
                                        r.update(t.call(n, i, o, e), 0, function (e) {
                                            return e + 1;
                                        });
                                    }),
                                    r.asImmutable()
                                );
                            })(this, e, t);
                        },
                        equals: function (e) {
                            return se(this, e);
                        },
                        entrySeq: function () {
                            var e = this;
                            if (e._cache) return new $(e._cache);
                            var t = e.toSeq().map(Cn).toIndexedSeq();
                            return (
                                (t.fromEntrySeq = function () {
                                    return e.toSeq();
                                }),
                                t
                            );
                        },
                        filterNot: function (e, t) {
                            return this.filter(Tn(e), t);
                        },
                        findEntry: function (e, t, n) {
                            var r = n;
                            return (
                                this.__iterate(function (n, i, o) {
                                    if (e.call(t, n, i, o)) return (r = [i, n]), !1;
                                }),
                                r
                            );
                        },
                        findKey: function (e, t) {
                            var n = this.findEntry(e, t);
                            return n && n[0];
                        },
                        findLast: function (e, t, n) {
                            return this.toKeyedSeq().reverse().find(e, t, n);
                        },
                        findLastEntry: function (e, t, n) {
                            return this.toKeyedSeq().reverse().findEntry(e, t, n);
                        },
                        findLastKey: function (e, t) {
                            return this.toKeyedSeq().reverse().findKey(e, t);
                        },
                        first: function () {
                            return this.find(E);
                        },
                        flatMap: function (e, t) {
                            return qt(
                                this,
                                (function (e, t, n) {
                                    var r = Gt(e);
                                    return e
                                        .toSeq()
                                        .map(function (i, o) {
                                            return r(t.call(n, i, o, e));
                                        })
                                        .flatten(!0);
                                })(this, e, t)
                            );
                        },
                        flatten: function (e) {
                            return qt(this, Nt(this, e, !0));
                        },
                        fromEntrySeq: function () {
                            return new At(this);
                        },
                        get: function (e, t) {
                            return this.find(
                                function (t, n) {
                                    return ae(n, e);
                                },
                                void 0,
                                t
                            );
                        },
                        getIn: function (e, t) {
                            for (var n, r = this, i = Yt(e); !(n = i.next()).done; ) {
                                var o = n.value;
                                if ((r = r && r.get ? r.get(o, m) : m) === m) return t;
                            }
                            return r;
                        },
                        groupBy: function (e, t) {
                            return (function (e, t, n) {
                                var r = s(e),
                                    i = (c(e) ? wt() : Pe()).asMutable();
                                e.__iterate(function (o, a) {
                                    i.update(t.call(n, o, a, e), function (e) {
                                        return (e = e || []).push(r ? [a, o] : o), e;
                                    });
                                });
                                var o = Gt(e);
                                return i.map(function (t) {
                                    return qt(e, o(t));
                                });
                            })(this, e, t);
                        },
                        has: function (e) {
                            return this.get(e, m) !== m;
                        },
                        hasIn: function (e) {
                            return this.getIn(e, m) !== m;
                        },
                        isSubset: function (e) {
                            return (
                                (e = 'function' == typeof e.includes ? e : n(e)),
                                this.every(function (t) {
                                    return e.includes(t);
                                })
                            );
                        },
                        isSuperset: function (e) {
                            return (e = 'function' == typeof e.isSubset ? e : n(e)).isSubset(this);
                        },
                        keyOf: function (e) {
                            return this.findKey(function (t) {
                                return ae(t, e);
                            });
                        },
                        keySeq: function () {
                            return this.toSeq().map(On).toIndexedSeq();
                        },
                        last: function () {
                            return this.toSeq().reverse().first();
                        },
                        lastKeyOf: function (e) {
                            return this.toKeyedSeq().reverse().keyOf(e);
                        },
                        max: function (e) {
                            return Bt(this, e);
                        },
                        maxBy: function (e, t) {
                            return Bt(this, t, e);
                        },
                        min: function (e) {
                            return Bt(this, e ? An(e) : Mn);
                        },
                        minBy: function (e, t) {
                            return Bt(this, t ? An(t) : Mn, e);
                        },
                        rest: function () {
                            return this.slice(1);
                        },
                        skip: function (e) {
                            return this.slice(Math.max(0, e));
                        },
                        skipLast: function (e) {
                            return qt(this, this.toSeq().reverse().skip(e).reverse());
                        },
                        skipWhile: function (e, t) {
                            return qt(this, Lt(this, e, t, !0));
                        },
                        skipUntil: function (e, t) {
                            return this.skipWhile(Tn(e), t);
                        },
                        sortBy: function (e, t) {
                            return qt(this, Ft(this, t, e));
                        },
                        take: function (e) {
                            return this.slice(0, Math.max(0, e));
                        },
                        takeLast: function (e) {
                            return qt(this, this.toSeq().reverse().take(e).reverse());
                        },
                        takeWhile: function (e, t) {
                            return qt(
                                this,
                                (function (e, t, n) {
                                    var r = $t(e);
                                    return (
                                        (r.__iterateUncached = function (r, i) {
                                            var o = this;
                                            if (i) return this.cacheResult().__iterate(r, i);
                                            var a = 0;
                                            return (
                                                e.__iterate(function (e, i, s) {
                                                    return t.call(n, e, i, s) && ++a && r(e, i, o);
                                                }),
                                                a
                                            );
                                        }),
                                        (r.__iteratorUncached = function (r, i) {
                                            var o = this;
                                            if (i) return this.cacheResult().__iterator(r, i);
                                            var a = e.__iterator(2, i),
                                                s = !0;
                                            return new j(function () {
                                                if (!s) return { value: void 0, done: !0 };
                                                var e = a.next();
                                                if (e.done) return e;
                                                var i = e.value,
                                                    l = i[0],
                                                    u = i[1];
                                                return t.call(n, u, l, o) ? (2 === r ? e : L(r, l, u, e)) : ((s = !1), { value: void 0, done: !0 });
                                            });
                                        }),
                                        r
                                    );
                                })(this, e, t)
                            );
                        },
                        takeUntil: function (e, t) {
                            return this.takeWhile(Tn(e), t);
                        },
                        valueSeq: function () {
                            return this.toIndexedSeq();
                        },
                        hashCode: function () {
                            return (
                                this.__hash ||
                                (this.__hash = (function (e) {
                                    if (e.size === 1 / 0) return 0;
                                    var t = c(e),
                                        n = s(e),
                                        r = t ? 1 : 0;
                                    return (function (e, t) {
                                        return (
                                            (t = me(t, 3432918353)),
                                            (t = me((t << 15) | (t >>> -15), 461845907)),
                                            (t = me((t << 13) | (t >>> -13), 5)),
                                            (t = me((t = ((t + 3864292196) | 0) ^ e) ^ (t >>> 16), 2246822507)),
                                            (t = ge((t = me(t ^ (t >>> 13), 3266489909)) ^ (t >>> 16)))
                                        );
                                    })(
                                        e.__iterate(
                                            n
                                                ? t
                                                    ? function (e, t) {
                                                          r = (31 * r + In(ve(e), ve(t))) | 0;
                                                      }
                                                    : function (e, t) {
                                                          r = (r + In(ve(e), ve(t))) | 0;
                                                      }
                                                : t
                                                ? function (e) {
                                                      r = (31 * r + ve(e)) | 0;
                                                  }
                                                : function (e) {
                                                      r = (r + ve(e)) | 0;
                                                  }
                                        ),
                                        r
                                    );
                                })(this))
                            );
                        }
                    });
                var En = n.prototype;
                (En[d] = !0),
                    (En[I] = En.values),
                    (En.__toJS = En.toArray),
                    (En.__toStringMapper = Pn),
                    (En.inspect = En.toSource =
                        function () {
                            return this.toString();
                        }),
                    (En.chain = En.flatMap),
                    (En.contains = En.includes),
                    kn(r, {
                        flip: function () {
                            return qt(this, Pt(this));
                        },
                        mapEntries: function (e, t) {
                            var n = this,
                                r = 0;
                            return qt(
                                this,
                                this.toSeq()
                                    .map(function (i, o) {
                                        return e.call(t, [o, i], r++, n);
                                    })
                                    .fromEntrySeq()
                            );
                        },
                        mapKeys: function (e, t) {
                            var n = this;
                            return qt(
                                this,
                                this.toSeq()
                                    .flip()
                                    .map(function (r, i) {
                                        return e.call(t, r, i, n);
                                    })
                                    .flip()
                            );
                        }
                    });
                var Sn = r.prototype;
                function On(e, t) {
                    return t;
                }
                function Cn(e, t) {
                    return [t, e];
                }
                function Tn(e) {
                    return function () {
                        return !e.apply(this, arguments);
                    };
                }
                function An(e) {
                    return function () {
                        return -e.apply(this, arguments);
                    };
                }
                function Pn(e) {
                    return 'string' == typeof e ? JSON.stringify(e) : String(e);
                }
                function Rn() {
                    return w(arguments);
                }
                function Mn(e, t) {
                    return e < t ? 1 : e > t ? -1 : 0;
                }
                function In(e, t) {
                    return (e ^ (t + 2654435769 + (e << 6) + (e >> 2))) | 0;
                }
                return (
                    (Sn[f] = !0),
                    (Sn[I] = En.entries),
                    (Sn.__toJS = En.toObject),
                    (Sn.__toStringMapper = function (e, t) {
                        return JSON.stringify(t) + ': ' + Pn(e);
                    }),
                    kn(i, {
                        toKeyedSeq: function () {
                            return new Ot(this, !1);
                        },
                        filter: function (e, t) {
                            return qt(this, It(this, e, t, !1));
                        },
                        findIndex: function (e, t) {
                            var n = this.findEntry(e, t);
                            return n ? n[0] : -1;
                        },
                        indexOf: function (e) {
                            var t = this.keyOf(e);
                            return void 0 === t ? -1 : t;
                        },
                        lastIndexOf: function (e) {
                            var t = this.lastKeyOf(e);
                            return void 0 === t ? -1 : t;
                        },
                        reverse: function () {
                            return qt(this, Mt(this, !1));
                        },
                        slice: function (e, t) {
                            return qt(this, jt(this, e, t, !1));
                        },
                        splice: function (e, t) {
                            var n = arguments.length;
                            if (((t = Math.max(0 | t, 0)), 0 === n || (2 === n && !t))) return this;
                            e = O(e, e < 0 ? this.count() : this.size);
                            var r = this.slice(0, e);
                            return qt(this, 1 === n ? r : r.concat(w(arguments, 2), this.slice(e + t)));
                        },
                        findLastIndex: function (e, t) {
                            var n = this.findLastEntry(e, t);
                            return n ? n[0] : -1;
                        },
                        first: function () {
                            return this.get(0);
                        },
                        flatten: function (e) {
                            return qt(this, Nt(this, e, !1));
                        },
                        get: function (e, t) {
                            return (e = k(this, e)) < 0 || this.size === 1 / 0 || (void 0 !== this.size && e > this.size)
                                ? t
                                : this.find(
                                      function (t, n) {
                                          return n === e;
                                      },
                                      void 0,
                                      t
                                  );
                        },
                        has: function (e) {
                            return (e = k(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e));
                        },
                        interpose: function (e) {
                            return qt(
                                this,
                                (function (e, t) {
                                    var n = $t(e);
                                    return (
                                        (n.size = e.size && 2 * e.size - 1),
                                        (n.__iterateUncached = function (n, r) {
                                            var i = this,
                                                o = 0;
                                            return (
                                                e.__iterate(function (e, r) {
                                                    return (!o || !1 !== n(t, o++, i)) && !1 !== n(e, o++, i);
                                                }, r),
                                                o
                                            );
                                        }),
                                        (n.__iteratorUncached = function (n, r) {
                                            var i,
                                                o = e.__iterator(1, r),
                                                a = 0;
                                            return new j(function () {
                                                return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? L(n, a++, t) : L(n, a++, i.value, i);
                                            });
                                        }),
                                        n
                                    );
                                })(this, e)
                            );
                        },
                        interleave: function () {
                            var e = [this].concat(w(arguments)),
                                t = Ut(this.toSeq(), W.of, e),
                                n = t.flatten(!0);
                            return t.size && (n.size = t.size * e.length), qt(this, n);
                        },
                        keySeq: function () {
                            return ce(0, this.size);
                        },
                        last: function () {
                            return this.get(-1);
                        },
                        skipWhile: function (e, t) {
                            return qt(this, Lt(this, e, t, !1));
                        },
                        zip: function () {
                            var e = [this].concat(w(arguments));
                            return qt(this, Ut(this, Rn, e));
                        },
                        zipWith: function (e) {
                            var t = w(arguments);
                            return (t[0] = this), qt(this, Ut(this, e, t));
                        }
                    }),
                    (i.prototype[p] = !0),
                    (i.prototype[h] = !0),
                    kn(o, {
                        get: function (e, t) {
                            return this.has(e) ? e : t;
                        },
                        includes: function (e) {
                            return this.has(e);
                        },
                        keySeq: function () {
                            return this.valueSeq();
                        }
                    }),
                    (o.prototype.has = En.includes),
                    (o.prototype.contains = o.prototype.includes),
                    kn(H, r.prototype),
                    kn(W, i.prototype),
                    kn(G, o.prototype),
                    kn(fe, r.prototype),
                    kn(pe, i.prototype),
                    kn(he, o.prototype),
                    {
                        Iterable: n,
                        Seq: q,
                        Collection: de,
                        Map: Pe,
                        OrderedMap: wt,
                        List: it,
                        Stack: gn,
                        Set: tn,
                        OrderedSet: cn,
                        Record: Qt,
                        Range: ce,
                        Repeat: le,
                        is: ae,
                        fromJS: re
                    }
                );
            })();
        },
        function (e, t, n) {
            e.exports = (function () {
                'use strict';
                var e = navigator.userAgent,
                    t = navigator.platform,
                    n = /gecko\/\d/i.test(e),
                    r = /MSIE \d/.test(e),
                    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    a = r || i || o,
                    s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
                    l = !o && /WebKit\//.test(e),
                    u = l && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\//.test(e),
                    d = /Opera\//.test(e),
                    f = /Apple Computer/.test(navigator.vendor),
                    p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    h = /PhantomJS/.test(e),
                    m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                    g = /Android/.test(e),
                    v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    y = m || /Mac/.test(t),
                    b = /\bCrOS\b/.test(e),
                    _ = /win/i.test(t),
                    w = d && e.match(/Version\/(\d*\.\d*)/);
                w && (w = Number(w[1])), w && w >= 15 && ((d = !1), (l = !0));
                var x = y && (u || (d && (null == w || w < 12.11))),
                    k = n || (a && s >= 9);
                function E(e) {
                    return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
                }
                var S,
                    O = function (e, t) {
                        var n = e.className,
                            r = E(t).exec(n);
                        if (r) {
                            var i = n.slice(r.index + r[0].length);
                            e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
                        }
                    };
                function C(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e;
                }
                function T(e, t) {
                    return C(e).appendChild(t);
                }
                function A(e, t, n, r) {
                    var i = document.createElement(e);
                    if ((n && (i.className = n), r && (i.style.cssText = r), 'string' == typeof t)) i.appendChild(document.createTextNode(t));
                    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i;
                }
                function P(e, t, n, r) {
                    var i = A(e, t, n, r);
                    return i.setAttribute('role', 'presentation'), i;
                }
                function R(e, t) {
                    if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
                    do {
                        if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
                    } while ((t = t.parentNode));
                }
                function M() {
                    var e;
                    try {
                        e = document.activeElement;
                    } catch (t) {
                        e = document.body || null;
                    }
                    for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
                    return e;
                }
                function I(e, t) {
                    var n = e.className;
                    E(t).test(n) || (e.className += (n ? ' ' : '') + t);
                }
                function j(e, t) {
                    for (var n = e.split(' '), r = 0; r < n.length; r++) n[r] && !E(n[r]).test(t) && (t += ' ' + n[r]);
                    return t;
                }
                S = document.createRange
                    ? function (e, t, n, r) {
                          var i = document.createRange();
                          return i.setEnd(r || e, n), i.setStart(e, t), i;
                      }
                    : function (e, t, n) {
                          var r = document.body.createTextRange();
                          try {
                              r.moveToElementText(e.parentNode);
                          } catch (e) {
                              return r;
                          }
                          return r.collapse(!0), r.moveEnd('character', n), r.moveStart('character', t), r;
                      };
                var L = function (e) {
                    e.select();
                };
                function D(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        return e.apply(null, t);
                    };
                }
                function N(e, t, n) {
                    for (var r in (t || (t = {}), e)) !e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
                    return t;
                }
                function F(e, t, n, r, i) {
                    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                    for (var o = r || 0, a = i || 0; ; ) {
                        var s = e.indexOf('\t', o);
                        if (s < 0 || s >= t) return a + (t - o);
                        (a += s - o), (a += n - (a % n)), (o = s + 1);
                    }
                }
                m
                    ? (L = function (e) {
                          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
                      })
                    : a &&
                      (L = function (e) {
                          try {
                              e.select();
                          } catch (e) {}
                      });
                var B = function () {
                    (this.id = null), (this.f = null), (this.time = 0), (this.handler = D(this.onTimeout, this));
                };
                function z(e, t) {
                    for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                    return -1;
                }
                (B.prototype.onTimeout = function (e) {
                    (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
                }),
                    (B.prototype.set = function (e, t) {
                        this.f = t;
                        var n = +new Date() + e;
                        (!this.id || n < this.time) && (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
                    });
                var U = {
                        toString: function () {
                            return 'CodeMirror.Pass';
                        }
                    },
                    q = { scroll: !1 },
                    H = { origin: '*mouse' },
                    W = { origin: '+move' };
                function G(e, t, n) {
                    for (var r = 0, i = 0; ; ) {
                        var o = e.indexOf('\t', r);
                        -1 == o && (o = e.length);
                        var a = o - r;
                        if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
                        if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
                    }
                }
                var $ = [''];
                function V(e) {
                    for (; $.length <= e; ) $.push(K($) + ' ');
                    return $[e];
                }
                function K(e) {
                    return e[e.length - 1];
                }
                function Y(e, t) {
                    for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
                    return n;
                }
                function Q() {}
                function X(e, t) {
                    var n;
                    return Object.create ? (n = Object.create(e)) : ((Q.prototype = e), (n = new Q())), t && N(t, n), n;
                }
                var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
                function Z(e) {
                    return /\w/.test(e) || (e > '' && (e.toUpperCase() != e.toLowerCase() || J.test(e)));
                }
                function ee(e, t) {
                    return t ? !!(t.source.indexOf('\\w') > -1 && Z(e)) || t.test(e) : Z(e);
                }
                function te(e) {
                    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0;
                }
                var ne =
                    /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
                function re(e) {
                    return e.charCodeAt(0) >= 768 && ne.test(e);
                }
                function ie(e, t, n) {
                    for (; (n < 0 ? t > 0 : t < e.length) && re(e.charAt(t)); ) t += n;
                    return t;
                }
                function oe(e, t, n) {
                    for (var r = t > n ? -1 : 1; ; ) {
                        if (t == n) return t;
                        var i = (t + n) / 2,
                            o = r < 0 ? Math.ceil(i) : Math.floor(i);
                        if (o == t) return e(o) ? t : n;
                        e(o) ? (n = o) : (t = o + r);
                    }
                }
                var ae = null;
                function se(e, t, n) {
                    var r;
                    ae = null;
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.from < t && o.to > t) return i;
                        o.to == t && (o.from != o.to && 'before' == n ? (r = i) : (ae = i)),
                            o.from == t && (o.from != o.to && 'before' != n ? (r = i) : (ae = i));
                    }
                    return null != r ? r : ae;
                }
                var le = (function () {
                    var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        t = /[stwN]/,
                        n = /[LRr]/,
                        r = /[Lb1n]/,
                        i = /[1n]/;
                    function o(e, t, n) {
                        (this.level = e), (this.from = t), (this.to = n);
                    }
                    return function (a, s) {
                        var l = 'ltr' == s ? 'L' : 'R';
                        if (0 == a.length || ('ltr' == s && !e.test(a))) return !1;
                        for (var u, c = a.length, d = [], f = 0; f < c; ++f)
                            d.push(
                                (u = a.charCodeAt(f)) <= 247
                                    ? 'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN'.charAt(
                                          u
                                      )
                                    : 1424 <= u && u <= 1524
                                    ? 'R'
                                    : 1536 <= u && u <= 1785
                                    ? 'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'.charAt(
                                          u - 1536
                                      )
                                    : 1774 <= u && u <= 2220
                                    ? 'r'
                                    : 8192 <= u && u <= 8203
                                    ? 'w'
                                    : 8204 == u
                                    ? 'b'
                                    : 'L'
                            );
                        for (var p = 0, h = l; p < c; ++p) {
                            var m = d[p];
                            'm' == m ? (d[p] = h) : (h = m);
                        }
                        for (var g = 0, v = l; g < c; ++g) {
                            var y = d[g];
                            '1' == y && 'r' == v ? (d[g] = 'n') : n.test(y) && ((v = y), 'r' == y && (d[g] = 'R'));
                        }
                        for (var b = 1, _ = d[0]; b < c - 1; ++b) {
                            var w = d[b];
                            '+' == w && '1' == _ && '1' == d[b + 1] ? (d[b] = '1') : ',' != w || _ != d[b + 1] || ('1' != _ && 'n' != _) || (d[b] = _), (_ = w);
                        }
                        for (var x = 0; x < c; ++x) {
                            var k = d[x];
                            if (',' == k) d[x] = 'N';
                            else if ('%' == k) {
                                var E = void 0;
                                for (E = x + 1; E < c && '%' == d[E]; ++E);
                                for (var S = (x && '!' == d[x - 1]) || (E < c && '1' == d[E]) ? '1' : 'N', O = x; O < E; ++O) d[O] = S;
                                x = E - 1;
                            }
                        }
                        for (var C = 0, T = l; C < c; ++C) {
                            var A = d[C];
                            'L' == T && '1' == A ? (d[C] = 'L') : n.test(A) && (T = A);
                        }
                        for (var P = 0; P < c; ++P)
                            if (t.test(d[P])) {
                                var R = void 0;
                                for (R = P + 1; R < c && t.test(d[R]); ++R);
                                for (var M = 'L' == (P ? d[P - 1] : l), I = M == ('L' == (R < c ? d[R] : l)) ? (M ? 'L' : 'R') : l, j = P; j < R; ++j) d[j] = I;
                                P = R - 1;
                            }
                        for (var L, D = [], N = 0; N < c; )
                            if (r.test(d[N])) {
                                var F = N;
                                for (++N; N < c && r.test(d[N]); ++N);
                                D.push(new o(0, F, N));
                            } else {
                                var B = N,
                                    z = D.length,
                                    U = 'rtl' == s ? 1 : 0;
                                for (++N; N < c && 'L' != d[N]; ++N);
                                for (var q = B; q < N; )
                                    if (i.test(d[q])) {
                                        B < q && (D.splice(z, 0, new o(1, B, q)), (z += U));
                                        var H = q;
                                        for (++q; q < N && i.test(d[q]); ++q);
                                        D.splice(z, 0, new o(2, H, q)), (z += U), (B = q);
                                    } else ++q;
                                B < N && D.splice(z, 0, new o(1, B, N));
                            }
                        return (
                            'ltr' == s &&
                                (1 == D[0].level && (L = a.match(/^\s+/)) && ((D[0].from = L[0].length), D.unshift(new o(0, 0, L[0].length))),
                                1 == K(D).level && (L = a.match(/\s+$/)) && ((K(D).to -= L[0].length), D.push(new o(0, c - L[0].length, c)))),
                            'rtl' == s ? D.reverse() : D
                        );
                    };
                })();
                function ue(e, t) {
                    var n = e.order;
                    return null == n && (n = e.order = le(e.text, t)), n;
                }
                var ce = [],
                    de = function (e, t, n) {
                        if (e.addEventListener) e.addEventListener(t, n, !1);
                        else if (e.attachEvent) e.attachEvent('on' + t, n);
                        else {
                            var r = e._handlers || (e._handlers = {});
                            r[t] = (r[t] || ce).concat(n);
                        }
                    };
                function fe(e, t) {
                    return (e._handlers && e._handlers[t]) || ce;
                }
                function pe(e, t, n) {
                    if (e.removeEventListener) e.removeEventListener(t, n, !1);
                    else if (e.detachEvent) e.detachEvent('on' + t, n);
                    else {
                        var r = e._handlers,
                            i = r && r[t];
                        if (i) {
                            var o = z(i, n);
                            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
                        }
                    }
                }
                function he(e, t) {
                    var n = fe(e, t);
                    if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r);
                }
                function me(e, t, n) {
                    return (
                        'string' == typeof t &&
                            (t = {
                                type: t,
                                preventDefault: function () {
                                    this.defaultPrevented = !0;
                                }
                            }),
                        he(e, n || t.type, e, t),
                        we(t) || t.codemirrorIgnore
                    );
                }
                function ge(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t)
                        for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
                            -1 == z(n, t[r]) && n.push(t[r]);
                }
                function ve(e, t) {
                    return fe(e, t).length > 0;
                }
                function ye(e) {
                    (e.prototype.on = function (e, t) {
                        de(this, e, t);
                    }),
                        (e.prototype.off = function (e, t) {
                            pe(this, e, t);
                        });
                }
                function be(e) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                }
                function _e(e) {
                    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                }
                function we(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
                }
                function xe(e) {
                    be(e), _e(e);
                }
                function ke(e) {
                    return e.target || e.srcElement;
                }
                function Ee(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
                }
                var Se,
                    Oe,
                    Ce = (function () {
                        if (a && s < 9) return !1;
                        var e = A('div');
                        return 'draggable' in e || 'dragDrop' in e;
                    })();
                function Te(e) {
                    if (null == Se) {
                        var t = A('span', '​');
                        T(e, A('span', [t, document.createTextNode('x')])),
                            0 != e.firstChild.offsetHeight && (Se = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
                    }
                    var n = Se ? A('span', '​') : A('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px');
                    return n.setAttribute('cm-text', ''), n;
                }
                function Ae(e) {
                    if (null != Oe) return Oe;
                    var t = T(e, document.createTextNode('AخA')),
                        n = S(t, 0, 1).getBoundingClientRect(),
                        r = S(t, 1, 2).getBoundingClientRect();
                    return C(e), !(!n || n.left == n.right) && (Oe = r.right - n.right < 3);
                }
                var Pe,
                    Re =
                        3 != '\n\nb'.split(/\n/).length
                            ? function (e) {
                                  for (var t = 0, n = [], r = e.length; t <= r; ) {
                                      var i = e.indexOf('\n', t);
                                      -1 == i && (i = e.length);
                                      var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                                          a = o.indexOf('\r');
                                      -1 != a ? (n.push(o.slice(0, a)), (t += a + 1)) : (n.push(o), (t = i + 1));
                                  }
                                  return n;
                              }
                            : function (e) {
                                  return e.split(/\r\n?|\n/);
                              },
                    Me = window.getSelection
                        ? function (e) {
                              try {
                                  return e.selectionStart != e.selectionEnd;
                              } catch (e) {
                                  return !1;
                              }
                          }
                        : function (e) {
                              var t;
                              try {
                                  t = e.ownerDocument.selection.createRange();
                              } catch (e) {}
                              return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints('StartToEnd', t);
                          },
                    Ie = 'oncopy' in (Pe = A('div')) || (Pe.setAttribute('oncopy', 'return;'), 'function' == typeof Pe.oncopy),
                    je = null,
                    Le = {},
                    De = {};
                function Ne(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (Le[e] = t);
                }
                function Fe(e) {
                    if ('string' == typeof e && De.hasOwnProperty(e)) e = De[e];
                    else if (e && 'string' == typeof e.name && De.hasOwnProperty(e.name)) {
                        var t = De[e.name];
                        'string' == typeof t && (t = { name: t }), ((e = X(t, e)).name = t.name);
                    } else {
                        if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Fe('application/xml');
                        if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Fe('application/json');
                    }
                    return 'string' == typeof e ? { name: e } : e || { name: 'null' };
                }
                function Be(e, t) {
                    t = Fe(t);
                    var n = Le[t.name];
                    if (!n) return Be(e, 'text/plain');
                    var r = n(e, t);
                    if (ze.hasOwnProperty(t.name)) {
                        var i = ze[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
                    }
                    if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps)) for (var a in t.modeProps) r[a] = t.modeProps[a];
                    return r;
                }
                var ze = {};
                function Ue(e, t) {
                    N(t, ze.hasOwnProperty(e) ? ze[e] : (ze[e] = {}));
                }
                function qe(e, t) {
                    if (!0 === t) return t;
                    if (e.copyState) return e.copyState(t);
                    var n = {};
                    for (var r in t) {
                        var i = t[r];
                        i instanceof Array && (i = i.concat([])), (n[r] = i);
                    }
                    return n;
                }
                function He(e, t) {
                    for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
                    return n || { mode: e, state: t };
                }
                function We(e, t, n) {
                    return !e.startState || e.startState(t, n);
                }
                var Ge = function (e, t, n) {
                    (this.pos = this.start = 0),
                        (this.string = e),
                        (this.tabSize = t || 8),
                        (this.lastColumnPos = this.lastColumnValue = 0),
                        (this.lineStart = 0),
                        (this.lineOracle = n);
                };
                function $e(e, t) {
                    if ((t -= e.first) < 0 || t >= e.size) throw new Error('There is no line ' + (t + e.first) + ' in the document.');
                    for (var n = e; !n.lines; )
                        for (var r = 0; ; ++r) {
                            var i = n.children[r],
                                o = i.chunkSize();
                            if (t < o) {
                                n = i;
                                break;
                            }
                            t -= o;
                        }
                    return n.lines[t];
                }
                function Ve(e, t, n) {
                    var r = [],
                        i = t.line;
                    return (
                        e.iter(t.line, n.line + 1, function (e) {
                            var o = e.text;
                            i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
                        }),
                        r
                    );
                }
                function Ke(e, t, n) {
                    var r = [];
                    return (
                        e.iter(t, n, function (e) {
                            r.push(e.text);
                        }),
                        r
                    );
                }
                function Ye(e, t) {
                    var n = t - e.height;
                    if (n) for (var r = e; r; r = r.parent) r.height += n;
                }
                function Qe(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent, n = z(t.lines, e), r = t.parent; r; t = r, r = r.parent)
                        for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
                    return n + t.first;
                }
                function Xe(e, t) {
                    var n = e.first;
                    e: do {
                        for (var r = 0; r < e.children.length; ++r) {
                            var i = e.children[r],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e;
                            }
                            (t -= o), (n += i.chunkSize());
                        }
                        return n;
                    } while (!e.lines);
                    for (var a = 0; a < e.lines.length; ++a) {
                        var s = e.lines[a].height;
                        if (t < s) break;
                        t -= s;
                    }
                    return n + a;
                }
                function Je(e, t) {
                    return t >= e.first && t < e.first + e.size;
                }
                function Ze(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber));
                }
                function et(e, t, n) {
                    if ((void 0 === n && (n = null), !(this instanceof et))) return new et(e, t, n);
                    (this.line = e), (this.ch = t), (this.sticky = n);
                }
                function tt(e, t) {
                    return e.line - t.line || e.ch - t.ch;
                }
                function nt(e, t) {
                    return e.sticky == t.sticky && 0 == tt(e, t);
                }
                function rt(e) {
                    return et(e.line, e.ch);
                }
                function it(e, t) {
                    return tt(e, t) < 0 ? t : e;
                }
                function ot(e, t) {
                    return tt(e, t) < 0 ? e : t;
                }
                function at(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
                }
                function st(e, t) {
                    if (t.line < e.first) return et(e.first, 0);
                    var n = e.first + e.size - 1;
                    return t.line > n
                        ? et(n, $e(e, n).text.length)
                        : (function (e, t) {
                              var n = e.ch;
                              return null == n || n > t ? et(e.line, t) : n < 0 ? et(e.line, 0) : e;
                          })(t, $e(e, t.line).text.length);
                }
                function lt(e, t) {
                    for (var n = [], r = 0; r < t.length; r++) n[r] = st(e, t[r]);
                    return n;
                }
                (Ge.prototype.eol = function () {
                    return this.pos >= this.string.length;
                }),
                    (Ge.prototype.sol = function () {
                        return this.pos == this.lineStart;
                    }),
                    (Ge.prototype.peek = function () {
                        return this.string.charAt(this.pos) || void 0;
                    }),
                    (Ge.prototype.next = function () {
                        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
                    }),
                    (Ge.prototype.eat = function (e) {
                        var t = this.string.charAt(this.pos);
                        if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
                    }),
                    (Ge.prototype.eatWhile = function (e) {
                        for (var t = this.pos; this.eat(e); );
                        return this.pos > t;
                    }),
                    (Ge.prototype.eatSpace = function () {
                        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
                        return this.pos > e;
                    }),
                    (Ge.prototype.skipToEnd = function () {
                        this.pos = this.string.length;
                    }),
                    (Ge.prototype.skipTo = function (e) {
                        var t = this.string.indexOf(e, this.pos);
                        if (t > -1) return (this.pos = t), !0;
                    }),
                    (Ge.prototype.backUp = function (e) {
                        this.pos -= e;
                    }),
                    (Ge.prototype.column = function () {
                        return (
                            this.lastColumnPos < this.start &&
                                ((this.lastColumnValue = F(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)),
                                (this.lastColumnPos = this.start)),
                            this.lastColumnValue - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0)
                        );
                    }),
                    (Ge.prototype.indentation = function () {
                        return F(this.string, null, this.tabSize) - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0);
                    }),
                    (Ge.prototype.match = function (e, t, n) {
                        if ('string' != typeof e) {
                            var r = this.string.slice(this.pos).match(e);
                            return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
                        }
                        var i = function (e) {
                            return n ? e.toLowerCase() : e;
                        };
                        if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
                    }),
                    (Ge.prototype.current = function () {
                        return this.string.slice(this.start, this.pos);
                    }),
                    (Ge.prototype.hideFirstChars = function (e, t) {
                        this.lineStart += e;
                        try {
                            return t();
                        } finally {
                            this.lineStart -= e;
                        }
                    }),
                    (Ge.prototype.lookAhead = function (e) {
                        var t = this.lineOracle;
                        return t && t.lookAhead(e);
                    }),
                    (Ge.prototype.baseToken = function () {
                        var e = this.lineOracle;
                        return e && e.baseToken(this.pos);
                    });
                var ut = function (e, t) {
                        (this.state = e), (this.lookAhead = t);
                    },
                    ct = function (e, t, n, r) {
                        (this.state = t), (this.doc = e), (this.line = n), (this.maxLookAhead = r || 0), (this.baseTokens = null), (this.baseTokenPos = 1);
                    };
                function dt(e, t, n, r) {
                    var i = [e.state.modeGen],
                        o = {};
                    _t(
                        e,
                        t.text,
                        e.doc.mode,
                        n,
                        function (e, t) {
                            return i.push(e, t);
                        },
                        o,
                        r
                    );
                    for (
                        var a = n.state,
                            s = function (r) {
                                n.baseTokens = i;
                                var s = e.state.overlays[r],
                                    l = 1,
                                    u = 0;
                                (n.state = !0),
                                    _t(
                                        e,
                                        t.text,
                                        s.mode,
                                        n,
                                        function (e, t) {
                                            for (var n = l; u < e; ) {
                                                var r = i[l];
                                                r > e && i.splice(l, 1, e, i[l + 1], r), (l += 2), (u = Math.min(e, r));
                                            }
                                            if (t)
                                                if (s.opaque) i.splice(n, l - n, e, 'overlay ' + t), (l = n + 2);
                                                else
                                                    for (; n < l; n += 2) {
                                                        var o = i[n + 1];
                                                        i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                                                    }
                                        },
                                        o
                                    ),
                                    (n.state = a),
                                    (n.baseTokens = null),
                                    (n.baseTokenPos = 1);
                            },
                            l = 0;
                        l < e.state.overlays.length;
                        ++l
                    )
                        s(l);
                    return { styles: i, classes: o.bgClass || o.textClass ? o : null };
                }
                function ft(e, t, n) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var r = pt(e, Qe(t)),
                            i = t.text.length > e.options.maxHighlightLength && qe(e.doc.mode, r.state),
                            o = dt(e, t, r);
                        i && (r.state = i),
                            (t.stateAfter = r.save(!i)),
                            (t.styles = o.styles),
                            o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
                            n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
                    }
                    return t.styles;
                }
                function pt(e, t, n) {
                    var r = e.doc,
                        i = e.display;
                    if (!r.mode.startState) return new ct(r, !0, t);
                    var o = (function (e, t, n) {
                            for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
                                if (s <= o.first) return o.first;
                                var l = $e(o, s - 1),
                                    u = l.stateAfter;
                                if (u && (!n || s + (u instanceof ut ? u.lookAhead : 0) <= o.modeFrontier)) return s;
                                var c = F(l.text, null, e.options.tabSize);
                                (null == i || r > c) && ((i = s - 1), (r = c));
                            }
                            return i;
                        })(e, t, n),
                        a = o > r.first && $e(r, o - 1).stateAfter,
                        s = a ? ct.fromSaved(r, a, o) : new ct(r, We(r.mode), o);
                    return (
                        r.iter(o, t, function (n) {
                            ht(e, n.text, s);
                            var r = s.line;
                            (n.stateAfter = r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? s.save() : null), s.nextLine();
                        }),
                        n && (r.modeFrontier = s.line),
                        s
                    );
                }
                function ht(e, t, n, r) {
                    var i = e.doc.mode,
                        o = new Ge(t, e.options.tabSize, n);
                    for (o.start = o.pos = r || 0, '' == t && mt(i, n.state); !o.eol(); ) gt(i, o, n.state), (o.start = o.pos);
                }
                function mt(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var n = He(e, t);
                        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
                    }
                }
                function gt(e, t, n, r) {
                    for (var i = 0; i < 10; i++) {
                        r && (r[0] = He(e, n).mode);
                        var o = e.token(t, n);
                        if (t.pos > t.start) return o;
                    }
                    throw new Error('Mode ' + e.name + ' failed to advance stream.');
                }
                (ct.prototype.lookAhead = function (e) {
                    var t = this.doc.getLine(this.line + e);
                    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
                }),
                    (ct.prototype.baseToken = function (e) {
                        if (!this.baseTokens) return null;
                        for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
                        var t = this.baseTokens[this.baseTokenPos + 1];
                        return {
                            type: t && t.replace(/( |^)overlay .*/, ''),
                            size: this.baseTokens[this.baseTokenPos] - e
                        };
                    }),
                    (ct.prototype.nextLine = function () {
                        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
                    }),
                    (ct.fromSaved = function (e, t, n) {
                        return t instanceof ut ? new ct(e, qe(e.mode, t.state), n, t.lookAhead) : new ct(e, qe(e.mode, t), n);
                    }),
                    (ct.prototype.save = function (e) {
                        var t = !1 !== e ? qe(this.doc.mode, this.state) : this.state;
                        return this.maxLookAhead > 0 ? new ut(t, this.maxLookAhead) : t;
                    });
                var vt = function (e, t, n) {
                    (this.start = e.start), (this.end = e.pos), (this.string = e.current()), (this.type = t || null), (this.state = n);
                };
                function yt(e, t, n, r) {
                    var i,
                        o,
                        a = e.doc,
                        s = a.mode,
                        l = $e(a, (t = st(a, t)).line),
                        u = pt(e, t.line, n),
                        c = new Ge(l.text, e.options.tabSize, u);
                    for (r && (o = []); (r || c.pos < t.ch) && !c.eol(); )
                        (c.start = c.pos), (i = gt(s, c, u.state)), r && o.push(new vt(c, i, qe(a.mode, u.state)));
                    return r ? o : new vt(c, i, u.state);
                }
                function bt(e, t) {
                    if (e)
                        for (;;) {
                            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!n) break;
                            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                            var r = n[1] ? 'bgClass' : 'textClass';
                            null == t[r] ? (t[r] = n[2]) : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) || (t[r] += ' ' + n[2]);
                        }
                    return e;
                }
                function _t(e, t, n, r, i, o, a) {
                    var s = n.flattenSpans;
                    null == s && (s = e.options.flattenSpans);
                    var l,
                        u = 0,
                        c = null,
                        d = new Ge(t, e.options.tabSize, r),
                        f = e.options.addModeClass && [null];
                    for ('' == t && bt(mt(n, r.state), o); !d.eol(); ) {
                        if (
                            (d.pos > e.options.maxHighlightLength
                                ? ((s = !1), a && ht(e, t, r, d.pos), (d.pos = t.length), (l = null))
                                : (l = bt(gt(n, d, r.state, f), o)),
                            f)
                        ) {
                            var p = f[0].name;
                            p && (l = 'm-' + (l ? p + ' ' + l : p));
                        }
                        if (!s || c != l) {
                            for (; u < d.start; ) i((u = Math.min(d.start, u + 5e3)), c);
                            c = l;
                        }
                        d.start = d.pos;
                    }
                    for (; u < d.pos; ) {
                        var h = Math.min(d.pos, u + 5e3);
                        i(h, c), (u = h);
                    }
                }
                var wt = !1,
                    xt = !1;
                function kt(e, t, n) {
                    (this.marker = e), (this.from = t), (this.to = n);
                }
                function Et(e, t) {
                    if (e)
                        for (var n = 0; n < e.length; ++n) {
                            var r = e[n];
                            if (r.marker == t) return r;
                        }
                }
                function St(e, t) {
                    for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
                    return n;
                }
                function Ot(e, t) {
                    if (t.full) return null;
                    var n = Je(e, t.from.line) && $e(e, t.from.line).markedSpans,
                        r = Je(e, t.to.line) && $e(e, t.to.line).markedSpans;
                    if (!n && !r) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        a = 0 == tt(t.from, t.to),
                        s = (function (e, t, n) {
                            var r;
                            if (e)
                                for (var i = 0; i < e.length; ++i) {
                                    var o = e[i],
                                        a = o.marker;
                                    if (
                                        null == o.from ||
                                        (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                                        (o.from == t && 'bookmark' == a.type && (!n || !o.marker.insertLeft))
                                    ) {
                                        var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                                        (r || (r = [])).push(new kt(a, o.from, s ? null : o.to));
                                    }
                                }
                            return r;
                        })(n, i, a),
                        l = (function (e, t, n) {
                            var r;
                            if (e)
                                for (var i = 0; i < e.length; ++i) {
                                    var o = e[i],
                                        a = o.marker;
                                    if (
                                        null == o.to ||
                                        (a.inclusiveRight ? o.to >= t : o.to > t) ||
                                        (o.from == t && 'bookmark' == a.type && (!n || o.marker.insertLeft))
                                    ) {
                                        var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                                        (r || (r = [])).push(new kt(a, s ? null : o.from - t, null == o.to ? null : o.to - t));
                                    }
                                }
                            return r;
                        })(r, o, a),
                        u = 1 == t.text.length,
                        c = K(t.text).length + (u ? i : 0);
                    if (s)
                        for (var d = 0; d < s.length; ++d) {
                            var f = s[d];
                            if (null == f.to) {
                                var p = Et(l, f.marker);
                                p ? u && (f.to = null == p.to ? null : p.to + c) : (f.to = i);
                            }
                        }
                    if (l)
                        for (var h = 0; h < l.length; ++h) {
                            var m = l[h];
                            null != m.to && (m.to += c),
                                null == m.from
                                    ? Et(s, m.marker) || ((m.from = c), u && (s || (s = [])).push(m))
                                    : ((m.from += c), u && (s || (s = [])).push(m));
                        }
                    s && (s = Ct(s)), l && l != s && (l = Ct(l));
                    var g = [s];
                    if (!u) {
                        var v,
                            y = t.text.length - 2;
                        if (y > 0 && s) for (var b = 0; b < s.length; ++b) null == s[b].to && (v || (v = [])).push(new kt(s[b].marker, null, null));
                        for (var _ = 0; _ < y; ++_) g.push(v);
                        g.push(l);
                    }
                    return g;
                }
                function Ct(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
                    }
                    return e.length ? e : null;
                }
                function Tt(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                        e.markedSpans = null;
                    }
                }
                function At(e, t) {
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                        e.markedSpans = t;
                    }
                }
                function Pt(e) {
                    return e.inclusiveLeft ? -1 : 0;
                }
                function Rt(e) {
                    return e.inclusiveRight ? 1 : 0;
                }
                function Mt(e, t) {
                    var n = e.lines.length - t.lines.length;
                    if (0 != n) return n;
                    var r = e.find(),
                        i = t.find(),
                        o = tt(r.from, i.from) || Pt(e) - Pt(t);
                    if (o) return -o;
                    var a = tt(r.to, i.to) || Rt(e) - Rt(t);
                    return a || t.id - e.id;
                }
                function It(e, t) {
                    var n,
                        r = xt && e.markedSpans;
                    if (r)
                        for (var i = void 0, o = 0; o < r.length; ++o)
                            (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Mt(n, i.marker) < 0) && (n = i.marker);
                    return n;
                }
                function jt(e) {
                    return It(e, !0);
                }
                function Lt(e) {
                    return It(e, !1);
                }
                function Dt(e, t) {
                    var n,
                        r = xt && e.markedSpans;
                    if (r)
                        for (var i = 0; i < r.length; ++i) {
                            var o = r[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Mt(n, o.marker) < 0) && (n = o.marker);
                        }
                    return n;
                }
                function Nt(e, t, n, r, i) {
                    var o = $e(e, t),
                        a = xt && o.markedSpans;
                    if (a)
                        for (var s = 0; s < a.length; ++s) {
                            var l = a[s];
                            if (l.marker.collapsed) {
                                var u = l.marker.find(0),
                                    c = tt(u.from, n) || Pt(l.marker) - Pt(i),
                                    d = tt(u.to, r) || Rt(l.marker) - Rt(i);
                                if (
                                    !((c >= 0 && d <= 0) || (c <= 0 && d >= 0)) &&
                                    ((c <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? tt(u.to, n) >= 0 : tt(u.to, n) > 0)) ||
                                        (c >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? tt(u.from, r) <= 0 : tt(u.from, r) < 0)))
                                )
                                    return !0;
                            }
                        }
                }
                function Ft(e) {
                    for (var t; (t = jt(e)); ) e = t.find(-1, !0).line;
                    return e;
                }
                function Bt(e, t) {
                    var n = $e(e, t),
                        r = Ft(n);
                    return n == r ? t : Qe(r);
                }
                function zt(e, t) {
                    if (t > e.lastLine()) return t;
                    var n,
                        r = $e(e, t);
                    if (!Ut(e, r)) return t;
                    for (; (n = Lt(r)); ) r = n.find(1, !0).line;
                    return Qe(r) + 1;
                }
                function Ut(e, t) {
                    var n = xt && t.markedSpans;
                    if (n)
                        for (var r = void 0, i = 0; i < n.length; ++i)
                            if ((r = n[i]).marker.collapsed) {
                                if (null == r.from) return !0;
                                if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && qt(e, t, r)) return !0;
                            }
                }
                function qt(e, t, n) {
                    if (null == n.to) {
                        var r = n.marker.find(1, !0);
                        return qt(e, r.line, Et(r.line.markedSpans, n.marker));
                    }
                    if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                        if (
                            (i = t.markedSpans[o]).marker.collapsed &&
                            !i.marker.widgetNode &&
                            i.from == n.to &&
                            (null == i.to || i.to != n.from) &&
                            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
                            qt(e, t, i)
                        )
                            return !0;
                }
                function Ht(e) {
                    for (var t = 0, n = (e = Ft(e)).parent, r = 0; r < n.lines.length; ++r) {
                        var i = n.lines[r];
                        if (i == e) break;
                        t += i.height;
                    }
                    for (var o = n.parent; o; o = (n = o).parent)
                        for (var a = 0; a < o.children.length; ++a) {
                            var s = o.children[a];
                            if (s == n) break;
                            t += s.height;
                        }
                    return t;
                }
                function Wt(e) {
                    if (0 == e.height) return 0;
                    for (var t, n = e.text.length, r = e; (t = jt(r)); ) {
                        var i = t.find(0, !0);
                        (r = i.from.line), (n += i.from.ch - i.to.ch);
                    }
                    for (r = e; (t = Lt(r)); ) {
                        var o = t.find(0, !0);
                        (n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
                    }
                    return n;
                }
                function Gt(e) {
                    var t = e.display,
                        n = e.doc;
                    (t.maxLine = $e(n, n.first)),
                        (t.maxLineLength = Wt(t.maxLine)),
                        (t.maxLineChanged = !0),
                        n.iter(function (e) {
                            var n = Wt(e);
                            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
                        });
                }
                var $t = function (e, t, n) {
                    (this.text = e), At(this, t), (this.height = n ? n(this) : 1);
                };
                function Vt(e) {
                    (e.parent = null), Tt(e);
                }
                ($t.prototype.lineNo = function () {
                    return Qe(this);
                }),
                    ye($t);
                var Kt = {},
                    Yt = {};
                function Qt(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var n = t.addModeClass ? Yt : Kt;
                    return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
                }
                function Xt(e, t) {
                    var n = P('span', null, null, l ? 'padding-right: .1px' : null),
                        r = {
                            pre: P('pre', [n], 'CodeMirror-line'),
                            content: n,
                            col: 0,
                            pos: 0,
                            cm: e,
                            trailingSpace: !1,
                            splitSpaces: e.getOption('lineWrapping')
                        };
                    t.measure = {};
                    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                        var o = i ? t.rest[i - 1] : t.line,
                            a = void 0;
                        (r.pos = 0),
                            (r.addToken = Zt),
                            Ae(e.display.measure) && (a = ue(o, e.doc.direction)) && (r.addToken = en(r.addToken, a)),
                            (r.map = []),
                            nn(o, r, ft(e, o, t != e.display.externalMeasured && Qe(o))),
                            o.styleClasses &&
                                (o.styleClasses.bgClass && (r.bgClass = j(o.styleClasses.bgClass, r.bgClass || '')),
                                o.styleClasses.textClass && (r.textClass = j(o.styleClasses.textClass, r.textClass || ''))),
                            0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Te(e.display.measure))),
                            0 == i
                                ? ((t.measure.map = r.map), (t.measure.cache = {}))
                                : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
                    }
                    if (l) {
                        var s = r.content.lastChild;
                        (/\bcm-tab\b/.test(s.className) || (s.querySelector && s.querySelector('.cm-tab'))) && (r.content.className = 'cm-tab-wrap-hack');
                    }
                    return he(e, 'renderLine', e, t.line, r.pre), r.pre.className && (r.textClass = j(r.pre.className, r.textClass || '')), r;
                }
                function Jt(e) {
                    var t = A('span', '•', 'cm-invalidchar');
                    return (t.title = '\\u' + e.charCodeAt(0).toString(16)), t.setAttribute('aria-label', t.title), t;
                }
                function Zt(e, t, n, r, i, o, l) {
                    if (t) {
                        var u,
                            c = e.splitSpaces
                                ? (function (e, t) {
                                      if (e.length > 1 && !/  /.test(e)) return e;
                                      for (var n = t, r = '', i = 0; i < e.length; i++) {
                                          var o = e.charAt(i);
                                          ' ' != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = ' '), (r += o), (n = ' ' == o);
                                      }
                                      return r;
                                  })(t, e.trailingSpace)
                                : t,
                            d = e.cm.state.specialChars,
                            f = !1;
                        if (d.test(t)) {
                            u = document.createDocumentFragment();
                            for (var p = 0; ; ) {
                                d.lastIndex = p;
                                var h = d.exec(t),
                                    m = h ? h.index - p : t.length - p;
                                if (m) {
                                    var g = document.createTextNode(c.slice(p, p + m));
                                    a && s < 9 ? u.appendChild(A('span', [g])) : u.appendChild(g), e.map.push(e.pos, e.pos + m, g), (e.col += m), (e.pos += m);
                                }
                                if (!h) break;
                                p += m + 1;
                                var v = void 0;
                                if ('\t' == h[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - (e.col % y);
                                    (v = u.appendChild(A('span', V(b), 'cm-tab'))).setAttribute('role', 'presentation'),
                                        v.setAttribute('cm-text', '\t'),
                                        (e.col += b);
                                } else
                                    '\r' == h[0] || '\n' == h[0]
                                        ? ((v = u.appendChild(A('span', '\r' == h[0] ? '␍' : '␤', 'cm-invalidchar'))).setAttribute('cm-text', h[0]),
                                          (e.col += 1))
                                        : ((v = e.cm.options.specialCharPlaceholder(h[0])).setAttribute('cm-text', h[0]),
                                          a && s < 9 ? u.appendChild(A('span', [v])) : u.appendChild(v),
                                          (e.col += 1));
                                e.map.push(e.pos, e.pos + 1, v), e.pos++;
                            }
                        } else
                            (e.col += t.length),
                                (u = document.createTextNode(c)),
                                e.map.push(e.pos, e.pos + t.length, u),
                                a && s < 9 && (f = !0),
                                (e.pos += t.length);
                        if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), n || r || i || f || o || l)) {
                            var _ = n || '';
                            r && (_ += r), i && (_ += i);
                            var w = A('span', [u], _, o);
                            if (l) for (var x in l) l.hasOwnProperty(x) && 'style' != x && 'class' != x && w.setAttribute(x, l[x]);
                            return e.content.appendChild(w);
                        }
                        e.content.appendChild(u);
                    }
                }
                function en(e, t) {
                    return function (n, r, i, o, a, s, l) {
                        i = i ? i + ' cm-force-border' : 'cm-force-border';
                        for (var u = n.pos, c = u + r.length; ; ) {
                            for (var d = void 0, f = 0; f < t.length && !((d = t[f]).to > u && d.from <= u); f++);
                            if (d.to >= c) return e(n, r, i, o, a, s, l);
                            e(n, r.slice(0, d.to - u), i, o, null, s, l), (o = null), (r = r.slice(d.to - u)), (u = d.to);
                        }
                    };
                }
                function tn(e, t, n, r) {
                    var i = !r && n.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i),
                        !r &&
                            e.cm.display.input.needsContentAttribute &&
                            (i || (i = e.content.appendChild(document.createElement('span'))), i.setAttribute('cm-marker', n.id)),
                        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                        (e.pos += t),
                        (e.trailingSpace = !1);
                }
                function nn(e, t, n) {
                    var r = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (r)
                        for (var a, s, l, u, c, d, f, p = i.length, h = 0, m = 1, g = '', v = 0; ; ) {
                            if (v == h) {
                                (l = u = c = s = ''), (f = null), (d = null), (v = 1 / 0);
                                for (var y = [], b = void 0, _ = 0; _ < r.length; ++_) {
                                    var w = r[_],
                                        x = w.marker;
                                    if ('bookmark' == x.type && w.from == h && x.widgetNode) y.push(x);
                                    else if (w.from <= h && (null == w.to || w.to > h || (x.collapsed && w.to == h && w.from == h))) {
                                        if (
                                            (null != w.to && w.to != h && v > w.to && ((v = w.to), (u = '')),
                                            x.className && (l += ' ' + x.className),
                                            x.css && (s = (s ? s + ';' : '') + x.css),
                                            x.startStyle && w.from == h && (c += ' ' + x.startStyle),
                                            x.endStyle && w.to == v && (b || (b = [])).push(x.endStyle, w.to),
                                            x.title && ((f || (f = {})).title = x.title),
                                            x.attributes)
                                        )
                                            for (var k in x.attributes) (f || (f = {}))[k] = x.attributes[k];
                                        x.collapsed && (!d || Mt(d.marker, x) < 0) && (d = w);
                                    } else w.from > h && v > w.from && (v = w.from);
                                }
                                if (b) for (var E = 0; E < b.length; E += 2) b[E + 1] == v && (u += ' ' + b[E]);
                                if (!d || d.from == h) for (var S = 0; S < y.length; ++S) tn(t, 0, y[S]);
                                if (d && (d.from || 0) == h) {
                                    if ((tn(t, (null == d.to ? p + 1 : d.to) - h, d.marker, null == d.from), null == d.to)) return;
                                    d.to == h && (d = !1);
                                }
                            }
                            if (h >= p) break;
                            for (var O = Math.min(p, v); ; ) {
                                if (g) {
                                    var C = h + g.length;
                                    if (!d) {
                                        var T = C > O ? g.slice(0, O - h) : g;
                                        t.addToken(t, T, a ? a + l : l, c, h + T.length == v ? u : '', s, f);
                                    }
                                    if (C >= O) {
                                        (g = g.slice(O - h)), (h = O);
                                        break;
                                    }
                                    (h = C), (c = '');
                                }
                                (g = i.slice(o, (o = n[m++]))), (a = Qt(n[m++], t.cm.options));
                            }
                        }
                    else for (var A = 1; A < n.length; A += 2) t.addToken(t, i.slice(o, (o = n[A])), Qt(n[A + 1], t.cm.options));
                }
                function rn(e, t, n) {
                    (this.line = t),
                        (this.rest = (function (e) {
                            for (var t, n; (t = Lt(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
                            return n;
                        })(t)),
                        (this.size = this.rest ? Qe(K(this.rest)) - n + 1 : 1),
                        (this.node = this.text = null),
                        (this.hidden = Ut(e, t));
                }
                function on(e, t, n) {
                    for (var r, i = [], o = t; o < n; o = r) {
                        var a = new rn(e.doc, $e(e.doc, o), o);
                        (r = o + a.size), i.push(a);
                    }
                    return i;
                }
                var an = null,
                    sn = null;
                function ln(e, t) {
                    var n = fe(e, t);
                    if (n.length) {
                        var r,
                            i = Array.prototype.slice.call(arguments, 2);
                        an ? (r = an.delayedCallbacks) : sn ? (r = sn) : ((r = sn = []), setTimeout(un, 0));
                        for (
                            var o = function (e) {
                                    r.push(function () {
                                        return n[e].apply(null, i);
                                    });
                                },
                                a = 0;
                            a < n.length;
                            ++a
                        )
                            o(a);
                    }
                }
                function un() {
                    var e = sn;
                    sn = null;
                    for (var t = 0; t < e.length; ++t) e[t]();
                }
                function cn(e, t, n, r) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        'text' == o ? pn(e, t) : 'gutter' == o ? mn(e, t, n, r) : 'class' == o ? hn(e, t) : 'widget' == o && gn(e, t, r);
                    }
                    t.changes = null;
                }
                function dn(e) {
                    return (
                        e.node == e.text &&
                            ((e.node = A('div', null, null, 'position: relative')),
                            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                            e.node.appendChild(e.text),
                            a && s < 8 && (e.node.style.zIndex = 2)),
                        e.node
                    );
                }
                function fn(e, t) {
                    var n = e.display.externalMeasured;
                    return n && n.line == t.line ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built) : Xt(e, t);
                }
                function pn(e, t) {
                    var n = t.text.className,
                        r = fn(e, t);
                    t.text == t.node && (t.node = r.pre),
                        t.text.parentNode.replaceChild(r.pre, t.text),
                        (t.text = r.pre),
                        r.bgClass != t.bgClass || r.textClass != t.textClass
                            ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), hn(e, t))
                            : n && (t.text.className = n);
                }
                function hn(e, t) {
                    !(function (e, t) {
                        var n = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
                        if ((n && (n += ' CodeMirror-linebackground'), t.background))
                            n ? (t.background.className = n) : (t.background.parentNode.removeChild(t.background), (t.background = null));
                        else if (n) {
                            var r = dn(t);
                            (t.background = r.insertBefore(A('div', null, n), r.firstChild)), e.display.input.setUneditable(t.background);
                        }
                    })(e, t),
                        t.line.wrapClass ? (dn(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = '');
                    var n = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass;
                    t.text.className = n || '';
                }
                function mn(e, t, n, r) {
                    if (
                        (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
                        t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
                        t.line.gutterClass)
                    ) {
                        var i = dn(t);
                        (t.gutterBackground = A(
                            'div',
                            null,
                            'CodeMirror-gutter-background ' + t.line.gutterClass,
                            'left: ' + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + 'px; width: ' + r.gutterTotalWidth + 'px'
                        )),
                            e.display.input.setUneditable(t.gutterBackground),
                            i.insertBefore(t.gutterBackground, t.text);
                    }
                    var o = t.line.gutterMarkers;
                    if (e.options.lineNumbers || o) {
                        var a = dn(t),
                            s = (t.gutter = A(
                                'div',
                                null,
                                'CodeMirror-gutter-wrapper',
                                'left: ' + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + 'px'
                            ));
                        if (
                            (e.display.input.setUneditable(s),
                            a.insertBefore(s, t.text),
                            t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
                            !e.options.lineNumbers ||
                                (o && o['CodeMirror-linenumbers']) ||
                                (t.lineNumber = s.appendChild(
                                    A(
                                        'div',
                                        Ze(e.options, n),
                                        'CodeMirror-linenumber CodeMirror-gutter-elt',
                                        'left: ' + r.gutterLeft['CodeMirror-linenumbers'] + 'px; width: ' + e.display.lineNumInnerWidth + 'px'
                                    )
                                )),
                            o)
                        )
                            for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                                var u = e.display.gutterSpecs[l].className,
                                    c = o.hasOwnProperty(u) && o[u];
                                c &&
                                    s.appendChild(A('div', [c], 'CodeMirror-gutter-elt', 'left: ' + r.gutterLeft[u] + 'px; width: ' + r.gutterWidth[u] + 'px'));
                            }
                    }
                }
                function gn(e, t, n) {
                    t.alignable && (t.alignable = null);
                    for (var r = E('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0; i; i = o)
                        (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
                    yn(e, t, n);
                }
                function vn(e, t, n, r) {
                    var i = fn(e, t);
                    return (
                        (t.text = t.node = i.pre),
                        i.bgClass && (t.bgClass = i.bgClass),
                        i.textClass && (t.textClass = i.textClass),
                        hn(e, t),
                        mn(e, t, n, r),
                        yn(e, t, r),
                        t.node
                    );
                }
                function yn(e, t, n) {
                    if ((bn(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) bn(e, t.rest[r], t, n, !1);
                }
                function bn(e, t, n, r, i) {
                    if (t.widgets)
                        for (var o = dn(n), a = 0, s = t.widgets; a < s.length; ++a) {
                            var l = s[a],
                                u = A('div', [l.node], 'CodeMirror-linewidget' + (l.className ? ' ' + l.className : ''));
                            l.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
                                _n(l, u, n, r),
                                e.display.input.setUneditable(u),
                                i && l.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u),
                                ln(l, 'redraw');
                        }
                }
                function _n(e, t, n, r) {
                    if (e.noHScroll) {
                        (n.alignable || (n.alignable = [])).push(t);
                        var i = r.wrapperWidth;
                        (t.style.left = r.fixedPos + 'px'),
                            e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
                            (t.style.width = i + 'px');
                    }
                    e.coverGutter && ((t.style.zIndex = 5), (t.style.position = 'relative'), e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
                }
                function wn(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!R(document.body, e.node)) {
                        var n = 'position: relative;';
                        e.coverGutter && (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
                            e.noHScroll && (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
                            T(t.display.measure, A('div', [e.node], null, n));
                    }
                    return (e.height = e.node.parentNode.offsetHeight);
                }
                function xn(e, t) {
                    for (var n = ke(t); n != e.wrapper; n = n.parentNode)
                        if (!n || (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) || (n.parentNode == e.sizer && n != e.mover)) return !0;
                }
                function kn(e) {
                    return e.lineSpace.offsetTop;
                }
                function En(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
                }
                function Sn(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = T(e.measure, A('pre', 'x', 'CodeMirror-line-like')),
                        n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        r = {
                            left: parseInt(n.paddingLeft),
                            right: parseInt(n.paddingRight)
                        };
                    return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
                }
                function On(e) {
                    return 50 - e.display.nativeBarWidth;
                }
                function Cn(e) {
                    return e.display.scroller.clientWidth - On(e) - e.display.barWidth;
                }
                function Tn(e) {
                    return e.display.scroller.clientHeight - On(e) - e.display.barHeight;
                }
                function An(e, t, n) {
                    if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
                    for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
                    for (var i = 0; i < e.rest.length; i++)
                        if (Qe(e.rest[i]) > n)
                            return {
                                map: e.measure.maps[i],
                                cache: e.measure.caches[i],
                                before: !0
                            };
                }
                function Pn(e, t, n, r) {
                    return In(e, Mn(e, t), n, r);
                }
                function Rn(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[cr(e, t)];
                    var n = e.display.externalMeasured;
                    return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
                }
                function Mn(e, t) {
                    var n = Qe(t),
                        r = Rn(e, n);
                    r && !r.text ? (r = null) : r && r.changes && (cn(e, r, n, or(e)), (e.curOp.forceUpdate = !0)),
                        r ||
                            (r = (function (e, t) {
                                var n = Qe((t = Ft(t))),
                                    r = (e.display.externalMeasured = new rn(e.doc, t, n));
                                r.lineN = n;
                                var i = (r.built = Xt(e, r));
                                return (r.text = i.pre), T(e.display.lineMeasure, i.pre), r;
                            })(e, t));
                    var i = An(r, t, n);
                    return {
                        line: t,
                        view: r,
                        rect: null,
                        map: i.map,
                        cache: i.cache,
                        before: i.before,
                        hasHeights: !1
                    };
                }
                function In(e, t, n, r, i) {
                    t.before && (n = -1);
                    var o,
                        l = n + (r || '');
                    return (
                        t.cache.hasOwnProperty(l)
                            ? (o = t.cache[l])
                            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                              t.hasHeights ||
                                  ((function (e, t, n) {
                                      var r = e.options.lineWrapping,
                                          i = r && Cn(e);
                                      if (!t.measure.heights || (r && t.measure.width != i)) {
                                          var o = (t.measure.heights = []);
                                          if (r) {
                                              t.measure.width = i;
                                              for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                                                  var l = a[s],
                                                      u = a[s + 1];
                                                  Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top);
                                              }
                                          }
                                          o.push(n.bottom - n.top);
                                      }
                                  })(e, t.view, t.rect),
                                  (t.hasHeights = !0)),
                              (o = (function (e, t, n, r) {
                                  var i,
                                      o = Dn(t.map, n, r),
                                      l = o.node,
                                      u = o.start,
                                      c = o.end,
                                      d = o.collapse;
                                  if (3 == l.nodeType) {
                                      for (var f = 0; f < 4; f++) {
                                          for (; u && re(t.line.text.charAt(o.coverStart + u)); ) --u;
                                          for (; o.coverStart + c < o.coverEnd && re(t.line.text.charAt(o.coverStart + c)); ) ++c;
                                          if (
                                              (i =
                                                  a && s < 9 && 0 == u && c == o.coverEnd - o.coverStart
                                                      ? l.parentNode.getBoundingClientRect()
                                                      : Nn(S(l, u, c).getClientRects(), r)).left ||
                                              i.right ||
                                              0 == u
                                          )
                                              break;
                                          (c = u), (u -= 1), (d = 'right');
                                      }
                                      a &&
                                          s < 11 &&
                                          (i = (function (e, t) {
                                              if (
                                                  !window.screen ||
                                                  null == screen.logicalXDPI ||
                                                  screen.logicalXDPI == screen.deviceXDPI ||
                                                  !(function (e) {
                                                      if (null != je) return je;
                                                      var t = T(e, A('span', 'x')),
                                                          n = t.getBoundingClientRect(),
                                                          r = S(t, 0, 1).getBoundingClientRect();
                                                      return (je = Math.abs(n.left - r.left) > 1);
                                                  })(e)
                                              )
                                                  return t;
                                              var n = screen.logicalXDPI / screen.deviceXDPI,
                                                  r = screen.logicalYDPI / screen.deviceYDPI;
                                              return {
                                                  left: t.left * n,
                                                  right: t.right * n,
                                                  top: t.top * r,
                                                  bottom: t.bottom * r
                                              };
                                          })(e.display.measure, i));
                                  } else {
                                      var p;
                                      u > 0 && (d = r = 'right'),
                                          (i =
                                              e.options.lineWrapping && (p = l.getClientRects()).length > 1
                                                  ? p['right' == r ? p.length - 1 : 0]
                                                  : l.getBoundingClientRect());
                                  }
                                  if (a && s < 9 && !u && (!i || (!i.left && !i.right))) {
                                      var h = l.parentNode.getClientRects()[0];
                                      i = h
                                          ? {
                                                left: h.left,
                                                right: h.left + ir(e.display),
                                                top: h.top,
                                                bottom: h.bottom
                                            }
                                          : Ln;
                                  }
                                  for (
                                      var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0;
                                      b < y.length - 1 && !(v < y[b]);
                                      b++
                                  );
                                  var _ = b ? y[b - 1] : 0,
                                      w = y[b],
                                      x = {
                                          left: ('right' == d ? i.right : i.left) - t.rect.left,
                                          right: ('left' == d ? i.left : i.right) - t.rect.left,
                                          top: _,
                                          bottom: w
                                      };
                                  return i.left || i.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || ((x.rtop = m), (x.rbottom = g)), x;
                              })(e, t, n, r)).bogus || (t.cache[l] = o)),
                        {
                            left: o.left,
                            right: o.right,
                            top: i ? o.rtop : o.top,
                            bottom: i ? o.rbottom : o.bottom
                        }
                    );
                }
                var jn,
                    Ln = { left: 0, right: 0, top: 0, bottom: 0 };
                function Dn(e, t, n) {
                    for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3)
                        if (
                            ((s = e[u]),
                            (l = e[u + 1]),
                            t < s
                                ? ((i = 0), (o = 1), (a = 'left'))
                                : t < l
                                ? (o = 1 + (i = t - s))
                                : (u == e.length - 3 || (t == l && e[u + 3] > t)) && ((i = (o = l - s) - 1), t >= l && (a = 'right')),
                            null != i)
                        ) {
                            if (((r = e[u + 2]), s == l && n == (r.insertLeft ? 'left' : 'right') && (a = n), 'left' == n && 0 == i))
                                for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; ) (r = e[2 + (u -= 3)]), (a = 'left');
                            if ('right' == n && i == l - s)
                                for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; ) (r = e[(u += 3) + 2]), (a = 'right');
                            break;
                        }
                    return {
                        node: r,
                        start: i,
                        end: o,
                        collapse: a,
                        coverStart: s,
                        coverEnd: l
                    };
                }
                function Nn(e, t) {
                    var n = Ln;
                    if ('left' == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
                    else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
                    return n;
                }
                function Fn(e) {
                    if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
                        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
                }
                function Bn(e) {
                    (e.display.externalMeasure = null), C(e.display.lineMeasure);
                    for (var t = 0; t < e.display.view.length; t++) Fn(e.display.view[t]);
                }
                function zn(e) {
                    Bn(e),
                        (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
                        e.options.lineWrapping || (e.display.maxLineChanged = !0),
                        (e.display.lineNumChars = null);
                }
                function Un() {
                    return c && g
                        ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
                        : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
                }
                function qn() {
                    return c && g
                        ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
                        : window.pageYOffset || (document.documentElement || document.body).scrollTop;
                }
                function Hn(e) {
                    var t = 0;
                    if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += wn(e.widgets[n]));
                    return t;
                }
                function Wn(e, t, n, r, i) {
                    if (!i) {
                        var o = Hn(t);
                        (n.top += o), (n.bottom += o);
                    }
                    if ('line' == r) return n;
                    r || (r = 'local');
                    var a = Ht(t);
                    if (('local' == r ? (a += kn(e.display)) : (a -= e.display.viewOffset), 'page' == r || 'window' == r)) {
                        var s = e.display.lineSpace.getBoundingClientRect();
                        a += s.top + ('window' == r ? 0 : qn());
                        var l = s.left + ('window' == r ? 0 : Un());
                        (n.left += l), (n.right += l);
                    }
                    return (n.top += a), (n.bottom += a), n;
                }
                function Gn(e, t, n) {
                    if ('div' == n) return t;
                    var r = t.left,
                        i = t.top;
                    if ('page' == n) (r -= Un()), (i -= qn());
                    else if ('local' == n || !n) {
                        var o = e.display.sizer.getBoundingClientRect();
                        (r += o.left), (i += o.top);
                    }
                    var a = e.display.lineSpace.getBoundingClientRect();
                    return { left: r - a.left, top: i - a.top };
                }
                function $n(e, t, n, r, i) {
                    return r || (r = $e(e.doc, t.line)), Wn(e, r, Pn(e, r, t.ch, i), n);
                }
                function Vn(e, t, n, r, i, o) {
                    function a(t, a) {
                        var s = In(e, i, t, a ? 'right' : 'left', o);
                        return a ? (s.left = s.right) : (s.right = s.left), Wn(e, r, s, n);
                    }
                    (r = r || $e(e.doc, t.line)), i || (i = Mn(e, r));
                    var s = ue(r, e.doc.direction),
                        l = t.ch,
                        u = t.sticky;
                    if ((l >= r.text.length ? ((l = r.text.length), (u = 'before')) : l <= 0 && ((l = 0), (u = 'after')), !s))
                        return a('before' == u ? l - 1 : l, 'before' == u);
                    function c(e, t, n) {
                        return a(n ? e - 1 : e, (1 == s[t].level) != n);
                    }
                    var d = se(s, l, u),
                        f = ae,
                        p = c(l, d, 'before' == u);
                    return null != f && (p.other = c(l, f, 'before' != u)), p;
                }
                function Kn(e, t) {
                    var n = 0;
                    (t = st(e.doc, t)), e.options.lineWrapping || (n = ir(e.display) * t.ch);
                    var r = $e(e.doc, t.line),
                        i = Ht(r) + kn(e.display);
                    return { left: n, right: n, top: i, bottom: i + r.height };
                }
                function Yn(e, t, n, r, i) {
                    var o = et(e, t, n);
                    return (o.xRel = i), r && (o.outside = r), o;
                }
                function Qn(e, t, n) {
                    var r = e.doc;
                    if ((n += e.display.viewOffset) < 0) return Yn(r.first, 0, null, -1, -1);
                    var i = Xe(r, n),
                        o = r.first + r.size - 1;
                    if (i > o) return Yn(r.first + r.size - 1, $e(r, o).text.length, null, 1, 1);
                    t < 0 && (t = 0);
                    for (var a = $e(r, i); ; ) {
                        var s = er(e, a, i, t, n),
                            l = Dt(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
                        if (!l) return s;
                        var u = l.find(1);
                        if (u.line == i) return u;
                        a = $e(r, (i = u.line));
                    }
                }
                function Xn(e, t, n, r) {
                    r -= Hn(t);
                    var i = t.text.length,
                        o = oe(
                            function (t) {
                                return In(e, n, t - 1).bottom <= r;
                            },
                            i,
                            0
                        );
                    return {
                        begin: o,
                        end: (i = oe(
                            function (t) {
                                return In(e, n, t).top > r;
                            },
                            o,
                            i
                        ))
                    };
                }
                function Jn(e, t, n, r) {
                    return n || (n = Mn(e, t)), Xn(e, t, n, Wn(e, t, In(e, n, r), 'line').top);
                }
                function Zn(e, t, n, r) {
                    return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
                }
                function er(e, t, n, r, i) {
                    i -= Ht(t);
                    var o = Mn(e, t),
                        a = Hn(t),
                        s = 0,
                        l = t.text.length,
                        u = !0,
                        c = ue(t, e.doc.direction);
                    if (c) {
                        var d = (e.options.lineWrapping ? nr : tr)(e, t, n, o, c, r, i);
                        (s = (u = 1 != d.level) ? d.from : d.to - 1), (l = u ? d.to : d.from - 1);
                    }
                    var f,
                        p,
                        h = null,
                        m = null,
                        g = oe(
                            function (t) {
                                var n = In(e, o, t);
                                return (n.top += a), (n.bottom += a), !!Zn(n, r, i, !1) && (n.top <= i && n.left <= r && ((h = t), (m = n)), !0);
                            },
                            s,
                            l
                        ),
                        v = !1;
                    if (m) {
                        var y = r - m.left < m.right - r,
                            b = y == u;
                        (g = h + (b ? 0 : 1)), (p = b ? 'after' : 'before'), (f = y ? m.left : m.right);
                    } else {
                        u || (g != l && g != s) || g++,
                            (p = 0 == g ? 'after' : g == t.text.length ? 'before' : In(e, o, g - (u ? 1 : 0)).bottom + a <= i == u ? 'after' : 'before');
                        var _ = Vn(e, et(n, g, p), 'line', t, o);
                        (f = _.left), (v = i < _.top ? -1 : i >= _.bottom ? 1 : 0);
                    }
                    return Yn(n, (g = ie(t.text, g, 1)), p, v, r - f);
                }
                function tr(e, t, n, r, i, o, a) {
                    var s = oe(
                            function (s) {
                                var l = i[s],
                                    u = 1 != l.level;
                                return Zn(Vn(e, et(n, u ? l.to : l.from, u ? 'before' : 'after'), 'line', t, r), o, a, !0);
                            },
                            0,
                            i.length - 1
                        ),
                        l = i[s];
                    if (s > 0) {
                        var u = 1 != l.level,
                            c = Vn(e, et(n, u ? l.from : l.to, u ? 'after' : 'before'), 'line', t, r);
                        Zn(c, o, a, !0) && c.top > a && (l = i[s - 1]);
                    }
                    return l;
                }
                function nr(e, t, n, r, i, o, a) {
                    var s = Xn(e, t, r, a),
                        l = s.begin,
                        u = s.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, d = null, f = 0; f < i.length; f++) {
                        var p = i[f];
                        if (!(p.from >= u || p.to <= l)) {
                            var h = In(e, r, 1 != p.level ? Math.min(u, p.to) - 1 : Math.max(l, p.from)).right,
                                m = h < o ? o - h + 1e9 : h - o;
                            (!c || d > m) && ((c = p), (d = m));
                        }
                    }
                    return (
                        c || (c = i[i.length - 1]),
                        c.from < l && (c = { from: l, to: c.to, level: c.level }),
                        c.to > u && (c = { from: c.from, to: u, level: c.level }),
                        c
                    );
                }
                function rr(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == jn) {
                        jn = A('pre', null, 'CodeMirror-line-like');
                        for (var t = 0; t < 49; ++t) jn.appendChild(document.createTextNode('x')), jn.appendChild(A('br'));
                        jn.appendChild(document.createTextNode('x'));
                    }
                    T(e.measure, jn);
                    var n = jn.offsetHeight / 50;
                    return n > 3 && (e.cachedTextHeight = n), C(e.measure), n || 1;
                }
                function ir(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = A('span', 'xxxxxxxxxx'),
                        n = A('pre', [t], 'CodeMirror-line-like');
                    T(e.measure, n);
                    var r = t.getBoundingClientRect(),
                        i = (r.right - r.left) / 10;
                    return i > 2 && (e.cachedCharWidth = i), i || 10;
                }
                function or(e) {
                    for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
                        var s = e.display.gutterSpecs[a].className;
                        (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
                    }
                    return {
                        fixedPos: ar(t),
                        gutterTotalWidth: t.gutters.offsetWidth,
                        gutterLeft: n,
                        gutterWidth: r,
                        wrapperWidth: t.wrapper.clientWidth
                    };
                }
                function ar(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
                }
                function sr(e) {
                    var t = rr(e.display),
                        n = e.options.lineWrapping,
                        r = n && Math.max(5, e.display.scroller.clientWidth / ir(e.display) - 3);
                    return function (i) {
                        if (Ut(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
                    };
                }
                function lr(e) {
                    var t = e.doc,
                        n = sr(e);
                    t.iter(function (e) {
                        var t = n(e);
                        t != e.height && Ye(e, t);
                    });
                }
                function ur(e, t, n, r) {
                    var i = e.display;
                    if (!n && 'true' == ke(t).getAttribute('cm-not-content')) return null;
                    var o,
                        a,
                        s = i.lineSpace.getBoundingClientRect();
                    try {
                        (o = t.clientX - s.left), (a = t.clientY - s.top);
                    } catch (e) {
                        return null;
                    }
                    var l,
                        u = Qn(e, o, a);
                    if (r && u.xRel > 0 && (l = $e(e.doc, u.line).text).length == u.ch) {
                        var c = F(l, l.length, e.options.tabSize) - l.length;
                        u = et(u.line, Math.max(0, Math.round((o - Sn(e.display).left) / ir(e.display)) - c));
                    }
                    return u;
                }
                function cr(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if ((t -= e.display.viewFrom) < 0) return null;
                    for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
                }
                function dr(e, t, n, r) {
                    null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
                    var i = e.display;
                    if (
                        (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
                        (e.curOp.viewChanged = !0),
                        t >= i.viewTo)
                    )
                        xt && Bt(e.doc, t) < i.viewTo && pr(e);
                    else if (n <= i.viewFrom) xt && zt(e.doc, n + r) > i.viewFrom ? pr(e) : ((i.viewFrom += r), (i.viewTo += r));
                    else if (t <= i.viewFrom && n >= i.viewTo) pr(e);
                    else if (t <= i.viewFrom) {
                        var o = hr(e, n, n + r, 1);
                        o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : pr(e);
                    } else if (n >= i.viewTo) {
                        var a = hr(e, t, t, -1);
                        a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : pr(e);
                    } else {
                        var s = hr(e, t, t, -1),
                            l = hr(e, n, n + r, 1);
                        s && l ? ((i.view = i.view.slice(0, s.index).concat(on(e, s.lineN, l.lineN)).concat(i.view.slice(l.index))), (i.viewTo += r)) : pr(e);
                    }
                    var u = i.externalMeasured;
                    u && (n < u.lineN ? (u.lineN += r) : t < u.lineN + u.size && (i.externalMeasured = null));
                }
                function fr(e, t, n) {
                    e.curOp.viewChanged = !0;
                    var r = e.display,
                        i = e.display.externalMeasured;
                    if ((i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo))) {
                        var o = r.view[cr(e, t)];
                        if (null != o.node) {
                            var a = o.changes || (o.changes = []);
                            -1 == z(a, n) && a.push(n);
                        }
                    }
                }
                function pr(e) {
                    (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
                }
                function hr(e, t, n, r) {
                    var i,
                        o = cr(e, t),
                        a = e.display.view;
                    if (!xt || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
                    for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
                    if (s != t) {
                        if (r > 0) {
                            if (o == a.length - 1) return null;
                            (i = s + a[o].size - t), o++;
                        } else i = s - t;
                        (t += i), (n += i);
                    }
                    for (; Bt(e.doc, n) != n; ) {
                        if (o == (r < 0 ? 0 : a.length - 1)) return null;
                        (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
                    }
                    return { index: o, lineN: n };
                }
                function mr(e) {
                    for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.hidden || (i.node && !i.changes) || ++n;
                    }
                    return n;
                }
                function gr(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection());
                }
                function vr(e, t) {
                    void 0 === t && (t = !0);
                    for (
                        var n = e.doc,
                            r = {},
                            i = (r.cursors = document.createDocumentFragment()),
                            o = (r.selection = document.createDocumentFragment()),
                            a = 0;
                        a < n.sel.ranges.length;
                        a++
                    )
                        if (t || a != n.sel.primIndex) {
                            var s = n.sel.ranges[a];
                            if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                                var l = s.empty();
                                (l || e.options.showCursorWhenSelecting) && yr(e, s.head, i), l || _r(e, s, o);
                            }
                        }
                    return r;
                }
                function yr(e, t, n) {
                    var r = Vn(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
                        i = n.appendChild(A('div', ' ', 'CodeMirror-cursor'));
                    if (
                        ((i.style.left = r.left + 'px'),
                        (i.style.top = r.top + 'px'),
                        (i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
                        r.other)
                    ) {
                        var o = n.appendChild(A('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'));
                        (o.style.display = ''),
                            (o.style.left = r.other.left + 'px'),
                            (o.style.top = r.other.top + 'px'),
                            (o.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px');
                    }
                }
                function br(e, t) {
                    return e.top - t.top || e.left - t.left;
                }
                function _r(e, t, n) {
                    var r = e.display,
                        i = e.doc,
                        o = document.createDocumentFragment(),
                        a = Sn(e.display),
                        s = a.left,
                        l = Math.max(r.sizerWidth, Cn(e) - r.sizer.offsetLeft) - a.right,
                        u = 'ltr' == i.direction;
                    function c(e, t, n, r) {
                        t < 0 && (t = 0),
                            (t = Math.round(t)),
                            (r = Math.round(r)),
                            o.appendChild(
                                A(
                                    'div',
                                    null,
                                    'CodeMirror-selected',
                                    'position: absolute; left: ' +
                                        e +
                                        'px;\n                             top: ' +
                                        t +
                                        'px; width: ' +
                                        (null == n ? l - e : n) +
                                        'px;\n                             height: ' +
                                        (r - t) +
                                        'px'
                                )
                            );
                    }
                    function d(t, n, r) {
                        var o,
                            a,
                            d = $e(i, t),
                            f = d.text.length;
                        function p(n, r) {
                            return $n(e, et(t, n), 'div', d, r);
                        }
                        function h(t, n, r) {
                            var i = Jn(e, d, null, t),
                                o = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
                            return p('after' == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
                        }
                        var m = ue(d, i.direction);
                        return (
                            (function (e, t, n, r) {
                                if (!e) return r(t, n, 'ltr', 0);
                                for (var i = !1, o = 0; o < e.length; ++o) {
                                    var a = e[o];
                                    ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                                        (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? 'rtl' : 'ltr', o), (i = !0));
                                }
                                i || r(t, n, 'ltr');
                            })(m, n || 0, null == r ? f : r, function (e, t, i, d) {
                                var g = 'ltr' == i,
                                    v = p(e, g ? 'left' : 'right'),
                                    y = p(t - 1, g ? 'right' : 'left'),
                                    b = null == n && 0 == e,
                                    _ = null == r && t == f,
                                    w = 0 == d,
                                    x = !m || d == m.length - 1;
                                if (y.top - v.top <= 3) {
                                    var k = (u ? _ : b) && x,
                                        E = (u ? b : _) && w ? s : (g ? v : y).left,
                                        S = k ? l : (g ? y : v).right;
                                    c(E, v.top, S - E, v.bottom);
                                } else {
                                    var O, C, T, A;
                                    g
                                        ? ((O = u && b && w ? s : v.left),
                                          (C = u ? l : h(e, i, 'before')),
                                          (T = u ? s : h(t, i, 'after')),
                                          (A = u && _ && x ? l : y.right))
                                        : ((O = u ? h(e, i, 'before') : s),
                                          (C = !u && b && w ? l : v.right),
                                          (T = !u && _ && x ? s : y.left),
                                          (A = u ? h(t, i, 'after') : l)),
                                        c(O, v.top, C - O, v.bottom),
                                        v.bottom < y.top && c(s, v.bottom, null, y.top),
                                        c(T, y.top, A - T, y.bottom);
                                }
                                (!o || br(v, o) < 0) && (o = v), br(y, o) < 0 && (o = y), (!a || br(v, a) < 0) && (a = v), br(y, a) < 0 && (a = y);
                            }),
                            { start: o, end: a }
                        );
                    }
                    var f = t.from(),
                        p = t.to();
                    if (f.line == p.line) d(f.line, f.ch, p.ch);
                    else {
                        var h = $e(i, f.line),
                            m = $e(i, p.line),
                            g = Ft(h) == Ft(m),
                            v = d(f.line, f.ch, g ? h.text.length + 1 : null).end,
                            y = d(p.line, g ? 0 : null, p.ch).start;
                        g &&
                            (v.top < y.top - 2
                                ? (c(v.right, v.top, null, v.bottom), c(s, y.top, y.left, y.bottom))
                                : c(v.right, v.top, y.left - v.right, v.bottom)),
                            v.bottom < y.top && c(s, v.bottom, null, y.top);
                    }
                    n.appendChild(o);
                }
                function wr(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var n = !0;
                        (t.cursorDiv.style.visibility = ''),
                            e.options.cursorBlinkRate > 0
                                ? (t.blinker = setInterval(function () {
                                      e.hasFocus() || Sr(e), (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
                                  }, e.options.cursorBlinkRate))
                                : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
                    }
                }
                function xr(e) {
                    e.hasFocus() || (e.display.input.focus(), e.state.focused || Er(e));
                }
                function kr(e) {
                    (e.state.delayingBlurEvent = !0),
                        setTimeout(function () {
                            e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), e.state.focused && Sr(e));
                        }, 100);
                }
                function Er(e, t) {
                    e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
                        'nocursor' != e.options.readOnly &&
                            (e.state.focused ||
                                (he(e, 'focus', e, t),
                                (e.state.focused = !0),
                                I(e.display.wrapper, 'CodeMirror-focused'),
                                e.curOp ||
                                    e.display.selForContextMenu == e.doc.sel ||
                                    (e.display.input.reset(),
                                    l &&
                                        setTimeout(function () {
                                            return e.display.input.reset(!0);
                                        }, 20)),
                                e.display.input.receivedFocus()),
                            wr(e));
                }
                function Sr(e, t) {
                    e.state.delayingBlurEvent ||
                        (e.state.focused && (he(e, 'blur', e, t), (e.state.focused = !1), O(e.display.wrapper, 'CodeMirror-focused')),
                        clearInterval(e.display.blinker),
                        setTimeout(function () {
                            e.state.focused || (e.display.shift = !1);
                        }, 150));
                }
                function Or(e) {
                    for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                        var i = t.view[r],
                            o = e.options.lineWrapping,
                            l = void 0,
                            u = 0;
                        if (!i.hidden) {
                            if (a && s < 8) {
                                var c = i.node.offsetTop + i.node.offsetHeight;
                                (l = c - n), (n = c);
                            } else {
                                var d = i.node.getBoundingClientRect();
                                (l = d.bottom - d.top), !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - d.left - 1);
                            }
                            var f = i.line.height - l;
                            if ((f > 0.005 || f < -0.005) && (Ye(i.line, l), Cr(i.line), i.rest)) for (var p = 0; p < i.rest.length; p++) Cr(i.rest[p]);
                            if (u > e.display.sizerWidth) {
                                var h = Math.ceil(u / ir(e.display));
                                h > e.display.maxLineLength && ((e.display.maxLineLength = h), (e.display.maxLine = i.line), (e.display.maxLineChanged = !0));
                            }
                        }
                    }
                }
                function Cr(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) {
                            var n = e.widgets[t],
                                r = n.node.parentNode;
                            r && (n.height = r.offsetHeight);
                        }
                }
                function Tr(e, t, n) {
                    var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                    r = Math.floor(r - kn(e));
                    var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                        o = Xe(t, r),
                        a = Xe(t, i);
                    if (n && n.ensure) {
                        var s = n.ensure.from.line,
                            l = n.ensure.to.line;
                        s < o
                            ? ((o = s), (a = Xe(t, Ht($e(t, s)) + e.wrapper.clientHeight)))
                            : Math.min(l, t.lastLine()) >= a && ((o = Xe(t, Ht($e(t, l)) - e.wrapper.clientHeight)), (a = l));
                    }
                    return { from: o, to: Math.max(a, o + 1) };
                }
                function Ar(e, t) {
                    var n = e.display,
                        r = rr(e.display);
                    t.top < 0 && (t.top = 0);
                    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                        o = Tn(e),
                        a = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o);
                    var s = e.doc.height + En(n),
                        l = t.top < r,
                        u = t.bottom > s - r;
                    if (t.top < i) a.scrollTop = l ? 0 : t.top;
                    else if (t.bottom > i + o) {
                        var c = Math.min(t.top, (u ? s : t.bottom) - o);
                        c != i && (a.scrollTop = c);
                    }
                    var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
                        f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - d,
                        p = Cn(e) - n.gutters.offsetWidth,
                        h = t.right - t.left > p;
                    return (
                        h && (t.right = t.left + p),
                        t.left < 10
                            ? (a.scrollLeft = 0)
                            : t.left < f
                            ? (a.scrollLeft = Math.max(0, t.left + d - (h ? 0 : 10)))
                            : t.right > p + f - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - p),
                        a
                    );
                }
                function Pr(e, t) {
                    null != t && (Ir(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
                }
                function Rr(e) {
                    Ir(e);
                    var t = e.getCursor();
                    e.curOp.scrollToPos = {
                        from: t,
                        to: t,
                        margin: e.options.cursorScrollMargin
                    };
                }
                function Mr(e, t, n) {
                    (null == t && null == n) || Ir(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
                }
                function Ir(e) {
                    var t = e.curOp.scrollToPos;
                    t && ((e.curOp.scrollToPos = null), jr(e, Kn(e, t.from), Kn(e, t.to), t.margin));
                }
                function jr(e, t, n, r) {
                    var i = Ar(e, {
                        left: Math.min(t.left, n.left),
                        top: Math.min(t.top, n.top) - r,
                        right: Math.max(t.right, n.right),
                        bottom: Math.max(t.bottom, n.bottom) + r
                    });
                    Mr(e, i.scrollLeft, i.scrollTop);
                }
                function Lr(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (n || li(e, { top: t }), Dr(e, t, !0), n && li(e), ri(e, 100));
                }
                function Dr(e, t, n) {
                    (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))),
                        (e.display.scroller.scrollTop != t || n) &&
                            ((e.doc.scrollTop = t),
                            e.display.scrollbars.setScrollTop(t),
                            e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
                }
                function Nr(e, t, n, r) {
                    (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))),
                        ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) ||
                            ((e.doc.scrollLeft = t),
                            di(e),
                            e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                            e.display.scrollbars.setScrollLeft(t));
                }
                function Fr(e) {
                    var t = e.display,
                        n = t.gutters.offsetWidth,
                        r = Math.round(e.doc.height + En(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? n : 0,
                        docHeight: r,
                        scrollHeight: r + On(e) + t.barHeight,
                        nativeBarWidth: t.nativeBarWidth,
                        gutterWidth: n
                    };
                }
                var Br = function (e, t, n) {
                    this.cm = n;
                    var r = (this.vert = A('div', [A('div', null, null, 'min-width: 1px')], 'CodeMirror-vscrollbar')),
                        i = (this.horiz = A('div', [A('div', null, null, 'height: 100%; min-height: 1px')], 'CodeMirror-hscrollbar'));
                    (r.tabIndex = i.tabIndex = -1),
                        e(r),
                        e(i),
                        de(r, 'scroll', function () {
                            r.clientHeight && t(r.scrollTop, 'vertical');
                        }),
                        de(i, 'scroll', function () {
                            i.clientWidth && t(i.scrollLeft, 'horizontal');
                        }),
                        (this.checkedZeroWidth = !1),
                        a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
                };
                (Br.prototype.update = function (e) {
                    var t = e.scrollWidth > e.clientWidth + 1,
                        n = e.scrollHeight > e.clientHeight + 1,
                        r = e.nativeBarWidth;
                    if (n) {
                        (this.vert.style.display = 'block'), (this.vert.style.bottom = t ? r + 'px' : '0');
                        var i = e.viewHeight - (t ? r : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
                    } else (this.vert.style.display = ''), (this.vert.firstChild.style.height = '0');
                    if (t) {
                        (this.horiz.style.display = 'block'), (this.horiz.style.right = n ? r + 'px' : '0'), (this.horiz.style.left = e.barLeft + 'px');
                        var o = e.viewWidth - e.barLeft - (n ? r : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
                    } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0');
                    return (
                        !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
                        { right: n ? r : 0, bottom: t ? r : 0 }
                    );
                }),
                    (Br.prototype.setScrollLeft = function (e) {
                        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                            this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
                    }),
                    (Br.prototype.setScrollTop = function (e) {
                        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
                    }),
                    (Br.prototype.zeroWidthHack = function () {
                        var e = y && !p ? '12px' : '18px';
                        (this.horiz.style.height = this.vert.style.width = e),
                            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
                            (this.disableHoriz = new B()),
                            (this.disableVert = new B());
                    }),
                    (Br.prototype.enableZeroWidthBar = function (e, t, n) {
                        (e.style.pointerEvents = 'auto'),
                            t.set(1e3, function r() {
                                var i = e.getBoundingClientRect();
                                ('vert' == n
                                    ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                                    : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
                                    ? (e.style.pointerEvents = 'none')
                                    : t.set(1e3, r);
                            });
                    }),
                    (Br.prototype.clear = function () {
                        var e = this.horiz.parentNode;
                        e.removeChild(this.horiz), e.removeChild(this.vert);
                    });
                var zr = function () {};
                function Ur(e, t) {
                    t || (t = Fr(e));
                    var n = e.display.barWidth,
                        r = e.display.barHeight;
                    qr(e, t);
                    for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
                        n != e.display.barWidth && e.options.lineWrapping && Or(e), qr(e, Fr(e)), (n = e.display.barWidth), (r = e.display.barHeight);
                }
                function qr(e, t) {
                    var n = e.display,
                        r = n.scrollbars.update(t);
                    (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
                        (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
                        (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
                        r.right && r.bottom
                            ? ((n.scrollbarFiller.style.display = 'block'),
                              (n.scrollbarFiller.style.height = r.bottom + 'px'),
                              (n.scrollbarFiller.style.width = r.right + 'px'))
                            : (n.scrollbarFiller.style.display = ''),
                        r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                            ? ((n.gutterFiller.style.display = 'block'),
                              (n.gutterFiller.style.height = r.bottom + 'px'),
                              (n.gutterFiller.style.width = t.gutterWidth + 'px'))
                            : (n.gutterFiller.style.display = '');
                }
                (zr.prototype.update = function () {
                    return { bottom: 0, right: 0 };
                }),
                    (zr.prototype.setScrollLeft = function () {}),
                    (zr.prototype.setScrollTop = function () {}),
                    (zr.prototype.clear = function () {});
                var Hr = { native: Br, null: zr };
                function Wr(e) {
                    e.display.scrollbars &&
                        (e.display.scrollbars.clear(), e.display.scrollbars.addClass && O(e.display.wrapper, e.display.scrollbars.addClass)),
                        (e.display.scrollbars = new Hr[e.options.scrollbarStyle](
                            function (t) {
                                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                                    de(t, 'mousedown', function () {
                                        e.state.focused &&
                                            setTimeout(function () {
                                                return e.display.input.focus();
                                            }, 0);
                                    }),
                                    t.setAttribute('cm-not-content', 'true');
                            },
                            function (t, n) {
                                'horizontal' == n ? Nr(e, t) : Lr(e, t);
                            },
                            e
                        )),
                        e.display.scrollbars.addClass && I(e.display.wrapper, e.display.scrollbars.addClass);
                }
                var Gr = 0;
                function $r(e) {
                    var t;
                    (e.curOp = {
                        cm: e,
                        viewChanged: !1,
                        startHeight: e.doc.height,
                        forceUpdate: !1,
                        updateInput: 0,
                        typing: !1,
                        changeObjs: null,
                        cursorActivityHandlers: null,
                        cursorActivityCalled: 0,
                        selectionChanged: !1,
                        updateMaxLine: !1,
                        scrollLeft: null,
                        scrollTop: null,
                        scrollToPos: null,
                        focus: !1,
                        id: ++Gr
                    }),
                        (t = e.curOp),
                        an ? an.ops.push(t) : (t.ownsGroup = an = { ops: [t], delayedCallbacks: [] });
                }
                function Vr(e) {
                    var t = e.curOp;
                    t &&
                        (function (e, t) {
                            var n = e.ownsGroup;
                            if (n)
                                try {
                                    !(function (e) {
                                        var t = e.delayedCallbacks,
                                            n = 0;
                                        do {
                                            for (; n < t.length; n++) t[n].call(null);
                                            for (var r = 0; r < e.ops.length; r++) {
                                                var i = e.ops[r];
                                                if (i.cursorActivityHandlers)
                                                    for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                                                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                                            }
                                        } while (n < t.length);
                                    })(n);
                                } finally {
                                    (an = null), t(n);
                                }
                        })(t, function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            !(function (e) {
                                for (var t = e.ops, n = 0; n < t.length; n++) Kr(t[n]);
                                for (var r = 0; r < t.length; r++) Yr(t[r]);
                                for (var i = 0; i < t.length; i++) Qr(t[i]);
                                for (var o = 0; o < t.length; o++) Xr(t[o]);
                                for (var a = 0; a < t.length; a++) Jr(t[a]);
                            })(e);
                        });
                }
                function Kr(e) {
                    var t = e.cm,
                        n = t.display;
                    !(function (e) {
                        var t = e.display;
                        !t.scrollbarsClipped &&
                            t.scroller.offsetWidth &&
                            ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                            (t.heightForcer.style.height = On(e) + 'px'),
                            (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                            (t.sizer.style.borderRightWidth = On(e) + 'px'),
                            (t.scrollbarsClipped = !0));
                    })(t),
                        e.updateMaxLine && Gt(t),
                        (e.mustUpdate =
                            e.viewChanged ||
                            e.forceUpdate ||
                            null != e.scrollTop ||
                            (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
                            (n.maxLineChanged && t.options.lineWrapping)),
                        (e.update = e.mustUpdate && new oi(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
                }
                function Yr(e) {
                    e.updatedDisplay = e.mustUpdate && ai(e.cm, e.update);
                }
                function Qr(e) {
                    var t = e.cm,
                        n = t.display;
                    e.updatedDisplay && Or(t),
                        (e.barMeasure = Fr(t)),
                        n.maxLineChanged &&
                            !t.options.lineWrapping &&
                            ((e.adjustWidthTo = Pn(t, n.maxLine, n.maxLine.text.length).left + 3),
                            (t.display.sizerWidth = e.adjustWidthTo),
                            (e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + On(t) + t.display.barWidth)),
                            (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Cn(t)))),
                        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
                }
                function Xr(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo &&
                        ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
                        e.maxScrollLeft < t.doc.scrollLeft && Nr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
                        (t.display.maxLineChanged = !1));
                    var n = e.focus && e.focus == M();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
                        (e.updatedDisplay || e.startHeight != t.doc.height) && Ur(t, e.barMeasure),
                        e.updatedDisplay && ci(t, e.barMeasure),
                        e.selectionChanged && wr(t),
                        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                        n && xr(e.cm);
                }
                function Jr(e) {
                    var t = e.cm,
                        n = t.display,
                        r = t.doc;
                    e.updatedDisplay && si(t, e.update),
                        null == n.wheelStartX || (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) || (n.wheelStartX = n.wheelStartY = null),
                        null != e.scrollTop && Dr(t, e.scrollTop, e.forceScroll),
                        null != e.scrollLeft && Nr(t, e.scrollLeft, !0, !0),
                        e.scrollToPos &&
                            (function (e, t) {
                                if (!me(e, 'scrollCursorIntoView')) {
                                    var n = e.display,
                                        r = n.sizer.getBoundingClientRect(),
                                        i = null;
                                    if (
                                        (t.top + r.top < 0
                                            ? (i = !0)
                                            : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                                        null != i && !h)
                                    ) {
                                        var o = A(
                                            'div',
                                            '​',
                                            null,
                                            'position: absolute;\n                         top: ' +
                                                (t.top - n.viewOffset - kn(e.display)) +
                                                'px;\n                         height: ' +
                                                (t.bottom - t.top + On(e) + n.barHeight) +
                                                'px;\n                         left: ' +
                                                t.left +
                                                'px; width: ' +
                                                Math.max(2, t.right - t.left) +
                                                'px;'
                                        );
                                        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                                    }
                                }
                            })(
                                t,
                                (function (e, t, n, r) {
                                    var i;
                                    null == r && (r = 0),
                                        e.options.lineWrapping ||
                                            t != n ||
                                            (n =
                                                'before' == (t = t.ch ? et(t.line, 'before' == t.sticky ? t.ch - 1 : t.ch, 'after') : t).sticky
                                                    ? et(t.line, t.ch + 1, 'before')
                                                    : t);
                                    for (var o = 0; o < 5; o++) {
                                        var a = !1,
                                            s = Vn(e, t),
                                            l = n && n != t ? Vn(e, n) : s,
                                            u = Ar(
                                                e,
                                                (i = {
                                                    left: Math.min(s.left, l.left),
                                                    top: Math.min(s.top, l.top) - r,
                                                    right: Math.max(s.left, l.left),
                                                    bottom: Math.max(s.bottom, l.bottom) + r
                                                })
                                            ),
                                            c = e.doc.scrollTop,
                                            d = e.doc.scrollLeft;
                                        if (
                                            (null != u.scrollTop && (Lr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)),
                                            null != u.scrollLeft && (Nr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                                            !a)
                                        )
                                            break;
                                    }
                                    return i;
                                })(t, st(r, e.scrollToPos.from), st(r, e.scrollToPos.to), e.scrollToPos.margin)
                            );
                    var i = e.maybeHiddenMarkers,
                        o = e.maybeUnhiddenMarkers;
                    if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || he(i[a], 'hide');
                    if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length && he(o[s], 'unhide');
                    n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
                        e.changeObjs && he(t, 'changes', t, e.changeObjs),
                        e.update && e.update.finish();
                }
                function Zr(e, t) {
                    if (e.curOp) return t();
                    $r(e);
                    try {
                        return t();
                    } finally {
                        Vr(e);
                    }
                }
                function ei(e, t) {
                    return function () {
                        if (e.curOp) return t.apply(e, arguments);
                        $r(e);
                        try {
                            return t.apply(e, arguments);
                        } finally {
                            Vr(e);
                        }
                    };
                }
                function ti(e) {
                    return function () {
                        if (this.curOp) return e.apply(this, arguments);
                        $r(this);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            Vr(this);
                        }
                    };
                }
                function ni(e) {
                    return function () {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        $r(t);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            Vr(t);
                        }
                    };
                }
                function ri(e, t) {
                    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, D(ii, e));
                }
                function ii(e) {
                    var t = e.doc;
                    if (!(t.highlightFrontier >= e.display.viewTo)) {
                        var n = +new Date() + e.options.workTime,
                            r = pt(e, t.highlightFrontier),
                            i = [];
                        t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                            if (r.line >= e.display.viewFrom) {
                                var a = o.styles,
                                    s = o.text.length > e.options.maxHighlightLength ? qe(t.mode, r.state) : null,
                                    l = dt(e, o, r, !0);
                                s && (r.state = s), (o.styles = l.styles);
                                var u = o.styleClasses,
                                    c = l.classes;
                                c ? (o.styleClasses = c) : u && (o.styleClasses = null);
                                for (
                                    var d = !a || a.length != o.styles.length || (u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass)),
                                        f = 0;
                                    !d && f < a.length;
                                    ++f
                                )
                                    d = a[f] != o.styles[f];
                                d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                            } else o.text.length <= e.options.maxHighlightLength && ht(e, o.text, r), (o.stateAfter = r.line % 5 == 0 ? r.save() : null), r.nextLine();
                            if (+new Date() > n) return ri(e, e.options.workDelay), !0;
                        }),
                            (t.highlightFrontier = r.line),
                            (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                            i.length &&
                                Zr(e, function () {
                                    for (var t = 0; t < i.length; t++) fr(e, i[t], 'text');
                                });
                    }
                }
                var oi = function (e, t, n) {
                    var r = e.display;
                    (this.viewport = t),
                        (this.visible = Tr(r, e.doc, t)),
                        (this.editorIsHidden = !r.wrapper.offsetWidth),
                        (this.wrapperHeight = r.wrapper.clientHeight),
                        (this.wrapperWidth = r.wrapper.clientWidth),
                        (this.oldDisplayWidth = Cn(e)),
                        (this.force = n),
                        (this.dims = or(e)),
                        (this.events = []);
                };
                function ai(e, t) {
                    var n = e.display,
                        r = e.doc;
                    if (t.editorIsHidden) return pr(e), !1;
                    if (
                        !t.force &&
                        t.visible.from >= n.viewFrom &&
                        t.visible.to <= n.viewTo &&
                        (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
                        n.renderedView == n.view &&
                        0 == mr(e)
                    )
                        return !1;
                    fi(e) && (pr(e), (t.dims = or(e)));
                    var i = r.first + r.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                        a = Math.min(i, t.visible.to + e.options.viewportMargin);
                    n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
                        n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
                        xt && ((o = Bt(e.doc, o)), (a = zt(e.doc, a)));
                    var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
                    !(function (e, t, n) {
                        var r = e.display;
                        0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
                            ? ((r.view = on(e, t, n)), (r.viewFrom = t))
                            : (r.viewFrom > t ? (r.view = on(e, t, r.viewFrom).concat(r.view)) : r.viewFrom < t && (r.view = r.view.slice(cr(e, t))),
                              (r.viewFrom = t),
                              r.viewTo < n ? (r.view = r.view.concat(on(e, r.viewTo, n))) : r.viewTo > n && (r.view = r.view.slice(0, cr(e, n)))),
                            (r.viewTo = n);
                    })(e, o, a),
                        (n.viewOffset = Ht($e(e.doc, n.viewFrom))),
                        (e.display.mover.style.top = n.viewOffset + 'px');
                    var u = mr(e);
                    if (!s && 0 == u && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
                    var c = (function (e) {
                        if (e.hasFocus()) return null;
                        var t = M();
                        if (!t || !R(e.display.lineDiv, t)) return null;
                        var n = { activeElt: t };
                        if (window.getSelection) {
                            var r = window.getSelection();
                            r.anchorNode &&
                                r.extend &&
                                R(e.display.lineDiv, r.anchorNode) &&
                                ((n.anchorNode = r.anchorNode),
                                (n.anchorOffset = r.anchorOffset),
                                (n.focusNode = r.focusNode),
                                (n.focusOffset = r.focusOffset));
                        }
                        return n;
                    })(e);
                    return (
                        u > 4 && (n.lineDiv.style.display = 'none'),
                        (function (e, t, n) {
                            var r = e.display,
                                i = e.options.lineNumbers,
                                o = r.lineDiv,
                                a = o.firstChild;
                            function s(t) {
                                var n = t.nextSibling;
                                return l && y && e.display.currentWheelTarget == t ? (t.style.display = 'none') : t.parentNode.removeChild(t), n;
                            }
                            for (var u = r.view, c = r.viewFrom, d = 0; d < u.length; d++) {
                                var f = u[d];
                                if (f.hidden);
                                else if (f.node && f.node.parentNode == o) {
                                    for (; a != f.node; ) a = s(a);
                                    var p = i && null != t && t <= c && f.lineNumber;
                                    f.changes && (z(f.changes, 'gutter') > -1 && (p = !1), cn(e, f, c, n)),
                                        p && (C(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(Ze(e.options, c)))),
                                        (a = f.node.nextSibling);
                                } else {
                                    var h = vn(e, f, c, n);
                                    o.insertBefore(h, a);
                                }
                                c += f.size;
                            }
                            for (; a; ) a = s(a);
                        })(e, n.updateLineNumbers, t.dims),
                        u > 4 && (n.lineDiv.style.display = ''),
                        (n.renderedView = n.view),
                        (function (e) {
                            if (
                                e &&
                                e.activeElt &&
                                e.activeElt != M() &&
                                (e.activeElt.focus(),
                                !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                                    e.anchorNode &&
                                    R(document.body, e.anchorNode) &&
                                    R(document.body, e.focusNode))
                            ) {
                                var t = window.getSelection(),
                                    n = document.createRange();
                                n.setEnd(e.anchorNode, e.anchorOffset),
                                    n.collapse(!1),
                                    t.removeAllRanges(),
                                    t.addRange(n),
                                    t.extend(e.focusNode, e.focusOffset);
                            }
                        })(c),
                        C(n.cursorDiv),
                        C(n.selectionDiv),
                        (n.gutters.style.height = n.sizer.style.minHeight = 0),
                        s && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), ri(e, 400)),
                        (n.updateLineNumbers = null),
                        !0
                    );
                }
                function si(e, t) {
                    for (var n = t.viewport, r = !0; ; r = !1) {
                        if (r && e.options.lineWrapping && t.oldDisplayWidth != Cn(e)) r && (t.visible = Tr(e.display, e.doc, n));
                        else if (
                            (n &&
                                null != n.top &&
                                (n = {
                                    top: Math.min(e.doc.height + En(e.display) - Tn(e), n.top)
                                }),
                            (t.visible = Tr(e.display, e.doc, n)),
                            t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                        )
                            break;
                        if (!ai(e, t)) break;
                        Or(e);
                        var i = Fr(e);
                        gr(e), Ur(e, i), ci(e, i), (t.force = !1);
                    }
                    t.signal(e, 'update', e),
                        (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
                            (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
                            (e.display.reportedViewFrom = e.display.viewFrom),
                            (e.display.reportedViewTo = e.display.viewTo));
                }
                function li(e, t) {
                    var n = new oi(e, t);
                    if (ai(e, n)) {
                        Or(e), si(e, n);
                        var r = Fr(e);
                        gr(e), Ur(e, r), ci(e, r), n.finish();
                    }
                }
                function ui(e) {
                    var t = e.gutters.offsetWidth;
                    e.sizer.style.marginLeft = t + 'px';
                }
                function ci(e, t) {
                    (e.display.sizer.style.minHeight = t.docHeight + 'px'),
                        (e.display.heightForcer.style.top = t.docHeight + 'px'),
                        (e.display.gutters.style.height = t.docHeight + e.display.barHeight + On(e) + 'px');
                }
                function di(e) {
                    var t = e.display,
                        n = t.view;
                    if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
                        for (var r = ar(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + 'px', a = 0; a < n.length; a++)
                            if (!n[a].hidden) {
                                e.options.fixedGutter &&
                                    (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                                var s = n[a].alignable;
                                if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
                            }
                        e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
                    }
                }
                function fi(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        n = Ze(e.options, t.first + t.size - 1),
                        r = e.display;
                    if (n.length != r.lineNumChars) {
                        var i = r.measure.appendChild(A('div', [A('div', n)], 'CodeMirror-linenumber CodeMirror-gutter-elt')),
                            o = i.firstChild.offsetWidth,
                            a = i.offsetWidth - o;
                        return (
                            (r.lineGutter.style.width = ''),
                            (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1),
                            (r.lineNumWidth = r.lineNumInnerWidth + a),
                            (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
                            (r.lineGutter.style.width = r.lineNumWidth + 'px'),
                            ui(e.display),
                            !0
                        );
                    }
                    return !1;
                }
                function pi(e, t) {
                    for (var n = [], r = !1, i = 0; i < e.length; i++) {
                        var o = e[i],
                            a = null;
                        if (('string' != typeof o && ((a = o.style), (o = o.className)), 'CodeMirror-linenumbers' == o)) {
                            if (!t) continue;
                            r = !0;
                        }
                        n.push({ className: o, style: a });
                    }
                    return t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }), n;
                }
                function hi(e) {
                    var t = e.gutters,
                        n = e.gutterSpecs;
                    C(t), (e.lineGutter = null);
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r],
                            o = i.className,
                            a = i.style,
                            s = t.appendChild(A('div', null, 'CodeMirror-gutter ' + o));
                        a && (s.style.cssText = a), 'CodeMirror-linenumbers' == o && ((e.lineGutter = s), (s.style.width = (e.lineNumWidth || 1) + 'px'));
                    }
                    (t.style.display = n.length ? '' : 'none'), ui(e);
                }
                function mi(e) {
                    hi(e.display), dr(e), di(e);
                }
                function gi(e, t, r, i) {
                    var o = this;
                    (this.input = r),
                        (o.scrollbarFiller = A('div', null, 'CodeMirror-scrollbar-filler')),
                        o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
                        (o.gutterFiller = A('div', null, 'CodeMirror-gutter-filler')),
                        o.gutterFiller.setAttribute('cm-not-content', 'true'),
                        (o.lineDiv = P('div', null, 'CodeMirror-code')),
                        (o.selectionDiv = A('div', null, null, 'position: relative; z-index: 1')),
                        (o.cursorDiv = A('div', null, 'CodeMirror-cursors')),
                        (o.measure = A('div', null, 'CodeMirror-measure')),
                        (o.lineMeasure = A('div', null, 'CodeMirror-measure')),
                        (o.lineSpace = P('div', [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, 'position: relative; outline: none'));
                    var u = P('div', [o.lineSpace], 'CodeMirror-lines');
                    (o.mover = A('div', [u], null, 'position: relative')),
                        (o.sizer = A('div', [o.mover], 'CodeMirror-sizer')),
                        (o.sizerWidth = null),
                        (o.heightForcer = A('div', null, null, 'position: absolute; height: 50px; width: 1px;')),
                        (o.gutters = A('div', null, 'CodeMirror-gutters')),
                        (o.lineGutter = null),
                        (o.scroller = A('div', [o.sizer, o.heightForcer, o.gutters], 'CodeMirror-scroll')),
                        o.scroller.setAttribute('tabIndex', '-1'),
                        (o.wrapper = A('div', [o.scrollbarFiller, o.gutterFiller, o.scroller], 'CodeMirror')),
                        a && s < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
                        l || (n && v) || (o.scroller.draggable = !0),
                        e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
                        (o.viewFrom = o.viewTo = t.first),
                        (o.reportedViewFrom = o.reportedViewTo = t.first),
                        (o.view = []),
                        (o.renderedView = null),
                        (o.externalMeasured = null),
                        (o.viewOffset = 0),
                        (o.lastWrapHeight = o.lastWrapWidth = 0),
                        (o.updateLineNumbers = null),
                        (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
                        (o.scrollbarsClipped = !1),
                        (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
                        (o.alignWidgets = !1),
                        (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
                        (o.maxLine = null),
                        (o.maxLineLength = 0),
                        (o.maxLineChanged = !1),
                        (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
                        (o.shift = !1),
                        (o.selForContextMenu = null),
                        (o.activeTouch = null),
                        (o.gutterSpecs = pi(i.gutters, i.lineNumbers)),
                        hi(o),
                        r.init(o);
                }
                (oi.prototype.signal = function (e, t) {
                    ve(e, t) && this.events.push(arguments);
                }),
                    (oi.prototype.finish = function () {
                        for (var e = 0; e < this.events.length; e++) he.apply(null, this.events[e]);
                    });
                var vi = 0,
                    yi = null;
                function bi(e) {
                    var t = e.wheelDeltaX,
                        n = e.wheelDeltaY;
                    return (
                        null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                        null == n && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : null == n && (n = e.wheelDelta),
                        { x: t, y: n }
                    );
                }
                function _i(e) {
                    var t = bi(e);
                    return (t.x *= yi), (t.y *= yi), t;
                }
                function wi(e, t) {
                    var r = bi(t),
                        i = r.x,
                        o = r.y,
                        a = e.display,
                        s = a.scroller,
                        u = s.scrollWidth > s.clientWidth,
                        c = s.scrollHeight > s.clientHeight;
                    if ((i && u) || (o && c)) {
                        if (o && y && l)
                            e: for (var f = t.target, p = a.view; f != s; f = f.parentNode)
                                for (var h = 0; h < p.length; h++)
                                    if (p[h].node == f) {
                                        e.display.currentWheelTarget = f;
                                        break e;
                                    }
                        if (i && !n && !d && null != yi)
                            return (
                                o && c && Lr(e, Math.max(0, s.scrollTop + o * yi)),
                                Nr(e, Math.max(0, s.scrollLeft + i * yi)),
                                (!o || (o && c)) && be(t),
                                void (a.wheelStartX = null)
                            );
                        if (o && null != yi) {
                            var m = o * yi,
                                g = e.doc.scrollTop,
                                v = g + a.wrapper.clientHeight;
                            m < 0 ? (g = Math.max(0, g + m - 50)) : (v = Math.min(e.doc.height, v + m + 50)), li(e, { top: g, bottom: v });
                        }
                        vi < 20 &&
                            (null == a.wheelStartX
                                ? ((a.wheelStartX = s.scrollLeft),
                                  (a.wheelStartY = s.scrollTop),
                                  (a.wheelDX = i),
                                  (a.wheelDY = o),
                                  setTimeout(function () {
                                      if (null != a.wheelStartX) {
                                          var e = s.scrollLeft - a.wheelStartX,
                                              t = s.scrollTop - a.wheelStartY,
                                              n = (t && a.wheelDY && t / a.wheelDY) || (e && a.wheelDX && e / a.wheelDX);
                                          (a.wheelStartX = a.wheelStartY = null), n && ((yi = (yi * vi + n) / (vi + 1)), ++vi);
                                      }
                                  }, 200))
                                : ((a.wheelDX += i), (a.wheelDY += o)));
                    }
                }
                a ? (yi = -0.53) : n ? (yi = 15) : c ? (yi = -0.7) : f && (yi = -1 / 3);
                var xi = function (e, t) {
                    (this.ranges = e), (this.primIndex = t);
                };
                (xi.prototype.primary = function () {
                    return this.ranges[this.primIndex];
                }),
                    (xi.prototype.equals = function (e) {
                        if (e == this) return !0;
                        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                        for (var t = 0; t < this.ranges.length; t++) {
                            var n = this.ranges[t],
                                r = e.ranges[t];
                            if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1;
                        }
                        return !0;
                    }),
                    (xi.prototype.deepCopy = function () {
                        for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ki(rt(this.ranges[t].anchor), rt(this.ranges[t].head));
                        return new xi(e, this.primIndex);
                    }),
                    (xi.prototype.somethingSelected = function () {
                        for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                        return !1;
                    }),
                    (xi.prototype.contains = function (e, t) {
                        t || (t = e);
                        for (var n = 0; n < this.ranges.length; n++) {
                            var r = this.ranges[n];
                            if (tt(t, r.from()) >= 0 && tt(e, r.to()) <= 0) return n;
                        }
                        return -1;
                    });
                var ki = function (e, t) {
                    (this.anchor = e), (this.head = t);
                };
                function Ei(e, t, n) {
                    var r = e && e.options.selectionsMayTouch,
                        i = t[n];
                    t.sort(function (e, t) {
                        return tt(e.from(), t.from());
                    }),
                        (n = z(t, i));
                    for (var o = 1; o < t.length; o++) {
                        var a = t[o],
                            s = t[o - 1],
                            l = tt(s.to(), a.from());
                        if (r && !a.empty() ? l > 0 : l >= 0) {
                            var u = ot(s.from(), a.from()),
                                c = it(s.to(), a.to()),
                                d = s.empty() ? a.from() == a.head : s.from() == s.head;
                            o <= n && --n, t.splice(--o, 2, new ki(d ? c : u, d ? u : c));
                        }
                    }
                    return new xi(t, n);
                }
                function Si(e, t) {
                    return new xi([new ki(e, t || e)], 0);
                }
                function Oi(e) {
                    return e.text ? et(e.from.line + e.text.length - 1, K(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
                }
                function Ci(e, t) {
                    if (tt(e, t.from) < 0) return e;
                    if (tt(e, t.to) <= 0) return Oi(t);
                    var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        r = e.ch;
                    return e.line == t.to.line && (r += Oi(t).ch - t.to.ch), et(n, r);
                }
                function Ti(e, t) {
                    for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                        var i = e.sel.ranges[r];
                        n.push(new ki(Ci(i.anchor, t), Ci(i.head, t)));
                    }
                    return Ei(e.cm, n, e.sel.primIndex);
                }
                function Ai(e, t, n) {
                    return e.line == t.line ? et(n.line, e.ch - t.ch + n.ch) : et(n.line + (e.line - t.line), e.ch);
                }
                function Pi(e) {
                    (e.doc.mode = Be(e.options, e.doc.modeOption)), Ri(e);
                }
                function Ri(e) {
                    e.doc.iter(function (e) {
                        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
                    }),
                        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                        ri(e, 100),
                        e.state.modeGen++,
                        e.curOp && dr(e);
                }
                function Mi(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && '' == K(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
                }
                function Ii(e, t, n, r) {
                    function i(e) {
                        return n ? n[e] : null;
                    }
                    function o(e, n, i) {
                        !(function (e, t, n, r) {
                            (e.text = t),
                                e.stateAfter && (e.stateAfter = null),
                                e.styles && (e.styles = null),
                                null != e.order && (e.order = null),
                                Tt(e),
                                At(e, n);
                            var i = r ? r(e) : 1;
                            i != e.height && Ye(e, i);
                        })(e, n, i, r),
                            ln(e, 'change', e, t);
                    }
                    function a(e, t) {
                        for (var n = [], o = e; o < t; ++o) n.push(new $t(u[o], i(o), r));
                        return n;
                    }
                    var s = t.from,
                        l = t.to,
                        u = t.text,
                        c = $e(e, s.line),
                        d = $e(e, l.line),
                        f = K(u),
                        p = i(u.length - 1),
                        h = l.line - s.line;
                    if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
                    else if (Mi(e, t)) {
                        var m = a(0, u.length - 1);
                        o(d, d.text, p), h && e.remove(s.line, h), m.length && e.insert(s.line, m);
                    } else if (c == d)
                        if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(l.ch), p);
                        else {
                            var g = a(1, u.length - 1);
                            g.push(new $t(f + c.text.slice(l.ch), p, r)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, g);
                        }
                    else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + d.text.slice(l.ch), i(0)), e.remove(s.line + 1, h);
                    else {
                        o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(d, f + d.text.slice(l.ch), p);
                        var v = a(1, u.length - 1);
                        h > 1 && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, v);
                    }
                    ln(e, 'change', e, t);
                }
                function ji(e, t, n) {
                    !(function e(r, i, o) {
                        if (r.linked)
                            for (var a = 0; a < r.linked.length; ++a) {
                                var s = r.linked[a];
                                if (s.doc != i) {
                                    var l = o && s.sharedHist;
                                    (n && !l) || (t(s.doc, l), e(s.doc, r, l));
                                }
                            }
                    })(e, null, !0);
                }
                function Li(e, t) {
                    if (t.cm) throw new Error('This document is already in use.');
                    (e.doc = t), (t.cm = e), lr(e), Pi(e), Di(e), e.options.lineWrapping || Gt(e), (e.options.mode = t.modeOption), dr(e);
                }
                function Di(e) {
                    ('rtl' == e.doc.direction ? I : O)(e.display.lineDiv, 'CodeMirror-rtl');
                }
                function Ni(e) {
                    (this.done = []),
                        (this.undone = []),
                        (this.undoDepth = 1 / 0),
                        (this.lastModTime = this.lastSelTime = 0),
                        (this.lastOp = this.lastSelOp = null),
                        (this.lastOrigin = this.lastSelOrigin = null),
                        (this.generation = this.maxGeneration = e || 1);
                }
                function Fi(e, t) {
                    var n = { from: rt(t.from), to: Oi(t), text: Ve(e, t.from, t.to) };
                    return (
                        Hi(e, n, t.from.line, t.to.line + 1),
                        ji(
                            e,
                            function (e) {
                                return Hi(e, n, t.from.line, t.to.line + 1);
                            },
                            !0
                        ),
                        n
                    );
                }
                function Bi(e) {
                    for (; e.length && K(e).ranges; ) e.pop();
                }
                function zi(e, t, n, r) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o,
                        a,
                        s = +new Date();
                    if (
                        (i.lastOp == r ||
                            (i.lastOrigin == t.origin &&
                                t.origin &&
                                (('+' == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                                    '*' == t.origin.charAt(0)))) &&
                        (o = (function (e, t) {
                            return t
                                ? (Bi(e.done), K(e.done))
                                : e.done.length && !K(e.done).ranges
                                ? K(e.done)
                                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                                ? (e.done.pop(), K(e.done))
                                : void 0;
                        })(i, i.lastOp == r))
                    )
                        (a = K(o.changes)), 0 == tt(t.from, t.to) && 0 == tt(t.from, a.to) ? (a.to = Oi(t)) : o.changes.push(Fi(e, t));
                    else {
                        var l = K(i.done);
                        for (
                            (l && l.ranges) || qi(e.sel, i.done), o = { changes: [Fi(e, t)], generation: i.generation }, i.done.push(o);
                            i.done.length > i.undoDepth;

                        )
                            i.done.shift(), i.done[0].ranges || i.done.shift();
                    }
                    i.done.push(n),
                        (i.generation = ++i.maxGeneration),
                        (i.lastModTime = i.lastSelTime = s),
                        (i.lastOp = i.lastSelOp = r),
                        (i.lastOrigin = i.lastSelOrigin = t.origin),
                        a || he(e, 'historyAdded');
                }
                function Ui(e, t, n, r) {
                    var i = e.history,
                        o = r && r.origin;
                    n == i.lastSelOp ||
                    (o &&
                        i.lastSelOrigin == o &&
                        ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                            (function (e, t, n, r) {
                                var i = t.charAt(0);
                                return (
                                    '*' == i ||
                                    ('+' == i &&
                                        n.ranges.length == r.ranges.length &&
                                        n.somethingSelected() == r.somethingSelected() &&
                                        new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
                                );
                            })(e, o, K(i.done), t)))
                        ? (i.done[i.done.length - 1] = t)
                        : qi(t, i.done),
                        (i.lastSelTime = +new Date()),
                        (i.lastSelOrigin = o),
                        (i.lastSelOp = n),
                        r && !1 !== r.clearRedo && Bi(i.undone);
                }
                function qi(e, t) {
                    var n = K(t);
                    (n && n.ranges && n.equals(e)) || t.push(e);
                }
                function Hi(e, t, n, r) {
                    var i = t['spans_' + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
                        n.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = n.markedSpans), ++o;
                    });
                }
                function Wi(e) {
                    if (!e) return null;
                    for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                    return t ? (t.length ? t : null) : e;
                }
                function Gi(e, t) {
                    var n = (function (e, t) {
                            var n = t['spans_' + e.id];
                            if (!n) return null;
                            for (var r = [], i = 0; i < t.text.length; ++i) r.push(Wi(n[i]));
                            return r;
                        })(e, t),
                        r = Ot(e, t);
                    if (!n) return r;
                    if (!r) return n;
                    for (var i = 0; i < n.length; ++i) {
                        var o = n[i],
                            a = r[i];
                        if (o && a)
                            e: for (var s = 0; s < a.length; ++s) {
                                for (var l = a[s], u = 0; u < o.length; ++u) if (o[u].marker == l.marker) continue e;
                                o.push(l);
                            }
                        else a && (n[i] = a);
                    }
                    return n;
                }
                function $i(e, t, n) {
                    for (var r = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) r.push(n ? xi.prototype.deepCopy.call(o) : o);
                        else {
                            var a = o.changes,
                                s = [];
                            r.push({ changes: s });
                            for (var l = 0; l < a.length; ++l) {
                                var u = a[l],
                                    c = void 0;
                                if ((s.push({ from: u.from, to: u.to, text: u.text }), t))
                                    for (var d in u) (c = d.match(/^spans_(\d+)$/)) && z(t, Number(c[1])) > -1 && ((K(s)[d] = u[d]), delete u[d]);
                            }
                        }
                    }
                    return r;
                }
                function Vi(e, t, n, r) {
                    if (r) {
                        var i = e.anchor;
                        if (n) {
                            var o = tt(t, i) < 0;
                            o != tt(n, i) < 0 ? ((i = t), (t = n)) : o != tt(t, n) < 0 && (t = n);
                        }
                        return new ki(i, t);
                    }
                    return new ki(n || t, t);
                }
                function Ki(e, t, n, r, i) {
                    null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Zi(e, new xi([Vi(e.sel.primary(), t, n, i)], 0), r);
                }
                function Yi(e, t, n) {
                    for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
                        r[o] = Vi(e.sel.ranges[o], t[o], null, i);
                    Zi(e, Ei(e.cm, r, e.sel.primIndex), n);
                }
                function Qi(e, t, n, r) {
                    var i = e.sel.ranges.slice(0);
                    (i[t] = n), Zi(e, Ei(e.cm, i, e.sel.primIndex), r);
                }
                function Xi(e, t, n, r) {
                    Zi(e, Si(t, n), r);
                }
                function Ji(e, t, n) {
                    var r = e.history.done,
                        i = K(r);
                    i && i.ranges ? ((r[r.length - 1] = t), eo(e, t, n)) : Zi(e, t, n);
                }
                function Zi(e, t, n) {
                    eo(e, t, n), Ui(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
                }
                function eo(e, t, n) {
                    (ve(e, 'beforeSelectionChange') || (e.cm && ve(e.cm, 'beforeSelectionChange'))) &&
                        (t = (function (e, t, n) {
                            var r = {
                                ranges: t.ranges,
                                update: function (t) {
                                    this.ranges = [];
                                    for (var n = 0; n < t.length; n++) this.ranges[n] = new ki(st(e, t[n].anchor), st(e, t[n].head));
                                },
                                origin: n && n.origin
                            };
                            return (
                                he(e, 'beforeSelectionChange', e, r),
                                e.cm && he(e.cm, 'beforeSelectionChange', e.cm, r),
                                r.ranges != t.ranges ? Ei(e.cm, r.ranges, r.ranges.length - 1) : t
                            );
                        })(e, t, n));
                    var r = (n && n.bias) || (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    to(e, ro(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || Rr(e.cm);
                }
                function to(e, t) {
                    t.equals(e.sel) ||
                        ((e.sel = t), e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), ge(e.cm)), ln(e, 'cursorActivity', e));
                }
                function no(e) {
                    to(e, ro(e, e.sel, null, !1));
                }
                function ro(e, t, n, r) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var a = t.ranges[o],
                            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            l = oo(e, a.anchor, s && s.anchor, n, r),
                            u = oo(e, a.head, s && s.head, n, r);
                        (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new ki(l, u)));
                    }
                    return i ? Ei(e.cm, i, t.primIndex) : t;
                }
                function io(e, t, n, r, i) {
                    var o = $e(e, t.line);
                    if (o.markedSpans)
                        for (var a = 0; a < o.markedSpans.length; ++a) {
                            var s = o.markedSpans[a],
                                l = s.marker,
                                u = 'selectLeft' in l ? !l.selectLeft : l.inclusiveLeft,
                                c = 'selectRight' in l ? !l.selectRight : l.inclusiveRight;
                            if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                                if (i && (he(l, 'beforeCursorEnter'), l.explicitlyCleared)) {
                                    if (o.markedSpans) {
                                        --a;
                                        continue;
                                    }
                                    break;
                                }
                                if (!l.atomic) continue;
                                if (n) {
                                    var d = l.find(r < 0 ? 1 : -1),
                                        f = void 0;
                                    if (
                                        ((r < 0 ? c : u) && (d = ao(e, d, -r, d && d.line == t.line ? o : null)),
                                        d && d.line == t.line && (f = tt(d, n)) && (r < 0 ? f < 0 : f > 0))
                                    )
                                        return io(e, d, t, r, i);
                                }
                                var p = l.find(r < 0 ? -1 : 1);
                                return (r < 0 ? u : c) && (p = ao(e, p, r, p.line == t.line ? o : null)), p ? io(e, p, t, r, i) : null;
                            }
                        }
                    return t;
                }
                function oo(e, t, n, r, i) {
                    var o = r || 1,
                        a = io(e, t, n, o, i) || (!i && io(e, t, n, o, !0)) || io(e, t, n, -o, i) || (!i && io(e, t, n, -o, !0));
                    return a || ((e.cantEdit = !0), et(e.first, 0));
                }
                function ao(e, t, n, r) {
                    return n < 0 && 0 == t.ch
                        ? t.line > e.first
                            ? st(e, et(t.line - 1))
                            : null
                        : n > 0 && t.ch == (r || $e(e, t.line)).text.length
                        ? t.line < e.first + e.size - 1
                            ? et(t.line + 1, 0)
                            : null
                        : new et(t.line, t.ch + n);
                }
                function so(e) {
                    e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), q);
                }
                function lo(e, t, n) {
                    var r = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function () {
                            return (r.canceled = !0);
                        }
                    };
                    return (
                        n &&
                            (r.update = function (t, n, i, o) {
                                t && (r.from = st(e, t)), n && (r.to = st(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
                            }),
                        he(e, 'beforeChange', e, r),
                        e.cm && he(e.cm, 'beforeChange', e.cm, r),
                        r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin }
                    );
                }
                function uo(e, t, n) {
                    if (e.cm) {
                        if (!e.cm.curOp) return ei(e.cm, uo)(e, t, n);
                        if (e.cm.state.suppressEdits) return;
                    }
                    if (!(ve(e, 'beforeChange') || (e.cm && ve(e.cm, 'beforeChange'))) || (t = lo(e, t, !0))) {
                        var r =
                            wt &&
                            !n &&
                            (function (e, t, n) {
                                var r = null;
                                if (
                                    (e.iter(t.line, n.line + 1, function (e) {
                                        if (e.markedSpans)
                                            for (var t = 0; t < e.markedSpans.length; ++t) {
                                                var n = e.markedSpans[t].marker;
                                                !n.readOnly || (r && -1 != z(r, n)) || (r || (r = [])).push(n);
                                            }
                                    }),
                                    !r)
                                )
                                    return null;
                                for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                                    for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                                        var u = i[l];
                                        if (!(tt(u.to, s.from) < 0 || tt(u.from, s.to) > 0)) {
                                            var c = [l, 1],
                                                d = tt(u.from, s.from),
                                                f = tt(u.to, s.to);
                                            (d < 0 || (!a.inclusiveLeft && !d)) && c.push({ from: u.from, to: s.from }),
                                                (f > 0 || (!a.inclusiveRight && !f)) && c.push({ from: s.to, to: u.to }),
                                                i.splice.apply(i, c),
                                                (l += c.length - 3);
                                        }
                                    }
                                return i;
                            })(e, t.from, t.to);
                        if (r)
                            for (var i = r.length - 1; i >= 0; --i)
                                co(e, {
                                    from: r[i].from,
                                    to: r[i].to,
                                    text: i ? [''] : t.text,
                                    origin: t.origin
                                });
                        else co(e, t);
                    }
                }
                function co(e, t) {
                    if (1 != t.text.length || '' != t.text[0] || 0 != tt(t.from, t.to)) {
                        var n = Ti(e, t);
                        zi(e, t, n, e.cm ? e.cm.curOp.id : NaN), ho(e, t, n, Ot(e, t));
                        var r = [];
                        ji(e, function (e, n) {
                            n || -1 != z(r, e.history) || (yo(e.history, t), r.push(e.history)), ho(e, t, null, Ot(e, t));
                        });
                    }
                }
                function fo(e, t, n) {
                    var r = e.cm && e.cm.state.suppressEdits;
                    if (!r || n) {
                        for (
                            var i, o = e.history, a = e.sel, s = 'undo' == t ? o.done : o.undone, l = 'undo' == t ? o.undone : o.done, u = 0;
                            u < s.length && ((i = s[u]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
                            u++
                        );
                        if (u != s.length) {
                            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                                if (!(i = s.pop()).ranges) {
                                    if (r) return void s.push(i);
                                    break;
                                }
                                if ((qi(i, l), n && !i.equals(e.sel))) return void Zi(e, i, { clearRedo: !1 });
                                a = i;
                            }
                            var c = [];
                            qi(a, l), l.push({ changes: c, generation: o.generation }), (o.generation = i.generation || ++o.maxGeneration);
                            for (
                                var d = ve(e, 'beforeChange') || (e.cm && ve(e.cm, 'beforeChange')),
                                    f = function (n) {
                                        var r = i.changes[n];
                                        if (((r.origin = t), d && !lo(e, r, !1))) return (s.length = 0), {};
                                        c.push(Fi(e, r));
                                        var o = n ? Ti(e, r) : K(s);
                                        ho(e, r, o, Gi(e, r)), !n && e.cm && e.cm.scrollIntoView({ from: r.from, to: Oi(r) });
                                        var a = [];
                                        ji(e, function (e, t) {
                                            t || -1 != z(a, e.history) || (yo(e.history, r), a.push(e.history)), ho(e, r, null, Gi(e, r));
                                        });
                                    },
                                    p = i.changes.length - 1;
                                p >= 0;
                                --p
                            ) {
                                var h = f(p);
                                if (h) return h.v;
                            }
                        }
                    }
                }
                function po(e, t) {
                    if (
                        0 != t &&
                        ((e.first += t),
                        (e.sel = new xi(
                            Y(e.sel.ranges, function (e) {
                                return new ki(et(e.anchor.line + t, e.anchor.ch), et(e.head.line + t, e.head.ch));
                            }),
                            e.sel.primIndex
                        )),
                        e.cm)
                    ) {
                        dr(e.cm, e.first, e.first - t, t);
                        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) fr(e.cm, r, 'gutter');
                    }
                }
                function ho(e, t, n, r) {
                    if (e.cm && !e.cm.curOp) return ei(e.cm, ho)(e, t, n, r);
                    if (t.to.line < e.first) po(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            po(e, i),
                                (t = {
                                    from: et(e.first, 0),
                                    to: et(t.to.line + i, t.to.ch),
                                    text: [K(t.text)],
                                    origin: t.origin
                                });
                        }
                        var o = e.lastLine();
                        t.to.line > o &&
                            (t = {
                                from: t.from,
                                to: et(o, $e(e, o).text.length),
                                text: [t.text[0]],
                                origin: t.origin
                            }),
                            (t.removed = Ve(e, t.from, t.to)),
                            n || (n = Ti(e, t)),
                            e.cm
                                ? (function (e, t, n) {
                                      var r = e.doc,
                                          i = e.display,
                                          o = t.from,
                                          a = t.to,
                                          s = !1,
                                          l = o.line;
                                      e.options.lineWrapping ||
                                          ((l = Qe(Ft($e(r, o.line)))),
                                          r.iter(l, a.line + 1, function (e) {
                                              if (e == i.maxLine) return (s = !0), !0;
                                          })),
                                          r.sel.contains(t.from, t.to) > -1 && ge(e),
                                          Ii(r, t, n, sr(e)),
                                          e.options.lineWrapping ||
                                              (r.iter(l, o.line + t.text.length, function (e) {
                                                  var t = Wt(e);
                                                  t > i.maxLineLength && ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (s = !1));
                                              }),
                                              s && (e.curOp.updateMaxLine = !0)),
                                          (function (e, t) {
                                              if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                                                  for (var n = e.first, r = t - 1; r > n; r--) {
                                                      var i = $e(e, r).stateAfter;
                                                      if (i && (!(i instanceof ut) || r + i.lookAhead < t)) {
                                                          n = r + 1;
                                                          break;
                                                      }
                                                  }
                                                  e.highlightFrontier = Math.min(e.highlightFrontier, n);
                                              }
                                          })(r, o.line),
                                          ri(e, 400);
                                      var u = t.text.length - (a.line - o.line) - 1;
                                      t.full
                                          ? dr(e)
                                          : o.line != a.line || 1 != t.text.length || Mi(e.doc, t)
                                          ? dr(e, o.line, a.line + 1, u)
                                          : fr(e, o.line, 'text');
                                      var c = ve(e, 'changes'),
                                          d = ve(e, 'change');
                                      if (d || c) {
                                          var f = {
                                              from: o,
                                              to: a,
                                              text: t.text,
                                              removed: t.removed,
                                              origin: t.origin
                                          };
                                          d && ln(e, 'change', e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
                                      }
                                      e.display.selForContextMenu = null;
                                  })(e.cm, t, r)
                                : Ii(e, t, r),
                            eo(e, n, q),
                            e.cantEdit && oo(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
                    }
                }
                function mo(e, t, n, r, i) {
                    var o;
                    r || (r = n),
                        tt(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
                        'string' == typeof t && (t = e.splitLines(t)),
                        uo(e, { from: n, to: r, text: t, origin: i });
                }
                function go(e, t, n, r) {
                    n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
                }
                function vo(e, t, n, r) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            a = !0;
                        if (o.ranges) {
                            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                            for (var s = 0; s < o.ranges.length; s++) go(o.ranges[s].anchor, t, n, r), go(o.ranges[s].head, t, n, r);
                        } else {
                            for (var l = 0; l < o.changes.length; ++l) {
                                var u = o.changes[l];
                                if (n < u.from.line) (u.from = et(u.from.line + r, u.from.ch)), (u.to = et(u.to.line + r, u.to.ch));
                                else if (t <= u.to.line) {
                                    a = !1;
                                    break;
                                }
                            }
                            a || (e.splice(0, i + 1), (i = 0));
                        }
                    }
                }
                function yo(e, t) {
                    var n = t.from.line,
                        r = t.to.line,
                        i = t.text.length - (r - n) - 1;
                    vo(e.done, n, r, i), vo(e.undone, n, r, i);
                }
                function bo(e, t, n, r) {
                    var i = t,
                        o = t;
                    return 'number' == typeof t ? (o = $e(e, at(e, t))) : (i = Qe(t)), null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o);
                }
                function _o(e) {
                    (this.lines = e), (this.parent = null);
                    for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
                    this.height = t;
                }
                function wo(e) {
                    this.children = e;
                    for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                        var i = e[r];
                        (t += i.chunkSize()), (n += i.height), (i.parent = this);
                    }
                    (this.size = t), (this.height = n), (this.parent = null);
                }
                (ki.prototype.from = function () {
                    return ot(this.anchor, this.head);
                }),
                    (ki.prototype.to = function () {
                        return it(this.anchor, this.head);
                    }),
                    (ki.prototype.empty = function () {
                        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
                    }),
                    (_o.prototype = {
                        chunkSize: function () {
                            return this.lines.length;
                        },
                        removeInner: function (e, t) {
                            for (var n = e, r = e + t; n < r; ++n) {
                                var i = this.lines[n];
                                (this.height -= i.height), Vt(i), ln(i, 'delete');
                            }
                            this.lines.splice(e, t);
                        },
                        collapse: function (e) {
                            e.push.apply(e, this.lines);
                        },
                        insertInner: function (e, t, n) {
                            (this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                            for (var r = 0; r < t.length; ++r) t[r].parent = this;
                        },
                        iterN: function (e, t, n) {
                            for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
                        }
                    }),
                    (wo.prototype = {
                        chunkSize: function () {
                            return this.size;
                        },
                        removeInner: function (e, t) {
                            this.size -= t;
                            for (var n = 0; n < this.children.length; ++n) {
                                var r = this.children[n],
                                    i = r.chunkSize();
                                if (e < i) {
                                    var o = Math.min(t, i - e),
                                        a = r.height;
                                    if (
                                        (r.removeInner(e, o),
                                        (this.height -= a - r.height),
                                        i == o && (this.children.splice(n--, 1), (r.parent = null)),
                                        0 == (t -= o))
                                    )
                                        break;
                                    e = 0;
                                } else e -= i;
                            }
                            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof _o))) {
                                var s = [];
                                this.collapse(s), (this.children = [new _o(s)]), (this.children[0].parent = this);
                            }
                        },
                        collapse: function (e) {
                            for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
                        },
                        insertInner: function (e, t, n) {
                            (this.size += t.length), (this.height += n);
                            for (var r = 0; r < this.children.length; ++r) {
                                var i = this.children[r],
                                    o = i.chunkSize();
                                if (e <= o) {
                                    if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                                        for (var a = (i.lines.length % 25) + 25, s = a; s < i.lines.length; ) {
                                            var l = new _o(i.lines.slice(s, (s += 25)));
                                            (i.height -= l.height), this.children.splice(++r, 0, l), (l.parent = this);
                                        }
                                        (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                                    }
                                    break;
                                }
                                e -= o;
                            }
                        },
                        maybeSpill: function () {
                            if (!(this.children.length <= 10)) {
                                var e = this;
                                do {
                                    var t = new wo(e.children.splice(e.children.length - 5, 5));
                                    if (e.parent) {
                                        (e.size -= t.size), (e.height -= t.height);
                                        var n = z(e.parent.children, e);
                                        e.parent.children.splice(n + 1, 0, t);
                                    } else {
                                        var r = new wo(e.children);
                                        (r.parent = e), (e.children = [r, t]), (e = r);
                                    }
                                    t.parent = e.parent;
                                } while (e.children.length > 10);
                                e.parent.maybeSpill();
                            }
                        },
                        iterN: function (e, t, n) {
                            for (var r = 0; r < this.children.length; ++r) {
                                var i = this.children[r],
                                    o = i.chunkSize();
                                if (e < o) {
                                    var a = Math.min(t, o - e);
                                    if (i.iterN(e, a, n)) return !0;
                                    if (0 == (t -= a)) break;
                                    e = 0;
                                } else e -= o;
                            }
                        }
                    });
                var xo = function (e, t, n) {
                    if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
                    (this.doc = e), (this.node = t);
                };
                function ko(e, t, n) {
                    Ht(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Pr(e, n);
                }
                (xo.prototype.clear = function () {
                    var e = this.doc.cm,
                        t = this.line.widgets,
                        n = this.line,
                        r = Qe(n);
                    if (null != r && t) {
                        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                        t.length || (n.widgets = null);
                        var o = wn(this);
                        Ye(n, Math.max(0, n.height - o)),
                            e &&
                                (Zr(e, function () {
                                    ko(e, n, -o), fr(e, r, 'widget');
                                }),
                                ln(e, 'lineWidgetCleared', e, this, r));
                    }
                }),
                    (xo.prototype.changed = function () {
                        var e = this,
                            t = this.height,
                            n = this.doc.cm,
                            r = this.line;
                        this.height = null;
                        var i = wn(this) - t;
                        i &&
                            (Ut(this.doc, r) || Ye(r, r.height + i),
                            n &&
                                Zr(n, function () {
                                    (n.curOp.forceUpdate = !0), ko(n, r, i), ln(n, 'lineWidgetChanged', n, e, Qe(r));
                                }));
                    }),
                    ye(xo);
                var Eo = 0,
                    So = function (e, t) {
                        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Eo);
                    };
                function Oo(e, t, n, r, i) {
                    if (r && r.shared)
                        return (function (e, t, n, r, i) {
                            (r = N(r)).shared = !1;
                            var o = [Oo(e, t, n, r, i)],
                                a = o[0],
                                s = r.widgetNode;
                            return (
                                ji(e, function (e) {
                                    s && (r.widgetNode = s.cloneNode(!0)), o.push(Oo(e, st(e, t), st(e, n), r, i));
                                    for (var l = 0; l < e.linked.length; ++l) if (e.linked[l].isParent) return;
                                    a = K(o);
                                }),
                                new Co(o, a)
                            );
                        })(e, t, n, r, i);
                    if (e.cm && !e.cm.curOp) return ei(e.cm, Oo)(e, t, n, r, i);
                    var o = new So(e, i),
                        a = tt(t, n);
                    if ((r && N(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty))) return o;
                    if (
                        (o.replacedWith &&
                            ((o.collapsed = !0),
                            (o.widgetNode = P('span', [o.replacedWith], 'CodeMirror-widget')),
                            r.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
                            r.insertLeft && (o.widgetNode.insertLeft = !0)),
                        o.collapsed)
                    ) {
                        if (Nt(e, t.line, t, n, o) || (t.line != n.line && Nt(e, n.line, t, n, o)))
                            throw new Error('Inserting collapsed marker partially overlapping an existing one');
                        xt = !0;
                    }
                    o.addToHistory && zi(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
                    var s,
                        l = t.line,
                        u = e.cm;
                    if (
                        (e.iter(l, n.line + 1, function (e) {
                            u && o.collapsed && !u.options.lineWrapping && Ft(e) == u.display.maxLine && (s = !0),
                                o.collapsed && l != t.line && Ye(e, 0),
                                (function (e, t) {
                                    (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
                                })(e, new kt(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null)),
                                ++l;
                        }),
                        o.collapsed &&
                            e.iter(t.line, n.line + 1, function (t) {
                                Ut(e, t) && Ye(t, 0);
                            }),
                        o.clearOnEnter &&
                            de(o, 'beforeCursorEnter', function () {
                                return o.clear();
                            }),
                        o.readOnly && ((wt = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                        o.collapsed && ((o.id = ++Eo), (o.atomic = !0)),
                        u)
                    ) {
                        if ((s && (u.curOp.updateMaxLine = !0), o.collapsed)) dr(u, t.line, n.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                            for (var c = t.line; c <= n.line; c++) fr(u, c, 'text');
                        o.atomic && no(u.doc), ln(u, 'markerAdded', u, o);
                    }
                    return o;
                }
                (So.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        var e = this.doc.cm,
                            t = e && !e.curOp;
                        if ((t && $r(e), ve(this, 'clear'))) {
                            var n = this.find();
                            n && ln(this, 'clear', n.from, n.to);
                        }
                        for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                            var a = this.lines[o],
                                s = Et(a.markedSpans, this);
                            e && !this.collapsed ? fr(e, Qe(a), 'text') : e && (null != s.to && (i = Qe(a)), null != s.from && (r = Qe(a))),
                                (a.markedSpans = St(a.markedSpans, s)),
                                null == s.from && this.collapsed && !Ut(this.doc, a) && e && Ye(a, rr(e.display));
                        }
                        if (e && this.collapsed && !e.options.lineWrapping)
                            for (var l = 0; l < this.lines.length; ++l) {
                                var u = Ft(this.lines[l]),
                                    c = Wt(u);
                                c > e.display.maxLineLength && ((e.display.maxLine = u), (e.display.maxLineLength = c), (e.display.maxLineChanged = !0));
                            }
                        null != r && e && this.collapsed && dr(e, r, i + 1),
                            (this.lines.length = 0),
                            (this.explicitlyCleared = !0),
                            this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && no(e.doc)),
                            e && ln(e, 'markerCleared', e, this, r, i),
                            t && Vr(e),
                            this.parent && this.parent.clear();
                    }
                }),
                    (So.prototype.find = function (e, t) {
                        var n, r;
                        null == e && 'bookmark' == this.type && (e = 1);
                        for (var i = 0; i < this.lines.length; ++i) {
                            var o = this.lines[i],
                                a = Et(o.markedSpans, this);
                            if (null != a.from && ((n = et(t ? o : Qe(o), a.from)), -1 == e)) return n;
                            if (null != a.to && ((r = et(t ? o : Qe(o), a.to)), 1 == e)) return r;
                        }
                        return n && { from: n, to: r };
                    }),
                    (So.prototype.changed = function () {
                        var e = this,
                            t = this.find(-1, !0),
                            n = this,
                            r = this.doc.cm;
                        t &&
                            r &&
                            Zr(r, function () {
                                var i = t.line,
                                    o = Qe(t.line),
                                    a = Rn(r, o);
                                if (
                                    (a && (Fn(a), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                                    (r.curOp.updateMaxLine = !0),
                                    !Ut(n.doc, i) && null != n.height)
                                ) {
                                    var s = n.height;
                                    n.height = null;
                                    var l = wn(n) - s;
                                    l && Ye(i, i.height + l);
                                }
                                ln(r, 'markerChanged', r, e);
                            });
                    }),
                    (So.prototype.attachLine = function (e) {
                        if (!this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers && -1 != z(t.maybeHiddenMarkers, this)) ||
                                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
                        }
                        this.lines.push(e);
                    }),
                    (So.prototype.detachLine = function (e) {
                        if ((this.lines.splice(z(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
                        }
                    }),
                    ye(So);
                var Co = function (e, t) {
                    (this.markers = e), (this.primary = t);
                    for (var n = 0; n < e.length; ++n) e[n].parent = this;
                };
                function To(e) {
                    return e.findMarks(et(e.first, 0), e.clipPos(et(e.lastLine())), function (e) {
                        return e.parent;
                    });
                }
                function Ao(e) {
                    for (
                        var t = function (t) {
                                var n = e[t],
                                    r = [n.primary.doc];
                                ji(n.primary.doc, function (e) {
                                    return r.push(e);
                                });
                                for (var i = 0; i < n.markers.length; i++) {
                                    var o = n.markers[i];
                                    -1 == z(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
                                }
                            },
                            n = 0;
                        n < e.length;
                        n++
                    )
                        t(n);
                }
                (Co.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        ln(this, 'clear');
                    }
                }),
                    (Co.prototype.find = function (e, t) {
                        return this.primary.find(e, t);
                    }),
                    ye(Co);
                var Po = 0,
                    Ro = function (e, t, n, r, i) {
                        if (!(this instanceof Ro)) return new Ro(e, t, n, r, i);
                        null == n && (n = 0),
                            wo.call(this, [new _o([new $t('', null)])]),
                            (this.first = n),
                            (this.scrollTop = this.scrollLeft = 0),
                            (this.cantEdit = !1),
                            (this.cleanGeneration = 1),
                            (this.modeFrontier = this.highlightFrontier = n);
                        var o = et(n, 0);
                        (this.sel = Si(o)),
                            (this.history = new Ni(null)),
                            (this.id = ++Po),
                            (this.modeOption = t),
                            (this.lineSep = r),
                            (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
                            (this.extend = !1),
                            'string' == typeof e && (e = this.splitLines(e)),
                            Ii(this, { from: o, to: o, text: e }),
                            Zi(this, Si(o), q);
                    };
                (Ro.prototype = X(wo.prototype, {
                    constructor: Ro,
                    iter: function (e, t, n) {
                        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
                    },
                    insert: function (e, t) {
                        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                        this.insertInner(e - this.first, t, n);
                    },
                    remove: function (e, t) {
                        this.removeInner(e - this.first, t);
                    },
                    getValue: function (e) {
                        var t = Ke(this, this.first, this.first + this.size);
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    setValue: ni(function (e) {
                        var t = et(this.first, 0),
                            n = this.first + this.size - 1;
                        uo(
                            this,
                            {
                                from: t,
                                to: et(n, $e(this, n).text.length),
                                text: this.splitLines(e),
                                origin: 'setValue',
                                full: !0
                            },
                            !0
                        ),
                            this.cm && Mr(this.cm, 0, 0),
                            Zi(this, Si(t), q);
                    }),
                    replaceRange: function (e, t, n, r) {
                        mo(this, e, (t = st(this, t)), (n = n ? st(this, n) : t), r);
                    },
                    getRange: function (e, t, n) {
                        var r = Ve(this, st(this, e), st(this, t));
                        return !1 === n ? r : r.join(n || this.lineSeparator());
                    },
                    getLine: function (e) {
                        var t = this.getLineHandle(e);
                        return t && t.text;
                    },
                    getLineHandle: function (e) {
                        if (Je(this, e)) return $e(this, e);
                    },
                    getLineNumber: function (e) {
                        return Qe(e);
                    },
                    getLineHandleVisualStart: function (e) {
                        return 'number' == typeof e && (e = $e(this, e)), Ft(e);
                    },
                    lineCount: function () {
                        return this.size;
                    },
                    firstLine: function () {
                        return this.first;
                    },
                    lastLine: function () {
                        return this.first + this.size - 1;
                    },
                    clipPos: function (e) {
                        return st(this, e);
                    },
                    getCursor: function (e) {
                        var t = this.sel.primary();
                        return null == e || 'head' == e ? t.head : 'anchor' == e ? t.anchor : 'end' == e || 'to' == e || !1 === e ? t.to() : t.from();
                    },
                    listSelections: function () {
                        return this.sel.ranges;
                    },
                    somethingSelected: function () {
                        return this.sel.somethingSelected();
                    },
                    setCursor: ni(function (e, t, n) {
                        Xi(this, st(this, 'number' == typeof e ? et(e, t || 0) : e), null, n);
                    }),
                    setSelection: ni(function (e, t, n) {
                        Xi(this, st(this, e), st(this, t || e), n);
                    }),
                    extendSelection: ni(function (e, t, n) {
                        Ki(this, st(this, e), t && st(this, t), n);
                    }),
                    extendSelections: ni(function (e, t) {
                        Yi(this, lt(this, e), t);
                    }),
                    extendSelectionsBy: ni(function (e, t) {
                        Yi(this, lt(this, Y(this.sel.ranges, e)), t);
                    }),
                    setSelections: ni(function (e, t, n) {
                        if (e.length) {
                            for (var r = [], i = 0; i < e.length; i++) r[i] = new ki(st(this, e[i].anchor), st(this, e[i].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Zi(this, Ei(this.cm, r, t), n);
                        }
                    }),
                    addSelection: ni(function (e, t, n) {
                        var r = this.sel.ranges.slice(0);
                        r.push(new ki(st(this, e), st(this, t || e))), Zi(this, Ei(this.cm, r, r.length - 1), n);
                    }),
                    getSelection: function (e) {
                        for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                            var i = Ve(this, n[r].from(), n[r].to());
                            t = t ? t.concat(i) : i;
                        }
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    getSelections: function (e) {
                        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                            var i = Ve(this, n[r].from(), n[r].to());
                            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
                        }
                        return t;
                    },
                    replaceSelection: function (e, t, n) {
                        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                        this.replaceSelections(r, t, n || '+input');
                    },
                    replaceSelections: ni(function (e, t, n) {
                        for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                            var a = i.ranges[o];
                            r[o] = {
                                from: a.from(),
                                to: a.to(),
                                text: this.splitLines(e[o]),
                                origin: n
                            };
                        }
                        for (
                            var s =
                                    t &&
                                    'end' != t &&
                                    (function (e, t, n) {
                                        for (var r = [], i = et(e.first, 0), o = i, a = 0; a < t.length; a++) {
                                            var s = t[a],
                                                l = Ai(s.from, i, o),
                                                u = Ai(Oi(s), i, o);
                                            if (((i = s.to), (o = u), 'around' == n)) {
                                                var c = e.sel.ranges[a],
                                                    d = tt(c.head, c.anchor) < 0;
                                                r[a] = new ki(d ? u : l, d ? l : u);
                                            } else r[a] = new ki(l, l);
                                        }
                                        return new xi(r, e.sel.primIndex);
                                    })(this, r, t),
                                l = r.length - 1;
                            l >= 0;
                            l--
                        )
                            uo(this, r[l]);
                        s ? Ji(this, s) : this.cm && Rr(this.cm);
                    }),
                    undo: ni(function () {
                        fo(this, 'undo');
                    }),
                    redo: ni(function () {
                        fo(this, 'redo');
                    }),
                    undoSelection: ni(function () {
                        fo(this, 'undo', !0);
                    }),
                    redoSelection: ni(function () {
                        fo(this, 'redo', !0);
                    }),
                    setExtending: function (e) {
                        this.extend = e;
                    },
                    getExtending: function () {
                        return this.extend;
                    },
                    historySize: function () {
                        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                        return { undo: t, redo: n };
                    },
                    clearHistory: function () {
                        var e = this;
                        (this.history = new Ni(this.history.maxGeneration)),
                            ji(
                                this,
                                function (t) {
                                    return (t.history = e.history);
                                },
                                !0
                            );
                    },
                    markClean: function () {
                        this.cleanGeneration = this.changeGeneration(!0);
                    },
                    changeGeneration: function (e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
                    },
                    isClean: function (e) {
                        return this.history.generation == (e || this.cleanGeneration);
                    },
                    getHistory: function () {
                        return {
                            done: $i(this.history.done),
                            undone: $i(this.history.undone)
                        };
                    },
                    setHistory: function (e) {
                        var t = (this.history = new Ni(this.history.maxGeneration));
                        (t.done = $i(e.done.slice(0), null, !0)), (t.undone = $i(e.undone.slice(0), null, !0));
                    },
                    setGutterMarker: ni(function (e, t, n) {
                        return bo(this, e, 'gutter', function (e) {
                            var r = e.gutterMarkers || (e.gutterMarkers = {});
                            return (r[t] = n), !n && te(r) && (e.gutterMarkers = null), !0;
                        });
                    }),
                    clearGutter: ni(function (e) {
                        var t = this;
                        this.iter(function (n) {
                            n.gutterMarkers &&
                                n.gutterMarkers[e] &&
                                bo(t, n, 'gutter', function () {
                                    return (n.gutterMarkers[e] = null), te(n.gutterMarkers) && (n.gutterMarkers = null), !0;
                                });
                        });
                    }),
                    lineInfo: function (e) {
                        var t;
                        if ('number' == typeof e) {
                            if (!Je(this, e)) return null;
                            if (((t = e), !(e = $e(this, e)))) return null;
                        } else if (null == (t = Qe(e))) return null;
                        return {
                            line: t,
                            handle: e,
                            text: e.text,
                            gutterMarkers: e.gutterMarkers,
                            textClass: e.textClass,
                            bgClass: e.bgClass,
                            wrapClass: e.wrapClass,
                            widgets: e.widgets
                        };
                    },
                    addLineClass: ni(function (e, t, n) {
                        return bo(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                            var r = 'text' == t ? 'textClass' : 'background' == t ? 'bgClass' : 'gutter' == t ? 'gutterClass' : 'wrapClass';
                            if (e[r]) {
                                if (E(n).test(e[r])) return !1;
                                e[r] += ' ' + n;
                            } else e[r] = n;
                            return !0;
                        });
                    }),
                    removeLineClass: ni(function (e, t, n) {
                        return bo(this, e, 'gutter' == t ? 'gutter' : 'class', function (e) {
                            var r = 'text' == t ? 'textClass' : 'background' == t ? 'bgClass' : 'gutter' == t ? 'gutterClass' : 'wrapClass',
                                i = e[r];
                            if (!i) return !1;
                            if (null == n) e[r] = null;
                            else {
                                var o = i.match(E(n));
                                if (!o) return !1;
                                var a = o.index + o[0].length;
                                e[r] = i.slice(0, o.index) + (o.index && a != i.length ? ' ' : '') + i.slice(a) || null;
                            }
                            return !0;
                        });
                    }),
                    addLineWidget: ni(function (e, t, n) {
                        return (function (e, t, n, r) {
                            var i = new xo(e, n, r),
                                o = e.cm;
                            return (
                                o && i.noHScroll && (o.display.alignWidgets = !0),
                                bo(e, t, 'widget', function (t) {
                                    var n = t.widgets || (t.widgets = []);
                                    if (
                                        (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length, Math.max(0, i.insertAt)), 0, i),
                                        (i.line = t),
                                        o && !Ut(e, t))
                                    ) {
                                        var r = Ht(t) < e.scrollTop;
                                        Ye(t, t.height + wn(i)), r && Pr(o, i.height), (o.curOp.forceUpdate = !0);
                                    }
                                    return !0;
                                }),
                                o && ln(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : Qe(t)),
                                i
                            );
                        })(this, e, t, n);
                    }),
                    removeLineWidget: function (e) {
                        e.clear();
                    },
                    markText: function (e, t, n) {
                        return Oo(this, st(this, e), st(this, t), n, (n && n.type) || 'range');
                    },
                    setBookmark: function (e, t) {
                        var n = {
                            replacedWith: t && (null == t.nodeType ? t.widget : t),
                            insertLeft: t && t.insertLeft,
                            clearWhenEmpty: !1,
                            shared: t && t.shared,
                            handleMouseEvents: t && t.handleMouseEvents
                        };
                        return Oo(this, (e = st(this, e)), e, n, 'bookmark');
                    },
                    findMarksAt: function (e) {
                        var t = [],
                            n = $e(this, (e = st(this, e)).line).markedSpans;
                        if (n)
                            for (var r = 0; r < n.length; ++r) {
                                var i = n[r];
                                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
                            }
                        return t;
                    },
                    findMarks: function (e, t, n) {
                        (e = st(this, e)), (t = st(this, t));
                        var r = [],
                            i = e.line;
                        return (
                            this.iter(e.line, t.line + 1, function (o) {
                                var a = o.markedSpans;
                                if (a)
                                    for (var s = 0; s < a.length; s++) {
                                        var l = a[s];
                                        (null != l.to && i == e.line && e.ch >= l.to) ||
                                            (null == l.from && i != e.line) ||
                                            (null != l.from && i == t.line && l.from >= t.ch) ||
                                            (n && !n(l.marker)) ||
                                            r.push(l.marker.parent || l.marker);
                                    }
                                ++i;
                            }),
                            r
                        );
                    },
                    getAllMarks: function () {
                        var e = [];
                        return (
                            this.iter(function (t) {
                                var n = t.markedSpans;
                                if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
                            }),
                            e
                        );
                    },
                    posFromIndex: function (e) {
                        var t,
                            n = this.first,
                            r = this.lineSeparator().length;
                        return (
                            this.iter(function (i) {
                                var o = i.text.length + r;
                                if (o > e) return (t = e), !0;
                                (e -= o), ++n;
                            }),
                            st(this, et(n, t))
                        );
                    },
                    indexFromPos: function (e) {
                        var t = (e = st(this, e)).ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var n = this.lineSeparator().length;
                        return (
                            this.iter(this.first, e.line, function (e) {
                                t += e.text.length + n;
                            }),
                            t
                        );
                    },
                    copy: function (e) {
                        var t = new Ro(Ke(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                        return (
                            (t.scrollTop = this.scrollTop),
                            (t.scrollLeft = this.scrollLeft),
                            (t.sel = this.sel),
                            (t.extend = !1),
                            e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
                            t
                        );
                    },
                    linkedDoc: function (e) {
                        e || (e = {});
                        var t = this.first,
                            n = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                        var r = new Ro(Ke(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                        return (
                            e.sharedHist && (r.history = this.history),
                            (this.linked || (this.linked = [])).push({
                                doc: r,
                                sharedHist: e.sharedHist
                            }),
                            (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                            (function (e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n],
                                        i = r.find(),
                                        o = e.clipPos(i.from),
                                        a = e.clipPos(i.to);
                                    if (tt(o, a)) {
                                        var s = Oo(e, o, a, r.primary, r.primary.type);
                                        r.markers.push(s), (s.parent = r);
                                    }
                                }
                            })(r, To(this)),
                            r
                        );
                    },
                    unlinkDoc: function (e) {
                        if ((e instanceof Ca && (e = e.doc), this.linked))
                            for (var t = 0; t < this.linked.length; ++t)
                                if (this.linked[t].doc == e) {
                                    this.linked.splice(t, 1), e.unlinkDoc(this), Ao(To(this));
                                    break;
                                }
                        if (e.history == this.history) {
                            var n = [e.id];
                            ji(
                                e,
                                function (e) {
                                    return n.push(e.id);
                                },
                                !0
                            ),
                                (e.history = new Ni(null)),
                                (e.history.done = $i(this.history.done, n)),
                                (e.history.undone = $i(this.history.undone, n));
                        }
                    },
                    iterLinkedDocs: function (e) {
                        ji(this, e);
                    },
                    getMode: function () {
                        return this.mode;
                    },
                    getEditor: function () {
                        return this.cm;
                    },
                    splitLines: function (e) {
                        return this.lineSep ? e.split(this.lineSep) : Re(e);
                    },
                    lineSeparator: function () {
                        return this.lineSep || '\n';
                    },
                    setDirection: ni(function (e) {
                        var t;
                        'rtl' != e && (e = 'ltr'),
                            e != this.direction &&
                                ((this.direction = e),
                                this.iter(function (e) {
                                    return (e.order = null);
                                }),
                                this.cm &&
                                    Zr((t = this.cm), function () {
                                        Di(t), dr(t);
                                    }));
                    })
                })),
                    (Ro.prototype.eachLine = Ro.prototype.iter);
                var Mo = 0;
                function Io(e) {
                    var t = this;
                    if ((jo(t), !me(t, e) && !xn(t.display, e))) {
                        be(e), a && (Mo = +new Date());
                        var n = ur(t, e, !0),
                            r = e.dataTransfer.files;
                        if (n && !t.isReadOnly())
                            if (r && r.length && window.FileReader && window.File)
                                for (
                                    var i = r.length,
                                        o = Array(i),
                                        s = 0,
                                        l = function () {
                                            ++s == i &&
                                                ei(t, function () {
                                                    var e = {
                                                        from: (n = st(t.doc, n)),
                                                        to: n,
                                                        text: t.doc.splitLines(
                                                            o
                                                                .filter(function (e) {
                                                                    return null != e;
                                                                })
                                                                .join(t.doc.lineSeparator())
                                                        ),
                                                        origin: 'paste'
                                                    };
                                                    uo(t.doc, e), Ji(t.doc, Si(st(t.doc, n), st(t.doc, Oi(e))));
                                                })();
                                        },
                                        u = function (e, n) {
                                            if (t.options.allowDropFileTypes && -1 == z(t.options.allowDropFileTypes, e.type)) l();
                                            else {
                                                var r = new FileReader();
                                                (r.onerror = function () {
                                                    return l();
                                                }),
                                                    (r.onload = function () {
                                                        var e = r.result;
                                                        /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), l();
                                                    }),
                                                    r.readAsText(e);
                                            }
                                        },
                                        c = 0;
                                    c < r.length;
                                    c++
                                )
                                    u(r[c], c);
                            else {
                                if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                                    return (
                                        t.state.draggingText(e),
                                        void setTimeout(function () {
                                            return t.display.input.focus();
                                        }, 20)
                                    );
                                try {
                                    var d = e.dataTransfer.getData('Text');
                                    if (d) {
                                        var f;
                                        if ((t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()), eo(t.doc, Si(n, n)), f))
                                            for (var p = 0; p < f.length; ++p) mo(t.doc, '', f[p].anchor, f[p].head, 'drag');
                                        t.replaceSelection(d, 'around', 'paste'), t.display.input.focus();
                                    }
                                } catch (e) {}
                            }
                    }
                }
                function jo(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
                }
                function Lo(e) {
                    if (document.getElementsByClassName) {
                        for (var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0; r < t.length; r++) {
                            var i = t[r].CodeMirror;
                            i && n.push(i);
                        }
                        n.length &&
                            n[0].operation(function () {
                                for (var t = 0; t < n.length; t++) e(n[t]);
                            });
                    }
                }
                var Do = !1;
                function No() {
                    var e;
                    Do ||
                        (de(window, 'resize', function () {
                            null == e &&
                                (e = setTimeout(function () {
                                    (e = null), Lo(Fo);
                                }, 100));
                        }),
                        de(window, 'blur', function () {
                            return Lo(Sr);
                        }),
                        (Do = !0));
                }
                function Fo(e) {
                    var t = e.display;
                    (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
                }
                for (
                    var Bo = {
                            3: 'Pause',
                            8: 'Backspace',
                            9: 'Tab',
                            13: 'Enter',
                            16: 'Shift',
                            17: 'Ctrl',
                            18: 'Alt',
                            19: 'Pause',
                            20: 'CapsLock',
                            27: 'Esc',
                            32: 'Space',
                            33: 'PageUp',
                            34: 'PageDown',
                            35: 'End',
                            36: 'Home',
                            37: 'Left',
                            38: 'Up',
                            39: 'Right',
                            40: 'Down',
                            44: 'PrintScrn',
                            45: 'Insert',
                            46: 'Delete',
                            59: ';',
                            61: '=',
                            91: 'Mod',
                            92: 'Mod',
                            93: 'Mod',
                            106: '*',
                            107: '=',
                            109: '-',
                            110: '.',
                            111: '/',
                            145: 'ScrollLock',
                            173: '-',
                            186: ';',
                            187: '=',
                            188: ',',
                            189: '-',
                            190: '.',
                            191: '/',
                            192: '`',
                            219: '[',
                            220: '\\',
                            221: ']',
                            222: "'",
                            224: 'Mod',
                            63232: 'Up',
                            63233: 'Down',
                            63234: 'Left',
                            63235: 'Right',
                            63272: 'Delete',
                            63273: 'Home',
                            63275: 'End',
                            63276: 'PageUp',
                            63277: 'PageDown',
                            63302: 'Insert'
                        },
                        zo = 0;
                    zo < 10;
                    zo++
                )
                    Bo[zo + 48] = Bo[zo + 96] = String(zo);
                for (var Uo = 65; Uo <= 90; Uo++) Bo[Uo] = String.fromCharCode(Uo);
                for (var qo = 1; qo <= 12; qo++) Bo[qo + 111] = Bo[qo + 63235] = 'F' + qo;
                var Ho = {};
                function Wo(e) {
                    var t,
                        n,
                        r,
                        i,
                        o = e.split(/-(?!$)/);
                    e = o[o.length - 1];
                    for (var a = 0; a < o.length - 1; a++) {
                        var s = o[a];
                        if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                        else if (/^a(lt)?$/i.test(s)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                        else {
                            if (!/^s(hift)?$/i.test(s)) throw new Error('Unrecognized modifier name: ' + s);
                            r = !0;
                        }
                    }
                    return t && (e = 'Alt-' + e), n && (e = 'Ctrl-' + e), i && (e = 'Cmd-' + e), r && (e = 'Shift-' + e), e;
                }
                function Go(e) {
                    var t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                            if ('...' == r) {
                                delete e[n];
                                continue;
                            }
                            for (var i = Y(n.split(' '), Wo), o = 0; o < i.length; o++) {
                                var a = void 0,
                                    s = void 0;
                                o == i.length - 1 ? ((s = i.join(' ')), (a = r)) : ((s = i.slice(0, o + 1).join(' ')), (a = '...'));
                                var l = t[s];
                                if (l) {
                                    if (l != a) throw new Error('Inconsistent bindings for ' + s);
                                } else t[s] = a;
                            }
                            delete e[n];
                        }
                    for (var u in t) e[u] = t[u];
                    return e;
                }
                function $o(e, t, n, r) {
                    var i = (t = Qo(t)).call ? t.call(e, r) : t[e];
                    if (!1 === i) return 'nothing';
                    if ('...' === i) return 'multi';
                    if (null != i && n(i)) return 'handled';
                    if (t.fallthrough) {
                        if ('[object Array]' != Object.prototype.toString.call(t.fallthrough)) return $o(e, t.fallthrough, n, r);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var a = $o(e, t.fallthrough[o], n, r);
                            if (a) return a;
                        }
                    }
                }
                function Vo(e) {
                    var t = 'string' == typeof e ? e : Bo[e.keyCode];
                    return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
                }
                function Ko(e, t, n) {
                    var r = e;
                    return (
                        t.altKey && 'Alt' != r && (e = 'Alt-' + e),
                        (x ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
                        (x ? t.ctrlKey : t.metaKey) && 'Mod' != r && (e = 'Cmd-' + e),
                        !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
                        e
                    );
                }
                function Yo(e, t) {
                    if (d && 34 == e.keyCode && e.char) return !1;
                    var n = Bo[e.keyCode];
                    return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Ko(n, e, t));
                }
                function Qo(e) {
                    return 'string' == typeof e ? Ho[e] : e;
                }
                function Xo(e, t) {
                    for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                        for (var o = t(n[i]); r.length && tt(o.from, K(r).to) <= 0; ) {
                            var a = r.pop();
                            if (tt(a.from, o.from) < 0) {
                                o.from = a.from;
                                break;
                            }
                        }
                        r.push(o);
                    }
                    Zr(e, function () {
                        for (var t = r.length - 1; t >= 0; t--) mo(e.doc, '', r[t].from, r[t].to, '+delete');
                        Rr(e);
                    });
                }
                function Jo(e, t, n) {
                    var r = ie(e.text, t + n, n);
                    return r < 0 || r > e.text.length ? null : r;
                }
                function Zo(e, t, n) {
                    var r = Jo(e, t.ch, n);
                    return null == r ? null : new et(t.line, r, n < 0 ? 'after' : 'before');
                }
                function ea(e, t, n, r, i) {
                    if (e) {
                        'rtl' == t.doc.direction && (i = -i);
                        var o = ue(n, t.doc.direction);
                        if (o) {
                            var a,
                                s = i < 0 ? K(o) : o[0],
                                l = i < 0 == (1 == s.level) ? 'after' : 'before';
                            if (s.level > 0 || 'rtl' == t.doc.direction) {
                                var u = Mn(t, n);
                                a = i < 0 ? n.text.length - 1 : 0;
                                var c = In(t, u, a).top;
                                (a = oe(
                                    function (e) {
                                        return In(t, u, e).top == c;
                                    },
                                    i < 0 == (1 == s.level) ? s.from : s.to - 1,
                                    a
                                )),
                                    'before' == l && (a = Jo(n, a, 1));
                            } else a = i < 0 ? s.to : s.from;
                            return new et(r, a, l);
                        }
                    }
                    return new et(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
                }
                (Ho.basic = {
                    Left: 'goCharLeft',
                    Right: 'goCharRight',
                    Up: 'goLineUp',
                    Down: 'goLineDown',
                    End: 'goLineEnd',
                    Home: 'goLineStartSmart',
                    PageUp: 'goPageUp',
                    PageDown: 'goPageDown',
                    Delete: 'delCharAfter',
                    Backspace: 'delCharBefore',
                    'Shift-Backspace': 'delCharBefore',
                    Tab: 'defaultTab',
                    'Shift-Tab': 'indentAuto',
                    Enter: 'newlineAndIndent',
                    Insert: 'toggleOverwrite',
                    Esc: 'singleSelection'
                }),
                    (Ho.pcDefault = {
                        'Ctrl-A': 'selectAll',
                        'Ctrl-D': 'deleteLine',
                        'Ctrl-Z': 'undo',
                        'Shift-Ctrl-Z': 'redo',
                        'Ctrl-Y': 'redo',
                        'Ctrl-Home': 'goDocStart',
                        'Ctrl-End': 'goDocEnd',
                        'Ctrl-Up': 'goLineUp',
                        'Ctrl-Down': 'goLineDown',
                        'Ctrl-Left': 'goGroupLeft',
                        'Ctrl-Right': 'goGroupRight',
                        'Alt-Left': 'goLineStart',
                        'Alt-Right': 'goLineEnd',
                        'Ctrl-Backspace': 'delGroupBefore',
                        'Ctrl-Delete': 'delGroupAfter',
                        'Ctrl-S': 'save',
                        'Ctrl-F': 'find',
                        'Ctrl-G': 'findNext',
                        'Shift-Ctrl-G': 'findPrev',
                        'Shift-Ctrl-F': 'replace',
                        'Shift-Ctrl-R': 'replaceAll',
                        'Ctrl-[': 'indentLess',
                        'Ctrl-]': 'indentMore',
                        'Ctrl-U': 'undoSelection',
                        'Shift-Ctrl-U': 'redoSelection',
                        'Alt-U': 'redoSelection',
                        fallthrough: 'basic'
                    }),
                    (Ho.emacsy = {
                        'Ctrl-F': 'goCharRight',
                        'Ctrl-B': 'goCharLeft',
                        'Ctrl-P': 'goLineUp',
                        'Ctrl-N': 'goLineDown',
                        'Alt-F': 'goWordRight',
                        'Alt-B': 'goWordLeft',
                        'Ctrl-A': 'goLineStart',
                        'Ctrl-E': 'goLineEnd',
                        'Ctrl-V': 'goPageDown',
                        'Shift-Ctrl-V': 'goPageUp',
                        'Ctrl-D': 'delCharAfter',
                        'Ctrl-H': 'delCharBefore',
                        'Alt-D': 'delWordAfter',
                        'Alt-Backspace': 'delWordBefore',
                        'Ctrl-K': 'killLine',
                        'Ctrl-T': 'transposeChars',
                        'Ctrl-O': 'openLine'
                    }),
                    (Ho.macDefault = {
                        'Cmd-A': 'selectAll',
                        'Cmd-D': 'deleteLine',
                        'Cmd-Z': 'undo',
                        'Shift-Cmd-Z': 'redo',
                        'Cmd-Y': 'redo',
                        'Cmd-Home': 'goDocStart',
                        'Cmd-Up': 'goDocStart',
                        'Cmd-End': 'goDocEnd',
                        'Cmd-Down': 'goDocEnd',
                        'Alt-Left': 'goGroupLeft',
                        'Alt-Right': 'goGroupRight',
                        'Cmd-Left': 'goLineLeft',
                        'Cmd-Right': 'goLineRight',
                        'Alt-Backspace': 'delGroupBefore',
                        'Ctrl-Alt-Backspace': 'delGroupAfter',
                        'Alt-Delete': 'delGroupAfter',
                        'Cmd-S': 'save',
                        'Cmd-F': 'find',
                        'Cmd-G': 'findNext',
                        'Shift-Cmd-G': 'findPrev',
                        'Cmd-Alt-F': 'replace',
                        'Shift-Cmd-Alt-F': 'replaceAll',
                        'Cmd-[': 'indentLess',
                        'Cmd-]': 'indentMore',
                        'Cmd-Backspace': 'delWrappedLineLeft',
                        'Cmd-Delete': 'delWrappedLineRight',
                        'Cmd-U': 'undoSelection',
                        'Shift-Cmd-U': 'redoSelection',
                        'Ctrl-Up': 'goDocStart',
                        'Ctrl-Down': 'goDocEnd',
                        fallthrough: ['basic', 'emacsy']
                    }),
                    (Ho.default = y ? Ho.macDefault : Ho.pcDefault);
                var ta = {
                    selectAll: so,
                    singleSelection: function (e) {
                        return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), q);
                    },
                    killLine: function (e) {
                        return Xo(e, function (t) {
                            if (t.empty()) {
                                var n = $e(e.doc, t.head.line).text.length;
                                return t.head.ch == n && t.head.line < e.lastLine()
                                    ? { from: t.head, to: et(t.head.line + 1, 0) }
                                    : { from: t.head, to: et(t.head.line, n) };
                            }
                            return { from: t.from(), to: t.to() };
                        });
                    },
                    deleteLine: function (e) {
                        return Xo(e, function (t) {
                            return {
                                from: et(t.from().line, 0),
                                to: st(e.doc, et(t.to().line + 1, 0))
                            };
                        });
                    },
                    delLineLeft: function (e) {
                        return Xo(e, function (e) {
                            return { from: et(e.from().line, 0), to: e.from() };
                        });
                    },
                    delWrappedLineLeft: function (e) {
                        return Xo(e, function (t) {
                            var n = e.charCoords(t.head, 'div').top + 5;
                            return {
                                from: e.coordsChar({ left: 0, top: n }, 'div'),
                                to: t.from()
                            };
                        });
                    },
                    delWrappedLineRight: function (e) {
                        return Xo(e, function (t) {
                            var n = e.charCoords(t.head, 'div').top + 5,
                                r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
                            return { from: t.from(), to: r };
                        });
                    },
                    undo: function (e) {
                        return e.undo();
                    },
                    redo: function (e) {
                        return e.redo();
                    },
                    undoSelection: function (e) {
                        return e.undoSelection();
                    },
                    redoSelection: function (e) {
                        return e.redoSelection();
                    },
                    goDocStart: function (e) {
                        return e.extendSelection(et(e.firstLine(), 0));
                    },
                    goDocEnd: function (e) {
                        return e.extendSelection(et(e.lastLine()));
                    },
                    goLineStart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return na(e, t.head.line);
                            },
                            { origin: '+move', bias: 1 }
                        );
                    },
                    goLineStartSmart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return ra(e, t.head);
                            },
                            { origin: '+move', bias: 1 }
                        );
                    },
                    goLineEnd: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return (function (e, t) {
                                    var n = $e(e.doc, t),
                                        r = (function (e) {
                                            for (var t; (t = Lt(e)); ) e = t.find(1, !0).line;
                                            return e;
                                        })(n);
                                    return r != n && (t = Qe(r)), ea(!0, e, n, t, -1);
                                })(e, t.head.line);
                            },
                            { origin: '+move', bias: -1 }
                        );
                    },
                    goLineRight: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, 'div').top + 5;
                            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
                        }, W);
                    },
                    goLineLeft: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, 'div').top + 5;
                            return e.coordsChar({ left: 0, top: n }, 'div');
                        }, W);
                    },
                    goLineLeftSmart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, 'div').top + 5,
                                r = e.coordsChar({ left: 0, top: n }, 'div');
                            return r.ch < e.getLine(r.line).search(/\S/) ? ra(e, t.head) : r;
                        }, W);
                    },
                    goLineUp: function (e) {
                        return e.moveV(-1, 'line');
                    },
                    goLineDown: function (e) {
                        return e.moveV(1, 'line');
                    },
                    goPageUp: function (e) {
                        return e.moveV(-1, 'page');
                    },
                    goPageDown: function (e) {
                        return e.moveV(1, 'page');
                    },
                    goCharLeft: function (e) {
                        return e.moveH(-1, 'char');
                    },
                    goCharRight: function (e) {
                        return e.moveH(1, 'char');
                    },
                    goColumnLeft: function (e) {
                        return e.moveH(-1, 'column');
                    },
                    goColumnRight: function (e) {
                        return e.moveH(1, 'column');
                    },
                    goWordLeft: function (e) {
                        return e.moveH(-1, 'word');
                    },
                    goGroupRight: function (e) {
                        return e.moveH(1, 'group');
                    },
                    goGroupLeft: function (e) {
                        return e.moveH(-1, 'group');
                    },
                    goWordRight: function (e) {
                        return e.moveH(1, 'word');
                    },
                    delCharBefore: function (e) {
                        return e.deleteH(-1, 'codepoint');
                    },
                    delCharAfter: function (e) {
                        return e.deleteH(1, 'char');
                    },
                    delWordBefore: function (e) {
                        return e.deleteH(-1, 'word');
                    },
                    delWordAfter: function (e) {
                        return e.deleteH(1, 'word');
                    },
                    delGroupBefore: function (e) {
                        return e.deleteH(-1, 'group');
                    },
                    delGroupAfter: function (e) {
                        return e.deleteH(1, 'group');
                    },
                    indentAuto: function (e) {
                        return e.indentSelection('smart');
                    },
                    indentMore: function (e) {
                        return e.indentSelection('add');
                    },
                    indentLess: function (e) {
                        return e.indentSelection('subtract');
                    },
                    insertTab: function (e) {
                        return e.replaceSelection('\t');
                    },
                    insertSoftTab: function (e) {
                        for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                            var o = n[i].from(),
                                a = F(e.getLine(o.line), o.ch, r);
                            t.push(V(r - (a % r)));
                        }
                        e.replaceSelections(t);
                    },
                    defaultTab: function (e) {
                        e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab');
                    },
                    transposeChars: function (e) {
                        return Zr(e, function () {
                            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                                if (t[r].empty()) {
                                    var i = t[r].head,
                                        o = $e(e.doc, i.line).text;
                                    if (o)
                                        if ((i.ch == o.length && (i = new et(i.line, i.ch - 1)), i.ch > 0))
                                            (i = new et(i.line, i.ch + 1)),
                                                e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), et(i.line, i.ch - 2), i, '+transpose');
                                        else if (i.line > e.doc.first) {
                                            var a = $e(e.doc, i.line - 1).text;
                                            a &&
                                                ((i = new et(i.line, 1)),
                                                e.replaceRange(
                                                    o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
                                                    et(i.line - 1, a.length - 1),
                                                    i,
                                                    '+transpose'
                                                ));
                                        }
                                    n.push(new ki(i, i));
                                }
                            e.setSelections(n);
                        });
                    },
                    newlineAndIndent: function (e) {
                        return Zr(e, function () {
                            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                                e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, '+input');
                            t = e.listSelections();
                            for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                            Rr(e);
                        });
                    },
                    openLine: function (e) {
                        return e.replaceSelection('\n', 'start');
                    },
                    toggleOverwrite: function (e) {
                        return e.toggleOverwrite();
                    }
                };
                function na(e, t) {
                    var n = $e(e.doc, t),
                        r = Ft(n);
                    return r != n && (t = Qe(r)), ea(!0, e, r, t, 1);
                }
                function ra(e, t) {
                    var n = na(e, t.line),
                        r = $e(e.doc, n.line),
                        i = ue(r, e.doc.direction);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(n.ch, r.text.search(/\S/)),
                            a = t.line == n.line && t.ch <= o && t.ch;
                        return et(n.line, a ? 0 : o, n.sticky);
                    }
                    return n;
                }
                function ia(e, t, n) {
                    if ('string' == typeof t && !(t = ta[t])) return !1;
                    e.display.input.ensurePolled();
                    var r = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != U);
                    } finally {
                        (e.display.shift = r), (e.state.suppressEdits = !1);
                    }
                    return i;
                }
                var oa = new B();
                function aa(e, t, n, r) {
                    var i = e.state.keySeq;
                    if (i) {
                        if (Vo(t)) return 'handled';
                        if (
                            (/\'$/.test(t)
                                ? (e.state.keySeq = null)
                                : oa.set(50, function () {
                                      e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                                  }),
                            sa(e, i + ' ' + t, n, r))
                        )
                            return !0;
                    }
                    return sa(e, t, n, r);
                }
                function sa(e, t, n, r) {
                    var i = (function (e, t, n) {
                        for (var r = 0; r < e.state.keyMaps.length; r++) {
                            var i = $o(t, e.state.keyMaps[r], n, e);
                            if (i) return i;
                        }
                        return (e.options.extraKeys && $o(t, e.options.extraKeys, n, e)) || $o(t, e.options.keyMap, n, e);
                    })(e, t, r);
                    return (
                        'multi' == i && (e.state.keySeq = t),
                        'handled' == i && ln(e, 'keyHandled', e, t, n),
                        ('handled' != i && 'multi' != i) || (be(n), wr(e)),
                        !!i
                    );
                }
                function la(e, t) {
                    var n = Yo(t, !0);
                    return (
                        !!n &&
                        (t.shiftKey && !e.state.keySeq
                            ? aa(e, 'Shift-' + n, t, function (t) {
                                  return ia(e, t, !0);
                              }) ||
                              aa(e, n, t, function (t) {
                                  if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ia(e, t);
                              })
                            : aa(e, n, t, function (t) {
                                  return ia(e, t);
                              }))
                    );
                }
                var ua = null;
                function ca(e) {
                    var t = this;
                    if (!((e.target && e.target != t.display.input.getField()) || ((t.curOp.focus = M()), me(t, e)))) {
                        a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var r = e.keyCode;
                        t.display.shift = 16 == r || e.shiftKey;
                        var i = la(t, e);
                        d && ((ua = i ? r : null), i || 88 != r || Ie || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection('', null, 'cut')),
                            n && !y && !i && 46 == r && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand('cut'),
                            18 != r ||
                                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                                (function (e) {
                                    var t = e.display.lineDiv;
                                    function n(e) {
                                        (18 != e.keyCode && e.altKey) || (O(t, 'CodeMirror-crosshair'), pe(document, 'keyup', n), pe(document, 'mouseover', n));
                                    }
                                    I(t, 'CodeMirror-crosshair'), de(document, 'keyup', n), de(document, 'mouseover', n);
                                })(t);
                    }
                }
                function da(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
                }
                function fa(e) {
                    var t = this;
                    if (
                        !((e.target && e.target != t.display.input.getField()) || xn(t.display, e) || me(t, e) || (e.ctrlKey && !e.altKey) || (y && e.metaKey))
                    ) {
                        var n = e.keyCode,
                            r = e.charCode;
                        if (d && n == ua) return (ua = null), void be(e);
                        if (!d || (e.which && !(e.which < 10)) || !la(t, e)) {
                            var i = String.fromCharCode(null == r ? n : r);
                            '\b' != i &&
                                ((function (e, t, n) {
                                    return aa(e, "'" + n + "'", t, function (t) {
                                        return ia(e, t, !0);
                                    });
                                })(t, e, i) ||
                                    t.display.input.onKeyPress(e));
                        }
                    }
                }
                var pa,
                    ha,
                    ma = function (e, t, n) {
                        (this.time = e), (this.pos = t), (this.button = n);
                    };
                function ga(e) {
                    var t = this,
                        n = t.display;
                    if (!(me(t, e) || (n.activeTouch && n.input.supportsTouch())))
                        if ((n.input.ensurePolled(), (n.shift = e.shiftKey), xn(n, e)))
                            l ||
                                ((n.scroller.draggable = !1),
                                setTimeout(function () {
                                    return (n.scroller.draggable = !0);
                                }, 100));
                        else if (!ba(t, e)) {
                            var r = ur(t, e),
                                i = Ee(e),
                                o = r
                                    ? (function (e, t) {
                                          var n = +new Date();
                                          return ha && ha.compare(n, e, t)
                                              ? ((pa = ha = null), 'triple')
                                              : pa && pa.compare(n, e, t)
                                              ? ((ha = new ma(n, e, t)), (pa = null), 'double')
                                              : ((pa = new ma(n, e, t)), (ha = null), 'single');
                                      })(r, i)
                                    : 'single';
                            window.focus(),
                                1 == i && t.state.selectingText && t.state.selectingText(e),
                                (r &&
                                    (function (e, t, n, r, i) {
                                        var o = 'Click';
                                        return (
                                            'double' == r ? (o = 'Double' + o) : 'triple' == r && (o = 'Triple' + o),
                                            aa(e, Ko((o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o), i), i, function (t) {
                                                if (('string' == typeof t && (t = ta[t]), !t)) return !1;
                                                var r = !1;
                                                try {
                                                    e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != U);
                                                } finally {
                                                    e.state.suppressEdits = !1;
                                                }
                                                return r;
                                            })
                                        );
                                    })(t, i, r, o, e)) ||
                                    (1 == i
                                        ? r
                                            ? (function (e, t, n, r) {
                                                  a ? setTimeout(D(xr, e), 0) : (e.curOp.focus = M());
                                                  var i,
                                                      o = (function (e, t, n) {
                                                          var r = e.getOption('configureMouse'),
                                                              i = r ? r(e, t, n) : {};
                                                          if (null == i.unit) {
                                                              var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                                              i.unit = o ? 'rectangle' : 'single' == t ? 'char' : 'double' == t ? 'word' : 'line';
                                                          }
                                                          return (
                                                              (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
                                                              null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey),
                                                              null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                                                              i
                                                          );
                                                      })(e, n, r),
                                                      u = e.doc.sel;
                                                  e.options.dragDrop &&
                                                  Ce &&
                                                  !e.isReadOnly() &&
                                                  'single' == n &&
                                                  (i = u.contains(t)) > -1 &&
                                                  (tt((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                                                  (tt(i.to(), t) > 0 || t.xRel < 0)
                                                      ? (function (e, t, n, r) {
                                                            var i = e.display,
                                                                o = !1,
                                                                u = ei(e, function (t) {
                                                                    l && (i.scroller.draggable = !1),
                                                                        (e.state.draggingText = !1),
                                                                        e.state.delayingBlurEvent && (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : kr(e)),
                                                                        pe(i.wrapper.ownerDocument, 'mouseup', u),
                                                                        pe(i.wrapper.ownerDocument, 'mousemove', c),
                                                                        pe(i.scroller, 'dragstart', d),
                                                                        pe(i.scroller, 'drop', u),
                                                                        o ||
                                                                            (be(t),
                                                                            r.addNew || Ki(e.doc, n, null, null, r.extend),
                                                                            (l && !f) || (a && 9 == s)
                                                                                ? setTimeout(function () {
                                                                                      i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                                                                                          i.input.focus();
                                                                                  }, 20)
                                                                                : i.input.focus());
                                                                }),
                                                                c = function (e) {
                                                                    o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                                                                },
                                                                d = function () {
                                                                    return (o = !0);
                                                                };
                                                            l && (i.scroller.draggable = !0),
                                                                (e.state.draggingText = u),
                                                                (u.copy = !r.moveOnDrag),
                                                                de(i.wrapper.ownerDocument, 'mouseup', u),
                                                                de(i.wrapper.ownerDocument, 'mousemove', c),
                                                                de(i.scroller, 'dragstart', d),
                                                                de(i.scroller, 'drop', u),
                                                                (e.state.delayingBlurEvent = !0),
                                                                setTimeout(function () {
                                                                    return i.input.focus();
                                                                }, 20),
                                                                i.scroller.dragDrop && i.scroller.dragDrop();
                                                        })(e, r, t, o)
                                                      : (function (e, t, n, r) {
                                                            a && kr(e);
                                                            var i = e.display,
                                                                o = e.doc;
                                                            be(t);
                                                            var s,
                                                                l,
                                                                u = o.sel,
                                                                c = u.ranges;
                                                            if (
                                                                (r.addNew && !r.extend
                                                                    ? ((l = o.sel.contains(n)), (s = l > -1 ? c[l] : new ki(n, n)))
                                                                    : ((s = o.sel.primary()), (l = o.sel.primIndex)),
                                                                'rectangle' == r.unit)
                                                            )
                                                                r.addNew || (s = new ki(n, n)), (n = ur(e, t, !0, !0)), (l = -1);
                                                            else {
                                                                var d = va(e, n, r.unit);
                                                                s = r.extend ? Vi(s, d.anchor, d.head, r.extend) : d;
                                                            }
                                                            r.addNew
                                                                ? -1 == l
                                                                    ? ((l = c.length),
                                                                      Zi(o, Ei(e, c.concat([s]), l), {
                                                                          scroll: !1,
                                                                          origin: '*mouse'
                                                                      }))
                                                                    : c.length > 1 && c[l].empty() && 'char' == r.unit && !r.extend
                                                                    ? (Zi(o, Ei(e, c.slice(0, l).concat(c.slice(l + 1)), 0), { scroll: !1, origin: '*mouse' }),
                                                                      (u = o.sel))
                                                                    : Qi(o, l, s, H)
                                                                : ((l = 0), Zi(o, new xi([s], 0), H), (u = o.sel));
                                                            var f = n;
                                                            function p(t) {
                                                                if (0 != tt(f, t))
                                                                    if (((f = t), 'rectangle' == r.unit)) {
                                                                        for (
                                                                            var i = [],
                                                                                a = e.options.tabSize,
                                                                                c = F($e(o, n.line).text, n.ch, a),
                                                                                d = F($e(o, t.line).text, t.ch, a),
                                                                                p = Math.min(c, d),
                                                                                h = Math.max(c, d),
                                                                                m = Math.min(n.line, t.line),
                                                                                g = Math.min(e.lastLine(), Math.max(n.line, t.line));
                                                                            m <= g;
                                                                            m++
                                                                        ) {
                                                                            var v = $e(o, m).text,
                                                                                y = G(v, p, a);
                                                                            p == h
                                                                                ? i.push(new ki(et(m, y), et(m, y)))
                                                                                : v.length > y && i.push(new ki(et(m, y), et(m, G(v, h, a))));
                                                                        }
                                                                        i.length || i.push(new ki(n, n)),
                                                                            Zi(o, Ei(e, u.ranges.slice(0, l).concat(i), l), { origin: '*mouse', scroll: !1 }),
                                                                            e.scrollIntoView(t);
                                                                    } else {
                                                                        var b,
                                                                            _ = s,
                                                                            w = va(e, t, r.unit),
                                                                            x = _.anchor;
                                                                        tt(w.anchor, x) > 0
                                                                            ? ((b = w.head), (x = ot(_.from(), w.anchor)))
                                                                            : ((b = w.anchor), (x = it(_.to(), w.head)));
                                                                        var k = u.ranges.slice(0);
                                                                        (k[l] = (function (e, t) {
                                                                            var n = t.anchor,
                                                                                r = t.head,
                                                                                i = $e(e.doc, n.line);
                                                                            if (0 == tt(n, r) && n.sticky == r.sticky) return t;
                                                                            var o = ue(i);
                                                                            if (!o) return t;
                                                                            var a = se(o, n.ch, n.sticky),
                                                                                s = o[a];
                                                                            if (s.from != n.ch && s.to != n.ch) return t;
                                                                            var l,
                                                                                u = a + ((s.from == n.ch) == (1 != s.level) ? 0 : 1);
                                                                            if (0 == u || u == o.length) return t;
                                                                            if (r.line != n.line)
                                                                                l = (r.line - n.line) * ('ltr' == e.doc.direction ? 1 : -1) > 0;
                                                                            else {
                                                                                var c = se(o, r.ch, r.sticky),
                                                                                    d = c - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                                                                                l = c == u - 1 || c == u ? d < 0 : d > 0;
                                                                            }
                                                                            var f = o[u + (l ? -1 : 0)],
                                                                                p = l == (1 == f.level),
                                                                                h = p ? f.from : f.to,
                                                                                m = p ? 'after' : 'before';
                                                                            return n.ch == h && n.sticky == m ? t : new ki(new et(n.line, h, m), r);
                                                                        })(e, new ki(st(o, x), b))),
                                                                            Zi(o, Ei(e, k, l), H);
                                                                    }
                                                            }
                                                            var h = i.wrapper.getBoundingClientRect(),
                                                                m = 0;
                                                            function g(t) {
                                                                (e.state.selectingText = !1),
                                                                    (m = 1 / 0),
                                                                    t && (be(t), i.input.focus()),
                                                                    pe(i.wrapper.ownerDocument, 'mousemove', v),
                                                                    pe(i.wrapper.ownerDocument, 'mouseup', y),
                                                                    (o.history.lastSelOrigin = null);
                                                            }
                                                            var v = ei(e, function (t) {
                                                                    0 !== t.buttons && Ee(t)
                                                                        ? (function t(n) {
                                                                              var a = ++m,
                                                                                  s = ur(e, n, !0, 'rectangle' == r.unit);
                                                                              if (s)
                                                                                  if (0 != tt(s, f)) {
                                                                                      (e.curOp.focus = M()), p(s);
                                                                                      var l = Tr(i, o);
                                                                                      (s.line >= l.to || s.line < l.from) &&
                                                                                          setTimeout(
                                                                                              ei(e, function () {
                                                                                                  m == a && t(n);
                                                                                              }),
                                                                                              150
                                                                                          );
                                                                                  } else {
                                                                                      var u = n.clientY < h.top ? -20 : n.clientY > h.bottom ? 20 : 0;
                                                                                      u &&
                                                                                          setTimeout(
                                                                                              ei(e, function () {
                                                                                                  m == a && ((i.scroller.scrollTop += u), t(n));
                                                                                              }),
                                                                                              50
                                                                                          );
                                                                                  }
                                                                          })(t)
                                                                        : g(t);
                                                                }),
                                                                y = ei(e, g);
                                                            (e.state.selectingText = y),
                                                                de(i.wrapper.ownerDocument, 'mousemove', v),
                                                                de(i.wrapper.ownerDocument, 'mouseup', y);
                                                        })(e, r, t, o);
                                              })(t, r, o, e)
                                            : ke(e) == n.scroller && be(e)
                                        : 2 == i
                                        ? (r && Ki(t.doc, r),
                                          setTimeout(function () {
                                              return n.input.focus();
                                          }, 20))
                                        : 3 == i && (k ? t.display.input.onContextMenu(e) : kr(t)));
                        }
                }
                function va(e, t, n) {
                    if ('char' == n) return new ki(t, t);
                    if ('word' == n) return e.findWordAt(t);
                    if ('line' == n) return new ki(et(t.line, 0), st(e.doc, et(t.line + 1, 0)));
                    var r = n(e, t);
                    return new ki(r.from, r.to);
                }
                function ya(e, t, n, r) {
                    var i, o;
                    if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
                    else
                        try {
                            (i = t.clientX), (o = t.clientY);
                        } catch (e) {
                            return !1;
                        }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    r && be(t);
                    var a = e.display,
                        s = a.lineDiv.getBoundingClientRect();
                    if (o > s.bottom || !ve(e, n)) return we(t);
                    o -= s.top - a.viewOffset;
                    for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                        var u = a.gutters.childNodes[l];
                        if (u && u.getBoundingClientRect().right >= i) return he(e, n, e, Xe(e.doc, o), e.display.gutterSpecs[l].className, t), we(t);
                    }
                }
                function ba(e, t) {
                    return ya(e, t, 'gutterClick', !0);
                }
                function _a(e, t) {
                    xn(e.display, t) ||
                        (function (e, t) {
                            return !!ve(e, 'gutterContextMenu') && ya(e, t, 'gutterContextMenu', !1);
                        })(e, t) ||
                        me(e, t, 'contextmenu') ||
                        k ||
                        e.display.input.onContextMenu(t);
                }
                function wa(e) {
                    (e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') + e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
                        zn(e);
                }
                ma.prototype.compare = function (e, t, n) {
                    return this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button;
                };
                var xa = {
                        toString: function () {
                            return 'CodeMirror.Init';
                        }
                    },
                    ka = {},
                    Ea = {};
                function Sa(e, t, n) {
                    if (!t != !(n && n != xa)) {
                        var r = e.display.dragFunctions,
                            i = t ? de : pe;
                        i(e.display.scroller, 'dragstart', r.start),
                            i(e.display.scroller, 'dragenter', r.enter),
                            i(e.display.scroller, 'dragover', r.over),
                            i(e.display.scroller, 'dragleave', r.leave),
                            i(e.display.scroller, 'drop', r.drop);
                    }
                }
                function Oa(e) {
                    e.options.lineWrapping
                        ? (I(e.display.wrapper, 'CodeMirror-wrap'), (e.display.sizer.style.minWidth = ''), (e.display.sizerWidth = null))
                        : (O(e.display.wrapper, 'CodeMirror-wrap'), Gt(e)),
                        lr(e),
                        dr(e),
                        zn(e),
                        setTimeout(function () {
                            return Ur(e);
                        }, 100);
                }
                function Ca(e, t) {
                    var n = this;
                    if (!(this instanceof Ca)) return new Ca(e, t);
                    (this.options = t = t ? N(t) : {}), N(ka, t, !1);
                    var r = t.value;
                    'string' == typeof r ? (r = new Ro(r, t.mode, null, t.lineSeparator, t.direction)) : t.mode && (r.modeOption = t.mode), (this.doc = r);
                    var i = new Ca.inputStyles[t.inputStyle](this),
                        o = (this.display = new gi(e, r, i, t));
                    for (var u in ((o.wrapper.CodeMirror = this),
                    wa(this),
                    t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
                    Wr(this),
                    (this.state = {
                        keyMaps: [],
                        overlays: [],
                        modeGen: 0,
                        overwrite: !1,
                        delayingBlurEvent: !1,
                        focused: !1,
                        suppressEdits: !1,
                        pasteIncoming: -1,
                        cutIncoming: -1,
                        selectingText: !1,
                        draggingText: !1,
                        highlight: new B(),
                        keySeq: null,
                        specialChars: null
                    }),
                    t.autofocus && !v && o.input.focus(),
                    a &&
                        s < 11 &&
                        setTimeout(function () {
                            return n.display.input.reset(!0);
                        }, 20),
                    (function (e) {
                        var t = e.display;
                        de(t.scroller, 'mousedown', ei(e, ga)),
                            de(
                                t.scroller,
                                'dblclick',
                                a && s < 11
                                    ? ei(e, function (t) {
                                          if (!me(e, t)) {
                                              var n = ur(e, t);
                                              if (n && !ba(e, t) && !xn(e.display, t)) {
                                                  be(t);
                                          