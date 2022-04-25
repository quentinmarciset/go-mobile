"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8749],{26759:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={id:"list-form-storyboard",title:"iOS Storyboard"},s=void 0,u={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"version-19-R3/tutorials/creating-list-forms/list-form-storyboard",title:"iOS Storyboard",description:"Ahora es el momento de crear su interfaz iOS de formulario listado con Xcode.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/es/docs/19-R3/tutorials/creating-list-forms/list-form-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-list-forms/list-form-storyboard.md",tags:[],version:"19-R3",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R3/tutorials",previous:{title:"B\xfasqueda multicriterios",permalink:"/go-mobile/es/docs/19-R3/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Dise\xf1o de Android",permalink:"/go-mobile/es/docs/19-R3/tutorials/creating-list-forms/list-form-layout"}},d={},p=[{value:"Abrir el archivo storyboard con Xcode",id:"abrir-el-archivo-storyboard-con-xcode",level:2},{value:"A\xf1adir una &quot;Image View&quot;",id:"a\xf1adir-una-image-view",level:2},{value:"A\xf1adir etiquetas de t\xedtulo y subt\xedtulo",id:"a\xf1adir-etiquetas-de-t\xedtulo-y-subt\xedtulo",level:2},{value:"Personalizar la etiqueta",id:"personalizar-la-etiqueta",level:2},{value:"C\xf3mo obtener datos en sus celdas",id:"c\xf3mo-obtener-datos-en-sus-celdas",level:2},{value:"Image View",id:"image-view",level:3},{value:"Etiquetas",id:"etiquetas",level:3},{value:"Personalice su aplicaci\xf3n",id:"personalice-su-aplicaci\xf3n",level:2},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],c={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ahora es el momento de crear su interfaz iOS de formulario listado con Xcode."),(0,i.kt)("p",null,"Este es el resultado que queremos lograr:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard custom listform",src:a(37375).Z,width:"1359",height:"754"})),(0,i.kt)("p",null,"Para cada celda, vamos a a\xf1adir:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Una foto de perfil"),(0,i.kt)("li",{parentName:"ul"},"T\xedtulo"),(0,i.kt)("li",{parentName:"ul"},"Subtitulo")),(0,i.kt)("h2",{id:"abrir-el-archivo-storyboard-con-xcode"},"Abrir el archivo storyboard con Xcode"),(0,i.kt)("p",null,"Primero, abra su archivo storyboard en Xcode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty storyboard custom template",src:a(36695).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Est\xe1 vac\xedo, as\xed que vamos a agregar algo de contenido."),(0,i.kt)("h2",{id:"a\xf1adir-una-image-view"},'A\xf1adir una "Image View"'),(0,i.kt)("p",null,"Desde la ",(0,i.kt)("strong",{parentName:"p"},"Object library")," (la librer\xeda de objetos), arrastre y suelte una ",(0,i.kt)("strong",{parentName:"p"},"Image View"),' (una vista de imagen) en una celda. Puede buscar una "Image View" en la barra de b\xfasqueda en la parte inferior de la librer\xeda de objetos.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Image View storyboard",src:a(72916).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Desde el ",(0,i.kt)("strong",{parentName:"p"},"Size inspector")," (al lado derecho del Interface Builder), defina el ancho de la imagen en 110 y su altura en 110. Luego, defina el valor de X en 8 y el valor de Y en 3."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View position height and width",src:a(34563).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"A continuaci\xf3n, agregue una restricci\xf3n (Leading: 8) haciendo clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"p"}," Add New Constraints button")," (en la parte inferior de la ventana del Generador de interfaz). Agregue tambi\xe9n restricciones de ancho y alto, como se muestra:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View leading space width height",src:a(38474).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Align"),'(en la parte inferior del Interface Builder) y marque la casilla "Vertically in Container".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View align vertically",src:a(52917).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Su vista Imagen ahora est\xe1 bien ubicada."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View final",src:a(83017).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Ahora, vamos a trabajar en las etiquetas de celdas."),(0,i.kt)("h2",{id:"a\xf1adir-etiquetas-de-t\xedtulo-y-subt\xedtulo"},"A\xf1adir etiquetas de t\xedtulo y subt\xedtulo"),(0,i.kt)("p",null,"Comencemos por ",(0,i.kt)("strong",{parentName:"p"},"agregar una vista"),'. Busque "View" en la ',(0,i.kt)("strong",{parentName:"p"},"Librer\xeda de objetos")," y arrastre la vista al contenedor de celdas."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add View Storyboard",src:a(92498).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Desde el panel ",(0,i.kt)("strong",{parentName:"p"},"Size inspector")," (al lado derecho del Interface Builder), defina el ancho de la imagen en 277 y su altura en 94. Luego, defina el valor de X en 126 y el valor de Y en 10."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View position height and width",src:a(14614).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Para la vista de imagen, agregue cuatro restricciones haciendo clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 11, Leading: 8, Top: 11, y Bottom: 10.67) para posicionarla correctamente como se muestra a continuaci\xf3n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View contraints Storyboard",src:a(44215).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Arrastre y suelte una etiqueta en la Vista que acaba de agregar desde la Librer\xeda de objetos."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add label Storyboard",src:a(78197).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Desde el panel ",(0,i.kt)("strong",{parentName:"p"}," Size inspector"),", defina el valor de ancho de etiqueta vista en 269 y el valor de alto en 32. A continuaci\xf3n, defina el valor de X en 8 y el valor de Y en 8."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Duplique la etiqueta")," y en el panel ",(0,i.kt)("strong",{parentName:"p"},"Size inspector"),", defina el valor de X en 8 y el valor de Y en 48."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Duplicate the label",src:a(5811).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Seleccione las dos etiquetas y a\xf1ada cuatro restricciones haciendo clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 8, Top:, y Bottom: Multiple) como se muestra a continuaci\xf3n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels contraints storyboard",src:a(91754).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Con una etiqueta seleccionada, haga doble clic en ",(0,i.kt)("strong",{parentName:"p"},"Height constraint")," para editarla."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label height constraint edition",src:a(58856).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,'Cambie la relaci\xf3n "Equal" por ',(0,i.kt)("strong",{parentName:"p"},"Greater Than or Equal")," para que pueda tener una altura variable (para manejar etiquetas multil\xedneas)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Change relation label height constraint",src:a(98570).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Repita el proceso para la segunda etiqueta."),(0,i.kt)("h2",{id:"personalizar-la-etiqueta"},"Personalizar la etiqueta"),(0,i.kt)("p",null,"Desde el inspector de atributos (al lado derecho de la ventana del Interface Builder), puede personalizar los colores de fuente de su etiqueta. Apliquemos el color ",(0,i.kt)("strong",{parentName:"p"},"Dark Grey Color")," a la segunda etiqueta:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color dark grey",src:a(57665).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"Tambi\xe9n puede seleccionar el color principal de su aplicaci\xf3n:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color background color",src:a(71558).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"Desde el inspector de atributos, tambi\xe9n puede personalizar la fuente. Seleccione las dos etiquetas y seleccione Font > Custom > ",(0,i.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label font custom",src:a(60369).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"Para finalizar las personalizaciones, seleccione ambas etiquetas y en la ventana del inspector ",(0,i.kt)("strong",{parentName:"p"}," ingrese el valor 0 en Lines"),". Esto permite que el n\xfamero de l\xedneas sea ilimitado."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label lines number",src:a(55105).Z,width:"1169",height:"990"})),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"El Storyboard se optimiza para tener una ",(0,i.kt)("strong",{parentName:"p"},"altura de celda variable")," en funci\xf3n del contenido de cada celda."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Row height tableview cell",src:a(29834).Z,width:"1169",height:"990"})),(0,i.kt)("h2",{id:"c\xf3mo-obtener-datos-en-sus-celdas"},"C\xf3mo obtener datos en sus celdas"),(0,i.kt)("h3",{id:"image-view"},"Image View"),(0,i.kt)("p",null,"Seleccione su Vista imagen y vaya a ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Haga clic en el ",(0,i.kt)("strong",{parentName:"p"},"bot\xf3n +")," para a\xf1adir una l\xednea."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User defined runtime attributes",src:a(88494).Z,width:"1256",height:"1006"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": comience con bindTo para activar la uni\xf3n del componente. Introduzca ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": nombre del atributo. Introduzca ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Identity inspector storyboard",src:a(57617).Z,width:"1169",height:"990"})),(0,i.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,i.kt)("p",null,'Seleccione la primera etiqueta y agregue una l\xednea en el \xe1rea "Defined Runtime Attributes":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipo"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Cadena"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 2 Binding",src:a(11094).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,'Seleccione la segunda etiqueta y agregue una l\xednea en el \xe1rea "Defined Runtime Attributes":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tipo"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Cadena"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 3 Binding",src:a(40402).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"Puede cambiar las ",(0,i.kt)("strong",{parentName:"p"},"etiquetas del storyboard")," para tener una mejor visibilidad:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga doble clic en la primera etiqueta para editarla e ingresar ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,i.kt)("li",{parentName:"ul"},"Haga doble clic en la segunda etiqueta para editarla e ingresar ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard label display names",src:a(42482).Z,width:"1171",height:"984"})),(0,i.kt)("p",null,"Vaya al editor de su proyecto y seleccione su plantilla de formulario listado en la secci\xf3n Formularios, luego haga clic en Crear y Ejecutar."),(0,i.kt)("p",null,"Este es el el resultado del simulador:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:a(77181).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"personalice-su-aplicaci\xf3n"},"Personalice su aplicaci\xf3n"),(0,i.kt)("p",null,"El \xfaltimo paso es agregar un radio de esquina a la vista de imagen para tener un mejor dise\xf1o."),(0,i.kt)("p",null,"Seleccione su Vista imagen y a\xf1ada las dos l\xedneas siguientes en el \xe1rea User Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Number"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"12")))),(0,i.kt)("p",null,"y"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": seleccione la casilla"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ImageView corner Radius",src:a(41042).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"\xa1Ahora puede crear su proyecto desde el editor de proyectos!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Custom template final result",src:a(60700).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,i.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear plantillas con iOS. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del proyecto Starter. Tambi\xe9n puede ver c\xf3mo construir ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R3/tutorials/creating-detail-forms/detail-form-template"},"plantillas de formularios detallados"),"."),(0,i.kt)("p",null,"Descargue la carpeta lista de la plantilla terminada:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Descargar")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72916:function(e,t,a){t.Z=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},78197:function(e,t,a){t.Z=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},92498:function(e,t,a){t.Z=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},98570:function(e,t,a){t.Z=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},60700:function(e,t,a){t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},5811:function(e,t,a){t.Z=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},36695:function(e,t,a){t.Z=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},11094:function(e,t,a){t.Z=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},40402:function(e,t,a){t.Z=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},57617:function(e,t,a){t.Z=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},52917:function(e,t,a){t.Z=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},41042:function(e,t,a){t.Z=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},83017:function(e,t,a){t.Z=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},38474:function(e,t,a){t.Z=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},34563:function(e,t,a){t.Z=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},71558:function(e,t,a){t.Z=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},57665:function(e,t,a){t.Z=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},60369:function(e,t,a){t.Z=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},58856:function(e,t,a){t.Z=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},55105:function(e,t,a){t.Z=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},91754:function(e,t,a){t.Z=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},29834:function(e,t,a){t.Z=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},77181:function(e,t,a){t.Z=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},37375:function(e,t,a){t.Z=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},42482:function(e,t,a){t.Z=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},88494:function(e,t,a){t.Z=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},44215:function(e,t,a){t.Z=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},14614:function(e,t,a){t.Z=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);