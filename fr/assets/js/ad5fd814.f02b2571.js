"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6096],{90543:function(e,t,l){l.r(t),l.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var i=l(83117),n=l(80102),a=(l(67294),l(3905)),o=["components"],r={id:"customize-your-ios-app",title:"Personnaliser son application 4D for iOS"},s=void 0,u={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"tutorials/customizing-with-xcode/customize-your-ios-app",title:"Personnaliser son application 4D for iOS",description:"Apportons quelques modifications au storyboard... en allant du plus simple au plus complexe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/fr/docs/next/tutorials/customizing-with-xcode/customize-your-ios-app",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"current",frontMatter:{id:"customize-your-ios-app",title:"Personnaliser son application 4D for iOS"},sidebar:"tutorials",previous:{title:"Organiser un projet 4D for iOS",permalink:"/go-mobile/fr/docs/next/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Choisir un Apple Developer Program",permalink:"/go-mobile/fr/docs/next/tutorials/developer-program/selecting-your-developer-program"}},p={},c=[{value:"\xc9TAPE 1. Modification simple du libell\xe9",id:"\xe9tape-1-modification-simple-du-libell\xe9",level:2},{value:"\xc9TAPE 2. Modification de la position de la photo de profil",id:"\xe9tape-2-modification-de-la-position-de-la-photo-de-profil",level:2},{value:"\xc9TAPE 3. Mise \xe0 jour des contraintes de la photo de profil",id:"\xe9tape-3-mise-\xe0-jour-des-contraintes-de-la-photo-de-profil",level:2},{value:"\xc9TAPE 4. Mise \xe0 jour de l&#39;emplacement et des contraintes des libell\xe9s",id:"\xe9tape-4-mise-\xe0-jour-de-lemplacement-et-des-contraintes-des-libell\xe9s",level:2},{value:"Nous allons nous pencher sur le libell\xe9 First Name.",id:"nous-allons-nous-pencher-sur-le-libell\xe9-first-name",level:4},{value:"Pour finir, concentrons-nous sur le libell\xe9 Last Name.",id:"pour-finir-concentrons-nous-sur-le-libell\xe9-last-name",level:4}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apportons quelques modifications au storyboard... en allant du plus simple au plus complexe."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Final result",src:l(69882).Z,width:"1276",height:"1134"})),(0,a.kt)("h2",{id:"\xe9tape-1-modification-simple-du-libell\xe9"},"\xc9TAPE 1. Modification simple du libell\xe9"),(0,a.kt)("p",null,"Nous allons commencer par modifier la police et la couleur du libell\xe9\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ouvrez le fichier ",(0,a.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," \xe0 partir de l\u2019onglet Navigation."),(0,a.kt)("li",{parentName:"ul"},"Cliquez sur le libell\xe9 First Name (vous pouvez \xe9galement le s\xe9lectionner depuis l'Interface Builder ou le volet de gauche)."),(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le volet Attributes inspector (Inspecteur d'attributs) dans Utility area (la zone de fonctionnalit\xe9s).")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Attributes inspector",src:l(29173).Z,width:"1117",height:"790"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remplacez la police Helvetica Neue Bold par Futura Bold.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Attributes inspector font",src:l(14145).Z,width:"1291",height:"1006"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous pouvez \xe9galement modifier la couleur de la police dans le m\xeame volet.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Attributes inspector color",src:l(92757).Z,width:"1291",height:"1006"})),(0,a.kt)("h2",{id:"\xe9tape-2-modification-de-la-position-de-la-photo-de-profil"},"\xc9TAPE 2. Modification de la position de la photo de profil"),(0,a.kt)("p",null,"Tous les mod\xe8les de 4D for iOS appliquent des contraintes aux \xe9l\xe9ments de l'application afin qu'ils s'affichent correctement sur tous les appareils."),(0,a.kt)("p",null,"Dans le fichier ",(0,a.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", les libell\xe9s Photo, First Name et Last Name sont actuellement centr\xe9s."),(0,a.kt)("p",null,"Nous allons apporter quelques modifications de fa\xe7on \xe0 les afficher comme suit\xa0:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Simulator result",src:l(80893).Z,width:"545",height:"964"})),(0,a.kt)("p",null,"Tout d\u2019abord, alignez l\u2019image verticalement et faites glisser les libell\xe9s First Name et Last Name \xe0 droite de l\u2019image."),(0,a.kt)("p",null,"S\xe9lectionnez ensuite l\u2019image et acc\xe9dez au volet Size attributes (attributs des dimensions) depuis la Utility zone (la zone de fonctionnalit\xe9s). Remplacez la valeur 161.67 de X par la valeur 40,67 et la valeur 28 de Y par la valeur 79."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Profil picture position",src:l(61916).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"Comme vous pouvez le voir, la position a chang\xe9 mais Xcode affiche des lignes jaunes. Pourquoi\xa0? Ces lignes jaunes repr\xe9sentent des contraintes qui ne sont plus valables."),(0,a.kt)("h2",{id:"\xe9tape-3-mise-\xe0-jour-des-contraintes-de-la-photo-de-profil"},"\xc9TAPE 3. Mise \xe0 jour des contraintes de la photo de profil"),(0,a.kt)("p",null,"Pour aligner verticalement l\u2019image au centre, dans le Superview (l\u2019affichage qui contient l'image), nous devons supprimer les contraintes (Constraints) existantes et en ajouter de nouvelles."),(0,a.kt)("p",null,"L\u2019image pr\xe9sente actuellement les contraintes suivantes\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Width Equals : une largeur de 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Height Equals : une hauteur de 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Align Center X: Centers the image on a previously defined horizontal axis."),(0,a.kt)("li",{parentName:"ul"},"Top Space : un espace allant de la partie sup\xe9rieure de l'image \xe0 la partie sup\xe9rieure de la vue."),(0,a.kt)("li",{parentName:"ul"},"Bottom space to ",(0,a.kt)("inlineCode",{parentName:"li"},"<First Name>"),": The previously defined space between the First Name label and the image.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Profil picture constraints",src:l(5456).Z,width:"312",height:"397"})),(0,a.kt)("p",null,"Supprimez toutes les contraintes \xe0 l'exception de Width et Height (vous devrez les modifier plus tard \xe0 partir du Size inspector (l'inspecteur de dimensions) dans la section \"Constraints\" consacr\xe9e aux contraintes). Le contour de l\u2019image devrait maintenant \xeatre en rouge car les contraintes ne sont pas renseign\xe9es."),(0,a.kt)("p",null,"Cliquez sur le bouton Align (dans la partie inf\xe9rieure de la fen\xeatre Interface Builder) et cochez la case ",(0,a.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Profil picture Align",src:l(71429).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"Cliquez ensuite sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Add New Constraints")," et ajoutez une contrainte de leading space (la contrainte de gauche)."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Profil picture new constraints",src:l(32928).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"\xc0 ce stade, toutes les contraintes de photo de profil doivent \xeatre en bleu."),(0,a.kt)("p",null,"F\xe9licitations\xa0! Votre photo de profil est maintenant bien plac\xe9e et respecte les contraintes d\xe9finies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ASTUCES")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To create a constraint between two views, press Ctrl and drag one of the views to the other. Lorsque vous rel\xe2chez le bouton de la souris, l\u2019Interface Builder affiche un menu avec une liste de contraintes \xe9ventuelles.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.")))),(0,a.kt)("h2",{id:"\xe9tape-4-mise-\xe0-jour-de-lemplacement-et-des-contraintes-des-libell\xe9s"},"\xc9TAPE 4. Mise \xe0 jour de l'emplacement et des contraintes des libell\xe9s"),(0,a.kt)("h4",{id:"nous-allons-nous-pencher-sur-le-libell\xe9-first-name"},"Nous allons nous pencher sur le libell\xe9 First Name."),(0,a.kt)("p",null,"Nous allons commencer par modifier la position et la largeur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le premier libell\xe9 First Name \xe0 partir de l'Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Remplacez ensuite la valeur 386 pixels de la largeur par 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 8 pixels de X par 40,67 pixels et la valeur 28 pixels de Y par 79 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"First Name Label position",src:l(81751).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Modifiez les contraintes restantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supprimez les contraintes de leading space et de bottom space \xe0 partir du Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Ajoutez une contrainte de leading space en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Add New Constraints")," pour placer le libell\xe9 First Name \xe0 droite de la photo de profil."),(0,a.kt)("li",{parentName:"ul"},"Appuyez sur la touche Ctrl et faites glisser le libell\xe9 First Name vers la photo de profil. S\xe9lectionnez la contrainte sup\xe9rieure dans le menu pour aligner les deux \xe9l\xe9ments vers le haut.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"First Name Label top constraint",src:l(25065).Z,width:"1139",height:"1040"})),(0,a.kt)("h4",{id:"pour-finir-concentrons-nous-sur-le-libell\xe9-last-name"},"Pour finir, concentrons-nous sur le libell\xe9 Last Name."),(0,a.kt)("p",null,"Modifiez l'emplacement et la largeur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le premier libell\xe9 Last Name \xe0 partir de l'Interface Buider"),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 386 pixels de la largeur par 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 8 pixels de X par 127 pixels et la valeur 144.33 pixels de Y par 118.33 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Last Name Label position",src:l(27542).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Modifiez les contraintes restantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supprimez les contraintes de leading space \xe0 partir du Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Ajoutez des contraintes d'espace principal et d'espace sup\xe9rieur en cliquant sur le bouton Add New Constraints.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Last Name Label constraint",src:l(60606).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Vos deux libell\xe9s sont maintenant repositionn\xe9s."),(0,a.kt)("p",null,"Voyons les r\xe9sultats dans le simulateur\xa0!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Simulator result",src:l(16347).Z,width:"545",height:"964"})),(0,a.kt)("p",null,"Hum... Cela ne correspond pas exactement \xe0 ce que nous souhaitions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez les libell\xe9s First Name et Last Name et remplacez l'alignement centr\xe9 par un alignement \xe0 gauche dans l'Attributes inspector.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Labels Alignment",src:l(56969).Z,width:"1139",height:"1040"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez ensuite la photo de profil et double-cliquez sur la contrainte de leading space."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 40.67 pixels de la constante par la valeur 80 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Constraints adjustments",src:l(55446).Z,width:"1140",height:"1065"})),(0,a.kt)("p",null,"C'est beaucoup mieux ! D\xe9sormais, toutes les contraintes sont appliqu\xe9es et les libell\xe9s sont conformes aux autres contraintes."),(0,a.kt)("p",null,"Comme vous avez pu le voir, la personnalisation de votre application est tr\xe8s simple\xa0!"))}m.isMDXComponent=!0},3905:function(e,t,l){l.d(t,{Zo:function(){return p},kt:function(){return m}});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(l),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return l?i.createElement(f,o(o({ref:t},p),{},{components:l})):i.createElement(f,o({ref:t},p))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var u=2;u<a;u++)o[u]=l[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,l)}d.displayName="MDXCreateElement"},29173:function(e,t,l){t.Z=l.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},92757:function(e,t,l){t.Z=l.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},14145:function(e,t,l){t.Z=l.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},55446:function(e,t,l){t.Z=l.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},81751:function(e,t,l){t.Z=l.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},25065:function(e,t,l){t.Z=l.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},56969:function(e,t,l){t.Z=l.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},60606:function(e,t,l){t.Z=l.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},27542:function(e,t,l){t.Z=l.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},71429:function(e,t,l){t.Z=l.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},5456:function(e,t,l){t.Z=l.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},32928:function(e,t,l){t.Z=l.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},61916:function(e,t,l){t.Z=l.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},69882:function(e,t,l){t.Z=l.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},80893:function(e,t,l){t.Z=l.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},16347:function(e,t,l){t.Z=l.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);