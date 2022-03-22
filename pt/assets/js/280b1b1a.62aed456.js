"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[296],{6994:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=r(83117),n=r(80102),o=(r(67294),r(3905)),a=["components"],l={id:"multi-criteria-search",title:"Multi-criteria Search"},s=void 0,c={unversionedId:"tutorials/creating-list-forms/multi-criteria-search",id:"version-19-R4/tutorials/creating-list-forms/multi-criteria-search",title:"Multi-criteria Search",description:"This section will show you how to activate the multi-criteria search in your own templates.",source:"@site/versioned_docs/version-19-R4/tutorials/creating-list-forms/multi-criteria-search.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/multi-criteria-search",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/multi-criteria-search",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/creating-list-forms/multi-criteria-search.md",tags:[],version:"19-R4",frontMatter:{id:"multi-criteria-search",title:"Multi-criteria Search"},sidebar:"version-19-R4/tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-svg-file"},next:{title:"iOS Storyboard",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-storyboard"}},u={},p=[{value:"Template svg file",id:"template-svg-file",level:2},{value:"Project editor",id:"project-editor",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section will show you how to activate the ",(0,o.kt)("a",{parentName:"p",href:"../../project-definition/forms#multi-criteria-search"},"multi-criteria search")," in your own templates."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The multi-criteria search feature is activated by default in all templates generated by the mobile editor."))),(0,o.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,o.kt)("p",null,"To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"There you go! The class is the only thing you need to modify for the multi-search criteria to be active."),(0,o.kt)("h2",{id:"project-editor"},"Project editor"),(0,o.kt)("p",null,"Next, you can go to the project editor and drop several fields into the list form search area."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Multi-criteria search in the project editor",src:r(38416).Z,width:"567",height:"497"})),(0,o.kt)("p",null,"Click on the search field's delete button to modifiy the associated field list."),(0,o.kt)("p",null,"A menu will appear to allow you to ",(0,o.kt)("strong",{parentName:"p"},"remove specific fields")," or ",(0,o.kt)("strong",{parentName:"p"},"remove all fields"),", depending on which criteria you want to base your search(es) on."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Modify Multi-criteria search fields",src:r(63185).Z,width:"567",height:"497"})),(0,o.kt)("p",null,"Congratulations! You can now base your search(es) on multiple fields in your mobile app!"))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?i.createElement(f,a(a({ref:t},u),{},{components:r})):i.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63185:function(e,t,r){t.Z=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},38416:function(e,t,r){t.Z=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);