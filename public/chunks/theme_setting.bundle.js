(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1331:function(t,o,r){"use strict";r.r(o);var e=r(2),a=r.n(e),s=r(0);r(19);a.a.component(s.HasError.name,s.HasError);var i={name:"subCategory",created:function(){this.getThemeSetting()},data:function(){return{form:new s.Form({id:"",primary_color:"",primary_background_color:"",menu_background_color:"",sub_menu_background_color:"",primary_text_color:"",menu_text_color:"",sub_menu_text_color:""}),error:"",loading:!0}},methods:{getThemeSetting:function(){var t=this;axios.get("/api/get/site/theme/info").then((function(o){console.log(o),"OK"==o.data.status&&(t.form.id=o.data.setting.id,t.form.primary_color=o.data.setting.primary_color,t.form.primary_background_color=o.data.setting.primary_background_color,t.form.menu_background_color=o.data.setting.menu_background_color,t.form.sub_menu_background_color=o.data.setting.sub_menu_background_color,t.form.primary_text_color=o.data.setting.primary_text_color,t.form.menu_text_color=o.data.setting.menu_text_color,t.form.sub_menu_text_color=o.data.setting.sub_menu_text_color)}))},updateColorSetting:function(){var t=this;this.form.post("/api/edit/site/theme/info/"+this.form.id,{transformRequest:[function(t,o){return objectToFormData(t)}]}).then((function(o){console.log(o),"SUCCESS"==o.data.status?(t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:4e3}),t.getThemeSetting()):t.error="some thing want to wrong"})).catch((function(o){t.error=o.response.data.errors,t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))}}},n=(r(843),r(1)),c=Object(n.a)(i,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("admin-main"),t._v(" "),r("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-6 col-lg-offset-2"},[r("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),r("div",{staticClass:"box-body"},[t.error?r("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.updateColorSetting(o)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_color,expression:"form.primary_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.primary_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_color,expression:"form.primary_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.primary_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_text_color,expression:"form.primary_text_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.primary_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_text_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_text_color,expression:"form.primary_text_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.primary_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_text_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(5),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_background_color,expression:"form.primary_background_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.primary_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_background_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.primary_background_color,expression:"form.primary_background_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.primary_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"primary_background_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(6),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.menu_background_color,expression:"form.menu_background_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.menu_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"menu_background_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.menu_background_color,expression:"form.menu_background_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.menu_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"menu_background_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(7),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.menu_text_color,expression:"form.menu_text_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.menu_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"menu_text_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.menu_text_color,expression:"form.menu_text_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.menu_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"menu_text_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_menu_background_color,expression:"form.sub_menu_background_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.sub_menu_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"sub_menu_background_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_menu_background_color,expression:"form.sub_menu_background_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.sub_menu_background_color},on:{input:function(o){o.target.composing||t.$set(t.form,"sub_menu_background_color",o.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"}),t._v(" "),t._m(9),t._v(" "),r("div",{staticClass:"col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_menu_text_color,expression:"form.sub_menu_text_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.sub_menu_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"sub_menu_text_color",o.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_menu_text_color,expression:"form.sub_menu_text_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.sub_menu_text_color},on:{input:function(o){o.target.composing||t.$set(t.form,"sub_menu_text_color",o.target.value)}}})])])]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"form-group text-center"},[r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?r("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v(" Change Theme\n                      ")])])])])])])])])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("section",{staticClass:"content-header"},[o("ol",{staticClass:"breadcrumb"},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),o("li",{staticClass:"active"},[this._v("Background and Color Setting")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"box-header text-center with-border"},[o("h2",{staticClass:"box-title"},[this._v("SET THEME COLOR ")])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-md-1"}),t._v(" "),r("div",{staticClass:"col-md-4"},[r("h5",[t._v(" PLACEMENT")])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("h5",[t._v(" SELECT COLOR ")])]),t._v(" "),r("div",{staticClass:"col-md-3"},[r("h6",[t._v(" ENTER SIX DIGITS HEX CODE "),r("br"),t._v(" "),r("span",{staticStyle:{"font-size":"12px",color:"green"}},[t._v("  example: #fc721e ")])])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Primary Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Primary Text Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Primary Background Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Menu Background Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Menu Text Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Sub Menu Background Color ")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-4"},[o("label",[this._v(" Sub Menu Text Color ")])])}],!1,null,"36b60e2f",null);o.default=c.exports},252:function(t,o,r){var e=r(844);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(5)(e,a);e.locals&&(t.exports=e.locals)},843:function(t,o,r){"use strict";var e=r(252);r.n(e).a},844:function(t,o,r){(t.exports=r(4)(!1)).push([t.i,"\ninput[data-v-36b60e2f] {\n    cursor: pointer;\n}\n\n",""])}}]);