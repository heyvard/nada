"use strict";(self.webpackChunknada=self.webpackChunknada||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,k=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Bruk av federated queries og automatiske sp\xf8rringer",d={unversionedId:"prosessere-data/scheduled-query",id:"prosessere-data/scheduled-query",isDocsHomePage:!1,title:"Bruk av federated queries og automatiske sp\xf8rringer",description:"Konseptuell fremstilling av federated queries med schedule",source:"@site/docs/prosessere-data/scheduled-query.md",sourceDirName:"prosessere-data",slug:"/prosessere-data/scheduled-query",permalink:"/prosessere-data/scheduled-query",editUrl:"https://github.com/navikt/nada/edit/master/docs/prosessere-data/scheduled-query.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Vault",permalink:"/prosessere-data/onprem/vault"},next:{title:"Dataprodukt",permalink:"/dele-data/data-products"}},u=[{value:"Lag en ny PostgreSQL bruker og gi den tilgang til databasen",id:"lag-en-ny-postgresql-bruker-og-gi-den-tilgang-til-databasen",children:[]},{value:"Sett opp external connection",id:"sett-opp-external-connection",children:[]},{value:"Opprett eget datasett for dataproduktet",id:"opprett-eget-datasett-for-dataproduktet",children:[]},{value:"Lag en Google serviceaccount for federated query",id:"lag-en-google-serviceaccount-for-federated-query",children:[]},{value:"Gi tilganger til serviceaccount p\xe5 dataset",id:"gi-tilganger-til-serviceaccount-p\xe5-dataset",children:[]},{value:"Sett opp sp\xf8rringen som henter data via external connection",id:"sett-opp-sp\xf8rringen-som-henter-data-via-external-connection",children:[]},{value:"Kj\xf8r sp\xf8rring p\xe5 tidsintervall",id:"kj\xf8r-sp\xf8rring-p\xe5-tidsintervall",children:[]}],p={toc:u};function c(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bruk-av-federated-queries-og-automatiske-sp\xf8rringer"},"Bruk av federated queries og automatiske sp\xf8rringer"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Konseptuell fremstilling av federated queries med schedule",src:n(6919).Z})),(0,o.kt)("h2",{id:"lag-en-ny-postgresql-bruker-og-gi-den-tilgang-til-databasen"},"Lag en ny PostgreSQL bruker og gi den tilgang til databasen"),(0,o.kt)("p",null,"F\xf8lg instruksjonene i ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nais.io/persistence/postgres/#personal-database-access"},"NAIS-dokumentasjonen")," for \xe5 koble til databasen\nN\xe5r du er inne i databasen, oppretter du og gir tilgang til databasebrukeren med kommandoene nedenfor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER <brukernavn> WITH ENCRYPTED PASSWORD '<passord>';\nGRANT CONNECT ON DATABASE <databasenavn> TO \"<brukernavn>\";\nGRANT USAGE ON SCHEMA public TO <brukernavn>;\n")),(0,o.kt)("p",null,"Videre kan du gi brukeren rettigheter til \xe5 lese alle tabeller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON ALL TABLES IN SCHEMA public TO <brukernavn>;\n")),(0,o.kt)("p",null,"eller utvalgte tabeller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON <tabellnavn> TO <brukernavn>;\n")),(0,o.kt)("h2",{id:"sett-opp-external-connection"},"Sett opp external connection"),(0,o.kt)("p",null,"F\xf8lg ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries#setting-up-cloud-sql-database-connections"},"Google sin guide")," til hvordan legge til en Cloud SQL databasekobling."),(0,o.kt)("h2",{id:"opprett-eget-datasett-for-dataproduktet"},"Opprett eget datasett for dataproduktet"),(0,o.kt)("p",null,"F\xf8lg ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/datasets"},"Google sin guide"),"\nForel\xf8pig kan vi ikke gjenbruke datasett som har blitt opprettet av en nais-applikasjon, da denne overstyrer tilgangene vi oppretter senere i denne guiden."),(0,o.kt)("h2",{id:"lag-en-google-serviceaccount-for-federated-query"},"Lag en Google serviceaccount for federated query"),(0,o.kt)("p",null,"F\xf8lg ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Google sin guide"),"\nGi serviceaccounten f\xf8lgende tilganger p\xe5 prosjektniv\xe5:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BigQuery Connection User"),(0,o.kt)("li",{parentName:"ul"},"BigQuery Job User"),(0,o.kt)("li",{parentName:"ul"},"BigQuery Metadata Viewer")),(0,o.kt)("h2",{id:"gi-tilganger-til-serviceaccount-p\xe5-dataset"},"Gi tilganger til serviceaccount p\xe5 dataset"),(0,o.kt)("p",null,"F\xf8lg ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/dataset-access-controls"},"Google sin guide"),'\nServiceaccounten trenger rollen "BigQuery Data Editor"'),(0,o.kt)("h2",{id:"sett-opp-sp\xf8rringen-som-henter-data-via-external-connection"},"Sett opp sp\xf8rringen som henter data via external connection"),(0,o.kt)("p",null,"Ved \xe5 f.eks. bruke ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"Google Cloud Console"),' kan vi lage en ny sp\xf8rring.\nVelg riktig prosjekt, g\xe5 inn p\xe5 BigQuery og klikk "Compose New Query" til h\xf8yre.'),(0,o.kt)("p",null,"Eksempelsp\xf8rring:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM EXTERNAL_QUERY(\n'europe-north1.<connection_name>',\n'''\n\n-- Lag en variabel for varsjonering \nWITH constants (version) as (\nvalues (now())\n)\n\n-- Legg inn rader fra Postgres-tabellen med et felt for version-variablen vi definerte over.\nSELECT id::text, name, \"group\", pii, created, last_modified, \"type\"::text, version\nFROM dataproducts,constants\n''');\n")),(0,o.kt)("h2",{id:"kj\xf8r-sp\xf8rring-p\xe5-tidsintervall"},"Kj\xf8r sp\xf8rring p\xe5 tidsintervall"),(0,o.kt)("p",null,'For \xe5 kj\xf8re sp\xf8rringen p\xe5 intervall, s\xe5 kan du i Query Explorer i Cloud Console velge \xe5 definere en "Schedule".'),(0,o.kt)("p",null,'Klikk "Schedule" og "Create new schedule"\n',(0,o.kt)("img",{alt:"Schedule knapp eksempel",src:n(3654).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"name: et passende navn \nrepeats: Det som passer produktet\ndataset name: datasettet som ble laget tidligere i guiden\ntable name: navn p\xe5 produkt-tabell\nadvanced options:\n- service account: service account som ble laget tidligere i guiden\n")))}c.isMDXComponent=!0},6919:function(e,t,n){t.Z=n.p+"assets/images/federated-query-b8b86c9be0bfb7b6051cc170291687d8.png"},3654:function(e,t,n){t.Z=n.p+"assets/images/scheduled-94782cfe9c2e2350ffb105b6b9cddba3.png"}}]);