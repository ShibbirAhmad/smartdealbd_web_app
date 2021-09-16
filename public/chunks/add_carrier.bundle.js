(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1272:function(t,e,r){"use strict";r.r(e);var a=r(2),s=r.n(a),o=r(0),i=(r(16),r(19)),n=r.n(i);s.a.component(o.HasError.name,o.HasError);var c={created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new o.Form({title:"",vacency:"",deadline:"",description:"",image:""}),base_url:this.$store.state.image_base_link,options:{format:"DD-MM-YYYY",useCurrent:!1},editor:n.a,editorConfig:{},loading:!0,errors:[],preview_image:""}},methods:{addCarrier:function(){var t=this;this.form.post("/carrier/add",{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(e){console.log(e),"OK"==e.data.success&&(t.$router.push({name:"home_carrier"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3}))})).catch((function(e){t.errors=[],t.errors.push(e.response.data.errors)}))},uploadImage:function(t){var e=this,r=t.target.files[0],a=new FileReader;a.readAsDataURL(r),a.onload=function(t){var a=new Image;a.onload=function(){console.log(a.width+"-"+a.height)},a.src=t.target.result,e.preview_image=t.target.result,e.form.image=r}}},computed:{}},l=(r(742),r(1)),m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("admin-main"),t._v(" "),r("div",{staticClass:"content-wrapper"},[r("section",{staticClass:"content-header"},[r("h1",[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home_carrier"}}},[r("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"row justify-content-center",staticStyle:{"margin-left":"-198px","margin-right":"60px"}},[r("div",{staticClass:"col-lg-10 col-lg-offset-2"},[r("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),r("div",{staticClass:"box-body"},[t.loading?r("h1",[r("i",{staticClass:"fa fa-spinner fa-spin"})]):r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addCarrier(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t.errors?r("ul",{staticClass:"list-group"},t._l(t.errors,(function(e,a){return r("li",{key:a,staticClass:"list-group-item"},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),0):t._e(),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Job Title")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",name:"title",autofocus:"",placeholder:"write job title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"title"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Vacency")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vacency,expression:"form.vacency"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("vacency")},attrs:{type:"text",name:"vacency",autofocus:"",autocomplete:"off",placeholder:"Number of vacency"},domProps:{value:t.form.vacency},on:{input:function(e){e.target.composing||t.$set(t.form,"vacency",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"vacency"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[t._v("Job Deadline ")]),t._v(" "),r("date-picker",{attrs:{autocomplete:"off",config:t.options},model:{value:t.form.deadline,callback:function(e){t.$set(t.form,"deadline",e)},expression:"form.deadline"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone_office"}},[t._v("Description ")]),t._v(" "),r("ckeditor",{class:{"is-invalid":t.form.errors.has("description")},attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"description"}})],1),t._v(" "),r("div",{staticClass:"form-group text-center"},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.preview_image,expression:"preview_image"}],staticStyle:{"max-width":"80%"},attrs:{src:t.preview_image}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v(" Feature Image")]),t._v(" "),r("input",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("image")},attrs:{type:"file",name:"image"},on:{change:t.uploadImage}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"image"}})],1),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"form-group text-center"},[r("button",{staticClass:"btn btn-lg btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?r("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("post\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("carrier")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Add")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Add carrier")])])}],!1,null,"33f55453",null);e.default=m.exports},201:function(t,e,r){var a=r(743);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(5)(a,s);a.locals&&(t.exports=a.locals)},742:function(t,e,r){"use strict";var a=r(201);r.n(a).a},743:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,"\n.mb-2[data-v-33f55453] {\r\n  margin-bottom: 5px !important;\n}\r\n\r\n",""])}}]);