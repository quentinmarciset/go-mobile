"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3663],{81157:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={id:"define-filter-query",title:"Define a Filter Query"},s=void 0,u={unversionedId:"tutorials/filter-queries/define-filter-query",id:"version-19-R3/tutorials/filter-queries/define-filter-query",title:"Define a Filter Query",description:'For the moment, if you build the Starter project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you\'ll see all manager contracts and statuses (Closed and In Progress).',source:"@site/versioned_docs/version-19-R3/tutorials/filter-queries/define-filter-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/define-filter-query",permalink:"/go-mobile/fr/docs/19-R3/tutorials/filter-queries/define-filter-query",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/filter-queries/define-filter-query.md",tags:[],version:"19-R3",frontMatter:{id:"define-filter-query",title:"Define a Filter Query"},sidebar:"version-19-R3/tutorials",previous:{title:"Filter queries",permalink:"/go-mobile/fr/docs/19-R3/tutorials/filter-queries/filter-query-introduction"},next:{title:"User information query",permalink:"/go-mobile/fr/docs/19-R3/tutorials/filter-queries/user-information-query"}},c={},p=[],m={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'For the moment, if you build the Starter project app and enter "',(0,i.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email (one of the account managers), you'll see ",(0,i.kt)("strong",{parentName:"p"},"all manager contracts and statuses")," (",(0,i.kt)("em",{parentName:"p"},"Closed")," and ",(0,i.kt)("em",{parentName:"p"},"In Progress"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"iOS app without queries",src:r(25361).Z,width:"1559",height:"907"})),(0,i.kt)("p",null,"As we discussed earlier, we want the account managers to access their ",(0,i.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. To do this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Data section")),(0,i.kt)("li",{parentName:"ul"},"Right-click in the ",(0,i.kt)("strong",{parentName:"li"},"Filter query")," field to make the ",(0,i.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Fields")," button and select ",(0,i.kt)("strong",{parentName:"li"},"Status"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Comparators")," button and select ",(0,i.kt)("strong",{parentName:"li"},"Equal to"),"."),(0,i.kt)("li",{parentName:"ul"},"Because you want to display ",(0,i.kt)("em",{parentName:"li"},"open")," contracts, enter ",(0,i.kt)("strong",{parentName:"li"},"In progress")),(0,i.kt)("li",{parentName:"ul"},"Remember to validate your query by clicking on the ",(0,i.kt)("strong",{parentName:"li"},"Validate")," button, otherwise you won't be able to build your app.")),(0,i.kt)("p",null,"You should have this result:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CRM database",src:r(35778).Z,width:"2164",height:"1988"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"filter")," icon is displayed at the right of each table when a basic filter is applied to it."),(0,i.kt)("li",{parentName:"ul"},"For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the ",(0,i.kt)("strong",{parentName:"li"},"Embed data into the built application")," checkbox."),(0,i.kt)("li",{parentName:"ul"},"Size will be calculated at the first build for you to visualize the ",(0,i.kt)("strong",{parentName:"li"},"size of your data"),"."))),(0,i.kt)("p",null,'If you build your app and enter "',(0,i.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email, you'll see that all contracts ",(0,i.kt)("em",{parentName:"p"},"In Progress")," are displayed in the Simulator!"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"iOS app with basic query",src:r(2510).Z,width:"1559",height:"907"})),(0,i.kt)("p",null,"Not exactly what we expected! What we want now is for each account manager to visualize only their own ",(0,i.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query!"))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35778:function(e,t,r){t.Z=r.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},25361:function(e,t,r){t.Z=r.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},2510:function(e,t,r){t.Z=r.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"}}]);