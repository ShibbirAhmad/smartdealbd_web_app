(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1323:function(t,e,s){"use strict";s.r(e);var a=s(2),o=s.n(a),r=s(0);o.a.component(r.HasError.name,r.HasError);var n={name:"Add",created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new r.Form({customer_type:"",message:"",file:"",instantContants:""}),total_char:"0",loading:!0,submitValidation:!0,error:""}},methods:{counter:function(){this.total_char=this.form.message.length,this.form.customer_type.length&&this.form.message.length<=170&&(this.submitValidation=!1),this.form.message.length<1&&(this.submitValidation=!0)},sendMessage:function(){var t=this;"instantMessage"==this.form.customer_type&&(this.form.instantContants=document.getElementById("inputHolder").value),this.form.post("/api/send/message/to/customer",{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(e){console.log(e),t.form.customer_type="","OK"==e.data.status&&t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3}),t.form.message="",t.submitValidation=!0,"FAIL"==e.data.status&&t.$toasted.show(e.data.message+e.data.sub_message,{type:"error",position:"top-center",duration:4e3})})).catch((function(e){console.log(e),t.error="some thing want to wrong"}))},customeFile:function(){var t=this;if("customMessage"!=this.form.customer_type){if("instantMessage"==this.form.customer_type)this.instantMessage();else{var e=document.getElementById("instantGroup");e&&e.remove()}this.counter()}else Swal.fire({title:"Browse csv or xlsx file",input:"file"}).then((function(e){e.value&&(t.form.file=e.value)}))},instantMessage:function(){var t=document.getElementById("instNumber"),e=document.getElementById("instantGroup");e?e.style.display="block":t.innerHTML+='\n    <div class="form-group" id="instantGroup">\n                  <label>  Type Number</label>\n                  <input type="text" id="inputHolder" placeholder="01xxxxxxxxx|01xxxxxxxxx" class="form-control">\n    </div>\n     '}}},i=(s(814),s(1)),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"row justify-content-center",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"col-lg-6 col-lg-offset-2"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[t.loading?s("h1",[s("i",{staticClass:"fa fa-spinner fa-spin"})]):s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t.error?s("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("To")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_type,expression:"form.customer_type"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_type")},attrs:{name:"customer_type"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"customer_type",e.target.multiple?s:s[0])},t.customeFile]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("select one")]),t._v(" "),s("option",{attrs:{value:"wholesale"}},[t._v("Wholesale customers")]),t._v(" "),s("option",{attrs:{value:"officesale"}},[t._v("Office sale customers")]),t._v(" "),s("option",{attrs:{value:"retailsale"}},[t._v("Retail customers")]),t._v(" "),s("option",{attrs:{value:"admins"}},[t._v("Admins")]),t._v(" "),s("option",{attrs:{value:"resellers"}},[t._v("Resellers")]),t._v(" "),s("option",{attrs:{value:"merchants"}},[t._v("Merchants")]),t._v(" "),t._m(2),t._v(" "),s("option",{attrs:{value:"customMessage"}},[t._v("import customer from xlsx/csv")])]),t._v(" "),s("has-error",{attrs:{form:t.form,field:"customer_type"}})],1),t._v(" "),s("div",{attrs:{id:"instNumber"}}),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Message")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("message")},attrs:{name:"message",placeholder:"write message with in 170 character ",rows:"5",id:"text_field"},domProps:{value:t.form.message},on:{keyup:t.counter,input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),s("span",{staticClass:"bg-info",staticStyle:{float:"right","margin-top":"10px"}},[t._v(t._s(t.total_char)+"/170")]),t._v(" "),s("has-error",{attrs:{form:t.form,field:"message"}})],1),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary btn-block text-uppercase",attrs:{disabled:t.submitValidation,type:"submit"}},[t.form.busy?s("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("send\n                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content-header"},[e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("SMS Campaign")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title t text-uppercase"},[this._v("send sms")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("option",{attrs:{value:"instantMessage"}},[e("i",{staticClass:"fa fa-edit"}),this._v("\n                      Send Instant Message\n                    ")])}],!1,null,"30f0e89b",null);e.default=l.exports},235:function(t,e,s){var a=s(815);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,o);a.locals&&(t.exports=a.locals)},814:function(t,e,s){"use strict";var a=s(235);s.n(a).a},815:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.mb-2[data-v-30f0e89b] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);