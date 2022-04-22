"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9950],{32473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={id:"one-to-many-relations",title:"Liens 1 vers N"},s=void 0,u={unversionedId:"tutorials/relations/one-to-many-relations",id:"tutorials/relations/one-to-many-relations",title:"Liens 1 vers N",description:"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/fr/docs/next/tutorials/relations/one-to-many-relations",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-relations.md",tags:[],version:"current",frontMatter:{id:"one-to-many-relations",title:"Liens 1 vers N"},sidebar:"tutorials",previous:{title:"Liens N vers 1",permalink:"/go-mobile/fr/docs/next/tutorials/relations/many-to-one-relations"},next:{title:"1 vers N - D\xe9finition du titre",permalink:"/go-mobile/fr/docs/next/tutorials/relations/one-to-many-title-definition"}},c={},p=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles."),(0,i.kt)("p",null,"Commen\xe7ons par t\xe9l\xe9charger le Projet Starter :"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Projet Starter")),(0,i.kt)("p",null,"Dans ce tutoriel, nous allons cr\xe9er une ",(0,i.kt)("strong",{parentName:"p"},"application Task")," \xe0 l'aide de 4D for iOS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Task App Final result",src:n(26750).Z,width:"650",height:"650"})),(0,i.kt)("p",null,"Mais d'abord, jetons un \u0153il \xe0 la structure de notre base :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"S\xe9lectionnez le lien \xe0 partir de la section Structure",src:n(89156).Z,width:"2152",height:"1666"})),(0,i.kt)("p",null,"Vous remarquerez qu'il existe un lien 1 vers N nomm\xe9 ",(0,i.kt)("strong",{parentName:"p"},"tasks")," qui utilisera une application iOS pour afficher les t\xe2ches (",(0,i.kt)("strong",{parentName:"p"},"vers N"),") des employ\xe9s (",(0,i.kt)("strong",{parentName:"p"},"1"),")."),(0,i.kt)("p",null,"Rendez-vous directement dans le menu Ouvrir> Projet mobile ... pour s\xe9lectionner ",(0,i.kt)("em",{parentName:"p"},"Time Keeper")," puis dans la ",(0,i.kt)("strong",{parentName:"p"},"section Structure"),"."),(0,i.kt)("h2",{id:"structure-section"},"Structure section"),(0,i.kt)("p",null,"Vous voyez ici le lien ",(0,i.kt)("strong",{parentName:"p"},"tasks")," que nous avons cr\xe9\xe9 pr\xe9c\xe9demment... Vous pouvez le publier !"),(0,i.kt)("p",null,"Il aura le m\xeame fonctionnement que n\u2019importe quel autre champ pour la suite de la cr\xe9ation de l\u2019application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Structure section Relations properties",src:n(52944).Z,width:"2164",height:"1988"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"En survolant un \xe9l\xe9ment, une astuce affiche le nom de la table source (qui est \xe0 l'origine) du lien."))),(0,i.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,i.kt)("p",null,"Le lien 1 vers N est maintenant disponible dans la section ",(0,i.kt)("strong",{parentName:"p"},"Libell\xe9s et ic\xf4nes"),"."),(0,i.kt)("p",null,"A noter qu'un lien 1 vers N cr\xe9era un bouton dans l'application iOS g\xe9n\xe9r\xe9e."),(0,i.kt)("p",null,"Dans la section Libell\xe9s & ic\xf4nes, vous d\xe9finirez :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"un libell\xe9 de bouton"),(0,i.kt)("li",{parentName:"ul"},"une ic\xf4ne de bouton"),(0,i.kt)("li",{parentName:"ul"},"un titre qui sera affich\xe9 dans la vue de destination (pour indiquer d'o\xf9 vous venez par exemple).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(38028).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"forms-section"},"Forms section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cliquez sur la section Formulaires et d\xe9posez le lien ",(0,i.kt)("em",{parentName:"li"},"tasks")," dans le formulaire d\xe9taill\xe9 Employee Task.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Related field in Forms section",src:n(79025).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A partir du formulaire Lise Employee, cliquez sur un employ\xe9"),(0,i.kt)("li",{parentName:"ol"},"Cela permettra d'ouvrir le formulaire d\xe9taill\xe9 des employ\xe9s, o\xf9 vous devriez voir appara\xeetre un nouveau ",(0,i.kt)("strong",{parentName:"li"},"bouton Relation")," !"),(0,i.kt)("li",{parentName:"ol"},"Cliquez sur ce bouton Relation pour afficher les t\xe2ches de l'employ\xe9.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Related field in Forms section",src:n(71220).Z,width:"2268",height:"992"})),(0,i.kt)("p",null,"Bravo ! Vous avez inclus des liens 1 vers N avec succ\xe8s dans votre projet mobile."),(0,i.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79025:function(e,t,n){t.Z=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},26750:function(e,t,n){t.Z=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},89156:function(e,t,n){t.Z=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},71220:function(e,t,n){t.Z=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},38028:function(e,t,n){t.Z=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},52944:function(e,t,n){t.Z=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);