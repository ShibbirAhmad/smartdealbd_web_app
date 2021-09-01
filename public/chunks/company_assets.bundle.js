(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1354:function(t,s,a){"use strict";a.r(s);var e={mounted:function(){console.log("mounted asset"),this.getAssets()},data:function(){return{assetList:{},total_quantity:"",total_amount:"",loading:!0,item:10}},methods:{getAssets:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/company/assets?page="+s,{params:{item:this.item}}).then((function(s){console.log(s),"OK"==s.data.success&&(t.assetList=s.data.assets,t.total_amount=s.data.total_amount,t.total_quantity=s.data.total_quantity,t.loading=!1)}))},trash_asset:function(t,s){var a=this;confirm("Are you sure to remove")&&axios.get("/api/company/assets/delete/"+t).then((function(t){console.log(t),"OK"==t.data.success&&(alert(t.data.message),a.assetList.data.splice(s,1))}))}}},i=(a(877),a(1)),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"company_assets_add"}}},[a("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header with-border"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2",staticStyle:{"margin-left":"10px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{id:""},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=s.target.multiple?a:a[0]},t.getAssets]}},[a("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),t._v(" "),a("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),a("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),a("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")])])]),t._v(" "),a("div",{staticClass:"col-md-2"})]),t._v(" "),a("div",{staticClass:"box-body"},[a("table",{staticClass:"table text-center"},[t._m(1),t._v(" "),a("tbody",[t.loading?a("h1",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.assetList.data,(function(s,e){return a("tr",{key:e},[a("td",[t._v(" "+t._s(e+1)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(s.purchase_date)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(s.name)+" ")]),t._v(" "),a("td",[t._v(" "+t._s(s.purchase_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))]),t._v(" "),a("td",[t._v(" "+t._s(s.present_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))]),t._v(" "),a("td",[t._v(" "+t._s(s.quantity))]),t._v(" "),a("td",[t._v(" "+t._s(s.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"company_assets_edit",params:{id:s.id}}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("a",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.trash_asset(s.id,e)}}},[a("i",{staticClass:"fa fa-trash"})])],1)])})),t._v(" "),a("tr",[a("td",{attrs:{colspan:"5"}}),t._v(" "),a("td",[t._v(" "+t._s(t.total_quantity.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))+" ")]),t._v(" "),a("td",[t._v(" "+t._s(t.total_amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))+"  ")])])],2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("pagination",{attrs:{data:t.assetList},on:{"pagination-change-page":t.getAssets}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),a("div",{staticClass:"col-md-6",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("\n                      showing "),a("strong",[t._v(t._s(t.assetList.from)+" ")]),t._v(" to\n                      "),a("strong",[t._v(t._s(t.assetList.from)+" ")]),t._v(" of total\n                      entities "+t._s(t.assetList.total)+"\n                    ")])])])]),t._v(" "),a("div",{staticClass:"box-footer"})])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("asset")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Serial")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Purchase Price ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Present Price ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Quantity")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"64721c65",null);s.default=n.exports},268:function(t,s,a){var e=a(878);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(e,i);e.locals&&(t.exports=e.locals)},877:function(t,s,a){"use strict";var e=a(268);a.n(e).a},878:function(t,s,a){(t.exports=a(4)(!1)).push([t.i,"\n.dropbtn[data-v-64721c65] {\r\n  width: 100% !important;\r\n  margin-bottom: 5px !important;\n}\n.dropbtn-active[data-v-64721c65] {\r\n  display: block !important;\n}\n.dropdown-action[data-v-64721c65] {\r\n  display: none;\r\n  width: 90px;\r\n  position: absolute;\n}\r\n",""])}}]);