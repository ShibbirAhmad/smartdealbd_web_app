(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1233:function(t,a,r){"use strict";r.r(a);var s=r(2),n=r.n(s),o=r(0);n.a.component(o.HasError.name,o.HasError);var e={name:"Add",created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new o.Form({name:""}),loading:!0,error:""}},methods:{add:function(){var t=this;this.form.post("/courier/add",{transformRequest:[function(t,a){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(a){"SUCCESS"==a.data.status?(t.$router.push({name:"courier"}),t.$toasted.show(a.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="some thing want to wrong"})).catch((function(a){t.error="some thing want to wrong"}))}}},i=(r(689),r(1)),c=Object(i.a)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("admin-main"),t._v(" "),r("div",{staticClass:"content-wrapper"},[r("section",{staticClass:"content-header"},[r("h1",[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"courier"}}},[r("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-6 col-lg-offset-2"},[r("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),r("div",{staticClass:"box-body"},[t.loading?r("h1",[r("i",{staticClass:"fa fa-spinner fa-spin"})]):r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.add(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?r("div",{staticClass:"alert-danger alert"},[t._v("\n                                    "+t._s(t.error)+"\n                                ")]):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex:sundarban"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),r("br"),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?r("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("City")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[this._v("Add Courier")])])}],!1,null,"b405d432",null);a.default=c.exports},175:function(t,a,r){var s=r(690);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(5)(s,n);s.locals&&(t.exports=s.locals)},689:function(t,a,r){"use strict";var s=r(175);r.n(s).a},690:function(t,a,r){(t.exports=r(4)(!1)).push([t.i,"\n.mb-2[data-v-b405d432] {\n    margin-bottom: 5px !important;\n}\n",""])}}]);