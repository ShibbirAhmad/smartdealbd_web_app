(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1163:function(t,s,a){"use strict";a.r(s);a(0);var e=a(26),r=(a(288),{created:function(){this.orderList()},data:function(){return{orders:{},loading:!0,basePath:this.$store.state.image_base_link,search:"",item:"10"}},methods:{orderList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/api/merchant/order?page="+s,{params:{item:this.item}}).then((function(s){console.log(s),"OK"==s.data.status&&(t.orders=s.data.orders,t.$Progress.finish(),t.loading=!1)})).catch((function(s){console.log(s),t.$Progress.fial()}))}},components:{navbar:e.a}}),n=(a(587),a(1)),o=Object(n.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-11"},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header with-border"},[a("h4",[t._v("order table")]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"col-lg-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=s.target.multiple?a:a[0]},function(s){return t.orderList()}]}},[a("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),a("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),a("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),a("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")])])]),t._v(" "),a("div",{staticClass:"col-lg-2"})])]),t._v(" "),a("div",{staticClass:"box-body"},[a("table",{staticClass:"table table-bordered table-hover table-striped "},[t._m(1),t._v(" "),a("tbody",[t.loading?a("h1",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.orders.data,(function(s,e){return a("tr",{key:e},[a("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),a("td",{attrs:{scope:"row"}},[t._v(t._s(s.customer.name))]),t._v(" "),a("td",{attrs:{scope:"row"}},[t._v(t._s(s.cutomer_phone))]),t._v(" "),a("td",{attrs:{scope:"row"}},[t._v("\n                        "+t._s(s.customer?s.customer.address:"")+"\n                      ")]),t._v(" "),a("td",{attrs:{scope:"row"}},[t._v(t._s(s.invoice_no))]),t._v(" "),a("td",{staticClass:"two-percent"},[t._v("\n                        "+t._s(s.total-(s.discount+s.paid)+s.shipping_cost)+"\n                      ")]),t._v(" "),a("td",{staticClass:"two-percent"},[1==s.order_type?a("p",[t._v("customer")]):t._e(),t._v(" "),2==s.order_type?a("p",[t._v("\n                          Admin\n\n                        ")]):t._e(),t._v(" "),3==s.order_type?a("p",[t._v("\n                          Whole sale\n\n                        ")]):t._e(),t._v(" "),4==s.order_type?a("p",[t._v("Reseller")]):t._e()]),t._v(" "),a("td",{staticClass:"two-percent"},[1==s.status?a("span",{staticClass:"badge"},[t._v("New")]):t._e(),t._v(" "),2==s.status?a("span",{staticClass:"badge"},[t._v("Pending")]):t._e(),t._v(" "),3==s.status?a("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==s.status?a("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==s.status?a("span",{staticClass:"badge badge-warning"},[t._v("Delivered")]):t._e(),t._v(" "),6==s.status?a("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==s.status?a("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),a("td",{staticClass:"two-percent"},[t._v(t._s(s.created_at))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-success ",attrs:{to:{name:"merchant_order_view",params:{id:s.id}}}},[a("i",{staticClass:"fa fa-eye"}),t._v(" view")])],1)])}))],2)])]),t._v(" "),a("div",{staticClass:"box-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("pagination",{attrs:{data:t.orders,limit:3},on:{"pagination-change-page":t.orderList}})],1),t._v(" "),a("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("\n                      Showing\n                      "),a("strong",[t._v(t._s(t.orders.from))]),t._v(" to\n                      "),a("strong",[t._v(t._s(t.orders.to))]),t._v(" of total\n                      "),a("strong",[t._v(t._s(t.orders.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content-header"},[s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Order Table")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Customer_Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("C_phone")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("C_address")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("created_by")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("order_palce")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("order_date")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"2ca284c1",null);s.default=o.exports},124:function(t,s,a){var e=a(588);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,r);e.locals&&(t.exports=e.locals)},26:function(t,s,a){"use strict";var e={created:function(){this.$store.dispatch("merchant"),this.$store.dispatch("general_setting")},data:function(){return{merchant:{},base_url:this.$store.state.image_base_link}},methods:{logout:function(){var t=this;axios.get("/api/merchant/logout").then((function(s){console.log(s),"OK"==s.data.status&&(localStorage.removeItem("merchant_token"),t.$store.commit("merchant",null),t.$router.push({name:"merchant_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getMerchant:function(){return this.$store.getters.merchant},general_setting:function(){return this.$store.getters.general_setting}}},r=a(1),n=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",{staticClass:"main-header"},[a("a",{staticClass:"logo",attrs:{href:""}},[t._m(0),t._v(" "),a("span",{staticClass:"logo-lg"},[a("b",[t._v(t._s(t.general_setting.title))])])]),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getMerchant.image}}),t._v(" "),a("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getMerchant.name))])]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"user-header"},[a("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getMerchant.image,alt:"User Image"}}),t._v(" "),a("p",[t._v("\n                "+t._s(t.getMerchant.name)+" - Merchant\n                "),a("small",[t._v("Member since "+t._s(t.getMerchant.created_at))])])]),t._v(" "),a("li",{staticClass:"user-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_profile"}}},[t._v(" profile ")])],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_password_edit"}}},[t._v("change password")])],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"logo-mini"},[s("b",[this._v("A")]),this._v("LT")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);s.a=n.exports},587:function(t,s,a){"use strict";var e=a(124);a.n(e).a},588:function(t,s,a){(t.exports=a(4)(!1)).push([t.i,"\n.dropbtn[data-v-2ca284c1] {\r\n  width: 100% !important;\r\n  margin-bottom: 5px !important;\n}\n.dropbtn-active[data-v-2ca284c1] {\r\n  display: block !important;\n}\n.dropdown-action[data-v-2ca284c1] {\r\n  display: none;\r\n  width: 90px;\r\n  position: absolute;\n}\r\n",""])}}]);