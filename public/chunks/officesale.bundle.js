(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1263:function(t,a,s){"use strict";s.r(a);var e={components:{Index:s(10).default},created:function(){this.saleList()},data:function(){return{sales:{},loading:!0,item:20,sale_type:1,start_date:"",end_date:"",data_search:"",options:{format:"YYYY-MM-DD",useCurrent:!1}}},methods:{saleSearch:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.data_search.length>1?(this.loading=!0,axios.get("/api/office/sale/search/data/"+this.data_search+"?page="+a).then((function(a){"OK"==a.data.status?(t.sales=a.data.sales,t.loading=!1):t.saleList()})).catch((function(t){console.log(t)}))):this.saleList()},filterOfficeSale:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/officeSale/date/wise/filter?page="+a,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item}}).then((function(a){console.log(a),"OK"==a.data.status&&(t.sales=a.data.sales)})).catch((function(t){console.log(t)}))},saleList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/office/sales/list?page="+a,{params:{item:this.item,sale_type:this.sale_type}}).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.sales=a.data.sales,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(a){t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},itemPerPage:function(){var t=this;this.loading=!0,this.$Progress.start(),axios.get("/list/purchase",{params:{item:this.item}}).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.purchases=a.data.purchases,t.loading=!1,t.$Progress.finish()):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(a){t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))}},watch:{start_date:function(t){t.length>1&&this.filterOfficeSale()},end_date:function(t){t.length>1&&this.filterOfficeSale()}}},i=s(1),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"AddSale"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-bsale"},[s("h3",{staticClass:"box-title"},[t._v("Office_sale")]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"10px"}},[s("div",{staticClass:"col-lg-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data_search,expression:"data_search"}],staticClass:"form-control",attrs:{placeholder:"enter name, phone"},domProps:{value:t.data_search},on:{keyup:t.saleSearch,input:function(a){a.target.composing||(t.data_search=a.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.filterOfficeSale(a)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"start-date",config:t.options},model:{value:t.start_date,callback:function(a){t.start_date=a},expression:"start_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-5",staticStyle:{"margin-left":"-20px"}},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"end-date",config:t.options},model:{value:t.end_date,callback:function(a){t.end_date=a},expression:"end_date"}})],1)])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=a.target.multiple?s:s[0]},t.saleList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),s("option",{attrs:{value:"60"}},[t._v("60")]),t._v(" "),s("option",{attrs:{value:"80"}},[t._v("80")]),t._v(" "),s("option",{attrs:{value:"100"}},[t._v("100")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.sales.data,(function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s("S-"+a.id))]),t._v(" "),s("td",[t._v(t._s(a.name?a.name:""))]),t._v(" "),s("td",[t._v(t._s(a.mobile_no?a.mobile_no:""))]),t._v(" "),s("td",[t._v(t._s(a.address?a.address:""))]),t._v(" "),s("td",[t._v(t._s(a.created_at))]),t._v(" "),s("td",[t._v("\n                        Total: "+t._s(parseInt(a.total)-parseInt(a.discount))+",\n                        "),s("strong",[t._v("Paid: "+t._s(a.paid)+",")]),t._v("\n                        Due:\n                        "+t._s(parseInt(a.total)-parseInt(a.paid)-parseInt(a.discount))+"\n                      ")]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"ViewSale",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-eye"})])],1)])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.sales,limit:3},on:{"pagination-change-page":t.saleList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing "),s("strong",[t._v(t._s(t.sales.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.sales.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.sales.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Sale")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Number")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"463b617e",null);a.default=o.exports}}]);