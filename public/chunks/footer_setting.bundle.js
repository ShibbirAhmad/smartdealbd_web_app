(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1312:function(t,o,e){"use strict";e.r(o);var r=e(2),i=e.n(r),a=e(0),s=e(19),n=e.n(s);i.a.component(a.HasError.name,a.HasError);var l={name:"subCategory",created:function(){this.getFooterSetting()},data:function(){return{form:new a.Form({id:"",facebook_url:"",twitter_url:"",youtube_url:"",linkedin_url:"",copyright_info:"",footer_description:""}),editor:n.a,editorConfig:{},error:"",loading:!0}},methods:{getFooterSetting:function(){var t=this;axios.get("/api/get/site/footer/info").then((function(o){console.log(o),"OK"==o.data.status&&(t.form.id=o.data.setting.id,t.form.facebook_url=o.data.setting.facebook_url,t.form.twitter_url=o.data.setting.twitter_url,t.form.youtube_url=o.data.setting.youtube_url,t.form.linkedin_url=o.data.setting.linkedin_url,t.form.copyright_info=o.data.setting.copyright_info,t.form.footer_description=o.data.setting.footer_description)}))},updateFooterSetting:function(){var t=this;this.form.post("/api/edit/site/footer/info/"+this.form.id,{transformRequest:[function(t,o){return objectToFormData(t)}]}).then((function(o){console.log(o),"SUCCESS"==o.data.status?(t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:4e3}),t.getFooterSetting()):t.error="some thing want to wrong"})).catch((function(o){t.error=o.response.data.errors,t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))}}},c=e(1),u=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.updateFooterSetting(o)},keydown:function(o){return t.form.onKeydown(o)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Facebook URL ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.facebook_url,expression:"form.facebook_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.facebook_url},on:{input:function(o){o.target.composing||t.$set(t.form,"facebook_url",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Youtube URL ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.youtube_url,expression:"form.youtube_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.youtube_url},on:{input:function(o){o.target.composing||t.$set(t.form,"youtube_url",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Twitter URL ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.twitter_url,expression:"form.twitter_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.twitter_url},on:{input:function(o){o.target.composing||t.$set(t.form,"twitter_url",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Linkedin URL ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.linkedin_url,expression:"form.linkedin_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.linkedin_url},on:{input:function(o){o.target.composing||t.$set(t.form,"linkedin_url",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" Copyright Info. ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.copyright_info,expression:"form.copyright_info"}],staticClass:"form-control",attrs:{rows:"2"},domProps:{value:t.form.copyright_info},on:{input:function(o){o.target.composing||t.$set(t.form,"copyright_info",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"invoice"}},[t._v("Footer Short Description ")]),t._v(" "),e("ckeditor",{class:{"is-invalid":t.form.errors.has("footer_description")},attrs:{editor:t.editor,name:"footer_description",config:t.editorConfig},model:{value:t.form.footer_description,callback:function(o){t.$set(t.form,"footer_description",o)},expression:"form.footer_description"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"footer_description"}})],1),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                      ")])])])])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("section",{staticClass:"content-header"},[o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("General Setting")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header text-center with-border"},[o("h3",{staticClass:"box-title"},[this._v("Footer Information")])])}],!1,null,null,null);o.default=u.exports}}]);