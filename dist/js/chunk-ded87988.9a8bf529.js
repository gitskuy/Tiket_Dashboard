(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ded87988","chunk-9e9a2804","chunk-27f9a49e","chunk-1ba83cca","chunk-7aa97c4e"],{"257a":function(t,e,n){"use strict";var a=n("9d68"),s=n.n(a);s.a},"5b4f":function(t,e,n){},"5ffa":function(t,e,n){},6551:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"flex-center header-selector i-menu-expanded",on:{click:function(e){t.$emit("update:isOpen",!t.isOpen)}}})},s=[],i={name:"header-selector",props:{isOpen:{type:Boolean,required:!0}}},o=i,r=(n("83fb"),n("2877")),l=Object(r["a"])(o,a,s,!1,null,null,null);l.options.__file="HeaderSelector.vue";e["default"]=l.exports},"6c7c":function(t,e,n){},"7daa":function(t,e,n){"use strict";var a=n("5ffa"),s=n.n(a);s.a},"83fb":function(t,e,n){"use strict";var a=n("5b4f"),s=n.n(a);s.a},"8aaa":function(t,e,n){"use strict";var a=n("6c7c"),s=n.n(a);s.a},"8efb":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notification-dropdown flex-center"},[n("span",{staticClass:"i-nav-notification"}),n("vuestic-dropdown",{staticClass:"notification-dropdown__list",attrs:{position:"bottom"},model:{value:t.isShown,callback:function(e){t.isShown=e},expression:"isShown"}},[t._l(t.options,function(e,a){return n("a",{key:a,staticClass:"dropdown-item",attrs:{href:"#"}},[n("span",{staticClass:"ellipsis"},[t._v(t._s(t.$t("notifications."+e.name,{name:e.details.name,type:e.details.type}))+"\n      ")])])}),n("div",{staticClass:"dropdown-item plain-link-item"},[n("a",{staticClass:"plain-link",attrs:{href:"#"}},[t._v(t._s(t.$t("notifications.all")))])])],2)],1)},s=[],i={name:"notification-dropdown",data:function(){return{isShown:!1}},props:{options:{type:Array,default:function(){return[{name:"sentMessage",details:{name:"Vasily S"}},{name:"uploadedZip",details:{name:"Oleg M",type:"typography component"}},{name:"startedTopic",details:{name:"Andrei H"}}]}}}},o=i,r=(n("a637"),n("2877")),l=Object(r["a"])(o,a,s,!1,null,null,null);l.options.__file="NotificationDropdown.vue";e["default"]=l.exports},"923d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vuestic-navbar",[n("header-selector",{attrs:{slot:"selector",isOpen:t.valueProxy},on:{"update:isOpen":function(e){t.valueProxy=e}},slot:"selector"}),n("span",{attrs:{slot:"logo"},slot:"logo"},[n("vuestic-icon-vuestic")],1),n("span",{attrs:{slot:"center"},slot:"center"},[t._v("\n    "+t._s(t.$t("navbar.messageUs"))+" "),n("a",{attrs:{href:"mailto:hello@epicmax.co"}},[t._v("hello@epicmax.co")])]),n("message-dropdown",{staticClass:"col nav-item"}),n("notification-dropdown",{staticClass:"col nav-item"}),n("language-dropdown",{staticClass:"col nav-item"}),n("profile-dropdown",{staticClass:"col nav-item"},[n("img",{attrs:{src:"https://i.imgur.com/nfa5itq.png"}})])],1)},s=[],i=n("78ef"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"vuestic-navbar navbar navbar-toggleable-md"},[n("div",{staticClass:"vuestic-navbar__logo navbar-brand-container align--center justify--start"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/dashboard"}},[t._t("logo")],2)],1),n("div",{staticClass:"va-row vuestic-navbar__content"},[n("div",{staticClass:"header-elem-wrapper menu-icon-container justify--start col"},[t._t("selector")],2),n("div",{staticClass:"header-elem-wrapper navbar-text flex offset--md3 md5 d-none d-lg-flex"},[t._t("center")],2),t._t("default")],2)])},r=[],l={name:"vuestic-navbar"},c=l,u=(n("8aaa"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,null,null);d.options.__file="VuesticNavbar.vue";var p=d.exports,f=n("6551"),v=n("eb4a"),m=n("a1d7"),_=n("8efb"),b=n("b6df"),w={name:"app-navbar",components:{VuesticIconVuestic:i["a"],VuesticNavbar:p,HeaderSelector:f["default"],MessageDropdown:b["default"],NotificationDropdown:_["default"],LanguageDropdown:v["default"],ProfileDropdown:m["default"]},props:{isOpen:{type:Boolean,required:!0}},computed:{valueProxy:{get:function(){return this.isOpen},set:function(t){this.$emit("toggle-menu",t)}}}},h=w,g=Object(u["a"])(h,a,s,!1,null,null,null);g.options.__file="AppNavbar.vue";e["default"]=g.exports},"9d68":function(t,e,n){},a1d7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-dropdown flex-center"},[n("span",{staticClass:"profile-dropdown__avatar-container"},[t._t("default")],2),n("vuestic-dropdown",{attrs:{position:"bottom"},model:{value:t.isShown,callback:function(e){t.isShown=e},expression:"isShown"}},t._l(t.options,function(e){return n("div",{key:e.name,staticClass:"dropdown-item plain-link-item"},[n("router-link",{staticClass:"plain-link",attrs:{to:{name:e.redirectTo},href:"#"}},[t._v("\n        "+t._s(t.$t("user."+e.name))+"\n      ")])],1)}))],1)},s=[],i={name:"profile-section",data:function(){return{isShown:!1}},props:{options:{type:Array,default:function(){return[{name:"profile",redirectTo:""},{name:"logout",redirectTo:"login"}]}}}},o=i,r=(n("7daa"),n("2877")),l=Object(r["a"])(o,a,s,!1,null,null,null);l.options.__file="ProfileDropdown.vue";e["default"]=l.exports},a637:function(t,e,n){"use strict";var a=n("b89e"),s=n.n(a);s.a},b6df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-dropdown flex-center"},[n("span",{staticClass:"i-nav-messages"}),n("vuestic-dropdown",{attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._l(t.options,function(e,a){return n("a",{key:a,staticClass:"dropdown-item",attrs:{href:"#"}},[n("span",{staticClass:"ellipsis"},[t._v(t._s(t.$t("messages."+e.name,{name:e.details.name})))])])}),n("div",{staticClass:"dropdown-item plain-link-item"},[n("a",{staticClass:"plain-link",attrs:{href:"#"}},[t._v(t._s(t._f("translate")("messages.all")))])])],2)],1)},s=[],i={name:"message-dropdown",data:function(){return{isOpen:!1}},props:{options:{type:Array,default:function(){return[{name:"new",details:{name:"Oleg M"}},{name:"new",details:{name:"Andrei H"}}]}}}},o=i,r=(n("257a"),n("2877")),l=Object(r["a"])(o,a,s,!1,null,null,null);l.options.__file="MessageDropdown.vue";e["default"]=l.exports},b89e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ded87988.9a8bf529.js.map