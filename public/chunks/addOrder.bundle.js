(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1267:function(t,e,o){"use strict";o.r(e);var r=o(2),s=o.n(r),a=o(0),n=o(16),c=o.n(n);function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}s.a.component(a.HasError.name,a.HasError);var l={created:function(){this.others(),this.balanceList()},data:function(){var t;return{form:new a.Form((t={customer_mobile:"",customer_name:"",customer_address:"",city:"",note:"",courier:"",products:[],shipping_cost:0,paid_by:"select one",status:2},u(t,"courier",""),u(t,"total",0),u(t,"discount",0),u(t,"paid",0),u(t,"due",0),u(t,"order_type",2),u(t,"sub_city",""),t)),city_name:"",balance:"",search_product_code:"",attribute_id:"",variant_id:"",product_code:"",city_id:"",courier_id:"",shipping_cost:"",products:[],product_attributes:null,product_variants:null,cities:"",couriers:null,product_quantity:1,errors:[],suggested_products:{},product_per_page:10,base_link:this.$store.state.image_base_link,sub_cities:""}},methods:{citySearch:function(){var t=this;this.city_name.length>0&&axios.get("/api/search/city/"+this.city_name).then((function(e){e.data.cities.data.length>0&&(document.getElementById("city_name_container").style.display="block",t.cities=e.data.cities.data)}))},balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(e){t.balance=e.data.balance}))},add:function(){var t=this;"string"!=typeof this.form.paid_by?(this.$Progress.start(),this.form.post("/create/order").then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.$Progress.finish(),t.$router.push({name:"order"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3})):t.$toasted.show(e.data,{type:"error",position:"top-center",duration:5e3})})).catch((function(e){t.errors=[],t.errors.push(e.response.data.errors),t.$Progress.finish()}))):alert("selecet any balance")},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status&&(t.couriers=e.data.couriers,t.loading=!1)})).catch((function(t){console.log(t)}))},searchProduct:function(){var t=this,e=this.product_code.length;console.log(e),e>3&&(this.$Progress.start(),axios.get("/search/product/with/code/"+this.product_code).then((function(e){if(console.log(e),"SUCCESS"==e.data.status){t.product_code="";for(var o={id:"",price:"",quantity:1,attribute_id:"",variant_id:"",total:"",stock:""},r=0;r<e.data.product.length;r++)t.products.push(e.data.product[r]),o.id=e.data.product[r].id,o.price=e.data.product[r].price,o.total=e.data.product[r].price,o.stock=e.data.product[r].stock;t.form.products.push(o),t.totalCalculation()}else t.$toasted.show("Product not found with "+t.product_code,{position:"top-center",type:"danger",duration:2e3});t.$Progress.finish()})).catch((function(e){console.log(e),t.$Progress.finish()})))},searchCustomer:function(){var t=this;11==this.form.customer_mobile.length&&axios.get("/search/customer/with/phone/number/"+this.form.customer_mobile).then((function(e){console.log(e),e.data&&(e.data.customer&&(t.form.customer_name=e.data.customer.customer_name,t.form.customer_address=e.data.customer.customer_address,t.form.city=e.data.customer.city_id),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3}))}))},attribute:function(t){this.form.products[t].attribute_id=this.attribute_id},quantity:function(t){this.form.products[t].total=parseInt(this.form.products[t].price)*parseInt(this.form.products[t].quantity),this.totalCalculation()},totalCalculation:function(){for(var t=this.form.products,e=0,o=0;o<t.length;o++)e+=parseInt(t[o].price)*parseInt(t[o].quantity);return parseInt(this.form.paid)>parseInt(e)+parseInt(this.form.shipping_cost)?(Swal.fire({type:"warning",text:". why paid amount ".concat(this.form.paid," bigger this total amount ").concat(e," ?????")}),void(this.form.paid=e)):parseInt(this.form.discount)>parseInt(e)+parseInt(this.form.discount)?(Swal.fire({type:"warning",text:"why discount amount ".concat(this.form.discount," bigger this total amount ").concat(e," ?????")}),void(this.form.discount=e)):(this.form.total=parseInt(e),this.form.due=this.form.total-parseInt(this.form.discount)-parseInt(this.form.paid)+parseInt(this.form.shipping_cost),void(e+=parseInt(t[i].price)*parseInt(t[i].quantity)))},selectCity:function(t){document.getElementById("city_name_container").style.display="none",this.city_name=t.name,this.form.city=t.id,this.cityWiseSubCity(t.id),this.form.shipping_cost=t.delivery_charge,this.totalCalculation()},cityWiseSubCity:function(t){var e=this,o=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel,loader:"bars",color:"#FF4D03",backgroundColor:"#222",width:100,height:100});console.log(t),axios.get("/api/city/wise/sub/city/"+t).then((function(t){t.data.length?e.sub_cities=t.data:(e.form.sub_city="",e.sub_cities="",alert("No sub city under selected city")),o.hide(),console.log(t)})).catch((function(t){console.log(t),o.hide()}))},remove:function(t){console.log(this.form.products[t]),this.form.products.splice(t,1),this.products.splice(t,1),this.totalCalculation()},search_suggested_product:function(){var t=this;this.search_product_code.length>=2?axios.get("/api/search/seggested/product/for/order/"+this.search_product_code).then((function(e){console.log(e),"OK"==e.data.status&&(t.suggested_products=e.data.products)})):this.getSuggestingProducts()}},computed:{},components:{datePicker:c.a}},d=(o(730),o(1)),m=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"order"}}},[o("i",{staticClass:"fa fa-arrow-left"})]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)]),t._v(" "),o("section",{staticClass:"content"},[o("form",{attrs:{id:"searchProductform"},on:{submit:function(e){return e.preventDefault(),t.searchProduct(e)}}}),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.add(e)},keydown:function(e){return t.form.onKeydown(e)}}},[o("div",{staticClass:"row justify-content-center"},[t.errors.length?o("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[o("ul",t._l(t.errors,(function(e){return o("div",[o("li",[t._v(t._s(e))]),t._v(" "),o("br")])})),0)]):t._e(),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"box box-primary"},[t._m(2),t._v(" "),o("div",{staticClass:"box-body"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Customer_mobile")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_mobile,expression:"form.customer_mobile"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_mobile")},attrs:{type:"text",name:"customer_mobile",autocomplete:"off",placeholder:"Enter customer 11 digit mobile number"},domProps:{value:t.form.customer_mobile},on:{keyup:t.searchCustomer,input:function(e){e.target.composing||t.$set(t.form,"customer_mobile",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_mobile"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_name,expression:"form.customer_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_name")},attrs:{type:"text",name:"name",autocomplete:"off",placeholder:"Name"},domProps:{value:t.form.customer_name},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_name",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_name"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.customer_address,expression:"form.customer_address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("customer_address")},attrs:{type:"text",name:"address",autocomplete:"off",placeholder:"address"},domProps:{value:t.form.customer_address},on:{input:function(e){e.target.composing||t.$set(t.form,"customer_address",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"customer_address"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"note"}},[t._v("Order Note")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",attrs:{type:"text",name:"note"},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("City")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.city_name,expression:"city_name"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.city_name},on:{keyup:t.citySearch,input:function(e){e.target.composing||(t.city_name=e.target.value)}}}),t._v(" "),o("ul",{staticClass:"list-group",attrs:{id:"city_name_container"}},t._l(t.cities,(function(e,r){return o("li",{key:r,staticClass:"list-group-item city_name",staticStyle:{cursor:"pointer"},on:{click:function(o){return t.selectCity(e)}}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])})),0)]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Sub City")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_city,expression:"form.sub_city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sub_city")},attrs:{name:"sub_city"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"sub_city",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",value:""}},[t._v("select sub city")]),t._v(" "),t._l(t.sub_cities,(function(e){return t.sub_cities.length>0?o("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")]):t._e()}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"sub_city"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Shipping_cost")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shipping_cost,expression:"form.shipping_cost"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("shipping_cost")},attrs:{type:"text",name:"shipping_cost"},domProps:{value:t.form.shipping_cost},on:{input:function(e){e.target.composing||t.$set(t.form,"shipping_cost",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"shipping_cost"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Courier")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.courier,expression:"form.courier"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("courier")},attrs:{name:"courier"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"courier",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("select courier")]),t._v(" "),t._l(t.couriers,(function(e){return o("option",{domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"courier"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Status")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",attrs:{name:"status"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"3"}},[t._v("Confirmed")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Pending")])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-8"},[o("div",{staticClass:"box box-success"},[t._m(3),t._v(" "),o("div",{staticClass:"box-body"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Scan Barcode || prodcut code")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.product_code,expression:"product_code"}],staticClass:"form-control",attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Enter Product Code",form:"searchProductform"},domProps:{value:t.product_code},on:{input:function(e){e.target.composing||(t.product_code=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(4),t._v(" "),t.products.length>0?o("tbody",[t._l(t.products,(function(e,r){return o("tr",{key:r},[o("td",{staticStyle:{width:"10px"}},[t._v(t._s(r))]),t._v(" "),o("td",[t._v("\n                            "+t._s(e.name+"-"+e.product_code)+"\n                            "),o("input",{attrs:{type:"hidden"},domProps:{value:e.id}})]),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].variant_id,expression:"form.products[index].variant_id"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.products[r],"variant_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:""}},[t._v("select variant")]),t._v(" "),t._l(e.variants,(function(r,s){return e.variants?o("option",{key:s,domProps:{value:r.variant.id}},[t._v("\n                                "+t._s(r.variant.name)+"\n                              ")]):t._e()}))],2)]),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].quantity,expression:"form.products[index].quantity"}],staticStyle:{width:"70px"},attrs:{type:"number"},domProps:{value:t.form.products[r].quantity},on:{keyup:function(e){return t.quantity(r)},change:function(e){return t.quantity(r)},input:function(e){e.target.composing||t.$set(t.form.products[r],"quantity",e.target.value)}}}),t._v(" "),o("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.stock))])]),t._v(" "),o("td",[3==t.form.order_type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.products[r].price,expression:"form.products[index].price"}],staticStyle:{width:"80px"},domProps:{value:t.form.products[r].price},on:{keyup:function(e){t.totalCalculation&&t.quantity(r)},input:function(e){e.target.composing||t.$set(t.form.products[r],"price",e.target.value)}}}):o("strong",[t._v(t._s(e.price))])]),t._v(" "),o("td",[t._v(t._s(t.form.products[r].total))]),t._v(" "),o("td",[o("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.remove(r)}}},[o("i",{staticClass:"fa fa-trash"})])])])})),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Total Amount")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.total))])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Discount")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:t.form.discount},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}})])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Paid")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paid,expression:"form.paid"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:t.form.paid},on:{keyup:t.totalCalculation,input:function(e){e.target.composing||t.$set(t.form,"paid",e.target.value)}}})])]):t._e(),t._v(" "),o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Paid By")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paid_by,expression:"form.paid_by"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paid_by",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"select one",disabled:""}},[t._v("\n                                  select one\n                                ")]),t._v(" "),t._l(t.balance,(function(e,r){return o("option",{key:r,domProps:{value:e.id}},[t._v("\n                                  "+t._s(e.name)+"\n                                ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"paid_by"}})],1)])]),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Shipping_charge")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.shipping_cost))])]):t._e(),t._v(" "),t.products.length>0?o("tr",[o("td",{attrs:{colspan:"4"}}),t._v(" "),o("td",[t._v("Amoutn due")]),t._v(" "),o("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.due))])]):t._e(),t._v(" "),o("button",{staticClass:"btn btn-success",staticStyle:{"margin-top":"12px"},attrs:{type:"submit",disabled:t.form.busy}},[t._v("\n                          Submit\n                        ")])],2):t._e()])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-success btn-sm",attrs:{href:"#sg-product"}},[e("i",{staticClass:"fa fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Order")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Customer information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Product information")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("Product")]),t._v(" "),o("th",[t._v("Variant")]),t._v(" "),o("th",[t._v("Quantity")]),t._v(" "),o("th",[t._v("Price")]),t._v(" "),o("th",[t._v("total")]),t._v(" "),o("th",[t._v("Remove")])])])}],!1,null,"5b49f516",null);e.default=m.exports},194:function(t,e,o){var r=o(731);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(5)(r,s);r.locals&&(t.exports=r.locals)},730:function(t,e,o){"use strict";var r=o(194);o.n(r).a},731:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"\n.mb-2[data-v-5b49f516] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-5b49f516] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.fa-search[data-v-5b49f516] {\r\n  height: 33px;\r\n  width: 60px;\r\n  margin-left: -25px;\n}\n.autocomplete li[data-v-5b49f516]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\n.suggest-product img[data-v-5b49f516] {\r\n  width: 120px;\r\n  height: 120px;\n}\n.suggest-product[data-v-5b49f516] {\r\n  background: #ecf0f5;\r\n  text-align: center;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 1px 2px #ddd;\n}\n.add-item.text-center[data-v-5b49f516] {\r\n  background: #fff;\r\n  width: block;\r\n  padding: 6px 5px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  margin-bottom: 18px;\n}\n.form-group.product-search[data-v-5b49f516] {\r\n  width: 80%;\r\n  left: 10%;\r\n  position: relative;\n}\n.display_city[data-v-5b49f516] {\r\n  display: none;\n}\r\n",""])}}]);