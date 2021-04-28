(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(116)),i=n(134),c=n(135),s={id:"insert-tabs",title:"Inserting Tabs in Markdown"},u={unversionedId:"docusaurus/insert-tabs",id:"docusaurus/insert-tabs",isDocsHomePage:!1,title:"Inserting Tabs in Markdown",description:"You can now insert tabs in markdown files:",source:"@site/docs/docusaurus/insert-tabs.md",slug:"/docusaurus/insert-tabs",permalink:"/go-mobile/docs/docusaurus/insert-tabs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docusaurus/insert-tabs.md",version:"current",sidebar:"mySidebar",next:{title:"Creating a Document",permalink:"/go-mobile/docs/docusaurus/create-a-document"}},l=[{value:"Create a Blog Post",id:"create-a-blog-post",children:[]}],b={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can now insert tabs in markdown files:"),Object(o.b)(i.a,{defaultValue:"macos",values:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"macos",mdxType:"TabItem"},"This is the macOS tab \ud83c\udf4e"),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},"This is the Windows tab \ud83c\udf4a"),Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},"This is the Linux tab \ud83c\udf4c")),Object(o.b)("h2",{id:"create-a-blog-post"},"Create a Blog Post"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\ntitle: Greetings!\nauthor: Steven Hansel\nauthor_title: Docusaurus Contributor\nauthor_url: https://github.com/ShinteiMai\nauthor_image_url: https://github.com/ShinteiMai.png\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),Object(o.b)("p",null,"A new blog post is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}d.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,p=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(p,c(c({ref:t},u),{},{components:n})):a.a.createElement(p,c({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},125:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},134:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(125),i=n(117),c=n(60),s=n.n(c);var u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(o.a)(),f=p.tabGroupChoices,v=p.setTabGroupChoices,g=Object(r.useState)(c),y=g[0],h=g[1],O=r.Children.toArray(e.children),w=[];if(null!=d){var j=f[d];null!=j&&j!==y&&b.some((function(e){return e.value===j}))&&h(j)}var x=function(e){var t=e.target,n=w.indexOf(t),r=O[n].props.value;h(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,a,o,i,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case l:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},135:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);