"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3136],{6006:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var i=t(83117),o=t(80102),r=(t(67294),t(3905)),n=["components"],s={id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},l=void 0,u={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"tutorials/customizing-with-xcode/customize-your-ios-app",title:"Personalizar seu app 4D for iOS",description:"Vamos fazer modifica\xe7\xf5es no storyboard... do simples ao complexo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/pt/docs/next/tutorials/customizing-with-xcode/customize-your-ios-app",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"current",frontMatter:{id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},sidebar:"tutorials",previous:{title:"Organizar um projeto 4D for iOS",permalink:"/go-mobile/pt/docs/next/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecionar um Apple Developer Program",permalink:"/go-mobile/pt/docs/next/tutorials/developer-program/selecting-your-developer-program"}},p={},d=[{value:"PASSO 1. Modifica\xe7\xe3o de etiqueta simples",id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples",level:2},{value:"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil",id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil",level:2},{value:"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil",id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil",level:2},{value:"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es",id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es",level:2},{value:"Agora, vamos trabalhar na etiqueta Nome.",id:"agora-vamos-trabalhar-na-etiqueta-nome",level:4},{value:"Finalmente, vamos trabalhar na etiqueta do sobrenome.",id:"finalmente-vamos-trabalhar-na-etiqueta-do-sobrenome",level:4}],m={toc:d};function c(e){var a=e.components,s=(0,o.Z)(e,n);return(0,r.kt)("wrapper",(0,i.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vamos fazer modifica\xe7\xf5es no storyboard... do simples ao complexo."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Final result",src:t(15993).Z,width:"1276",height:"1134"})),(0,r.kt)("h2",{id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples"},"PASSO 1. Modifica\xe7\xe3o de etiqueta simples"),(0,r.kt)("p",null,"Vamos come\xe7ar modificando a fonte e cor de uma etiqueta:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra o arquivo ",(0,r.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," desde a aba Navigation."),(0,r.kt)("li",{parentName:"ul"},"Clique na etiqueta do primeiro nome (voc\xea pode tamb\xe9m selecionar o construtor de interfaces no painel esquerdo)."),(0,r.kt)("li",{parentName:"ul"},"Selecione o painel Inspetor de atributos da \xe1rea de utilit\xe1rio.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Attributes inspector",src:t(13480).Z,width:"1117",height:"790"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Altere a fonte da Helvetica Neue bold para Futura bold.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Attributes inspector font",src:t(6928).Z,width:"1291",height:"1006"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Voc\xea tamb\xe9m pode alterar a cor da fonte no mesmo painel.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Attributes inspector color",src:t(82405).Z,width:"1291",height:"1006"})),(0,r.kt)("h2",{id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil"},"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil"),(0,r.kt)("p",null,"Todos os modelos 4D for iOS usam restri\xe7\xf5es para alementos do aplicativo para serem bem exibidos em todos os aparelhos."),(0,r.kt)("p",null,"No arquivo ",(0,r.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", as etiquetas First Name, e Last Name est\xe3o todas alinhadas ao centro no momento."),(0,r.kt)("p",null,"Vamos mud\xe1-lo para aparecer assim:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Simulator result",src:t(78995).Z,width:"545",height:"964"})),(0,r.kt)("p",null,"Primeiro, alinhe verticalmente as imagens e arraste as etiquetas nome e sobrenome para a direita da imagem."),(0,r.kt)("p",null,"Em seguida, selecione a imagem e v\xe1 para o painel de atributos de tamanho da \xe1rea de Utility. Altere o valor de X de 161.67 a 40.67 e o valor de Y de 28 a 79."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Profil picture position",src:t(92759).Z,width:"1072",height:"1034"})),(0,r.kt)("p",null,"Como voc\xea pode ver, a posi\xe7\xe3o foi alterada, mas o Xcode est\xe1 exibindo linhas amarelas... por qu\xea? Estas linhas amarelas representam restri\xe7\xf5es que n\xe3o s\xe3o mais v\xe1lidas."),(0,r.kt)("h2",{id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil"},"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil"),(0,r.kt)("p",null,"Para alinhar verticalmente a imagem no centro no Superview (a vis\xe3o que a cont\xe9m), precisamos eliminar as restri\xe7\xf5es existentes e adicionar novas."),(0,r.kt)("p",null,"A imagem possui atualmente as seguintes restri\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Width Equals: uma largura de 78 pixels."),(0,r.kt)("li",{parentName:"ul"},"Heigh Equals: Uma altura fixa de 78 pixels."),(0,r.kt)("li",{parentName:"ul"},"Align Center x: centra a imagem em um eixo horizontal definido anteriormente."),(0,r.kt)("li",{parentName:"ul"},"Top Space: Uma quantia fixa de espa\xe7o da parte superior da imagem at\xe9 o topo da vista."),(0,r.kt)("li",{parentName:"ul"},"Est\xe1cio inferior a ",(0,r.kt)("inlineCode",{parentName:"li"},"<First Name>"),": o espa\xe7o previamente definido entre a etiqueta do Nome e a imagem.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Profil picture constraints",src:t(90471).Z,width:"312",height:"397"})),(0,r.kt)("p",null,"Apague todas as restri\xe7\xf5es exceto Width e Height (voc\xea vai modific\xe1-las depois na se\xe7\xe3o Restri\xe7\xf5es no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restri\xe7\xf5es est\xe3o faltando."),(0,r.kt)("p",null,"Clique no bot\xe3o Align (na parte inferior da janela Interface Builder) e marque a caixa de sele\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Profil picture Align",src:t(13139).Z,width:"1072",height:"1034"})),(0,r.kt)("p",null,"Depois clique no bot\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints")," e adiciona uma nova restri\xe7\xe3o de distanciamento entre linhas (a restri\xe7\xe3o da esquerda)."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Profil picture new constraints",src:t(44113).Z,width:"1072",height:"1034"})),(0,r.kt)("p",null,"Nesse ponto, todas as restri\xe7\xf5es de imagem de perfil devem estar em azul."),(0,r.kt)("p",null,"Parab\xe9ns! Sua foto do perfil est\xe1 agora bem posicionada com as restri\xe7\xf5es corretas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DICAS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para criar uma restri\xe7\xe3o entre duas vistas, pressione Ctrl e arraste uma das vistas para a outra. Quando soltar o bot\xe3o do mouse, a Interface Builder mostra um menu com uma lista de poss\xedveis restri\xe7\xf5es.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pode apagar restri\xe7\xf5es selecionando-as do inspector Size ou desde o Interface Builder.")))),(0,r.kt)("h2",{id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es"},"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es"),(0,r.kt)("h4",{id:"agora-vamos-trabalhar-na-etiqueta-nome"},"Agora, vamos trabalhar na etiqueta Nome."),(0,r.kt)("p",null,"Vamos come\xe7ar mudando a posi\xe7\xe3o e largura:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selecione a etiqueta First Name no Interface Builder."),(0,r.kt)("li",{parentName:"ul"},"Depois mude a largura 386 a 267 p\xedxels,"),(0,r.kt)("li",{parentName:"ul"},"Muda o valor de X de 8 a 127 p\xedxels e o valor de Y de 28 a 79 p\xedxels.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"First Name Label position",src:t(45078).Z,width:"1139",height:"1040"})),(0,r.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space e de bottom space desde o inspetor de tamanho."),(0,r.kt)("li",{parentName:"ul"},"Adicione uma restri\xe7\xe3o de leading space clicando no bot\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Add New Constraints")," para colocar a etiqueta de nome \xe0 direita da foto de perfil."),(0,r.kt)("li",{parentName:"ul"},"Aperte a tecla Ctrl e arraste a etiqueta de nome \xe0 foto de perfil. Selecione a restri\xe7\xe3o superior no menu para alinhar ambos os elementos na parte superior.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"First Name Label top constraint",src:t(67890).Z,width:"1139",height:"1040"})),(0,r.kt)("h4",{id:"finalmente-vamos-trabalhar-na-etiqueta-do-sobrenome"},"Finalmente, vamos trabalhar na etiqueta do sobrenome."),(0,r.kt)("p",null,"Mude a posi\xe7\xe3o e a largura:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selecione a etiqueta Last Name do Interface Builder."),(0,r.kt)("li",{parentName:"ul"},"Mude a largura de 386  para 267 p\xedxels."),(0,r.kt)("li",{parentName:"ul"},"Mude o valor X de 8 para 127 p\xedxels e o valor de Y de 144,33 para 118,33 p\xedxels.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Last Name Label position",src:t(48725).Z,width:"1139",height:"1040"})),(0,r.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space do inspetor de Size."),(0,r.kt)("li",{parentName:"ul"},"Adicione limita\xe7\xf5es de leading space e de espa\xe7o superior clicando no bot\xe3o Adicionar novas restri\xe7\xf5es.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Last Name Label constraint",src:t(99767).Z,width:"1139",height:"1040"})),(0,r.kt)("p",null,"Suas duas etiquetas est\xe3o resosicionadas."),(0,r.kt)("p",null,"Vamos ver o resultado no Simulador!"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Simulator result",src:t(8753).Z,width:"545",height:"964"})),(0,r.kt)("p",null,"Hmmmm. N\xe3o \xe9 exatamente o que quer\xedamos..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selecione as etiquetas de First Name e Last Name e mude o alinhamento do centro para a esquerda no inspetor de atributos.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Labels Alignment",src:t(28547).Z,width:"1139",height:"1040"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Depois, selecione a imagem de perfil e d\xea duplo clique na restri\xe7\xe3o de leading space."),(0,r.kt)("li",{parentName:"ul"},"Mude o valor 40,67 p\xedxels da constante para 80 p\xedxels.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Constraints adjustments",src:t(7374).Z,width:"1140",height:"1065"})),(0,r.kt)("p",null,"Muito melhor! Agora todas as restri\xe7\xf5es est\xe3o funcionando e as etiquetas n\xe3o est\xe3o rompendo outras restri\xe7\xf5es."),(0,r.kt)("p",null,"Como pode ver, personalizar seu app \xe9 bem simples!"))}c.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return c}});var i=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),u=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=u(e.components);return i.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),c=o,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return t?i.createElement(f,n(n({ref:a},p),{},{components:t})):i.createElement(f,n({ref:a},p))}));function c(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,n=new Array(r);n[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var u=2;u<r;u++)n[u]=t[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13480:function(e,a,t){a.Z=t.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},82405:function(e,a,t){a.Z=t.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},6928:function(e,a,t){a.Z=t.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},7374:function(e,a,t){a.Z=t.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},45078:function(e,a,t){a.Z=t.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},67890:function(e,a,t){a.Z=t.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},28547:function(e,a,t){a.Z=t.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},99767:function(e,a,t){a.Z=t.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},48725:function(e,a,t){a.Z=t.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},13139:function(e,a,t){a.Z=t.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},90471:function(e,a,t){a.Z=t.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},44113:function(e,a,t){a.Z=t.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},92759:function(e,a,t){a.Z=t.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},15993:function(e,a,t){a.Z=t.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},78995:function(e,a,t){a.Z=t.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},8753:function(e,a,t){a.Z=t.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);