(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1279:function(t,r,a){"use strict";a.r(r);var e=a(2),i=a.n(e),s=a(0),o=(a(16),a(19)),n=a.n(o);i.a.component(s.HasError.name,s.HasError);var c={created:function(){var t=this;setTimeout((function(){t.loading=!1}),500),this.getCarrier()},data:function(){return{form:new s.Form({title:"",vacency:"",deadline:"",description:"",image:""}),options:{format:"DD-MM-YYYY",useCurrent:!1},base_url:this.$store.state.image_base_link,editor:n.a,editorConfig:{},loading:!0,errors:[]}},methods:{getCarrier:function(){var t=this;axios.get("/carrier/edit/"+this.$route.params.id).then((function(r){console.log(r),"OK"==r.data.success&&(t.form.title=r.data.carrier.title,t.form.vacency=r.data.carrier.vacency,t.form.deadline=r.data.carrier.deadline,t.form.description=r.data.carrier.description,t.form.image=r.data.carrier.image)}))}},computed:{}},l=(a(746),a(1)),m=Object(l.a)(c,(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"home_carrier"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center",staticStyle:{"margin-left":"-198px","margin-right":"60px"}},[a("div",{staticClass:"col-lg-10 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spinner fa-spin"})]):a("form",[t.errors?a("ul",{staticClass:"list-group"},t._l(t.errors,(function(r,e){return a("li",{key:e,staticClass:"list-group-item"},[t._v("\n                    "+t._s(r.name)+"\n                  ")])})),0):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Job Title")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{disabled:"",name:"title"},domProps:{value:t.form.title},on:{input:function(r){r.target.composing||t.$set(t.form,"title",r.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"title"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Vacency")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vacency,expression:"form.vacency"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("vacency")},attrs:{disabled:"",name:"vacency"},domProps:{value:t.form.vacency},on:{input:function(r){r.target.composing||t.$set(t.form,"vacency",r.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"vacency"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[t._v("Job Deadline ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.deadline,expression:"form.deadline"}],staticClass:"form-control",attrs:{disabled:"",id:""},domProps:{value:t.form.deadline},on:{input:function(r){r.target.composing||t.$set(t.form,"deadline",r.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone_office"}},[t._v("Description ")]),t._v(" "),a("ckeditor",{class:{"is-invalid":t.form.errors.has("description")},attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.form.description,callback:function(r){t.$set(t.form,"description",r)},expression:"form.description"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"description"}})],1),t._v(" "),a("div",{staticClass:"form-group text-center"},[t.form.image?a("img",{staticClass:"image-responsive",staticStyle:{"max-width":"80%"},attrs:{src:t.base_url+t.form.image}}):a("img",{staticClass:"image-responsive",staticStyle:{"max-width":"80%"},attrs:{src:t.base_url+"images/no_image.jpg"}})]),t._v(" "),a("br")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:{name:"home_carrier"}}},[t._v("\n                Go Back\n              ")])],1)])])])])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("ol",{staticClass:"breadcrumb"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dashboard"}),this._v("carrier")])]),this._v(" "),r("li",{staticClass:"active"},[this._v("Show")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"box-header with-border"},[r("h3",{staticClass:"box-title"},[this._v("Show job info")])])}],!1,null,"5f47e625",null);r.default=m.exports},202:function(t,r,a){var e=a(747);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,i);e.locals&&(t.exports=e.locals)},746:function(t,r,a){"use strict";var e=a(202);a.n(e).a},747:function(t,r,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-5f47e625] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);