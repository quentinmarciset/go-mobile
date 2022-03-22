"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1455],{84128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={id:"using-action-parameters",title:"Utiliser des param\xe8tres d'action"},l=void 0,u={unversionedId:"tutorials/actions/using-action-parameters",id:"version-19-R2/tutorials/actions/using-action-parameters",title:"Utiliser des param\xe8tres d'action",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/fr/docs/19-R2/tutorials/actions/using-action-parameters",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/actions/using-action-parameters.md",tags:[],version:"19-R2",frontMatter:{id:"using-action-parameters",title:"Utiliser des param\xe8tres d'action"},sidebar:"version-19-R2/tutorials",previous:{title:"Ajouter des actions aux mod\xe8les",permalink:"/go-mobile/fr/docs/19-R2/tutorials/actions/adding-actions-template"},next:{title:"Many to One relations",permalink:"/go-mobile/fr/docs/19-R2/tutorials/relations/many-to-one-relations"}},c={},p=[{value:"\xc9TAPE 1. Ajouter",id:"\xe9tape-1-ajouter",level:2},{value:"\xc9TAPE 2. Editer",id:"\xe9tape-2-editer",level:2},{value:"\xc9TAPE 3. Supprimer",id:"\xe9tape-3-supprimer",level:2},{value:"\xc9TAPE 4. Action d&#39;envoi de commentaire",id:"\xe9tape-4-action-denvoi-de-commentaire",level:2},{value:"STEP 5. Cr\xe9ation de la m\xe9thode base Sur une action app mobile",id:"step-5-cr\xe9ation-de-la-m\xe9thode-base-sur-une-action-app-mobile",level:2},{value:"\xc9TAPE 6. Cr\xe9ation de toutes les m\xe9thodes n\xe9cessaires",id:"\xe9tape-6-cr\xe9ation-de-toutes-les-m\xe9thodes-n\xe9cessaires",level:2},{value:"addAction",id:"addaction",level:3},{value:"editAction",id:"editaction",level:3},{value:"deleteAction",id:"deleteaction",level:3},{value:"sendEmail",id:"sendemail",level:3},{value:"\xc9TAPE 7. G\xe9n\xe9ration de l\u2019application",id:"\xe9tape-7-g\xe9n\xe9ration-de-lapplication",level:2},{value:"\xc9TAPE 8. Que faire ensuite ?",id:"\xe9tape-8-que-faire-ensuite-",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,o.kt)("p",{parentName:"blockquote"},"D\xe9finir des param\xe8tres d'action pour modifier le contenu de votre application.")),(0,o.kt)("p",null,"Dans le tutoriel pr\xe9c\xe9dent, sur la d\xe9finition des actions, nous avons appris \xe0 ex\xe9cuter du code 4D \xe0 partir d'une application iOS en d\xe9finissant des actions dans la section Actions."),(0,o.kt)("p",null,"Dans ce tutoriel, nous irons encore plus loin et nous cr\xe9erons :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"une action d'ajout pour ",(0,o.kt)("strong",{parentName:"li"},"cr\xe9er une nouvelle t\xe2che"),","),(0,o.kt)("li",{parentName:"ul"},"une action d'\xe9dition qui vous permettra d'",(0,o.kt)("strong",{parentName:"li"},"\xe9diter les t\xe2ches existantes")," \xe0 partir de l'application iOS,"),(0,o.kt)("li",{parentName:"ul"},"une action de suppression pour ",(0,o.kt)("strong",{parentName:"li"},"supprimer une entit\xe9"),", et"),(0,o.kt)("li",{parentName:"ul"},"une action qui vous permettra d'",(0,o.kt)("strong",{parentName:"li"},"envoyer par e-mail un commentaire relatif \xe0 une t\xe2che sp\xe9cifique"),".")),(0,o.kt)("p",null,"Pour commencer, t\xe9l\xe9chargeons d'abord le ",(0,o.kt)("strong",{parentName:"p"},"Projet Starter"),", bas\xe9 sur notre application iOS Tasks:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Download")),(0,o.kt)("h2",{id:"\xe9tape-1-ajouter"},"\xc9TAPE 1. Ajouter"),(0,o.kt)("p",null,"Commen\xe7ons par une t\xe2che simple. Ouvrez le projet mobile Tasks et cliquez directement sur la ",(0,o.kt)("strong",{parentName:"p"},"section Actions"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Action section",src:n(77312).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Pour l'instant, elle est assez vide... Voici ce que nous souhaitons faire : ",(0,o.kt)("strong",{parentName:"p"},"cr\xe9er une nouvelle t\xe2che \xe0 partir de l'application iOS"),"."),(0,o.kt)("p",null,"Pour ce faire, nous allons cr\xe9er une action \xe0 l'aide de l'action d'",(0,o.kt)("strong",{parentName:"p"},"ajout")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,o.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,o.kt)("strong",{parentName:"li"},"action d'ajout"),"."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez la ",(0,o.kt)("strong",{parentName:"li"},"table Task"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add action creation",src:n(73462).Z,width:"2164",height:"2046"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Une nouvelle action")," nomm\xe9e ",(0,o.kt)("em",{parentName:"li"},'"addTasks"')," est affich\xe9e avec, par d\xe9faut, le libell\xe9 ",(0,o.kt)("em",{parentName:"li"},'"Add..."'),"."),(0,o.kt)("li",{parentName:"ul"},"Tous les ",(0,o.kt)("strong",{parentName:"li"},"param\xe8tres")," disponibles ainsi que leurs ",(0,o.kt)("strong",{parentName:"li"},"propri\xe9t\xe9s")," se trouvent dans la section ",(0,o.kt)("strong",{parentName:"li"},"Param\xe8tres des actions"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Add action parameters",src:n(95501).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"A ce stade, tous les ",(0,o.kt)("strong",{parentName:"p"},"param\xe8tres des actions d'ajout")," sont cr\xe9\xe9s automatiquement et sont pr\xeats \xe0 l'emploi."),(0,o.kt)("h2",{id:"\xe9tape-2-editer"},"\xc9TAPE 2. Editer"),(0,o.kt)("p",null,"Cr\xe9ons maintenant une action qui vous permettra d'",(0,o.kt)("strong",{parentName:"p"},"\xe9diter le contenu de votre application"),"."),(0,o.kt)("p",null,"Pour ce faire, nous allons cr\xe9er une action \xe0 l'aide de l'action d'",(0,o.kt)("strong",{parentName:"p"},"\xe9dition")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,o.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,o.kt)("strong",{parentName:"li"},"action d'\xe9dition"),"."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table Tasks.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Edit action creation",src:n(90356).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Vous allez donc voir :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Une nouvelle action")," nomm\xe9e ",(0,o.kt)("em",{parentName:"li"},'"editTasks"')," avec, par d\xe9faut, le libell\xe9 ",(0,o.kt)("em",{parentName:"li"},'"Edit..."'),"."),(0,o.kt)("li",{parentName:"ul"},"Tous les ",(0,o.kt)("strong",{parentName:"li"},"param\xe8tres")," d'action disponibles ainsi que leurs ",(0,o.kt)("strong",{parentName:"li"},"propri\xe9t\xe9s")," dans la section ",(0,o.kt)("strong",{parentName:"li"},"Param\xe8tres des actions"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Edit action parameters",src:n(17616).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Pas de panique, nous reviendrons sur le code 4D de ces actions un peu plus tard. :-)"),(0,o.kt)("h2",{id:"\xe9tape-3-supprimer"},"\xc9TAPE 3. Supprimer"),(0,o.kt)("p",null,"Le processus de cr\xe9ation de l'action pr\xe9d\xe9finie de ",(0,o.kt)("strong",{parentName:"p"},"suppression")," est \xe0 peu pr\xe8s identique \xe0 l'action d'\xe9dition :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur la fl\xe8che qui se trouve dans le ",(0,o.kt)("strong",{parentName:"li"},"bouton +"),", situ\xe9 en-dessous du tableau d'actions."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,o.kt)("strong",{parentName:"li"},"action de suppression"),"."),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez la table Tasks.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Delete action creation",src:n(48184).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Vous verrez appara\xeetre une ",(0,o.kt)("strong",{parentName:"p"},"nouvelle action")," nomm\xe9e ",(0,o.kt)("em",{parentName:"p"},'"deleteTasks"')," avec, par d\xe9faut, le libell\xe9 ",(0,o.kt)("em",{parentName:"p"},'"Remove"'),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Supprimer",src:n(87693).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Vous n'avez pas \xe0 vous pr\xe9occuper des param\xe8tres ou des proprit\xe9es pour ce type d'action."),(0,o.kt)("h2",{id:"\xe9tape-4-action-denvoi-de-commentaire"},"\xc9TAPE 4. Action d'envoi de commentaire"),(0,o.kt)("p",null,"Nous souhaitons maintenant ",(0,o.kt)("strong",{parentName:"p"},"envoyer un commentaire")," \xe0 une ",(0,o.kt)("strong",{parentName:"p"},"adresse mail sp\xe9cifique"),", par rapport \xe0 une t\xe2che sp\xe9cifique. Pour ce faire, cliquez sur le bouton + et cr\xe9ez une nouvelle action que vous nommerez ",(0,o.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Delete action creation",src:n(61294).Z,width:"2164",height:"2046"})),(0,o.kt)("p",null,"Nous allons cr\xe9er trois param\xe8tres :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur le bouton + et s\xe9lectionnez ",(0,o.kt)("strong",{parentName:"li"},"Title")," dans la liste de param\xe8tres des actions, pour l'inclure dans l'e-mail que vous allez envoyer."),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un param\xe8tre ",(0,o.kt)("strong",{parentName:"li"},"Comment")," et s\xe9lectionnez le format Zone de texte."),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un param\xe8tre ",(0,o.kt)("strong",{parentName:"li"},"email")," et s\xe9lectionnez le format Adresse mail.")),(0,o.kt)("p",null,"Votre section Actions devrait ressembler \xe0 ceci :"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Send comment action creation",src:n(98482).Z,width:"2164",height:"2046"})),(0,o.kt)("h2",{id:"step-5-cr\xe9ation-de-la-m\xe9thode-base-sur-une-action-app-mobile"},"STEP 5. Cr\xe9ation de la m\xe9thode base Sur une action app mobile"),(0,o.kt)("p",null,"Cliquez sur le bouton Cr\xe9er pour cr\xe9er la m\xe9thode base ",(0,o.kt)("em",{parentName:"p"},"On Mobile App Action"),"."),(0,o.kt)("p",null,"Toutes vos actions seront comprises automatiquement dans la m\xe9thode base."),(0,o.kt)("p",null,"Il ne vous reste qu'\xe0 ajouter une r\xe9f\xe9rence \xe0 votre/vos m\xe9thode(s) pour le(s) sc\xe9nario(s) que vous souhaitez g\xe9rer."),(0,o.kt)("p",null,"Voici la m\xe9thode base ",(0,o.kt)("em",{parentName:"p"},"Sur une action app mobile")," finale :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informations fournies par l\'application mobile\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Add\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Edit\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Ins\xe9rer ici le code pour l\'action "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Ins\xe9rer ici le code pour l\'action "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // Action inconnue\n\nEnd case \n\n$0:=$result\n\n')),(0,o.kt)("h2",{id:"\xe9tape-6-cr\xe9ation-de-toutes-les-m\xe9thodes-n\xe9cessaires"},"\xc9TAPE 6. Cr\xe9ation de toutes les m\xe9thodes n\xe9cessaires"),(0,o.kt)("h3",{id:"addaction"},"addAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //create a reference\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //sauvegarder l\'entit\xe9\n\n\n    $out.success:=True  // notifier l\'application que l\'action est r\xe9ussie\n    $out.dataSynchro:=True  //notifier l\'application pour mettre \xe0 jour la s\xe9lection\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("h3",{id:"editaction"},"editAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query(\"ID = :1\";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notifier l'application que l'action est r\xe9ussie\n        $out.dataSynchro:=True  // notifier l'application pour mettre \xe0 jour la s\xe9lection\n        $out.statusText:=\"Task edited\"\n\n    Else \n\n        $out:=$status  // retourner le statut \xe0 l'application \n\n    End if \n\nElse \n\n    $out.success:=False  // notifier l'application que l'action a \xe9chou\xe9\n\nEnd if \n\n$0:=$out\n\n\n")),(0,o.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query(\"ID = :1\";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // notifier l'application que l'action est r\xe9ussie\n        $out.dataSynchro:=True  // notifier l'application pour mettre \xe0 jour cette entit\xe9\n        $out.statusText:=\"Task deleted\"\n\n    Else \n\n        $out:=$status  // retourner le statut \xe0 l'application\n\n    End if \n\nElse \n\n    $out.success:=False  // notifier l'application que l'action a \xe9chou\xe9\n\nEnd if \n\n$0:=$out\n\n\n")),(0,o.kt)("h3",{id:"sendemail"},"sendEmail"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notifier l\'application que l\'action est r\xe9ussie\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // notifier l\'application que l\'action a \xe9chou\xe9\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  //notifier l\'application que l\'action a \xe9chou\xe9\nEnd if \n\n$0:=$out\n\n\n')),(0,o.kt)("p",null,"N'oubliez pas d'ajouter vos propres valeurs pour l'action ",(0,o.kt)("strong",{parentName:"p"},"sendEmail"),"."),(0,o.kt)("h2",{id:"\xe9tape-7-g\xe9n\xe9ration-de-lapplication"},"\xc9TAPE 7. G\xe9n\xe9ration de l\u2019application"),(0,o.kt)("p",null,"Il est temps de g\xe9n\xe9rer votre application !"),(0,o.kt)("p",null,"Si vous cliquez sur le bouton Action de la barre de navigation, vous pourrez ",(0,o.kt)("strong",{parentName:"p"},"cr\xe9er une nouvelle t\xe2che"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Create new task",src:n(85554).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Si vous maintenez votre pouce sur la nouvelle t\xe2che du formulaire Liste, une action d'",(0,o.kt)("strong",{parentName:"p"},"\xe9dition")," s'affichera dans la liste d'actions."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Edit task",src:n(75401).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Envoyez un commentaire \xe0 l'aide de l'action ",(0,o.kt)("strong",{parentName:"p"},"Send comment"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Send task comment",src:n(64280).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Enfin, vous pouvez supprimer une entit\xe9 \xe0 l'aide de l'action de ",(0,o.kt)("strong",{parentName:"p"},"suppression"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Delete task",src:n(31541).Z,width:"1701",height:"992"})),(0,o.kt)("h2",{id:"\xe9tape-8-que-faire-ensuite-"},"\xc9TAPE 8. Que faire ensuite ?"),(0,o.kt)("p",null,"F\xe9licitations\xa0! Votre application iOS Tasks est d\xe9sormais compl\xe8te. Vous pouvez d\xe8s \xe0 pr\xe9sent modifier les donn\xe9es de votre application directement sur votre appareil et les synchroniser avec votre serveur !"),(0,o.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"T\xe9l\xe9chargez le projet final")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85554:function(e,t,n){t.Z=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},31541:function(e,t,n){t.Z=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},75401:function(e,t,n){t.Z=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},64280:function(e,t,n){t.Z=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},77312:function(e,t,n){t.Z=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},73462:function(e,t,n){t.Z=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},95501:function(e,t,n){t.Z=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},48184:function(e,t,n){t.Z=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},87693:function(e,t,n){t.Z=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},90356:function(e,t,n){t.Z=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},17616:function(e,t,n){t.Z=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},61294:function(e,t,n){t.Z=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},98482:function(e,t,n){t.Z=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);