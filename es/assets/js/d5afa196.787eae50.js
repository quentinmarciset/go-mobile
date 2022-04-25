"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4556],{69050:function(a,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=e(83117),o=e(80102),r=(e(67294),e(3905)),i=["components"],d={id:"list-form-layout",title:"Dise\xf1o de Android"},l=void 0,p={unversionedId:"tutorials/creating-list-forms/list-form-layout",id:"version-19-R5/tutorials/creating-list-forms/list-form-layout",title:"Dise\xf1o de Android",description:"En esta secci\xf3n ver\xe1 c\xf3mo crear su interfaz de formulario lista Android con Android Studio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-layout",permalink:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-layout",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-layout",title:"Dise\xf1o de Android"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/es/docs/tutorials/creating-list-forms/list-form-storyboard"},next:{title:"Plantillas de formulario detallado",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template"}},s={},u=[{value:"Abrir el archivo de dise\xf1o con Android Studio",id:"abrir-el-archivo-de-dise\xf1o-con-android-studio",level:2},{value:"A\xf1adir un contenedor CardView",id:"a\xf1adir-un-contenedor-cardview",level:2},{value:"A\xf1adir una &quot;ImageView&quot;",id:"a\xf1adir-una-imageview",level:2},{value:"A\xf1adir un t\xedtulo",id:"a\xf1adir-un-t\xedtulo",level:2},{value:"A\xf1adir un subt\xedtulo",id:"a\xf1adir-un-subt\xedtulo",level:2},{value:"Personalizar la etiqueta",id:"personalizar-la-etiqueta",level:2},{value:"C\xf3mo obtener datos en sus celdas",id:"c\xf3mo-obtener-datos-en-sus-celdas",level:2},{value:"Image View",id:"image-view",level:3},{value:"Etiquetas",id:"etiquetas",level:3},{value:"\xbfQu\xe9 hacer ahora?",id:"qu\xe9-hacer-ahora",level:2}],c={toc:u};function m(a){var t=a.components,d=(0,o.Z)(a,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En esta secci\xf3n ver\xe1 c\xf3mo crear su interfaz de formulario lista Android con Android Studio."),(0,r.kt)("p",null,"Este es el resultado que queremos lograr:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom listform",src:e(22381).Z,width:"2600",height:"1792"})),(0,r.kt)("p",null,"Para cada celda, vamos a a\xf1adir:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Una foto de perfil"),(0,r.kt)("li",{parentName:"ul"},"T\xedtulo"),(0,r.kt)("li",{parentName:"ul"},"Subtitulo")),(0,r.kt)("h2",{id:"abrir-el-archivo-de-dise\xf1o-con-android-studio"},"Abrir el archivo de dise\xf1o con Android Studio"),(0,r.kt)("p",null,"La mejor manera de editar o crear una plantilla es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abrir Android Studio y crear un nuevo proyecto m\xf3vil vac\xedo presionando en Archivo > Nuevo > Nuevo Proyecto...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Seleccionar la plantilla Actividad vac\xeda"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android Studio project creation",src:e(68624).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure su proyecto y haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Terminar"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Android project",src:e(99742).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copiar el archivo layout.xml en app > res > layout solt\xe1ndolo directamente en la carpeta dise\xf1o del proyecto")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy layout.xml file",src:e(50572).Z,width:"1642",height:"610"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deber\xeda tener eso en ese momento:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android project",src:e(40566).Z,width:"2798",height:"2030"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en la opci\xf3n superior derecha ",(0,r.kt)("strong",{parentName:"li"},"Dividir")," para visualizar la vista previa de la plantilla as\xed como el c\xf3digo xml.")),(0,r.kt)("p",null,"Est\xe1 vac\xedo, as\xed que vamos a agregar algo de contenido."),(0,r.kt)("h2",{id:"a\xf1adir-un-contenedor-cardview"},"A\xf1adir un contenedor CardView"),(0,r.kt)("p",null,"Para tener una mejor representaci\xf3n de sus celdas vamos a a\xf1adir un ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/cardview"},"CardView"),"."),(0,r.kt)("p",null,"A\xf1adir un contenedor CardView le permitir\xe1 mostrar sus celdas de formulario lista como agradables tarjetas y le da la posibilidad de a\xf1adir sombra, elevaci\xf3n, radio de esquina, color de fondo..."),(0,r.kt)("p",null,"As\xed que vamos a a\xf1adirlo a su archivo de dise\xf1o. No olvide cerrar el contenedor a\xf1adiendo ",(0,r.kt)("inlineCode",{parentName:"p"},"</androidx.cardview.widget.CardView>")," justo antes de ",(0,r.kt)("inlineCode",{parentName:"p"},"</layout>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'   <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview" \n        android:layout_width="match_parent" \n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n        ...\n\n        </androidx.cardview.widget.CardView>\n\n')),(0,r.kt)("p",null,"Es fundamental ",(0,r.kt)("strong",{parentName:"p"},"dar ids a sus elementos de dise\xf1o")," para referirse a ellos posteriormente y posicionarlos entre s\xed."),(0,r.kt)("p",null,"Defina el ",(0,r.kt)("strong",{parentName:"p"},"ancho")," y ",(0,r.kt)("strong",{parentName:"p"},"alto")," de su contenedor, los ",(0,r.kt)("strong",{parentName:"p"},"m\xe1rgenes")," y como queremos que el contenido ocupe todo el espacio padre (menos los m\xe1rgenes) s\xf3lo tenemos que ",(0,r.kt)("strong",{parentName:"p"},"a\xf1adir restricciones"),"."),(0,r.kt)("p",null,"Aqu\xed est\xe1 el c\xf3digo de dise\xf1o completo en esta etapa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n        <androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n            android:layout_height="wrap_content">\n\n        </androidx.constraintlayout.widget.ConstraintLayout>\n\n    </androidx.cardview.widget.CardView>\n\n\n</layout>\n\n')),(0,r.kt)("p",null,"Y aqu\xed est\xe1 el resultado de la vista previa que se espera obtener:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add CardView container",src:e(64965).Z,width:"2928",height:"2066"})),(0,r.kt)("h2",{id:"a\xf1adir-una-imageview"},'A\xf1adir una "ImageView"'),(0,r.kt)("p",null,"Para tener una agradable vista de imagen vamos a utilizar de nuevo un contenedor CardView ya que queremos a\xf1adir un radio de esquina a la ImageView para tener un mejor dise\xf1o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'            <androidx.cardview.widget.CardView\n                android:id="@+id/cardView"\n                android:layout_width="wrap_content"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="8dp"\n                app:cardCornerRadius="20dp"\n                app:layout_constraintStart_toStartOf="parent"\n\n            <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" /> \n\n            </androidx.cardview.widget.CardView>\n')),(0,r.kt)("p",null,"Como puede ver, el ImageView est\xe1 insertado en el CardView. Eso permite a\xf1adirle radios de esquina."),(0,r.kt)("p",null,"La l\xednea ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," permitir\xe1 enlazar el valor de la imagen que se encuentra en la posici\xf3n 1 del archivo svg que se ha definido previamente."),(0,r.kt)("p",null,"La l\xednea ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," simplemente est\xe1 ah\xed para mostrar un marcador de posici\xf3n ImageView."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add ImageView",src:e(57635).Z,width:"2928",height:"2066"})),(0,r.kt)("h2",{id:"a\xf1adir-un-t\xedtulo"},"A\xf1adir un t\xedtulo"),(0,r.kt)("p",null,"Aqu\xed queremos a\xf1adir un t\xedtulo a la derecha de la CardView que contiene una ImageView."),(0,r.kt)("p",null,"Para ello vamos a a\xf1adir un TextView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <TextView\n                android:id="@+id/__SPECIFIC_ID_2__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="20dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="6dp"\n                android:scrollbars="none"\n                android:text="__TEXT_2__"\n                android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                android:textColor="@color/black"\n                android:textStyle="bold"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toTopOf="parent"\n                tools:text="My field 2" />\n\n')),(0,r.kt)("p",null,"La l\xednea ",(0,r.kt)("inlineCode",{parentName:"p"},'app: text="__TEXT_2__"')," permitir\xe1 enlazar el valor del texto que se encuentra en la posici\xf3n 2 del archivo svg que se ha definido previamente."),(0,r.kt)("p",null,"Queremos que el ImageView y el TextView est\xe9n alineados arriba. Para ello, vamos a utilizar el id TextView. S\xf3lo tiene que a\xf1adir esta l\xednea a la CardView que incluye la foto de perfil:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Title",src:e(68339).Z,width:"2616",height:"2042"})),(0,r.kt)("h2",{id:"a\xf1adir-un-subt\xedtulo"},"A\xf1adir un subt\xedtulo"),(0,r.kt)("p",null,"Queremos a\xf1adir un subt\xedtulo a esta celda. Para ello, basta con a\xf1adir el mismo bloque que el del t\xedtulo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\n<TextView\n                android:id="@+id/__SPECIFIC_ID_3__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="8dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="50dp"\n                android:scrollbars="none"\n                android:text="__TEXT_3__"\n                android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                   android:textColor="?colorPrimary"\n                app:layout_constraintBottom_toBottomOf="parent"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n                tools:text="My field 3" />\n')),(0,r.kt)("p",null,"La l\xednea ",(0,r.kt)("inlineCode",{parentName:"p"},'app: text="__TEXT_3__"')," permitir\xe1 enlazar el valor del texto que se encuentra en la posici\xf3n 2 del archivo svg que se ha definido previamente."),(0,r.kt)("p",null,"Queremos que el subt\xedtulo est\xe9 al final del t\xedtulo. Para ello, vamos a utilizar el id del t\xedtulo TextView. S\xf3lo tiene que a\xf1adir esta l\xednea al t\xedtulo TextView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n')),(0,r.kt)("p",null,"Su primera plantilla de formulario lista:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final list form template",src:e(50025).Z,width:"2616",height:"2042"})),(0,r.kt)("p",null,"Aqu\xed est\xe1 el c\xf3digo de dise\xf1o completo en esta etapa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n    <androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content">\n\n        <androidx.cardview.widget.CardView\n            android:id="@+id/cardView"\n            android:layout_width="wrap_content"\n            android:layout_height="wrap_content"\n            android:layout_marginLeft="8dp"\n            app:cardCornerRadius="20dp"\n            app:layout_constraintStart_toStartOf="parent"\n            app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__">\n\n        <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" />\n\n        </androidx.cardview.widget.CardView>\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_2__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="20dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="6dp"\n            android:scrollbars="none"\n            android:text="__TEXT_2__"\n            android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n            android:textColor="@color/black"\n            android:textStyle="bold"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toTopOf="parent"\n            app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n            tools:text="My field 2" />\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_3__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="8dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="50dp"\n            android:scrollbars="none"\n            android:text="__TEXT_3__"\n            android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n            android:textColor="?colorPrimary"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n            tools:text="My field 3" />\n\n    </androidx.constraintlayout.widget.ConstraintLayout>\n\n    </androidx.cardview.widget.CardView>\n\n</layout>\n\n')),(0,r.kt)("h2",{id:"personalizar-la-etiqueta"},"Personalizar la etiqueta"),(0,r.kt)("p",null,"Desde aqu\xed puede personalizar la etiqueta de:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"color => android:textColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"weight => android:textStyle con posibles valores ",(0,r.kt)("strong",{parentName:"p"},"normal"),", ",(0,r.kt)("strong",{parentName:"p"},"negrita")," o ",(0,r.kt)("strong",{parentName:"p"},"it\xe1lica"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"apariencia de su fuente => android:textAppearance"))),(0,r.kt)("p",null,"Intente mantener la coherencia en los tama\xf1os de texto de su dise\xf1o con la apariencia. La mejor manera de conseguirlo es seguir el ",(0,r.kt)("a",{parentName:"p",href:"https://material.io/design/typography/the-type-system.html#type-scale"},"tipo de dise\xf1o de materiales"),"."),(0,r.kt)("p",null,"Por ejemplo, un TextView b\xe1sico debe estar en escala ",(0,r.kt)("inlineCode",{parentName:"p"},"@Body1@"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n')),(0,r.kt)("h2",{id:"c\xf3mo-obtener-datos-en-sus-celdas"},"C\xf3mo obtener datos en sus celdas"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"En nuestra plantilla de formulario lista hemos utilizado ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,r.kt)("p",null,"Aqu\xed suponemos que la ImageView es la primera vista del svg, y su ID de vista es ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". Si fuera la tercera vista, ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," y su ID de vista ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,r.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,r.kt)("p",null,"En nuestra plantilla de formulario de lista hemos utilizado ",(0,r.kt)("inlineCode",{parentName:"p"},'android:text="__TEXT_2__"')," para el t\xedtulo."),(0,r.kt)("p",null,"Aqu\xed suponemos que el t\xedtulo es la segunda vista en el svg, y su ID de vista es ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_2__"),"."),(0,r.kt)("h2",{id:"qu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,r.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear plantillas de formularios listados Android. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del Proyecto Starter. Espere, \xa1Hay m\xe1s! En el siguiente tutorial, aprender\xe1 c\xf3mo crear plantillas de formulario detalladas Android."),(0,r.kt)("p",null,"Descargue la carpeta lista de la plantilla terminada:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip"},"Descargar")))}m.isMDXComponent=!0},3905:function(a,t,e){e.d(t,{Zo:function(){return s},kt:function(){return m}});var n=e(67294);function o(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function d(a,t){if(null==a)return{};var e,n,o=function(a,t){if(null==a)return{};var e,n,o={},r=Object.keys(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||(o[e]=a[e]);return o}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(o[e]=a[e])}return o}var l=n.createContext({}),p=function(a){var t=n.useContext(l),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},s=function(a){var t=p(a.components);return n.createElement(l.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(a,t){var e=a.components,o=a.mdxType,r=a.originalType,l=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),c=p(e),m=o,_=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return e?n.createElement(_,i(i({ref:t},s),{},{components:e})):n.createElement(_,i({ref:t},s))}));function m(a,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof a||o){var r=e.length,i=new Array(r);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=a,d.mdxType="string"==typeof a?a:o,i[1]=d;for(var p=2;p<r;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},64965:function(a,t,e){t.Z=e.p+"assets/images/add-cardView-container-7fc2f2332d7b0138d7dd5c4b411dc8c7.png"},57635:function(a,t,e){t.Z=e.p+"assets/images/add-imageview-ac7290078a1a81764e844d6da968eca4.png"},68339:function(a,t,e){t.Z=e.p+"assets/images/add-title-b8dc18cabfd6a681f41597bf77cebf88.png"},40566:function(a,t,e){t.Z=e.p+"assets/images/android-project-2ed7a2cd6d171f4f13b3fca26acf7ccd.png"},99742:function(a,t,e){t.Z=e.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},50572:function(a,t,e){t.Z=e.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},50025:function(a,t,e){t.Z=e.p+"assets/images/final-list-form-template-c85056531c4702d0d8a0359ddff282ec.png"},68624:function(a,t,e){t.Z=e.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},22381:function(a,t,e){t.Z=e.p+"assets/images/xml-custom-listform-4bdc73ac881a40402406953495d5eaea.png"}}]);