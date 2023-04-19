/*! For license information please see service-worker.js.LICENSE.txt */
!(function (e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var a = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var a in e)
          r.d(
            n,
            a,
            function (t) {
              return e[t]
            }.bind(null, a),
          )
      return n
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = '/'),
    r((r.s = './src/service-worker.ts'))
})({
  './node_modules/workbox-core/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:core:6.5.3'] && _()
    } catch (n) {}
  },
  './node_modules/workbox-expiration/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:expiration:5.1.4'] && _()
    } catch (n) {}
  },
  './node_modules/workbox-expiration/node_modules/workbox-core/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:core:5.1.4'] && _()
    } catch (n) {}
  },
  './node_modules/workbox-precaching/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:precaching:6.5.3'] && _()
    } catch (n) {}
  },
  './node_modules/workbox-routing/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:routing:6.5.3'] && _()
    } catch (n) {}
  },
  './node_modules/workbox-strategies/_version.js': function (e, t, r) {
    'use strict'
    try {
      self['workbox:strategies:6.5.3'] && _()
    } catch (n) {}
  },
  './src/service-worker.ts': function (e, t, r) {
    'use strict'
    function n(e) {
      return (
        (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
        n(e)
      )
    }
    function a() {
      a = function () {
        return e
      }
      var e = {},
        t = Object.prototype,
        r = t.hasOwnProperty,
        s =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value
          },
        c = 'function' == typeof Symbol ? Symbol : {},
        i = c.iterator || '@@iterator',
        o = c.asyncIterator || '@@asyncIterator',
        u = c.toStringTag || '@@toStringTag'
      function l(e, t, r) {
        return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t]
      }
      try {
        l({}, '')
      } catch (q) {
        l = function (e, t, r) {
          return (e[t] = r)
        }
      }
      function h(e, t, r, n) {
        var a = t && t.prototype instanceof d ? t : d,
          c = Object.create(a.prototype),
          i = new L(n || [])
        return s(c, '_invoke', { value: _(e, r, i) }), c
      }
      function p(e, t, r) {
        try {
          return { type: 'normal', arg: e.call(t, r) }
        } catch (q) {
          return { type: 'throw', arg: q }
        }
      }
      e.wrap = h
      var f = {}
      function d() {}
      function v() {}
      function x() {}
      var g = {}
      l(g, i, function () {
        return this
      })
      var b = Object.getPrototypeOf,
        m = b && b(b(O([])))
      m && m !== t && r.call(m, i) && (g = m)
      var y = (x.prototype = d.prototype = Object.create(g))
      function w(e) {
        ;['next', 'throw', 'return'].forEach(function (t) {
          l(e, t, function (e) {
            return this._invoke(t, e)
          })
        })
      }
      function k(e, t) {
        function a(s, c, i, o) {
          var u = p(e[s], e, c)
          if ('throw' !== u.type) {
            var l = u.arg,
              h = l.value
            return h && 'object' == n(h) && r.call(h, '__await')
              ? t.resolve(h.__await).then(
                  function (e) {
                    a('next', e, i, o)
                  },
                  function (e) {
                    a('throw', e, i, o)
                  },
                )
              : t.resolve(h).then(
                  function (e) {
                    ;(l.value = e), i(l)
                  },
                  function (e) {
                    return a('throw', e, i, o)
                  },
                )
          }
          o(u.arg)
        }
        var c
        s(this, '_invoke', {
          value: function (e, r) {
            function n() {
              return new t(function (t, n) {
                a(e, r, t, n)
              })
            }
            return (c = c ? c.then(n, n) : n())
          },
        })
      }
      function _(e, t, r) {
        var n = 'suspendedStart'
        return function (a, s) {
          if ('executing' === n) throw new Error('Generator is already running')
          if ('completed' === n) {
            if ('throw' === a) throw s
            return j()
          }
          for (r.method = a, r.arg = s; ; ) {
            var c = r.delegate
            if (c) {
              var i = R(c, r)
              if (i) {
                if (i === f) continue
                return i
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg
            else if ('throw' === r.method) {
              if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
              r.dispatchException(r.arg)
            } else 'return' === r.method && r.abrupt('return', r.arg)
            n = 'executing'
            var o = p(e, t, r)
            if ('normal' === o.type) {
              if (((n = r.done ? 'completed' : 'suspendedYield'), o.arg === f)) continue
              return { value: o.arg, done: r.done }
            }
            'throw' === o.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = o.arg))
          }
        }
      }
      function R(e, t) {
        var r = t.method,
          n = e.iterator[r]
        if (void 0 === n)
          return (
            (t.delegate = null),
            ('throw' === r &&
              e.iterator.return &&
              ((t.method = 'return'), (t.arg = void 0), R(e, t), 'throw' === t.method)) ||
              ('return' !== r &&
                ((t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
            f
          )
        var a = p(n, e.iterator, t.arg)
        if ('throw' === a.type) return (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), f
        var s = a.arg
        return s
          ? s.done
            ? ((t[e.resultName] = s.value),
              (t.next = e.nextLoc),
              'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : s
          : ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), f)
      }
      function C(e) {
        var t = { tryLoc: e[0] }
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t)
      }
      function E(e) {
        var t = e.completion || {}
        ;(t.type = 'normal'), delete t.arg, (e.completion = t)
      }
      function L(e) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(C, this), this.reset(!0)
      }
      function O(e) {
        if (e) {
          var t = e[i]
          if (t) return t.call(e)
          if ('function' == typeof e.next) return e
          if (!isNaN(e.length)) {
            var n = -1,
              a = function t() {
                for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                return (t.value = void 0), (t.done = !0), t
              }
            return (a.next = a)
          }
        }
        return { next: j }
      }
      function j() {
        return { value: void 0, done: !0 }
      }
      return (
        (v.prototype = x),
        s(y, 'constructor', { value: x, configurable: !0 }),
        s(x, 'constructor', { value: v, configurable: !0 }),
        (v.displayName = l(x, u, 'GeneratorFunction')),
        (e.isGeneratorFunction = function (e) {
          var t = 'function' == typeof e && e.constructor
          return !!t && (t === v || 'GeneratorFunction' === (t.displayName || t.name))
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : ((e.__proto__ = x), l(e, u, 'GeneratorFunction')),
            (e.prototype = Object.create(y)),
            e
          )
        }),
        (e.awrap = function (e) {
          return { __await: e }
        }),
        w(k.prototype),
        l(k.prototype, o, function () {
          return this
        }),
        (e.AsyncIterator = k),
        (e.async = function (t, r, n, a, s) {
          void 0 === s && (s = Promise)
          var c = new k(h(t, r, n, a), s)
          return e.isGeneratorFunction(r)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next()
              })
        }),
        w(y),
        l(y, u, 'Generator'),
        l(y, i, function () {
          return this
        }),
        l(y, 'toString', function () {
          return '[object Generator]'
        }),
        (e.keys = function (e) {
          var t = Object(e),
            r = []
          for (var n in t) r.push(n)
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop()
                if (n in t) return (e.value = n), (e.done = !1), e
              }
              return (e.done = !0), e
            }
          )
        }),
        (e.values = O),
        (L.prototype = {
          constructor: L,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
              !e)
            )
              for (var t in this) 't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
          },
          stop: function () {
            this.done = !0
            var e = this.tryEntries[0].completion
            if ('throw' === e.type) throw e.arg
            return this.rval
          },
          dispatchException: function (e) {
            if (this.done) throw e
            var t = this
            function n(r, n) {
              return (c.type = 'throw'), (c.arg = e), (t.next = r), n && ((t.method = 'next'), (t.arg = void 0)), !!n
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var s = this.tryEntries[a],
                c = s.completion
              if ('root' === s.tryLoc) return n('end')
              if (s.tryLoc <= this.prev) {
                var i = r.call(s, 'catchLoc'),
                  o = r.call(s, 'finallyLoc')
                if (i && o) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                } else if (i) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                } else {
                  if (!o) throw new Error('try statement without catch or finally')
                  if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var a = this.tryEntries[n]
              if (a.tryLoc <= this.prev && r.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
                var s = a
                break
              }
            }
            s && ('break' === e || 'continue' === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null)
            var c = s ? s.completion : {}
            return (
              (c.type = e), (c.arg = t), s ? ((this.method = 'next'), (this.next = s.finallyLoc), f) : this.complete(c)
            )
          },
          complete: function (e, t) {
            if ('throw' === e.type) throw e.arg
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
              f
            )
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t]
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), E(r), f
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t]
              if (r.tryLoc === e) {
                var n = r.completion
                if ('throw' === n.type) {
                  var a = n.arg
                  E(r)
                }
                return a
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
              'next' === this.method && (this.arg = void 0),
              f
            )
          },
        }),
        e
      )
    }
    function s(e) {
      var t = (function (e, t) {
        if ('object' !== n(e) || null === e) return e
        var r = e[Symbol.toPrimitive]
        if (void 0 !== r) {
          var a = r.call(e, t || 'default')
          if ('object' !== n(a)) return a
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' === n(t) ? t : String(t)
    }
    function c(e, t, r) {
      return (
        (t = s(t)) in e
          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (e[t] = r),
        e
      )
    }
    function i(e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? i(Object(r), !0).forEach(function (t) {
              c(e, t, r[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : i(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
      }
      return e
    }
    function u(e, t, r, n, a, s, c) {
      try {
        var i = e[s](c),
          o = i.value
      } catch (u) {
        return void r(u)
      }
      i.done ? t(o) : Promise.resolve(o).then(n, a)
    }
    function l(e) {
      return function () {
        var t = this,
          r = arguments
        return new Promise(function (n, a) {
          var s = e.apply(t, r)
          function c(e) {
            u(s, n, a, c, i, 'next', e)
          }
          function i(e) {
            u(s, n, a, c, i, 'throw', e)
          }
          c(void 0)
        })
      }
    }
    function h(e, t) {
      ;(null == t || t > e.length) && (t = e.length)
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
      return n
    }
    function p(e, t) {
      if (e) {
        if ('string' === typeof e) return h(e, t)
        var r = Object.prototype.toString.call(e).slice(8, -1)
        return (
          'Object' === r && e.constructor && (r = e.constructor.name),
          'Map' === r || 'Set' === r
            ? Array.from(e)
            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? h(e, t)
            : void 0
        )
      }
    }
    function f(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e
        })(e) ||
        (function (e, t) {
          var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (null != r) {
            var n,
              a,
              s,
              c,
              i = [],
              o = !0,
              u = !1
            try {
              if (((s = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return
                o = !1
              } else for (; !(o = (n = s.call(r)).done) && (i.push(n.value), i.length !== t); o = !0);
            } catch (l) {
              ;(u = !0), (a = l)
            } finally {
              try {
                if (!o && null != r.return && ((c = r.return()), Object(c) !== c)) return
              } finally {
                if (u) throw a
              }
            }
            return i
          }
        })(e, t) ||
        p(e, t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        })()
      )
    }
    function d(e, t) {
      var r = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
      if (!r) {
        if (Array.isArray(e) || (r = p(e)) || (t && e && 'number' === typeof e.length)) {
          r && (e = r)
          var n = 0,
            a = function () {}
          return {
            s: a,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
            },
            e: function (e) {
              throw e
            },
            f: a,
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      var s,
        c = !0,
        i = !1
      return {
        s: function () {
          r = r.call(e)
        },
        n: function () {
          var e = r.next()
          return (c = e.done), e
        },
        e: function (e) {
          ;(i = !0), (s = e)
        },
        f: function () {
          try {
            c || null == r.return || r.return()
          } finally {
            if (i) throw s
          }
        },
      }
    }
    r.r(t)
    r('./node_modules/workbox-core/_version.js')
    var v = function (e) {
      for (var t = e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a]
      return n.length > 0 && (t += ' :: '.concat(JSON.stringify(n))), t
    }
    class x extends Error {
      constructor(e, t) {
        super(v(e, t)), (this.name = e), (this.details = t)
      }
    }
    var g = {
        googleAnalytics: 'googleAnalytics',
        precache: 'precache-v2',
        prefix: 'workbox',
        runtime: 'runtime',
        suffix: 'undefined' !== typeof registration ? registration.scope : '',
      },
      b = e => [g.prefix, e, g.suffix].filter(e => e && e.length > 0).join('-'),
      m = e => e || b(g.precache),
      y = e => e || b(g.runtime),
      w = null
    function k(e, t) {
      var r = t()
      return e.waitUntil(r), r
    }
    r('./node_modules/workbox-precaching/_version.js')
    function _(e) {
      if (!e) throw new x('add-to-cache-list-unexpected-type', { entry: e })
      if ('string' === typeof e) return { cacheKey: (t = new URL(e, location.href)).href, url: t.href }
      var t,
        r = e.revision,
        n = e.url
      if (!n) throw new x('add-to-cache-list-unexpected-type', { entry: e })
      if (!r) return { cacheKey: (t = new URL(n, location.href)).href, url: t.href }
      var a = new URL(n, location.href),
        s = new URL(n, location.href)
      return a.searchParams.set('__WB_REVISION__', r), { cacheKey: a.href, url: s.href }
    }
    class R {
      constructor() {
        var e = this
        ;(this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = (function () {
            var e = l(
              a().mark(function e(t) {
                var r, n
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        ;(r = t.request), (n = t.state) && (n.originalRequest = r)
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()),
          (this.cachedResponseWillBeUsed = (function () {
            var t = l(
              a().mark(function t(r) {
                var n, s, c, i
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = r.event),
                          (s = r.state),
                          (c = r.cachedResponse),
                          'install' === n.type &&
                            s &&
                            s.originalRequest &&
                            s.originalRequest instanceof Request &&
                            ((i = s.originalRequest.url), c ? e.notUpdatedURLs.push(i) : e.updatedURLs.push(i)),
                          t.abrupt('return', c)
                        )
                      case 3:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              }),
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })())
      }
    }
    class C {
      constructor(e) {
        var t = this,
          r = e.precacheController
        ;(this.cacheKeyWillBeUsed = (function () {
          var e = l(
            a().mark(function e(r) {
              var n, s, c
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.request),
                        (s = r.params),
                        (c =
                          (null === s || void 0 === s ? void 0 : s.cacheKey) ||
                          t._precacheController.getCacheKeyForURL(n.url)),
                        e.abrupt('return', c ? new Request(c, { headers: n.headers }) : n)
                      )
                    case 3:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })()),
          (this._precacheController = r)
      }
    }
    var E
    function L() {
      if (void 0 === E) {
        var e = new Response('')
        if ('body' in e)
          try {
            new Response(e.body), (E = !0)
          } catch (t) {
            E = !1
          }
        E = !1
      }
      return E
    }
    function O(e, t) {
      return j.apply(this, arguments)
    }
    function j() {
      return (j = l(
        a().mark(function e(t, r) {
          var n, s, c, i, o, u
          return a().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((n = null), t.url && ((s = new URL(t.url)), (n = s.origin)), n === self.location.origin)) {
                    e.next = 4
                    break
                  }
                  throw new x('cross-origin-copy-response', { origin: n })
                case 4:
                  if (
                    ((c = t.clone()),
                    (i = { headers: new Headers(c.headers), status: c.status, statusText: c.statusText }),
                    (o = r ? r(i) : i),
                    !L())
                  ) {
                    e.next = 11
                    break
                  }
                  ;(e.t0 = c.body), (e.next = 14)
                  break
                case 11:
                  return (e.next = 13), c.blob()
                case 13:
                  e.t0 = e.sent
                case 14:
                  return (u = e.t0), e.abrupt('return', new Response(u, o))
                case 16:
                case 'end':
                  return e.stop()
              }
          }, e)
        }),
      )).apply(this, arguments)
    }
    var q = e => new URL(String(e), location.href).href.replace(new RegExp('^'.concat(location.origin)), '')
    function T(e, t) {
      var r,
        n = new URL(e),
        a = d(t)
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var s = r.value
          n.searchParams.delete(s)
        }
      } catch (c) {
        a.e(c)
      } finally {
        a.f()
      }
      return n.href
    }
    function P(e, t, r, n) {
      return S.apply(this, arguments)
    }
    function S() {
      return (S = l(
        a().mark(function e(t, r, n, s) {
          var c, i, o, u, l, h, p
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((c = T(r.url, n)), r.url !== c)) {
                      e.next = 3
                      break
                    }
                    return e.abrupt('return', t.match(r, s))
                  case 3:
                    return (i = Object.assign(Object.assign({}, s), { ignoreSearch: !0 })), (e.next = 6), t.keys(r, i)
                  case 6:
                    ;(o = e.sent), (u = d(o)), (e.prev = 8), u.s()
                  case 10:
                    if ((l = u.n()).done) {
                      e.next = 17
                      break
                    }
                    if (((h = l.value), (p = T(h.url, n)), c !== p)) {
                      e.next = 15
                      break
                    }
                    return e.abrupt('return', t.match(h, s))
                  case 15:
                    e.next = 10
                    break
                  case 17:
                    e.next = 22
                    break
                  case 19:
                    ;(e.prev = 19), (e.t0 = e.catch(8)), u.e(e.t0)
                  case 22:
                    return (e.prev = 22), u.f(), e.finish(22)
                  case 25:
                    return e.abrupt('return')
                  case 26:
                  case 'end':
                    return e.stop()
                }
            },
            e,
            null,
            [[8, 19, 22, 25]],
          )
        }),
      )).apply(this, arguments)
    }
    class U {
      constructor() {
        this.promise = new Promise((e, t) => {
          ;(this.resolve = e), (this.reject = t)
        })
      }
    }
    var N = new Set()
    function A() {
      return K.apply(this, arguments)
    }
    function K() {
      return (K = l(
        a().mark(function e() {
          var t, r, n
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    0, (t = d(N)), (e.prev = 2), t.s()
                  case 4:
                    if ((r = t.n()).done) {
                      e.next = 11
                      break
                    }
                    return (n = r.value), (e.next = 8), n()
                  case 8:
                    0
                  case 9:
                    e.next = 4
                    break
                  case 11:
                    e.next = 16
                    break
                  case 13:
                    ;(e.prev = 13), (e.t0 = e.catch(2)), t.e(e.t0)
                  case 16:
                    return (e.prev = 16), t.f(), e.finish(16)
                  case 19:
                    0
                  case 20:
                  case 'end':
                    return e.stop()
                }
            },
            e,
            null,
            [[2, 13, 16, 19]],
          )
        }),
      )).apply(this, arguments)
    }
    function M(e) {
      return new Promise(t => setTimeout(t, e))
    }
    var I
    r('./node_modules/workbox-strategies/_version.js')
    function D(e) {
      return 'string' === typeof e ? new Request(e) : e
    }
    class W {
      constructor(e, t) {
        ;(this._cacheKeys = {}),
          Object.assign(this, t),
          (this.event = t.event),
          (this._strategy = e),
          (this._handlerDeferred = new U()),
          (this._extendLifetimePromises = []),
          (this._plugins = [...e.plugins]),
          (this._pluginStateMap = new Map())
        var r,
          n = d(this._plugins)
        try {
          for (n.s(); !(r = n.n()).done; ) {
            var a = r.value
            this._pluginStateMap.set(a, {})
          }
        } catch (s) {
          n.e(s)
        } finally {
          n.f()
        }
        this.event.waitUntil(this._handlerDeferred.promise)
      }
      fetch(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s, c, i, o, u, l, h, p, f, v, g
            return a().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        ((n = t.event),
                        !('navigate' === (s = D(e)).mode && n instanceof FetchEvent && n.preloadResponse))
                      ) {
                        r.next = 9
                        break
                      }
                      return (r.next = 5), n.preloadResponse
                    case 5:
                      if (!(c = r.sent)) {
                        r.next = 9
                        break
                      }
                      return r.abrupt('return', c)
                    case 9:
                      ;(i = t.hasCallback('fetchDidFail') ? s.clone() : null),
                        (r.prev = 10),
                        (o = d(t.iterateCallbacks('requestWillFetch'))),
                        (r.prev = 12),
                        o.s()
                    case 14:
                      if ((u = o.n()).done) {
                        r.next = 21
                        break
                      }
                      return (l = u.value), (r.next = 18), l({ request: s.clone(), event: n })
                    case 18:
                      s = r.sent
                    case 19:
                      r.next = 14
                      break
                    case 21:
                      r.next = 26
                      break
                    case 23:
                      ;(r.prev = 23), (r.t0 = r.catch(12)), o.e(r.t0)
                    case 26:
                      return (r.prev = 26), o.f(), r.finish(26)
                    case 29:
                      r.next = 35
                      break
                    case 31:
                      if (((r.prev = 31), (r.t1 = r.catch(10)), !(r.t1 instanceof Error))) {
                        r.next = 35
                        break
                      }
                      throw new x('plugin-error-request-will-fetch', { thrownErrorMessage: r.t1.message })
                    case 35:
                      return (
                        (h = s.clone()),
                        (r.prev = 36),
                        (r.next = 39),
                        fetch(s, 'navigate' === s.mode ? void 0 : t._strategy.fetchOptions)
                      )
                    case 39:
                      ;(p = r.sent), (f = d(t.iterateCallbacks('fetchDidSucceed'))), (r.prev = 42), f.s()
                    case 44:
                      if ((v = f.n()).done) {
                        r.next = 51
                        break
                      }
                      return (g = v.value), (r.next = 48), g({ event: n, request: h, response: p })
                    case 48:
                      p = r.sent
                    case 49:
                      r.next = 44
                      break
                    case 51:
                      r.next = 56
                      break
                    case 53:
                      ;(r.prev = 53), (r.t2 = r.catch(42)), f.e(r.t2)
                    case 56:
                      return (r.prev = 56), f.f(), r.finish(56)
                    case 59:
                      return r.abrupt('return', p)
                    case 62:
                      if (((r.prev = 62), (r.t3 = r.catch(36)), !i)) {
                        r.next = 68
                        break
                      }
                      return (
                        (r.next = 68),
                        t.runCallbacks('fetchDidFail', {
                          error: r.t3,
                          event: n,
                          originalRequest: i.clone(),
                          request: h.clone(),
                        })
                      )
                    case 68:
                      throw r.t3
                    case 69:
                    case 'end':
                      return r.stop()
                  }
              },
              r,
              null,
              [
                [10, 31],
                [12, 23, 26, 29],
                [36, 62],
                [42, 53, 56, 59],
              ],
            )
          }),
        )()
      }
      fetchAndCachePut(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 2), t.fetch(e)
                  case 2:
                    return (n = r.sent), (s = n.clone()), t.waitUntil(t.cachePut(e, s)), r.abrupt('return', n)
                  case 6:
                  case 'end':
                    return r.stop()
                }
            }, r)
          }),
        )()
      }
      cacheMatch(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s, c, i, o, u, l, h, p, f
            return a().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = D(e)),
                        (c = t._strategy),
                        (i = c.cacheName),
                        (o = c.matchOptions),
                        (r.next = 4),
                        t.getCacheKey(n, 'read')
                      )
                    case 4:
                      return (
                        (u = r.sent),
                        (l = Object.assign(Object.assign({}, o), { cacheName: i })),
                        (r.next = 8),
                        caches.match(u, l)
                      )
                    case 8:
                      ;(s = r.sent), (h = d(t.iterateCallbacks('cachedResponseWillBeUsed'))), (r.prev = 11), h.s()
                    case 13:
                      if ((p = h.n()).done) {
                        r.next = 23
                        break
                      }
                      return (
                        (f = p.value),
                        (r.next = 17),
                        f({ cacheName: i, matchOptions: o, cachedResponse: s, request: u, event: t.event })
                      )
                    case 17:
                      if (((r.t0 = r.sent), r.t0)) {
                        r.next = 20
                        break
                      }
                      r.t0 = void 0
                    case 20:
                      s = r.t0
                    case 21:
                      r.next = 13
                      break
                    case 23:
                      r.next = 28
                      break
                    case 25:
                      ;(r.prev = 25), (r.t1 = r.catch(11)), h.e(r.t1)
                    case 28:
                      return (r.prev = 28), h.f(), r.finish(28)
                    case 31:
                      return r.abrupt('return', s)
                    case 32:
                    case 'end':
                      return r.stop()
                  }
              },
              r,
              null,
              [[11, 25, 28, 31]],
            )
          }),
        )()
      }
      cachePut(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s, c, i, o, u, l, h, p, f, v, g, b, m
            return a().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (s = D(e)), (n.next = 3), M(0)
                    case 3:
                      return (n.next = 5), r.getCacheKey(s, 'write')
                    case 5:
                      ;(c = n.sent), (n.next = 11)
                      break
                    case 9:
                      ;(i = t.headers.get('Vary')) &&
                        w.debug(
                          'The response for '.concat(q(c.url), ' ') +
                            "has a 'Vary: ".concat(i, "' header. ") +
                            'Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.',
                        )
                    case 11:
                      if (t) {
                        n.next = 14
                        break
                      }
                      throw new x('cache-put-with-no-response', { url: q(c.url) })
                    case 14:
                      return (n.next = 16), r._ensureResponseSafeToCache(t)
                    case 16:
                      if ((o = n.sent)) {
                        n.next = 20
                        break
                      }
                      return n.abrupt('return', !1)
                    case 20:
                      return (
                        (u = r._strategy), (l = u.cacheName), (h = u.matchOptions), (n.next = 23), self.caches.open(l)
                      )
                    case 23:
                      if (((p = n.sent), !(f = r.hasCallback('cacheDidUpdate')))) {
                        n.next = 31
                        break
                      }
                      return (n.next = 28), P(p, c.clone(), ['__WB_REVISION__'], h)
                    case 28:
                      ;(n.t0 = n.sent), (n.next = 32)
                      break
                    case 31:
                      n.t0 = null
                    case 32:
                      return (v = n.t0), (n.prev = 34), (n.next = 37), p.put(c, f ? o.clone() : o)
                    case 37:
                      n.next = 46
                      break
                    case 39:
                      if (((n.prev = 39), (n.t1 = n.catch(34)), !(n.t1 instanceof Error))) {
                        n.next = 46
                        break
                      }
                      if ('QuotaExceededError' !== n.t1.name) {
                        n.next = 45
                        break
                      }
                      return (n.next = 45), A()
                    case 45:
                      throw n.t1
                    case 46:
                      ;(g = d(r.iterateCallbacks('cacheDidUpdate'))), (n.prev = 47), g.s()
                    case 49:
                      if ((b = g.n()).done) {
                        n.next = 55
                        break
                      }
                      return (
                        (m = b.value),
                        (n.next = 53),
                        m({ cacheName: l, oldResponse: v, newResponse: o.clone(), request: c, event: r.event })
                      )
                    case 53:
                      n.next = 49
                      break
                    case 55:
                      n.next = 60
                      break
                    case 57:
                      ;(n.prev = 57), (n.t2 = n.catch(47)), g.e(n.t2)
                    case 60:
                      return (n.prev = 60), g.f(), n.finish(60)
                    case 63:
                      return n.abrupt('return', !0)
                    case 64:
                    case 'end':
                      return n.stop()
                  }
              },
              n,
              null,
              [
                [34, 39],
                [47, 57, 60, 63],
              ],
            )
          }),
        )()
      }
      getCacheKey(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s, c, i, o, u
            return a().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (((s = ''.concat(e.url, ' | ').concat(t)), r._cacheKeys[s])) {
                        n.next = 24
                        break
                      }
                      ;(c = e), (i = d(r.iterateCallbacks('cacheKeyWillBeUsed'))), (n.prev = 4), i.s()
                    case 6:
                      if ((o = i.n()).done) {
                        n.next = 15
                        break
                      }
                      return (
                        (u = o.value),
                        (n.t0 = D),
                        (n.next = 11),
                        u({ mode: t, request: c, event: r.event, params: r.params })
                      )
                    case 11:
                      ;(n.t1 = n.sent), (c = (0, n.t0)(n.t1))
                    case 13:
                      n.next = 6
                      break
                    case 15:
                      n.next = 20
                      break
                    case 17:
                      ;(n.prev = 17), (n.t2 = n.catch(4)), i.e(n.t2)
                    case 20:
                      return (n.prev = 20), i.f(), n.finish(20)
                    case 23:
                      r._cacheKeys[s] = c
                    case 24:
                      return n.abrupt('return', r._cacheKeys[s])
                    case 25:
                    case 'end':
                      return n.stop()
                  }
              },
              n,
              null,
              [[4, 17, 20, 23]],
            )
          }),
        )()
      }
      hasCallback(e) {
        var t,
          r = d(this._strategy.plugins)
        try {
          for (r.s(); !(t = r.n()).done; ) {
            if (e in t.value) return !0
          }
        } catch (n) {
          r.e(n)
        } finally {
          r.f()
        }
        return !1
      }
      runCallbacks(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s, c, i
            return a().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      ;(s = d(r.iterateCallbacks(e))), (n.prev = 1), s.s()
                    case 3:
                      if ((c = s.n()).done) {
                        n.next = 9
                        break
                      }
                      return (i = c.value), (n.next = 7), i(t)
                    case 7:
                      n.next = 3
                      break
                    case 9:
                      n.next = 14
                      break
                    case 11:
                      ;(n.prev = 11), (n.t0 = n.catch(1)), s.e(n.t0)
                    case 14:
                      return (n.prev = 14), s.f(), n.finish(14)
                    case 17:
                    case 'end':
                      return n.stop()
                  }
              },
              n,
              null,
              [[1, 11, 14, 17]],
            )
          }),
        )()
      }
      iterateCallbacks(e) {
        var t = this
        return a().mark(function r() {
          var n, s, c
          return a().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    ;(n = d(t._strategy.plugins)),
                      (r.prev = 1),
                      (c = a().mark(function r() {
                        var n, c, i
                        return a().wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if ('function' !== typeof (n = s.value)[e]) {
                                  r.next = 6
                                  break
                                }
                                return (
                                  (c = t._pluginStateMap.get(n)),
                                  (i = t => {
                                    var r = Object.assign(Object.assign({}, t), { state: c })
                                    return n[e](r)
                                  }),
                                  (r.next = 6),
                                  i
                                )
                              case 6:
                              case 'end':
                                return r.stop()
                            }
                        }, r)
                      })),
                      n.s()
                  case 4:
                    if ((s = n.n()).done) {
                      r.next = 8
                      break
                    }
                    return r.delegateYield(c(), 't0', 6)
                  case 6:
                    r.next = 4
                    break
                  case 8:
                    r.next = 13
                    break
                  case 10:
                    ;(r.prev = 10), (r.t1 = r.catch(1)), n.e(r.t1)
                  case 13:
                    return (r.prev = 13), n.f(), r.finish(13)
                  case 16:
                  case 'end':
                    return r.stop()
                }
            },
            r,
            null,
            [[1, 10, 13, 16]],
          )
        })()
      }
      waitUntil(e) {
        return this._extendLifetimePromises.push(e), e
      }
      doneWaiting() {
        var e = this
        return l(
          a().mark(function t() {
            var r
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(r = e._extendLifetimePromises.shift())) {
                      t.next = 5
                      break
                    }
                    return (t.next = 3), r
                  case 3:
                    t.next = 0
                    break
                  case 5:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )()
      }
      destroy() {
        this._handlerDeferred.resolve(null)
      }
      _ensureResponseSafeToCache(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s, c, i, o
            return a().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      ;(n = e), (s = !1), (c = d(t.iterateCallbacks('cacheWillUpdate'))), (r.prev = 3), c.s()
                    case 5:
                      if ((i = c.n()).done) {
                        r.next = 18
                        break
                      }
                      return (o = i.value), (r.next = 9), o({ request: t.request, response: n, event: t.event })
                    case 9:
                      if (((r.t0 = r.sent), r.t0)) {
                        r.next = 12
                        break
                      }
                      r.t0 = void 0
                    case 12:
                      if (((n = r.t0), (s = !0), n)) {
                        r.next = 16
                        break
                      }
                      return r.abrupt('break', 18)
                    case 16:
                      r.next = 5
                      break
                    case 18:
                      r.next = 23
                      break
                    case 20:
                      ;(r.prev = 20), (r.t1 = r.catch(3)), c.e(r.t1)
                    case 23:
                      return (r.prev = 23), c.f(), r.finish(23)
                    case 26:
                      return s || (n && 200 !== n.status && (n = void 0)), r.abrupt('return', n)
                    case 28:
                    case 'end':
                      return r.stop()
                  }
              },
              r,
              null,
              [[3, 20, 23, 26]],
            )
          }),
        )()
      }
    }
    class F {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ;(this.cacheName = y(e.cacheName)),
          (this.plugins = e.plugins || []),
          (this.fetchOptions = e.fetchOptions),
          (this.matchOptions = e.matchOptions)
      }
      handle(e) {
        return f(this.handleAll(e), 1)[0]
      }
      handleAll(e) {
        e instanceof FetchEvent && (e = { event: e, request: e.request })
        var t = e.event,
          r = 'string' === typeof e.request ? new Request(e.request) : e.request,
          n = 'params' in e ? e.params : void 0,
          a = new W(this, { event: t, request: r, params: n }),
          s = this._getResponse(a, r, t)
        return [s, this._awaitComplete(s, a, r, t)]
      }
      _getResponse(e, t, r) {
        var n = this
        return l(
          a().mark(function s() {
            var c, i, o, u, l, h, p
            return a().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (a.next = 2), e.runCallbacks('handlerWillStart', { event: r, request: t })
                    case 2:
                      return (c = void 0), (a.prev = 3), (a.next = 6), n._handle(t, e)
                    case 6:
                      if ((c = a.sent) && 'error' !== c.type) {
                        a.next = 9
                        break
                      }
                      throw new x('no-response', { url: t.url })
                    case 9:
                      a.next = 39
                      break
                    case 11:
                      if (((a.prev = 11), (a.t0 = a.catch(3)), !(a.t0 instanceof Error))) {
                        a.next = 34
                        break
                      }
                      ;(i = d(e.iterateCallbacks('handlerDidError'))), (a.prev = 15), i.s()
                    case 17:
                      if ((o = i.n()).done) {
                        a.next = 26
                        break
                      }
                      return (u = o.value), (a.next = 21), u({ error: a.t0, event: r, request: t })
                    case 21:
                      if (!(c = a.sent)) {
                        a.next = 24
                        break
                      }
                      return a.abrupt('break', 26)
                    case 24:
                      a.next = 17
                      break
                    case 26:
                      a.next = 31
                      break
                    case 28:
                      ;(a.prev = 28), (a.t1 = a.catch(15)), i.e(a.t1)
                    case 31:
                      return (a.prev = 31), i.f(), a.finish(31)
                    case 34:
                      if (c) {
                        a.next = 38
                        break
                      }
                      throw a.t0
                    case 38:
                      0
                    case 39:
                      ;(l = d(e.iterateCallbacks('handlerWillRespond'))), (a.prev = 40), l.s()
                    case 42:
                      if ((h = l.n()).done) {
                        a.next = 49
                        break
                      }
                      return (p = h.value), (a.next = 46), p({ event: r, request: t, response: c })
                    case 46:
                      c = a.sent
                    case 47:
                      a.next = 42
                      break
                    case 49:
                      a.next = 54
                      break
                    case 51:
                      ;(a.prev = 51), (a.t2 = a.catch(40)), l.e(a.t2)
                    case 54:
                      return (a.prev = 54), l.f(), a.finish(54)
                    case 57:
                      return a.abrupt('return', c)
                    case 58:
                    case 'end':
                      return a.stop()
                  }
              },
              s,
              null,
              [
                [3, 11],
                [15, 28, 31, 34],
                [40, 51, 54, 57],
              ],
            )
          }),
        )()
      }
      _awaitComplete(e, t, r, n) {
        return l(
          a().mark(function s() {
            var c, i
            return a().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (a.prev = 0), (a.next = 3), e
                    case 3:
                      ;(c = a.sent), (a.next = 8)
                      break
                    case 6:
                      ;(a.prev = 6), (a.t0 = a.catch(0))
                    case 8:
                      return (
                        (a.prev = 8),
                        (a.next = 11),
                        t.runCallbacks('handlerDidRespond', { event: n, request: r, response: c })
                      )
                    case 11:
                      return (a.next = 13), t.doneWaiting()
                    case 13:
                      a.next = 18
                      break
                    case 15:
                      ;(a.prev = 15), (a.t1 = a.catch(8)), a.t1 instanceof Error && (i = a.t1)
                    case 18:
                      return (
                        (a.next = 20),
                        t.runCallbacks('handlerDidComplete', { event: n, request: r, response: c, error: i })
                      )
                    case 20:
                      if ((t.destroy(), !i)) {
                        a.next = 23
                        break
                      }
                      throw i
                    case 23:
                    case 'end':
                      return a.stop()
                  }
              },
              s,
              null,
              [
                [0, 6],
                [8, 15],
              ],
            )
          }),
        )()
      }
    }
    class H extends F {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ;(e.cacheName = m(e.cacheName)),
          super(e),
          (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
          this.plugins.push(H.copyRedirectedCacheableResponsesPlugin)
      }
      _handle(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), t.cacheMatch(e)
                  case 2:
                    if (!(s = n.sent)) {
                      n.next = 5
                      break
                    }
                    return n.abrupt('return', s)
                  case 5:
                    if (!t.event || 'install' !== t.event.type) {
                      n.next = 9
                      break
                    }
                    return (n.next = 8), r._handleInstall(e, t)
                  case 8:
                  case 11:
                    return n.abrupt('return', n.sent)
                  case 9:
                    return (n.next = 11), r._handleFetch(e, t)
                  case 12:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      _handleFetch(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s, c, i, o, u, l
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (((c = t.params || {}), !r._fallbackToNetwork)) {
                      n.next = 17
                      break
                    }
                    return (
                      (i = c.integrity),
                      (o = e.integrity),
                      (u = !o || o === i),
                      (n.next = 8),
                      t.fetch(new Request(e, { integrity: 'no-cors' !== e.mode ? o || i : void 0 }))
                    )
                  case 8:
                    if (((s = n.sent), !i || !u || 'no-cors' === e.mode)) {
                      n.next = 15
                      break
                    }
                    return r._useDefaultCacheabilityPluginIfNeeded(), (n.next = 13), t.cachePut(e, s.clone())
                  case 13:
                    n.sent
                  case 15:
                    n.next = 18
                    break
                  case 17:
                    throw new x('missing-precache-entry', { cacheName: r.cacheName, url: e.url })
                  case 18:
                    n.next = 34
                    break
                  case 23:
                    n.t0 = n.sent
                  case 24:
                    ;(l = n.t0),
                      w.groupCollapsed('Precaching is responding to: ' + q(e.url)),
                      w.log('Serving the precached url: '.concat(q(l instanceof Request ? l.url : l))),
                      w.groupCollapsed('View request details here.'),
                      w.log(e),
                      w.groupEnd(),
                      w.groupCollapsed('View response details here.'),
                      w.log(s),
                      w.groupEnd(),
                      w.groupEnd()
                  case 34:
                    return n.abrupt('return', s)
                  case 35:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      _handleInstall(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return r._useDefaultCacheabilityPluginIfNeeded(), (n.next = 3), t.fetch(e)
                  case 3:
                    return (s = n.sent), (n.next = 6), t.cachePut(e, s.clone())
                  case 6:
                    if (n.sent) {
                      n.next = 9
                      break
                    }
                    throw new x('bad-precaching-response', { url: e.url, status: s.status })
                  case 9:
                    return n.abrupt('return', s)
                  case 10:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      _useDefaultCacheabilityPluginIfNeeded() {
        var e,
          t = null,
          r = 0,
          n = d(this.plugins.entries())
        try {
          for (n.s(); !(e = n.n()).done; ) {
            var a = f(e.value, 2),
              s = a[0],
              c = a[1]
            c !== H.copyRedirectedCacheableResponsesPlugin &&
              (c === H.defaultPrecacheCacheabilityPlugin && (t = s), c.cacheWillUpdate && r++)
          }
        } catch (i) {
          n.e(i)
        } finally {
          n.f()
        }
        0 === r
          ? this.plugins.push(H.defaultPrecacheCacheabilityPlugin)
          : r > 1 && null !== t && this.plugins.splice(t, 1)
      }
    }
    ;(H.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: e =>
        l(
          a().mark(function t() {
            var r
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((r = e.response) && !(r.status >= 400)) {
                      t.next = 3
                      break
                    }
                    return t.abrupt('return', null)
                  case 3:
                    return t.abrupt('return', r)
                  case 4:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )(),
    }),
      (H.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: e =>
          l(
            a().mark(function t() {
              var r
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(r = e.response).redirected) {
                        t.next = 7
                        break
                      }
                      return (t.next = 4), O(r)
                    case 4:
                      ;(t.t0 = t.sent), (t.next = 8)
                      break
                    case 7:
                      t.t0 = r
                    case 8:
                      return t.abrupt('return', t.t0)
                    case 9:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )(),
      })
    class B {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.cacheName,
          r = e.plugins,
          n = void 0 === r ? [] : r,
          a = e.fallbackToNetwork,
          s = void 0 === a || a
        ;(this._urlsToCacheKeys = new Map()),
          (this._urlsToCacheModes = new Map()),
          (this._cacheKeysToIntegrities = new Map()),
          (this._strategy = new H({
            cacheName: m(t),
            plugins: [...n, new C({ precacheController: this })],
            fallbackToNetwork: s,
          })),
          (this.install = this.install.bind(this)),
          (this.activate = this.activate.bind(this))
      }
      get strategy() {
        return this._strategy
      }
      precache(e) {
        this.addToCacheList(e),
          this._installAndActiveListenersAdded ||
            (self.addEventListener('install', this.install),
            self.addEventListener('activate', this.activate),
            (this._installAndActiveListenersAdded = !0))
      }
      addToCacheList(e) {
        var t,
          r = [],
          n = d(e)
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var a = t.value
            'string' === typeof a ? r.push(a) : a && void 0 === a.revision && r.push(a.url)
            var s = _(a),
              c = s.cacheKey,
              i = s.url,
              o = 'string' !== typeof a && a.revision ? 'reload' : 'default'
            if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== c)
              throw new x('add-to-cache-list-conflicting-entries', {
                firstEntry: this._urlsToCacheKeys.get(i),
                secondEntry: c,
              })
            if ('string' !== typeof a && a.integrity) {
              if (this._cacheKeysToIntegrities.has(c) && this._cacheKeysToIntegrities.get(c) !== a.integrity)
                throw new x('add-to-cache-list-conflicting-integrities', { url: i })
              this._cacheKeysToIntegrities.set(c, a.integrity)
            }
            if ((this._urlsToCacheKeys.set(i, c), this._urlsToCacheModes.set(i, o), r.length > 0)) {
              var u =
                'Workbox is precaching URLs without revision ' +
                'info: '.concat(r.join(', '), '\nThis is generally NOT safe. ') +
                'Learn more at https://bit.ly/wb-precache'
              console.warn(u)
            }
          }
        } catch (l) {
          n.e(l)
        } finally {
          n.f()
        }
      }
      install(e) {
        var t = this
        return k(
          e,
          l(
            a().mark(function r() {
              var n, s, c, i, o, u, l, h, p, v, x
              return a().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        ;(n = new R()), t.strategy.plugins.push(n), (s = d(t._urlsToCacheKeys)), (r.prev = 3), s.s()
                      case 5:
                        if ((c = s.n()).done) {
                          r.next = 14
                          break
                        }
                        return (
                          (i = f(c.value, 2)),
                          (o = i[0]),
                          (u = i[1]),
                          (l = t._cacheKeysToIntegrities.get(u)),
                          (h = t._urlsToCacheModes.get(o)),
                          (p = new Request(o, { integrity: l, cache: h, credentials: 'same-origin' })),
                          (r.next = 12),
                          Promise.all(t.strategy.handleAll({ params: { cacheKey: u }, request: p, event: e }))
                        )
                      case 12:
                        r.next = 5
                        break
                      case 14:
                        r.next = 19
                        break
                      case 16:
                        ;(r.prev = 16), (r.t0 = r.catch(3)), s.e(r.t0)
                      case 19:
                        return (r.prev = 19), s.f(), r.finish(19)
                      case 22:
                        return (
                          (v = n.updatedURLs),
                          (x = n.notUpdatedURLs),
                          r.abrupt('return', { updatedURLs: v, notUpdatedURLs: x })
                        )
                      case 25:
                      case 'end':
                        return r.stop()
                    }
                },
                r,
                null,
                [[3, 16, 19, 22]],
              )
            }),
          ),
        )
      }
      activate(e) {
        var t = this
        return k(
          e,
          l(
            a().mark(function e() {
              var r, n, s, c, i, o, u
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), self.caches.open(t.strategy.cacheName)
                      case 2:
                        return (r = e.sent), (e.next = 5), r.keys()
                      case 5:
                        ;(n = e.sent),
                          (s = new Set(t._urlsToCacheKeys.values())),
                          (c = []),
                          (i = d(n)),
                          (e.prev = 9),
                          i.s()
                      case 11:
                        if ((o = i.n()).done) {
                          e.next = 19
                          break
                        }
                        if (((u = o.value), s.has(u.url))) {
                          e.next = 17
                          break
                        }
                        return (e.next = 16), r.delete(u)
                      case 16:
                        c.push(u.url)
                      case 17:
                        e.next = 11
                        break
                      case 19:
                        e.next = 24
                        break
                      case 21:
                        ;(e.prev = 21), (e.t0 = e.catch(9)), i.e(e.t0)
                      case 24:
                        return (e.prev = 24), i.f(), e.finish(24)
                      case 27:
                        return e.abrupt('return', { deletedURLs: c })
                      case 29:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[9, 21, 24, 27]],
              )
            }),
          ),
        )
      }
      getURLsToCacheKeys() {
        return this._urlsToCacheKeys
      }
      getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()]
      }
      getCacheKeyForURL(e) {
        var t = new URL(e, location.href)
        return this._urlsToCacheKeys.get(t.href)
      }
      getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e)
      }
      matchPrecache(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s, c
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (((n = e instanceof Request ? e.url : e), !(s = t.getCacheKeyForURL(n)))) {
                      r.next = 7
                      break
                    }
                    return (r.next = 5), self.caches.open(t.strategy.cacheName)
                  case 5:
                    return (c = r.sent), r.abrupt('return', c.match(s))
                  case 7:
                    return r.abrupt('return', void 0)
                  case 8:
                  case 'end':
                    return r.stop()
                }
            }, r)
          }),
        )()
      }
      createHandlerBoundToURL(e) {
        var t = this.getCacheKeyForURL(e)
        if (!t) throw new x('non-precached-url', { url: e })
        return r => (
          (r.request = new Request(e)), (r.params = Object.assign({ cacheKey: t }, r.params)), this.strategy.handle(r)
        )
      }
    }
    var G = () => (I || (I = new B()), I)
    r('./node_modules/workbox-routing/_version.js')
    var V,
      $ = e => (e && 'object' === typeof e ? e : { handle: e })
    class Y {
      constructor(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'GET'
        ;(this.handler = $(t)), (this.match = e), (this.method = r)
      }
      setCatchHandler(e) {
        this.catchHandler = $(e)
      }
    }
    class J extends Y {
      constructor(e, t, r) {
        super(
          t => {
            var r = t.url,
              n = e.exec(r.href)
            if (n && (r.origin === location.origin || 0 === n.index)) return n.slice(1)
          },
          t,
          r,
        )
      }
    }
    class Q {
      constructor() {
        ;(this._routes = new Map()), (this._defaultHandlerMap = new Map())
      }
      get routes() {
        return this._routes
      }
      addFetchListener() {
        self.addEventListener('fetch', e => {
          var t = e.request,
            r = this.handleRequest({ request: t, event: e })
          r && e.respondWith(r)
        })
      }
      addCacheListener() {
        self.addEventListener('message', e => {
          if (e.data && 'CACHE_URLS' === e.data.type) {
            var t = e.data.payload
            0
            var r = Promise.all(
              t.urlsToCache.map(t => {
                'string' === typeof t && (t = [t])
                var r = new Request(...t)
                return this.handleRequest({ request: r, event: e })
              }),
            )
            e.waitUntil(r), e.ports && e.ports[0] && r.then(() => e.ports[0].postMessage(!0))
          }
        })
      }
      handleRequest(e) {
        var t = this,
          r = e.request,
          n = e.event
        var s = new URL(r.url, location.href)
        if (s.protocol.startsWith('http')) {
          var c = s.origin === location.origin,
            i = this.findMatchingRoute({ event: n, request: r, sameOrigin: c, url: s }),
            o = i.params,
            u = i.route,
            h = u && u.handler
          0
          var p = r.method
          if ((!h && this._defaultHandlerMap.has(p) && (h = this._defaultHandlerMap.get(p)), h)) {
            var f
            0
            try {
              f = h.handle({ url: s, request: r, event: n, params: o })
            } catch (v) {
              f = Promise.reject(v)
            }
            var d = u && u.catchHandler
            return (
              f instanceof Promise &&
                (this._catchHandler || d) &&
                (f = f.catch(
                  (function () {
                    var e = l(
                      a().mark(function e(c) {
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!d) {
                                    e.next = 11
                                    break
                                  }
                                  return (
                                    (e.prev = 2), (e.next = 5), d.handle({ url: s, request: r, event: n, params: o })
                                  )
                                case 5:
                                  return e.abrupt('return', e.sent)
                                case 8:
                                  ;(e.prev = 8), (e.t0 = e.catch(2)), e.t0 instanceof Error && (c = e.t0)
                                case 11:
                                  if (!t._catchHandler) {
                                    e.next = 14
                                    break
                                  }
                                  return e.abrupt('return', t._catchHandler.handle({ url: s, request: r, event: n }))
                                case 14:
                                  throw c
                                case 15:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[2, 8]],
                        )
                      }),
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                )),
              f
            )
          }
        }
      }
      findMatchingRoute(e) {
        var t,
          r = e.url,
          n = e.sameOrigin,
          a = e.request,
          s = e.event,
          c = d(this._routes.get(a.method) || [])
        try {
          for (c.s(); !(t = c.n()).done; ) {
            var i = t.value,
              o = void 0,
              u = i.match({ url: r, sameOrigin: n, request: a, event: s })
            if (u)
              return (
                (o = u),
                ((Array.isArray(o) && 0 === o.length) ||
                  (u.constructor === Object && 0 === Object.keys(u).length) ||
                  'boolean' === typeof u) &&
                  (o = void 0),
                { route: i, params: o }
              )
          }
        } catch (l) {
          c.e(l)
        } finally {
          c.f()
        }
        return {}
      }
      setDefaultHandler(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'GET'
        this._defaultHandlerMap.set(t, $(e))
      }
      setCatchHandler(e) {
        this._catchHandler = $(e)
      }
      registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
      }
      unregisterRoute(e) {
        if (!this._routes.has(e.method)) throw new x('unregister-route-but-not-found-with-method', { method: e.method })
        var t = this._routes.get(e.method).indexOf(e)
        if (!(t > -1)) throw new x('unregister-route-route-not-registered')
        this._routes.get(e.method).splice(t, 1)
      }
    }
    var z = () => (V || ((V = new Q()).addFetchListener(), V.addCacheListener()), V)
    function X(e, t, r) {
      var n
      if ('string' === typeof e) {
        var a = new URL(e, location.href)
        n = new Y(e => e.url.href === a.href, t, r)
      } else if (e instanceof RegExp) n = new J(e, t, r)
      else if ('function' === typeof e) n = new Y(e, t, r)
      else {
        if (!(e instanceof Y))
          throw new x('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
          })
        n = e
      }
      return z().registerRoute(n), n
    }
    function Z(e) {
      for (
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = function () {
            var r = a[n]
            t.some(e => e.test(r)) && e.searchParams.delete(r)
          },
          n = 0,
          a = [...e.searchParams.keys()];
        n < a.length;
        n++
      )
        r()
      return e
    }
    class ee extends Y {
      constructor(e, t) {
        super(r => {
          var n,
            s = r.request,
            c = e.getURLsToCacheKeys(),
            i = d(
              (function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  r = t.ignoreURLParametersMatching,
                  n = void 0 === r ? [/^utm_/, /^fbclid$/] : r,
                  s = t.directoryIndex,
                  c = void 0 === s ? 'index.html' : s,
                  i = t.cleanURLs,
                  o = void 0 === i || i,
                  u = t.urlManipulation
                return a().mark(function t() {
                  var r, s, i, l, h, p, f, v
                  return a().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return ((r = new URL(e, location.href)).hash = ''), (t.next = 4), r.href
                          case 4:
                            return (s = Z(r, n)), (t.next = 7), s.href
                          case 7:
                            if (!c || !s.pathname.endsWith('/')) {
                              t.next = 12
                              break
                            }
                            return ((i = new URL(s.href)).pathname += c), (t.next = 12), i.href
                          case 12:
                            if (!o) {
                              t.next = 17
                              break
                            }
                            return ((l = new URL(s.href)).pathname += '.html'), (t.next = 17), l.href
                          case 17:
                            if (!u) {
                              t.next = 36
                              break
                            }
                            ;(h = u({ url: r })), (p = d(h)), (t.prev = 20), p.s()
                          case 22:
                            if ((f = p.n()).done) {
                              t.next = 28
                              break
                            }
                            return (v = f.value), (t.next = 26), v.href
                          case 26:
                            t.next = 22
                            break
                          case 28:
                            t.next = 33
                            break
                          case 30:
                            ;(t.prev = 30), (t.t0 = t.catch(20)), p.e(t.t0)
                          case 33:
                            return (t.prev = 33), p.f(), t.finish(33)
                          case 36:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[20, 30, 33, 36]],
                  )
                })()
              })(s.url, t),
            )
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var o = n.value,
                u = c.get(o)
              if (u) return { cacheKey: u, integrity: e.getIntegrityForCacheKey(u) }
            }
          } catch (l) {
            i.e(l)
          } finally {
            i.f()
          }
        }, e.strategy)
      }
    }
    function te(e) {
      return G().getCacheKeyForURL(e)
    }
    function re(e) {
      return G().matchPrecache(e)
    }
    var ne = new RegExp('/[^/?]+\\.[^/]+$'),
      ae = '/index.html'
    function se(e) {
      var t = e.request,
        r = e.url
      return (
        'navigate' === t.mode &&
        !r.pathname.match(ne) &&
        !!Boolean(
          'localhost' === self.location.hostname ||
            '[::1]' === self.location.hostname ||
            self.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
        )
      )
    }
    function ce(e) {
      return ie.apply(this, arguments)
    }
    function ie() {
      return (ie = l(
        a().mark(function e(t) {
          var r, n, s, c, i, o, u, l, h
          return a().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((t.event, (s = t.request), !('onLine' in navigator) || navigator.onLine)) {
                      e.next = 3
                      break
                    }
                    return e.abrupt(
                      'return',
                      (null === this || void 0 === this || null === (r = this.offlineDocument) || void 0 === r
                        ? void 0
                        : r.clone()) || fetch(s),
                    )
                  case 3:
                    return (c = te(ae)), (e.next = 6), re(ae)
                  case 6:
                    return (
                      (i = e.sent),
                      (o = new AbortController()),
                      (e.prev = 8),
                      (e.next = 11),
                      fetch(c || ae, { cache: 'reload', signal: o.signal })
                    )
                  case 11:
                    if (((u = e.sent), i)) {
                      e.next = 14
                      break
                    }
                    return e.abrupt('return', new Response(u.body, u))
                  case 14:
                    e.next = 21
                    break
                  case 16:
                    if (((e.prev = 16), (e.t0 = e.catch(8)), i)) {
                      e.next = 20
                      break
                    }
                    throw e.t0
                  case 20:
                    return e.abrupt('return', oe.from(i))
                  case 21:
                    if (
                      ((l = null === (n = u) || void 0 === n ? void 0 : n.headers.get('etag')),
                      (h = null === i || void 0 === i ? void 0 : i.headers.get('etag')),
                      !l || l !== h)
                    ) {
                      e.next = 26
                      break
                    }
                    return o.abort(), e.abrupt('return', oe.from(i))
                  case 26:
                    return e.abrupt('return', new Response(u.body, u))
                  case 27:
                  case 'end':
                    return e.stop()
                }
            },
            e,
            this,
            [[8, 16]],
          )
        }),
      )).apply(this, arguments)
    }
    class oe extends Response {
      static from(e) {
        return l(
          a().mark(function t() {
            var r, n, s
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), e.text()
                  case 2:
                    return (
                      (r = t.sent),
                      (n = new Headers(e.headers)).set('Content-Type', 'text/html; charset=utf-8'),
                      (s = o(o({}, e), {}, { headers: n })),
                      t.abrupt(
                        'return',
                        new oe(r.replace('<body>', '<body><script>window.__isDocumentCached=true</script>'), s),
                      )
                    )
                  case 7:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )()
      }
      constructor(e, t) {
        super(e, t)
      }
    }
    r('./node_modules/workbox-expiration/node_modules/workbox-core/_version.js')
    var ue = function (e) {
      for (var t = e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a]
      return n.length > 0 && (t += ' :: '.concat(JSON.stringify(n))), t
    }
    class le extends Error {
      constructor(e, t) {
        super(ue(e, t)), (this.name = e), (this.details = t)
      }
    }
    function he(e) {
      e.then(() => {})
    }
    class pe {
      constructor(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.onupgradeneeded,
          a = r.onversionchange
        ;(this._db = null),
          (this._name = e),
          (this._version = t),
          (this._onupgradeneeded = n),
          (this._onversionchange = a || (() => this.close()))
      }
      get db() {
        return this._db
      }
      open() {
        var e = this
        return l(
          a().mark(function t() {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!e._db) {
                      t.next = 2
                      break
                    }
                    return t.abrupt('return')
                  case 2:
                    return (
                      (t.next = 4),
                      new Promise((t, r) => {
                        var n = !1
                        setTimeout(() => {
                          ;(n = !0), r(new Error('The open request was blocked and timed out'))
                        }, e.OPEN_TIMEOUT)
                        var a = indexedDB.open(e._name, e._version)
                        ;(a.onerror = () => r(a.error)),
                          (a.onupgradeneeded = t => {
                            n
                              ? (a.transaction.abort(), a.result.close())
                              : 'function' === typeof e._onupgradeneeded && e._onupgradeneeded(t)
                          }),
                          (a.onsuccess = () => {
                            var r = a.result
                            n ? r.close() : ((r.onversionchange = e._onversionchange.bind(e)), t(r))
                          })
                      })
                    )
                  case 4:
                    return (e._db = t.sent), t.abrupt('return', e)
                  case 6:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )()
      }
      getKey(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), r.getAllKeys(e, t, 1)
                  case 2:
                    return n.abrupt('return', n.sent[0])
                  case 3:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      getAll(e, t, r) {
        var n = this
        return l(
          a().mark(function s() {
            return a().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), n.getAllMatching(e, { query: t, count: r })
                  case 2:
                    return a.abrupt('return', a.sent)
                  case 3:
                  case 'end':
                    return a.stop()
                }
            }, s)
          }),
        )()
      }
      getAllKeys(e, t, r) {
        var n = this
        return l(
          a().mark(function s() {
            var c
            return a().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), n.getAllMatching(e, { query: t, count: r, includeKeys: !0 })
                  case 2:
                    return (
                      (c = a.sent),
                      a.abrupt(
                        'return',
                        c.map(e => e.key),
                      )
                    )
                  case 4:
                  case 'end':
                    return a.stop()
                }
            }, s)
          }),
        )()
      }
      getAllMatching(e) {
        var t = arguments,
          r = this
        return l(
          a().mark(function n() {
            var s, c, i, o, u, l, h, p, f
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (c = (s = t.length > 1 && void 0 !== t[1] ? t[1] : {}).index),
                      (i = s.query),
                      (o = void 0 === i ? null : i),
                      (u = s.direction),
                      (l = void 0 === u ? 'next' : u),
                      (h = s.count),
                      (p = s.includeKeys),
                      (f = void 0 !== p && p),
                      (n.next = 3),
                      r.transaction([e], 'readonly', (t, r) => {
                        var n = t.objectStore(e),
                          a = c ? n.index(c) : n,
                          s = [],
                          i = a.openCursor(o, l)
                        i.onsuccess = () => {
                          var e = i.result
                          e ? (s.push(f ? e : e.value), h && s.length >= h ? r(s) : e.continue()) : r(s)
                        }
                      })
                    )
                  case 3:
                    return n.abrupt('return', n.sent)
                  case 4:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      transaction(e, t, r) {
        var n = this
        return l(
          a().mark(function s() {
            return a().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), n.open()
                  case 2:
                    return (
                      (a.next = 4),
                      new Promise((a, s) => {
                        var c = n._db.transaction(e, t)
                        ;(c.onabort = () => s(c.error)), (c.oncomplete = () => a()), r(c, e => a(e))
                      })
                    )
                  case 4:
                    return a.abrupt('return', a.sent)
                  case 5:
                  case 'end':
                    return a.stop()
                }
            }, s)
          }),
        )()
      }
      _call(e, t, r) {
        var n = arguments,
          s = this
        return l(
          a().mark(function c() {
            var i, o, u, l
            return a().wrap(function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    for (i = n.length, o = new Array(i > 3 ? i - 3 : 0), u = 3; u < i; u++) o[u - 3] = n[u]
                    return (
                      (l = (r, n) => {
                        var a = r.objectStore(t),
                          s = a[e].apply(a, o)
                        s.onsuccess = () => n(s.result)
                      }),
                      (a.next = 4),
                      s.transaction([t], r, l)
                    )
                  case 4:
                    return a.abrupt('return', a.sent)
                  case 5:
                  case 'end':
                    return a.stop()
                }
            }, c)
          }),
        )()
      }
      close() {
        this._db && (this._db.close(), (this._db = null))
      }
    }
    pe.prototype.OPEN_TIMEOUT = 2e3
    for (
      var fe = function () {
          var e,
            t = f(ve[de], 2),
            r = t[0],
            n = d(t[1])
          try {
            var s = function () {
              var t = e.value
              ;(t in IDBObjectStore.prototype) &&
                (pe.prototype[t] = (function () {
                  var e = l(
                    a().mark(function e(n) {
                      var s,
                        c,
                        i,
                        o = arguments
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (s = o.length, c = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++) c[i - 1] = o[i]
                                return (e.next = 3), this._call(t, n, r, ...c)
                              case 3:
                                return e.abrupt('return', e.sent)
                              case 4:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                      )
                    }),
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })())
            }
            for (n.s(); !(e = n.n()).done; ) s()
          } catch (c) {
            n.e(c)
          } finally {
            n.f()
          }
        },
        de = 0,
        ve = Object.entries({
          readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
          readwrite: ['add', 'put', 'clear', 'delete'],
        });
      de < ve.length;
      de++
    )
      fe()
    var xe = (function () {
        var e = l(
          a().mark(function e(t) {
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise((e, r) => {
                        var n = indexedDB.deleteDatabase(t)
                        ;(n.onerror = () => {
                          r(n.error)
                        }),
                          (n.onblocked = () => {
                            r(new Error('Delete blocked'))
                          }),
                          (n.onsuccess = () => {
                            e()
                          })
                      })
                    )
                  case 2:
                  case 'end':
                    return e.stop()
                }
            }, e)
          }),
        )
        return function (t) {
          return e.apply(this, arguments)
        }
      })(),
      ge = (r('./node_modules/workbox-expiration/_version.js'), 'cache-entries'),
      be = e => {
        var t = new URL(e, location.href)
        return (t.hash = ''), t.href
      }
    class me {
      constructor(e) {
        ;(this._cacheName = e),
          (this._db = new pe('workbox-expiration', 1, { onupgradeneeded: e => this._handleUpgrade(e) }))
      }
      _handleUpgrade(e) {
        var t = e.target.result.createObjectStore(ge, { keyPath: 'id' })
        t.createIndex('cacheName', 'cacheName', { unique: !1 }),
          t.createIndex('timestamp', 'timestamp', { unique: !1 }),
          xe(this._cacheName)
      }
      setTimestamp(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s
            return a().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (e = be(e)),
                      (s = { url: e, timestamp: t, cacheName: r._cacheName, id: r._getId(e) }),
                      (n.next = 4),
                      r._db.put(ge, s)
                    )
                  case 4:
                  case 'end':
                    return n.stop()
                }
            }, n)
          }),
        )()
      }
      getTimestamp(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 2), t._db.get(ge, t._getId(e))
                  case 2:
                    return (n = r.sent), r.abrupt('return', n.timestamp)
                  case 4:
                  case 'end':
                    return r.stop()
                }
            }, r)
          }),
        )()
      }
      expireEntries(e, t) {
        var r = this
        return l(
          a().mark(function n() {
            var s, c, i, o, u
            return a().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        r._db.transaction(ge, 'readwrite', (n, a) => {
                          var s = n.objectStore(ge).index('timestamp').openCursor(null, 'prev'),
                            c = [],
                            i = 0
                          s.onsuccess = () => {
                            var n = s.result
                            if (n) {
                              var o = n.value
                              o.cacheName === r._cacheName &&
                                ((e && o.timestamp < e) || (t && i >= t) ? c.push(n.value) : i++),
                                n.continue()
                            } else a(c)
                          }
                        })
                      )
                    case 2:
                      ;(s = n.sent), (c = []), (i = d(s)), (n.prev = 5), i.s()
                    case 7:
                      if ((o = i.n()).done) {
                        n.next = 14
                        break
                      }
                      return (u = o.value), (n.next = 11), r._db.delete(ge, u.id)
                    case 11:
                      c.push(u.url)
                    case 12:
                      n.next = 7
                      break
                    case 14:
                      n.next = 19
                      break
                    case 16:
                      ;(n.prev = 16), (n.t0 = n.catch(5)), i.e(n.t0)
                    case 19:
                      return (n.prev = 19), i.f(), n.finish(19)
                    case 22:
                      return n.abrupt('return', c)
                    case 23:
                    case 'end':
                      return n.stop()
                  }
              },
              n,
              null,
              [[5, 16, 19, 22]],
            )
          }),
        )()
      }
      _getId(e) {
        return this._cacheName + '|' + be(e)
      }
    }
    class ye {
      constructor(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        ;(this._isRunning = !1),
          (this._rerunRequested = !1),
          (this._maxEntries = t.maxEntries),
          (this._maxAgeSeconds = t.maxAgeSeconds),
          (this._cacheName = e),
          (this._timestampModel = new me(e))
      }
      expireEntries() {
        var e = this
        return l(
          a().mark(function t() {
            var r, n, s, c, i, o
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!e._isRunning) {
                        t.next = 3
                        break
                      }
                      return (e._rerunRequested = !0), t.abrupt('return')
                    case 3:
                      return (
                        (e._isRunning = !0),
                        (r = e._maxAgeSeconds ? Date.now() - 1e3 * e._maxAgeSeconds : 0),
                        (t.next = 7),
                        e._timestampModel.expireEntries(r, e._maxEntries)
                      )
                    case 7:
                      return (n = t.sent), (t.next = 10), self.caches.open(e._cacheName)
                    case 10:
                      ;(s = t.sent), (c = d(n)), (t.prev = 12), c.s()
                    case 14:
                      if ((i = c.n()).done) {
                        t.next = 20
                        break
                      }
                      return (o = i.value), (t.next = 18), s.delete(o)
                    case 18:
                      t.next = 14
                      break
                    case 20:
                      t.next = 25
                      break
                    case 22:
                      ;(t.prev = 22), (t.t0 = t.catch(12)), c.e(t.t0)
                    case 25:
                      return (t.prev = 25), c.f(), t.finish(25)
                    case 28:
                      0, (e._isRunning = !1), e._rerunRequested && ((e._rerunRequested = !1), he(e.expireEntries()))
                    case 31:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              null,
              [[12, 22, 25, 28]],
            )
          }),
        )()
      }
      updateTimestamp(e) {
        var t = this
        return l(
          a().mark(function r() {
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 3), t._timestampModel.setTimestamp(e, Date.now())
                  case 3:
                  case 'end':
                    return r.stop()
                }
            }, r)
          }),
        )()
      }
      isURLExpired(e) {
        var t = this
        return l(
          a().mark(function r() {
            var n, s
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (t._maxAgeSeconds) {
                      r.next = 6
                      break
                    }
                    r.next = 3
                    break
                  case 3:
                    return r.abrupt('return', !1)
                  case 6:
                    return (r.next = 8), t._timestampModel.getTimestamp(e)
                  case 8:
                    return (n = r.sent), (s = Date.now() - 1e3 * t._maxAgeSeconds), r.abrupt('return', n < s)
                  case 11:
                  case 'end':
                    return r.stop()
                }
            }, r)
          }),
        )()
      }
      delete() {
        var e = this
        return l(
          a().mark(function t() {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (e._rerunRequested = !1), (t.next = 3), e._timestampModel.expireEntries(1 / 0)
                  case 3:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )()
      }
    }
    var we = {
        googleAnalytics: 'googleAnalytics',
        precache: 'precache-v2',
        prefix: 'workbox',
        runtime: 'runtime',
        suffix: 'undefined' !== typeof registration ? registration.scope : '',
      },
      ke = e => [we.prefix, e, we.suffix].filter(e => e && e.length > 0).join('-'),
      _e = e => e || ke(we.runtime),
      Re = new Set()
    var Ce = {
      cacheWillUpdate: (function () {
        var e = l(
          a().mark(function e(t) {
            var r
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (200 !== (r = t.response).status && 0 !== r.status) {
                      e.next = 3
                      break
                    }
                    return e.abrupt('return', r)
                  case 3:
                    return e.abrupt('return', null)
                  case 4:
                  case 'end':
                    return e.stop()
                }
            }, e)
          }),
        )
        return function (t) {
          return e.apply(this, arguments)
        }
      })(),
    }
    self.addEventListener('activate', () => self.clients.claim()),
      X(
        new (class extends Y {
          constructor(e) {
            super(se, ce.bind({ offlineDocument: e }), 'GET')
          }
        })(),
      )
    var Ee,
      Le = new Y(
        e => e.url.pathname.includes('charting_library'),
        new (class extends F {
          _handle(e, t) {
            return l(
              a().mark(function r() {
                var n, s
                return a().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return [], (r.next = 4), t.cacheMatch(e)
                        case 4:
                          if (((n = r.sent), (s = void 0), n)) {
                            r.next = 20
                            break
                          }
                          return (r.prev = 8), (r.next = 11), t.fetchAndCachePut(e)
                        case 11:
                          ;(n = r.sent), (r.next = 17)
                          break
                        case 14:
                          ;(r.prev = 14), (r.t0 = r.catch(8)), r.t0 instanceof Error && (s = r.t0)
                        case 17:
                          0, (r.next = 21)
                          break
                        case 20:
                          0
                        case 21:
                          if (n) {
                            r.next = 24
                            break
                          }
                          throw new x('no-response', { url: e.url, error: s })
                        case 24:
                          return r.abrupt('return', n)
                        case 25:
                        case 'end':
                          return r.stop()
                      }
                  },
                  r,
                  null,
                  [[8, 14]],
                )
              }),
            )()
          }
        })({
          cacheName: 'charting_library',
          plugins: [
            new (class {
              constructor() {
                var e,
                  t = this,
                  r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                ;(this.cachedResponseWillBeUsed = (function () {
                  var e = l(
                    a().mark(function e(r) {
                      var n, s, c, i, o, u, l
                      return a().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((n = r.event), (s = r.request), (c = r.cacheName), (i = r.cachedResponse))) {
                                e.next = 3
                                break
                              }
                              return e.abrupt('return', null)
                            case 3:
                              if (
                                ((o = t._isResponseDateFresh(i)),
                                he((u = t._getCacheExpiration(c)).expireEntries()),
                                (l = u.updateTimestamp(s.url)),
                                n)
                              )
                                try {
                                  n.waitUntil(l)
                                } catch (a) {
                                  0
                                }
                              return e.abrupt('return', o ? i : null)
                            case 9:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()),
                  (this.cacheDidUpdate = (function () {
                    var e = l(
                      a().mark(function e(r) {
                        var n, s, c
                        return a().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = r.cacheName),
                                  (s = r.request),
                                  (c = t._getCacheExpiration(n)),
                                  (e.next = 5),
                                  c.updateTimestamp(s.url)
                                )
                              case 5:
                                return (e.next = 7), c.expireEntries()
                              case 7:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()),
                  (this._config = r),
                  (this._maxAgeSeconds = r.maxAgeSeconds),
                  (this._cacheExpirations = new Map()),
                  r.purgeOnQuotaError && ((e = () => this.deleteCacheAndMetadata()), Re.add(e))
              }
              _getCacheExpiration(e) {
                if (e === _e()) throw new le('expire-custom-caches-only')
                var t = this._cacheExpirations.get(e)
                return t || ((t = new ye(e, this._config)), this._cacheExpirations.set(e, t)), t
              }
              _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds) return !0
                var t = this._getDateHeaderTimestamp(e)
                return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
              }
              _getDateHeaderTimestamp(e) {
                if (!e.headers.has('date')) return null
                var t = e.headers.get('date'),
                  r = new Date(t).getTime()
                return isNaN(r) ? null : r
              }
              deleteCacheAndMetadata() {
                var e = this
                return l(
                  a().mark(function t() {
                    var r, n, s, c, i
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              ;(r = d(e._cacheExpirations)), (t.prev = 1), r.s()
                            case 3:
                              if ((n = r.n()).done) {
                                t.next = 11
                                break
                              }
                              return (s = f(n.value, 2)), (c = s[0]), (i = s[1]), (t.next = 7), self.caches.delete(c)
                            case 7:
                              return (t.next = 9), i.delete()
                            case 9:
                              t.next = 3
                              break
                            case 11:
                              t.next = 16
                              break
                            case 13:
                              ;(t.prev = 13), (t.t0 = t.catch(1)), r.e(t.t0)
                            case 16:
                              return (t.prev = 16), r.f(), t.finish(16)
                            case 19:
                              e._cacheExpirations = new Map()
                            case 20:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[1, 13, 16, 19]],
                    )
                  }),
                )()
              }
            })({ maxAgeSeconds: 1296e3 }),
          ],
        }),
      ),
      Oe = new Y(
        e => e.url.hostname.startsWith('ks-setting'),
        new (class extends F {
          constructor() {
            super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
              this.plugins.some(e => 'cacheWillUpdate' in e) || this.plugins.unshift(Ce)
          }
          _handle(e, t) {
            return l(
              a().mark(function r() {
                var n, s, c
                return a().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            [],
                            (n = t.fetchAndCachePut(e).catch(() => {})),
                            t.waitUntil(n),
                            (r.next = 6),
                            t.cacheMatch(e)
                          )
                        case 6:
                          if (!(s = r.sent)) {
                            r.next = 11
                            break
                          }
                          0, (r.next = 21)
                          break
                        case 11:
                          return (r.prev = 12), (r.next = 15), n
                        case 15:
                          ;(s = r.sent), (r.next = 21)
                          break
                        case 18:
                          ;(r.prev = 18), (r.t0 = r.catch(12)), r.t0 instanceof Error && (c = r.t0)
                        case 21:
                          if (s) {
                            r.next = 24
                            break
                          }
                          throw new x('no-response', { url: e.url, error: c })
                        case 24:
                          return r.abrupt('return', s)
                        case 25:
                        case 'end':
                          return r.stop()
                      }
                  },
                  r,
                  null,
                  [[12, 18]],
                )
              }),
            )()
          }
        })({ cacheName: 'ks-setting' }),
      )
    X(Le),
      X(Oe),
      (function (e) {
        G().precache(e)
      })([
        { revision: 'be26e938b436e8de1c0dcc65ebab35c6', url: '/index.html' },
        { revision: null, url: '/static/css/main.908ff313.chunk.css' },
        { revision: null, url: '/static/css/vendors~swapv2-page~swapv3-page.553dd249.chunk.css' },
        { revision: null, url: '/static/js/24.0b3095c3.chunk.js' },
        { revision: null, url: '/static/js/25.7646fc80.chunk.js' },
        { revision: null, url: '/static/js/26.ce2d1e2e.chunk.js' },
        { revision: null, url: '/static/js/27.0af35afe.chunk.js' },
        { revision: null, url: '/static/js/28.babed600.chunk.js' },
        { revision: null, url: '/static/js/29.01aac2fb.chunk.js' },
        { revision: null, url: '/static/js/30.251dbd3d.chunk.js' },
        { revision: null, url: '/static/js/31.d8f121d8.chunk.js' },
        { revision: null, url: '/static/js/32.29684dcb.chunk.js' },
        { revision: null, url: '/static/js/33.d8cc90e0.chunk.js' },
        { revision: null, url: '/static/js/34.945c798a.chunk.js' },
        { revision: null, url: '/static/js/5.bbc7c8f6.chunk.js' },
        { revision: null, url: '/static/js/6.d01df732.chunk.js' },
        { revision: null, url: '/static/js/about-knc.26579029.chunk.js' },
        { revision: null, url: '/static/js/about-page.249e6663.chunk.js' },
        { revision: null, url: '/static/js/add-liquidity-page.85442688.chunk.js' },
        {
          revision: null,
          url: '/static/js/add-liquidity-page~create-pool-page~redirect-create-pool-duplicate-token-ids-page~redirect-old-creat~97c95ca7.7284f0a7.chunk.js',
        },
        {
          revision: null,
          url: '/static/js/add-liquidity-page~my-pool-page~pool-finder-page~remove-liquidity-page.394ba89e.chunk.js',
        },
        { revision: null, url: '/static/js/create-pool-page.e8703003.chunk.js' },
        { revision: null, url: '/static/js/elastic-remove-liquidity-page.c8b45106.chunk.js' },
        { revision: null, url: '/static/js/ethers.a102a1b7.chunk.js' },
        { revision: null, url: '/static/js/main.a973b1ec.chunk.js' },
        { revision: null, url: '/static/js/my-pool-page.970db292.chunk.js' },
        { revision: null, url: '/static/js/pool-finder-page.e781dbec.chunk.js' },
        { revision: null, url: '/static/js/pools-page.974ebb55.chunk.js' },
        { revision: null, url: '/static/js/redirect-create-pool-duplicate-token-ids-page.95a505b7.chunk.js' },
        { revision: null, url: '/static/js/redirect-old-create-pool-path-structure-page.e78a6747.chunk.js' },
        { revision: null, url: '/static/js/remove-liquidity-page.37b8bece.chunk.js' },
        { revision: null, url: '/static/js/runtime-main.2ac2cc44.js' },
        { revision: null, url: '/static/js/solana.98999129.chunk.js' },
        { revision: null, url: '/static/js/swapv2-page.2b93e377.chunk.js' },
        { revision: null, url: '/static/js/swapv2-page~swapv3-page.d86b73ec.chunk.js' },
        { revision: null, url: '/static/js/swapv3-page.cd6f2467.chunk.js' },
        { revision: null, url: '/static/js/vendors~swapv2-page~swapv3-page.a872edc9.chunk.js' },
        { revision: null, url: '/static/js/yield-page.1aa74600.chunk.js' },
        { revision: null, url: '/static/media/Arbitrum_HorizontalLogo-dark.e3652c1e.svg' },
        { revision: null, url: '/static/media/Arbitrum_HorizontalLogo.4aec3e36.svg' },
        { revision: null, url: '/static/media/Inter-Black.15ca31c0.woff2' },
        { revision: null, url: '/static/media/Inter-Black.c6938660.woff' },
        { revision: null, url: '/static/media/Inter-BlackItalic.ca1e738e.woff' },
        { revision: null, url: '/static/media/Inter-BlackItalic.cb2a7335.woff2' },
        { revision: null, url: '/static/media/Inter-Bold.93c1301b.woff' },
        { revision: null, url: '/static/media/Inter-Bold.ec64ea57.woff2' },
        { revision: null, url: '/static/media/Inter-BoldItalic.2d26c56a.woff2' },
        { revision: null, url: '/static/media/Inter-BoldItalic.b3768850.woff' },
        { revision: null, url: '/static/media/Inter-ExtraBold.cbe0ae49.woff2' },
        { revision: null, url: '/static/media/Inter-ExtraBold.d0fa3bb2.woff' },
        { revision: null, url: '/static/media/Inter-ExtraBoldItalic.535a6cf6.woff2' },
        { revision: null, url: '/static/media/Inter-ExtraBoldItalic.6ab17abe.woff' },
        { revision: null, url: '/static/media/Inter-ExtraLight.72505e6a.woff2' },
        { revision: null, url: '/static/media/Inter-ExtraLight.c4248615.woff' },
        { revision: null, url: '/static/media/Inter-ExtraLightItalic.170dddfc.woff' },
        { revision: null, url: '/static/media/Inter-ExtraLightItalic.5c7d7d6d.woff2' },
        { revision: null, url: '/static/media/Inter-Italic.890025e7.woff' },
        { revision: null, url: '/static/media/Inter-Italic.cb10ffd7.woff2' },
        { revision: null, url: '/static/media/Inter-Light.2d519882.woff2' },
        { revision: null, url: '/static/media/Inter-Light.994e3445.woff' },
        { revision: null, url: '/static/media/Inter-LightItalic.ef9f65d9.woff' },
        { revision: null, url: '/static/media/Inter-LightItalic.f8695226.woff2' },
        { revision: null, url: '/static/media/Inter-Medium.293fd13d.woff2' },
        { revision: null, url: '/static/media/Inter-Medium.9053572c.woff' },
        { revision: null, url: '/static/media/Inter-MediumItalic.085cb93e.woff2' },
        { revision: null, url: '/static/media/Inter-MediumItalic.3d0107dd.woff' },
        { revision: null, url: '/static/media/Inter-Regular.8c206db9.woff' },
        { revision: null, url: '/static/media/Inter-Regular.c8ba52b0.woff2' },
        { revision: null, url: '/static/media/Inter-SemiBold.b5f0f109.woff2' },
        { revision: null, url: '/static/media/Inter-SemiBold.cca62d21.woff' },
        { revision: null, url: '/static/media/Inter-SemiBoldItalic.463bdbfb.woff' },
        { revision: null, url: '/static/media/Inter-SemiBoldItalic.d9467ee3.woff2' },
        { revision: null, url: '/static/media/Inter-Thin.29b9c616.woff' },
        { revision: null, url: '/static/media/Inter-Thin.fff2a096.woff2' },
        { revision: null, url: '/static/media/Inter-ThinItalic.bae95eb2.woff' },
        { revision: null, url: '/static/media/Inter-ThinItalic.bf213704.woff2' },
        { revision: null, url: '/static/media/Inter-italic.var.30807be7.woff2' },
        { revision: null, url: '/static/media/Inter-roman.var.ba4caefc.woff2' },
        { revision: null, url: '/static/media/Inter.var.c2fe3cb2.woff2' },
        { revision: null, url: '/static/media/about_background.eac6d919.png' },
        { revision: null, url: '/static/media/about_icon_avalanche.50b16472.svg' },
        { revision: null, url: '/static/media/about_icon_bsc.64add22e.svg' },
        { revision: null, url: '/static/media/about_icon_bug_bounty.cc9b9292.svg' },
        { revision: null, url: '/static/media/about_icon_github.6149aa5c.png' },
        { revision: null, url: '/static/media/about_icon_github_light.746ec8f0.png' },
        { revision: null, url: '/static/media/about_icon_kyber.946e51cc.svg' },
        { revision: null, url: '/static/media/about_icon_kyber_light.cf7e274a.svg' },
        { revision: null, url: '/static/media/alert.a1a60dc5.svg' },
        { revision: null, url: '/static/media/approve_icon.9bd229ed.svg' },
        { revision: null, url: '/static/media/arbitrum-network.ec8e5080.svg' },
        { revision: null, url: '/static/media/argent.693d335d.svg' },
        { revision: null, url: '/static/media/argent_light.d99d5760.svg' },
        { revision: null, url: '/static/media/arrow_down.ee8a96c2.svg' },
        { revision: null, url: '/static/media/aurora-network.94ddad5a.svg' },
        { revision: null, url: '/static/media/avax-network.30dfa545.png' },
        { revision: null, url: '/static/media/bar_chart_icon.8f7114f1.svg' },
        { revision: null, url: '/static/media/blog.32e07ffb.svg' },
        { revision: null, url: '/static/media/bnb-logo.e2334cfe.png' },
        { revision: null, url: '/static/media/brave.839ffc01.svg' },
        { revision: null, url: '/static/media/bridge_icon.e5f060a3.svg' },
        { revision: null, url: '/static/media/bronze_icon.9a4e7fb5.svg' },
        { revision: null, url: '/static/media/btt-logo-dark.e68ff3f8.svg' },
        { revision: null, url: '/static/media/btt-logo.d8dfd55b.svg' },
        { revision: null, url: '/static/media/card-background.77fbb037.png' },
        { revision: null, url: '/static/media/chainsecurity.187a2329.svg' },
        { revision: null, url: '/static/media/christmas-decor.928a35bb.svg' },
        { revision: null, url: '/static/media/christmas-decor2.4aa6b051.svg' },
        { revision: null, url: '/static/media/coin98.60b6df6b.svg' },
        { revision: null, url: '/static/media/coin98.90d04b31.svg' },
        { revision: null, url: '/static/media/coinbase.46c4d1b8.svg' },
        { revision: null, url: '/static/media/coingecko-light.17fb7fb2.svg' },
        { revision: null, url: '/static/media/coingecko.113ba3ec.svg' },
        { revision: null, url: '/static/media/coingecko_color.b857ee43.svg' },
        { revision: null, url: '/static/media/coingecko_color_light.d7e561a6.svg' },
        { revision: null, url: '/static/media/coinmarketcap.10c50afd.svg' },
        { revision: null, url: '/static/media/coinmarketcap_light.1a7f8629.svg' },
        { revision: null, url: '/static/media/cronos-network-dark.75ea8de5.svg' },
        { revision: null, url: '/static/media/cronos-network.662cc76e.svg' },
        { revision: null, url: '/static/media/cronos-token-logo.f3a0668d.svg' },
        { revision: null, url: '/static/media/discover_icon.78580a19.svg' },
        { revision: null, url: '/static/media/dollar.302a57f9.svg' },
        { revision: null, url: '/static/media/double_arrow.5569bb4a.svg' },
        { revision: null, url: '/static/media/down.bf80c730.svg' },
        { revision: null, url: '/static/media/drop.6b972ecb.svg' },
        { revision: null, url: '/static/media/eidoo.34569f6c.svg' },
        { revision: null, url: '/static/media/en-US.94633b15.po' },
        { revision: null, url: '/static/media/enjin.58b604d9.svg' },
        { revision: null, url: '/static/media/flag-EN.4dde4887.svg' },
        { revision: null, url: '/static/media/flag-KO.bff5747f.svg' },
        { revision: null, url: '/static/media/flag-TR.57f2f228.svg' },
        { revision: null, url: '/static/media/flag-VI.6e906b66.svg' },
        { revision: null, url: '/static/media/flag-ZH.1ee44615.svg' },
        { revision: null, url: '/static/media/for_trader.41023b1c.svg' },
        { revision: null, url: '/static/media/for_trader_light.213c9a2c.svg' },
        { revision: null, url: '/static/media/geckoterminal_dark.3ff6b783.png' },
        { revision: null, url: '/static/media/geckoterminal_light.573afb3d.png' },
        { revision: null, url: '/static/media/gold_icon.18b8a465.svg' },
        { revision: null, url: '/static/media/grid_view.08612408.svg' },
        { revision: null, url: '/static/media/ic_lock.4b1a1c16.svg' },
        { revision: null, url: '/static/media/imran_mohamad.cbaf8285.png' },
        { revision: null, url: '/static/media/jane.e1a6afe8.png' },
        { revision: null, url: '/static/media/knc-graphic.a17fbbf2.png' },
        { revision: null, url: '/static/media/knc_black.83b70a4f.svg' },
        { revision: null, url: '/static/media/ko-KR.f8cdca10.po' },
        { revision: null, url: '/static/media/krystal.23391682.svg' },
        { revision: null, url: '/static/media/krystal_light.3464ed8f.svg' },
        { revision: null, url: '/static/media/kyber-dao-light.34ebb49c.svg' },
        { revision: null, url: '/static/media/kyber-dao.196d576a.svg' },
        { revision: null, url: '/static/media/kyber_logo.6397d749.svg' },
        { revision: null, url: '/static/media/ledger.9c76ac03.svg' },
        { revision: null, url: '/static/media/ledger_light.c6130a9c.svg' },
        { revision: null, url: '/static/media/light.ada103e0.svg' },
        { revision: null, url: '/static/media/limit_order.96b4a0cf.svg' },
        { revision: null, url: '/static/media/linkedin.138eb9c5.svg' },
        { revision: null, url: '/static/media/liquidity_icon.a4895e5e.svg' },
        { revision: null, url: '/static/media/list_view.c78fd8d8.svg' },
        { revision: null, url: '/static/media/loi_luu.28c8c495.png' },
        { revision: null, url: '/static/media/mainnet-network.0da9cde8.svg' },
        { revision: null, url: '/static/media/menu.7db368c2.png' },
        { revision: null, url: '/static/media/metamask.2a137ed2.svg' },
        { revision: null, url: '/static/media/metamask.ea98b611.svg' },
        { revision: null, url: '/static/media/metamask_light.2f6bad4d.svg' },
        { revision: null, url: '/static/media/mew.208f223a.svg' },
        { revision: null, url: '/static/media/mike_le.aecaccd2.png' },
        { revision: null, url: '/static/media/nft_icon.69c2dacd.svg' },
        { revision: null, url: '/static/media/nguyen_kim_trong.66d00373.png' },
        { revision: null, url: '/static/media/notification_default.ea6be108.png' },
        { revision: null, url: '/static/media/oasis-network.016a2f2f.svg' },
        { revision: null, url: '/static/media/optimism-network.efbb634f.svg' },
        { revision: null, url: '/static/media/phantom.47882ea3.svg' },
        { revision: null, url: '/static/media/pin_icon.f36c7c67.svg' },
        { revision: null, url: '/static/media/pin_solid_icon.a21af6c3.svg' },
        { revision: null, url: '/static/media/play_circle_outline.cf093d39.svg' },
        { revision: null, url: '/static/media/prakhar_agarwal.76095ec8.png' },
        { revision: null, url: '/static/media/roadmap.49e7afa2.svg' },
        { revision: null, url: '/static/media/rocket.637d7123.svg' },
        { revision: null, url: '/static/media/routing-icon.c95e5a6b.svg' },
        { revision: null, url: '/static/media/sasha_mai.f8c18cfc.png' },
        { revision: null, url: '/static/media/seamless.5baccb95.svg' },
        { revision: null, url: '/static/media/shane_hong.bb1bb430.png' },
        { revision: null, url: '/static/media/silver_icon.d7fa450a.svg' },
        { revision: null, url: '/static/media/slope.f190ba1d.svg' },
        { revision: null, url: '/static/media/snow.ad915532.png' },
        { revision: null, url: '/static/media/solana-network.16cf0525.svg' },
        { revision: null, url: '/static/media/solflare.2be99091.svg' },
        { revision: null, url: '/static/media/solid_twitter_icon.e6db3be9.svg' },
        { revision: null, url: '/static/media/spyros_vrettos.f9958356.png' },
        { revision: null, url: '/static/media/stable.a9a0b15c.svg' },
        { revision: null, url: '/static/media/step1.6b365c03.png' },
        { revision: null, url: '/static/media/step2.e1e10dbe.png' },
        { revision: null, url: '/static/media/step4.1.e5cc1015.png' },
        { revision: null, url: '/static/media/step4.2.eeddff9d.png' },
        { revision: null, url: '/static/media/step5.89d19489.png' },
        { revision: null, url: '/static/media/step6.b50a9957.png' },
        { revision: null, url: '/static/media/step7.17646aa9.png' },
        { revision: null, url: '/static/media/step8.1.082a9cd5.png' },
        { revision: null, url: '/static/media/step8.2.4a1a9794.png' },
        { revision: null, url: '/static/media/switch.51935def.svg' },
        { revision: null, url: '/static/media/thunder_icon.216d9d48.svg' },
        { revision: null, url: '/static/media/tl-PH.872ab381.po' },
        { revision: null, url: '/static/media/torus.0087f26d.svg' },
        { revision: null, url: '/static/media/touch_icon.8568d676.svg' },
        { revision: null, url: '/static/media/tr-TR.0be9e311.po' },
        { revision: null, url: '/static/media/trending-light.f8c314f9.png' },
        { revision: null, url: '/static/media/trending.f39ec330.png' },
        { revision: null, url: '/static/media/trending_hero-light.b7b3155c.png' },
        { revision: null, url: '/static/media/trending_hero.56338b74.png' },
        { revision: null, url: '/static/media/trending_icon.4aceb489.svg' },
        { revision: null, url: '/static/media/trezor.646626a4.svg' },
        { revision: null, url: '/static/media/trezor_light.3f5c66e0.svg' },
        { revision: null, url: '/static/media/trophy.fef6e2a3.svg' },
        { revision: null, url: '/static/media/trust-wallet.1916ea36.svg' },
        { revision: null, url: '/static/media/trust.dd55dc67.svg' },
        { revision: null, url: '/static/media/trust_light.cb136cf1.svg' },
        { revision: null, url: '/static/media/tu_nguyen.31eaec6e.png' },
        { revision: null, url: '/static/media/vi-VN.6a1361f1.po' },
        { revision: null, url: '/static/media/victor_tran.fe4580a3.png' },
        { revision: null, url: '/static/media/view_positions.63ba23ca.svg' },
        { revision: null, url: '/static/media/wallet-connect.eab42a15.svg' },
        { revision: null, url: '/static/media/wallet_drag_handle.15734daa.svg' },
        { revision: null, url: '/static/media/warning.320018a5.svg' },
        { revision: null, url: '/static/media/welcome.9b263ff0.png' },
        { revision: null, url: '/static/media/work_your_assets_desktop.01b0aa11.png' },
        { revision: null, url: '/static/media/work_your_assets_mobile.9251c96f.png' },
        { revision: null, url: '/static/media/work_your_assets_tablet.7acd9a82.png' },
        { revision: null, url: '/static/media/x.d7efe170.svg' },
        { revision: null, url: '/static/media/zh-CN.5a70f914.po' },
        { revision: null, url: '/static/media/ziczac.2899f1b0.svg' },
      ]),
      (function (e) {
        var t = G()
        X(new ee(t, e))
      })(Ee),
      self.addEventListener('message', e => {
        e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
      })
  },
})
