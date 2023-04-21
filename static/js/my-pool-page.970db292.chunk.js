;(this['webpackJsonp@kyberswap/interface'] = this['webpackJsonp@kyberswap/interface'] || []).push([
  [13],
  {
    './src/components/ClassicElasticTab.tsx': function (e, t, o) {
      'use strict'
      var n = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = o('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        i = o('./node_modules/@lingui/react/esm/index.js'),
        r = o('./node_modules/querystring-es3/index.js'),
        c = o('./node_modules/react-router/dist/index.js'),
        a = o('./node_modules/rebass/dist/index.esm.js'),
        d = o('./src/constants/index.ts'),
        l = o('./src/constants/v2.ts'),
        u = o('./src/hooks/index.ts'),
        b = o('./src/hooks/useMixpanel.ts'),
        j = o('./src/hooks/useParsedQueryString.ts'),
        m = o('./src/hooks/useTheme.ts'),
        p = o('./src/utils/string.ts'),
        x = o('./src/components/Icons/index.ts'),
        h = o('./src/components/Tooltip/index.tsx'),
        O = o('./node_modules/react/jsx-runtime.js'),
        f = ['tab']
      t.a = function () {
        var e = Object(j.a)(),
          t = e.tab,
          o = void 0 === t ? l.c.ELASTIC : t,
          g = Object(s.a)(e, f),
          v = Object(p.d)(o, l.c) ? o : l.c.ELASTIC,
          y = Object(b.c)().mixpanelHandler,
          k = Object(u.b)().chainId,
          w = l.a[k],
          I = Object(m.a)(),
          C = Object(c.k)(),
          _ = Object(c.m)(),
          S = C.pathname.includes('/farms')
        return Object(O.jsxs)(a.b, {
          width: 'max-content',
          children: [
            Object(O.jsx)(h.a, {
              text: w || '',
              children: Object(O.jsxs)(a.b, {
                alignItems: 'center',
                onClick: () => {
                  if (!w) {
                    var e = Object(n.a)(Object(n.a)({}, g), {}, { tab: l.c.ELASTIC }),
                      t = ''
                    C.pathname.startsWith(d.h.POOLS)
                      ? (t = b.a.ELASTIC_POOLS_ELASTIC_POOLS_CLICKED)
                      : C.pathname.startsWith(d.h.MY_POOLS) && (t = b.a.ELASTIC_MYPOOLS_ELASTIC_POOLS_CLICKED),
                      t && y(t),
                      _({ search: Object(r.stringify)(e) }, { replace: !0 })
                  }
                },
                children: [
                  Object(O.jsx)(x.G, { size: 20, color: v === l.c.ELASTIC ? I.primary : I.subText }),
                  Object(O.jsx)(a.d, {
                    fontWeight: 500,
                    fontSize: [18, 20, 24],
                    color: v === l.c.ELASTIC ? (w ? I.disableText : I.primary) : I.subText,
                    width: 'auto',
                    marginLeft: '4px',
                    role: 'button',
                    style: { cursor: w ? 'not-allowed' : 'pointer' },
                    children: S
                      ? Object(O.jsx)(i.b, { id: 'Elastic Farms' })
                      : Object(O.jsx)(i.b, { id: 'Elastic Pools' }),
                  }),
                ],
              }),
            }),
            Object(O.jsx)(a.d, {
              fontWeight: 500,
              fontSize: [18, 20, 24],
              color: I.subText,
              marginX: '12px',
              children: '|',
            }),
            Object(O.jsxs)(a.b, {
              alignItems: 'center',
              onClick: () => {
                var e = Object(n.a)(Object(n.a)({}, g), {}, { tab: l.c.CLASSIC })
                _({ search: Object(r.stringify)(e) }, { replace: !0 })
              },
              children: [
                Object(O.jsx)(x.F, { size: 20, color: v === l.c.ELASTIC ? I.subText : I.primary }),
                Object(O.jsx)(a.d, {
                  fontWeight: 500,
                  fontSize: [18, 20, 24],
                  color: v === l.c.CLASSIC ? I.primary : I.subText,
                  width: 'auto',
                  marginLeft: '4px',
                  style: { cursor: 'pointer' },
                  role: 'button',
                  children: S
                    ? Object(O.jsx)(i.b, { id: 'Classic Farms' })
                    : Object(O.jsx)(i.b, { id: 'Liquidity Pools' }),
                }),
              ],
            }),
          ],
        })
      }
    },
    './src/components/Icons/Withdraw.tsx': function (e, t, o) {
      'use strict'
      var n = o('./node_modules/react/jsx-runtime.js')
      t.a = e => {
        var t = e.width,
          o = e.height
        return Object(n.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: t || 16,
          height: o || 16,
          viewBox: '0 0 16 16',
          children: Object(n.jsx)('path', {
            d: 'M3.33337 3.33317C3.33337 3.69984 3.63337 3.99984 4.00004 3.99984H12C12.3667 3.99984 12.6667 3.69984 12.6667 3.33317C12.6667 2.9665 12.3667 2.6665 12 2.6665H4.00004C3.63337 2.6665 3.33337 2.9665 3.33337 3.33317ZM4.94004 9.33317H6.00004V12.6665C6.00004 13.0332 6.30004 13.3332 6.66671 13.3332H9.33337C9.70004 13.3332 10 13.0332 10 12.6665V9.33317H11.06C11.6534 9.33317 11.9534 8.61317 11.5334 8.19317L8.47337 5.13317C8.21337 4.87317 7.79337 4.87317 7.53337 5.13317L4.47337 8.19317C4.05337 8.61317 4.34671 9.33317 4.94004 9.33317Z',
            fill: 'currentColor',
          }),
        })
      }
    },
    './src/components/ProAmm/ProAmmFee.tsx': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return P
      })
      var n = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = o('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        i = o('./node_modules/@lingui/react/esm/index.js'),
        r = o('./node_modules/@lingui/core/esm/index.js'),
        c = o('./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js'),
        a = o('./node_modules/react/index.js'),
        d = o('./node_modules/react-feather/dist/icons/info.js'),
        l = o('./node_modules/rebass/dist/index.esm.js'),
        u = o('./src/components/Button/index.tsx'),
        b = o('./src/components/Card/index.tsx'),
        j = o('./src/components/Column/index.tsx'),
        m = o('./src/components/CurrencyLogo/index.tsx'),
        p = o('./src/components/Divider/index.tsx'),
        x = o('./src/components/FormattedCurrencyAmount/index.tsx'),
        h = o('./src/components/QuestionHelper/index.tsx'),
        O = o('./src/components/Row/index.tsx'),
        f = o('./src/components/Tooltip/index.tsx'),
        g = o('./src/hooks/index.ts'),
        v = o('./src/hooks/useContract.ts'),
        y = o('./src/hooks/useMixpanel.ts'),
        k = o('./src/hooks/useTheme.ts'),
        w = o('./src/hooks/useTransactionDeadline.ts'),
        I = o('./src/state/transactions/hooks.tsx'),
        C = o('./src/state/transactions/type.ts'),
        _ = o('./src/state/user/hooks.tsx'),
        S = o('./src/utils/index.ts'),
        T = o('./src/utils/wrappedCurrency.ts'),
        L = o('./node_modules/react/jsx-runtime.js')
      function P(e) {
        var t = e.tokenId,
          o = e.position,
          P = e.layout,
          A = void 0 === P ? 0 : P,
          E = e.text,
          R = void 0 === E ? '' : E,
          M = e.hasUserDepositedInFarm,
          z = e.feeValue0,
          F = e.feeValue1,
          q = e.totalFeeRewardUSD,
          W = Object(g.b)().account,
          N = Object(g.e)().library,
          D = Object(k.a)(),
          B = Object(T.a)(o.pool.token0),
          U = Object(T.a)(o.pool.token1),
          H = Object(I.g)(),
          Y = Object(v.o)(),
          V = Object(w.a)(),
          G = Object(y.c)().mixpanelHandler,
          Q = Object(_.x)(),
          K = Object(s.a)(Q, 1)[0],
          J = o.liquidity.toString(),
          X = Object(a.useCallback)(() => {
            if (z && F && Y && W && t && N && V && A) {
              G(y.a.ELASTIC_COLLECT_FEES_INITIATED, {
                token_1: null === B || void 0 === B ? void 0 : B.symbol,
                token_2: null === U || void 0 === U ? void 0 : U.symbol,
              })
              var e = c.NonfungiblePositionManager.collectCallParameters({
                  tokenId: t.toString(),
                  expectedCurrencyOwed0: z.subtract(z.multiply(Object(S.a)(K))),
                  expectedCurrencyOwed1: F.subtract(F.multiply(Object(S.a)(K))),
                  recipient: W,
                  deadline: V.toString(),
                  havingFee: !0,
                  isPositionClosed: '0' === J,
                }),
                o = e.calldata,
                s = e.value,
                i = { to: Y.address, data: o, value: s }
              N.getSigner()
                .estimateGas(i)
                .then(e => {
                  var t = Object(n.a)(Object(n.a)({}, i), {}, { gasLimit: Object(S.b)(e) })
                  return N.getSigner()
                    .sendTransaction(t)
                    .then(e => {
                      var t,
                        o,
                        n = z.toSignificant(6),
                        s = F.toSignificant(6),
                        i = null !== (t = z.currency.symbol) && void 0 !== t ? t : '',
                        r = null !== (o = F.currency.symbol) && void 0 !== o ? o : ''
                      H({
                        hash: e.hash,
                        type: C.c.ELASTIC_COLLECT_FEE,
                        extraInfo: {
                          tokenAmountIn: n,
                          tokenAmountOut: s,
                          tokenAddressIn: z.currency.wrapped.address,
                          tokenAddressOut: F.currency.wrapped.address,
                          tokenSymbolIn: i,
                          tokenSymbolOut: r,
                          arbitrary: {
                            token_1: null === B || void 0 === B ? void 0 : B.symbol,
                            token_2: null === U || void 0 === U ? void 0 : U.symbol,
                            token_1_amount: n,
                            token_2_amount: s,
                          },
                        },
                      })
                    })
                })
                .catch(e => {
                  console.error(e)
                })
            }
          }, [z, F, Y, W, t, H, N, V, A, B, U, G, K, J]),
          Z = !((null !== z && void 0 !== z && z.greaterThan(0)) || (null !== F && void 0 !== F && F.greaterThan(0)))
        return 0 === A
          ? Object(L.jsx)(b.e, {
              marginTop: '1rem',
              padding: '1rem',
              children: Object(L.jsxs)(j.a, {
                gap: 'md',
                children: [
                  Object(L.jsx)(l.d, { fontSize: '16px', fontWeight: '500', children: 'Your Fee Earnings' }),
                  R && Object(L.jsx)(l.d, { color: D.subText, fontSize: '12px', children: R }),
                  Object(L.jsx)(p.a, {}),
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsx)(l.d, {
                        fontSize: 12,
                        fontWeight: 500,
                        color: D.subText,
                        children: Object(L.jsx)(i.b, { id: 'Total Fees Earned' }),
                      }),
                      Object(L.jsx)(O.d, {
                        children: Object(L.jsx)(l.d, {
                          fontSize: 14,
                          fontWeight: 500,
                          marginLeft: '6px',
                          children: Object(S.j)(q, !0),
                        }),
                      }),
                    ],
                  }),
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsx)(l.d, {
                        fontSize: 12,
                        fontWeight: 500,
                        color: D.subText,
                        children: Object(L.jsx)(i.b, { id: '{0} Fees Earned', values: { 0: B.symbol } }),
                      }),
                      Object(L.jsxs)(O.d, {
                        children: [
                          Object(L.jsx)(m.a, { size: '16px', style: { marginLeft: '8px' }, currency: B }),
                          Object(L.jsxs)(l.d, {
                            fontSize: 14,
                            fontWeight: 500,
                            marginLeft: '6px',
                            children: [z && Object(L.jsx)(x.a, { currencyAmount: z }), ' ', B.symbol],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsx)(l.d, {
                        fontSize: 12,
                        fontWeight: 500,
                        color: D.subText,
                        children: Object(L.jsx)(i.b, { id: '{0} Fees Earned', values: { 0: U.symbol } }),
                      }),
                      Object(L.jsxs)(O.d, {
                        children: [
                          Object(L.jsx)(m.a, { size: '16px', style: { marginLeft: '8px' }, currency: U }),
                          Object(L.jsxs)(l.d, {
                            fontSize: 14,
                            fontWeight: 500,
                            marginLeft: '6px',
                            children: [F && Object(L.jsx)(x.a, { currencyAmount: F }), ' ', U.symbol],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          : Object(L.jsx)(b.e, {
              marginTop: '1rem',
              padding: '1rem',
              children: Object(L.jsxs)(j.a, {
                gap: 'md',
                children: [
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsx)(l.b, {
                        children: Object(L.jsx)(l.d, {
                          fontSize: 12,
                          fontWeight: 500,
                          color: D.subText,
                          children: Object(L.jsx)(i.b, { id: 'Total Fees Earned' }),
                        }),
                      }),
                      Object(L.jsx)(O.d, {
                        children: Object(L.jsx)(l.d, { fontSize: 12, fontWeight: 500, children: Object(S.j)(q, !0) }),
                      }),
                    ],
                  }),
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsxs)(l.b, {
                        children: [
                          Object(L.jsx)(l.d, {
                            fontSize: 12,
                            fontWeight: 500,
                            color: D.subText,
                            children: Object(L.jsx)(i.b, { id: '{0} Fees Earned', values: { 0: B.symbol } }),
                          }),
                          Object(L.jsx)(h.a, {
                            text: r.a._('Your fees are being automatically compounded so you earn more'),
                          }),
                        ],
                      }),
                      Object(L.jsxs)(O.d, {
                        children: [
                          Object(L.jsx)(m.a, { size: '16px', style: { marginLeft: '8px' }, currency: B }),
                          Object(L.jsxs)(l.d, {
                            fontSize: 12,
                            fontWeight: 500,
                            marginLeft: '6px',
                            children: [z && Object(L.jsx)(x.a, { currencyAmount: z }), ' ', B.symbol],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(L.jsxs)(O.b, {
                    children: [
                      Object(L.jsxs)(l.b, {
                        children: [
                          Object(L.jsx)(l.d, {
                            fontSize: 12,
                            fontWeight: 500,
                            color: D.subText,
                            children: Object(L.jsx)(i.b, { id: '{0} Fees Earned', values: { 0: U.symbol } }),
                          }),
                          Object(L.jsx)(h.a, {
                            text: r.a._('Your fees are being automatically compounded so you earn more'),
                          }),
                        ],
                      }),
                      Object(L.jsxs)(O.d, {
                        children: [
                          Object(L.jsx)(m.a, { size: '16px', style: { marginLeft: '8px' }, currency: U }),
                          Object(L.jsxs)(l.d, {
                            fontSize: 12,
                            fontWeight: 500,
                            marginLeft: '6px',
                            children: [F && Object(L.jsx)(x.a, { currencyAmount: F }), ' ', U.symbol],
                          }),
                        ],
                      }),
                    ],
                  }),
                  M
                    ? Object(L.jsx)(f.a, {
                        placement: 'top',
                        text: r.a._('You need to withdraw your deposited liquidity position from the Farm first'),
                        children: Object(L.jsx)(l.b, {
                          sx: { cursor: 'not-allowed', width: '100%' },
                          children: Object(L.jsx)(u.g, {
                            style: { padding: '10px', fontSize: '14px', width: '100%', pointerEvents: 'none' },
                            disabled: !0,
                            children: Object(L.jsxs)(l.b, {
                              alignItems: 'center',
                              sx: { gap: '8px' },
                              children: [Object(L.jsx)(d.a, { size: 16 }), Object(L.jsx)(i.b, { id: 'Collect Fees' })],
                            }),
                          }),
                        }),
                      })
                    : Object(L.jsx)(u.g, {
                        disabled: Z,
                        onClick: X,
                        style: { padding: '10px', fontSize: '14px' },
                        children: Object(L.jsxs)(l.b, {
                          alignItems: 'center',
                          sx: { gap: '8px' },
                          children: [
                            Object(L.jsx)(h.a, {
                              placement: 'top',
                              size: 16,
                              text: Z
                                ? r.a._("You don't have any fees to collect")
                                : r.a._('By collecting, you will receive 100% of your fee earnings'),
                              useCurrentColor: !0,
                            }),
                            Object(L.jsx)(i.b, { id: 'Collect Fees' }),
                          ],
                        }),
                      }),
                ],
              }),
            })
      }
    },
    './src/components/Search/index.tsx': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return l
      }),
        o.d(t, 'b', function () {
          return b
        })
      var n = o('./node_modules/@lingui/core/esm/index.js'),
        s = (o('./node_modules/react/index.js'), o('./node_modules/react-feather/dist/icons/x.js')),
        i = o('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        r = o('./src/components/Button/index.tsx'),
        c = o('./node_modules/react/jsx-runtime.js')
      var a = function (e) {
          var t = e.size,
            o = void 0 === t ? 24 : t,
            n = e.color
          return Object(c.jsx)('svg', {
            width: o || 24,
            height: o || 24,
            viewBox: '0 0 '.concat(o, ' ').concat(o),
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: { minWidth: o + 'px' },
            children: Object(c.jsxs)('svg', {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                Object(c.jsx)('path', {
                  d: 'M14.1931 5.58187C16.525 7.91369 16.525 11.6943 14.1931 14.0261C11.8613 16.358 8.08069 16.358 5.74887 14.0261C3.41704 11.6943 3.41704 7.91369 5.74887 5.58187C8.08069 3.25005 11.8613 3.25005 14.1931 5.58187',
                  stroke: n || 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                Object(c.jsx)('path', {
                  d: 'M14.1499 14.06L19.9999 19.99',
                  stroke: n || 'currentColor',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }),
          })
        },
        d = o('./src/hooks/useTheme.ts'),
        l = i.default.div.withConfig({ displayName: 'Search__Container', componentId: 'sc-1uuk9w1-0' })(
          [
            'z-index:1;position:relative;background-color:',
            ';border-radius:999px;@media screen and (max-width:768px){width:100%;}',
          ],
          e => e.theme.background,
        ),
        u = i.default.div.withConfig({ displayName: 'Search__Wrapper', componentId: 'sc-1uuk9w1-1' })(
          [
            'display:flex;position:relative;flex-direction:row;align-items:center;justify-content:flex-end;padding:6px 12px;border-radius:40px;width:100%;min-width:',
            ';box-sizing:border-box;@media screen and (max-width:500px){box-shadow:none;min-width:100%;}',
          ],
          e => e.minWidth || '360px',
        ),
        b = i.default.input.withConfig({ displayName: 'Search__Input', componentId: 'sc-1uuk9w1-2' })(
          [
            'position:relative;display:flex;align-items:center;white-space:nowrap;background:none;border:none;outline:none;width:100%;color:',
            ';font-size:12px;::placeholder{color:',
            ';font-size:12px;}',
          ],
          e => e.theme.text,
          e => e.theme.subText,
        )
      t.c = e => {
        var t = e.searchValue,
          o = e.onSearch,
          i = e.placeholder,
          j = e.minWidth,
          m = e.style,
          p = Object(d.a)()
        return Object(c.jsx)(l, {
          style: m,
          children: Object(c.jsxs)(u, {
            minWidth: j,
            children: [
              Object(c.jsx)(b, {
                type: 'text',
                placeholder: i || n.a._('Search by pool address'),
                value: t,
                onChange: e => {
                  o(e.target.value)
                },
              }),
              t &&
                Object(c.jsx)(r.d, {
                  onClick: () => o(''),
                  style: { padding: '2px 4px', width: 'max-content' },
                  children: Object(c.jsx)(s.a, { color: p.subText, size: 14, style: { minWidth: '14px' } }),
                }),
              Object(c.jsx)(a, { color: p.subText }),
            ],
          }),
        })
      }
    },
    './src/components/SubscribeButton/index.tsx': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return v
      })
      var n,
        s,
        i = o('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        r = o('./node_modules/@lingui/react/esm/index.js'),
        c = o('./node_modules/react/index.js'),
        a = o('./node_modules/rebass/dist/index.esm.js'),
        d = o('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        l = o('./src/components/Icons/NotificationIcon.tsx'),
        u = o('./src/hooks/index.ts'),
        b = o('./src/hooks/useMixpanel.ts'),
        j = o('./src/hooks/useNotification/index.ts'),
        m = o('./src/hooks/useTheme.ts'),
        p = o('./src/components/Button/index.tsx'),
        x = o('./src/components/Tooltip/index.tsx'),
        h = o('./node_modules/react/jsx-runtime.js'),
        O = e =>
          Object(d.css)(['width:36px;min-width:36px;padding:6px;background:', ';&:hover{background:', ';}'], e, e),
        f = Object(d.default)(p.i).withConfig({
          displayName: 'SubscribeButton__SubscribeBtn',
          componentId: 'sc-qmp7hf-0',
        })(
          [
            'overflow:hidden;width:fit-content;height:36px;padding:8px 12px;background:',
            ';color:',
            ';&:hover{background:',
            ';}',
            ';',
            '',
          ],
          e => e.bgColor,
          e => {
            var t = e.theme
            return e.isDisabled ? t.border : t.textReverse
          },
          e => e.bgColor,
          e => {
            var t = e.iconOnly,
              o = e.bgColor
            return t && O(o)
          },
          e => {
            var t = e.theme,
              o = e.bgColor
            return t.mediaWidth.upToExtraSmall(n || (n = Object(i.a)(['\n   ', '\n  '])), O(o))
          },
        ),
        g = Object(d.default)(a.d).withConfig({
          displayName: 'SubscribeButton__ButtonText',
          componentId: 'sc-qmp7hf-1',
        })(
          ['font-size:14px;font-weight:500;margin-left:6px !important;', ';', ''],
          e => e.iconOnly && 'display: none',
          e => e.theme.mediaWidth.upToExtraSmall(s || (s = Object(i.a)(['\n    display: none;\n  ']))),
        )
      function v(e) {
        var t = e.subscribeTooltip,
          o = e.iconOnly,
          n = void 0 !== o && o,
          s = e.trackingEvent,
          i = Object(m.a)(),
          a = Object(u.e)().account,
          d = Object(b.c)().mixpanelHandler,
          p = Object(j.a)().showNotificationModal,
          O = Object(c.useRef)(!1)
        Object(c.useEffect)(() => {
          a && O.current && (p(), (O.current = !1))
        }, [a, p])
        return Object(h.jsx)(x.b, {
          text: t,
          width: '400px',
          children: Object(h.jsxs)(f, {
            bgColor: i.primary,
            onClick: () => {
              p(),
                s &&
                  setTimeout(() => {
                    d(s)
                  }, 100),
                a || (O.current = !0)
            },
            iconOnly: n,
            children: [
              Object(h.jsx)(l.a, {}),
              Object(h.jsx)(g, { iconOnly: n, children: Object(h.jsx)(r.b, { id: 'Subscribe' }) }),
            ],
          }),
        })
      }
    },
    './src/components/SwitchLocaleLink/index.tsx': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return x
      })
      var n,
        s = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        i = o('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        r = o('./node_modules/querystring-es3/index.js'),
        c = o('./node_modules/react/index.js'),
        a = o('./node_modules/react-router/dist/index.js'),
        d = o('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        l = o('./src/constants/locales.tsx'),
        u = o('./src/hooks/useActiveLocale.ts'),
        b = o('./src/hooks/useParsedQueryString.ts'),
        j = o('./src/theme/index.tsx'),
        m = o('./node_modules/react/jsx-runtime.js'),
        p = Object(d.default)(j.j.small).withConfig({
          displayName: 'SwitchLocaleLink__Container',
          componentId: 'sc-1rrcg41-0',
        })(['opacity:0.6;:hover{opacity:1;}margin-top:1rem !important;', ';'], e =>
          e.theme.mediaWidth.upToMedium(n || (n = Object(i.a)(['\n    display: none;\n  ']))),
        )
      function x() {
        var e = Object(u.b)(),
          t = Object(c.useMemo)(() => Object(u.a)(), []),
          o = Object(a.k)(),
          n = Object(b.a)()
        if (t && (t !== l.a || e !== l.a)) {
          var i
          i = e === t ? l.a : t
          var d = Object(s.a)(
            Object(s.a)({}, o),
            {},
            { search: Object(r.stringify)(Object(s.a)(Object(s.a)({}, n), {}, { lng: i })) },
          )
          return Object(m.jsxs)(p, {
            children: ['KyberSwap available in: ', Object(m.jsx)(j.i, { to: d, children: Object(l.c)(i) })],
          })
        }
        return null
      }
    },
    './src/data/TotalSupply.ts': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return r
      })
      var n = o('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        s = o('./src/hooks/useContract.ts'),
        i = o('./src/state/multicall/hooks.ts')
      function r(e) {
        var t,
          o,
          r = Object(s.u)(null === e || void 0 === e ? void 0 : e.address, !1),
          c =
            null === (t = Object(i.c)(r, 'totalSupply')) || void 0 === t || null === (o = t.result) || void 0 === o
              ? void 0
              : o[0]
        return e && c ? n.TokenAmount.fromRawAmount(e, c.toString()) : void 0
      }
    },
    './src/hooks/useIsTickAtLimit.ts': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return r
      })
      var n = o('./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js'),
        s = o('./node_modules/react/index.js'),
        i = o('./src/state/mint/proamm/type.ts')
      function r(e, t, o) {
        return Object(s.useMemo)(
          () => ({
            [i.a.LOWER]: e && t ? t === Object(n.nearestUsableTick)(n.TickMath.MIN_TICK, n.TICK_SPACINGS[e]) : void 0,
            [i.a.UPPER]: e && o ? o === Object(n.nearestUsableTick)(n.TickMath.MAX_TICK, n.TICK_SPACINGS[e]) : void 0,
          }),
          [e, t, o],
        )
      }
    },
    './src/hooks/useProAmmPositions.ts': function (e, t, o) {
      'use strict'
      o.d(t, 'c', function () {
        return p
      }),
        o.d(t, 'b', function () {
          return x
        }),
        o.d(t, 'a', function () {
          return h
        })
      var n = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = o('./node_modules/@ethersproject/abi/lib.esm/abi-coder.js'),
        i = o('./node_modules/@ethersproject/address/lib.esm/index.js'),
        r = o('./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js'),
        c = o('./node_modules/@ethersproject/solidity/lib.esm/index.js'),
        a = o('./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js'),
        d = o('./node_modules/react/index.js'),
        l = o('./src/hooks/index.ts'),
        u = o('./src/state/farms/elastic/hooks.ts'),
        b = o('./src/state/multicall/hooks.ts'),
        j = o('./src/hooks/useContract.ts')
      function m(e) {
        var t = Object(j.o)(),
          o = Object(l.b)(),
          r = o.isEVM,
          a = o.networkInfo,
          u = Object(d.useMemo)(() => (e ? e.map(e => [e]) : []), [e]),
          m = Object(b.d)(t, 'positions', u),
          p = Object(d.useMemo)(() => m.some(e => e.loading), [m]),
          x = Object(d.useMemo)(() => m.some(e => e.error), [m]),
          h = Object(d.useMemo)(() => {
            if (!p && !x && e && r)
              return m.map((t, o) => {
                var n = e[o],
                  r = t.result
                return {
                  tokenId: n,
                  poolId: Object(i.getCreate2Address)(
                    a.elastic.coreFactory,
                    Object(c.keccak256)(
                      ['bytes'],
                      [s.b.encode(['address', 'address', 'uint24'], [r.info.token0, r.info.token1, r.info.fee])],
                    ),
                    a.elastic.initCodeHash,
                  ),
                  feeGrowthInsideLast: r.pos.feeGrowthInsideLast,
                  nonce: r.pos.nonce,
                  liquidity: r.pos.liquidity,
                  operator: r.pos.operator,
                  tickLower: r.pos.tickLower,
                  tickUpper: r.pos.tickUpper,
                  rTokenOwed: r.pos.rTokenOwed,
                  fee: r.info.fee,
                  token0: r.info.token0,
                  token1: r.info.token1,
                }
              })
          }, [p, x, m, e, a, r])
        return Object(d.useMemo)(
          () => ({
            loading: p,
            positions:
              null === h || void 0 === h
                ? void 0
                : h.map((e, t) => Object(n.a)(Object(n.a)({}, e), {}, { tokenId: u[t][0] })),
          }),
          [p, h, u],
        )
      }
      function p(e) {
        var t,
          o = m(e ? [e] : void 0)
        return { loading: o.loading, position: null === (t = o.positions) || void 0 === t ? void 0 : t[0] }
      }
      function x(e) {
        var t,
          o = Object(j.o)(),
          n = Object(b.c)(o, 'balanceOf', [null !== e && void 0 !== e ? e : void 0]),
          s = n.loading,
          i = n.result,
          c = null === i || void 0 === i || null === (t = i[0]) || void 0 === t ? void 0 : t.toNumber(),
          a = Object(d.useMemo)(() => {
            if (c && e) {
              for (var t = [], o = 0; o < c; o++) t.push([e, o])
              return t
            }
            return []
          }, [e, c]),
          l = Object(b.d)(o, 'tokenOfOwnerByIndex', a),
          u = Object(d.useMemo)(() => l.some(e => e.loading), [l]),
          p = m(
            Object(d.useMemo)(
              () =>
                e
                  ? l
                      .map(e => e.result)
                      .filter(e => !!e)
                      .map(e => r.a.from(e[0]))
                  : [],
              [e, l],
            ),
          ),
          x = p.positions,
          h = p.loading
        return Object(d.useMemo)(() => ({ loading: u || s || h, positions: x }), [u, s, h, x])
      }
      var h = () => {
        var e = Object(l.b)(),
          t = e.isEVM,
          o = e.networkInfo,
          n = Object(u.b)(),
          s = n.farms,
          i = n.loading,
          c = n.userFarmInfo,
          b = Object(d.useMemo)(() => (null === s || void 0 === s ? void 0 : s.map(e => e.pools).flat()) || [], [s]),
          j = Object(d.useMemo)(() => {
            var e,
              t = Date.now() / 1e3
            return (
              (null === s || void 0 === s || null === (e = s.map(e => e.pools).flat()) || void 0 === e
                ? void 0
                : e.filter(e => e.endTime >= t).map(e => e.poolAddress.toLowerCase())) || []
            )
          }, [s]),
          m = Object(d.useMemo)(
            () =>
              t
                ? Object.values(c || {})
                    .map(e =>
                      e.depositedPositions
                        .map(t => {
                          var n,
                            s = Object(a.computePoolAddress)({
                              factoryAddress: o.elastic.coreFactory,
                              tokenA: t.pool.token0,
                              tokenB: t.pool.token1,
                              fee: t.pool.fee,
                              initCodeHashManualOverride: o.elastic.initCodeHash,
                            }),
                            i = b.filter(e => e.poolAddress.toLowerCase() === s.toLowerCase()),
                            c =
                              Object.values(e.joinedPositions)
                                .flat()
                                .filter(e => e.nftId.toString() === t.nftId.toString())
                                .reduce(
                                  (e, t) =>
                                    e.gt(r.a.from(t.liquidity.toString())) ? e : r.a.from(t.liquidity.toString()),
                                  r.a.from(0),
                                ) || r.a.from(0)
                          return {
                            nonce: r.a.from('1'),
                            tokenId: t.nftId,
                            operator: '0x0000000000000000000000000000000000000000',
                            poolId: s,
                            tickLower: t.tickLower,
                            tickUpper: t.tickUpper,
                            liquidity: r.a.from(t.liquidity.toString()),
                            feeGrowthInsideLast: r.a.from(0),
                            stakedLiquidity: c,
                            rTokenOwed: r.a.from(0),
                            token0: t.pool.token0.address,
                            token1: t.pool.token1.address,
                            fee: t.pool.fee,
                            endTime:
                              null === i || void 0 === i || null === (n = i[0]) || void 0 === n ? void 0 : n.endTime,
                            rewardPendings: [],
                          }
                        })
                        .flat(),
                    )
                    .flat()
                    .filter(e => e.liquidity.gt(0))
                : [],
            [b, c, t, o],
          )
        return Object(d.useMemo)(
          () => ({ farms: s, userFarmInfo: c, activeFarmAddress: j, farmPositions: m, loading: i }),
          [i, m, j, s, c],
        )
      }
    },
    './src/pages/Pool/index.tsx': function (e, t, o) {
      'use strict'
      o.r(t),
        o.d(t, 'Tab', function () {
          return bt
        }),
        o.d(t, 'PageWrapper', function () {
          return jt
        }),
        o.d(t, 'InstructionText', function () {
          return mt
        }),
        o.d(t, 'TitleRow', function () {
          return pt
        }),
        o.d(t, 'PositionCardGrid', function () {
          return xt
        }),
        o.d(t, 'FilterRow', function () {
          return ht
        }),
        o.d(t, 'PreloadCard', function () {
          return ft
        }),
        o.d(t, 'default', function () {
          return gt
        })
      var n = o('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = o('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        i = o('./node_modules/@lingui/react/esm/index.js'),
        r = o('./node_modules/@lingui/core/esm/index.js'),
        c = o('./node_modules/@kyberswap/ks-sdk-classic/dist/index.js'),
        a = o('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        d = o('./node_modules/polished/dist/polished.esm.js'),
        l = o('./node_modules/react/index.js'),
        u = o.n(l),
        b = o('./node_modules/react-feather/dist/icons/info.js'),
        j = o('./node_modules/react-router-dom/dist/index.js'),
        m = o('./node_modules/react-router/dist/index.js'),
        p = o('./node_modules/react-use/esm/useMedia.js'),
        x = o('./node_modules/rebass/dist/index.esm.js'),
        h = o('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        O = o('./src/components/Button/index.tsx'),
        f = o('./src/components/Card/index.tsx'),
        g = o('./src/components/ClassicElasticTab.tsx'),
        v = o('./src/components/Column/index.tsx'),
        y = o('./src/components/Icons/Wallet.tsx'),
        k = o('./src/components/Icons/Withdraw.tsx'),
        w = o('./src/components/LocalLoader/index.tsx'),
        I = o('./src/components/PositionCard/index.tsx'),
        C = o('./src/components/Row/index.tsx'),
        _ = o('./src/components/Search/index.tsx'),
        S = o('./src/components/SwitchLocaleLink/index.tsx'),
        T = o('./src/constants/index.ts'),
        L = o('./src/constants/v2.ts'),
        P = o('./src/data/Reserves.ts'),
        A = o('./src/hooks/index.ts'),
        E = o('./src/hooks/Tokens.ts'),
        R = o('./src/hooks/useDebounce.ts'),
        M = o('./src/hooks/useMixpanel.ts'),
        z = o('./src/hooks/useParsedQueryString.ts'),
        F = o('./src/hooks/useSyncNetworkParamWithStore.ts'),
        q = o('./src/hooks/useTheme.ts'),
        W = o('./node_modules/react-device-detect/main.js'),
        N = o('./src/components/SubscribeButton/index.tsx'),
        D = o('./src/components/Toggle/index.tsx'),
        B = o('./src/hooks/useProAmmPositions.ts'),
        U = o('./src/state/farms/elastic/hooks.ts'),
        H = o('./src/theme/index.tsx'),
        Y = o('./src/components/Divider/index.tsx'),
        V = o('./node_modules/react/jsx-runtime.js'),
        G = Object(h.keyframes)(['to{background-position-x:-200%;}']),
        Q = h.default.div.withConfig({ displayName: 'ContentLoader__StyledPositionCard', componentId: 'sc-1m7nxe9-0' })(
          [
            'border:none;background:',
            ';position:relative;overflow:hidden;border-radius:20px;padding:28px 20px 16px;display:flex;gap:1rem;flex-direction:column;',
          ],
          e => e.theme.background,
        ),
        K = h.default.div.withConfig({ displayName: 'ContentLoader__Loading', componentId: 'sc-1m7nxe9-1' })(
          [
            'background:linear-gradient( 90deg,',
            ' 8%,',
            ' 18%,',
            ' 33% );border-radius:20px;background-size:200% 100%;animation:1.5s ',
            ' linear infinite;',
          ],
          e => e.theme.tableHeader,
          e => e.theme.tableHeader,
          e => e.theme.tableHeader,
          G,
        ),
        J = Object(h.default)(K).withConfig({ displayName: 'ContentLoader__Title', componentId: 'sc-1m7nxe9-2' })([
          'height:41px;',
        ]),
        X = Object(h.default)(K).withConfig({ displayName: 'ContentLoader__Tab', componentId: 'sc-1m7nxe9-3' })([
          'height:28px;border-radius:999px;',
        ])
      var Z = function () {
          return Object(V.jsxs)(Q, {
            children: [
              Object(V.jsx)(J, {}),
              Object(V.jsx)(X, {}),
              Object(V.jsx)(K, { style: { height: '104px' } }),
              Object(V.jsx)(K, { style: { height: '128px' } }),
              Object(V.jsxs)(x.b, {
                children: [
                  Object(V.jsx)(K, { style: { height: '36px', flex: 1, borderRadius: '999px' } }),
                  Object(V.jsx)(K, { style: { height: '36px', flex: 1, marginLeft: '1rem', borderRadius: '999px' } }),
                ],
              }),
              Object(V.jsx)(Y.a, {}),
              Object(V.jsx)(K, { style: { height: '15px', width: '80px', borderRadius: '999px' } }),
            ],
          })
        },
        $ = o('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        ee = o('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        te = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        oe = o('./node_modules/graphql-tag/lib/index.js'),
        ne = o('./node_modules/@apollo/client/react/hooks/useQuery.js'),
        se = o('./node_modules/ethers/lib/utils.js'),
        ie = o('./src/constants/abis/v2/ProAmmTickReader.json'),
        re = o('./src/hooks/useContract.ts'),
        ce = o('./src/state/application/hooks.ts'),
        ae = o('./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js'),
        de = o('./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js'),
        le = o('./node_modules/querystring-es3/index.js'),
        ue = o('./src/components/ProAmm/ProAmmFee.tsx'),
        be = o('./src/components/ProAmm/ProAmmPoolInfo.tsx'),
        je = o('./src/components/ProAmm/ProAmmPooledTokens.tsx'),
        me = o('./src/components/InfoHelper/index.tsx'),
        pe = o('./src/components/LiquidityChartRangeInput/index.tsx'),
        xe = o('./src/state/mint/proamm/type.ts'),
        he = o('./src/utils/formatTickPrice.ts'),
        Oe = o('./src/utils/wrappedCurrency.ts'),
        fe = o('./src/components/ProAmm/styles.tsx')
      function ge(e) {
        var t = e.position,
          o = e.ticksAtLimit,
          s = Object(q.a)(),
          c = Object(Oe.a)(t.pool.token0),
          a = Object(Oe.a)(t.pool.token1),
          d = Object(l.useState)(c),
          u = Object(n.a)(d, 2),
          b = u[0],
          j = u[1],
          m = b.symbol === c.symbol,
          p = m ? a : c,
          h = m ? t.pool.priceOf(t.pool.token0) : t.pool.priceOf(t.pool.token1),
          O = m ? t.token0PriceLower : t.token0PriceUpper.invert(),
          g = m ? t.token0PriceUpper : t.token0PriceLower.invert(),
          y = Object(l.useCallback)(() => {
            j(p)
          }, [p])
        return Object(V.jsx)(f.e, {
          marginTop: '1rem',
          padding: '1rem',
          children: Object(V.jsxs)(v.a, {
            gap: '12px',
            children: [
              Object(V.jsxs)(x.b, {
                children: [
                  Object(V.jsx)(x.d, {
                    fontSize: 12,
                    fontWeight: 500,
                    color: s.subText,
                    children: Object(V.jsx)(i.b, { id: 'Selected Price Range' }),
                  }),
                  Object(V.jsx)(me.a, {
                    text: r.a._(
                      'Represents the range where all your liquidity is concentrated. When market price of your token pair is no longer between your selected price range, your liquidity becomes inactive and you stop earning fees',
                    ),
                    placement: 'right',
                    size: 12,
                  }),
                ],
              }),
              Object(V.jsxs)('div', {
                children: [
                  Object(V.jsxs)(x.b, {
                    alignItems: 'center',
                    justifyContent: 'center',
                    sx: { gap: '8px' },
                    children: [
                      Object(V.jsx)(x.d, {
                        fontSize: 12,
                        fontWeight: 500,
                        color: s.subText,
                        children: Object(V.jsx)(i.b, { id: 'Current Price' }),
                      }),
                      Object(V.jsxs)(C.d, {
                        children: [
                          Object(V.jsx)(x.d, {
                            fontSize: '12px',
                            fontWeight: '500',
                            style: { textAlign: 'right' },
                            children: ''.concat(h.toSignificant(6), ' ').concat(p.symbol, ' per ').concat(b.symbol),
                          }),
                          Object(V.jsx)('span', {
                            onClick: y,
                            style: { marginLeft: '2px', cursor: 'pointer' },
                            children: Object(V.jsx)(fe.a, { rotated: b !== c, size: 14 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(V.jsx)(pe.a, {
                    style: { minHeight: '180px' },
                    currencyA: b,
                    currencyB: p,
                    feeAmount: t.pool.fee,
                    ticksAtLimit: o,
                    price: h ? parseFloat(h.toSignificant(8)) : void 0,
                    leftPrice: O,
                    rightPrice: g,
                    onLeftRangeInput: () => {},
                    onRightRangeInput: () => {},
                    interactive: !1,
                  }),
                ],
              }),
              Object(V.jsxs)(C.b, {
                style: { gap: '12px' },
                children: [
                  Object(V.jsxs)(x.b, {
                    children: [
                      Object(V.jsx)(x.d, {
                        fontSize: '12px',
                        fontWeight: 500,
                        color: s.subText,
                        children: Object(V.jsx)(i.b, { id: 'Min Price' }),
                      }),
                      Object(V.jsx)(me.a, {
                        text: r.a._('Your position will be 100% composed of {0} at this price', {
                          0: null === b || void 0 === b ? void 0 : b.symbol,
                        }),
                        placement: 'right',
                        size: 12,
                      }),
                    ],
                  }),
                  Object(V.jsx)(x.d, {
                    fontWeight: '500',
                    fontSize: '12px',
                    children: Object(V.jsx)(i.b, {
                      id: '{0} {1} per {2}',
                      values: { 0: Object(he.a)(O, o, xe.a.LOWER), 1: p.symbol, 2: b.symbol },
                    }),
                  }),
                ],
              }),
              Object(V.jsxs)(C.b, {
                style: { gap: '12px' },
                children: [
                  Object(V.jsxs)(x.b, {
                    children: [
                      Object(V.jsx)(x.d, {
                        fontSize: '12px',
                        fontWeight: 500,
                        color: s.subText,
                        children: Object(V.jsx)(i.b, { id: 'Max Price' }),
                      }),
                      Object(V.jsx)(me.a, {
                        text: r.a._('Your position will be 100% composed of {0} at this price', {
                          0: null === p || void 0 === p ? void 0 : p.symbol,
                        }),
                        placement: 'right',
                        size: 12,
                      }),
                    ],
                  }),
                  Object(V.jsx)(x.d, {
                    fontSize: '12px',
                    fontWeight: '500',
                    children: Object(V.jsx)(i.b, {
                      id: '{0} {1} per {2}',
                      values: { 0: Object(he.a)(g, o, xe.a.UPPER), 1: p.symbol, 2: b.symbol },
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var ve,
        ye,
        ke = o('./src/components/Tooltip/index.tsx'),
        we = o('./src/hooks/useIsTickAtLimit.ts'),
        Ie = o('./src/hooks/usePools.ts'),
        Ce = o('./src/state/prommPools/hooks.ts'),
        _e = o('./src/state/tokenPrices/hooks.ts'),
        Se = o('./src/utils/currencyId.ts'),
        Te = o('./src/utils/numbers.ts'),
        Le = Object(h.default)(f.d).withConfig({
          displayName: 'PositionListItem__StyledPositionCard',
          componentId: 'sc-1h9tbli-0',
        })(
          [
            'border:none;background:',
            ';position:relative;overflow:hidden;border-radius:20px;padding:20px;display:flex;flex-direction:column;',
            '',
          ],
          e => e.theme.background,
          e => e.theme.mediaWidth.upToMedium(ve || (ve = Object(s.a)(['\n    padding: 16px;\n  ']))),
        ),
        Pe = h.default.div.withConfig({ displayName: 'PositionListItem__TabContainer', componentId: 'sc-1h9tbli-1' })(
          ['display:flex;border-radius:999px;background-color:', ';padding:2px;'],
          e => e.theme.tabBackgound,
        ),
        Ae = Object(h.default)(O.d).withConfig({ displayName: 'PositionListItem__Tab', componentId: 'sc-1h9tbli-2' })(
          [
            'display:flex;justify-content:center;align-items:center;flex:1;background-color:',
            ';padding:4px;font-size:12px;font-weight:500;border-radius:20px;transition:all 0.2s;&:hover{text-decoration:none;}',
          ],
          e => {
            var t = e.theme
            return e.isActive ? t.tabActive : t.tabBackgound
          },
        ),
        Ee = h.default.div.withConfig({ displayName: 'PositionListItem__TabText', componentId: 'sc-1h9tbli-3' })(
          ['display:flex;align-items:center;gap:2px;color:', ';'],
          e => {
            var t = e.theme
            return e.isActive ? t.text : t.subText
          },
        ),
        Re = h.default.div.withConfig({ displayName: 'PositionListItem__StakedInfo', componentId: 'sc-1h9tbli-4' })(
          ['border-radius:4px;border:1px solid ', ';padding:12px;margin-top:16px;'],
          e => e.theme.border,
        ),
        Me = h.default.div.withConfig({ displayName: 'PositionListItem__StakedRow', componentId: 'sc-1h9tbli-5' })([
          'line-height:24px;display:flex;justify-content:space-between;font-size:12px;',
        ]),
        ze = h.default.div.withConfig({ displayName: 'PositionListItem__ButtonGroup', componentId: 'sc-1h9tbli-6' })([
          'display:flex;gap:1rem;margin-bottom:20px;> *{flex:1 1 50%;}',
        ])
      function Fe(e) {
        var t = e.stakedLayout,
          o = e.hasUserDepositedInFarm,
          s = e.positionDetails,
          c = e.refe,
          d = e.hasActiveFarm,
          u = e.rawFeeRewards,
          b = e.liquidityTime,
          m = e.createdAt,
          p = Object(A.b)(),
          h = p.chainId,
          f = p.networkInfo,
          g = s.token0,
          v = s.token1,
          y = s.fee,
          k = s.liquidity,
          w = s.tickLower,
          I = s.tickUpper,
          _ = s.stakedLiquidity,
          S = Object(U.b)().farms,
          L = '',
          P = '',
          R = []
        null === S ||
          void 0 === S ||
          S.forEach(e => {
            e.pools.forEach(t => {
              t.endTime > Date.now() / 1e3 &&
                t.poolAddress.toLowerCase() === s.poolId.toLowerCase() &&
                ((L = e.id), (P = t.pid), (R = t.rewardTokens))
            })
          })
        var z = Object(re.q)(L),
          F = Object(Ce.a)().blockLast24h,
          W = s.tokenId.toString(),
          N = Object(l.useState)(null),
          D = Object(n.a)(N, 2),
          B = D[0],
          G = D[1]
        Object(l.useEffect)(() => {
          var e = (function () {
            var e = Object(ee.a)(
              Object($.a)().mark(function e() {
                var t, o, s, i, r
                return Object($.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!F || !z) {
                          e.next = 9
                          break
                        }
                        return (
                          (e.next = 3),
                          Promise.all([
                            z
                              .getUserInfo(W, P)
                              .then(e => e.rewardPending)
                              .catch(() => []),
                            z
                              .getUserInfo(W, P, { blockTag: Number(F) })
                              .then(e => e.rewardPending)
                              .catch(() => []),
                          ])
                        )
                      case 3:
                        ;(t = e.sent),
                          (o = Object(n.a)(t, 2)),
                          (s = o[0]),
                          (i = o[1]),
                          (r =
                            null === s || void 0 === s
                              ? void 0
                              : s.map((e, t) => e.sub(de.a.from((null === i || void 0 === i ? void 0 : i[t]) || '0')))),
                          G(r)
                      case 9:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          e()
        }, [F, z, W, P])
        var Q = Object(E.j)(g),
          K = Object(E.j)(v)
        c &&
          Q &&
          !c.current[g.toLocaleLowerCase()] &&
          Q.symbol &&
          (c.current[g.toLocaleLowerCase()] = Q.symbol.toLowerCase()),
          c &&
            K &&
            !c.current[v.toLocaleLowerCase()] &&
            K.symbol &&
            (c.current[v.toLocaleLowerCase()] = K.symbol.toLowerCase())
        var J = Q ? Object(Oe.a)(Q) : void 0,
          X = K ? Object(Oe.a)(K) : void 0,
          te = Object(_e.a)([
            (null === J || void 0 === J ? void 0 : J.wrapped.address) || '',
            (null === X || void 0 === X ? void 0 : X.wrapped.address) || '',
            ...R.map(e => e.wrapped.address),
          ]),
          oe = Object(Ie.b)(null !== J && void 0 !== J ? J : void 0, null !== X && void 0 !== X ? X : void 0, y),
          ne = Object(n.a)(oe, 2)[1],
          se = Object(l.useMemo)(() => {
            if (ne) return new ae.Position({ pool: ne, liquidity: k.toString(), tickLower: w, tickUpper: I })
          }, [k, ne, w, I]),
          ie = J && a.CurrencyAmount.fromRawAmount(J, u[0]),
          ce = X && a.CurrencyAmount.fromRawAmount(X, u[1]),
          me =
            ne && o
              ? new ae.Position({ pool: ne, liquidity: s.stakedLiquidity.toString(), tickLower: w, tickUpper: I })
              : void 0,
          pe =
            parseFloat((null === se || void 0 === se ? void 0 : se.amount0.toExact()) || '0') *
              te[(null === Q || void 0 === Q ? void 0 : Q.wrapped.address) || ''] +
            parseFloat((null === se || void 0 === se ? void 0 : se.amount1.toExact()) || '0') *
              te[(null === K || void 0 === K ? void 0 : K.wrapped.address) || ''],
          xe =
            parseFloat((null === me || void 0 === me ? void 0 : me.amount0.toExact()) || '0') *
              te[(null === Q || void 0 === Q ? void 0 : Q.wrapped.address) || ''] +
            parseFloat((null === me || void 0 === me ? void 0 : me.amount1.toExact()) || '0') *
              te[(null === K || void 0 === K ? void 0 : K.wrapped.address) || ''],
          he =
            Number((null === ie || void 0 === ie ? void 0 : ie.toExact()) || '0') *
              te[(null === Q || void 0 === Q ? void 0 : Q.wrapped.address) || ''] +
            Number((null === ce || void 0 === ce ? void 0 : ce.toExact()) || '0') *
              te[(null === K || void 0 === K ? void 0 : K.wrapped.address) || ''],
          fe = b && pe ? ((100 * ((b && (365 * he * 24 * 60 * 60) / b) || 0)) / pe).toFixed(2) : '--',
          ve = R.reduce((e, t, o) => {
            var n = null === B || void 0 === B ? void 0 : B[o]
            return (
              e +
              +a.CurrencyAmount.fromRawAmount(
                t,
                null !== n && void 0 !== n && n.gt('0') ? (null === n || void 0 === n ? void 0 : n.toString()) : '0',
              ).toExact() *
                te[t.wrapped.address]
            )
          }, 0),
          Fe = null !== B ? (365 * ve * 100) / pe : 0,
          qe = Object(we.a)(y, w, I),
          We = (function (e) {
            if (!e) return {}
            var t = e.amount0.currency,
              o = e.amount1.currency
            return { priceLower: e.token0PriceLower, priceUpper: e.token0PriceUpper, quote: o, base: t }
          })(se),
          Ne = We.priceLower,
          De = We.priceUpper,
          Be = null === k || void 0 === k ? void 0 : k.eq(0),
          Ue = Object(q.a)(),
          He = Object(M.c)().mixpanelHandler,
          Ye = Object(l.useState)(ye.MY_LIQUIDITY),
          Ve = Object(n.a)(Ye, 2),
          Ge = Ve[0],
          Qe = Ve[1],
          Ke = Date.now() / 1e3,
          Je = Be
            ? r.a._('You have zero liquidity to remove')
            : _
            ? r.a._('You need to withdraw your deposited liquidity position from the farms first')
            : ''
        return se && Ne && De
          ? Object(V.jsx)(Le, {
              children: Object(V.jsxs)(V.Fragment, {
                children: [
                  Object(V.jsx)(be.a, { position: se, tokenId: s.tokenId.toString(), isFarmActive: d }),
                  Object(V.jsxs)(Pe, {
                    style: { marginTop: '1rem' },
                    children: [
                      Object(V.jsx)(Ae, {
                        isActive: Ge === ye.MY_LIQUIDITY,
                        padding: '0',
                        onClick: () => Qe(ye.MY_LIQUIDITY),
                        children: Object(V.jsx)(Ee, {
                          isActive: Ge === ye.MY_LIQUIDITY,
                          style: { fontSize: '12px' },
                          children: Object(V.jsx)(i.b, { id: 'My Liquidity' }),
                        }),
                      }),
                      Object(V.jsx)(Ae, {
                        isActive: Ge === ye.PRICE_RANGE,
                        padding: '0',
                        onClick: () => Qe(ye.PRICE_RANGE),
                        children: Object(V.jsx)(Ee, {
                          isActive: Ge === ye.PRICE_RANGE,
                          style: { fontSize: '12px' },
                          children: Object(V.jsx)(i.b, { id: 'Price Range' }),
                        }),
                      }),
                    ],
                  }),
                  Ge === ye.MY_LIQUIDITY &&
                    Object(V.jsxs)(V.Fragment, {
                      children: [
                        t
                          ? Object(V.jsxs)(Re, {
                              children: [
                                Object(V.jsxs)(Me, {
                                  children: [
                                    Object(V.jsx)(x.d, {
                                      color: Ue.subText,
                                      children: Object(V.jsx)(i.b, { id: 'My Staked Balance' }),
                                    }),
                                    Object(V.jsx)(x.d, { children: Object(Te.a)(xe) }),
                                  ],
                                }),
                                Object(V.jsxs)(Me, {
                                  children: [
                                    Object(V.jsx)(x.d, {
                                      color: Ue.subText,
                                      children: Object(V.jsx)(i.b, {
                                        id: 'My Staked {0}',
                                        values: { 0: se.amount0.currency.symbol },
                                      }),
                                    }),
                                    Object(V.jsx)(x.d, {
                                      children: null === me || void 0 === me ? void 0 : me.amount0.toSignificant(6),
                                    }),
                                  ],
                                }),
                                Object(V.jsxs)(Me, {
                                  children: [
                                    Object(V.jsx)(x.d, {
                                      color: Ue.subText,
                                      children: Object(V.jsx)(i.b, {
                                        id: 'My Staked {0}',
                                        values: { 0: se.amount1.currency.symbol },
                                      }),
                                    }),
                                    Object(V.jsx)(x.d, {
                                      children: null === me || void 0 === me ? void 0 : me.amount1.toSignificant(6),
                                    }),
                                  ],
                                }),
                                Object(V.jsxs)(Me, {
                                  children: [
                                    Object(V.jsx)(x.d, {
                                      color: Ue.subText,
                                      children: Object(V.jsx)(i.b, { id: 'My Farm APR' }),
                                    }),
                                    Object(V.jsx)(x.d, { color: Ue.apr, children: Fe ? Fe.toFixed(2) + '%' : '--' }),
                                  ],
                                }),
                              ],
                            })
                          : Object(V.jsx)(je.a, {
                              positionAPR: fe,
                              createdAt: m,
                              farmAPR: Fe,
                              valueUSD: pe,
                              stakedUsd: xe,
                              liquidityValue0: a.CurrencyAmount.fromRawAmount(
                                Object(Oe.a)(se.pool.token0),
                                se.amount0.quotient,
                              ),
                              liquidityValue1: a.CurrencyAmount.fromRawAmount(
                                Object(Oe.a)(se.pool.token1),
                                se.amount1.quotient,
                              ),
                              layout: 1,
                            }),
                        !t &&
                          Object(V.jsx)(ue.a, {
                            totalFeeRewardUSD: he,
                            feeValue0: ie,
                            feeValue1: ce,
                            position: se,
                            tokenId: s.tokenId,
                            layout: 1,
                            hasUserDepositedInFarm: o,
                          }),
                      ],
                    }),
                  Ge === ye.PRICE_RANGE && Object(V.jsx)(ge, { position: se, ticksAtLimit: qe }),
                  Object(V.jsx)('div', { style: { marginTop: '20px' } }),
                  Object(V.jsxs)(x.b, {
                    flexDirection: 'column',
                    marginTop: 'auto',
                    children: [
                      t
                        ? Object(V.jsx)(O.i, {
                            style: {
                              marginBottom: '20px',
                              textDecoration: 'none',
                              color: Ue.textReverse,
                              fontSize: '14px',
                            },
                            padding: '8px',
                            as: H.i,
                            to: ''
                              .concat(T.h.FARMS, '/')
                              .concat(f.route, '?')
                              .concat(
                                Object(le.stringify)({
                                  tab: 'elastic',
                                  type: s.endTime ? (s.endTime > Ke ? 'active' : 'ended') : 'active',
                                  search: s.poolId,
                                }),
                              ),
                            children: Object(V.jsx)(i.b, { id: 'Go to Farm' }),
                          })
                        : Object(V.jsxs)(ze, {
                            children: [
                              Je
                                ? Object(V.jsx)(ke.a, {
                                    text: Je,
                                    placement: 'top',
                                    children: Object(V.jsx)(x.b, {
                                      sx: { cursor: 'not-allowed', width: '100%' },
                                      children: Object(V.jsx)(O.h, {
                                        style: { padding: '8px', width: '100%', pointerEvents: 'none' },
                                        disabled: !0,
                                        children: Object(V.jsx)(x.d, {
                                          width: 'max-content',
                                          fontSize: '14px',
                                          children: Object(V.jsx)(i.b, { id: 'Remove Liquidity' }),
                                        }),
                                      }),
                                    }),
                                  })
                                : Object(V.jsx)(O.h, {
                                    padding: '8px',
                                    as: j.b,
                                    to: '/elastic/remove/'.concat(s.tokenId),
                                    onClick: () => {
                                      He(M.a.ELASTIC_REMOVE_LIQUIDITY_INITIATED, {
                                        token_1: (null === Q || void 0 === Q ? void 0 : Q.symbol) || '',
                                        token_2: (null === K || void 0 === K ? void 0 : K.symbol) || '',
                                        fee_tier: (null === ne || void 0 === ne ? void 0 : ne.fee) / 1e4,
                                      })
                                    },
                                    children: Object(V.jsx)(x.d, {
                                      width: 'max-content',
                                      fontSize: '14px',
                                      children: Object(V.jsx)(i.b, { id: 'Remove Liquidity' }),
                                    }),
                                  }),
                              Be
                                ? Object(V.jsx)(O.i, {
                                    disabled: !0,
                                    padding: '8px',
                                    children: Object(V.jsx)(x.d, {
                                      width: 'max-content',
                                      fontSize: '14px',
                                      children: Object(V.jsx)(i.b, { id: 'Increase Liquidity' }),
                                    }),
                                  })
                                : Object(V.jsx)(O.i, {
                                    padding: '8px',
                                    style: { borderRadius: '18px', fontSize: '14px' },
                                    as: j.b,
                                    to: '/elastic/increase/'
                                      .concat(Object(Se.a)(J, h), '/')
                                      .concat(Object(Se.a)(X, h), '/')
                                      .concat(y, '/')
                                      .concat(s.tokenId),
                                    onClick: () => {
                                      He(M.a.ELASTIC_INCREASE_LIQUIDITY_INITIATED, {
                                        token_1: (null === Q || void 0 === Q ? void 0 : Q.symbol) || '',
                                        token_2: (null === K || void 0 === K ? void 0 : K.symbol) || '',
                                        fee_tier: (null === ne || void 0 === ne ? void 0 : ne.fee) / 1e4,
                                      })
                                    },
                                    children: Object(V.jsx)(x.d, {
                                      width: 'max-content',
                                      fontSize: '14px',
                                      children: Object(V.jsx)(i.b, { id: 'Increase Liquidity' }),
                                    }),
                                  }),
                            ],
                          }),
                      Object(V.jsx)(Y.a, { sx: { marginBottom: '20px' } }),
                      Object(V.jsx)(C.b, {
                        children:
                          o &&
                          Object(V.jsx)(O.d, {
                            width: 'max-content',
                            style: { fontSize: '14px' },
                            padding: '0',
                            children: Object(V.jsx)(H.i, {
                              style: { width: '100%', textAlign: 'center' },
                              to: ''.concat(T.h.FARMS, '/').concat(f.route),
                              children: Object(V.jsx)(i.b, { id: 'Go to Farms \u2197' }),
                            }),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : Object(V.jsx)(Z, {})
      }
      !(function (e) {
        ;(e.MY_LIQUIDITY = 'my-liquidity'), (e.PRICE_RANGE = 'price-range')
      })(ye || (ye = {}))
      var qe,
        We,
        Ne,
        De = u.a.memo(Fe),
        Be = h.default.div.withConfig({ displayName: 'PositionGrid__PositionCardGrid', componentId: 'sc-16r7iof-0' })(
          [
            'display:grid;grid-template-columns:minmax(392px,auto) minmax(392px,auto) minmax(392px,auto);gap:24px;max-width:1224px;',
            ' ',
            ';',
          ],
          e =>
            e.theme.mediaWidth.upToLarge(
              qe || (qe = Object(s.a)(['\n    grid-template-columns: 1fr 1fr;\n    max-width: 832px;\n  '])),
            ),
          e =>
            e.theme.mediaWidth.upToSmall(
              We || (We = Object(s.a)(['\n    grid-template-columns: 1fr;\n    max-width: 392px;\n  '])),
            ),
        ),
        Ue = new se.Interface(ie.abi),
        He = Object(oe.a)(
          Ne ||
            (Ne = Object(s.a)([
              '\n  query positions($ids: [String]!) {\n    positions(where: { id_in: $ids }) {\n      id\n      createdAtTimestamp\n      lastCollectedFeeAt\n    }\n  }\n',
            ])),
        )
      var Ye,
        Ve,
        Ge = function (e) {
          var t = e.positions,
            o = e.style,
            s = e.refe,
            i = e.activeFarmAddress,
            r = Object(A.b)(),
            c = r.isEVM,
            a = r.networkInfo,
            d = r.chainId,
            u = Object(re.k)(),
            b = Object(ce.g)(d).elasticClient,
            j = Object(l.useState)(() =>
              t.reduce((e, t) => Object(te.a)(Object(te.a)({}, e), {}, { [t.tokenId.toString()]: ['0', '0'] }), {}),
            ),
            m = Object(n.a)(j, 2),
            p = m[0],
            x = m[1],
            h = Object(l.useMemo)(() => t.map(e => e.tokenId.toString()), [t]),
            O = Object(ne.b)(He, {
              client: b,
              variables: { ids: h },
              fetchPolicy: 'cache-first',
              skip: !c || !h.length,
            }).data,
            f = Date.now() / 1e3,
            g =
              null === O || void 0 === O
                ? void 0
                : O.positions.reduce(
                    (e, t) => Object(te.a)(Object(te.a)({}, e), {}, { [t.id]: f - Number(t.lastCollectedFeeAt) }),
                    {},
                  ),
            v =
              null === O || void 0 === O
                ? void 0
                : O.positions.reduce(
                    (e, t) => Object(te.a)(Object(te.a)({}, e), {}, { [t.id]: Number(t.createdAtTimestamp) }),
                    {},
                  ),
            y = Object(l.useCallback)(
              Object(ee.a)(
                Object($.a)().mark(function e() {
                  var o, n, s, i
                  return Object($.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (u) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return')
                        case 2:
                          return (
                            (o = Ue.getFunction('getTotalFeesOwedToPosition')),
                            (n = t.map(e => ({
                              target: a.elastic.tickReader,
                              callData: Ue.encodeFunctionData(o, [
                                a.elastic.nonfungiblePositionManager,
                                e.poolId,
                                e.tokenId,
                              ]),
                            }))),
                            (e.next = 6),
                            null === u || void 0 === u ? void 0 : u.callStatic.tryBlockAndAggregate(!1, n)
                          )
                        case 6:
                          ;(s = e.sent),
                            (i = s.returnData),
                            x(
                              i.reduce((e, n, s) => {
                                if (n.success) {
                                  var i = Ue.decodeFunctionResult(o, n.returnData)
                                  return Object(te.a)(
                                    Object(te.a)({}, e),
                                    {},
                                    { [t[s].tokenId.toString()]: [i.token0Owed.toString(), i.token1Owed.toString()] },
                                  )
                                }
                                return Object(te.a)(Object(te.a)({}, e), {}, { [t[s].tokenId.toString()]: ['0', '0'] })
                              }, {}),
                            )
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              ),
              [u, t, a],
            )
          return (
            Object(l.useEffect)(() => {
              y()
            }, [y]),
            Object(V.jsx)(Be, {
              style: o,
              children: t.map(e =>
                Object(V.jsx)(
                  De,
                  {
                    refe: s,
                    positionDetails: e,
                    rawFeeRewards: p[e.tokenId.toString()] || ['0', '0'],
                    liquidityTime: null === g || void 0 === g ? void 0 : g[e.tokenId.toString()],
                    createdAt: null === v || void 0 === v ? void 0 : v[e.tokenId.toString()],
                    hasUserDepositedInFarm: !!e.stakedLiquidity,
                    hasActiveFarm: i.includes(e.poolId.toLowerCase()),
                  },
                  e.tokenId.toString(),
                ),
              ),
            })
          )
        },
        Qe = h.default.span.withConfig({ displayName: 'ProAmmPool__Highlight', componentId: 'sc-1x21ql8-0' })(
          ['color:', ';'],
          e => e.theme.text,
        ),
        Ke = h.default.div.withConfig({ displayName: 'ProAmmPool__TabRow', componentId: 'sc-1x21ql8-1' })(
          ['display:flex;justify-content:space-between;align-items:center;gap:12px;', ''],
          e =>
            e.theme.mediaWidth.upToLarge(
              Ye || (Ye = Object(s.a)(['\n    gap: 1rem;\n    width: 100%;\n    flex-direction: column;\n  '])),
            ),
        ),
        Je = h.default.div.withConfig({ displayName: 'ProAmmPool__TabWrapper', componentId: 'sc-1x21ql8-2' })(
          ['display:flex;align-items:center;gap:1rem;', ''],
          e => e.theme.mediaWidth.upToSmall(Ve || (Ve = Object(s.a)(['\n    gap: 8px;\n  ']))),
        ),
        Xe = e =>
          Object(V.jsx)(N.a, {
            iconOnly: e,
            subscribeTooltip: Object(V.jsx)('div', {
              children: Object(V.jsx)(i.b, {
                id: 'Subscribe to receive emails on your Elastic liquidity positions across all chains. Whenever a position goes<0>out-of-range</0> or comes back <1>in-range</1>, you will receive an email',
                components: { 0: Object(V.jsx)(Qe, {}), 1: Object(V.jsx)(Qe, {}) },
              }),
            }),
            trackingEvent: M.a.MYPOOLS_CLICK_SUBSCRIBE_BTN,
          })
      function Ze() {
        var e = Object(A.b)(),
          t = e.account,
          o = e.chainId,
          s = e.isEVM,
          c = e.networkInfo,
          a = Object(l.useRef)({}),
          u = Object(B.b)(t),
          j = u.positions,
          h = u.loading,
          O = Object(B.a)(),
          g = O.farmPositions,
          k = O.loading,
          w = O.activeFarmAddress,
          I = O.farms,
          C = O.userFarmInfo,
          S = Object(l.useMemo)(() => {
            var e
            return null !==
              (e =
                null === j || void 0 === j
                  ? void 0
                  : j.reduce(
                      (e, t) => {
                        var o
                        return e[null !== (o = t.liquidity) && void 0 !== o && o.eq(0) ? 1 : 0].push(t), e
                      },
                      [[], []],
                    )) && void 0 !== e
              ? e
              : [[], []]
          }, [j]),
          P = Object(n.a)(S, 2),
          E = P[0],
          M = P[1],
          F = Object(q.a)(),
          N = Object(z.a)(),
          Y = N.search,
          G = void 0 === Y ? '' : Y,
          Q = N.tab,
          K = void 0 === Q ? L.c.ELASTIC : Q,
          J = N.nftId,
          X = Object(m.m)(),
          $ = Object(m.k)(),
          ee = Object(R.a)(G.trim().toLowerCase(), 300),
          te = Object(l.useState)(!1),
          oe = Object(n.a)(te, 2),
          ne = oe[0],
          se = oe[1],
          ie = Object(l.useMemo)(
            () =>
              g.filter(
                e =>
                  0 === ee.trim().length ||
                  (!!a.current[e.token0.toLowerCase()] && a.current[e.token0.toLowerCase()].includes(ee)) ||
                  (!!a.current[e.token1.toLowerCase()] && a.current[e.token1.toLowerCase()].includes(ee)) ||
                  e.poolId.toLowerCase() === ee,
              ),
            [ee, g],
          ),
          re = Object(l.useMemo)(
            () =>
              (ne ? [...E, ...ie, ...M] : [...E, ...ie])
                .filter(e =>
                  J
                    ? e.tokenId.toString() === J
                    : 0 === ee.trim().length ||
                      (!!a.current[e.token0.toLowerCase()] && a.current[e.token0.toLowerCase()].includes(ee)) ||
                      (!!a.current[e.token1.toLowerCase()] && a.current[e.token1.toLowerCase()].includes(ee)) ||
                      e.poolId.toLowerCase() === ee,
                )
                .filter((e, t, o) => o.findIndex(t => t.tokenId.eq(e.tokenId)) === t),
            [ne, E, M, ee, ie, J],
          ),
          ce = Object(l.useState)(!1),
          ae = Object(n.a)(ce, 2),
          de = ae[0],
          le = ae[1],
          ue = Object(p.a)('(max-width: 768px)')
        return s
          ? Object(V.jsxs)(V.Fragment, {
              children: [
                Object(V.jsx)(jt, {
                  style: { padding: 0, marginTop: '24px' },
                  children: Object(V.jsxs)(v.a, {
                    gap: 'lg',
                    style: { width: '100%' },
                    children: [
                      Object(V.jsxs)(mt, {
                        children: [
                          Object(V.jsx)(i.b, {
                            id: 'Here you can view all your liquidity and staked balances in the Elastic Pools',
                          }),
                          !ue &&
                            Object(V.jsx)(H.c, {
                              href: ''.concat(T.R[o], '/account/').concat(t),
                              children: Object(V.jsxs)(x.b, {
                                alignItems: 'center',
                                children: [
                                  Object(V.jsx)(y.a, { size: 16 }),
                                  Object(V.jsxs)(x.d, {
                                    fontSize: '14px',
                                    marginLeft: '4px',
                                    children: [Object(V.jsx)(i.b, { id: 'Analyze Wallet' }), ' \u2197'],
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                      Object(V.jsxs)(Ke, {
                        children: [
                          Object(V.jsxs)(x.b, {
                            justifyContent: 'space-between',
                            flex: 1,
                            alignItems: 'center',
                            width: '100%',
                            children: [
                              Object(V.jsxs)(Je, {
                                children: [
                                  Object(V.jsx)(bt, {
                                    active: !de,
                                    role: 'button',
                                    onClick: () => {
                                      le(!1)
                                    },
                                    children: Object(V.jsx)(i.b, { id: 'My Positions' }),
                                  }),
                                  Object(V.jsx)(bt, {
                                    active: de,
                                    onClick: () => {
                                      le(!0)
                                    },
                                    role: 'button',
                                    children: W.isMobile
                                      ? Object(V.jsx)(i.b, { id: 'Farming Positions' })
                                      : Object(V.jsx)(i.b, { id: 'My Farming Positions' }),
                                  }),
                                ],
                              }),
                              ue &&
                                Object(V.jsxs)(x.b, {
                                  sx: { gap: '8px' },
                                  children: [
                                    Object(V.jsx)(H.c, {
                                      href: ''.concat(T.R[o], '/account/').concat(t),
                                      children: Object(V.jsx)(x.b, {
                                        sx: { borderRadius: '50%' },
                                        width: '36px',
                                        backgroundColor: Object(d.d)(F.subText, 0.2),
                                        height: '36px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        children: Object(V.jsx)(y.a, { size: 16, color: F.subText }),
                                      }),
                                    }),
                                    Xe(!0),
                                  ],
                                }),
                            ],
                          }),
                          Object(V.jsxs)(ht, {
                            children: [
                              Object(V.jsxs)(x.b, {
                                alignItems: 'center',
                                style: { gap: '8px' },
                                children: [
                                  Object(V.jsx)(x.d, {
                                    fontSize: '14px',
                                    color: F.subText,
                                    children: Object(V.jsx)(i.b, { id: 'Show closed positions' }),
                                  }),
                                  Object(V.jsx)(D.a, { isActive: ne, toggle: () => se(e => !e) }),
                                ],
                              }),
                              Object(V.jsx)(_.c, {
                                minWidth: '254px',
                                searchValue: G,
                                onSearch: e => {
                                  X($.pathname + '?search=' + e + '&tab=' + K, { replace: !0 })
                                },
                                placeholder: r.a._('Search by token or pool address'),
                              }),
                              !ue && Object(V.jsx)(V.Fragment, { children: Xe(!1) }),
                            ],
                          }),
                        ],
                      }),
                      t
                        ? (h && !j) || (k && !I && !C)
                          ? Object(V.jsxs)(xt, {
                              children: [Object(V.jsx)(Z, {}), Object(V.jsx)(Z, {}), Object(V.jsx)(Z, {})],
                            })
                          : re.length > 0 || ie.length > 0
                          ? Object(V.jsxs)(V.Fragment, {
                              children: [
                                Object(V.jsx)(Ge, {
                                  style: { display: de ? 'none' : 'grid' },
                                  positions: re,
                                  refe: a,
                                  activeFarmAddress: w,
                                }),
                                Object(V.jsx)(Ge, {
                                  style: { display: de ? 'grid' : 'none' },
                                  positions: ie,
                                  refe: a,
                                  activeFarmAddress: w,
                                }),
                              ],
                            })
                          : Object(V.jsxs)(x.b, {
                              flexDirection: 'column',
                              alignItems: 'center',
                              marginTop: '60px',
                              children: [
                                Object(V.jsx)(b.a, { size: 48, color: F.subText }),
                                Object(V.jsx)(x.d, {
                                  fontSize: 16,
                                  lineHeight: 1.5,
                                  color: F.subText,
                                  textAlign: 'center',
                                  marginTop: '1rem',
                                  children: Object(V.jsx)(i.b, {
                                    id: 'No liquidity found. Check out our <0>Pools.</0>',
                                    components: {
                                      0: Object(V.jsx)(H.i, {
                                        to: ''.concat(T.h.POOLS, '/').concat(c.route, '?tab=elastic'),
                                      }),
                                    },
                                  }),
                                }),
                              ],
                            })
                        : Object(V.jsx)(f.h, {
                            padding: '40px',
                            children: Object(V.jsx)(H.j.body, {
                              color: F.text3,
                              textAlign: 'center',
                              children: Object(V.jsx)(i.b, { id: 'Connect to a wallet to view your liquidity.' }),
                            }),
                          }),
                    ],
                  }),
                }),
                Object(V.jsx)(U.a, {}),
              ],
            })
          : Object(V.jsx)(m.a, { to: '/' })
      }
      var $e,
        et,
        tt,
        ot,
        nt,
        st,
        it,
        rt,
        ct = o('./src/state/farms/classic/hooks.ts'),
        at = o('./src/state/farms/classic/updater.ts'),
        dt = o('./src/state/pools/hooks.ts'),
        lt = o('./src/state/user/hooks.tsx'),
        ut = o('./src/state/wallet/hooks.ts'),
        bt = h.default.div.withConfig({ displayName: 'Pool__Tab', componentId: 'sc-1utmumt-0' })(
          ['padding:4px 0;color:', ';font-weight:500;cursor:pointer;:hover{color:', ';}', ';'],
          e => {
            var t = e.active,
              o = e.theme
            return t ? o.primary : o.subText
          },
          e => e.theme.primary,
          e => e.theme.mediaWidth.upToSmall($e || ($e = Object(s.a)(['\n    font-size: 14px;\n  ']))),
        ),
        jt = Object(h.default)(v.a).withConfig({ displayName: 'Pool__PageWrapper', componentId: 'sc-1utmumt-1' })(
          ['padding:32px 0 100px;width:100%;max-width:1224px;', ' ', ';'],
          e =>
            e.theme.mediaWidth.upToLarge(
              et || (et = Object(s.a)(['\n    padding: 24px 12px 100px;\n    max-width: 832px;\n  '])),
            ),
          e => e.theme.mediaWidth.upToSmall(tt || (tt = Object(s.a)(['\n    max-width: 392px;\n  ']))),
        ),
        mt = h.default.div.withConfig({ displayName: 'Pool__InstructionText', componentId: 'sc-1utmumt-2' })(
          [
            'width:100%;padding:16px 0;font-size:12px;line-height:1.5;border-top:1px solid ',
            ';color:',
            ';border-bottom:1px solid ',
            ';display:flex;justify-content:space-between;align-items:center;',
          ],
          e => e.theme.border,
          e => e.theme.subText,
          e => e.theme.border,
        ),
        pt = h.default.div.withConfig({ displayName: 'Pool__TitleRow', componentId: 'sc-1utmumt-3' })(
          ['display:flex;justify-content:space-between;align-items:center;gap:12px;', ';'],
          e =>
            e.theme.mediaWidth.upToSmall(
              ot || (ot = Object(s.a)(['\n    gap: 1rem;\n    width: 100%;\n    flex-direction: column;\n  '])),
            ),
        ),
        xt = h.default.div.withConfig({ displayName: 'Pool__PositionCardGrid', componentId: 'sc-1utmumt-4' })(
          [
            'display:grid;grid-template-columns:minmax(392px,auto) minmax(392px,auto) minmax(392px,auto);gap:24px;max-width:1224px;',
            ' ',
            ';',
          ],
          e =>
            e.theme.mediaWidth.upToLarge(
              nt || (nt = Object(s.a)(['\n    grid-template-columns: 1fr 1fr;\n    max-width: 832px;\n  '])),
            ),
          e =>
            e.theme.mediaWidth.upToSmall(
              st || (st = Object(s.a)(['\n    grid-template-columns: 1fr;\n    max-width: 392px;\n  '])),
            ),
        ),
        ht = Object(h.default)(x.b).withConfig({ displayName: 'Pool__FilterRow', componentId: 'sc-1utmumt-5' })(
          ['align-items:center;justify-content:space-between;gap:12px;', ' ', ''],
          e =>
            e.theme.mediaWidth.upToLarge(
              it || (it = Object(s.a)(['\n      width: 100%;\n      justify-content: flex-end;\n  '])),
            ),
          e =>
            e.theme.mediaWidth.upToSmall(
              rt ||
                (rt = Object(s.a)([
                  '\n    align-items: flex-start;\n    flex-direction: column-reverse;\n    gap: 0;\n\n    > div {\n      margin-top: 12px;\n      width: 100%\n      justify-content: space-between\n      &:nth-child(1){\n        margin-top: 20px\n      }\n    }\n  ',
                ])),
            ),
        ),
        Ot = Object(h.keyframes)(['100%{transform:translateX(100%);}']),
        ft = h.default.div.withConfig({ displayName: 'Pool__PreloadCard', componentId: 'sc-1utmumt-6' })(
          [
            'width:',
            ';height:',
            ';background:',
            ';border-radius:8px;position:relative;display:inline-block;overflow:hidden;&::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,rgba(#fff,0) 0,rgba(#fff,0.2) 20%,rgba(#fff,0.5) 60%,rgba(#fff,0));animation:',
            " 2s infinite;content:'';}",
          ],
          e => {
            var t = e.width
            return null !== t && void 0 !== t ? t : '100%'
          },
          e => {
            var t = e.height
            return null !== t && void 0 !== t ? t : '436px'
          },
          e => e.theme.background,
          Ot,
        )
      function gt() {
        var e = Object(z.a)().tab,
          t = void 0 === e ? L.c.ELASTIC : e
        return (
          Object(F.a)(),
          Object(V.jsxs)(V.Fragment, {
            children: [
              Object(V.jsxs)(jt, {
                children: [
                  Object(V.jsx)(v.a, { children: Object(V.jsx)(g.a, {}) }),
                  t === L.c.ELASTIC ? Object(V.jsx)(Ze, {}) : Object(V.jsx)(vt, {}),
                ],
              }),
              Object(V.jsx)(S.a, {}),
            ],
          })
        )
      }
      function vt() {
        var e = Object(q.a)(),
          t = Object(A.b)(),
          o = t.account,
          s = t.chainId,
          a = t.isEVM,
          u = t.networkInfo,
          h = Object(p.a)('(max-width:768px)'),
          g = Object(lt.h)(),
          L = Object(dt.g)(),
          E = L.loading,
          z = L.data,
          F = Object(ct.b)(),
          W = F.data,
          N = F.loading,
          D = Object(j.d)(),
          B = Object(n.a)(D, 2),
          U = B[0],
          Y = B[1],
          G = U.get('search') || '',
          Q = Object(R.a)(G.trim().toLowerCase(), 300),
          K = Object(l.useMemo)(
            () =>
              Object.values(W)
                .flat()
                .filter(e => {
                  var t
                  return (
                    c.JSBI.greaterThan(
                      c.JSBI.BigInt((null === (t = e.userData) || void 0 === t ? void 0 : t.stakedBalance) || 0),
                      c.JSBI.BigInt(0),
                    ) && !T.P[e.fairLaunchAddress]
                  )
                }),
            [W],
          ),
          J = Object(lt.o)(g),
          X = Object(l.useMemo)(() => J.map(e => e.liquidityTokens), [J]),
          Z = Object(l.useMemo)(() => X.flat(), [X]),
          $ = Object(ut.h)(Z),
          ee = Object(n.a)($, 2),
          te = ee[0],
          oe = ee[1],
          ne = Object(l.useMemo)(
            () =>
              X.reduce(
                (e, t, o) => (
                  t
                    .filter(e => {
                      var t
                      return null === (t = te[e.address]) || void 0 === t ? void 0 : t.greaterThan('0')
                    })
                    .forEach(t => {
                      e.push({ liquidityToken: t, tokens: J[o].tokens })
                    }),
                  e
                ),
                [],
              ),
            [J, X, te],
          ),
          se = Object(P.e)(
            ne.map(e => {
              var t = e.liquidityToken,
                o = e.tokens
              return { address: t.address, currencies: o }
            }),
          ),
          ie =
            oe ||
            (null === se || void 0 === se ? void 0 : se.length) < ne.length ||
            (null === se || void 0 === se ? void 0 : se.some(e => !e[1])),
          re = Object(l.useMemo)(() => se.map(e => Object(n.a)(e, 2)[1]).filter(e => Boolean(e)), [se]),
          ce = Object(l.useMemo)(
            () =>
              re
                .filter(e => {
                  var t, o
                  return (
                    !Q ||
                    (null === (t = e.token0.symbol) || void 0 === t ? void 0 : t.toLowerCase().includes(Q)) ||
                    (null === (o = e.token1.symbol) || void 0 === o ? void 0 : o.toLowerCase().includes(Q)) ||
                    e.address.toLowerCase() === Q
                  )
                })
                .filter(e => !K.map(e => e.id.toLowerCase()).includes(e.address.toLowerCase())),
            [re, Q, K],
          ),
          ae = {}
        null === z ||
          void 0 === z ||
          z.liquidityPositions.forEach(e => {
            ae[e.pool.id] = e
          })
        var de = Object(l.useState)(!1),
          le = Object(n.a)(de, 2),
          ue = le[0],
          be = le[1],
          je = ie || E || N,
          me = Object(M.c)().mixpanelHandler,
          pe = Object(p.a)('(max-width: 768px)')
        return a
          ? Object(V.jsxs)(V.Fragment, {
              children: [
                Object(V.jsx)(at.a, { isInterval: !1 }),
                Object(V.jsx)(jt, {
                  style: { padding: 0, marginTop: '24px' },
                  children: Object(V.jsx)(v.a, {
                    gap: 'lg',
                    justify: 'center',
                    children: Object(V.jsxs)(v.a, {
                      gap: 'lg',
                      style: { width: '100%' },
                      children: [
                        Object(V.jsx)(C.a, {
                          children: Object(V.jsxs)(mt, {
                            children: [
                              Object(V.jsx)(i.b, {
                                id: 'Here you can view all your liquidity and staked balances in the Classic Pools',
                              }),
                              !pe &&
                                Object(V.jsx)(H.c, {
                                  href: ''.concat(T.y[s], '/account/').concat(o),
                                  children: Object(V.jsxs)(x.b, {
                                    alignItems: 'center',
                                    children: [
                                      Object(V.jsx)(y.a, { size: 16 }),
                                      Object(V.jsxs)(x.d, {
                                        fontSize: '14px',
                                        marginLeft: '4px',
                                        children: [Object(V.jsx)(i.b, { id: 'Analyze Wallet' }), ' \u2197'],
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        }),
                        Object(V.jsxs)(pt, {
                          children: [
                            Object(V.jsxs)(x.b, {
                              justifyContent: 'space-between',
                              flex: 1,
                              alignItems: 'center',
                              width: '100%',
                              children: [
                                Object(V.jsxs)(x.b, {
                                  sx: { gap: '1.5rem' },
                                  alignItems: 'center',
                                  children: [
                                    Object(V.jsx)(bt, {
                                      active: !ue,
                                      onClick: () => {
                                        ue && me(M.a.MYPOOLS_POOLS_VIEWED), be(!1)
                                      },
                                      role: 'button',
                                      children: Object(V.jsx)(i.b, { id: 'My Pools' }),
                                    }),
                                    Object(V.jsx)(bt, {
                                      active: ue,
                                      onClick: () => {
                                        ue || me(M.a.MYPOOLS_STAKED_VIEWED), be(!0)
                                      },
                                      role: 'button',
                                      children: Object(V.jsx)(i.b, { id: 'My Staked Pools' }),
                                    }),
                                  ],
                                }),
                                pe &&
                                  Object(V.jsx)(x.b, {
                                    sx: { gap: '12px' },
                                    children: Object(V.jsx)(H.c, {
                                      href: ''.concat(T.y[s], '/account/').concat(o),
                                      children: Object(V.jsx)(x.b, {
                                        sx: { borderRadius: '50%' },
                                        width: '36px',
                                        backgroundColor: Object(d.d)(e.subText, 0.2),
                                        height: '36px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        children: Object(V.jsx)(y.a, { size: 16, color: e.subText }),
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            Object(V.jsxs)(x.b, {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              sx: { gap: '12px' },
                              width: h ? '100%' : void 0,
                              children: [
                                Object(V.jsx)(_.c, {
                                  style: { width: 'unset', flex: h ? 1 : void 0 },
                                  minWidth: h ? '224px' : '254px',
                                  searchValue: G,
                                  onSearch: e => {
                                    U.set('search', e), Y(U)
                                  },
                                  placeholder: r.a._('Search by token name or pool address'),
                                }),
                                Object(V.jsxs)(O.i, {
                                  as: H.i,
                                  to: T.h.FIND_POOL,
                                  style: {
                                    color: e.textReverse,
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    width: 'max-content',
                                    height: '36px',
                                    textDecoration: 'none',
                                  },
                                  children: [
                                    Object(V.jsx)(k.a, {}),
                                    Object(V.jsx)(x.d, {
                                      marginLeft: '4px',
                                      children: Object(V.jsx)(i.b, { id: 'Import Pool' }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        o
                          ? ue
                            ? je && !K.length
                              ? Object(V.jsx)(w.a, {})
                              : K.length
                              ? Object(V.jsxs)(V.Fragment, {
                                  children: [
                                    Object(V.jsx)(xt, {
                                      children: K.filter(
                                        e =>
                                          e.token0.symbol.toLowerCase().includes(Q) ||
                                          e.token1.symbol.toLowerCase().includes(Q) ||
                                          e.id.toLowerCase() === Q,
                                      ).map(e =>
                                        Object(V.jsx)(
                                          yt,
                                          {
                                            farm: e,
                                            userLiquidityPositions:
                                              null === z || void 0 === z ? void 0 : z.liquidityPositions,
                                            tab: 'STAKED',
                                          },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                    Object(V.jsxs)(x.d, {
                                      fontSize: 16,
                                      color: e.subText,
                                      textAlign: 'center',
                                      marginTop: '1rem',
                                      children: [
                                        r.a._("Don't see a pool you joined?"),
                                        ' ',
                                        Object(V.jsx)(H.i, {
                                          id: 'import-pool-link',
                                          to: T.h.FIND_POOL,
                                          children: Object(V.jsx)(i.b, { id: 'Import it.' }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : Object(V.jsxs)(x.b, {
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  marginTop: '60px',
                                  children: [
                                    Object(V.jsx)(b.a, { size: 48, color: e.subText }),
                                    Object(V.jsx)(x.d, {
                                      fontSize: 16,
                                      lineHeight: 1.5,
                                      color: e.subText,
                                      textAlign: 'center',
                                      marginTop: '1rem',
                                      children: Object(V.jsx)(i.b, {
                                        id: 'No staked liquidity found. Check out our <0>Farms.</0>',
                                        components: {
                                          0: Object(V.jsx)(H.i, { to: ''.concat(T.h.FARMS, '/').concat(u.route) }),
                                        },
                                      }),
                                    }),
                                  ],
                                })
                            : !je || ce.length || K.length
                            ? (null === ce || void 0 === ce ? void 0 : ce.length) > 0 || K.length
                              ? Object(V.jsxs)(V.Fragment, {
                                  children: [
                                    Object(V.jsxs)(xt, {
                                      children: [
                                        ce.map(e => {
                                          var t = Object.values(W)
                                            .flat()
                                            .find(t => t.id.toLowerCase() === e.address.toLowerCase())
                                          return Object(V.jsx)(
                                            I.c,
                                            { pair: e, myLiquidity: ae[e.address.toLowerCase()], farm: t, tab: 'ALL' },
                                            e.liquidityToken.address,
                                          )
                                        }),
                                        K.filter(
                                          e =>
                                            e.token0.symbol.toLowerCase().includes(Q) ||
                                            e.token1.symbol.toLowerCase().includes(Q) ||
                                            e.id.toLowerCase() === Q,
                                        ).map(e =>
                                          Object(V.jsx)(
                                            yt,
                                            {
                                              farm: e,
                                              userLiquidityPositions:
                                                null === z || void 0 === z ? void 0 : z.liquidityPositions,
                                              tab: 'ALL',
                                            },
                                            e.id,
                                          ),
                                        ),
                                      ],
                                    }),
                                    Object(V.jsxs)(x.d, {
                                      fontSize: 16,
                                      color: e.subText,
                                      textAlign: 'center',
                                      marginTop: '1rem',
                                      children: [
                                        r.a._("Don't see a pool you joined?"),
                                        ' ',
                                        Object(V.jsx)(H.i, {
                                          id: 'import-pool-link',
                                          to: T.h.FIND_POOL,
                                          children: Object(V.jsx)(i.b, { id: 'Import it.' }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : Object(V.jsxs)(x.b, {
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  marginTop: '60px',
                                  children: [
                                    Object(V.jsx)(b.a, { size: 48, color: e.subText }),
                                    Object(V.jsxs)(x.d, {
                                      fontSize: 16,
                                      lineHeight: 1.5,
                                      color: e.subText,
                                      textAlign: 'center',
                                      marginTop: '1rem',
                                      children: [
                                        Object(V.jsx)(i.b, {
                                          id: 'No liquidity found. Check out our <0>Pools.</0>',
                                          components: {
                                            0: Object(V.jsx)(H.i, {
                                              to: ''.concat(T.h.POOLS, '/').concat(u.route, '?tab=classic'),
                                            }),
                                          },
                                        }),
                                        Object(V.jsx)('br', {}),
                                        r.a._("Don't see a pool you joined?"),
                                        ' ',
                                        Object(V.jsx)(H.i, {
                                          id: 'import-pool-link',
                                          to: T.h.FIND_POOL,
                                          children: Object(V.jsx)(i.b, { id: 'Import it.' }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                            : Object(V.jsxs)(xt, {
                                children: [Object(V.jsx)(ft, {}), Object(V.jsx)(ft, {}), Object(V.jsx)(ft, {})],
                              })
                          : Object(V.jsx)(f.h, {
                              padding: '40px',
                              children: Object(V.jsx)(H.j.body, {
                                color: e.text3,
                                textAlign: 'center',
                                children: Object(V.jsx)(i.b, { id: 'Connect to a wallet to view your liquidity.' }),
                              }),
                            }),
                      ],
                    }),
                  }),
                }),
                Object(V.jsx)(S.a, {}),
              ],
            })
          : Object(V.jsx)(m.a, { to: '/', replace: !0 })
      }
      var yt = e => {
        var t,
          o,
          n,
          s = e.farm,
          i = e.userLiquidityPositions,
          r = e.tab,
          c = Object(E.j)(null === (t = s.token0) || void 0 === t ? void 0 : t.id) || void 0,
          d = Object(E.j)(null === (o = s.token1) || void 0 === o ? void 0 : o.id) || void 0,
          l = Object(ct.e)(s).farmAPR,
          u = Object(P.c)(
            null === c || void 0 === c ? void 0 : c.wrapped,
            null === d || void 0 === d ? void 0 : d.wrapped,
            s.id,
          )[1]
        return u
          ? Object(V.jsx)(I.c, {
              pair: u,
              stakedBalance: a.TokenAmount.fromRawAmount(
                u.liquidityToken,
                (null === (n = s.userData) || void 0 === n ? void 0 : n.stakedBalance) || '0',
              ),
              myLiquidity: null === i || void 0 === i ? void 0 : i.find(e => e.pool.id === u.address),
              farm: s,
              farmAPR: l,
              tab: r,
            })
          : Object(V.jsx)(ft, {})
      }
    },
    './src/state/farms/classic/updater.ts': function (e, t, o) {
      'use strict'
      o.d(t, 'a', function () {
        return g
      })
      var n = o('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = o('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        i = o('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        r = o('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        c = o('./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js'),
        a = o('./node_modules/react/index.js'),
        d = o('./node_modules/react-redux/es/index.js'),
        l = o('./src/constants/index.ts'),
        u = o('./src/constants/tokens.ts'),
        b = o('./src/hooks/index.ts'),
        j = o('./src/hooks/Tokens.ts'),
        m = o('./src/hooks/useContract.ts'),
        p = o('./src/state/application/hooks.ts'),
        x = o('./src/state/farms/classic/actions.ts'),
        h = o('./src/state/farms/classic/types.ts'),
        O = o('./src/state/hooks.ts'),
        f = o('./src/state/pools/hooks.ts')
      function g(e) {
        var t = e.isInterval,
          o = void 0 === t || t,
          g = Object(O.a)(),
          v = Object(b.b)(),
          y = v.chainId,
          k = v.account,
          w = v.isEVM,
          I = v.networkInfo,
          C = Object(m.i)(!1),
          _ = Object(p.f)(),
          S = Object(a.useRef)(_.currentPrice)
        S.current = _.currentPrice
        var T = Object(j.e)(),
          L = Object(p.g)(),
          P = L.classicClient,
          A = L.blockClient,
          E = Object(d.e)(e => e.farms.data),
          R = Object(a.useRef)(E)
        R.current = E
        var M = Object(a.useRef)(y)
        return (
          (M.current = y),
          Object(a.useEffect)(() => {
            if (w) {
              console.count('running farm updater')
              var e = !1
              b()
              var t =
                o &&
                setInterval(() => {
                  b()
                }, 3e4)
              return () => {
                ;(e = !0), t && clearInterval(t)
              }
            }
            function a(e) {
              return d.apply(this, arguments)
            }
            function d() {
              return (
                (d = Object(r.a)(
                  Object(s.a)().mark(function t(o) {
                    var a, d, b, j, m, p, x, O, g, v, C, _, L, E, R, M, z, F
                    return Object(s.a)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (w) {
                              t.next = 2
                              break
                            }
                            return t.abrupt('return', [])
                          case 2:
                            return (t.next = 4), null === o || void 0 === o ? void 0 : o.getRewardTokens()
                          case 4:
                            if (((a = t.sent), !e)) {
                              t.next = 7
                              break
                            }
                            throw new Error('canceled')
                          case 7:
                            return (t.next = 9), null === o || void 0 === o ? void 0 : o.poolLength()
                          case 9:
                            if (((d = t.sent), !e)) {
                              t.next = 12
                              break
                            }
                            throw new Error('canceled')
                          case 12:
                            return (
                              (b = [...Array(c.a.from(d).toNumber()).keys()]),
                              (j = I.classic.fairlaunchV2.includes(o.address)),
                              (t.next = 16),
                              Promise.all(
                                b.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      Object(s.a)().mark(function t(n) {
                                        var r
                                        return Object(s.a)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.next = 2), null === o || void 0 === o ? void 0 : o.getPoolInfo(n)
                                                )
                                              case 2:
                                                if (((r = t.sent), !e)) {
                                                  t.next = 5
                                                  break
                                                }
                                                throw new Error('canceled')
                                              case 5:
                                                if (!j) {
                                                  t.next = 7
                                                  break
                                                }
                                                return t.abrupt(
                                                  'return',
                                                  Object(i.a)(
                                                    Object(i.a)({}, r),
                                                    {},
                                                    {
                                                      accRewardPerShares: r.accRewardPerShares.map((e, t) =>
                                                        e.div(r.rewardMultipliers[t]),
                                                      ),
                                                      rewardPerSeconds: r.rewardPerSeconds.map((e, t) =>
                                                        e.div(r.rewardMultipliers[t]),
                                                      ),
                                                      pid: n,
                                                      fairLaunchVersion: h.a.V2,
                                                    },
                                                  ),
                                                )
                                              case 7:
                                                return t.abrupt(
                                                  'return',
                                                  Object(i.a)(
                                                    Object(i.a)({}, r),
                                                    {},
                                                    { pid: n, fairLaunchVersion: h.a.V1 },
                                                  ),
                                                )
                                              case 8:
                                              case 'end':
                                                return t.stop()
                                            }
                                        }, t)
                                      }),
                                    )
                                    return function (e) {
                                      return t.apply(this, arguments)
                                    }
                                  })(),
                                ),
                              )
                            )
                          case 16:
                            return (
                              (m = t.sent),
                              (t.next = 19),
                              Promise.all(
                                b.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      Object(s.a)().mark(function t(n) {
                                        var i
                                        return Object(s.a)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (!k) {
                                                  t.next = 6
                                                  break
                                                }
                                                return (
                                                  (t.next = 3),
                                                  null === o || void 0 === o ? void 0 : o.getUserInfo(n, k)
                                                )
                                              case 3:
                                                ;(t.t0 = t.sent), (t.next = 7)
                                                break
                                              case 6:
                                                t.t0 = { amount: 0 }
                                              case 7:
                                                if (((i = t.t0), !e)) {
                                                  t.next = 10
                                                  break
                                                }
                                                throw new Error('canceled')
                                              case 10:
                                                return t.abrupt('return', i.amount)
                                              case 11:
                                              case 'end':
                                                return t.stop()
                                            }
                                        }, t)
                                      }),
                                    )
                                    return function (e) {
                                      return t.apply(this, arguments)
                                    }
                                  })(),
                                ),
                              )
                            )
                          case 19:
                            if (((p = t.sent), !e)) {
                              t.next = 22
                              break
                            }
                            throw new Error('canceled')
                          case 22:
                            return (
                              (t.next = 24),
                              Promise.all(
                                b.map(
                                  (function () {
                                    var t = Object(r.a)(
                                      Object(s.a)().mark(function t(n) {
                                        var i
                                        return Object(s.a)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (!k) {
                                                  t.next = 6
                                                  break
                                                }
                                                return (
                                                  (t.next = 3),
                                                  null === o || void 0 === o ? void 0 : o.pendingRewards(n, k)
                                                )
                                              case 3:
                                                ;(t.t0 = t.sent), (t.next = 7)
                                                break
                                              case 6:
                                                t.t0 = null
                                              case 7:
                                                if (((i = t.t0), !e)) {
                                                  t.next = 10
                                                  break
                                                }
                                                throw new Error('canceled')
                                              case 10:
                                                return t.abrupt('return', i)
                                              case 11:
                                              case 'end':
                                                return t.stop()
                                            }
                                        }, t)
                                      }),
                                    )
                                    return function (e) {
                                      return t.apply(this, arguments)
                                    }
                                  })(),
                                ),
                              )
                            )
                          case 24:
                            if (((x = t.sent), !e)) {
                              t.next = 27
                              break
                            }
                            throw new Error('canceled')
                          case 27:
                            return (
                              (O = m.map(e => e.stakeToken.toLowerCase())),
                              (t.next = 30),
                              Object(f.a)(O, P, A, y, S.current)
                            )
                          case 30:
                            if (((g = t.sent), !e)) {
                              t.next = 33
                              break
                            }
                            throw new Error('canceled')
                          case 33:
                            if (
                              ((v = a
                                .map(e => (e.toLowerCase() === l.bb.toLowerCase() ? u.i[y] : T[e]))
                                .filter(Boolean)),
                              (C = m.map((e, t) =>
                                Object(i.a)(
                                  Object(i.a)(
                                    Object(i.a)(
                                      {},
                                      g.find(t => t && t.id.toLowerCase() === e.stakeToken.toLowerCase()),
                                    ),
                                    e,
                                  ),
                                  {},
                                  {
                                    rewardTokens: v,
                                    fairLaunchAddress: o.address,
                                    userData: {
                                      stakedBalance: p[t],
                                      rewards:
                                        e.fairLaunchVersion === h.a.V2
                                          ? x[t] && x[t].map((t, o) => t.div(e.rewardMultipliers[o]))
                                          : x[t],
                                    },
                                  },
                                ),
                              )),
                              !(_ = l.P[o.address]))
                            ) {
                              t.next = 46
                              break
                            }
                            return (
                              (t.next = 39),
                              fetch(_.subgraphAPI, { method: 'POST', body: JSON.stringify({ query: _.query }) }).then(
                                e => e.json(),
                              )
                            )
                          case 39:
                            if (((L = t.sent), !e)) {
                              t.next = 42
                              break
                            }
                            throw new Error('canceled')
                          case 42:
                            ;(E = L.data.pair.totalSupply),
                              (R = E.split('.')),
                              (M = Object(n.a)(R, 2)),
                              (z = M[0]),
                              (F = M[1]),
                              (E = z + '.' + F.slice(0, 18)),
                              C.push(
                                Object(i.a)(
                                  Object(i.a)(
                                    Object(i.a)({}, L.data.pair),
                                    {},
                                    {
                                      amp: 1e4,
                                      vReserve0: L.data.pair.reserve0,
                                      vReserve1: L.data.pair.reserve1,
                                      token0: Object(i.a)(
                                        Object(i.a)({}, L.data.pair.token0),
                                        {},
                                        { derivedETH: L.data.pair.token0.derivedBNB },
                                      ),
                                      token1: Object(i.a)(
                                        Object(i.a)({}, L.data.pair.token1),
                                        {},
                                        { derivedETH: L.data.pair.token1.derivedBNB },
                                      ),
                                      trackedReserveETH: L.data.pair.trackedReserveBNB,
                                      totalSupply: E,
                                    },
                                    m[0],
                                  ),
                                  {},
                                  {
                                    rewardTokens: v,
                                    fairLaunchAddress: o.address,
                                    userData: { stakedBalance: p[0], rewards: x[0] },
                                  },
                                ),
                              )
                          case 46:
                            return t.abrupt(
                              'return',
                              C.filter(e => !!e.totalSupply),
                            )
                          case 47:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  }),
                )),
                d.apply(this, arguments)
              )
            }
            function b() {
              return j.apply(this, arguments)
            }
            function j() {
              return (j = Object(r.a)(
                Object(s.a)().mark(function t() {
                  var o, n, i, r
                  return Object(s.a)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), C)) {
                              t.next = 4
                              break
                            }
                            return g(Object(x.b)({})), t.abrupt('return')
                          case 4:
                            return (
                              g(Object(x.c)(!0)),
                              (o = {}),
                              (n = Object.keys(C)),
                              (i = n.map(e => a(C[e]))),
                              (t.next = 10),
                              Promise.all(i)
                            )
                          case 10:
                            if (((r = t.sent), !e)) {
                              t.next = 13
                              break
                            }
                            throw new Error('canceled')
                          case 13:
                            n.forEach((e, t) => {
                              o[e] = r[t]
                            }),
                              M.current !== y || (0 !== Object.keys(R.current).length && e) || g(Object(x.b)(o)),
                              (t.next = 20)
                            break
                          case 17:
                            ;(t.prev = 17), (t.t0 = t.catch(0)), e || (console.error(t.t0), g(Object(x.f)(t.t0)))
                          case 20:
                            g(Object(x.c)(!1))
                          case 21:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 17]],
                  )
                }),
              )).apply(this, arguments)
            }
          }, [g, y, C, k, w, I, P, A, T, o]),
          null
        )
      }
    },
  },
])
