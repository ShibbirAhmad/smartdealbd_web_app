(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1187:function(t,a,e){"use strict";e.r(a);var s={components:{Index:e(14).default},created:function(){var t=this;setTimeout((function(){t.category()}),500)},data:function(){return{categories:{},loading:!0,search:"",basePath:this.$store.state.image_base_link}},methods:{category:function(){var t=this;axios.get("/list/category").then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.categories=a.data.categories,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(a){t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},unselected:function(t){var a=this;axios.get("/unselected/category/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.category(),a.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3})):a.$toasted.show("something want to wrong",{type:"error",position:"top-center",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},selected:function(t){var a=this;axios.get("/selected/category/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.category(),a.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3})):a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},active:function(t){var a=this;axios.get("/active/category/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.category(),a.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3})):a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},deActive:function(t){var a=this;axios.get("/deActive/category/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.category(),a.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:4e3})):a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},searchResult:function(){var t=this;this.search.length>1?(this.loading=!0,axios.get("/search/category/"+this.search).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.loading=!1,t.categories=a.data.categories):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})})).catch((function(a){t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))):this.category()},getPagination:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/category?page="+a).then((function(a){t.loading=!1,t.categories=a.data.categories}))}}},o=e(1),i=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"categoryAdd"}}},[e("i",{staticClass:"fa fa-plus"})]),t._v(" "),e("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"subCategory"}}},[t._v("sub category")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"subSubCategory"}}},[t._v("sub sub category")])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-lg-offset-1"},[e("div",{staticClass:"box box-primary"},[e("div",{staticClass:"box-header with-border"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Category name"},domProps:{value:t.search},on:{keyup:t.searchResult,input:function(a){a.target.composing||(t.search=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-hover table-striped "},[t._m(2),t._v(" "),e("tbody",[t.loading?e("h1",[e("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.categories.data,(function(a,s){return e("tr",{key:s},[e("td",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[a.icon_image?e("img",{staticClass:"img-circle small-image",attrs:{src:t.basePath+a.icon_image,alt:"Category Image"}}):e("img",{staticClass:"img-circle small-image",attrs:{src:t.basePath+"images/static/noimage.png",alt:"Category Image"}})]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(a.position)+"\n                                            ")])]),t._v(" "),e("td",[1==a.status?e("span",{staticClass:"badge"},[t._v("active")]):e("span",{staticClass:"badge"},[t._v("De-active")])]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:{name:"CategoryEdit",params:{categoryId:a.id}}}},[e("i",{staticClass:"fa fa-edit"})]),t._v(" "),1==a.status?e("a",{staticClass:"btn btn-sm  btn-warning",attrs:{title:"De-active"},on:{click:function(e){return t.deActive(a)}}},[e("i",{staticClass:"fa fa-ban"})]):e("a",{staticClass:"btn  btn-sm btn-primary",attrs:{title:"active"},on:{click:function(e){return t.active(a)}}},[e("i",{staticClass:"fa fa-check"})])],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"box-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("pagination",{attrs:{data:t.categories},on:{"pagination-change-page":t.getPagination}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[e("p",[t._v("Showing "),e("strong",[t._v(t._s(t.categories.from))]),t._v(" to\n                                            "),e("strong",[t._v(t._s(t.categories.to))]),t._v(" of total\n                                            "),e("strong",[t._v(t._s(t.categories.total))]),t._v(" entries\n                                        ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Category")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-6"},[a("h3",{staticClass:"box-title"},[this._v("Category table")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Image")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Display Position")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"290af826",null);a.default=i.exports}}]);