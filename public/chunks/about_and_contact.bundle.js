(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1316:function(t,o,a){"use strict";a.r(o);var n=a(2),i=a.n(n),s=a(0),r=a(19),e=a.n(r);i.a.component(s.HasError.name,s.HasError);var c={name:"subCategory",created:function(){this.getAboutAndContact()},data:function(){return{form:new s.Form({id:"",contact_info:"",about_info:""}),editor:e.a,editorConfig:{},error:"",loading:!0}},methods:{getAboutAndContact:function(){var t=this;axios.get("/api/get/about/contact").then((function(o){console.log(o),"OK"==o.data.status&&(t.form.id=o.data.setting.id,t.form.contact_info=o.data.setting.contact_info,t.form.about_info=o.data.setting.about_info,t.loading=!1)}))},updateAboutAndContact:function(){var t=this;this.form.post("/api/edit/about/contact/info/"+this.form.id,{transformRequest:[function(t,o){return objectToFormData(t)}]}).then((function(o){console.log(o),"SUCCESS"==o.data.status?(t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:4e3}),t.getAboutAndContact()):t.error="some thing want to wrong"}))}}},f=a(1),l=Object(f.a)(c,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.updateAboutAndContact(o)},keydown:function(o){return t.form.onKeydown(o)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"invoice"}},[t._v("Contact Details ")]),t._v(" "),a("ckeditor",{class:{"is-invalid":t.form.errors.has("contact_info")},attrs:{editor:t.editor,name:"contact_info",config:t.editorConfig},model:{value:t.form.contact_info,callback:function(o){t.$set(t.form,"contact_info",o)},expression:"form.contact_info"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"contact_info"}})],1)]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"invoice"}},[t._v("About Information Details ")]),t._v(" "),a("ckeditor",{class:{"is-invalid":t.form.errors.has("about_info")},attrs:{editor:t.editor,name:"about_info",config:t.editorConfig},model:{value:t.form.about_info,callback:function(o){t.$set(t.form,"about_info",o)},expression:"form.about_info"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"about_info"}})],1),t._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                      ")])])])])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("section",{staticClass:"content-header"},[o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("setting")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header text-center with-border"},[o("h3",{staticClass:"box-title"},[this._v("About And Contact Information")])])}],!1,null,null,null);o.default=l.exports}}]);