"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2825],{66585:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],i={id:"create-data-formatter",title:"Crear el formato de datos"},s=void 0,m={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"version-19-R4/tutorials/data-formatter/create-data-formatter",title:"Crear el formato de datos",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/data-formatter/create-data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/es/docs/19-R4/tutorials/data-formatter/create-data-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/data-formatter/create-data-formatter.md",tags:[],version:"19-R4",frontMatter:{id:"create-data-formatter",title:"Crear el formato de datos"},sidebar:"version-19-R4/tutorials",previous:{title:"Actualizar una plantilla",permalink:"/go-mobile/es/docs/19-R4/tutorials/gallery/update-gallery-template"},next:{title:"Create Swift formatter",permalink:"/go-mobile/es/docs/19-R4/tutorials/data-formatter/create-swift-formatter"}},p={},c=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2},{value:"Crear la carpeta Formats",id:"crear-la-carpeta-formats",level:2},{value:"Formatos de enteros",id:"formatos-de-enteros",level:2},{value:"N\xfamero entero a cadena",id:"n\xfamero-entero-a-cadena",level:3},{value:"Entero a imagen",id:"entero-a-imagen",level:3},{value:"Formatos texto",id:"formatos-texto",level:2},{value:"Texto a cadena",id:"texto-a-cadena",level:3},{value:"Texto a imagen",id:"texto-a-imagen",level:3},{value:"Soporte modo Oscuro",id:"soporte-modo-oscuro",level:2},{value:"Color tintado",id:"color-tintado",level:3},{value:"Im\xe1genes a color optimizadas",id:"im\xe1genes-a-color-optimizadas",level:3},{value:"Abrir un proyecto m\xf3vil",id:"abrir-un-proyecto-m\xf3vil",level:2},{value:"Genere su aplicaci\xf3n 4D for iOS",id:"genere-su-aplicaci\xf3n-4d-for-ios",level:2}],d={toc:c};function u(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,o.kt)("p",{parentName:"blockquote"},"Crear sus primeros formatos de datos.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("a",{parentName:"p",href:"requirements.html"},"here")," to see what you'll need to get started!")),(0,o.kt)("p",null,"En este tutorial, lo guiaremos a trav\xe9s de la creaci\xf3n de varios ejemplos de formatos."),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons")," section, you can choose pre-packaged formats."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Formatos disponibles:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Texto"),": texto"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fecha"),": fecha, fecha corta, fecha larga, fecha completa"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hora"),": hora, hora corta, duraci\xf3n, n\xfamero entero"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Booleano"),': ""No" o "S\xed", "False" o "True"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"N\xfamero entero"),": n\xfamero entero, n\xfamero decimal, n\xfamero real, porcentaje, n\xfamero ordinal, moneda $, moneda \u20ac, moneda \xa5, n\xfamero en letras"))),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Descargar")),(0,o.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,o.kt)("p",null,"Para comenzar, descargue el ",(0,o.kt)("strong",{parentName:"p"},"proyecto Starter"),", que incluye:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las carpetas ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," y ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images"),", que contienen las im\xe1genes (a utilizar m\xe1s adelante para los formatos que contienen im\xe1genes)"),(0,o.kt)("li",{parentName:"ul"},"Un archivo ",(0,o.kt)("strong",{parentName:"li"},"Task Management.4dbase")," (con una aplicaci\xf3n de proyecto m\xf3vil lista para utilizar)")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,o.kt)("p",null,"\xa1Ahora est\xe1 listo para crear a sus primeros formatos!"),(0,o.kt)("h2",{id:"crear-la-carpeta-formats"},"Crear la carpeta Formats"),(0,o.kt)("p",null,"Primero, cree una carpeta ",(0,o.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(68851).Z,width:"929",height:"367"})),(0,o.kt)("h2",{id:"formatos-de-enteros"},"Formatos de enteros"),(0,o.kt)("h3",{id:"n\xfamero-entero-a-cadena"},"N\xfamero entero a cadena"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cree una carpeta ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," en la carpeta de Formats que acaba de crear."),(0,o.kt)("li",{parentName:"ul"},"Cree un archivo ",(0,o.kt)("strong",{parentName:"li"},"manifest.json")," en la carpeta ",(0,o.kt)("strong",{parentName:"li"},"integerToString"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(69511).Z,width:"1130",height:"367"})),(0,o.kt)("p",null,"Veamos el contenido del archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": el nombre del formato"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": tipo de formato 4D que desea utilizar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": puede ser ",(0,o.kt)("strong",{parentName:"li"},"localized text")," para las cadenas o ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para las im\xe1genes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,o.kt)("h3",{id:"entero-a-imagen"},"Entero a imagen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cree una carpeta ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," en la carpeta ",(0,o.kt)("strong",{parentName:"p"},"formatters")," que acaba de crear.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cree un archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," en la carpeta ",(0,o.kt)("strong",{parentName:"p"},"integerToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(31463).Z,width:"966",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cree un archivo ",(0,o.kt)("strong",{parentName:"li"},"Images")," en la carpeta ",(0,o.kt)("strong",{parentName:"li"},"integerToImage"),". Puede agregar las im\xe1genes de ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," (en StarterProject.zip) para esta nueva carpeta.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:a(70828).Z,width:"1119",height:"367"})),(0,o.kt)("p",null,"Veamos el contenido del archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": el nombre del formato"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": el tipo de formato 4D que desea utilizar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": puede ser ",(0,o.kt)("strong",{parentName:"li"},"localized text")," para las cadenas o ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para las im\xe1genes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"assets"),": ajustar el tama\xf1o de visualizaci\xf3n (ancho y alto)")),(0,o.kt)("h2",{id:"formatos-texto"},"Formatos texto"),(0,o.kt)("h3",{id:"texto-a-cadena"},"Texto a cadena"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cree una carpeta ",(0,o.kt)("strong",{parentName:"p"},"integerToString")," en la carpeta Formats que acaba de crear.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,o.kt)("strong",{parentName:"p"},"textToString")," folder."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(12110).Z,width:"967",height:"367"})),(0,o.kt)("p",null,"Veamos el contenido del archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name"),": el nombre del formato"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type"),": tipo de formato 4D que desea utilizar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": puede ser ",(0,o.kt)("strong",{parentName:"li"},"localized text")," para las cadenas o ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para las im\xe1genes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,o.kt)("h3",{id:"texto-a-imagen"},"Texto a imagen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cree una carpeta ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," en la carpeta Formats que acaba de crear.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cree un archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," en la carpeta ",(0,o.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(98793).Z,width:"971",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Luego cree un archivo ",(0,o.kt)("strong",{parentName:"li"},"Images")," en la carpeta ",(0,o.kt)("strong",{parentName:"li"},"textToImage"),". Puede agregar las im\xe1genes de ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," (en StarterProject.zip) a esta nueva carpeta.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:a(73670).Z,width:"1133",height:"367"})),(0,o.kt)("p",null,"Veamos el contenido del archivo ",(0,o.kt)("strong",{parentName:"p"},"manifest.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,o.kt)("h2",{id:"soporte-modo-oscuro"},"Soporte modo Oscuro"),(0,o.kt)("p",null,"Tanto si su dispositivo est\xe1 en modo oscuro como claro, si trabaja en iOS o Android, puede utilizar f\xe1cilmente los formateadores de datos personalizados que contienen im\xe1genes. Las im\xe1genes se adaptar\xe1n en funci\xf3n del modo de color del tel\xe9fono."),(0,o.kt)("h3",{id:"color-tintado"},"Color tintado"),(0,o.kt)("p",null,"Para optimizar el contraste de color de sus im\xe1genes en blanco y negro en su aplicaci\xf3n dependiendo del modo de color (claro u oscuro), puede configurar las im\xe1genes de la siguiente manera, con la l\xednea de c\xf3digo ",(0,o.kt)("inlineCode",{parentName:"p"},'"tintable": true'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,o.kt)("p",null,"Aqu\xed est\xe1 el resultado en los modos claro y oscuro:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Modo Oscuro"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Formato de datos",src:a(28153).Z,width:"231",height:"500"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Formato de datos",src:a(99866).Z,width:"231",height:"500"}))))),(0,o.kt)("h3",{id:"im\xe1genes-a-color-optimizadas"},"Im\xe1genes a color optimizadas"),(0,o.kt)("p",null,"Para optimizar las im\xe1genes de color que se muestran en su aplicaci\xf3n y adaptarlas a su modo de color, necesita tener dos im\xe1genes: una para el modo claro y otra para el modo oscuro con el sufijo ",(0,o.kt)("inlineCode",{parentName:"p"},"_dark"),", como sigue:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formato de datos",src:a(18209).Z,width:"1280",height:"720"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,o.kt)("p",null,"Aqu\xed est\xe1 el resultado en modo claro y en modo oscuro:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Modo Oscuro"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Formato de datos",src:a(87773).Z,width:"1170",height:"2532"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Formato de datos",src:a(69249).Z,width:"1170",height:"2532"}))))),(0,o.kt)("h2",{id:"abrir-un-proyecto-m\xf3vil"},"Abrir un proyecto m\xf3vil"),(0,o.kt)("p",null,"Abra Task Management.4dbase con 4D y vaya al Archivo > abrir > Mobile Project... para abrir ",(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"A continuaci\xf3n, vaya a la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Etiquetas e iconos")," en el editor de proyectos. Todos los formatos est\xe1n disponibles para los diferentes tipos de campos definidos previamente en los diferentes archivos de formato manifest.json:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Seleccione el formato ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," para ",(0,o.kt)("strong",{parentName:"li"},"Job field")),(0,o.kt)("li",{parentName:"ul"},"Seleccione el formato ",(0,o.kt)("strong",{parentName:"li"},"textToString")," para ",(0,o.kt)("strong",{parentName:"li"},"Country field")),(0,o.kt)("li",{parentName:"ul"},"Seleccione el formato ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," para ",(0,o.kt)("strong",{parentName:"li"},"Task Status")),(0,o.kt)("li",{parentName:"ul"},"Seleccione el formato ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," para ",(0,o.kt)("strong",{parentName:"li"},"Manager"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(71929).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"genere-su-aplicaci\xf3n-4d-for-ios"},"Genere su aplicaci\xf3n 4D for iOS"),(0,o.kt)("p",null,'Genere su aplicaci\xf3n 4D for iOS y ver\xe1 que su formateador de datos se aplica correctamente en funci\xf3n del "cr\xe9dito l\xedmite".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(24988).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"Descargue la carpeta de la plantilla del formateador terminada:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Descargar")),(0,o.kt)("p",null,"And you're done!"))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18209:function(e,t,a){t.Z=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},99866:function(e,t,a){t.Z=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},69249:function(e,t,a){t.Z=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},31463:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},69511:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},98793:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},12110:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},68851:function(e,t,a){t.Z=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},70828:function(e,t,a){t.Z=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},73670:function(e,t,a){t.Z=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},24988:function(e,t,a){t.Z=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},71929:function(e,t,a){t.Z=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},28153:function(e,t,a){t.Z=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},87773:function(e,t,a){t.Z=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);