(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1352:function(t,a,s){"use strict";s.r(a);var e={created:function(){this.getbalanceStatements()},data:function(){return{balance:"",loading:!0,basePath:this.$store.getters.image_base_link,total_investment:"",total_profit_paid:"",total_due_amount:0}},methods:{getbalanceStatements:function(){var t=this;axios.get("/api/balance/list").then((function(a){console.log(a),"OK"==a.data.success&&(t.balance=a.data.balance,t.loading=!1)})).catch((function(t){console.log(t)}))}},computed:{}},n=(s(873),s(1)),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"balance_add"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8 col-lg-offset-2"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-hover table-bordered text-center table-striped "},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.balance,(function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v("  "+t._s(a.name)+" ")])])}))],2)])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("balance ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title heading"},[this._v("Balance Table")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),a("th",{attrs:{scope:"col"}},[this._v(" Name")])])])}],!1,null,"4583a717",null);a.default=i.exports},266:function(t,a,s){var e=s(874);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(5)(e,n);e.locals&&(t.exports=e.locals)},873:function(t,a,s){"use strict";var e=s(266);s.n(e).a},874:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.box-primary[data-v-4583a717] {\r\n  margin-left: -100px;\r\n  overflow-x: scroll;\n}\n.total_style[data-v-4583a717] {\r\n  border: 2px solid #ddd;\r\n  padding: 4px 25px;\n}\n.total_row[data-v-4583a717] {\r\n  padding-bottom: 20px;\n}\r\n",""])}}]);