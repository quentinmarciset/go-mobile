"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9135],{19148:function(a,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var o=e(83117),n=e(80102),r=(e(67294),e(3905)),i=["components"],d={id:"list-form-layout",title:"Layout Android"},l=void 0,p={unversionedId:"tutorials/creating-list-forms/list-form-layout",id:"version-19-R5/tutorials/creating-list-forms/list-form-layout",title:"Layout Android",description:"Nesta se\xe7\xe3o voc\xea ver\xe1 como criar sua interface de formul\xe1rio lista Android com Android Studio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-layout",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-layout",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-layout",title:"Layout Android"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-storyboard"},next:{title:"Modelos de formul\xe1rio detalhado",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template"}},s={},u=[{value:"Abrir um arquivo layout com Android Studio",id:"abrir-um-arquivo-layout-com-android-studio",level:2},{value:"Adicione um container CardView",id:"adicione-um-container-cardview",level:2},{value:"Adicione uma &quot;Image View&quot;",id:"adicione-uma-image-view",level:2},{value:"Adicionar um t\xedtulo",id:"adicionar-um-t\xedtulo",level:2},{value:"Adicionar um subt\xedtulo",id:"adicionar-um-subt\xedtulo",level:2},{value:"Personalizar a etiqueta",id:"personalizar-a-etiqueta",level:2},{value:"Como entrar os dados em suas c\xe9lulas",id:"como-entrar-os-dados-em-suas-c\xe9lulas",level:2},{value:"Image View",id:"image-view",level:3},{value:"Etiquetas",id:"etiquetas",level:3},{value:"O que fazer agora?",id:"o-que-fazer-agora",level:2}],m={toc:u};function c(a){var t=a.components,d=(0,n.Z)(a,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nesta se\xe7\xe3o voc\xea ver\xe1 como criar sua interface de formul\xe1rio lista Android com Android Studio."),(0,r.kt)("p",null,"Aqui est\xe1 o resultado que queremos atingir:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom listform",src:e(37127).Z,width:"2600",height:"1792"})),(0,r.kt)("p",null,"Para cada c\xe9lula, vamos adicionar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Imagem de perfil"),(0,r.kt)("li",{parentName:"ul"},"Titulo"),(0,r.kt)("li",{parentName:"ul"},"Subt\xedtulo")),(0,r.kt)("h2",{id:"abrir-um-arquivo-layout-com-android-studio"},"Abrir um arquivo layout com Android Studio"),(0,r.kt)("p",null,"A melhor forma de editar ou criar um modelo \xe9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abrir o Studio Android e criar um novo projeto m\xf3vel vazio clicando no Arquivo > New > New Project...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selecionar o modelo Empty Activity"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android Studio project creation",src:e(60106).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure seu projeto e clique em  ",(0,r.kt)("strong",{parentName:"li"},"Finish"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Android project",src:e(35093).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copie o arquivo layout.xml no layout app > res > soltando diretamente na pasta de layout de projeto")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy layout.xml file",src:e(27023).Z,width:"1642",height:"610"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nesse ponto deve ter:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android project",src:e(2919).Z,width:"2798",height:"2030"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique na op\xe7\xe3o direita superior",(0,r.kt)("strong",{parentName:"li"},"Split")," para visualizar a visualiza\xe7\xe3o do modeloassim como c\xf3digo xml.")),(0,r.kt)("p",null,"Est\xe1 vazio, ent\xe3o vamos adicionar conte\xfado!"),(0,r.kt)("h2",{id:"adicione-um-container-cardview"},"Adicione um container CardView"),(0,r.kt)("p",null,"Para melhorar a renderiza\xe7\xe3o de suas c\xe9lulas vamos adicionar um ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/cardview"},"CardView"),"."),(0,r.kt)("p",null,"Adicionar um CardView container permite exibir as c\xe9lulas de seu formul\xe1rio lista como cartelas e d\xe1 a habilidade de adicionar sombras, eleva\xe7\xe3o, cantos arredondados, cor de fundo..."),(0,r.kt)("p",null,"Vamos adicionar o arquivo layout. N\xe3o esque\xe7a de fechar o container adicionando ",(0,r.kt)("inlineCode",{parentName:"p"},"</androidx.cardview.widget. CardView>")," logo antes ",(0,r.kt)("inlineCode",{parentName:"p"},"</layout>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'   <androidx.cardview.widget.\n\n        CardView\n                android:id="@+id/cardView"\n                android:layout_width="wrap_content"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="8dp"\n                app:cardCornerRadius="20dp"\n                app:layout_constraintStart_toStartOf="parent"\n\n            <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" /> \n\n            </androidx.cardview.widget.\n\n')),(0,r.kt)("p",null,"\xc9 crucial para ",(0,r.kt)("strong",{parentName:"p"},"d\xe1 IDs a seus elementos de layout")," para poder fazer refer\xeancia e eles depois e seu posicionamento relativo entre si."),(0,r.kt)("p",null,"Defina a  ",(0,r.kt)("strong",{parentName:"p"},"largura")," e ",(0,r.kt)("strong",{parentName:"p"},"altura")," de seu container,  ",(0,r.kt)("strong",{parentName:"p"},"margens")," e como queremos que o conte\xfado ocupe todo o espa\xe7o pai (menos as margens) s\xf3 precisamos ",(0,r.kt)("strong",{parentName:"p"},"adicionar restri\xe7\xf5es"),"."),(0,r.kt)("p",null,"Aqui est\xe1 o c\xf3digo de layout completo nesse est\xe1gio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget. CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n        <androidx.constraintlayout.widget. ConstraintLayout\n        android:layout_width="match_parent"\n            android:layout_height="wrap_content">\n\n        </androidx.constraintlayout.widget. ConstraintLayout>\n\n    </androidx.cardview.widget.\n\n')),(0,r.kt)("p",null,"E aqui est\xe1 a preview de resultado que deve obter:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add CardView container",src:e(47267).Z,width:"2928",height:"2066"})),(0,r.kt)("h2",{id:"adicione-uma-image-view"},'Adicione uma "Image View"'),(0,r.kt)("p",null,"Para ter uma boa exibi\xe7\xe3o de Imagem vamos usar uma CardView container quando adicionamos um canto arredondado para a ImageView ter um design melhor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'            <androidx.cardview.widget. CardView\n                android:id="@+id/cardView"\n                android:layout_width="wrap_content"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="8dp"\n                app:cardCornerRadius="20dp"\n                app:layout_constraintStart_toStartOf="parent"\n\n            <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" /> \n\n            </androidx.cardview.widget.\n')),(0,r.kt)("p",null,"Como pode ver ImageView est\xe1 embebido no CardView. Isso permite adicionar bordas arrendondadas."),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," permite fixar, bind o valor de imagem que est\xe1 situado na posi\xe7\xe3o 1 do arquivo svg definido previamente."),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," est\xe1 simplesmente para exibir um valor provis\xf3rio para ImageView."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add ImageView",src:e(87416).Z,width:"2928",height:"2066"})),(0,r.kt)("h2",{id:"adicionar-um-t\xedtulo"},"Adicionar um t\xedtulo"),(0,r.kt)("p",null,"Aqui queremos adicioanr um t\xedtulo para a direita da CardView que contenha uma ImageView."),(0,r.kt)("p",null,"Para fazer isso vamos adicionar um TextView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <TextView\n                android:id="@+id/__SPECIFIC_ID_2__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="20dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="6dp"\n                android:scrollbars="none"\n                android:text="__TEXT_2__"\n                android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"\n                android:textColor="@color/black"\n                android:textStyle="bold"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toTopOf="parent"\n                tools:text="My field 2" />\n\n')),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__TEXT_2__"')," permite fixar, bind o valor de imagem que est\xe1 situado na posi\xe7\xe3o 2 do arquivo svg definido previamente."),(0,r.kt)("p",null,"Queremos que o ImageView e o TextView estejam alinhados ao topo. Para fazer isso, usamos a Id do TextView. Precisa adicionar esta linha para o CardView que inclui a imagem de perfil:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Title",src:e(40805).Z,width:"2616",height:"2042"})),(0,r.kt)("h2",{id:"adicionar-um-subt\xedtulo"},"Adicionar um subt\xedtulo"),(0,r.kt)("p",null,"Queremos adicionar um subt\xedtulo para esta c\xe9lula. Para isso precisa adicionar o mesmo bloco que o t\xedtulo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\n<TextView\n                android:id="@+id/__SPECIFIC_ID_3__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="8dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="50dp"\n                android:scrollbars="none"\n                android:text="__TEXT_3__"\n                android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"\n                   android:textColor="?colorPrimary"\n                app:layout_constraintBottom_toBottomOf="parent"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n                tools:text="My field 3" />\n')),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'app:text="__TEXT_3__"')," permite fixar, bind o valor de imagem que est\xe1 situado na posi\xe7\xe3o 2 do arquivo svg definido previamente."),(0,r.kt)("p",null,"Queremos que o subt\xedtulo esteja abaixo do t\xedtulo. Para fazer isso vamos uar a Id do TextView. S\xf3 precisa adicionar esta linha para o t\xedtulo TextView:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n')),(0,r.kt)("p",null,"Seu primeiro modelo formul\xe1rio lista:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final list form template",src:e(57735).Z,width:"2616",height:"2042"})),(0,r.kt)("p",null,"Aqui est\xe1 o c\xf3digo de layout completo nesse est\xe1gio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget. CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n    <androidx.constraintlayout.widget. ConstraintLayout\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content">\n\n        <androidx.cardview.widget. CardView\n            android:id="@+id/cardView"\n            android:layout_width="wrap_content"\n            android:layout_height="wrap_content"\n            android:layout_marginLeft="8dp"\n            app:cardCornerRadius="20dp"\n            app:layout_constraintStart_toStartOf="parent"\n            app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__">\n\n        <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" />\n\n        </androidx.cardview.widget. CardView>\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_2__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="20dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="6dp"\n            android:scrollbars="none"\n            android:text="__TEXT_2__"\n            android:textAppearance="@style/TextAppearance. Body1"\n            android:textColor="@color/black"\n            android:textStyle="bold"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toTopOf="parent"\n            app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n            tools:text="My field 2" />\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_3__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="8dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="50dp"\n            android:scrollbars="none"\n            android:text="__TEXT_3__"\n            android:textAppearance="@style/TextAppearance. Body1"\n            android:textColor="?colorPrimary"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n            tools:text="My field 3" />\n\n    </androidx.constraintlayout.widget. ConstraintLayout>\n\n    </androidx.cardview.widget.\n\n')),(0,r.kt)("h2",{id:"personalizar-a-etiqueta"},"Personalizar a etiqueta"),(0,r.kt)("p",null,"Aqui pode personalizar suas etiquetas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"color => android:textColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"weight => android:textStyle com os valores poss\xedveis ",(0,r.kt)("strong",{parentName:"p"},"normal"),", ",(0,r.kt)("strong",{parentName:"p"},"negrito")," ou ",(0,r.kt)("strong",{parentName:"p"},"it\xe1lico"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"apar\xeancia da fonte => android:textAppearance"))),(0,r.kt)("p",null,"Tentar manter a consist\xeancia em seu tamanho de layout de texto com apar\xeancia. A melhor maneira de conseguir isso \xe9 seguir o  ",(0,r.kt)("a",{parentName:"p",href:"https://material.io/design/typography/the-type-system.html#type-scale"},"Material Design type"),"."),(0,r.kt)("p",null,"Por exemplo, um TextView b\xe1sico deveria estar na escala ",(0,r.kt)("inlineCode",{parentName:"p"},"@Body1@"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'android:textAppearance="@style/TextAppearance. MaterialComponents. Body1"\n')),(0,r.kt)("h2",{id:"como-entrar-os-dados-em-suas-c\xe9lulas"},"Como entrar os dados em suas c\xe9lulas"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"Em nosso modelo de formul\xe1rio lista usamos ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,r.kt)("p",null,"Aqui supomos que a  ImageView seja a primeira vsita no svg, e sua ID de vista \xe9  ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". Se fosse a terceira vista, seria ",(0,r.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," e sua vista de ID seria ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,r.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,r.kt)("p",null,"Em nosso modelo formul\xe1rio lista usamos ",(0,r.kt)("inlineCode",{parentName:"p"},'android:text="__TEXT_2__"')," para o t\xedtulo."),(0,r.kt)("p",null,"Aqui supomos que o t\xedtulo seja a segunda vista no svg, e sua ID de vista \xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_2__"),"."),(0,r.kt)("h2",{id:"o-que-fazer-agora"},"O que fazer agora?"),(0,r.kt)("p",null,"Neste tutorial cobrimos o b\xe1sico da cria\xe7\xe3o de modelos de formul\xe1rio lista Android. Voc\xea j\xe1 pode criar seus pr\xf3prios modelos simples usando os recursos do Starter Project. Mas espere - ainda h\xe1 mais! No pr\xf3ximo tutorial, voc\xea vai aprender como construir modelos de formul\xe1rios detalhados Android!"),(0,r.kt)("p",null,"Baixe a pasta do modelo de lista completo:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip"},"Baixar")))}c.isMDXComponent=!0},3905:function(a,t,e){e.d(t,{Zo:function(){return s},kt:function(){return c}});var o=e(67294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,o)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function d(a,t){if(null==a)return{};var e,o,n=function(a,t){if(null==a)return{};var e,o,n={},r=Object.keys(a);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var l=o.createContext({}),p=function(a){var t=o.useContext(l),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},s=function(a){var t=p(a.components);return o.createElement(l.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(a,t){var e=a.components,n=a.mdxType,r=a.originalType,l=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),m=p(e),c=n,_=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return e?o.createElement(_,i(i({ref:t},s),{},{components:e})):o.createElement(_,i({ref:t},s))}));function c(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var r=e.length,i=new Array(r);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=a,d.mdxType="string"==typeof a?a:n,i[1]=d;for(var p=2;p<r;p++)i[p]=e[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},47267:function(a,t,e){t.Z=e.p+"assets/images/add-cardView-container-7fc2f2332d7b0138d7dd5c4b411dc8c7.png"},87416:function(a,t,e){t.Z=e.p+"assets/images/add-imageview-ac7290078a1a81764e844d6da968eca4.png"},40805:function(a,t,e){t.Z=e.p+"assets/images/add-title-b8dc18cabfd6a681f41597bf77cebf88.png"},2919:function(a,t,e){t.Z=e.p+"assets/images/android-project-2ed7a2cd6d171f4f13b3fca26acf7ccd.png"},35093:function(a,t,e){t.Z=e.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},27023:function(a,t,e){t.Z=e.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},57735:function(a,t,e){t.Z=e.p+"assets/images/final-list-form-template-c85056531c4702d0d8a0359ddff282ec.png"},60106:function(a,t,e){t.Z=e.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},37127:function(a,t,e){t.Z=e.p+"assets/images/xml-custom-listform-4bdc73ac881a40402406953495d5eaea.png"}}]);