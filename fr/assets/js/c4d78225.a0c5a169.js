(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2670],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50206:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"one-to-many-actions",title:"Liens 1 vers N - Actions"},s=void 0,c={unversionedId:"tutorials/relations/one-to-many-actions",id:"tutorials/relations/one-to-many-actions",isDocsHomePage:!1,title:"Liens 1 vers N - Actions",description:"We are now going to go a little bit further and create a task for a specific employee.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/fr/docs/next/tutorials/relations/one-to-many-actions",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-actions.md",version:"current",frontMatter:{id:"one-to-many-actions",title:"Liens 1 vers N - Actions"},sidebar:"tutorials",previous:{title:"1 vers N - Bouton personnalis\xe9",permalink:"/go-mobile/fr/docs/next/tutorials/relations/one-to-many-custom-button"},next:{title:"Relation interactions",permalink:"/go-mobile/fr/docs/next/tutorials/relations/relation-interactions"}},u=[{value:"Cr\xe9er une action addProject",id:"cr\xe9er-une-action-addproject",children:[]},{value:"Sur une action app mobile",id:"sur-une-action-app-mobile",children:[]},{value:"M\xe9thode addProject",id:"m\xe9thode-addproject",children:[]}],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are now going to go a little bit further and ",(0,a.kt)("strong",{parentName:"p"},"create a task for a specific employee"),"."),(0,a.kt)("p",null,"It is very easy to create an entity using ",(0,a.kt)("strong",{parentName:"p"},"parent Entity")," !"),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Projet Starter")),(0,a.kt)("h2",{id:"cr\xe9er-une-action-addproject"},"Cr\xe9er une action addProject"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ouvrez l'\xe9diteur de projet et cliquez sur la section Action.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"addProject")," Action"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create addProject Method",src:n(97163).Z})),(0,a.kt)("h2",{id:"sur-une-action-app-mobile"},"Sur une action app mobile"),(0,a.kt)("p",null,"The only thing you have to do is defining the ",(0,a.kt)("strong",{parentName:"p"},"addProject")," action in the ",(0,a.kt)("strong",{parentName:"p"},"On Mobile App Action method")," as follows :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n\n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,a.kt)("h2",{id:"m\xe9thode-addproject"},"M\xe9thode addProject"),(0,a.kt)("p",null,"Then enter thoses lines in your ",(0,a.kt)("strong",{parentName:"p"},"addProject Method"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds[$in.dataClass].new()  //Cr\xe9er une r\xe9f\xe9rence\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $primaryKey:=$in.parent.primaryKey   //Lire cl\xe9 primaire parente \n\n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n\n  $inverseRelationName:=$in.entity.relationName   //Lire nom du lien parent\n\n    $entity[$inverseRelationName]:=$parent\n\n    $status:=$entity.save()  //sauvegarder l\'entit\xe9\n\n    $out.success:=True  // notifier l\'application que l\'action est r\xe9ussie\n\n    $out.dataSynchro:=True  // notifier l\'application pour mettre \xe0 jour la s\xe9lection\n\n    $out.statusText:="Task added"\n\n    $out.close:=True\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n')),(0,a.kt)("p",null,"And that's it you can then add some task to your employees easily using the parent Entity !"),(0,a.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Download")))}d.isMDXComponent=!0},97163:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);