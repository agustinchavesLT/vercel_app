import{r as f}from"./index.RH_Wq4ov.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function p(){if(c)return s;c=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,e,r){var u=null;if(r!==void 0&&(u=""+r),e.key!==void 0&&(u=""+e.key),"key"in e){r={};for(var l in e)l!=="key"&&(r[l]=e[l])}else r=e;return e=r.ref,{$$typeof:o,type:a,key:u,ref:e!==void 0?e:null,props:r}}return s.Fragment=t,s.jsx=i,s.jsxs=i,s}var x;function R(){return x||(x=1,d.exports=p()),d.exports}var n=R();function m({name:o}){const[t,i]=f.useState(!1);return n.jsxs("section",{style:{fontFamily:"system-ui, sans-serif",lineHeight:1.6},children:[n.jsxs("h1",{style:{margin:"1rem 0"},children:["You are on: ",o]}),n.jsxs("button",{onClick:()=>i(a=>!a),style:{padding:"0.5rem 0.75rem",borderRadius:8,border:"1px solid #ccc",background:t?"#eef6ff":"#f7f7f7",cursor:"pointer"},children:[t?"Hide":"Show"," details"]}),t&&n.jsx("p",{style:{marginTop:"0.75rem",color:"#444"},children:"This message is hydrated with React. Redirects and rewrites will not reload this component when navigating client-side."})]})}export{m as default};
