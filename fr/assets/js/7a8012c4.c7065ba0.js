"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[162],{59285:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"deploy-on-app-store-archive-and-upload",title:"Archiver et t\xe9l\xe9charger un projet"},p=void 0,u={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",id:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",title:"Archiver et t\xe9l\xe9charger un projet",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/fr/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",tags:[],version:"current",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Archiver et t\xe9l\xe9charger un projet"},sidebar:"tutorials",previous:{title:"Cr\xe9er une fiche sur App Store",permalink:"/go-mobile/fr/docs/next/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},s={},c=[{value:"\xc9TAPE 1. Configurer Xcode",id:"\xe9tape-1-configurer-xcode",level:2},{value:"\xc9TAPE 2. Obtenez votre Team ID",id:"\xe9tape-2-obtenez-votre-team-id",level:2},{value:"\xc9TAPE 3. Configurez 4D for iOS",id:"\xe9tape-3-configurez-4d-for-ios",level:2},{value:"\xc9TAPE 4. Ouvrez votre projet avec Xcode",id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode",level:2},{value:"STEP 5. Archivez votre projet \xe0 partir de Xcode",id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode",level:2},{value:"\xc9TAPE 6. Validez votre projet",id:"\xe9tape-6-validez-votre-projet",level:2},{value:"\xc9TAPE 7. T\xe9l\xe9chargez sur l\u2019App Store",id:"\xe9tape-7-t\xe9l\xe9chargez-sur-lapp-store",level:2},{value:"\xc9TAPE 8. S\xe9lectionnez la version destin\xe9e \xe0 l\u2019App Store",id:"\xe9tape-8-s\xe9lectionnez-la-version-destin\xe9e-\xe0-lapp-store",level:2},{value:"\xc9TAPE 9. Envoyez pour r\xe9vision",id:"\xe9tape-9-envoyez-pour-r\xe9vision",level:2}],d={toc:c};function v(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,o.kt)("p",{parentName:"blockquote"},"Archiver et publier votre projet sur l'App Store Connect.")),(0,o.kt)("h2",{id:"\xe9tape-1-configurer-xcode"},"\xc9TAPE 1. Configurer Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si vous avez choisi un compte Apple Developer, celui-ci est imm\xe9diatement disponible."),(0,o.kt)("li",{parentName:"ul"},"Si vous avez choisi un compte de d\xe9veloppeur Apple en tant qu\u2019entreprise, vous devez attendre la validation d\u2019Apple."),(0,o.kt)("li",{parentName:"ul"},"Lorsque votre compte est accessible, ajoutez-le \xe0 Xcode dans Preferences > Accounts."),(0,o.kt)("li",{parentName:"ul"},"Xcode installera automatiquement les certificats et les \xe9l\xe9ments de provisioning n\xe9cessaires.")),(0,o.kt)("h2",{id:"\xe9tape-2-obtenez-votre-team-id"},"\xc9TAPE 2. Obtenez votre Team ID"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 votre compte de d\xe9veloppeur Apple. Vous trouverez votre Team ID dans Membership.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Obtenez votre Team ID",src:r(37639).Z,width:"768",height:"739"})),(0,o.kt)("h2",{id:"\xe9tape-3-configurez-4d-for-ios"},"\xc9TAPE 3. Configurez 4D for iOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lancez 4D for iOS"),(0,o.kt)("li",{parentName:"ul"},"Dans l\u2019onglet SECTIONS\xa0:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"G\xe9n\xe9ral\xa0: Entrez votre Team ID")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team ID",src:r(21718).Z,width:"1082",height:"1009"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Publication\xa0: Entrez votre URL de production")),(0,o.kt)("p",null,"(HTTPS est obligatoire pour le d\xe9ploiement)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing",src:r(8772).Z,width:"1082",height:"1009"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dans l\u2019onglet G\xc9N\xc9RATION :")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cr\xe9er & ex\xe9cuter\xa0: Cr\xe9ez votre projet")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BuildTab",src:r(66786).Z,width:"1215",height:"1009"})),(0,o.kt)("h2",{id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode"},"\xc9TAPE 4. Ouvrez votre projet avec Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xc0 partir de l\u2019onglet G\xc9N\xc9RATION de l'\xe9diteur de projet, cliquez sur Projet > Ouvrir le produit avec Xcode")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ouvrez votre projet avec Xcode",src:r(64948).Z,width:"1033",height:"994"})),(0,o.kt)("h2",{id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode"},"STEP 5. Archivez votre projet \xe0 partir de Xcode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xc0 partir de Xcode, acc\xe9dez au Menu du simulateur et s\xe9lectionnez ",(0,o.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generic iOS Device",src:r(11362).Z,width:"318",height:"558"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puis, dans le menu, cliquez sur Product et s\xe9lectionnez ",(0,o.kt)("strong",{parentName:"li"},"Archive"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Archivez votre projet \xe0 partir de Xcode",src:r(37854).Z,width:"225",height:"337"})),(0,o.kt)("h2",{id:"\xe9tape-6-validez-votre-projet"},"\xc9TAPE 6. Validez votre projet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\xc0 la fin de l\u2019archivage, la fen\xeatre de l\u2019organisateur appara\xeet avec l\u2019archive que vous venez de cr\xe9er.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"p"},"Validate")," pour d\xe9marrer le processus de validation."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Validez votre projet",src:r(51583).Z,width:"1112",height:"729"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La premi\xe8re \xe9tape consiste \xe0 s\xe9lectionner les options de distribution de l'App Store.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Store distribution options",src:r(77547).Z,width:"768",height:"485"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensuite, vous devez signer \xe0 nouveau votre application. Laissez Xcode g\xe9rer cela en cochant l'option ",(0,o.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Re-sign your app",src:r(15256).Z,width:"768",height:"485"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe9rifiez le contenu de votre application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App review",src:r(75884).Z,width:"768",height:"485"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Si le processus de validation est r\xe9ussi, le message suivant s'affiche :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Validation",src:r(5427).Z,width:"768",height:"485"})),(0,o.kt)("p",null,"Si une erreur se produit, un message s\u2019affichera. Ces erreurs doivent \xeatre corrig\xe9es avant de recommencer le processus de validation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,o.kt)("strong",{parentName:"li"},"Done"),". Cela vous renverra \xe0 la fen\xeatre de l\u2019organisateur.")),(0,o.kt)("h2",{id:"\xe9tape-7-t\xe9l\xe9chargez-sur-lapp-store"},"\xc9TAPE 7. T\xe9l\xe9chargez sur l\u2019App Store"),(0,o.kt)("p",null,"Une fois la validation termin\xe9e, vous \xeates pr\xeat \xe0 ajouter votre application sur l\u2019App Store."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"li"},"Upload to App Store"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"T\xe9l\xe9chargez sur l\u2019App Store",src:r(58915).Z,width:"1112",height:"729"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lorsque votre projet a \xe9t\xe9 t\xe9l\xe9charg\xe9 avec succ\xe8s, vous verrez cette fen\xeatre\xa0s'afficher :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upload successful",src:r(65541).Z,width:"768",height:"485"})),(0,o.kt)("h2",{id:"\xe9tape-8-s\xe9lectionnez-la-version-destin\xe9e-\xe0-lapp-store"},"\xc9TAPE 8. S\xe9lectionnez la version destin\xe9e \xe0 l\u2019App Store"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Depuis l\u2019App Store Connect > App Store > iOS App, s\xe9lectionnez votre application et cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"li"},'"+"')," qui appara\xeet dans la section Build")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add build",src:r(29751).Z,width:"1101",height:"1162"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez la version que vous souhaitez envoyer et cliquez sur ",(0,o.kt)("strong",{parentName:"li"},"Done"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build selection",src:r(41619).Z,width:"1101",height:"1162"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enfin, cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"li"},"Submit for Review"),".")),(0,o.kt)("h2",{id:"\xe9tape-9-envoyez-pour-r\xe9vision"},"\xc9TAPE 9. Envoyez pour r\xe9vision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La derni\xe8re \xe9tape consiste \xe0 r\xe9pondre \xe0 quelques questions \xe0 propos de votre application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Envoyez pour r\xe9vision",src:r(43042).Z,width:"1160",height:"1101"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Une fois l'\xe9tape des r\xe9ponses aux questions termin\xe9e, cliquez sur ",(0,o.kt)("strong",{parentName:"p"},"Submit"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"En moyenne, la dur\xe9e de r\xe9vision d'App Store est de deux jours !"))))}v.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),v=a,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29751:function(e,t,r){t.Z=r.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},77547:function(e,t,r){t.Z=r.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},5427:function(e,t,r){t.Z=r.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},37854:function(e,t,r){t.Z=r.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},66786:function(e,t,r){t.Z=r.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},11362:function(e,t,r){t.Z=r.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},43042:function(e,t,r){t.Z=r.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},64948:function(e,t,r){t.Z=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},51583:function(e,t,r){t.Z=r.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},8772:function(e,t,r){t.Z=r.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},15256:function(e,t,r){t.Z=r.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},75884:function(e,t,r){t.Z=r.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},41619:function(e,t,r){t.Z=r.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},37639:function(e,t,r){t.Z=r.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},21718:function(e,t,r){t.Z=r.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},58915:function(e,t,r){t.Z=r.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},65541:function(e,t,r){t.Z=r.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);