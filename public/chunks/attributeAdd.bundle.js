(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1187:function(t,a,s){"use strict";s.r(a);var e=s(2),r=s.n(e),n=s(0);r.a.component(n.HasError.name,n.HasError);var o={created:function(){var t=this;setTimeout((function(){t.loading=!1}),300)},data:function(){return{form:new n.Form({name:""}),error:"",loading:!0,image:""}},methods:{add:function(){var t=this;this.form.post("/attribute/add",{transformRequest:[function(t,a){return objectToFormData(t)}]}).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.$router.push({name:"attribute"}),t.$toasted.show(a.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="some thing went to wrong"}))}}},i=(s(620),s(1)),c=Object(i.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"attribute"}}},[s("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6 col-lg-offset-2"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.add(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?s("div",{staticClass:"alert-danger alert"},[t._v("\n                                    "+t._s(t.error)+"\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Ex:Size"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),s("div",{staticClass:"form-group text-center"},[s("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?s("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("attribute")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Add Attribute")])])}],!1,null,"36e57f68",null);a.default=c.exports},140:function(t,a,s){var e=s(621);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(5)(e,r);e.locals&&(t.exports=e.locals)},620:function(t,a,s){"use strict";var e=s(140);s.n(e).a},621:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.mb-2[data-v-36e57f68] {\n    margin-bottom: 5px !important;\n}\n",""])}}]);