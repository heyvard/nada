"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[858],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2802:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Architectural Decision Record",slug:"/adr",sidebar_position:0},u=void 0,l={unversionedId:"adr/README",id:"adr/README",isDocsHomePage:!1,title:"Architectural Decision Record",description:"We use Architectural Decision Record (ADR) in NADA to document the decisions we make.",source:"@site/docs/adr/README.md",sourceDirName:"adr",slug:"/adr",permalink:"/adr",editUrl:"https://github.com/navikt/nada/edit/master/docs/adr/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Architectural Decision Record",slug:"/adr",sidebar_position:0},sidebar:"adr",next:{title:"001 / NADA // definisjoner",permalink:"/adr/nada-definisjoner"}},s=[],p={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joelparkerhenderson/architecture_decision_record"},"Architectural Decision Record (ADR)")," in NADA to document the decisions we make."),(0,i.kt)("p",null,"Vi skriver ADR-er i markdown, og de skal ligge under ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/adr"),".\nPrefixes filnavnet med tresiffret tall og en kort tittel.\nEksempel ",(0,i.kt)("inlineCode",{parentName:"p"},"001-veien-videre.md"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\ntitle: 000 Title\n---\n\n## Kontekst\n\n## Avgj\xf8relse\n\n## Oppsummering\n\n")))}d.isMDXComponent=!0}}]);