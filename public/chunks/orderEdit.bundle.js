(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1261:function(t,e,o){"use strict";o.r(e);var r=o(2),a=o.n(r),s=o(0),i=o(16),n=o.n(i);function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}a.a.component(s.HasError.name,s.HasError);var u={name:"Add",created:function(){this.others(),this.edit(),this.balanceList()},data:function(){var t;return{form:new s.Form((t={customer_mobile:"",customer_name:"",customer_address:"",city:"",courier:"",products:[],shipping_cost:0},c(t,"courier",""),c(t,"total",0),c(t,"discount",0),c(t,"paid",0),c(t,"paid_by","select one"),c(t,"due",0),c(t,"order_type",""),c(t,"sub_city",""),t)),balance:"",attribute_id:"",variant_id:"",product_code:"",city_id:"",courier_id:"",shipping_cost:"",products:[],product_attributes:null,product_variants:null,cities:null,couriers:null,product_quantity:1,error:"",loading:!0,sub_cities:""}},methods:{balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(e){t.balance=e.data.balance}))},edit:function(){var t=this;axios.get("/order/view/"+this.$route.params.id).then((function(e){if(console.log(e),console.log(e.data.order.customer_phone),"SUCCESS"==e.data.status){var o,r=e.data.order;t.form.customer_mobile=r.customer_phone,t.form.customer_name=r.customer_name,t.form.customer_address=r.customer_address,t.form.city=r.city_id,t.form.shipping_cost=r.shipping_cost,t.form.courier=r.courier_id,t.form.paid=r.paid,t.form.discount=r.discount,t.form.total=r.total,t.form.order_type=r.order_type,t.form.due=parseInt(r.total)-(parseInt(r.paid)+parseInt(r.discount))+parseInt(r.shipping_cost),r.paid_by&&(t.form.paid_by=r.paid_by);for(var a=[],s=0;s<e.data.items.length;s++)a[s]={product_id:e.data.items[s].product.id,name:e.data.items[s].product.name,product_code:e.data.items[s].product_code,quantity:e.data.items[s].quantity,price:e.data.items[s].price,variants:e.data.items[s].product.product_variant},t.products.push(a[s]),t.form.products.push(a[s]),t.form.products[s].total=e.data.items[s].total,t.form.products[s].variant_id=e.data.items[s].variant_id,t.form.products[s].attribute_id=e.data.items[s].attribute_id;(o=console).log.apply(o,a),console.log(a),t.cityWiseSubCity(),t.form.sub_city=r.sub_city_id,t.loading=!1}}))},add:function(){var t=this;"select one"!=this.form.paid_by?this.form.post("/update/order/"+this.$route.params.id).then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.$router.push({name:"order"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3})):t.$toasted.show(e.data,{type:"error",position:"top-center",duration:4e3})})).catch((function(e){t.error="Missing submit information. please check all field below and try again"})):alert("selecet any balance")},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status&&(t.cities=e.data.cities,t.couriers=e.data.couriers)})).catch((function(t){console.log(t)}))},searchProduct:function(){var t=this;4==this.product_code.length&&axios.get("/search/product/with/code/"+this.product_code).then((function(e){if("SUCCESS"==e.data.status){for(var o={product_id:"",price:"",quantity:1,attribute_id:"",variant_id:"",total:""},r=0;r<e.data.product.length;r++)t.products.push(e.data.product[r]),o.product_id=e.data.product[r].id,o.price=e.data.product[r].price,o.total=e.data.product[r].price;t.form.products.push(o),t.totalCalculation()}else t.$toasted.show("Product not found with "+t.product_code,{position:"top-center",type:"danger",duration:2e3})})).catch((function(t){console.log(t)}))},searchCustomer:function(){var t=this;11==this.form.customer_mobile.length&&axios.get("/search/customer/with/phone/number/"+this.form.customer_mobile).then((function(e){e.data&&(e.data.customer&&(t.form.customer_name=e.data.customer.name,t.form.customer_address=e.data.customer.address,t.form.city=e.data.customer.city_id),t.$toasted.show(e.data.message,{type:"error",position:"top-center",duration:4e3}))})).catch((function(t){}))},attribute:function(t){this.form.products[t].attribute_id=this.attribute_id},variant:function(t){this.form.products[t].variant_id=this.variant_id},quantity:function(t){this.form.products[t].total=this.form.products[t].price*this.form.products[t].quantity,this.totalCalculation()},totalCalculation:function(){for(var t=this.form.products,e=0,o=0;o<t.length;o++)e+=parseInt(t[o].price)*parseInt(t[o].quantity);this.form.total=parseInt(e),this.form.due=parseInt(this.form.total)-parseInt(this.form.discount)-parseInt(this.form.paid)+parseInt(this.form.shipping_cost)},selectCity:function(){for(var t=this.form.city,e=this.cities,o=0;o<e.length;o++)e[o].id==t&&(this.form.shipping_cost=parseInt(e[o].delivery_charge));this.totalCalculation(),this.cityWiseSubCity()},remove:function(t){console.log(this.form.products[t]),this.form.products.splice(t,1),this.products.splice(t,1),this.totalCalculation()},cityWiseSubCity:function(){var t=this;axios.get("/api/city/wise/sub/city/"+this.form.city).then((function(e){t.form.sub_city="",e.data.length?t.sub_cities=e.data:(t.form.sub_city="",t.sub_cities="",alert("No sub city under selected city")),console.log(e)})).catch((function(t){console.log(t)}))}},computed:{},components:{datePicker:n.a}},d=(o(733),o(1)),l=Object(d.a)(u,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"order"}}},[o("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("form",{attrs:{id:"ProductSearch"},on:{submit:function(e){return e.preventDefault(),t.searchProduct(e)}}}),t._v(" "),t.loading?o("h1",[o("i",{staticClass:"fa fa-spin fa-spinner"})]):o("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)},keydown:function(e){return t.form.onKeydown(e)}}},[o("div",{staticClass:"row justify-content-center"},[t.error?o("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t._v("\n            "+t._s(t.error)+"\n            "),o("span",{staticClass:"close",staticStyle:{color:"#fff"},attrs:{"aria-hidden":"true","data-dismiss":"alert","aria-label":"Close"}},[t._v("×")])]):t._e(),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Customer_mobile")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_mobile,expression:"form.customer_mobile"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_mobile")},attrs:{type:"text",name:"customer_mobile",autofocus:"",autocomplete:"off",placeholder:"Enter customer 11 digit mobile number"},domProps:{value:t.form.customer_mobile},on:{keyup:t.searchCustomer,input:function(e){e.target.composing||t.$set(t.form,"customer_mobile",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_mobile"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_name,expression:"form.customer_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Name"},domProps:{value:t.form.customer_name},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_name",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_name"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_address,expression:"form.customer_address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_address")},attrs:{type:"text",name:"address",autofocus:"",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.customer_address},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_address",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_address"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("City")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city")},attrs:{name:"city",id:""},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"city",e.target.multiple?o:o[0])},t.selectCity]}},[o("option",{attrs:{value:""}},[t._v("select city")]),t._v(" "),t._l(t.cities,(function(e){return o("option",{domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"city"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Sub City")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_city,expression:"form.sub_city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sub_city")},attrs:{name:"sub_city"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"sub_city",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",value:""}},[t._v("select sub city")]),t._v(" "),t._l(t.sub_cities,(function(e){return t.sub_cities.length>0?o("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"sub_city"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Shipping_cost")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shipping_cost,expression:"form.shipping_cost"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("shipping_cost")},attrs:{type:"text",name:"shipping_cost"},domProps:{value:t.form.shipping_cost},on:{input:function(e){e.target.composing||t.$set(t.form,"shipping_cost",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"shipping_cost"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Courier")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.courier,expression:"form.courier"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("courier")},attrs:{name:"courier"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"courier",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("select courier")]),t._v(" "),t._l(t.couriers,(function(e){return o("option",{domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"courier"}})],1)])])]),t._v(" "),o("div",{staticClass:"col-lg-8"},[o("div",{staticClass:"box box-success"},[t._m(2),t._v(" "),o("div",{staticClass:"box-body"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Product")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_code,expression:"product_code"}],staticClass:"form-control",attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Enter Product Code",form:"ProductSearch"},domProps:{value:t.product_code},on:{input:function(e){e.target.composing||(t.product_code=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("table",{staticClass:"table"},[t._m(3),t._v(" "),t.products.length>0?o("tbody",[t._l(t.products,(function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(r+1))]),t._v(" "),o("td",[t._v("\n                            "+t._s(e.name+"-"+e.product_code)+"\n                            "),o("input",{attrs:{type:"hidden"},domProps:{value:e.id}})]),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].variant_id,expression:"form.products[index].variant_id"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.products[r],"variant_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("select attribute")]),t._v(" "),t._l(e.variants,(function(r,a){return e.variants?o("option",{key:a,domProps:{value:r.variant.id}},[t._v("\n                                "+t._s(r.variant.name)+"\n                              ")]):t._e()}))],2)]),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].quantity,expression:"form.products[index].quantity"}],staticStyle:{width:"50px"},attrs:{type:"number"},domProps:{value:t.form.products[r].quantity},on:{keyup:function(e){return t.quantity(r)},change:function(e){return t.quantity(r)},input:function(e){e.target.composing||t.$set(t.form.products[r],"quantity",e.target.value)}}}),t._v(" "),o("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.stock))])]),t._v(" "),o("td",[3==t.form.order_type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].price,expression:"form.products[index].price"}],domProps:{value:t.form.products[r].price},on:{keyup:function(e){t.totalCalculation&&t.quantity(r)},input:function(e){e.target.composing||t.$set(t.form.products[r],"price",e.target.value)}}}):o("strong",[t._v(t._s(e.price))])]),t._v(" "),o("td",[t._v(t._s(t.form.products[r].total))]),t._v(" "),o("td",[o("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.remove(r)}}},[o("i",{staticClass:"fa fa-trash"})])])])})),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Total Amount")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.total))])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Discout")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",staticStyle:{width:"60px"},domProps:{value:t.form.discount},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}})])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Paid")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paid,expression:"form.paid"}],staticClass:"form-control",domProps:{value:t.form.paid},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"paid",e.target.value)}}})])]):t._e(),t._v(" "),o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Paid By")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paid_by,expression:"form.paid_by"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paid_by",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(e,r){return o("option",{key:r,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"paid_by"}})],1)])]),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Shipping_charge")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.shipping_cost))])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Amoutn due")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.due))])]):t._e(),t._v(" "),o("button",{staticClass:"btn btn-success",staticStyle:{"margin-top":"12px"},attrs:{type:"submit"}},[t._v("\n                          Submit\n                        ")])],2):t._e()])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Order")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Customer information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Product information")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("Product")]),t._v(" "),o("th",[t._v("Variant")]),t._v(" "),o("th",[t._v("Quantity")]),t._v(" "),o("th",[t._v("Price")]),t._v(" "),o("th",[t._v("total")]),t._v(" "),o("th",[t._v("Remove")])])])}],!1,null,"15be83da",null);e.default=l.exports},197:function(t,e,o){var r=o(734);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(5)(r,a);r.locals&&(t.exports=r.locals)},733:function(t,e,o){"use strict";var r=o(197);o.n(r).a},734:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"\n.mb-2[data-v-15be83da] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-15be83da] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-15be83da]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n",""])}}]);