(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1215:function(t,s,a){"use strict";a.r(s);var i={created:function(){this.subCityList()},data:function(){return{cities:{},loading:!0,search_data:""}},methods:{subCityList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/list/sub/city?page="+s).then((function(s){"SUCCESS"==s.data.status&&(t.cities=s.data.cities,t.loading=!1)})).catch((function(t){console.log(t)}))},searchSubCity:function(){var t=this;this.search_data.length>=3?axios.get("/api/search/sub/city/"+this.search_data).then((function(s){t.cities=s.data.cities})):this.subCityList()},deActiveSubCity:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"You want de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(a){a.value?axios.get("/api/deActive/sub/city/"+t.id).then((function(t){console.log(t),"SUCCESS"==t.data.status?(s.subCityList(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"You wantt active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(a){a.value?axios.get("/api/active/sub/city/"+t.id).then((function(t){"SUCCESS"==t.data.status?(s.subCityList(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))}},computed:{}},e=a(1),o=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"add_sub_city"}}},[a("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-lg-offset-1"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_data,expression:"search_data"}],staticClass:"form-control",attrs:{type:"text",placeholder:"search here"},domProps:{value:t.search_data},on:{keyup:t.searchSubCity,input:function(s){s.target.composing||(t.search_data=s.target.value)}}})])]),t._v(" "),a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",[t.loading?a("h1",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.cities.data,(function(s,i){return a("tr",{key:i},[a("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),t._v(" "),a("td",[t._v(t._s(s.city.name))]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[1==s.status?a("span",{staticClass:"badge"},[t._v("Active")]):a("span",{staticClass:"badge text-bold"},[t._v("De-Active")])]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:{name:"edit_sub_city",params:{id:s.id}}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),1==s.status?a("a",{staticClass:"btn btn-warning",attrs:{title:"De-active"},on:{click:function(a){return t.deActiveSubCity(s)}}},[a("i",{staticClass:"fa fa-ban"})]):a("a",{staticClass:"btn btn-primary",attrs:{title:"active"},on:{click:function(a){return t.active(s)}}},[a("i",{staticClass:"fa fa-check"})])],1)])}))],2)])]),t._v(" "),a("div",{staticClass:"box-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("pagination",{attrs:{data:t.cities},on:{"pagination-change-page":t.subCityList}})],1),t._v(" "),a("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("\n                      Showing "),a("strong",[t._v(t._s(t.cities.from))]),t._v(" to\n                      "),a("strong",[t._v(t._s(t.cities.to))]),t._v(" of total\n                      "),a("strong",[t._v(t._s(t.cities.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Merchant")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border text-center"},[s("h3",{staticClass:"box-title"},[this._v("Sub Cities")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Serial")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("City Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Sub City Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("status")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"4322c6ec",null);s.default=o.exports}}]);