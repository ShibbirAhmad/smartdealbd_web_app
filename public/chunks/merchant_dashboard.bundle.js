(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1165:function(t,s,a){"use strict";a.r(s);var e={mounted:function(){console.log("Merchant dashboard mounted"),this.DashboardData()},data:function(){return{products:"",orders:""}},methods:{DashboardData:function(){var t=this;axios.get("/api/get/merchant/dashboard/data").then((function(s){console.log(s),t.products=s.data.products,t.orders=s.data.orders}))}},components:{navbar:a(26).a}},r=a(1),i=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-aqua"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.orders.today_order))]),t._v(" "),a("p",[t._v("Today Orders")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-green"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.orders.total_delivered_order)+" ")]),t._v(" "),a("p",[t._v("Delivered Orders")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(3)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-green"},[a("div",{staticClass:"inner"},[a("h3",[t._v(t._s(t.orders.total_order_items))]),t._v(" "),a("p",[t._v(" total ordered item ")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-aqua"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.orders.total_order)+" ")]),t._v(" "),a("p",[t._v("Total Orders")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(5)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-green"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.products.product_total)+" ")]),t._v(" "),a("p",[t._v("Total products")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(6)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-green"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.products.product_approved)+" ")]),t._v(" "),a("p",[t._v("Approved products")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(7)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-yellow"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.products.product_pending)+" ")]),t._v(" "),a("p",[t._v("Pending products")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(8)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-xs-6"},[a("div",{staticClass:"small-box bg-red"},[a("div",{staticClass:"inner"},[a("h3",[t._v(" "+t._s(t.orders.cancel_order)+" ")]),t._v(" "),a("p",[t._v("Cancel Order")])]),t._v(" "),a("div",{staticClass:"icon"}),t._v(" "),t._m(9)])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content-header"},[s("h1",[this._v("Summary ")]),this._v(" "),s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v(" Home")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Dashboard")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon"},[s("i",{staticClass:"ion ion-bag"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"small-box-footer",attrs:{href:"#"}},[this._v("More info "),s("i",{staticClass:"fa fa-arrow-circle-right"})])}],!1,null,null,null);s.default=i.exports},26:function(t,s,a){"use strict";var e={created:function(){this.$store.dispatch("merchant"),this.$store.dispatch("general_setting")},data:function(){return{merchant:{},base_url:this.$store.state.image_base_link}},methods:{logout:function(){var t=this;axios.get("/api/merchant/logout").then((function(s){console.log(s),"OK"==s.data.status&&(localStorage.removeItem("merchant_token"),t.$store.commit("merchant",null),t.$router.push({name:"merchant_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getMerchant:function(){return this.$store.getters.merchant},general_setting:function(){return this.$store.getters.general_setting}}},r=a(1),i=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",{staticClass:"main-header"},[a("a",{staticClass:"logo",attrs:{href:""}},[t._m(0),t._v(" "),a("span",{staticClass:"logo-lg"},[a("b",[t._v(t._s(t.general_setting.title))])])]),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getMerchant.image}}),t._v(" "),a("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getMerchant.name))])]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"user-header"},[a("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getMerchant.image,alt:"User Image"}}),t._v(" "),a("p",[t._v("\n                "+t._s(t.getMerchant.name)+" - Merchant\n                "),a("small",[t._v("Member since "+t._s(t.getMerchant.created_at))])])]),t._v(" "),a("li",{staticClass:"user-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_profile"}}},[t._v(" profile ")])],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_password_edit"}}},[t._v("change password")])],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"logo-mini"},[s("b",[this._v("A")]),this._v("LT")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);s.a=i.exports}}]);