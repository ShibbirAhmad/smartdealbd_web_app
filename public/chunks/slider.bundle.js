(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1177:function(t,s,e){"use strict";e.r(s);var i={components:{Index:e(10).default},created:function(){var t=this;setTimeout((function(){t.slider()}),500)},data:function(){return{sliders:{},loading:!0,search:"",basePath:this.$store.state.image_base_link}},methods:{slider:function(){var t=this;axios.get("/list/slider").then((function(s){"OK"==s.data.status?(t.sliders=s.data.sliders,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(s){console.log(s),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},active:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(e){e.value?axios.get("/active/slider/"+t.id).then((function(t){"OK"==t.data.status?(s.slider(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},deActive:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"You won't de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(e){e.value?axios.get("/deActive/slider/"+t.id).then((function(t){"OK"==t.data.status?(s.slider(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},destroy:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"Delete this slider!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(e){e.value?axios.get("/delete/slider/"+t.id).then((function(t){"OK"==t.data.status?(s.slider(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},getPagination:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/slider?page="+s).then((function(s){t.loading=!1,t.sliders=s.data.sliders}))}}},a=e(1),o=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"sliderAdd"}}},[e("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-lg-offset-1"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-striped"},[t._m(2),t._v(" "),e("tbody",[t.loading?e("h1",[e("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.sliders.data,(function(s,i){return e("tr",{key:i},[e("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),t._v(" "),e("td",[e("img",{staticStyle:{width:"100px"},attrs:{src:t.basePath+s.image,alt:"slider Image"}})]),t._v(" "),e("td",[1==s.status?e("span",{staticClass:"badge"},[t._v("Active")]):e("span",{staticClass:"badge"},[t._v("De-active")])]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"sliderEdit",params:{id:s.id}}}},[e("i",{staticClass:"fa fa-edit"})]),t._v(" "),e("a",{staticClass:"btn btn-danger",on:{click:function(e){return t.destroy(s)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),1==s.status?e("a",{staticClass:"btn btn-warning",attrs:{title:"De-active"},on:{click:function(e){return t.deActive(s)}}},[e("i",{staticClass:"fa fa-ban"})]):e("a",{staticClass:"btn btn-primary",attrs:{title:"active"},on:{click:function(e){return t.active(s)}}},[e("i",{staticClass:"fa fa-check"})])],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"box-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("pagination",{attrs:{data:t.sliders},on:{"pagination-change-page":t.getPagination}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[e("p",[t._v("Showing "),e("strong",[t._v(t._s(t.sliders.from))]),t._v(" to\n                                            "),e("strong",[t._v(t._s(t.sliders.to))]),t._v(" of total\n                                            "),e("strong",[t._v(t._s(t.sliders.total))]),t._v(" entries\n                                        ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Slider")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h3",{staticClass:"box-title"},[this._v("slider's table")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Image")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("status")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("action")])])])}],!1,null,null,null);s.default=o.exports}}]);