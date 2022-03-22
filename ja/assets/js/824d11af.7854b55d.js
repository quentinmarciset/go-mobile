"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3789],{32816:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"user-information-query",title:"User information query"},s=void 0,u={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R3/tutorials/filter-queries/user-information-query",title:"User information query",description:"Now let's filter our app content depending on the account manager's login email address (user information):",source:"@site/versioned_docs/version-19-R3/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/ja/docs/19-R3/tutorials/filter-queries/user-information-query",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R3",frontMatter:{id:"user-information-query",title:"User information query"},sidebar:"version-19-R3/tutorials",previous:{title:"Define a Filter Query",permalink:"/go-mobile/ja/docs/19-R3/tutorials/filter-queries/define-filter-query"},next:{title:"Getting started",permalink:"/go-mobile/ja/docs/19-R3/tutorials/actions/getting-started"}},c={},p=[],m={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now let's filter our app content depending on the account manager's login email address (user information):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Data section"),". "),(0,o.kt)("li",{parentName:"ul"},"Right-click in the ",(0,o.kt)("strong",{parentName:"li"},"Filter query")," field to make ",(0,o.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Operators")," button and select ",(0,o.kt)("strong",{parentName:"li"},"AND"),"."),(0,o.kt)("li",{parentName:"ul"},"Now define the user information you want to get from the database method, ",(0,o.kt)("strong",{parentName:"li"},":email"),"."),(0,o.kt)("li",{parentName:"ul"},"Remember to validate the query by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Validate")," button. If not, you won't be able to build your app.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User information query",src:n(83945).Z,width:"2164",height:"1988"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,o.kt)("p",null,"The query will filter data depending on the ",(0,o.kt)("strong",{parentName:"p"},"In Progress")," status AND the ",(0,o.kt)("strong",{parentName:"p"},"Account manager's email address")," (accessible from the AccountManager table thanks to the ",(0,o.kt)("em",{parentName:"p"},"Many-to-One")," relation on the manager's name)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,o.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,o.kt)("strong",{parentName:"li"},"Mobile app authentication method"),". To do so, right-click on the ",(0,o.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,o.kt)("p",null,"Add the following line in the database method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,o.kt)("p",null,"This will allow retrieving the manager's login email address and displaying data depending on that criteria."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User information query",src:n(75291).Z,width:"1836",height:"1534"})),(0,o.kt)("p",null,'Now if you build your app and enter "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as login email, you'll find all of Michelle Simpson's ",(0,o.kt)("em",{parentName:"p"},'"In progress"')," contracts."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Final result",src:n(9485).Z,width:"1559",height:"907"})))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75291:function(e,t,n){t.Z=n.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},9485:function(e,t,n){t.Z=n.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},83945:function(e,t,n){t.Z=n.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);