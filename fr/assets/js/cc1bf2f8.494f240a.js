(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9930],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return m}});var l=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(i),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return i?l.createElement(f,r(r({ref:t},p),{},{components:i})):l.createElement(f,r({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var u=2;u<a;u++)r[u]=i[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},86541:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var l=i(22122),n=i(19756),a=(i(67294),i(3905)),r=["components"],o={id:"customize-your-ios-app",title:"Personnaliser son application 4D for iOS"},s=void 0,u={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app",isDocsHomePage:!1,title:"Personnaliser son application 4D for iOS",description:"Apportons quelques modifications au storyboard... en allant du plus simple au plus complexe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/customize-your-ios-app",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app.md",version:"19-R2",frontMatter:{id:"customize-your-ios-app",title:"Personnaliser son application 4D for iOS"},sidebar:"version-19-R2/tutorials",previous:{title:"Organiser un projet 4D for iOS",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Choisir un Apple Developer Program",permalink:"/go-mobile/fr/docs/tutorials/developer-program/selecting-your-developer-program"}},p=[{value:"\xc9TAPE 1. Modification simple du libell\xe9",id:"\xe9tape-1-modification-simple-du-libell\xe9",children:[]},{value:"\xc9TAPE 2. Modification de la position de la photo de profil",id:"\xe9tape-2-modification-de-la-position-de-la-photo-de-profil",children:[]},{value:"\xc9TAPE 3. Mise \xe0 jour des contraintes de la photo de profil",id:"\xe9tape-3-mise-\xe0-jour-des-contraintes-de-la-photo-de-profil",children:[]},{value:"\xc9TAPE 4. Mise \xe0 jour de l&#39;emplacement et des contraintes des libell\xe9s",id:"\xe9tape-4-mise-\xe0-jour-de-lemplacement-et-des-contraintes-des-libell\xe9s",children:[]}],c={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apportons quelques modifications au storyboard... en allant du plus simple au plus complexe."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:i(66330).Z})),(0,a.kt)("h2",{id:"\xe9tape-1-modification-simple-du-libell\xe9"},"\xc9TAPE 1. Modification simple du libell\xe9"),(0,a.kt)("p",null,"Nous allons commencer par modifier la police et la couleur du libell\xe9\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ouvrez le fichier ",(0,a.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," \xe0 partir de l\u2019onglet Navigation."),(0,a.kt)("li",{parentName:"ul"},"Cliquez sur le libell\xe9 First Name (vous pouvez \xe9galement le s\xe9lectionner depuis l'Interface Builder ou le volet de gauche)."),(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le volet Attributes inspector (Inspecteur d'attributs) dans Utility area (la zone de fonctionnalit\xe9s).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector",src:i(99496).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remplacez la police Helvetica Neue Bold par Futura Bold.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector font",src:i(3587).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous pouvez \xe9galement modifier la couleur de la police dans le m\xeame volet.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector color",src:i(79020).Z})),(0,a.kt)("h2",{id:"\xe9tape-2-modification-de-la-position-de-la-photo-de-profil"},"\xc9TAPE 2. Modification de la position de la photo de profil"),(0,a.kt)("p",null,"Tous les mod\xe8les de 4D for iOS appliquent des contraintes aux \xe9l\xe9ments de l'application afin qu'ils s'affichent correctement sur tous les appareils."),(0,a.kt)("p",null,"Dans le fichier ",(0,a.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", les libell\xe9s Photo, First Name et Last Name sont actuellement centr\xe9s."),(0,a.kt)("p",null,"Nous allons apporter quelques modifications de fa\xe7on \xe0 les afficher comme suit\xa0:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(84643).Z})),(0,a.kt)("p",null,"Tout d\u2019abord, alignez l\u2019image verticalement et faites glisser les libell\xe9s First Name et Last Name \xe0 droite de l\u2019image."),(0,a.kt)("p",null,"S\xe9lectionnez ensuite l\u2019image et acc\xe9dez au volet Size attributes (attributs des dimensions) depuis la Utility zone (la zone de fonctionnalit\xe9s). Remplacez la valeur 161.67 de X par la valeur 40,67 et la valeur 28 de Y par la valeur 79."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture position",src:i(7914).Z})),(0,a.kt)("p",null,"Comme vous pouvez le voir, la position a chang\xe9 mais Xcode affiche des lignes jaunes. Pourquoi\xa0? Ces lignes jaunes repr\xe9sentent des contraintes qui ne sont plus valables."),(0,a.kt)("h2",{id:"\xe9tape-3-mise-\xe0-jour-des-contraintes-de-la-photo-de-profil"},"\xc9TAPE 3. Mise \xe0 jour des contraintes de la photo de profil"),(0,a.kt)("p",null,"Pour aligner verticalement l\u2019image au centre, dans le Superview (l\u2019affichage qui contient l'image), nous devons supprimer les contraintes (Constraints) existantes et en ajouter de nouvelles."),(0,a.kt)("p",null,"L\u2019image pr\xe9sente actuellement les contraintes suivantes\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Width Equals : une largeur de 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Height Equals : une hauteur de 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Align Center X: Centers the image on a previously defined horizontal axis."),(0,a.kt)("li",{parentName:"ul"},"Top Space : un espace allant de la partie sup\xe9rieure de l'image \xe0 la partie sup\xe9rieure de la vue."),(0,a.kt)("li",{parentName:"ul"},"Bottom space to ",(0,a.kt)("inlineCode",{parentName:"li"},"<First Name>"),": The previously defined space between the First Name label and the image.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture constraints",src:i(35364).Z})),(0,a.kt)("p",null,"Supprimez toutes les contraintes \xe0 l'exception de Width et Height (vous devrez les modifier plus tard \xe0 partir du Size inspector (l'inspecteur de dimensions) dans la section \"Constraints\" consacr\xe9e aux contraintes). Le contour de l\u2019image devrait maintenant \xeatre en rouge car les contraintes ne sont pas renseign\xe9es."),(0,a.kt)("p",null,"Cliquez sur le bouton Align (dans la partie inf\xe9rieure de la fen\xeatre Interface Builder) et cochez la case ",(0,a.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture Align",src:i(54160).Z})),(0,a.kt)("p",null,"Cliquez ensuite sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Add New Constraints")," et ajoutez une contrainte de leading space (la contrainte de gauche)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture new constraints",src:i(45530).Z})),(0,a.kt)("p",null,"\xc0 ce stade, toutes les contraintes de photo de profil doivent \xeatre en bleu."),(0,a.kt)("p",null,"F\xe9licitations\xa0! Votre photo de profil est maintenant bien plac\xe9e et respecte les contraintes d\xe9finies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ASTUCES")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To create a constraint between two views, press Ctrl and drag one of the views to the other. Lorsque vous rel\xe2chez le bouton de la souris, l\u2019Interface Builder affiche un menu avec une liste de contraintes \xe9ventuelles.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.")))),(0,a.kt)("h2",{id:"\xe9tape-4-mise-\xe0-jour-de-lemplacement-et-des-contraintes-des-libell\xe9s"},"\xc9TAPE 4. Mise \xe0 jour de l'emplacement et des contraintes des libell\xe9s"),(0,a.kt)("h4",{id:"nous-allons-nous-pencher-sur-le-libell\xe9-first-name"},"Nous allons nous pencher sur le libell\xe9 First Name."),(0,a.kt)("p",null,"Nous allons commencer par modifier la position et la largeur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le premier libell\xe9 First Name \xe0 partir de l'Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Remplacez ensuite la valeur 386 pixels de la largeur par 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 8 pixels de X par 40,67 pixels et la valeur 28 pixels de Y par 79 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label position",src:i(11382).Z})),(0,a.kt)("p",null,"Modifiez les contraintes restantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supprimez les contraintes de leading space et de bottom space \xe0 partir du Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Ajoutez une contrainte de leading space en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Add New Constraints")," pour placer le libell\xe9 First Name \xe0 droite de la photo de profil."),(0,a.kt)("li",{parentName:"ul"},"Appuyez sur la touche Ctrl et faites glisser le libell\xe9 First Name vers la photo de profil. S\xe9lectionnez la contrainte sup\xe9rieure dans le menu pour aligner les deux \xe9l\xe9ments vers le haut.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label top constraint",src:i(22055).Z})),(0,a.kt)("h4",{id:"pour-finir-concentrons-nous-sur-le-libell\xe9-last-name"},"Pour finir, concentrons-nous sur le libell\xe9 Last Name."),(0,a.kt)("p",null,"Modifiez l'emplacement et la largeur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le premier libell\xe9 Last Name \xe0 partir de l'Interface Buider"),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 386 pixels de la largeur par 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 8 pixels de X par 127 pixels et la valeur 144.33 pixels de Y par 118.33 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label position",src:i(32431).Z})),(0,a.kt)("p",null,"Modifiez les contraintes restantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supprimez les contraintes de leading space \xe0 partir du Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Ajoutez des contraintes d'espace principal et d'espace sup\xe9rieur en cliquant sur le bouton Add New Constraints.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label constraint",src:i(26018).Z})),(0,a.kt)("p",null,"Vos deux libell\xe9s sont maintenant repositionn\xe9s."),(0,a.kt)("p",null,"Voyons les r\xe9sultats dans le simulateur\xa0!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(48507).Z})),(0,a.kt)("p",null,"Hum... Cela ne correspond pas exactement \xe0 ce que nous souhaitions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez les libell\xe9s First Name et Last Name et remplacez l'alignement centr\xe9 par un alignement \xe0 gauche dans l'Attributes inspector.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labels Alignment",src:i(77786).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez ensuite la photo de profil et double-cliquez sur la contrainte de leading space."),(0,a.kt)("li",{parentName:"ul"},"Remplacez la valeur 40.67 pixels de la constante par la valeur 80 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Constraints adjustments",src:i(19823).Z})),(0,a.kt)("p",null,"C'est beaucoup mieux ! D\xe9sormais, toutes les contraintes sont appliqu\xe9es et les libell\xe9s sont conformes aux autres contraintes."),(0,a.kt)("p",null,"Comme vous avez pu le voir, la personnalisation de votre application est tr\xe8s simple\xa0!"))}d.isMDXComponent=!0},99496:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},79020:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},3587:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},19823:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},11382:function(e,t,i){"use strict";t.Z=i.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},22055:function(e,t,i){"use strict";t.Z=i.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},77786:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},26018:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},32431:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},54160:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},35364:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},45530:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},7914:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},66330:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},84643:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},48507:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);