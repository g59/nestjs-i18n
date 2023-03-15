"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Exception filters",s={unversionedId:"guides/exception-filters",id:"guides/exception-filters",title:"Exception filters",description:"To access the I18nContext inside your exception filters use the I18nContext.current() helper function.",source:"@site/docs/guides/exception-filters.md",sourceDirName:"guides",slug:"/guides/exception-filters",permalink:"/guides/exception-filters",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/exception-filters.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual validation",permalink:"/guides/dto_validation/manual-validation"},next:{title:"Formatting",permalink:"/guides/formatting"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exception-filters"},"Exception filters"),(0,o.kt)("p",null,"To access the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nContext")," inside your exception filters use the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nContext.current()")," helper function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/test.filter.ts"',title:'"src/test.filter.ts"'},'import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";\nimport { I18nContext } from "nestjs-i18n";\n\n@Catch()\nexport class TestExceptionFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const i18n = I18nContext.current<I18nTranslations>(host);\n    const response = host.switchToHttp().getResponse<any>();\n\n    console.log(\'current language\', i18n.lang);\n\n    response\n      .status(500)\n      .send(`Your language is: ${i18n.lang}`);\n  }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When using ",(0,o.kt)("strong",{parentName:"p"},"http")," or ",(0,o.kt)("strong",{parentName:"p"},"graphql")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," to make things work. However when throwing exceptions in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/middleware#middleware"},(0,o.kt)("strong",{parentName:"a"},"middleware"))," this can lead to throwing your exception before the ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," middleware had been reached. To solve this problem you'll need to register the ",(0,o.kt)("inlineCode",{parentName:"p"},"I18nMiddleware")," globally."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/main.ts"',title:'"src/main.ts"'},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { I18nMiddleware } from 'nestjs-i18n';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(I18nMiddleware);\n  await app.listen(3000);\n}\nbootstrap();\n")),(0,o.kt)("p",{parentName:"admonition"},"or"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';\nimport { I18nMiddleware } from 'nestjs-i18n';\n\n@Module({\n  ...\n})\nexport class AppModule implements NestModule {\n  configure(consumer: MiddlewareConsumer) {\n    consumer.apply(I18nMiddleware, MyMiddleware).forRoutes('*');\n  }\n}\n\n"))))}u.isMDXComponent=!0}}]);