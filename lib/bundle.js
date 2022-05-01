/*! For license information please see bundle.js.LICENSE.txt */

import { fooMap1 } from 't'

const map2 = {};

export const foo0 = function(n) {
  const i = map2[n];
  if (void 0 !== i) return i.exports;
  const o = (map2[n] = { id: n, loaded: !1, exports: {} });
  return fooMap1[n].call(o.exports, o, o.exports, foo0), (o.loaded = !0), o.exports;
};

const foo4 = function() {
  if ('object' == typeof globalThis) return globalThis;
  try {
    return this || new Function('return this')();
  } catch (t) {
    if ('object' == typeof window) return window;
  }
};

const foo5 = function(t) {
  'undefined' != typeof Symbol &&
  Symbol.toStringTag &&
  Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(t, '__esModule', { value: !0 });
};

function foo6(t, e) { Object.prototype.hasOwnProperty.call(t, e) }

const foo1 = function() {
  return (
    (foo0.n = function(t) {
      const e = t && t.__esModule ? () => t.default : () => t;
      return foo0.d(e, { a: e }), e;
    }),
      (foo0.d = function(t, e) {
        for (const n in e)
          foo0.o(e, n) &&
          !foo0.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (foo0.g = foo4()),
      (foo0.o = foo6),
      (foo0.r = foo5),
      (foo0.nmd = t => ((t.paths = []), t.children || (t.children = []), t)),
      foo0(3607)
  );
};

const foo3 = function(t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    const r = e();
    for (const n in r) ('object' == typeof exports ? exports : t)[n] = r[n];
  }
};
!foo3(self, foo1);
