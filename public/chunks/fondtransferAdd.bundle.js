(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1247:function(t,a,o){"use strict";o.r(a);var r=o(2),e=o.n(r),s=o(0);e.a.component(s.HasError.name,s.HasError);var n={created:function(){this.balanceList()},data:function(){return{form:new s.Form({from:"select one",to:"select one",amount:0,cost:0,transfer_amount:0}),balance:"",loading:!1,error:""}},methods:{balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(a){t.balance=a.data.balance}))},add:function(){var t=this;"string"!=typeof this.form.from&&"string"!=typeof this.form.to?this.form.post("/api/fond/transfer",{transformRequest:[function(t,a){return objectToFormData(t)}]}).then((function(a){console.log(a),"OK"==a.data.status?(t.$router.push({name:"fondtransfer"}),t.$toasted.show(a.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(a){console.log(a),t.error="some thing want to wrong"})):alert("selecet any balance")},amountTransfer:function(){var t=parseFloat(this.form.amount),a=parseFloat(this.form.cost);if(this.form.transfer_amount=t,a>0){var o=t-t/parseInt(100)*a;this.form.transfer_amount=o}}},computed:{}},i=(o(690),o(1)),l=Object(i.a)(n,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"fondtransfer"}}},[o("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-6 col-lg-offset-2"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[t.loading?o("h1",[o("i",{staticClass:"fa fa-spinner fa-spin"})]):o("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.add(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?o("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("From")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.from,expression:"form.from"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"from",a.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(a,r){return o("option",{key:r,domProps:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"from"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("To")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.to,expression:"form.to"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"to",a.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(a,r){return o("option",{key:r,domProps:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"to"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Amount")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"number",name:"amount",autofocus:"",autocomplete:"off",placeholder:"name"},domProps:{value:t.form.amount},on:{change:t.amountTransfer,keyup:t.amountTransfer,input:function(a){a.target.composing||t.$set(t.form,"amount",a.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Cost(%)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cost,expression:"form.cost"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cost")},attrs:{type:"text",name:"cost",autofocus:"",autocomplete:"off",placeholder:"cost"},domProps:{value:t.form.cost},on:{keyup:t.amountTransfer,change:t.amountTransfer,input:function(a){a.target.composing||t.$set(t.form,"cost",a.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"cost"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.transfer_amount,expression:"form.transfer_amount"}],staticClass:"form-control",attrs:{type:"number",readonly:"",autocomplete:"off",placeholder:"cost"},domProps:{value:t.form.transfer_amount},on:{keyup:t.amountTransfer,input:function(a){a.target.composing||t.$set(t.form,"transfer_amount",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?o("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Fund Transfer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Fund Transfer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",[this._v("Transfer Amount "),a("small",[this._v("(amount-cost)")])])}],!1,null,"6c9d4da7",null);a.default=l.exports},173:function(t,a,o){var r=o(691);"string"==typeof r&&(r=[[t.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};o(5)(r,e);r.locals&&(t.exports=r.locals)},690:function(t,a,o){"use strict";var r=o(173);o.n(r).a},691:function(t,a,o){(t.exports=o(4)(!1)).push([t.i,"\n.mb-2[data-v-6c9d4da7] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);