"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9954],{72914:function(e,a,n){n.r(a),n.d(a,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var i=n(83117),t=n(80102),r=(n(67294),n(3905)),o=["components"],p={id:"deploy-on-app-store-create-appstore-record",title:"Crear una ficha en App Store"},l=void 0,c={unversionedId:"deployment/deploy-on-app-store-create-appstore-record",id:"version-19-R3/deployment/deploy-on-app-store-create-appstore-record",title:"Crear una ficha en App Store",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/deployment/deploy-on-app-store-create-appstore-record.md",sourceDirName:"deployment",slug:"/deployment/deploy-on-app-store-create-appstore-record",permalink:"/go-mobile/es/docs/19-R3/deployment/deploy-on-app-store-create-appstore-record",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/deployment/deploy-on-app-store-create-appstore-record.md",tags:[],version:"19-R3",frontMatter:{id:"deploy-on-app-store-create-appstore-record",title:"Crear una ficha en App Store"},sidebar:"version-19-R3/docs",previous:{title:"Distribuir una aplicaci\xf3n interna",permalink:"/go-mobile/es/docs/19-R3/deployment/deployment-in-house-distribute"},next:{title:"Archivar y descargar un proyecto",permalink:"/go-mobile/es/docs/19-R3/deployment/deploy-on-app-store-archive-and-upload"}},s={},u=[{value:"PASO 1. Crear una identificaci\xf3n de aplicaci\xf3n",id:"paso-1-crear-una-identificaci\xf3n-de-aplicaci\xf3n",level:2},{value:"\xbfQu\xe9 es un identificador de aplicaci\xf3n?",id:"qu\xe9-es-un-identificador-de-aplicaci\xf3n",level:4},{value:"PASO 2. Inicie sesi\xf3n en la App Store Connect",id:"paso-2-inicie-sesi\xf3n-en-la-app-store-connect",level:2},{value:"PASO 3. Cree una nueva aplicaci\xf3n iOS",id:"paso-3-cree-una-nueva-aplicaci\xf3n-ios",level:2},{value:"PASO 4. Informaci\xf3n sobre la aplicaci\xf3n",id:"paso-4-informaci\xf3n-sobre-la-aplicaci\xf3n",level:2},{value:"PASO 5. Precios y disponibilidad",id:"paso-5-precios-y-disponibilidad",level:2},{value:"PASO 6. Preparaci\xf3n para la inscripci\xf3n",id:"paso-6-preparaci\xf3n-para-la-inscripci\xf3n",level:2}],d={toc:u};function m(e){var a=e.components,p=(0,t.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Crear un identificador de aplicaci\xf3n en su cuenta desarrollador"),(0,r.kt)("li",{parentName:"ul"},"Crear su aplicaci\xf3n en el App Store Connect"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para empresas")," o"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"Apple Developer Program para particulares")))),(0,r.kt)("h2",{id:"paso-1-crear-una-identificaci\xf3n-de-aplicaci\xf3n"},"PASO 1. Crear una identificaci\xf3n de aplicaci\xf3n"),(0,r.kt)("h4",{id:"qu\xe9-es-un-identificador-de-aplicaci\xf3n"},"\xbfQu\xe9 es un identificador de aplicaci\xf3n?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Un identificador de aplicaci\xf3n es una cadena compuesta de dos partes que se utiliza para identificar una o m\xe1s aplicaciones de un solo equipo de desarrollo. La cadena consta de un Team ID y de un Bundle ID, con un punto (.) que separa las dos partes (por ejemplo, TeamID. BundleID).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTA")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Si ha elegido una cuenta de desarrollador Apple individual, su cuenta estar\xe1 disponible de inmediato y puede crear su identificador de aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Si ha elegido una cuenta de desarrollador Apple como organizaci\xf3n, debe esperar la validaci\xf3n de Apple para crear su identificador de aplicaci\xf3n."))),(0,r.kt)("p",null,"Para crear su identificador de aplicaci\xf3n, seleccione ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/ios/identifier/bundle"},"Certificates, IDs & Profile")," desde su cuenta de desarrollador."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Haga clic en el signo "+" junto a ',(0,r.kt)("em",{parentName:"p"},"Register iOS App IDs")," para agregar un nuevo identificador de aplicaci\xf3n.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Defina el nombre y el Bundle ID de su aplicaci\xf3n."))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"App ID",src:n(76963).Z,width:"1134",height:"1206"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Defina los servicios de aplicaci\xf3n ("App Services") a incluir en su aplicaci\xf3n')),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"App Services",src:n(41630).Z,width:"1150",height:"1331"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirme su identificador de aplicaci\xf3n haciendo clic en ",(0,r.kt)("strong",{parentName:"li"},"Register"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Confirm App ID",src:n(57226).Z,width:"1150",height:"1331"})),(0,r.kt)("h2",{id:"paso-2-inicie-sesi\xf3n-en-la-app-store-connect"},"PASO 2. Inicie sesi\xf3n en la App Store Connect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Con\xe9ctese a su ",(0,r.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com"},"cuenta App Store Connect")),(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"My Apps"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"App Store Connect",src:n(25242).Z,width:"1189",height:"842"})),(0,r.kt)("h2",{id:"paso-3-cree-una-nueva-aplicaci\xf3n-ios"},"PASO 3. Cree una nueva aplicaci\xf3n iOS"),(0,r.kt)("p",null,"Haga clic en el signo ",(0,r.kt)("strong",{parentName:"p"},'"+"')," en la esquina superior izquierda para crear una nueva aplicaci\xf3n iOS."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Cree una nueva aplicaci\xf3n iOS",src:n(82363).Z,width:"1025",height:"869"})),(0,r.kt)("p",null,"Agregue la siguiente informaci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Platforms"),": seleccione iOS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": el nombre de su aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary language"),": el idioma principal de su aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bundle ID"),": seleccione el Bundle ID de su aplicaci\xf3n de la lista desplegable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SKU"),": un identificador \xfanico para su aplicaci\xf3n (se mantiene privado y no es visible para los usuarios)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limit User Access (opcional)"),": le permite limitar el acceso a su aplicaci\xf3n a los usuarios con roles de administrador, desarrollador, comercial o ventas.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Change BundleID",src:n(71582).Z,width:"1074",height:"861"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTA")),(0,r.kt)("p",{parentName:"blockquote"},"Si su Bundle ID no est\xe1 disponible, es posible que ya lo est\xe9 utilizando otra aplicaci\xf3n en la App Store. Tendr\xe1 que cambiar el suyo en su proyecto Xcode.")),(0,r.kt)("h2",{id:"paso-4-informaci\xf3n-sobre-la-aplicaci\xf3n"},"PASO 4. Informaci\xf3n sobre la aplicaci\xf3n"),(0,r.kt)("p",null,"En App Store Connect > App Information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Defina la "Privacy Policy URL" de su aplicaci\xf3n (opcional).'),(0,r.kt)("li",{parentName:"ul"},"Introduzca un subtitulo para su aplicaci\xf3n. Aparecer\xe1 debajo del nombre de su aplicaci\xf3n en la App Store en iOS 11."),(0,r.kt)("li",{parentName:"ul"},"Seleccione una categor\xeda primaria y secundaria (opcional) en la cual aparecer\xe1 su aplicaci\xf3n.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Informaci\xf3n sobre la aplicaci\xf3n",src:n(5439).Z,width:"1300",height:"1182"})),(0,r.kt)("h2",{id:"paso-5-precios-y-disponibilidad"},"PASO 5. Precios y disponibilidad"),(0,r.kt)("p",null,"Aqu\xed es donde se define el precio de su aplicaci\xf3n."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CONSEJOS")),(0,r.kt)("p",{parentName:"blockquote"},"Puede definir descuentos por tiempo limitado especificando las fechas de inicio y de finalizaci\xf3n.")),(0,r.kt)("h2",{id:"paso-6-preparaci\xf3n-para-la-inscripci\xf3n"},"PASO 6. Preparaci\xf3n para la inscripci\xf3n"),(0,r.kt)("p",null,"En ",(0,r.kt)("strong",{parentName:"p"},"Version Information"),", agregue todos los recursos de su aplicaci\xf3n que desee incluir en la App Store:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CONSEJOS")),(0,r.kt)("p",{parentName:"blockquote"},"Puede generar todas sus capturas de pantalla en el simulador (File > New Screen Shot).")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Preparaci\xf3n para la inscripci\xf3n",src:n(93921).Z,width:"1247",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'A\xf1ada las capturas de pantalla de su aplicaci\xf3n. Las capturas de pantalla para el iPhone 5.5 "Super Retina Display y iPad 12.9" Retina Display son obligatorias. Para m\xe1s detalles, ver ',(0,r.kt)("a",{parentName:"p",href:"https://help.apple.com/app-store-connect/#/devd274dd925"},"Screenshot specifications"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Despl\xe1cese hacia abajo y defina las ",(0,r.kt)("strong",{parentName:"p"},"Keywords")," (palabras claves) y complete la ",(0,r.kt)("strong",{parentName:"p"},"Description")," (esto es lo que los usuarios ver\xe1n en la App Store).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puede compartir actualizaciones de su aplicaci\xf3n, incluidas nuevas promociones, pr\xf3ximas funcionalidades o contenido, ofertas por tiempo limitado u otros eventos dentro de su aplicaci\xf3n. Tambi\xe9n agregue un ",(0,r.kt)("strong",{parentName:"p"},"Promotional Text")," que aparecer\xe1 arriba de su descripci\xf3n en la App Store (para clientes con dispositivos que funcionan con iOS 11 o con versiones posteriores).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ingrese un ",(0,r.kt)("strong",{parentName:"p"},"Support URL")," que incluya informaci\xf3n de soporte para su aplicaci\xf3n. Esta URL estar\xe1 visible en la App Store.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Marketing URL")," es opcional. Esto puede dirigir a los usuarios a un sitio web de marketing para su aplicaci\xf3n."))),(0,r.kt)("p",null,"En la secci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"iOS App"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"iOS App section",src:n(48493).Z,width:"1289",height:"1216"})),(0,r.kt)("p",null,"Localice las versiones de su producto en ",(0,r.kt)("strong",{parentName:"p"},"Build"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En el \xe1rea ",(0,r.kt)("strong",{parentName:"li"},"General App Information"),", ingrese los derechos de autor, la versi\xf3n y la informaci\xf3n de contacto del representante comercial de su aplicaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"El icono de su aplicaci\xf3n se incluye en el proyecto 4D for iOS generado."),(0,r.kt)("li",{parentName:"ul"},'La calificaci\xf3n ("rating") es una propiedad requerida para los controles parentales de la App Store. Haga clic en Editar y seleccione la categor\xeda de edad apropiada para su aplicaci\xf3n.')),(0,r.kt)("p",null,"Las secciones ",(0,r.kt)("strong",{parentName:"p"},"App Review Information")," y ",(0,r.kt)("strong",{parentName:"p"},"Version Release")," contienen informaci\xf3n requerida por la App Store. La informaci\xf3n suministrada aqu\xed no ser\xe1 vista por los usuarios."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"App Review Information",src:n(36302).Z,width:"1275",height:"1374"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Review Information"),": informaci\xf3n de contacto y seguridad confidenciales."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version Release"),": especifica una publicaci\xf3n autom\xe1tica o manual."),(0,r.kt)("li",{parentName:"ul"},"Finalmente, haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")))}m.isMDXComponent=!0},3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var a=i.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(k,o(o({ref:a},s),{},{components:n})):i.createElement(k,o({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41630:function(e,a,n){a.Z=n.p+"assets/images/App-Services-to-include-6aa83e7c749cb27c8f87e51f0d33483c.png"},5439:function(e,a,n){a.Z=n.p+"assets/images/App-Store-Connect-app-information-05b7e6c549964f84962ec3da5bcd2012.png"},25242:function(e,a,n){a.Z=n.p+"assets/images/App-Store-Connect-home-page-698480bb11d26087c992c3cf7cdd5827.png"},71582:function(e,a,n){a.Z=n.p+"assets/images/Change-BundleID-Xcode-Project-89a5b406762fa844cbd901cd20a04da1.png"},57226:function(e,a,n){a.Z=n.p+"assets/images/Confirm-App-ID-badc7b63a6b1caa055a9c8bcd346fc3f.png"},82363:function(e,a,n){a.Z=n.p+"assets/images/Create-new-iOS-App-9fa88738ec4946ec2eb2fe04f1d0da42.png"},76963:function(e,a,n){a.Z=n.p+"assets/images/Developer-account-App-ID-a3e672797d9d37c866ed2fe8928167c1.png"},48493:function(e,a,n){a.Z=n.p+"assets/images/Prepare-for-submission-build-icon-331b09ed3c8aa01bc83a19cc0ace2206.png"},36302:function(e,a,n){a.Z=n.p+"assets/images/Prepare-for-submission-review-information-677d367b658298c314ebaad942685180.png"},93921:function(e,a,n){a.Z=n.p+"assets/images/Prepare-for-submission-screenshot-description-ff47eb1948bf404fa6f88ece1c0410c3.png"}}]);