(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1366:function(t,a,e){"use strict";e.r(a);var s=e(2),o=e.n(s),r=e(0);o.a.component(r.HasError.name,r.HasError);var n={name:"Add",data:function(){return{form:new r.Form({name:"",company_name:""}),error:""}},methods:{addPrintHouse:function(){var t=this;this.form.post("/api/bll/statement/add").then((function(a){console.log(a),"OK"==a.data.status?(t.$router.push({name:"bill_statement"}),t.$toasted.show(a.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(a){console.log(a),t.error="some thing want to wrong"}))}}},i=(e(878),e(1)),m=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"bill_statement"}}},[e("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.addPrintHouse(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Bill Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex: Internet Bill"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Company Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",name:"company_name",autofocus:"",autocomplete:"off",placeholder:"Ex: Multi-Link "},domProps:{value:t.form.company_name},on:{input:function(a){a.target.composing||t.$set(t.form,"company_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"company_name"}})],1),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Print House")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Add Bill Statement ")])])}],!1,null,"5d9dfa8f",null);a.default=m.exports},267:function(t,a,e){var s=e(879);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(5)(s,o);s.locals&&(t.exports=s.locals)},878:function(t,a,e){"use strict";var s=e(267);e.n(s).a},879:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,"\n.mb-2[data-v-5d9dfa8f] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);