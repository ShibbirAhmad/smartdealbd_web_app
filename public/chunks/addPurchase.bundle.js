(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1264:function(t,e,a){"use strict";a.r(e);var o=a(2),i=a.n(o),s=a(0),r=a(16),n=a.n(r);i.a.component(s.HasError.name,s.HasError);var c={name:"Add",created:function(){this.pDate(),this.supplierList(),this.balanceList()},data:function(){return{purchase_date:"",error:"",loading:!0,status:1,options:{format:"YYYY-MM-DD",useCurrent:!1},supplier_id:"",productItems:[],automcomplete:!1,search:"",suppliers:"",invoice_no:"",validationPreview:!0,submitValidation:!0,products:[],preview_products:{product_name:"",product_id:"",product_code:"",price:"",quantity:"",total:"",alert_quantity:""},AmountTotal:0,paid:0,due:0,purchase_type:1,paid_by:"select one",balance:"",memo:""}},methods:{balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(e){t.balance=e.data.balance}))},add:function(){var t=this;"string"!=typeof this.paid_by?(this.$Progress.start(),axios.post("/add/purchase",{purchase_date:this.purchase_date,supplier_id:this.supplier_id,total:this.AmountTotal,paid:this.paid,invoice_no:this.invoice_no,products:this.products,status:this.status,paid_by:this.paid_by,memo:this.memo}).then((function(e){t.$Progress.finish(),console.log(e),"SUCCESS"==e.data.status?(console.log(e),t.$router.push({name:"purchase"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="dont saved data. please try again"})).catch((function(e){t.$Progress.finish(),console.log(e),t.error="some thing want to wrong"}))):alert("selecet any balance")},supplierList:function(){var t=this;axios.get("/others",{params:{type:1}}).then((function(e){console.log(e),"SUCCESS"==e.data.status&&(t.suppliers=e.data.suppliers,t.loading=!1)})).catch((function(t){console.log(t)}))},autocompleteSearh:function(){var t=this,e=this.search.length;this.validation(),e>3?(axios.get("/search/product/"+this.search).then((function(e){if("SUCCESS"==e.data.status){var a=e.data.products.data.length,o=0;if(a>=1)for(t.productItems=[];o<a;o++)t.productItems.push(e.data.products.data[o]);else{t.productItems=[],t.productItems.push({name:"No product found",product_code:"404"})}}})).catch((function(t){console.log(t)})),this.automcomplete=!0):this.automcomplete=!1},selectedProduct:function(t){if("No product found"==t.name)return alert("please enter product valid code or name"),void this.validation();this.automcomplete=!1,this.preview_products.product_name=t.name,this.preview_products.product_id=t.id,this.preview_products.product_code=t.product_code,this.search=t.product_code+"-"+t.name,this.validation()},total:function(){if(this.preview_products.price.length<=0)return this.$toasted.show("sorry! price filed fille up first",{type:"error",position:"top-center",duration:5e3}),this.$refs.price.focus(),void this.validation();var t=this.preview_products.price,e=this.preview_products.quantity;e<=1&&(e=1);var a=t*e;this.preview_products.total=a,this.validation()},productAdd:function(){this.products.push(this.preview_products),this.preview_products={product_id:"",product_code:"",product_name:"",price:"",total:"",quantity:"",alert_quantity:""},this.search="",this.totalAmount(),this.amountDue(),this.validation()},validation:function(){this.preview_products.price.length>0&&this.preview_products.quantity.length>0&&this.invoice_no.length>0&&this.preview_products.product_id&&this.search.length>0&&this.supplier_id?this.validationPreview=!1:this.validationPreview=!0,this.products.length>0&&this.invoice_no.length>0&&this.supplier_id?this.submitValidation=!1:this.submitValidation=!0},totalAmount:function(){for(var t=0,e=0,a=this.products;t<a.length;t++)e+=a[t].price*a[t].quantity;this.AmountTotal=e,this.due=e},amountDue:function(){var t=this.paid,e=this.AmountTotal-t;this.due=e},cancel:function(t){this.products.splice(t,1),this.totalAmount(),this.amountDue(),this.validation()},pDate:function(){var t=new Date,e=t.getMonth()+1,a=t.getDate(),o=t.getFullYear()+"-"+((""+e).length<2?"0":"")+e+"-"+((""+a).length<2?"0":"")+a;this.purchase_date=o},uploadImage:function(t){var e=this,a=t.target.files[0];if(!a.type.match("image.*"))return Swal.fire({type:"warning",text:"this is not any kind of image"}),this.memo="",void this.validation();var o=new FileReader;o.onload=function(t){e.memo=t.target.result,e.validation()},o.readAsDataURL(a)}},computed:{},components:{datePicker:n.a},watch:{purchase_type:function(t){var e=this;2==t&&Swal.fire({title:"Enter CM Rate 1/pieces",input:"text"}).then((function(t){if(t.value){var a=0;console.log(e.products),console.log(e.products.length),e.products.length>0&&e.products.forEach((function(t){a+=parseInt(t.quantity)})),e.AmountTotal=parseInt(a)*parseInt(t.value),e.due=parseInt(a)*parseInt(t.value)-parseInt(e.paid)}}))}}},l=(a(710),a(1)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"purchase"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-10 col-lg-offset-1"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t.error?a("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Purchase_date")]),t._v(" "),a("date-picker",{attrs:{autocomplete:"off",config:t.options},model:{value:t.purchase_date,callback:function(e){t.purchase_date=e},expression:"purchase_date"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Invoice_no")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.invoice_no,expression:"invoice_no"}],staticClass:"form-control",attrs:{placeholder:"invoice",autofocus:""},domProps:{value:t.invoice_no},on:{keyup:t.validation,input:function(e){e.target.composing||(t.invoice_no=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Supplier")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.supplier_id,expression:"supplier_id"}],staticClass:"form-control",attrs:{name:"supplier"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.supplier_id=e.target.multiple?a:a[0]},t.validation]}},[a("option",{attrs:{value:""}},[t._v("Select Supplier")]),t._v(" "),t._l(t.suppliers,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                        "+t._s(e.company_name)+"\n                      ")])}))],2)])]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Document/Memo")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",name:"document"},on:{change:t.uploadImage}})])])]),t._v(" "),a("div",{staticClass:"product_information"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Product_code")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{autocomplete:"off",name:"product",maxlength:"4",placeholder:"type product code"},domProps:{value:t.search},on:{keyup:t.autocompleteSearh,input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.automcomplete,expression:"automcomplete"}],staticClass:"autocomplete"},[a("ul",{staticClass:"list-group"},t._l(t.productItems,(function(e){return a("li",{staticClass:"list-group-item",on:{click:function(a){return t.selectedProduct(e)}}},[t._v("\n                            "+t._s(e.product_code+"-"+e.name)+"\n                          ")])})),0)])])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Purchase_price")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.price,expression:"preview_products.price"}],ref:"price",staticClass:"form-control",attrs:{type:"text",name:"price",autocomplete:"off",placeholder:"price"},domProps:{value:t.preview_products.price},on:{keyup:t.total,input:function(e){e.target.composing||t.$set(t.preview_products,"price",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Quantity")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.quantity,expression:"preview_products.quantity"}],staticClass:"form-control",attrs:{type:"text",name:"quantity",autocomplete:"off",placeholder:"quantity"},domProps:{value:t.preview_products.quantity},on:{keyup:t.total,input:function(e){e.target.composing||t.$set(t.preview_products,"quantity",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-2"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Total")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.total,expression:"preview_products.total"}],staticClass:"form-control",attrs:{type:"text",name:"total",autocomplete:"off",placeholder:"total",readonly:""},domProps:{value:t.preview_products.total},on:{input:function(e){e.target.composing||t.$set(t.preview_products,"total",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-1"},[a("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-top":"25px"},attrs:{disabled:t.validationPreview},on:{click:t.productAdd}},[t._v("\n                      Add\n                    ")])])])]),t._v(" "),t.products.length>0?a("div",{staticClass:"product_preview"},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",[t._l(t.products.slice().reverse(),(function(e,o){return a("tr",[a("td",[t._v(t._s(o+1))]),t._v(" "),a("td",[t._v(t._s(e.product_code+"-"+e.product_name))]),t._v(" "),a("td",[t._v(t._s(e.price))]),t._v(" "),a("td",[t._v(t._s(e.quantity))]),t._v(" "),a("td",[t._v(t._s(e.total))]),t._v(" "),a("td",{staticClass:"text-danger",on:{click:function(e){return t.cancel(o)}}},[a("i",{staticClass:"fa fa-trash"})])])})),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}}),t._v(" "),a("td",[t._v("purchase_type")]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.purchase_type,expression:"purchase_type"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.purchase_type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1"}},[t._v("FOB")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("CM")])])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}}),t._v(" "),a("td",[t._v("Total Amount")]),t._v(" "),a("td",[t._v(t._s(this.AmountTotal))])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}}),t._v(" "),a("td",[t._v("Paid")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paid,expression:"paid"}],staticClass:"form-control",attrs:{placeholder:"Paid"},domProps:{value:t.paid},on:{keyup:t.amountDue,input:function(e){e.target.composing||(t.paid=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}}),t._v(" "),a("td",[t._v("Paid By")]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paid_by,expression:"paid_by"}],staticClass:"form-control",attrs:{name:"debit_from",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.paid_by=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(e,o){return a("option",{key:o,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}}),t._v(" "),a("td",[t._v("Amount Due")]),t._v(" "),a("td",[t._v(t._s(t.due))])])],2)])]):t._e(),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.submitValidation,type:"submit"},on:{click:function(e){return t.add()}}},[t._v("\n                Submit\n              ")])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Purchase")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Add Purchase")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Product")]),t._v(" "),a("th",[t._v("price")]),t._v(" "),a("th",[t._v("quantity")]),t._v(" "),a("th",[t._v("total")]),t._v(" "),a("th",[t._v("X")])])])}],!1,null,"41373dd5",null);e.default=u.exports},183:function(t,e,a){var o=a(711);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(o,i);o.locals&&(t.exports=o.locals)},710:function(t,e,a){"use strict";var o=a(183);a.n(o).a},711:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-41373dd5] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-41373dd5] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-41373dd5]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n",""])}}]);