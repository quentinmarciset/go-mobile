(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[667],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7815:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"define-first-action",title:"Definir una primera acci\xf3n"},c=void 0,l={unversionedId:"tutorials/actions/define-first-action",id:"tutorials/actions/define-first-action",isDocsHomePage:!1,title:"Definir una primera acci\xf3n",description:"En este tutorial, vamos a trabajar en una aplicaci\xf3n Tasks iOS y veremos c\xf3mo lidiar con las acciones en esta aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/es/docs/tutorials/actions/define-first-action",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/define-first-action.md",version:"current",frontMatter:{id:"define-first-action",title:"Definir una primera acci\xf3n"},sidebar:"tutorials",previous:{title:"Comencemos",permalink:"/go-mobile/es/docs/tutorials/actions/getting-started"},next:{title:"A\xf1adir acciones a las plantillas",permalink:"/go-mobile/es/docs/tutorials/actions/adding-actions-template"}},p=[{value:"Acciones de entidad",id:"acciones-de-entidad",children:[{value:"PASO 1. Acciones de entidad en la secci\xf3n Actions",id:"paso-1-acciones-de-entidad-en-la-secci\xf3n-actions",children:[]},{value:"PASO 2. Crear y editar el m\xe9todo On Mobile App Action",id:"paso-2-crear-y-editar-el-m\xe9todo-on-mobile-app-action",children:[]},{value:"PASO 3. Crear un m\xe9todo &quot;modifyStatus&quot;",id:"paso-3-crear-un-m\xe9todo-modifystatus",children:[]}]},{value:"Acciones de tabla",id:"acciones-de-tabla",children:[{value:"PASO 1. Acciones de tabla en la secci\xf3n Actions",id:"paso-1-acciones-de-tabla-en-la-secci\xf3n-actions",children:[]},{value:"PASO 2. Modificar el m\xe9todo Action",id:"paso-2-modificar-el-m\xe9todo-action",children:[]},{value:"PASO 3. Crear un m\xe9todo &quot;postponeAll&quot;",id:"paso-3-crear-un-m\xe9todo-postponeall",children:[]}]},{value:"\xbfQu\xe9 hacer ahora?",id:"\xbfqu\xe9-hacer-ahora",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"En este tutorial, vamos a trabajar en una aplicaci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Tasks iOS")," y veremos c\xf3mo lidiar con las acciones en esta aplicaci\xf3n."),(0,i.kt)("p",null,"B\xe1sicamente, lo que queremos hacer en una ",(0,i.kt)("strong",{parentName:"p"},"aplicaci\xf3n Task")," es cambiar el ",(0,i.kt)("strong",{parentName:"p"},"estado")," y el ",(0,i.kt)("strong",{parentName:"p"},"porcentaje de finalizaci\xf3n")," de una tarea individualmente."),(0,i.kt)("p",null,"M\xe1s globalmente, queremos ",(0,i.kt)("strong",{parentName:"p"},"cambiar el estado de todas las tareas")," a pospuesto o en progreso, por ejemplo."),(0,i.kt)("p",null,"Descargue el ",(0,i.kt)("strong",{parentName:"p"},"proyect Starter")," y vaya directamente a la secci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Actions"),"."),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Descargar")),(0,i.kt)("p",null,"Puede definir acciones para dos niveles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Acciones de entidad"),(0,i.kt)("li",{parentName:"ul"},"Acciones de tabla")),(0,i.kt)("p",null,"Centr\xe9monos primero en las acciones de entidad"),(0,i.kt)("h2",{id:"acciones-de-entidad"},"Acciones de entidad"),(0,i.kt)("h3",{id:"paso-1-acciones-de-entidad-en-la-secci\xf3n-actions"},"PASO 1. Acciones de entidad en la secci\xf3n Actions"),(0,i.kt)("p",null,"En esta secci\xf3n Actions, podr\xe1 definir todas los ",(0,i.kt)("strong",{parentName:"p"},"nombres"),", los ",(0,i.kt)("strong",{parentName:"p"},"iconos"),", las ",(0,i.kt)("strong",{parentName:"p"},"etiquetas")," de sus acciones, as\xed como tambi\xe9n las ",(0,i.kt)("strong",{parentName:"p"},"tablas")," en las cuales desea que la acci\xf3n est\xe9 disponible y el ",(0,i.kt)("strong",{parentName:"p"},"alcance")," de las acciones."),(0,i.kt)("p",null,"La secci\xf3n Actions est\xe1 bastante vac\xeda cuando la abre por primera vez, as\xed que haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"p"},'M\xe1s "+"')," en la parte inferior izquierda para agregar su primera acci\xf3n."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create action",src:n(51469).Z})),(0,i.kt)("p",null,"Primero definamos una acci\xf3n que ",(0,i.kt)("strong",{parentName:"p"},"cambiar\xe1 el estado de una tarea"),' a "Completa" y pondr\xe1 el ',(0,i.kt)("strong",{parentName:"p"},"porcentaje de finalizaci\xf3n")," en 100%."),(0,i.kt)("p",null,"Para definir esta acci\xf3n:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"taskDone")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Nombres")),(0,i.kt)("li",{parentName:"ul"},"Seleccione el ",(0,i.kt)("strong",{parentName:"li"},'icono "Done"')," de la librer\xeda de iconos"),(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"Done")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Etiquetas cortas")),(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"Task Done")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Etiquetas largas")),(0,i.kt)("li",{parentName:"ul"},"Seleccione la tabla ",(0,i.kt)("strong",{parentName:"li"},"Tasks")," a partir de la lista propuesta en ",(0,i.kt)("strong",{parentName:"li"},"Tables")),(0,i.kt)("li",{parentName:"ul"},"Seleccione ",(0,i.kt)("strong",{parentName:"li"},"Entidad actual")," en la lista ",(0,i.kt)("strong",{parentName:"li"},"Alcance"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Done action definition",src:n(56804).Z})),(0,i.kt)("h3",{id:"paso-2-crear-y-editar-el-m\xe9todo-on-mobile-app-action"},"PASO 2. Crear y editar el m\xe9todo On Mobile App Action"),(0,i.kt)("p",null,"Ahora que su acci\xf3n est\xe1 definida en el editor de proyectos, debe crear el m\xe9todo base ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html"},"On Mobile App Action")),"."),(0,i.kt)("p",null,"Para hacerlo, haga clic en el ",(0,i.kt)("strong",{parentName:"p"},"bot\xf3n Crear")," en la parte inferior derecha de la tabla de acciones e ingrese el siguiente c\xf3digo en el m\xe9todo base ",(0,i.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,i.kt)("h3",{id:"paso-3-crear-un-m\xe9todo-modifystatus"},'PASO 3. Crear un m\xe9todo "modifyStatus"'),(0,i.kt)("p",null,"Una vez que su m\xe9todo base ha sido editado, debe crear un m\xe9todo ",(0,i.kt)("strong",{parentName:"p"},"modifyStatus")," que har\xe1 el trabajo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity.CompletePercentage:=$in.CompletePercentage\n\n    $entity.Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notify App that action is successful\n        $out.dataSynchro:=True  // notify App to refresh this entity\n\n    Else\n\n        $out:=$status  // return status to the App\n\n    End if\n\nElse\n\n    $out.success:=False  // notify App that action failed\n\nEnd if\n\n$0:=$out\n\n')),(0,i.kt)("p",null,"Cree y ejecute su aplicaci\xf3n y \xa1listo! Su ",(0,i.kt)("strong",{parentName:"p"},"acci\xf3n Done ")," est\xe1 disponible cuando desliza hacia la izquierda una celda en el formulario Lista, as\xed como cuando hace clic en el ",(0,i.kt)("strong",{parentName:"p"},"bot\xf3n gen\xe9rico Actions")," en la barra de navegaci\xf3n del formulario detallado."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Done action",src:n(65854).Z})),(0,i.kt)("h2",{id:"acciones-de-tabla"},"Acciones de tabla"),(0,i.kt)("h3",{id:"paso-1-acciones-de-tabla-en-la-secci\xf3n-actions"},"PASO 1. Acciones de tabla en la secci\xf3n Actions"),(0,i.kt)("p",null,"Ahora, imagine que se va de vacaciones y quiere ",(0,i.kt)("strong",{parentName:"p"},"cambiar el estado de todas sus tareas"),' a "Pospuesto".'),(0,i.kt)("p",null,"Definamos esta acci\xf3n desde la secci\xf3n Action:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"postponeAll")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Nombres")),(0,i.kt)("li",{parentName:"ul"},"Seleccione el ",(0,i.kt)("strong",{parentName:"li"},'icono "Postponed"')," de la librer\xeda de iconos"),(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"Postpone All")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Etiquetas cortas")),(0,i.kt)("li",{parentName:"ul"},"Introduzca ",(0,i.kt)("strong",{parentName:"li"},"Postpone All")," en el campo ",(0,i.kt)("strong",{parentName:"li"},"Etiquetas largas")),(0,i.kt)("li",{parentName:"ul"},"Seleccione la tabla ",(0,i.kt)("strong",{parentName:"li"},"Tasks")," a partir de la lista propuesta en ",(0,i.kt)("strong",{parentName:"li"},"Tables")),(0,i.kt)("li",{parentName:"ul"},"Seleccione ",(0,i.kt)("strong",{parentName:"li"},"Table")," de la lista ",(0,i.kt)("strong",{parentName:"li"},"Alcance"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postponed action definition",src:n(65227).Z})),(0,i.kt)("h3",{id:"paso-2-modificar-el-m\xe9todo-action"},"PASO 2. Modificar el m\xe9todo Action"),(0,i.kt)("p",null,"Haga clic el ",(0,i.kt)("strong",{parentName:"p"},"bot\xf3n Editar")," en la parte inferior derecha de la tabla action para completar el m\xe9todo base ",(0,i.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,i.kt)("h3",{id:"paso-3-crear-un-m\xe9todo-postponeall"},'PASO 3. Crear un m\xe9todo "postponeAll"'),(0,i.kt)("p",null,"A medida que crea el m\xe9todo ",(0,i.kt)("strong",{parentName:"p"},"modifyStatus"),", siga el mismo proceso y cree un nuevo m\xe9todo ",(0,i.kt)("strong",{parentName:"p"},"postponeAll")," que modificar\xe1 todo el estado del registro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity.Status:=$in.Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n\nElse\n\n    $out.errors:=New collection("No Selection")\n\nEnd if\n\n$0:=$out\n\n')),(0,i.kt)("p",null,"\xa1Cree y ejecute su aplicaci\xf3n! Encontrar\xe1 un nuevo ",(0,i.kt)("strong",{parentName:"p"},"bot\xf3n gen\xe9rico")," en la barra de navegaci\xf3n de su formulario Lista. Haga clic en \xe9l para activar la acci\xf3n ",(0,i.kt)("strong",{parentName:"p"},"Postpone All"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result Postponed Action",src:n(91271).Z})),(0,i.kt)("h2",{id:"\xbfqu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,i.kt)("p",null,"\xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Ahora puede agregar todas las acciones que necesita a su aplicaci\xf3n Tasks!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result All Action",src:n(2668).Z})),(0,i.kt)("p",null,"Descargue el proyecto terminado que incluye varias acciones:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Descargar")))}d.isMDXComponent=!0},51469:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},56804:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},65854:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},2668:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},91271:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},65227:function(e,t,n){"use strict";t.Z=n.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);