(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3517],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(r),p=n,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27672:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),l=["components"],i={id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},s=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"tutorials/creating-detail-forms/detail-form-template",isDocsHomePage:!1,title:"Mod\xe8les de formulaires d\xe9taill\xe9s",description:"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. It will display an image header, as well as title and content fields that will be duplicated in the generated iOS and Android Apps.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-detail-forms/detail-form-template.md",version:"current",frontMatter:{id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},sidebar:"tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-layout"},next:{title:"Detail form icons",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-icon"}},u=[{value:"Download the Starter project",id:"download-the-starter-project",children:[]},{value:"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile",id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile",children:[]},{value:"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu",id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu",children:[]}],c={toc:u};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. It will display an ",(0,a.kt)("strong",{parentName:"p"},"image header"),", as well as ",(0,a.kt)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS and Android Apps."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom template final result",src:r(43539).Z})),(0,a.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,a.kt)("p",null,"To begin, download the ",(0,a.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un dossier ",(0,a.kt)("strong",{parentName:"li"},"Custom Detail form")," (dossier contenant le mod\xe8le personnalis\xe9 du formulaire d\xe9taill\xe9)"),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Starter project")),(0,a.kt)("h2",{id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile"},"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile"),(0,a.kt)("p",null,"First, create a ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",(0,a.kt)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder custom template",src:r(97859).Z})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(31504).Z})),(0,a.kt)("p",null,"Now let's focus on the ",(0,a.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,a.kt)("h2",{id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu"},"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu"),(0,a.kt)("p",null,"In this folder, you will find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your custom template among others"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a manifest.json")," file: includes a basic description of the template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}m.isMDXComponent=!0},31504:function(e,t,r){"use strict";t.Z=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},43539:function(e,t,r){"use strict";t.Z=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},97859:function(e,t,r){"use strict";t.Z=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);