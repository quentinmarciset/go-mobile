"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1637],{21353:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],s={id:"session-management",title:"Gesti\xf3n de sesi\xf3n"},l=void 0,c={unversionedId:"special-features/session-management",id:"version-19-R2/special-features/session-management",title:"Gesti\xf3n de sesi\xf3n",description:"Archivo de sesi\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R2/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/go-mobile/es/docs/19-R2/special-features/session-management",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/special-features/session-management.md",tags:[],version:"19-R2",frontMatter:{id:"session-management",title:"Gesti\xf3n de sesi\xf3n"},sidebar:"version-19-R2/docs",previous:{title:"Authentication",permalink:"/go-mobile/es/docs/19-R2/special-features/authentication"},next:{title:"Push notifications",permalink:"/go-mobile/es/docs/19-R2/special-features/push-notification"}},p={},u=[{value:"Archivo de sesi\xf3n",id:"archivo-de-sesi\xf3n",level:2},{value:"Componente Mobile Session Management",id:"componente-mobile-session-management",level:2}],m={toc:u};function d(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"archivo-de-sesi\xf3n"},"Archivo de sesi\xf3n"),(0,o.kt)("p",null,"Cuando un usuario abre la aplicaci\xf3n por primera vez, se crea un archivo de sesi\xf3n y se almacena junto al archivo de datos actual en la carpeta MobileApps."),(0,o.kt)("p",null,"Los archivos de sesi\xf3n est\xe1n organizados y agrupados por carpeta de aplicaci\xf3n. Los TeamID y Bundle ID de la aplicaci\xf3n se concatenan para crear los nombres de las carpetas de la aplicaci\xf3n."),(0,o.kt)("p",null,"Este es un ejemplo de un archivo de sesi\xf3n generado para 4D for iOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,o.kt)("p",null,'Si desea la posibilidad de validar manualmente el primer inicio de sesi\xf3n para cada sesi\xf3n usuario, debe cambiar el estado por defecto "aceptado" a "pendiente" a\xf1adiendo ',(0,o.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," al m\xe9todo base ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,o.kt)("em",{parentName:"a"},"On Mobile App Authentication")),"."),(0,o.kt)("h2",{id:"componente-mobile-session-management"},"Componente Mobile Session Management"),(0,o.kt)("p",null,"Las sesiones pueden ser gestionadas por el componente ",(0,o.kt)("strong",{parentName:"p"},"Gesti\xf3n de sesiones m\xf3viles"),":"),(0,o.kt)("div",null,(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Componente Mobile Session Management")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Descargue y descomprima el archivo zip"),(0,o.kt)("li",{parentName:"ol"},"Vaya al archivo Generar / Componentes y obtenga el archivo MOBILE SESSION MANAGEMENT.4dbase"),(0,o.kt)("li",{parentName:"ol"},"Cree una carpeta ",(0,o.kt)("strong",{parentName:"li"},"Componentes")," junto al proyecto 4D con los datos de la aplicaci\xf3n."),(0,o.kt)("li",{parentName:"ol"},"Coloque el componente ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," en la carpeta ",(0,o.kt)("strong",{parentName:"li"},"Componentes")," reci\xe9n creada."),(0,o.kt)("li",{parentName:"ol"},"Reinicie 4D."),(0,o.kt)("li",{parentName:"ol"},"Haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Ejecutar")," de la barra de herramientas"),(0,o.kt)("li",{parentName:"ol"},"En el explorador de m\xe9todos 4D, seleccione el m\xe9todo ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," y haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Ejecutar"),"."),(0,o.kt)("li",{parentName:"ol"},"La ventana de aplicaciones aparecer\xe1 mostrando todas sus aplicaciones:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Session",src:t(66787).Z,width:"882",height:"368"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Haga clic derecho en una sesi\xf3n para mostrar el archivo sesi\xf3n en el Finder o elim\xednelo."),(0,o.kt)("li",{parentName:"ul"},"Puede cambiar y definir el estado de la sesi\xf3n para cada dispositivo: aceptado o pendiente")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Session selected",src:t(41356).Z,width:"882",height:"368"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Push")," actualizar\xe1 la sesi\xf3n en la memoria."),(0,o.kt)("li",{parentName:"ul"},"El bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Refresh")," actualiza la lista de sesiones.")))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41356:function(e,n,t){n.Z=t.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},66787:function(e,n,t){n.Z=t.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);