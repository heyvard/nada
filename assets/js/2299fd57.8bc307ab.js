"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[458],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7061:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Vault"},p=void 0,s={unversionedId:"process-data/onprem/vault",id:"process-data/onprem/vault",isDocsHomePage:!1,title:"Vault",description:"For secrets in Jupyterhub/Airflow, vault is used",source:"@site/docs/process-data/onprem/vault.md",sourceDirName:"process-data/onprem",slug:"/process-data/onprem/vault",permalink:"/nada/process-data/onprem/vault",editUrl:"https://github.com/navikt/nada/edit/master/docs/process-data/onprem/vault.md",tags:[],version:"current",frontMatter:{title:"Vault"},sidebar:"docs",previous:{title:"Read GCP buckets from onprem Jupyterhub/Airflow",permalink:"/nada/process-data/onprem/read-data/read-from-gcp-bucket"},next:{title:"Data products",permalink:"/nada/share-data/data-products"}},u=[{value:"Setup vault for onprem Jupyterhub and Airflow",id:"setup-vault-for-onprem-jupyterhub-and-airflow",children:[{value:"Team namespace",id:"team-namespace",children:[]},{value:"Single-user namespace",id:"single-user-namespace",children:[]}]},{value:"Adding and administrating secrets is vault",id:"adding-and-administrating-secrets-is-vault",children:[]},{value:"Import the secrets in Jupyterhub and Airflow",id:"import-the-secrets-in-jupyterhub-and-airflow",children:[]},{value:"Vault integration with dataverk",id:"vault-integration-with-dataverk",children:[]}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For secrets in Jupyterhub/Airflow, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/navikt/vault-iac/tree/master/doc"},"vault")," is used\nin the same way as for applications in the other onprem clusters."),(0,o.kt)("h2",{id:"setup-vault-for-onprem-jupyterhub-and-airflow"},"Setup vault for onprem Jupyterhub and Airflow"),(0,o.kt)("p",null,"In order to set up vault for a new Jupyterhub/Airflow namespace one must create a pull request in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/navikt/vault-iac"},"navikt/vault-iac"),". See ",(0,o.kt)("a",{parentName:"p",href:"#team-namespace"},"Team namespace")," for setting up vault for\nteam namespaces and ",(0,o.kt)("a",{parentName:"p",href:"#single-user-namespace"},"Single-user namespace")," for setting up vault for single-user namespaces."),(0,o.kt)("h3",{id:"team-namespace"},"Team namespace"),(0,o.kt)("p",null,"For a team namespace do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If it does not exist, create the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform/teams/<team-name>")),(0,o.kt)("li",{parentName:"ol"},"If it does not exist, create the file ",(0,o.kt)("inlineCode",{parentName:"li"},"<team-name>.yml")," in the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform/teams/<team-name>")),(0,o.kt)("li",{parentName:"ol"},"In the yml file add the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"name: <team-name>\ngroup_id: <group-id>\nkubeflow:\n  - namespace: <jupyter-namespace>\n")),(0,o.kt)("h4",{id:"name"},"name"),(0,o.kt)("p",null,"Team name"),(0,o.kt)("h4",{id:"group-id"},"group-id"),(0,o.kt)("p",null,"You can locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"group-id")," if you go to",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/GroupsManagementMenuBlade/AllGroups"},"AAD groups"),"\nand search for your team."),(0,o.kt)("h4",{id:"kubeflownamespace"},"kubeflow[].namespace"),(0,o.kt)("p",null,"List of names of Jupyterhub/Airflow namespaces."),(0,o.kt)("h3",{id:"single-user-namespace"},"Single-user namespace"),(0,o.kt)("p",null,"For single-user namespaces do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create folder ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform/users/<navn>")),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"<name>.yml")," file in the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform/users/<name>")),(0,o.kt)("li",{parentName:"ol"},"In the yml file add the following content:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"email: <nav-email>\nkubeflow:\n  - namespace: <jupyter-namespace>\n")),(0,o.kt)("h4",{id:"nav-email"},"nav-email"),(0,o.kt)("p",null,"NAV email for user"),(0,o.kt)("h4",{id:"kubeflownamespace-1"},"kubeflow[].namespace"),(0,o.kt)("p",null,"List of names of Jupyterhub/Airflow namespaces."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After the pull request is approved and merged one must wait for 10-15 minutes before the changes in vault are synchronized."))),(0,o.kt)("h2",{id:"adding-and-administrating-secrets-is-vault"},"Adding and administrating secrets is vault"),(0,o.kt)("p",null,"After the pull request to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/navikt/vault-iac"},"navikt/vault-iac")," has been merged you can add and administrate\nyour secrets by logging into ",(0,o.kt)("a",{parentName:"p",href:"https://vault.adeo.no"},"vault")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"OIDC"),"."),(0,o.kt)("h2",{id:"import-the-secrets-in-jupyterhub-and-airflow"},"Import the secrets in Jupyterhub and Airflow"),(0,o.kt)("p",null,"If you have stored a secret called e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_PASSWORD")," in vault this can now be imported and set as an environment variable\nin Jupyterhub/Airflow as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom dataverk_vault import api as vault_api\n\nvault_api.set_secrets_as_envs()\n\nmy_secret = os.environ["DB_PASSWORD"]\n')),(0,o.kt)("h2",{id:"vault-integration-with-dataverk"},"Vault integration with dataverk"),(0,o.kt)("p",null,"For docs on how to use secrets in vault together with dataverk, see ",(0,o.kt)("a",{parentName:"p",href:"/nada/process-data/dataverk/settings/README"},"here"),"."))}c.isMDXComponent=!0}}]);