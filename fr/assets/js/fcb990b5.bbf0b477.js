(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7766],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19231:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),s=["components"],r={id:"define-first-action",title:"D\xe9finir une premi\xe8re action"},l=void 0,c={unversionedId:"tutorials/actions/define-first-action",id:"tutorials/actions/define-first-action",isDocsHomePage:!1,title:"D\xe9finir une premi\xe8re action",description:"Dans ce tutoriel, nous allons travailler sur une application Tasks iOS et voir comment g\xe9rer des actions dans cette application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/fr/docs/tutorials/actions/define-first-action",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/define-first-action.md",version:"current",frontMatter:{id:"define-first-action",title:"D\xe9finir une premi\xe8re action"},sidebar:"tutorials",previous:{title:"Prise en main",permalink:"/go-mobile/fr/docs/tutorials/actions/getting-started"},next:{title:"Ajouter des actions aux mod\xe8les",permalink:"/go-mobile/fr/docs/tutorials/actions/adding-actions-template"}},u=[{value:"Actions d&#39;entit\xe9",id:"actions-dentit\xe9",children:[{value:"\xc9TAPE 1. Actions d&#39;entit\xe9 dans la section Actions",id:"\xe9tape-1-actions-dentit\xe9-dans-la-section-actions",children:[]},{value:"\xc9TAPE 2. Cr\xe9er et modifier la m\xe9thode base &quot;Sur une action app mobile&quot;",id:"\xe9tape-2-cr\xe9er-et-modifier-la-m\xe9thode-base-sur-une-action-app-mobile",children:[]},{value:"\xc9TAPE 3. Cr\xe9er une m\xe9thode &quot;modifyStatus&quot;",id:"\xe9tape-3-cr\xe9er-une-m\xe9thode-modifystatus",children:[]}]},{value:"Actions de table",id:"actions-de-table",children:[{value:"\xc9TAPE 1. Actions de table dans la section Actions",id:"\xe9tape-1-actions-de-table-dans-la-section-actions",children:[]},{value:"\xc9TAPE 2. Modifier la m\xe9thode action",id:"\xe9tape-2-modifier-la-m\xe9thode-action",children:[]},{value:"\xc9TAPE 3. Cr\xe9er une m\xe9thode &quot;postponeAll&quot;",id:"\xe9tape-3-cr\xe9er-une-m\xe9thode-postponeall",children:[]}]},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dans ce tutoriel, nous allons travailler sur une ",(0,i.kt)("strong",{parentName:"p"},"application Tasks iOS")," et voir comment g\xe9rer des actions dans cette application."),(0,i.kt)("p",null,"Nous souhaitons essentiellement changer le ",(0,i.kt)("strong",{parentName:"p"},"statut")," et le ",(0,i.kt)("strong",{parentName:"p"},"pourcentage d'ach\xe8vement")," d'une t\xe2che dans ",(0,i.kt)("strong",{parentName:"p"},"Task app"),"."),(0,i.kt)("p",null,"Plus globalement, nous souhaitons ",(0,i.kt)("strong",{parentName:"p"},"modifier le statut de toutes les t\xe2ches"),' et le d\xe9finir, par exemple, sur "report\xe9" et "en cours".'),(0,i.kt)("p",null,"T\xe9l\xe9chargez le ",(0,i.kt)("strong",{parentName:"p"},"projet Starter")," et reportez-vous directement \xe0 la ",(0,i.kt)("strong",{parentName:"p"},"section Actions"),"."),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Download")),(0,i.kt)("p",null,"You can define actions for two levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actions d'entit\xe9"),(0,i.kt)("li",{parentName:"ul"},"Actions de table")),(0,i.kt)("p",null,"Concentrons-nous d\u2019abord sur les actions d'entit\xe9\xa0!"),(0,i.kt)("h2",{id:"actions-dentit\xe9"},"Actions d'entit\xe9"),(0,i.kt)("h3",{id:"\xe9tape-1-actions-dentit\xe9-dans-la-section-actions"},"\xc9TAPE 1. Actions d'entit\xe9 dans la section Actions"),(0,i.kt)("p",null,"Dans cette section des Actions, vous pourrez d\xe9finir le ",(0,i.kt)("strong",{parentName:"p"},"nom"),", les ",(0,i.kt)("strong",{parentName:"p"},"ic\xf4nes")," et les ",(0,i.kt)("strong",{parentName:"p"},"libell\xe9s")," de vos actions, mais aussi les ",(0,i.kt)("strong",{parentName:"p"},"tables")," dans lesquelles vous souhaitez rendre l\u2019action disponible ainsi que la ",(0,i.kt)("strong",{parentName:"p"},"port\xe9e")," des actions."),(0,i.kt)("p",null,"La section Actions est assez vide lorsque vous l\u2019ouvrez pour la premi\xe8re fois. Cliquez sur le ",(0,i.kt)("strong",{parentName:"p"},'bouton "+"')," en bas \xe0 gauche pour ajouter votre premi\xe8re action\xa0!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create action",src:n(22213).Z})),(0,i.kt)("p",null,"D\xe9finissons tout d\u2019abord une action qui permettra de ",(0,i.kt)("strong",{parentName:"p"},"changer le statut d'une t\xe2che")," sur \xab\xa0Complete\xa0\xbb et le ",(0,i.kt)("strong",{parentName:"p"},"pourcentage d\u2019ach\xe8vement")," \xe0 100 %."),(0,i.kt)("p",null,"Pour d\xe9finir cette action\xa0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"taskDone")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Noms")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'",(0,i.kt)("strong",{parentName:"li"},'ic\xf4ne "Done"')," \xe0 partir de la biblioth\xe8que d'ic\xf4nes"),(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"Done")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Libell\xe9s courts")),(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"Task Done")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Libell\xe9s longs")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table ",(0,i.kt)("strong",{parentName:"li"},"Tasks")," \xe0 partir de la liste propos\xe9e dans ",(0,i.kt)("strong",{parentName:"li"},"Tables")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,i.kt)("strong",{parentName:"li"},"Entit\xe9 courante")," \xe0 partir de la liste propos\xe9e dans ",(0,i.kt)("strong",{parentName:"li"},"Port\xe9e"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Done action definition",src:n(42116).Z})),(0,i.kt)("h3",{id:"\xe9tape-2-cr\xe9er-et-modifier-la-m\xe9thode-base-sur-une-action-app-mobile"},'\xc9TAPE 2. Cr\xe9er et modifier la m\xe9thode base "Sur une action app mobile"'),(0,i.kt)("p",null,"Now that your action is defined in the Project Editor, you have to create the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html"},"On Mobile App Action"))," database Method."),(0,i.kt)("p",null,"Pour ce faire, cliquez sur le ",(0,i.kt)("strong",{parentName:"p"},"bouton Editer...")," en bas \xe0 droite du tableau des actions et saisissez le code suivant dans la m\xe9thode base : ",(0,i.kt)("strong",{parentName:"p"},"Sur une action app mobile"),"\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,i.kt)("h3",{id:"\xe9tape-3-cr\xe9er-une-m\xe9thode-modifystatus"},'\xc9TAPE 3. Cr\xe9er une m\xe9thode "modifyStatus"'),(0,i.kt)("p",null,"Une fois votre m\xe9thode base modifi\xe9e, vous devez cr\xe9er une m\xe9thode ",(0,i.kt)("strong",{parentName:"p"},"modifyStatus")," qui permettra de r\xe9aliser la t\xe2che demand\xe9e :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity.CompletePercentage:=$in.CompletePercentage\n\n    $entity.Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notify App that action is successful\n        $out.dataSynchro:=True  // notify App to refresh this entity\n\n    Else\n\n        $out:=$status  // return status to the App\n\n    End if\n\nElse\n\n    $out.success:=False  // notify App that action failed\n\nEnd if\n\n$0:=$out\n\n')),(0,i.kt)("p",null,"G\xe9n\xe9rez et ex\xe9cutez votre application... et voil\xe0 ! Votre ",(0,i.kt)("strong",{parentName:"p"},"action Done")," est disponible lorsque vous faites coulisser une cellule vers la gauche dans le formulaire Liste, et lorsque vous cliquez sur le ",(0,i.kt)("strong",{parentName:"p"},"bouton g\xe9n\xe9rique Actions")," dans la barre de navigation du formulaire d\xe9taill\xe9."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Done action",src:n(8122).Z})),(0,i.kt)("h2",{id:"actions-de-table"},"Actions de table"),(0,i.kt)("h3",{id:"\xe9tape-1-actions-de-table-dans-la-section-actions"},"\xc9TAPE 1. Actions de table dans la section Actions"),(0,i.kt)("p",null,"Imaginez maintenant que vous partez en vacances et que vous souhaitez ",(0,i.kt)("strong",{parentName:"p"},"modifier le statut de vos t\xe2ches"),' et le d\xe9finir sur "Report\xe9".'),(0,i.kt)("p",null,"Nous allons d\xe9finir cette action depuis la section Actions\xa0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"postponeAll")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Noms")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'",(0,i.kt)("strong",{parentName:"li"},'ic\xf4ne "Postponed"')," \xe0 partir de la biblioth\xe8que d'ic\xf4nes"),(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"Postpone All")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Libell\xe9s courts")),(0,i.kt)("li",{parentName:"ul"},"Saisissez ",(0,i.kt)("strong",{parentName:"li"},"Postpone All")," dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Libell\xe9s longs")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table ",(0,i.kt)("strong",{parentName:"li"},"Tasks")," \xe0 partir de la liste propos\xe9e dans ",(0,i.kt)("strong",{parentName:"li"},"Tables")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,i.kt)("strong",{parentName:"li"},"Table")," \xe0 partir de la liste propos\xe9e dans ",(0,i.kt)("strong",{parentName:"li"},"Port\xe9e"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Postponed action definition",src:n(89825).Z})),(0,i.kt)("h3",{id:"\xe9tape-2-modifier-la-m\xe9thode-action"},"\xc9TAPE 2. Modifier la m\xe9thode action"),(0,i.kt)("p",null,"Cliquez sur le ",(0,i.kt)("strong",{parentName:"p"},"bouton Cr\xe9er...")," en bas \xe0 droite du tableau des actions et saisissez le code suivant dans la m\xe9thode base : ",(0,i.kt)("strong",{parentName:"p"},"Sur une action app mobile"),"\xa0 :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,i.kt)("h3",{id:"\xe9tape-3-cr\xe9er-une-m\xe9thode-postponeall"},'\xc9TAPE 3. Cr\xe9er une m\xe9thode "postponeAll"'),(0,i.kt)("p",null,"Tout comme vous avez cr\xe9\xe9 la m\xe9thode ",(0,i.kt)("strong",{parentName:"p"},"modifyStatus"),", suivez les m\xeames \xe9tapes et cr\xe9ez une nouvelle m\xe9thode ",(0,i.kt)("strong",{parentName:"p"},"postponeAll")," qui permettra de modifier le statut de tous les enregistrements :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity.Status:=$in.Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n\nElse\n\n    $out.errors:=New collection("No Selection")\n\nEnd if\n\n$0:=$out\n\n')),(0,i.kt)("p",null,"G\xe9n\xe9rez et ex\xe9cutez votre projet ! Vous trouverez un nouveau ",(0,i.kt)("strong",{parentName:"p"},"bouton g\xe9n\xe9rique")," dans la barre de navigation de votre formulaire Liste. Cliquez dessus pour d\xe9clencher l'action ",(0,i.kt)("strong",{parentName:"p"},"Postpone All"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result Postponed Action",src:n(23353).Z})),(0,i.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,i.kt)("p",null,"F\xe9licitations\xa0! Vous venez d'ajouter 2 actions \xe0 votre application iOS. Vous pouvez d\xe9sormais ajouter toutes les actions n\xe9cessaires \xe0 votre application Tasks !"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result All Action",src:n(65935).Z})),(0,i.kt)("p",null,"Download the completed project that includes various actions:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Download")))}d.isMDXComponent=!0},22213:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},42116:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},8122:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},65935:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},23353:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},89825:function(e,t,n){"use strict";t.Z=n.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);