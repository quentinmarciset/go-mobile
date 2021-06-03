(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4411],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89949:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"data-restricted-queries-introduction",title:"Restricted queries"},c={unversionedId:"project-definition/data-restricted-queries-introduction",id:"project-definition/data-restricted-queries-introduction",isDocsHomePage:!1,title:"Restricted queries",description:"OBJECTIVES",source:"@site/docs/project-definition/data-restricted-queries-introduction.md",sourceDirName:"project-definition",slug:"/project-definition/data-restricted-queries-introduction",permalink:"/go-mobile/docs/project-definition/data-restricted-queries-introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/data-restricted-queries-introduction.md",version:"current",frontMatter:{id:"data-restricted-queries-introduction",title:"Restricted queries"}},s=[{value:"Download the Starter Project",id:"download-the-starter-project",children:[]}],u={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Defining basic and user information-based query filters to display filtered content in the generated iOS app.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,a.kt)("p",{parentName:"blockquote"},"Click ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/requirements"},"here")," to see what you'll need to get started!")),(0,a.kt)("p",null,"In this tutorial, we'll cover ",(0,a.kt)("strong",{parentName:"p"},"restricted queries")," with a simple use case: imagine you're an account manager and you want to consult your ",(0,a.kt)("em",{parentName:"p"},"In Progress")," contracts simply by connecting to your app with your email address."),(0,a.kt)("p",null,"First, from the Data section we're going define a ",(0,a.kt)("strong",{parentName:"p"},"basic filter query")," to only display ",(0,a.kt)("em",{parentName:"p"},"In Progress")," contracts. Then we're going to apply a ",(0,a.kt)("strong",{parentName:"p"},"user information-based filter")," which will depend on the account manager's email."),(0,a.kt)("h2",{id:"download-the-starter-project"},"Download the Starter Project"),(0,a.kt)("p",null,"Before we begin, be sure to download the ",(0,a.kt)("strong",{parentName:"p"},"Starter Project")," which includes a ",(0,a.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," file (a demo database with a ready-to-use mobile app project)"),(0,a.kt)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,a.kt)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"STARTER PROJECT")),(0,a.kt)("p",null,"The database includes a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CRM database",src:r(3517).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",{parentName:"blockquote"},"This project uses ",(0,a.kt)("a",{parentName:"p",href:"https://4d.github.io/4d-for-ios/docs/en/creating-listform-templates.html"},"custom templates"),", ",(0,a.kt)("a",{parentName:"p",href:"https://4d.github.io/4d-for-ios/docs/en/using-icons.html"},"custom icons")," and custom ",(0,a.kt)("a",{parentName:"p",href:"https://4d.github.io/4d-for-ios/docs/en/creating-data-formatter.html"},"data formatters"),".")),(0,a.kt)("p",null,"You're now ready to define your first restricted query!"),(0,a.kt)("p",null,"Open the mobile project by clicking on Open > Mobile Project... and select CRM app > ",(0,a.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}p.isMDXComponent=!0},3517:function(e,t,r){"use strict";t.Z=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);