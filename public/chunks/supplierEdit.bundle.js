(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1216:function(t,e,a){"use strict";a.r(e);var o=a(2),r=a.n(o),s=a(0);r.a.component(s.HasError.name,s.HasError);var n={name:"Edit",created:function(){this.getSupplier()},data:function(){return{form:new s.Form({name:"",company_name:"",address:"",phone:""}),loading:!0,error:""}},methods:{getSupplier:function(){var t=this;axios.get("/edit/supplier/"+this.$route.params.id).then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.form.name=e.data.supplier.name,t.form.phone=e.data.supplier.phone,t.form.address=e.data.supplier.address,t.form.company_name=e.data.supplier.company_name,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(e){console.log(e),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))},update:function(){var t=this;this.form.post("/update/supplier/"+this.$route.params.id,{transformRequest:[function(t,e){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.$router.push({name:"supplier"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="some thing want to wrong"})).catch((function(e){t.error="some thing want to wrong"}))}},computed:{}},i=a(1),m=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"supplier"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Company_name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",name:"company_name",autocomplete:"off",placeholder:"company_name"},domProps:{value:t.form.company_name},on:{input:function(e){e.target.composing||t.$set(t.form,"company_name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"company_name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Phone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",minlength:"11",maxlength:"11",name:"phone",autofocus:"",autocomplete:"off",placeholder:"phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"phone"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",placeholder:"address",name:"address",autocomplete:"off"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Edit Supplier")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Edit Supplier")])])}],!1,null,null,null);e.default=m.exports}}]);