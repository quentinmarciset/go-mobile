(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[369],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?i.createElement(f,s(s({ref:t},p),{},{components:a})):i.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:r,s[1]=n;for(var u=2;u<o;u++)s[u]=a[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71278:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=a(22122),r=a(19756),o=(a(67294),a(3905)),s=["components"],n={id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},l=void 0,u={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app",isDocsHomePage:!1,title:"Personalizar seu app 4D for iOS",description:"Vamos fazer modifica\xe7\xf5es no storyboard... do simples ao complexo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/customize-your-ios-app",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/customize-your-ios-app.md",version:"19-R2",frontMatter:{id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},sidebar:"version-19-R2/tutorials",previous:{title:"Organizar um projeto 4D for iOS",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecionar um Apple Developer Program",permalink:"/go-mobile/pt/docs/tutorials/developer-program/selecting-your-developer-program"}},p=[{value:"PASSO 1. Modifica\xe7\xe3o de etiqueta simples",id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples",children:[]},{value:"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil",id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil",children:[]},{value:"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil",id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil",children:[]},{value:"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es",id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vamos fazer modifica\xe7\xf5es no storyboard... do simples ao complexo."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result",src:a(55804).Z})),(0,o.kt)("h2",{id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples"},"PASSO 1. Modifica\xe7\xe3o de etiqueta simples"),(0,o.kt)("p",null,"Vamos come\xe7ar modificando a fonte e cor de uma etiqueta:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abra o arquivo ",(0,o.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," desde a aba Navigation."),(0,o.kt)("li",{parentName:"ul"},"Clique na etiqueta do primeiro nome (voc\xea pode tamb\xe9m selecionar o construtor de interfaces no painel esquerdo)."),(0,o.kt)("li",{parentName:"ul"},"Selecione o painel Inspetor de atributos da \xe1rea de utilit\xe1rio.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector",src:a(93742).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Altere a fonte da Helvetica Neue bold para Futura bold.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector font",src:a(63028).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voc\xea tamb\xe9m pode alterar a cor da fonte no mesmo painel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attributes inspector color",src:a(48335).Z})),(0,o.kt)("h2",{id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil"},"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil"),(0,o.kt)("p",null,"Todos os modelos 4D for iOS usam restri\xe7\xf5es para alementos do aplicativo para serem bem exibidos em todos os aparelhos."),(0,o.kt)("p",null,"No arquivo ",(0,o.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", as etiquetas First Name, e Last Name est\xe3o todas alinhadas ao centro no momento."),(0,o.kt)("p",null,"Vamos mud\xe1-lo para aparecer assim:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:a(96531).Z})),(0,o.kt)("p",null,"Primeiro, alinhe verticalmente as imagens e arraste as etiquetas nome e sobrenome para a direita da imagem."),(0,o.kt)("p",null,"Em seguida, selecione a imagem e v\xe1 para o painel de atributos de tamanho da \xe1rea de Utility. Altere o valor de X de 161.67 a 40.67 e o valor de Y de 28 a 79."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture position",src:a(15659).Z})),(0,o.kt)("p",null,"Como voc\xea pode ver, a posi\xe7\xe3o foi alterada, mas o Xcode est\xe1 exibindo linhas amarelas... por qu\xea? Estas linhas amarelas representam restri\xe7\xf5es que n\xe3o s\xe3o mais v\xe1lidas."),(0,o.kt)("h2",{id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil"},"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil"),(0,o.kt)("p",null,"Para alinhar verticalmente a imagem no centro no Superview (a vis\xe3o que a cont\xe9m), precisamos eliminar as restri\xe7\xf5es existentes e adicionar novas."),(0,o.kt)("p",null,"A imagem possui atualmente as seguintes restri\xe7\xf5es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Width Equals: uma largura de 78 pixels."),(0,o.kt)("li",{parentName:"ul"},"Heigh Equals: Uma altura fixa de 78 pixels."),(0,o.kt)("li",{parentName:"ul"},"Align Center x: centra a imagem em um eixo horizontal definido anteriormente."),(0,o.kt)("li",{parentName:"ul"},"Top Space: Uma quantia fixa de espa\xe7o da parte superior da imagem at\xe9 o topo da vista."),(0,o.kt)("li",{parentName:"ul"},"Est\xe1cio inferior a ",(0,o.kt)("inlineCode",{parentName:"li"},"<First Name>"),": o espa\xe7o previamente definido entre a etiqueta do Nome e a imagem.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture constraints",src:a(36120).Z})),(0,o.kt)("p",null,"Apague todas as restri\xe7\xf5es exceto Width e Height (voc\xea vai modific\xe1-las depois na se\xe7\xe3o Restri\xe7\xf5es no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restri\xe7\xf5es est\xe3o faltando."),(0,o.kt)("p",null,"Clique no bot\xe3o Align (na parte inferior da janela Interface Builder) e marque a caixa de sele\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture Align",src:a(37770).Z})),(0,o.kt)("p",null,"Depois clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," e adiciona uma nova restri\xe7\xe3o de distanciamento entre linhas (a restri\xe7\xe3o da esquerda)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Profil picture new constraints",src:a(49344).Z})),(0,o.kt)("p",null,"Nesse ponto, todas as restri\xe7\xf5es de imagem de perfil devem estar em azul."),(0,o.kt)("p",null,"Parab\xe9ns! Sua foto do perfil est\xe1 agora bem posicionada com as restri\xe7\xf5es corretas."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"DICAS")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Para criar uma restri\xe7\xe3o entre duas vistas, pressione Ctrl e arraste uma das vistas para a outra. Quando soltar o bot\xe3o do mouse, a Interface Builder mostra um menu com uma lista de poss\xedveis restri\xe7\xf5es.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pode apagar restri\xe7\xf5es selecionando-as do inspector Size ou desde o Interface Builder.")))),(0,o.kt)("h2",{id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es"},"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es"),(0,o.kt)("h4",{id:"agora-vamos-trabalhar-na-etiqueta-nome"},"Agora, vamos trabalhar na etiqueta Nome."),(0,o.kt)("p",null,"Vamos come\xe7ar mudando a posi\xe7\xe3o e largura:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selecione a etiqueta First Name no Interface Builder."),(0,o.kt)("li",{parentName:"ul"},"Depois mude a largura 386 a 267 p\xedxels,"),(0,o.kt)("li",{parentName:"ul"},"Muda o valor de X de 8 a 127 p\xedxels e o valor de Y de 28 a 79 p\xedxels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Name Label position",src:a(14045).Z})),(0,o.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space e de bottom space desde o inspetor de tamanho."),(0,o.kt)("li",{parentName:"ul"},"Adicione uma restri\xe7\xe3o de leading space clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Add New Constraints")," para colocar a etiqueta de nome \xe0 direita da foto de perfil."),(0,o.kt)("li",{parentName:"ul"},"Aperte a tecla Ctrl e arraste a etiqueta de nome \xe0 foto de perfil. Selecione a restri\xe7\xe3o superior no menu para alinhar ambos os elementos na parte superior.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Name Label top constraint",src:a(57144).Z})),(0,o.kt)("h4",{id:"finalmente-vamos-trabalhar-na-etiqueta-do-sobrenome"},"Finalmente, vamos trabalhar na etiqueta do sobrenome."),(0,o.kt)("p",null,"Mude a posi\xe7\xe3o e a largura:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selecione a etiqueta Last Name do Interface Builder."),(0,o.kt)("li",{parentName:"ul"},"Mude a largura de 386  para 267 p\xedxels."),(0,o.kt)("li",{parentName:"ul"},"Mude o valor X de 8 para 127 p\xedxels e o valor de Y de 144,33 para 118,33 p\xedxels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Last Name Label position",src:a(62713).Z})),(0,o.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space do inspetor de Size."),(0,o.kt)("li",{parentName:"ul"},"Adicione limita\xe7\xf5es de leading space e de espa\xe7o superior clicando no bot\xe3o Adicionar novas restri\xe7\xf5es.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Last Name Label constraint",src:a(81990).Z})),(0,o.kt)("p",null,"Suas duas etiquetas est\xe3o resosicionadas."),(0,o.kt)("p",null,"Vamos ver o resultado no Simulador!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:a(74850).Z})),(0,o.kt)("p",null,"Hmmmm. N\xe3o \xe9 exatamente o que quer\xedamos..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selecione as etiquetas de First Name e Last Name e mude o alinhamento do centro para a esquerda no inspetor de atributos.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels Alignment",src:a(92127).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Depois, selecione a imagem de perfil e d\xea duplo clique na restri\xe7\xe3o de leading space."),(0,o.kt)("li",{parentName:"ul"},"Mude o valor 40,67 p\xedxels da constante para 80 p\xedxels.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Constraints adjustments",src:a(65041).Z})),(0,o.kt)("p",null,"Muito melhor! Agora todas as restri\xe7\xf5es est\xe3o funcionando e as etiquetas n\xe3o est\xe3o rompendo outras restri\xe7\xf5es."),(0,o.kt)("p",null,"Como pode ver, personalizar seu app \xe9 bem simples!"))}m.isMDXComponent=!0},93742:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},48335:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},63028:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},65041:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},14045:function(e,t,a){"use strict";t.Z=a.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},57144:function(e,t,a){"use strict";t.Z=a.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},92127:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},81990:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},62713:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},37770:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},36120:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},49344:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},15659:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},55804:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},96531:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},74850:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);