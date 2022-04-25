"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7432],{85206:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),s=["components"],i={id:"define-first-action",title:"Definir sua primeira a\xe7\xe3o"},l=void 0,p={unversionedId:"tutorials/actions/define-first-action",id:"version-19-R3/tutorials/actions/define-first-action",title:"Definir sua primeira a\xe7\xe3o",description:"Neste tutorial vamos trabalhar em um app Tasks iOS e ver como lidar com a\xe7\xf5es nesta aplica\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R3/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/pt/docs/19-R3/tutorials/actions/define-first-action",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/actions/define-first-action.md",tags:[],version:"19-R3",frontMatter:{id:"define-first-action",title:"Definir sua primeira a\xe7\xe3o"},sidebar:"version-19-R3/tutorials",previous:{title:"Come\xe7ando",permalink:"/go-mobile/pt/docs/19-R3/tutorials/actions/getting-started"},next:{title:"Adicionar a\xe7\xf5es em modelos",permalink:"/go-mobile/pt/docs/19-R3/tutorials/actions/adding-actions-template"}},u={},c=[{value:"A\xe7\xf5es de entidade",id:"a\xe7\xf5es-de-entidade",level:2},{value:"PASSO 1. A\xe7\xf5es de entidade na se\xe7\xe3o A\xe7\xe3o",id:"passo-1-a\xe7\xf5es-de-entidade-na-se\xe7\xe3o-a\xe7\xe3o",level:3},{value:"PASSO 2. Criar e editar o m\xe9todo Action Database",id:"passo-2-criar-e-editar-o-m\xe9todo-action-database",level:3},{value:"PASSO 3. Criar um m\xe9todo  &quot;modifyStatus&quot;",id:"passo-3-criar-um-m\xe9todo--modifystatus",level:3},{value:"A\xe7\xf5es de Tabela",id:"a\xe7\xf5es-de-tabela",level:2},{value:"PASSO 1. A\xe7\xf5es de Tabela na se\xe7\xe3o A\xe7\xf5es",id:"passo-1-a\xe7\xf5es-de-tabela-na-se\xe7\xe3o-a\xe7\xf5es",level:3},{value:"PASSO 2. Modificar o m\xe9todo A\xe7\xe3o",id:"passo-2-modificar-o-m\xe9todo-a\xe7\xe3o",level:3},{value:"PASSO 3. Criar um m\xe9todo &quot;postponeAll&quot;",id:"passo-3-criar-um-m\xe9todo-postponeall",level:3},{value:"O que fazer agora?",id:"o-que-fazer-agora",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Neste tutorial vamos trabalhar em um app ",(0,r.kt)("strong",{parentName:"p"},"Tasks iOS")," e ver como lidar com a\xe7\xf5es nesta aplica\xe7\xe3o."),(0,r.kt)("p",null,"O que queremos fazer em um app ",(0,r.kt)("strong",{parentName:"p"},"Task")," \xe9 mudar o ",(0,r.kt)("strong",{parentName:"p"},"status")," e a ",(0,r.kt)("strong",{parentName:"p"},"percentagem de finaliza\xe7\xe3o")," de uma tarefa individual."),(0,r.kt)("p",null,"Mais geralmente, queremos ",(0,r.kt)("strong",{parentName:"p"},"mudar o estado de todas as tarefas")," para, por exemplo, postergado ou Em Progresso."),(0,r.kt)("p",null,"Baixe o ",(0,r.kt)("strong",{parentName:"p"},"Starter project")," e v\xe1 para a se\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Actions"),"."),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Baixar")),(0,r.kt)("p",null,"Pode definir a\xe7\xf5es para dois n\xedveis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A\xe7\xf5es de entidade"),(0,r.kt)("li",{parentName:"ul"},"A\xe7\xf5es de Tabela")),(0,r.kt)("p",null,"Primeiro vamos ver a\xe7\xf5es de Entidade!"),(0,r.kt)("h2",{id:"a\xe7\xf5es-de-entidade"},"A\xe7\xf5es de entidade"),(0,r.kt)("h3",{id:"passo-1-a\xe7\xf5es-de-entidade-na-se\xe7\xe3o-a\xe7\xe3o"},"PASSO 1. A\xe7\xf5es de entidade na se\xe7\xe3o A\xe7\xe3o"),(0,r.kt)("p",null,"Na se\xe7\xe3oActions, \xe9 poss\xedvel definir todas as suas a\xe7\xf5es ",(0,r.kt)("strong",{parentName:"p"},"nomes"),", ",(0,r.kt)("strong",{parentName:"p"},"\xedcones"),", ",(0,r.kt)("strong",{parentName:"p"},"etiquetas")," de suas a\xe7\xf5es. Assim como as ",(0,r.kt)("strong",{parentName:"p"},"tabelas")," nas quais deseja  que a a\xe7\xe3o esteja dispon\xedvel e o ",(0,r.kt)("strong",{parentName:"p"},"alcance/ escopo")," das a\xe7\xf5es."),(0,r.kt)("p",null,"A se\xe7\xe3o A\xe7\xf5es come\xe7a bastante vazia quando  a abre pela primeira vez, ent\xe3o clique no bot\xe3o ",(0,r.kt)("strong",{parentName:"p"},'Plus "+"')," na parte inferior esquerda para adicionar sua primeira a\xe7\xe3o!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create action",src:a(51861).Z,width:"2164",height:"1988"})),(0,r.kt)("p",null,"Primeiro, vamos definir uma a\xe7\xe3o que ",(0,r.kt)("strong",{parentName:"p"},"mudar\xe1 o estado de uma tarefa"),' a "Completa" e colocar\xe1 a ',(0,r.kt)("strong",{parentName:"p"},"porcentagem de finaliza\xe7\xe3o")," em 100%."),(0,r.kt)("p",null,"Para definir essa a\xe7\xe3o:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduza ",(0,r.kt)("strong",{parentName:"li"},"taskDone")," no campo",(0,r.kt)("strong",{parentName:"li"},"Nomes")),(0,r.kt)("li",{parentName:"ul"},"Selecione o \xedcone ",(0,r.kt)("strong",{parentName:"li"},"Done")," na biblioteca de \xedcones"),(0,r.kt)("li",{parentName:"ul"},"Digite ",(0,r.kt)("strong",{parentName:"li"},"Done")," iem",(0,r.kt)("strong",{parentName:"li"},"Etiquetas Curtas")),(0,r.kt)("li",{parentName:"ul"},"Introduza ",(0,r.kt)("strong",{parentName:"li"},"Task Done")," no campo ",(0,r.kt)("strong",{parentName:"li"},"Etiquetas longas")),(0,r.kt)("li",{parentName:"ul"},"Selecione a tabela ",(0,r.kt)("strong",{parentName:"li"},"Tasks")," da lista ",(0,r.kt)("strong",{parentName:"li"},"Tabelas")),(0,r.kt)("li",{parentName:"ul"},"Selecione ",(0,r.kt)("strong",{parentName:"li"},"Registro atual")," na lista ",(0,r.kt)("strong",{parentName:"li"},"Alcance"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Done action definition",src:a(1859).Z,width:"2164",height:"1988"})),(0,r.kt)("h3",{id:"passo-2-criar-e-editar-o-m\xe9todo-action-database"},"PASSO 2. Criar e editar o m\xe9todo Action Database"),(0,r.kt)("p",null,"Agora que sua a\xe7\xe3o foi definida no Editor de Projeto, \xe9 preciso criar o m\xe9todo de banco de dados ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html"},"On Mobile App Action")),"."),(0,r.kt)("p",null,"Para fazer isso, clique no ",(0,r.kt)("strong",{parentName:"p"},"bot\xe3o Criar")," na parte inferior direita da tabela de a\xe7\xf5es e ingresse o c\xf3digo abaixo no m\xe9todo banco de dados ",(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1) C_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informa\xe7\xf5es fornecidas pela aplica\xe7\xe3o m\xf3vel\n\n$context:=$request.context Case of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Peti\xe7\xe3o desconhecida\n        $result:=New object("success";False) End case\n\n$0:=$result  // Informa\xe7\xf5es retornadas para a aplica\xe7\xe3o m\xf3vel\n\n')),(0,r.kt)("h3",{id:"passo-3-criar-um-m\xe9todo--modifystatus"},'PASSO 3. Criar um m\xe9todo  "modifyStatus"'),(0,r.kt)("p",null,"Logo que seu m\xe9todo banco de dados tiver sido editado, deve criar um m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},"modifyStatus")," que  far\xe1 o trabalho:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1) C_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID)) If ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity. CompletePercentage:=$in. CompletePercentage\n\n    $entity. Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notifique o App que a a\xe7\xe3o teve sucesso\n        $out.dataSynchro:=True  // notifique App para refrescar esta entidade\n\n    Else\n\n        $out:=$status  // retorna o  status para o  App\n\n    End if Else\n\n    $out.success:=False  // notifique o App que a a\xe7\xe3o fracassou End if\n\n$0:=$out\n\n')),(0,r.kt)("p",null,"Crie e Execute seu app e pronto! Sua ",(0,r.kt)("strong",{parentName:"p"},"a\xe7\xe3o Done ")," est\xe1 dispon\xedvel quando deslizar uma c\xe9lula para a esquerda no formul\xe1rio Lista, ou quando clicar no  ",(0,r.kt)("strong",{parentName:"p"},"bot\xe3o gen\xe9rico Actions")," na barra de navega\xe7\xe3o do formul\xe1rio detalhado."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Done action",src:a(53948).Z,width:"1559",height:"907"})),(0,r.kt)("h2",{id:"a\xe7\xf5es-de-tabela"},"A\xe7\xf5es de Tabela"),(0,r.kt)("h3",{id:"passo-1-a\xe7\xf5es-de-tabela-na-se\xe7\xe3o-a\xe7\xf5es"},"PASSO 1. A\xe7\xf5es de Tabela na se\xe7\xe3o A\xe7\xf5es"),(0,r.kt)("p",null,"Agora imagine que est\xe1 de f\xe9rias e quer ",(0,r.kt)("strong",{parentName:"p"},"mudar o estado de todas as tarefas para "),' "Depois".'),(0,r.kt)("p",null,"Vamos definir esta a\xe7\xe3o a partir da se\xe7\xe3o A\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Digite ",(0,r.kt)("strong",{parentName:"li"},"postponeAll")," no campo ",(0,r.kt)("strong",{parentName:"li"},"Nomes")),(0,r.kt)("li",{parentName:"ul"},"Selecione o ",(0,r.kt)("strong",{parentName:"li"},'\xedcone "Postponed"')," da biblioteca de \xedcones"),(0,r.kt)("li",{parentName:"ul"},"Digite ",(0,r.kt)("strong",{parentName:"li"},"Postpone All")," no campo ",(0,r.kt)("strong",{parentName:"li"},"Etiquetas curtas")),(0,r.kt)("li",{parentName:"ul"},"Introduza ",(0,r.kt)("strong",{parentName:"li"},"Postpone All")," no campo ",(0,r.kt)("strong",{parentName:"li"},"Etiquetas longas")),(0,r.kt)("li",{parentName:"ul"},"Selecione a tabela ",(0,r.kt)("strong",{parentName:"li"},"Tasks")," da lista ",(0,r.kt)("strong",{parentName:"li"},"Tabelas")),(0,r.kt)("li",{parentName:"ul"},"Selecione ",(0,r.kt)("strong",{parentName:"li"},"Table")," da lista ",(0,r.kt)("strong",{parentName:"li"},"Alcance"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postponed action definition",src:a(31373).Z,width:"2164",height:"1988"})),(0,r.kt)("h3",{id:"passo-2-modificar-o-m\xe9todo-a\xe7\xe3o"},"PASSO 2. Modificar o m\xe9todo A\xe7\xe3o"),(0,r.kt)("p",null,"Clique no ",(0,r.kt)("strong",{parentName:"p"},"bot\xe3o Editar")," na parte inferior direita da  tabela a\xe7\xe3o para completar o m\xe9todo banco de dados ",(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1) C_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informa\xe7\xf5es fornecida por aplica\xe7\xe3o m\xf3vel\n\n$context:=$request.context Case of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Peti\xe7\xe3o desconhecida\n        $result:=New object("success";False) End case\n\n$0:=$result  // Informa\xe7\xf5es retornadas para aplica\xe7\xe3o m\xf3vel\n\n')),(0,r.kt)("h3",{id:"passo-3-criar-um-m\xe9todo-postponeall"},'PASSO 3. Criar um m\xe9todo "postponeAll"'),(0,r.kt)("p",null,"A medida em cria o m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},"modifyStatus")," siga o mesmo processo e crie um novo m\xe9todo ",(0,r.kt)("strong",{parentName:"p"},"postponeAll")," que vai modificar o estado de todos os registros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1) C_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False) If ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity. Status:=$in. Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // notificar o App que a a\xe7\xe3o teve sucesso\n    $out.dataSynchro:=True  // notificar o App para renovar a sele\xe7\xe3o Else\n\n    $out.errors:=New collection("No Selection") End if\n\n$0:=$out\n\n')),(0,r.kt)("p",null,"Criar e Executar seu app! Encontrar\xe1 um novo ",(0,r.kt)("strong",{parentName:"p"},"bot\xe3o gen\xe9rico")," na barra de navega\xe7\xe3o de seu formul\xe1rio Lista. Click nele para ativar a a\xe7\xe3o",(0,r.kt)("strong",{parentName:"p"},"Postpone All"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result Postponed Action",src:a(35789).Z,width:"1559",height:"907"})),(0,r.kt)("h2",{id:"o-que-fazer-agora"},"O que fazer agora?"),(0,r.kt)("p",null,"Parab\xe9ns! Acaba de agregar 2 a\xe7\xf5es a sua aplica\xe7\xe3o iOS. Agora pode agregar todas as a\xe7\xf5es que precisar \xe0 sua aplica\xe7\xe3o Tasks!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result All Action",src:a(11874).Z,width:"1559",height:"907"})),(0,r.kt)("p",null,"Pode baixar o projeto Final que inclui v\xe1rias a\xe7\xf5es:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Baixar")))}m.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51861:function(e,t,a){t.Z=a.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},1859:function(e,t,a){t.Z=a.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},53948:function(e,t,a){t.Z=a.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},11874:function(e,t,a){t.Z=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},35789:function(e,t,a){t.Z=a.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},31373:function(e,t,a){t.Z=a.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);