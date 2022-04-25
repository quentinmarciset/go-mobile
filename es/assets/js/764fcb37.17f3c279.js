"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[932],{29260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],c={id:"one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones"},s=void 0,l={unversionedId:"tutorials/relations/one-to-many-actions",id:"version-19-R3/tutorials/relations/one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones",description:"Ahora vamos a ir un poco m\xe1s lejos y crear una tarea para un empleado espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/es/docs/19-R3/tutorials/relations/one-to-many-actions",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/relations/one-to-many-actions.md",tags:[],version:"19-R3",frontMatter:{id:"one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones"},sidebar:"version-19-R3/tutorials",previous:{title:"Uno a Muchos - Bot\xf3n personalizado",permalink:"/go-mobile/es/docs/19-R3/tutorials/relations/one-to-many-custom-button"},next:{title:"Interacciones entre relaciones",permalink:"/go-mobile/es/docs/19-R3/tutorials/relations/relation-interactions"}},u={},p=[{value:"Crear una acci\xf3n addProject",id:"crear-una-acci\xf3n-addproject",level:2},{value:"M\xe9todo On Mobile App Action",id:"m\xe9todo-on-mobile-app-action",level:2},{value:"M\xe9todo addProject",id:"m\xe9todo-addproject",level:2}],d={toc:p};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ahora vamos a ir un poco m\xe1s lejos y ",(0,o.kt)("strong",{parentName:"p"},"crear una tarea para un empleado espec\xedfico"),"."),(0,o.kt)("p",null,"\xa1Es muy f\xe1cil crear una entidad utilizando una ",(0,o.kt)("strong",{parentName:"p"},"Entidad padre"),"!"),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Starter project")),(0,o.kt)("h2",{id:"crear-una-acci\xf3n-addproject"},"Crear una acci\xf3n addProject"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Abra el editor del proyecto y vaya a la secci\xf3n Action.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A\xf1adir una acci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"addProject")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create addProject Method",src:n(56271).Z,width:"2164",height:"2140"})),(0,o.kt)("h2",{id:"m\xe9todo-on-mobile-app-action"},"M\xe9todo On Mobile App Action"),(0,o.kt)("p",null,"Lo \xfanico que debe hacer es definir la acci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"addProject")," en el ",(0,o.kt)("strong",{parentName:"p"},"m\xe9todo On Mobile App Action")," de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n\n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,o.kt)("h2",{id:"m\xe9todo-addproject"},"M\xe9todo addProject"),(0,o.kt)("p",null,"Luego introduzca esas l\xedneas de c\xf3digo en su ",(0,o.kt)("strong",{parentName:"p"},"addProject Method"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds[$in.dataClass].new()  //Crear una referencia\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $primaryKey:=$in.parent.primaryKey   //Get parent primary key\n\n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n\n  $inverseRelationName:=$in.entity.relationName   //Obtener nombre de la relaci\xf3n padre\n\n    $entity[$inverseRelationName]:=$parent\n\n    $status:=$entity.save()  //guardar la entidad\n\n    $out.success:=True  // notificar App que la acci\xf3n es exitosa\n\n    $out.dataSynchro:=True  // notificar App para refrescar la selecci\xf3n\n\n    $out.statusText:="Task added"\n\n    $out.close:=True\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n')),(0,o.kt)("p",null,"\xa1Y eso es todo, puede agregar alguna tarea a sus empleados f\xe1cilmente usando la entidad padre!"),(0,o.kt)("p",null,"Descargar el proyecto terminado:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Descargar")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56271:function(e,t,n){t.Z=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);