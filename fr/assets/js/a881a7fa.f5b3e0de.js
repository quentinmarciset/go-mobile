"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7207],{28237:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"create-swift-formatter",title:"Create Swift formatter"},c=void 0,u={unversionedId:"tutorials/data-formatter/create-swift-formatter",id:"tutorials/data-formatter/create-swift-formatter",title:"Create Swift formatter",description:"OBJECTIVES",source:"@site/docs/tutorials/data-formatter/create-swift-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-swift-formatter",permalink:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-swift-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/create-swift-formatter.md",tags:[],version:"current",frontMatter:{id:"create-swift-formatter",title:"Create Swift formatter"},sidebar:"tutorials",previous:{title:"Create a static data formatter",permalink:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-static-data-formatter"},next:{title:"Create Kotlin formatter",permalink:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-kotlin-formatter"}},s={},f=[{value:"Object attribute Swift formatter",id:"object-attribute-swift-formatter",level:3}],m={toc:f};function p(t){var e=t.components,l=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first Swift data formatters.")),(0,o.kt)("p",null,"A formatter can be composed of both Swift and ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/next/tutorials/data-formatter/create-kotlin-formatter"},"Kotlin")," code."),(0,o.kt)("h3",{id:"object-attribute-swift-formatter"},"Object attribute Swift formatter"),(0,o.kt)("p",null,"In the following example, we want to display an address getting only relevant values that are available in the following object using a Swift formatter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$Obj:=New object \n$Obj.name:="4D SAS" \n$Obj.address1:="66 rue de Sartrouville" \n$Obj.address2:="Parc les Erables, b\xe2timent 4" \n$Obj.zipCode:="78230" \n$Obj.city:="Le Pecq" \n$Obj.country:="France" \n$Obj.phoneNumber:="+33 1 30 53 92 00" \n$Obj.website:="fr.4d.com"\n\n$Ent:=ds.Employees.get(4)\n$Ent.Object_Attribute:=$Obj\n$Ent.save()\n\n')),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "objectFormatter",\n    "binding": "objectAddress",\n    "type": "object",\n    "target" : ["ios", "android"]\n\n}\n\n')),(0,o.kt)("p",null,"To get the number, the street, and the city, let\u2019s build a custom ",(0,o.kt)("strong",{parentName:"p"},"Swift formatter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'import UIKit\nimport QMobileUI\n\nextension UILabel {\n    @objc dynamic var objectAddress: [String: Any]? {\n        get {\n            return nil\n        }\n        set {\n            if let newValue = newValue {\n                guard let value1 = newValue["name"] as? String,\n                      let value2 = newValue["address1"] as? String,\n                      let value3 = newValue["zipCode"] as? String,\n                      let value4 = newValue["city"] as? String else {\n                          return\n                      }\n                self.text = "\\(value1) - \\(value2) - \\(value3) \\(value4)"\n            } else {\n                self.text = ""\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,o.kt)("strong",{parentName:"p"},".swift")," file in the formatter folder and use it in your mobile project."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Architecture",src:r(7418).Z,width:"3182",height:"882"})),(0,o.kt)("p",null,"Check out the final result:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Final result",src:r(96544).Z,width:"478",height:"705"})))}p.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(r),p=a,d=m["".concat(c,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,i(i({ref:e},s),{},{components:r})):n.createElement(d,i({ref:e},s))}));function p(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7418:function(t,e,r){e.Z=r.p+"assets/images/architecture-swift-ab960317b73c273ef484bdd5fbeefe26.png"},96544:function(t,e,r){e.Z=r.p+"assets/images/rendu-c0879a0279c62c981a36dc86b5a0ed85.png"}}]);