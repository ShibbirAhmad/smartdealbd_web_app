(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1238:function(t,e,o){"use strict";o.r(e);var s={created:function(){var t=this;setTimeout((function(){t.offerList()}),500)},data:function(){return{offers:{},loading:!0,basePath:this.$store.state.image_base_link}},methods:{offerList:function(){var t=this;axios.get("/list/offer").then((function(e){"SUCCESS"==e.data.status&&(t.offers=e.data.offers,t.loading=!1)})).catch((function(t){console.log(t)}))},deActive:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(o){o.value?axios.get("/deActive/offer/"+t.id).then((function(t){"SUCCESS"==t.data.status?(e.offerList(),e.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):e.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(o){o.value?axios.get("/active/offer/"+t.id).then((function(t){"SUCCESS"==t.data.status?(e.offerList(),e.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):e.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},remove:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't delete this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(o){o.value?axios.get("/delete/offer/"+t.id).then((function(t){console.log(t),"SUCCESS"==t.data.status?(e.offerList(),e.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){e.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):e.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},getPagination:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/offer?page="+e).then((function(e){t.loading=!1,t.offers=e.data.offers}))}},computed:{}},a=o(1),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"offerAdd"}}},[o("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-8 col-lg-offset-1"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[o("table",{staticClass:"table"},[t._m(2),t._v(" "),o("tbody",[t.loading?o("h1",{staticClass:"text-center"},[o("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.offers.data,(function(e,s){return o("tr",[o("td",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),o("td",[o("img",{staticStyle:{width:"100px"},attrs:{src:t.basePath+e.image,alt:"User Image"}})]),t._v(" "),o("td",[t._v("\n                                         "+t._s(e.url)+"\n                                        ")]),t._v(" "),o("td",[1==e.status?o("span",{staticClass:"badge"},[t._v("Active")]):o("span",{staticClass:"badge badge-danger"},[t._v("De-active")])]),t._v(" "),o("td",[o("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"edit_offer",params:{id:e.id}}}},[o("i",{staticClass:"fa fa-edit"})]),t._v(" "),o("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(o){return t.remove(e)}}},[o("i",{staticClass:"fa fa-trash"})]),t._v(" "),1==e.status?o("a",{staticClass:"btn btn-sm btn-warning",attrs:{title:"De-active"},on:{click:function(o){return t.deActive(e)}}},[o("i",{staticClass:"fa fa-ban"})]):o("a",{staticClass:"btn btn-sm btn-primary",attrs:{title:"active"},on:{click:function(o){return t.active(e)}}},[o("i",{staticClass:"fa fa-check"})])],1)])}))],2)])]),t._v(" "),o("div",{staticClass:"box-footer"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("pagination",{attrs:{data:t.offers},on:{"pagination-change-page":t.getPagination}})],1),t._v(" "),o("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[o("p",[t._v("Showing "),o("strong",[t._v(t._s(t.offers.from))]),t._v(" to\n                                            "),o("strong",[t._v(t._s(t.offers.to))]),t._v(" of total\n                                            "),o("strong",[t._v(t._s(t.offers.total))]),t._v(" entries\n                                        ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Offer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Offer  table")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),o("th",{attrs:{scope:"col"}},[t._v("Image ")]),t._v(" "),o("th",{attrs:{scope:"col"}},[t._v("Url")]),t._v(" "),o("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),o("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"4ce8ac25",null);e.default=n.exports}}]);