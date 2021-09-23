(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1268:function(t,e,r){"use strict";r.r(e);var o=r(2),s=r.n(o),a=r(0),n=r(16),c=r.n(n),u=r(15),l=r.n(u);r(26);function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}s.a.use(l.a),s.a.component(a.HasError.name,a.HasError);var m={name:"Add",created:function(){this.others(),this.balanceList()},data:function(){var t;return{form:new a.Form((t={customer_mobile:"",customer_name:"",customer_address:"",city:"",courier:"",products:[],shipping_cost:0,status:2},d(t,"courier",""),d(t,"total",0),d(t,"discount",0),d(t,"paid",0),d(t,"due",0),d(t,"order_type",3),d(t,"paid_by","select one"),d(t,"sub_city",""),t)),balance:"",search_product_code:"",attribute_id:"",variant_id:"",product_code:"",city_id:"",courier_id:"",shipping_cost:"",products:[],product_attributes:null,product_variants:null,cities:null,couriers:null,product_quantity:1,errors:[],product_per_page:10,base_link:this.$store.state.image_base_link,sub_cities:""}},methods:{balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(e){t.balance=e.data.balance}))},add:function(){var t=this;"string"!=typeof this.form.paid_by?(this.$Progress.start(),this.form.post("/create/order").then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.$Progress.finish(),t.$router.push({name:"order"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3})):t.error="Some thing want to wrong"})).catch((function(e){t.errors=[],t.errors.push(e.response.data.errors),t.$Progress.finish()}))):alert("selecet any balance")},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status&&(t.cities=e.data.cities,t.couriers=e.data.couriers,t.loading=!1)})).catch((function(t){console.log(t)}))},searchProduct:function(){var t=this,e=this.product_code.length;console.log(e),4==e&&(this.$Progress.start(),axios.get("/search/product/with/code/"+this.product_code).then((function(e){if("SUCCESS"==e.data.status){t.product_code="";for(var r={id:"",price:"",quantity:1,attribute_id:"",variant_id:"",total:"",stock:""},o=0;o<e.data.product.length;o++){if(e.data.product[o].stock<=0)return Swal.fire({type:"warning",title:"Wopps....",html:"".concat(e.data.product[o].name," - <strong> ").concat(e.data.product[o].product_code," </strong> in <b>stcok not available</b>.")});t.products.push(e.data.product[o]),r.id=e.data.product[o].id,r.price=e.data.product[o].price,r.total=e.data.product[o].price,r.stock=e.data.product[o].stock}t.form.products.push(r),t.totalCalculation()}else t.$toasted.show("Product not found with "+t.product_code,{position:"top-center",type:"danger",duration:2e3});t.$Progress.finish()})).catch((function(e){console.log(e),t.$Progress.finish()})))},searchCustomer:function(){var t=this;11==this.form.customer_mobile.length&&axios.get("/search/customer/with/phone/number/"+this.form.customer_mobile).then((function(e){e.data&&(e.data.customer&&(t.form.customer_name=e.data.customer.customer_name,t.form.customer_address=e.data.customer.customer_address,t.form.city=e.data.customer.city_id),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3}))})).catch((function(t){}))},attribute:function(t){this.form.products[t].attribute_id=this.attribute_id},quantity:function(t){this.form.products[t].total=parseInt(this.form.products[t].price)*parseInt(this.form.products[t].quantity),this.totalCalculation()},totalCalculation:function(){for(var t=this.form.products,e=0,r=0;r<t.length;r++)e+=parseInt(t[r].price)*parseInt(t[r].quantity);return parseInt(this.form.paid)>parseInt(e)+parseInt(this.form.shipping_cost)?(Swal.fire({type:"warning",text:"Paid amount ".concat(this.form.paid," bigger this total amount ").concat(e," ?????")}),void(this.form.paid=e)):parseInt(this.form.discount)>parseInt(e)+parseInt(this.form.shipping_cost)?(Swal.fire({type:"warning",text:"Discount amount ".concat(this.form.discount," bigger this total amount ").concat(e," ?????")}),void(this.form.discount=e)):(this.form.total=parseInt(e),this.form.due=this.form.total-parseInt(this.form.discount)-parseInt(this.form.paid)+parseInt(this.form.shipping_cost),void(e+=parseInt(t[i].price)*parseInt(t[i].quantity)))},selectCity:function(){var t=this.form.city;this.cityWiseSubCity(t);for(var e=this.cities,r=0;r<e.length;r++)e[r].id==t&&(this.form.shipping_cost=e[r].delivery_charge);1==t&&(this.form.courier=5),this.totalCalculation()},cityWiseSubCity:function(t){var e=this,r=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel,loader:"bars",color:"#FF4D03",backgroundColor:"#222",width:100,height:100});console.log(t),axios.get("/api/city/wise/sub/city/"+t).then((function(t){t.data.length?e.sub_cities=t.data:(e.form.sub_city="",e.sub_cities="",alert("No sub city under selected city")),r.hide(),console.log(t)})).catch((function(t){console.log(t),r.hide()}))},remove:function(t){console.log(this.form.products[t]),this.form.products.splice(t,1),this.products.splice(t,1),this.totalCalculation()},search_suggested_product:function(){var t=this;this.search_product_code.length>=2&&axios.get("/api/search/seggested/product/for/order/"+this.search_product_code).then((function(e){console.log(e),"OK"==e.data.status&&(t.suggested_products=e.data.products)}))}},computed:{},components:{datePicker:c.a}},p=(r(732),r(1)),v=Object(p.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("admin-main"),t._v(" "),r("div",{staticClass:"content-wrapper"},[r("section",{staticClass:"content-header"},[r("h1",[r("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"order"}}},[r("i",{staticClass:"fa fa-arrow-right"})]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)]),t._v(" "),r("section",{staticClass:"content"},[r("form",{attrs:{id:"searchProductform"},on:{submit:function(e){return e.preventDefault(),t.searchProduct(e)}}}),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"row justify-content-center"},[t.errors.length?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[r("ul",t._l(t.errors,(function(e){return r("div",[r("li",[t._v(t._s(e))]),t._v(" "),r("br")])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"box box-primary"},[t._m(2),t._v(" "),r("div",{staticClass:"box-body"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Customer_mobile")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_mobile,expression:"form.customer_mobile"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_mobile")},attrs:{type:"text",name:"customer_mobile",autocomplete:"off",placeholder:"Enter customer 11 digit mobile number"},domProps:{value:t.form.customer_mobile},on:{keyup:t.searchCustomer,input:function(e){e.target.composing||t.$set(t.form,"customer_mobile",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"customer_mobile"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_name,expression:"form.customer_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_name")},attrs:{type:"text",name:"name",autocomplete:"off",placeholder:"Name"},domProps:{value:t.form.customer_name},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"customer_name"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_address,expression:"form.customer_address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_address")},attrs:{type:"text",name:"address",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.customer_address},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_address",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"customer_address"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("City")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city")},attrs:{name:"city"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"city",e.target.multiple?r:r[0])},t.selectCity]}},[r("option",[t._v("select city")]),t._v(" "),t._l(t.cities,(function(e){return r("option",{domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"city"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Sub City")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_city,expression:"form.sub_city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sub_city")},attrs:{name:"sub_city"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"sub_city",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("select sub city")]),t._v(" "),t._l(t.sub_cities,(function(e){return t.sub_cities.length>0?r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"sub_city"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Shipping_cost")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shipping_cost,expression:"form.shipping_cost"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("shipping_cost")},attrs:{type:"text",name:"shipping_cost"},domProps:{value:t.form.shipping_cost},on:{input:function(e){e.target.composing||t.$set(t.form,"shipping_cost",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"shipping_cost"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Courier")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.courier,expression:"form.courier"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("courier")},attrs:{name:"courier"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"courier",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("select courier")]),t._v(" "),t._l(t.couriers,(function(e){return r("option",{domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"courier"}})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Status")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",attrs:{name:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"3"}},[t._v("Approved")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("Pending")])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-8"},[r("div",{staticClass:"box box-success"},[t._m(3),t._v(" "),r("div",{staticClass:"box-body"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Scan Barcode || prodcut code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product_code,expression:"product_code"}],staticClass:"form-control",attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Enter Product Code",form:"searchProductform"},domProps:{value:t.product_code},on:{input:function(e){e.target.composing||(t.product_code=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("table",{staticClass:"table table-hover table-bordered table-striped "},[t._m(4),t._v(" "),t.products.length>0?r("tbody",[t._l(t.products,(function(e,o){return r("tr",{key:o},[r("td",{staticStyle:{width:"10px"}},[t._v(t._s(o))]),t._v(" "),r("td",[t._v("\n                            "+t._s(e.name+"-"+e.product_code)+"\n                            "),r("input",{attrs:{type:"hidden"},domProps:{value:e.id}})]),t._v(" "),r("td",[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.products[o].variant_id,expression:"form.products[index].variant_id"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.products[o],"variant_id",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("select variant")]),t._v(" "),t._l(e.variants,(function(o,s){return e.variants?r("option",{key:s,domProps:{value:o.variant.id}},[t._v("\n                                "+t._s(o.variant.name)+"\n                              ")]):t._e()}))],2)]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[o].quantity,expression:"form.products[index].quantity"}],staticStyle:{width:"70px"},attrs:{type:"number"},domProps:{value:t.form.products[o].quantity},on:{keyup:function(e){return t.quantity(o)},change:function(e){return t.quantity(o)},input:function(e){e.target.composing||t.$set(t.form.products[o],"quantity",e.target.value)}}}),t._v(" "),r("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.stock))])]),t._v(" "),r("td",[3==t.form.order_type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[o].price,expression:"form.products[index].price"}],staticStyle:{width:"80px"},domProps:{value:t.form.products[o].price},on:{keyup:function(e){t.totalCalculation&&t.quantity(o)},input:function(e){e.target.composing||t.$set(t.form.products[o],"price",e.target.value)}}}):r("strong",[t._v(t._s(e.price))])]),t._v(" "),r("td",[t._v(t._s(t.form.products[o].total))]),t._v(" "),r("td",[r("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.remove(o)}}},[r("i",{staticClass:"fa fa-trash"})])])])})),t._v(" "),t.products.length>0?r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Total Amount")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.total))])]):t._e(),t._v(" "),t.products.length>0?r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Discount")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:t.form.discount},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}})])]):t._e(),t._v(" "),t.products.length>0?r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Paid")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paid,expression:"form.paid"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:t.form.paid},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"paid",e.target.value)}}})])]):t._e(),t._v(" "),r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Paid By")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paid_by,expression:"form.paid_by"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paid_by",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(e,o){return r("option",{key:o,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2),t._v(" "),r("has-error",{attrs:{form:t.form,field:"paid_by"}})],1)])]),t._v(" "),t.products.length>0?r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Shipping_charge")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.shipping_cost))])]):t._e(),t._v(" "),t.products.length>0?r("tr",[r("td",{attrs:{colspan:"4"}}),t._v(" "),r("td",[t._v("Amoutn due")]),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.due))])]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-success",staticStyle:{"margin-top":"12px"},attrs:{type:"submit",disabled:t.form.busy}},[t._v("\n                          Submit\n                        ")])],2):t._e()])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"#sg-product"}},[e("i",{staticClass:"fa fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Order")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Customer information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Product information")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v("Product")]),t._v(" "),r("th",[t._v("Variant")]),t._v(" "),r("th",[t._v("Quantity")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("total")]),t._v(" "),r("th",[t._v("Remove")])])])}],!1,null,"05705b3b",null);e.default=v.exports},195:function(t,e,r){var o=r(733);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r(5)(o,s);o.locals&&(t.exports=o.locals)},732:function(t,e,r){"use strict";var o=r(195);r.n(o).a},733:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,"\n.mb-2[data-v-05705b3b] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-05705b3b] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.fa-search[data-v-05705b3b]{\r\n  height: 33px;\r\n  width: 60px;\r\n  margin-left: -25px;\n}\n.autocomplete li[data-v-05705b3b]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\n.suggest-product img[data-v-05705b3b] {\r\n    width: 120px;\r\n    height: 120px;\n}\n.suggest-product[data-v-05705b3b] {\r\n   background: #ecf0f5;\r\n    text-align: center;\r\n    padding: 20px;\r\n    box-shadow: 0px 0px 1px 2px #ddd\n}\n.add-item.text-center[data-v-05705b3b] {\r\n    background: #fff;\r\n    width: block;\r\n    padding: 6px 5px;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    margin-bottom: 18px;\n}\n.form-group.product-search[data-v-05705b3b] {\r\n    width: 80%;\r\n    left: 10%;\r\n    position: relative;\n}\r\n\r\n",""])}}]);