"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[136],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(d,".").concat(k)]||c[k]||p[k]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"001 / NADA // definisjoner"},d=void 0,u={unversionedId:"adr/nada-definisjoner",id:"adr/nada-definisjoner",isDocsHomePage:!1,title:"001 / NADA // definisjoner",description:"Kontekst",source:"@site/docs/adr/001-nada-definisjoner.md",sourceDirName:"adr",slug:"/adr/nada-definisjoner",permalink:"/nada/adr/nada-definisjoner",editUrl:"https://github.com/navikt/nada/edit/master/docs/adr/001-nada-definisjoner.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"001 / NADA // definisjoner"},sidebar:"adr",previous:{title:"Architectural Decision Record",permalink:"/nada/adr"}},s=[{value:"Kontekst",id:"kontekst",children:[]},{value:"Avgj\xf8relse",id:"avgj\xf8relse",children:[{value:"/ Datasamling //",id:"-datasamling-",children:[]},{value:"/ Dataprodukt //",id:"-dataprodukt-",children:[]},{value:"/ Datakilde //",id:"-datakilde-",children:[]},{value:"/ Datafortelling //",id:"-datafortelling-",children:[]},{value:"/ Pipeline //",id:"-pipeline-",children:[]}]},{value:"Oppsummering",id:"oppsummering",children:[]}],p={toc:s};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kontekst"},"Kontekst"),(0,i.kt)("p",null,"Vi mangler en god oversikt over definisjoner som blir brukt i NADA-kontekst."),(0,i.kt)("h2",{id:"avgj\xf8relse"},"Avgj\xf8relse"),(0,i.kt)("p",null,"M\xe5l 1. Produsere data\nM\xe5l 2. Forbruke data"),(0,i.kt)("h3",{id:"-datasamling-"},"/ Datasamling //"),(0,i.kt)("p",null,"En datasamling best\xe5r av et eller flere dataprodukter."),(0,i.kt)("h3",{id:"-dataprodukt-"},"/ Dataprodukt //"),(0,i.kt)("p",null,"Et dataprodukt skal f\xf8lge de seks egenskapene nedenfor:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discoverable"),(0,i.kt)("li",{parentName:"ul"},"Adressable"),(0,i.kt)("li",{parentName:"ul"},"Trustworthy and truthful (defined & monitored SLOs)"),(0,i.kt)("li",{parentName:"ul"},"Self-describing semantics & syntax"),(0,i.kt)("li",{parentName:"ul"},"Interoperable (governed by open standards)"),(0,i.kt)("li",{parentName:"ul"},"Secure and governed by global access control")),(0,i.kt)("p",null,"Kilde: ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html#DomainDataAsAProduct"},"https://martinfowler.com/articles/data-monolith-to-mesh.html#DomainDataAsAProduct")),(0,i.kt)("p",null,"Et dataprodukt kan inng\xe5 i en datasamling.\nEt dataprodukt best\xe5r av metadata og datakilde.\nDet er p\xe5 dette niv\xe5et tilganger til datakilden styres.\nEt dataprodukt skal ha et skjema, og v\xe6re dokumentert."),(0,i.kt)("h3",{id:"-datakilde-"},"/ Datakilde //"),(0,i.kt)("p",null,"En datakilde er direkte knyttet til et dataprodukt.\nNADA st\xf8tter f\xf8lgende datakilder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BigQuery view/table"),(0,i.kt)("li",{parentName:"ul"},"Fil i en Bucket"),(0,i.kt)("li",{parentName:"ul"},"Snowflake table")),(0,i.kt)("p",null,"En datakilde vil typisk bli produsert og oppdatert av en pipeline."),(0,i.kt)("h3",{id:"-datafortelling-"},"/ Datafortelling //"),(0,i.kt)("p",null,"En datafortelling er en visualisering av data.\nKan inneholde lenker til dataprodukt."),(0,i.kt)("h3",{id:"-pipeline-"},"/ Pipeline //"),(0,i.kt)("p",null,"En pipeline er produksjon av en eller flere datakilder."),(0,i.kt)("h2",{id:"oppsummering"},"Oppsummering"),(0,i.kt)("p",null,"Produksjon av datakilder vil ikke bli styrt av plattformen, men NADA kan komme med anbefalinger p\xe5 hvordan man b\xf8r sette opp en pipeline."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NADA sine definisjoner og sammenhenger",src:n(9186).Z})))}c.isMDXComponent=!0},9186:function(e,t,n){t.Z=n.p+"assets/images/adr-001-b43d17e724d28ca1727fb0f81d30e4c2.png"}}]);