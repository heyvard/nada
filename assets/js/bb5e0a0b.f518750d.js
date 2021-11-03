"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[292],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5560:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={title:"Data Mesh"},d=void 0,s={unversionedId:"konsepter/data-mesh",id:"konsepter/data-mesh",isDocsHomePage:!1,title:"Data Mesh",description:"Data Mesh",source:"@site/docs/konsepter/data-mesh.md",sourceDirName:"konsepter",slug:"/konsepter/data-mesh",permalink:"/konsepter/data-mesh",editUrl:"https://github.com/navikt/nada/edit/master/docs/konsepter/data-mesh.md",tags:[],version:"current",frontMatter:{title:"Data Mesh"},sidebar:"konsepter",previous:{title:"Concepts",permalink:"/konsepter"},next:{title:"Datafortelling",permalink:"/konsepter/datafortelling"}},l=[{value:"Data Mesh",id:"data-mesh",children:[]},{value:"Domain-oriented ownership",id:"domain-oriented-ownership",children:[]},{value:"Data as a Product",id:"data-as-a-product",children:[]},{value:"Federated Computational Governance",id:"federated-computational-governance",children:[]},{value:"Self-serve Data Platform",id:"self-serve-data-platform",children:[]}],u={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"data-mesh"},"Data Mesh"),(0,o.kt)("p",null,"Datamesh is a novel paradigm proposed by Zhamak Dehghani from ThoughWorks.\nThe paradigm is founded in four principles: domain-oriented decentralized data ownership and architecture,\ndata as a product, self-serve data infrastructure as a platform, and federated computational governance."),(0,o.kt)("h3",{id:"domain-oriented-ownership"},"Domain-oriented ownership"),(0,o.kt)("p",null,"Decentralize the ownership of sharing analytical data to business domains\nwho are closest to the data \u2014 either are the source of the data or its main\nconsumers. Decompose the data artefacts (data, code, metadata, policies) -\nlogically - based on the business domain they represent and manage their life\ncycle independently. "),(0,o.kt)("h3",{id:"data-as-a-product"},"Data as a Product"),(0,o.kt)("p",null,"Business domains become accountable to share their data as\na product served to data users \u2013 data analysts and data scientists."),(0,o.kt)("p",null,"Data as a product introduces a new unit of logical architecture called, data\nproduct, controlling and encapsulating all the structural components\n\u2014 data, code, policy and infrastructure dependencies \u2014 needed to\nshare data as a product autonomously."),(0,o.kt)("h3",{id:"federated-computational-governance"},"Federated Computational Governance"),(0,o.kt)("p",null,"A data governance operational model that is based on a federated decision\nmaking and accountability structure, with a team made up of domains, data\nplatform, and subject matter experts \u2014 legal, compliance, security, etc. It cre\u2010\nates an incentive and accountability structure that balances the autonomy\nand agility of domains, while respecting the global conformance, interopera\u2010\nbility and security of the mesh. The governance model heavily relies on codi\u2010\nfying and automated execution of policies at a fine-grained level, for each\nand every data product."),(0,o.kt)("h3",{id:"self-serve-data-platform"},"Self-serve Data Platform"),(0,o.kt)("p",null,"A new generation of self-serve data platform to empower domain-oriented\nteams to manage the end-to-end life cycle of their data products, to manage a\nreliable mesh of interconnected data products and share the mesh\u2019s emergent\nknowledge graph and lineage, and to streamline the exp"))}p.isMDXComponent=!0}}]);