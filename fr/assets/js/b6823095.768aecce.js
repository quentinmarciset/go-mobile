(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3999],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),u=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return a?i.createElement(k,l(l({ref:t},d),{},{components:a})):i.createElement(k,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94958:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=a(22122),n=a(19756),r=(a(67294),a(3905)),l=["components"],s={id:"detail-form-template-storyboard",title:"iOS Storyboard"},o=void 0,u={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R2/tutorials/creating-detail-forms/detail-form-template-storyboard",isDocsHomePage:!1,title:"iOS Storyboard",description:"Now it's time to create your iOS detail form interface with Xcode.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-storyboard.md",version:"19-R2",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R2/tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Android Layout",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-layout"}},d=[{value:"Ouvrir le fichier storyboard avec Xcode",id:"ouvrir-le-fichier-storyboard-avec-xcode",children:[]},{value:"Ajouter une &quot;Scroll View&quot;",id:"ajouter-une-scroll-view",children:[]},{value:"Ajouter une &quot;Vertical Stack View&quot;",id:"ajouter-une-vertical-stack-view",children:[]},{value:"Ajouter des vues au Stack Views",id:"ajouter-des-vues-au-stack-views",children:[]},{value:"Ajoutez une Image View au Field View 1",id:"ajoutez-une-image-view-au-field-view-1",children:[]},{value:"Ajouter des libell\xe9s au Field View 2",id:"ajouter-des-libell\xe9s-au-field-view-2",children:[{value:"Libell\xe9 Titre",id:"libell\xe9-titre",children:[]},{value:"Libell\xe9 Contenu",id:"libell\xe9-contenu",children:[]}]},{value:"Comment entrer des donn\xe9es dans vos cellules",id:"comment-entrer-des-donn\xe9es-dans-vos-cellules",children:[{value:"Image View",id:"image-view",children:[]},{value:"Libell\xe9s",id:"libell\xe9s",children:[]}]},{value:"Ajouter des TAGS aux cellules dupliqu\xe9es",id:"ajouter-des-tags-aux-cellules-dupliqu\xe9es",children:[{value:"Field View 2",id:"field-view-2",children:[]},{value:"Premier libell\xe9",id:"premier-libell\xe9",children:[]},{value:"Deuxi\xe8me libell\xe9",id:"deuxi\xe8me-libell\xe9",children:[]},{value:"Contraintes",id:"contraintes",children:[]},{value:"Personnaliser votre application",id:"personnaliser-votre-application",children:[]}]},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",children:[]}],p={toc:d};function c(e){var t=e.components,s=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now it's time to create your iOS detail form interface with Xcode."),(0,r.kt)("p",null,"Voici le r\xe9sultat que nous souhaitons obtenir :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom detailform",src:a(31281).Z})),(0,r.kt)("p",null,"For this template, we're going to add a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une photo de profil dans l'en-t\xeate"),(0,r.kt)("li",{parentName:"ul"},"Un champ \xe0 dupliquer")),(0,r.kt)("h2",{id:"ouvrir-le-fichier-storyboard-avec-xcode"},"Ouvrir le fichier storyboard avec Xcode"),(0,r.kt)("p",null,"Dans un premier temps, ouvrez votre fichier storyboard dans Xcode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty storyboard custom template",src:a(90501).Z})),(0,r.kt)("p",null,"It's quite empty, so let's add some content!"),(0,r.kt)("h2",{id:"ajouter-une-scroll-view"},'Ajouter une "Scroll View"'),(0,r.kt)("p",null,"Pour que notre formulaire d\xe9taill\xe9 soit d\xe9roulant, la premi\xe8re \xe9tape consiste \xe0 faire glisser et d\xe9poser une \xab\xa0Scroll View \xbb (vue de d\xe9filement) depuis la ",(0,r.kt)("strong",{parentName:"p"},"Biblioth\xe8que d'objets"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Scroll View Storyboard",src:a(33303).Z})),(0,r.kt)("p",null,"\xc0 partir du ",(0,r.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez la largeur de la Scroll vue \xe0 359 et la valeur de sa hauteur \xe0 667. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 0."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scroll View position height and width",src:a(47816).Z})),(0,r.kt)("p",null,"Ajoutez ensuite quatre contraintes en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: 8, Top: 0, et Bottom: Multiple) comme suit :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scrollview Constraints",src:a(31290).Z})),(0,r.kt)("h2",{id:"ajouter-une-vertical-stack-view"},'Ajouter une "Vertical Stack View"'),(0,r.kt)("p",null,'Glissez et d\xe9posez une "Vertical Stack View" depuis la ',(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),' vers la "Scroll view". A partir du ',(0,r.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez ensuite la largeur de la vue sur 359 et sa hauteur sur 202. Enfin, d\xe9finissez la valeur de X sur 0 et la valeur de Y sur 8."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add stackview Storyboard",src:a(29351).Z})),(0,r.kt)("p",null,'La hauteur et la largeur de la "Stack View" \xe9tant d\xe9finies par les \xe9l\xe9ments qu\'elle contient, nous allons configurer les dimensions et les contraintes plus tard.'),(0,r.kt)("h2",{id:"ajouter-des-vues-au-stack-views"},"Ajouter des vues au Stack Views"),(0,r.kt)("p",null,"Glissez et d\xe9posez une vue depuis la ",(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets")," vers la Stack View que vous venez d\u2019ajouter \xe0 votre Storyboard. Nommons-la ",(0,r.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Field View 1",src:a(1981).Z})),(0,r.kt)("p",null,"Faites ensuite glisser directement une autre vue depuis la ",(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),' et d\xe9posez-la dans le "Document Outline" au m\xeame niveau que Field View 1 (pour l\u2019int\xe9grer \xe0 la Stack View) et nommez-la ',(0,r.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Field View 2",src:a(68170).Z})),(0,r.kt)("p",null,'Pour ajouter des espaces entre les vues, s\xe9lectionnez votre "Stack View" et affectez-lui une valeur d\u2019espacement de 8 (dans l\u2019Attributes Inspector).'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stackview spacing",src:a(61417).Z})),(0,r.kt)("p",null,"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Field View 1")," et ",(0,r.kt)("strong",{parentName:"p"},"Field View 2")," et d\xe9finissez, dans le ",(0,r.kt)("strong",{parentName:"p"},"Size inspector")," (\xe0 droite de l'Interface Builder), la valeur de la largeur sur 359 et celle de la hauteur \xe0 97."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"views position height and width",src:a(57147).Z})),(0,r.kt)("p",null,"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Field View 1")," et ajoutez trois contraintes en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0 et Top: 0) :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Field Views constraints",src:a(396).Z})),(0,r.kt)("p",null,'Pour que les "Stack View" et "Scroll View" soient de la m\xeame largeur, vous devez ajouter une contrainte :'),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},"Ctrl"),' and drag the Stack View to the Scroll View. Lorsque vous rel\xe2chez le bouton de la souris, l\u2019Interface Builder affiche un menu avec une liste de contraintes \xe9ventuelles. S\xe9lectionnez "Equal Width" !'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stack View Equal Width",src:a(93355).Z})),(0,r.kt)("p",null,"Ajoutez ensuite quatre contraintes avec la Stack View en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 8, et Bottom: 0) comme suit :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stackview constraints",src:a(2696).Z})),(0,r.kt)("p",null,"Voil\xe0 ce qui s'affichera lorsque les contraintes auront \xe9t\xe9 ajout\xe9es :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stackview final constraints",src:a(5619).Z})),(0,r.kt)("p",null,"Maintenant que vous disposez de deux vues dans votre Stack View et que vous avez d\xe9fini les contraintes, concentrons-nous sur Field View 1."),(0,r.kt)("h2",{id:"ajoutez-une-image-view-au-field-view-1"},"Ajoutez une Image View au Field View 1"),(0,r.kt)("p",null,"\xc0 partir de l'",(0,r.kt)("strong",{parentName:"p"},"Object library")," (la bibilioth\xe8que d'objets), glissez-d\xe9posez une  ",(0,r.kt)("strong",{parentName:"p"},"Image View")," (une vue d'image) dans Field View 1."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Image View storyboard",src:a(94093).Z})),(0,r.kt)("p",null,"\xc0 partir du ",(0,r.kt)("strong",{parentName:"p"},"Size inspector")," (\xe0 droite de l\u2019Interface Builder), d\xe9finissez la largeur de l'Image View sur 359 et sa hauteur sur 97. D\xe9finissez ensuite la valeur de X sur 0 et la valeur de Y sur 0."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View position height and width",src:a(74015).Z})),(0,r.kt)("p",null,"Ajoutez ensuite quatre contraintes en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 0, et Bottom: 0) comme suit :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View constraints",src:a(68243).Z})),(0,r.kt)("p",null,"Dans le ",(0,r.kt)("strong",{parentName:"p"},"Size inspector"),", remplacez la valeur ",(0,r.kt)("strong",{parentName:"p"},"Default")," de l'Intrinsic Size par ",(0,r.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Intrinsic size Image View",src:a(21616).Z})),(0,r.kt)("h2",{id:"ajouter-des-libell\xe9s-au-field-view-2"},"Ajouter des libell\xe9s au Field View 2"),(0,r.kt)("h3",{id:"libell\xe9-titre"},"Libell\xe9 Titre"),(0,r.kt)("p",null,"Dans la ",(0,r.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),", glissez-d\xe9posez un ",(0,r.kt)("strong",{parentName:"p"},"Libell\xe9")," dans Field View 2 et d\xe9finissez la largeur sur 342 et la hauteur sur 22. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 8."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add label",src:a(29519).Z})),(0,r.kt)("p",null,'Double click on the label and name it "',(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),"\". Ensuite, \xe0 partir de l'",(0,r.kt)("strong",{parentName:"p"},"attribute inspector"),", s\xe9lectionnez la police ",(0,r.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," et la couleur ",(0,r.kt)("strong",{parentName:"p"},"BackgroundColor")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Title label font and color",src:a(29646).Z})),(0,r.kt)("h3",{id:"libell\xe9-contenu"},"Libell\xe9 Contenu"),(0,r.kt)("p",null,"Dupliquez le libell\xe9 Titre et d\xe9finissez la largeur du libell\xe9 dupliqu\xe9 sur 339 et sa hauteur sur 44. D\xe9finissez ensuite la valeur de X sur 12 et la valeur de Y sur 37."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add label",src:a(54672).Z})),(0,r.kt)("p",null,'Double click on the label and name it "',(0,r.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),"\". Ensuite, \xe0 partir de l'",(0,r.kt)("strong",{parentName:"p"},"attribute inspector"),", s\xe9lectionnez la police ",(0,r.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," et la couleur ",(0,r.kt)("strong",{parentName:"p"},"Black Color")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Content label font and color",src:a(97646).Z})),(0,r.kt)("p",null,"S\xe9lectionnez les deux libell\xe9s Contenu et Titre et ajoutez quatre contraintes en cliquant sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: Multiple, Top: Multiple, et Bottom: Multiple) comme suit :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Title and Content labels constraints",src:a(65457).Z})),(0,r.kt)("p",null,"La partie sur les \xe9l\xe9ments graphiques est termin\xe9e ! All of your constraints are well defined."),(0,r.kt)("h2",{id:"comment-entrer-des-donn\xe9es-dans-vos-cellules"},"Comment entrer des donn\xe9es dans vos cellules"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"S\xe9lectionnez votre Vue Image, cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Identity inspector")," et allez dans User Defined Runtime Attributes. Cliquez sur le ",(0,r.kt)("strong",{parentName:"p"},"bouton +")," pour ajouter une ligne."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User defined runtime attributes",src:a(82856).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": Start with bindTo to activate binding on the component. Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,r.kt)("inlineCode",{parentName:"p"},"String"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Identity inspector storyboard",src:a(57928).Z})),(0,r.kt)("h3",{id:"libell\xe9s"},"Libell\xe9s"),(0,r.kt)("p",null,"Pour le ",(0,r.kt)("strong",{parentName:"p"},"premier libell\xe9"),", nous allons ajouter plusieurs lignes, principalement pour afficher des ic\xf4nes :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label1 User Defined Runtime Attributes",src:a(59276).Z})),(0,r.kt)("p",null,"You also need to set the Class to ",(0,r.kt)("inlineCode",{parentName:"p"},"IconLabel")," and check the ",(0,r.kt)("strong",{parentName:"p"},"Inherit Module From Target")," checkbox as we can see below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label1 Custom Class",src:a(52679).Z})),(0,r.kt)("p",null,"Select the ",(0,r.kt)("strong",{parentName:"p"},"second label")," and add a row in the Defined Runtime Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"String"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label2 User Defined Runtime Attributes",src:a(87785).Z})),(0,r.kt)("h2",{id:"ajouter-des-tags-aux-cellules-dupliqu\xe9es"},"Ajouter des TAGS aux cellules dupliqu\xe9es"),(0,r.kt)("p",null,"Field View 2 inclut des \xe9l\xe9ments qui seront dupliqu\xe9s, pour vous permettre d'avoir autant de champs que d'\xe9l\xe9ments d\xe9finis dans l\u2019\xe9diteur de projet."),(0,r.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,r.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Object ID Storyboard",src:a(44270).Z})),(0,r.kt)("p",null,"Pour informer l'\xe9diteur de projet que tous les \xe9l\xe9ments compris dans cette vue seront dupliqu\xe9s, nous devons ajouter TAG \xe0 chaque \xe9l\xe9ment et \xe0 chaque contrainte."),(0,r.kt)("p",null,"Le processus est un peu d\xe9licat... Nous allons commencer par ouvrir le fichier storyboard avec l'\xe9diteur de code de votre choix !"),(0,r.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Field View 2")," et obtenez ses identifiants d'objet \xe0 partir de l'Identity Inspector (\xe0 droite de l'Interface Builder). Dans notre projet, l'identifiant de Field View 2 est le suivant : ",(0,r.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Recherchez cet identifiant dans le code xml du storyboard et remplacez-le par ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-001")," \xe0 chaque fois qu'il apparait. Soyez prudent, car, comme vous pouvez le voir, l'identifiant de cet objet est mentionn\xe9 plusieurs fois\xa0!"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard xml",src:a(49779).Z})),(0,r.kt)("p",null,"Sauvegardez le fichier xml du storyboard. Comme vous pouvez le voir, l'identifiant d'objet de Field View 2 a \xe9t\xe9 modifi\xe9 dans le storyboard dans Xcode :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Field View 2 Object ID",src:a(98163).Z})),(0,r.kt)("h3",{id:"premier-libell\xe9"},"Premier libell\xe9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obtenez l'identifiant d'objet du ",(0,r.kt)("strong",{parentName:"li"},"premier libell\xe9")," \xe0 partir de l'Identity Inspector et remplacez-le par ",(0,r.kt)("strong",{parentName:"li"},"TAG-FD-002")," chaque fois qu\u2019il appara\xeet dans le code xml du storyboard.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label 1 Object ID",src:a(99696).Z})),(0,r.kt)("p",null,"Done with the first label."),(0,r.kt)("h3",{id:"deuxi\xe8me-libell\xe9"},"Deuxi\xe8me libell\xe9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obtenez ensuite l'identifiant d'objet du ",(0,r.kt)("strong",{parentName:"li"},"deuxi\xe8me libell\xe9")," \xe0 partir de l'Identity Inspector et remplacez-le par ",(0,r.kt)("strong",{parentName:"li"},"TAG-FD-003")," chaque fois qu\u2019il appara\xeet dans le code xml du storyboard.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label 2 Object ID",src:a(49880).Z})),(0,r.kt)("p",null,"Et voil\xe0 !"),(0,r.kt)("h3",{id:"contraintes"},"Contraintes"),(0,r.kt)("p",null,"Les deux libell\xe9s contiennent des contraintes que nous devons \xe9galement identifier :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tag constraints",src:a(93159).Z})),(0,r.kt)("p",null,"Tout comme pour View Field 2 et le libell\xe9, obtenez tous les identifiants d'objets des ",(0,r.kt)("strong",{parentName:"p"},"7 Contraintes")," depuis l\u2019Identity Inspector et remplacez-les par\xa0: ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-009")," and ",(0,r.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,r.kt)("p",null,"Ouvrez votre \xe9diteur de projet, s\xe9lectionnez votre mod\xe8le de formulaire d\xe9taill\xe9 depuis la section Formulaires, puis cliquez sur Cr\xe9er & ex\xe9cuter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom detail template forms",src:a(50970).Z})),(0,r.kt)("p",null,"Not bad for a first attempt!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iPhone Demo",src:a(19918).Z})),(0,r.kt)("p",null,"Field View 2 a bien \xe9t\xe9 dupliqu\xe9 ! Voyons comment rendre cette application un peu plus int\xe9ressante !"),(0,r.kt)("h3",{id:"personnaliser-votre-application"},"Personnaliser votre application"),(0,r.kt)("p",null,"Nous allons ajouter un bord arrondi \xe0 l'Image View et \xe0 Field View 2."),(0,r.kt)("p",null,"S\xe9lectionnez votre Vue Image et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",null,"et"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iPhone Demo",src:a(41833).Z})),(0,r.kt)("p",null,"S\xe9lectionnez ensuite Field View 2 et ajoutez ce qui suit :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iPhone Demo",src:a(73295).Z})),(0,r.kt)("p",null,"Vous pouvez d\xe9sormais cr\xe9er votre projet depuis l'\xe9diteur de projet !"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom template final result",src:a(33494).Z})),(0,r.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,r.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter project resources."),(0,r.kt)("p",null,"Download the completed template folder:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}c.isMDXComponent=!0},94093:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},29519:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},54672:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},33303:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},29351:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},1981:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},68170:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},97646:function(e,t,a){"use strict";t.Z=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},50970:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},33494:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},93159:function(e,t,a){"use strict";t.Z=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},90501:function(e,t,a){"use strict";t.Z=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},98163:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},396:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},73295:function(e,t,a){"use strict";t.Z=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},57928:function(e,t,a){"use strict";t.Z=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},68243:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},41833:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},74015:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},21616:function(e,t,a){"use strict";t.Z=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},19918:function(e,t,a){"use strict";t.Z=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},52679:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},99696:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},59276:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},49880:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},87785:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},44270:function(e,t,a){"use strict";t.Z=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},31290:function(e,t,a){"use strict";t.Z=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},47816:function(e,t,a){"use strict";t.Z=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},5619:function(e,t,a){"use strict";t.Z=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},2696:function(e,t,a){"use strict";t.Z=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},93355:function(e,t,a){"use strict";t.Z=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},61417:function(e,t,a){"use strict";t.Z=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},31281:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},49779:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},29646:function(e,t,a){"use strict";t.Z=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},65457:function(e,t,a){"use strict";t.Z=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},82856:function(e,t,a){"use strict";t.Z=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},57147:function(e,t,a){"use strict";t.Z=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);