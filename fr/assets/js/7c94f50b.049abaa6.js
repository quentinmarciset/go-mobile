"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6235],{32846:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],l={id:"user-information-query",title:"Filtre de recherche utilisateur"},u=void 0,s={unversionedId:"tutorials/filter-queries/user-information-query",id:"tutorials/filter-queries/user-information-query",title:"Filtre de recherche utilisateur",description:"Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du charg\xe9 de client\xe8le (information utilisateur) :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/fr/docs/next/tutorials/filter-queries/user-information-query",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/user-information-query.md",tags:[],version:"current",frontMatter:{id:"user-information-query",title:"Filtre de recherche utilisateur"},sidebar:"tutorials",previous:{title:"Define a Filter Query",permalink:"/go-mobile/fr/docs/next/tutorials/filter-queries/define-filter-query"},next:{title:"Prise en main",permalink:"/go-mobile/fr/docs/next/tutorials/actions/getting-started"}},c={},p=[],m={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du charg\xe9 de client\xe8le (information utilisateur) :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Acc\xe9dez \xe0 la ",(0,a.kt)("strong",{parentName:"li"},'section "Donn\xe9es"'),"."),(0,a.kt)("li",{parentName:"ul"},"Faites un clic droit dans le champ ",(0,a.kt)("strong",{parentName:"li"},"Filtre de recherche")," pour faire appara\xeetre les ",(0,a.kt)("strong",{parentName:"li"},"boutons Champs, Comparateurs et Op\xe9rateurs"),"."),(0,a.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Operators")," et s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"li"},"AND"),"."),(0,a.kt)("li",{parentName:"ul"},"D\xe9finissez maintenant les informations utilisateur (",(0,a.kt)("strong",{parentName:"li"},": email"),") que vous souhaitez obtenir \xe0 partir de la m\xe9thode de base de donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},"Souvenez-vous de valider la recherche en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"Valider"),". Sinon, vous ne pourrez plus cr\xe9er votre application.")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Filtre de recherche utilisateur",src:r(1311).Z,width:"2164",height:"1988"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,a.kt)("p",null,"La recherche permettra de filtrer les donn\xe9es en fonction du statut ",(0,a.kt)("strong",{parentName:"p"},"In Progress")," ET de ",(0,a.kt)("strong",{parentName:"p"},"l'e-mail du charg\xe9 de client\xe8le")," (accessible depuis la table AccountManager gr\xe2ce au lien ",(0,a.kt)("em",{parentName:"p"},"N vers 1")," qui figure dans le nom du charg\xe9 de client\xe8le)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,a.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,a.kt)("strong",{parentName:"li"},"Mobile app authentication method"),". To do so, right-click on the ",(0,a.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,a.kt)("p",null,"Ajoutez la ligne suivante dans la m\xe9thode de base de donn\xe9es\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,a.kt)("p",null,"Cela permettra de r\xe9cup\xe9rer l\u2019adresse mail de connexion du charg\xe9 de client\xe8le et d'afficher les donn\xe9es selon ce crit\xe8re."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Filtre de recherche utilisateur",src:r(11498).Z,width:"1836",height:"1534"})),(0,a.kt)("p",null,"Ainsi, si vous g\xe9n\xe9rez votre application et que vous entrez \xab\xa0",(0,a.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\xa0\xbb en tant qu'e-mail de connexion, vous trouverez tous les contrats ",(0,a.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Final result",src:r(16608).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11498:function(e,t,r){t.Z=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},16608:function(e,t,r){t.Z=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},1311:function(e,t,r){t.Z=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);