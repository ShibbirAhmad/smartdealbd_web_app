(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1170:function(t,s,a){"use strict";a.r(s);var e=a(2),r=a.n(e),o=a(0),n=a(26);r.a.component(o.HasError.name,o.HasError);var i={name:"Add",created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new o.Form({old_password:"",new_password:""}),loading:!0,error:""}},methods:{updatePassword:function(){var t=this;this.form.post("/api/get/single/merchant/password/update",{transformRequest:[function(t,s){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(s){"OK"==s.data.success?(Swal.fire({type:"info",text:s.data.message}),t.$router.push({name:"merchant_dashboard"})):Swal.fire({type:"error",text:s.data.message})})).catch((function(s){console.log(s),t.error="some thing want to wrong"}))}},computed:{},components:{navbar:n.a}},l=(a(596),a(1)),c=Object(l.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"merchant_dashboard"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(s){return s.preventDefault(),t.updatePassword(s)},keydown:function(s){return t.form.onKeydown(s)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Current Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.old_password,expression:"form.old_password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("old_password")},attrs:{type:"password",name:"old_password",autofocus:"",autocomplete:"off",placeholder:"your current password"},domProps:{value:t.form.old_password},on:{input:function(s){s.target.composing||t.$set(t.form,"old_password",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"old_password"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("new Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.new_password,expression:"form.new_password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("new_password")},attrs:{type:"password",name:"new_password",autofocus:"",autocomplete:"off",placeholder:"your new password"},domProps:{value:t.form.new_password},on:{input:function(s){s.target.composing||t.$set(t.form,"new_password",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"new_password"}})],1),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("update\n                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("password")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header text-center with-border"},[s("h3",{staticClass:"box-title"},[this._v("Change password")])])}],!1,null,"0329438e",null);s.default=c.exports},128:function(t,s,a){var e=a(597);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,r);e.locals&&(t.exports=e.locals)},26:function(t,s,a){"use strict";var e={created:function(){this.$store.dispatch("merchant"),this.$store.dispatch("general_setting")},data:function(){return{merchant:{},base_url:this.$store.state.image_base_link}},methods:{logout:function(){var t=this;axios.get("/api/merchant/logout").then((function(s){console.log(s),"OK"==s.data.status&&(localStorage.removeItem("merchant_token"),t.$store.commit("merchant",null),t.$router.push({name:"merchant_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getMerchant:function(){return this.$store.getters.merchant},general_setting:function(){return this.$store.getters.general_setting}}},r=a(1),o=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",{staticClass:"main-header"},[a("a",{staticClass:"logo",attrs:{href:""}},[t._m(0),t._v(" "),a("span",{staticClass:"logo-lg"},[a("b",[t._v(t._s(t.general_setting.title))])])]),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getMerchant.image}}),t._v(" "),a("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getMerchant.name))])]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"user-header"},[a("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getMerchant.image,alt:"User Image"}}),t._v(" "),a("p",[t._v("\n                "+t._s(t.getMerchant.name)+" - Merchant\n                "),a("small",[t._v("Member since "+t._s(t.getMerchant.created_at))])])]),t._v(" "),a("li",{staticClass:"user-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_profile"}}},[t._v(" profile ")])],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_password_edit"}}},[t._v("change password")])],1),t._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"logo-mini"},[s("b",[this._v("A")]),this._v("LT")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);s.a=o.exports},596:function(t,s,a){"use strict";var e=a(128);a.n(e).a},597:function(t,s,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-0329438e] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);