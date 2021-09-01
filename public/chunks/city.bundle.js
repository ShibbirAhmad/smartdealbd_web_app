(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1220:function(t,a,s){"use strict";s.r(a);var i={created:function(){var t=this;setTimeout((function(){t.cityList()}),500)},data:function(){return{cities:{},loading:!0,basePath:"storage/",search_data:""}},methods:{cityList:function(){var t=this;axios.get("/list/city").then((function(a){"SUCCESS"==a.data.status&&(t.cities=a.data.cities,t.loading=!1)})).catch((function(t){console.log(t)}))},searchCity:function(){var t=this;this.search_data.length>=3?axios.get("/api/search/city/"+this.search_data).then((function(a){t.cities=a.data.cities})):this.cityList()},deActive:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You won't de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/deActive/city/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.cityList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/active/city/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.cityList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},getPagination:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/city?page="+a).then((function(a){t.loading=!1,t.cities=a.data.cities}))}},computed:{}},e=s(1),o=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"cityAdd"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8 col-lg-offset-1"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_data,expression:"search_data"}],staticClass:"form-control",attrs:{type:"text",placeholder:"search here"},domProps:{value:t.search_data},on:{keyup:t.searchCity,input:function(a){a.target.composing||(t.search_data=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.cities.data,(function(a,i){return s("tr",[s("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.delivery_charge))]),t._v(" "),s("td",[1==a.status?s("span",{staticClass:"badge"},[t._v("Active")]):s("span",{staticClass:"badge text-bold"},[t._v("De-Active")])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:{name:"editCity",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),1==a.status?s("a",{staticClass:"btn btn-warning",attrs:{title:"De-active"},on:{click:function(s){return t.deActive(a)}}},[s("i",{staticClass:"fa fa-ban"})]):s("a",{staticClass:"btn btn-primary",attrs:{title:"active"},on:{click:function(s){return t.active(a)}}},[s("i",{staticClass:"fa fa-check"})])],1)])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.cities},on:{"pagination-change-page":t.getPagination}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("Showing "),s("strong",[t._v(t._s(t.cities.from))]),t._v(" to\n                                            "),s("strong",[t._v(t._s(t.cities.to))]),t._v(" of total\n                                            "),s("strong",[t._v(t._s(t.cities.total))]),t._v(" entries\n                                        ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Merchant")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"box-title"},[this._v("City table")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Delivery Charge")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("status")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"38fac23e",null);a.default=o.exports}}]);