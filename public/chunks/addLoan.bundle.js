(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1314:function(t,o,a){"use strict";a.r(o);var e=a(2),r=a.n(e),s=a(0);r.a.component(s.HasError.name,s.HasError);var n={name:"Add",created:function(){this.cDate()},data:function(){return{form:new s.Form({name:"",mobile_no:"",address:"",date:"",purpose:"",amount:""}),loading:!0,error:"",options:{format:"YYYY-MM-DD",useCurrent:!1},loaners:""}},methods:{add:function(){var t=this;this.form.post("/api/loand/store").then((function(o){console.log(o),"OK"==o.data.success?(t.$router.push({name:"loan"}),t.$toasted.show(o.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(o){console.log(o),t.error="some thing want to wrong"}))},cDate:function(){var t=new Date,o=t.getMonth()+1,a=t.getDate(),e=t.getFullYear()+"-"+((""+o).length<2?"0":"")+o+"-"+((""+a).length<2?"0":"")+a;this.form.date=e,this.loading=!1}}},i=(a(808),a(1)),m=Object(i.a)(n,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"loan"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.add(o)},keydown:function(o){return t.form.onKeydown(o)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Date")]),t._v(" "),a("date-picker",{class:{"is-invalid":t.form.errors.has("date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.date,callback:function(o){t.$set(t.form,"date",o)},expression:"form.date"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex: Mohammad"},domProps:{value:t.form.name},on:{input:function(o){o.target.composing||t.$set(t.form,"name",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Mobile  Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile_no,expression:"form.mobile_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mobile_no")},attrs:{type:"text",name:"mobile_no",autocomplete:"off",placeholder:"phone"},domProps:{value:t.form.mobile_no},on:{input:function(o){o.target.composing||t.$set(t.form,"mobile_no",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"mobile_no"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"email",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.address},on:{input:function(o){o.target.composing||t.$set(t.form,"address",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Purpose")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purpose,expression:"form.purpose"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purpose")},attrs:{type:"text",name:"purpose",autocomplete:"purpose",placeholder:"purpose"},domProps:{value:t.form.purpose},on:{input:function(o){o.target.composing||t.$set(t.form,"purpose",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"purpose"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Amount")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",name:"amount",autocomplete:"off",placeholder:"amount"},domProps:{value:t.form.amount},on:{input:function(o){o.target.composing||t.$set(t.form,"amount",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("Loan")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header with-border text-center"},[o("h3",{staticClass:"box-title"},[this._v("Add Loan")])])}],!1,null,"af25adde",null);o.default=m.exports},233:function(t,o,a){var e=a(809);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,r);e.locals&&(t.exports=e.locals)},808:function(t,o,a){"use strict";var e=a(233);a.n(e).a},809:function(t,o,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-af25adde] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);