(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1332:function(t,r,o){"use strict";o.r(r);var a=o(2),e=o.n(a),s=o(0);o(16);e.a.component(s.HasError.name,s.HasError);var i={created:function(){},data:function(){return{form:new s.Form({name:"",expired_date:"",background_color:"",border_color:"",border_width:"",order_by:""}),options:{format:"YYYY-MM-DD",useCurrent:!1},error:"",loading:!0}},methods:{addSaleCampaign:function(){var t=this;this.form.post("/api/sale/campaign/add",{transformRequest:[function(t,r){return objectToFormData(t)}]}).then((function(r){console.log(r),"SUCCESS"==r.data.status?(t.$toasted.show(r.data.message,{type:"success",position:"top-center",duration:4e3}),t.$router.push({name:"sale_campaign"})):t.$toasted.show(r.data.message,{type:"error",position:"top-center",duration:4e3})}))}}},n=(o(841),o(1)),l=Object(n.a)(i,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"sale_campaign"}}},[o("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-6 col-lg-offset-2"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[t.error?o("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),o("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(r){return r.preventDefault(),t.addSaleCampaign(r)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"form-group"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("label",{attrs:{for:"name"}},[t._v("Campaign Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(r){r.target.composing||t.$set(t.form,"name",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("label",[t._v("Expire Date")]),t._v(" "),o("date-picker",{class:{"is-invaid":t.form.errors.has("expired_date")},attrs:{config:t.options,name:"expired_date"},model:{value:t.form.expired_date,callback:function(r){t.$set(t.form,"expired_date",r)},expression:"form.expired_date"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"expired_date"}})],1)])]),t._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("label",{attrs:{for:"name"}},[t._v("Border Width ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.border_width,expression:"form.border_width"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("border_width")},attrs:{type:"number",name:"border_width"},domProps:{value:t.form.border_width},on:{input:function(r){r.target.composing||t.$set(t.form,"border_width",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"border_width"}})],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("label",{attrs:{for:"name"}},[t._v("Display Position ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.order_by,expression:"form.order_by"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("order_by")},attrs:{type:"number",name:"order_by"},domProps:{value:t.form.order_by},on:{input:function(r){r.target.composing||t.$set(t.form,"order_by",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"order_by"}})],1)])]),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"form-group color_group"},[o("div",{staticClass:"row"},[t._m(3),t._v(" "),o("div",{staticClass:"col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.background_color,expression:"form.background_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.background_color},on:{input:function(r){r.target.composing||t.$set(t.form,"background_color",r.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.background_color,expression:"form.background_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.background_color},on:{input:function(r){r.target.composing||t.$set(t.form,"background_color",r.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"form-group color_group"},[o("div",{staticClass:"row"},[t._m(4),t._v(" "),o("div",{staticClass:"col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.border_color,expression:"form.border_color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.form.border_color},on:{input:function(r){r.target.composing||t.$set(t.form,"border_color",r.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.border_color,expression:"form.border_color"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.border_color},on:{input:function(r){r.target.composing||t.$set(t.form,"border_color",r.target.value)}}})])])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?o("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("\n                        Submit\n                      ")])])])])])])])])])])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("ol",{staticClass:"breadcrumb"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),r("li",{staticClass:"active"},[this._v("Sale Campaign")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"box-header text-center with-border"},[r("h2",{staticClass:"box-title"},[this._v("Add Sale Campaign")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group color_group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("h5",[this._v("PLACEMENT")])]),this._v(" "),r("div",{staticClass:"col-md-4"},[r("h5",[this._v("SELECT COLOR")])]),this._v(" "),r("div",{staticClass:"col-md-3"},[r("h6",[this._v("\n                            SIX DIGIT CODE "),r("br"),this._v(" "),r("span",{staticStyle:{"font-size":"12px",color:"green"}},[this._v("\n                              example: #fc721e\n                            ")])])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"col-md-4"},[r("label",[this._v(" Background Color ")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"col-md-4"},[r("label",[this._v(" Border Color ")])])}],!1,null,"12e59ffa",null);r.default=l.exports},250:function(t,r,o){var a=o(842);"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};o(5)(a,e);a.locals&&(t.exports=a.locals)},841:function(t,r,o){"use strict";var a=o(250);o.n(a).a},842:function(t,r,o){(t.exports=o(4)(!1)).push([t.i,"\ninput[data-v-12e59ffa] {\r\n  cursor: pointer;\n}\n.color_group[data-v-12e59ffa] {\r\n  margin-left: 20px;\n}\r\n",""])}}]);