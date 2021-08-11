(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1349:function(t,s,a){"use strict";a.r(s);var r=a(2),e=a.n(r),o=a(0);a(16),a(19);e.a.component(o.HasError.name,o.HasError);var i={created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new o.Form({name:"",quantity:"",purchase_date:"",purchase_price:"",present_price:""}),options:{format:"YYYY-MM-DD",useCurrent:!1},loading:!0,errors:[]}},methods:{addAssets:function(){var t=this;this.form.post("/api/company/assets/add",{transformRequest:[function(t,s){return objectToFormData(t)}]}).then((function(s){console.log(s),"OK"==s.data.success&&(t.$router.push({name:"company_assets"}),t.$toasted.show(s.data.message,{type:"success",position:"top-center",duration:4e3}))}))}},computed:{}},n=(a(875),a(1)),c=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"company_assets"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(s){return s.preventDefault(),t.addAssets(s)},keydown:function(s){return t.form.onKeydown(s)}}},[t.errors?a("ul",{staticClass:"list-group"},t._l(t.errors,(function(s,r){return a("li",{key:r,staticClass:"list-group-item"},[t._v("\n                    "+t._s(s.name)+"\n                  ")])})),0):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name of assets ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"date"}},[t._v("Purchase Date ")]),t._v(" "),a("date-picker",{attrs:{autocomplete:"off",config:t.options},model:{value:t.form.purchase_date,callback:function(s){t.$set(t.form,"purchase_date",s)},expression:"form.purchase_date"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Purchase Price")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purchase_price,expression:"form.purchase_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purchase_price")},attrs:{type:"number",name:"purchase_price"},domProps:{value:t.form.purchase_price},on:{input:function(s){s.target.composing||t.$set(t.form,"purchase_price",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"purchase_price"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Present Price")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.present_price,expression:"form.present_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("present_price")},attrs:{type:"number",name:"present_price"},domProps:{value:t.form.present_price},on:{input:function(s){s.target.composing||t.$set(t.form,"present_price",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"present_price"}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Purchase Quantity")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("quantity")},attrs:{type:"number",name:"quantity"},domProps:{value:t.form.quantity},on:{input:function(s){s.target.composing||t.$set(t.form,"quantity",s.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"quantity"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[t._m(2),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{disabled:"",type:"text",name:""},domProps:{value:t.form.present_price*t.form.quantity}})])])]),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("carrier")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Add")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border text-center"},[s("h3",{staticClass:"box-title"},[this._v("Add Commpany Assets")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-4"},[s("h4",[this._v("Total Amount:")])])}],!1,null,"840a49c8",null);s.default=c.exports},268:function(t,s,a){var r=a(876);"string"==typeof r&&(r=[[t.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,e);r.locals&&(t.exports=r.locals)},875:function(t,s,a){"use strict";var r=a(268);a.n(r).a},876:function(t,s,a){(t.exports=a(4)(!1)).push([t.i,"\n.box-body[data-v-840a49c8]{\r\n      padding: 0px 10px;\r\n      margin-top: -20px;\n}\r\n\r\n\r\n",""])}}]);