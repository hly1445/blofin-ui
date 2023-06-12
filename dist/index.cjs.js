"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("./index-c0db069d.cjs");require("react");const y=r.cva("text-white",{variants:{theme:{light:["bg-light-primary","hover:bg-light-hover-primary"],dark:["bg-dark-primary","hover:bg-dark-hover-primary"]}}}),b=r.cva("text-white",{variants:{theme:{light:["bg-light-primary-40","hover:bg-light-primary-40"],dark:["bg-dark-primary-40","hover:bg-dark-primary-40"]}}}),v=r.cva("",{variants:{theme:{light:["bg-light-primary-14","hover:bg-light-hover-primary-10","text-light-primary"],dark:["bg-dark-primary-14","hover:bg-dark-hover-primary-10","text-dark-primary"]}}}),c=r.cva("",{variants:{theme:{light:["bg-light-primary-14","hover:bg-light-primary-14","text-light-primary-60"],dark:["bg-dark-primary-14","hover:bg-dark-primary-14","text-dark-primary-60"]}}}),k=r.cva("",{variants:{theme:{light:["bg-light-fill-primary","hover:bg-light-hover-fill-primary","text-light-label-70"],dark:["bg-dark-fill-primary","hover:bg-dark-hover-fill-primary","text-dark-label-70"]}}}),u=r.cva("",{variants:{theme:{light:["bg-light-fill-primary","hover:bg-light-fill-primary","text-light-label-40"],dark:["bg-dark-fill-primary","hover:bg-dark-fill-primary","text-dark-label-70"]}}}),f=r.cva("",{variants:{theme:{light:["text-light-label","hover:text-light-primary"],dark:["text-dark-label","hover:text-dark-primary"]}}}),j=r.cva("",{variants:{theme:{light:["text-light-label-40","hover:text-light-label-40"],dark:["text-dark-label-40","hover:text-dark-label-40"]}}}),S=r.cva("",{variants:{theme:{light:["text-light-primary","hover:text-light-hover-primary","border","border-solid","border-light-primary","hover:bg-light-primary-10"],dark:["text-dark-primary","hover:text-dark-hover-primary","border","border-solid","border-dark-primary","hover:bg-dark-primary-10"]}}}),w=r.cva("text-white",{variants:{theme:{light:["text-light-primary-60","hover:text-light-primary-60","border","border-solid","border-light-primary-60","hover:bg-transparent"],dark:["text-dark-primary-60","hover:text-dark-primary-60","border","border-solid","border-dark-primary-60","hover:bg-transparent"]}}}),i={primary:{variant:y,disabled:b},secondary:{variant:v,disabled:c},tertiary:{variant:k,disabled:u},text:{variant:f,disabled:j},ghost:{variant:S,disabled:w}},E=e=>{const{theme:t,variant:a}=e;return r.cva("rounded-[5px] box-border inline-flex items-center justify-center",{variants:{variant:{primary:i[a].variant({theme:t}),secondary:i[a].variant({theme:t}),tertiary:i[a].variant({theme:t}),text:i[a].variant({theme:t}),ghost:i[a].variant({theme:t})},size:{small:"px-[12px]  text-[14px] leading-[24px] h-[30px] min-w-[30px]",medium:"px-[16px] text-[14px] leading-[24px] h-[40px] min-w-[40px]",large:"px-[24px] text-[16px] leading-[28px] h-[48px] min-w-[48px]",max:"px-[24px] text-[18px] leading-[30px] h-[56px] min-w-[56px]"},shape:{normal:"",circle:"rounded-[50%] px-[0px] py-[0px]"},disabled:{true:i[a].disabled({theme:t})}}})(e)},R=({size:e="large",disabled:t=!1,variant:a="primary",theme:o="light",label:h,startIcon:l,endIcon:s,icon:p,onClick:d,shape:x="normal",className:n="",...m})=>{const g=()=>{d&&d()};return r.jsxRuntimeExports.jsxs("button",{type:"button",onClick:g,className:`${r.cn(E({variant:a,size:e,theme:o,shape:x,disabled:t}))} ${n}`,disabled:t,...m,children:[l&&r.jsxRuntimeExports.jsx("span",{className:"mr-[9.5px]",children:l}),h,s&&r.jsxRuntimeExports.jsx("span",{className:"ml-[9.5px]",children:s}),p]})};const T=({label:e,content:t})=>r.jsxRuntimeExports.jsxs("div",{className:"popover-container relative max-w-fit",children:[r.jsxRuntimeExports.jsx("label",{children:e}),r.jsxRuntimeExports.jsx("div",{className:"popover hidden absolute top-6 left-0 z-10 shadow",children:t})]}),N=e=>r.cva("text-black dark:text-white",{variants:{variant:{h1:"text-9xl",h2:"text-8xl",h3:"text-7xl",h4:"text-6xl",h5:"text-5xl",h6:"text-4xl",subtitle1:"text-3xl",subtitle2:"text-2xl",body1:"text-xl",body2:"text-lg",body3:"text-base",body4:"text-sm"},weight:{bold:"font-bold",medium:"font-medium",regular:"font-normal"}},defaultVariants:{variant:"body3",weight:"regular"}})(e),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"p",subtitle2:"p",body1:"p",body2:"p",body3:"p",body4:"p"},D=({variant:e="body3",weight:t="regular",className:a="",children:o,...h})=>{const l=B[e];return r.jsxRuntimeExports.jsx(l,{className:`${r.cn(N({variant:e,weight:t}))} ${a}`,...h,children:o})};exports.Badge=r.Badge;exports.Button=R;exports.Popover=T;exports.Typography=D;
//# sourceMappingURL=index.cjs.js.map