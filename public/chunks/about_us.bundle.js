(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(t,n,a){var i=a(555);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(5)(i,o);i.locals&&(t.exports=i.locals)},1150:function(t,n,a){"use strict";a.r(n);var i=a(15),o=a.n(i),s=(a(26),{created:function(){this.getAboutusInfo()},data:function(){return{isLoading:!0,fullPage:!0,about_info:""}},methods:{getAboutusInfo:function(){var t=this;axios.get("/_public/api/get/info/abou/contact").then((function(n){console.log(n),"OK"==n.data.status&&(t.about_info=n.data.setting.about_info,t.isLoading=!1)}))}},components:{Loading:o.a}}),e=(a(554),a(1)),r=Object(e.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"wrapper-wide"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(n){t.isLoading=n}}}),t._v(" "),a("frontend-header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 bg-white shadow",attrs:{id:"content"}},[a("h4",{staticClass:"title"},[t._v("About Us")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("p",{domProps:{innerHTML:t._s(t.about_info)}})])])])])])]),t._v(" "),a("frontend-footer")],1)}),[],!1,null,"4324e67d",null);n.default=r.exports},554:function(t,n,a){"use strict";var i=a(106);a.n(i).a},555:function(t,n,a){(t.exports=a(4)(!1)).push([t.i,"\n@media screen and (max-width: 450px) {\nh4[data-v-4324e67d] {\r\n    margin-left: 10px;\n}\np[data-v-4324e67d] {\r\n    font-size: 13px;\r\n    padding: 10px;\r\n    line-height: 24px;\n}\n}\n#content[data-v-4324e67d] {\r\n  min-height: 400px;\r\n  padding: 50px 50px;\n}\r\n",""])}}]);