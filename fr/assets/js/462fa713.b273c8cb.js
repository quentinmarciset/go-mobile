(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2008],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75424:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(22122),i=n(19756),l=(n(67294),n(3905)),o=["components"],r={id:"actions",title:"Actions"},s=void 0,c={unversionedId:"project-definition/actions",id:"project-definition/actions",isDocsHomePage:!1,title:"Actions",description:"Cette section vous permet :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/project-definition/actions.md",sourceDirName:"project-definition",slug:"/project-definition/actions",permalink:"/go-mobile/fr/docs/project-definition/actions",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/project-definition/actions.md",version:"current",frontMatter:{id:"actions",title:"Actions"},sidebar:"docs",previous:{title:"Donn\xe9es",permalink:"/go-mobile/fr/docs/project-definition/data"},next:{title:"Libell\xe9s et ic\xf4nes",permalink:"/go-mobile/fr/docs/project-definition/labels-and-icons"}},u=[{value:"\xc9diteur de projet",id:"\xe9diteur-de-projet",children:[{value:"Cr\xe9ez votre application",id:"cr\xe9ez-votre-application",children:[]},{value:"Ajoutez des param\xe8tres \xe0 votre action",id:"ajoutez-des-param\xe8tres-\xe0-votre-action",children:[]}]},{value:"Preset actions",id:"preset-actions",children:[{value:"Add action",id:"add-action",children:[]},{value:"Edit action",id:"edit-action",children:[]},{value:"Delete action",id:"delete-action",children:[]},{value:"Share action",id:"share-action",children:[]},{value:"Sort action",id:"sort-action",children:[]},{value:"On Mobile App Action",id:"on-mobile-app-action",children:[]}]},{value:"Offline mode actions",id:"offline-mode-actions",children:[{value:"Update pending tasks that failed",id:"update-pending-tasks-that-failed",children:[]}]},{value:"iOS app Side",id:"ios-app-side",children:[{value:"Table List forms",id:"table-list-forms",children:[]},{value:"Collection List forms",id:"collection-list-forms",children:[]},{value:"Detail forms",id:"detail-forms",children:[]},{value:"Edition forms",id:"edition-forms",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],d={toc:u};function p(t){var e=t.components,r=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cette section vous permet :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"de cr\xe9er des actions permettant d'ex\xe9cuter du code 4D \xe0 partir de votre application iOS."),(0,l.kt)("li",{parentName:"ul"},"de d\xe9finir et d'ajouter des param\xe8tres \xe0 vos actions.")),(0,l.kt)("h2",{id:"\xe9diteur-de-projet"},"\xc9diteur de projet"),(0,l.kt)("h3",{id:"cr\xe9ez-votre-application"},"Cr\xe9ez votre application"),(0,l.kt)("p",null,"Vous pouvez cr\xe9er de nouvelles actions en cliquant sur le bouton +, situ\xe9 en-dessous du tableau d'Actions. Une nouvelle ligne appara\xeetra alors dans le tableau."),(0,l.kt)("p",null,"Vous d\xe9finirez ensuite les \xe9l\xe9ments suivants :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Noms :")," D\xe9finissez le nom de l'action \xe0 utiliser dans la m\xe9thode base ",(0,l.kt)("a",{parentName:"li",href:"https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action"},"Sur une action app mobile")," pour lancer votre code 4D."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ic\xf4nes :")," S\xe9lectionnez une ic\xf4ne pour votre action \xe0 partir de la librairie d'ic\xf4nes. Vous pouvez \xe9galement ajouter votre propre ic\xf4ne \xe0 l'aide de ce ","[tutorial]",(0,l.kt)("inlineCode",{parentName:"li"},"(using-icons.html)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Libell\xe9s long et court :")," D\xe9finissez les libell\xe9s correspondant aux actions que vous souhaitez afficher dans votre application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Table :")," S\xe9lectionnez la table \xe0 laquelle vous souhaitez appliquer une action."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Port\xe9e :")," Choisissez d'appliquer l'action \xe0 une ",(0,l.kt)("strong",{parentName:"li"},"entit\xe9")," ou \xe0 une ",(0,l.kt)("strong",{parentName:"li"},"table"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action section",src:n(8363).Z})),(0,l.kt)("h3",{id:"ajoutez-des-param\xe8tres-\xe0-votre-action"},"Ajoutez des param\xe8tres \xe0 votre action"),(0,l.kt)("p",null,"Vous pouvez ajouter des ",(0,l.kt)("strong",{parentName:"p"},"param\xe8tres d'action")," et ",(0,l.kt)("strong",{parentName:"p"},"\xe9diter")," des donn\xe9es directement depuis votre application."),(0,l.kt)("p",null,"Pour chaque param\xe8tre, vous pouvez \xe9diter les propri\xe9t\xe9s suivantes :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Le nom"),(0,l.kt)("li",{parentName:"ul"},"Le libell\xe9 long"),(0,l.kt)("li",{parentName:"ul"},"Le libell\xe9 court"),(0,l.kt)("li",{parentName:"ul"},"Format"),(0,l.kt)("li",{parentName:"ul"},"Les contraintes (d\xe9finir des valeurs minimales ou maximales)"),(0,l.kt)("li",{parentName:"ul"},"Le placeholder"),(0,l.kt)("li",{parentName:"ul"},"La d\xe9finition d'un champ obligatoire"),(0,l.kt)("li",{parentName:"ul"},"La valeur par d\xe9faut")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action parameters",src:n(81278).Z})),(0,l.kt)("p",null,"Vous \xeates libres de choisir l'ordre des param\xe8tres \xe0 l'aide du glisser-d\xe9poser."),(0,l.kt)("p",null,"Voici les diff\xe9rents ",(0,l.kt)("strong",{parentName:"p"},"formats")," que vous pouvez s\xe9lectionner en tant que param\xe8tre :"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"TEXTE")),(0,l.kt)("tr",{style:{textAlign:"center"}},(0,l.kt)("th",null,"Format"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Texte"),(0,l.kt)("td",null,"Premi\xe8re lettre de la cha\xeene en majuscule")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Adresse mail"),(0,l.kt)("td",null,"Clavier iOS optimis\xe9 pour la saisie de l'e-mail")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Num\xe9ro de t\xe9l\xe9phone"),(0,l.kt)("td",null,"Clavier iOS pour la saisie des num\xe9ros de t\xe9l\xe9phone.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Compte"),(0,l.kt)("td",null,"Clavier iOS optimis\xe9 pour la saisie du nom d'utilisateur")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Mot de passe"),(0,l.kt)("td",null,"Clavier optimis\xe9 pour la gestion des mots de passe")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"URL"),(0,l.kt)("td",null,"Clavier iOS optimis\xe9 pour la saisie de l'URL")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Code postal"),(0,l.kt)("td",null,"Clavier iOS optimis\xe9 pour la saisie du code postal")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Zone de texte"),(0,l.kt)("td",null,"Inclut plusieurs lignes de texte dans un m\xeame champ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Code barres"),(0,l.kt)("td",null,"Extract barcode associated value. Supported formats : EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"})),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"NUMBER")),(0,l.kt)("tr",{style:{textAlign:"center"}},(0,l.kt)("th",null,"Format"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Number"),(0,l.kt)("td",null,"Numbers with decimals")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Integer"),(0,l.kt)("td",null,"Numbers without decimals")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Scientific"),(0,l.kt)("td",null,"Scientific Notation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Percentage"),(0,l.kt)("td",null,"Percent Notation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Spell Out"),(0,l.kt)("td",null,"Convert numbers into strings")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"})),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"DATE")),(0,l.kt)("tr",{style:{textAlign:"center"}},(0,l.kt)("th",null,"Format"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Date"),(0,l.kt)("td",null,"Nov 23, 1937")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Short Date"),(0,l.kt)("td",null," 11/23/37")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Long Date"),(0,l.kt)("td",null,"November 23, 1937")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Full Date"),(0,l.kt)("td",null,"Tuesday, November 23, 1937")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"})),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"TIME")),(0,l.kt)("tr",{style:{textAlign:"center"}},(0,l.kt)("th",null,"Format"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Time"),(0,l.kt)("td",null,"3:30 PM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Duration"),(0,l.kt)("td",null,"2 hours 30 minutes")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"})),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"BOOLEAN")),(0,l.kt)("tr",{style:{textAlign:"center"}},(0,l.kt)("th",null,"Format"),(0,l.kt)("th",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Boolean"),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"}))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Check mark"),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"}))),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"})),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2",style:{textAlign:"center"}},"IMAGES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Signature"),(0,l.kt)("td",null,"Allow to sign with the finger"))),(0,l.kt)("h2",{id:"preset-actions"},"Preset actions"),(0,l.kt)("p",null,"4D mobile projects include the following (predefined) preset actions to manage your app content:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Action d'\xe9dition"),(0,l.kt)("li",{parentName:"ul"},"Action d'ajout"),(0,l.kt)("li",{parentName:"ul"},"Action de suppression"),(0,l.kt)("li",{parentName:"ul"},"Share"),(0,l.kt)("li",{parentName:"ul"},"Sort")),(0,l.kt)("h3",{id:"add-action"},"Add action"),(0,l.kt)("p",null,"4D mobile projects makes the ",(0,l.kt)("strong",{parentName:"p"},"Add actions")," creation process very simple."),(0,l.kt)("p",null,"Vous n'avez qu'\xe0 s\xe9lectionner l'option ",(0,l.kt)("strong",{parentName:"p"},"Action d'ajout pour"),", accessible \xe0 partir du ",(0,l.kt)("strong",{parentName:"p"},"bouton +"),", situ\xe9 en-dessous de la table Actions."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add actions",src:n(67276).Z})),(0,l.kt)("p",null,"Then just ",(0,l.kt)("strong",{parentName:"p"},"select the table")," you want to link to this add action."),(0,l.kt)("p",null,"Cela ",(0,l.kt)("strong",{parentName:"p"},"cr\xe9era automatiquement")," tous les param\xe8tres dans l'\xe9diteur de projets et vous permettra de modifier chaque valeur d'un champ."),(0,l.kt)("p",null,"Pour ce genre d'actions, vous constaterez que toutes les ",(0,l.kt)("strong",{parentName:"p"},"propri\xe9t\xe9s")," sont d\xe9j\xe0 saisies \xe0 des fins pratiques, \xe0 droite de la liste de param\xe8tres."),(0,l.kt)("h3",{id:"edit-action"},"Edit action"),(0,l.kt)("p",null,"La cr\xe9ation des ",(0,l.kt)("strong",{parentName:"p"},"actions d'\xe9dition")," suit le m\xeame principe que les actions d'ajout, \xe0 l'exception du fait que vous ne serez pas en mesure de d\xe9finir des valeurs par d\xe9faut \xe0 partir de la section Actions."),(0,l.kt)("h3",{id:"delete-action"},"Delete action"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Delete action")," creation follows the same process as the Edit action. La seule diff\xe9rence est que cette action vous permet de supprimer une entit\xe9."),(0,l.kt)("p",null,"To create a Delete action, select the ",(0,l.kt)("strong",{parentName:"p"},"Delete action for")," option accessible from the ",(0,l.kt)("strong",{parentName:"p"},"+ button")," at the bottom of the Actions table."),(0,l.kt)("p",null,"Ce type d'actions doit \xeatre utilis\xe9 avec pr\xe9caution."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Delete actions",src:n(82030).Z})),(0,l.kt)("h3",{id:"share-action"},"Share action"),(0,l.kt)("p",null,"Selecting the ",(0,l.kt)("strong",{parentName:"p"},"Share action")," will allow your mobile users to share content with other users. You just need to select the scope:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entity"),": to share content from a detail form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"table"),": to share a list form")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/special-features/deep-linking"},"Deep Linking")," page for more details."),(0,l.kt)("h3",{id:"sort-action"},"Sort action"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sort actions")," are useful to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"define a default sort order for the table list forms"),(0,l.kt)("li",{parentName:"ul"},"allow your mobile users to choose a list sort order")),(0,l.kt)("p",null,"When you create a sort action for a table, you need to select the first field on which the sort will be done:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus",src:n(79684).Z})),(0,l.kt)("p",null,"The field is added to the Sort Criteria list. An ascending sort order is set by default, but you can change it using the ",(0,l.kt)("strong",{parentName:"p"},"Sort order")," menu."),(0,l.kt)("p",null,"You can sort entities in more than one field. Each field you sort is referred to as a sort level. For example, the results of a two-level ascending sort of the ",(0,l.kt)("inlineCode",{parentName:"p"},"lastName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"firstName")," fields would produce a list such as this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Aardvark, Anthony\nAardvark, Artemis\nAardvark, Arthur\n...\nZygote, Elena\nZymosian, Elmer\n")),(0,l.kt)("p",null,"To add one or more sort level(s) in the Sort Criteria list, select the ",(0,l.kt)("strong",{parentName:"p"},"+")," button under the list and configure each level:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"sort",src:n(76188).Z})),(0,l.kt)("h4",{id:"sort-order-menu-on-the-mobile-app"},"Sort order menu on the mobile app"),(0,l.kt)("p",null,"When you define more than one sort action for a table, mobile users automatically benefit from a ",(0,l.kt)("strong",{parentName:"p"},"sort")," menu. It contains all the predefined sort actions:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"sort",src:n(91506).Z})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When only one sort action is defined for a table, the ",(0,l.kt)("strong",{parentName:"p"},"sort")," menu is not displayed on the mobile app side.")),(0,l.kt)("h3",{id:"on-mobile-app-action"},"On Mobile App Action"),(0,l.kt)("p",null,"The ","[On Mobile App Action]",(0,l.kt)("inlineCode",{parentName:"p"},"(https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html)")," database method is available to call all of your 4D methods."),(0,l.kt)("p",null,"After creating all of your actions, just click on the Create button from the Actions table to automatically generate a ",(0,l.kt)("em",{parentName:"p"},"Case of")," code block that includes all your action names in the ",(0,l.kt)("em",{parentName:"p"},"On Mobile App Action")," method."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"notes")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You can refresh the selection after executing an action using ",(0,l.kt)("inlineCode",{parentName:"li"},"$out.dataSynchro:=True"),"."),(0,l.kt)("li",{parentName:"ul"},"You can notify the app user when action has been executed using ",(0,l.kt)("inlineCode",{parentName:"li"},'$out.statusText:="Message you want to display"'),"."),(0,l.kt)("li",{parentName:"ul"},"You can also decide to force close the Edition form using ",(0,l.kt)("inlineCode",{parentName:"li"},"$out.close:=True"),".")))),(0,l.kt)("h2",{id:"offline-mode-actions"},"Offline mode actions"),(0,l.kt)("p",null,"The user of an app can draft, store and queue action requests, even if he\u2019s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list."),(0,l.kt)("p",null,"Pending tasks can be visualized and opened from:"),(0,l.kt)("p",null,"\u2022   ",(0,l.kt)("em",{parentName:"p"},"The Settings screen")),(0,l.kt)("p",null,"It displays a summary and a history of all pending and completed tasks."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action section",src:n(82945).Z})),(0,l.kt)("p",null,"\u2022   ",(0,l.kt)("em",{parentName:"p"},"The List & Detail forms")),(0,l.kt)("p",null,"They display all the tasks related to the table or to the entity that you are currently viewing."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Action section",src:n(76268).Z})),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"notes")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},'The "Share" predefined action is only executable online'),(0,l.kt)("li",{parentName:"ul"},'Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.')))),(0,l.kt)("h3",{id:"update-pending-tasks-that-failed"},"Update pending tasks that failed"),(0,l.kt)("p",null,'Due to your server business logic, some tasks could be rejected. For mobile users, it is then possible to edit and to retry sending the relevant pending tasks. To do so, you can display a status text describing, in the "Complete" actions history, the reason of the failure. For example, you can reject an action sent by a mobile user to the server and inform him that the operation has failed. In that case, you can set the ',(0,l.kt)("inlineCode",{parentName:"p"},"success")," value to ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," and provide a message in ",(0,l.kt)("inlineCode",{parentName:"p"},"statusText"),", as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$response:=New object("success"; False; "statusText"; "Operation failed"))\n')),(0,l.kt)("p",null," You can even add some errors by action parameters for the ",(0,l.kt)("inlineCode",{parentName:"p"},"alphaField")," parameter, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'$response.errors:=New collection(New object("parameter"; "alphaField"; "message"; "Alpha field must contains a valide value")\n')),(0,l.kt)("h2",{id:"ios-app-side"},"iOS app Side"),(0,l.kt)("p",null,"In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section."),(0,l.kt)("h3",{id:"table-list-forms"},"Table List forms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Entity action:"),' Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you\'ve defined more than three actions per entity.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Entity Lisform Tableview",src:n(70699).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Table actions:")," A generic actions button is available in the navigation bar to display a list of available table actions.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Table Listform Tableview",src:n(91741).Z})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Actions will be displayed in the same order as defined in the Action section."))),(0,l.kt)("h3",{id:"collection-list-forms"},"Collection List forms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Entity action:")," Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Entity Listform Collectionview",src:n(61850).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Table actions:")," Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Table Listform Collectionview",src:n(30541).Z})),(0,l.kt)("h3",{id:"detail-forms"},"Detail forms"),(0,l.kt)("p",null,"As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Entity Detailform",src:n(96480).Z})),(0,l.kt)("h3",{id:"edition-forms"},"Edition forms"),(0,l.kt)("p",null,"If you have created an Edit or an Add action, as soon as you select it from the action list, an ",(0,l.kt)("strong",{parentName:"p"},"Edition form")," will appear."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Send task comment",src:n(86931).Z})),(0,l.kt)("p",null,"From here, you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"edit all of your fields by selecting them, and"),(0,l.kt)("li",{parentName:"ul"},"validate or cancel your modifications using the ",(0,l.kt)("strong",{parentName:"li"},"Done")," or ",(0,l.kt)("strong",{parentName:"li"},"Cancel")," buttons (available in the navigation bar).")),(0,l.kt)("p",null,"For your convenience, the Edition form includes a few ",(0,l.kt)("strong",{parentName:"p"},"special features"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The keyboard type depends on the selected parameter type in the Action section."),(0,l.kt)("li",{parentName:"ul"},"You can go to the next or previous field using the arrow on top of the keyboard."),(0,l.kt)("li",{parentName:"ul"},"The iOS keyboard can be closed by touching anywhere outside of a field."),(0,l.kt)("li",{parentName:"ul"},"Indication is given to the user when a value is not valid."),(0,l.kt)("li",{parentName:"ul"},"The view focuses on empty mandatory fields when the user clicks the Done button.")),(0,l.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A ","[tutorial]",(0,l.kt)("inlineCode",{parentName:"p"},"(actions-getting-started.html)")," is available to guide you through the ",(0,l.kt)("strong",{parentName:"p"},"action definition process"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Another ","[tutorial]",(0,l.kt)("inlineCode",{parentName:"p"},"(action-custom-template.html)")," will guide you through the ",(0,l.kt)("strong",{parentName:"p"},"action TAG integration")," for custom templates.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A final ","[tutorial]",(0,l.kt)("inlineCode",{parentName:"p"},"(action-parameters.html)")," will guide you through the ",(0,l.kt)("strong",{parentName:"p"},"action parameters definition"),"."))))}p.isMDXComponent=!0},86931:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},67276:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-Add-action-4D-for-iOS-08fe1b9cfcbd3583ca3e77f98060e961.png"},82030:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-Delete-action-4D-for-iOS-0817713a52602d04998f2761657066c3.png"},81278:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-parameters-4D-for-iOS-79cf5153d9958b5909e510342bd01f56.png"},8363:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-section-4D-for-iOS-303741c316ee6c799d6eba28d1658de9.png"},96480:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Detailform-final-c18c89abec9db7c4b6d2b65f6460b755.png"},61850:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-collectionview-62cf2694a13944829d3423e57266e843.png"},70699:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},30541:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-table-action-collectionview-7ff726ee7d870dbfbd4cc0273e391b98.png"},91741:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-table-action-tableview-2a4b105d4215b5d9391c2cc2b6928b44.png"},76188:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ascending-13d1e44b29301c1db53e22c54298d6cf.png"},82945:function(t,e,n){"use strict";e.Z=n.p+"assets/images/screen1-1420674684277595e3ebeb3d8b17b032.png"},76268:function(t,e,n){"use strict";e.Z=n.p+"assets/images/screen2-2085af1eac75672e8d71ca91df39eb37.png"},91506:function(t,e,n){"use strict";e.Z=n.p+"assets/images/sort-go-mobile-08b8ac3124e16a3e4fd0519b52bab0eb.gif"},79684:function(t,e,n){"use strict";e.Z=n.p+"assets/images/sort-select-d8870a66a0b9afb68d9c3c29dcd290c8.png"}}]);