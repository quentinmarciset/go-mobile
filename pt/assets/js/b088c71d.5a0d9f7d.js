(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9728],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(k,s(s({ref:a},p),{},{components:t})):n.createElement(k,s({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7552:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(22122),o=t(19756),r=(t(67294),t(3905)),s=["components"],i={id:"using-action-parameters",title:"Usar par\xe2metros de a\xe7\xe3o"},l=void 0,c={unversionedId:"tutorials/actions/using-action-parameters",id:"tutorials/actions/using-action-parameters",isDocsHomePage:!1,title:"Usar par\xe2metros de a\xe7\xe3o",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/pt/docs/tutorials/actions/using-action-parameters",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/using-action-parameters.md",version:"current",frontMatter:{id:"using-action-parameters",title:"Usar par\xe2metros de a\xe7\xe3o"},sidebar:"tutorials",previous:{title:"Adicionar a\xe7\xf5es em modelos",permalink:"/go-mobile/pt/docs/tutorials/actions/adding-actions-template"},next:{title:"Many to One relations",permalink:"/go-mobile/pt/docs/tutorials/relations/many-to-one-relations"}},p=[{value:"PASSO 1. Adicionar a\xe7\xe3o",id:"passo-1-adicionar-a\xe7\xe3o",children:[]},{value:"PASSO 2. A\xe7\xe3o de Edi\xe7\xe3o",id:"passo-2-a\xe7\xe3o-de-edi\xe7\xe3o",children:[]},{value:"PASSO 3. A\xe7\xe3o de elimina\xe7\xe3o",id:"passo-3-a\xe7\xe3o-de-elimina\xe7\xe3o",children:[]},{value:"PASSO 4. A\xe7\xe3o de envio de coment\xe1rio",id:"passo-4-a\xe7\xe3o-de-envio-de-coment\xe1rio",children:[]},{value:"PASSO 5. Cria\xe7\xe3o de On Mobile App Action",id:"passo-5-cria\xe7\xe3o-de-on-mobile-app-action",children:[]},{value:"PASSO 6. Cria\xe7\xe3o de todos os m\xe9todos necess\xe1rios",id:"passo-6-cria\xe7\xe3o-de-todos-os-m\xe9todos-necess\xe1rios",children:[{value:"addAction",id:"addaction",children:[]},{value:"editAction",id:"editaction",children:[]},{value:"deleteAction",id:"deleteaction",children:[]},{value:"sendEmail",id:"sendemail",children:[]}]},{value:"PASSO 7. Cria\xe7\xe3o da aplica\xe7\xe3o",id:"passo-7-cria\xe7\xe3o-da-aplica\xe7\xe3o",children:[]},{value:"PASSO 8. O que fazer agora?",id:"passo-8-o-que-fazer-agora",children:[]}],u={toc:p};function d(e){var a=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("p",{parentName:"blockquote"},"Define par\xe2metros a\xe7\xe3o para editar o conte\xfado de sua aplica\xe7\xe3o.")),(0,r.kt)("p",null,"No tutorial anterior, mostramos como executar c\xf3digo 4D desde um app iOS ao definir a\xe7\xf5es na se\xe7\xe3o Actions ."),(0,r.kt)("p",null,"Neste tutorial vamos nos aprofundar mais e criar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"uma a\xe7\xe3o de adi\xe7\xe3o para ",(0,r.kt)("strong",{parentName:"li"},"criar uma nova tarefa"),","),(0,r.kt)("li",{parentName:"ul"},"uma a\xe7\xe3o de edi\xe7\xe3o que lhe permitir\xe1 ",(0,r.kt)("strong",{parentName:"li"},"editar as tarefas existentes")," desde a aplica\xe7\xe3o iOS,"),(0,r.kt)("li",{parentName:"ul"},"uma a\xe7\xe3o de elimina\xe7\xe3o para ",(0,r.kt)("strong",{parentName:"li"},"eliminar uma entidade"),", e"),(0,r.kt)("li",{parentName:"ul"},"uma a\xe7\xe3o que lhe permitir\xe1 ",(0,r.kt)("strong",{parentName:"li"},"enviar um coment\xe1rio por correio eletr\xf4nico para uma tarefa espec\xedfica"),".")),(0,r.kt)("p",null,"Para come\xe7ar, primeiro descarregamos  ",(0,r.kt)("strong",{parentName:"p"},"Projeto Starter")," baseado em nossa aplica\xe7\xe3o iOS Tasks:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Download")),(0,r.kt)("h2",{id:"passo-1-adicionar-a\xe7\xe3o"},"PASSO 1. Adicionar a\xe7\xe3o"),(0,r.kt)("p",null,"Comecemos por uma tarefa simples. Abra o projeto m\xf3vel Tasks e v\xe1 diretamente a ",(0,r.kt)("strong",{parentName:"p"},"se\xe7\xe3o Actions"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action section",src:t(67785).Z})),(0,r.kt)("p",null,"Est\xe1 bastante vazio por enquanto... Isso\xe9 o que queremos: ",(0,r.kt)("strong",{parentName:"p"},"criar uma nova tarefa desde a aplica\xe7\xe3o iOS"),"."),(0,r.kt)("p",null,"Para isto, criamos uma a\xe7\xe3o utilizando uma a\xe7\xe3o preestabelecida ",(0,r.kt)("strong",{parentName:"p"},"Agregar"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique na flecha no ",(0,r.kt)("strong",{parentName:"li"},"bot\xe3o +"),", na parte inferior da tabela A\xe7\xf5es."),(0,r.kt)("li",{parentName:"ul"},"Selecione a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"a\xe7\xe3o de adicionar"),"."),(0,r.kt)("li",{parentName:"ul"},"Seleccione a ",(0,r.kt)("strong",{parentName:"li"},"tabela Task"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add action creation",src:t(47710).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc9 mostrada uma ",(0,r.kt)("strong",{parentName:"li"},"nova a\xe7\xe3o")," chamada ",(0,r.kt)("em",{parentName:"li"},'"addTasks"')," com ",(0,r.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,r.kt)("li",{parentName:"ul"},"Todos os ",(0,r.kt)("strong",{parentName:"li"},"par\xe2metros"),"dispon\xedveis e suas ",(0,r.kt)("strong",{parentName:"li"},"propriedades")," s\xe3o mostrados na se\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Par\xe2metros das a\xe7\xf5es"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add action parameters",src:t(60698).Z})),(0,r.kt)("p",null,"Neste ponto, todos os ",(0,r.kt)("strong",{parentName:"p"},"par\xe2metros das a\xe7\xf5es de adi\xe7\xe3o")," s\xe3o criados automaticamente e est\xe3o prontos para serem usados."),(0,r.kt)("h2",{id:"passo-2-a\xe7\xe3o-de-edi\xe7\xe3o"},"PASSO 2. A\xe7\xe3o de Edi\xe7\xe3o"),(0,r.kt)("p",null,"Agora criamos uma a\xe7\xe3o que lhe permitir\xe1 ",(0,r.kt)("strong",{parentName:"p"},"editar o conte\xfado de sua aplica\xe7\xe3o"),"."),(0,r.kt)("p",null,"Para isso, criamos uma a\xe7\xe3o utilizando uma a\xe7\xe3o preestabelecida de ",(0,r.kt)("strong",{parentName:"p"},"edi\xe7\xe3o"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique na flecha no ",(0,r.kt)("strong",{parentName:"li"},"bot\xe3o +"),", na parte inferior da tabela A\xe7\xf5es."),(0,r.kt)("li",{parentName:"ul"},"Selecione a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"a\xe7\xe3o de edi\xe7\xe3o"),"."),(0,r.kt)("li",{parentName:"ul"},"Selecione a tabela Tasks.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit action creation",src:t(65748).Z})),(0,r.kt)("p",null,"Neste ponto ver\xe1:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc9 mostrada ",(0,r.kt)("strong",{parentName:"li"},"uma nova a\xe7\xe3o")," chamada ",(0,r.kt)("em",{parentName:"li"},'"editTasks"')," com",(0,r.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,r.kt)("li",{parentName:"ul"},"Todos os ",(0,r.kt)("strong",{parentName:"li"},"par\xe2metros"),"dispon\xedveis e suas ",(0,r.kt)("strong",{parentName:"li"},"propriedades")," s\xe3o mostradas na se\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Par\xe2metros das a\xe7\xf5es"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit action parameters",src:t(59146).Z})),(0,r.kt)("p",null,"No se preocupe, manejaremos o c\xf3digo 4D para estas a\xe7\xf5es mais adiante. :-)"),(0,r.kt)("h2",{id:"passo-3-a\xe7\xe3o-de-elimina\xe7\xe3o"},"PASSO 3. A\xe7\xe3o de elimina\xe7\xe3o"),(0,r.kt)("p",null,"O processo de cria\xe7\xe3o da a\xe7\xe3o predefinida ",(0,r.kt)("strong",{parentName:"p"},"Eliminar")," \xe9 quase o mesmo da a\xe7\xe3o Editar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique na flecha no ",(0,r.kt)("strong",{parentName:"li"},"bot\xe3o +"),", na parte inferior da tabela A\xe7\xf5es."),(0,r.kt)("li",{parentName:"ul"},"Selecione a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"a\xe7\xe3o de elimina\xe7\xe3o"),"."),(0,r.kt)("li",{parentName:"ul"},"Selecione a tabela Tasks.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete action creation",src:t(7011).Z})),(0,r.kt)("p",null,"Neste ponto, ver\xe1 uma ",(0,r.kt)("strong",{parentName:"p"},"nova a\xe7\xe3o")," chamada ",(0,r.kt)("em",{parentName:"p"},'"deleteTasks"')," com ",(0,r.kt)("em",{parentName:"p"},'"Remove"')," como a etiqueta predeterminada."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A\xe7\xe3o de elimina\xe7\xe3o",src:t(81817).Z})),(0,r.kt)("p",null,"N\xe3o necessita preocupar-se pelos par\xe2metros ou propriedades deste tipo de a\xe7\xe3o."),(0,r.kt)("h2",{id:"passo-4-a\xe7\xe3o-de-envio-de-coment\xe1rio"},"PASSO 4. A\xe7\xe3o de envio de coment\xe1rio"),(0,r.kt)("p",null,"Agora queremos ",(0,r.kt)("strong",{parentName:"p"},"enviar um coment\xe1rio")," a um ",(0,r.kt)("strong",{parentName:"p"},"correio eletr\xf4nico espec\xedfico")," dependendo de uma tarefa espec\xedfica. Para fazer isso, clique no bot\xe3o+ e crie uma nova a\xe7\xe3o chamada ",(0,r.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete action creation",src:t(52829).Z})),(0,r.kt)("p",null,"Agora vamos criar tr\xeas par\xe2metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique no bot\xe3o + e selecione ",(0,r.kt)("strong",{parentName:"li"},"Title")," na lista de par\xe2metros das a\xe7\xf5es, para inclu\xed-lo no correio eletr\xf4nico que vai enviar."),(0,r.kt)("li",{parentName:"ul"},"Cria um par\xe2metro ",(0,r.kt)("strong",{parentName:"li"},"Comment")," e seleciona o formato \xc1rea de texto."),(0,r.kt)("li",{parentName:"ul"},"Crie um par\xe2metro ",(0,r.kt)("strong",{parentName:"li"},"email")," e selecione o formato Email address.")),(0,r.kt)("p",null,"Sua se\xe7\xe3o Actions deveria parecer com isto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send comment action creation",src:t(20088).Z})),(0,r.kt)("h2",{id:"passo-5-cria\xe7\xe3o-de-on-mobile-app-action"},"PASSO 5. Cria\xe7\xe3o de On Mobile App Action"),(0,r.kt)("p",null,"Clique no bot\xe3o Criar para criar o m\xe9todo database ",(0,r.kt)("em",{parentName:"p"},"On Mobile App Action"),"."),(0,r.kt)("p",null,"Todas suas a\xe7\xf5es se incluir\xe3o automaticamente no m\xe9todo banco."),(0,r.kt)("p",null,"O \xfanico que deve fazer \xe9 agregar uma refer\xeancia a seus m\xe9todos para os cen\xe1rios que quiser manejar."),(0,r.kt)("p",null,"Aqui o m\xe9todo banco de dados ",(0,r.kt)("em",{parentName:"p"},"On Mobile App Action")," final:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informa\xe7\xe3o oferecida pela aplica\xe7\xe3o m\xf3vel\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Inserir aqui o c\xf3digo para a a\xe7\xe3o "Add\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Inserir aqui o c\xf3digo para a a\xe7\xe3o "Edit\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Inserir aqui o c\xf3digo para a a\xe7\xe3o "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Inserir aqui o c\xf3digo para a a\xe7\xe3o "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // A\xe7\xe3o desconhecida\nEnd case \n\n$0:=$result\n\n')),(0,r.kt)("h2",{id:"passo-6-cria\xe7\xe3o-de-todos-os-m\xe9todos-necess\xe1rios"},"PASSO 6. Cria\xe7\xe3o de todos os m\xe9todos necess\xe1rios"),(0,r.kt)("h3",{id:"addaction"},"addAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //cria uma refer\xeancia\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //salva a entidade\n\n\n    $out.success:=True  // notifica o App que a a\xe7\xe3o teve sucesso\n    $out.dataSynchro:=True  // notifique o App para refrescar a sele\xe7\xe3o\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"editaction"},"editAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notificar o App que a a\xe7\xe3o teve sucesso\n        $out.dataSynchro:=True  // notificar o App para refrescar esta entidade\n        $out.statusText:="Task edited"\n\n    Else \n\n        $out:=$status  // devolver o estado do App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar o App que a a\xe7\xe3o falhou\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // notificar o App que a a\xe7\xe3o teve sucesso\n        $out.dataSynchro:=True  // notificar o App para refrescar esta entidade\n        $out.statusText:="Task deleted"\n\n    Else \n\n        $out:=$status  // devolver estado do App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar o App que a a\xe7\xe3o falhou\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"sendemail"},"sendEmail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notificar o App que a a\xe7\xe3o teve sucesso\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // notificar o App que a a\xe7\xe3o falhou\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar o App que a \xe7\xe3o falhou\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("p",null,"N\xe3o esque\xe7a de agregar seus pr\xf3prios valores para a a\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"sendEmail"),"."),(0,r.kt)("h2",{id:"passo-7-cria\xe7\xe3o-da-aplica\xe7\xe3o"},"PASSO 7. Cria\xe7\xe3o da aplica\xe7\xe3o"),(0,r.kt)("p",null,"\xc9 hora de gerar sua aplica\xe7\xe3o!"),(0,r.kt)("p",null,"Agora, se clicar no bot\xe3o A\xe7\xe3o da barra de navega\xe7\xe3o, poder\xe1 ",(0,r.kt)("strong",{parentName:"p"},"criar uma nova tarefa"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create new task",src:t(70605).Z})),(0,r.kt)("p",null,"Se manter a press\xe3o sobre sua nova c\xe9lula de tarefas no Formul\xe1rio Lista, se mostrar\xe1 uma a\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Editar...")," na lista de a\xe7\xf5es."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit task",src:t(56084).Z})),(0,r.kt)("p",null,"Envie um coment\xe1rio utilizando a a\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Send comment"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send task comment",src:t(43670).Z})),(0,r.kt)("p",null,"e finalmente pode eliminar uma entidade utilizando a a\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Eliminar... "),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete task",src:t(4218).Z})),(0,r.kt)("h2",{id:"passo-8-o-que-fazer-agora"},"PASSO 8. O que fazer agora?"),(0,r.kt)("p",null,"Parab\xe9ns! Sua aplica\xe7\xe3o iOS Tasks agora est\xe1 completa e agora pode modificar os dados de sua aplica\xe7\xe3o diretamente desde seu dispositivo e sincroniz\xe1-los com seu servidor."),(0,r.kt)("p",null,"Baixe o projeto terminado:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Baixe o projeto terminado")))}d.isMDXComponent=!0},70605:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},4218:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},56084:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},43670:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},67785:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},47710:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},60698:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},7011:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},81817:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},65748:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},59146:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},52829:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},20088:function(e,a,t){"use strict";a.Z=t.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);