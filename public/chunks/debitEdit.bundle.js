(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1222:function(t,o,a){"use strict";a.r(o);var e=a(2),r=a.n(e),s=a(0);r.a.component(s.HasError.name,s.HasError);var n={name:"Add",created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new s.Form({purpose:"",amount:"",date:"",comment:""}),loading:!0,error:"",options:{format:"YYYY-MM-DD",useCurrent:!1}}},methods:{edit:function(){var t=this;axios.get("/debit/edit/"+this.$route.params.id).then((function(o){console.log(o),"SUCCESS"==o.data.status?(t.form.date=o.data.debit.date,t.form.purpose=o.data.debit.purpose,t.form.comment=o.data.debit.comment,t.form.amount=o.data.debit.amount):t.error="some thing want to wrong"})).catch((function(t){console.log(t)}))},update:function(){var t=this;this.form.post("/debit/update/"+this.$route.params.id).then((function(o){"SUCCESS"==o.data.status?(t.$router.push({name:"debit"}),t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:2e3})):t.error="some thing want to wrong"})).catch((function(o){t.error="some thing want to wrong"}))}},mounted:function(){this.edit()}},i=(a(670),a(1)),m=Object(i.a)(n,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"debit"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.update(o)},keydown:function(o){return t.form.onKeydown(o)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Date")]),t._v(" "),a("date-picker",{class:{"is-invalid":t.form.errors.has("date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.date,callback:function(o){t.$set(t.form,"date",o)},expression:"form.date"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Purpose")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purpose,expression:"form.purpose"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purpose")},attrs:{type:"text",name:"purpose",autocomplete:"off"},domProps:{value:t.form.purpose},on:{input:function(o){o.target.composing||t.$set(t.form,"purpose",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"purpose"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Amount")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",name:"amount",autocomplete:"off"},domProps:{value:t.form.amount},on:{input:function(o){o.target.composing||t.$set(t.form,"amount",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Comment")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("comment")},attrs:{type:"text",name:"comment",autocomplete:"off"},domProps:{value:t.form.comment},on:{input:function(o){o.target.composing||t.$set(t.form,"comment",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"comment"}})],1),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("Debit")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header with-border"},[o("h3",{staticClass:"box-title"},[this._v("Edit Debit")])])}],!1,null,"2b047a42",null);o.default=m.exports},164:function(t,o,a){var e=a(671);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,r);e.locals&&(t.exports=e.locals)},670:function(t,o,a){"use strict";var e=a(164);a.n(e).a},671:function(t,o,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-2b047a42] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);