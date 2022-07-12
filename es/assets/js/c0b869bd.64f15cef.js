"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[100],{68866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"user-information-query",title:"Filtro de b\xfasqueda usuario"},i=void 0,l={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R6/tutorials/filter-queries/user-information-query",title:"Filtro de b\xfasqueda usuario",description:"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/es/docs/tutorials/filter-queries/user-information-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R6",frontMatter:{id:"user-information-query",title:"Filtro de b\xfasqueda usuario"},sidebar:"tutorials",previous:{title:"Definir un Filter Query",permalink:"/go-mobile/es/docs/tutorials/filter-queries/define-filter-query"},next:{title:"Comencemos",permalink:"/go-mobile/es/docs/tutorials/actions/getting-started"}},s={},c=[],u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acceda a la ",(0,n.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"'),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,n.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,n.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Operadores")," y seleccione ",(0,n.kt)("strong",{parentName:"li"},"AND"),"."),(0,n.kt)("li",{parentName:"ul"},"Ahora defina la informaci\xf3n del usuario que desea obtener del m\xe9todo de base de datos, ",(0,n.kt)("strong",{parentName:"li"},":email"),"."),(0,n.kt)("li",{parentName:"ul"},"Recuerde validar la consulta haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Validar"),". De lo contrario, no podr\xe1 crear su aplicaci\xf3n.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:r(23128).Z,width:"2164",height:"1988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,n.kt)("p",null,"La b\xfasqueda filtrar\xe1 los datos en funci\xf3n del estado ",(0,n.kt)("strong",{parentName:"p"},"In Progress")," Y de la ",(0,n.kt)("strong",{parentName:"p"},"direcci\xf3n de correo electr\xf3nico del administrador de cuentas")," (accesible desde la tabla AccountManager gracias a la relaci\xf3n ",(0,n.kt)("em",{parentName:"p"},"Muchos a Uno")," en el nombre del gerente)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTA")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Se muestra un ",(0,n.kt)("strong",{parentName:"li"},"icono usuario")," a la derecha de cada tabla cuando se le aplica un filtro de informaci\xf3n de usuario."),(0,n.kt)("li",{parentName:"ul"},"Tan pronto como una b\xfasqueda se base en la informaci\xf3n del usuario y se valide, debe editar el ",(0,n.kt)("strong",{parentName:"li"},"M\xe9todo de autenticaci\xf3n de la aplicaci\xf3n m\xf3vil"),". Para hacerlo, haga clic con el bot\xf3n derecho en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir la ventana de edici\xf3n del m\xe9todo de base de datos."))),(0,n.kt)("p",null,"Agregue la siguiente l\xednea en el m\xe9todo de base de datos:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,n.kt)("p",null,"Esto permitir\xe1 recuperar la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador y mostrar los datos seg\xfan ese criterio."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:r(4437).Z,width:"1836",height:"1534"})),(0,n.kt)("p",null,'Ahora, si crea su aplicaci\xf3n e ingresa "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, encontrar\xe1 todos los contratos ',(0,n.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resultado final",src:r(86564).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4437:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},86564:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},23128:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);