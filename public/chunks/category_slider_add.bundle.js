(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1187:function(t,e,a){"use strict";a.r(e);var r=a(2),i=a.n(r),s=a(0);i.a.component(s.HasError.name,s.HasError);var o={name:"subCategory",created:function(){var t=this;setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new s.Form({image:"",preview_image:"",url:"",page_position:"select_type"}),error:"",loading:!0,disabled:!0,image_width:1184,image_height:250,imagae_size:550,image_size_text:"Image size must be 1184*350px"}},methods:{add:function(){var t=this;this.form.post("/api/category/slider/add",{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(e){console.log(e),"OK"==e.data.status?(t.$router.push({name:"category_slider"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="some thing want to wrong"})).catch((function(e){t.error=e.response.data.errors,t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))},uploadImage:function(t){var e=this,a=t.target.files[0];if(a.type.match("image.*"))if(a.size/1024>this.imagae_size)Swal.fire({type:"warning",text:"File size can not be bigger then ".concat(this.imagae_size,"KB.Reference file size is'+file.size/1024 +'KB")});else{var r=new FileReader;r.readAsDataURL(a),r.onload=function(t){var r=new Image;r.onload=function(){return console.log(r.width,r.height),r.width==e.image_width&&r.height==e.image_height?void e.setImage(a,t):(e.disabled=!0,void Swal.fire({type:"error",text:"Image size need "+e.image_width+"*"+e.image_height+"px. But Upload imaze size "+r.width+"*"+r.height+"px"}))},r.src=t.target.result}}else Swal.fire({type:"warning",text:"this is not any kind of image"})},setImage:function(t,e){console.log(t),this.disabled=!1,this.form.image=t,this.form.preview_image=e.target.result}},computed:{}},n=(a(619),a(1)),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"category_slider"}}},[a("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-lg-offset-2"},[a("div",{staticClass:"box box-primary"},[a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[t._v("\n                Add category or subCategory slider\n                "),a("small",[t._v("("+t._s(t.image_size_text)+")")])])]),t._v(" "),a("div",{staticClass:"box-body"},[t.error?a("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),t.loading?a("h1",[a("i",{staticClass:"fa fa-spin fa-spinner"})]):a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.add(e)},keydown:function(e){return t.form.onKeydown(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"url"}},[t._v("url")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.url,expression:"form.url"}],staticClass:"form-control ",class:{"is-invalid":t.form.errors.has("url")},attrs:{type:"text",name:"url",id:""},domProps:{value:t.form.url},on:{input:function(e){e.target.composing||t.$set(t.form,"url",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"url"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Postion")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.page_position,expression:"form.page_position"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("page_postion")},attrs:{name:"page_postion"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"page_position",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"select_type"}},[t._v("select slider type ")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Category Slider")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("subCategory Slider ")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("subSubCategory Slider ")])]),t._v(" "),a("has-error",{attrs:{form:t.form,field:"image"}})],1),t._v(" "),a("div",{staticClass:"preview-image"},[t.form.preview_image.length?a("img",{staticClass:"img-responsive",attrs:{src:t.form.preview_image,alt:"slider"}}):a("img",{staticClass:"img-responsive",staticStyle:{width:"508px",height:"150px"},attrs:{src:"/images/noimage.png"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"selectFile",attrs:{for:"file"}},[t._v("select a file")]),t._v(" "),a("input",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("image")},staticStyle:{display:"none"},attrs:{id:"file",type:"file",name:"image"},on:{change:t.uploadImage}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"image"}})],1)])]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.form.busy||t.disabled,type:"submit"}},[t.form.busy?a("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard\n          ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Category slider ")])])}],!1,null,"077f3ae6",null);e.default=l.exports},139:function(t,e,a){var r=a(620);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,i);r.locals&&(t.exports=r.locals)},619:function(t,e,a){"use strict";var r=a(139);a.n(r).a},620:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-077f3ae6] {\r\n  margin-bottom: 5px !important;\n}\nlabel.selectFile[data-v-077f3ae6] {\r\n  width: 150px;\r\n  background: #fff;\r\n  color: #222d32;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  border-radius: 5px;\r\n  margin-top: 15px;\r\n  cursor: pointer;\r\n  border: 1px solid #222d32;\n}\r\n",""])}}]);