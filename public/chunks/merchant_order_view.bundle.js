(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1170:function(t,s,a){"use strict";a.r(s);a(0);var e={created:function(){var t=this;this.getDetails(),this.$store.dispatch("general_setting"),this.$Progress.start(),setTimeout((function(){t.$Progress.finish(),t.loading=!1}),1e3)},data:function(){return{order:"",items:"",loading:!0,base_url:this.$store.state.image_base_link}},methods:{getDetails:function(){var t=this;axios.get("/api/merchant/order/view/"+this.$route.params.id).then((function(s){console.log(s),"SUCCESS"==s.data.status?(t.order=s.data.order,t.items=s.data.items):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(s){console.log(s),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},print:function(){window.print()},back:function(){window.history.back()}},components:{navbar:a(26).a},computed:{general_setting:function(){return this.$store.getters.general_setting}}},n=(a(593),a(1)),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-11"},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header"}),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"invoice-header"},[a("img",{staticClass:"m_logo",attrs:{src:t.base_url+t.general_setting.logo,alt:"logo"}}),t._v(" "),a("div",{staticClass:"address"},[a("p",{staticClass:"address_line",domProps:{innerHTML:t._s(t.general_setting.invoice_address_details)}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 invoice-body",staticStyle:{"margin-left":"27px"}},[a("p",{staticClass:"text-bold"},[t._v("Name: "+t._s(t.order.customer.name))]),t._v(" "),a("p",{staticClass:"text-bold"},[t._v("Phone: "+t._s(t.order.cutomer_phone))]),t._v(" "),a("p",{staticClass:"text-bold"},[t._v("Address: "+t._s(t.order.customer.address+", "+t.order.city.name))]),t._v(" "),a("p",{staticClass:"text-bold"},[t._v("\n                      Invoice:\n                      "),a("strong",[t._v(t._s(t.order.invoice_no))])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-1"}),t._v(" "),t.loading?a("h1",[a("i",{staticClass:"fa fa-spin fa-spinner"})]):a("div",{staticClass:"col-lg-10"},[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",[t._l(t.items,(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v("\n                            "+t._s(s.product.name)+"\n                            "),s.attribute?a("strong",[t._v("-"+t._s(s.attribute.name)+"["+t._s(s.variant.name)+"]")]):t._e()]),t._v(" "),a("td",[t._v(t._s(s.product.product_code))]),t._v(" "),a("td",[t._v(t._s(s.quantity))]),t._v(" "),a("td",[t._v(t._s(s.price))]),t._v(" "),a("td",[t._v(t._s(s.quantity*s.price))])])})),t._v(" "),a("tr",[a("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(1),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.total))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(2),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.discount))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(3),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.paid))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(4),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.shipping_cost))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(5),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.total-(t.order.discount+t.order.paid)+t.order.shipping_cost))])])])],2)])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2",staticStyle:{"margin-left":"27px","text-align":"center"}},[null!=t.order.approved_by?a("h6",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(t.order.approved_by.name))]):t._e(),t._v(" "),t._m(6)])])])])])])])])])],1)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Product")]),t._v(" "),a("th",[t._v("P_code")]),t._v(" "),a("th",[t._v("quntity")]),t._v(" "),a("th",[t._v("price")]),t._v(" "),a("th",[t._v("total")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("b",[this._v("Sub Total")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("b",[this._v("Discount")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("b",[this._v("Paid")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("b",[this._v("Shiiping_cost")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("b",[this._v("Amount Due")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{staticStyle:{"border-top":"2px dotted #000","margin-top":"25"}},[s("strong",[this._v("Approved By")])])}],!1,null,"bab3f29c",null);s.default=r.exports},126:function(t,s,a){var e=a(594);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,n);e.locals&&(t.exports=e.locals)},26:function(t,s,a){"use strict";var e={created:function(){this.$store.dispatch("merchant"),this.$store.dispatch("general_setting")},data:function(){return{merchant:{},base_url:this.$store.state.image_base_link}},methods:{logout:function(){var t=this;axios.get("/api/merchant/logout").then((function(s){console.log(s),"OK"==s.data.status&&(localStorage.removeItem("merchant_token"),t.$store.commit("merchant",null),t.$router.push({name:"merchant_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getMerchant:function(){return this.$store.getters.merchant},general_setting:function(){return this.$store.getters.general_setting}}},n=a(1),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",{staticClass:"main-header"},[a("a",{staticClass:"logo",attrs:{href:""}},[t._m(0),t._v(" "),a("span",{staticClass:"logo-lg"},[a("b",[t._v(t._s(t.general_setting.title))])])]),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getMerchant.image}}),t._v(" "),a("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getMerchant.name))])]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"user-header"},[a("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getMerchant.image,alt:"User Image"}}),t._v(" "),a("p",[t._v("\n                "+t._s(t.getMerchant.name)+" - Merchant\n                "),a("small",[t._v("Member since "+t._s(t.getMerchant.created_at))])])]),t._v(" "),a("li",{staticClass:"user-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_profile"}}},[t._v(" profile ")])],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_password_edit"}}},[t._v("change password")])],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"logo-mini"},[s("b",[this._v("A")]),this._v("LT")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);s.a=r.exports},593:function(t,s,a){"use strict";var e=a(126);a.n(e).a},594:function(t,s,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-bab3f29c] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-bab3f29c] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n@media print {\n.navbar[data-v-bab3f29c] {\r\n    display: none;\n}\n.col-lg-2[data-v-bab3f29c] {\r\n    width: 20% !important;\n}\n.invoice-header[data-v-bab3f29c] {\r\n    display: block;\n}\n.box[data-v-bab3f29c] {\r\n    border-top: none;\n}\nfooter[data-v-bab3f29c] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-bab3f29c] {\r\n    display: none;\n}\n}\r\n",""])}}]);