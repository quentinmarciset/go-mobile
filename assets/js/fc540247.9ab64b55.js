(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8121],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61755:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=r(22122),n=r(19756),o=(r(67294),r(3905)),a={id:"forms-multi-critera-search",title:"Multi-criteria search"},c={unversionedId:"project-definition/forms-multi-critera-search",id:"project-definition/forms-multi-critera-search",isDocsHomePage:!1,title:"Multi-criteria search",description:"OBJECTIVES",source:"@site/docs/project-definition/forms-multi-critera-search.md",sourceDirName:"project-definition",slug:"/project-definition/forms-multi-critera-search",permalink:"/go-mobile/docs/project-definition/forms-multi-critera-search",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/forms-multi-critera-search.md",version:"current",frontMatter:{id:"forms-multi-critera-search",title:"Multi-criteria search"}},l=[{value:"Template svg file",id:"template-svg-file",children:[]},{value:"Project editor",id:"project-editor",children:[]}],s={toc:l};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Activate the multi-criteria search in your own templates.")),(0,o.kt)("p",null,"This feature is activated by default in all 4D for iOS-generated templates."),(0,o.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,o.kt)("p",null,"To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,o.kt)("p",null,"There you go! The class is the only thing you need to modify for the multi-search criteria to be active."),(0,o.kt)("h2",{id:"project-editor"},"Project editor"),(0,o.kt)("p",null,"Next, you can go to the project editor and drop several fields into the list form search area."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multi-criteria search in the project editor",src:r(211).Z})),(0,o.kt)("p",null,"Click on the search field's delete button to modifiy the associated field list."),(0,o.kt)("p",null,"A menu will appear to allow you to ",(0,o.kt)("strong",{parentName:"p"},"remove specific fields")," or ",(0,o.kt)("strong",{parentName:"p"},"remove all fields"),", depending on which criteria you want to base your search(es) on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify Multi-criteria search fields",src:r(30182).Z})),(0,o.kt)("p",null,"Congratulations! You can now base your search(es) on multiple fields in your 4D for iOS app!"))}u.isMDXComponent=!0},30182:function(e,t,r){"use strict";t.Z=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},211:function(e,t,r){"use strict";t.Z=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);