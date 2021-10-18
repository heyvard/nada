"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[197],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7313:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Dataverk"},l=void 0,p={unversionedId:"process-data/dataverk/README",id:"process-data/dataverk/README",isDocsHomePage:!1,title:"Dataverk",description:"Dataverk is a python library for data access, storage, and publishing",source:"@site/docs/process-data/dataverk/README.md",sourceDirName:"process-data/dataverk",slug:"/process-data/dataverk/README",permalink:"/process-data/dataverk/README",editUrl:"https://github.com/navikt/nada/edit/master/docs/process-data/dataverk/README.md",tags:[],version:"current",frontMatter:{title:"Dataverk"},sidebar:"docs",previous:{title:"Data catalog",permalink:"/find-data/data-catalog"},next:{title:"Deletion of published data packages",permalink:"/process-data/dataverk/delete-data-package"}},d=[{value:"Usage area",id:"usage-area",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"With JupyterHub",id:"with-jupyterhub",children:[]},{value:"Without Jupyterhub",id:"without-jupyterhub",children:[]}]},{value:"Contact us",id:"contact-us",children:[]},{value:"Link for ROS",id:"link-for-ros",children:[{value:"Links",id:"links",children:[]}]}],c={toc:d};function u(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/dataverk"},"Dataverk")," is a python library for data access, storage, and publishing\nof data products in NAV. Its purpose is to simplify access to sources, and storage of results for analysts,\ndata scientists, and others. The aim is to standardize the access to different data sources and provide a generic\nway to publish data either internally in NAV or externally, so users can focus on analysis and experimentation as opposed\nto struggling with how to read data from different sources and publishing their results.  "),(0,o.kt)("h4",{id:"access-to-data-sources"},"Access to data sources"),(0,o.kt)("p",null,"The library offers connectors for a variety of data sources, e.g. oracle, postgreSQL and kafka. What is common for all\nconnectors is that they return data in the same format, a ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs"},"pandas")," dataframe, which gives\nthe user the ability to utilize the pandas library to perform transformations and mutations on datasets, and combine data\nfrom different sources."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Read sources",src:a(7469).Z})),(0,o.kt)("h4",{id:"storage-and-publishing-of-results"},"Storage and publishing of results"),(0,o.kt)("p",null,"For storing results dataverk offer a google cloud storage connector which can be used either directly or through the\npublishing mechanism of dataverk."),(0,o.kt)("p",null,"To publish data products with dataverk involves the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare datasets, create visualizations, and text descriptions"),(0,o.kt)("li",{parentName:"ol"},"Publish a ",(0,o.kt)("a",{parentName:"li",href:"/share-data/data-products"},"data package"))),(0,o.kt)("p",null,'When a "data package" is published it will be available either in the ',(0,o.kt)("a",{parentName:"p",href:"https://data.intern.nav.no"},"internal")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://data.nav.no"},"external")," data catalog. "),(0,o.kt)("h4",{id:"anonymization-of-datasets"},"Anonymization of datasets"),(0,o.kt)("p",null,"The library also offers methods for performing simple data anonymization of datasets."),(0,o.kt)("h2",{id:"usage-area"},"Usage area"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data analysis"),(0,o.kt)("li",{parentName:"ul"},"Data experimentation/exploration"),(0,o.kt)("li",{parentName:"ul"},"Publish NAV data internally or externally"),(0,o.kt)("li",{parentName:"ul"},"Work code based with one tool all the way from raw data to end product")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"with-jupyterhub"},"With JupyterHub"),(0,o.kt)("p",null,"We recommend working with dataverk on a Jupyterhub server as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dataverk has a lot of external dependencies which must be installed in the environment (e.g. oracle driver, postgres\ndriver etc.). These dependencies will be installed in the docker image used by the notebook server."),(0,o.kt)("li",{parentName:"ol"},"Easier and more secure handling of secrets. When working from a Jupyterhub server this is handled in the same way as\nfor applications running in the NAIS clusters, i.e. secrets (e.g. database credentials) are mounted into the container\nenvironment as opposed to stored locally on your machine.")),(0,o.kt)("p",null,"To get started with Jupyterhub, see ",(0,o.kt)("a",{parentName:"p",href:"/process-data/onprem/getting-started"},"getting started")," or reach out in\n",(0,o.kt)("a",{parentName:"p",href:"https://nav-it.slack.com/archives/CGRMQHT50"},"#knada")," for assistance."),(0,o.kt)("h3",{id:"without-jupyterhub"},"Without Jupyterhub"),(0,o.kt)("p",null,"As long as you have a python distribution >=python36 installed, the library can be installed with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dataverk\n")),(0,o.kt)("h2",{id:"contact-us"},"Contact us"),(0,o.kt)("p",null,"For questions, reach out in ",(0,o.kt)("a",{parentName:"p",href:"https://nav-it.slack.com/archives/CCY2V3N4E"},"#dataverk"),"."),(0,o.kt)("h2",{id:"link-for-ros"},"Link for ROS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apps.powerapps.com/play/f8517640-ea01-46e2-9c09-be6b05013566?ID=209"},"ROS for dataverk")),(0,o.kt)("h3",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/dataverk"},"PyPI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/navikt/dataverk"},"Repo"))))}u.isMDXComponent=!0},7469:function(e,t,a){t.Z=a.p+"assets/images/dv_les_kilde-9903a5a8873a16bdad059a2a2471ff84.png"}}]);