(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7193],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},860:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"using-action-parameters",title:"Utiliser des param\xe8tres d'action"},l=void 0,c={unversionedId:"tutorials/actions/using-action-parameters",id:"tutorials/actions/using-action-parameters",isDocsHomePage:!1,title:"Utiliser des param\xe8tres d'action",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/fr/docs/tutorials/actions/using-action-parameters",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/using-action-parameters.md",version:"current",frontMatter:{id:"using-action-parameters",title:"Utiliser des param\xe8tres d'action"},sidebar:"tutorials",previous:{title:"Ajouter des actions aux mod\xe8les",permalink:"/go-mobile/fr/docs/tutorials/actions/adding-actions-template"},next:{title:"Many to One relations",permalink:"/go-mobile/fr/docs/tutorials/relations/many-to-one-relations"}},u=[{value:"\xc9TAPE 1. Add action",id:"\xe9tape-1-add-action",children:[]},{value:"\xc9TAPE 2. Edit action",id:"\xe9tape-2-edit-action",children:[]},{value:"\xc9TAPE 3. Delete action",id:"\xe9tape-3-delete-action",children:[]},{value:"\xc9TAPE 4. Action d&#39;envoi de commentaire",id:"\xe9tape-4-action-denvoi-de-commentaire",children:[]},{value:"STEP 5. Cr\xe9ation de la m\xe9thode base Sur une action app mobile",id:"step-5-cr\xe9ation-de-la-m\xe9thode-base-sur-une-action-app-mobile",children:[]},{value:"\xc9TAPE 6. Cr\xe9ation de toutes les m\xe9thodes n\xe9cessaires",id:"\xe9tape-6-cr\xe9ation-de-toutes-les-m\xe9thodes-n\xe9cessaires",children:[{value:"addAction",id:"addaction",children:[]},{value:"editAction",id:"editaction",children:[]},{value:"deleteAction",id:"deleteaction",children:[]},{value:"sendEmail",id:"sendemail",children:[]}]},{value:"\xc9TAPE 7. G\xe9n\xe9ration de l\u2019application",id:"\xe9tape-7-g\xe9n\xe9ration-de-lapplication",children:[]},{value:"\xc9TAPE 8. Where to go from here?",id:"\xe9tape-8-where-to-go-from-here",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,i.kt)("p",{parentName:"blockquote"},"Define action parameters to edit the content of your app.")),(0,i.kt)("p",null,"In the tutorial on defining actions, we discovered how to execute 4D code from an iOS app by defining actions from the actions section."),(0,i.kt)("p",null,"Dans ce tutoriel, nous irons encore plus loin et nous cr\xe9erons :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"une action d'ajout pour ",(0,i.kt)("strong",{parentName:"li"},"cr\xe9er une nouvelle t\xe2che"),","),(0,i.kt)("li",{parentName:"ul"},"une action d'\xe9dition qui vous permettra d'",(0,i.kt)("strong",{parentName:"li"},"\xe9diter les t\xe2ches existantes")," \xe0 partir de l'application iOS,"),(0,i.kt)("li",{parentName:"ul"},"une action de suppression pour ",(0,i.kt)("strong",{parentName:"li"},"supprimer une entit\xe9"),", et"),(0,i.kt)("li",{parentName:"ul"},"une action qui vous permettra d'",(0,i.kt)("strong",{parentName:"li"},"envoyer par e-mail un commentaire relatif \xe0 une t\xe2che sp\xe9cifique"),".")),(0,i.kt)("p",null,"To begin, let's first download the ",(0,i.kt)("strong",{parentName:"p"},"Starter project")," based on our existing Tasks iOS app:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Download")),(0,i.kt)("h2",{id:"\xe9tape-1-add-action"},"\xc9TAPE 1. Add action"),(0,i.kt)("p",null,"Commen\xe7ons par une t\xe2che simple. Ouvrez le projet mobile Tasks et cliquez directement sur la ",(0,i.kt)("strong",{parentName:"p"},"section Actions"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action section",src:n(77138).Z})),(0,i.kt)("p",null,"Pour l'instant, elle est assez vide... Voici ce que nous souhaitons faire : ",(0,i.kt)("strong",{parentName:"p"},"cr\xe9er une nouvelle t\xe2che \xe0 partir de l'application iOS"),"."),(0,i.kt)("p",null,"Pour ce faire, nous allons cr\xe9er une action \xe0 l'aide de l'action d'",(0,i.kt)("strong",{parentName:"p"},"ajout")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,i.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,i.kt)("strong",{parentName:"li"},"action d'ajout"),"."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la ",(0,i.kt)("strong",{parentName:"li"},"table Task"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add action creation",src:n(80897).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Une nouvelle action")," nomm\xe9e ",(0,i.kt)("em",{parentName:"li"},'"addTasks"')," est affich\xe9e avec, par d\xe9faut, le libell\xe9 ",(0,i.kt)("em",{parentName:"li"},'"Add..."'),"."),(0,i.kt)("li",{parentName:"ul"},"Tous les ",(0,i.kt)("strong",{parentName:"li"},"param\xe8tres")," disponibles ainsi que leurs ",(0,i.kt)("strong",{parentName:"li"},"propri\xe9t\xe9s")," se trouvent dans la section ",(0,i.kt)("strong",{parentName:"li"},"Param\xe8tres des actions"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add action parameters",src:n(7427).Z})),(0,i.kt)("p",null,"A ce stade, tous les ",(0,i.kt)("strong",{parentName:"p"},"param\xe8tres des actions d'ajout")," sont cr\xe9\xe9s automatiquement et sont pr\xeats \xe0 l'emploi."),(0,i.kt)("h2",{id:"\xe9tape-2-edit-action"},"\xc9TAPE 2. Edit action"),(0,i.kt)("p",null,"Cr\xe9ons maintenant une action qui vous permettra d'",(0,i.kt)("strong",{parentName:"p"},"\xe9diter le contenu de votre application"),"."),(0,i.kt)("p",null,"Pour ce faire, nous allons cr\xe9er une action \xe0 l'aide de l'action d'",(0,i.kt)("strong",{parentName:"p"},"\xe9dition")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,i.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,i.kt)("strong",{parentName:"li"},"action d'\xe9dition"),"."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table Tasks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit action creation",src:n(98925).Z})),(0,i.kt)("p",null,"Vous allez donc voir :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Une nouvelle action")," nomm\xe9e ",(0,i.kt)("em",{parentName:"li"},'"editTasks"')," avec, par d\xe9faut, le libell\xe9 ",(0,i.kt)("em",{parentName:"li"},'"Edit..."'),"."),(0,i.kt)("li",{parentName:"ul"},"Tous les ",(0,i.kt)("strong",{parentName:"li"},"param\xe8tres")," d'action disponibles ainsi que leurs ",(0,i.kt)("strong",{parentName:"li"},"propri\xe9t\xe9s")," dans la section ",(0,i.kt)("strong",{parentName:"li"},"Param\xe8tres des actions"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit action parameters",src:n(39453).Z})),(0,i.kt)("p",null,"Pas de panique, nous reviendrons sur le code 4D de ces actions un peu plus tard. :-)"),(0,i.kt)("h2",{id:"\xe9tape-3-delete-action"},"\xc9TAPE 3. Delete action"),(0,i.kt)("p",null,"Le processus de cr\xe9ation de l'action pr\xe9d\xe9finie de ",(0,i.kt)("strong",{parentName:"p"},"suppression")," est \xe0 peu pr\xe8s identique \xe0 l'action d'\xe9dition :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,i.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,i.kt)("strong",{parentName:"li"},"action de suppression"),"."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table Tasks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete action creation",src:n(68053).Z})),(0,i.kt)("p",null,"Vous verrez appara\xeetre une ",(0,i.kt)("strong",{parentName:"p"},"nouvelle action")," nomm\xe9e ",(0,i.kt)("em",{parentName:"p"},'"deleteTasks"')," avec, par d\xe9faut, le libell\xe9 ",(0,i.kt)("em",{parentName:"p"},'"Remove"'),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete action",src:n(41547).Z})),(0,i.kt)("p",null,"Vous n'avez pas \xe0 vous pr\xe9occuper des param\xe8tres ou des proprit\xe9es pour ce type d'action."),(0,i.kt)("h2",{id:"\xe9tape-4-action-denvoi-de-commentaire"},"\xc9TAPE 4. Action d'envoi de commentaire"),(0,i.kt)("p",null,"Nous souhaitons maintenant ",(0,i.kt)("strong",{parentName:"p"},"envoyer un commentaire")," \xe0 une ",(0,i.kt)("strong",{parentName:"p"},"adresse mail sp\xe9cifique"),", par rapport \xe0 une t\xe2che sp\xe9cifique. Pour ce faire, cliquez sur le bouton + et cr\xe9ez une nouvelle action que vous nommerez ",(0,i.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete action creation",src:n(47442).Z})),(0,i.kt)("p",null,"Nous allons cr\xe9er trois param\xe8tres :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur le bouton + et s\xe9lectionnez ",(0,i.kt)("strong",{parentName:"li"},"Title")," dans la liste de param\xe8tres des actions, pour l'inclure dans l'e-mail que vous allez envoyer."),(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ez un param\xe8tre ",(0,i.kt)("strong",{parentName:"li"},"Comment")," et s\xe9lectionnez le format Zone de texte."),(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ez un param\xe8tre ",(0,i.kt)("strong",{parentName:"li"},"email")," et s\xe9lectionnez le format Adresse mail.")),(0,i.kt)("p",null,"Votre section Actions devrait ressembler \xe0 ceci :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Send comment action creation",src:n(76485).Z})),(0,i.kt)("h2",{id:"step-5-cr\xe9ation-de-la-m\xe9thode-base-sur-une-action-app-mobile"},"STEP 5. Cr\xe9ation de la m\xe9thode base Sur une action app mobile"),(0,i.kt)("p",null,"Click on the Create button to create the ",(0,i.kt)("em",{parentName:"p"},"On Mobile App Action")," database method."),(0,i.kt)("p",null,"Toutes vos actions seront comprises automatiquement dans la m\xe9thode base."),(0,i.kt)("p",null,"Il ne vous reste qu'\xe0 ajouter une r\xe9f\xe9rence \xe0 votre/vos m\xe9thode(s) pour le(s) sc\xe9nario(s) que vous souhaitez g\xe9rer."),(0,i.kt)("p",null,"Voici la m\xe9thode base ",(0,i.kt)("em",{parentName:"p"},"Sur une action app mobile")," finale :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informations fournies par l\'application mobile\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Add\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Edit\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Ins\xe9rer ici le code pour l\'action "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // Action inconnue\n\nEnd case \n\n$0:=$result\n\n')),(0,i.kt)("h2",{id:"\xe9tape-6-cr\xe9ation-de-toutes-les-m\xe9thodes-n\xe9cessaires"},"\xc9TAPE 6. Cr\xe9ation de toutes les m\xe9thodes n\xe9cessaires"),(0,i.kt)("h3",{id:"addaction"},"addAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //create a reference\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //sauvegarder l\'entit\xe9\n\n\n    $out.success:=True  // notifier l\'application que l\'action est r\xe9ussie\n    $out.dataSynchro:=True  //notifier l\'application pour mettre \xe0 jour la s\xe9lection\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("h3",{id:"editaction"},"editAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query(\"ID = :1\";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notifier l'application que l'action est r\xe9ussie\n        $out.dataSynchro:=True  // notifier l'application pour mettre \xe0 jour la s\xe9lection\n        $out.statusText:=\"Task edited\"\n\n    Else \n\n        $out:=$status  // retourner le statut \xe0 l'application \n\n    End if \n\nElse \n\n    $out.success:=False  // notifier l'application que l'action a \xe9chou\xe9\n\nEnd if \n\n$0:=$out\n\n\n")),(0,i.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query(\"ID = :1\";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // notifier l'application que l'action est r\xe9ussie\n        $out.dataSynchro:=True  // notifier l'application pour mettre \xe0 jour cette entit\xe9\n        $out.statusText:=\"Task deleted\"\n\n    Else \n\n        $out:=$status  // retourner le statut \xe0 l'application\n\n    End if \n\nElse \n\n    $out.success:=False  // notifier l'application que l'action a \xe9chou\xe9\n\nEnd if \n\n$0:=$out\n\n\n")),(0,i.kt)("h3",{id:"sendemail"},"sendEmail"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notifier l\'application que l\'action est r\xe9ussie\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // notifier l\'application que l\'action a \xe9chou\xe9\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  //notifier l\'application que l\'action a \xe9chou\xe9\nEnd if \n\n$0:=$out\n\n\n')),(0,i.kt)("p",null,"N'oubliez pas d'ajouter vos propres valeurs pour l'action ",(0,i.kt)("strong",{parentName:"p"},"sendEmail"),"."),(0,i.kt)("h2",{id:"\xe9tape-7-g\xe9n\xe9ration-de-lapplication"},"\xc9TAPE 7. G\xe9n\xe9ration de l\u2019application"),(0,i.kt)("p",null,"Il est temps de g\xe9n\xe9rer votre application !"),(0,i.kt)("p",null,"Si vous cliquez sur le bouton Action de la barre de navigation, vous pourrez ",(0,i.kt)("strong",{parentName:"p"},"cr\xe9er une nouvelle t\xe2che"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create new task",src:n(86300).Z})),(0,i.kt)("p",null,"Si vous maintenez votre pouce sur la nouvelle t\xe2che du formulaire Liste, une action d'",(0,i.kt)("strong",{parentName:"p"},"\xe9dition")," s'affichera dans la liste d'actions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit task",src:n(80342).Z})),(0,i.kt)("p",null,"Envoyez un commentaire \xe0 l'aide de l'action ",(0,i.kt)("strong",{parentName:"p"},"Send comment"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Send task comment",src:n(28144).Z})),(0,i.kt)("p",null,"Enfin, vous pouvez supprimer une entit\xe9 \xe0 l'aide de l'action de ",(0,i.kt)("strong",{parentName:"p"},"suppression"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete task",src:n(78005).Z})),(0,i.kt)("h2",{id:"\xe9tape-8-where-to-go-from-here"},"\xc9TAPE 8. Where to go from here?"),(0,i.kt)("p",null,"F\xe9licitations\xa0! Votre application iOS Tasks est d\xe9sormais compl\xe8te. Vous pouvez d\xe8s \xe0 pr\xe9sent modifier les donn\xe9es de votre application directement sur votre appareil et les synchroniser avec votre serveur !"),(0,i.kt)("p",null,"Download the completed project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Download completed project")))}d.isMDXComponent=!0},86300:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},78005:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},80342:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},28144:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},77138:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},80897:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},7427:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},68053:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},41547:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},98925:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},39453:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},47442:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},76485:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);