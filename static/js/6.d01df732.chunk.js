(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[6],{"./src/components/TradeRouting.tsx":function(e,t,i){"use strict";i.r(t);var o,n=i("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=i("./node_modules/react/index.js"),a=i.n(r),d=i("./node_modules/react-indiana-drag-scroll/dist/index.es.js"),s=i("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=i("./src/components/CurrencyLogo/index.tsx"),c=i("./src/hooks/index.ts"),p=i("./src/hooks/useThrottle.ts"),u=i("./src/state/customizeDexes/hooks.ts"),h=i("./src/utils/index.ts"),b=i("./node_modules/react/jsx-runtime.js"),g=s.default.div.withConfig({displayName:"TradeRouting__Shadow",componentId:"sc-pdy3ur-0"})(["position:relative;min-height:0;overflow:hidden;&:before,&:after{content:'';display:block;z-index:3;pointer-events:none;position:absolute;height:50px;width:100%;left:50%;transform:translateX(-50%);transition:all 0.2s ease;opacity:0;}&:before{background:linear-gradient(to bottom,",",transparent);top:0;}&:after{background:linear-gradient(to top,",",transparent);bottom:0;}&.top:before,&.bottom:after{opacity:1;}"],(e=>e.backgroundColor),(e=>e.backgroundColor)),m=s.default.div.withConfig({displayName:"TradeRouting__StyledContainer",componentId:"sc-pdy3ur-1"})(["flex:1;max-height:100%;max-width:100%;margin-left:0;overflow-y:scroll;overflow-x:hidden;&::-webkit-scrollbar{width:6px;height:6px;}&::-webkit-scrollbar-thumb{background:transparent;border-radius:999px;}&:hover::-webkit-scrollbar-thumb{background:",";border-radius:999px;}&::-webkit-scrollbar-track-piece{background:transparent;}"],(e=>e.theme.border)),x=s.default.div.withConfig({displayName:"TradeRouting__StyledPair",componentId:"sc-pdy3ur-2"})(["position:relative;padding-top:12px;display:flex;justify-content:space-between;align-items:center;"]),f=s.default.div.withConfig({displayName:"TradeRouting__StyledPairLine",componentId:"sc-pdy3ur-3"})(["flex:auto;min-width:50px;border-bottom:1px solid ",";height:1px;"],(e=>e.theme.border)),v=s.default.div.withConfig({displayName:"TradeRouting__StyledWrapToken",componentId:"sc-pdy3ur-4"})(["display:flex;align-items:center;justify-content:space-between;min-width:100px;width:max-content;font-size:16px;font-weight:500;white-space:nowrap;min-height:38px;border-radius:0.5rem;",""],(e=>e.theme.mediaWidth.upToSmall(o||(o=Object(n.a)(["\n    min-width: 120px;\n  "]))))),j=s.default.a.withConfig({displayName:"TradeRouting__StyledToken",componentId:"sc-pdy3ur-5"})(["width:100%;display:flex;align-items:center;white-space:nowrap;text-decoration:none;color:",";"," padding-bottom:7px;border-bottom:1px solid ",";& > span{margin-left:4px;margin-right:4px;}"],(e=>e.theme.subText),(e=>e.reverse&&Object(s.css)(["flex-direction:row-reverse;justify-content:flex-start;"])),(e=>e.theme.border)),y=s.default.div.withConfig({displayName:"TradeRouting__StyledRoutes",componentId:"sc-pdy3ur-6"})(["margin:auto;width:100%;position:relative;padding:20px 10px 0;&:before{position:absolute;display:block;content:'';top:0;right:0;}"]),w=s.default.div.withConfig({displayName:"TradeRouting__StyledRoute",componentId:"sc-pdy3ur-7"})(["display:flex;justify-content:flex-end;position:relative;align-items:center;&:before,&:after{content:'';display:block;border-left:1px solid ",";width:100%;height:calc(50% + 20px);position:absolute;border-right:1px solid ",";box-sizing:border-box;pointer-events:none;}&:before{top:-20px;}&:after{bottom:-10px;}&:last-child:after{display:none;}"],(e=>e.theme.border),(e=>e.theme.border)),O=s.default.div.withConfig({displayName:"TradeRouting__StyledRouteLine",componentId:"sc-pdy3ur-8"})(["position:absolute;border-bottom:1px solid ",";width:calc(100% - 68px);left:43px;"],(e=>e.theme.border)),k=s.default.div.withConfig({displayName:"TradeRouting__StyledHops",componentId:"sc-pdy3ur-9"})(["z-index:1;display:flex;align-items:center;"]),_=s.default.div.withConfig({displayName:"TradeRouting__StyledHop",componentId:"sc-pdy3ur-10"})(["padding:8px;border-radius:8px;background-color:",";border:1px solid ",";height:fit-content;position:relative;flex:0 0 146px;margin:auto;transition:filter 0.15s ease;cursor:pointer;:hover{filter:",";}"],(e=>e.theme.background),(e=>e.theme.border),(e=>e.theme.darkMode?"brightness(130%)":"brightness(97%)")),R=s.default.a.withConfig({displayName:"TradeRouting__StyledExchange",componentId:"sc-pdy3ur-11"})(["display:flex;align-items:center;width:100%;padding:4px 0;margin-top:4px;font-size:10px;border-radius:8px;color:",";line-height:20px;white-space:nowrap;text-decoration:none;&:hover{color:",";}& > .img--sm{width:14px;height:14px;border-radius:100%;margin-right:4px;}&:first-child{margin-top:8px;}"],(e=>e.theme.subText),(e=>{var t=e.theme;return t.darkMode?t.white:t.black})),C=s.default.div.withConfig({displayName:"TradeRouting__StyledExchangeStatic",componentId:"sc-pdy3ur-12"})(["display:flex;align-items:center;width:100%;padding:4px 0;margin-top:4px;font-size:10px;border-radius:8px;color:",";line-height:20px;white-space:nowrap;text-decoration:none;& > .img--sm{width:14px;height:14px;border-radius:100%;margin-right:4px;}&:first-child{margin-top:8px;}"],(e=>e.theme.subText)),T=s.default.div.withConfig({displayName:"TradeRouting__StyledPercent",componentId:"sc-pdy3ur-13"})(["font-size:12px;line-height:14px;font-weight:700;position:absolute;top:calc(50% - 15px);left:8px;transform:translateY(50%);z-index:2;color:",";background:",";"],(e=>e.theme.primary),(e=>e.backgroundColor)),L=s.default.i.withConfig({displayName:"TradeRouting__StyledDot",componentId:"sc-pdy3ur-14"})(["display:inline-block;width:8px;height:8px;border-radius:100%;position:absolute;top:0;left:",";right:",";z-index:1;background-color:",";"],(e=>e.out?"unset":"6.5px"),(e=>e.out?"6.5px":"unset"),(e=>e.theme.primary)),S=s.default.div.withConfig({displayName:"TradeRouting__StyledWrap",componentId:"sc-pdy3ur-15"})(["width:calc(100% - 68px);margin:10px 0 10px 6px;&:after,&:before{transition:all 0.1s ease;content:'';display:block;z-index:2;pointer-events:none;position:absolute;inset:0 0 auto auto;width:40px;height:calc(100% - 20px);top:50%;transform:translateY(-50%);opacity:0;}&:after{background:linear-gradient(to right,",",transparent);left:42px;}&:before{background:linear-gradient(to left,",",transparent);right:24px;}&.left-visible:after,&.right-visible:before{opacity:1;}"],(e=>e.backgroundColor),(e=>e.backgroundColor)),I=s.default.div.withConfig({displayName:"TradeRouting__StyledHopChevronRight",componentId:"sc-pdy3ur-16"})(["border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid ",";"],(e=>e.theme.primary)),N=s.default.div.withConfig({displayName:"TradeRouting__StyledHopChevronWrapper",componentId:"sc-pdy3ur-17"})(["min-width:24px;height:24px;display:flex;align-items:center;justify-content:center;z-index:1;"]),z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t)return"100%";if(!e&&0!==e)return null;var i=t>1?Math.min(99.99,Math.max(.01,e)):e;return"".concat(i.toFixed(0),"%")},E=e=>{var t,i=e.route,o=e.chainId,n=e.backgroundColor,s=Object(r.useRef)(null),c=Object(r.useRef)(null),g=Object(r.useRef)(null),m=Object(u.a)(),x=Object(p.a)((()=>{var e,t,i,o,n,r=s.current;(null===r||void 0===r?void 0:r.scrollLeft)>0?null===(t=g.current)||void 0===t||t.classList.add("left-visible"):null===(i=g.current)||void 0===i||i.classList.remove("left-visible");Math.floor((null===(e=c.current)||void 0===e?void 0:e.scrollWidth)-(null===r||void 0===r?void 0:r.scrollLeft))>Math.floor(null===r||void 0===r?void 0:r.clientWidth)?null===(o=g.current)||void 0===o||o.classList.add("right-visible"):null===(n=g.current)||void 0===n||n.classList.remove("right-visible")}),300);return Object(r.useEffect)((()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x))),[]),Object(r.useEffect)((()=>{x()}),[i]),Object(b.jsx)(S,{ref:g,backgroundColor:n,children:Object(b.jsx)(d.a,{innerRef:s,vertical:!1,onScroll:x,children:Object(b.jsx)(k,{length:null===i||void 0===i||null===(t=i.subRoutes)||void 0===t?void 0:t.length,ref:c,children:i.subRoutes.map(((e,t,n)=>{var r=i.path[t+1],d=e.flat().map((e=>e.id)).join("-");return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)(_,{children:[Object(b.jsxs)(j,{style:{marginRight:0},href:Object(h.n)(o,null===r||void 0===r?void 0:r.address,"token"),target:"_blank",children:[Object(b.jsx)(l.a,{currency:r,size:"16px"}),Object(b.jsx)("span",{children:null===r||void 0===r?void 0:r.symbol})]}),Array.isArray(e)?e.map((e=>{var t,i=((e,t)=>"1inch"===e.exchange?{name:"1inch",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png"}:"paraswap"===e.exchange?{name:"Paraswap",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/14534.png"}:"0x"===e.exchange?{name:"0x",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/1896.png"}:null===t||void 0===t?void 0:t.find((t=>t.id===e.exchange||("kyberswap"===e.exchange||"kyberswap-static"===e.exchange)&&"kyberswapv1"===t.id)))(e,m);return t=Object(b.jsxs)(b.Fragment,{children:[null!==i&&void 0!==i&&i.logoURL?Object(b.jsx)("img",{src:null===i||void 0===i?void 0:i.logoURL,alt:"",className:"img--sm"}):Object(b.jsx)("i",{className:"img--sm"}),"".concat((null===i||void 0===i?void 0:i.name)||"--",": ").concat(e.swapPercentage,"%")]}),Object(h.s)(o,e.id)&&!["1inch","paraswap","0x"].includes(e.exchange)?Object(b.jsx)(R,{href:Object(h.n)(o,e.id,"address"),target:"_blank",children:t},"".concat(t,"-").concat(e.id)):Object(b.jsx)(C,{children:t},"".concat(t,"-").concat(e.id))})):null]}),t!==n.length-1&&Object(b.jsx)(N,{children:Object(b.jsx)(I,{})})]},d)}))})})})},H=e=>{var t=e.tradeComposition,i=e.maxHeight,o=e.inputAmount,n=e.outputAmount,a=e.currencyIn,d=e.currencyOut,s=Object(c.b)().chainId,p=Object(r.useRef)(null),u=Object(r.useRef)(null),h=Object(r.useRef)(null),k=(e,t,i)=>s&&e?Object(b.jsxs)(j,{as:"div",reverse:i,style:{border:"none"},children:[Object(b.jsx)(l.a,{currency:e,size:"20px"}),Object(b.jsx)("span",{children:"".concat(t?t.toSignificant(6):""," ").concat(e.symbol)})]}):null,_=s&&t&&t.length>0,R=Object(r.useCallback)((()=>{var e,t,i,o,n,r,a,d,s,l=u.current;(null!==(e=null===l||void 0===l?void 0:l.scrollTop)&&void 0!==e?e:0)>0?null===p||void 0===p||null===(r=p.current)||void 0===r||r.classList.add("top"):null===p||void 0===p||null===(a=p.current)||void 0===a||a.classList.remove("top");(null!==(t=null===(i=h.current)||void 0===i?void 0:i.scrollHeight)&&void 0!==t?t:0)-(null!==(o=null===l||void 0===l?void 0:l.scrollTop)&&void 0!==o?o:0)>(null!==(n=null===l||void 0===l?void 0:l.clientHeight)&&void 0!==n?n:0)?null===(d=p.current)||void 0===d||d.classList.add("bottom"):null===(s=p.current)||void 0===s||s.classList.remove("bottom")}),[]);return Object(r.useEffect)((()=>(window.addEventListener("resize",R),()=>window.removeEventListener("resize",R))),[R]),Object(r.useEffect)((()=>{R()}),[t,i,R]),Object(b.jsx)(g,{ref:p,children:Object(b.jsx)(m,{ref:u,onScroll:R,style:{maxHeight:i||"100%"},children:Object(b.jsxs)("div",{ref:h,children:[Object(b.jsxs)(x,{children:[Object(b.jsx)(v,{children:k(a,o)}),!_&&Object(b.jsx)(f,{}),Object(b.jsx)(v,{children:k(d,n,!0)})]}),t&&s&&t&&t.length>0?Object(b.jsx)("div",{children:Object(b.jsxs)(y,{children:[Object(b.jsx)(L,{}),Object(b.jsx)(L,{out:!0}),t.map((e=>Object(b.jsxs)(w,{children:[Object(b.jsx)(T,{children:z(e.swapPercentage,t.length)}),Object(b.jsx)(O,{}),Object(b.jsx)(E,{route:e,chainId:s}),Object(b.jsx)(N,{style:{marginRight:"2px"},children:Object(b.jsx)(I,{})})]},e.id)))]})}):null]})})})};t.default=Object(r.memo)(H)}}]);