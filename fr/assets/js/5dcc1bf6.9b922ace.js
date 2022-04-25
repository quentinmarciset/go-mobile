"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[332],{73166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"deployment-in-house-archive-and-export",title:"Archiver et exporter un projet"},p=void 0,u={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Archiver et exporter un projet",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/fr/docs/next/tutorials/deploying-in-house/deployment-in-house-archive-and-export",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"current",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archiver et exporter un projet"},sidebar:"tutorials",previous:{title:"Installation sur votre appareil iOS",permalink:"/go-mobile/fr/docs/next/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribuer une application interne",permalink:"/go-mobile/fr/docs/next/tutorials/deploying-in-house/deployment-in-house-distribute"}},s={},c=[{value:"\xc9TAPE 1. Configurer Xcode",id:"\xe9tape-1-configurer-xcode",level:2},{value:"\xc9TAPE 2. Obtenez votre Team ID",id:"\xe9tape-2-obtenez-votre-team-id",level:2},{value:"\xc9TAPE 3. Configurez 4D for iOS",id:"\xe9tape-3-configurez-4d-for-ios",level:2},{value:"\xc9TAPE 4. Ouvrez votre projet avec Xcode",id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode",level:2},{value:"STEP 5. Archivez votre projet \xe0 partir de Xcode",id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode",level:2},{value:"\xc9TAPE 6. Exportez votre projet",id:"\xe9tape-6-exportez-votre-projet",level:2},{value:"\xc9TAPE 7. S\xe9lectionnez votre m\xe9thode de distribution",id:"\xe9tape-7-s\xe9lectionnez-votre-m\xe9thode-de-distribution",level:2},{value:"\xc9TAPE 8. S\xe9lectionnez les options de distribution de votre entreprise",id:"\xe9tape-8-s\xe9lectionnez-les-options-de-distribution-de-votre-entreprise",level:2},{value:"Qu&#39;est-ce qu&#39;un manifest ?",id:"quest-ce-quun-manifest-",level:4},{value:"\xc9TAPE 9. Informations sur la distribution du manifest",id:"\xe9tape-9-informations-sur-la-distribution-du-manifest",level:2},{value:"\xc9TAPE 10. Re-signez votre application",id:"\xe9tape-10-re-signez-votre-application",level:2},{value:"\xc9TAPE 11. V\xe9rifiez le contenu de votre application .ipa",id:"\xe9tape-11-v\xe9rifiez-le-contenu-de-votre-application-ipa",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Archiver et exporter un projet 4D for iOS"),(0,a.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer des fichiers .ipa et des fichiers manifest"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")),(0,a.kt)("li",{parentName:"ul"},"Un serveur Web s\xe9curis\xe9"),(0,a.kt)("li",{parentName:"ul"},"Une ic\xf4ne de r\xe9solution 57 x 57 px"),(0,a.kt)("li",{parentName:"ul"},"Une ic\xf4ne de r\xe9solution 512 x 512 px"))),(0,a.kt)("h2",{id:"\xe9tape-1-configurer-xcode"},"\xc9TAPE 1. Configurer Xcode"),(0,a.kt)("p",null,"Une fois votre compte valid\xe9 par Apple, ouvrez Xcode et ajoutez votre compte Apple Enterprise Developer dans Preferences > Accounts."),(0,a.kt)("p",null,"Xcode installera automatiquement les certificats et les \xe9l\xe9ments de provisioning n\xe9cessaires."),(0,a.kt)("h2",{id:"\xe9tape-2-obtenez-votre-team-id"},"\xc9TAPE 2. Obtenez votre Team ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 votre compte de d\xe9veloppeur Apple. Vous trouverez votre Team ID dans Membership.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Obtenez votre Team ID",src:n(27888).Z,width:"768",height:"739"})),(0,a.kt)("h2",{id:"\xe9tape-3-configurez-4d-for-ios"},"\xc9TAPE 3. Configurez 4D for iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lancez 4D for iOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dans l\u2019onglet SECTIONS\xa0:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"G\xe9n\xe9ral\xa0: Saisissez votre Team ID."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Enterprise-Team-ID",src:n(40185).Z,width:"1082",height:"1009"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Publication : Entrez votre URL de production (HTTP est obligatoire pour le d\xe9ploiement).")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dans l\u2019onglet G\xc9N\xc9RATION :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cr\xe9er & ex\xe9cuter\xa0: Cr\xe9ez votre projet.")))),(0,a.kt)("h2",{id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode"},"\xc9TAPE 4. Ouvrez votre projet avec Xcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc0 partir de l\u2019onglet G\xc9N\xc9RATION de l'\xe9diteur de projet, cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Projet > Ouvrir le produit avec Xcode"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pen your project with Xcode ",src:n(84932).Z,width:"1033",height:"994"})),(0,a.kt)("h2",{id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode"},"STEP 5. Archivez votre projet \xe0 partir de Xcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc0 partir de Xcode, acc\xe9dez au Menu du simulateur et s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generic iOS Device",src:n(22623).Z,width:"318",height:"558"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Puis, dans le menu, cliquez sur Product et s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"li"},"Archive"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archive your Project",src:n(7287).Z,width:"225",height:"337"})),(0,a.kt)("h2",{id:"\xe9tape-6-exportez-votre-projet"},"\xc9TAPE 6. Exportez votre projet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\xc0 la fin de l\u2019archivage, la fen\xeatre de l\u2019organisateur appara\xeet avec l\u2019archive que vous venez de cr\xe9er")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Export"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Exportez votre projet",src:n(650).Z,width:"1228",height:"667"})),(0,a.kt)("h2",{id:"\xe9tape-7-s\xe9lectionnez-votre-m\xe9thode-de-distribution"},"\xc9TAPE 7. S\xe9lectionnez votre m\xe9thode de distribution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,a.kt)("strong",{parentName:"li"},"Enterprise")," et cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Distribution Method",src:n(84085).Z,width:"737",height:"454"})),(0,a.kt)("h2",{id:"\xe9tape-8-s\xe9lectionnez-les-options-de-distribution-de-votre-entreprise"},"\xc9TAPE 8. S\xe9lectionnez les options de distribution de votre entreprise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous pouvez laisser toutes les options coch\xe9es.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enterprise distribution options",src:n(92115).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez laisser Xcode vous g\xe9n\xe9rer un fichier manifest.plist ou bien le g\xe9n\xe9rer manuellement.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."))),(0,a.kt)("h4",{id:"quest-ce-quun-manifest-"},"Qu'est-ce qu'un manifest ?"),(0,a.kt)("p",null,"Le manifest est une liste de propri\xe9t\xe9s fond\xe9e sur XML et doit contenir :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL")," : un URL vers le fichier .ipa."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"display-image")," : un URL vers une ic\xf4ne PNG 57 x 57 px (72 x 72 px pour iPad) qui sera utilis\xe9e lors du t\xe9l\xe9chargement et de l'installation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full-size-image")," : un URL vers une image PNG 512 x 512 px repr\xe9sentant l'application iTunes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bundle-identifier")," : La cha\xeene d'identification de votre application. Vous pouvez l'obtenir \xe0 partir du fichier .plist de votre application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bundle-version")," : La chaine de la version courante du bundle de votre application. Vous pouvez l'obtenir \xe0 partir du fichier .plist de votre application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," : Le nom de votre application.")),(0,a.kt)("p",null,"Voici un exemple de fichier manifest.plist :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,a.kt)("h2",{id:"\xe9tape-9-informations-sur-la-distribution-du-manifest"},"\xc9TAPE 9. Informations sur la distribution du manifest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nous vous recommandons de laisser \xe0 Xcode le soin d'entrer l'URL de votre application et les URL des ic\xf4nes. Bien entendu, vous aurez la possibilit\xe9 de changer les URL plus tard.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Informations sur la distribution du manifest",src:n(38633).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("h2",{id:"\xe9tape-10-re-signez-votre-application"},"\xc9TAPE 10. Re-signez votre application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Laissez \xe0 Xcode le soin de g\xe9rer l'option ",(0,a.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Re-signez votre application",src:n(11932).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("h2",{id:"\xe9tape-11-v\xe9rifiez-le-contenu-de-votre-application-ipa"},"\xc9TAPE 11. V\xe9rifiez le contenu de votre application .ipa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous pouvez v\xe9rifier ici l'exactitude de l'identifiant de votre application et de votre Team ID.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"V\xe9rifiez le contenu de votre application .ipa",src:n(87830).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Export")," et s\xe9lectionnez l\u2019emplacement dans lequel vous souhaitez enregistrer le dossier de votre application sur votre ordinateur.")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(v,o(o({ref:t},s),{},{components:n})):i.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7287:function(e,t,n){t.Z=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},22623:function(e,t,n){t.Z=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},84085:function(e,t,n){t.Z=n.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},38633:function(e,t,n){t.Z=n.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},40185:function(e,t,n){t.Z=n.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},92115:function(e,t,n){t.Z=n.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},84932:function(e,t,n){t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},650:function(e,t,n){t.Z=n.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},11932:function(e,t,n){t.Z=n.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},87830:function(e,t,n){t.Z=n.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},27888:function(e,t,n){t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);