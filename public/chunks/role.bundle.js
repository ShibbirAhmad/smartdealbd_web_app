(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1224:function(t,s,a){"use strict";a.r(s);var i={created:function(){this.roleList()},data:function(){return{roles:{},loading:!0,basePath:"storage/",pageAcccess:!0}},methods:{roleList:function(){var t=this;axios.get("/api/roles/").then((function(s){0==t.$can("View Role")&&(t.pageAcccess=!1),0==t.$can("View Role")&&(t.viewPermisson=!1),s.data&&(t.roles=s.data,t.loading=!1)})).catch((function(t){console.log(t)}))}}},e=a(1),o=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"roleAdd"}}},[a("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-lg-offset-1"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",[t.loading?a("h1",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.roles,(function(s,i){return a("tr",{key:i},[a("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"EditPermissions",params:{id:s.id}}}},[t._v("Permissions ")])],1)])}))],2)])]),t._v(" "),a("div",{staticClass:"box-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"}),t._v(" "),a("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("Showing "),a("strong",[t._v(t._s(t.roles.from))]),t._v(" to\n                                            "),a("strong",[t._v(t._s(t.roles.to))]),t._v(" of total\n                                            "),a("strong",[t._v(t._s(t.roles.total))]),t._v(" entries\n                                        ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Role")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border text-center"},[s("h3",{staticClass:"box-title"},[this._v("Role table")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Action")])])])}],!1,null,null,null);s.default=o.exports}}]);