"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6063],{5467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=a(83117),n=a(80102),r=(a(67294),a(3905)),l=["components"],i={id:"one-to-many-custom-button",title:"Uno a Muchos - Bot\xf3n personalizado"},s=void 0,u={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"version-19-R4/tutorials/relations/one-to-many-custom-button",title:"Uno a Muchos - Bot\xf3n personalizado",description:"Como hemos visto con todos los tutoriales anteriores, el editor m\xf3vil 4D le da la libertad de crear muchos elementos personalizados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-custom-button",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/relations/one-to-many-custom-button.md",tags:[],version:"19-R4",frontMatter:{id:"one-to-many-custom-button",title:"Uno a Muchos - Bot\xf3n personalizado"},sidebar:"version-19-R4/tutorials",previous:{title:"Uno a Muchos - T\xedtulo",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-title-definition"},next:{title:"Relaciones Uno a Muchos - Acciones",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-actions"}},c={},p=[{value:"Integrar un bot\xf3n",id:"integrar-un-bot\xf3n",level:2},{value:"Modificar el bot\xf3n",id:"modificar-el-bot\xf3n",level:2},{value:"Colores y fuentes personalizados",id:"colores-y-fuentes-personalizados",level:3},{value:"Esquinas redondeadas de botones",id:"esquinas-redondeadas-de-botones",level:3},{value:"Tama\xf1o y restricciones",id:"tama\xf1o-y-restricciones",level:3},{value:"Agregar restricciones",id:"agregar-restricciones",level:4},{value:"A\xf1adir TAGS",id:"a\xf1adir-tags",level:3},{value:"Agregar un tag a la restricci\xf3n de altura",id:"agregar-un-tag-a-la-restricci\xf3n-de-altura",level:4},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],d={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Como hemos visto con todos los tutoriales anteriores, el editor m\xf3vil 4D le da la libertad de crear muchos elementos personalizados."),(0,r.kt)("p",null,"En cuanto a las plantillas y formatos personalizados, puede crear botones relaciones personalizados."),(0,r.kt)("p",null,"Para esto, \xa1Nada m\xe1s simple! Solo tiene que soltar su bot\xf3n personalizado en su plantilla personalizada."),(0,r.kt)("p",null,"Comencemos descargando el proyecto Starter que incluye:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"una base de datos con su proyecto m\xf3vil"),(0,r.kt)("li",{parentName:"ul"},"un bot\xf3n Relation est\xe1ndar")),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"Starter project")),(0,r.kt)("h2",{id:"integrar-un-bot\xf3n"},"Integrar un bot\xf3n"),(0,r.kt)("p",null,"El primer paso es incluir el bot\xf3n button.xib en su plantilla personalizada para que 4D for iOS pueda utilizarlo."),(0,r.kt)("p",null,"Para utilizar el bot\xf3n, s\xf3lo tiene que soltarlo en la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom button path",src:a(11262).Z,width:"2690",height:"734"})),(0,r.kt)("p",null,"\xa1El primer paso est\xe1 listo!"),(0,r.kt)("h2",{id:"modificar-el-bot\xf3n"},"Modificar el bot\xf3n"),(0,r.kt)("p",null,"Abrir el archivo .xib con Xcode."),(0,r.kt)("p",null,"Debe tener un aspecto como este:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation button",src:a(44487).Z,width:"2028",height:"1898"})),(0,r.kt)("p",null,"Y desde el inspector de atributos, puede cambiar, por ejemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"los colores y las fuentes"),(0,r.kt)("li",{parentName:"ul"},"el estilo del bot\xf3n"),(0,r.kt)("li",{parentName:"ul"},"el tama\xf1o del bot\xf3n, etc.")),(0,r.kt)("p",null,"\xa1Cambiemos el color del bot\xf3n y la fuente de la etiqueta del bot\xf3n!"),(0,r.kt)("h3",{id:"colores-y-fuentes-personalizados"},"Colores y fuentes personalizados"),(0,r.kt)("p",null,"Seleccione el bot\xf3n y cambie el color y la fuente desde el inspector de atributos."),(0,r.kt)("p",null,"Para el fondo, seleccionemos Label Color para obtener el mejor contraste en los modos Claro y Oscuro."),(0,r.kt)("p",null,"Para el color de fuente, seleccione el System background color con una fuente helv\xe9tica Neue Medium."),(0,r.kt)("p",null,"Finalmente, no olvide seleccionar el color System background color para aplicar este color al icono del bot\xf3n."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation button",src:a(33765).Z,width:"2026",height:"1886"})),(0,r.kt)("p",null,"Deber\xeda obtener este resultado en su simulador en modo Dark y Light:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:a(13274).Z,width:"1701",height:"992"})),(0,r.kt)("h3",{id:"esquinas-redondeadas-de-botones"},"Esquinas redondeadas de botones"),(0,r.kt)("p",null,"\xa1Agreguemos algunas esquinas redondeadas al relationButton!"),(0,r.kt)("p",null,"Para hacerlo, abra el Identity Inspector."),(0,r.kt)("p",null,"Seleccione su Bot\xf3n y a\xf1ada las dos l\xedneas siguientes en el \xe1rea User Defined Runtime Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",null,"y"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": seleccione la casilla"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:a(11191).Z,width:"2026",height:"1886"})),(0,r.kt)("p",null,"\xa1Ahora puede crear su proyecto desde el editor de proyectos!"),(0,r.kt)("p",null,"El resultado debe tener un aspecto como este:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:a(40242).Z,width:"1701",height:"992"})),(0,r.kt)("h3",{id:"tama\xf1o-y-restricciones"},"Tama\xf1o y restricciones"),(0,r.kt)("p",null,"Tenga en cuenta que si ",(0,r.kt)("strong",{parentName:"p"},"a\xf1ada restricciones")," a su bot\xf3n, tambi\xe9n tendr\xe1 que modificar el archivo xib xml para ",(0,r.kt)("strong",{parentName:"p"},"agregar las TAGS")," como para las plantillas de formularios detallados personalizados. Esto permite que el bot\xf3n se duplique correctamente cuando hay varias relaciones disponibles en la misma vista detallada."),(0,r.kt)("p",null,"\xa1Qu\xe9 conveniente, ya que planeamos agregar algunas restricciones!"),(0,r.kt)("h4",{id:"agregar-restricciones"},"Agregar restricciones"),(0,r.kt)("p",null,"Para este tutorial, solo vamos a agregar una altura de bot\xf3n porque queremos que se vea m\xe1s grande en la pantalla."),(0,r.kt)("p",null,"Paso 1. Primero seleccione la vista y cambie la altura de 123 a 40"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Button view height",src:a(221).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Paso 2. Haga doble clic en ",(0,r.kt)("strong",{parentName:"p"},"Top Space Constraint")," y cambie su valor de 8 a 0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top Space constraint",src:a(96529).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Paso 3. Haga lo mismo con ",(0,r.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," y cambie su valor de 8 a 0"),(0,r.kt)("p",null,"Debe obtener esto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom  button constraints",src:a(49365).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Paso 4. A\xf1ada una restricci\xf3n de altura de 40"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Button height constraint",src:a(57636).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Debe obtener esto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal in container",src:a(67267).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,"Para indicar al editor de proyecto que todos los elementos incluidos en esta vista se duplicar\xe1n, debemos agregar un TAG a cada elemento y a cada restricci\xf3n."),(0,r.kt)("h3",{id:"a\xf1adir-tags"},"A\xf1adir TAGS"),(0,r.kt)("p",null,"Cada elemento del storyboard tiene un identificador de objeto. Por ejemplo, si selecciona Field View 2 y va al ",(0,r.kt)("strong",{parentName:"p"},"Identity inspector"),", ver\xe1 sus identificadores de objetos:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Object ID Storyboard",src:a(31845).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"El proceso es un poco complicado... \xa1Comencemos por abrir el archivo storyboard con su editor de c\xf3digo favorito!"),(0,r.kt)("h4",{id:"agregar-un-tag-a-la-restricci\xf3n-de-altura"},"Agregar un tag a la restricci\xf3n de altura"),(0,r.kt)("p",null,"Paso 1. Selecci\xf3nelo del Storyboard para obtener la identificaci\xf3n del objeto"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal constraint object ID",src:a(43719).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"Paso 2. Busque esta ID en el archivo xml y rempl\xe1celo por ",(0,r.kt)("strong",{parentName:"p"},"TAG-RL-007")," (un Tag que a\xfan no se utiliza)."),(0,r.kt)("p",null,"Paso 3. Guarda el archivo xml"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal constraint xml file",src:a(43302).Z,width:"1782",height:"1434"})),(0,r.kt)("p",null,"Paso 4. Conc\xe9ntrese en el Storyboard para verificar si la restricci\xf3n se ha actualizado correctamente"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal object ID updated",src:a(47085).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"\xa1Y listo! Su bot\xf3n ahora es completamente duplicable si tiene m\xe1s de un bot\xf3n de relaci\xf3n a mostrar..."),(0,r.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,r.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear botones Relaci\xf3n. Haga clic en el bot\xf3n Final Project abajo para descargar el bot\xf3n de relaciones personalizado."),(0,r.kt)("p",null,"Descargar el proyecto terminado:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"Descargar")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?o.createElement(b,l(l({ref:t},c),{},{components:a})):o.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57636:function(e,t,a){t.Z=a.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},221:function(e,t,a){t.Z=a.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},49365:function(e,t,a){t.Z=a.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},31845:function(e,t,a){t.Z=a.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},13274:function(e,t,a){t.Z=a.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},11191:function(e,t,a){t.Z=a.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},67267:function(e,t,a){t.Z=a.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},40242:function(e,t,a){t.Z=a.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},43719:function(e,t,a){t.Z=a.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},43302:function(e,t,a){t.Z=a.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},47085:function(e,t,a){t.Z=a.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"},11262:function(e,t,a){t.Z=a.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},33765:function(e,t,a){t.Z=a.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},44487:function(e,t,a){t.Z=a.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},96529:function(e,t,a){t.Z=a.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"}}]);