(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{107:function(t,a,s){var e=s(555);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(5)(e,n);e.locals&&(t.exports=e.locals)},1145:function(t,a,s){"use strict";s.r(a);var e=s(14),n=s.n(e),i=(s(25),{created:function(){this.getContactInfo()},data:function(){return{isLoading:!0,fullPage:!0,name:"",email:"",message:"",contact_info:""}},methods:{getContactInfo:function(){var t=this;axios.get("/_public/api/get/info/abou/contact").then((function(a){console.log(a),"OK"==a.data.status&&(t.contact_info=a.data.setting.contact_info,t.isLoading=!1)}))},sendMessage:function(){var t=this;axios.post("/_public/customer/contact",{name:this.name,email:this.email,message:this.message}).then((function(a){"OK"==a.data.success?(Swal.fire({type:"success",text:"Thanks for your message, we will reply as soon as possible",confirm:!0,duration:4e3,position:"top-center"}),t.name="",t.email="",t.message=""):Swal.fire({type:"error",text:"something went wrong. please, try again ",position:"top-center"})}))}},components:{Loading:n.a}}),o=(s(554),s(1)),r=Object(o.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper-wide"},[s("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),s("frontend-header"),t._v(" "),s("div",{attrs:{id:"container"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12",attrs:{id:"content"}},[t._m(0),t._v(" "),s("div",{staticClass:"row contact_row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 col-sm-2"}),t._v(" "),s("div",{staticClass:"col-md-8 col-sm-12 bg-white shadow"},[s("div",{staticClass:"address_container"},[s("p",{domProps:{innerHTML:t._s(t.contact_info)}})])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4"})]),t._v(" "),s("br")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"}),t._v(" "),s("div",{staticClass:"col-lg-8 col-md-8 col-sm-10 box shadow bg-white"},[t._m(1),t._v(" "),s("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),t.sendMessage()}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"emial"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Message")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}})]),t._v(" "),t._m(2)])])])])])])])])]),t._v(" "),s("frontend-footer")],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col lg-12 col-md-12 col-sm-12 text-center"},[a("h2",{staticClass:"heading"},[a("span",[this._v("CONTACT US")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center"},[a("h5",{staticClass:"heading"},[this._v("\n                      send us message, our customer service will be response.\n                    ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group text-center"},[a("input",{staticClass:"btn btn-lg submit_style",attrs:{type:"submit",value:"send"}})])}],!1,null,"cb3a9ef6",null);a.default=r.exports},554:function(t,a,s){"use strict";var e=s(107);s.n(e).a},555:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.submit_style[data-v-cb3a9ef6] {\r\n  margin-bottom: 20px;\r\n  width: 80px;\r\n  background: #ff4d03;\r\n  border: dashed 1px;\r\n  color: #fff;\r\n  font-size: 16px;\n}\n.address_container[data-v-cb3a9ef6] {\r\n  margin-top: 30px;\r\n  margin-bottom: 50px;\n}\n@media screen and (max-width: 450px) {\n.address_container[data-v-cb3a9ef6] {\r\n    margin-top: 30px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-bottom: 50px;\n}\n.contact_row[data-v-cb3a9ef6] {\r\n    margin-top: -15px;\n}\np[data-v-cb3a9ef6] {\r\n    position: relative;\r\n    font-size: 13px;\r\n    line-height: 15px;\n}\n.box[data-v-cb3a9ef6] {\r\n    margin: 10px;\n}\n}\n.address_container[data-v-cb3a9ef6] {\r\n    padding: 10px;\n}\n.address_container i[data-v-cb3a9ef6] {padding-right: 15px;color: #ff4d03;}\r\n",""])}}]);