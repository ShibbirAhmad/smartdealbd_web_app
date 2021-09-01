(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1324:function(t,o,a){"use strict";a.r(o);var r=a(2),s=a.n(r),e=a(0);s.a.component(e.HasError.name,e.HasError);var n={created:function(){this.getShowrom()},data:function(){return{form:new e.Form({name:"",address:"",contact_person:"",contact_number:""}),error:""}},methods:{getShowrom:function(){var t=this;axios.get("/api/showroom/edit/item/"+this.$route.params.id).then((function(o){t.form.name=o.data.showroom.name,t.form.address=o.data.showroom.address,t.form.contact_person=o.data.showroom.contact_person,t.form.contact_number=o.data.showroom.contact_number,t.loading=!1}))},update:function(){var t=this;this.form.post("/api/showroom/update/"+this.$route.params.id,{transformRequest:[function(t,o){return objectToFormData(t)}]}).then((function(o){console.log(o),"SUCCESS"==o.data.status&&(t.$router.push({name:"showroom"}),t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:4e3}))}))}}},i=(a(827),a(1)),m=Object(i.a)(n,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"showroom"}}},[a("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.update(o)},keydown:function(o){return t.form.onKeydown(o)}}},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"showroom"},domProps:{value:t.form.name},on:{input:function(o){o.target.composing||t.$set(t.form,"name",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",name:"address",placeholder:"showroom location"},domProps:{value:t.form.address},on:{input:function(o){o.target.composing||t.$set(t.form,"address",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Contact Person")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contact_person,expression:"form.contact_person"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("contact_person")},attrs:{type:"text",name:"contact_person",required:"",placeholder:"Ex:Mohammad.."},domProps:{value:t.form.contact_person},on:{input:function(o){o.target.composing||t.$set(t.form,"contact_person",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"contact_person"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Contact Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contact_number,expression:"form.contact_number"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("contact_number")},attrs:{type:"text",name:"contact_number",required:"",maxlength:"11",placeholder:"01xxxxxxxxx"},domProps:{value:t.form.contact_number},on:{input:function(o){o.target.composing||t.$set(t.form,"contact_number",o.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"contact_number"}})],1)])]),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Save\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("showroom")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header with-border text-center"},[o("h3",{staticClass:"box-title"},[this._v("Update Showroom")])])}],!1,null,"4b7ee443",null);o.default=m.exports},243:function(t,o,a){var r=a(828);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,s);r.locals&&(t.exports=r.locals)},827:function(t,o,a){"use strict";var r=a(243);a.n(r).a},828:function(t,o,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-4b7ee443] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);