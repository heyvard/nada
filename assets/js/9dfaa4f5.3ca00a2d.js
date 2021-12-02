"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[452],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,c=d["".concat(s,".").concat(m)]||d[m]||k[m]||a;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Notebooks"},s=void 0,p={unversionedId:"prosessere-data/notebooks",id:"prosessere-data/notebooks",isDocsHomePage:!1,title:"Notebooks",description:"Det er ogs\xe5 st\xf8tte for Jupyter Notebooks i GCP, og disse finner man under AI Platform (doc), sammen med en del andre verkt\xf8y.",source:"@site/docs/prosessere-data/notebooks.md",sourceDirName:"prosessere-data",slug:"/prosessere-data/notebooks",permalink:"/prosessere-data/notebooks",editUrl:"https://github.com/navikt/nada/edit/main/docs/prosessere-data/notebooks.md",tags:[],version:"current",frontMatter:{title:"Notebooks"},sidebar:"docs",previous:{title:"Naisjobs",permalink:"/prosessere-data/naisjobs"},next:{title:"Getting started",permalink:"/prosessere-data/onprem/getting-started"}},u=[{value:"Guide",id:"guide",children:[]},{value:"Autentisering med brukers credentials p\xe5 hubben",id:"autentisering-med-brukers-credentials-p\xe5-hubben",children:[]},{value:"Maskin type og GPU",id:"maskin-type-og-gpu",children:[]},{value:"Stoppe en maskin",id:"stoppe-en-maskin",children:[]},{value:"Slette en maskin",id:"slette-en-maskin",children:[]}],k={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Det er ogs\xe5 st\xf8tte for ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter Notebooks")," i GCP, og disse finner man under ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/ai-platform/docs/technical-overview"},"AI Platform (doc)"),", sammen med en del andre verkt\xf8y.\nDu finner den offisielle dokumentasjonen for AI Platform Notebooks hos ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/ai-platform/notebooks/docs"},"cloud.google.com"),"."),(0,a.kt)("p",null,"Nedenfor har vi laget en liten steg-for-steg guide for \xe5 komme i gang."),(0,a.kt)("h2",{id:"guide"},"Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"G\xe5 til ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/ai-platform/notebooks/instances"},"AI Platform/Notebooks")),(0,a.kt)("li",{parentName:"ol"},"Velg ",(0,a.kt)("inlineCode",{parentName:"li"},"New Notebook")," og velg ",(0,a.kt)("inlineCode",{parentName:"li"},"Customize")),(0,a.kt)("li",{parentName:"ol"},"Fyll inn alle obligatoriske felter:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Notebook name - Navn p\xe5 kladdeboka"),(0,a.kt)("li",{parentName:"ul"},"Region - Velg en av de europeiske"),(0,a.kt)("li",{parentName:"ul"},"Zone - En sone innenfor regionen du valgte"),(0,a.kt)("li",{parentName:"ul"},"Environment - Velg et milj\xf8 som passer ditt behov/spr\xe5k"),(0,a.kt)("li",{parentName:"ul"},"Machine type og GPU - Hvor kraftig maskin du trenger"))),(0,a.kt)("li",{parentName:"ol"},"Ekspander ",(0,a.kt)("inlineCode",{parentName:"li"},"Permission"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Access to JupyterLab")," velg ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Single user only")," hvis det kun er du som skal ha tilgang til hubben"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Service account")," hvis alle med tilgang til gcp prosjektet skal ha tilgang"))))),(0,a.kt)("li",{parentName:"ol"},"Trykk ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")),(0,a.kt)("li",{parentName:"ol"},"N\xe5r maskinen er klar til bruk kan du trykke p\xe5 ",(0,a.kt)("inlineCode",{parentName:"li"},"Open JupyterLab"))),(0,a.kt)("h2",{id:"autentisering-med-brukers-credentials-p\xe5-hubben"},"Autentisering med brukers credentials p\xe5 hubben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"I Jupyterlab, \xe5pne en terminal"),(0,a.kt)("li",{parentName:"ol"},"Kj\xf8r kommandoen ",(0,a.kt)("inlineCode",{parentName:"li"},"gcloud auth login --update-adc")),(0,a.kt)("li",{parentName:"ol"},"G\xe5 til lenken som vises i terminalen og logg inn med nav-bruker"),(0,a.kt)("li",{parentName:"ol"},"Etter at du har logget inn kopierer du verifikasjonskoden du f\xe5r inn i terminalen")),(0,a.kt)("p",null,"Etter \xe5 ha utf\xf8rt stegene over vil du i notebooks kunne jobbe med dine private google credentials mot kilder."),(0,a.kt)("h2",{id:"maskin-type-og-gpu"},"Maskin type og GPU"),(0,a.kt)("p",null,"Det er du som vet best hva du trenger, derfor er det ingen begrensninger p\xe5 hva du kan velge av maskin og GPU.\nBare husk at det kan bli veldig kostbart hvis du lar en maskin (med mye minne og GPU) st\xe5 uten at den blir brukt."),(0,a.kt)("h2",{id:"stoppe-en-maskin"},"Stoppe en maskin"),(0,a.kt)("p",null,"Har du en maskin du ikke trenger for en periode, men ikke \xf8nsker \xe5 ",(0,a.kt)("a",{parentName:"p",href:"#slette-en-maskin"},"slette"),", s\xe5 kan du stoppe den.\nVelg maskinen i ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/ai-platform/notebooks/instances"},"oversikten")," og trykk ",(0,a.kt)("inlineCode",{parentName:"p"},"STOP")," i toppen."),(0,a.kt)("h2",{id:"slette-en-maskin"},"Slette en maskin"),(0,a.kt)("p",null,"Har du en maskin du ikke trenger lenger, s\xe5 kan du slette den.\nVelg maskinen i ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/ai-platform/notebooks/instances"},"oversikten")," og trykk ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," i toppen."))}d.isMDXComponent=!0}}]);