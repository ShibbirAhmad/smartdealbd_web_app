(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1281:function(e,t,a){"use strict";a.r(t);var o=a(2),r=a.n(o),s=a(0);a(16);r.a.component(s.HasError.name,s.HasError);var i={created:function(){var e=this;setTimeout((function(){e.loading=!1}),500)},data:function(){return{form:new s.Form({name:"",designation:"",email:"",phone:"",phone_office:"",position:"",image:"",resume:"",joining_date:""}),options:{format:"DD-MM-YYYY",useCurrent:!1},loading:!0,errors:[],preview_image:""}},methods:{addmember:function(){var e=this;this.form.post("/team/members/add",{transformRequest:[function(e,t){return objectToFormData(e)}]}).then((function(t){console.log(t),"OK"==t.data.success&&(e.$router.push({name:"team_member"}),e.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3}))})).catch((function(t){e.errors=[],e.errors.push(t.response.data.errors)}))},uploadImage:function(e){var t=this,a=e.target.files[0],o=new FileReader;o.readAsDataURL(a),o.onload=function(e){var o=new Image;o.onload=function(){console.log(o.width+"-"+o.height)},o.src=e.target.result,t.preview_image=e.target.result,t.form.image=a}},uploadResume:function(e){var t=e.target.files[0];this.form.resume=t}},computed:{}},n=(a(758),a(1)),m=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("admin-main"),e._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"team_member"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),e._v(" "),e._m(0)]),e._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[e._m(1),e._v(" "),a("div",{staticClass:"box-body"},[e.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.addmember(t)},keydown:function(t){return e.form.onKeydown(t)}}},[e.errors?a("ul",{staticClass:"list-group"},e._l(e.errors,(function(t,o){return a("li",{key:o,staticClass:"list-group-item"},[e._v("\n                    "+e._s(t.name)+"\n                  ")])})),0):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Joining Date")]),e._v(" "),a("date-picker",{class:{"is-invaid":e.form.errors.has("joining_date")},attrs:{autocomplete:"off",config:e.options},model:{value:e.form.joining_date,callback:function(t){e.$set(e.form,"joining_date",t)},expression:"form.joining_date"}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"joining_date"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"name"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Position")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.position,expression:"form.position"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("designation")},attrs:{name:"designation",id:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"position",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("Select position")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("Top Managemnt")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v("Manager")]),e._v(" "),a("option",{attrs:{value:"3"}},[e._v("Technical Team")]),e._v(" "),a("option",{attrs:{value:"4"}},[e._v("Business Team")]),e._v(" "),a("option",{attrs:{value:"5"}},[e._v("Office Assistant")])]),e._v(" "),a("has-error",{attrs:{form:e.form,field:"designation"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",name:"email",autofocus:"",autocomplete:"off",placeholder:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"email"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[e._v("Phone")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phone")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"phone",id:""},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"phone"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone_office"}},[e._v("Office phone")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_office,expression:"form.phone_office"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phone_office")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"phone_office",id:""},domProps:{value:e.form.phone_office},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_office",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"phone_office"}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"designation"}},[e._v("Designation")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.designation,expression:"form.designation"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("designation")},attrs:{placeholder:"write title about this member",name:"designation",id:"",rows:"3"},domProps:{value:e.form.designation},on:{input:function(t){t.target.composing||e.$set(e.form,"designation",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"designation"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.preview_image,expression:"preview_image"}],staticClass:"form-group  text-center"},[a("img",{staticClass:"image-responsive",staticStyle:{width:"200px",height:"210px"},attrs:{src:e.preview_image}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("Image")]),e._v(" "),a("input",{staticClass:"form-control",class:{"is-invalid":e.form.errors.has("image")},attrs:{type:"file",name:"image"},on:{change:e.uploadImage}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"image"}})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"form-group"},[a("label",[e._v("CV/Resume (doc,pdf or zip)")]),e._v(" "),a("input",{staticClass:"form-control",class:{"is-invalid":e.form.errors.has("resume")},attrs:{type:"file",name:"resume"},on:{change:e.uploadResume}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"resume"}})],1),e._v(" "),a("div",{staticClass:"form-group text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:e.form.busy,type:"submit"}},[e.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):e._e(),e._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{staticClass:"breadcrumb"},[t("li",[t("a",{attrs:{href:"#"}},[t("i",{staticClass:"fa fa-dashboard"}),this._v("Team Members")])]),this._v(" "),t("li",{staticClass:"active"},[this._v("Add")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"box-header with-border text-center"},[t("h3",{staticClass:"box-title"},[this._v("Add member")])])}],!1,null,"53da2027",null);t.default=m.exports},209:function(e,t,a){var o=a(759);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(o,r);o.locals&&(e.exports=o.locals)},758:function(e,t,a){"use strict";var o=a(209);a.n(o).a},759:function(e,t,a){(e.exports=a(4)(!1)).push([e.i,"\n.mb-2[data-v-53da2027] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);