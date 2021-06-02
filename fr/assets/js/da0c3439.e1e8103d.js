(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(204)),i={id:"many-to-one-relations",title:"Many to One relations"},l={unversionedId:"tutorials/relations/many-to-one-relations",id:"tutorials/relations/many-to-one-relations",isDocsHomePage:!1,title:"Many to One relations",description:"4D v17 R5 includes a new concept: Many to One relations",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/many-to-one-relations.md",slug:"/tutorials/relations/many-to-one-relations",permalink:"/go-mobile/fr/docs/tutorials/relations/many-to-one-relations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/relations/many-to-one-relations.md",version:"current",sidebar:"tutorials",previous:{title:"Using action parameters",permalink:"/go-mobile/fr/docs/tutorials/actions/using-action-parameters"},next:{title:"One to Many relations",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-relations"}},c=[{value:"Structure section",id:"structure-section",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"4D v17 R5 includes a new concept: Many to One relations"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",{parentName:"blockquote"},"In this tutorial, we will use the relation names between your tables."),Object(o.b)("p",{parentName:"blockquote"},"Giving descriptive relation names can make your project structure definition easier.")),Object(o.b)("p",null,"Let's get started by downloading the Starter project:"),Object(o.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(o.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"MANY TO ONE Starter project")),Object(o.b)("p",null,"Here we want to display the category for each task in the detail form of your generated app. To do so, open the ",Object(o.b)("strong",{parentName:"p"},"StarteriOSProject")," from ",Object(o.b)("strong",{parentName:"p"},"Open > Mobile Project...")),Object(o.b)("p",null,"Then go right to your Structure section and select the ",Object(o.b)("strong",{parentName:"p"},"Task table"),"."),Object(o.b)("h3",{id:"structure-section"},"Structure section"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can notice that the ",Object(o.b)("strong",{parentName:"p"},"TaskCategory relation")," is underlined")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clicking on it will display available fields through this relation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Name field")))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Select link from structure section](assets/en/relations/select-link-from-structure.png)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This field will operate as any other field for the rest of the app creation process")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can also filter your app content using related fields from the Data section. To do so enter ",Object(o.b)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," in the Filter query field to exclude personal tasks."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"![Related field from Data section](assets/en/relations/Related-field-from-Data-section.png)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can then select an ",Object(o.b)("strong",{parentName:"p"},"icon")," as well as ",Object(o.b)("strong",{parentName:"p"},"formatters")," and define ",Object(o.b)("strong",{parentName:"p"},"short and long labels")," from the Labels and Icons section"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Related field from Labels and Icons section](assets/en/relations/related-field-from-labels-icons.png)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to the Forms section and drag the field on the Task Detail form")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Related field in Forms section](assets/en/relations/related-field-forms.png)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Build and Run")),Object(o.b)("p",null,"You should see your related field in your app detail form !"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Related field in Forms section](assets/en/relations/final-result-n-to-one-relations.png)")))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);