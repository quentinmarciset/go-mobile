(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2250],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return r?i.createElement(f,o(o({ref:t},u),{},{components:r})):i.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4057:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=r(2122),a=r(9756),n=(r(7294),r(3905)),o={id:"multi-criteria-search",title:"Multi-criteria Search"},l={unversionedId:"tutorials/multi-criteria-search/multi-criteria-search",id:"tutorials/multi-criteria-search/multi-criteria-search",isDocsHomePage:!1,title:"Multi-criteria Search",description:"OBJECTIVES",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-criteria-search/multi-criteria-search.md",sourceDirName:"tutorials/multi-criteria-search",slug:"/tutorials/multi-criteria-search/multi-criteria-search",permalink:"/go-mobile/fr/docs/tutorials/multi-criteria-search/multi-criteria-search",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/multi-criteria-search/multi-criteria-search.md",version:"current",frontMatter:{id:"multi-criteria-search",title:"Multi-criteria Search"},sidebar:"tutorials",previous:{title:"Create data formatter",permalink:"/go-mobile/fr/docs/tutorials/data-formatter/create-data-formatter"},next:{title:"Restricted queries",permalink:"/go-mobile/fr/docs/tutorials/restricted-queries/filter-query-introduction"}},c=[{value:"Template svg file",id:"template-svg-file",children:[]},{value:"Project editor",id:"project-editor",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,n.kt)("p",{parentName:"blockquote"},"Activate the multi-criteria search in your own templates.")),(0,n.kt)("p",null,"This feature is activated by default in all 4D for iOS-generated templates."),(0,n.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,n.kt)("p",null,"To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,n.kt)("p",null,"to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,n.kt)("p",null,"There you go! The class is the only thing you need to modify for the multi-search criteria to be active."),(0,n.kt)("h2",{id:"project-editor"},"Project editor"),(0,n.kt)("p",null,"Next, you can go to the project editor and drop several fields into the list form search area."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"![Multi-criteria search in the project editor](assets/en/multi-criteria-search/multi-criteria-search-forms-section.png)")),(0,n.kt)("p",null,"Click on the search field's delete button to modifiy the associated field list."),(0,n.kt)("p",null,"A menu will appear to allow you to ",(0,n.kt)("strong",{parentName:"p"},"remove specific fields")," or ",(0,n.kt)("strong",{parentName:"p"},"remove all fields"),", depending on which criteria you want to base your search(es) on."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"![Modify Multi-criteria search fields](assets/en/multi-criteria-search/multi-criteria-search-forms-section-remove-fields.png)")),(0,n.kt)("p",null,"Congratulations! You can now base your search(es) on multiple fields in your 4D for iOS app!"))}u.isMDXComponent=!0}}]);