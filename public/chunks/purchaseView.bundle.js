(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1262:function(t,a,s){"use strict";s.r(a);var n=s(2),e=s.n(n),i=s(0);e.a.component(i.HasError.name,i.HasError);var r={name:"Purchase",created:function(){this.purchaseDetails()},data:function(){return{purchase:"",details:"",error:"",loading:!0,merchant:"",base_url:this.$store.state.image_base_link}},methods:{purchaseDetails:function(){var t=this;axios.get("/details/purchase/"+this.$route.params.id).then((function(a){console.log(a.data.details),"SUCCESS"==a.data.status?(t.purchase=a.data.purchase,t.details=a.data.details,t.merchant=a.data.merchant,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(a){console.log(a),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},print:function(){window.print()},back:function(){window.history.back()},totalQuantity:function(t){console.log(t);var a=0;return t.forEach((function(t){a+=parseInt(t.insert_quantity)})),a}},computed:{}},o=(s(735),s(1)),c=Object(o.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"}),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-10"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header"}),t._v(" "),s("div",{staticClass:"box-body"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-1"}),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 invoice-body",staticStyle:{"margin-left":"27px"}},[s("p",{staticClass:"text-bold"},[t._v("Suplier_name: "+t._s(t.merchant.name))]),t._v(" "),s("p",{staticClass:"text-bold"},[t._v("Suplier_company: "+t._s(t.merchant.company_name))]),t._v(" "),s("p",{staticClass:"text-bold"},[t._v("Suplier_phone: "+t._s(t.merchant.phone))]),t._v(" "),s("p",{staticClass:"text-bold"},[t._v("Address: "+t._s(t.merchant.address))]),t._v(" "),s("p",{staticClass:"text-bold"},[t._v("\n                      Invoice_no:\n                      "),s("strong",[t._v(t._s(t.purchase.invoice_no))])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-1"}),t._v(" "),t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):s("div",{staticClass:"col-lg-8"},[s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",[t._l(t.details,(function(a,n){return s("tr",{key:n},[s("td",[t._v(t._s(n+1))]),t._v(" "),s("td",[t._v("\n                            "+t._s(a.product.name)+"\n\n                          ")]),t._v(" "),s("td",[t._v(t._s(a.product.product_code))]),t._v(" "),s("td",[t._v(t._s(a.insert_quantity))]),t._v(" "),s("td",[t._v(t._s(a.price))]),t._v(" "),s("td",[t._v(t._s(a.insert_quantity*a.price))])])})),t._v(" "),s("tr",[s("td",{attrs:{colspan:"3"}}),t._v(" "),s("td",[s("strong",[t._v("="+t._s(t.totalQuantity(t.details)))])]),t._v(" "),t._m(2),t._v(" "),s("td",[s("b",[t._v(t._s(t.purchase.total))])])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(3),t._v(" "),s("td",[s("b",[t._v(t._s(t.purchase.paid))])])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"4"}}),t._v(" "),t._m(4),t._v(" "),s("td",[s("b",[t._v(t._s(t.purchase.total-t.purchase.paid))])])])],2)])])]),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"bottomBtn"},[s("button",{staticClass:"btn btn-warning back",on:{click:t.back}},[s("i",{staticClass:"fa fa-arrow-circle-right"})])])])])])]),t._v(" "),t.purchase.file?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("img",{staticClass:"file_memo",attrs:{src:t.base_url+t.purchase.file,alt:""}}),t._v(" "),s("a",{staticClass:"btn btn-success",attrs:{href:t.base_url+t.purchase.file,download:""}},[t._v("Download")])])]):t._e()])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"invoice-header"},[a("div",{staticClass:"address"},[a("h3",[a("strong",[this._v("Purchase Invoice")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Product")]),t._v(" "),s("th",[t._v("Product_code")]),t._v(" "),s("th",[t._v("quntity")]),t._v(" "),s("th",[t._v("price ৳")]),t._v(" "),s("th",[t._v("total ৳")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("b",[this._v("Total Amount")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("b",[this._v("Paid")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("b",[this._v("Amount Due")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2",staticStyle:{"margin-left":"27px","text-align":"center"}},[a("h5",{staticStyle:{"border-top":"2px dotted #000","margin-top":"30px"}},[a("strong",[this._v("Accounts")])])])])}],!1,null,"c8763d7e",null);a.default=c.exports},198:function(t,a,s){var n=s(736);"string"==typeof n&&(n=[[t.i,n,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s(5)(n,e);n.locals&&(t.exports=n.locals)},735:function(t,a,s){"use strict";var n=s(198);s.n(n).a},736:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.mb-2[data-v-c8763d7e] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-c8763d7e] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n@media print {\n.navbar[data-v-c8763d7e] {\r\n    display: none;\n}\n.col-lg-2[data-v-c8763d7e] {\r\n    width: 20% !important;\n}\n.invoice-header[data-v-c8763d7e] {\r\n    display: block;\n}\n.box[data-v-c8763d7e] {\r\n    border-top: none;\n}\nfooter[data-v-c8763d7e] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-c8763d7e] {\r\n    display: none;\n}\n}\n.file_memo[data-v-c8763d7e]{\r\n  max-width:400px;\r\n  max-height: 400px;\n}\r\n",""])}}]);