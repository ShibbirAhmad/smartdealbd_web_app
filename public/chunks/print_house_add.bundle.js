(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1340:function(t,a,e){"use strict";e.r(a);var o=e(2),s=e.n(o),r=e(0);s.a.component(r.HasError.name,r.HasError);var n={name:"Add",data:function(){return{form:new r.Form({name:"",company_name:"",mobile_no:"",address:""}),error:""}},methods:{addPrintHouse:function(){var t=this;this.form.post("/api/print/house/add").then((function(a){console.log(a),"OK"==a.data.status?(t.$router.push({name:"print_house"}),t.$toasted.show(a.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(a){console.log(a),t.error="some thing want to wrong"}))}}},i=(e(856),e(1)),m=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"print_house"}}},[e("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.addPrintHouse(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex: MD Mohammad"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Company Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",name:"company_name",autofocus:"",autocomplete:"off",placeholder:"Ex: m print "},domProps:{value:t.form.company_name},on:{input:function(a){a.target.composing||t.$set(t.form,"company_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"company_name"}})],1)])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Mobile Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile_no,expression:"form.mobile_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mobile_no")},attrs:{type:"text",name:"mobile_no",autocomplete:"off",placeholder:"01xxxxxxxxx"},domProps:{value:t.form.mobile_no},on:{input:function(a){a.target.composing||t.$set(t.form,"mobile_no",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"mobile_no"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"email",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Print House")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Add Print House")])])}],!1,null,"e220e1c8",null);a.default=m.exports},258:function(t,a,e){var o=e(857);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,s);o.locals&&(t.exports=o.locals)},856:function(t,a,e){"use strict";var o=e(258);e.n(o).a},857:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,"\n.mb-2[data-v-e220e1c8] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);