"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2062],{82428:function(t,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var e=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],d={id:"detail-form-template-layout",title:"Android Layout"},l=void 0,p={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"version-19-R5/tutorials/creating-detail-forms/detail-form-template-layout",title:"Android Layout",description:"In this section you will see how to create your detail form interface with Android Studio.",source:"@site/versioned_docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-layout",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template-layout.md",tags:[],version:"19-R5",frontMatter:{id:"detail-form-template-layout",title:"Android Layout"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"Install a template",permalink:"/go-mobile/fr/docs/tutorials/gallery/install-gallery-template"}},u={},c=[{value:"Open the layout file with Android Studio",id:"open-the-layout-file-with-android-studio",level:2},{value:"What is available in this starter project",id:"what-is-available-in-this-starter-project",level:2},{value:"Add an Image View",id:"add-an-image-view",level:2},{value:"How to get data into your detail form",id:"how-to-get-data-into-your-detail-form",level:2},{value:"Image View",id:"image-view",level:3},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],_={toc:c};function s(t){var n=t.components,d=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},_,d,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section you will see how to create your detail form interface with Android Studio."),(0,r.kt)("p",null,"Here's the result we want to achieve:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom detailform",src:a(21342).Z,width:"2654",height:"2014"})),(0,r.kt)("p",null,"For this template, we're going to add a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile header image "),(0,r.kt)("li",{parentName:"ul"},"A field to be duplicated")),(0,r.kt)("h2",{id:"open-the-layout-file-with-android-studio"},"Open the layout file with Android Studio"),(0,r.kt)("p",null,"The best way to edit or create a template is to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open Android Studio and create a new empty mobile project clicking on File > New > New Project...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the Empty Activity template"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android Studio project creation",src:a(46438).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure your project and click ",(0,r.kt)("strong",{parentName:"li"},"Finish"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Android project",src:a(67686).Z,width:"2024",height:"1580"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the layout.xml file in app > res > layout dropping it directly on the project layout folder")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy layout.xml file",src:a(85370).Z,width:"1642",height:"610"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should have that at that point :")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android project",src:a(36736).Z,width:"2548",height:"1916"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the top right ",(0,r.kt)("strong",{parentName:"li"},"Split")," option to visualize the template preview as well as the xml code.")),(0,r.kt)("p",null,"It's quite empty, so let's add some content!"),(0,r.kt)("h2",{id:"what-is-available-in-this-starter-project"},"What is available in this starter project"),(0,r.kt)("p",null,"For the view to be scrollable, a scrollview is already included in the layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,r.kt)("p",null,"The part that is going to be duplicated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n                    \n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,r.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,r.kt)("p",null,"In order to have a nice Image view display we are going to use a CardView container again. We want to add a nice corner radius to the ImageView to have a better design."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,r.kt)("p",null,"As you can see the ImageView is embedded into the CardView. That allows to add corner radius to it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," line will allow to bind image value that is situated in position 1 in the svg file that you previously defined."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars" ')," line simply there to display an ImageView placeholder."),(0,r.kt)("p",null,"Here is the full layout code at this stage :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n                    \n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,r.kt)("h2",{id:"how-to-get-data-into-your-detail-form"},"How to get data into your detail form"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"In our detail form template we used ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__" ')),(0,r.kt)("p",null,"Here we suppose the ImageView is the first view in the svg, and its view ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),".\nIf it would be the third view, it would be ",(0,r.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," and its view ID would be ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter Project resources. Download the completed template folder:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}s.isMDXComponent=!0},3905:function(t,n,a){a.d(n,{Zo:function(){return u},kt:function(){return s}});var e=a(67294);function o(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function d(t,n){if(null==t)return{};var a,e,o=function(t,n){if(null==t)return{};var a,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(o[a]=t[a]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=e.createContext({}),p=function(t){var n=e.useContext(l),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},u=function(t){var n=p(t.components);return e.createElement(l.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},_=e.forwardRef((function(t,n){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),_=p(a),s=o,m=_["".concat(l,".").concat(s)]||_[s]||c[s]||r;return a?e.createElement(m,i(i({ref:n},u),{},{components:a})):e.createElement(m,i({ref:n},u))}));function s(t,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=_;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var p=2;p<r;p++)i[p]=a[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}_.displayName="MDXCreateElement"},36736:function(t,n,a){n.Z=a.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},67686:function(t,n,a){n.Z=a.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},85370:function(t,n,a){n.Z=a.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},46438:function(t,n,a){n.Z=a.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},21342:function(t,n,a){n.Z=a.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);