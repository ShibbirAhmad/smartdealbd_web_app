(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1232:function(t,a,s){"use strict";s.r(a);var e={created:function(){this.companyList()},data:function(){return{companies:{},loading:!0}},methods:{companyList:function(){var t=this;axios.get("/company").then((function(a){console.log(a),"SUCCESS"==a.data.status&&(t.companies=a.data.companies,t.loading=!1)})).catch((function(t){console.log(t)}))},deActive:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You wan't de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/company/de-active/status/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.companyList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing went to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing went to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/company/active/status/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.companyList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing went to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing went to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},getPagination:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/company?page="+a).then((function(a){t.loading=!1,t.cities=a.data.cities}))}},computed:{}},n=s(1),o=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"addCompany"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-10 "},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table text-center table-hover table-striped table-bordered "},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.companies,(function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.phone))]),t._v(" "),s("td",[t._v(t._s(a.address))]),t._v(" "),s("td",[1==a.status?s("span",{staticClass:"badge badge-success"},[t._v("Active")]):s("span",{staticClass:"badge badge-warning "},[t._v("De-Active")])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:{name:"editCompany",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),1==a.status?s("a",{staticClass:"btn  btn-sm btn-warning",attrs:{title:"De-active"},on:{click:function(s){return t.deActive(a)}}},[s("i",{staticClass:"fa fa-ban"})]):s("a",{staticClass:"btn btn-sm  btn-primary",attrs:{title:"active"},on:{click:function(s){return t.active(a)}}},[s("i",{staticClass:"fa fa-check"})])],1)])}))],2)])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Company")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Company table")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Phone")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"e35608cc",null);a.default=o.exports}}]);