(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1355:function(t,e,a){"use strict";a.r(e);var r=a(2),o=a.n(r),s=a(0);o.a.component(s.HasError.name,s.HasError);var n={name:"Add",created:function(){this.cDate()},data:function(){return{form:new s.Form({name:"",referance_name:"",mobile_no:"",address:"",date:"",purpose:"",amount:"",profit_margin:""}),loading:!0,error:"",options:{format:"YYYY-MM-DD",useCurrent:!1},loaners:""}},methods:{addInvestor:function(){var t=this;this.form.post("/api/company/investor/add").then((function(e){console.log(e),"OK"==e.data.status?(t.$router.push({name:"investment"}),t.$toasted.show(e.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(e){console.log(e),t.error="some thing want to wrong"}))},cDate:function(){var t=new Date,e=t.getMonth()+1,a=t.getDate(),r=t.getFullYear()+"-"+((""+e).length<2?"0":"")+e+"-"+((""+a).length<2?"0":"")+a;this.form.date=r,this.loading=!1}}},i=(a(860),a(1)),m=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"investment"}}},[a("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addInvestor(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Date")]),t._v(" "),a("date-picker",{class:{"is-invalid":t.form.errors.has("date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex: MD Mohammad"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Mobile Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile_no,expression:"form.mobile_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mobile_no")},attrs:{type:"text",name:"mobile_no",autocomplete:"off",placeholder:"01xxxxxxxxx"},domProps:{value:t.form.mobile_no},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile_no",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"mobile_no"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"email",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Referance Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.referance_name,expression:"form.referance_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("referance_name")},attrs:{type:"text",name:"referance_name",autofocus:"",autocomplete:"off",placeholder:"refarance name"},domProps:{value:t.form.referance_name},on:{input:function(e){e.target.composing||t.$set(t.form,"referance_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"referance_name"}})],1)])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Purpose")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purpose,expression:"form.purpose"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purpose")},attrs:{type:"text",name:"purpose",autocomplete:"purpose",placeholder:"purpose"},domProps:{value:t.form.purpose},on:{input:function(e){e.target.composing||t.$set(t.form,"purpose",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"purpose"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Amount")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",name:"amount",autocomplete:"off",placeholder:"45000"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"amount"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Profit Margin ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.profit_margin,expression:"form.profit_margin"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("profit_margin")},attrs:{type:"text",name:"profit_margin",autocomplete:"off",placeholder:"25"},domProps:{value:t.form.profit_margin},on:{input:function(e){e.target.composing||t.$set(t.form,"profit_margin",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"profit_margin"}})],1)])]),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Investor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border text-center"},[e("h3",{staticClass:"box-title"},[this._v("Add Investor")])])}],!1,null,"9c65b4b2",null);e.default=m.exports},258:function(t,e,a){var r=a(861);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,o);r.locals&&(t.exports=r.locals)},860:function(t,e,a){"use strict";var r=a(258);a.n(r).a},861:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-9c65b4b2] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);