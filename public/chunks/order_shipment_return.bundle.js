(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1317:function(t,r,e){"use strict";e.r(r);var o=e(2),i=e.n(o),s=e(0),n=e(19),a=e.n(n);i.a.component(s.HasError.name,s.HasError);var c={name:"subCategory",created:function(){this.getOrderShipmentReturn()},data:function(){return{form:new s.Form({id:"",order_info:"",shipment_info:"",return_policy:""}),editor:a.a,editorConfig:{},error:"",loading:!0}},methods:{getOrderShipmentReturn:function(){var t=this;axios.get("/api/get/shipment/order/return").then((function(r){console.log(r),"OK"==r.data.status&&(t.form.id=r.data.setting.id,t.form.order_info=r.data.setting.order_info,t.form.shipment_info=r.data.setting.shipment_info,t.form.return_policy=r.data.setting.return_policy,t.loading=!1)}))},updateOrderShipmentReturn:function(){var t=this;this.form.post("/api/edit/shipment/return/order/"+this.form.id,{transformRequest:[function(t,r){return objectToFormData(t)}]}).then((function(r){console.log(r),"SUCCESS"==r.data.status?(t.$toasted.show(r.data.message,{type:"success",position:"top-center",duration:4e3}),t.getOrderShipmentReturn()):t.error="some thing want to wrong"})).catch((function(r){t.error=r.response.data.errors,t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))}}},l=e(1),d=Object(l.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(r){return r.preventDefault(),t.updateOrderShipmentReturn(r)},keydown:function(r){return t.form.onKeydown(r)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"invoice"}},[t._v("Order Details ")]),t._v(" "),e("ckeditor",{class:{"is-invalid":t.form.errors.has("order_info")},attrs:{editor:t.editor,name:"order_info",config:t.editorConfig},model:{value:t.form.order_info,callback:function(r){t.$set(t.form,"order_info",r)},expression:"form.order_info"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"order_info"}})],1)]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"invoice"}},[t._v("Shipment Details ")]),t._v(" "),e("ckeditor",{class:{"is-invalid":t.form.errors.has("shipment_info")},attrs:{editor:t.editor,name:"shipment_info",config:t.editorConfig},model:{value:t.form.shipment_info,callback:function(r){t.$set(t.form,"shipment_info",r)},expression:"form.shipment_info"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"shipment_info"}})],1)]),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"invoice"}},[t._v("Return Policy ")]),t._v(" "),e("ckeditor",{class:{"is-invalid":t.form.errors.has("return_policy")},attrs:{editor:t.editor,name:"return_policy",config:t.editorConfig},model:{value:t.form.return_policy,callback:function(r){t.$set(t.form,"return_policy",r)},expression:"form.return_policy"}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"return_policy"}})],1),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                      ")])])])])])])])])])])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("section",{staticClass:"content-header"},[r("ol",{staticClass:"breadcrumb"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),r("li",{staticClass:"active"},[this._v("setting")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"box-header text-center with-border"},[r("h3",{staticClass:"box-title"},[this._v("Order Shipment And Return Policy")])])}],!1,null,null,null);r.default=d.exports}}]);