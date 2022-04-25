"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7597],{80642:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=["components"],o={id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},s=void 0,p={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R5/tutorials/actions/adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/ja/docs/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R5",frontMatter:{id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/tutorials/actions/define-first-action"},next:{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/actions/using-action-parameters"}},u={},c=[{value:"\u2488 \u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",id:"----\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",level:2},{value:"\u2489 \u2489 \u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"----4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"\u248a \u248a \u248a \u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"---\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\uff21 \uff21 \uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\uff41-\uff41-\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\uff22 \uff22 \uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\uff42-\uff42-\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\uff21 \uff21 \uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\uff41-\uff41-\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1",level:4},{value:"\uff22 \uff22 \uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b",id:"\uff42-\uff42-\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1",level:4},{value:"\u248b \u248b \u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"--\u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",level:2}],m={toc:c};function k(t){var e=t.components,o=(0,i.Z)(t,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,l.kt)("p",{parentName:"blockquote"},"\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u3066\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0/\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30ab\u30b9\u30bf\u30e0\u3057\u307e\u3059\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,l.kt)("p",{parentName:"blockquote"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,l.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3069\u3046\u3084\u3063\u3066\u7c21\u5358\u306b",(0,l.kt)("strong",{parentName:"p"},"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),"\u304b\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"----\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"},"\u2488 \u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,l.kt)("p",null,"To begin, download the ",(0,l.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c2\u3064(TasksList \u304a\u3088\u3073 TasksCollection)"),(0,l.kt)("li",{parentName:"ul"},"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c1\u3064(TasksDetail)"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9(Tasks.4dbase)")),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,l.kt)("h2",{id:"----4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"\u2489 \u2489 \u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u30c9\u30ed\u30c3\u30d7\u3092\u5b9f\u884c\u3057\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksList")," \u304a\u3088\u3073 ",(0,l.kt)("strong",{parentName:"li"},"TasksCollection")," template \u30d5\u30a9\u30eb\u30c0\u3092",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," \u30d5\u30a9\u30eb\u30c0\u306b\u30c9\u30ed\u30c3\u30d7")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:n(78312).Z,width:"2274",height:"734"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksDetail")," template \u30d5\u30a9\u30eb\u30c0\u3092 ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder")," \u306b\u30c9\u30ed\u30c3\u30d7")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:n(92971).Z,width:"2274",height:"734"})),(0,l.kt)("h2",{id:"---\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"\u248a \u248a \u248a \u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"2\u7a2e\u985e\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3"),(0,l.kt)("li",{parentName:"ul"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3")),(0,l.kt)("p",null,"\u307e\u305a\u306f\u6700\u521d\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("h4",{id:"\uff41-\uff41-\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\uff21 \uff21 \uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"List form Controller")," \u3092\u9078\u629e\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:n(48823).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"\uff42-\uff42-\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\uff22 \uff22 \uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"Table View \u3092\u9078\u629e\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:n(86767).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u3053\u308c\u3067\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,"TaskList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3")," \u304b\u3089\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08Taskslist\uff09",src:n(68725).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"\u7d9a\u3051\u3066 TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u307e\u305a\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\uff41-\uff41-\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1"},"\uff21 \uff21 \uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u4f5c\u696d\u306f TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5834\u5408\u306b\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"List form Controller")," \u3092\u9078\u629e\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(23153).Z,width:"2530",height:"1932"})),(0,l.kt)("h4",{id:"\uff42-\uff42-\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1"},"\uff22 \uff22 \uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306f\u30ea\u30b9\u30c8\u5f62\u5f0f\u306e TableView \u3068\u30b0\u30ea\u30c3\u30c9\u5f62\u5f0f\u306e CollectionViews \u3067\u306f\u7570\u306a\u308a\u307e\u3059\u3002 \u5f8c\u8005\u306f\u30b9\u30ef\u30a4\u30d7\u64cd\u4f5c\u306b\u4e0d\u5411\u304d\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30d3\u30e5\u30fc\u306b\u304a\u3044\u3066\u306f\u3001\u6271\u3044\u305f\u3044\u30bb\u30eb\u306b\u5bfe\u3057\u3066",(0,l.kt)("strong",{parentName:"p"},"\u9577\u62bc\u3057")," \u30b8\u30a7\u30b9\u30c1\u30e3\u30fc\u306b\u53cd\u5fdc\u3057\u3066\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3055\u305b\u308b\u306e\u304c\u826f\u3044\u65b9\u6cd5\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u305f\u3081\u306b\u306f\u3001collectionView \u306e\u30bb\u30eb\u3092\u9078\u629e\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(17631).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6700\u9069\u5316\u3059\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u62e1\u5927\u30a8\u30d5\u30a7\u30af\u30c8\u3068\u89e6\u899a\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Number")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.96")," (\u30ba\u30fc\u30e0\u500d\u7387\u306f\u597d\u307f\u306b\u5fdc\u3058\u3066\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059)")),(0,l.kt)("p",null,"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3")," \u304b\u3089\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksCollection\uff09",src:n(78960).Z,width:"2164",height:"1988"})),(0,l.kt)("h2",{id:"--\u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"\u248b \u248b \u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306e",(0,l.kt)("strong",{parentName:"p"},"\u6c4e\u7528\u30dc\u30bf\u30f3")," \u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u307e\u305f\u306f ",(0,l.kt)("strong",{parentName:"p"},"\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30ab\u30b9\u30bf\u30e0\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u5bb9\u6613\u306b\u4f5c\u6210\u3059\u308b"),"\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3069\u3061\u3089\u306e\u5834\u5408\u306b\u3082\u3001\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306b\u57cb\u3081\u8fbc\u307e\u308c\u3066\u3044\u308b\u6c4e\u7528\u30dc\u30bf\u30f3\u306e\u5834\u5408\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3092\u9078\u629e\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(53927).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u72ec\u81ea\u306e\u6c4e\u7528\u30dc\u30bf\u30f3\u3092\u4f5c\u6210\u3057\u305f\u3044\u3068\u3057\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u306b\u306f\u307e\u305a\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u958b\u3044\u305f\u3089\u53f3\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u9078\u629e\u3057\u3001",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector) \u306b\u4ee5\u4e0b\u306e\u8a18\u8ff0\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30ab\u30b9\u30bf\u30e0\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0",src:n(26107).Z,width:"2530",height:"1932"})),(0,l.kt)("p",null,"\u898b\u3066\u5206\u304b\u308b\u3088\u3046\u306b\u3001Storyboard \u30d5\u30a1\u30a4\u30eb\u5185\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u30dc\u30bf\u30f3\u306e\u753b\u50cf\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u306f",(0,l.kt)("strong",{parentName:"p"},"Resources folder")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u306b\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308c\u3070\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u3001",(0,l.kt)("strong",{parentName:"p"},"moreButton.imageset")," \u306e\u5834\u5408\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:n(75066).Z,width:"1522",height:"766"})),(0,l.kt)("p",null,"TasksDetail \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092",(0,l.kt)("strong",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3")," \u304b\u3089\u9078\u629e\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksDetail\uff09",src:n(87799).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"\u5b8c\u6210\u3057\u305fiOS\u30a2\u30d7\u30ea\u306f\u3001\u30ea\u30b9\u30c8\u753b\u9762\u3068\u8a73\u7d30\u753b\u9762\u304c\u4e21\u65b9\u3068\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:n(47323).Z,width:"1559",height:"907"})),(0,l.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}k.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=i,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,r(r({ref:e},u),{},{components:n})):a.createElement(d,r({ref:e},u))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17631:function(t,e,n){e.Z=n.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},23153:function(t,e,n){e.Z=n.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},86767:function(t,e,n){e.Z=n.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},48823:function(t,e,n){e.Z=n.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},26107:function(t,e,n){e.Z=n.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},53927:function(t,e,n){e.Z=n.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},92971:function(t,e,n){e.Z=n.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},47323:function(t,e,n){e.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},78312:function(t,e,n){e.Z=n.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},75066:function(t,e,n){e.Z=n.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},87799:function(t,e,n){e.Z=n.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},78960:function(t,e,n){e.Z=n.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},68725:function(t,e,n){e.Z=n.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);