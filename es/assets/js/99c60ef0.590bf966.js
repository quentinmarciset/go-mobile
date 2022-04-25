"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9504],{3276:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],i={id:"list-form-template",title:"Plantillas de formulario lista"},s=void 0,c={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"version-19-R5/tutorials/creating-list-forms/list-form-template",title:"Plantillas de formulario lista",description:"En este tutorial, cubriremos casi todos los aspectos de la creaci\xf3n de una plantilla de formulario lista, incluyendo el uso de una barra de b\xfasqueda, una tabla que muestra una imagen, un t\xedtulo, y un subt\xedtulo para cada celda.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-template",title:"Plantillas de formulario lista"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/go-mobile/es/docs/tutorials/custom-login-form"},next:{title:"List form icon",permalink:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-icon"}},u={},p=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2},{value:"A\xf1ada una plantilla de formulario listado a su proyecto m\xf3vil",id:"a\xf1ada-una-plantilla-de-formulario-listado-a-su-proyecto-m\xf3vil",level:2},{value:"Contenido de la plantilla de formulario Lista",id:"contenido-de-la-plantilla-de-formulario-lista",level:2}],m={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En este tutorial, cubriremos casi todos los aspectos de la creaci\xf3n de una plantilla de formulario lista, incluyendo el uso de una ",(0,o.kt)("strong",{parentName:"p"},"barra de b\xfasqueda"),", una tabla que muestra una ",(0,o.kt)("strong",{parentName:"p"},"imagen"),", un ",(0,o.kt)("strong",{parentName:"p"},"t\xedtulo"),", y un ",(0,o.kt)("strong",{parentName:"p"},"subt\xedtulo")," para cada celda."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List form template final result",src:a(50876).Z,width:"1417",height:"992"})),(0,o.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,o.kt)("p",null,"Antes de comenzar, aseg\xfarese de descargar y descomprimir el ",(0,o.kt)("strong",{parentName:"p"},"Starter project"),", que incluye:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Una carpeta ",(0,o.kt)("strong",{parentName:"li"},"List form")),(0,o.kt)("li",{parentName:"ul"},'Un proyecto de demostraci\xf3n en 4D ("Contact") con un proyecto de aplicaci\xf3n m\xf3vil listo para usar.')),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Starter project")),(0,o.kt)("h2",{id:"a\xf1ada-una-plantilla-de-formulario-listado-a-su-proyecto-m\xf3vil"},"A\xf1ada una plantilla de formulario listado a su proyecto m\xf3vil"),(0,o.kt)("p",null,"Lo primero que deber\xe1 hacer es crear una carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," en ",(0,o.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," ubicaci\xf3n y arrastrar y soltar su carpeta ",(0,o.kt)("strong",{parentName:"p"},"list form")," en ella."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mobile folder custom template",src:a(46353).Z,width:"1301",height:"367"})),(0,o.kt)("p",null,'Ahora, inicie su aplicaci\xf3n 4D y abra el proyecto 4D "Contact".'),(0,o.kt)("p",null,'A continuaci\xf3n, seleccione el proyecto m\xf3vil "Contact Demo App": ',(0,o.kt)("strong",{parentName:"p"},"Archivo > Abrir > Proyecto m\xf3vil > App Demo Contact"),"."),(0,o.kt)("p",null,"En la ",(0,o.kt)("strong",{parentName:"p"},"secci\xf3n Formulario")," del editor del proyecto m\xf3vil, ver\xe1 que su plantilla de formulario lista se ha agregado exitosamente a la lista de plantillas de formularios lista disponibles:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forms section",src:a(48730).Z,width:"1072",height:"994"})),(0,o.kt)("p",null,"Ahora concentr\xe9monos en el contenido de la carpeta ",(0,o.kt)("strong",{parentName:"p"},"Custom List form"),"."),(0,o.kt)("h2",{id:"contenido-de-la-plantilla-de-formulario-lista"},"Contenido de la plantilla de formulario Lista"),(0,o.kt)("p",null,"En esta carpeta, encontrar\xe1:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un icono ",(0,o.kt)("strong",{parentName:"li"},"layoutIconx2.png")," de 160x160px: mostrado en el editor del proyecto cuando seleccione su plantilla"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Un archivo manifest.json"),": incluye una descripci\xf3n b\xe1sica de la plantilla"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Un archivo template.svg"),": la representaci\xf3n visual de su plantilla que se muestra cuando define el contenido de su formulario listado."),(0,o.kt)("li",{parentName:"ul"},"una carpeta ",(0,o.kt)("strong",{parentName:"li"},"ios")," que incluye el storyboard (interfaz gr\xe1fica) y el archivo ",(0,o.kt)("strong",{parentName:"li"},"Swift")," (c\xf3digo del formulario) en la carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")),(0,o.kt)("li",{parentName:"ul"},"una ",(0,o.kt)("strong",{parentName:"li"},"carpeta android")," que incluya el archivo layout.xml (interfaz gr\xe1fica) en la carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout"),".")),(0,o.kt)("p",null,"Estos archivos y carpetas se detallan en las siguientes secciones."))}d.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48730:function(e,t,a){t.Z=a.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},50876:function(e,t,a){t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},46353:function(e,t,a){t.Z=a.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);