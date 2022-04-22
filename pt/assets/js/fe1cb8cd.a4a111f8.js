"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1191],{64279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"create-swift-formatter",title:"Create Swift formatter"},u=void 0,s={unversionedId:"tutorials/data-formatter/create-swift-formatter",id:"version-19-R4/tutorials/data-formatter/create-swift-formatter",title:"Create Swift formatter",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R4/tutorials/data-formatter/create-swift-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-swift-formatter",permalink:"/go-mobile/pt/docs/19-R4/tutorials/data-formatter/create-swift-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/data-formatter/create-swift-formatter.md",tags:[],version:"19-R4",frontMatter:{id:"create-swift-formatter",title:"Create Swift formatter"},sidebar:"version-19-R4/tutorials",previous:{title:"Create data formatter",permalink:"/go-mobile/pt/docs/19-R4/tutorials/data-formatter/create-data-formatter"},next:{title:"Filter queries",permalink:"/go-mobile/pt/docs/19-R4/tutorials/filter-queries/filter-query-introduction"}},c={},f=[{value:"Object attribute Swift formatter",id:"object-attribute-swift-formatter",level:3}],m={toc:f};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,o.kt)("h3",{id:"object-attribute-swift-formatter"},"Object attribute Swift formatter"),(0,o.kt)("p",null,"In the following example, we want to display an address getting only relevant values that are available in the following object using a Swift formatter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$Obj:=New object \n$Obj.name:="4D SAS" \n$Obj.address1:="66 rue de Sartrouville" \n$Obj.address2:="Parc les Erables, b\xe2timent 4" \n$Obj.zipCode:="78230" \n$Obj.city:="Le Pecq" \n$Obj.country:="France" \n$Obj.phoneNumber:="+33 1 30 53 92 00" \n$Obj.website:="fr.4d.com"\n\n$Ent:=ds.Employees.get(4)\n$Ent.Object_Attribute:=$Obj\n$Ent.save()\n\n')),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("strong",{parentName:"p"},"manifest.json file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "objectFormatter",\n    "binding": "objectAddress",\n    "type": "object" \n}\n\n')),(0,o.kt)("p",null,"To get the number, the street, and the city, let\u2019s build a custom ",(0,o.kt)("strong",{parentName:"p"},"Swift formatter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'import UIKit\nimport QMobileUI\n\nextension UILabel {\n    @objc dynamic var objectAddress: [String: Any]? {\n        get {\n            return nil\n        }\n        set {\n            if let newValue = newValue {\n                guard let value1 = newValue["name"] as? String,\n                      let value2 = newValue["address1"] as? String,\n                      let value3 = newValue["zipCode"] as? String,\n                      let value4 = newValue["city"] as? String else {\n                          return\n                      }\n                self.text = "\\(value1) - \\(value2) - \\(value3) \\(value4)"\n            } else {\n                self.text = ""\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,o.kt)("strong",{parentName:"p"},".swift")," file in the formatter folder and use it in your mobile project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:r(39235).Z,width:"2680",height:"728"})),(0,o.kt)("p",null,"Check out the final result:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result",src:r(40817).Z,width:"478",height:"705"})),(0,o.kt)("p",null,"Since these formatters will soon be available for Android, the default human-readable format will be displayed on the Android app when a Swift formatter is in selection for a field."),(0,o.kt)("p",null,"Don't hesitate to give us feedbck on the 4D Forum, and check out the documentation for more details!"))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,d=m["".concat(u,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39235:function(e,t,r){t.Z=r.p+"assets/images/architecture--6db578956fafae0e317eeb9e85423e68.png"},40817:function(e,t,r){t.Z=r.p+"assets/images/rendu-c0879a0279c62c981a36dc86b5a0ed85.png"}}]);