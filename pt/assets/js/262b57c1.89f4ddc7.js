"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[32],{44373:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return A},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],l={id:"structure",title:"Estrutura"},s=void 0,d={unversionedId:"project-definition/structure",id:"version-19-R2/project-definition/structure",title:"Estrutura",description:"This page displays all of the tables and fields that are exposed as REST resources in the 4D database, including relation attributes (based upon many-to-one and one-to-many relations). In fact, the page displays a view similar to ORDA's datastore.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/project-definition/structure.md",sourceDirName:"project-definition",slug:"/project-definition/structure",permalink:"/go-mobile/pt/docs/19-R2/project-definition/structure",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/project-definition/structure.md",tags:[],version:"19-R2",frontMatter:{id:"structure",title:"Estrutura"},sidebar:"version-19-R2/docs",previous:{title:"General",permalink:"/go-mobile/pt/docs/19-R2/project-definition/general"},next:{title:"Data",permalink:"/go-mobile/pt/docs/19-R2/project-definition/data"}},p={},u=[{value:"Selecting tables and fields to publish",id:"selecting-tables-and-fields-to-publish",level:2},{value:"Filtering lists",id:"filtering-lists",level:3},{value:"Supported field types",id:"supported-field-types",level:2},{value:"Using relations",id:"using-relations",level:2},{value:"One to Many relations",id:"one-to-many-relations",level:3},{value:"Many to One relations",id:"many-to-one-relations",level:3},{value:"Many to Many relations",id:"many-to-many-relations",level:3},{value:"Incremental reload",id:"incremental-reload",level:2},{value:"Allow structure adjustments",id:"allow-structure-adjustments",level:3},{value:"Pull to refresh!",id:"pull-to-refresh",level:3}],c={toc:u};function A(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page displays all of the tables and fields that are exposed as REST resources in the 4D database, including relation attributes (based upon many-to-one and one-to-many relations). In fact, the page displays a view similar to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/overview.html"},"ORDA's datastore"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Structure section",src:a(23229).Z,width:"951",height:"718"})),(0,o.kt)("p",null,"Use this page to define a subset of your physical structure to replicate for mobile devices by selecting the specific tables and fields to publish."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Published tables will be automatically added as tabs of your app."),(0,o.kt)("li",{parentName:"ul"},"Published scalar fields will be available when defining your ","[list and detail forms]","."),(0,o.kt)("li",{parentName:"ul"},"Published relation fields (many-to-one and one-to-many) will be available when defining your ","[list and detail forms]"," and come with additional navigation features such as a Relation button.")),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"The following tables and fields are not listed in this page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tables and fields that do not comply with ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html#structure-mapping"},"ORDA rules"),"."),(0,o.kt)("li",{parentName:"ul"},'tables and fields whose name start with "',(0,o.kt)("inlineCode",{parentName:"li"},"__"),'" (double underscore).')),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"selecting-tables-and-fields-to-publish"},"Selecting tables and fields to publish"),(0,o.kt)("p",null,"A table is published when at least one of its fields is published. When a table is published, it is displayed in ",(0,o.kt)("strong",{parentName:"p"},"bold"),"."),(0,o.kt)("p",null,"To select a field to publish, click on a table name then click on the field in the rightmost list. You can also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"press the ",(0,o.kt)("strong",{parentName:"li"},"spacebar")," to select/unselect a field"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("strong",{parentName:"li"},"Ctrl+click")," to select all fields"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("strong",{parentName:"li"},"Publish")," and ",(0,o.kt)("strong",{parentName:"li"},"Publish all")," from the Fields list local menu.")),(0,o.kt)("h3",{id:"filtering-lists"},"Filtering lists"),(0,o.kt)("p",null,"When a list has the focus, you can filter its contents using the Search area and a local menu:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filter",src:a(56605).Z,width:"415",height:"142"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search")," area: enter the characters to search within table or field names"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sort by table name"),"/",(0,o.kt)("strong",{parentName:"li"},"Sort by field name"),": sort the list by name. By default, lists are sorted by creation date"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Only published tables"),"/",(0,o.kt)("strong",{parentName:"li"},"Only published fields"),": show only tables or fields that have been selected (published)")),(0,o.kt)("h2",{id:"supported-field-types"},"Supported field types"),(0,o.kt)("p",null,"The mobile editor automatically displays the list of fields that are eligible to the mobile app, depending on their type:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fields",src:a(70135).Z,width:"158",height:"190"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/Concepts/data-types.html"},"4D scalar field types")," except ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/Concepts/blob.html"},"BLOB")," and ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/Concepts/object.html"},"Object"),"."),(0,o.kt)("li",{parentName:"ul"},"Relation attributes (Many-to-one and One-to-many) are supported and can be selected just as fields. They have specific icons:")),(0,o.kt)("p",null,"Many to one relation icon:  ",(0,o.kt)("img",{alt:"relation1",src:a(59056).Z,width:"88",height:"21"})),(0,o.kt)("p",null,"One to many relation icon: ",(0,o.kt)("img",{alt:"relationN",src:a(76300).Z,width:"57",height:"23"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The names are based upon the relation names in the 4D Structure editor, see the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html#structure-mapping"},"ORDA Structure mapping page"),"."))),(0,o.kt)("h2",{id:"using-relations"},"Using relations"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"rma\xe7\xe3o 4D for Android")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This feature is currently not available in 4D for Android."))),(0,o.kt)("h3",{id:"one-to-many-relations"},"One to Many relations"),(0,o.kt)("p",null,"You can include ",(0,o.kt)("strong",{parentName:"p"},"One to Many relations")," in your projects and display a list of related fields in a new page of your app."),(0,o.kt)("p",null,"All you have to do is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"publishing at least one field of the target (Many) table"),(0,o.kt)("li",{parentName:"ul"},"publishing the relation from the source (One) table")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Drop relation in detail form",src:a(40291).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Then, when your related fields are published, they can be used like any other field. So you will be able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define relations properties in the ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/19-R2/project-definition/labels-and-icons"},"Labels and Icons")," page."),(0,o.kt)("li",{parentName:"ul"},"Drop the One to Many relation in a Detail form from the ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/19-R2/project-definition/forms"},"Forms")," page to create a link between a detail form and a related table. A Relation button will be automatically created in detail forms to go straight to the related view.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tutorial")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/relations/one-to-many-relations"},(0,o.kt)("strong",{parentName:"a"},"One to Many relations tutorial"))," for a detailed example of One to Many relation integration in a mobile project."))),(0,o.kt)("h3",{id:"many-to-one-relations"},"Many to One relations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Many to one relations")," can be used like any other field in the app creation process. When you select a Many to One relation in the field list, you can to select which field(s) from the related table to publish in your app:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publish related tables",src:a(22708).Z,width:"330",height:"88"})),(0,o.kt)("p",null,"You just need to click on the relation name, then select the field(s):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publish related tables",src:a(1545).Z,width:"598",height:"485"})),(0,o.kt)("p",null,"By default, all eligible fields of the related table are published."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tutorial")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/relations/many-to-one-relations"},(0,o.kt)("strong",{parentName:"a"},"Many to One relations tutorial"))," for a detailed example of Many to One relation integration in a mobile project."))),(0,o.kt)("h3",{id:"many-to-many-relations"},"Many to Many relations"),(0,o.kt)("p",null,"Using the Structure page, you can publish Many to One and One to Many relations from your parent Many to One relations. It means that you can display Many to Many relations in your app and move directly from a List form to another List form."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tutorial")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/relations/relation-interactions"},(0,o.kt)("strong",{parentName:"a"},"Relation interactions"))," for a detailed example of Many to One relation integration in a mobile project."))),(0,o.kt)("h2",{id:"incremental-reload"},"Incremental reload"),(0,o.kt)("h3",{id:"allow-structure-adjustments"},"Allow structure adjustments"),(0,o.kt)("p",null,"For the best user experience, 4D for iOS and 4D for Android implement an automatic feature for the incremental reload of data. It means that only new, modified or deleted data from the database will be updated to the app. This optimization enhances drastically loading time."),(0,o.kt)("p",null,"To enable this optimization, 4D for iOS and 4D for Android need the following structure elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"__DeletedRecords")," table to store deleted records"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("inlineCode",{parentName:"li"},"__GlobalStamp")," fields to store modification stamps for each published table in your mobile application")),(0,o.kt)("p",null,"You can let the 4D mobile editor do all the work for you and add the necessary structure elements: just select ",(0,o.kt)("strong",{parentName:"p"},"Allow 4D to make necessary structure adjustments for an optimized mobile data update")," option."),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"These optimizations are required for both local and server databases."),(0,o.kt)("p",null,":::"),(0,o.kt)("h3",{id:"pull-to-refresh"},"Pull to refresh!"),(0,o.kt)("p",null,"On the mobile app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data."),(0,o.kt)("p",null,"In normal use, simply swipe down from any listform to reload your data."),(0,o.kt)("p",null,"From iPhone settings, you can now reset your app data and find information about your app."),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"When an important maintenance operation is performed on the database side (Recover by tag / Restoration / Compacting) a Full reload is necessary on the mobile app. In this case, the admin shall notify mobile app users."),(0,o.kt)("p",null,":::"))}A.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return A}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),A=i,m=c["".concat(s,".").concat(A)]||c[A]||u[A]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function A(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76300:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAXCAIAAAA+3HCUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVFhH7Ze/asJQFMZvFDffwLEV0W5icYhLF8dO7gWpuoim4h9QCkJBx66CghTBByjOdukgiJMUUXQRX8BRVNJzc09ivMU2oZhi8bfknO+eJF+O50YiyLJMTgQbHk+Bs9fj8H+9LpfLXq/XarUwtxYT74H5fB6NRsGu2+1ut9uoWoiJvrpcLo/HY7PZvF4vStZi1Ot2uy0UCk6ns9lsBoNBVH/H24Pw8IaxEQx5ZUaho5VKxefzhcNhXPiC2dubYuf1eh9UdUar1ardbkf1T4C9xQgEAhjp4s1mk81mc7kcBExJJBKDwYDFHF0Jr0nE+lSe1kXMiNTlCui6krIVRachV8Cxew9AL/v9vhaz4BDxeDwWi2GiA2bg9VZ+vsFUYdYI3ZGX93uCxwvUsTg5C11+PNFz1EKtgIdZBg71NZ/PZzKZ9XrNlG/6Cmitomhdws5q7UMgF0WRP0FXwLG3t5RBpWBOCAwo7CeHwwFjAHZBqdVqfr+frX4HNO3xiv2QquebZ0huXwVBCDVmTKL0Z2pyoEBDudoPQHeLxWIqlVqtVigdAGyxvtBpxQ5Rq3vNgjVlHlkxreTGUy3gMOQVgLdBqVRKJpMw051OB9WvsB7SO6ndJJLEHmC32dDI3oOB2OULOIx6BcBuOp2GUS6XyyhZi4n/2MViMRwOIRiNRkyxGHPfMDCv4/F4MplEIhGULOT8vXUcTscrIZ+DEDPNCHWbFQAAAABJRU5ErkJggg=="},40291:function(e,t,a){t.Z=a.p+"assets/images/Structure-1-to-N-relations-4D-for-iOS-fb0678a1edb367935e154ab4d46f637a.png"},23229:function(e,t,a){t.Z=a.p+"assets/images/Structure-section-4D-for-iOS-763c904928c3e51324bb61ac9ad014e1.png"},70135:function(e,t){t.Z="data:image/png;base64,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"},56605:function(e,t){t.Z="data:image/png;base64,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"},1545:function(e,t,a){t.Z=a.p+"assets/images/manyto1-select-823899c91c4c95f6e0fbebf507ee73f6.png"},22708:function(e,t){t.Z="data:image/png;base64,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"},59056:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAVCAIAAABNMb7RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMTSURBVFhH7Zg/SBtxFMff/WnVpBSXuFjsEGgomTSGSKHWo7g5ZywUVLJlyJKtdMvSIVsCQqFj12YL7bWCYgjYpaEIDWLRxSwOvUtS70/f/d7vool3JoLV0uRDMO/9/t3v9/299w4j2LYNIwBE/j30jITgjITgeNSIeDxORrVaJWMY8I4IksA0TXKHAW8hKCiy2eytaVFrymqb2zeChxAYDsjOzg7at6nFzeJbLCVJyuVyaAyJFr1CYFIQaPtpkUqldnd3uXORo9bie012Pk2VNaiqlqm1M6wxU4N6RWe9+sYR62ZZgGO6Gs/hdmlyqVVH31mfrwxgbJScNcmgYcx1cB+kDZJlvW8NlADzgoS4nPX19bW1Ne50wF1+hbcr42G08YTHoqGM4UmWG2I5OaFg75YJD8c2EzLuMqJL2OsMq1npaPBNlE3ZF/Zw+vm5IDvD2MFoCjaWpth4/jhZLf2G2cDqNI5Cxa2V5MRMRX8Jd/FB2HQ23h+P1CAVOpViiYEGtSCxWKxYLHqogJzY27oZoXuoWaDZzh0CpKMTCn5NC3EQX7PNhe8JrIcRkvkuo3cKYKlnQWHUNbHMVEDCCSndsDAWlCkxf+xccv3QwrlhML/rdmqLIsLIg10/gp+6vX3QpohYbkD1l0GL+NErBD+r+/rEpEADEwTThPU7FAqFubk57lwkJBvJIP9QaFw7qJeGihhqQyBZ8SDlzkOTFBqofqclSKFxCb7F0k+FPkwKTxrmxTzvA7tnh9ppCkSFHYMhh4PWspvh9YqZD4lOZIGshOxSxXgXJFd6HLBeVbrufCYg5PdZTRkM79RAFhYW0L6aCsj0+GZUcKNUW+zenC8hKPFsgnJ3ECnKWEEzaLVIQ9zrpMkDsXpgvXhErry6IsfdRKCaGk4EykE3Sb1qcC9YLHuYn5+nv4ZhUMvf5ZsufWpxe3AOm08/NH9w5xq45v81nn9ucWtwNOvLKTyb9E1ST05OzH1RnL1/ruL24+PSOLe8+Ad+mHHflNztC3sHb2NJHnzKAIx+oeJcLSD/Y0ZCMAD+AMAmrHj5q/2JAAAAAElFTkSuQmCC"}}]);