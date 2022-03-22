"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9298],{29902:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var i=a(83117),n=a(80102),r=(a(67294),a(3905)),l=["components"],o={id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},s=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template-svg",id:"version-19-R2/tutorials/creating-detail-forms/detail-form-template-svg",title:"Template.svg",description:"The template.svg file is a basic template representation. In this svg file, you'll need to define areas in order to be able to add fields to your detail form template from the project editor.",source:"@site/versioned_docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-svg.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-svg",permalink:"/go-mobile/docs/19-R2/tutorials/creating-detail-forms/detail-form-template-svg",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-svg.md",tags:[],version:"19-R2",frontMatter:{id:"detail-form-template-svg",title:"Template.svg",sidebar_label:"Template.svg"},sidebar:"version-19-R2/tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/docs/19-R2/tutorials/creating-detail-forms/detail-form-template-manifest"},next:{title:"iOS Storyboard",permalink:"/go-mobile/docs/19-R2/tutorials/creating-detail-forms/detail-form-template-storyboard"}},p={},m=[{value:"Title",id:"title",level:2},{value:"Area position, height and width and type",id:"area-position-height-and-width-and-type",level:2},{value:"Field properties",id:"field-properties",level:3},{value:"Image field area",id:"image-field-area",level:3}],c={toc:m};function f(e){var t=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"template.svg")," file is a basic template representation. In this svg file, you'll need to define areas in order to be able to add fields to your detail form template from the project editor."),(0,r.kt)("p",null,"Here's a finished version:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Template svg file",src:a(6723).Z,width:"1072",height:"994"})),(0,r.kt)("p",null,"This template has dynamic field numbering, meaning that this template will allow you to add an ",(0,r.kt)("strong",{parentName:"p"},"image")," and you can put ",(0,r.kt)("strong",{parentName:"p"},"as many fields")," as you need. So when you build your detail form in the Forms section and drag and drop a field, a new empty field appears below the previous one for you to add a new field:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Template svg file",src:a(82303).Z,width:"1072",height:"994"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![Template svg file](assets/en/custom-detailform/detailform-dynamic-field-number.png)\n")),(0,r.kt)("p",null,"Let\u2019s focus on the different parts of this svg file and what you'll need to edit."),(0,r.kt)("h2",{id:"title"},"Title"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom Detail form</title>\n")),(0,r.kt)("p",null,"Add the title for your template here."),(0,r.kt)("h2",{id:"area-position-height-and-width-and-type"},"Area position, height and width and type"),(0,r.kt)("p",null,"You can define position, height, and width for all of your fields. This process is the same as ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R2/tutorials/creating-list-forms/list-form-svg-file#area-position-height-width-and-type"},"the one you use for custom list forms"),"."),(0,r.kt)("h3",{id:"field-properties"},"Field properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g id="f" visibility="hidden" ios:dy="35">\n\n//2\n<rect class="bg field" x="14" y="0" width="238" height="30"/>\n\n//3\n<textArea id="f.label" class="label" x="14" y="8" width="238">field[n]</textArea>\n\n//4\n<rect id="f" class="droppable field multivalued" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"/>\n\n//5\n<use id="f.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,r.kt)("li",{parentName:"ol"},"Area background position, height, and width"),(0,r.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,r.kt)("li",{parentName:"ol"},"Define the droppable field position, height, and width, as well as accepted ",(0,r.kt)("a",{parentName:"li",href:"/go-mobile/docs/19-R2/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,r.kt)("strong",{parentName:"a"},"field types"))," (all types are accepted in this example)"),(0,r.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to the delete current content")),(0,r.kt)("h3",{id:"image-field-area"},"Image field area"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'//1\n<g transform="translate(0,60)">\n\n//2\n<rect class="bg field" x="15" y="0" width="236" height="65"/>\n\n//3\n<path class="picture" transform="translate(10 0) scale(6)"/>\n\n//4\n<textArea id="f1.label" class="label" x="15" y="25" width="236">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="15" y="0" width="236" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="222" y="20" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,r.kt)("li",{parentName:"ol"},"Area background position, height, and width"),(0,r.kt)("li",{parentName:"ol"},"Icon to display an image in the imageField"),(0,r.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,r.kt)("li",{parentName:"ol"},"Define the droppable field position, height, and width, as well as accepted ",(0,r.kt)("a",{parentName:"li",href:"/go-mobile/docs/19-R2/tutorials/creating-list-forms/list-form-svg-file#iostypes"},(0,r.kt)("strong",{parentName:"a"},"field types"))),(0,r.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,r.kt)("p",null,"Now that you have an ",(0,r.kt)("strong",{parentName:"p"},"icon"),", a ",(0,r.kt)("strong",{parentName:"p"},"basic template description")," in the manifest.json file, and your ",(0,r.kt)("strong",{parentName:"p"},"svg file"),", let's move on to the fun part with Xcode!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To make field type definition easier, 4D for iOS allows you to include field types with ",(0,r.kt)("strong",{parentName:"p"},"positive values")," and also exclude field types with ",(0,r.kt)("strong",{parentName:"p"},"negative values"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," will allow you to drag and drop every field except images and dates.\nTo include all types, just type ",(0,r.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."))))}f.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),f=n,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||r;return a?i.createElement(u,l(l({ref:t},p),{},{components:a})):i.createElement(u,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82303:function(e,t,a){t.Z=a.p+"assets/images/detailform-dynamic-field-number-0f92f3ba75d0b7a37296cc8968005124.png"},6723:function(e,t,a){t.Z=a.p+"assets/images/detailform-template-svg-file-cef194cf866182f438a26f18151e6838.png"}}]);