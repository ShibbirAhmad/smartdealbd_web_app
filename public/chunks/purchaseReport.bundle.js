(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1297:function(t,a,s){"use strict";s.r(a);var e=s(14),i=(s(0),{components:{Index:e.default},created:function(){this.filter()},data:function(){return{loading:!0,start_date:"",end_date:"",purchase_items:"",item:50,options:{format:"YYYY-MM-DD",useCurrent:!1}}},methods:{filter:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/purchase/report?page="+a,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item}}).then((function(a){console.log(a),t.$Progress.finish(),a.data&&(t.purchase_items=a.data,t.loading=!1)})).catch((function(t){console.log(t)}))},refresh:function(){this.$Progress.start(),this.start_date="",this.end_date="",this.filter(),this.$Progress.finish()},totalAmount:function(){var t=0;return this.purchase_items.data.forEach((function(a){t+=parseInt(a.total)})),t},ProductCount:function(t){var a=0;return t.forEach((function(t){a+=parseInt(t.insert_quantity)})),a},totalproductQuantity:function(){var t=0;return this.purchase_items.data.forEach((function(a){a.purchase_items.forEach((function(a){t+=parseInt(a.insert_quantity)}))})),t},downloadPDF:function(){var t="All",a="All";this.start_date.length>0&&(t=this.start_date),this.end_date.length>0&&(a=this.end_date),window.open("/api/get/purchase/pdf/"+t+"/"+a,"_blank")}},watch:{start_date:function(t){this.filter()},end_date:function(t){this.filter()}}}),n=(s(780),s(1)),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-10"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row",staticStyle:{"margin-bottom":"3px"}},[s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=a.target.multiple?s:s[0]},t.filter]}},[s("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),s("option",{attrs:{value:"100"}},[t._v("100")]),t._v(" "),s("option",{attrs:{value:"200"}},[t._v("200")]),t._v(" "),s("option",{attrs:{value:"300"}},[t._v("300")]),t._v(" "),s("option",{attrs:{value:"400"}},[t._v("400")]),t._v(" "),s("option",{attrs:{value:"500"}},[t._v("500")]),t._v(" "),s("option",{attrs:{value:"1000"}},[t._v("1000")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("button",{staticClass:"btn btn-info ",on:{click:t.downloadPDF}},[s("i",{staticClass:"fa fa-download"}),t._v("Download PDF")])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"start-date",config:t.options},model:{value:t.start_date,callback:function(a){t.start_date=a},expression:"start_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-5",staticStyle:{"margin-left":"-20px"}},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"end-date",config:t.options},model:{value:t.end_date,callback:function(a){t.end_date=a},expression:"end_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("button",{staticClass:"btn btn-primary",on:{click:t.refresh}},[s("i",{staticClass:"fa fa-refresh"})])])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-striped"},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.purchase_items.data,(function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v("\n                        "+t._s(a.supplier.company_name?a.supplier.company_name:"")+"\n                      ")]),t._v(" "),s("td",[s("a",{attrs:{href:"/backend/sale/view/"+a.id,target:"_blank"}},[t._v("\n                          "+t._s("S-"+a.invoice_no)+"\n                        ")])]),t._v(" "),s("td",[t._v("\n                        "+t._s(t.ProductCount(a.purchase_items))+"\n                      ")]),t._v(" "),s("td",[t._v(t._s(a.created_at))]),t._v(" "),s("td",[t._v("\n                        "+t._s(parseInt(a.total))+"\n                      ")])])})),t._v(" "),s("tr",[s("td",{attrs:{colspan:"3"}}),t._v(" "),s("td",[s("strong",[t._v(" = "+t._s(t.totalproductQuantity()))])]),t._v(" "),s("td",{attrs:{colspan:"1"}}),t._v(" "),s("td",[s("strong",[t._v(" = "+t._s(t.totalAmount()))])])])],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.purchase_items,limit:5},on:{"pagination-change-page":t.filter}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing\n                      "),s("strong",[t._v(t._s(t.purchase_items.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.purchase_items.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.purchase_items.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"content-header"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Purchase Report")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 orders-heading"},[a("h3",{staticClass:"box-title"},[this._v("PURCHASE REPORT")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Supplier")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice_no")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Product Quantity")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")])])])}],!1,null,null,null);a.default=o.exports},219:function(t,a,s){var e=s(781);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(5)(e,i);e.locals&&(t.exports=e.locals)},780:function(t,a,s){"use strict";var e=s(219);s.n(e).a},781:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.orders-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-bottom: 2px solid #000;\r\n  margin-bottom: 10px;\n}\r\n",""])}}]);