"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2974],{6017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"one-to-many-custom-button",title:"1 vers N - Bouton personnalis\xe9"},u=void 0,s={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"version-19-R3/tutorials/relations/one-to-many-custom-button",title:"1 vers N - Bouton personnalis\xe9",description:"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/one-to-many-custom-button",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/relations/one-to-many-custom-button.md",tags:[],version:"19-R3",frontMatter:{id:"one-to-many-custom-button",title:"1 vers N - Bouton personnalis\xe9"},sidebar:"version-19-R3/tutorials",previous:{title:"1 vers N - D\xe9finition du titre",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/one-to-many-title-definition"},next:{title:"Liens 1 vers N - Actions",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/one-to-many-actions"}},c={},p=[{value:"Int\xe9grer un bouton",id:"int\xe9grer-un-bouton",level:2},{value:"Modifier le bouton",id:"modifier-le-bouton",level:2},{value:"Couleurs et polices personnalis\xe9es",id:"couleurs-et-polices-personnalis\xe9es",level:3},{value:"Bords arrondis des boutons",id:"bords-arrondis-des-boutons",level:3},{value:"Taille et contraintes",id:"taille-et-contraintes",level:3},{value:"Ajouter des contraintes",id:"ajouter-des-contraintes",level:4},{value:"Ajouter des TAGS",id:"ajouter-des-tags",level:3},{value:"Ajouter un tag \xe0 la contrainte de hauteur",id:"ajouter-un-tag-\xe0-la-contrainte-de-hauteur",level:4},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As we have seen with all previous tutorials, the 4D mobile editor give you the freedom to create lots of custom things."),(0,a.kt)("p",null,"De m\xeame que les templates et formats personnalis\xe9s, vous pouvez cr\xe9er des Boutons Relations personnalis\xe9s."),(0,a.kt)("p",null,"Et pour cela, rien de plus simple ! Il vous suffit de d\xe9poser votre bouton personnalis\xe9 dans votre template personnalis\xe9."),(0,a.kt)("p",null,"Let's get started by downloading the Starter project that includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"une base de donn\xe9es et son projet mobile"),(0,a.kt)("li",{parentName:"ul"},"un bouton Relation standard")),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"Projet Starter")),(0,a.kt)("h2",{id:"int\xe9grer-un-bouton"},"Int\xe9grer un bouton"),(0,a.kt)("p",null,"La premi\xe8re \xe9tape consiste \xe0 int\xe9grer un bouton .xib dans votre template personnalis\xe9, afin qu'il soit int\xe9gr\xe9 dans l'application."),(0,a.kt)("p",null,"To use the button, you just need to drop it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact")," folder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom button path",src:n(91173).Z,width:"2690",height:"734"})),(0,a.kt)("p",null,"La premi\xe8re \xe9tape est termin\xe9e !"),(0,a.kt)("h2",{id:"modifier-le-bouton"},"Modifier le bouton"),(0,a.kt)("p",null,"Ouvrir le fichier .xib avec Xcode."),(0,a.kt)("p",null,"Il devrait ressembler \xe0 ceci :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom relation button",src:n(85463).Z,width:"2028",height:"1898"})),(0,a.kt)("p",null,"Et dans l'inspecteur d'attributs, vous pouvez modifier par exemple :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"les couleurs et les polices"),(0,a.kt)("li",{parentName:"ul"},"le style de bouton"),(0,a.kt)("li",{parentName:"ul"},"la taille du bouton, etc.")),(0,a.kt)("p",null,"Nous allons changer la couleur du bouton et la police du label du bouton !"),(0,a.kt)("h3",{id:"couleurs-et-polices-personnalis\xe9es"},"Couleurs et polices personnalis\xe9es"),(0,a.kt)("p",null,"S\xe9lectionnez le bouton et modifiez la couleur et la police depuis l'inspecteur des attributs."),(0,a.kt)("p",null,"Pour l'arri\xe8re-plan, choisissons Label Color pour obtenir le meilleur contraste aussi bien en Light mode qu'en Dark mode."),(0,a.kt)("p",null,"Pour la couleur de police, s\xe9lectionnez la System background color avec une police helvetica Neue Medium."),(0,a.kt)("p",null,"Enfin, n'oubliez pas de s\xe9lectionner la couleur System background color pour \"Tint\" et d'appliquer cette couleur \xe0 l'ic\xf4ne du bouton."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom relation button",src:n(25321).Z,width:"2026",height:"1886"})),(0,a.kt)("p",null,"Voici le r\xe9sultat que vous devriez obtenir dans le Simulateur, en mode Dark et en mode Light :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom relation color and font",src:n(27283).Z,width:"1701",height:"992"})),(0,a.kt)("h3",{id:"bords-arrondis-des-boutons"},"Bords arrondis des boutons"),(0,a.kt)("p",null,'Ajoutons des bords arrondis au "relationButton" !'),(0,a.kt)("p",null,"Pour ce faire, ouvrez l'Identity Inspector."),(0,a.kt)("p",null,"S\xe9lectionnez votre Bouton et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"12")))),(0,a.kt)("p",null,"et"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom relation color and font",src:n(19321).Z,width:"2026",height:"1886"})),(0,a.kt)("p",null,"Vous pouvez d\xe9sormais cr\xe9er votre projet depuis l'\xe9diteur de projet !"),(0,a.kt)("p",null,"Il devrait ressembler \xe0 ceci :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom relation color and font",src:n(54509).Z,width:"1701",height:"992"})),(0,a.kt)("h3",{id:"taille-et-contraintes"},"Taille et contraintes"),(0,a.kt)("p",null,"A noter que si vous ",(0,a.kt)("strong",{parentName:"p"},"ajoutez des contraintes")," \xe0 votre bouton, vous devrez \xe9galement modifier le fichier xib xml pour ",(0,a.kt)("strong",{parentName:"p"},"ajouter des TAGS")," comme pour les templates de formulaires d\xe9taill\xe9s personnalis\xe9s. Cela permet de dupliquer correctement le bouton lorsque plusieurs liens sont disponibles dans la m\xeame vue d\xe9taill\xe9e."),(0,a.kt)("p",null,"C'est tr\xe8s pratique, puisque nous pr\xe9voyons d'ajouter quelques contraintes !"),(0,a.kt)("h4",{id:"ajouter-des-contraintes"},"Ajouter des contraintes"),(0,a.kt)("p",null,"Pour ce tutoriel, nous allons simplement ajouter une hauteur de bouton car nous souhaitons qu\u2019il soit plus grand \xe0 l\u2019\xe9cran."),(0,a.kt)("p",null,"Etape 1. S\xe9lectionnez d\u2019abord la vue et remplacez la hauteur (123) par 40"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Button view height",src:n(49680).Z,width:"2030",height:"1858"})),(0,a.kt)("p",null,"Etape 2. Double-cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Top Space Constraint")," et remplacez sa valeur (8) par 0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Top Space constraint",src:n(12671).Z,width:"2030",height:"1858"})),(0,a.kt)("p",null,"\xc9tape 3. Faites la m\xeame chose avec ",(0,a.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," et remplacez sa valeur (8) par 0"),(0,a.kt)("p",null,"Vous devriez obtenir ceci :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom  button constraints",src:n(96834).Z,width:"2030",height:"1858"})),(0,a.kt)("p",null,"Etape 4. Ajoutez une contrainte de hauteur de 40"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Button height constraint",src:n(6420).Z,width:"2030",height:"1858"})),(0,a.kt)("p",null,"Vous devriez obtenir ceci :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Horizontal in container",src:n(5082).Z,width:"1701",height:"992"})),(0,a.kt)("p",null,"Pour informer l'\xe9diteur de projet que tous les \xe9l\xe9ments compris dans cette vue seront dupliqu\xe9s, nous devons ajouter un TAG \xe0 chaque \xe9l\xe9ment et \xe0 chaque contrainte."),(0,a.kt)("h3",{id:"ajouter-des-tags"},"Ajouter des TAGS"),(0,a.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,a.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Object ID Storyboard",src:n(73758).Z,width:"2050",height:"1280"})),(0,a.kt)("p",null,"Le processus est un peu d\xe9licat... Nous allons donc commencer par ouvrir le fichier storyboard avec l'\xe9diteur de code de votre choix !"),(0,a.kt)("h4",{id:"ajouter-un-tag-\xe0-la-contrainte-de-hauteur"},"Ajouter un tag \xe0 la contrainte de hauteur"),(0,a.kt)("p",null,"Etape 1. S\xe9lectionnez-le \xe0 partir du Storyboard pour lire l'identifiant de l'objet"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Horizontal constraint object ID",src:n(53063).Z,width:"2050",height:"1280"})),(0,a.kt)("p",null,"Etape 2. Recherchez cet ID dans le fichier xml et remplacez-le par ",(0,a.kt)("strong",{parentName:"p"},"TAG-RL-007")," (un Tag qui n'est pas d\xe9j\xe0 utilis\xe9)."),(0,a.kt)("p",null,"\xc9tape 3. Enregistrez le fichier xml"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Horizontal constraint xml file",src:n(95258).Z,width:"1782",height:"1434"})),(0,a.kt)("p",null,"Etape 4. Concentrez-vous sur le Storyboard pour v\xe9rifier si la contrainte a \xe9t\xe9 mise \xe0 jour correctement"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Horizontal object ID updated",src:n(40586).Z,width:"2050",height:"1280"})),(0,a.kt)("p",null,"Et voil\xe0 ! Votre bouton est maintenant enti\xe8rement duplicable si vous avez plus d'un bouton de lien \xe0 afficher ..."),(0,a.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,a.kt)("p",null,"Dans ce tutoriel, nous avons couvert les aspects fondamentaux de la cr\xe9ation de boutons Relation. Cliquez sur le Projet final ci-dessous pour t\xe9l\xe9charger le bouton de liens personnalis\xe9."),(0,a.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"Download")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6420:function(e,t,n){t.Z=n.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},49680:function(e,t,n){t.Z=n.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},96834:function(e,t,n){t.Z=n.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},73758:function(e,t,n){t.Z=n.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},27283:function(e,t,n){t.Z=n.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},19321:function(e,t,n){t.Z=n.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},5082:function(e,t,n){t.Z=n.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},54509:function(e,t,n){t.Z=n.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},53063:function(e,t,n){t.Z=n.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},95258:function(e,t,n){t.Z=n.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},40586:function(e,t,n){t.Z=n.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"},91173:function(e,t,n){t.Z=n.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},25321:function(e,t,n){t.Z=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},85463:function(e,t,n){t.Z=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},12671:function(e,t,n){t.Z=n.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"}}]);