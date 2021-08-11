(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1204:function(t,e,s){"use strict";s.r(e);var a={created:function(){this.supplierList()},data:function(){return{suppliers:{},loading:!0,basePath:"storage/",search:"",item:""}},methods:{supplierList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/list/supplier?page="+e,{params:{type:2}}).then((function(e){console.log(e),"SUCCESS"==e.data.status&&(t.suppliers=e.data.suppliers,t.loading=!1)})).catch((function(t){console.log(t)}))},searchSupplier:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/search/supplier/"+this.search+"?page="+e).then((function(e){console.log(e),"OK"==e.data.status?t.suppliers=e.data.suppliers:t.supplierList()})).catch()},deActive:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't de-active this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/deActive/supplier/"+t.id).then((function(t){"SUCCESS"==t.data.status?(e.supplierList(),e.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):e.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/active/supplier/"+t.id).then((function(t){"SUCCESS"==t.data.status?(e.supplierList(),e.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):e.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))}}},o=s(1),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"AddFabricsSupplier"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row mt-2"},[t._m(1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name, address or phone "},domProps:{value:t.search},on:{keyup:t.searchSupplier,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{id:""},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.supplierList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),s("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),s("option",{attrs:{value:"50"}},[t._v("50")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-striped  table-hover table-bordered"},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.suppliers.data,(function(e,a){return s("tr",{key:a},[s("td",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[s("router-link",{attrs:{to:{name:"SupplierAmount",params:{id:e.id}}}},[t._v("\n                          "+t._s(e.company_name)+"\n                        ")])],1),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[t._v(t._s(e.address))]),t._v(" "),s("td",[1==e.status?s("span",{staticClass:"badge"},[t._v("Active")]):s("span",{staticClass:"badge text-bold"},[t._v("De-Active")])])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.suppliers},on:{"pagination-change-page":t.supplierList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing "),s("strong",[t._v(t._s(t.suppliers.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.suppliers.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.suppliers.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Suppliers ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("h3",{staticClass:"box-title"},[this._v("Fabrics Suppliers table")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("company_name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("phone")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("status")])])])}],!1,null,"566dd2e8",null);e.default=i.exports}}]);