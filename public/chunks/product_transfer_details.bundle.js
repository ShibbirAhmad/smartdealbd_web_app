(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1327:function(t,n,a){"use strict";a.r(n);var r={created:function(){this.getTransactionDetails()},data:function(){return{transaction:"",transaction_items:"",base_url:this.$store.state.image_base_link}},methods:{getTransactionDetails:function(){var t=this;axios.get("/api/get/product/transfer/details/"+this.$route.params.id).then((function(n){console.log(n),"OK"==n.data.status&&(t.transaction=n.data.transaction,t.transaction_items=n.data.transaction_items)}))},print:function(t){window.open("/transaction/invoice/print/"+t,"_SELF")}}},i=(a(834),a(1)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),a("br"),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-11 col-md-11 "},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header"}),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row print_info_container"},[a("div",{staticClass:"col-md-3 col-sm-3 description"},[a("div",[a("p",[t._v(" Showroom : "),a("strong",[t._v("  "+t._s(t.transaction.showroom?t.transaction.showroom.name:"")+" ")])]),t._v(" "),a("p",[t._v("\n                      Mobile No: "),a("strong",[t._v(" "+t._s(t.transaction.showroom?t.transaction.showroom.contact_number:"")+" ")])]),t._v(" "),a("p",{staticClass:"address_line"},[t._v("\n                      Address:\n                      "),a("span",[t._v("\n                        "+t._s(t.transaction.showroom?t.transaction.showroom.address:"")+"\n                      ")])]),t._v(" "),a("p",[t._v("Invoice No: "),a("strong",[t._v(" "+t._s(t.transaction.invoice_no)+" ")])])])]),t._v(" "),a("div",{staticClass:"col-md-1 col-sm-1"})]),t._v(" "),a("table",{staticClass:"table table-striped table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.transaction_items,(function(n,r){return a("tr",{key:r},[a("td",[t._v(t._s(r+1)+"\n\n                          ")]),t._v(" "),a("td",[t._v("\n                            "+t._s(n.product.name)+" -"+t._s(n.product.product_code)+"\n                          ")]),t._v(" "),a("td",[n.product.product_image.length>0?a("img",{staticStyle:{width:"60px",height:"50px"},attrs:{src:t.base_url+n.product.product_image[0].product_image}}):t._e()]),t._v(" "),a("td",[t._v(t._s(n.quantity))]),t._v(" "),a("td",[t._v(" ৳ "+t._s(n.purchase_price))]),t._v(" "),a("td",[t._v(" ৳ "+t._s(n.total))])])})),0)]),t._v(" "),a("div",{staticClass:"row bottomBtn"},[a("router-link",{staticClass:"btn btn-warning back",attrs:{to:{name:"product_transfer"}}},[a("i",{staticClass:"fa fa-arrow-circle-left"})])],1)])])])])])])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"content-header"},[n("ol",{staticClass:"breadcrumb"},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),n("li",{staticClass:"active"},[this._v("product transfer details")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Product")]),t._v(" "),a("th",[t._v("Image")]),t._v(" "),a("th",[t._v("Qty")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("Total")])])])}],!1,null,"03318a89",null);n.default=o.exports},247:function(t,n,a){var r=a(835);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,i);r.locals&&(t.exports=r.locals)},834:function(t,n,a){"use strict";var r=a(247);a.n(r).a},835:function(t,n,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-03318a89] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-03318a89] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-03318a89]{\r\n    margin-left: 27px;\r\n    margin-top: -12px;\n}\n.address_line[data-v-03318a89]{\r\n  line-height: 15px;\n}\np[data-v-03318a89] {\r\n  line-height: 10px;\r\n  font-size:14px;\n}\n.m_logo[data-v-03318a89]{\r\n    margin-left: -11px;\r\n    margin-top: -21px;\r\n    height: 80px;\n}\n.m_title[data-v-03318a89]{\r\n  margin-top:-15px;\r\n  font-size: 11px;\n}\ntable[data-v-03318a89] {\r\n  margin-top:20px;\n}\n@media print {\n*[data-v-03318a89]{\r\n    margin: 0;\r\n    padding: 0;\n}\ntable[data-v-03318a89] {\r\n  margin-top:20px !important;\n}\n.m_title[data-v-03318a89]{\r\n    margin-top:-15px;\r\n   font-size: 10px;\n}\n.navbar[data-v-03318a89] {\r\n    display: none;\n}\n.m_logo[data-v-03318a89]{\r\n    height: 80px;\n}\n.print_info_container[data-v-03318a89]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px  !important;\r\n    margin-top: 20px;\n}\n.col-sm-1[data-v-03318a89]{\r\n    display: none;\n}\n.address_line[data-v-03318a89]{\r\n  line-height: 15px;\n}\np[data-v-03318a89]{\r\n    line-height: 16px;\r\n    font-size: 14px;\n}\n.logo[data-v-03318a89]{\r\n      width: 40% !important;\n}\n.description[data-v-03318a89]{\r\n   width: 40%  !important;\n}\n.col-lg-2[data-v-03318a89] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-03318a89] {\r\n    display: block;\n}\n.box[data-v-03318a89] {\r\n    border-top: none;\n}\nfooter[data-v-03318a89] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-03318a89] {\r\n    display: none;\n}\n}\nsmall.badge.badge-danger[data-v-03318a89] {\r\n    display: flex;\r\n    background: red;\r\n    width: 63px;\r\n    flex-direction: row;\n}\nsmall.badge.badge-success[data-v-03318a89] {\r\n    display: flex;\r\n    background: green;\r\n    width: 63px;\n}\r\n",""])}}]);