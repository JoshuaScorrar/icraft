webpackJsonp([0],{Ma2J:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("oLqR"),r=e("STrE"),a=e("VU/8")(n.a,r.a,!1,null,null,null);a.options.__file="layouts\\default.vue",i.default=a.exports},STrE:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{dark:""}},[e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},on:{"update:miniVariant":function(i){t.miniVariant=i}},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",t._l(t.items,function(i,n){return e("v-list-tile",{key:n,attrs:{router:"",to:i.to,exact:""}},[e("v-list-tile-action",[e("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1)}))],1),e("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[e("v-toolbar-side-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),e("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),e("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("web")])],1),e("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("remove")])],1),e("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("menu")])],1)],1),e("v-content",[e("v-container",[e("nuxt")],1)],1),e("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:""},model:{value:t.rightDrawer,callback:function(i){t.rightDrawer=i},expression:"rightDrawer"}},[e("v-list",[e("v-list-tile",{nativeOn:{click:function(i){t.right=!t.right}}},[e("v-list-tile-action",[e("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),e("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),e("v-footer",{attrs:{fixed:t.fixed,app:""}},[e("span",[t._v("© 2017")])])],1)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};i.a=r},oLqR:function(t,i,e){"use strict";i.a={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}}});