"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7761],{76799:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"create-kotlin-formatter",title:"Create Kotlin formatter"},c=void 0,p={unversionedId:"tutorials/data-formatter/create-kotlin-formatter",id:"tutorials/data-formatter/create-kotlin-formatter",title:"Create Kotlin formatter",description:"OBJECTIVES",source:"@site/docs/tutorials/data-formatter/create-kotlin-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-kotlin-formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-kotlin-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/create-kotlin-formatter.md",tags:[],version:"current",frontMatter:{id:"create-kotlin-formatter",title:"Create Kotlin formatter"},sidebar:"tutorials",previous:{title:"Create Swift formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-swift-formatter"},next:{title:"Filter queries",permalink:"/go-mobile/pt/docs/next/tutorials/filter-queries/filter-query-introduction"}},d={},u=[{value:"Object attribute Kotlin formatter",id:"object-attribute-kotlin-formatter",level:2}],s={toc:u};function m(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first Kotlin data formatters.")),(0,o.kt)("p",null,"A formatter can be composed of both Kotlin and ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-swift-formatter"},"Swift")," code."),(0,o.kt)("h2",{id:"object-attribute-kotlin-formatter"},"Object attribute Kotlin formatter"),(0,o.kt)("p",null,"If you want a formatter that will enable you to dial a phone number value on click, we need a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json file")," containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"binding"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," value as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "objectFormatter",\n    "binding": "objectAddress",\n    "type": "object" \n    "target" : ["ios", "android"]\n}\n\n')),(0,o.kt)("p",null,'Note that the binding value "phoneAction" will be used in the Kotlin file and that the ',(0,o.kt)("inlineCode",{parentName:"p"},"BindingAdapter")," will interact with a specific field in an Android XML layout."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can add a specific permission to your app, using a ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilities")," block as follows:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'"capabilities" : {\n       "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]\n')))),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"PhoneAction.kt")," file to dial a phone number value on click on Android:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'package ___PACKAGE___\n\nimport android.content.Intent\nimport android.net.Uri\nimport android.widget.TextView\nimport androidx.databinding.BindingAdapter\n\n@BindingAdapter("phoneAction")\nfun phoneAction(view: TextView, phoneAction: String?) {\n    if (phoneAction.isNullOrEmpty()) return\n    view.text = phoneAction\n    view.setOnClickListener {\n        val dialIntent = Intent(Intent.ACTION_DIAL)\n        dialIntent.data = Uri.parse("tel:$phoneAction")\n        view.context.startActivity(dialIntent)\n    }\n}\n')),(0,o.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,o.kt)("strong",{parentName:"p"},".kt")," file in the formatter folder and use it in your mobile project."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Architecture",src:n(41647).Z,width:"1628",height:"556"})),(0,o.kt)("p",null,"Check out the final result:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Final result",src:n(42208).Z,width:"700",height:"720"})))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41647:function(t,e,n){e.Z=n.p+"assets/images/phoneAction_dir-4a33175d2cc12f780e091d476ecaa3b0.png"},42208:function(t,e,n){e.Z=n.p+"assets/images/rendu-android-14f71c3c2305115bf53934226b91161e.png"}}]);