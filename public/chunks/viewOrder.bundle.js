(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1269:function(t,n,a){"use strict";a.r(n);a(0);var e=a(15),r={created:function(){this.getDetails(),this.$store.dispatch("general_setting")},data:function(){return{order:"",items:"",loading:!0,base_url:this.$store.state.image_base_link,isLoading:!0,fullPage:!0}},methods:{getDetails:function(){var t=this;axios.get("/order/view/"+this.$route.params.id).then((function(n){console.log(n),"SUCCESS"==n.data.status?(t.order=n.data.order,t.items=n.data.items,t.isLoading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(n){console.log(n),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},print:function(t){window.open("/order/invoice/print/"+t,"_SELF")},back:function(){window.history.back()},formateDate:function(t){var n=new Date(t),a=n.getMonth(),e=n.getDate(),r=n.getFullYear();return((""+e).length<2?"0":"")+e+"-"+((""+a).length<2?"0":"")+a+"-"+r},updateResellerCommision:function(){var t=this,n=document.getElementById("reseller_order_commision").value;if(parseInt(n)<=0)return console.log(n),void alert("Commison can not be equal or smaller 0");axios.get("/update/commision/reseller/order/"+this.order.id,{params:{commission:n}}).then((function(n){n.data&&t.$toasted.show(n.data,{type:"info",position:"top-center",duration:5e3})}))},itemReturn:function(t){var n=this;confirm("are you confirm")&&(this.isLoading=!0,axios.get("/order/return/item/"+t).then((function(t){console.log(t),"OK"==t.data.success?(n.$toasted.show(t.data.message,{type:"info",position:"top-center",duration:5e3}),n.getDetails()):n.$toasted.show(t.data,{type:"error",position:"top-center",duration:5e3})})).catch((function(t){n.isLoading=!1})))}},components:{Loading:a.n(e).a},computed:{general_setting:function(){return this.$store.getters.general_setting}}},s=(a(734),a(1)),i=Object(s.a)(r,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(n){t.isLoading=n}}}),t._v(" "),a("section",{staticClass:"content-header"}),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-11"},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header"}),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row print_info_container"},[a("div",{staticClass:"col-md-1 col-sm-1"}),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-3 description"},[a("div",[a("p",[t._v("Name: "+t._s(t.order.customer_name))]),t._v(" "),a("p",[t._v("\n                        Mobile No:\n                        "),a("strong",[t._v(" "+t._s(t.order.customer_phone)+" ")])]),t._v(" "),a("p",{staticClass:"address_line"},[t._v("\n                        Address: "+t._s(t.order.customer_address)+"\n                      ")]),t._v(" "),a("p",[t._v("\n                        Invoice No: "),a("strong",[t._v(" "+t._s(t.order.invoice_no)+" ")])])])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-3 logo"},[a("img",{staticClass:"m_logo",attrs:{src:t.base_url+t.general_setting.logo,alt:"logo"}})]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 address",staticStyle:{"margin-left":"27px"}},[a("p",{staticClass:"address_line",domProps:{innerHTML:t._s(t.general_setting.invoice_address_details)}}),t._v(" "),a("p",[t._v("\n                      Date:"),a("strong",[t._v(" "+t._s(t.order.created_at))])]),t._v(" "),4==t.order.order_type&&Object.keys(t.order.reseller_order_details).length?a("div",{staticClass:"form-group"}):t._e()]),t._v(" "),a("div",{staticClass:"col-md-1 col-sm-1"})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-1"}),t._v(" "),t.isLoading?a("h1",[a("i",{staticClass:"fa fa-spin fa-spinner"})]):a("div",{staticClass:"col-lg-10"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Product")]),t._v(" "),a("th",[t._v("Image")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th",[t._v("P_code")]),t._v(" "),a("th",[t._v("Qty")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("Total")]),t._v(" "),4==t.order.status?a("th"):t._e()])]),t._v(" "),a("tbody",[t._l(t.items,(function(n,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v("\n                            "+t._s(n.product.name)+"\n                            "),4==t.order.status||5==t.order.status?a("div",[2==n.status?a("small",{staticClass:"badge badge-danger"},[t._v("Returned")]):t._e()]):t._e()]),t._v(" "),a("td",[n.product.product_image.length>0?a("img",{staticStyle:{width:"60px",height:"50px"},attrs:{src:t.base_url+n.product.product_image[0].product_image}}):t._e()]),t._v(" "),a("td",[a("strong",[n.variant?a("b",[t._v("["+t._s(n.variant.name)+"]")]):a("b",[t._v("-")])])]),t._v(" "),a("td",[t._v(t._s(n.product.product_code))]),t._v(" "),a("td",[t._v(t._s(n.quantity))]),t._v(" "),a("td",[t._v(t._s(n.price))]),t._v(" "),a("td",[t._v(t._s(n.quantity*n.price))]),t._v(" "),4==t.order.status&&1==n.status?a("td",[a("span",{staticClass:"badge badge-danger",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.itemReturn(n.id)}}},[t._v("Return")])]):t._e()])})),t._v(" "),a("tr",[a("td",{attrs:{colspan:"6"}}),t._v(" "),t._m(0),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.total))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"6"}}),t._v(" "),t._m(1),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.discount))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"6"}}),t._v(" "),t._m(2),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.paid))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"6"}}),t._v(" "),t._m(3),t._v(" "),a("td",[a("b",[t._v(t._s(t.order.shipping_cost))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"6"}}),t._v(" "),t._m(4),t._v(" "),a("td",[a("b",[t._v(t._s(parseInt(t.order.total)-(parseInt(t.order.discount)+parseInt(t.order.paid))+parseInt(t.order.shipping_cost)))])])])],2)])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2",staticStyle:{"margin-left":"27px","text-align":"center"}},[null!=t.order.approved_by?a("h6",{staticStyle:{"margin-bottom":"0"}},[t._v("\n                      "+t._s(t.order.approved_by.name)+"\n                    ")]):t._e(),t._v(" "),t._m(5)])]),t._v(" "),a("div",{staticClass:"row bottomBtn"},[a("button",{staticClass:"btn btn-success print",on:{click:function(n){return t.print(t.order.id)}}},[a("i",{staticClass:"fa fa-print"})]),t._v(" "),a("button",{staticClass:"btn btn-warning back",on:{click:t.back}},[a("i",{staticClass:"fa fa-arrow-circle-right"})]),t._v(" "),5!=t.order.status&&4!=t.order.status?a("router-link",{staticClass:"btn btn-success back",attrs:{to:{name:"orderEdit",params:{id:t.order.id}}}},[a("i",{staticClass:"fa fa-edit"})]):t._e()],1)])])])])])])],1)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("b",[this._v("Sub Total")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("b",[this._v("Discount")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("b",[this._v("Paid")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("b",[this._v("Shiiping_cost")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("b",[this._v("Amount Due")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h5",{staticStyle:{"border-top":"2px dotted #000","margin-top":"25"}},[n("strong",[this._v("Approved By")])])}],!1,null,"87243ffc",null);n.default=i.exports},196:function(t,n,a){var e=a(735);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,r);e.locals&&(t.exports=e.locals)},734:function(t,n,a){"use strict";var e=a(196);a.n(e).a},735:function(t,n,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-87243ffc] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-87243ffc] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-87243ffc] {\r\n  margin-left: 27px;\r\n  margin-top: -12px;\n}\n.address_line[data-v-87243ffc] {\r\n  line-height: 15px;\n}\np[data-v-87243ffc] {\r\n  line-height: 10px;\r\n  font-size: 14px;\n}\n.m_logo[data-v-87243ffc] {\r\n  margin-left: -11px;\r\n  margin-top: -21px;\r\n  height: 80px;\n}\n.m_title[data-v-87243ffc] {\r\n  margin-top: -15px;\r\n  font-size: 11px;\n}\ntable[data-v-87243ffc] {\r\n  margin-top: 20px;\n}\n@media print {\n*[data-v-87243ffc] {\r\n    margin: 0;\r\n    padding: 0;\n}\ntable[data-v-87243ffc] {\r\n    margin-top: 20px !important;\n}\n.m_title[data-v-87243ffc] {\r\n    margin-top: -15px;\r\n    font-size: 10px;\n}\n.navbar[data-v-87243ffc] {\r\n    display: none;\n}\n.m_logo[data-v-87243ffc] {\r\n    height: 80px;\n}\n.print_info_container[data-v-87243ffc] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px !important;\r\n    margin-top: 20px;\n}\n.col-sm-1[data-v-87243ffc] {\r\n    display: none;\n}\n.address_line[data-v-87243ffc] {\r\n    line-height: 15px;\n}\np[data-v-87243ffc] {\r\n    line-height: 16px;\r\n    font-size: 14px;\n}\n.logo[data-v-87243ffc] {\r\n    width: 40% !important;\n}\n.description[data-v-87243ffc] {\r\n    width: 40% !important;\n}\n.col-lg-2[data-v-87243ffc] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-87243ffc] {\r\n    display: block;\n}\n.box[data-v-87243ffc] {\r\n    border-top: none;\n}\nfooter[data-v-87243ffc] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-87243ffc] {\r\n    display: none;\n}\n}\nsmall.badge.badge-danger[data-v-87243ffc] {\r\n  display: flex;\r\n  background: red;\r\n  width: 63px;\r\n  flex-direction: row;\n}\nsmall.badge.badge-success[data-v-87243ffc] {\r\n  display: flex;\r\n  background: green;\r\n  width: 63px;\n}\r\n",""])}}]);