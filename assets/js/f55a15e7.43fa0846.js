"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[401],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Jupyterhub"},u=void 0,l={unversionedId:"process-data/onprem/jupyterhub",id:"process-data/onprem/jupyterhub",isDocsHomePage:!1,title:"Jupyterhub",description:"For data analysis KNADA recommends using Jupyter notebooks.",source:"@site/docs/process-data/onprem/jupyterhub.md",sourceDirName:"process-data/onprem",slug:"/process-data/onprem/jupyterhub",permalink:"/nada/process-data/onprem/jupyterhub",editUrl:"https://github.com/navikt/nada/edit/master/docs/process-data/onprem/jupyterhub.md",tags:[],version:"current",frontMatter:{title:"Jupyterhub"},sidebar:"docs",previous:{title:"Airflow",permalink:"/nada/process-data/onprem/airflow"},next:{title:"Read GCP buckets from onprem Jupyterhub/Airflow",permalink:"/nada/process-data/onprem/read-data/read-from-gcp-bucket"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Namespace",id:"namespace",children:[]},{value:"Ingress",id:"ingress",children:[]},{value:"Users",id:"users",children:[]},{value:"Custom environment variables",id:"custom-environment-variables",children:[]},{value:"Jupyter instead of JupyterLabs",id:"jupyter-instead-of-jupyterlabs",children:[]},{value:"Specify resource limits",id:"specify-resource-limits",children:[]}]},{value:"Restart Jupyterhub server",id:"restart-jupyterhub-server",children:[]},{value:"Delete hub",id:"delete-hub",children:[]},{value:"Remote Jupyterhub connection",id:"remote-jupyterhub-connection",children:[{value:"Create Jupyterhub API token",id:"create-jupyterhub-api-token",children:[]},{value:"Connect from Visual Studio Code",id:"connect-from-visual-studio-code",children:[]}]}],c={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For data analysis KNADA recommends using ",(0,o.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter notebooks"),"."),(0,o.kt)("p",null,"The Jupyterhub instances are created based on configuration files in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/navikt/knada-jupyterhub"},"navikt/knada-jupyterhub")," repository. In this repository you add your\nown configuration file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/configs")," catalog. "),(0,o.kt)("p",null,"With every new pull request to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/navikt/knada-jupyterhub"},"navikt/knada-jupyterhub")," (including changes to\nexisting ones) validation checks are performed on the files committed. When these checks passes the committer can\nmerge his or her own pull request themselves, ",(0,o.kt)("em",{parentName:"p"},"one does not have to wait for approval from the codeowners"),"."),(0,o.kt)("p",null,"Below is an example of the minimum requirements one need to specify in the configuration file. With this configuration\nyou will get a Jupyterhub with 2 GB memory and 0.5 CPU. The hub can be reached at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://kyrre.jupyter.adeo.no"),(0,o.kt)("br",{parentName:"p"}),"\n","and user ",(0,o.kt)("inlineCode",{parentName:"p"},"e152435")," is the only one allowed to log in."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/configs/kyrre.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace: kyrre-havik-eriksen\ningress: kyrre\nusers:\n  - e152435\n")),(0,o.kt)("p",null,"All values can be edited later on."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"namespace"},"Namespace"),(0,o.kt)("p",null,"Name of the k8s ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," your hub shall be set up in."),(0,o.kt)("p",null,"Editing this value later on will result in the creation of a hub in the new namespace. However, the other hub will still\nexist in the old namespace. Please see ",(0,o.kt)("a",{parentName:"p",href:"#delete-hub"},"Delete hub")," below if you choose to edit the namespace value."),(0,o.kt)("h3",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,"The prefix for the address. The value set as ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," combined with ",(0,o.kt)("inlineCode",{parentName:"p"},".jupyter.adeo.no")," becomes the hub address.  "),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("p",null,"List of users (NAV idents) allowed to log in to the hub."),(0,o.kt)("h3",{id:"custom-environment-variables"},"Custom environment variables"),(0,o.kt)("p",null,"If you have a need for custom environment variables for your Jupyterhub instance, you can add these using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"extraEnvs")," field in your configuration as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'extraEnvs:\n  - "hello: world"\n')),(0,o.kt)("p",null,"Note that every line must start with ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," and the value must be enclosed by quotes.\nThis is required as the value is interpreted as a string and not as key/value. "),(0,o.kt)("h3",{id:"jupyter-instead-of-jupyterlabs"},"Jupyter instead of JupyterLabs"),(0,o.kt)("p",null,"Should you want Jupyter instead of Jupyterlab, specify this in your configuration as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jupyterLabs: false\n")),(0,o.kt)("h3",{id:"specify-resource-limits"},"Specify resource limits"),(0,o.kt)("p",null,"If you require different resource limits (default being 2 GB and 0.5 CPU), you specify this using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"memoryLimit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuLimit")," fields in your configuration, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"memoryLimit: 10GB\ncpuLimit: 1\n")),(0,o.kt)("p",null,"Note that if you update the resource limits you need to restart the Jupyterhub server for the changes to take effect. In\norder to restart your server, see ",(0,o.kt)("a",{parentName:"p",href:"#restart-jupyterhub-server"},"Restart jupyterhub server")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Jupyterhub monitors the resource usage of your server and will restart the notebook kernel should you use more than",(0,o.kt)("br",{parentName:"p"}),"\n","requested."))),(0,o.kt)("h2",{id:"restart-jupyterhub-server"},"Restart Jupyterhub server"),(0,o.kt)("p",null,"In order to restart your Jupyterhub server, do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<ingress>.jupyter.adeo.no/home")),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Stop My Server")),(0,o.kt)("li",{parentName:"ol"},"When the option to start your server again becomes available, press ",(0,o.kt)("inlineCode",{parentName:"li"},"Start My Server"))),(0,o.kt)("h2",{id:"delete-hub"},"Delete hub"),(0,o.kt)("p",null,"Deletion of Jupyterhubs needs to be done manually by one of the cluster administrators.\nReach out in ",(0,o.kt)("a",{parentName:"p",href:"https://nav-it.slack.com/archives/CGRMQHT50"},"#knada")," for assistance."),(0,o.kt)("h2",{id:"remote-jupyterhub-connection"},"Remote Jupyterhub connection"),(0,o.kt)("p",null,"If you want to connect to your Jupyterhub from Visual Studio Code locally, do as follows "),(0,o.kt)("h3",{id:"create-jupyterhub-api-token"},"Create Jupyterhub API token"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<ingress>.jupyter.adeo.no/home")),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"token")," in the upper left corner"),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Request new API token")),(0,o.kt)("li",{parentName:"ol"},"Store the token locally")),(0,o.kt)("h3",{id:"connect-from-visual-studio-code"},"Connect from Visual Studio Code"),(0,o.kt)("p",null,"Once you have created an API token you can connect to your remote Jupyterhub server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that you have the Jupyter extension installed for Visual Studio Code\n",(0,o.kt)("img",{alt:"Jupyter extension",src:n(4225).Z})),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"cntrl+shift+P")," (windows) or ",(0,o.kt)("inlineCode",{parentName:"li"},"cmd+shift+P")," (mac)"),(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("inlineCode",{parentName:"li"},"Jupyter: Specify local or remote Jupyter server for connections")),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Existing")),(0,o.kt)("li",{parentName:"ol"},"Enter the URI of the running jupyter server,\ni.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<ingress>.jupyter.adeo.no/user/<nav-ident>/?token=<token>"),". Replace ingress and nav ident, and token with\nthe token retrieved in ",(0,o.kt)("a",{parentName:"li",href:"#create-jupyterhub-api-token"},"Create Jupyterhub API token")),(0,o.kt)("li",{parentName:"ol"},"When prompted, log in using your NAV-ident and password")))}d.isMDXComponent=!0},4225:function(e,t,n){t.Z=n.p+"assets/images/jupyter-extension-5cd9536ffd3bad3424ef875b5c8171ac.png"}}]);