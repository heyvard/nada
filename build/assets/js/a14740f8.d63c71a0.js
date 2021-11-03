"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[905],{3905:function(a,t,e){e.d(t,{Zo:function(){return c},kt:function(){return I}});var i=e(7294);function d(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function n(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){d(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function r(a,t){if(null==a)return{};var e,i,d=function(a,t){if(null==a)return{};var e,i,d={},l=Object.keys(a);for(i=0;i<l.length;i++)e=l[i],t.indexOf(e)>=0||(d[e]=a[e]);return d}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(i=0;i<l.length;i++)e=l[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(d[e]=a[e])}return d}var o=i.createContext({}),s=function(a){var t=i.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):n(n({},t),a)),e},c=function(a){var t=s(a.components);return i.createElement(o.Provider,{value:t},a.children)},m={inlineCode:"code",wrapper:function(a){var t=a.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(a,t){var e=a.components,d=a.mdxType,l=a.originalType,o=a.parentName,c=r(a,["components","mdxType","originalType","parentName"]),p=s(e),I=d,u=p["".concat(o,".").concat(I)]||p[I]||m[I]||l;return e?i.createElement(u,n(n({ref:t},c),{},{components:e})):i.createElement(u,n({ref:t},c))}));function I(a,t){var e=arguments,d=t&&t.mdxType;if("string"==typeof a||d){var l=e.length,n=new Array(l);n[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=a,r.mdxType="string"==typeof a?a:d,n[1]=r;for(var s=2;s<l;s++)n[s]=e[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},6096:function(a,t,e){e.r(t),e.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=e(7462),d=e(3366),l=(e(7294),e(3905)),n=["components"],r={title:"Dataprodukt"},o=void 0,s={unversionedId:"dele-data/data-products",id:"dele-data/data-products",isDocsHomePage:!1,title:"Dataprodukt",description:"Et dataprodukt skal f\xf8lge de seks egenskapene nedenfor:",source:"@site/docs/dele-data/data-products.md",sourceDirName:"dele-data",slug:"/dele-data/data-products",permalink:"/dele-data/data-products",editUrl:"https://github.com/navikt/nada/edit/master/docs/dele-data/data-products.md",tags:[],version:"current",frontMatter:{title:"Dataprodukt"},sidebar:"docs",previous:{title:"Naisjobs",permalink:"/prosessere-data/pipelines/naisjobs"},next:{title:"Lage dataprodukt",permalink:"/dele-data/lage-dataprodukt"}},c=[{value:"Lage en datakilde",id:"lage-en-datakilde",children:[]},{value:"Publisere dataprodukt",id:"publisere-dataprodukt",children:[{value:"<strong>Data as product:</strong> Publish datasets",id:"data-as-product-publish-datasets",children:[]},{value:"<strong>Metadata:</strong> Register metadata in the data catalog",id:"metadata-register-metadata-in-the-data-catalog",children:[]}]},{value:"Create a data product",id:"create-a-data-product",children:[{value:"A Kubernetes job",id:"a-kubernetes-job",children:[]},{value:"Python scripts scheduled with Airflow on prem",id:"python-scripts-scheduled-with-airflow-on-prem",children:[]},{value:"Using managed GCP services",id:"using-managed-gcp-services",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Simple data product",id:"simple-data-product",children:[]},{value:"Kafka in combination with batch transformations",id:"kafka-in-combination-with-batch-transformations",children:[]},{value:"Typical data product based on domain data-on-the-inside",id:"typical-data-product-based-on-domain-data-on-the-inside",children:[]}]}],m={toc:c};function p(a){var t=a.components,r=(0,d.Z)(a,n);return(0,l.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Et dataprodukt skal f\xf8lge de seks egenskapene nedenfor:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Discoverable"),(0,l.kt)("li",{parentName:"ul"},"Adressable"),(0,l.kt)("li",{parentName:"ul"},"Trustworthy and truthful (defined & monitored SLOs)"),(0,l.kt)("li",{parentName:"ul"},"Self-describing semantics & syntax"),(0,l.kt)("li",{parentName:"ul"},"Interoperable (governed by open standards)"),(0,l.kt)("li",{parentName:"ul"},"Secure and governed by global access control")),(0,l.kt)("p",null,"Kilde: ",(0,l.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html#DomainDataAsAProduct"},"https://martinfowler.com/articles/data-monolith-to-mesh.html#DomainDataAsAProduct")),(0,l.kt)("p",null,'Som eier av data er teamet ansvarlig for "Trustworthy and truthful" og "Self-describing semantics & syntax". Resten tar Nada ansvar for.'),(0,l.kt)("h2",{id:"lage-en-datakilde"},"Lage en datakilde"),(0,l.kt)("h2",{id:"publisere-dataprodukt"},"Publisere dataprodukt"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Data Product"),". The term data product is here used as defined in the datamesh literature: 'Data Product is the node on the mesh that encapsulates three structural components required for its function: Code, Data and Metadata, Infrastructure' ",(0,l.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/what-we-do/data-and-ai/data-mesh"},"Source: Thoughtworks"),". A more complete definition can be found under ",(0,l.kt)("a",{parentName:"p",href:"/konsepter/data-product"},"Concepts")),(0,l.kt)("p",null,"Please note that the term is used differently from the more conventional definition: 'data product is a product that facilitates an end goal through the use of data' ",(0,l.kt)("a",{parentName:"p",href:"http://radar.oreilly.com/2012/07/data-jujitsu.html"},"Source: DJ. Patil. 2012")),(0,l.kt)("h3",{id:"data-as-product-publish-datasets"},(0,l.kt)("strong",{parentName:"h3"},"Data as product:")," Publish datasets"),(0,l.kt)("p",null,"Data products offer 'data as product'. 'This implies thinking about data as something that has a 'customer' and the aim is to delight those customers' ",(0,l.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/what-we-do/data-and-ai/data-mesh"},"Source: Thoughtworks")),(0,l.kt)("p",null,"Data as products should as a minimum follow the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FAIR_data"},"FAIR principles")),(0,l.kt)("p",null,"In NAV we publish and offer data as a product primarily in the form of Kafka topics and tables in BigQuery"),(0,l.kt)("p",null,"Things to consider when delivering data as a product:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The data should be immutable and contain a complete history, not just a snapshot."),(0,l.kt)("li",{parentName:"ul"},"There may be a need to transform data to adapt the product to different user groups."),(0,l.kt)("li",{parentName:"ul"},"Raw data should be changed as little as possible before being loading. Normally it will be sufficient to:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Rename fields to user-friendly names"),(0,l.kt)("li",{parentName:"ul"},"Define column types"),(0,l.kt)("li",{parentName:"ul"},"Disable small transformations that are guaranteed to be useful in the long run"))),(0,l.kt)("li",{parentName:"ul"},"You should only exceptionally remove data or apply transformations that change data")),(0,l.kt)("h3",{id:"metadata-register-metadata-in-the-data-catalog"},(0,l.kt)("strong",{parentName:"h3"},"Metadata:")," Register metadata in the data catalog"),(0,l.kt)("p",null,"Data as a product must be easily discoverable. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/navikt/dakan"},"dakan")," provides a search interface to our metadata graph. "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/share-data/register"},"Register metadata")),(0,l.kt)("h2",{id:"create-a-data-product"},"Create a data product"),(0,l.kt)("p",null,"Data products may take many forms. Here are some approaches:"),(0,l.kt)("h3",{id:"a-kubernetes-job"},"A Kubernetes job"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://doc.nais.io/naisjob/"},"Naisjob")," creates a Kubernetes Job and CronJob resources. A ",(0,l.kt)("a",{href:"https://doc.nais.io/persistence/bigquery/"},"BigQuery Dataset")," can be provisioned with config in in the manifest file.")),(0,l.kt)("h3",{id:"python-scripts-scheduled-with-airflow-on-prem"},"Python scripts scheduled with Airflow on prem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://github.com/navikt/dataverk-airflow"},"Knada KubernetesPodOperator wrapper"),": A kubernetes job scheduled with airflow")),(0,l.kt)("h3",{id:"using-managed-gcp-services"},"Using managed GCP services"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Color coding in figures:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Encoding",src:e(4118).Z})),(0,l.kt)("h3",{id:"simple-data-product"},"Simple data product"),(0,l.kt)("p",null,"The data product offers a single or a few datasets which do not require complex transformations."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Enkelt",src:e(6465).Z})),(0,l.kt)("h3",{id:"kafka-in-combination-with-batch-transformations"},"Kafka in combination with batch transformations"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Kafka + Batch",src:e(8273).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Arbeidsplassen")),(0,l.kt)("h3",{id:"typical-data-product-based-on-domain-data-on-the-inside"},"Typical data product based on domain data-on-the-inside"),(0,l.kt)("p",null,"The data product offers multiple datasets and, possibly, examples of use."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Komplett",src:e(9778).Z})),(0,l.kt)("h4",{id:"implementation-examples"},"Implementation examples"),(0,l.kt)("p",null,"Bare-bone minimal data product examples. Please note that these examples have been made for development and testing of the integration of data products with the metadata api and the datacatalog. They are far from complete and do not represent good practice for creating data products."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enhetsregisteret"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/navikt/knada-naisjobb-test"},"Github")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://data.intern.nav.no/"},"Data catalog")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"FIST syntetiske regnskapsdata"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/navikt/dataprodukt_fist-syntetiskedata"},"Github")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://data.intern.nav.no/"},"Data catalog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://superset.intern.nav.no/"},"Superset"))))))}p.isMDXComponent=!0},9778:function(a,t,e){t.Z=e.p+"assets/images/dataproducts-complete-6c31a4adb8866dea2b6d2ddaa75edd53.svg"},4118:function(a,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2MDFweCIgaGVpZ2h0PSIxNDFweCIgdmlld0JveD0iLTAuNSAtMC41IDYwMSAxNDEiPjxkZWZzLz48Zz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZDVlOGQ0IiBzdHJva2U9IiM4MmIzNjYiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMzBweDsgbWFyZ2luLWxlZnQ6IDFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogIzAwMDAwMDsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+TWFuYWdlZCBwbGF0Zm9ybSBzZXJ2aWNlczwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MCIgeT0iMzQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFuYWdlZCBwbGF0Zm9ybSBzZXIuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjE2MCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjJjYyIgc3Ryb2tlPSIjZDZiNjU2IiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDExOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDMwcHg7IG1hcmdpbi1sZWZ0OiAxNjFweDsiPjxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogIzAwMDAwMDsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgd29yZC13cmFwOiBub3JtYWw7ICI+TkFWIHBsYXRmb3JtPGJyIC8+wqBzZXJ2aWNlczwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyMjAiIHk9IjM0IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5BViBwbGF0Zm9ybS4uLjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMzIwIiB5PSIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiM2YzhlYmYiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMzBweDsgbWFyZ2luLWxlZnQ6IDMyMXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj5QaXBlbGluZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzODAiIHk9IjM0IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBpcGVsaW5lPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI0ODAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNmOGNlY2MiIHN0cm9rZT0iI2I4NTQ1MCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogNDgxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPk1ldGFkYXRhPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjU0MCIgeT0iMzQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWV0YWRhdGE8L3RleHQ+PC9zd2l0Y2g+PC9nPjxlbGxpcHNlIGN4PSI2MCIgY3k9IjEyMCIgcng9IjIwIiByeT0iMjAiIGZpbGw9IiNmNWY1ZjUiIHN0cm9rZT0iIzY2NjY2NiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxlbGxpcHNlIGN4PSIzOTAiIGN5PSIxMjAiIHJ4PSIyMCIgcnk9IjIwIiBmaWxsPSIjZTFkNWU3IiBzdHJva2U9IiM5NjczYTYiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSI3MCIgeT0iMTEwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTA4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTIwcHg7IG1hcmdpbi1sZWZ0OiA3MXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj5vdXRwdXQgcG9ydHM8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTI1IiB5PSIxMjQiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+b3V0cHV0IHBvcnRzPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI0MDAiIHk9IjExMCIgd2lkdGg9IjExMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDEwOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDEyMHB4OyBtYXJnaW4tbGVmdDogNDAxcHg7Ij48ZGl2IHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPmlucHV0IHBvcnRzPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQ1NSIgeT0iMTI0IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmlucHV0IHBvcnRzPC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PHN3aXRjaD48ZyByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiLz48YSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC01KSIgeGxpbms6aHJlZj0iaHR0cHM6Ly93d3cuZGlhZ3JhbXMubmV0L2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlZpZXdlciBkb2VzIG5vdCBzdXBwb3J0IGZ1bGwgU1ZHIDEuMTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"},8273:function(a,t,e){t.Z=e.p+"assets/images/dataproducts-kafka-ad761a995b8cc8ce48ba114644dc6d14.svg"},6465:function(a,t,e){t.Z=e.p+"assets/images/dataproducts-simple-99846502ba163342f9d0db7c9b45c35d.svg"}}]);