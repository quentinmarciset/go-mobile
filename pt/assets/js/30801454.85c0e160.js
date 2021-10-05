(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7411],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=o,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||n;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14871:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=a(22122),o=a(19756),n=(a(67294),a(3905)),i=["components"],s={id:"create-data-formatter",title:"Criar formato de dados"},m=void 0,l={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"tutorials/data-formatter/create-data-formatter",isDocsHomePage:!1,title:"Criar formato de dados",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/data-formatter/create-data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-data-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/create-data-formatter.md",version:"current",frontMatter:{id:"create-data-formatter",title:"Criar formato de dados"},sidebar:"tutorials",previous:{title:"Criar e Executar: Crie seu projeto",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/build-and-run"},next:{title:"Filter queries",permalink:"/go-mobile/pt/docs/next/tutorials/filter-queries/filter-query-introduction"}},p=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",children:[]},{value:"Crie a pasta formatadores",id:"crie-a-pasta-formatadores",children:[]},{value:"Formatadores de inteiros",id:"formatadores-de-inteiros",children:[{value:"N\xfamero inteiro para string",id:"n\xfamero-inteiro-para-string",children:[]},{value:"Inteiro para imagem",id:"inteiro-para-imagem",children:[]}]},{value:"Formatadores de Texto",id:"formatadores-de-texto",children:[{value:"Texto para string",id:"texto-para-string",children:[]},{value:"Texto para Imagem",id:"texto-para-imagem",children:[]}]},{value:"Compatibilidade modo Escuro",id:"compatibilidade-modo-escuro",children:[{value:"Cor tintado",id:"cor-tintado",children:[]},{value:"Imagens a cor otimizadas",id:"imagens-a-cor-otimizadas",children:[]}]},{value:"Abrir projeto m\xf3vel",id:"abrir-projeto-m\xf3vel",children:[]},{value:"Construa seu app 4D for iOS",id:"construa-seu-app-4d-for-ios",children:[]}],d={toc:p};function c(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Criar seus primeiros formatos de dados.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"PR\xc9-REQUISITOS")),(0,n.kt)("p",{parentName:"blockquote"},"Click ",(0,n.kt)("a",{parentName:"p",href:"prerequisites.html"},"here")," to see what you'll need to get started!")),(0,n.kt)("p",null,"Neste tutorial, vamos gui\xe1-lo atrav\xe9s da cria\xe7\xe3o de v\xe1rios exemplos de formatador."),(0,n.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,n.kt)("p",null,"Para come\xe7ar, baixe o ",(0,n.kt)("strong",{parentName:"p"},"Starter Project"),", que inclui:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pastas",(0,n.kt)("strong",{parentName:"li"},"integerToImage_Images")," e ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images")," que cont\xeam imagens (para usar mais tarde para formatadores que incluem imagens)"),(0,n.kt)("li",{parentName:"ul"},"Um arquivo de ",(0,n.kt)("strong",{parentName:"li"},"Task Management.4dbase")," (com um projeto de app m\xf3vel pronto para usar)")),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,n.kt)("p",null,"Agora voc\xea j\xe1 est\xe1 pronto para criar seus primeiros formatadores!"),(0,n.kt)("h2",{id:"crie-a-pasta-formatadores"},"Crie a pasta formatadores"),(0,n.kt)("p",null,"Primeiro, crie uma pasta ",(0,n.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters "),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:a(94048).Z})),(0,n.kt)("h2",{id:"formatadores-de-inteiros"},"Formatadores de inteiros"),(0,n.kt)("h3",{id:"n\xfamero-inteiro-para-string"},"N\xfamero inteiro para string"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Crie uma pasta ",(0,n.kt)("strong",{parentName:"li"}," integerToString "),"na pasta formatadores, que voc\xea acabou de criar."),(0,n.kt)("li",{parentName:"ul"},"Em seguida, crie um arquivo ",(0,n.kt)("strong",{parentName:"li"},"manifest.json ")," na pasta ",(0,n.kt)("strong",{parentName:"li"},"integerToString"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:a(32053).Z})),(0,n.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,n.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,n.kt)("h3",{id:"inteiro-para-imagem"},"Inteiro para imagem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,n.kt)("strong",{parentName:"p"}," integerToString "),"na pasta  ",(0,n.kt)("strong",{parentName:"p"},"formatadores "),", que voc\xea acabou de criar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Em seguida, crie um arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,n.kt)("strong",{parentName:"p"},"integerToImage"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:a(15820).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Em seguida, crie uma pasta",(0,n.kt)("strong",{parentName:"li"}," Imagens")," na pasta ",(0,n.kt)("strong",{parentName:"li"},"IntegerToImage"),". Pode adicionar as imagens de ",(0,n.kt)("strong",{parentName:"li"},"IntegerToImage_Images ")," em StarterProject.zip para a nova pasta.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter images",src:a(36971).Z})),(0,n.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,n.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"assets"),": ajusta o tamanho do display (largura e altura)")),(0,n.kt)("h2",{id:"formatadores-de-texto"},"Formatadores de Texto"),(0,n.kt)("h3",{id:"texto-para-string"},"Texto para string"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,n.kt)("strong",{parentName:"p"}," textToString "),"na pasta formatadores, que voc\xea acabou de criar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crie um arquivo de ",(0,n.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,n.kt)("strong",{parentName:"p"},"textToString"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:a(74032).Z})),(0,n.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,n.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,n.kt)("h3",{id:"texto-para-imagem"},"Texto para Imagem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,n.kt)("strong",{parentName:"p"}," textToImage "),"na pasta formatadores, que voc\xea acabou de criar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Crie um arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,n.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:a(45936).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Em seguida, crie um arquivo de",(0,n.kt)("strong",{parentName:"li"}," Imagens")," na pasta ",(0,n.kt)("strong",{parentName:"li"},"textToImage"),". Pode adicionar as imagens de ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images ")," em StarterProject.zip para a nova pasta.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter images",src:a(84328).Z})),(0,n.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,n.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,n.kt)("h2",{id:"compatibilidade-modo-escuro"},"Compatibilidade modo Escuro"),(0,n.kt)("p",null,"Se seu dispositivo estiver no modo claro ou escuro, n\xe3o importa se trabalhar em Android ou iOS, pode facilmente usar os formatadores de dados personalizados contendo imagens. As imagens se adaptar\xe3o dependendo do modo de cor do telefone."),(0,n.kt)("h3",{id:"cor-tintado"},"Cor tintado"),(0,n.kt)("p",null,"Para otimizar o contraste de cores em suas imagens branco e preto em seu app dependendo do modo de cor (claro ou escuro) pode estabelecer as imagens da seguinte forma, com a linha de c\xf3digo ",(0,n.kt)("inlineCode",{parentName:"p"},'"tintable": true')," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,n.kt)("p",null,"Este \xe9 o resultado nos modos claro e escuro:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Modo Escuro"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Formatador de dados",src:a(95069).Z})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Formatador de dados",src:a(37866).Z}))))),(0,n.kt)("h3",{id:"imagens-a-cor-otimizadas"},"Imagens a cor otimizadas"),(0,n.kt)("p",null,"Para otimizar as imagens de cor que s\xe3o mostradas em sua aplica\xe7\xe3o e adapt\xe1-las a seu modo de cor, necessita ter duas imagens, uma para o modo claro e outra para o modo escuro com o sufixo ",(0,n.kt)("inlineCode",{parentName:"p"},"_dark"),", como abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatador de dados",src:a(46662).Z})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,n.kt)("p",null,"Este \xe9 o resultado nos modos claro e escuro:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Modo Escuro"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Formatador de dados",src:a(13339).Z})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Formatador de dados",src:a(60769).Z}))))),(0,n.kt)("h2",{id:"abrir-projeto-m\xf3vel"},"Abrir projeto m\xf3vel"),(0,n.kt)("p",null,"Abra Task Management.4dbase com 4D e v\xe1 para File > abra > Mobile Project... para abrir ",(0,n.kt)("strong",{parentName:"p"},"Tasks")),(0,n.kt)("p",null,"Agora, v\xe1 para a se\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Labels & Icons")," no editor de projetos. Todos os formatadores est\xe3o dispon\xedveis para os tipos de campo diferentes que voc\xea definir previamente nos arquivos manifest.json de diferentes  formatadores:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Selecione o formatador de",(0,n.kt)("strong",{parentName:"li"},"integerToString ")," para o ",(0,n.kt)("strong",{parentName:"li"},"campo Job")),(0,n.kt)("li",{parentName:"ul"},"Selecione o formatador de",(0,n.kt)("strong",{parentName:"li"}," textToString")," para o ",(0,n.kt)("strong",{parentName:"li"},"campo Country")),(0,n.kt)("li",{parentName:"ul"},"Selecione o formatador ",(0,n.kt)("strong",{parentName:"li"}," integerToImage")," para o ",(0,n.kt)("strong",{parentName:"li"},"Task Status")),(0,n.kt)("li",{parentName:"ul"},"Selecione o formatador ",(0,n.kt)("strong",{parentName:"li"}," textToImage")," para o ",(0,n.kt)("strong",{parentName:"li"},"Manager"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:a(75442).Z})),(0,n.kt)("h2",{id:"construa-seu-app-4d-for-ios"},"Construa seu app 4D for iOS"),(0,n.kt)("p",null,"Construa seu app 4D de iOS e voc\xea ver\xe1 que o formatador de dados \xe9 bem aplicado dependendo do limite de cr\xe9dito."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:a(83747).Z})),(0,n.kt)("p",null,"Baixe a pasta do modelo de formatador completo:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Baixar")))}c.isMDXComponent=!0},46662:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},37866:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},60769:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},15820:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},32053:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},45936:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},74032:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},94048:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},36971:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},84328:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},83747:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},75442:function(e,t,a){"use strict";t.Z=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},95069:function(e,t,a){"use strict";t.Z=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},13339:function(e,t,a){"use strict";t.Z=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);