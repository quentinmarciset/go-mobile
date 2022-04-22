"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1684],{55935:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(83117),o=t(80102),n=(t(67294),t(3905)),i=["components"],l={id:"testing-on-your-device",title:"Instalar em seu dispositivo iOS"},p=void 0,u={unversionedId:"deployment/testing-on-your-device",id:"version-19-R2/deployment/testing-on-your-device",title:"Instalar em seu dispositivo iOS",description:"Pode instalar e testar sua aplica\xe7\xe3o m\xf3vel em um aparelho conectado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/deployment/testing-on-your-device.md",sourceDirName:"deployment",slug:"/deployment/testing-on-your-device",permalink:"/go-mobile/pt/docs/19-R2/deployment/testing-on-your-device",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/testing-on-your-device.md",tags:[],version:"19-R2",frontMatter:{id:"testing-on-your-device",title:"Instalar em seu dispositivo iOS"},sidebar:"version-19-R2/docs",previous:{title:"Desde seu iPhone",permalink:"/go-mobile/pt/docs/19-R2/debug/from-iphone"},next:{title:"Arquive e exporte seu Projeto",permalink:"/go-mobile/pt/docs/19-R2/deployment/deployment-in-house-archive-and-export"}},s={},c=[{value:"Requisitos",id:"requisitos",level:2},{value:"PASSO 1. Cria\xe7\xe3o de uma conta",id:"passo-1-cria\xe7\xe3o-de-uma-conta",level:2},{value:"PASSO 2. Configura\xe7\xe3o Xcode",id:"passo-2-configura\xe7\xe3o-xcode",level:2},{value:"PASSO 3. Obtenha uma ID de Equipe",id:"passo-3-obtenha-uma-id-de-equipe",level:2},{value:"PASSO 4. Team ID para a conta gratuita",id:"passo-4-team-id-para-a-conta-gratuita",level:2},{value:"Deixe que Xcode gere seu perfil provis\xf3rio e certificado",id:"deixe-que-xcode-gere-seu-perfil-provis\xf3rio-e-certificado",level:3},{value:"Construa seu projeto no Xcode usando sua Conta Gratuita",id:"construa-seu-projeto-no-xcode-usando-sua-conta-gratuita",level:3},{value:"PASSO 5. Team ID para contas pagas",id:"passo-5-team-id-para-contas-pagas",level:2},{value:"PASSO 6. Instala\xe7\xe3o",id:"passo-6-instala\xe7\xe3o",level:2},{value:"Instale automaticamente com Apple Configurator 2",id:"instale-automaticamente-com-apple-configurator-2",level:3},{value:"Instale manualmente usando Xcode",id:"instale-manualmente-usando-xcode",level:3}],d={toc:c};function m(e){var a=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pode instalar e testar sua aplica\xe7\xe3o m\xf3vel em um aparelho conectado."),(0,n.kt)("h2",{id:"requisitos"},"Requisitos"),(0,n.kt)("p",null,"\xc9 preciso se inscrever a um programa de Desenvolvedores Apple. Dependendo de seus objetivos e prefer\xeancias, pode escolher se inscrever em um desses programas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Free Apple Developer Program]",(0,n.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html)-- to add"),": unicamente para testes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para as empresas")," o ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"para os particulares"),": com o objetivo de lan\xe7ar no App Store"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program"),": para lan\xe7ar sua aplica\xe7\xe3o internamente")),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"\xc9 preciso um ",(0,n.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," instalado em seu Mac para automatizar a instala\xe7\xe3o de app (opcional)."),(0,n.kt)("p",null,":::"),(0,n.kt)("h2",{id:"passo-1-cria\xe7\xe3o-de-uma-conta"},"PASSO 1. Cria\xe7\xe3o de uma conta"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Apple ID"),": Crie seu identificador Apple. Se ainda n\xe3o tiver uma, clique em ",(0,n.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Developer Account"),": Escolha um programa Apple Developer (para empresas ou indiv\xedduos) para lan\xe7amento na App Store ou no Programa Apple Developer Enterprise (para lan\xe7amentos in-house)."))),(0,n.kt)("h2",{id:"passo-2-configura\xe7\xe3o-xcode"},"PASSO 2. Configura\xe7\xe3o Xcode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Developer Account"),": Em Xcode > Preferences > Accounts, adicione sua Apple ID. ",(0,n.kt)("img",{alt:"Developer Account",src:t(54304).Z,width:"768",height:"557"}))),(0,n.kt)("h2",{id:"passo-3-obtenha-uma-id-de-equipe"},"PASSO 3. Obtenha uma ID de Equipe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se estiver utilizando um ","[Programa gratuito para desenvolvedores de Apple]",(0,n.kt)("inlineCode",{parentName:"li"},"(free-developer-account.html--to addd)")," v\xe1 a ",(0,n.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"passo 4"),"."),(0,n.kt)("li",{parentName:"ul"},"Se estiver usando um ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para organiza\xe7\xf5es"),", ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual")," ou um ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," v\xe1 para ",(0,n.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"o passo 5"),".")),(0,n.kt)("h2",{id:"passo-4-team-id-para-a-conta-gratuita"},"PASSO 4. Team ID para a conta gratuita"),(0,n.kt)("h3",{id:"deixe-que-xcode-gere-seu-perfil-provis\xf3rio-e-certificado"},"Deixe que Xcode gere seu perfil provis\xf3rio e certificado"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Abra seu projeto atual da aba BUILD")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Build tab",src:t(32014).Z,width:"1033",height:"994"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifique que a op\xe7\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Automatically manage signing")," esteja marcada e selecione a conta que agregou  ","[here]","< ",(0,n.kt)("a",{parentName:"li",href:"free-developer-account.html"},"here")," a partir da lista dropdown Team.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Account-Selection",src:t(518).Z,width:"1106",height:"877"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador e selecione-o do menu superior em Xcode.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select your device",src:t(84610).Z,width:"1106",height:"877"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Xcode gera automaticamente os perfis e certificados que precisa para construir seu app.")),(0,n.kt)("h3",{id:"construa-seu-projeto-no-xcode-usando-sua-conta-gratuita"},"Construa seu projeto no Xcode usando sua Conta Gratuita"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aperte o bot\xe3o Build and Run de Xcode!")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Build and Run",src:t(91681).Z,width:"1106",height:"877"})),(0,n.kt)("h2",{id:"passo-5-team-id-para-contas-pagas"},"PASSO 5. Team ID para contas pagas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Team ID"),": Clique em Developer Account > Membership e obtenha sua Team ID. ",(0,n.kt)("img",{alt:"Developer Account membership",src:t(94618).Z,width:"768",height:"739"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"4D for iOS"),": Lance 4D for iOS em Sections > General e introduza sua Team ID. ",(0,n.kt)("img",{alt:"General section",src:t(91669).Z,width:"768",height:"739"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"V\xe1 para o Passo 6 para rodar seu projeto no aparelho."))),(0,n.kt)("h2",{id:"passo-6-instala\xe7\xe3o"},"PASSO 6. Instala\xe7\xe3o"),(0,n.kt)("h3",{id:"instale-automaticamente-com-apple-configurator-2"},"Instale automaticamente com Apple Configurator 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando seu app estiver pronto, abra a aba BUILD."),(0,n.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador com um cabo USB."),(0,n.kt)("li",{parentName:"ul"},"Na aba BUILD, clique em ",(0,n.kt)("strong",{parentName:"li"},"Install"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Install button",src:t(25937).Z,width:"768",height:"739"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O app est\xe1 sendo instalado em seu aparelho!")),(0,n.kt)("h3",{id:"instale-manualmente-usando-xcode"},"Instale manualmente usando Xcode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quando seu app estiver pronto, abra a aba BUILD."),(0,n.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador com um cabo USB."),(0,n.kt)("li",{parentName:"ul"},"Na aba BUILD, clique em ",(0,n.kt)("strong",{parentName:"li"},"Install"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Manual installation",src:t(48221).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Um arquivo de seu projeto foi criado")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Archive creation",src:t(35846).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Revela o arquivo gerado em Finder")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reveal archive in Finder",src:t(5492).Z,width:"1168",height:"734"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Abra Xcode e v\xe1 para Menu > Window > Devices e Simulator e arraste o arquivo ipa gerado e solte na se\xe7\xe3o Installed Apps.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Devices and Simulators",src:t(49039).Z,width:"2346",height:"1636"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O app est\xe1 sendo instalado em seu aparelho.")))}m.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return t?r.createElement(g,i(i({ref:a},s),{},{components:t})):r.createElement(g,i({ref:a},s))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35846:function(e,a,t){a.Z=t.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},91681:function(e,a,t){a.Z=t.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},54304:function(e,a,t){a.Z=t.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},49039:function(e,a,t){a.Z=t.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},25937:function(e,a,t){a.Z=t.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},48221:function(e,a,t){a.Z=t.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},32014:function(e,a,t){a.Z=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},5492:function(e,a,t){a.Z=t.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},94618:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},91669:function(e,a,t){a.Z=t.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},518:function(e,a,t){a.Z=t.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},84610:function(e,a,t){a.Z=t.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);