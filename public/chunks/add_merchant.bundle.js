(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1203:function(a,t,e){"use strict";e.r(t);var s=e(2),r=e.n(s),o=e(0);r.a.component(o.HasError.name,o.HasError);var i={created:function(){var a=this;setTimeout((function(){a.loading=!1}),500)},data:function(){return{form:new o.Form({name:"",email:"",phone:"",company_name:"",address:"",image:""}),loading:!0,errors:[],preview_image:""}},methods:{addMerchant:function(){var a=this;this.form.post("/api/merchant/add",{transformRequest:[function(a,t){return objectToFormData(a)}]}).then((function(t){console.log(t),"OK"==t.data.success&&(a.$router.push({name:"merchant"}),a.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3}))})).catch((function(t){a.errors=[],a.errors.push(t.response.data.errors)}))},uploadImage:function(a){var t=this,e=a.target.files[0],s=new FileReader;s.readAsDataURL(e),s.onload=function(a){var s=new Image;s.onload=function(){console.log(s.width+"-"+s.height)},t.preview_image=a.target.result,t.form.image=e}}},computed:{}},n=(e(646),e(1)),m=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("admin-main"),a._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"merchant"}}},[e("i",{staticClass:"fa fa-arrow-left"})])],1),a._v(" "),a._m(0)]),a._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[a._m(1),a._v(" "),e("div",{staticClass:"box-body"},[a.loading?e("h1",[e("i",{staticClass:"fa fa-spinner fa-spin"})]):e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),a.addMerchant(t)},keydown:function(t){return a.form.onKeydown(t)}}},[a.errors?e("ul",{staticClass:"list-group"},a._l(a.errors,(function(t,s){return e("li",{key:s,staticClass:"list-group-item"},[a._v("\n                    "+a._s(t.name)+"\n                  ")])})),0):a._e(),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[a._v("Name")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"name"},domProps:{value:a.form.name},on:{input:function(t){t.target.composing||a.$set(a.form,"name",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"name"}})],1)]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"company_name"}},[a._v("Compnay Name ")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("company_name")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"company_name"},domProps:{value:a.form.company_name},on:{input:function(t){t.target.composing||a.$set(a.form,"company_name",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"company_name"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[a._v("Email")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("email")},attrs:{type:"email",name:"email",autofocus:"",autocomplete:"off",placeholder:"email"},domProps:{value:a.form.email},on:{input:function(t){t.target.composing||a.$set(a.form,"email",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"email"}})],1)]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[a._v("Phone")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("phone")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"phone",id:""},domProps:{value:a.form.phone},on:{input:function(t){t.target.composing||a.$set(a.form,"phone",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"phone"}})],1)])]),a._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[a._v("Address")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("address")},attrs:{placeholder:"write title about this merchant",name:"address",rows:"3"},domProps:{value:a.form.address},on:{input:function(t){t.target.composing||a.$set(a.form,"address",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"address"}})],1),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[a._v("Image")]),a._v(" "),e("input",{staticClass:"form-control",class:{"is-invalid":a.form.errors.has("image")},attrs:{type:"file",name:"image"},on:{change:a.uploadImage}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"image"}})],1)]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group text-center "},[e("img",{staticClass:"profile_image",attrs:{src:a.preview_image}})])])]),a._v(" "),e("div",{staticClass:"form-group text-center "},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:a.form.busy,type:"submit"}},[a.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):a._e(),a._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("ol",{staticClass:"breadcrumb"},[t("li",[t("a",{attrs:{href:"#"}},[t("i",{staticClass:"fa fa-dashboard"}),this._v("Merchants")])]),this._v(" "),t("li",{staticClass:"active"},[this._v("Add")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"box-header with-border text-center"},[t("h3",{staticClass:"box-title"},[this._v("Add Merchant")])])}],!1,null,"cef9cf6c",null);t.default=m.exports},153:function(a,t,e){var s=e(647);"string"==typeof s&&(s=[[a.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(s,r);s.locals&&(a.exports=s.locals)},646:function(a,t,e){"use strict";var s=e(153);e.n(s).a},647:function(a,t,e){(a.exports=e(4)(!1)).push([a.i,"\n.mb-2[data-v-cef9cf6c] {\r\n  margin-bottom: 5px !important;\n}\n.profile_image[data-v-cef9cf6c] {\r\n  width:100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  border:2px solid #ddd\n}\r\n\r\n\r\n",""])}}]);