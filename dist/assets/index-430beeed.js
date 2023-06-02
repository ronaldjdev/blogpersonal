;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const l of i)
      if (l.type === 'childList')
        for (const o of l.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const l = {}
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const l = n(i)
    fetch(i.href, l)
  }
})()
function Ia(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Vd = { exports: {} },
  Eo = {},
  Hd = { exports: {} },
  ee = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = Symbol.for('react.element'),
  am = Symbol.for('react.portal'),
  um = Symbol.for('react.fragment'),
  cm = Symbol.for('react.strict_mode'),
  dm = Symbol.for('react.profiler'),
  fm = Symbol.for('react.provider'),
  pm = Symbol.for('react.context'),
  hm = Symbol.for('react.forward_ref'),
  mm = Symbol.for('react.suspense'),
  vm = Symbol.for('react.memo'),
  gm = Symbol.for('react.lazy'),
  Uu = Symbol.iterator
function ym(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uu && e[Uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Wd = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gd = Object.assign,
  Xd = {}
function Xr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Xd),
    (this.updater = n || Wd)
}
Xr.prototype.isReactComponent = {}
Xr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Qd() {}
Qd.prototype = Xr.prototype
function Fa(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Xd),
    (this.updater = n || Wd)
}
var $a = (Fa.prototype = new Qd())
$a.constructor = Fa
Gd($a, Xr.prototype)
$a.isPureReactComponent = !0
var Vu = Array.isArray,
  Yd = Object.prototype.hasOwnProperty,
  Ba = { current: null },
  qd = { key: !0, ref: !0, __self: !0, __source: !0 }
function Kd(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Yd.call(t, r) && !qd.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: Yi, type: e, key: l, ref: o, props: i, _owner: Ba.current }
}
function xm(e, t) {
  return {
    $$typeof: Yi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Ua(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Yi
}
function wm(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Hu = /\/+/g
function Ko(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? wm('' + e.key)
    : t.toString(36)
}
function _l(e, t, n, r, i) {
  var l = typeof e
  ;(l === 'undefined' || l === 'boolean') && (e = null)
  var o = !1
  if (e === null) o = !0
  else
    switch (l) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Yi:
          case am:
            o = !0
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Ko(o, 0) : r),
      Vu(i)
        ? ((n = ''),
          e != null && (n = e.replace(Hu, '$&/') + '/'),
          _l(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Ua(i) &&
            (i = xm(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Hu, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Vu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s]
      var a = r + Ko(l, s)
      o += _l(l, t, n, a, i)
    }
  else if (((a = ym(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Ko(l, s++)), (o += _l(l, t, n, a, i))
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return o
}
function ol(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    _l(e, r, '', '', function (l) {
      return t.call(n, l, i++)
    }),
    r
  )
}
function Sm(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Qe = { current: null },
  Nl = { transition: null },
  Em = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: Nl,
    ReactCurrentOwner: Ba,
  }
ee.Children = {
  map: ol,
  forEach: function (e, t, n) {
    ol(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      ol(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ol(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ua(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
ee.Component = Xr
ee.Fragment = um
ee.Profiler = dm
ee.PureComponent = Fa
ee.StrictMode = cm
ee.Suspense = mm
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = Gd({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = Ba.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (a in t)
      Yd.call(t, a) &&
        !qd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    s = Array(a)
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: Yi, type: e.type, key: i, ref: l, props: r, _owner: o }
}
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: pm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fm, _context: e }),
    (e.Consumer = e)
  )
}
ee.createElement = Kd
ee.createFactory = function (e) {
  var t = Kd.bind(null, e)
  return (t.type = e), t
}
ee.createRef = function () {
  return { current: null }
}
ee.forwardRef = function (e) {
  return { $$typeof: hm, render: e }
}
ee.isValidElement = Ua
ee.lazy = function (e) {
  return { $$typeof: gm, _payload: { _status: -1, _result: e }, _init: Sm }
}
ee.memo = function (e, t) {
  return { $$typeof: vm, type: e, compare: t === void 0 ? null : t }
}
ee.startTransition = function (e) {
  var t = Nl.transition
  Nl.transition = {}
  try {
    e()
  } finally {
    Nl.transition = t
  }
}
ee.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
ee.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t)
}
ee.useContext = function (e) {
  return Qe.current.useContext(e)
}
ee.useDebugValue = function () {}
ee.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e)
}
ee.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t)
}
ee.useId = function () {
  return Qe.current.useId()
}
ee.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n)
}
ee.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t)
}
ee.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t)
}
ee.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t)
}
ee.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n)
}
ee.useRef = function (e) {
  return Qe.current.useRef(e)
}
ee.useState = function (e) {
  return Qe.current.useState(e)
}
ee.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n)
}
ee.useTransition = function () {
  return Qe.current.useTransition()
}
ee.version = '18.2.0'
Hd.exports = ee
var j = Hd.exports
const re = Ia(j)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm = j,
  Cm = Symbol.for('react.element'),
  km = Symbol.for('react.fragment'),
  Pm = Object.prototype.hasOwnProperty,
  jm = Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _m = { key: !0, ref: !0, __self: !0, __source: !0 }
function Zd(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (o = t.ref)
  for (r in t) Pm.call(t, r) && !_m.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: Cm, type: e, key: l, ref: o, props: i, _owner: jm.current }
}
Eo.Fragment = km
Eo.jsx = Zd
Eo.jsxs = Zd
Vd.exports = Eo
var m = Vd.exports,
  Os = {},
  Jd = { exports: {} },
  ft = {},
  ef = { exports: {} },
  tf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(M, A) {
    var B = M.length
    M.push(A)
    e: for (; 0 < B; ) {
      var Q = (B - 1) >>> 1,
        ne = M[Q]
      if (0 < i(ne, A)) (M[Q] = A), (M[B] = ne), (B = Q)
      else break e
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0]
  }
  function r(M) {
    if (M.length === 0) return null
    var A = M[0],
      B = M.pop()
    if (B !== A) {
      M[0] = B
      e: for (var Q = 0, ne = M.length, xe = ne >>> 1; Q < xe; ) {
        var we = 2 * (Q + 1) - 1,
          fe = M[we],
          Le = we + 1,
          Me = M[Le]
        if (0 > i(fe, B))
          Le < ne && 0 > i(Me, fe)
            ? ((M[Q] = Me), (M[Le] = B), (Q = Le))
            : ((M[Q] = fe), (M[we] = B), (Q = we))
        else if (Le < ne && 0 > i(Me, B)) (M[Q] = Me), (M[Le] = B), (Q = Le)
        else break e
      }
    }
    return A
  }
  function i(M, A) {
    var B = M.sortIndex - A.sortIndex
    return B !== 0 ? B : M.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance
    e.unstable_now = function () {
      return l.now()
    }
  } else {
    var o = Date,
      s = o.now()
    e.unstable_now = function () {
      return o.now() - s
    }
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    g = !1,
    y = !1,
    x = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    c = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(M) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u)
      else if (A.startTime <= M) r(u), (A.sortIndex = A.expirationTime), t(a, A)
      else break
      A = n(u)
    }
  }
  function w(M) {
    if (((x = !1), v(M), !y))
      if (n(a) !== null) (y = !0), I(T)
      else {
        var A = n(u)
        A !== null && K(w, A.startTime - M)
      }
  }
  function T(M, A) {
    ;(y = !1), x && ((x = !1), c(P), (P = -1)), (g = !0)
    var B = h
    try {
      for (
        v(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (M && !L()));

      ) {
        var Q = d.callback
        if (typeof Q == 'function') {
          ;(d.callback = null), (h = d.priorityLevel)
          var ne = Q(d.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof ne == 'function' ? (d.callback = ne) : d === n(a) && r(a),
            v(A)
        } else r(a)
        d = n(a)
      }
      if (d !== null) var xe = !0
      else {
        var we = n(u)
        we !== null && K(w, we.startTime - A), (xe = !1)
      }
      return xe
    } finally {
      ;(d = null), (h = B), (g = !1)
    }
  }
  var C = !1,
    _ = null,
    P = -1,
    R = 5,
    D = -1
  function L() {
    return !(e.unstable_now() - D < R)
  }
  function O() {
    if (_ !== null) {
      var M = e.unstable_now()
      D = M
      var A = !0
      try {
        A = _(!0, M)
      } finally {
        A ? $() : ((C = !1), (_ = null))
      }
    } else C = !1
  }
  var $
  if (typeof p == 'function')
    $ = function () {
      p(O)
    }
  else if (typeof MessageChannel < 'u') {
    var X = new MessageChannel(),
      q = X.port2
    ;(X.port1.onmessage = O),
      ($ = function () {
        q.postMessage(null)
      })
  } else
    $ = function () {
      E(O, 0)
    }
  function I(M) {
    ;(_ = M), C || ((C = !0), $())
  }
  function K(M, A) {
    P = E(function () {
      M(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), I(T))
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = h
      }
      var B = h
      h = A
      try {
        return M()
      } finally {
        h = B
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, A) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          M = 3
      }
      var B = h
      h = M
      try {
        return A()
      } finally {
        h = B
      }
    }),
    (e.unstable_scheduleCallback = function (M, A, B) {
      var Q = e.unstable_now()
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? Q + B : Q))
          : (B = Q),
        M)
      ) {
        case 1:
          var ne = -1
          break
        case 2:
          ne = 250
          break
        case 5:
          ne = 1073741823
          break
        case 4:
          ne = 1e4
          break
        default:
          ne = 5e3
      }
      return (
        (ne = B + ne),
        (M = {
          id: f++,
          callback: A,
          priorityLevel: M,
          startTime: B,
          expirationTime: ne,
          sortIndex: -1,
        }),
        B > Q
          ? ((M.sortIndex = B),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (x ? (c(P), (P = -1)) : (x = !0), K(w, B - Q)))
          : ((M.sortIndex = ne), t(a, M), y || g || ((y = !0), I(T))),
        M
      )
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (M) {
      var A = h
      return function () {
        var B = h
        h = A
        try {
          return M.apply(this, arguments)
        } finally {
          h = B
        }
      }
    })
})(tf)
ef.exports = tf
var Nm = ef.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = j,
  dt = Nm
function z(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var rf = new Set(),
  Pi = {}
function cr(e, t) {
  Fr(e, t), Fr(e + 'Capture', t)
}
function Fr(e, t) {
  for (Pi[e] = t, e = 0; e < t.length; e++) rf.add(t[e])
}
var an = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  zs = Object.prototype.hasOwnProperty,
  Lm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wu = {},
  Gu = {}
function Mm(e) {
  return zs.call(Gu, e)
    ? !0
    : zs.call(Wu, e)
    ? !1
    : Lm.test(e)
    ? (Gu[e] = !0)
    : ((Wu[e] = !0), !1)
}
function Rm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Om(e, t, n, r) {
  if (t === null || typeof t > 'u' || Rm(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ye(e, t, n, r, i, l, o) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o)
}
var Fe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Fe[e] = new Ye(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Fe[t] = new Ye(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Fe[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Fe[e] = new Ye(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Fe[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Fe[e] = new Ye(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Fe[e] = new Ye(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Fe[e] = new Ye(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Fe[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Va = /[\-:]([a-z])/g
function Ha(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Va, Ha)
    Fe[t] = new Ye(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Va, Ha)
    Fe[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Va, Ha)
  Fe[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Fe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Fe.xlinkHref = new Ye(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Fe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Wa(e, t, n, r) {
  var i = Fe.hasOwnProperty(t) ? Fe[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Om(t, n, i, r) && (n = null),
    r || i === null
      ? Mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var fn = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sl = Symbol.for('react.element'),
  gr = Symbol.for('react.portal'),
  yr = Symbol.for('react.fragment'),
  Ga = Symbol.for('react.strict_mode'),
  bs = Symbol.for('react.profiler'),
  lf = Symbol.for('react.provider'),
  of = Symbol.for('react.context'),
  Xa = Symbol.for('react.forward_ref'),
  As = Symbol.for('react.suspense'),
  Ds = Symbol.for('react.suspense_list'),
  Qa = Symbol.for('react.memo'),
  yn = Symbol.for('react.lazy'),
  sf = Symbol.for('react.offscreen'),
  Xu = Symbol.iterator
function ei(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xu && e[Xu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var ve = Object.assign,
  Zo
function ci(e) {
  if (Zo === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Zo = (t && t[1]) || ''
    }
  return (
    `
` +
    Zo +
    e
  )
}
var Jo = !1
function es(e, t) {
  if (!e || Jo) return ''
  Jo = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && i[o] !== l[s];

      )
        s--
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== l[s])) {
                var a =
                  `
` + i[o].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= o && 0 <= s)
          break
        }
    }
  } finally {
    ;(Jo = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ci(e) : ''
}
function zm(e) {
  switch (e.tag) {
    case 5:
      return ci(e.type)
    case 16:
      return ci('Lazy')
    case 13:
      return ci('Suspense')
    case 19:
      return ci('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = es(e.type, !1)), e
    case 11:
      return (e = es(e.type.render, !1)), e
    case 1:
      return (e = es(e.type, !0)), e
    default:
      return ''
  }
}
function Is(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case yr:
      return 'Fragment'
    case gr:
      return 'Portal'
    case bs:
      return 'Profiler'
    case Ga:
      return 'StrictMode'
    case As:
      return 'Suspense'
    case Ds:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case of:
        return (e.displayName || 'Context') + '.Consumer'
      case lf:
        return (e._context.displayName || 'Context') + '.Provider'
      case Xa:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Qa:
        return (
          (t = e.displayName || null), t !== null ? t : Is(e.type) || 'Memo'
        )
      case yn:
        ;(t = e._payload), (e = e._init)
        try {
          return Is(e(t))
        } catch {}
    }
  return null
}
function bm(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Is(t)
    case 8:
      return t === Ga ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function In(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function af(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Am(e) {
  var t = af(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      l = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (o) {
          ;(r = '' + o), l.call(this, o)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function al(e) {
  e._valueTracker || (e._valueTracker = Am(e))
}
function uf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = af(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ul(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Fs(e, t) {
  var n = t.checked
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Qu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = In(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function cf(e, t) {
  ;(t = t.checked), t != null && Wa(e, 'checked', t, !1)
}
function $s(e, t) {
  cf(e, t)
  var n = In(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Bs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Bs(e, t.type, In(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Yu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Bs(e, t, n) {
  ;(t !== 'number' || Ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var di = Array.isArray
function Mr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + In(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91))
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function qu(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92))
      if (di(n)) {
        if (1 < n.length) throw Error(z(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: In(n) }
}
function df(e, t) {
  var n = In(t.value),
    r = In(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Ku(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function ff(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Vs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ff(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ul,
  pf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ul = ul || document.createElement('div'),
          ul.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ul.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function ji(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var hi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dm = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(hi).forEach(function (e) {
  Dm.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hi[t] = hi[e])
  })
})
function hf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (hi.hasOwnProperty(e) && hi[e])
    ? ('' + t).trim()
    : t + 'px'
}
function mf(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = hf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var Im = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Hs(e, t) {
  if (t) {
    if (Im[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(z(62))
  }
}
function Ws(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Gs = null
function Ya(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Xs = null,
  Rr = null,
  Or = null
function Zu(e) {
  if ((e = Zi(e))) {
    if (typeof Xs != 'function') throw Error(z(280))
    var t = e.stateNode
    t && ((t = jo(t)), Xs(e.stateNode, e.type, t))
  }
}
function vf(e) {
  Rr ? (Or ? Or.push(e) : (Or = [e])) : (Rr = e)
}
function gf() {
  if (Rr) {
    var e = Rr,
      t = Or
    if (((Or = Rr = null), Zu(e), t)) for (e = 0; e < t.length; e++) Zu(t[e])
  }
}
function yf(e, t) {
  return e(t)
}
function xf() {}
var ts = !1
function wf(e, t, n) {
  if (ts) return e(t, n)
  ts = !0
  try {
    return yf(e, t, n)
  } finally {
    ;(ts = !1), (Rr !== null || Or !== null) && (xf(), gf())
  }
}
function _i(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = jo(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(z(231, t, typeof n))
  return n
}
var Qs = !1
if (an)
  try {
    var ti = {}
    Object.defineProperty(ti, 'passive', {
      get: function () {
        Qs = !0
      },
    }),
      window.addEventListener('test', ti, ti),
      window.removeEventListener('test', ti, ti)
  } catch {
    Qs = !1
  }
function Fm(e, t, n, r, i, l, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (f) {
    this.onError(f)
  }
}
var mi = !1,
  Vl = null,
  Hl = !1,
  Ys = null,
  $m = {
    onError: function (e) {
      ;(mi = !0), (Vl = e)
    },
  }
function Bm(e, t, n, r, i, l, o, s, a) {
  ;(mi = !1), (Vl = null), Fm.apply($m, arguments)
}
function Um(e, t, n, r, i, l, o, s, a) {
  if ((Bm.apply(this, arguments), mi)) {
    if (mi) {
      var u = Vl
      ;(mi = !1), (Vl = null)
    } else throw Error(z(198))
    Hl || ((Hl = !0), (Ys = u))
  }
}
function dr(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Sf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Ju(e) {
  if (dr(e) !== e) throw Error(z(188))
}
function Vm(e) {
  var t = e.alternate
  if (!t) {
    if (((t = dr(e)), t === null)) throw Error(z(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var l = i.alternate
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Ju(i), e
        if (l === r) return Ju(i), t
        l = l.sibling
      }
      throw Error(z(188))
    }
    if (n.return !== r.return) (n = i), (r = l)
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          ;(o = !0), (n = i), (r = l)
          break
        }
        if (s === r) {
          ;(o = !0), (r = i), (n = l)
          break
        }
        s = s.sibling
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            ;(o = !0), (n = l), (r = i)
            break
          }
          if (s === r) {
            ;(o = !0), (r = l), (n = i)
            break
          }
          s = s.sibling
        }
        if (!o) throw Error(z(189))
      }
    }
    if (n.alternate !== r) throw Error(z(190))
  }
  if (n.tag !== 3) throw Error(z(188))
  return n.stateNode.current === n ? e : t
}
function Ef(e) {
  return (e = Vm(e)), e !== null ? Tf(e) : null
}
function Tf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Tf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Cf = dt.unstable_scheduleCallback,
  ec = dt.unstable_cancelCallback,
  Hm = dt.unstable_shouldYield,
  Wm = dt.unstable_requestPaint,
  Se = dt.unstable_now,
  Gm = dt.unstable_getCurrentPriorityLevel,
  qa = dt.unstable_ImmediatePriority,
  kf = dt.unstable_UserBlockingPriority,
  Wl = dt.unstable_NormalPriority,
  Xm = dt.unstable_LowPriority,
  Pf = dt.unstable_IdlePriority,
  To = null,
  Wt = null
function Qm(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == 'function')
    try {
      Wt.onCommitFiberRoot(To, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : Km,
  Ym = Math.log,
  qm = Math.LN2
function Km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ym(e) / qm) | 0)) | 0
}
var cl = 64,
  dl = 4194304
function fi(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Gl(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var s = o & ~i
    s !== 0 ? (r = fi(s)) : ((l &= o), l !== 0 && (r = fi(l)))
  } else (o = n & ~i), o !== 0 ? (r = fi(o)) : l !== 0 && (r = fi(l))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function Zm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Jm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Mt(l),
      s = 1 << o,
      a = i[o]
    a === -1
      ? (!(s & n) || s & r) && (i[o] = Zm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s)
  }
}
function qs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function jf() {
  var e = cl
  return (cl <<= 1), !(cl & 4194240) && (cl = 64), e
}
function ns(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function qi(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n)
}
function ev(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Mt(n),
      l = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l)
  }
}
function Ka(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var oe = 0
function _f(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Nf,
  Za,
  Lf,
  Mf,
  Rf,
  Ks = !1,
  fl = [],
  _n = null,
  Nn = null,
  Ln = null,
  Ni = new Map(),
  Li = new Map(),
  wn = [],
  tv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function tc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      _n = null
      break
    case 'dragenter':
    case 'dragleave':
      Nn = null
      break
    case 'mouseover':
    case 'mouseout':
      Ln = null
      break
    case 'pointerover':
    case 'pointerout':
      Ni.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Li.delete(t.pointerId)
  }
}
function ni(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Zi(t)), t !== null && Za(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function nv(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (_n = ni(_n, e, t, n, r, i)), !0
    case 'dragenter':
      return (Nn = ni(Nn, e, t, n, r, i)), !0
    case 'mouseover':
      return (Ln = ni(Ln, e, t, n, r, i)), !0
    case 'pointerover':
      var l = i.pointerId
      return Ni.set(l, ni(Ni.get(l) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (l = i.pointerId), Li.set(l, ni(Li.get(l) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function Of(e) {
  var t = Yn(e.target)
  if (t !== null) {
    var n = dr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sf(n)), t !== null)) {
          ;(e.blockedOn = t),
            Rf(e.priority, function () {
              Lf(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ll(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Gs = r), n.target.dispatchEvent(r), (Gs = null)
    } else return (t = Zi(n)), t !== null && Za(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function nc(e, t, n) {
  Ll(e) && n.delete(t)
}
function rv() {
  ;(Ks = !1),
    _n !== null && Ll(_n) && (_n = null),
    Nn !== null && Ll(Nn) && (Nn = null),
    Ln !== null && Ll(Ln) && (Ln = null),
    Ni.forEach(nc),
    Li.forEach(nc)
}
function ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ks ||
      ((Ks = !0), dt.unstable_scheduleCallback(dt.unstable_NormalPriority, rv)))
}
function Mi(e) {
  function t(i) {
    return ri(i, e)
  }
  if (0 < fl.length) {
    ri(fl[0], e)
    for (var n = 1; n < fl.length; n++) {
      var r = fl[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    _n !== null && ri(_n, e),
      Nn !== null && ri(Nn, e),
      Ln !== null && ri(Ln, e),
      Ni.forEach(t),
      Li.forEach(t),
      n = 0;
    n < wn.length;
    n++
  )
    (r = wn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); )
    Of(n), n.blockedOn === null && wn.shift()
}
var zr = fn.ReactCurrentBatchConfig,
  Xl = !0
function iv(e, t, n, r) {
  var i = oe,
    l = zr.transition
  zr.transition = null
  try {
    ;(oe = 1), Ja(e, t, n, r)
  } finally {
    ;(oe = i), (zr.transition = l)
  }
}
function lv(e, t, n, r) {
  var i = oe,
    l = zr.transition
  zr.transition = null
  try {
    ;(oe = 4), Ja(e, t, n, r)
  } finally {
    ;(oe = i), (zr.transition = l)
  }
}
function Ja(e, t, n, r) {
  if (Xl) {
    var i = Zs(e, t, n, r)
    if (i === null) fs(e, t, r, Ql, n), tc(e, r)
    else if (nv(i, e, t, n, r)) r.stopPropagation()
    else if ((tc(e, r), t & 4 && -1 < tv.indexOf(e))) {
      for (; i !== null; ) {
        var l = Zi(i)
        if (
          (l !== null && Nf(l),
          (l = Zs(e, t, n, r)),
          l === null && fs(e, t, r, Ql, n),
          l === i)
        )
          break
        i = l
      }
      i !== null && r.stopPropagation()
    } else fs(e, t, r, null, n)
  }
}
var Ql = null
function Zs(e, t, n, r) {
  if (((Ql = null), (e = Ya(r)), (e = Yn(e)), e !== null))
    if (((t = dr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Sf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ql = e), null
}
function zf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Gm()) {
        case qa:
          return 1
        case kf:
          return 4
        case Wl:
        case Xm:
          return 16
        case Pf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Tn = null,
  eu = null,
  Ml = null
function bf() {
  if (Ml) return Ml
  var e,
    t = eu,
    n = t.length,
    r,
    i = 'value' in Tn ? Tn.value : Tn.textContent,
    l = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (Ml = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Rl(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function pl() {
  return !0
}
function rc() {
  return !1
}
function pt(e) {
  function t(n, r, i, l, o) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]))
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? pl
        : rc),
      (this.isPropagationStopped = rc),
      this
    )
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = pl))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = pl))
      },
      persist: function () {},
      isPersistent: pl,
    }),
    t
  )
}
var Qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tu = pt(Qr),
  Ki = ve({}, Qr, { view: 0, detail: 0 }),
  ov = pt(Ki),
  rs,
  is,
  ii,
  Co = ve({}, Ki, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ii &&
            (ii && e.type === 'mousemove'
              ? ((rs = e.screenX - ii.screenX), (is = e.screenY - ii.screenY))
              : (is = rs = 0),
            (ii = e)),
          rs)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : is
    },
  }),
  ic = pt(Co),
  sv = ve({}, Co, { dataTransfer: 0 }),
  av = pt(sv),
  uv = ve({}, Ki, { relatedTarget: 0 }),
  ls = pt(uv),
  cv = ve({}, Qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = pt(cv),
  fv = ve({}, Qr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  pv = pt(fv),
  hv = ve({}, Qr, { data: 0 }),
  lc = pt(hv),
  mv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  vv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  gv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function yv(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = gv[e]) ? !!t[e] : !1
}
function nu() {
  return yv
}
var xv = ve({}, Ki, {
    key: function (e) {
      if (e.key) {
        var t = mv[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? vv[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nu,
    charCode: function (e) {
      return e.type === 'keypress' ? Rl(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Rl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  wv = pt(xv),
  Sv = ve({}, Co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oc = pt(Sv),
  Ev = ve({}, Ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nu,
  }),
  Tv = pt(Ev),
  Cv = ve({}, Qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kv = pt(Cv),
  Pv = ve({}, Co, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jv = pt(Pv),
  _v = [9, 13, 27, 32],
  ru = an && 'CompositionEvent' in window,
  vi = null
an && 'documentMode' in document && (vi = document.documentMode)
var Nv = an && 'TextEvent' in window && !vi,
  Af = an && (!ru || (vi && 8 < vi && 11 >= vi)),
  sc = String.fromCharCode(32),
  ac = !1
function Df(e, t) {
  switch (e) {
    case 'keyup':
      return _v.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function If(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var xr = !1
function Lv(e, t) {
  switch (e) {
    case 'compositionend':
      return If(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ac = !0), sc)
    case 'textInput':
      return (e = t.data), e === sc && ac ? null : e
    default:
      return null
  }
}
function Mv(e, t) {
  if (xr)
    return e === 'compositionend' || (!ru && Df(e, t))
      ? ((e = bf()), (Ml = eu = Tn = null), (xr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Af && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Rv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Rv[e.type] : t === 'textarea'
}
function Ff(e, t, n, r) {
  vf(r),
    (t = Yl(t, 'onChange')),
    0 < t.length &&
      ((n = new tu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var gi = null,
  Ri = null
function Ov(e) {
  qf(e, 0)
}
function ko(e) {
  var t = Er(e)
  if (uf(t)) return e
}
function zv(e, t) {
  if (e === 'change') return t
}
var $f = !1
if (an) {
  var os
  if (an) {
    var ss = 'oninput' in document
    if (!ss) {
      var cc = document.createElement('div')
      cc.setAttribute('oninput', 'return;'),
        (ss = typeof cc.oninput == 'function')
    }
    os = ss
  } else os = !1
  $f = os && (!document.documentMode || 9 < document.documentMode)
}
function dc() {
  gi && (gi.detachEvent('onpropertychange', Bf), (Ri = gi = null))
}
function Bf(e) {
  if (e.propertyName === 'value' && ko(Ri)) {
    var t = []
    Ff(t, Ri, e, Ya(e)), wf(Ov, t)
  }
}
function bv(e, t, n) {
  e === 'focusin'
    ? (dc(), (gi = t), (Ri = n), gi.attachEvent('onpropertychange', Bf))
    : e === 'focusout' && dc()
}
function Av(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ko(Ri)
}
function Dv(e, t) {
  if (e === 'click') return ko(t)
}
function Iv(e, t) {
  if (e === 'input' || e === 'change') return ko(t)
}
function Fv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var zt = typeof Object.is == 'function' ? Object.is : Fv
function Oi(e, t) {
  if (zt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!zs.call(t, i) || !zt(e[i], t[i])) return !1
  }
  return !0
}
function fc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function pc(e, t) {
  var n = fc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = fc(n)
  }
}
function Uf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Uf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Vf() {
  for (var e = window, t = Ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ul(e.document)
  }
  return t
}
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function $v(e) {
  var t = Vf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && iu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          l = Math.min(r.start, i)
        ;(r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = pc(n, l))
        var o = pc(n, r)
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Bv = an && 'documentMode' in document && 11 >= document.documentMode,
  wr = null,
  Js = null,
  yi = null,
  ea = !1
function hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  ea ||
    wr == null ||
    wr !== Ul(r) ||
    ((r = wr),
    'selectionStart' in r && iu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yi && Oi(yi, r)) ||
      ((yi = r),
      (r = Yl(Js, 'onSelect')),
      0 < r.length &&
        ((t = new tu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wr))))
}
function hl(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Sr = {
    animationend: hl('Animation', 'AnimationEnd'),
    animationiteration: hl('Animation', 'AnimationIteration'),
    animationstart: hl('Animation', 'AnimationStart'),
    transitionend: hl('Transition', 'TransitionEnd'),
  },
  as = {},
  Hf = {}
an &&
  ((Hf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Sr.animationend.animation,
    delete Sr.animationiteration.animation,
    delete Sr.animationstart.animation),
  'TransitionEvent' in window || delete Sr.transitionend.transition)
function Po(e) {
  if (as[e]) return as[e]
  if (!Sr[e]) return e
  var t = Sr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Hf) return (as[e] = t[n])
  return e
}
var Wf = Po('animationend'),
  Gf = Po('animationiteration'),
  Xf = Po('animationstart'),
  Qf = Po('transitionend'),
  Yf = new Map(),
  mc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function Bn(e, t) {
  Yf.set(e, t), cr(t, [e])
}
for (var us = 0; us < mc.length; us++) {
  var cs = mc[us],
    Uv = cs.toLowerCase(),
    Vv = cs[0].toUpperCase() + cs.slice(1)
  Bn(Uv, 'on' + Vv)
}
Bn(Wf, 'onAnimationEnd')
Bn(Gf, 'onAnimationIteration')
Bn(Xf, 'onAnimationStart')
Bn('dblclick', 'onDoubleClick')
Bn('focusin', 'onFocus')
Bn('focusout', 'onBlur')
Bn(Qf, 'onTransitionEnd')
Fr('onMouseEnter', ['mouseout', 'mouseover'])
Fr('onMouseLeave', ['mouseout', 'mouseover'])
Fr('onPointerEnter', ['pointerout', 'pointerover'])
Fr('onPointerLeave', ['pointerout', 'pointerover'])
cr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
cr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
cr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
cr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
cr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
cr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var pi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Hv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(pi))
function vc(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Um(r, t, void 0, e), (e.currentTarget = null)
}
function qf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var l = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget
          if (((s = s.listener), a !== l && i.isPropagationStopped())) break e
          vc(i, s, u), (l = a)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && i.isPropagationStopped())
          )
            break e
          vc(i, s, u), (l = a)
        }
    }
  }
  if (Hl) throw ((e = Ys), (Hl = !1), (Ys = null), e)
}
function ue(e, t) {
  var n = t[la]
  n === void 0 && (n = t[la] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Kf(t, e, 2, !1), n.add(r))
}
function ds(e, t, n) {
  var r = 0
  t && (r |= 4), Kf(n, e, r, t)
}
var ml = '_reactListening' + Math.random().toString(36).slice(2)
function zi(e) {
  if (!e[ml]) {
    ;(e[ml] = !0),
      rf.forEach(function (n) {
        n !== 'selectionchange' && (Hv.has(n) || ds(n, !1, e), ds(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[ml] || ((t[ml] = !0), ds('selectionchange', !1, t))
  }
}
function Kf(e, t, n, r) {
  switch (zf(t)) {
    case 1:
      var i = iv
      break
    case 4:
      i = lv
      break
    default:
      i = Ja
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function fs(e, t, n, r, i) {
  var l = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return
            o = o.return
          }
        for (; s !== null; ) {
          if (((o = Yn(s)), o === null)) return
          if (((a = o.tag), a === 5 || a === 6)) {
            r = l = o
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  wf(function () {
    var u = l,
      f = Ya(n),
      d = []
    e: {
      var h = Yf.get(e)
      if (h !== void 0) {
        var g = tu,
          y = e
        switch (e) {
          case 'keypress':
            if (Rl(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = wv
            break
          case 'focusin':
            ;(y = 'focus'), (g = ls)
            break
          case 'focusout':
            ;(y = 'blur'), (g = ls)
            break
          case 'beforeblur':
          case 'afterblur':
            g = ls
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = ic
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = av
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Tv
            break
          case Wf:
          case Gf:
          case Xf:
            g = dv
            break
          case Qf:
            g = kv
            break
          case 'scroll':
            g = ov
            break
          case 'wheel':
            g = jv
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = pv
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = oc
        }
        var x = (t & 4) !== 0,
          E = !x && e === 'scroll',
          c = x ? (h !== null ? h + 'Capture' : null) : h
        x = []
        for (var p = u, v; p !== null; ) {
          v = p
          var w = v.stateNode
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              c !== null && ((w = _i(p, c)), w != null && x.push(bi(p, w, v)))),
            E)
          )
            break
          p = p.return
        }
        0 < x.length &&
          ((h = new g(h, y, null, n, f)), d.push({ event: h, listeners: x }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Gs &&
            (y = n.relatedTarget || n.fromElement) &&
            (Yn(y) || y[un]))
        )
          break e
        if (
          (g || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Yn(y) : null),
              y !== null &&
                ((E = dr(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((x = ic),
            (w = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = oc),
              (w = 'onPointerLeave'),
              (c = 'onPointerEnter'),
              (p = 'pointer')),
            (E = g == null ? h : Er(g)),
            (v = y == null ? h : Er(y)),
            (h = new x(w, p + 'leave', g, n, f)),
            (h.target = E),
            (h.relatedTarget = v),
            (w = null),
            Yn(f) === u &&
              ((x = new x(c, p + 'enter', y, n, f)),
              (x.target = v),
              (x.relatedTarget = E),
              (w = x)),
            (E = w),
            g && y)
          )
            t: {
              for (x = g, c = y, p = 0, v = x; v; v = hr(v)) p++
              for (v = 0, w = c; w; w = hr(w)) v++
              for (; 0 < p - v; ) (x = hr(x)), p--
              for (; 0 < v - p; ) (c = hr(c)), v--
              for (; p--; ) {
                if (x === c || (c !== null && x === c.alternate)) break t
                ;(x = hr(x)), (c = hr(c))
              }
              x = null
            }
          else x = null
          g !== null && gc(d, h, g, x, !1),
            y !== null && E !== null && gc(d, E, y, x, !0)
        }
      }
      e: {
        if (
          ((h = u ? Er(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && h.type === 'file'))
        )
          var T = zv
        else if (uc(h))
          if ($f) T = Iv
          else {
            T = Av
            var C = bv
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (T = Dv)
        if (T && (T = T(e, u))) {
          Ff(d, T, n, f)
          break e
        }
        C && C(e, h, u),
          e === 'focusout' &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === 'number' &&
            Bs(h, 'number', h.value)
      }
      switch (((C = u ? Er(u) : window), e)) {
        case 'focusin':
          ;(uc(C) || C.contentEditable === 'true') &&
            ((wr = C), (Js = u), (yi = null))
          break
        case 'focusout':
          yi = Js = wr = null
          break
        case 'mousedown':
          ea = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ea = !1), hc(d, n, f)
          break
        case 'selectionchange':
          if (Bv) break
        case 'keydown':
        case 'keyup':
          hc(d, n, f)
      }
      var _
      if (ru)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        xr
          ? Df(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (Af &&
          n.locale !== 'ko' &&
          (xr || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && xr && (_ = bf())
            : ((Tn = f),
              (eu = 'value' in Tn ? Tn.value : Tn.textContent),
              (xr = !0))),
        (C = Yl(u, P)),
        0 < C.length &&
          ((P = new lc(P, e, null, n, f)),
          d.push({ event: P, listeners: C }),
          _ ? (P.data = _) : ((_ = If(n)), _ !== null && (P.data = _)))),
        (_ = Nv ? Lv(e, n) : Mv(e, n)) &&
          ((u = Yl(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new lc('onBeforeInput', 'beforeinput', null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = _)))
    }
    qf(d, t)
  })
}
function bi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Yl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      l = i.stateNode
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = _i(e, n)),
      l != null && r.unshift(bi(e, l, i)),
      (l = _i(e, t)),
      l != null && r.push(bi(e, l, i))),
      (e = e.return)
  }
  return r
}
function hr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function gc(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode
    if (a !== null && a === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = _i(n, l)), a != null && o.unshift(bi(n, a, s)))
        : i || ((a = _i(n, l)), a != null && o.push(bi(n, a, s)))),
      (n = n.return)
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var Wv = /\r\n?/g,
  Gv = /\u0000|\uFFFD/g
function yc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Wv,
      `
`,
    )
    .replace(Gv, '')
}
function vl(e, t, n) {
  if (((t = yc(t)), yc(e) !== t && n)) throw Error(z(425))
}
function ql() {}
var ta = null,
  na = null
function ra(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var ia = typeof setTimeout == 'function' ? setTimeout : void 0,
  Xv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  xc = typeof Promise == 'function' ? Promise : void 0,
  Qv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof xc < 'u'
      ? function (e) {
          return xc.resolve(null).then(e).catch(Yv)
        }
      : ia
function Yv(e) {
  setTimeout(function () {
    throw e
  })
}
function ps(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Mi(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Mi(t)
}
function Mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function wc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Yr = Math.random().toString(36).slice(2),
  Vt = '__reactFiber$' + Yr,
  Ai = '__reactProps$' + Yr,
  un = '__reactContainer$' + Yr,
  la = '__reactEvents$' + Yr,
  qv = '__reactListeners$' + Yr,
  Kv = '__reactHandles$' + Yr
function Yn(e) {
  var t = e[Vt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wc(e); e !== null; ) {
          if ((n = e[Vt])) return n
          e = wc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Zi(e) {
  return (
    (e = e[Vt] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(z(33))
}
function jo(e) {
  return e[Ai] || null
}
var oa = [],
  Tr = -1
function Un(e) {
  return { current: e }
}
function ce(e) {
  0 > Tr || ((e.current = oa[Tr]), (oa[Tr] = null), Tr--)
}
function ae(e, t) {
  Tr++, (oa[Tr] = e.current), (e.current = t)
}
var Fn = {},
  He = Un(Fn),
  Je = Un(!1),
  nr = Fn
function $r(e, t) {
  var n = e.type.contextTypes
  if (!n) return Fn
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    l
  for (l in n) i[l] = t[l]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function et(e) {
  return (e = e.childContextTypes), e != null
}
function Kl() {
  ce(Je), ce(He)
}
function Sc(e, t, n) {
  if (He.current !== Fn) throw Error(z(168))
  ae(He, t), ae(Je, n)
}
function Zf(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(z(108, bm(e) || 'Unknown', i))
  return ve({}, n, r)
}
function Zl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fn),
    (nr = He.current),
    ae(He, e),
    ae(Je, Je.current),
    !0
  )
}
function Ec(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(z(169))
  n
    ? ((e = Zf(e, t, nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Je),
      ce(He),
      ae(He, e))
    : ce(Je),
    ae(Je, n)
}
var tn = null,
  _o = !1,
  hs = !1
function Jf(e) {
  tn === null ? (tn = [e]) : tn.push(e)
}
function Zv(e) {
  ;(_o = !0), Jf(e)
}
function Vn() {
  if (!hs && tn !== null) {
    hs = !0
    var e = 0,
      t = oe
    try {
      var n = tn
      for (oe = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(tn = null), (_o = !1)
    } catch (i) {
      throw (tn !== null && (tn = tn.slice(e + 1)), Cf(qa, Vn), i)
    } finally {
      ;(oe = t), (hs = !1)
    }
  }
  return null
}
var Cr = [],
  kr = 0,
  Jl = null,
  eo = 0,
  xt = [],
  wt = 0,
  rr = null,
  nn = 1,
  rn = ''
function Xn(e, t) {
  ;(Cr[kr++] = eo), (Cr[kr++] = Jl), (Jl = e), (eo = t)
}
function ep(e, t, n) {
  ;(xt[wt++] = nn), (xt[wt++] = rn), (xt[wt++] = rr), (rr = e)
  var r = nn
  e = rn
  var i = 32 - Mt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var l = 32 - Mt(t) + i
  if (30 < l) {
    var o = i - (i % 5)
    ;(l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (nn = (1 << (32 - Mt(t) + i)) | (n << i) | r),
      (rn = l + e)
  } else (nn = (1 << l) | (n << i) | r), (rn = e)
}
function lu(e) {
  e.return !== null && (Xn(e, 1), ep(e, 1, 0))
}
function ou(e) {
  for (; e === Jl; )
    (Jl = Cr[--kr]), (Cr[kr] = null), (eo = Cr[--kr]), (Cr[kr] = null)
  for (; e === rr; )
    (rr = xt[--wt]),
      (xt[wt] = null),
      (rn = xt[--wt]),
      (xt[wt] = null),
      (nn = xt[--wt]),
      (xt[wt] = null)
}
var ct = null,
  at = null,
  de = !1,
  Lt = null
function tp(e, t) {
  var n = St(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Tc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (at = Mn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (at = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rr !== null ? { id: nn, overflow: rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (at = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function aa(e) {
  if (de) {
    var t = at
    if (t) {
      var n = t
      if (!Tc(e, t)) {
        if (sa(e)) throw Error(z(418))
        t = Mn(n.nextSibling)
        var r = ct
        t && Tc(e, t)
          ? tp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (ct = e))
      }
    } else {
      if (sa(e)) throw Error(z(418))
      ;(e.flags = (e.flags & -4097) | 2), (de = !1), (ct = e)
    }
  }
}
function Cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ct = e
}
function gl(e) {
  if (e !== ct) return !1
  if (!de) return Cc(e), (de = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ra(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (sa(e)) throw (np(), Error(z(418)))
    for (; t; ) tp(e, t), (t = Mn(t.nextSibling))
  }
  if ((Cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              at = Mn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      at = null
    }
  } else at = ct ? Mn(e.stateNode.nextSibling) : null
  return !0
}
function np() {
  for (var e = at; e; ) e = Mn(e.nextSibling)
}
function Br() {
  ;(at = ct = null), (de = !1)
}
function su(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e)
}
var Jv = fn.ReactCurrentBatchConfig
function jt(e, t) {
  if (e && e.defaultProps) {
    ;(t = ve({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var to = Un(null),
  no = null,
  Pr = null,
  au = null
function uu() {
  au = Pr = no = null
}
function cu(e) {
  var t = to.current
  ce(to), (e._currentValue = t)
}
function ua(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function br(e, t) {
  ;(no = e),
    (au = Pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null))
}
function Tt(e) {
  var t = e._currentValue
  if (au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
      if (no === null) throw Error(z(308))
      ;(Pr = e), (no.dependencies = { lanes: 0, firstContext: e })
    } else Pr = Pr.next = e
  return t
}
var qn = null
function du(e) {
  qn === null ? (qn = [e]) : qn.push(e)
}
function rp(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), du(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    cn(e, r)
  )
}
function cn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var xn = !1
function fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function ip(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function ln(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Rn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ie & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      cn(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), du(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    cn(e, n)
  )
}
function Ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ka(e, n)
  }
}
function kc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next)
      } while (n !== null)
      l === null ? (i = l = t) : (l = l.next = t)
    } else i = l = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function ro(e, t, n, r) {
  var i = e.updateQueue
  xn = !1
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending
  if (s !== null) {
    i.shared.pending = null
    var a = s,
      u = a.next
    ;(a.next = null), o === null ? (l = u) : (o.next = u), (o = a)
    var f = e.alternate
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== o &&
        (s === null ? (f.firstBaseUpdate = u) : (s.next = u),
        (f.lastBaseUpdate = a)))
  }
  if (l !== null) {
    var d = i.baseState
    ;(o = 0), (f = u = a = null), (s = l)
    do {
      var h = s.lane,
        g = s.eventTime
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var y = e,
            x = s
          switch (((h = t), (g = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == 'function')) {
                d = y.call(g, d, h)
                break e
              }
              d = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == 'function' ? y.call(g, d, h) : y),
                h == null)
              )
                break e
              d = ve({}, d, h)
              break e
            case 2:
              xn = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [s]) : h.push(s))
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((u = f = g), (a = d)) : (f = f.next = g),
          (o |= h)
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break
        ;(h = s),
          (s = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null)
      }
    } while (1)
    if (
      (f === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (o |= i.lane), (i = i.next)
      while (i !== t)
    } else l === null && (i.shared.lanes = 0)
    ;(lr |= o), (e.lanes = o), (e.memoizedState = d)
  }
}
function Pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(z(191, i))
        i.call(r)
      }
    }
}
var lp = new nf.Component().refs
function ca(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Xe(),
      i = zn(e),
      l = ln(r, i)
    ;(l.payload = t),
      n != null && (l.callback = n),
      (t = Rn(e, l, i)),
      t !== null && (Rt(t, e, i, r), Ol(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Xe(),
      i = zn(e),
      l = ln(r, i)
    ;(l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Rn(e, l, i)),
      t !== null && (Rt(t, e, i, r), Ol(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Xe(),
      r = zn(e),
      i = ln(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Rn(e, i, r)),
      t !== null && (Rt(t, e, r, n), Ol(t, e, r))
  },
}
function jc(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Oi(n, r) || !Oi(i, l)
      : !0
  )
}
function op(e, t, n) {
  var r = !1,
    i = Fn,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Tt(l))
      : ((i = et(t) ? nr : He.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? $r(e, i) : Fn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = No),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  )
}
function _c(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && No.enqueueReplaceState(t, t.state, null)
}
function da(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = lp), fu(e)
  var l = t.contextType
  typeof l == 'object' && l !== null
    ? (i.context = Tt(l))
    : ((l = et(t) ? nr : He.current), (i.context = $r(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (ca(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && No.enqueueReplaceState(i, i.state, null),
      ro(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function li(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309))
        var r = n.stateNode
      }
      if (!r) throw Error(z(147, e))
      var i = r,
        l = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var s = i.refs
            s === lp && (s = i.refs = {}), o === null ? delete s[l] : (s[l] = o)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(z(284))
    if (!n._owner) throw Error(z(290, e))
  }
  return e
}
function yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Nc(e) {
  var t = e._init
  return t(e._payload)
}
function sp(e) {
  function t(c, p) {
    if (e) {
      var v = c.deletions
      v === null ? ((c.deletions = [p]), (c.flags |= 16)) : v.push(p)
    }
  }
  function n(c, p) {
    if (!e) return null
    for (; p !== null; ) t(c, p), (p = p.sibling)
    return null
  }
  function r(c, p) {
    for (c = new Map(); p !== null; )
      p.key !== null ? c.set(p.key, p) : c.set(p.index, p), (p = p.sibling)
    return c
  }
  function i(c, p) {
    return (c = bn(c, p)), (c.index = 0), (c.sibling = null), c
  }
  function l(c, p, v) {
    return (
      (c.index = v),
      e
        ? ((v = c.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((c.flags |= 2), p) : v)
            : ((c.flags |= 2), p))
        : ((c.flags |= 1048576), p)
    )
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c
  }
  function s(c, p, v, w) {
    return p === null || p.tag !== 6
      ? ((p = Ss(v, c.mode, w)), (p.return = c), p)
      : ((p = i(p, v)), (p.return = c), p)
  }
  function a(c, p, v, w) {
    var T = v.type
    return T === yr
      ? f(c, p, v.props.children, w, v.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == 'object' &&
            T !== null &&
            T.$$typeof === yn &&
            Nc(T) === p.type))
      ? ((w = i(p, v.props)), (w.ref = li(c, p, v)), (w.return = c), w)
      : ((w = Fl(v.type, v.key, v.props, null, c.mode, w)),
        (w.ref = li(c, p, v)),
        (w.return = c),
        w)
  }
  function u(c, p, v, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Es(v, c.mode, w)), (p.return = c), p)
      : ((p = i(p, v.children || [])), (p.return = c), p)
  }
  function f(c, p, v, w, T) {
    return p === null || p.tag !== 7
      ? ((p = er(v, c.mode, w, T)), (p.return = c), p)
      : ((p = i(p, v)), (p.return = c), p)
  }
  function d(c, p, v) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Ss('' + p, c.mode, v)), (p.return = c), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case sl:
          return (
            (v = Fl(p.type, p.key, p.props, null, c.mode, v)),
            (v.ref = li(c, null, p)),
            (v.return = c),
            v
          )
        case gr:
          return (p = Es(p, c.mode, v)), (p.return = c), p
        case yn:
          var w = p._init
          return d(c, w(p._payload), v)
      }
      if (di(p) || ei(p)) return (p = er(p, c.mode, v, null)), (p.return = c), p
      yl(c, p)
    }
    return null
  }
  function h(c, p, v, w) {
    var T = p !== null ? p.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return T !== null ? null : s(c, p, '' + v, w)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case sl:
          return v.key === T ? a(c, p, v, w) : null
        case gr:
          return v.key === T ? u(c, p, v, w) : null
        case yn:
          return (T = v._init), h(c, p, T(v._payload), w)
      }
      if (di(v) || ei(v)) return T !== null ? null : f(c, p, v, w, null)
      yl(c, v)
    }
    return null
  }
  function g(c, p, v, w, T) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (c = c.get(v) || null), s(p, c, '' + w, T)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case sl:
          return (c = c.get(w.key === null ? v : w.key) || null), a(p, c, w, T)
        case gr:
          return (c = c.get(w.key === null ? v : w.key) || null), u(p, c, w, T)
        case yn:
          var C = w._init
          return g(c, p, v, C(w._payload), T)
      }
      if (di(w) || ei(w)) return (c = c.get(v) || null), f(p, c, w, T, null)
      yl(p, w)
    }
    return null
  }
  function y(c, p, v, w) {
    for (
      var T = null, C = null, _ = p, P = (p = 0), R = null;
      _ !== null && P < v.length;
      P++
    ) {
      _.index > P ? ((R = _), (_ = null)) : (R = _.sibling)
      var D = h(c, _, v[P], w)
      if (D === null) {
        _ === null && (_ = R)
        break
      }
      e && _ && D.alternate === null && t(c, _),
        (p = l(D, p, P)),
        C === null ? (T = D) : (C.sibling = D),
        (C = D),
        (_ = R)
    }
    if (P === v.length) return n(c, _), de && Xn(c, P), T
    if (_ === null) {
      for (; P < v.length; P++)
        (_ = d(c, v[P], w)),
          _ !== null &&
            ((p = l(_, p, P)), C === null ? (T = _) : (C.sibling = _), (C = _))
      return de && Xn(c, P), T
    }
    for (_ = r(c, _); P < v.length; P++)
      (R = g(_, c, P, v[P], w)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? P : R.key),
          (p = l(R, p, P)),
          C === null ? (T = R) : (C.sibling = R),
          (C = R))
    return (
      e &&
        _.forEach(function (L) {
          return t(c, L)
        }),
      de && Xn(c, P),
      T
    )
  }
  function x(c, p, v, w) {
    var T = ei(v)
    if (typeof T != 'function') throw Error(z(150))
    if (((v = T.call(v)), v == null)) throw Error(z(151))
    for (
      var C = (T = null), _ = p, P = (p = 0), R = null, D = v.next();
      _ !== null && !D.done;
      P++, D = v.next()
    ) {
      _.index > P ? ((R = _), (_ = null)) : (R = _.sibling)
      var L = h(c, _, D.value, w)
      if (L === null) {
        _ === null && (_ = R)
        break
      }
      e && _ && L.alternate === null && t(c, _),
        (p = l(L, p, P)),
        C === null ? (T = L) : (C.sibling = L),
        (C = L),
        (_ = R)
    }
    if (D.done) return n(c, _), de && Xn(c, P), T
    if (_ === null) {
      for (; !D.done; P++, D = v.next())
        (D = d(c, D.value, w)),
          D !== null &&
            ((p = l(D, p, P)), C === null ? (T = D) : (C.sibling = D), (C = D))
      return de && Xn(c, P), T
    }
    for (_ = r(c, _); !D.done; P++, D = v.next())
      (D = g(_, c, P, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && _.delete(D.key === null ? P : D.key),
          (p = l(D, p, P)),
          C === null ? (T = D) : (C.sibling = D),
          (C = D))
    return (
      e &&
        _.forEach(function (O) {
          return t(c, O)
        }),
      de && Xn(c, P),
      T
    )
  }
  function E(c, p, v, w) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === yr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case sl:
          e: {
            for (var T = v.key, C = p; C !== null; ) {
              if (C.key === T) {
                if (((T = v.type), T === yr)) {
                  if (C.tag === 7) {
                    n(c, C.sibling),
                      (p = i(C, v.props.children)),
                      (p.return = c),
                      (c = p)
                    break e
                  }
                } else if (
                  C.elementType === T ||
                  (typeof T == 'object' &&
                    T !== null &&
                    T.$$typeof === yn &&
                    Nc(T) === C.type)
                ) {
                  n(c, C.sibling),
                    (p = i(C, v.props)),
                    (p.ref = li(c, C, v)),
                    (p.return = c),
                    (c = p)
                  break e
                }
                n(c, C)
                break
              } else t(c, C)
              C = C.sibling
            }
            v.type === yr
              ? ((p = er(v.props.children, c.mode, w, v.key)),
                (p.return = c),
                (c = p))
              : ((w = Fl(v.type, v.key, v.props, null, c.mode, w)),
                (w.ref = li(c, p, v)),
                (w.return = c),
                (c = w))
          }
          return o(c)
        case gr:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(c, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = c),
                    (c = p)
                  break e
                } else {
                  n(c, p)
                  break
                }
              else t(c, p)
              p = p.sibling
            }
            ;(p = Es(v, c.mode, w)), (p.return = c), (c = p)
          }
          return o(c)
        case yn:
          return (C = v._init), E(c, p, C(v._payload), w)
      }
      if (di(v)) return y(c, p, v, w)
      if (ei(v)) return x(c, p, v, w)
      yl(c, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        p !== null && p.tag === 6
          ? (n(c, p.sibling), (p = i(p, v)), (p.return = c), (c = p))
          : (n(c, p), (p = Ss(v, c.mode, w)), (p.return = c), (c = p)),
        o(c))
      : n(c, p)
  }
  return E
}
var Ur = sp(!0),
  ap = sp(!1),
  Ji = {},
  Gt = Un(Ji),
  Di = Un(Ji),
  Ii = Un(Ji)
function Kn(e) {
  if (e === Ji) throw Error(z(174))
  return e
}
function pu(e, t) {
  switch ((ae(Ii, t), ae(Di, e), ae(Gt, Ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vs(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vs(t, e))
  }
  ce(Gt), ae(Gt, t)
}
function Vr() {
  ce(Gt), ce(Di), ce(Ii)
}
function up(e) {
  Kn(Ii.current)
  var t = Kn(Gt.current),
    n = Vs(t, e.type)
  t !== n && (ae(Di, e), ae(Gt, n))
}
function hu(e) {
  Di.current === e && (ce(Gt), ce(Di))
}
var he = Un(0)
function io(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var ms = []
function mu() {
  for (var e = 0; e < ms.length; e++) ms[e]._workInProgressVersionPrimary = null
  ms.length = 0
}
var zl = fn.ReactCurrentDispatcher,
  vs = fn.ReactCurrentBatchConfig,
  ir = 0,
  me = null,
  je = null,
  ze = null,
  lo = !1,
  xi = !1,
  Fi = 0,
  eg = 0
function Be() {
  throw Error(z(321))
}
function vu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1
  return !0
}
function gu(e, t, n, r, i, l) {
  if (
    ((ir = l),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zl.current = e === null || e.memoizedState === null ? ig : lg),
    (e = n(r, i)),
    xi)
  ) {
    l = 0
    do {
      if (((xi = !1), (Fi = 0), 25 <= l)) throw Error(z(301))
      ;(l += 1),
        (ze = je = null),
        (t.updateQueue = null),
        (zl.current = og),
        (e = n(r, i))
    } while (xi)
  }
  if (
    ((zl.current = oo),
    (t = je !== null && je.next !== null),
    (ir = 0),
    (ze = je = me = null),
    (lo = !1),
    t)
  )
    throw Error(z(300))
  return e
}
function yu() {
  var e = Fi !== 0
  return (Fi = 0), e
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ze === null ? (me.memoizedState = ze = e) : (ze = ze.next = e), ze
}
function Ct() {
  if (je === null) {
    var e = me.alternate
    e = e !== null ? e.memoizedState : null
  } else e = je.next
  var t = ze === null ? me.memoizedState : ze.next
  if (t !== null) (ze = t), (je = e)
  else {
    if (e === null) throw Error(z(310))
    ;(je = e),
      (e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null,
      }),
      ze === null ? (me.memoizedState = ze = e) : (ze = ze.next = e)
  }
  return ze
}
function $i(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function gs(e) {
  var t = Ct(),
    n = t.queue
  if (n === null) throw Error(z(311))
  n.lastRenderedReducer = e
  var r = je,
    i = r.baseQueue,
    l = n.pending
  if (l !== null) {
    if (i !== null) {
      var o = i.next
      ;(i.next = l.next), (l.next = o)
    }
    ;(r.baseQueue = i = l), (n.pending = null)
  }
  if (i !== null) {
    ;(l = i.next), (r = r.baseState)
    var s = (o = null),
      a = null,
      u = l
    do {
      var f = u.lane
      if ((ir & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        a === null ? ((s = a = d), (o = r)) : (a = a.next = d),
          (me.lanes |= f),
          (lr |= f)
      }
      u = u.next
    } while (u !== null && u !== l)
    a === null ? (o = r) : (a.next = s),
      zt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (l = i.lane), (me.lanes |= l), (lr |= l), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ys(e) {
  var t = Ct(),
    n = t.queue
  if (n === null) throw Error(z(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState
  if (i !== null) {
    n.pending = null
    var o = (i = i.next)
    do (l = e(l, o.action)), (o = o.next)
    while (o !== i)
    zt(l, t.memoizedState) || (Ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l)
  }
  return [l, r]
}
function cp() {}
function dp(e, t) {
  var n = me,
    r = Ct(),
    i = t(),
    l = !zt(r.memoizedState, i)
  if (
    (l && ((r.memoizedState = i), (Ze = !0)),
    (r = r.queue),
    xu(hp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Bi(9, pp.bind(null, n, r, i, t), void 0, null),
      be === null)
    )
      throw Error(z(349))
    ir & 30 || fp(n, t, i)
  }
  return i
}
function fp(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function pp(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), mp(t) && vp(e)
}
function hp(e, t, n) {
  return n(function () {
    mp(t) && vp(e)
  })
}
function mp(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !zt(e, n)
  } catch {
    return !0
  }
}
function vp(e) {
  var t = cn(e, 1)
  t !== null && Rt(t, e, 1, -1)
}
function Lc(e) {
  var t = Ut()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $i,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rg.bind(null, me, e)),
    [t.memoizedState, e]
  )
}
function Bi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function gp() {
  return Ct().memoizedState
}
function bl(e, t, n, r) {
  var i = Ut()
  ;(me.flags |= e),
    (i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r))
}
function Lo(e, t, n, r) {
  var i = Ct()
  r = r === void 0 ? null : r
  var l = void 0
  if (je !== null) {
    var o = je.memoizedState
    if (((l = o.destroy), r !== null && vu(r, o.deps))) {
      i.memoizedState = Bi(t, n, l, r)
      return
    }
  }
  ;(me.flags |= e), (i.memoizedState = Bi(1 | t, n, l, r))
}
function Mc(e, t) {
  return bl(8390656, 8, e, t)
}
function xu(e, t) {
  return Lo(2048, 8, e, t)
}
function yp(e, t) {
  return Lo(4, 2, e, t)
}
function xp(e, t) {
  return Lo(4, 4, e, t)
}
function wp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Sp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lo(4, 4, wp.bind(null, t, e), n)
  )
}
function wu() {}
function Ep(e, t) {
  var n = Ct()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Tp(e, t) {
  var n = Ct()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Cp(e, t, n) {
  return ir & 21
    ? (zt(n, t) || ((n = jf()), (me.lanes |= n), (lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
}
function tg(e, t) {
  var n = oe
  ;(oe = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = vs.transition
  vs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(oe = n), (vs.transition = r)
  }
}
function kp() {
  return Ct().memoizedState
}
function ng(e, t, n) {
  var r = zn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pp(e))
  )
    jp(t, n)
  else if (((n = rp(e, t, n, r)), n !== null)) {
    var i = Xe()
    Rt(n, e, r, i), _p(n, t, r)
  }
}
function rg(e, t, n) {
  var r = zn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Pp(e)) jp(t, i)
  else {
    var l = e.alternate
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = l(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = s), zt(s, o))) {
          var a = t.interleaved
          a === null
            ? ((i.next = i), du(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = rp(e, t, i, r)),
      n !== null && ((i = Xe()), Rt(n, e, r, i), _p(n, t, r))
  }
}
function Pp(e) {
  var t = e.alternate
  return e === me || (t !== null && t === me)
}
function jp(e, t) {
  xi = lo = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function _p(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ka(e, n)
  }
}
var oo = {
    readContext: Tt,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  ig = {
    readContext: Tt,
    useCallback: function (e, t) {
      return (Ut().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Tt,
    useEffect: Mc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bl(4194308, 4, wp.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return bl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return bl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Ut()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Ut()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ng.bind(null, me, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Ut()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Lc,
    useDebugValue: wu,
    useDeferredValue: function (e) {
      return (Ut().memoizedState = e)
    },
    useTransition: function () {
      var e = Lc(!1),
        t = e[0]
      return (e = tg.bind(null, e[1])), (Ut().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        i = Ut()
      if (de) {
        if (n === void 0) throw Error(z(407))
        n = n()
      } else {
        if (((n = t()), be === null)) throw Error(z(349))
        ir & 30 || fp(r, t, n)
      }
      i.memoizedState = n
      var l = { value: n, getSnapshot: t }
      return (
        (i.queue = l),
        Mc(hp.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Bi(9, pp.bind(null, r, l, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Ut(),
        t = be.identifierPrefix
      if (de) {
        var n = rn,
          r = nn
        ;(n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Fi++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = eg++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  lg = {
    readContext: Tt,
    useCallback: Ep,
    useContext: Tt,
    useEffect: xu,
    useImperativeHandle: Sp,
    useInsertionEffect: yp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: gs,
    useRef: gp,
    useState: function () {
      return gs($i)
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = Ct()
      return Cp(t, je.memoizedState, e)
    },
    useTransition: function () {
      var e = gs($i)[0],
        t = Ct().memoizedState
      return [e, t]
    },
    useMutableSource: cp,
    useSyncExternalStore: dp,
    useId: kp,
    unstable_isNewReconciler: !1,
  },
  og = {
    readContext: Tt,
    useCallback: Ep,
    useContext: Tt,
    useEffect: xu,
    useImperativeHandle: Sp,
    useInsertionEffect: yp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: ys,
    useRef: gp,
    useState: function () {
      return ys($i)
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = Ct()
      return je === null ? (t.memoizedState = e) : Cp(t, je.memoizedState, e)
    },
    useTransition: function () {
      var e = ys($i)[0],
        t = Ct().memoizedState
      return [e, t]
    },
    useMutableSource: cp,
    useSyncExternalStore: dp,
    useId: kp,
    unstable_isNewReconciler: !1,
  }
function Hr(e, t) {
  try {
    var n = '',
      r = t
    do (n += zm(r)), (r = r.return)
    while (r)
    var i = n
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function xs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function fa(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var sg = typeof WeakMap == 'function' ? WeakMap : Map
function Np(e, t, n) {
  ;(n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ao || ((ao = !0), (Ea = r)), fa(e, t)
    }),
    n
  )
}
function Lp(e, t, n) {
  ;(n = ln(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        fa(e, t)
      })
  }
  var l = e.stateNode
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        fa(e, t),
          typeof r != 'function' &&
            (On === null ? (On = new Set([this])) : On.add(this))
        var o = t.stack
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function Rc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new sg()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = Sg.bind(null, e, t, n)), t.then(e, e))
}
function Oc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function zc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ln(-1, 1)), (t.tag = 2), Rn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var ag = fn.ReactCurrentOwner,
  Ze = !1
function Ge(e, t, n, r) {
  t.child = e === null ? ap(t, null, n, r) : Ur(t, e.child, n, r)
}
function bc(e, t, n, r, i) {
  n = n.render
  var l = t.ref
  return (
    br(t, i),
    (r = gu(e, t, n, r, l, i)),
    (n = yu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (de && n && lu(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
  )
}
function Ac(e, t, n, r, i) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' &&
      !_u(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Mp(e, t, l, r, i))
      : ((e = Fl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Oi), n(o, r) && e.ref === t.ref)
    )
      return dn(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = bn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Mp(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps
    if (Oi(l, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ze = !0)
      else return (t.lanes = e.lanes), dn(e, t, i)
  }
  return pa(e, t, n, r, i)
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(_r, ot),
        (ot |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(_r, ot),
          (ot |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ae(_r, ot),
        (ot |= r)
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(_r, ot),
      (ot |= r)
  return Ge(e, t, i, n), t.child
}
function Op(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function pa(e, t, n, r, i) {
  var l = et(n) ? nr : He.current
  return (
    (l = $r(t, l)),
    br(t, i),
    (n = gu(e, t, n, r, l, i)),
    (r = yu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (de && r && lu(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
  )
}
function Dc(e, t, n, r, i) {
  if (et(n)) {
    var l = !0
    Zl(t)
  } else l = !1
  if ((br(t, i), t.stateNode === null))
    Al(e, t), op(t, n, r), da(t, n, r, i), (r = !0)
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps
    o.props = s
    var a = o.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Tt(u))
      : ((u = et(n) ? nr : He.current), (u = $r(t, u)))
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && _c(t, o, r, u)),
      (xn = !1)
    var h = t.memoizedState
    ;(o.state = h),
      ro(t, r, o, i),
      (a = t.memoizedState),
      s !== r || h !== a || Je.current || xn
        ? (typeof f == 'function' && (ca(t, n, f, r), (a = t.memoizedState)),
          (s = xn || jc(t, n, s, r, h, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = t.stateNode),
      ip(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : jt(t.type, s)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Tt(a))
        : ((a = et(n) ? nr : He.current), (a = $r(t, a)))
    var g = n.getDerivedStateFromProps
    ;(f =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== d || h !== a) && _c(t, o, r, a)),
      (xn = !1),
      (h = t.memoizedState),
      (o.state = h),
      ro(t, r, o, i)
    var y = t.memoizedState
    s !== d || h !== y || Je.current || xn
      ? (typeof g == 'function' && (ca(t, n, g, r), (y = t.memoizedState)),
        (u = xn || jc(t, n, u, r, h, y, a) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ha(e, t, n, r, l, i)
}
function ha(e, t, n, r, i, l) {
  Op(e, t)
  var o = (t.flags & 128) !== 0
  if (!r && !o) return i && Ec(t, n, !1), dn(e, t, l)
  ;(r = t.stateNode), (ag.current = t)
  var s =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ur(t, e.child, null, l)), (t.child = Ur(t, null, s, l)))
      : Ge(e, t, s, l),
    (t.memoizedState = r.state),
    i && Ec(t, n, !0),
    t.child
  )
}
function zp(e) {
  var t = e.stateNode
  t.pendingContext
    ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sc(e, t.context, !1),
    pu(e, t.containerInfo)
}
function Ic(e, t, n, r, i) {
  return Br(), su(i), (t.flags |= 256), Ge(e, t, n, r), t.child
}
var ma = { dehydrated: null, treeContext: null, retryLane: 0 }
function va(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function bp(e, t, n) {
  var r = t.pendingProps,
    i = he.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    s
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(he, i & 1),
    e === null)
  )
    return (
      aa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = Oo(o, r, 0, null)),
              (e = er(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = va(n)),
              (t.memoizedState = ma),
              e)
            : Su(t, o))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return ug(e, t, o, r, s, i, n)
  if (l) {
    ;(l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = bn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (l = bn(s, l)) : ((l = er(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? va(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ma),
      r
    )
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = bn(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Su(e, t) {
  return (
    (t = Oo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function xl(e, t, n, r) {
  return (
    r !== null && su(r),
    Ur(t, e.child, null, n),
    (e = Su(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function ug(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xs(Error(z(422)))), xl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Oo({ mode: 'visible', children: r.children }, i, 0, null)),
        (l = er(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Ur(t, e.child, null, o),
        (t.child.memoizedState = va(o)),
        (t.memoizedState = ma),
        l)
  if (!(t.mode & 1)) return xl(e, t, o, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (l = Error(z(419))), (r = xs(l, r, void 0)), xl(e, t, o, r)
  }
  if (((s = (o & e.childLanes) !== 0), Ze || s)) {
    if (((r = be), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), cn(e, i), Rt(r, e, i, -1))
    }
    return ju(), (r = xs(Error(z(421)))), xl(e, t, o, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Eg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (at = Mn(i.nextSibling)),
      (ct = t),
      (de = !0),
      (Lt = null),
      e !== null &&
        ((xt[wt++] = nn),
        (xt[wt++] = rn),
        (xt[wt++] = rr),
        (nn = e.id),
        (rn = e.overflow),
        (rr = t)),
      (t = Su(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Fc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), ua(e.return, t, n)
}
function ws(e, t, n, r, i) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i))
}
function Ap(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail
  if ((Ge(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t)
        else if (e.tag === 19) Fc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ae(he, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && io(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ws(t, !1, i, n, l)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && io(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        ws(t, !0, n, null, l)
        break
      case 'together':
        ws(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(z(153))
  if (t.child !== null) {
    for (
      e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function cg(e, t, n) {
  switch (t.tag) {
    case 3:
      zp(t), Br()
      break
    case 5:
      up(t)
      break
    case 1:
      et(t.type) && Zl(t)
      break
    case 4:
      pu(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      ae(to, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bp(e, t, n)
          : (ae(he, he.current & 1),
            (e = dn(e, t, n)),
            e !== null ? e.sibling : null)
      ae(he, he.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ap(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(he, he.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Rp(e, t, n)
  }
  return dn(e, t, n)
}
var Dp, ga, Ip, Fp
Dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
ga = function () {}
Ip = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), Kn(Gt.current)
    var l = null
    switch (n) {
      case 'input':
        ;(i = Fs(e, i)), (r = Fs(e, r)), (l = [])
        break
      case 'select':
        ;(i = ve({}, i, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (l = [])
        break
      case 'textarea':
        ;(i = Us(e, i)), (r = Us(e, r)), (l = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ql)
    }
    Hs(n, r)
    var o
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u]
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Pi.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]))
          } else n || (l || (l = []), l.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (l = l || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Pi.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && ue('scroll', e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a))
    }
    n && (l = l || []).push('style', n)
    var u = l
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Fp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function oi(e, t) {
  if (!de)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function dg(e, t, n) {
  var r = t.pendingProps
  switch ((ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null
    case 1:
      return et(t.type) && Kl(), Ue(t), null
    case 3:
      return (
        (r = t.stateNode),
        Vr(),
        ce(Je),
        ce(He),
        mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (ka(Lt), (Lt = null)))),
        ga(e, t),
        Ue(t),
        null
      )
    case 5:
      hu(t)
      var i = Kn(Ii.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Ip(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166))
          return Ue(t), null
        }
        if (((e = Kn(Gt.current)), gl(t))) {
          ;(r = t.stateNode), (n = t.type)
          var l = t.memoizedProps
          switch (((r[Vt] = t), (r[Ai] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ue('cancel', r), ue('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ue('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < pi.length; i++) ue(pi[i], r)
              break
            case 'source':
              ue('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ue('error', r), ue('load', r)
              break
            case 'details':
              ue('toggle', r)
              break
            case 'input':
              Qu(r, l), ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!l.multiple }),
                ue('invalid', r)
              break
            case 'textarea':
              qu(r, l), ue('invalid', r)
          }
          Hs(n, l), (i = null)
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o]
              o === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : Pi.hasOwnProperty(o) &&
                  s != null &&
                  o === 'onScroll' &&
                  ue('scroll', r)
            }
          switch (n) {
            case 'input':
              al(r), Yu(r, l, !0)
              break
            case 'textarea':
              al(r), Ku(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (r.onclick = ql)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ff(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Vt] = t),
            (e[Ai] = r),
            Dp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((o = Ws(n, r)), n)) {
              case 'dialog':
                ue('cancel', e), ue('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < pi.length; i++) ue(pi[i], e)
                i = r
                break
              case 'source':
                ue('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ue('error', e), ue('load', e), (i = r)
                break
              case 'details':
                ue('toggle', e), (i = r)
                break
              case 'input':
                Qu(e, r), (i = Fs(e, r)), ue('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ve({}, r, { value: void 0 })),
                  ue('invalid', e)
                break
              case 'textarea':
                qu(e, r), (i = Us(e, r)), ue('invalid', e)
                break
              default:
                i = r
            }
            Hs(n, i), (s = i)
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l]
                l === 'style'
                  ? mf(e, a)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && pf(e, a))
                  : l === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && ji(e, a)
                    : typeof a == 'number' && ji(e, '' + a)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (Pi.hasOwnProperty(l)
                      ? a != null && l === 'onScroll' && ue('scroll', e)
                      : a != null && Wa(e, l, a, o))
              }
            switch (n) {
              case 'input':
                al(e), Yu(e, r, !1)
                break
              case 'textarea':
                al(e), Ku(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + In(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Mr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Mr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = ql)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Ue(t), null
    case 6:
      if (e && t.stateNode != null) Fp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(z(166))
        if (((n = Kn(Ii.current)), Kn(Gt.current), gl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (l = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                vl(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vl(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r)
      }
      return Ue(t), null
    case 13:
      if (
        (ce(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && at !== null && t.mode & 1 && !(t.flags & 128))
          np(), Br(), (t.flags |= 98560), (l = !1)
        else if (((l = gl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(z(318))
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(z(317))
            l[Vt] = t
          } else
            Br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ue(t), (l = !1)
        } else Lt !== null && (ka(Lt), (Lt = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? Ne === 0 && (Ne = 3) : ju())),
          t.updateQueue !== null && (t.flags |= 4),
          Ue(t),
          null)
    case 4:
      return (
        Vr(), ga(e, t), e === null && zi(t.stateNode.containerInfo), Ue(t), null
      )
    case 10:
      return cu(t.type._context), Ue(t), null
    case 17:
      return et(t.type) && Kl(), Ue(t), null
    case 19:
      if ((ce(he), (l = t.memoizedState), l === null)) return Ue(t), null
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) oi(l, !1)
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = io(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    oi(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ae(he, (he.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null &&
            Se() > Wr &&
            ((t.flags |= 128), (r = !0), oi(l, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = io(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              oi(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !o.alternate && !de)
            )
              return Ue(t), null
          } else
            2 * Se() - l.renderingStartTime > Wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), oi(l, !1), (t.lanes = 4194304))
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o))
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Se()),
          (t.sibling = null),
          (n = he.current),
          ae(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ue(t), null)
    case 22:
    case 23:
      return (
        Pu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ue(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(z(156, t.tag))
}
function fg(e, t) {
  switch ((ou(t), t.tag)) {
    case 1:
      return (
        et(t.type) && Kl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Vr(),
        ce(Je),
        ce(He),
        mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return hu(t), null
    case 13:
      if (
        (ce(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340))
        Br()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ce(he), null
    case 4:
      return Vr(), null
    case 10:
      return cu(t.type._context), null
    case 22:
    case 23:
      return Pu(), null
    case 24:
      return null
    default:
      return null
  }
}
var wl = !1,
  Ve = !1,
  pg = typeof WeakSet == 'function' ? WeakSet : Set,
  U = null
function jr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ye(e, t, r)
      }
    else n.current = null
}
function ya(e, t, n) {
  try {
    n()
  } catch (r) {
    ye(e, t, r)
  }
}
var $c = !1
function hg(e, t) {
  if (((ta = Xl), (e = Vf()), iu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            l = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, l.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            h = null
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = o + i),
                d !== l || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (h = d), (d = g)
            for (;;) {
              if (d === e) break t
              if (
                (h === n && ++u === i && (s = o),
                h === l && ++f === r && (a = o),
                (g = d.nextSibling) !== null)
              )
                break
              ;(d = h), (h = d.parentNode)
            }
            d = g
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (na = { focusedElem: e, selectionRange: n }, Xl = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e)
    else
      for (; U !== null; ) {
        t = U
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    E = y.memoizedState,
                    c = t.stateNode,
                    p = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : jt(t.type, x),
                      E,
                    )
                  c.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(z(163))
            }
        } catch (w) {
          ye(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (U = e)
          break
        }
        U = t.return
      }
  return (y = $c), ($c = !1), y
}
function wi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy
        ;(i.destroy = void 0), l !== void 0 && ya(t, n, l)
      }
      i = i.next
    } while (i !== r)
  }
}
function Mo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function xa(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function $p(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), $p(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[Ai], delete t[la], delete t[qv], delete t[Kv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bp(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function wa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ql))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wa(e, t, n), e = e.sibling; e !== null; ) wa(e, t, n), (e = e.sibling)
}
function Sa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), (e = e.sibling)
}
var De = null,
  Nt = !1
function gn(e, t, n) {
  for (n = n.child; n !== null; ) Up(e, t, n), (n = n.sibling)
}
function Up(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == 'function')
    try {
      Wt.onCommitFiberUnmount(To, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || jr(n, t)
    case 6:
      var r = De,
        i = Nt
      ;(De = null),
        gn(e, t, n),
        (De = r),
        (Nt = i),
        De !== null &&
          (Nt
            ? ((e = De),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode))
      break
    case 18:
      De !== null &&
        (Nt
          ? ((e = De),
            (n = n.stateNode),
            e.nodeType === 8
              ? ps(e.parentNode, n)
              : e.nodeType === 1 && ps(e, n),
            Mi(e))
          : ps(De, n.stateNode))
      break
    case 4:
      ;(r = De),
        (i = Nt),
        (De = n.stateNode.containerInfo),
        (Nt = !0),
        gn(e, t, n),
        (De = r),
        (Nt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var l = i,
            o = l.destroy
          ;(l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && ya(n, t, o),
            (i = i.next)
        } while (i !== r)
      }
      gn(e, t, n)
      break
    case 1:
      if (
        !Ve &&
        (jr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          ye(n, t, s)
        }
      gn(e, t, n)
      break
    case 21:
      gn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), gn(e, t, n), (Ve = r))
        : gn(e, t, n)
      break
    default:
      gn(e, t, n)
  }
}
function Uc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new pg()),
      t.forEach(function (r) {
        var i = Tg.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Pt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var l = e,
          o = t,
          s = o
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(De = s.stateNode), (Nt = !1)
              break e
            case 3:
              ;(De = s.stateNode.containerInfo), (Nt = !0)
              break e
            case 4:
              ;(De = s.stateNode.containerInfo), (Nt = !0)
              break e
          }
          s = s.return
        }
        if (De === null) throw Error(z(160))
        Up(l, o, i), (De = null), (Nt = !1)
        var a = i.alternate
        a !== null && (a.return = null), (i.return = null)
      } catch (u) {
        ye(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vp(t, e), (t = t.sibling)
}
function Vp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pt(t, e), Ft(e), r & 4)) {
        try {
          wi(3, e, e.return), Mo(3, e)
        } catch (x) {
          ye(e, e.return, x)
        }
        try {
          wi(5, e, e.return)
        } catch (x) {
          ye(e, e.return, x)
        }
      }
      break
    case 1:
      Pt(t, e), Ft(e), r & 512 && n !== null && jr(n, n.return)
      break
    case 5:
      if (
        (Pt(t, e),
        Ft(e),
        r & 512 && n !== null && jr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          ji(i, '')
        } catch (x) {
          ye(e, e.return, x)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && l.type === 'radio' && l.name != null && cf(i, l),
              Ws(s, o)
            var u = Ws(s, l)
            for (o = 0; o < a.length; o += 2) {
              var f = a[o],
                d = a[o + 1]
              f === 'style'
                ? mf(i, d)
                : f === 'dangerouslySetInnerHTML'
                ? pf(i, d)
                : f === 'children'
                ? ji(i, d)
                : Wa(i, f, d, u)
            }
            switch (s) {
              case 'input':
                $s(i, l)
                break
              case 'textarea':
                df(i, l)
                break
              case 'select':
                var h = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!l.multiple
                var g = l.value
                g != null
                  ? Mr(i, !!l.multiple, g, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Mr(i, !!l.multiple, l.defaultValue, !0)
                      : Mr(i, !!l.multiple, l.multiple ? [] : '', !1))
            }
            i[Ai] = l
          } catch (x) {
            ye(e, e.return, x)
          }
      }
      break
    case 6:
      if ((Pt(t, e), Ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162))
        ;(i = e.stateNode), (l = e.memoizedProps)
        try {
          i.nodeValue = l
        } catch (x) {
          ye(e, e.return, x)
        }
      }
      break
    case 3:
      if (
        (Pt(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mi(t.containerInfo)
        } catch (x) {
          ye(e, e.return, x)
        }
      break
    case 4:
      Pt(t, e), Ft(e)
      break
    case 13:
      Pt(t, e),
        Ft(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cu = Se())),
        r & 4 && Uc(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || f), Pt(t, e), (Ve = u)) : Pt(t, e),
        Ft(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (U = e, f = e.child; f !== null; ) {
            for (d = U = f; U !== null; ) {
              switch (((h = U), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wi(4, h, h.return)
                  break
                case 1:
                  jr(h, h.return)
                  var y = h.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = h), (n = h.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (x) {
                      ye(r, n, x)
                    }
                  }
                  break
                case 5:
                  jr(h, h.return)
                  break
                case 22:
                  if (h.memoizedState !== null) {
                    Hc(d)
                    continue
                  }
              }
              g !== null ? ((g.return = h), (U = g)) : Hc(d)
            }
            f = f.sibling
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d
              try {
                ;(i = d.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = hf('display', o)))
              } catch (x) {
                ye(e, e.return, x)
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (x) {
                ye(e, e.return, x)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            f === d && (f = null), (d = d.return)
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      Pt(t, e), Ft(e), r & 4 && Uc(e)
      break
    case 21:
      break
    default:
      Pt(t, e), Ft(e)
  }
}
function Ft(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bp(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(z(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (ji(i, ''), (r.flags &= -33))
          var l = Bc(e)
          Sa(e, l, i)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Bc(e)
          wa(e, s, o)
          break
        default:
          throw Error(z(161))
      }
    } catch (a) {
      ye(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function mg(e, t, n) {
  ;(U = e), Hp(e)
}
function Hp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      l = i.child
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || wl
      if (!o) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || Ve
        s = wl
        var u = Ve
        if (((wl = o), (Ve = a) && !u))
          for (U = i; U !== null; )
            (o = U),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Wc(i)
                : a !== null
                ? ((a.return = o), (U = a))
                : Wc(i)
        for (; l !== null; ) (U = l), Hp(l), (l = l.sibling)
        ;(U = i), (wl = s), (Ve = u)
      }
      Vc(e)
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (U = l)) : Vc(e)
  }
}
function Vc(e) {
  for (; U !== null; ) {
    var t = U
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || Mo(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var l = t.updateQueue
              l !== null && Pc(t, l, r)
              break
            case 3:
              var o = t.updateQueue
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Pc(t, o, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var f = u.memoizedState
                  if (f !== null) {
                    var d = f.dehydrated
                    d !== null && Mi(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(z(163))
          }
        Ve || (t.flags & 512 && xa(t))
      } catch (h) {
        ye(t, t.return, h)
      }
    }
    if (t === e) {
      U = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (U = n)
      break
    }
    U = t.return
  }
}
function Hc(e) {
  for (; U !== null; ) {
    var t = U
    if (t === e) {
      U = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (U = n)
      break
    }
    U = t.return
  }
}
function Wc(e) {
  for (; U !== null; ) {
    var t = U
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Mo(4, t)
          } catch (a) {
            ye(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              ye(t, i, a)
            }
          }
          var l = t.return
          try {
            xa(t)
          } catch (a) {
            ye(t, l, a)
          }
          break
        case 5:
          var o = t.return
          try {
            xa(t)
          } catch (a) {
            ye(t, o, a)
          }
      }
    } catch (a) {
      ye(t, t.return, a)
    }
    if (t === e) {
      U = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (U = s)
      break
    }
    U = t.return
  }
}
var vg = Math.ceil,
  so = fn.ReactCurrentDispatcher,
  Eu = fn.ReactCurrentOwner,
  Et = fn.ReactCurrentBatchConfig,
  ie = 0,
  be = null,
  ke = null,
  Ie = 0,
  ot = 0,
  _r = Un(0),
  Ne = 0,
  Ui = null,
  lr = 0,
  Ro = 0,
  Tu = 0,
  Si = null,
  Ke = null,
  Cu = 0,
  Wr = 1 / 0,
  Jt = null,
  ao = !1,
  Ea = null,
  On = null,
  Sl = !1,
  Cn = null,
  uo = 0,
  Ei = 0,
  Ta = null,
  Dl = -1,
  Il = 0
function Xe() {
  return ie & 6 ? Se() : Dl !== -1 ? Dl : (Dl = Se())
}
function zn(e) {
  return e.mode & 1
    ? ie & 2 && Ie !== 0
      ? Ie & -Ie
      : Jv.transition !== null
      ? (Il === 0 && (Il = jf()), Il)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zf(e.type))),
        e)
    : 1
}
function Rt(e, t, n, r) {
  if (50 < Ei) throw ((Ei = 0), (Ta = null), Error(z(185)))
  qi(e, n, r),
    (!(ie & 2) || e !== be) &&
      (e === be && (!(ie & 2) && (Ro |= n), Ne === 4 && Sn(e, Ie)),
      tt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((Wr = Se() + 500), _o && Vn()))
}
function tt(e, t) {
  var n = e.callbackNode
  Jm(e, t)
  var r = Gl(e, e === be ? Ie : 0)
  if (r === 0)
    n !== null && ec(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ec(n), t === 1))
      e.tag === 0 ? Zv(Gc.bind(null, e)) : Jf(Gc.bind(null, e)),
        Qv(function () {
          !(ie & 6) && Vn()
        }),
        (n = null)
    else {
      switch (_f(r)) {
        case 1:
          n = qa
          break
        case 4:
          n = kf
          break
        case 16:
          n = Wl
          break
        case 536870912:
          n = Pf
          break
        default:
          n = Wl
      }
      n = Zp(n, Wp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Wp(e, t) {
  if (((Dl = -1), (Il = 0), ie & 6)) throw Error(z(327))
  var n = e.callbackNode
  if (Ar() && e.callbackNode !== n) return null
  var r = Gl(e, e === be ? Ie : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r)
  else {
    t = r
    var i = ie
    ie |= 2
    var l = Xp()
    ;(be !== e || Ie !== t) && ((Jt = null), (Wr = Se() + 500), Jn(e, t))
    do
      try {
        xg()
        break
      } catch (s) {
        Gp(e, s)
      }
    while (1)
    uu(),
      (so.current = l),
      (ie = i),
      ke !== null ? (t = 0) : ((be = null), (Ie = 0), (t = Ne))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = qs(e)), i !== 0 && ((r = i), (t = Ca(e, i)))), t === 1)
    )
      throw ((n = Ui), Jn(e, 0), Sn(e, r), tt(e, Se()), n)
    if (t === 6) Sn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !gg(i) &&
          ((t = co(e, r)),
          t === 2 && ((l = qs(e)), l !== 0 && ((r = l), (t = Ca(e, l)))),
          t === 1))
      )
        throw ((n = Ui), Jn(e, 0), Sn(e, r), tt(e, Se()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345))
        case 2:
          Qn(e, Ke, Jt)
          break
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = Cu + 500 - Se()), 10 < t))
          ) {
            if (Gl(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = ia(Qn.bind(null, e, Ke, Jt), t)
            break
          }
          Qn(e, Ke, Jt)
          break
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Mt(r)
            ;(l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l)
          }
          if (
            ((r = i),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ia(Qn.bind(null, e, Ke, Jt), r)
            break
          }
          Qn(e, Ke, Jt)
          break
        case 5:
          Qn(e, Ke, Jt)
          break
        default:
          throw Error(z(329))
      }
    }
  }
  return tt(e, Se()), e.callbackNode === n ? Wp.bind(null, e) : null
}
function Ca(e, t) {
  var n = Si
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = co(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ka(t)),
    e
  )
}
function ka(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e)
}
function gg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot
          i = i.value
          try {
            if (!zt(l(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Sn(e, t) {
  for (
    t &= ~Tu,
      t &= ~Ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Gc(e) {
  if (ie & 6) throw Error(z(327))
  Ar()
  var t = Gl(e, 0)
  if (!(t & 1)) return tt(e, Se()), null
  var n = co(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = qs(e)
    r !== 0 && ((t = r), (n = Ca(e, r)))
  }
  if (n === 1) throw ((n = Ui), Jn(e, 0), Sn(e, t), tt(e, Se()), n)
  if (n === 6) throw Error(z(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, Ke, Jt),
    tt(e, Se()),
    null
  )
}
function ku(e, t) {
  var n = ie
  ie |= 1
  try {
    return e(t)
  } finally {
    ;(ie = n), ie === 0 && ((Wr = Se() + 500), _o && Vn())
  }
}
function or(e) {
  Cn !== null && Cn.tag === 0 && !(ie & 6) && Ar()
  var t = ie
  ie |= 1
  var n = Et.transition,
    r = oe
  try {
    if (((Et.transition = null), (oe = 1), e)) return e()
  } finally {
    ;(oe = r), (Et.transition = n), (ie = t), !(ie & 6) && Vn()
  }
}
function Pu() {
  ;(ot = _r.current), ce(_r)
}
function Jn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Xv(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n
      switch ((ou(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Kl()
          break
        case 3:
          Vr(), ce(Je), ce(He), mu()
          break
        case 5:
          hu(r)
          break
        case 4:
          Vr()
          break
        case 13:
          ce(he)
          break
        case 19:
          ce(he)
          break
        case 10:
          cu(r.type._context)
          break
        case 22:
        case 23:
          Pu()
      }
      n = n.return
    }
  if (
    ((be = e),
    (ke = e = bn(e.current, null)),
    (Ie = ot = t),
    (Ne = 0),
    (Ui = null),
    (Tu = Ro = lr = 0),
    (Ke = Si = null),
    qn !== null)
  ) {
    for (t = 0; t < qn.length; t++)
      if (((n = qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          l = n.pending
        if (l !== null) {
          var o = l.next
          ;(l.next = i), (r.next = o)
        }
        n.pending = r
      }
    qn = null
  }
  return e
}
function Gp(e, t) {
  do {
    var n = ke
    try {
      if ((uu(), (zl.current = oo), lo)) {
        for (var r = me.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        lo = !1
      }
      if (
        ((ir = 0),
        (ze = je = me = null),
        (xi = !1),
        (Fi = 0),
        (Eu.current = null),
        n === null || n.return === null)
      ) {
        ;(Ne = 1), (Ui = t), (ke = null)
        break
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          a = t
        if (
          ((t = Ie),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            f = s,
            d = f.tag
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var g = Oc(o)
          if (g !== null) {
            ;(g.flags &= -257),
              zc(g, o, s, l, t),
              g.mode & 1 && Rc(l, u, t),
              (t = g),
              (a = u)
            var y = t.updateQueue
            if (y === null) {
              var x = new Set()
              x.add(a), (t.updateQueue = x)
            } else y.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Rc(l, u, t), ju()
              break e
            }
            a = Error(z(426))
          }
        } else if (de && s.mode & 1) {
          var E = Oc(o)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              zc(E, o, s, l, t),
              su(Hr(a, s))
            break e
          }
        }
        ;(l = a = Hr(a, s)),
          Ne !== 4 && (Ne = 2),
          Si === null ? (Si = [l]) : Si.push(l),
          (l = o)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var c = Np(l, a, t)
              kc(l, c)
              break e
            case 1:
              s = a
              var p = l.type,
                v = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (On === null || !On.has(v))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var w = Lp(l, s, t)
                kc(l, w)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      Yp(n)
    } catch (T) {
      ;(t = T), ke === n && n !== null && (ke = n = n.return)
      continue
    }
    break
  } while (1)
}
function Xp() {
  var e = so.current
  return (so.current = oo), e === null ? oo : e
}
function ju() {
  ;(Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    be === null || (!(lr & 268435455) && !(Ro & 268435455)) || Sn(be, Ie)
}
function co(e, t) {
  var n = ie
  ie |= 2
  var r = Xp()
  ;(be !== e || Ie !== t) && ((Jt = null), Jn(e, t))
  do
    try {
      yg()
      break
    } catch (i) {
      Gp(e, i)
    }
  while (1)
  if ((uu(), (ie = n), (so.current = r), ke !== null)) throw Error(z(261))
  return (be = null), (Ie = 0), Ne
}
function yg() {
  for (; ke !== null; ) Qp(ke)
}
function xg() {
  for (; ke !== null && !Hm(); ) Qp(ke)
}
function Qp(e) {
  var t = Kp(e.alternate, e, ot)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Yp(e) : (ke = t),
    (Eu.current = null)
}
function Yp(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (ke = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ne = 6), (ke = null)
        return
      }
    } else if (((n = dg(n, t, ot)), n !== null)) {
      ke = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      ke = t
      return
    }
    ke = t = e
  } while (t !== null)
  Ne === 0 && (Ne = 5)
}
function Qn(e, t, n) {
  var r = oe,
    i = Et.transition
  try {
    ;(Et.transition = null), (oe = 1), wg(e, t, n, r)
  } finally {
    ;(Et.transition = i), (oe = r)
  }
  return null
}
function wg(e, t, n, r) {
  do Ar()
  while (Cn !== null)
  if (ie & 6) throw Error(z(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = n.lanes | n.childLanes
  if (
    (ev(e, l),
    e === be && ((ke = be = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sl ||
      ((Sl = !0),
      Zp(Wl, function () {
        return Ar(), null
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ;(l = Et.transition), (Et.transition = null)
    var o = oe
    oe = 1
    var s = ie
    ;(ie |= 4),
      (Eu.current = null),
      hg(e, n),
      Vp(n, e),
      $v(na),
      (Xl = !!ta),
      (na = ta = null),
      (e.current = n),
      mg(n),
      Wm(),
      (ie = s),
      (oe = o),
      (Et.transition = l)
  } else e.current = n
  if (
    (Sl && ((Sl = !1), (Cn = e), (uo = i)),
    (l = e.pendingLanes),
    l === 0 && (On = null),
    Qm(n.stateNode),
    tt(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (ao) throw ((ao = !1), (e = Ea), (Ea = null), e)
  return (
    uo & 1 && e.tag !== 0 && Ar(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ta ? Ei++ : ((Ei = 0), (Ta = e))) : (Ei = 0),
    Vn(),
    null
  )
}
function Ar() {
  if (Cn !== null) {
    var e = _f(uo),
      t = Et.transition,
      n = oe
    try {
      if (((Et.transition = null), (oe = 16 > e ? 16 : e), Cn === null))
        var r = !1
      else {
        if (((e = Cn), (Cn = null), (uo = 0), ie & 6)) throw Error(z(331))
        var i = ie
        for (ie |= 4, U = e.current; U !== null; ) {
          var l = U,
            o = l.child
          if (U.flags & 16) {
            var s = l.deletions
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a]
                for (U = u; U !== null; ) {
                  var f = U
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(8, f, l)
                  }
                  var d = f.child
                  if (d !== null) (d.return = f), (U = d)
                  else
                    for (; U !== null; ) {
                      f = U
                      var h = f.sibling,
                        g = f.return
                      if (($p(f), f === u)) {
                        U = null
                        break
                      }
                      if (h !== null) {
                        ;(h.return = g), (U = h)
                        break
                      }
                      U = g
                    }
                }
              }
              var y = l.alternate
              if (y !== null) {
                var x = y.child
                if (x !== null) {
                  y.child = null
                  do {
                    var E = x.sibling
                    ;(x.sibling = null), (x = E)
                  } while (x !== null)
                }
              }
              U = l
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (U = o)
          else
            e: for (; U !== null; ) {
              if (((l = U), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wi(9, l, l.return)
                }
              var c = l.sibling
              if (c !== null) {
                ;(c.return = l.return), (U = c)
                break e
              }
              U = l.return
            }
        }
        var p = e.current
        for (U = p; U !== null; ) {
          o = U
          var v = o.child
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (U = v)
          else
            e: for (o = p; U !== null; ) {
              if (((s = U), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, s)
                  }
                } catch (T) {
                  ye(s, s.return, T)
                }
              if (s === o) {
                U = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (U = w)
                break e
              }
              U = s.return
            }
        }
        if (
          ((ie = i), Vn(), Wt && typeof Wt.onPostCommitFiberRoot == 'function')
        )
          try {
            Wt.onPostCommitFiberRoot(To, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(oe = n), (Et.transition = t)
    }
  }
  return !1
}
function Xc(e, t, n) {
  ;(t = Hr(n, t)),
    (t = Np(e, t, 1)),
    (e = Rn(e, t, 1)),
    (t = Xe()),
    e !== null && (qi(e, 1, t), tt(e, t))
}
function ye(e, t, n) {
  if (e.tag === 3) Xc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (On === null || !On.has(r)))
        ) {
          ;(e = Hr(n, e)),
            (e = Lp(t, e, 1)),
            (t = Rn(t, e, 1)),
            (e = Xe()),
            t !== null && (qi(t, 1, e), tt(t, e))
          break
        }
      }
      t = t.return
    }
}
function Sg(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Ie & n) === n &&
      (Ne === 4 || (Ne === 3 && (Ie & 130023424) === Ie && 500 > Se() - Cu)
        ? Jn(e, 0)
        : (Tu |= n)),
    tt(e, t)
}
function qp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = dl), (dl <<= 1), !(dl & 130023424) && (dl = 4194304))
      : (t = 1))
  var n = Xe()
  ;(e = cn(e, t)), e !== null && (qi(e, t, n), tt(e, n))
}
function Eg(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), qp(e, n)
}
function Tg(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(z(314))
  }
  r !== null && r.delete(t), qp(e, n)
}
var Kp
Kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), cg(e, t, n)
      Ze = !!(e.flags & 131072)
    }
  else (Ze = !1), de && t.flags & 1048576 && ep(t, eo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Al(e, t), (e = t.pendingProps)
      var i = $r(t, He.current)
      br(t, n), (i = gu(null, t, r, e, i, n))
      var l = yu()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((l = !0), Zl(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fu(t),
            (i.updater = No),
            (t.stateNode = i),
            (i._reactInternals = t),
            da(t, r, e, n),
            (t = ha(null, t, r, !0, l, n)))
          : ((t.tag = 0), de && l && lu(t), Ge(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Al(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = kg(r)),
          (e = jt(r, e)),
          i)
        ) {
          case 0:
            t = pa(null, t, r, e, n)
            break e
          case 1:
            t = Dc(null, t, r, e, n)
            break e
          case 11:
            t = bc(null, t, r, e, n)
            break e
          case 14:
            t = Ac(null, t, r, jt(r.type, e), n)
            break e
        }
        throw Error(z(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        pa(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        Dc(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((zp(t), e === null)) throw Error(z(387))
        ;(r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          ip(e, t),
          ro(t, r, null, n)
        var o = t.memoizedState
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ;(i = Hr(Error(z(423)), t)), (t = Ic(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Hr(Error(z(424)), t)), (t = Ic(e, t, r, n, i))
            break e
          } else
            for (
              at = Mn(t.stateNode.containerInfo.firstChild),
                ct = t,
                de = !0,
                Lt = null,
                n = ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Br(), r === i)) {
            t = dn(e, t, n)
            break e
          }
          Ge(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        up(t),
        e === null && aa(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ra(r, i) ? (o = null) : l !== null && ra(r, l) && (t.flags |= 32),
        Op(e, t),
        Ge(e, t, o, n),
        t.child
      )
    case 6:
      return e === null && aa(t), null
    case 13:
      return bp(e, t, n)
    case 4:
      return (
        pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ur(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        bc(e, t, r, i, n)
      )
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          ae(to, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (zt(l.value, o)) {
            if (l.children === i.children && !Je.current) {
              t = dn(e, t, n)
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies
              if (s !== null) {
                o = l.child
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      ;(a = ln(-1, n & -n)), (a.tag = 2)
                      var u = l.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var f = u.pending
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      ua(l.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(z(341))
                ;(o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  ua(o, n, t),
                  (o = l.sibling)
              } else o = l.child
              if (o !== null) o.return = l
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (((l = o.sibling), l !== null)) {
                    ;(l.return = o.return), (o = l)
                    break
                  }
                  o = o.return
                }
              l = o
            }
        Ge(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        br(t, n),
        (i = Tt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = jt(r, t.pendingProps)),
        (i = jt(r.type, i)),
        Ac(e, t, r, i, n)
      )
    case 15:
      return Mp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        Al(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), Zl(t)) : (e = !1),
        br(t, n),
        op(t, r, i),
        da(t, r, i, n),
        ha(null, t, r, !0, e, n)
      )
    case 19:
      return Ap(e, t, n)
    case 22:
      return Rp(e, t, n)
  }
  throw Error(z(156, t.tag))
}
function Zp(e, t) {
  return Cf(e, t)
}
function Cg(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function St(e, t, n, r) {
  return new Cg(e, t, n, r)
}
function _u(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function kg(e) {
  if (typeof e == 'function') return _u(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Xa)) return 11
    if (e === Qa) return 14
  }
  return 2
}
function bn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Fl(e, t, n, r, i, l) {
  var o = 2
  if (((r = e), typeof e == 'function')) _u(e) && (o = 1)
  else if (typeof e == 'string') o = 5
  else
    e: switch (e) {
      case yr:
        return er(n.children, i, l, t)
      case Ga:
        ;(o = 8), (i |= 8)
        break
      case bs:
        return (e = St(12, n, t, i | 2)), (e.elementType = bs), (e.lanes = l), e
      case As:
        return (e = St(13, n, t, i)), (e.elementType = As), (e.lanes = l), e
      case Ds:
        return (e = St(19, n, t, i)), (e.elementType = Ds), (e.lanes = l), e
      case sf:
        return Oo(n, i, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case lf:
              o = 10
              break e
            case of:
              o = 9
              break e
            case Xa:
              o = 11
              break e
            case Qa:
              o = 14
              break e
            case yn:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(z(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = St(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  )
}
function er(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e
}
function Oo(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = sf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ss(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e
}
function Es(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Pg(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ns(0)),
    (this.expirationTimes = ns(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ns(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Nu(e, t, n, r, i, l, o, s, a) {
  return (
    (e = new Pg(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = St(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fu(l),
    e
  )
}
function jg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: gr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Jp(e) {
  if (!e) return Fn
  e = e._reactInternals
  e: {
    if (dr(e) !== e || e.tag !== 1) throw Error(z(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(z(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (et(n)) return Zf(e, n, t)
  }
  return t
}
function eh(e, t, n, r, i, l, o, s, a) {
  return (
    (e = Nu(n, r, !0, e, i, l, o, s, a)),
    (e.context = Jp(null)),
    (n = e.current),
    (r = Xe()),
    (i = zn(n)),
    (l = ln(r, i)),
    (l.callback = t ?? null),
    Rn(n, l, i),
    (e.current.lanes = i),
    qi(e, i, r),
    tt(e, r),
    e
  )
}
function zo(e, t, n, r) {
  var i = t.current,
    l = Xe(),
    o = zn(i)
  return (
    (n = Jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ln(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rn(i, t, o)),
    e !== null && (Rt(e, i, o, l), Ol(e, i, o)),
    o
  )
}
function fo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Qc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Lu(e, t) {
  Qc(e, t), (e = e.alternate) && Qc(e, t)
}
function _g() {
  return null
}
var th =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Mu(e) {
  this._internalRoot = e
}
bo.prototype.render = Mu.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(z(409))
  zo(e, t, null, null)
}
bo.prototype.unmount = Mu.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    or(function () {
      zo(null, e, null, null)
    }),
      (t[un] = null)
  }
}
function bo(e) {
  this._internalRoot = e
}
bo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Mf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
    wn.splice(n, 0, e), n === 0 && Of(e)
  }
}
function Ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ao(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Yc() {}
function Ng(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var l = r
      r = function () {
        var u = fo(o)
        l.call(u)
      }
    }
    var o = eh(t, r, e, 0, null, !1, !1, '', Yc)
    return (
      (e._reactRootContainer = o),
      (e[un] = o.current),
      zi(e.nodeType === 8 ? e.parentNode : e),
      or(),
      o
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = fo(a)
      s.call(u)
    }
  }
  var a = Nu(e, 0, !1, null, null, !1, !1, '', Yc)
  return (
    (e._reactRootContainer = a),
    (e[un] = a.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      zo(t, a, n, r)
    }),
    a
  )
}
function Do(e, t, n, r, i) {
  var l = n._reactRootContainer
  if (l) {
    var o = l
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var a = fo(o)
        s.call(a)
      }
    }
    zo(t, o, e, i)
  } else o = Ng(n, t, e, i, r)
  return fo(o)
}
Nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = fi(t.pendingLanes)
        n !== 0 &&
          (Ka(t, n | 1), tt(t, Se()), !(ie & 6) && ((Wr = Se() + 500), Vn()))
      }
      break
    case 13:
      or(function () {
        var r = cn(e, 1)
        if (r !== null) {
          var i = Xe()
          Rt(r, e, 1, i)
        }
      }),
        Lu(e, 1)
  }
}
Za = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728)
    if (t !== null) {
      var n = Xe()
      Rt(t, e, 134217728, n)
    }
    Lu(e, 134217728)
  }
}
Lf = function (e) {
  if (e.tag === 13) {
    var t = zn(e),
      n = cn(e, t)
    if (n !== null) {
      var r = Xe()
      Rt(n, e, t, r)
    }
    Lu(e, t)
  }
}
Mf = function () {
  return oe
}
Rf = function (e, t) {
  var n = oe
  try {
    return (oe = e), t()
  } finally {
    oe = n
  }
}
Xs = function (e, t, n) {
  switch (t) {
    case 'input':
      if (($s(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = jo(r)
            if (!i) throw Error(z(90))
            uf(r), $s(r, i)
          }
        }
      }
      break
    case 'textarea':
      df(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Mr(e, !!n.multiple, t, !1)
  }
}
yf = ku
xf = or
var Lg = { usingClientEntryPoint: !1, Events: [Zi, Er, jo, vf, gf, ku] },
  si = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Mg = {
    bundleType: si.bundleType,
    version: si.version,
    rendererPackageName: si.rendererPackageName,
    rendererConfig: si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ef(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: si.findFiberByHostInstance || _g,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var El = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!El.isDisabled && El.supportsFiber)
    try {
      ;(To = El.inject(Mg)), (Wt = El)
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ru(t)) throw Error(z(200))
  return jg(e, t, null, n)
}
ft.createRoot = function (e, t) {
  if (!Ru(e)) throw Error(z(299))
  var n = !1,
    r = '',
    i = th
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Nu(e, 1, !1, null, null, n, !1, r, i)),
    (e[un] = t.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    new Mu(t)
  )
}
ft.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(z(188))
      : ((e = Object.keys(e).join(',')), Error(z(268, e)))
  return (e = Ef(t)), (e = e === null ? null : e.stateNode), e
}
ft.flushSync = function (e) {
  return or(e)
}
ft.hydrate = function (e, t, n) {
  if (!Ao(t)) throw Error(z(200))
  return Do(null, e, t, !0, n)
}
ft.hydrateRoot = function (e, t, n) {
  if (!Ru(e)) throw Error(z(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = '',
    o = th
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = eh(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[un] = t.current),
    zi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new bo(t)
}
ft.render = function (e, t, n) {
  if (!Ao(t)) throw Error(z(200))
  return Do(null, e, t, !1, n)
}
ft.unmountComponentAtNode = function (e) {
  if (!Ao(e)) throw Error(z(40))
  return e._reactRootContainer
    ? (or(function () {
        Do(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[un] = null)
        })
      }),
      !0)
    : !1
}
ft.unstable_batchedUpdates = ku
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ao(n)) throw Error(z(200))
  if (e == null || e._reactInternals === void 0) throw Error(z(38))
  return Do(e, t, n, !1, r)
}
ft.version = '18.2.0-next-9e3b772b8-20220608'
function nh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh)
    } catch (e) {
      console.error(e)
    }
}
nh(), (Jd.exports = ft)
var Rg = Jd.exports,
  qc = Rg
;(Os.createRoot = qc.createRoot), (Os.hydrateRoot = qc.hydrateRoot)
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    le.apply(this, arguments)
  )
}
var Ce
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Ce || (Ce = {}))
const Kc = 'popstate'
function Og(e) {
  e === void 0 && (e = {})
  function t(i, l) {
    let {
      pathname: o = '/',
      search: s = '',
      hash: a = '',
    } = Qt(i.location.hash.substr(1))
    return Vi(
      '',
      { pathname: o, search: s, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    )
  }
  function n(i, l) {
    let o = i.document.querySelector('base'),
      s = ''
    if (o && o.getAttribute('href')) {
      let a = i.location.href,
        u = a.indexOf('#')
      s = u === -1 ? a : a.slice(0, u)
    }
    return s + '#' + (typeof l == 'string' ? l : ar(l))
  }
  function r(i, l) {
    sr(
      i.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(l) +
        ')',
    )
  }
  return bg(t, n, r, e)
}
function J(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function sr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function zg() {
  return Math.random().toString(36).substr(2, 8)
}
function Zc(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Vi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    le(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Qt(t) : t,
      { state: n, key: (t && t.key) || r || zg() },
    )
  )
}
function ar(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Qt(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function bg(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    o = i.history,
    s = Ce.Pop,
    a = null,
    u = f()
  u == null && ((u = 0), o.replaceState(le({}, o.state, { idx: u }), ''))
  function f() {
    return (o.state || { idx: null }).idx
  }
  function d() {
    s = Ce.Pop
    let E = f(),
      c = E == null ? null : E - u
    ;(u = E), a && a({ action: s, location: x.location, delta: c })
  }
  function h(E, c) {
    s = Ce.Push
    let p = Vi(x.location, E, c)
    n && n(p, E), (u = f() + 1)
    let v = Zc(p, u),
      w = x.createHref(p)
    try {
      o.pushState(v, '', w)
    } catch {
      i.location.assign(w)
    }
    l && a && a({ action: s, location: x.location, delta: 1 })
  }
  function g(E, c) {
    s = Ce.Replace
    let p = Vi(x.location, E, c)
    n && n(p, E), (u = f())
    let v = Zc(p, u),
      w = x.createHref(p)
    o.replaceState(v, '', w),
      l && a && a({ action: s, location: x.location, delta: 0 })
  }
  function y(E) {
    let c = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      p = typeof E == 'string' ? E : ar(E)
    return (
      J(
        c,
        'No window.location.(origin|href) available to create URL for href: ' +
          p,
      ),
      new URL(p, c)
    )
  }
  let x = {
    get action() {
      return s
    },
    get location() {
      return e(i, o)
    },
    listen(E) {
      if (a) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(Kc, d),
        (a = E),
        () => {
          i.removeEventListener(Kc, d), (a = null)
        }
      )
    },
    createHref(E) {
      return t(i, E)
    },
    createURL: y,
    encodeLocation(E) {
      let c = y(E)
      return { pathname: c.pathname, search: c.search, hash: c.hash }
    },
    push: h,
    replace: g,
    go(E) {
      return o.go(E)
    },
  }
  return x
}
var Pe
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Pe || (Pe = {}))
const Ag = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Dg(e) {
  return e.index === !0
}
function Pa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, l) => {
      let o = [...n, l],
        s = typeof i.id == 'string' ? i.id : o.join('-')
      if (
        (J(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route',
        ),
        J(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Dg(i))
      ) {
        let a = le({}, i, t(i), { id: s })
        return (r[s] = a), a
      } else {
        let a = le({}, i, t(i), { id: s, children: void 0 })
        return (
          (r[s] = a), i.children && (a.children = Pa(i.children, t, o, r)), a
        )
      }
    })
  )
}
function Nr(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Qt(t) : t,
    i = qr(r.pathname || '/', n)
  if (i == null) return null
  let l = rh(e)
  Ig(l)
  let o = null
  for (let s = 0; o == null && s < l.length; ++s) o = Xg(l[s], qg(i))
  return o
}
function rh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (l, o, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || '' : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    }
    a.relativePath.startsWith('/') &&
      (J(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (a.relativePath = a.relativePath.slice(r.length)))
    let u = on([r, a.relativePath]),
      f = n.concat(a)
    l.children &&
      l.children.length > 0 &&
      (J(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      rh(l.children, t, f, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: Wg(u, l.index), routesMeta: f })
  }
  return (
    e.forEach((l, o) => {
      var s
      if (l.path === '' || !((s = l.path) != null && s.includes('?'))) i(l, o)
      else for (let a of ih(l.path)) i(l, o, a)
    }),
    t
  )
}
function ih(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    l = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [l, ''] : [l]
  let o = ih(r.join('/')),
    s = []
  return (
    s.push(...o.map(a => (a === '' ? l : [l, a].join('/')))),
    i && s.push(...o),
    s.map(a => (e.startsWith('/') && a === '' ? '/' : a))
  )
}
function Ig(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gg(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex),
        ),
  )
}
const Fg = /^:\w+$/,
  $g = 3,
  Bg = 2,
  Ug = 1,
  Vg = 10,
  Hg = -2,
  Jc = e => e === '*'
function Wg(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Jc) && (r += Hg),
    t && (r += Bg),
    n
      .filter(i => !Jc(i))
      .reduce((i, l) => i + (Fg.test(l) ? $g : l === '' ? Ug : Vg), r)
  )
}
function Gg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function Xg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    l = []
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      a = o === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      f = Qg(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u,
      )
    if (!f) return null
    Object.assign(r, f.params)
    let d = s.route
    l.push({
      params: r,
      pathname: on([i, f.pathname]),
      pathnameBase: e0(on([i, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== '/' && (i = on([i, f.pathnameBase]))
  }
  return l
}
function Qg(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = Yg(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let l = i[0],
    o = l.replace(/(.)\/+$/, '$1'),
    s = i.slice(1)
  return {
    params: r.reduce((u, f, d) => {
      if (f === '*') {
        let h = s[d] || ''
        o = l.slice(0, l.length - h.length).replace(/(.)\/+$/, '$1')
      }
      return (u[f] = Kg(s[d] || '', f)), u
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  }
}
function Yg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (o, s) => (r.push(s), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function qg(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function Kg(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      sr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    )
  }
}
function qr(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function Zg(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Qt(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : Jg(n, t)) : t,
    search: t0(r),
    hash: n0(i),
  }
}
function Jg(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(i => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Ts(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Io(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  )
}
function Ou(e, t, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof e == 'string'
    ? (i = Qt(e))
    : ((i = le({}, e)),
      J(
        !i.pathname || !i.pathname.includes('?'),
        Ts('?', 'pathname', 'search', i),
      ),
      J(
        !i.pathname || !i.pathname.includes('#'),
        Ts('#', 'pathname', 'hash', i),
      ),
      J(!i.search || !i.search.includes('#'), Ts('#', 'search', 'hash', i)))
  let l = e === '' || i.pathname === '',
    o = l ? '/' : i.pathname,
    s
  if (r || o == null) s = n
  else {
    let d = t.length - 1
    if (o.startsWith('..')) {
      let h = o.split('/')
      for (; h[0] === '..'; ) h.shift(), (d -= 1)
      i.pathname = h.join('/')
    }
    s = d >= 0 ? t[d] : '/'
  }
  let a = Zg(i, s),
    u = o && o !== '/' && o.endsWith('/'),
    f = (l || o === '.') && n.endsWith('/')
  return !a.pathname.endsWith('/') && (u || f) && (a.pathname += '/'), a
}
const on = e => e.join('/').replace(/\/\/+/g, '/'),
  e0 = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  t0 = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  n0 = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class zu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r)
  }
}
function lh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const oh = ['post', 'put', 'patch', 'delete'],
  r0 = new Set(oh),
  i0 = ['get', ...oh],
  l0 = new Set(i0),
  o0 = new Set([301, 302, 303, 307, 308]),
  s0 = new Set([307, 308]),
  Cs = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  a0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  ed = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ah =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  u0 = !ah,
  c0 = e => ({ hasErrorBoundary: !!e.hasErrorBoundary })
function d0(e) {
  J(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  )
  let t
  if (e.mapRouteProperties) t = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary
    t = k => ({ hasErrorBoundary: S(k) })
  } else t = c0
  let n = {},
    r = Pa(e.routes, t, void 0, n),
    i,
    l = e.basename || '/',
    o = le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    s = null,
    a = new Set(),
    u = null,
    f = null,
    d = null,
    h = e.hydrationData != null,
    g = Nr(r, e.history.location, l),
    y = null
  if (g == null) {
    let S = _t(404, { pathname: e.history.location.pathname }),
      { matches: k, route: N } = sd(r)
    ;(g = k), (y = { [N.id]: S })
  }
  let x =
      !g.some(S => S.route.lazy) &&
      (!g.some(S => S.route.loader) || e.hydrationData != null),
    E,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: g,
      initialized: x,
      navigation: Cs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    p = Ce.Pop,
    v = !1,
    w,
    T = !1,
    C = !1,
    _ = [],
    P = [],
    R = new Map(),
    D = 0,
    L = -1,
    O = new Map(),
    $ = new Set(),
    X = new Map(),
    q = new Map(),
    I = new Map(),
    K = !1
  function M() {
    return (
      (s = e.history.listen(S => {
        let { action: k, location: N, delta: F } = S
        if (K) {
          K = !1
          return
        }
        sr(
          I.size === 0 || F != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        )
        let b = It({
          currentLocation: c.location,
          nextLocation: N,
          historyAction: k,
        })
        if (b && F != null) {
          ;(K = !0),
            e.history.go(F * -1),
            qt(b, {
              state: 'blocked',
              location: N,
              proceed() {
                qt(b, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  e.history.go(F)
              },
              reset() {
                Dt(b), Q({ blockers: new Map(E.state.blockers) })
              },
            })
          return
        }
        return fe(k, N)
      })),
      c.initialized || fe(Ce.Pop, c.location),
      E
    )
  }
  function A() {
    s && s(),
      a.clear(),
      w && w.abort(),
      c.fetchers.forEach((S, k) => it(k)),
      c.blockers.forEach((S, k) => Dt(k))
  }
  function B(S) {
    return a.add(S), () => a.delete(S)
  }
  function Q(S) {
    ;(c = le({}, c, S)), a.forEach(k => k(c))
  }
  function ne(S, k) {
    var N, F
    let b =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        en(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((N = S.state) == null ? void 0 : N._isRedirect) !== !0,
      H
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (H = k.actionData)
        : (H = null)
      : b
      ? (H = c.actionData)
      : (H = null)
    let W = k.loaderData
      ? od(c.loaderData, k.loaderData, k.matches || [], k.errors)
      : c.loaderData
    for (let [V] of I) Dt(V)
    let G =
      v === !0 ||
      (c.navigation.formMethod != null &&
        en(c.navigation.formMethod) &&
        ((F = S.state) == null ? void 0 : F._isRedirect) !== !0)
    i && ((r = i), (i = void 0)),
      Q(
        le({}, k, {
          actionData: H,
          loaderData: W,
          historyAction: p,
          location: S,
          initialized: !0,
          navigation: Cs,
          revalidation: 'idle',
          restoreScrollPosition: $e(S, k.matches || c.matches),
          preventScrollReset: G,
          blockers: new Map(c.blockers),
        }),
      ),
      T ||
        p === Ce.Pop ||
        (p === Ce.Push
          ? e.history.push(S, S.state)
          : p === Ce.Replace && e.history.replace(S, S.state)),
      (p = Ce.Pop),
      (v = !1),
      (T = !1),
      (C = !1),
      (_ = []),
      (P = [])
  }
  async function xe(S, k) {
    if (typeof S == 'number') {
      e.history.go(S)
      return
    }
    let N = ja(
        c.location,
        c.matches,
        l,
        o.v7_prependBasename,
        S,
        k == null ? void 0 : k.fromRouteId,
        k == null ? void 0 : k.relative,
      ),
      {
        path: F,
        submission: b,
        error: H,
      } = td(o.v7_normalizeFormMethod, !1, N, k),
      W = c.location,
      G = Vi(c.location, F, k && k.state)
    G = le({}, G, e.history.encodeLocation(G))
    let V = k && k.replace != null ? k.replace : void 0,
      Z = Ce.Push
    V === !0
      ? (Z = Ce.Replace)
      : V === !1 ||
        (b != null &&
          en(b.formMethod) &&
          b.formAction === c.location.pathname + c.location.search &&
          (Z = Ce.Replace))
    let te =
        k && 'preventScrollReset' in k ? k.preventScrollReset === !0 : void 0,
      Re = It({ currentLocation: W, nextLocation: G, historyAction: Z })
    if (Re) {
      qt(Re, {
        state: 'blocked',
        location: G,
        proceed() {
          qt(Re, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            xe(S, k)
        },
        reset() {
          Dt(Re), Q({ blockers: new Map(c.blockers) })
        },
      })
      return
    }
    return await fe(Z, G, {
      submission: b,
      pendingError: H,
      preventScrollReset: te,
      replace: k && k.replace,
    })
  }
  function we() {
    if (
      (qe(),
      Q({ revalidation: 'loading' }),
      c.navigation.state !== 'submitting')
    ) {
      if (c.navigation.state === 'idle') {
        fe(c.historyAction, c.location, { startUninterruptedRevalidation: !0 })
        return
      }
      fe(p || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      })
    }
  }
  async function fe(S, k, N) {
    w && w.abort(),
      (w = null),
      (p = S),
      (T = (N && N.startUninterruptedRevalidation) === !0),
      Ee(c.location, c.matches),
      (v = (N && N.preventScrollReset) === !0)
    let F = i || r,
      b = N && N.overrideNavigation,
      H = Nr(F, k, l)
    if (!H) {
      let ge = _t(404, { pathname: k.pathname }),
        { matches: Oe, route: gt } = sd(F)
      Kt(), ne(k, { matches: Oe, loaderData: {}, errors: { [gt.id]: ge } })
      return
    }
    if (
      c.initialized &&
      v0(c.location, k) &&
      !(N && N.submission && en(N.submission.formMethod))
    ) {
      ne(k, { matches: H })
      return
    }
    w = new AbortController()
    let W = ui(e.history, k, w.signal, N && N.submission),
      G,
      V
    if (N && N.pendingError) V = { [Lr(H).route.id]: N.pendingError }
    else if (N && N.submission && en(N.submission.formMethod)) {
      let ge = await Le(W, k, N.submission, H, { replace: N.replace })
      if (ge.shortCircuited) return
      ;(G = ge.pendingActionData),
        (V = ge.pendingActionError),
        (b = le({ state: 'loading', location: k }, N.submission)),
        (W = new Request(W.url, { signal: W.signal }))
    }
    let {
      shortCircuited: Z,
      loaderData: te,
      errors: Re,
    } = await Me(
      W,
      k,
      H,
      b,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      G,
      V,
    )
    Z ||
      ((w = null),
      ne(
        k,
        le({ matches: H }, G ? { actionData: G } : {}, {
          loaderData: te,
          errors: Re,
        }),
      ))
  }
  async function Le(S, k, N, F, b) {
    qe()
    let H = le({ state: 'submitting', location: k }, N)
    Q({ navigation: H })
    let W,
      G = _a(F, k)
    if (!G.route.action && !G.route.lazy)
      W = {
        type: Pe.error,
        error: _t(405, {
          method: S.method,
          pathname: k.pathname,
          routeId: G.route.id,
        }),
      }
    else if (((W = await ai('action', S, G, F, n, t, l)), S.signal.aborted))
      return { shortCircuited: !0 }
    if (Dr(W)) {
      let V
      return (
        b && b.replace != null
          ? (V = b.replace)
          : (V = W.location === c.location.pathname + c.location.search),
        await nt(c, W, { submission: N, replace: V }),
        { shortCircuited: !0 }
      )
    }
    if (Ti(W)) {
      let V = Lr(F, G.route.id)
      return (
        (b && b.replace) !== !0 && (p = Ce.Push),
        { pendingActionData: {}, pendingActionError: { [V.route.id]: W.error } }
      )
    }
    if (Zn(W)) throw _t(400, { type: 'defer-action' })
    return { pendingActionData: { [G.route.id]: W.data } }
  }
  async function Me(S, k, N, F, b, H, W, G, V) {
    let Z = F
    Z ||
      (Z = le(
        {
          state: 'loading',
          location: k,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        b,
      ))
    let te =
        b || H
          ? b || H
          : Z.formMethod && Z.formAction && Z.formData && Z.formEncType
          ? {
              formMethod: Z.formMethod,
              formAction: Z.formAction,
              formData: Z.formData,
              formEncType: Z.formEncType,
            }
          : void 0,
      Re = i || r,
      [ge, Oe] = nd(e.history, c, N, te, k, C, _, P, X, Re, l, G, V)
    if (
      (Kt(
        pe =>
          !(N && N.some(yt => yt.route.id === pe)) ||
          (ge && ge.some(yt => yt.route.id === pe)),
      ),
      ge.length === 0 && Oe.length === 0)
    ) {
      let pe = Wn()
      return (
        ne(
          k,
          le(
            { matches: N, loaderData: {}, errors: V || null },
            G ? { actionData: G } : {},
            pe ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      )
    }
    if (!T) {
      Oe.forEach(yt => {
        let pr = c.fetchers.get(yt.key),
          Yo = {
            state: 'loading',
            data: pr && pr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          }
        c.fetchers.set(yt.key, Yo)
      })
      let pe = G || c.actionData
      Q(
        le(
          { navigation: Z },
          pe
            ? Object.keys(pe).length === 0
              ? { actionData: null }
              : { actionData: pe }
            : {},
          Oe.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      )
    }
    ;(L = ++D),
      Oe.forEach(pe => {
        pe.controller && R.set(pe.key, pe.controller)
      })
    let gt = () => Oe.forEach(pe => Ae(pe.key))
    w && w.signal.addEventListener('abort', gt)
    let {
      results: Jr,
      loaderResults: Wo,
      fetcherResults: rl,
    } = await We(c.matches, N, ge, Oe, S)
    if (S.signal.aborted) return { shortCircuited: !0 }
    w && w.signal.removeEventListener('abort', gt),
      Oe.forEach(pe => R.delete(pe.key))
    let vn = ad(Jr)
    if (vn) return await nt(c, vn, { replace: W }), { shortCircuited: !0 }
    let { loaderData: il, errors: Go } = ld(c, N, ge, Wo, V, Oe, rl, q)
    q.forEach((pe, yt) => {
      pe.subscribe(pr => {
        ;(pr || pe.done) && q.delete(yt)
      })
    })
    let Xo = Wn(),
      Qo = hn(L),
      ll = Xo || Qo || Oe.length > 0
    return le(
      { loaderData: il, errors: Go },
      ll ? { fetchers: new Map(c.fetchers) } : {},
    )
  }
  function mt(S) {
    return c.fetchers.get(S) || a0
  }
  function At(S, k, N, F) {
    if (u0)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      )
    R.has(S) && Ae(S)
    let b = i || r,
      H = ja(
        c.location,
        c.matches,
        l,
        o.v7_prependBasename,
        N,
        k,
        F == null ? void 0 : F.relative,
      ),
      W = Nr(b, H, l)
    if (!W) {
      rt(S, k, _t(404, { pathname: H }))
      return
    }
    let { path: G, submission: V } = td(o.v7_normalizeFormMethod, !0, H, F),
      Z = _a(W, G)
    if (((v = (F && F.preventScrollReset) === !0), V && en(V.formMethod))) {
      Yt(S, k, G, Z, W, V)
      return
    }
    X.set(S, { routeId: k, path: G }), kt(S, k, G, Z, W, V)
  }
  async function Yt(S, k, N, F, b, H) {
    if ((qe(), X.delete(S), !F.route.action && !F.route.lazy)) {
      let lt = _t(405, { method: H.formMethod, pathname: N, routeId: k })
      rt(S, k, lt)
      return
    }
    let W = c.fetchers.get(S),
      G = le({ state: 'submitting' }, H, {
        data: W && W.data,
        ' _hasFetcherDoneAnything ': !0,
      })
    c.fetchers.set(S, G), Q({ fetchers: new Map(c.fetchers) })
    let V = new AbortController(),
      Z = ui(e.history, N, V.signal, H)
    R.set(S, V)
    let te = await ai('action', Z, F, b, n, t, l)
    if (Z.signal.aborted) {
      R.get(S) === V && R.delete(S)
      return
    }
    if (Dr(te)) {
      R.delete(S), $.add(S)
      let lt = le({ state: 'loading' }, H, {
        data: void 0,
        ' _hasFetcherDoneAnything ': !0,
      })
      return (
        c.fetchers.set(S, lt),
        Q({ fetchers: new Map(c.fetchers) }),
        nt(c, te, { submission: H, isFetchActionRedirect: !0 })
      )
    }
    if (Ti(te)) {
      rt(S, k, te.error)
      return
    }
    if (Zn(te)) throw _t(400, { type: 'defer-action' })
    let Re = c.navigation.location || c.location,
      ge = ui(e.history, Re, V.signal),
      Oe = i || r,
      gt =
        c.navigation.state !== 'idle'
          ? Nr(Oe, c.navigation.location, l)
          : c.matches
    J(gt, "Didn't find any matches after fetcher action")
    let Jr = ++D
    O.set(S, Jr)
    let Wo = le({ state: 'loading', data: te.data }, H, {
      ' _hasFetcherDoneAnything ': !0,
    })
    c.fetchers.set(S, Wo)
    let [rl, vn] = nd(
      e.history,
      c,
      gt,
      H,
      Re,
      C,
      _,
      P,
      X,
      Oe,
      l,
      { [F.route.id]: te.data },
      void 0,
    )
    vn
      .filter(lt => lt.key !== S)
      .forEach(lt => {
        let qo = lt.key,
          Bu = c.fetchers.get(qo),
          sm = {
            state: 'loading',
            data: Bu && Bu.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          }
        c.fetchers.set(qo, sm), lt.controller && R.set(qo, lt.controller)
      }),
      Q({ fetchers: new Map(c.fetchers) })
    let il = () => vn.forEach(lt => Ae(lt.key))
    V.signal.addEventListener('abort', il)
    let {
      results: Go,
      loaderResults: Xo,
      fetcherResults: Qo,
    } = await We(c.matches, gt, rl, vn, ge)
    if (V.signal.aborted) return
    V.signal.removeEventListener('abort', il),
      O.delete(S),
      R.delete(S),
      vn.forEach(lt => R.delete(lt.key))
    let ll = ad(Go)
    if (ll) return nt(c, ll)
    let { loaderData: pe, errors: yt } = ld(
        c,
        c.matches,
        rl,
        Xo,
        void 0,
        vn,
        Qo,
        q,
      ),
      pr = {
        state: 'idle',
        data: te.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      }
    c.fetchers.set(S, pr)
    let Yo = hn(Jr)
    c.navigation.state === 'loading' && Jr > L
      ? (J(p, 'Expected pending action'),
        w && w.abort(),
        ne(c.navigation.location, {
          matches: gt,
          loaderData: pe,
          errors: yt,
          fetchers: new Map(c.fetchers),
        }))
      : (Q(
          le(
            { errors: yt, loaderData: od(c.loaderData, pe, gt, yt) },
            Yo ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        (C = !1))
  }
  async function kt(S, k, N, F, b, H) {
    let W = c.fetchers.get(S),
      G = le(
        {
          state: 'loading',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        H,
        { data: W && W.data, ' _hasFetcherDoneAnything ': !0 },
      )
    c.fetchers.set(S, G), Q({ fetchers: new Map(c.fetchers) })
    let V = new AbortController(),
      Z = ui(e.history, N, V.signal)
    R.set(S, V)
    let te = await ai('loader', Z, F, b, n, t, l)
    if (
      (Zn(te) && (te = (await fh(te, Z.signal, !0)) || te),
      R.get(S) === V && R.delete(S),
      Z.signal.aborted)
    )
      return
    if (Dr(te)) {
      $.add(S), await nt(c, te)
      return
    }
    if (Ti(te)) {
      let ge = Lr(c.matches, k)
      c.fetchers.delete(S),
        Q({
          fetchers: new Map(c.fetchers),
          errors: { [ge.route.id]: te.error },
        })
      return
    }
    J(!Zn(te), 'Unhandled fetcher deferred data')
    let Re = {
      state: 'idle',
      data: te.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    }
    c.fetchers.set(S, Re), Q({ fetchers: new Map(c.fetchers) })
  }
  async function nt(S, k, N) {
    var F
    let {
      submission: b,
      replace: H,
      isFetchActionRedirect: W,
    } = N === void 0 ? {} : N
    k.revalidate && (C = !0)
    let G = Vi(
      S.location,
      k.location,
      le({ _isRedirect: !0 }, W ? { _isFetchActionRedirect: !0 } : {}),
    )
    if (
      (J(G, 'Expected a location on the redirect navigation'),
      sh.test(k.location) &&
        ah &&
        typeof ((F = window) == null ? void 0 : F.location) < 'u')
    ) {
      let Oe = e.history.createURL(k.location),
        gt = qr(Oe.pathname, l) == null
      if (window.location.origin !== Oe.origin || gt) {
        H
          ? window.location.replace(k.location)
          : window.location.assign(k.location)
        return
      }
    }
    w = null
    let V = H === !0 ? Ce.Replace : Ce.Push,
      {
        formMethod: Z,
        formAction: te,
        formEncType: Re,
        formData: ge,
      } = S.navigation
    !b &&
      Z &&
      te &&
      ge &&
      Re &&
      (b = { formMethod: Z, formAction: te, formEncType: Re, formData: ge }),
      s0.has(k.status) && b && en(b.formMethod)
        ? await fe(V, G, {
            submission: le({}, b, { formAction: k.location }),
            preventScrollReset: v,
          })
        : W
        ? await fe(V, G, {
            overrideNavigation: {
              state: 'loading',
              location: G,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: b,
            preventScrollReset: v,
          })
        : await fe(V, G, {
            overrideNavigation: {
              state: 'loading',
              location: G,
              formMethod: b ? b.formMethod : void 0,
              formAction: b ? b.formAction : void 0,
              formEncType: b ? b.formEncType : void 0,
              formData: b ? b.formData : void 0,
            },
            preventScrollReset: v,
          })
  }
  async function We(S, k, N, F, b) {
    let H = await Promise.all([
        ...N.map(V => ai('loader', b, V, k, n, t, l)),
        ...F.map(V =>
          V.matches && V.match && V.controller
            ? ai(
                'loader',
                ui(e.history, V.path, V.controller.signal),
                V.match,
                V.matches,
                n,
                t,
                l,
              )
            : { type: Pe.error, error: _t(404, { pathname: V.path }) },
        ),
      ]),
      W = H.slice(0, N.length),
      G = H.slice(N.length)
    return (
      await Promise.all([
        ud(
          S,
          N,
          W,
          W.map(() => b.signal),
          !1,
          c.loaderData,
        ),
        ud(
          S,
          F.map(V => V.match),
          G,
          F.map(V => (V.controller ? V.controller.signal : null)),
          !0,
        ),
      ]),
      { results: H, loaderResults: W, fetcherResults: G }
    )
  }
  function qe() {
    ;(C = !0),
      _.push(...Kt()),
      X.forEach((S, k) => {
        R.has(k) && (P.push(k), Ae(k))
      })
  }
  function rt(S, k, N) {
    let F = Lr(c.matches, k)
    it(S), Q({ errors: { [F.route.id]: N }, fetchers: new Map(c.fetchers) })
  }
  function it(S) {
    R.has(S) && Ae(S),
      X.delete(S),
      O.delete(S),
      $.delete(S),
      c.fetchers.delete(S)
  }
  function Ae(S) {
    let k = R.get(S)
    J(k, 'Expected fetch controller: ' + S), k.abort(), R.delete(S)
  }
  function vt(S) {
    for (let k of S) {
      let F = {
        state: 'idle',
        data: mt(k).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      }
      c.fetchers.set(k, F)
    }
  }
  function Wn() {
    let S = [],
      k = !1
    for (let N of $) {
      let F = c.fetchers.get(N)
      J(F, 'Expected fetcher: ' + N),
        F.state === 'loading' && ($.delete(N), S.push(N), (k = !0))
    }
    return vt(S), k
  }
  function hn(S) {
    let k = []
    for (let [N, F] of O)
      if (F < S) {
        let b = c.fetchers.get(N)
        J(b, 'Expected fetcher: ' + N),
          b.state === 'loading' && (Ae(N), O.delete(N), k.push(N))
      }
    return vt(k), k.length > 0
  }
  function mn(S, k) {
    let N = c.blockers.get(S) || ed
    return I.get(S) !== k && I.set(S, k), N
  }
  function Dt(S) {
    c.blockers.delete(S), I.delete(S)
  }
  function qt(S, k) {
    let N = c.blockers.get(S) || ed
    J(
      (N.state === 'unblocked' && k.state === 'blocked') ||
        (N.state === 'blocked' && k.state === 'blocked') ||
        (N.state === 'blocked' && k.state === 'proceeding') ||
        (N.state === 'blocked' && k.state === 'unblocked') ||
        (N.state === 'proceeding' && k.state === 'unblocked'),
      'Invalid blocker state transition: ' + N.state + ' -> ' + k.state,
    ),
      c.blockers.set(S, k),
      Q({ blockers: new Map(c.blockers) })
  }
  function It(S) {
    let { currentLocation: k, nextLocation: N, historyAction: F } = S
    if (I.size === 0) return
    I.size > 1 && sr(!1, 'A router only supports one blocker at a time')
    let b = Array.from(I.entries()),
      [H, W] = b[b.length - 1],
      G = c.blockers.get(H)
    if (
      !(G && G.state === 'proceeding') &&
      W({ currentLocation: k, nextLocation: N, historyAction: F })
    )
      return H
  }
  function Kt(S) {
    let k = []
    return (
      q.forEach((N, F) => {
        ;(!S || S(F)) && (N.cancel(), k.push(F), q.delete(F))
      }),
      k
    )
  }
  function fr(S, k, N) {
    if (
      ((u = S), (d = k), (f = N || (F => F.key)), !h && c.navigation === Cs)
    ) {
      h = !0
      let F = $e(c.location, c.matches)
      F != null && Q({ restoreScrollPosition: F })
    }
    return () => {
      ;(u = null), (d = null), (f = null)
    }
  }
  function Ee(S, k) {
    if (u && f && d) {
      let N = k.map(b => cd(b, c.loaderData)),
        F = f(S, N) || S.key
      u[F] = d()
    }
  }
  function $e(S, k) {
    if (u && f && d) {
      let N = k.map(H => cd(H, c.loaderData)),
        F = f(S, N) || S.key,
        b = u[F]
      if (typeof b == 'number') return b
    }
    return null
  }
  function Y(S) {
    ;(n = {}), (i = Pa(S, t, void 0, n))
  }
  return (
    (E = {
      get basename() {
        return l
      },
      get state() {
        return c
      },
      get routes() {
        return r
      },
      initialize: M,
      subscribe: B,
      enableScrollRestoration: fr,
      navigate: xe,
      fetch: At,
      revalidate: we,
      createHref: S => e.history.createHref(S),
      encodeLocation: S => e.history.encodeLocation(S),
      getFetcher: mt,
      deleteFetcher: it,
      dispose: A,
      getBlocker: mn,
      deleteBlocker: Dt,
      _internalFetchControllers: R,
      _internalActiveDeferreds: q,
      _internalSetRoutes: Y,
    }),
    E
  )
}
function f0(e) {
  return e != null && 'formData' in e
}
function ja(e, t, n, r, i, l, o) {
  let s, a
  if (l != null && o !== 'path') {
    s = []
    for (let f of t)
      if ((s.push(f), f.route.id === l)) {
        a = f
        break
      }
  } else (s = t), (a = t[t.length - 1])
  let u = Ou(
    i || '.',
    Io(s).map(f => f.pathnameBase),
    qr(e.pathname, n) || e.pathname,
    o === 'path',
  )
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      a &&
      a.route.index &&
      !bu(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (u.pathname = u.pathname === '/' ? n : on([n, u.pathname])),
    ar(u)
  )
}
function td(e, t, n, r) {
  if (!r || !f0(r)) return { path: n }
  if (r.formMethod && !x0(r.formMethod))
    return { path: n, error: _t(405, { method: r.formMethod }) }
  let i
  if (r.formData) {
    let s = r.formMethod || 'get'
    if (
      ((i = {
        formMethod: e ? s.toUpperCase() : s.toLowerCase(),
        formAction: dh(n),
        formEncType:
          (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      en(i.formMethod))
    )
      return { path: n, submission: i }
  }
  let l = Qt(n),
    o = ch(r.formData)
  return (
    t && l.search && bu(l.search) && o.append('index', ''),
    (l.search = '?' + o),
    { path: ar(l), submission: i }
  )
}
function p0(e, t) {
  let n = e
  if (t) {
    let r = e.findIndex(i => i.route.id === t)
    r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function nd(e, t, n, r, i, l, o, s, a, u, f, d, h) {
  let g = h ? Object.values(h)[0] : d ? Object.values(d)[0] : void 0,
    y = e.createURL(t.location),
    x = e.createURL(i),
    E = h ? Object.keys(h)[0] : void 0,
    p = p0(n, E).filter((w, T) => {
      if (w.route.lazy) return !0
      if (w.route.loader == null) return !1
      if (h0(t.loaderData, t.matches[T], w) || o.some(P => P === w.route.id))
        return !0
      let C = t.matches[T],
        _ = w
      return rd(
        w,
        le(
          {
            currentUrl: y,
            currentParams: C.params,
            nextUrl: x,
            nextParams: _.params,
          },
          r,
          {
            actionResult: g,
            defaultShouldRevalidate:
              l ||
              y.pathname + y.search === x.pathname + x.search ||
              y.search !== x.search ||
              uh(C, _),
          },
        ),
      )
    }),
    v = []
  return (
    a.forEach((w, T) => {
      if (!n.some(R => R.route.id === w.routeId)) return
      let C = Nr(u, w.path, f)
      if (!C) {
        v.push({
          key: T,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let _ = _a(C, w.path)
      if (s.includes(T)) {
        v.push({
          key: T,
          routeId: w.routeId,
          path: w.path,
          matches: C,
          match: _,
          controller: new AbortController(),
        })
        return
      }
      rd(
        _,
        le(
          {
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: x,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: g, defaultShouldRevalidate: l },
        ),
      ) &&
        v.push({
          key: T,
          routeId: w.routeId,
          path: w.path,
          matches: C,
          match: _,
          controller: new AbortController(),
        })
    }),
    [p, v]
  )
}
function h0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0
  return r || i
}
function uh(e, t) {
  let n = e.route.path
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function rd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t)
    if (typeof n == 'boolean') return n
  }
  return t.defaultShouldRevalidate
}
async function id(e, t, n) {
  if (!e.lazy) return
  let r = await e.lazy()
  if (!e.lazy) return
  let i = n[e.id]
  J(i, 'No route found in manifest')
  let l = {}
  for (let o in r) {
    let a = i[o] !== void 0 && o !== 'hasErrorBoundary'
    sr(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !a && !Ag.has(o) && (l[o] = r[o])
  }
  Object.assign(i, l), Object.assign(i, le({}, t(i), { lazy: void 0 }))
}
async function ai(e, t, n, r, i, l, o, s, a, u) {
  s === void 0 && (s = !1), a === void 0 && (a = !1)
  let f,
    d,
    h,
    g = E => {
      let c,
        p = new Promise((v, w) => (c = w))
      return (
        (h = () => c()),
        t.signal.addEventListener('abort', h),
        Promise.race([E({ request: t, params: n.params, context: u }), p])
      )
    }
  try {
    let E = n.route[e]
    if (n.route.lazy)
      if (E) d = (await Promise.all([g(E), id(n.route, l, i)]))[0]
      else if ((await id(n.route, l, i), (E = n.route[e]), E)) d = await g(E)
      else if (e === 'action') {
        let c = new URL(t.url),
          p = c.pathname + c.search
        throw _t(405, { method: t.method, pathname: p, routeId: n.route.id })
      } else return { type: Pe.data, data: void 0 }
    else if (E) d = await g(E)
    else {
      let c = new URL(t.url),
        p = c.pathname + c.search
      throw _t(404, { pathname: p })
    }
    J(
      d !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.',
    )
  } catch (E) {
    ;(f = Pe.error), (d = E)
  } finally {
    h && t.signal.removeEventListener('abort', h)
  }
  if (y0(d)) {
    let E = d.status
    if (o0.has(E)) {
      let v = d.headers.get('Location')
      if (
        (J(
          v,
          'Redirects returned/thrown from loaders/actions must have a Location header',
        ),
        !sh.test(v))
      )
        v = ja(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, v)
      else if (!s) {
        let w = new URL(t.url),
          T = v.startsWith('//') ? new URL(w.protocol + v) : new URL(v),
          C = qr(T.pathname, o) != null
        T.origin === w.origin && C && (v = T.pathname + T.search + T.hash)
      }
      if (s) throw (d.headers.set('Location', v), d)
      return {
        type: Pe.redirect,
        status: E,
        location: v,
        revalidate: d.headers.get('X-Remix-Revalidate') !== null,
      }
    }
    if (a) throw { type: f || Pe.data, response: d }
    let c,
      p = d.headers.get('Content-Type')
    return (
      p && /\bapplication\/json\b/.test(p)
        ? (c = await d.json())
        : (c = await d.text()),
      f === Pe.error
        ? { type: f, error: new zu(E, d.statusText, c), headers: d.headers }
        : { type: Pe.data, data: c, statusCode: d.status, headers: d.headers }
    )
  }
  if (f === Pe.error) return { type: f, error: d }
  if (g0(d)) {
    var y, x
    return {
      type: Pe.deferred,
      deferredData: d,
      statusCode: (y = d.init) == null ? void 0 : y.status,
      headers:
        ((x = d.init) == null ? void 0 : x.headers) &&
        new Headers(d.init.headers),
    }
  }
  return { type: Pe.data, data: d }
}
function ui(e, t, n, r) {
  let i = e.createURL(dh(t)).toString(),
    l = { signal: n }
  if (r && en(r.formMethod)) {
    let { formMethod: o, formEncType: s, formData: a } = r
    ;(l.method = o.toUpperCase()),
      (l.body = s === 'application/x-www-form-urlencoded' ? ch(a) : a)
  }
  return new Request(i, l)
}
function ch(e) {
  let t = new URLSearchParams()
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r)
  return t
}
function m0(e, t, n, r, i) {
  let l = {},
    o = null,
    s,
    a = !1,
    u = {}
  return (
    n.forEach((f, d) => {
      let h = t[d].route.id
      if (
        (J(!Dr(f), 'Cannot handle redirect results in processLoaderData'),
        Ti(f))
      ) {
        let g = Lr(e, h),
          y = f.error
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[g.route.id] == null && (o[g.route.id] = y),
          (l[h] = void 0),
          a || ((a = !0), (s = lh(f.error) ? f.error.status : 500)),
          f.headers && (u[h] = f.headers)
      } else
        Zn(f)
          ? (i.set(h, f.deferredData), (l[h] = f.deferredData.data))
          : (l[h] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !a &&
            (s = f.statusCode),
          f.headers && (u[h] = f.headers)
    }),
    r && ((o = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: o, statusCode: s || 200, loaderHeaders: u }
  )
}
function ld(e, t, n, r, i, l, o, s) {
  let { loaderData: a, errors: u } = m0(t, n, r, i, s)
  for (let f = 0; f < l.length; f++) {
    let { key: d, match: h, controller: g } = l[f]
    J(
      o !== void 0 && o[f] !== void 0,
      'Did not find corresponding fetcher result',
    )
    let y = o[f]
    if (!(g && g.signal.aborted))
      if (Ti(y)) {
        let x = Lr(e.matches, h == null ? void 0 : h.route.id)
        ;(u && u[x.route.id]) || (u = le({}, u, { [x.route.id]: y.error })),
          e.fetchers.delete(d)
      } else if (Dr(y)) J(!1, 'Unhandled fetcher revalidation redirect')
      else if (Zn(y)) J(!1, 'Unhandled fetcher deferred data')
      else {
        let x = {
          state: 'idle',
          data: y.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        }
        e.fetchers.set(d, x)
      }
  }
  return { loaderData: a, errors: u }
}
function od(e, t, n, r) {
  let i = le({}, t)
  for (let l of n) {
    let o = l.route.id
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && l.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break
  }
  return i
}
function Lr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
      .reverse()
      .find(r => r.route.hasErrorBoundary === !0) || e[0]
  )
}
function sd(e) {
  let t = e.find(n => n.index || !n.path || n.path === '/') || {
    id: '__shim-error-route__',
  }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  }
}
function _t(e, t) {
  let { pathname: n, routeId: r, method: i, type: l } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((o = 'Bad Request'),
        i && n && r
          ? (s =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l === 'defer-action' && (s = 'defer() is not supported in actions'))
      : e === 403
      ? ((o = 'Forbidden'),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = 'Method Not Allowed'),
        i && n && r
          ? (s =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new zu(e || 500, o, new Error(s), !0)
  )
}
function ad(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t]
    if (Dr(n)) return n
  }
}
function dh(e) {
  let t = typeof e == 'string' ? Qt(e) : e
  return ar(le({}, t, { hash: '' }))
}
function v0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function Zn(e) {
  return e.type === Pe.deferred
}
function Ti(e) {
  return e.type === Pe.error
}
function Dr(e) {
  return (e && e.type) === Pe.redirect
}
function g0(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function y0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function x0(e) {
  return l0.has(e.toLowerCase())
}
function en(e) {
  return r0.has(e.toLowerCase())
}
async function ud(e, t, n, r, i, l) {
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      a = t[o]
    if (!a) continue
    let u = e.find(d => d.route.id === a.route.id),
      f = u != null && !uh(u, a) && (l && l[a.route.id]) !== void 0
    if (Zn(s) && (i || f)) {
      let d = r[o]
      J(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await fh(s, d, i).then(h => {
          h && (n[o] = h || n[o])
        })
    }
  }
}
async function fh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Pe.data, data: e.deferredData.unwrappedData }
      } catch (i) {
        return { type: Pe.error, error: i }
      }
    return { type: Pe.data, data: e.deferredData.data }
  }
}
function bu(e) {
  return new URLSearchParams(e).getAll('index').some(t => t === '')
}
function cd(e, t) {
  let { route: n, pathname: r, params: i } = e
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle }
}
function _a(e, t) {
  let n = typeof t == 'string' ? Qt(t).search : t.search
  if (e[e.length - 1].route.index && bu(n || '')) return e[e.length - 1]
  let r = Io(e)
  return r[r.length - 1]
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function po() {
  return (
    (po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    po.apply(this, arguments)
  )
}
const Fo = j.createContext(null),
  ph = j.createContext(null),
  Kr = j.createContext(null),
  $o = j.createContext(null),
  Hn = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  hh = j.createContext(null)
function w0(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  el() || J(!1)
  let { basename: r, navigator: i } = j.useContext(Kr),
    { hash: l, pathname: o, search: s } = vh(e, { relative: n }),
    a = o
  return (
    r !== '/' && (a = o === '/' ? r : on([r, o])),
    i.createHref({ pathname: a, search: s, hash: l })
  )
}
function el() {
  return j.useContext($o) != null
}
function Bo() {
  return el() || J(!1), j.useContext($o).location
}
function mh(e) {
  j.useContext(Kr).static || j.useLayoutEffect(e)
}
function S0() {
  let { isDataRoute: e } = j.useContext(Hn)
  return e ? b0() : E0()
}
function E0() {
  el() || J(!1)
  let e = j.useContext(Fo),
    { basename: t, navigator: n } = j.useContext(Kr),
    { matches: r } = j.useContext(Hn),
    { pathname: i } = Bo(),
    l = JSON.stringify(Io(r).map(a => a.pathnameBase)),
    o = j.useRef(!1)
  return (
    mh(() => {
      o.current = !0
    }),
    j.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !o.current)) return
        if (typeof a == 'number') {
          n.go(a)
          return
        }
        let f = Ou(a, JSON.parse(l), i, u.relative === 'path')
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : on([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u)
      },
      [t, n, l, i, e],
    )
  )
}
const T0 = j.createContext(null)
function C0(e) {
  let t = j.useContext(Hn).outlet
  return t && j.createElement(T0.Provider, { value: e }, t)
}
function vh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = j.useContext(Hn),
    { pathname: i } = Bo(),
    l = JSON.stringify(Io(r).map(o => o.pathnameBase))
  return j.useMemo(() => Ou(e, JSON.parse(l), i, n === 'path'), [e, l, i, n])
}
function k0(e, t, n) {
  el() || J(!1)
  let { navigator: r } = j.useContext(Kr),
    { matches: i } = j.useContext(Hn),
    l = i[i.length - 1],
    o = l ? l.params : {}
  l && l.pathname
  let s = l ? l.pathnameBase : '/'
  l && l.route
  let a = Bo(),
    u
  if (t) {
    var f
    let x = typeof t == 'string' ? Qt(t) : t
    s === '/' || ((f = x.pathname) != null && f.startsWith(s)) || J(!1), (u = x)
  } else u = a
  let d = u.pathname || '/',
    h = s === '/' ? d : d.slice(s.length) || '/',
    g = Nr(e, { pathname: h }),
    y = L0(
      g &&
        g.map(x =>
          Object.assign({}, x, {
            params: Object.assign({}, o, x.params),
            pathname: on([
              s,
              r.encodeLocation
                ? r.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? s
                : on([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    )
  return t && y
    ? j.createElement(
        $o.Provider,
        {
          value: {
            location: po(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u,
            ),
            navigationType: Ce.Pop,
          },
        },
        y,
      )
    : y
}
function P0() {
  let e = z0(),
    t = lh(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    l = null
  return j.createElement(
    j.Fragment,
    null,
    j.createElement('h2', null, 'Unexpected Application Error!'),
    j.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? j.createElement('pre', { style: i }, n) : null,
    l,
  )
}
const j0 = j.createElement(P0, null)
class _0 extends j.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error
      ? j.createElement(
          Hn.Provider,
          { value: this.props.routeContext },
          j.createElement(hh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children
  }
}
function N0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = j.useContext(Fo)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Hn.Provider, { value: t }, r)
  )
}
function L0(e, t, n) {
  var r
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i
    if ((i = n) != null && i.errors) e = n.matches
    else return null
  }
  let l = e,
    o = (r = n) == null ? void 0 : r.errors
  if (o != null) {
    let s = l.findIndex(a => a.route.id && (o == null ? void 0 : o[a.route.id]))
    s >= 0 || J(!1), (l = l.slice(0, Math.min(l.length, s + 1)))
  }
  return l.reduceRight((s, a, u) => {
    let f = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      d = null
    n && (d = a.route.errorElement || j0)
    let h = t.concat(l.slice(0, u + 1)),
      g = () => {
        let y
        return (
          f
            ? (y = d)
            : a.route.Component
            ? (y = j.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = s),
          j.createElement(N0, {
            match: a,
            routeContext: { outlet: s, matches: h, isDataRoute: n != null },
            children: y,
          })
        )
      }
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? j.createElement(_0, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: f,
          children: g(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : g()
  }, null)
}
var Na
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate')
})(Na || (Na = {}))
var Hi
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId')
})(Hi || (Hi = {}))
function M0(e) {
  let t = j.useContext(Fo)
  return t || J(!1), t
}
function R0(e) {
  let t = j.useContext(ph)
  return t || J(!1), t
}
function O0(e) {
  let t = j.useContext(Hn)
  return t || J(!1), t
}
function gh(e) {
  let t = O0(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || J(!1), n.route.id
}
function z0() {
  var e
  let t = j.useContext(hh),
    n = R0(Hi.UseRouteError),
    r = gh(Hi.UseRouteError)
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function b0() {
  let { router: e } = M0(Na.UseNavigateStable),
    t = gh(Hi.UseNavigateStable),
    n = j.useRef(!1)
  return (
    mh(() => {
      n.current = !0
    }),
    j.useCallback(
      function (i, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, po({ fromRouteId: t }, l)))
      },
      [e, t],
    )
  )
}
function A0(e) {
  let { fallbackElement: t, router: n } = e,
    [r, i] = j.useState(n.state)
  j.useLayoutEffect(() => n.subscribe(i), [n, i])
  let l = j.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: a => n.navigate(a),
        push: (a, u, f) =>
          n.navigate(a, {
            state: u,
            preventScrollReset: f == null ? void 0 : f.preventScrollReset,
          }),
        replace: (a, u, f) =>
          n.navigate(a, {
            replace: !0,
            state: u,
            preventScrollReset: f == null ? void 0 : f.preventScrollReset,
          }),
      }),
      [n],
    ),
    o = n.basename || '/',
    s = j.useMemo(
      () => ({ router: n, navigator: l, static: !1, basename: o }),
      [n, l, o],
    )
  return j.createElement(
    j.Fragment,
    null,
    j.createElement(
      Fo.Provider,
      { value: s },
      j.createElement(
        ph.Provider,
        { value: r },
        j.createElement(
          F0,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: l,
          },
          n.state.initialized
            ? j.createElement(D0, { routes: n.routes, state: r })
            : t,
        ),
      ),
    ),
    null,
  )
}
function D0(e) {
  let { routes: t, state: n } = e
  return k0(t, void 0, n)
}
function I0(e) {
  return C0(e.context)
}
function F0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Ce.Pop,
    navigator: l,
    static: o = !1,
  } = e
  el() && J(!1)
  let s = t.replace(/^\/*/, '/'),
    a = j.useMemo(() => ({ basename: s, navigator: l, static: o }), [s, l, o])
  typeof r == 'string' && (r = Qt(r))
  let {
      pathname: u = '/',
      search: f = '',
      hash: d = '',
      state: h = null,
      key: g = 'default',
    } = r,
    y = j.useMemo(() => {
      let x = qr(u, s)
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: d, state: h, key: g },
            navigationType: i,
          }
    }, [s, u, f, d, h, g, i])
  return y == null
    ? null
    : j.createElement(
        Kr.Provider,
        { value: a },
        j.createElement($o.Provider, { children: n, value: y }),
      )
}
var dd
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error')
})(dd || (dd = {}))
new Promise(() => {})
function $0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: j.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: j.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  )
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Wi.apply(this, arguments)
  )
}
function B0(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    l
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function U0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function V0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !U0(e)
}
const H0 = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
]
function W0(e, t) {
  return d0({
    basename: t == null ? void 0 : t.basename,
    future: Wi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Og({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || G0(),
    routes: e,
    mapRouteProperties: $0,
  }).initialize()
}
function G0() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = Wi({}, t, { errors: X0(t.errors) })), t
}
function X0(e) {
  if (!e) return null
  let t = Object.entries(e),
    n = {}
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new zu(i.status, i.statusText, i.data, i.internal === !0)
    else if (i && i.__type === 'Error') {
      let l = new Error(i.message)
      ;(l.stack = ''), (n[r] = l)
    } else n[r] = i
  return n
}
const Q0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Y0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  yh = j.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: l,
        replace: o,
        state: s,
        target: a,
        to: u,
        preventScrollReset: f,
      } = t,
      d = B0(t, H0),
      { basename: h } = j.useContext(Kr),
      g,
      y = !1
    if (typeof u == 'string' && Y0.test(u) && ((g = u), Q0))
      try {
        let p = new URL(window.location.href),
          v = u.startsWith('//') ? new URL(p.protocol + u) : new URL(u),
          w = qr(v.pathname, h)
        v.origin === p.origin && w != null
          ? (u = w + v.search + v.hash)
          : (y = !0)
      } catch {}
    let x = w0(u, { relative: i }),
      E = q0(u, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: f,
        relative: i,
      })
    function c(p) {
      r && r(p), p.defaultPrevented || E(p)
    }
    return j.createElement(
      'a',
      Wi({}, d, { href: g || x, onClick: y || l ? r : c, ref: n, target: a }),
    )
  })
var fd
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher')
})(fd || (fd = {}))
var pd
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(pd || (pd = {}))
function q0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: l,
      relative: o,
    } = t === void 0 ? {} : t,
    s = S0(),
    a = Bo(),
    u = vh(e, { relative: o })
  return j.useCallback(
    f => {
      if (V0(f, n)) {
        f.preventDefault()
        let d = r !== void 0 ? r : ar(a) === ar(u)
        s(e, { replace: d, state: i, preventScrollReset: l, relative: o })
      }
    },
    [a, s, u, r, i, n, e, l, o],
  )
}
var xh = { exports: {} },
  K0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Z0 = K0,
  J0 = Z0
function wh() {}
function Sh() {}
Sh.resetWarningCache = wh
var ey = function () {
  function e(r, i, l, o, s, a) {
    if (a !== J0) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Sh,
    resetWarningCache: wh,
  }
  return (n.PropTypes = n), n
}
xh.exports = ey()
var Te = xh.exports
const se = Ia(Te),
  Eh = ({ icon: e }) =>
    m.jsx(m.Fragment, {
      children: m.jsxs('a', {
        className: 'bgGradient textFlux font-inter text-sm rounded-2xl ',
        children: [e, ' New: Language'],
      }),
    })
Eh.propTypes = { icon: se.element.isRequired }
const ho = ({ text: e, onClick: t, custom: n }) =>
  m.jsx(m.Fragment, {
    children: m.jsx('button', {
      onClick: t,
      className: `flex py-2 px-5 h-[38px] rounded-3xl border border-white-08 bg-white-02  font-inter uppercase tracking-widest font-bold text-sm ${n}`,
      children: e,
    }),
  })
ho.propTypes = {
  text: se.string.isRequired,
  onClick: se.func,
  custom: se.string,
}
const Th = ({ icon: e, title: t }) =>
  m.jsx(m.Fragment, {
    children: m.jsxs('div', {
      className: 'flex flex-col items-center gap-4',
      children: [
        m.jsx('div', {
          className: 'flex text-5xl',
          children: m.jsx('span', { className: '', children: e }),
        }),
        m.jsx('div', {
          className: 'flex',
          children: m.jsx('h3', {
            className: 'font-inter font-bold',
            children: m.jsx('span', { className: 'bgText', children: t }),
          }),
        }),
      ],
    }),
  })
Th.propTypes = { icon: se.node.isRequired, title: se.string.isRequired }
function ty(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    l
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function mo() {
  return (
    (mo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    mo.apply(this, arguments)
  )
}
function La(e, t) {
  return (
    (La = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r
        }),
    La(e, t)
  )
}
function ny(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    La(e, t)
}
function ks(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, l; r < i; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]))
  return e.concat(l || Array.prototype.slice.call(t))
}
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var hd =
    /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
  ry = /\\([\u000b\u0020-\u00ff])/g,
  iy = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
  ly = oy
function oy(e) {
  if (!e) throw new TypeError('argument string is required')
  var t = typeof e == 'object' ? sy(e) : e
  if (typeof t != 'string')
    throw new TypeError('argument string is required to be a string')
  var n = t.indexOf(';'),
    r = n !== -1 ? t.slice(0, n).trim() : t.trim()
  if (!iy.test(r)) throw new TypeError('invalid media type')
  var i = new ay(r.toLowerCase())
  if (n !== -1) {
    var l, o, s
    for (hd.lastIndex = n; (o = hd.exec(t)); ) {
      if (o.index !== n) throw new TypeError('invalid parameter format')
      ;(n += o[0].length),
        (l = o[1].toLowerCase()),
        (s = o[2]),
        s.charCodeAt(0) === 34 &&
          ((s = s.slice(1, -1)),
          s.indexOf('\\') !== -1 && (s = s.replace(ry, '$1'))),
        (i.parameters[l] = s)
    }
    if (n !== t.length) throw new TypeError('invalid parameter format')
  }
  return i
}
function sy(e) {
  var t
  if (
    (typeof e.getHeader == 'function'
      ? (t = e.getHeader('content-type'))
      : typeof e.headers == 'object' &&
        (t = e.headers && e.headers['content-type']),
    typeof t != 'string')
  )
    throw new TypeError('content-type header is missing from object')
  return t
}
function ay(e) {
  ;(this.parameters = Object.create(null)), (this.type = e)
}
var mr = new Map(),
  Ch = function (t) {
    return t.cloneNode(!0)
  },
  md = function () {
    return window.location.protocol === 'file:'
  },
  kh = function (t, n, r) {
    var i = new XMLHttpRequest()
    ;(i.onreadystatechange = function () {
      try {
        if (!/\.svg/i.test(t) && i.readyState === 2) {
          var l = i.getResponseHeader('Content-Type')
          if (!l) throw new Error('Content type not found')
          var o = ly(l).type
          if (!(o === 'image/svg+xml' || o === 'text/plain'))
            throw new Error('Invalid content type: '.concat(o))
        }
        if (i.readyState === 4) {
          if (i.status === 404 || i.responseXML === null)
            throw new Error(
              md()
                ? 'Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.'
                : 'Unable to load SVG file: ' + t,
            )
          if (i.status === 200 || (md() && i.status === 0)) r(null, i)
          else
            throw new Error(
              'There was a problem injecting the SVG: ' +
                i.status +
                ' ' +
                i.statusText,
            )
        }
      } catch (s) {
        if ((i.abort(), s instanceof Error)) r(s, i)
        else throw s
      }
    }),
      i.open('GET', t),
      (i.withCredentials = n),
      i.overrideMimeType && i.overrideMimeType('text/xml'),
      i.send()
  },
  En = {},
  vd = function (t, n) {
    ;(En[t] = En[t] || []), En[t].push(n)
  },
  uy = function (t) {
    for (
      var n = function (o, s) {
          setTimeout(function () {
            if (Array.isArray(En[t])) {
              var a = mr.get(t),
                u = En[t][o]
              a instanceof SVGSVGElement && u(null, Ch(a)),
                a instanceof Error && u(a),
                o === En[t].length - 1 && delete En[t]
            }
          }, 0)
        },
        r = 0,
        i = En[t].length;
      r < i;
      r++
    )
      n(r)
  },
  cy = function (t, n, r) {
    if (mr.has(t)) {
      var i = mr.get(t)
      if (i === void 0) {
        vd(t, r)
        return
      }
      if (i instanceof SVGSVGElement) {
        r(null, Ch(i))
        return
      }
    }
    mr.set(t, void 0),
      vd(t, r),
      kh(t, n, function (l, o) {
        var s
        l
          ? mr.set(t, l)
          : ((s = o.responseXML) === null || s === void 0
              ? void 0
              : s.documentElement) instanceof SVGSVGElement &&
            mr.set(t, o.responseXML.documentElement),
          uy(t)
      })
  },
  dy = function (t, n, r) {
    kh(t, n, function (i, l) {
      var o
      i
        ? r(i)
        : ((o = l.responseXML) === null || o === void 0
            ? void 0
            : o.documentElement) instanceof SVGSVGElement &&
          r(null, l.responseXML.documentElement)
    })
  },
  fy = 0,
  py = function () {
    return ++fy
  },
  $t = [],
  gd = {},
  hy = 'http://www.w3.org/2000/svg',
  Ps = 'http://www.w3.org/1999/xlink',
  yd = function (t, n, r, i, l, o, s) {
    var a = t.getAttribute('data-src') || t.getAttribute('src')
    if (!a) {
      s(new Error('Invalid data-src or src attribute'))
      return
    }
    if ($t.indexOf(t) !== -1) {
      $t.splice($t.indexOf(t), 1), (t = null)
      return
    }
    $t.push(t), t.setAttribute('src', '')
    var u = i ? cy : dy
    u(a, l, function (f, d) {
      if (!d) {
        $t.splice($t.indexOf(t), 1), (t = null), s(f)
        return
      }
      var h = t.getAttribute('id')
      h && d.setAttribute('id', h)
      var g = t.getAttribute('title')
      g && d.setAttribute('title', g)
      var y = t.getAttribute('width')
      y && d.setAttribute('width', y)
      var x = t.getAttribute('height')
      x && d.setAttribute('height', x)
      var E = Array.from(
        new Set(
          ks(
            ks(
              ks([], (d.getAttribute('class') || '').split(' '), !0),
              ['injected-svg'],
              !1,
            ),
            (t.getAttribute('class') || '').split(' '),
            !0,
          ),
        ),
      )
        .join(' ')
        .trim()
      d.setAttribute('class', E)
      var c = t.getAttribute('style')
      c && d.setAttribute('style', c), d.setAttribute('data-src', a)
      var p = [].filter.call(t.attributes, function (M) {
        return /^data-\w[\w-]*$/.test(M.name)
      })
      if (
        (Array.prototype.forEach.call(p, function (M) {
          M.name && M.value && d.setAttribute(M.name, M.value)
        }),
        r)
      ) {
        var v = {
            clipPath: ['clip-path'],
            'color-profile': ['color-profile'],
            cursor: ['cursor'],
            filter: ['filter'],
            linearGradient: ['fill', 'stroke'],
            marker: ['marker', 'marker-start', 'marker-mid', 'marker-end'],
            mask: ['mask'],
            path: [],
            pattern: ['fill', 'stroke'],
            radialGradient: ['fill', 'stroke'],
          },
          w,
          T,
          C,
          _,
          P
        Object.keys(v).forEach(function (M) {
          ;(w = M), (C = v[M]), (T = d.querySelectorAll(w + '[id]'))
          for (
            var A = function (xe, we) {
                ;(_ = T[xe].id), (P = _ + '-' + py())
                var fe
                Array.prototype.forEach.call(C, function (We) {
                  fe = d.querySelectorAll('[' + We + '*="' + _ + '"]')
                  for (var qe = 0, rt = fe.length; qe < rt; qe++) {
                    var it = fe[qe].getAttribute(We)
                    ;(it && !it.match(new RegExp('url\\("?#' + _ + '"?\\)'))) ||
                      fe[qe].setAttribute(We, 'url(#' + P + ')')
                  }
                })
                for (
                  var Le = d.querySelectorAll('[*|href]'),
                    Me = [],
                    mt = 0,
                    At = Le.length;
                  mt < At;
                  mt++
                ) {
                  var Yt = Le[mt].getAttributeNS(Ps, 'href')
                  Yt && Yt.toString() === '#' + T[xe].id && Me.push(Le[mt])
                }
                for (var kt = 0, nt = Me.length; kt < nt; kt++)
                  Me[kt].setAttributeNS(Ps, 'href', '#' + P)
                T[xe].id = P
              },
              B = 0,
              Q = T.length;
            B < Q;
            B++
          )
            A(B)
        })
      }
      d.removeAttribute('xmlns:a')
      for (
        var R = d.querySelectorAll('script'), D = [], L, O, $ = 0, X = R.length;
        $ < X;
        $++
      )
        (O = R[$].getAttribute('type')),
          (!O ||
            O === 'application/ecmascript' ||
            O === 'application/javascript' ||
            O === 'text/javascript') &&
            ((L = R[$].innerText || R[$].textContent),
            L && D.push(L),
            d.removeChild(R[$]))
      if (D.length > 0 && (n === 'always' || (n === 'once' && !gd[a]))) {
        for (var q = 0, I = D.length; q < I; q++) new Function(D[q])(window)
        gd[a] = !0
      }
      var K = d.querySelectorAll('style')
      if (
        (Array.prototype.forEach.call(K, function (M) {
          M.textContent += ''
        }),
        d.setAttribute('xmlns', hy),
        d.setAttribute('xmlns:xlink', Ps),
        o(d),
        !t.parentNode)
      ) {
        $t.splice($t.indexOf(t), 1),
          (t = null),
          s(new Error('Parent node is null'))
        return
      }
      t.parentNode.replaceChild(d, t),
        $t.splice($t.indexOf(t), 1),
        (t = null),
        s(null, d)
    })
  },
  my = function (t, n) {
    var r = n === void 0 ? {} : n,
      i = r.afterAll,
      l = i === void 0 ? function () {} : i,
      o = r.afterEach,
      s = o === void 0 ? function () {} : o,
      a = r.beforeEach,
      u = a === void 0 ? function () {} : a,
      f = r.cacheRequests,
      d = f === void 0 ? !0 : f,
      h = r.evalScripts,
      g = h === void 0 ? 'never' : h,
      y = r.httpRequestWithCredentials,
      x = y === void 0 ? !1 : y,
      E = r.renumerateIRIElements,
      c = E === void 0 ? !0 : E
    if (t && 'length' in t)
      for (var p = 0, v = 0, w = t.length; v < w; v++)
        yd(t[v], g, c, d, x, u, function (T, C) {
          s(T, C), t && 'length' in t && t.length === ++p && l(p)
        })
    else
      t
        ? yd(t, g, c, d, x, u, function (T, C) {
            s(T, C), l(1), (t = null)
          })
        : l(0)
  },
  vy = function (t) {
    var n = (t == null ? void 0 : t.ownerDocument) || document
    return n.defaultView || window
  },
  gy = function (t, n) {
    for (var r in t) if (!(r in n)) return !0
    for (var i in n) if (t[i] !== n[i]) return !0
    return !1
  },
  yy = [
    'afterInjection',
    'beforeInjection',
    'desc',
    'evalScripts',
    'fallback',
    'httpRequestWithCredentials',
    'loading',
    'renumerateIRIElements',
    'src',
    'title',
    'useRequestCache',
    'wrapper',
  ],
  Tl = 'http://www.w3.org/2000/svg',
  xd = 'http://www.w3.org/1999/xlink',
  vo = (function (e) {
    ny(t, e)
    function t() {
      for (var r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
        l[o] = arguments[o]
      return (
        (r = e.call.apply(e, [this].concat(l)) || this),
        (r.initialState = { hasError: !1, isLoading: !0 }),
        (r.state = r.initialState),
        (r._isMounted = !1),
        (r.reactWrapper = void 0),
        (r.nonReactWrapper = void 0),
        (r.refCallback = function (s) {
          r.reactWrapper = s
        }),
        r
      )
    }
    var n = t.prototype
    return (
      (n.renderSVG = function () {
        var i = this
        if (this.reactWrapper instanceof vy(this.reactWrapper).Node) {
          var l = this.props,
            o = l.desc,
            s = l.evalScripts,
            a = l.httpRequestWithCredentials,
            u = l.renumerateIRIElements,
            f = l.src,
            d = l.title,
            h = l.useRequestCache,
            g = this.props.onError,
            y = this.props.beforeInjection,
            x = this.props.afterInjection,
            E = this.props.wrapper,
            c,
            p
          E === 'svg'
            ? ((c = document.createElementNS(Tl, E)),
              c.setAttribute('xmlns', Tl),
              c.setAttribute('xmlns:xlink', xd),
              (p = document.createElementNS(Tl, E)))
            : ((c = document.createElement(E)),
              (p = document.createElement(E))),
            c.appendChild(p),
            (p.dataset.src = f),
            (this.nonReactWrapper = this.reactWrapper.appendChild(c))
          var v = function (_) {
              if ((i.removeSVG(), !i._isMounted)) {
                g(_)
                return
              }
              i.setState(
                function () {
                  return { hasError: !0, isLoading: !1 }
                },
                function () {
                  g(_)
                },
              )
            },
            w = function (_, P) {
              if (_) {
                v(_)
                return
              }
              i._isMounted &&
                i.setState(
                  function () {
                    return { isLoading: !1 }
                  },
                  function () {
                    try {
                      x(P)
                    } catch (R) {
                      v(R)
                    }
                  },
                )
            },
            T = function (_) {
              if ((_.setAttribute('role', 'img'), o)) {
                var P = _.querySelector(':scope > desc')
                P && _.removeChild(P)
                var R = document.createElement('desc')
                ;(R.innerHTML = o), _.prepend(R)
              }
              if (d) {
                var D = _.querySelector(':scope > title')
                D && _.removeChild(D)
                var L = document.createElement('title')
                ;(L.innerHTML = d), _.prepend(L)
              }
              try {
                y(_)
              } catch (O) {
                v(O)
              }
            }
          my(p, {
            afterEach: w,
            beforeEach: T,
            cacheRequests: h,
            evalScripts: s,
            httpRequestWithCredentials: a,
            renumerateIRIElements: u,
          })
        }
      }),
      (n.removeSVG = function () {
        var i
        ;(i = this.nonReactWrapper) != null &&
          i.parentNode &&
          (this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),
          (this.nonReactWrapper = null))
      }),
      (n.componentDidMount = function () {
        ;(this._isMounted = !0), this.renderSVG()
      }),
      (n.componentDidUpdate = function (i) {
        var l = this
        gy(mo({}, i), this.props) &&
          this.setState(
            function () {
              return l.initialState
            },
            function () {
              l.removeSVG(), l.renderSVG()
            },
          )
      }),
      (n.componentWillUnmount = function () {
        ;(this._isMounted = !1), this.removeSVG()
      }),
      (n.render = function () {
        var i = this.props
        i.afterInjection, i.beforeInjection, i.desc, i.evalScripts
        var l = i.fallback
        i.httpRequestWithCredentials
        var o = i.loading
        i.renumerateIRIElements, i.src, i.title, i.useRequestCache
        var s = i.wrapper,
          a = ty(i, yy),
          u = s
        return j.createElement(
          u,
          mo(
            {},
            a,
            { ref: this.refCallback },
            s === 'svg' ? { xmlns: Tl, xmlnsXlink: xd } : {},
          ),
          this.state.isLoading && o && j.createElement(o, null),
          this.state.hasError && l && j.createElement(l, null),
        )
      }),
      t
    )
  })(j.Component)
vo.defaultProps = {
  afterInjection: function () {},
  beforeInjection: function () {},
  desc: '',
  evalScripts: 'never',
  fallback: null,
  httpRequestWithCredentials: !1,
  loading: null,
  onError: function () {},
  renumerateIRIElements: !0,
  title: '',
  useRequestCache: !0,
  wrapper: 'div',
}
vo.propTypes = {
  afterInjection: Te.func,
  beforeInjection: Te.func,
  desc: Te.string,
  evalScripts: Te.oneOf(['always', 'once', 'never']),
  fallback: Te.oneOfType([Te.func, Te.object, Te.string]),
  httpRequestWithCredentials: Te.bool,
  loading: Te.oneOfType([Te.func, Te.object, Te.string]),
  onError: Te.func,
  renumerateIRIElements: Te.bool,
  src: Te.string.isRequired,
  title: Te.string,
  useRequestCache: Te.bool,
  wrapper: Te.oneOf(['div', 'span', 'svg']),
}
const xy = '/assets/css-gradient-examples-d3e11ebd.svg',
  wy = '/assets/fade-c92fad10.png',
  $l = ({
    image: e,
    title: t,
    description: n,
    imageOnRight: r = !1,
    background: i,
    extend: l,
    titleClassName: o,
    descClassName: s,
    svg: a,
  }) =>
    m.jsxs('div', {
      className: `flex flex-col md:flex-row bg-${i}-200 ${l}`,
      children: [
        m.jsxs('div', {
          className: `w-full flex flex-col justify-center items-center relative md:w-1/2 md:h-[630px] ${
            r ? 'order-last md:order-last' : 'order-last md:order-first'
          }`,
          children: [
            (e &&
              m.jsx('img', {
                src: e,
                alt: '',
                className: 'absolute inset-0 m-auto mx-auto h-80 w-auto ',
              })) ||
              (a &&
                m.jsx(vo, {
                  src: a,
                  className: 'absolute inset-0 m-auto mx-auto h-80 w-auto',
                })),
            m.jsx('img', {
              src: wy,
              alt: '',
              className: 'w-full h-full object-contain',
            }),
          ],
        }),
        m.jsxs('div', {
          className: `w-full p-4 md:w-1/2 ${
            r ? 'order-first md:order-first' : 'order-first md:order-last'
          } flex flex-col items-center justify-center relative`,
          children: [
            m.jsx('div', {
              className: 'absolute z-0 blur-[60px] opacity-20',
              children: m.jsx(vo, { src: xy }),
            }),
            m.jsx('h3', {
              className: `mb-10 text-center z-50 font-bold ${o} text-2xl `,
              children: m.jsx('span', {
                className: 'bgText font-poppins font-semibold ',
                children: t,
              }),
            }),
            m.jsx('p', {
              className: `${s} text-justify font-inter font-thin`,
              children: n,
            }),
          ],
        }),
      ],
    })
$l.propTypes = {
  image: se.string.isRequired,
  title: se.string.isRequired,
  description: se.string.isRequired,
  imageOnRight: se.bool,
  background: se.string,
  extend: se.string,
  titleClassName: se.string,
  descClassName: se.string,
  svg: se.string,
}
const Sy = () => m.jsx(m.Fragment, { children: 'name' }),
  Ey = '/assets/pulse-ba39153a.webm',
  Ph = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className:
          'rounded-3xl w-full flex items-center justify-center relative',
        children: [
          m.jsx('div', {
            className:
              'flex items-center absolute z-0 w-full inset-6 object-cover',
            children: m.jsx('video', {
              className: 'w-full object-fill  ',
              autoPlay: !0,
              loop: !0,
              src: Ey,
            }),
          }),
          m.jsx('div', {
            className: 'w-full z-50',
            children: m.jsx(Uo, {
              children: m.jsxs('div', {
                className: 'flex gap-5',
                children: [
                  m.jsxs('div', {
                    className: 'flex flex-col gap-5 items-center w-1/2',
                    children: [
                      m.jsx(_e, { title: 'Social Media', size: 'text-2xl' }),
                      m.jsx(Qx, {}),
                      m.jsx(_e, { title: 'Direccion', size: 'text-2xl' }),
                      m.jsx(ox, {}),
                    ],
                  }),
                  m.jsx('div', {
                    className: 'flex w-1/2',
                    children: m.jsx(Ty, {}),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  vr = ({ name: e, type: t, pat: n = !1 }) => {
    const r = '[0-9]{10}'
    return m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className: 'flex flex-col',
        children: [
          m.jsxs('label', {
            className: 'capitalize font-inter font-light m-3',
            htmlFor: e,
            children: [e, ':'],
          }),
          m.jsxs('div', {
            className: 'relative w-full',
            children: [
              m.jsx('div', { className: 'starlight ', children: ' ' }),
              m.jsx('input', {
                className:
                  'bg-inherit border border-white-08 text-center w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-2',
                type: t,
                name: e,
                id: e,
                pattern: n ? r : '',
              }),
            ],
          }),
        ],
      }),
    })
  }
vr.propTypes = { name: se.string.isRequired, type: se.string, pat: se.bool }
const jh = ({ name: e }) =>
  m.jsx(m.Fragment, {
    children: m.jsxs('div', {
      className: 'flex flex-col ',
      children: [
        m.jsxs('label', {
          className: 'capitalize font-inter font-light m-3',
          htmlFor: e,
          children: [e, ':'],
        }),
        m.jsxs('div', {
          className: 'relative ',
          children: [
            m.jsx('div', { className: 'starlight ', children: ' ' }),
            m.jsx('textarea', {
              className:
                'bg-inherit border border-white-08 text-justify w-full rounded-3xl focus:outline outline-1 outline-purple-600 outline-offset-2 p-4',
              name: e,
              id: e,
              cols: 30,
              rows: 10,
            }),
          ],
        }),
      ],
    }),
  })
jh.propTypes = { name: se.string.isRequired }
const Ty = () =>
  m.jsx(m.Fragment, {
    children: m.jsx('form', {
      className: 'flex flex-col w-full',
      children: m.jsxs('div', {
        className: 'flex flex-col gap-y-3',
        children: [
          m.jsxs('div', {
            className: 'flex gap-4 w-full',
            children: [
              m.jsx('div', {
                className: 'w-full',
                children: m.jsx(vr, { name: 'nombre', type: 'text' }),
              }),
              m.jsx('div', {
                className: 'w-full',
                children: m.jsx(vr, { name: 'Apellido', type: 'text' }),
              }),
            ],
          }),
          m.jsx('div', {
            className: 'w-full',
            children: m.jsx(vr, { name: 'asunto', type: 'text' }),
          }),
          m.jsxs('div', {
            className: 'flex gap-4 w-full',
            children: [
              m.jsx('div', {
                className: 'w-full',
                children: m.jsx(vr, { name: 'email', type: 'email' }),
              }),
              m.jsx('div', {
                className: 'w-full',
                children: m.jsx(vr, { name: 'telefono', type: 'tel', pat: !0 }),
              }),
            ],
          }),
          m.jsx('div', { children: m.jsx(jh, { name: 'mensaje' }) }),
          m.jsx('div', {
            children: m.jsx(ho, {
              text: 'enviar',
              custom: 'w-full justify-center',
            }),
          }),
        ],
      }),
    }),
  })
function wd(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  )
}
function Au(e = {}, t = {}) {
  Object.keys(t).forEach(n => {
    typeof e[n] > 'u'
      ? (e[n] = t[n])
      : wd(t[n]) && wd(e[n]) && Object.keys(t[n]).length > 0 && Au(e[n], t[n])
  })
}
const _h = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
}
function Xt() {
  const e = typeof document < 'u' ? document : {}
  return Au(e, _h), e
}
const Cy = {
  document: _h,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e)
  },
}
function ht() {
  const e = typeof window < 'u' ? window : {}
  return Au(e, Cy), e
}
function ky(e) {
  const t = e
  Object.keys(t).forEach(n => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function Ma(e, t = 0) {
  return setTimeout(e, t)
}
function go() {
  return Date.now()
}
function Py(e) {
  const t = ht()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function jy(e, t = 'x') {
  const n = ht()
  let r, i, l
  const o = Py(e)
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(',').length > 6 &&
          (i = i
            .split(', ')
            .map(s => s.replace(',', '.'))
            .join(', ')),
        (l = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
      : ((l =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = l.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  )
}
function Cl(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function _y(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function st(...e) {
  const t = Object(e[0]),
    n = ['__proto__', 'constructor', 'prototype']
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r]
    if (i != null && !_y(i)) {
      const l = Object.keys(Object(i)).filter(o => n.indexOf(o) < 0)
      for (let o = 0, s = l.length; o < s; o += 1) {
        const a = l[o],
          u = Object.getOwnPropertyDescriptor(i, a)
        u !== void 0 &&
          u.enumerable &&
          (Cl(t[a]) && Cl(i[a])
            ? i[a].__swiper__
              ? (t[a] = i[a])
              : st(t[a], i[a])
            : !Cl(t[a]) && Cl(i[a])
            ? ((t[a] = {}), i[a].__swiper__ ? (t[a] = i[a]) : st(t[a], i[a]))
            : (t[a] = i[a]))
      }
    }
  }
  return t
}
function kl(e, t, n) {
  e.style.setProperty(t, n)
}
function Nh({ swiper: e, targetPosition: t, side: n }) {
  const r = ht(),
    i = -e.translate
  let l = null,
    o
  const s = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'),
    r.cancelAnimationFrame(e.cssModeFrameID)
  const a = t > i ? 'next' : 'prev',
    u = (d, h) => (a === 'next' && d >= h) || (a === 'prev' && d <= h),
    f = () => {
      ;(o = new Date().getTime()), l === null && (l = o)
      const d = Math.max(Math.min((o - l) / s, 1), 0),
        h = 0.5 - Math.cos(d * Math.PI) / 2
      let g = i + h * (t - i)
      if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [n]: g }), u(g, t))) {
        ;(e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [n]: g })
          }),
          r.cancelAnimationFrame(e.cssModeFrameID)
        return
      }
      e.cssModeFrameID = r.requestAnimationFrame(f)
    }
  f()
}
function Du(e) {
  return (
    e.querySelector('.swiper-slide-transform') ||
    (e.shadowEl && e.shadowEl.querySelector('.swiper-slide-transform')) ||
    e
  )
}
function Ht(e, t = '') {
  return [...e.children].filter(n => n.matches(t))
}
function Iu(e, t = []) {
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n
}
function Ny(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Ly(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function kn(e, t) {
  return ht().getComputedStyle(e, null).getPropertyValue(t)
}
function Sd(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function My(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
  return n
}
function Ed(e, t, n) {
  const r = ht()
  return n
    ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top'),
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'),
        )
    : e.offsetWidth
}
let js
function Ry() {
  const e = ht(),
    t = Xt()
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  }
}
function Lh() {
  return js || (js = Ry()), js
}
let _s
function Oy({ userAgent: e } = {}) {
  const t = Lh(),
    n = ht(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = n.screen.width,
    s = n.screen.height,
    a = i.match(/(Android);?[\s\/]+([\d.]+)?/)
  let u = i.match(/(iPad).*OS\s([\d_]+)/)
  const f = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === 'Win32'
  let g = r === 'MacIntel'
  const y = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ]
  return (
    !u &&
      g &&
      t.touch &&
      y.indexOf(`${o}x${s}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, '13_0_0']),
      (g = !1)),
    a && !h && ((l.os = 'android'), (l.android = !0)),
    (u || d || f) && ((l.os = 'ios'), (l.ios = !0)),
    l
  )
}
function zy(e = {}) {
  return _s || (_s = Oy(e)), _s
}
let Ns
function by() {
  const e = ht()
  let t = !1
  function n() {
    const r = e.navigator.userAgent.toLowerCase()
    return (
      r.indexOf('safari') >= 0 &&
      r.indexOf('chrome') < 0 &&
      r.indexOf('android') < 0
    )
  }
  if (n()) {
    const r = String(e.navigator.userAgent)
    if (r.includes('Version/')) {
      const [i, l] = r
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map(o => Number(o))
      t = i < 16 || (i === 16 && l < 2)
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  }
}
function Ay() {
  return Ns || (Ns = by()), Ns
}
function Dy({ swiper: e, on: t, emit: n }) {
  const r = ht()
  let i = null,
    l = null
  const o = () => {
      !e || e.destroyed || !e.initialized || (n('beforeResize'), n('resize'))
    },
    s = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver(f => {
          l = r.requestAnimationFrame(() => {
            const { width: d, height: h } = e
            let g = d,
              y = h
            f.forEach(({ contentBoxSize: x, contentRect: E, target: c }) => {
              ;(c && c !== e.el) ||
                ((g = E ? E.width : (x[0] || x).inlineSize),
                (y = E ? E.height : (x[0] || x).blockSize))
            }),
              (g !== d || y !== h) && o()
          })
        })),
        i.observe(e.el))
    },
    a = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null))
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n('orientationchange')
    }
  t('init', () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      s()
      return
    }
    r.addEventListener('resize', o), r.addEventListener('orientationchange', u)
  }),
    t('destroy', () => {
      a(),
        r.removeEventListener('resize', o),
        r.removeEventListener('orientationchange', u)
    })
}
function Iy({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = ht(),
    o = (u, f = {}) => {
      const d = l.MutationObserver || l.WebkitMutationObserver,
        h = new d(g => {
          if (e.__preventObserver__) return
          if (g.length === 1) {
            r('observerUpdate', g[0])
            return
          }
          const y = function () {
            r('observerUpdate', g[0])
          }
          l.requestAnimationFrame
            ? l.requestAnimationFrame(y)
            : l.setTimeout(y, 0)
        })
      h.observe(u, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: typeof f.childList > 'u' ? !0 : f.childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData,
      }),
        i.push(h)
    },
    s = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = My(e.el)
          for (let f = 0; f < u.length; f += 1) o(u[f])
        }
        o(e.el, { childList: e.params.observeSlideChildren }),
          o(e.wrapperEl, { attributes: !1 })
      }
    },
    a = () => {
      i.forEach(u => {
        u.disconnect()
      }),
        i.splice(0, i.length)
    }
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n('init', s),
    n('destroy', a)
}
const Fy = {
  on(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    const i = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach(l => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t)
      }),
      r
    )
  },
  once(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    function i(...l) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l)
    }
    return (i.__emitterProxy = t), r.on(e, i, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
    const r = t ? 'unshift' : 'push'
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach(r => {
          typeof t > 'u'
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                ;(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1)
              })
        }),
      n
    )
  },
  emit(...e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
    let n, r, i
    return (
      typeof e[0] == 'string' || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(' ')).forEach(o => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach(s => {
            s.apply(i, [o, ...r])
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach(s => {
              s.apply(i, r)
            })
      }),
      t
    )
  },
}
function $y() {
  const e = this
  let t, n
  const r = e.el
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(kn(r, 'padding-left') || 0, 10) -
        parseInt(kn(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(kn(r, 'padding-top') || 0, 10) -
        parseInt(kn(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function By() {
  const e = this
  function t(L) {
    return e.isHorizontal()
      ? L
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[L]
  }
  function n(L, O) {
    return parseFloat(L.getPropertyValue(t(O)) || 0)
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: l, size: o, rtlTranslate: s, wrongRTL: a } = e,
    u = e.virtual && r.virtual.enabled,
    f = u ? e.virtual.slides.length : e.slides.length,
    d = Ht(l, `.${e.params.slideClass}, swiper-slide`),
    h = u ? e.virtual.slides.length : d.length
  let g = []
  const y = [],
    x = []
  let E = r.slidesOffsetBefore
  typeof E == 'function' && (E = r.slidesOffsetBefore.call(e))
  let c = r.slidesOffsetAfter
  typeof c == 'function' && (c = r.slidesOffsetAfter.call(e))
  const p = e.snapGrid.length,
    v = e.slidesGrid.length
  let w = r.spaceBetween,
    T = -E,
    C = 0,
    _ = 0
  if (typeof o > 'u') return
  typeof w == 'string' && w.indexOf('%') >= 0
    ? (w = (parseFloat(w.replace('%', '')) / 100) * o)
    : typeof w == 'string' && (w = parseFloat(w)),
    (e.virtualSize = -w),
    d.forEach(L => {
      s ? (L.style.marginLeft = '') : (L.style.marginRight = ''),
        (L.style.marginBottom = ''),
        (L.style.marginTop = '')
    }),
    r.centeredSlides &&
      r.cssMode &&
      (kl(i, '--swiper-centered-offset-before', ''),
      kl(i, '--swiper-centered-offset-after', ''))
  const P = r.grid && r.grid.rows > 1 && e.grid
  P && e.grid.initSlides(h)
  let R
  const D =
    r.slidesPerView === 'auto' &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      L => typeof r.breakpoints[L].slidesPerView < 'u',
    ).length > 0
  for (let L = 0; L < h; L += 1) {
    R = 0
    let O
    if (
      (d[L] && (O = d[L]),
      P && e.grid.updateSlide(L, O, h, t),
      !(d[L] && kn(O, 'display') === 'none'))
    ) {
      if (r.slidesPerView === 'auto') {
        D && (d[L].style[t('width')] = '')
        const $ = getComputedStyle(O),
          X = O.style.transform,
          q = O.style.webkitTransform
        if (
          (X && (O.style.transform = 'none'),
          q && (O.style.webkitTransform = 'none'),
          r.roundLengths)
        )
          R = e.isHorizontal() ? Ed(O, 'width', !0) : Ed(O, 'height', !0)
        else {
          const I = n($, 'width'),
            K = n($, 'padding-left'),
            M = n($, 'padding-right'),
            A = n($, 'margin-left'),
            B = n($, 'margin-right'),
            Q = $.getPropertyValue('box-sizing')
          if (Q && Q === 'border-box') R = I + A + B
          else {
            const { clientWidth: ne, offsetWidth: xe } = O
            R = I + K + M + A + B + (xe - ne)
          }
        }
        X && (O.style.transform = X),
          q && (O.style.webkitTransform = q),
          r.roundLengths && (R = Math.floor(R))
      } else
        (R = (o - (r.slidesPerView - 1) * w) / r.slidesPerView),
          r.roundLengths && (R = Math.floor(R)),
          d[L] && (d[L].style[t('width')] = `${R}px`)
      d[L] && (d[L].swiperSlideSize = R),
        x.push(R),
        r.centeredSlides
          ? ((T = T + R / 2 + C / 2 + w),
            C === 0 && L !== 0 && (T = T - o / 2 - w),
            L === 0 && (T = T - o / 2 - w),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            r.roundLengths && (T = Math.floor(T)),
            _ % r.slidesPerGroup === 0 && g.push(T),
            y.push(T))
          : (r.roundLengths && (T = Math.floor(T)),
            (_ - Math.min(e.params.slidesPerGroupSkip, _)) %
              e.params.slidesPerGroup ===
              0 && g.push(T),
            y.push(T),
            (T = T + R + w)),
        (e.virtualSize += R + w),
        (C = R),
        (_ += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + c),
    s &&
      a &&
      (r.effect === 'slide' || r.effect === 'coverflow') &&
      (i.style.width = `${e.virtualSize + w}px`),
    r.setWrapperSize && (i.style[t('width')] = `${e.virtualSize + w}px`),
    P && e.grid.updateWrapperSize(R, g, t),
    !r.centeredSlides)
  ) {
    const L = []
    for (let O = 0; O < g.length; O += 1) {
      let $ = g[O]
      r.roundLengths && ($ = Math.floor($)),
        g[O] <= e.virtualSize - o && L.push($)
    }
    ;(g = L),
      Math.floor(e.virtualSize - o) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - o)
  }
  if (u && r.loop) {
    const L = x[0] + w
    if (r.slidesPerGroup > 1) {
      const O = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup,
        ),
        $ = L * r.slidesPerGroup
      for (let X = 0; X < O; X += 1) g.push(g[g.length - 1] + $)
    }
    for (let O = 0; O < e.virtual.slidesBefore + e.virtual.slidesAfter; O += 1)
      r.slidesPerGroup === 1 && g.push(g[g.length - 1] + L),
        y.push(y[y.length - 1] + L),
        (e.virtualSize += L)
  }
  if ((g.length === 0 && (g = [0]), w !== 0)) {
    const L = e.isHorizontal() && s ? 'marginLeft' : t('marginRight')
    d.filter((O, $) =>
      !r.cssMode || r.loop ? !0 : $ !== d.length - 1,
    ).forEach(O => {
      O.style[L] = `${w}px`
    })
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let L = 0
    x.forEach($ => {
      L += $ + (w || 0)
    }),
      (L -= w)
    const O = L - o
    g = g.map($ => ($ < 0 ? -E : $ > O ? O + c : $))
  }
  if (r.centerInsufficientSlides) {
    let L = 0
    if (
      (x.forEach(O => {
        L += O + (w || 0)
      }),
      (L -= w),
      L < o)
    ) {
      const O = (o - L) / 2
      g.forEach(($, X) => {
        g[X] = $ - O
      }),
        y.forEach(($, X) => {
          y[X] = $ + O
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: g,
      slidesGrid: y,
      slidesSizesGrid: x,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    kl(i, '--swiper-centered-offset-before', `${-g[0]}px`),
      kl(
        i,
        '--swiper-centered-offset-after',
        `${e.size / 2 - x[x.length - 1] / 2}px`,
      )
    const L = -e.snapGrid[0],
      O = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map($ => $ + L)),
      (e.slidesGrid = e.slidesGrid.map($ => $ + O))
  }
  if (
    (h !== f && e.emit('slidesLengthChange'),
    g.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    y.length !== v && e.emit('slidesGridLengthChange'),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))
  ) {
    const L = `${r.containerModifierClass}backface-hidden`,
      O = e.el.classList.contains(L)
    h <= r.maxBackfaceHiddenSlides
      ? O || e.el.classList.add(L)
      : O && e.el.classList.remove(L)
  }
}
function Uy(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled
  let i = 0,
    l
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const o = s => (r ? t.slides[t.getSlideIndexByData(s)] : t.slides[s])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach(s => {
        n.push(s)
      })
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const s = t.activeIndex + l
        if (s > t.slides.length && !r) break
        n.push(o(s))
      }
  else n.push(o(t.activeIndex))
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < 'u') {
      const s = n[l].offsetHeight
      i = s > i ? s : i
    }
  ;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function Vy() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment()
}
function Hy(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t
  if (r.length === 0) return
  typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let o = -e
  i && (o = e),
    r.forEach(a => {
      a.classList.remove(n.slideVisibleClass)
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = [])
  let s = n.spaceBetween
  typeof s == 'string' && s.indexOf('%') >= 0
    ? (s = (parseFloat(s.replace('%', '')) / 100) * t.size)
    : typeof s == 'string' && (s = parseFloat(s))
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a]
    let f = u.swiperSlideOffset
    n.cssMode && n.centeredSlides && (f -= r[0].swiperSlideOffset)
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (u.swiperSlideSize + s),
      h =
        (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (u.swiperSlideSize + s),
      g = -(o - f),
      y = g + t.slidesSizesGrid[a]
    ;((g >= 0 && g < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (g <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -h : h)
  }
}
function Wy(e) {
  const t = this
  if (typeof e > 'u') {
    const f = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * f) || 0
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate()
  let { progress: i, isBeginning: l, isEnd: o, progressLoop: s } = t
  const a = l,
    u = o
  if (r === 0) (i = 0), (l = !0), (o = !0)
  else {
    i = (e - t.minTranslate()) / r
    const f = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(l = f || i <= 0), (o = d || i >= 1), f && (i = 0), d && (i = 1)
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[f],
      g = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e)
    x >= h ? (s = (x - h) / y) : (s = (x + y - g) / y), s > 1 && (s -= 1)
  }
  Object.assign(t, { progress: i, progressLoop: s, isBeginning: l, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit('reachBeginning toEdge'),
    o && !u && t.emit('reachEnd toEdge'),
    ((a && !l) || (u && !o)) && t.emit('fromEdge'),
    t.emit('progress', i)
}
function Gy() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    o = a => Ht(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0]
  t.forEach(a => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
  })
  let s
  if (l)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (s = o(`[data-swiper-slide-index="${a}"]`))
    } else s = o(`[data-swiper-slide-index="${i}"]`)
  else s = t[i]
  if (s) {
    s.classList.add(n.slideActiveClass)
    let a = Ly(s, `.${n.slideClass}, swiper-slide`)[0]
    n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass)
    let u = Ny(s, `.${n.slideClass}, swiper-slide`)[0]
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass)
  }
  e.emitSlidesClasses()
}
const Bl = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      r = t.closest(n())
    if (r) {
      const i = r.querySelector(`.${e.params.lazyPreloaderClass}`)
      i && i.remove()
    }
  },
  Td = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  Ra = e => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const r =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex,
      l = i + r - 1
    if (e.params.rewind)
      for (let o = i - t; o <= l + t; o += 1) {
        const s = ((o % n) + n) % n
        s !== i && s > l && Td(e, s)
      }
    else
      for (let o = Math.max(l - t, 0); o <= Math.min(l + t, n - 1); o += 1)
        o !== i && o > l && Td(e, o)
  }
function Xy(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate
  let i
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < 'u'
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l)
  return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function Qy(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: o, snapIndex: s } = t
  let a = e,
    u
  const f = h => {
    let g = h - t.virtual.slidesBefore
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    )
  }
  if ((typeof a > 'u' && (a = Xy(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
  else {
    const h = Math.min(i.slidesPerGroupSkip, a)
    u = h + Math.floor((a - h) / i.slidesPerGroup)
  }
  if ((u >= r.length && (u = r.length - 1), a === l)) {
    u !== s && ((t.snapIndex = u), t.emit('snapIndexChange')),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = f(a))
    return
  }
  let d
  t.virtual && i.virtual.enabled && i.loop
    ? (d = f(a))
    : t.slides[a]
    ? (d = parseInt(
        t.slides[a].getAttribute('data-swiper-slide-index') || a,
        10,
      ))
    : (d = a),
    Object.assign(t, {
      previousSnapIndex: s,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: d,
      previousIndex: l,
      activeIndex: a,
    }),
    t.initialized && Ra(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    o !== d && t.emit('realIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange')
}
function Yy(e) {
  const t = this,
    n = t.params,
    r = e.closest(`.${n.slideClass}, swiper-slide`)
  let i = !1,
    l
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        ;(i = !0), (l = o)
        break
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute('data-swiper-slide-index'),
            10,
          ))
        : (t.clickedIndex = l)
  else {
    ;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
    return
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide()
}
const qy = {
  updateSize: $y,
  updateSlides: By,
  updateAutoHeight: Uy,
  updateSlidesOffset: Vy,
  updateSlidesProgress: Hy,
  updateProgress: Wy,
  updateSlidesClasses: Gy,
  updateActiveIndex: Qy,
  updateClickedSlide: Yy,
}
function Ky(e = this.isHorizontal() ? 'x' : 'y') {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t
  if (n.virtualTranslate) return r ? -i : i
  if (n.cssMode) return i
  let o = jy(l, e)
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0
}
function Zy(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: o } = n
  let s = 0,
    a = 0
  const u = 0
  n.isHorizontal() ? (s = r ? -e : e) : (a = e),
    i.roundLengths && ((s = Math.floor(s)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? s : a),
    i.cssMode
      ? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -s
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (s -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${s}px, ${a}px, ${u}px)`))
  let f
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (f = 0) : (f = (e - n.minTranslate()) / d),
    f !== o && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t)
}
function Jy() {
  return -this.snapGrid[0]
}
function e1() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function t1(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: o, wrapperEl: s } = l
  if (l.animating && o.preventInteractionOnTransition) return !1
  const a = l.minTranslate(),
    u = l.maxTranslate()
  let f
  if (
    (r && e > a ? (f = a) : r && e < u ? (f = u) : (f = e),
    l.updateProgress(f),
    o.cssMode)
  ) {
    const d = l.isHorizontal()
    if (t === 0) s[d ? 'scrollLeft' : 'scrollTop'] = -f
    else {
      if (!l.support.smoothScroll)
        return (
          Nh({ swiper: l, targetPosition: -f, side: d ? 'left' : 'top' }), !0
        )
      s.scrollTo({ [d ? 'left' : 'top']: -f, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(f),
        n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionEnd')))
      : (l.setTransition(t),
        l.setTranslate(f),
        n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionStart')),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (h) {
              !l ||
                l.destroyed ||
                (h.target === this &&
                  (l.wrapperEl.removeEventListener(
                    'transitionend',
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit('transitionEnd')))
            }),
          l.wrapperEl.addEventListener(
            'transitionend',
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  )
}
const n1 = {
  getTranslate: Ky,
  setTranslate: Zy,
  minTranslate: Jy,
  maxTranslate: e1,
  translateTo: t1,
}
function r1(e, t) {
  const n = this
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit('setTransition', e, t)
}
function Mh({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: l } = e
  let o = n
  if (
    (o || (i > l ? (o = 'next') : i < l ? (o = 'prev') : (o = 'reset')),
    e.emit(`transition${r}`),
    t && i !== l)
  ) {
    if (o === 'reset') {
      e.emit(`slideResetTransition${r}`)
      return
    }
    e.emit(`slideChangeTransition${r}`),
      o === 'next'
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`)
  }
}
function i1(e = !0, t) {
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Mh({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function l1(e = !0, t) {
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Mh({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
const o1 = { setTransition: r1, transitionStart: i1, transitionEnd: l1 }
function s1(e = 0, t = this.params.speed, n = !0, r, i) {
  typeof e == 'string' && (e = parseInt(e, 10))
  const l = this
  let o = e
  o < 0 && (o = 0)
  const {
    params: s,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: f,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: g,
    enabled: y,
  } = l
  if ((l.animating && s.preventInteractionOnTransition) || (!y && !r && !i))
    return !1
  const x = Math.min(l.params.slidesPerGroupSkip, o)
  let E = x + Math.floor((o - x) / l.params.slidesPerGroup)
  E >= a.length && (E = a.length - 1)
  const c = -a[E]
  if (s.normalizeSlideIndex)
    for (let v = 0; v < u.length; v += 1) {
      const w = -Math.floor(c * 100),
        T = Math.floor(u[v] * 100),
        C = Math.floor(u[v + 1] * 100)
      typeof u[v + 1] < 'u'
        ? w >= T && w < C - (C - T) / 2
          ? (o = v)
          : w >= T && w < C && (o = v + 1)
        : w >= T && (o = v)
    }
  if (
    l.initialized &&
    o !== d &&
    ((!l.allowSlideNext && c < l.translate && c < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        c > l.translate &&
        c > l.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1
  o !== (f || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(c)
  let p
  if (
    (o > d ? (p = 'next') : o < d ? (p = 'prev') : (p = 'reset'),
    (h && -c === l.translate) || (!h && c === l.translate))
  )
    return (
      l.updateActiveIndex(o),
      s.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      s.effect !== 'slide' && l.setTranslate(c),
      p !== 'reset' && (l.transitionStart(n, p), l.transitionEnd(n, p)),
      !1
    )
  if (s.cssMode) {
    const v = l.isHorizontal(),
      w = h ? c : -c
    if (t === 0) {
      const T = l.virtual && l.params.virtual.enabled
      T &&
        ((l.wrapperEl.style.scrollSnapType = 'none'),
        (l._immediateVirtual = !0)),
        T && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[v ? 'scrollLeft' : 'scrollTop'] = w
            }))
          : (g[v ? 'scrollLeft' : 'scrollTop'] = w),
        T &&
          requestAnimationFrame(() => {
            ;(l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1)
          })
    } else {
      if (!l.support.smoothScroll)
        return (
          Nh({ swiper: l, targetPosition: w, side: v ? 'left' : 'top' }), !0
        )
      g.scrollTo({ [v ? 'left' : 'top']: w, behavior: 'smooth' })
    }
    return !0
  }
  return (
    l.setTransition(t),
    l.setTranslate(c),
    l.updateActiveIndex(o),
    l.updateSlidesClasses(),
    l.emit('beforeTransitionStart', t, r),
    l.transitionStart(n, p),
    t === 0
      ? l.transitionEnd(n, p)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (w) {
            !l ||
              l.destroyed ||
              (w.target === this &&
                (l.wrapperEl.removeEventListener(
                  'transitionend',
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, p)))
          }),
        l.wrapperEl.addEventListener(
          'transitionend',
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function a1(e = 0, t = this.params.speed, n = !0, r) {
  typeof e == 'string' && (e = parseInt(e, 10))
  const i = this
  let l = e
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (l = l + i.virtual.slidesBefore)
        : (l = i.getSlideIndexByData(l))),
    i.slideTo(l, t, n, r)
  )
}
function u1(e = this.params.speed, t = !0, n) {
  const r = this,
    { enabled: i, params: l, animating: o } = r
  if (!i) return r
  let s = l.slidesPerGroup
  l.slidesPerView === 'auto' &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (s = Math.max(r.slidesPerViewDynamic('current', !0), 1))
  const a = r.activeIndex < l.slidesPerGroupSkip ? 1 : s,
    u = r.virtual && l.virtual.enabled
  if (l.loop) {
    if (o && !u && l.loopPreventsSliding) return !1
    r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft)
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n)
}
function c1(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: o,
      rtlTranslate: s,
      enabled: a,
      animating: u,
    } = r
  if (!a) return r
  const f = r.virtual && i.virtual.enabled
  if (i.loop) {
    if (u && !f && i.loopPreventsSliding) return !1
    r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft)
  }
  const d = s ? r.translate : -r.translate
  function h(c) {
    return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c)
  }
  const g = h(d),
    y = l.map(c => h(c))
  let x = l[y.indexOf(g) - 1]
  if (typeof x > 'u' && i.cssMode) {
    let c
    l.forEach((p, v) => {
      g >= p && (c = v)
    }),
      typeof c < 'u' && (x = l[c > 0 ? c - 1 : c])
  }
  let E = 0
  if (
    (typeof x < 'u' &&
      ((E = o.indexOf(x)),
      E < 0 && (E = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((E = E - r.slidesPerViewDynamic('previous', !0) + 1),
        (E = Math.max(E, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const c =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1
    return r.slideTo(c, e, t, n)
  }
  return r.slideTo(E, e, t, n)
}
function d1(e = this.params.speed, t = !0, n) {
  const r = this
  return r.slideTo(r.activeIndex, e, t, n)
}
function f1(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this
  let l = i.activeIndex
  const o = Math.min(i.params.slidesPerGroupSkip, l),
    s = o + Math.floor((l - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate
  if (a >= i.snapGrid[s]) {
    const u = i.snapGrid[s],
      f = i.snapGrid[s + 1]
    a - u > (f - u) * r && (l += i.params.slidesPerGroup)
  } else {
    const u = i.snapGrid[s - 1],
      f = i.snapGrid[s]
    a - u <= (f - u) * r && (l -= i.params.slidesPerGroup)
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  )
}
function p1() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let i = e.clickedIndex,
    l
  const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(l = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Ht(n, `${o}[data-swiper-slide-index="${l}"]`)[0],
            )),
            Ma(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Ht(n, `${o}[data-swiper-slide-index="${l}"]`)[0],
          )),
          Ma(() => {
            e.slideTo(i)
          }))
        : e.slideTo(i)
  } else e.slideTo(i)
}
const h1 = {
  slideTo: s1,
  slideToLoop: a1,
  slideNext: u1,
  slidePrev: c1,
  slideReset: d1,
  slideToClosest: f1,
  slideToClickedSlide: p1,
}
function m1(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  Ht(r, `.${n.slideClass}, swiper-slide`).forEach((l, o) => {
    l.setAttribute('data-swiper-slide-index', o)
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : 'next',
    })
}
function v1({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: n,
  setTranslate: r,
  activeSlideIndex: i,
  byController: l,
  byMousewheel: o,
} = {}) {
  const s = this
  if (!s.params.loop) return
  s.emit('beforeLoopFix')
  const {
    slides: a,
    allowSlidePrev: u,
    allowSlideNext: f,
    slidesEl: d,
    params: h,
  } = s
  if (
    ((s.allowSlidePrev = !0),
    (s.allowSlideNext = !0),
    s.virtual && h.virtual.enabled)
  ) {
    t &&
      (!h.centeredSlides && s.snapIndex === 0
        ? s.slideTo(s.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && s.snapIndex < h.slidesPerView
        ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
        : s.snapIndex === s.snapGrid.length - 1 &&
          s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
      (s.allowSlidePrev = u),
      (s.allowSlideNext = f),
      s.emit('loopFix')
    return
  }
  const g =
    h.slidesPerView === 'auto'
      ? s.slidesPerViewDynamic()
      : Math.ceil(parseFloat(h.slidesPerView, 10))
  let y = h.loopedSlides || g
  y % h.slidesPerGroup !== 0 &&
    (y += h.slidesPerGroup - (y % h.slidesPerGroup)),
    (s.loopedSlides = y)
  const x = [],
    E = []
  let c = s.activeIndex
  typeof i > 'u'
    ? (i = s.getSlideIndex(
        s.slides.filter(C => C.classList.contains(h.slideActiveClass))[0],
      ))
    : (c = i)
  const p = n === 'next' || !n,
    v = n === 'prev' || !n
  let w = 0,
    T = 0
  if (i < y) {
    w = Math.max(y - i, h.slidesPerGroup)
    for (let C = 0; C < y - i; C += 1) {
      const _ = C - Math.floor(C / a.length) * a.length
      x.push(a.length - _ - 1)
    }
  } else if (i > s.slides.length - y * 2) {
    T = Math.max(i - (s.slides.length - y * 2), h.slidesPerGroup)
    for (let C = 0; C < T; C += 1) {
      const _ = C - Math.floor(C / a.length) * a.length
      E.push(_)
    }
  }
  if (
    (v &&
      x.forEach(C => {
        ;(s.slides[C].swiperLoopMoveDOM = !0),
          d.prepend(s.slides[C]),
          (s.slides[C].swiperLoopMoveDOM = !1)
      }),
    p &&
      E.forEach(C => {
        ;(s.slides[C].swiperLoopMoveDOM = !0),
          d.append(s.slides[C]),
          (s.slides[C].swiperLoopMoveDOM = !1)
      }),
    s.recalcSlides(),
    h.slidesPerView === 'auto' && s.updateSlides(),
    h.watchSlidesProgress && s.updateSlidesOffset(),
    t)
  ) {
    if (x.length > 0 && v)
      if (typeof e > 'u') {
        const C = s.slidesGrid[c],
          P = s.slidesGrid[c + w] - C
        o
          ? s.setTranslate(s.translate - P)
          : (s.slideTo(c + w, 0, !1, !0),
            r && (s.touches[s.isHorizontal() ? 'startX' : 'startY'] += P))
      } else r && s.slideToLoop(e, 0, !1, !0)
    else if (E.length > 0 && p)
      if (typeof e > 'u') {
        const C = s.slidesGrid[c],
          P = s.slidesGrid[c - T] - C
        o
          ? s.setTranslate(s.translate - P)
          : (s.slideTo(c - T, 0, !1, !0),
            r && (s.touches[s.isHorizontal() ? 'startX' : 'startY'] += P))
      } else s.slideToLoop(e, 0, !1, !0)
  }
  if (
    ((s.allowSlidePrev = u),
    (s.allowSlideNext = f),
    s.controller && s.controller.control && !l)
  ) {
    const C = {
      slideRealIndex: e,
      slideTo: !1,
      direction: n,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    }
    Array.isArray(s.controller.control)
      ? s.controller.control.forEach(_ => {
          !_.destroyed && _.params.loop && _.loopFix(C)
        })
      : s.controller.control instanceof s.constructor &&
        s.controller.control.params.loop &&
        s.controller.control.loopFix(C)
  }
  s.emit('loopFix')
}
function g1() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const r = []
  e.slides.forEach(i => {
    const l =
      typeof i.swiperSlideIndex > 'u'
        ? i.getAttribute('data-swiper-slide-index') * 1
        : i.swiperSlideIndex
    r[l] = i
  }),
    e.slides.forEach(i => {
      i.removeAttribute('data-swiper-slide-index')
    }),
    r.forEach(i => {
      n.append(i)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
const y1 = { loopCreate: m1, loopFix: v1, loopDestroy: g1 }
function x1(e) {
  const t = this
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      })
}
function w1() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
const S1 = { setGrabCursor: x1, unsetGrabCursor: w1 }
function E1(e, t = this) {
  function n(r) {
    if (!r || r === Xt() || r === ht()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const i = r.closest(e)
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
  }
  return n(t)
}
function T1(e) {
  const t = this,
    n = Xt(),
    r = ht(),
    i = t.touchEventsData
  i.evCache.push(e)
  const { params: l, touches: o, enabled: s } = t
  if (
    !s ||
    (!l.simulateTouch && e.pointerType === 'mouse') ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return
  !t.animating && l.cssMode && l.loop && t.loopFix()
  let a = e
  a.originalEvent && (a = a.originalEvent)
  let u = a.target
  if (
    (l.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(u)) ||
    ('which' in a && a.which === 3) ||
    ('button' in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return
  const f = !!l.noSwipingClass && l.noSwipingClass !== '',
    d = e.composedPath ? e.composedPath() : e.path
  f && a.target && a.target.shadowRoot && d && (u = d[0])
  const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    g = !!(a.target && a.target.shadowRoot)
  if (l.noSwiping && (g ? E1(h, u) : u.closest(h))) {
    t.allowClick = !0
    return
  }
  if (l.swipeHandler && !u.closest(l.swipeHandler)) return
  ;(o.currentX = a.pageX), (o.currentY = a.pageY)
  const y = o.currentX,
    x = o.currentY,
    E = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    c = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold
  if (E && (y <= c || y >= r.innerWidth - c))
    if (E === 'prevent') e.preventDefault()
    else return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = y),
    (o.startY = x),
    (i.touchStartTime = go()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1)
  let p = !0
  u.matches(i.focusableElements) &&
    ((p = !1), u.nodeName === 'SELECT' && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur()
  const v = p && t.allowTouchMove && l.touchStartPreventDefault
  ;(l.touchStartForcePreventDefault || v) &&
    !u.isContentEditable &&
    a.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', a)
}
function C1(e) {
  const t = Xt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: o, enabled: s } = n
  if (!s || (!i.simulateTouch && e.pointerType === 'mouse')) return
  let a = e
  if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', a)
    return
  }
  const u = r.evCache.findIndex(C => C.pointerId === a.pointerId)
  u >= 0 && (r.evCache[u] = a)
  const f = r.evCache.length > 1 ? r.evCache[0] : a,
    d = f.pageX,
    h = f.pageY
  if (a.preventedByNestedSwiper) {
    ;(l.startX = d), (l.startY = h)
    return
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, {
          startX: d,
          startY: h,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: h,
        }),
        (r.touchStartTime = go()))
    return
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (h < l.startY && n.translate <= n.maxTranslate()) ||
        (h > l.startY && n.translate >= n.minTranslate())
      ) {
        ;(r.isTouched = !1), (r.isMoved = !1)
        return
      }
    } else if (
      (d < l.startX && n.translate <= n.maxTranslate()) ||
      (d > l.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    ;(r.isMoved = !0), (n.allowClick = !1)
    return
  }
  if (
    (r.allowTouchCallbacks && n.emit('touchMove', a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return
  ;(l.currentX = d), (l.currentY = h)
  const g = l.currentX - l.startX,
    y = l.currentY - l.startY
  if (n.params.threshold && Math.sqrt(g ** 2 + y ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > 'u') {
    let C
    ;(n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : g * g + y * y >= 25 &&
        ((C = (Math.atan2(Math.abs(y), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? C > i.touchAngle
          : 90 - C > i.touchAngle))
  }
  if (
    (r.isScrolling && n.emit('touchMoveOpposite', a),
    typeof r.startMoving > 'u' &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1
    return
  }
  if (!r.startMoving) return
  ;(n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation()
  let x = n.isHorizontal() ? g : y,
    E = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY
  i.oneWayMovement &&
    ((x = Math.abs(x) * (o ? 1 : -1)), (E = Math.abs(E) * (o ? 1 : -1))),
    (l.diff = x),
    (x *= i.touchRatio),
    o && ((x = -x), (E = -E))
  const c = n.touchesDirection
  ;(n.swipeDirection = x > 0 ? 'prev' : 'next'),
    (n.touchesDirection = E > 0 ? 'prev' : 'next')
  const p = n.params.loop && !i.cssMode
  if (!r.isMoved) {
    if (
      (p && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const C = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
      })
      n.wrapperEl.dispatchEvent(C)
    }
    ;(r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', a)
  }
  let v
  r.isMoved &&
    c !== n.touchesDirection &&
    p &&
    Math.abs(x) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (v = !0)),
    n.emit('sliderMove', a),
    (r.isMoved = !0),
    (r.currentTranslate = x + r.startTranslate)
  let w = !0,
    T = i.resistanceRatio
  if (
    (i.touchReleaseOnEdges && (T = 0),
    x > 0
      ? (p &&
          !v &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + x) ** T)))
      : x < 0 &&
        (p &&
          !v &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - x) ** T))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(x) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        ;(r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
        return
      }
    } else {
      r.currentTranslate = r.startTranslate
      return
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function k1(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex(v => v.pointerId === e.pointerId)
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type) &&
      !(
        e.type === 'pointercancel' &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return
  const {
    params: i,
    touches: l,
    rtlTranslate: o,
    slidesGrid: s,
    enabled: a,
  } = t
  if (!a || (!i.simulateTouch && e.pointerType === 'mouse')) return
  let u = e
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit('touchEnd', u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const f = go(),
    d = f - n.touchStartTime
  if (t.allowClick) {
    const v = u.path || (u.composedPath && u.composedPath())
    t.updateClickedSlide((v && v[0]) || u.target),
      t.emit('tap click', u),
      d < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', u)
  }
  if (
    ((n.lastClickTime = go()),
    Ma(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      l.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let h
  if (
    (i.followFinger
      ? (h = o ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    i.cssMode)
  )
    return
  if (t.params.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  let g = 0,
    y = t.slidesSizesGrid[0]
  for (
    let v = 0;
    v < s.length;
    v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const w = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof s[v + w] < 'u'
      ? h >= s[v] && h < s[v + w] && ((g = v), (y = s[v + w] - s[v]))
      : h >= s[v] && ((g = v), (y = s[s.length - 1] - s[s.length - 2]))
  }
  let x = null,
    E = null
  i.rewind &&
    (t.isBeginning
      ? (E =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (x = 0))
  const c = (h - s[g]) / y,
    p = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
  if (d > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (c >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? x : g + p)
        : t.slideTo(g)),
      t.swipeDirection === 'prev' &&
        (c > 1 - i.longSwipesRatio
          ? t.slideTo(g + p)
          : E !== null && c < 0 && Math.abs(c) > i.longSwipesRatio
          ? t.slideTo(E)
          : t.slideTo(g))
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(g + p)
        : t.slideTo(g)
      : (t.swipeDirection === 'next' && t.slideTo(x !== null ? x : g + p),
        t.swipeDirection === 'prev' && t.slideTo(E !== null ? E : g))
  }
}
function Cd() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    o = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const s = o && t.loop
  ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !s
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
}
function P1(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function j1() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e
  if (!r) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let i
  const l = e.maxTranslate() - e.minTranslate()
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
function _1(e) {
  const t = this
  Bl(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
let kd = !1
function N1() {}
const Rh = (e, t) => {
  const n = Xt(),
    { params: r, el: i, wrapperEl: l, device: o } = e,
    s = !!r.nested,
    a = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t
  i[a]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[a]('pointermove', e.onTouchMove, { passive: !1, capture: s }),
    n[a]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[a]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerleave', e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]('click', e.onClick, !0),
    r.cssMode && l[a]('scroll', e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Cd,
          !0,
        )
      : e[u]('observerUpdate', Cd, !0),
    i[a]('load', e.onLoad, { capture: !0 })
}
function L1() {
  const e = this,
    t = Xt(),
    { params: n } = e
  ;(e.onTouchStart = T1.bind(e)),
    (e.onTouchMove = C1.bind(e)),
    (e.onTouchEnd = k1.bind(e)),
    n.cssMode && (e.onScroll = j1.bind(e)),
    (e.onClick = P1.bind(e)),
    (e.onLoad = _1.bind(e)),
    kd || (t.addEventListener('touchstart', N1), (kd = !0)),
    Rh(e, 'on')
}
function M1() {
  Rh(this, 'off')
}
const R1 = { attachEvents: L1, detachEvents: M1 },
  Pd = (e, t) => e.grid && t.grid && t.grid.rows > 1
function O1() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints
  if (!l || (l && Object.keys(l).length === 0)) return
  const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el)
  if (!o || e.currentBreakpoint === o) return
  const a = (o in l ? l[o] : void 0) || e.originalParams,
    u = Pd(e, r),
    f = Pd(e, a),
    d = r.enabled
  u && !f
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !u &&
      f &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === 'column') ||
        (!a.grid.fill && r.grid.fill === 'column')) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach(x => {
      const E = r[x] && r[x].enabled,
        c = a[x] && a[x].enabled
      E && !c && e[x].disable(), !E && c && e[x].enable()
    })
  const h = a.direction && a.direction !== r.direction,
    g = r.loop && (a.slidesPerView !== r.slidesPerView || h)
  h && n && e.changeDirection(), st(e.params, a)
  const y = e.params.enabled
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    d && !y ? e.disable() : !d && y && e.enable(),
    (e.currentBreakpoint = o),
    e.emit('_beforeBreakpoint', a),
    g && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit('breakpoint', a)
}
function z1(e, t = 'window', n) {
  if (!e || (t === 'container' && !n)) return
  let r = !1
  const i = ht(),
    l = t === 'window' ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map(s => {
      if (typeof s == 'string' && s.indexOf('@') === 0) {
        const a = parseFloat(s.substr(1))
        return { value: l * a, point: s }
      }
      return { value: s, point: s }
    })
  o.sort((s, a) => parseInt(s.value, 10) - parseInt(a.value, 10))
  for (let s = 0; s < o.length; s += 1) {
    const { point: a, value: u } = o[s]
    t === 'window'
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a)
  }
  return r || 'max'
}
const b1 = { setBreakpoint: O1, getBreakpoint: z1 }
function A1(e, t) {
  const n = []
  return (
    e.forEach(r => {
      typeof r == 'object'
        ? Object.keys(r).forEach(i => {
            r[i] && n.push(t + i)
          })
        : typeof r == 'string' && n.push(t + r)
    }),
    n
  )
}
function D1() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    o = A1(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column',
        },
        { android: l.android },
        { ios: l.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...o), i.classList.add(...t), e.emitContainerClasses()
}
function I1() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
const F1 = { addClasses: D1, removeClasses: I1 }
function $1() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2
    e.isLocked = e.size > l
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
const B1 = { checkOverflow: $1 },
  jd = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function U1(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      l = r[i]
    if (typeof l != 'object' || l === null) {
      st(t, r)
      return
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && 'enabled' in l))
    ) {
      st(t, r)
      return
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      st(t, r)
  }
}
const Ls = {
    eventsEmitter: Fy,
    update: qy,
    translate: n1,
    transition: o1,
    slide: h1,
    loop: y1,
    grabCursor: S1,
    events: R1,
    breakpoints: b1,
    checkOverflow: B1,
    classes: F1,
  },
  Ms = {}
let Gi = class Zt {
  constructor(...t) {
    let n, r
    t.length === 1 &&
    t[0].constructor &&
    Object.prototype.toString.call(t[0]).slice(8, -1) === 'Object'
      ? (r = t[0])
      : ([n, r] = t),
      r || (r = {}),
      (r = st({}, r)),
      n && !r.el && (r.el = n)
    const i = Xt()
    if (
      r.el &&
      typeof r.el == 'string' &&
      i.querySelectorAll(r.el).length > 1
    ) {
      const a = []
      return (
        i.querySelectorAll(r.el).forEach(u => {
          const f = st({}, r, { el: u })
          a.push(new Zt(f))
        }),
        a
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Lh()),
      (l.device = zy({ userAgent: r.userAgent })),
      (l.browser = Ay()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      r.modules && Array.isArray(r.modules) && l.modules.push(...r.modules)
    const o = {}
    l.modules.forEach(a => {
      a({
        params: r,
        swiper: l,
        extendParams: U1(r, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const s = st({}, jd, o)
    return (
      (l.params = st({}, s, Ms, r)),
      (l.originalParams = st({}, l.params)),
      (l.passedParams = st({}, r)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach(a => {
          l.on(a, l.params.on[a])
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: n,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === 'horizontal'
        },
        isVertical() {
          return l.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit('_swiper'),
      l.params.init && l.init(),
      l
    )
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Ht(n, `.${r.slideClass}, swiper-slide`),
      l = Sd(i[0])
    return Sd(t) - l
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        n => n.getAttribute('data-swiper-slide-index') * 1 === t,
      )[0],
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t
    t.slides = Ht(n, `.${r.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'))
  }
  disable() {
    const t = this
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'))
  }
  setProgress(t, n) {
    const r = this
    t = Math.min(Math.max(t, 0), 1)
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i
    r.translateTo(o, typeof n > 'u' ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(' ')
      .filter(
        r =>
          r.indexOf('swiper') === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      )
    t.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            r =>
              r.indexOf('swiper-slide') === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(' ')
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach(r => {
      const i = t.getSlideClasses(r)
      n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i)
    }),
      t.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(t = 'current', n = !1) {
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: o,
        slidesSizesGrid: s,
        size: a,
        activeIndex: u,
      } = r
    let f = 1
    if (i.centeredSlides) {
      let d = l[u].swiperSlideSize,
        h
      for (let g = u + 1; g < l.length; g += 1)
        l[g] && !h && ((d += l[g].swiperSlideSize), (f += 1), d > a && (h = !0))
      for (let g = u - 1; g >= 0; g -= 1)
        l[g] && !h && ((d += l[g].swiperSlideSize), (f += 1), d > a && (h = !0))
    } else if (t === 'current')
      for (let d = u + 1; d < l.length; d += 1)
        (n ? o[d] + s[d] - o[u] < a : o[d] - o[u] < a) && (f += 1)
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (f += 1)
    return f
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: r } = t
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
        o.complete && Bl(t, o)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        s = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
      t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let l
    if (t.params.freeMode && t.params.freeMode.enabled)
      i(), t.params.autoHeight && t.updateAutoHeight()
    else {
      if (
        (t.params.slidesPerView === 'auto' || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
      ) {
        const o =
          t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides
        l = t.slideTo(o.length - 1, 0, !1, !0)
      } else l = t.slideTo(t.activeIndex, 0, !1, !0)
      l || i()
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction
    return (
      t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
      t === i ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach(l => {
          t === 'vertical' ? (l.style.width = '') : (l.style.height = '')
        }),
        r.emit('changeDirection'),
        n && r.update()),
      r
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let r = t || n.params.el
    if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1
    ;(r.swiper = n), r.shadowEl && (n.isElement = !0)
    const i = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Ht(r, i())[0])()
    return (
      !o &&
        n.params.createElements &&
        ((o = Iu('div', n.params.wrapperClass)),
        r.append(o),
        Ht(r, `.${n.params.slideClass}`).forEach(s => {
          o.append(s)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl: n.isElement ? r : o,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || kn(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || kn(r, 'direction') === 'rtl'),
        wrongRTL: kn(o, 'display') === '-webkit-box',
      }),
      !0
    )
  }
  init(t) {
    const n = this
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit('beforeInit'),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach(i => {
          i.complete
            ? Bl(n, i)
            : i.addEventListener('load', l => {
                Bl(n, l.target)
              })
        }),
        Ra(n),
        (n.initialized = !0),
        Ra(n),
        n.emit('init'),
        n.emit('afterInit')),
      n
    )
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, el: l, wrapperEl: o, slides: s } = r
    return (
      typeof r.params > 'u' ||
        r.destroyed ||
        (r.emit('beforeDestroy'),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute('style'),
          o.removeAttribute('style'),
          s &&
            s.length &&
            s.forEach(a => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                a.removeAttribute('style'),
                a.removeAttribute('data-swiper-slide-index')
            })),
        r.emit('destroy'),
        Object.keys(r.eventsListeners).forEach(a => {
          r.off(a)
        }),
        t !== !1 && ((r.el.swiper = null), ky(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    st(Ms, t)
  }
  static get extendedDefaults() {
    return Ms
  }
  static get defaults() {
    return jd
  }
  static installModule(t) {
    Zt.prototype.__modules__ || (Zt.prototype.__modules__ = [])
    const n = Zt.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach(n => Zt.installModule(n)), Zt)
      : (Zt.installModule(t), Zt)
  }
}
Object.keys(Ls).forEach(e => {
  Object.keys(Ls[e]).forEach(t => {
    Gi.prototype[t] = Ls[e][t]
  })
})
Gi.use([Dy, Iy])
function V1(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach(i => {
        if (!n[i] && n.auto === !0) {
          let l = Ht(e.el, `.${r[i]}`)[0]
          l || ((l = Iu('div', r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l)
        }
      }),
    n
  )
}
function H1({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null })
  const i = y => (Array.isArray(y) || (y = [y].filter(x => !!x)), y)
  function l(y) {
    let x
    return y &&
      typeof y == 'string' &&
      e.isElement &&
      ((x = e.el.shadowRoot.querySelector(y)), x)
      ? x
      : (y &&
          (typeof y == 'string' && (x = [...document.querySelectorAll(y)]),
          e.params.uniqueNavElements &&
            typeof y == 'string' &&
            x.length > 1 &&
            e.el.querySelectorAll(y).length === 1 &&
            (x = e.el.querySelector(y))),
        y && !x ? y : x)
  }
  function o(y, x) {
    const E = e.params.navigation
    ;(y = i(y)),
      y.forEach(c => {
        c &&
          (c.classList[x ? 'add' : 'remove'](...E.disabledClass.split(' ')),
          c.tagName === 'BUTTON' && (c.disabled = x),
          e.params.watchOverflow &&
            e.enabled &&
            c.classList[e.isLocked ? 'add' : 'remove'](E.lockClass))
      })
  }
  function s() {
    const { nextEl: y, prevEl: x } = e.navigation
    if (e.params.loop) {
      o(x, !1), o(y, !1)
      return
    }
    o(x, e.isBeginning && !e.params.rewind), o(y, e.isEnd && !e.params.rewind)
  }
  function a(y) {
    y.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r('navigationPrev'))
  }
  function u(y) {
    y.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r('navigationNext'))
  }
  function f() {
    const y = e.params.navigation
    if (
      ((e.params.navigation = V1(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
      )),
      !(y.nextEl || y.prevEl))
    )
      return
    let x = l(y.nextEl),
      E = l(y.prevEl)
    Object.assign(e.navigation, { nextEl: x, prevEl: E }),
      (x = i(x)),
      (E = i(E))
    const c = (p, v) => {
      p && p.addEventListener('click', v === 'next' ? u : a),
        !e.enabled && p && p.classList.add(...y.lockClass.split(' '))
    }
    x.forEach(p => c(p, 'next')), E.forEach(p => c(p, 'prev'))
  }
  function d() {
    let { nextEl: y, prevEl: x } = e.navigation
    ;(y = i(y)), (x = i(x))
    const E = (c, p) => {
      c.removeEventListener('click', p === 'next' ? u : a),
        c.classList.remove(...e.params.navigation.disabledClass.split(' '))
    }
    y.forEach(c => E(c, 'next')), x.forEach(c => E(c, 'prev'))
  }
  n('init', () => {
    e.params.navigation.enabled === !1 ? g() : (f(), s())
  }),
    n('toEdge fromEdge lock unlock', () => {
      s()
    }),
    n('destroy', () => {
      d()
    }),
    n('enable disable', () => {
      let { nextEl: y, prevEl: x } = e.navigation
      ;(y = i(y)),
        (x = i(x)),
        [...y, ...x]
          .filter(E => !!E)
          .forEach(E =>
            E.classList[e.enabled ? 'remove' : 'add'](
              e.params.navigation.lockClass,
            ),
          )
    }),
    n('click', (y, x) => {
      let { nextEl: E, prevEl: c } = e.navigation
      ;(E = i(E)), (c = i(c))
      const p = x.target
      if (e.params.navigation.hideOnClick && !c.includes(p) && !E.includes(p)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === p || e.pagination.el.contains(p))
        )
          return
        let v
        E.length
          ? (v = E[0].classList.contains(e.params.navigation.hiddenClass))
          : c.length &&
            (v = c[0].classList.contains(e.params.navigation.hiddenClass)),
          r(v === !0 ? 'navigationShow' : 'navigationHide'),
          [...E, ...c]
            .filter(w => !!w)
            .forEach(w => w.classList.toggle(e.params.navigation.hiddenClass))
      }
    })
  const h = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(' '),
      ),
        f(),
        s()
    },
    g = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(' '),
      ),
        d()
    }
  Object.assign(e.navigation, {
    enable: h,
    disable: g,
    update: s,
    init: f,
    destroy: d,
  })
}
function W1({ swiper: e, extendParams: t, on: n, emit: r, params: i }) {
  ;(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    })
  let l,
    o,
    s = i && i.autoplay ? i.autoplay.delay : 3e3,
    a = i && i.autoplay ? i.autoplay.delay : 3e3,
    u,
    f = new Date().getTime,
    d,
    h,
    g,
    y,
    x,
    E
  function c(I) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (I.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener('transitionend', c), P()))
  }
  const p = () => {
      if (e.destroyed || !e.autoplay.running) return
      e.autoplay.paused ? (d = !0) : d && ((a = u), (d = !1))
      const I = e.autoplay.paused ? u : f + a - new Date().getTime()
      ;(e.autoplay.timeLeft = I),
        r('autoplayTimeLeft', I, I / s),
        (o = requestAnimationFrame(() => {
          p()
        }))
    },
    v = () => {
      let I
      return (
        e.virtual && e.params.virtual.enabled
          ? (I = e.slides.filter(M =>
              M.classList.contains('swiper-slide-active'),
            )[0])
          : (I = e.slides[e.activeIndex]),
        I ? parseInt(I.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    w = I => {
      if (e.destroyed || !e.autoplay.running) return
      cancelAnimationFrame(o), p()
      let K = typeof I > 'u' ? e.params.autoplay.delay : I
      ;(s = e.params.autoplay.delay), (a = e.params.autoplay.delay)
      const M = v()
      !Number.isNaN(M) &&
        M > 0 &&
        typeof I > 'u' &&
        ((K = M), (s = M), (a = M)),
        (u = K)
      const A = e.params.speed,
        B = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(A, !0, !0), r('autoplay'))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, A, !0, !0), r('autoplay'))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(A, !0, !0), r('autoplay'))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, A, !0, !0), r('autoplay')),
            e.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                w()
              })))
        }
      return (
        K > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              B()
            }, K)))
          : requestAnimationFrame(() => {
              B()
            }),
        K
      )
    },
    T = () => {
      ;(e.autoplay.running = !0), w(), r('autoplayStart')
    },
    C = () => {
      ;(e.autoplay.running = !1),
        clearTimeout(l),
        cancelAnimationFrame(o),
        r('autoplayStop')
    },
    _ = (I, K) => {
      if (e.destroyed || !e.autoplay.running) return
      clearTimeout(l), I || (E = !0)
      const M = () => {
        r('autoplayPause'),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener('transitionend', c)
            : P()
      }
      if (((e.autoplay.paused = !0), K)) {
        x && (u = e.params.autoplay.delay), (x = !1), M()
        return
      }
      ;(u = (u || e.params.autoplay.delay) - (new Date().getTime() - f)),
        !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), M())
    },
    P = () => {
      ;(e.isEnd && u < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((f = new Date().getTime()),
        E ? ((E = !1), w(u)) : w(),
        (e.autoplay.paused = !1),
        r('autoplayResume'))
    },
    R = () => {
      if (e.destroyed || !e.autoplay.running) return
      const I = Xt()
      I.visibilityState === 'hidden' && ((E = !0), _(!0)),
        I.visibilityState === 'visible' && P()
    },
    D = I => {
      I.pointerType === 'mouse' && ((E = !0), _(!0))
    },
    L = I => {
      I.pointerType === 'mouse' && e.autoplay.paused && P()
    },
    O = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener('pointerenter', D),
        e.el.addEventListener('pointerleave', L))
    },
    $ = () => {
      e.el.removeEventListener('pointerenter', D),
        e.el.removeEventListener('pointerleave', L)
    },
    X = () => {
      Xt().addEventListener('visibilitychange', R)
    },
    q = () => {
      Xt().removeEventListener('visibilitychange', R)
    }
  n('init', () => {
    e.params.autoplay.enabled && (O(), X(), (f = new Date().getTime()), T())
  }),
    n('destroy', () => {
      $(), q(), e.autoplay.running && C()
    }),
    n('beforeTransitionStart', (I, K, M) => {
      e.destroyed ||
        !e.autoplay.running ||
        (M || !e.params.autoplay.disableOnInteraction ? _(!0, !0) : C())
    }),
    n('sliderFirstMove', () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          C()
          return
        }
        ;(h = !0),
          (g = !1),
          (E = !1),
          (y = setTimeout(() => {
            ;(E = !0), (g = !0), _(!0)
          }, 200))
      }
    }),
    n('touchEnd', () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if (
          (clearTimeout(y),
          clearTimeout(l),
          e.params.autoplay.disableOnInteraction)
        ) {
          ;(g = !1), (h = !1)
          return
        }
        g && e.params.cssMode && P(), (g = !1), (h = !1)
      }
    }),
    n('slideChange', () => {
      e.destroyed || !e.autoplay.running || (x = !0)
    }),
    Object.assign(e.autoplay, { start: T, stop: C, pause: _, resume: P })
}
function G1(e) {
  const {
    effect: t,
    swiper: n,
    on: r,
    setTranslate: i,
    setTransition: l,
    overwriteParams: o,
    perspective: s,
    recreateShadows: a,
    getEffectParams: u,
  } = e
  r('beforeInit', () => {
    if (n.params.effect !== t) return
    n.classNames.push(`${n.params.containerModifierClass}${t}`),
      s && s() && n.classNames.push(`${n.params.containerModifierClass}3d`)
    const d = o ? o() : {}
    Object.assign(n.params, d), Object.assign(n.originalParams, d)
  }),
    r('setTranslate', () => {
      n.params.effect === t && i()
    }),
    r('setTransition', (d, h) => {
      n.params.effect === t && l(h)
    }),
    r('transitionEnd', () => {
      if (n.params.effect === t && a) {
        if (!u || !u().slideShadows) return
        n.slides.forEach(d => {
          d.querySelectorAll(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
          ).forEach(h => h.remove())
        }),
          a()
      }
    })
  let f
  r('virtualUpdate', () => {
    n.params.effect === t &&
      (n.slides.length || (f = !0),
      requestAnimationFrame(() => {
        f && n.slides && n.slides.length && (i(), (f = !1))
      }))
  })
}
function X1(e, t) {
  const n = Du(t)
  return (
    n !== t &&
      ((n.style.backfaceVisibility = 'hidden'),
      (n.style['-webkit-backface-visibility'] = 'hidden')),
    n
  )
}
function _d(e, t, n) {
  const r = `swiper-slide-shadow${n ? `-${n}` : ''}`,
    i = Du(t)
  let l = i.querySelector(`.${r}`)
  return (
    l ||
      ((l = Iu('div', `swiper-slide-shadow${n ? `-${n}` : ''}`)), i.append(l)),
    l
  )
}
function Q1({ swiper: e, extendParams: t, on: n }) {
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    G1({
      effect: 'coverflow',
      swiper: e,
      on: n,
      setTranslate: () => {
        const { width: l, height: o, slides: s, slidesSizesGrid: a } = e,
          u = e.params.coverflowEffect,
          f = e.isHorizontal(),
          d = e.translate,
          h = f ? -d + l / 2 : -d + o / 2,
          g = f ? u.rotate : -u.rotate,
          y = u.depth
        for (let x = 0, E = s.length; x < E; x += 1) {
          const c = s[x],
            p = a[x],
            v = c.swiperSlideOffset,
            w = (h - v - p / 2) / p,
            T = typeof u.modifier == 'function' ? u.modifier(w) : w * u.modifier
          let C = f ? g * T : 0,
            _ = f ? 0 : g * T,
            P = -y * Math.abs(T),
            R = u.stretch
          typeof R == 'string' &&
            R.indexOf('%') !== -1 &&
            (R = (parseFloat(u.stretch) / 100) * p)
          let D = f ? 0 : R * T,
            L = f ? R * T : 0,
            O = 1 - (1 - u.scale) * Math.abs(T)
          Math.abs(L) < 0.001 && (L = 0),
            Math.abs(D) < 0.001 && (D = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(_) < 0.001 && (_ = 0),
            Math.abs(O) < 0.001 && (O = 0)
          const $ = `translate3d(${L}px,${D}px,${P}px)  rotateX(${_}deg) rotateY(${C}deg) scale(${O})`,
            X = X1(u, c)
          if (
            ((X.style.transform = $),
            (c.style.zIndex = -Math.abs(Math.round(T)) + 1),
            u.slideShadows)
          ) {
            let q = f
                ? c.querySelector('.swiper-slide-shadow-left')
                : c.querySelector('.swiper-slide-shadow-top'),
              I = f
                ? c.querySelector('.swiper-slide-shadow-right')
                : c.querySelector('.swiper-slide-shadow-bottom')
            q || (q = _d(u, c, f ? 'left' : 'top')),
              I || (I = _d(u, c, f ? 'right' : 'bottom')),
              q && (q.style.opacity = T > 0 ? T : 0),
              I && (I.style.opacity = -T > 0 ? -T : 0)
          }
        }
      },
      setTransition: l => {
        e.slides
          .map(s => Du(s))
          .forEach(s => {
            ;(s.style.transitionDuration = `${l}ms`),
              s
                .querySelectorAll(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                )
                .forEach(a => {
                  a.style.transitionDuration = `${l}ms`
                })
          })
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    })
}
function ur(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function Pn(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter(r => n.indexOf(r) < 0)
    .forEach(r => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : ur(t[r]) && ur(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Pn(e[r], t[r])
        : (e[r] = t[r])
    })
}
function Oh(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > 'u' &&
    typeof e.navigation.prevEl > 'u'
  )
}
function zh(e = {}) {
  return e.pagination && typeof e.pagination.el > 'u'
}
function bh(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > 'u'
}
function Ah(e = '') {
  const t = e
      .split(' ')
      .map(r => r.trim())
      .filter(r => !!r),
    n = []
  return (
    t.forEach(r => {
      n.indexOf(r) < 0 && n.push(r)
    }),
    n.join(' ')
  )
}
function Y1(e = '') {
  return e
    ? e.includes('swiper-wrapper')
      ? e
      : `swiper-wrapper ${e}`
    : 'swiper-wrapper'
}
const Dh = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopedSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
]
function q1(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {}
  Pn(n, Gi.defaults),
    Pn(n, Gi.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1)
  const l = {},
    o = Dh.map(a => a.replace(/_/, '')),
    s = Object.assign({}, e)
  return (
    Object.keys(s).forEach(a => {
      typeof e[a] > 'u' ||
        (o.indexOf(a) >= 0
          ? ur(e[a])
            ? ((n[a] = {}), (i[a] = {}), Pn(n[a], e[a]), Pn(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == 'function'
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (l[a] = e[a]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach(a => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]
    }),
    { params: n, passedParams: i, rest: l, events: r }
  )
}
function K1(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  o,
) {
  Oh(o) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    zh(o) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    bh(o) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e)
}
function Z1(e, t, n, r, i) {
  const l = []
  if (!t) return l
  const o = a => {
    l.indexOf(a) < 0 && l.push(a)
  }
  if (n && r) {
    const a = r.map(i),
      u = n.map(i)
    a.join('') !== u.join('') && o('children'),
      r.length !== n.length && o('children')
  }
  return (
    Dh.filter(a => a[0] === '_')
      .map(a => a.replace(/_/, ''))
      .forEach(a => {
        if (a in e && a in t)
          if (ur(e[a]) && ur(t[a])) {
            const u = Object.keys(e[a]),
              f = Object.keys(t[a])
            u.length !== f.length
              ? o(a)
              : (u.forEach(d => {
                  e[a][d] !== t[a][d] && o(a)
                }),
                f.forEach(d => {
                  e[a][d] !== t[a][d] && o(a)
                }))
          } else e[a] !== t[a] && o(a)
      }),
    l
  )
}
function Ih(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  )
}
function Fh(e) {
  const t = []
  return (
    re.Children.toArray(e).forEach(n => {
      Ih(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Fh(n.props.children).forEach(r => t.push(r))
    }),
    t
  )
}
function J1(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    }
  return (
    re.Children.toArray(e).forEach(r => {
      if (Ih(r)) t.push(r)
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r)
      else if (r.props && r.props.children) {
        const i = Fh(r.props.children)
        i.length > 0 ? i.forEach(l => t.push(l)) : n['container-end'].push(r)
      } else n['container-end'].push(r)
    }),
    { slides: t, slots: n }
  )
}
function ex({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: l,
  scrollbarEl: o,
  paginationEl: s,
}) {
  const a = r.filter(
      P => P !== 'children' && P !== 'direction' && P !== 'wrapperClass',
    ),
    {
      params: u,
      pagination: f,
      navigation: d,
      scrollbar: h,
      virtual: g,
      thumbs: y,
    } = e
  let x, E, c, p, v, w, T, C
  r.includes('thumbs') &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (x = !0),
    r.includes('controller') &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (E = !0),
    r.includes('pagination') &&
      n.pagination &&
      (n.pagination.el || s) &&
      (u.pagination || u.pagination === !1) &&
      f &&
      !f.el &&
      (c = !0),
    r.includes('scrollbar') &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (p = !0),
    r.includes('navigation') &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (v = !0)
  const _ = P => {
    e[P] &&
      (e[P].destroy(),
      P === 'navigation'
        ? (e.isElement && (e[P].prevEl.remove(), e[P].nextEl.remove()),
          (u[P].prevEl = void 0),
          (u[P].nextEl = void 0),
          (e[P].prevEl = void 0),
          (e[P].nextEl = void 0))
        : (e.isElement && e[P].el.remove(),
          (u[P].el = void 0),
          (e[P].el = void 0)))
  }
  r.includes('loop') &&
    e.isElement &&
    (u.loop && !n.loop ? (w = !0) : !u.loop && n.loop ? (T = !0) : (C = !0)),
    a.forEach(P => {
      if (ur(u[P]) && ur(n[P]))
        Pn(u[P], n[P]),
          (P === 'navigation' || P === 'pagination' || P === 'scrollbar') &&
            'enabled' in n[P] &&
            !n[P].enabled &&
            _(P)
      else {
        const R = n[P]
        ;(R === !0 || R === !1) &&
        (P === 'navigation' || P === 'pagination' || P === 'scrollbar')
          ? R === !1 && _(P)
          : (u[P] = n[P])
      }
    }),
    a.includes('controller') &&
      !E &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes('children') &&
      t &&
      g &&
      u.virtual.enabled &&
      ((g.slides = t), g.update(!0)),
    r.includes('children') && t && u.loop && (C = !0),
    x && y.init() && y.update(!0),
    E && (e.controller.control = u.controller.control),
    c &&
      (e.isElement &&
        (!s || typeof s == 'string') &&
        ((s = document.createElement('div')),
        s.classList.add('swiper-pagination'),
        e.el.shadowEl.appendChild(s)),
      s && (u.pagination.el = s),
      f.init(),
      f.render(),
      f.update()),
    p &&
      (e.isElement &&
        (!o || typeof o == 'string') &&
        ((o = document.createElement('div')),
        o.classList.add('swiper-scrollbar'),
        e.el.shadowEl.appendChild(o)),
      o && (u.scrollbar.el = o),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    v &&
      (e.isElement &&
        ((!i || typeof i == 'string') &&
          ((i = document.createElement('div')),
          i.classList.add('swiper-button-next'),
          e.el.shadowEl.appendChild(i)),
        (!l || typeof l == 'string') &&
          ((l = document.createElement('div')),
          l.classList.add('swiper-button-prev'),
          e.el.shadowEl.appendChild(l))),
      i && (u.navigation.nextEl = i),
      l && (u.navigation.prevEl = l),
      d.init(),
      d.update()),
    r.includes('allowSlideNext') && (e.allowSlideNext = n.allowSlideNext),
    r.includes('allowSlidePrev') && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes('direction') && e.changeDirection(n.direction, !1),
    (w || C) && e.loopDestroy(),
    (T || C) && e.loopCreate(),
    e.update()
}
function tx(e, t, n) {
  if (!n) return null
  const r = f => {
      let d = f
      return f < 0 ? (d = t.length + f) : d >= t.length && (d = d - t.length), d
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: o } = n,
    s = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = []
  for (let f = s; f < a; f += 1) f >= l && f <= o && u.push(t[r(f)])
  return u.map((f, d) =>
    re.cloneElement(f, { swiper: e, style: i, key: `slide-${d}` }),
  )
}
const nx = e => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate())
}
function Ci(e, t) {
  return typeof window > 'u' ? j.useEffect(e, t) : j.useLayoutEffect(e, t)
}
const Nd = j.createContext(null),
  rx = j.createContext(null)
function Oa() {
  return (
    (Oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Oa.apply(this, arguments)
  )
}
const $h = j.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = 'div',
      wrapperTag: i = 'div',
      children: l,
      onSwiper: o,
      ...s
    } = e === void 0 ? {} : e,
    a = !1
  const [u, f] = j.useState('swiper'),
    [d, h] = j.useState(null),
    [g, y] = j.useState(!1),
    x = j.useRef(!1),
    E = j.useRef(null),
    c = j.useRef(null),
    p = j.useRef(null),
    v = j.useRef(null),
    w = j.useRef(null),
    T = j.useRef(null),
    C = j.useRef(null),
    _ = j.useRef(null),
    { params: P, passedParams: R, rest: D, events: L } = q1(s),
    { slides: O, slots: $ } = J1(l),
    X = () => {
      y(!g)
    }
  Object.assign(P.on, {
    _containerClasses(A, B) {
      f(B)
    },
  })
  const q = () => {
    Object.assign(P.on, L), (a = !0)
    const A = { ...P }
    if (
      (delete A.wrapperClass,
      (c.current = new Gi(A)),
      c.current.virtual && c.current.params.virtual.enabled)
    ) {
      c.current.virtual.slides = O
      const B = {
        cache: !1,
        slides: O,
        renderExternal: h,
        renderExternalUpdate: !1,
      }
      Pn(c.current.params.virtual, B), Pn(c.current.originalParams.virtual, B)
    }
  }
  E.current || q(), c.current && c.current.on('_beforeBreakpoint', X)
  const I = () => {
      a ||
        !L ||
        !c.current ||
        Object.keys(L).forEach(A => {
          c.current.on(A, L[A])
        })
    },
    K = () => {
      !L ||
        !c.current ||
        Object.keys(L).forEach(A => {
          c.current.off(A, L[A])
        })
    }
  j.useEffect(() => () => {
    c.current && c.current.off('_beforeBreakpoint', X)
  }),
    j.useEffect(() => {
      !x.current &&
        c.current &&
        (c.current.emitSlidesClasses(), (x.current = !0))
    }),
    Ci(() => {
      if ((t && (t.current = E.current), !!E.current))
        return (
          c.current.destroyed && q(),
          K1(
            {
              el: E.current,
              nextEl: w.current,
              prevEl: T.current,
              paginationEl: C.current,
              scrollbarEl: _.current,
              swiper: c.current,
            },
            P,
          ),
          o && o(c.current),
          () => {
            c.current && !c.current.destroyed && c.current.destroy(!0, !1)
          }
        )
    }, []),
    Ci(() => {
      I()
      const A = Z1(R, p.current, O, v.current, B => B.key)
      return (
        (p.current = R),
        (v.current = O),
        A.length &&
          c.current &&
          !c.current.destroyed &&
          ex({
            swiper: c.current,
            slides: O,
            passedParams: R,
            changedParams: A,
            nextEl: w.current,
            prevEl: T.current,
            scrollbarEl: _.current,
            paginationEl: C.current,
          }),
        () => {
          K()
        }
      )
    }),
    Ci(() => {
      nx(c.current)
    }, [d])
  function M() {
    return P.virtual
      ? tx(c.current, O, d)
      : O.map((A, B) =>
          re.cloneElement(A, { swiper: c.current, swiperSlideIndex: B }),
        )
  }
  return re.createElement(
    r,
    Oa({ ref: E, className: Ah(`${u}${n ? ` ${n}` : ''}`) }, D),
    re.createElement(
      rx.Provider,
      { value: c.current },
      $['container-start'],
      re.createElement(
        i,
        { className: Y1(P.wrapperClass) },
        $['wrapper-start'],
        M(),
        $['wrapper-end'],
      ),
      Oh(P) &&
        re.createElement(
          re.Fragment,
          null,
          re.createElement('div', { ref: T, className: 'swiper-button-prev' }),
          re.createElement('div', { ref: w, className: 'swiper-button-next' }),
        ),
      bh(P) &&
        re.createElement('div', { ref: _, className: 'swiper-scrollbar' }),
      zh(P) &&
        re.createElement('div', { ref: C, className: 'swiper-pagination' }),
      $['container-end'],
    ),
  )
})
$h.displayName = 'Swiper'
function za() {
  return (
    (za = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    za.apply(this, arguments)
  )
}
const Bt = j.forwardRef(function (e, t) {
  let {
    tag: n = 'div',
    children: r,
    className: i = '',
    swiper: l,
    zoom: o,
    lazy: s,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...f
  } = e === void 0 ? {} : e
  const d = j.useRef(null),
    [h, g] = j.useState('swiper-slide'),
    [y, x] = j.useState(!1)
  function E(w, T, C) {
    T === d.current && g(C)
  }
  Ci(() => {
    if (
      (typeof u < 'u' && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !l))
    ) {
      if (l.destroyed) {
        h !== 'swiper-slide' && g('swiper-slide')
        return
      }
      return (
        l.on('_slideClass', E),
        () => {
          l && l.off('_slideClass', E)
        }
      )
    }
  }),
    Ci(() => {
      l && d.current && !l.destroyed && g(l.getSlideClasses(d.current))
    }, [l])
  const c = {
      isActive: h.indexOf('swiper-slide-active') >= 0,
      isVisible: h.indexOf('swiper-slide-visible') >= 0,
      isPrev: h.indexOf('swiper-slide-prev') >= 0,
      isNext: h.indexOf('swiper-slide-next') >= 0,
    },
    p = () => (typeof r == 'function' ? r(c) : r),
    v = () => {
      x(!0)
    }
  return re.createElement(
    n,
    za(
      {
        ref: d,
        className: Ah(`${h}${i ? ` ${i}` : ''}`),
        'data-swiper-slide-index': a,
        onLoad: v,
      },
      f,
    ),
    o &&
      re.createElement(
        Nd.Provider,
        { value: c },
        re.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof o == 'number' ? o : void 0,
          },
          p(),
          s &&
            !y &&
            re.createElement('div', { className: 'swiper-lazy-preloader' }),
        ),
      ),
    !o &&
      re.createElement(
        Nd.Provider,
        { value: c },
        p(),
        s &&
          !y &&
          re.createElement('div', { className: 'swiper-lazy-preloader' }),
      ),
  )
})
Bt.displayName = 'SwiperSlide'
const Bh = () =>
    m.jsx(m.Fragment, {
      children: m.jsx('div', {
        className: 'swiper-cantainer',
        children: m.jsx('div', {
          className: 'swiper-mask',
          children: m.jsxs($h, {
            effect: 'coverflow',
            centeredSlides: !0,
            slidesPerView: 'auto',
            autoplay: {
              delay: 0,
              disableOnInteraction: !1,
              pauseOnMouseEnter: !0,
            },
            loop: !0,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
            speed: 800,
            modules: [Q1, H1, W1],
            className: ' ',
            children: [
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-2xl',
                  src: 'https://swiperjs.com/demos/images/nature-1.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-2.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-3.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-4.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-5.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-6.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-7.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-8.jpg',
                }),
              }),
              m.jsx(Bt, {
                className: 'w-80',
                children: m.jsx('img', {
                  className: 'rounded-xl',
                  src: 'https://swiperjs.com/demos/images/nature-9.jpg',
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  Zr = ({ children: e }) =>
    m.jsx('div', {
      className: 'mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8',
      children: e,
    })
Zr.propTypes = { children: se.node }
const Uo = ({ children: e }) =>
  m.jsx(m.Fragment, {
    children: m.jsx('div', {
      className: 'glass-frame',
      children: m.jsxs('div', {
        className: 'glass-frame-inner',
        children: [m.jsx('div', { className: 'starlight nth-child(1)' }), e],
      }),
    }),
  })
Uo.propTypes = { children: se.node }
const ix = '/assets/stars2-8a59f244.png',
  lx = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className: 'flex flex-col w-full min-h-screen',
        style: {
          backgroundImage: `url(${ix})`,
          backgroundColor: ' #030014 ',
          backgroundPosition: '50%',
        },
        children: [
          m.jsx('header', { children: m.jsx(ax, {}) }),
          m.jsx('main', {
            className: 'flex-1 h-full pb-32',
            children: m.jsx(I0, {}),
          }),
          m.jsx('footer', { children: m.jsx(fx, {}) }),
        ],
      }),
    }),
  ox = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className: 'w-full h-full relative ',
        children: [
          m.jsx('div', { className: 'starlight ', children: ' ' }),
          m.jsx('iframe', {
            className:
              'rounded-3xl mt-1 w-full focus:outline outline-2 outline-offset-1 outline-purple-600 h-full opacity-30 hover:opacity-90',
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.27043357381416!2d-76.58894000505933!3d2.455275784483576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3003994e25051b%3A0x297e3c2f1e2a15ea!2sCl.%2026B%20Nte.%20%234-24%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1ses!2sco!4v1685152245932!5m2!1ses!2sco',
            allowFullScreen: !0,
            loading: 'lazy',
            referrerPolicy: 'no-referrer-when-downgrade',
          }),
        ],
      }),
    }),
  Fu = ({ to: e, label: t }) =>
    m.jsx(m.Fragment, {
      children: m.jsx('li', {
        children: m.jsx(yh, { to: e, children: m.jsx('h3', { children: t }) }),
      }),
    })
Fu.propTypes = { to: se.string, label: se.string.isRequired }
const sx = () => {
    const e = [
      { to: '/', label: 'inicio' },
      { to: '/skills', label: 'habilidades' },
      { to: '/projects', label: 'proyectos' },
      { to: '/profile', label: 'perfil' },
      { to: '/contact', label: 'contactos' },
    ]
    return m.jsx(m.Fragment, {
      children: m.jsx('nav', {
        className: 'flex mx-10 my-5 items-center justify-between',
        children: m.jsx('div', {
          className: 'flex py-2 px-20 ',
          children: m.jsx('ul', {
            className:
              'flex gap-10 uppercase  font-bold text-sm tracking-widest',
            children: e.map(({ to: t, label: n }) =>
              m.jsx(Fu, { to: t, label: n }, n),
            ),
          }),
        }),
      }),
    })
  },
  Uh = () =>
    m.jsx(m.Fragment, {
      children: m.jsx('div', {
        className: 'flex',
        children: m.jsx(yh, {
          to: '/',
          children: m.jsx('h1', {
            className: 'font-nano text-2xl ',
            children: m.jsx('span', {
              className: 'bgText',
              children: 'ronald',
            }),
          }),
        }),
      }),
    }),
  ax = () => {
    const e = [
      { to: '/', label: 'inicio' },
      { to: '/skills', label: 'habilidades' },
      { to: '/projects', label: 'proyectos' },
      { to: '/profile', label: 'perfil' },
      { to: '/contact', label: 'contactos' },
    ]
    return m.jsx(m.Fragment, {
      children: m.jsxs('nav', {
        className: 'flex mx-10 my-5 items-center justify-between',
        children: [
          m.jsx('div', { className: 'flex ', children: m.jsx(Uh, {}) }),
          m.jsx('div', {
            className:
              'flex py-2 px-20 rounded-3xl border border-white-08 bg-white-02 ',
            children: m.jsx('ul', {
              className:
                'flex gap-20 uppercase text-white font-bold text-sm tracking-widest',
              children: e.map(({ to: t, label: n }) =>
                m.jsx(Fu, { to: t, label: n }, n),
              ),
            }),
          }),
          m.jsx('div', {
            className:
              'flex py-2 px-5 rounded-3xl border border-white-08 bg-white-02 ',
            children: m.jsx('button', {
              className: 'flex uppercase font-bold text-sm tracking-widest',
              children: 'Login',
            }),
          }),
        ],
      }),
    })
  },
  ux = '/assets/CV-3cb10305.pdf',
  cx = () => {
    const e = () => {
      const t = document.createElement('a')
      ;(t.href = ux), (t.download = 'ronaldjdev.pdf'), t.click()
    }
    return m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className: 'grid place-items-center font-poppins mx-auto ',
        children: [
          m.jsxs('div', {
            className: 'flex ',
            children: [
              'Hola, Soy ',
              ' ',
              m.jsx('span', {
                className: 'flex textFlux font-poppins font-bold',
                children: 'Ronald j Echeverry',
              }),
            ],
          }),
          m.jsx('div', {
            className: 'flex font-poppins textFlux',
            children: 'Desarrollador Web Full Stack',
          }),
          m.jsx('div', {
            className: 'flex text-center  font-inter mb-5',
            children:
              'Un apasionado por el codigo con años de experiencia en la creación de soluciones digitales de vanguardia. Si buscas un profesional comprometido con la excelencia y capaz de convertir tus ideas en realidad, has llegado al lugar correcto.',
          }),
          m.jsxs('div', {
            className: 'flex gap-10',
            children: [
              m.jsx(ho, { text: 'Contactame' }),
              m.jsx(ho, { text: 'Descargar CV', onClick: e }),
            ],
          }),
        ],
      }),
    })
  },
  dx = '/assets/portal2-d228e6d6.png',
  fx = () =>
    m.jsx(m.Fragment, {
      children: m.jsx('div', {
        className: 'relative flex flex-col items-center justify-center',
        children: m.jsx('div', {
          className: ' w-full rounded-3xl',
          style: {
            background: `url(${dx})`,
            backgroundPosition: 'bottom -105px center',
            backgroundSize: 'cover',
          },
          children: m.jsxs(Uo, {
            children: [
              m.jsxs('div', {
                className: 'flex flex-col justify-center items-center',
                children: [m.jsx(Uh, {}), m.jsx(sx, {})],
              }),
              m.jsxs('div', {
                className:
                  'font-inter text-sm font-light m-3 flex justify-center',
                children: [
                  m.jsx('p', { children: 'desing by: ' }),
                  m.jsx('span', {
                    className: 'font-bold bgText',
                    children: ' ronaldjdev ',
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  px = '/assets/black_hole-c3d7becf.webm'
var Vh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ld = re.createContext && re.createContext(Vh),
  An =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (An =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        An.apply(this, arguments)
      )
    },
  hx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]])
      return n
    }
function Hh(e) {
  return (
    e &&
    e.map(function (t, n) {
      return re.createElement(t.tag, An({ key: n }, t.attr), Hh(t.child))
    })
  )
}
function pn(e) {
  return function (t) {
    return re.createElement(mx, An({ attr: An({}, e.attr) }, t), Hh(e.child))
  }
}
function mx(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      l = e.title,
      o = hx(e, ['attr', 'size', 'title']),
      s = i || n.size || '1em',
      a
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      re.createElement(
        'svg',
        An(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          o,
          {
            className: a,
            style: An(An({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        l && re.createElement('title', null, l),
        e.children,
      )
    )
  }
  return Ld !== void 0
    ? re.createElement(Ld.Consumer, null, function (n) {
        return t(n)
      })
    : t(Vh)
}
function vx(e) {
  return pn({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z',
        },
      },
    ],
  })(e)
}
const gx = () =>
  m.jsx(m.Fragment, {
    children: m.jsxs('section', {
      id: 'hero-black-hole',
      className: 'hero',
      children: [
        m.jsx('div', {
          className: 'flex justify-center absolute md:inset-16 lg:inset-30',
          children: m.jsxs('div', {
            className: 'flex flex-col items-center',
            children: [
              m.jsx('div', {
                children: m.jsx(Eh, { icon: m.jsx(vx, { color: 'white' }) }),
              }),
              m.jsx(_e, {
                title: 'Tienes una gran idea en mente',
                subtitle: 'Discutamos lo que podemos lograr juntos',
              }),
            ],
          }),
        }),
        m.jsx('video', {
          className: 'object-cover',
          autoPlay: !0,
          loop: !0,
          src: px,
        }),
      ],
    }),
  })
function yx(e) {
  return pn({
    tag: 'svg',
    attr: { viewBox: '0 0 480 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z',
        },
      },
    ],
  })(e)
}
function xx(e) {
  return pn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
      },
    ],
  })(e)
}
function wx(e) {
  return pn({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z',
        },
      },
    ],
  })(e)
}
function Sx(e) {
  return pn({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
      },
      { tag: 'path', attr: { d: 'M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' } },
      {
        tag: 'path',
        attr: { d: 'M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5' },
      },
    ],
  })(e)
}
function Ex(e) {
  return pn({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
      },
      { tag: 'path', attr: { d: 'M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' } },
      {
        tag: 'path',
        attr: { d: 'M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5' },
      },
    ],
  })(e)
}
function Tx(e) {
  return pn({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      {
        tag: 'path',
        attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
      },
      { tag: 'path', attr: { d: 'M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z' } },
      { tag: 'path', attr: { d: 'M7.5 8h3v8l-2 -1' } },
      {
        tag: 'path',
        attr: {
          d: 'M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5',
        },
      },
    ],
  })(e)
}
const jn = () => {
    const e = [
      { icon: m.jsx(wx, {}), title: 'Python' },
      { icon: m.jsx(Tx, {}), title: 'Javascript' },
      { icon: m.jsx(Ex, {}), title: 'Html5' },
      { icon: m.jsx(Sx, {}), title: 'Css3' },
    ]
    return m.jsx(m.Fragment, {
      children: m.jsx('div', {
        className: 'flex justify-center w-96',
        children: e.map(({ icon: t, title: n }) =>
          m.jsx(
            'div',
            { className: 'm-3', children: m.jsx(Th, { icon: t, title: n }) },
            n,
          ),
        ),
      }),
    })
  },
  _e = ({ title: e, subtitle: t, size: n }) => {
    const r = 'text-xl md:text-5xl'
    return m.jsx(m.Fragment, {
      children: m.jsxs('div', {
        className: 'flex flex-col items-center mx-auto',
        children: [
          m.jsx('h1', {
            className: `m-1 text- text-center md:leading-[5rem] ${n || r}`,
            children: m.jsx('span', {
              className: 'bgText font-poppins font-semibold ',
              children: e,
            }),
          }),
          m.jsx('h1', {
            className:
              'text-white text-center font-thin font-inter text- md:text-xl',
            children: t,
          }),
        ],
      }),
    })
  }
_e.propTypes = {
  title: se.string.isRequired,
  subtitle: se.string,
  size: se.string,
}
var Wh = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var l = arguments[i]
        if (l) {
          var o = typeof l
          if (o === 'string' || o === 'number') r.push(l)
          else if (Array.isArray(l)) {
            if (l.length) {
              var s = n.apply(null, l)
              s && r.push(s)
            }
          } else if (o === 'object') {
            if (
              l.toString !== Object.prototype.toString &&
              !l.toString.toString().includes('[native code]')
            ) {
              r.push(l.toString())
              continue
            }
            for (var a in l) t.call(l, a) && l[a] && r.push(a)
          }
        }
      }
      return r.join(' ')
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(Wh)
var Cx = Wh.exports
const Md = Ia(Cx)
function tl(e) {
  return e.split('-')[1]
}
function $u(e) {
  return e === 'y' ? 'height' : 'width'
}
function tr(e) {
  return e.split('-')[0]
}
function nl(e) {
  return ['top', 'bottom'].includes(tr(e)) ? 'x' : 'y'
}
function Rd(e, t, n) {
  let { reference: r, floating: i } = e
  const l = r.x + r.width / 2 - i.width / 2,
    o = r.y + r.height / 2 - i.height / 2,
    s = nl(t),
    a = $u(s),
    u = r[a] / 2 - i[a] / 2,
    f = s === 'x'
  let d
  switch (tr(t)) {
    case 'top':
      d = { x: l, y: r.y - i.height }
      break
    case 'bottom':
      d = { x: l, y: r.y + r.height }
      break
    case 'right':
      d = { x: r.x + r.width, y: o }
      break
    case 'left':
      d = { x: r.x - i.width, y: o }
      break
    default:
      d = { x: r.x, y: r.y }
  }
  switch (tl(t)) {
    case 'start':
      d[s] -= u * (n && f ? -1 : 1)
      break
    case 'end':
      d[s] += u * (n && f ? -1 : 1)
  }
  return d
}
const kx = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: i = 'absolute',
      middleware: l = [],
      platform: o,
    } = n,
    s = l.filter(Boolean),
    a = await (o.isRTL == null ? void 0 : o.isRTL(t))
  let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: f, y: d } = Rd(u, r, a),
    h = r,
    g = {},
    y = 0
  for (let x = 0; x < s.length; x++) {
    const { name: E, fn: c } = s[x],
      {
        x: p,
        y: v,
        data: w,
        reset: T,
      } = await c({
        x: f,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: i,
        middlewareData: g,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      })
    ;(f = p ?? f),
      (d = v ?? d),
      (g = { ...g, [E]: { ...g[E], ...w } }),
      T &&
        y <= 50 &&
        (y++,
        typeof T == 'object' &&
          (T.placement && (h = T.placement),
          T.rects &&
            (u =
              T.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : T.rects),
          ({ x: f, y: d } = Rd(u, h, a))),
        (x = -1))
  }
  return { x: f, y: d, placement: h, strategy: i, middlewareData: g }
}
function Gh(e) {
  return typeof e != 'number'
    ? (function (t) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...t }
      })(e)
    : { top: e, right: e, bottom: e, left: e }
}
function yo(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  }
}
async function Xh(e, t) {
  var n
  t === void 0 && (t = {})
  const { x: r, y: i, platform: l, rects: o, elements: s, strategy: a } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: f = 'viewport',
      elementContext: d = 'floating',
      altBoundary: h = !1,
      padding: g = 0,
    } = t,
    y = Gh(g),
    x = s[h ? (d === 'floating' ? 'reference' : 'floating') : d],
    E = yo(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: a,
      }),
    ),
    c = d === 'floating' ? { ...o.floating, x: r, y: i } : o.reference,
    p = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(s.floating)),
    v = ((await (l.isElement == null ? void 0 : l.isElement(p))) &&
      (await (l.getScale == null ? void 0 : l.getScale(p)))) || { x: 1, y: 1 },
    w = yo(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: c,
            offsetParent: p,
            strategy: a,
          })
        : c,
    )
  return {
    top: (E.top - w.top + y.top) / v.y,
    bottom: (w.bottom - E.bottom + y.bottom) / v.y,
    left: (E.left - w.left + y.left) / v.x,
    right: (w.right - E.right + y.right) / v.x,
  }
}
const Px = Math.min,
  jx = Math.max
function ba(e, t, n) {
  return jx(e, Px(t, n))
}
const _x = e => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { element: n, padding: r = 0 } = e || {},
        { x: i, y: l, placement: o, rects: s, platform: a, elements: u } = t
      if (n == null) return {}
      const f = Gh(r),
        d = { x: i, y: l },
        h = nl(o),
        g = $u(h),
        y = await a.getDimensions(n),
        x = h === 'y',
        E = x ? 'top' : 'left',
        c = x ? 'bottom' : 'right',
        p = x ? 'clientHeight' : 'clientWidth',
        v = s.reference[g] + s.reference[h] - d[h] - s.floating[g],
        w = d[h] - s.reference[h],
        T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n))
      let C = T ? T[p] : 0
      ;(C && (await (a.isElement == null ? void 0 : a.isElement(T)))) ||
        (C = u.floating[p] || s.floating[g])
      const _ = v / 2 - w / 2,
        P = f[E],
        R = C - y[g] - f[c],
        D = C / 2 - y[g] / 2 + _,
        L = ba(P, D, R),
        O =
          tl(o) != null &&
          D != L &&
          s.reference[g] / 2 - (D < P ? f[E] : f[c]) - y[g] / 2 < 0
      return {
        [h]: d[h] - (O ? (D < P ? P - D : R - D) : 0),
        data: { [h]: L, centerOffset: D - L },
      }
    },
  }),
  Nx = ['top', 'right', 'bottom', 'left']
Nx.reduce((e, t) => e.concat(t, t + '-start', t + '-end'), [])
const Lx = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function xo(e) {
  return e.replace(/left|right|bottom|top/g, t => Lx[t])
}
function Mx(e, t, n) {
  n === void 0 && (n = !1)
  const r = tl(e),
    i = nl(e),
    l = $u(i)
  let o =
    i === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
      ? 'bottom'
      : 'top'
  return (
    t.reference[l] > t.floating[l] && (o = xo(o)), { main: o, cross: xo(o) }
  )
}
const Rx = { start: 'end', end: 'start' }
function Rs(e) {
  return e.replace(/start|end/g, t => Rx[t])
}
const Ox = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n
          const {
              placement: r,
              middlewareData: i,
              rects: l,
              initialPlacement: o,
              platform: s,
              elements: a,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: h = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: y = !0,
              ...x
            } = e,
            E = tr(r),
            c = tr(o) === o,
            p = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
            v =
              d ||
              (c || !y
                ? [xo(o)]
                : (function (L) {
                    const O = xo(L)
                    return [Rs(L), O, Rs(O)]
                  })(o))
          d ||
            g === 'none' ||
            v.push(
              ...(function (L, O, $, X) {
                const q = tl(L)
                let I = (function (K, M, A) {
                  const B = ['left', 'right'],
                    Q = ['right', 'left'],
                    ne = ['top', 'bottom'],
                    xe = ['bottom', 'top']
                  switch (K) {
                    case 'top':
                    case 'bottom':
                      return A ? (M ? Q : B) : M ? B : Q
                    case 'left':
                    case 'right':
                      return M ? ne : xe
                    default:
                      return []
                  }
                })(tr(L), $ === 'start', X)
                return (
                  q &&
                    ((I = I.map(K => K + '-' + q)),
                    O && (I = I.concat(I.map(Rs)))),
                  I
                )
              })(o, y, g, p),
            )
          const w = [o, ...v],
            T = await Xh(t, x),
            C = []
          let _ = ((n = i.flip) == null ? void 0 : n.overflows) || []
          if ((u && C.push(T[E]), f)) {
            const { main: L, cross: O } = Mx(r, l, p)
            C.push(T[L], T[O])
          }
          if (
            ((_ = [..._, { placement: r, overflows: C }]),
            !C.every(L => L <= 0))
          ) {
            var P, R
            const L = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1,
              O = w[L]
            if (O)
              return {
                data: { index: L, overflows: _ },
                reset: { placement: O },
              }
            let $ =
              (R = _.filter(X => X.overflows[0] <= 0).sort(
                (X, q) => X.overflows[1] - q.overflows[1],
              )[0]) == null
                ? void 0
                : R.placement
            if (!$)
              switch (h) {
                case 'bestFit': {
                  var D
                  const X =
                    (D = _.map(q => [
                      q.placement,
                      q.overflows.filter(I => I > 0).reduce((I, K) => I + K, 0),
                    ]).sort((q, I) => q[1] - I[1])[0]) == null
                      ? void 0
                      : D[0]
                  X && ($ = X)
                  break
                }
                case 'initialPlacement':
                  $ = o
              }
            if (r !== $) return { reset: { placement: $ } }
          }
          return {}
        },
      }
    )
  },
  zx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            i = await (async function (l, o) {
              const { placement: s, platform: a, elements: u } = l,
                f = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                d = tr(s),
                h = tl(s),
                g = nl(s) === 'x',
                y = ['left', 'top'].includes(d) ? -1 : 1,
                x = f && g ? -1 : 1,
                E = typeof o == 'function' ? o(l) : o
              let {
                mainAxis: c,
                crossAxis: p,
                alignmentAxis: v,
              } = typeof E == 'number'
                ? { mainAxis: E, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...E }
              return (
                h && typeof v == 'number' && (p = h === 'end' ? -1 * v : v),
                g ? { x: p * x, y: c * y } : { x: c * y, y: p * x }
              )
            })(t, e)
          return { x: n + i.x, y: r + i.y, data: i }
        },
      }
    )
  }
function bx(e) {
  return e === 'x' ? 'y' : 'x'
}
const Ax = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'shift',
      options: e,
      async fn(t) {
        const { x: n, y: r, placement: i } = t,
          {
            mainAxis: l = !0,
            crossAxis: o = !1,
            limiter: s = {
              fn: E => {
                let { x: c, y: p } = E
                return { x: c, y: p }
              },
            },
            ...a
          } = e,
          u = { x: n, y: r },
          f = await Xh(t, a),
          d = nl(tr(i)),
          h = bx(d)
        let g = u[d],
          y = u[h]
        if (l) {
          const E = d === 'y' ? 'bottom' : 'right'
          g = ba(g + f[d === 'y' ? 'top' : 'left'], g, g - f[E])
        }
        if (o) {
          const E = h === 'y' ? 'bottom' : 'right'
          y = ba(y + f[h === 'y' ? 'top' : 'left'], y, y - f[E])
        }
        const x = s.fn({ ...t, [d]: g, [h]: y })
        return { ...x, data: { x: x.x - n, y: x.y - r } }
      },
    }
  )
}
function ut(e) {
  var t
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ot(e) {
  return ut(e).getComputedStyle(e)
}
function Qh(e) {
  return e instanceof ut(e).Node
}
function $n(e) {
  return Qh(e) ? (e.nodeName || '').toLowerCase() : ''
}
let Pl
function Yh() {
  if (Pl) return Pl
  const e = navigator.userAgentData
  return e && Array.isArray(e.brands)
    ? ((Pl = e.brands.map(t => t.brand + '/' + t.version).join(' ')), Pl)
    : navigator.userAgent
}
function bt(e) {
  return e instanceof ut(e).HTMLElement
}
function sn(e) {
  return e instanceof ut(e).Element
}
function Od(e) {
  return typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot
}
function Xi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Ot(e)
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(i)
  )
}
function Dx(e) {
  return ['table', 'td', 'th'].includes($n(e))
}
function Aa(e) {
  const t = /firefox/i.test(Yh()),
    n = Ot(e),
    r = n.backdropFilter || n.WebkitBackdropFilter
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (!!r && r !== 'none') ||
    (t && n.willChange === 'filter') ||
    (t && !!n.filter && n.filter !== 'none') ||
    ['transform', 'perspective'].some(i => n.willChange.includes(i)) ||
    ['paint', 'layout', 'strict', 'content'].some(i => {
      const l = n.contain
      return l != null && l.includes(i)
    })
  )
}
function Da() {
  return /^((?!chrome|android).)*safari/i.test(Yh())
}
function Vo(e) {
  return ['html', 'body', '#document'].includes($n(e))
}
const zd = Math.min,
  ki = Math.max,
  wo = Math.round
function qh(e) {
  const t = Ot(e)
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0
  const i = bt(e),
    l = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = wo(n) !== l || wo(r) !== o
  return s && ((n = l), (r = o)), { width: n, height: r, fallback: s }
}
function Kh(e) {
  return sn(e) ? e : e.contextElement
}
const Zh = { x: 1, y: 1 }
function Ir(e) {
  const t = Kh(e)
  if (!bt(t)) return Zh
  const n = t.getBoundingClientRect(),
    { width: r, height: i, fallback: l } = qh(t)
  let o = (l ? wo(n.width) : n.width) / r,
    s = (l ? wo(n.height) : n.height) / i
  return (
    (o && Number.isFinite(o)) || (o = 1),
    (s && Number.isFinite(s)) || (s = 1),
    { x: o, y: s }
  )
}
function Qi(e, t, n, r) {
  var i, l
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  const o = e.getBoundingClientRect(),
    s = Kh(e)
  let a = Zh
  t && (r ? sn(r) && (a = Ir(r)) : (a = Ir(e)))
  const u = s ? ut(s) : window,
    f = Da() && n
  let d =
      (o.left +
        ((f && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft)) ||
          0)) /
      a.x,
    h =
      (o.top +
        ((f && ((l = u.visualViewport) == null ? void 0 : l.offsetTop)) || 0)) /
      a.y,
    g = o.width / a.x,
    y = o.height / a.y
  if (s) {
    const x = ut(s),
      E = r && sn(r) ? ut(r) : r
    let c = x.frameElement
    for (; c && r && E !== x; ) {
      const p = Ir(c),
        v = c.getBoundingClientRect(),
        w = getComputedStyle(c)
      ;(v.x += (c.clientLeft + parseFloat(w.paddingLeft)) * p.x),
        (v.y += (c.clientTop + parseFloat(w.paddingTop)) * p.y),
        (d *= p.x),
        (h *= p.y),
        (g *= p.x),
        (y *= p.y),
        (d += v.x),
        (h += v.y),
        (c = ut(c).frameElement)
    }
  }
  return yo({ width: g, height: y, x: d, y: h })
}
function Dn(e) {
  return ((Qh(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Ho(e) {
  return sn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
}
function Jh(e) {
  return Qi(Dn(e)).left + Ho(e).scrollLeft
}
function Gr(e) {
  if ($n(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (Od(e) && e.host) || Dn(e)
  return Od(t) ? t.host : t
}
function em(e) {
  const t = Gr(e)
  return Vo(t) ? t.ownerDocument.body : bt(t) && Xi(t) ? t : em(t)
}
function tm(e, t) {
  var n
  t === void 0 && (t = [])
  const r = em(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    l = ut(r)
  return i
    ? t.concat(l, l.visualViewport || [], Xi(r) ? r : [])
    : t.concat(r, tm(r))
}
function bd(e, t, n) {
  let r
  if (t === 'viewport')
    r = (function (o, s) {
      const a = ut(o),
        u = Dn(o),
        f = a.visualViewport
      let d = u.clientWidth,
        h = u.clientHeight,
        g = 0,
        y = 0
      if (f) {
        ;(d = f.width), (h = f.height)
        const x = Da()
        ;(!x || (x && s === 'fixed')) && ((g = f.offsetLeft), (y = f.offsetTop))
      }
      return { width: d, height: h, x: g, y }
    })(e, n)
  else if (t === 'document')
    r = (function (o) {
      const s = Dn(o),
        a = Ho(o),
        u = o.ownerDocument.body,
        f = ki(s.scrollWidth, s.clientWidth, u.scrollWidth, u.clientWidth),
        d = ki(s.scrollHeight, s.clientHeight, u.scrollHeight, u.clientHeight)
      let h = -a.scrollLeft + Jh(o)
      const g = -a.scrollTop
      return (
        Ot(u).direction === 'rtl' &&
          (h += ki(s.clientWidth, u.clientWidth) - f),
        { width: f, height: d, x: h, y: g }
      )
    })(Dn(e))
  else if (sn(t))
    r = (function (o, s) {
      const a = Qi(o, !0, s === 'fixed'),
        u = a.top + o.clientTop,
        f = a.left + o.clientLeft,
        d = bt(o) ? Ir(o) : { x: 1, y: 1 }
      return {
        width: o.clientWidth * d.x,
        height: o.clientHeight * d.y,
        x: f * d.x,
        y: u * d.y,
      }
    })(t, n)
  else {
    const o = { ...t }
    if (Da()) {
      var i, l
      const s = ut(e)
      ;(o.x -= ((i = s.visualViewport) == null ? void 0 : i.offsetLeft) || 0),
        (o.y -= ((l = s.visualViewport) == null ? void 0 : l.offsetTop) || 0)
    }
    r = o
  }
  return yo(r)
}
function nm(e, t) {
  const n = Gr(e)
  return (
    !(n === t || !sn(n) || Vo(n)) && (Ot(n).position === 'fixed' || nm(n, t))
  )
}
function Ad(e, t) {
  return bt(e) && Ot(e).position !== 'fixed'
    ? t
      ? t(e)
      : e.offsetParent
    : null
}
function Dd(e, t) {
  const n = ut(e)
  if (!bt(e)) return n
  let r = Ad(e, t)
  for (; r && Dx(r) && Ot(r).position === 'static'; ) r = Ad(r, t)
  return r &&
    ($n(r) === 'html' ||
      ($n(r) === 'body' && Ot(r).position === 'static' && !Aa(r)))
    ? n
    : r ||
        (function (i) {
          let l = Gr(i)
          for (; bt(l) && !Vo(l); ) {
            if (Aa(l)) return l
            l = Gr(l)
          }
          return null
        })(e) ||
        n
}
function Ix(e, t, n) {
  const r = bt(t),
    i = Dn(t),
    l = Qi(e, !0, n === 'fixed', t)
  let o = { scrollLeft: 0, scrollTop: 0 }
  const s = { x: 0, y: 0 }
  if (r || (!r && n !== 'fixed'))
    if ((($n(t) !== 'body' || Xi(i)) && (o = Ho(t)), bt(t))) {
      const a = Qi(t, !0)
      ;(s.x = a.x + t.clientLeft), (s.y = a.y + t.clientTop)
    } else i && (s.x = Jh(i))
  return {
    x: l.left + o.scrollLeft - s.x,
    y: l.top + o.scrollTop - s.y,
    width: l.width,
    height: l.height,
  }
}
const Fx = {
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: i } = e
      const l =
          n === 'clippingAncestors'
            ? (function (u, f) {
                const d = f.get(u)
                if (d) return d
                let h = tm(u).filter(E => sn(E) && $n(E) !== 'body'),
                  g = null
                const y = Ot(u).position === 'fixed'
                let x = y ? Gr(u) : u
                for (; sn(x) && !Vo(x); ) {
                  const E = Ot(x),
                    c = Aa(x)
                  c || E.position !== 'fixed' || (g = null),
                    (
                      y
                        ? !c && !g
                        : (!c &&
                            E.position === 'static' &&
                            g &&
                            ['absolute', 'fixed'].includes(g.position)) ||
                          (Xi(x) && !c && nm(u, x))
                    )
                      ? (h = h.filter(p => p !== x))
                      : (g = E),
                    (x = Gr(x))
                }
                return f.set(u, h), h
              })(t, this._c)
            : [].concat(n),
        o = [...l, r],
        s = o[0],
        a = o.reduce((u, f) => {
          const d = bd(t, f, i)
          return (
            (u.top = ki(d.top, u.top)),
            (u.right = zd(d.right, u.right)),
            (u.bottom = zd(d.bottom, u.bottom)),
            (u.left = ki(d.left, u.left)),
            u
          )
        }, bd(t, s, i))
      return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top,
      }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: n, strategy: r } = e
      const i = bt(n),
        l = Dn(n)
      if (n === l) return t
      let o = { scrollLeft: 0, scrollTop: 0 },
        s = { x: 1, y: 1 }
      const a = { x: 0, y: 0 }
      if (
        (i || (!i && r !== 'fixed')) &&
        (($n(n) !== 'body' || Xi(l)) && (o = Ho(n)), bt(n))
      ) {
        const u = Qi(n)
        ;(s = Ir(n)), (a.x = u.x + n.clientLeft), (a.y = u.y + n.clientTop)
      }
      return {
        width: t.width * s.x,
        height: t.height * s.y,
        x: t.x * s.x - o.scrollLeft * s.x + a.x,
        y: t.y * s.y - o.scrollTop * s.y + a.y,
      }
    },
    isElement: sn,
    getDimensions: function (e) {
      return qh(e)
    },
    getOffsetParent: Dd,
    getDocumentElement: Dn,
    getScale: Ir,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: r } = e
      const i = this.getOffsetParent || Dd,
        l = this.getDimensions
      return {
        reference: Ix(t, await i(n), r),
        floating: { x: 0, y: 0, ...(await l(n)) },
      }
    },
    getClientRects: e => Array.from(e.getClientRects()),
    isRTL: e => Ot(e).direction === 'rtl',
  },
  Id = (e, t, n) => {
    const r = new Map(),
      i = { platform: Fx, ...n },
      l = { ...i.platform, _c: r }
    return kx(e, t, { ...i, platform: l })
  }
/*
 * React Tooltip
 * {@link https://github.com/ReactTooltip/react-tooltip}
 * @copyright ReactTooltip Team
 * @license MIT
 */ function rm(e, t) {
  t === void 0 && (t = {})
  var n = t.insertAt
  if (e && typeof document < 'u') {
    var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style')
    ;(i.type = 'text/css'),
      n === 'top' && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e))
  }
}
rm(
  ':root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}',
)
const Fd = (e, t, n) => {
    let r = null
    return function (...i) {
      const l = () => {
        ;(r = null), n || e.apply(this, i)
      }
      n && !r && (e.apply(this, i), (r = setTimeout(l, t))),
        n || (r && clearTimeout(r), (r = setTimeout(l, t)))
    }
  },
  $x = 'DEFAULT_TOOLTIP_ID',
  Bx = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {},
  },
  Ux = j.createContext({ getTooltipData: () => Bx })
function im(e = $x) {
  return j.useContext(Ux).getTooltipData(e)
}
const Vx = typeof window < 'u' ? j.useLayoutEffect : j.useEffect,
  $d = async ({
    elementReference: e = null,
    tooltipReference: t = null,
    tooltipArrowReference: n = null,
    place: r = 'top',
    offset: i = 10,
    strategy: l = 'absolute',
    middlewares: o = [zx(Number(i)), Ox(), Ax({ padding: 5 })],
  }) => {
    if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r }
    if (t === null)
      return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r }
    const s = o
    return n
      ? (s.push(_x({ element: n, padding: 5 })),
        Id(e, t, { placement: r, strategy: l, middleware: s }).then(
          ({ x: a, y: u, placement: f, middlewareData: d }) => {
            var h, g
            const y = { left: `${a}px`, top: `${u}px` },
              { x, y: E } =
                (h = d.arrow) !== null && h !== void 0 ? h : { x: 0, y: 0 }
            return {
              tooltipStyles: y,
              tooltipArrowStyles: {
                left: x != null ? `${x}px` : '',
                top: E != null ? `${E}px` : '',
                right: '',
                bottom: '',
                [(g = {
                  top: 'bottom',
                  right: 'left',
                  bottom: 'top',
                  left: 'right',
                }[f.split('-')[0]]) !== null && g !== void 0
                  ? g
                  : 'bottom']: '-4px',
              },
              place: f,
            }
          },
        ))
      : Id(e, t, { placement: 'bottom', strategy: l, middleware: s }).then(
          ({ x: a, y: u, placement: f }) => ({
            tooltipStyles: { left: `${a}px`, top: `${u}px` },
            tooltipArrowStyles: {},
            place: f,
          }),
        )
  }
var Gn = {
  tooltip: 'styles-module_tooltip__mnnfp',
  fixed: 'styles-module_fixed__7ciUi',
  arrow: 'styles-module_arrow__K0L3T',
  noArrow: 'styles-module_noArrow__T8y2L',
  clickable: 'styles-module_clickable__Bv9o7',
  show: 'styles-module_show__2NboJ',
  dark: 'styles-module_dark__xNqje',
  light: 'styles-module_light__Z6W-X',
  success: 'styles-module_success__A2AKt',
  warning: 'styles-module_warning__SCK0X',
  error: 'styles-module_error__JvumD',
  info: 'styles-module_info__BWdHW',
}
rm(
  '.styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;left:0;opacity:0;padding:8px 16px;pointer-events:none;position:absolute;top:0;transition:opacity .3s ease-out;visibility:hidden;width:max-content;will-change:opacity,visibility}.styles-module_fixed__7ciUi{position:fixed}.styles-module_arrow__K0L3T{background:inherit;height:8px;position:absolute;transform:rotate(45deg);width:8px}.styles-module_noArrow__T8y2L{display:none}.styles-module_clickable__Bv9o7{pointer-events:auto}.styles-module_show__2NboJ{opacity:var(--rt-opacity);visibility:visible}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}',
)
const Hx = ({
    id: e,
    className: t,
    classNameArrow: n,
    variant: r = 'dark',
    anchorId: i,
    anchorSelect: l,
    place: o = 'top',
    offset: s = 10,
    events: a = ['hover'],
    openOnClick: u = !1,
    positionStrategy: f = 'absolute',
    middlewares: d,
    wrapper: h,
    delayShow: g = 0,
    delayHide: y = 0,
    float: x = !1,
    hidden: E = !1,
    noArrow: c = !1,
    clickable: p = !1,
    closeOnEsc: v = !1,
    style: w,
    position: T,
    afterShow: C,
    afterHide: _,
    content: P,
    contentWrapperRef: R,
    isOpen: D,
    setIsOpen: L,
    activeAnchor: O,
    setActiveAnchor: $,
  }) => {
    const X = j.useRef(null),
      q = j.useRef(null),
      I = j.useRef(null),
      K = j.useRef(null),
      [M, A] = j.useState(o),
      [B, Q] = j.useState({}),
      [ne, xe] = j.useState({}),
      [we, fe] = j.useState(!1),
      [Le, Me] = j.useState(!1),
      mt = j.useRef(!1),
      At = j.useRef(null),
      { anchorRefs: Yt, setActiveAnchor: kt } = im(e),
      nt = j.useRef(!1),
      [We, qe] = j.useState([]),
      rt = j.useRef(!1),
      it = u || a.includes('click')
    Vx(
      () => (
        (rt.current = !0),
        () => {
          rt.current = !1
        }
      ),
      [],
    ),
      j.useEffect(() => {
        if (!we) {
          const S = setTimeout(() => {
            Me(!1)
          }, 150)
          return () => {
            clearTimeout(S)
          }
        }
        return () => null
      }, [we])
    const Ae = S => {
      rt.current &&
        (S && Me(!0),
        setTimeout(() => {
          rt.current && (L == null || L(S), D === void 0 && fe(S))
        }, 10))
    }
    j.useEffect(() => {
      if (D === void 0) return () => null
      D && Me(!0)
      const S = setTimeout(() => {
        fe(D)
      }, 10)
      return () => {
        clearTimeout(S)
      }
    }, [D]),
      j.useEffect(() => {
        we !== mt.current &&
          ((mt.current = we), we ? C == null || C() : _ == null || _())
      }, [we])
    const vt = (S = y) => {
        K.current && clearTimeout(K.current),
          (K.current = setTimeout(() => {
            nt.current || Ae(!1)
          }, S))
      },
      Wn = S => {
        var k
        if (!S) return
        const N = (k = S.currentTarget) !== null && k !== void 0 ? k : S.target
        if (!(N != null && N.isConnected))
          return $(null), void kt({ current: null })
        g
          ? (I.current && clearTimeout(I.current),
            (I.current = setTimeout(() => {
              Ae(!0)
            }, g)))
          : Ae(!0),
          $(N),
          kt({ current: N }),
          K.current && clearTimeout(K.current)
      },
      hn = () => {
        p ? vt(y || 100) : y ? vt() : Ae(!1),
          I.current && clearTimeout(I.current)
      },
      mn = ({ x: S, y: k }) => {
        $d({
          place: o,
          offset: s,
          elementReference: {
            getBoundingClientRect: () => ({
              x: S,
              y: k,
              width: 0,
              height: 0,
              top: k,
              left: S,
              right: S,
              bottom: k,
            }),
          },
          tooltipReference: X.current,
          tooltipArrowReference: q.current,
          strategy: f,
          middlewares: d,
        }).then(N => {
          Object.keys(N.tooltipStyles).length && Q(N.tooltipStyles),
            Object.keys(N.tooltipArrowStyles).length &&
              xe(N.tooltipArrowStyles),
            A(N.place)
        })
      },
      Dt = S => {
        if (!S) return
        const k = S,
          N = { x: k.clientX, y: k.clientY }
        mn(N), (At.current = N)
      },
      qt = S => {
        Wn(S), y && vt()
      },
      It = S => {
        var k
        ;[document.querySelector(`[id='${i}']`), ...We].some(N =>
          N == null ? void 0 : N.contains(S.target),
        ) ||
          (!((k = X.current) === null || k === void 0) &&
            k.contains(S.target)) ||
          Ae(!1)
      },
      Kt = S => {
        S.key === 'Escape' && Ae(!1)
      },
      fr = Fd(Wn, 50, !0),
      Ee = Fd(hn, 50, !0)
    j.useEffect(() => {
      var S, k
      const N = new Set(Yt)
      We.forEach(G => {
        N.add({ current: G })
      })
      const F = document.querySelector(`[id='${i}']`)
      F && N.add({ current: F }), v && window.addEventListener('keydown', Kt)
      const b = []
      it
        ? (window.addEventListener('click', It),
          b.push({ event: 'click', listener: qt }))
        : (b.push(
            { event: 'mouseenter', listener: fr },
            { event: 'mouseleave', listener: Ee },
            { event: 'focus', listener: fr },
            { event: 'blur', listener: Ee },
          ),
          x && b.push({ event: 'mousemove', listener: Dt }))
      const H = () => {
          nt.current = !0
        },
        W = () => {
          ;(nt.current = !1), hn()
        }
      return (
        p &&
          !it &&
          ((S = X.current) === null ||
            S === void 0 ||
            S.addEventListener('mouseenter', H),
          (k = X.current) === null ||
            k === void 0 ||
            k.addEventListener('mouseleave', W)),
        b.forEach(({ event: G, listener: V }) => {
          N.forEach(Z => {
            var te
            ;(te = Z.current) === null ||
              te === void 0 ||
              te.addEventListener(G, V)
          })
        }),
        () => {
          var G, V
          it && window.removeEventListener('click', It),
            v && window.removeEventListener('keydown', Kt),
            p &&
              !it &&
              ((G = X.current) === null ||
                G === void 0 ||
                G.removeEventListener('mouseenter', H),
              (V = X.current) === null ||
                V === void 0 ||
                V.removeEventListener('mouseleave', W)),
            b.forEach(({ event: Z, listener: te }) => {
              N.forEach(Re => {
                var ge
                ;(ge = Re.current) === null ||
                  ge === void 0 ||
                  ge.removeEventListener(Z, te)
              })
            })
        }
      )
    }, [Le, Yt, We, v, a]),
      j.useEffect(() => {
        let S = l ?? ''
        !S && e && (S = `[data-tooltip-id='${e}']`)
        const k = new MutationObserver(N => {
          const F = []
          N.forEach(b => {
            if (
              (b.type === 'attributes' &&
                b.attributeName === 'data-tooltip-id' &&
                b.target.getAttribute('data-tooltip-id') === e &&
                F.push(b.target),
              b.type === 'childList' &&
                (O &&
                  [...b.removedNodes].some(H => {
                    var W
                    return (
                      !!(
                        !(
                          (W = H == null ? void 0 : H.contains) === null ||
                          W === void 0
                        ) && W.call(H, O)
                      ) && (Me(!1), Ae(!1), $(null), !0)
                    )
                  }),
                S))
            )
              try {
                const H = [...b.addedNodes].filter(W => W.nodeType === 1)
                F.push(...H.filter(W => W.matches(S))),
                  F.push(...H.flatMap(W => [...W.querySelectorAll(S)]))
              } catch {}
          }),
            F.length && qe(b => [...b, ...F])
        })
        return (
          k.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ['data-tooltip-id'],
          }),
          () => {
            k.disconnect()
          }
        )
      }, [e, l, O])
    const $e = () => {
      T
        ? mn(T)
        : x
        ? At.current && mn(At.current)
        : $d({
            place: o,
            offset: s,
            elementReference: O,
            tooltipReference: X.current,
            tooltipArrowReference: q.current,
            strategy: f,
            middlewares: d,
          }).then(S => {
            rt.current &&
              (Object.keys(S.tooltipStyles).length && Q(S.tooltipStyles),
              Object.keys(S.tooltipArrowStyles).length &&
                xe(S.tooltipArrowStyles),
              A(S.place))
          })
    }
    j.useEffect(() => {
      $e()
    }, [we, O, P, w, o, s, f, T]),
      j.useEffect(() => {
        if (!(R != null && R.current)) return () => null
        const S = new ResizeObserver(() => {
          $e()
        })
        return (
          S.observe(R.current),
          () => {
            S.disconnect()
          }
        )
      }, [P, R == null ? void 0 : R.current]),
      j.useEffect(() => {
        var S
        const k = document.querySelector(`[id='${i}']`),
          N = [...We, k]
        ;(O && N.includes(O)) || $((S = We[0]) !== null && S !== void 0 ? S : k)
      }, [i, We, O]),
      j.useEffect(
        () => () => {
          I.current && clearTimeout(I.current),
            K.current && clearTimeout(K.current)
        },
        [],
      ),
      j.useEffect(() => {
        let S = l
        if ((!S && e && (S = `[data-tooltip-id='${e}']`), S))
          try {
            const k = Array.from(document.querySelectorAll(S))
            qe(k)
          } catch {
            qe([])
          }
      }, [e, l])
    const Y = !E && P && we && Object.keys(B).length > 0
    return Le
      ? re.createElement(
          h,
          {
            id: e,
            role: 'tooltip',
            className: Md(
              'react-tooltip',
              Gn.tooltip,
              Gn[r],
              t,
              `react-tooltip__place-${M}`,
              { [Gn.show]: Y, [Gn.fixed]: f === 'fixed', [Gn.clickable]: p },
            ),
            style: { ...w, ...B },
            ref: X,
          },
          P,
          re.createElement(h, {
            className: Md('react-tooltip-arrow', Gn.arrow, n, {
              [Gn.noArrow]: c,
            }),
            style: ne,
            ref: q,
          }),
        )
      : null
  },
  Wx = ({ content: e }) =>
    re.createElement('span', { dangerouslySetInnerHTML: { __html: e } }),
  jl = ({
    id: e,
    anchorId: t,
    anchorSelect: n,
    content: r,
    html: i,
    render: l,
    className: o,
    classNameArrow: s,
    variant: a = 'dark',
    place: u = 'top',
    offset: f = 10,
    wrapper: d = 'div',
    children: h = null,
    events: g = ['hover'],
    openOnClick: y = !1,
    positionStrategy: x = 'absolute',
    middlewares: E,
    delayShow: c = 0,
    delayHide: p = 0,
    float: v = !1,
    hidden: w = !1,
    noArrow: T = !1,
    clickable: C = !1,
    closeOnEsc: _ = !1,
    style: P,
    position: R,
    isOpen: D,
    setIsOpen: L,
    afterShow: O,
    afterHide: $,
  }) => {
    const [X, q] = j.useState(r),
      [I, K] = j.useState(i),
      [M, A] = j.useState(u),
      [B, Q] = j.useState(a),
      [ne, xe] = j.useState(f),
      [we, fe] = j.useState(c),
      [Le, Me] = j.useState(p),
      [mt, At] = j.useState(v),
      [Yt, kt] = j.useState(w),
      [nt, We] = j.useState(d),
      [qe, rt] = j.useState(g),
      [it, Ae] = j.useState(x),
      [vt, Wn] = j.useState(null),
      { anchorRefs: hn, activeAnchor: mn } = im(e),
      Dt = Ee =>
        Ee == null
          ? void 0
          : Ee.getAttributeNames().reduce(($e, Y) => {
              var S
              return (
                Y.startsWith('data-tooltip-') &&
                  ($e[Y.replace(/^data-tooltip-/, '')] =
                    (S = Ee == null ? void 0 : Ee.getAttribute(Y)) !== null &&
                    S !== void 0
                      ? S
                      : null),
                $e
              )
            }, {}),
      qt = Ee => {
        const $e = {
          place: Y => {
            var S
            A((S = Y) !== null && S !== void 0 ? S : u)
          },
          content: Y => {
            q(Y ?? r)
          },
          html: Y => {
            K(Y ?? i)
          },
          variant: Y => {
            var S
            Q((S = Y) !== null && S !== void 0 ? S : a)
          },
          offset: Y => {
            xe(Y === null ? f : Number(Y))
          },
          wrapper: Y => {
            var S
            We((S = Y) !== null && S !== void 0 ? S : d)
          },
          events: Y => {
            const S = Y == null ? void 0 : Y.split(' ')
            rt(S ?? g)
          },
          'position-strategy': Y => {
            var S
            Ae((S = Y) !== null && S !== void 0 ? S : x)
          },
          'delay-show': Y => {
            fe(Y === null ? c : Number(Y))
          },
          'delay-hide': Y => {
            Me(Y === null ? p : Number(Y))
          },
          float: Y => {
            At(Y === null ? v : Y === 'true')
          },
          hidden: Y => {
            kt(Y === null ? w : Y === 'true')
          },
        }
        Object.values($e).forEach(Y => Y(null)),
          Object.entries(Ee).forEach(([Y, S]) => {
            var k
            ;(k = $e[Y]) === null || k === void 0 || k.call($e, S)
          })
      }
    j.useEffect(() => {
      q(r)
    }, [r]),
      j.useEffect(() => {
        K(i)
      }, [i]),
      j.useEffect(() => {
        A(u)
      }, [u]),
      j.useEffect(() => {
        Q(a)
      }, [a]),
      j.useEffect(() => {
        xe(f)
      }, [f]),
      j.useEffect(() => {
        fe(c)
      }, [c]),
      j.useEffect(() => {
        Me(p)
      }, [p]),
      j.useEffect(() => {
        At(v)
      }, [v]),
      j.useEffect(() => {
        kt(w)
      }, [w]),
      j.useEffect(() => {
        Ae(x)
      }, [x]),
      j.useEffect(() => {
        var Ee
        const $e = new Set(hn)
        let Y = n
        if ((!Y && e && (Y = `[data-tooltip-id='${e}']`), Y))
          try {
            document.querySelectorAll(Y).forEach(b => {
              $e.add({ current: b })
            })
          } catch {
            console.warn(`[react-tooltip] "${Y}" is not a valid CSS selector`)
          }
        const S = document.querySelector(`[id='${t}']`)
        if ((S && $e.add({ current: S }), !$e.size)) return () => null
        const k = (Ee = vt ?? S) !== null && Ee !== void 0 ? Ee : mn.current,
          N = new MutationObserver(b => {
            b.forEach(H => {
              var W
              if (
                !k ||
                H.type !== 'attributes' ||
                !(
                  !((W = H.attributeName) === null || W === void 0) &&
                  W.startsWith('data-tooltip-')
                )
              )
                return
              const G = Dt(k)
              qt(G)
            })
          }),
          F = { attributes: !0, childList: !1, subtree: !1 }
        if (k) {
          const b = Dt(k)
          qt(b), N.observe(k, F)
        }
        return () => {
          N.disconnect()
        }
      }, [hn, mn, vt, t, n])
    let It = h
    const Kt = j.useRef(null)
    if (l) {
      const Ee = l({ content: X ?? null, activeAnchor: vt })
      It = Ee
        ? re.createElement(
            'div',
            { ref: Kt, className: 'react-tooltip-content-wrapper' },
            Ee,
          )
        : null
    } else X && (It = X)
    I && (It = re.createElement(Wx, { content: I }))
    const fr = {
      id: e,
      anchorId: t,
      anchorSelect: n,
      className: o,
      classNameArrow: s,
      content: It,
      contentWrapperRef: Kt,
      place: M,
      variant: B,
      offset: ne,
      wrapper: nt,
      events: qe,
      openOnClick: y,
      positionStrategy: it,
      middlewares: E,
      delayShow: we,
      delayHide: Le,
      float: mt,
      hidden: Yt,
      noArrow: T,
      clickable: C,
      closeOnEsc: _,
      style: P,
      position: R,
      isOpen: D,
      setIsOpen: L,
      afterShow: O,
      afterHide: $,
      activeAnchor: vt,
      setActiveAnchor: Ee => Wn(Ee),
    }
    return re.createElement(Hx, { ...fr })
  }
function Gx(e) {
  return pn({
    tag: 'svg',
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z',
        },
      },
    ],
  })(e)
}
function Xx(e) {
  return pn({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          {
            tag: 'path',
            attr: {
              fillRule: 'nonzero',
              d: 'M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z',
            },
          },
        ],
      },
    ],
  })(e)
}
const Qx = () =>
    m.jsx(m.Fragment, {
      children: m.jsx('div', {
        children: m.jsxs('div', {
          className: 'flex items-center justify-center gap-5',
          children: [
            m.jsx('div', {
              className: 'flex',
              children: m.jsxs('a', {
                href: 'http://github.com/ronaldjdev',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: [
                  m.jsx(yx, {
                    'data-tooltip-id': 'github',
                    'data-tooltip-content': 'Github: ronaldjdev',
                    className:
                      'text-4xl bgText hover:fill-[#FAD000]  transition-colors duration-300',
                  }),
                  m.jsx(jl, { className: 'first-line:', id: 'github' }),
                ],
              }),
            }),
            m.jsx('div', {
              className: 'flex',
              children: m.jsxs('a', {
                href: 'http://linkedin.com/in/ronaldjdev',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: [
                  m.jsx(xx, {
                    'data-tooltip-id': 'linkedin',
                    'data-tooltip-content': 'Linkedin: ronaldjdev',
                    className:
                      'text-4xl bgText hover:fill-[#0A66C2]  transition-colors duration-300',
                  }),
                  m.jsx(jl, { className: 'first-line:', id: 'linkedin' }),
                ],
              }),
            }),
            m.jsx('div', {
              className: 'flex',
              title: 'ronaldjdevfs@gmail.com',
              children: m.jsxs('a', {
                href: 'mailto:eronald2009@gmail.com',
                children: [
                  m.jsx(Gx, {
                    'data-tooltip-id': 'gmail',
                    'data-tooltip-content': 'Gmail: ronaldjdevfs@gmail.com',
                    className:
                      'text-4xl hover:fill-[#EA4335]  transition-colors duration-300',
                  }),
                  m.jsx(jl, { className: 'first-line:', id: 'gmail' }),
                ],
              }),
            }),
            m.jsx('div', {
              className: 'flex',
              children: m.jsxs('a', {
                href: 'http://api.whatsapp.com/send?phone=573024551445',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: [
                  m.jsx(Xx, {
                    'data-tooltip-id': 'whatsapp',
                    'data-tooltip-content': 'Wpp: +57 3024551445',
                    className:
                      'text-4xl hover:fill-[#25D366]  transition-colors duration-300',
                  }),
                  m.jsx(jl, { className: 'first-line:', id: 'whatsapp' }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  So = '/assets/ring-7bea4872.png',
  Yx = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs(Zr, {
        children: [
          m.jsxs('div', {
            className: 'relative mb-40 flex flex-col items-center',
            children: [
              m.jsx('img', { className: 'w-[800px]', src: So }),
              m.jsx('div', {
                className: 'absolute inset-60 mt-20 mb-40',
                children: m.jsx(_e, {
                  title: 'El siguiente paso es tuyo',
                  subtitle:
                    'Estoy ansioso por escuchar sobre tu nuevo proyecto.',
                }),
              }),
            ],
          }),
          m.jsx('div', { children: m.jsx(Ph, {}) }),
        ],
      }),
    }),
  qx = '/assets/portal-bc83ffa3.png',
  lm = '/assets/radar2-c4fdcb46.png',
  Kx = '/assets/back-img-4c78f7ff.svg',
  Zx = '/assets/api-img-57e5acee.svg',
  Bd = '/assets/front-img-e189ba6c.svg',
  Ud = '/assets/ux-ui-eda98c98.svg',
  om = '/assets/halo-44e26a19.png',
  Jx = () =>
    m.jsxs(Zr, {
      children: [
        m.jsxs('div', {
          className: 'relative',
          children: [
            m.jsx(gx, {}),
            m.jsx('div', {
              className: 'absolute bottom-28',
              children: m.jsx(Uo, { children: m.jsx(cx, {}) }),
            }),
          ],
        }),
        m.jsxs('div', {
          className: 'relative flex flex-col items-center',
          children: [
            m.jsx('img', { className: 'w-[800px]', src: qx }),
            m.jsx('div', {
              className: 'absolute inset-40 mt-20 mb-40',
              children: m.jsx(_e, {
                title: 'Impulsa tus proyectos',
                subtitle:
                  'Desarrollo web completo para potenciar tu presencia en linea.',
              }),
            }),
          ],
        }),
        m.jsxs('div', {
          className: '',
          children: [
            m.jsx($l, {
              title: 'Diseño UX/UI',
              description:
                'Destaca la importancia del diseño de interfaz (UI) y cómo puede atraer y cautivar a los usuarios',
              image: Ud,
              svg: Ud,
            }),
            m.jsx($l, {
              title: 'Front-end',
              description:
                'Potencia tu presencia en línea con un desarrollo frontend excepcional',
              imageOnRight: !0,
              image: Bd,
              svg: Bd,
            }),
            m.jsx($l, {
              title: 'Back-end',
              description:
                'Descubre el poder del desarrollo backend, la fuerza invisible que da vida y mantiene en funcionamiento las aplicaciones web',
              image: Zx,
              svg: Kx,
            }),
          ],
        }),
        m.jsxs('div', {
          className: 'relative mb-40 flex flex-col items-center',
          children: [
            m.jsx('img', { className: 'w-[800px]', src: So }),
            m.jsx('div', {
              className: 'absolute inset-60 mt-20 mb-40',
              children: m.jsx(_e, {
                title: 'Skills',
                subtitle:
                  'Potenciando mi trayectoria con un cojunto versatil de habilidades.',
              }),
            }),
          ],
        }),
        m.jsx('div', {
          className: 'flex justify-center items-center mb-40 pb-5',
          style: { background: `url(${lm})`, backgroundPosition: 'center' },
          children: m.jsxs('div', {
            className:
              'grid place-items-center place-content-center grid-rows-2 grid-cols-2 gap-x-6',
            children: [
              m.jsxs('div', {
                className: 'flex flex-col items-center ',
                children: [
                  m.jsx('div', {
                    children: m.jsx(_e, {
                      title: 'Lenguajes',
                      size: 'text-2xl',
                    }),
                  }),
                  m.jsx(jn, {}),
                ],
              }),
              m.jsxs('div', {
                className: 'flex flex-col items-center ',
                children: [
                  m.jsx('div', {
                    children: m.jsx(_e, {
                      title: 'Frameworks',
                      size: 'text-2xl',
                    }),
                  }),
                  m.jsx(jn, {}),
                ],
              }),
              m.jsxs('div', {
                className: 'flex flex-col items-center ',
                children: [
                  m.jsx('div', {
                    children: m.jsx(_e, {
                      title: 'Librerias',
                      size: 'text-2xl',
                    }),
                  }),
                  m.jsx(jn, {}),
                ],
              }),
              m.jsxs('div', {
                className: 'flex flex-col items-center ',
                children: [
                  m.jsx('div', {
                    children: m.jsx(_e, {
                      title: 'Herramientas',
                      size: 'text-2xl',
                    }),
                  }),
                  m.jsx(jn, {}),
                ],
              }),
            ],
          }),
        }),
        m.jsxs('div', {
          className: 'relative flex flex-col items-center',
          children: [
            m.jsx('img', { className: 'w-[800px]', src: om }),
            m.jsx('div', {
              className: 'absolute inset-80 mt-20 mb-40',
              children: m.jsx(_e, {
                title: 'Proyectos',
                subtitle: 'Transformando Ideas en Realidad.',
              }),
            }),
          ],
        }),
        m.jsx('div', { className: 'mb-40', children: m.jsx(Bh, {}) }),
        m.jsxs('div', {
          className: 'relative mb-40 flex flex-col items-center',
          children: [
            m.jsx('img', { className: 'w-[800px]', src: So }),
            m.jsx('div', {
              className: 'absolute inset-60 mt-20 mb-40',
              children: m.jsx(_e, {
                title: 'El siguiente paso es tuyo',
                subtitle: 'Estoy ansioso por escuchar sobre tu nuevo proyecto.',
              }),
            }),
          ],
        }),
        m.jsx('div', { children: m.jsx(Ph, {}) }),
      ],
    }),
  ew = () => m.jsx(m.Fragment, { children: m.jsx(Zr, {}) }),
  tw = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs(Zr, {
        children: [
          m.jsxs('div', {
            className: 'relative flex flex-col items-center',
            children: [
              m.jsx('img', { className: 'w-[800px]', src: om }),
              m.jsx('div', {
                className: 'absolute inset-80 mt-20 mb-40',
                children: m.jsx(_e, {
                  title: 'Proyectos',
                  subtitle: 'Transformando Ideas en Realidad.',
                }),
              }),
            ],
          }),
          m.jsx('div', { className: 'mb-40', children: m.jsx(Bh, {}) }),
        ],
      }),
    }),
  nw = () =>
    m.jsx(m.Fragment, {
      children: m.jsxs(Zr, {
        children: [
          m.jsxs('div', {
            className: 'relative mb-40 flex flex-col items-center',
            children: [
              m.jsx('img', { className: 'w-[800px]', src: So }),
              m.jsx('div', {
                className: 'absolute inset-60 mt-20 mb-40',
                children: m.jsx(_e, {
                  title: 'Skills',
                  subtitle:
                    'Potenciando mi trayectoria con un cojunto versatil de habilidades.',
                }),
              }),
            ],
          }),
          m.jsx('div', {
            className: 'flex justify-center items-center mb-40 pb-5',
            style: { background: `url(${lm})`, backgroundPosition: 'center' },
            children: m.jsxs('div', {
              className:
                'grid place-items-center place-content-center grid-rows-2 grid-cols-2 gap-x-6',
              children: [
                m.jsxs('div', {
                  className: 'flex flex-col items-center ',
                  children: [
                    m.jsx('div', {
                      children: m.jsx(_e, {
                        title: 'Lenguajes',
                        size: 'text-2xl',
                      }),
                    }),
                    m.jsx(jn, {}),
                  ],
                }),
                m.jsxs('div', {
                  className: 'flex flex-col items-center ',
                  children: [
                    m.jsx('div', {
                      children: m.jsx(_e, {
                        title: 'Frameworks',
                        size: 'text-2xl',
                      }),
                    }),
                    m.jsx(jn, {}),
                  ],
                }),
                m.jsxs('div', {
                  className: 'flex flex-col items-center ',
                  children: [
                    m.jsx('div', {
                      children: m.jsx(_e, {
                        title: 'Librerias',
                        size: 'text-2xl',
                      }),
                    }),
                    m.jsx(jn, {}),
                  ],
                }),
                m.jsxs('div', {
                  className: 'flex flex-col items-center ',
                  children: [
                    m.jsx('div', {
                      children: m.jsx(_e, {
                        title: 'Herramientas',
                        size: 'text-2xl',
                      }),
                    }),
                    m.jsx(jn, {}),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  rw = W0([
    {
      path: '/',
      element: m.jsx(lx, {}),
      errorElement: m.jsx(Sy, {}),
      children: [
        { index: !0, element: m.jsx(Jx, {}) },
        { path: '/skills', element: m.jsx(nw, {}) },
        { path: '/projects', element: m.jsx(tw, {}) },
        { path: '/profile', element: m.jsx(ew, {}) },
        { path: '/contact', element: m.jsx(Yx, {}) },
      ],
    },
  ])
Os.createRoot(document.getElementById('root')).render(
  m.jsx(re.StrictMode, { children: m.jsx(A0, { router: rw }) }),
)
