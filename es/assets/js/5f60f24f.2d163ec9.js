(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2157],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={id:"deployment-in-house-archive-and-export",title:"Archivar y exportar un proyecto"},c=void 0,s={unversionedId:"deployment/deployment-in-house-archive-and-export",id:"version-19-R2/deployment/deployment-in-house-archive-and-export",isDocsHomePage:!1,title:"Archivar y exportar un proyecto",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R2/deployment/deployment-in-house-archive-and-export.md",sourceDirName:"deployment",slug:"/deployment/deployment-in-house-archive-and-export",permalink:"/go-mobile/es/docs/deployment/deployment-in-house-archive-and-export",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/deployment-in-house-archive-and-export.md",version:"19-R2",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archivar y exportar un proyecto"},sidebar:"version-19-R2/docs",previous:{title:"Instalar en su dispositivo iOS",permalink:"/go-mobile/es/docs/deployment/testing-on-your-device"},next:{title:"Distribuir una aplicaci\xf3n interna",permalink:"/go-mobile/es/docs/deployment/deployment-in-house-distribute"}},p=[{value:"PASO 1. Configuraci\xf3n Xcode",id:"paso-1-configuraci\xf3n-xcode",children:[]},{value:"PASO 2. Obtenga su Team ID",id:"paso-2-obtenga-su-team-id",children:[]},{value:"PASO 3. Configure 4D for iOS",id:"paso-3-configure-4d-for-ios",children:[]},{value:"PASO 4. Abra su proyecto con Xcode",id:"paso-4-abra-su-proyecto-con-xcode",children:[]},{value:"PASO 5. Archive su proyecto desde Xcode",id:"paso-5-archive-su-proyecto-desde-xcode",children:[]},{value:"PASO 6. Exporte su proyecto",id:"paso-6-exporte-su-proyecto",children:[]},{value:"PASO 7. Seleccione su m\xe9todo de distribuci\xf3n",id:"paso-7-seleccione-su-m\xe9todo-de-distribuci\xf3n",children:[]},{value:"PASO 8. Seleccione las opciones de distribuci\xf3n de su empresa",id:"paso-8-seleccione-las-opciones-de-distribuci\xf3n-de-su-empresa",children:[]},{value:"PASO 9. Informaci\xf3n del manifiesto de distribuci\xf3n",id:"paso-9-informaci\xf3n-del-manifiesto-de-distribuci\xf3n",children:[]},{value:"PASO 10. Vuelva a firmar su aplicaci\xf3n",id:"paso-10-vuelva-a-firmar-su-aplicaci\xf3n",children:[]},{value:"PASO 11. Verifique el contenido de su aplicaci\xf3n .ipa",id:"paso-11-verifique-el-contenido-de-su-aplicaci\xf3n-ipa",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Archivar y exportar su proyecto 4D for iOS"),(0,r.kt)("li",{parentName:"ul"},"Generar archivos .ipa y manifest"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Programa Apple Enterprise Developer")),(0,r.kt)("li",{parentName:"ul"},"Un servidor Web seguro"),(0,r.kt)("li",{parentName:"ul"},"Un icono de resoluci\xf3n 57 x 57 px"),(0,r.kt)("li",{parentName:"ul"},"Un icono de resoluci\xf3n 512 x 512 px"))),(0,r.kt)("h2",{id:"paso-1-configuraci\xf3n-xcode"},"PASO 1. Configuraci\xf3n Xcode"),(0,r.kt)("p",null,"Tras la validaci\xf3n de su cuenta por parte de Apple, abra Xcode y a\xf1ada su cuenta de Apple Enterprise Developer en Preferences > Accounts."),(0,r.kt)("p",null,"Xcode instalar\xe1 autom\xe1ticamente los elementos de provisi\xf3n y certificados necesarios."),(0,r.kt)("h2",{id:"paso-2-obtenga-su-team-id"},"PASO 2. Obtenga su Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inicie sesi\xf3n en su cuenta de desarrollador Apple. Encuentre su ITeam ID en Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Obtenga su Team ID",src:n(1127).Z})),(0,r.kt)("h2",{id:"paso-3-configure-4d-for-ios"},"PASO 3. Configure 4D for iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lance 4D for iOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"En la pesta\xf1a SECTIONS:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"General: introduzca su Team ID."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Enterprise-Team-ID",src:n(38773).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publicaci\xf3n: ingrese su URL de producci\xf3n (HTTPS es obligatorio para el despliegue).")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"En la pesta\xf1a BUILD:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Crear y ejecutar: cree su proyecto.")))),(0,r.kt)("h2",{id:"paso-4-abra-su-proyecto-con-xcode"},"PASO 4. Abra su proyecto con Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a BUILD del editor de proyectos de 4D for iOS, haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Project > Abrir el proyecto con Xcode"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pen your project with Xcode ",src:n(90304).Z})),(0,r.kt)("h2",{id:"paso-5-archive-su-proyecto-desde-xcode"},"PASO 5. Archive su proyecto desde Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desde Xcode, vaya al men\xfa del simulador y seleccione ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:n(23440).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Luego desde el men\xfa, haga clic en Product y seleccione ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive your Project",src:n(84466).Z})),(0,r.kt)("h2",{id:"paso-6-exporte-su-proyecto"},"PASO 6. Exporte su proyecto"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Haga clic en ",(0,r.kt)("strong",{parentName:"p"},"Export"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exporte su proyecto",src:n(98822).Z})),(0,r.kt)("h2",{id:"paso-7-seleccione-su-m\xe9todo-de-distribuci\xf3n"},"PASO 7. Seleccione su m\xe9todo de distribuci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seleccione ",(0,r.kt)("strong",{parentName:"li"},"Enterprise")," y haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Distribution Method",src:n(34774).Z})),(0,r.kt)("h2",{id:"paso-8-seleccione-las-opciones-de-distribuci\xf3n-de-su-empresa"},"PASO 8. Seleccione las opciones de distribuci\xf3n de su empresa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Puede dejar todas las casillas de selecci\xf3n marcadas.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enterprise distribution options",src:n(4415).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puede elegir dejar que Xcode genere un archivo manifest.plist por usted o generarlo manualmente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Haga clic en ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."))),(0,r.kt)("h4",{id:"\xbfqu\xe9-es-un-manifiesto"},"\xbfQu\xe9 es un manifiesto?"),(0,r.kt)("p",null,"El manifiesto es una lista de propiedades basada en XML y debe contener:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": URL que apunta al archivo .ipa."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"display-image"),": URL que apunta a un icono PNG de 57 x 57 px (72 x 72 px para iPad) utilizado durante la descarga y la instalaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"full-size-image"),": URL que apunta a una imagen PNG de 512 x 512 px que representa la aplicaci\xf3n iTunes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-identifier"),": la cadena de identificaci\xf3n de su aplicaci\xf3n. Puedes obtenerlo desde el archivo .plist de su aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-version"),": la cadena de la versi\xf3n actual del paquete de su aplicaci\xf3n. Puedes obtenerlo desde el archivo .plist de su aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title"),": el nombre de su aplicaci\xf3n.")),(0,r.kt)("p",null,"Aqu\xed hay un ejemplo de archivo manifest.plist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,r.kt)("h2",{id:"paso-9-informaci\xf3n-del-manifiesto-de-distribuci\xf3n"},"PASO 9. Informaci\xf3n del manifiesto de distribuci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recomendamos dejar que Xcode haga el trabajo de ingresar la URL de su aplicaci\xf3n, as\xed como tambi\xe9n los URL de los iconos. Por supuesto, tendr\xe1 la opci\xf3n de cambiar los URL m\xe1s adelante.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Informaci\xf3n del manifiesto de distribuci\xf3n",src:n(49530).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"paso-10-vuelva-a-firmar-su-aplicaci\xf3n"},"PASO 10. Vuelva a firmar su aplicaci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deje que Xcode administre la opci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vuelva a firmar su aplicaci\xf3n",src:n(89160).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"paso-11-verifique-el-contenido-de-su-aplicaci\xf3n-ipa"},"PASO 11. Verifique el contenido de su aplicaci\xf3n .ipa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aqu\xed puede verificar que su identificador de aplicaci\xf3n sea correcto, as\xed como tambi\xe9n su Team ID.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Verifique el contenido de su aplicaci\xf3n .ipa",src:n(40555).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Export")," y seleccione d\xf3nde guardar la carpeta de su aplicaci\xf3n en su computador.")))}d.isMDXComponent=!0},84466:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},23440:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},34774:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},49530:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},38773:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},4415:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},90304:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},98822:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},89160:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},40555:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},1127:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);