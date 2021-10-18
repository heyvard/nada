"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={title:"Cloud Composer"},s=void 0,l={unversionedId:"process-data/gcp/pipelines/cloud-composer",id:"process-data/gcp/pipelines/cloud-composer",isDocsHomePage:!1,title:"Cloud Composer",description:"Cloud Composer is a managed Apache Airflow service that helps you create, schedule,",source:"@site/docs/process-data/gcp/pipelines/cloud-composer.md",sourceDirName:"process-data/gcp/pipelines",slug:"/process-data/gcp/pipelines/cloud-composer",permalink:"/process-data/gcp/pipelines/cloud-composer",editUrl:"https://github.com/navikt/nada/edit/master/docs/process-data/gcp/pipelines/cloud-composer.md",tags:[],version:"current",frontMatter:{title:"Cloud Composer"},sidebar:"docs",previous:{title:"Notebooks",permalink:"/process-data/gcp/notebooks"},next:{title:"Cloud Function",permalink:"/process-data/gcp/pipelines/cloud-functions"}},p=[{value:"Create a new composer instance",id:"create-a-new-composer-instance",children:[]},{value:"Set up repository for DAGS",id:"set-up-repository-for-dags",children:[{value:"Lag service account",id:"lag-service-account",children:[]},{value:"Download service account key",id:"download-service-account-key",children:[]},{value:"Create repository",id:"create-repository",children:[]},{value:"Repository content",id:"repository-content",children:[]}]},{value:"Add DAGs",id:"add-dags",children:[]},{value:"Synchronize the requirements.txt in the repository with the cloud composer environment",id:"synchronize-the-requirementstxt-in-the-repository-with-the-cloud-composer-environment",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cloud Composer is a managed Apache Airflow service that helps you create, schedule,\nmonitor and manage workflows. Cloud Composer automation helps you create Airflow environments quickly and use\nAirflow-native tools, such as the powerful Airflow web interface and command line tools, so you can focus on your\nworkflows and not your infrastructure.")),(0,r.kt)("p",null,"You can find the official documentation for Cloud Composer at ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/composer/docs/concepts/overview"},"cloud.google.com"),"."),(0,r.kt)("h2",{id:"create-a-new-composer-instance"},"Create a new composer instance"),(0,r.kt)("p",null,"To create a new composer instance, go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/composer"},"Cloud Composer")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")),(0,r.kt)("p",null,"The following must be specified:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Location")," - the region where the instance is created (must choose Europa)"),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Creating a new Cloud Composer will automatically create a ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/introduction"},"bucket"),"\nfor the composer instance. Before advancing to the next step it is important to note the name of the bucket created.\nYou can find the bucket ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage"},"here")," by locating the bucket with ",(0,r.kt)("inlineCode",{parentName:"p"},"goog-composer-environment")," labels."))),(0,r.kt)("h2",{id:"set-up-repository-for-dags"},"Set up repository for DAGS"),(0,r.kt)("p",null,"In the bucket created in ",(0,r.kt)("a",{parentName:"p",href:"cloud-composer#create-a-new-composer-instance"},"Create a new composer instance")," there is a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"dags"),".\nThis folder contains the datapipeline descriptions (DAGs) which you can orchestrate with Cloud Composer.  "),(0,r.kt)("p",null,"In order to have revision control for these pipeline descriptions it is recommended to set up a synchronization with a github\nrepository. "),(0,r.kt)("h3",{id:"lag-service-account"},"Lag service account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"Google IAM"),"\nand press ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE SERVICE ACCOUNT")),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"Service account name")," og en ",(0,r.kt)("inlineCode",{parentName:"li"},"Service account description")),(0,r.kt)("li",{parentName:"ol"},"Give the service account the following access rights to the bucket created in ",(0,r.kt)("a",{parentName:"li",href:"cloud-composer#create-a-new-composer-instance"},"Opprett ny composer instans"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Storage Legacy Bucket Writer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Storage Object Admin"))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note the service account email created"))),(0,r.kt)("h3",{id:"download-service-account-key"},"Download service account key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"Google IAM")),(0,r.kt)("li",{parentName:"ol"},"Press the service account created in ",(0,r.kt)("a",{parentName:"li",href:"cloud-composer#lag-service-account"},"Lag service account")),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"KEYS")),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"ADD KEY")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Create new key")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")),(0,r.kt)("li",{parentName:"ol"},"Store the key locally")),(0,r.kt)("h3",{id:"create-repository"},"Create repository"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a github repository under the navikt organization"),(0,r.kt)("li",{parentName:"ol"},"Create the following two secrets:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")," set to GCS_CREDS and ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," to the content in the JSON key downloaded in ",(0,r.kt)("a",{parentName:"li",href:"cloud-composer#download-service-account-key"},"Download service account key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")," set to PROJECT_ID and ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," to the GCP project id (found ",(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/home/dashboard"},"here"),")")))),(0,r.kt)("h3",{id:"repository-content"},"Repository content"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"dags")," in the repository"),(0,r.kt)("li",{parentName:"ol"},"Create the file .github/workflows/sync-gcs-bucket.yaml with content as follows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"name: Sync-GCS-bucket\n\non:\n  push:\n    branches:\n      - main\n    paths:\n      - '.github/workflows/sync-gcs.yaml'\n      - 'dags/**'\n\njobs:\n  sync-gcs-bucket:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master\n      with:\n        service_account_key: ${{ secrets.GCS_CREDS }}\n        project_id: ${{ secrets.PROJECT_ID }}\n        export_default_credentials: true\n    - name: Sync dags to gcs bucket\n      run: gsutil cp -r dags gs://BUCKET\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Replace BUCKET in the workflow above with the name of the bucket created in",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"cloud-composer#create-a-new-composer-instance"},"Create a new composer instance")))),(0,r.kt)("p",null,"On push to main branch this workflow will upload the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dags")," folder in the repository to the gcs bucket\nwhich is synchronized with the Cloud Composer instance."),(0,r.kt)("h2",{id:"add-dags"},"Add DAGs"),(0,r.kt)("p",null,"You are now ready to start adding DAGs. Example dags can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/navikt/composer-dags"},"navikt/composer-dags")," "),(0,r.kt)("h2",{id:"synchronize-the-requirementstxt-in-the-repository-with-the-cloud-composer-environment"},"Synchronize the requirements.txt in the repository with the cloud composer environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"requirements.txt")," file in the repository"),(0,r.kt)("li",{parentName:"ol"},"Create the file ",(0,r.kt)("inlineCode",{parentName:"li"},".github/workflows/update-requirements.yaml")," with content as follows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"name: Update-composer-dependencies\n\non:\n  push:\n    branches:\n      - main\n    paths:\n      - 'requirements.txt'\n      - '.github/workflows/update-requirements.yaml'\n\njobs:\n  update-composer-requirements:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master\n      with:\n        service_account_key: ${{ secrets.GCS_CREDS }}\n        project_id: ${{ secrets.PROJECT_NAME }}\n        export_default_credentials: true\n    - name: Update requirements.txt\n      continue-on-error: true\n      run: |\n        gcloud composer environments update COMPOSER_INSTANCE --update-pypi-packages-from-file requirements.txt --location LOCATION --project ${GCLOUD_PROJECT}\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPOSER_INSTANCE")," with the name of your composer instance and ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCATION")," with\nname of the location where the composer runs. Both of these values can be found",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/composer/environments"},"here"),"."))}m.isMDXComponent=!0}}]);