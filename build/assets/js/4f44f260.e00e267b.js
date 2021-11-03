"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[910],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,c=d["".concat(o,".").concat(m)]||d[m]||k[m]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={title:"Settingsfil"},o=void 0,p={unversionedId:"prosessere-data/onprem/dataverk/settings/README",id:"prosessere-data/onprem/dataverk/settings/README",isDocsHomePage:!1,title:"Settingsfil",description:"Dataverk krever en settings.json fil hvor man angir konfigurerbare innstillinger som vil variere fra",source:"@site/docs/prosessere-data/onprem/dataverk/settings/README.md",sourceDirName:"prosessere-data/onprem/dataverk/settings",slug:"/prosessere-data/onprem/dataverk/settings/README",permalink:"/prosessere-data/onprem/dataverk/settings/README",editUrl:"https://github.com/navikt/nada/edit/master/docs/prosessere-data/onprem/dataverk/settings/README.md",tags:[],version:"current",frontMatter:{title:"Settingsfil"},sidebar:"docs",previous:{title:"Publish data packages from GCP projects",permalink:"/prosessere-data/onprem/dataverk/publisering-fra-gcp"},next:{title:"Postgres",permalink:"/prosessere-data/onprem/dataverk/settings/postgres"}},u=[{value:"Eksempler",id:"eksempler",children:[{value:"Med vault",id:"med-vault",children:[]},{value:"Uten vault",id:"uten-vault",children:[]}]},{value:"Fullstendig eksempel",id:"fullstendig-eksempel",children:[]},{value:"Referanser til settings fil i kode",id:"referanser-til-settings-fil-i-kode",children:[{value:"Les fra databaser",id:"les-fra-databaser",children:[]}]},{value:"Feltdefinisjoner",id:"feltdefinisjoner",children:[]}],k={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dataverk krever en settings.json fil hvor man angir konfigurerbare innstillinger som vil variere fra\nbruker til bruker. I denne filen kan man spesifisere kildene man \xf8nsker \xe5 lese data fra,\nog datalageret samt elastic search indeksen man \xf8nsker \xe5 publisere datapakker til."),(0,i.kt)("h2",{id:"eksempler"},"Eksempler"),(0,i.kt)("h3",{id:"med-vault"},"Med vault"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "db_connection_strings": {\n    "oracle_database": "${ORACLE_CONNECTION_STRING}",\n    "postgres_database": "${POSTGRES_CONNECTION_STRING}"\n  }\n}\n')),(0,i.kt)("p",null,"Eksemplet over tar utgangspunkt i at man jobber ",(0,i.kt)("strong",{parentName:"p"},"fra en jupyter notebook server p\xe5 nais plattformen\nmed vault integrasjon satt opp for kubernetes namespacet"),"."),(0,i.kt)("p",null,"For \xe5 bruke settingsfilen over m\xe5 f\xf8lgende hemmeligheter v\xe6re lagt inn som key/value par i vault:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ORACLE_CONNECTION_STRING: "oracle://user:pass@host:port/db"\nPOSTGRES_CONNECTION_STRING: "postgres://user:pass@host:port/db"\n')),(0,i.kt)("p",null,"Verdiene til hemmelighetene vil da ",(0,i.kt)("strong",{parentName:"p"},"bli hentet og erstatte placeholderverdiene"),' n\xe5r dataverk\nparser settings.json filen. F.eks. vil ${ELASTIC_HOST} bli erstattet med\n"',(0,i.kt)("a",{parentName:"p",href:"https://min-elastic-search-host.no%22"},'https://min-elastic-search-host.no"')," i settings objektet."),(0,i.kt)("h3",{id:"uten-vault"},"Uten vault"),(0,i.kt)("p",null,"Dersom man bruker dataverk utenfor et jupyter notebook milj\xf8 p\xe5 nais og ikke har satt\nopp vault integrasjonen selv m\xe5 hemmeligheter legges inn i settings.json filen direkte, dvs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "db_connection_strings": {\n    "oracle_database": "oracle://user:pass@host:port/db",\n    "postgres_database": "postgres://user:pass@host:port/db"\n  }\n}\n')),(0,i.kt)("h2",{id:"fullstendig-eksempel"},"Fullstendig eksempel"),(0,i.kt)("p",null,"Under f\xf8lger et eksempel med alle de mulige konfigurasjonene man per n\xe5 kan spesifisere i settings.json."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "db_connection_strings": {\n    "oracle_database": "${ORACLE_CONNECTION_STRING}",\n    "postgres_database": "${POSTGRES_CONNECTION_STRING}"\n  },\n  \n  "bucket_storage": {\n    "gcs": {\n      "credentials": "${GOOGLE_APPLICATION_CREDENTIALS}"\n    }\n  },\n  \n  "kafka": {\n    "brokers": ["${KAFKA_BROKER1}",\n                "${KAFKA_BROKER2}",\n                "${KAFKA_BROKER3}"],\n    "group_id": "my_group",\n    "security_protocol": "SASL_SSL",\n    "sasl_mechanism": "PLAIN",\n    "sasl_plain_username": "${SASL_USERNAME}",\n    "sasl_plain_password": "${SASL_PASSWORD}",\n    "schema_registry": "${SCHEMA_REGISTRY_ADDRESS}",\n    "ssl_cafile": "${CA_FILE_PATH}"\n  }\n}\n')),(0,i.kt)("h2",{id:"referanser-til-settings-fil-i-kode"},"Referanser til settings fil i kode"),(0,i.kt)("h3",{id:"les-fra-databaser"},"Les fra databaser"),(0,i.kt)("p",null,"Databasetilkoblingene som spesifiseres i settings.json m\xe5 eksplisitt refereres til i koden n\xe5r de\nskal benyttes."),(0,i.kt)("p",null,"settings.json:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "db_connection_strings": {\n    "oracle_database": "${ORACLE_CONNECTION_STRING}"\n  }\n}\n')),(0,i.kt)("p",null,"kode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dataverk import Client\ndv = Client()\n\ndf = dv.read_sql("oracle_database", "SELECT * FROM some.table")\n')),(0,i.kt)("h4",{id:"postgres"},"Postgres"),(0,i.kt)("p",null,"Se ",(0,i.kt)("a",{parentName:"p",href:"/prosessere-data/onprem/dataverk/settings/postgres"},"her")," for oppskrift p\xe5 hvordan man kan konfigurere postgres\ntilkoblinger fra kubeflow."),(0,i.kt)("h2",{id:"feltdefinisjoner"},"Feltdefinisjoner"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"index_connections"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Konfigurasjon for elastic search index"),(0,i.kt)("li",{parentName:"ul"},"felter:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"elastic_host:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Hostadresse til elastic search"))),(0,i.kt)("li",{parentName:"ul"},"index:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Navn p\xe5 elastic search index"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"db_connection_strings"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Valgfritt antall connection strings for databasetilkoblinger"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bucket_storage"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Innstillinger for bucket storage kilder"),(0,i.kt)("li",{parentName:"ul"},"felter:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"gcs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Tilkoblingsinnstillinger for google cloud storage"),(0,i.kt)("li",{parentName:"ul"},"felter:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"credentials:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string/dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Google client credential objekt. Kan angis som enten en sti til\nen .json fil, som en json-streng eller som en python dict."))))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"kafka"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: Dict"),(0,i.kt)("li",{parentName:"ul"},"definisjon: "),(0,i.kt)("li",{parentName:"ul"},"felter:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"brokers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: list"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Liste over kafka brokers"))),(0,i.kt)("li",{parentName:"ul"},"group_id",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Kafka consumer group id"))),(0,i.kt)("li",{parentName:"ul"},"security_protocol:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Sikkerhetsprotokoll"))),(0,i.kt)("li",{parentName:"ul"},"sasl_mechanism:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Autentiseringsmekanisme for kafka"))),(0,i.kt)("li",{parentName:"ul"},"sasl_plain_username: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Brukernavn for autentisering"))),(0,i.kt)("li",{parentName:"ul"},"sasl_plain_password:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Passord for autentisering   "))),(0,i.kt)("li",{parentName:"ul"},"schema_registry:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Adresse til skjemaregister "))),(0,i.kt)("li",{parentName:"ul"},"ssl_cafile:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"datatype: string"),(0,i.kt)("li",{parentName:"ul"},"definisjon: Sti til ca-bundle i containermilj\xf8")))))))))}d.isMDXComponent=!0}}]);