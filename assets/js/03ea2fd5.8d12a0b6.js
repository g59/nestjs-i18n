"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Type safety",s={unversionedId:"guides/type-safety",id:"guides/type-safety",title:"Type safety",description:"nestjs-i18n can generate types! This way your translations will be completely type safe! \ud83c\udf89",source:"@site/docs/guides/type-safety.md",sourceDirName:"guides",slug:"/guides/type-safety",permalink:"/guides/type-safety",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/type-safety.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/quick-start"},next:{title:"Fallback languages",permalink:"/guides/fallback-languages"}},p={},l=[],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-safety"},"Type safety"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," can generate types! This way your translations will be completely type safe! \ud83c\udf89"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"type safety demo",src:n(2652).Z,width:"600",height:"359"})),(0,a.kt)("p",null,"To use generated types specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"typesOutputPath")," option to let ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," know where to put them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"import { Module } from '@nestjs/common';\nimport * as path from 'path';\nimport { I18nModule } from 'nestjs-i18n';\n\n@Module({\n  imports: [\n    I18nModule.forRoot({\n      fallbackLanguage: 'en',\n      loaderOptions: {\n        path: path.join(__dirname, '/i18n/'),\n        watch: true,\n      },\n      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),\n    }),\n  ],\n  controllers: [],\n})\nexport class AppModule {}\n")),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use the types within your code import the ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nTranslations")," type from the generated file. Pass this type into the generic type properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nContext")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nService"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"import { Controller, Get } from '@nestjs/common';\nimport { I18n, I18nContext } from 'nestjs-i18n';\nimport { I18nTranslations } from './generated/i18n.generated.ts';\n\n@Controller()\nexport class AppController {\n\n  @Get()\n  async getHello(@I18n() i18n: I18nContext<I18nTranslations>) {\n    return await i18n.t('test.HELLO');\n  }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can import the ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nPath")," type so you require a valid i18n path in your code. This is useful when handeling exceptions with translations."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"import { I18nPath } from './generated/i18n.generated.ts';\n\nexport class ApiException extends Error {\n  get translation(): I18nPath {\n    return this.message as I18nPath;\n  }\n\n  get args(): any {\n    return this._args;\n  }\n\n  constructor(key: I18nPath, private readonly _args?: any) {\n    super(key);\n  }\n}\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For now type safety is optional and need to be enabled. We're planning to make a breaking change where type safety is enabled by default.")))}u.isMDXComponent=!0},2652:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/type-safety-7c2671206ecd4392421da60be4e4c53a.gif"}}]);