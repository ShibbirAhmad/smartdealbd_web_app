(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1225:function(t,a,e){"use strict";e.r(a);var s=e(2),i=e.n(s),r=e(0);i.a.component(r.HasError.name,r.HasError);var o={name:"Add",created:function(){this.cityList()},data:function(){return{form:new r.Form({name:"",city_id:""}),cities:{},loading:!0,error:""}},methods:{cityList:function(){var t=this;axios.get("/others").then((function(a){console.log(a),"SUCCESS"==a.data.status&&(t.cities=a.data.cities,t.loading=!1)})).catch((function(t){console.log(t)}))},addSubCity:function(){var t=this;this.form.post("/api/sub/city/add",{transformRequest:[function(t,a){return objectToFormData(t)}]}).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.$router.push({name:"sub_city"}),t.$toasted.show(a.data.message,{type:"success",position:"top-center",duration:4e3})):t.$toasted.show(a.data.message,{type:"error",position:"top-center",duration:4e3})}))}}},n=(e(672),e(1)),c=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"sub_city"}}},[e("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[t.loading?e("h1",[e("i",{staticClass:"fa fa-spinner fa-spin"})]):e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.addSubCity(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v(" City Name")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.city_id,expression:"form.city_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city_id")},attrs:{name:"city_id"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"city_id",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("select city")]),t._v(" "),t._l(t.cities,(function(a,s){return e("option",{key:s,domProps:{value:a.id}},[t._v("\n                      "+t._s(a.name)+"\n                    ")])}))],2),t._v(" "),e("has-error",{attrs:{form:t.form,field:"city_id"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Sub City Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Example:Chhatak"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Sub City")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Add Sub City")])])}],!1,null,"6ebdf0b7",null);a.default=c.exports},165:function(t,a,e){var s=e(673);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(s,i);s.locals&&(t.exports=s.locals)},672:function(t,a,e){"use strict";var s=e(165);e.n(s).a},673:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,"\n.mb-2[data-v-6ebdf0b7] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);