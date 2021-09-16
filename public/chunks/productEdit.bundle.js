(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1246:function(t,e,a){"use strict";a.r(e);var r=a(2),o=a.n(r),s=a(0),i=(a(16),a(19)),n=a.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.a.component(s.HasError.name,s.HasError);var l={name:"Edit",created:function(){this.others(),this.edit(),this.getSaleCampaign()},data:function(){return{form:new s.Form({name:"",merchant_id:"",category:"",sub_category:"",sub_sub_category:"",product_placement:"0",product_position:"",quantity:"",alert_quantity:1,purchase_price:"",sale_price:"",discount:"",price:"",details:"",attribute:"",variant:[],image:[],files:[],select_home_page:1,campaign_id:"select campaign",expired_date:""}),options:{format:"YYYY-MM-DD",useCurrent:!1},loading:!0,error:"",categories:"",subcategories:"",subSubCategories:"",merchants:"",attributes:"",variants:"",editor:n.a,editorConfig:{},isDraging:!1,dragCount:0,basePath:this.$store.state.image_base_link,editContent:"1",saleCampaign:""}},methods:{edit:function(){var t=this;axios.get("/edit/product/"+this.$route.params.id).then((function(e){if(console.log(e),"SUCCESS"==e.data.status){t.loading=!1,t.form.name=e.data.product.name,t.form.category=e.data.product.category_id,t.form.sub_category=e.data.product.sub_category_id?e.data.product.sub_category_id:"",t.form.sub_sub_category=e.data.product.sub_sub_category_id?e.data.product.sub_sub_category_id:"",t.form.sale_price=e.data.product.sale_price,t.form.discount=e.data.product.discount?e.data.product.discount:"",t.form.price=e.data.product.price,t.form.product_placement=e.data.product.product_placement,t.form.campaign_id=e.data.product.campaign_id?e.data.product.campaign_id:"",t.form.expired_date=e.data.product.expired_date?e.data.product.expired_date:"",console.log(c(t.form.expired_date)),t.form.product_position=e.data.product.product_position,t.form.select_home_page=e.data.product.select_home_page,t.form.details=e.data.product.details,t.form.merchant_id=e.data.product.merchant_id,null!==e.data.product.sub_category_id&&(t.form.sub_category=e.data.product.sub_category_id,t.categoryWiseSubCategory()),null!==e.data.product.sub_sub_category_id&&(t.subCategoryWiseSubSUbCategory(),t.form.sub_sub_category=e.data.product.sub_sub_category_id);for(var a=e.data.productImage,r=0;r<a.length;r++)t.form.files.push(t.basePath+a[r].product_image),t.form.image.push(t.basePath+a[r].product_image);if(e.data.productAttribute.length>0){t.form.attribute=e.data.productAttribute[0].attribute_id,t.attributeWiseVariants(),console.log(e.data.productVariant),e.data.productVariant.forEach((function(e){t.form.variant.push(e),console.log(e.variant_id)}));for(var o=0;o<=e.data.productVariant.length;o++)console.log(e.data.productVariant[o].variant_id),t.form.variant.push(e.data.productVariant[o].variant_id)}}else t.error="something went to wrong"})).catch((function(t){console.log(t)}))},getSaleCampaign:function(){var t=this;axios.get("/api/sale/campaign/list").then((function(e){console.log(e),t.saleCampaign=e.data.sale_campaigns}))},DeleteProductImage:function(t){var e=this;Swal.fire({title:"Are you sure?",text:"You won't permanent delete this image??",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(a){a.value?axios.get("/delete/product/image/"+e.$route.params.id,{params:{index:t}}).then((function(a){"SUCCESS"==a.data.status&&(e.$toasted.show(a.data.message,{type:"success",position:"top-bottom",duration:4e3}),e.form.files.splice(t,1),e.form.image.splice(t,1))})).catch((function(t){console.log(t),e.error="something went to wrong"})):e.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},UpdateBasicInformation:function(){var t=this;window.scrollTo(0,0),this.$Progress.start(),this.form.post("/update/product/basicInformation/"+this.$route.params.id,{transformRequest:[function(t,e){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(e){console.log(e),t.$Progress.finish(),"SUCCESS"==e.data.status?(t.$router.push({name:"product"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="something went to wrong"})).catch((function(e){console.log(e),console.log(e),t.$Progress.finish(),t.error="something went to wrong"}))},UpdateProductProperties:function(){var t=this;window.scrollTo(0,0),this.$Progress.start(),this.form.post("/update/product/properties/"+this.$route.params.id,{transformRequest:[function(t,e){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(e){console.log(e),t.$Progress.finish(),"SUCCESS"==e.data.status?(t.$router.push({name:"product"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="something went to wrong"})).catch((function(e){console.log(e),console.log(e),t.$Progress.finish(),t.error="something went to wrong"}))},UpdateProductImage:function(){var t=this;window.scrollTo(0,0),this.$Progress.start(),this.form.post("/update/product/image/"+this.$route.params.id,{transformRequest:[function(t,e){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(e){console.log(e),t.$Progress.finish(),"SUCCESS"==e.data.status?(t.$router.push({name:"product"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="something went to wrong"})).catch((function(e){console.log(e),t.$Progress.finish(),t.error="something went to wrong"}))},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status?(t.categories=e.data.categories,t.merchants=e.data.merchants,t.attributes=e.data.attributes):t.error="something went to wrong"})).catch((function(e){t.error="something went to wrong"}))},categoryWiseSubCategory:function(){var t=this;axios.get("/category/wise/subCategory/"+this.form.category).then((function(e){"SUCCESS"==e.data.status?e.data.subCategories.length>0?t.subcategories=e.data.subCategories:t.subcategories="":(console.log("error"),t.subcategories="")})).catch((function(e){t.error="something went wrong"}))},subCategoryWiseSubSUbCategory:function(){var t=this;axios.get("/subCategory/wise/subSubCategory/"+this.form.sub_category).then((function(e){"SUCCESS"==e.data.status?e.data.subsubcategories.length>0?t.subSubCategories=e.data.subsubcategories:t.subSubCategories="":(console.log("error"),t.subSubCategories="")})).catch((function(e){t.error="something went wrong"}))},attributeWiseVariants:function(){var t=this;axios.get("/attribute/wise/variant/"+this.form.attribute).then((function(e){console.log(e),"SUCCESS"==e.data.status?t.variants=e.data.variants:console.log("error")})).catch((function(e){console.log(e),t.error="something went wrong"}))},salePrice:function(){this.form.price=this.form.sale_price},discount:function(){var t=this.form.sale_price-this.form.discount;t<0?(alert("discount can not be greater then sale_price"),this.form.price=this.form.sale_price,this.form.discount=""):this.form.price=t},uploadImage:function(t){var e=this,a=t.target.files;Array.from(a).forEach((function(t){return e.addImage(t)}))},onDragEnter:function(t){t.preventDefault(),this.dragCount++,this.isDraging=!0},onDragLeave:function(t){t.preventDefault(),this.dragCount--,this.dragCount<=0&&(this.isDraging=!1)},drop:function(t){var e=this;t.preventDefault(),t.stopPropagation(),this.isDraging=!1;var a=t.dataTransfer.files;console.log(a),Array.from(a).forEach((function(t){return e.addImage(t)}))},addImage:function(t){var e=this;if(t.type.match("image.*"))if(t.size/1024>300)Swal.fire({type:"warning",text:"File size can not be bigger then 300kb.Reference file size is"+t.size/1024+"KB"});else{var a=new FileReader;a.readAsDataURL(t),a.onload=function(a){var r=new Image;r.onload=function(){return r.width<=1200&&r.height<=1200?(e.form.image.push(t),void e.form.files.push(a.target.result)):(e.disabled=!0,void alert("Image maximu size 1200*1200px.But Upload imaze size"+r.width+"*"+r.height+"px"))},r.src=a.target.result}}else alert("this is not any kind of image")},cancel:function(t){this.form.files.splice(t,1),this.form.image.splice(t,1)},campaignSelection:function(){this.form.campaign_id&&(this.form.expired_date="")}}},u=(a(702),a(1)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"product"}}},[a("i",{staticClass:"fa fa-arrow-right"})]),t._v(" "),a("button",{staticClass:"btn btn-primary",class:{activeBtn:1==t.editContent},on:{click:function(e){t.editContent=1}}},[t._v("\n          Basic\n          Information\n        ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",class:{activeBtn:2==t.editContent},on:{click:function(e){t.editContent=2}}},[t._v("Product Property")]),t._v(" "),a("button",{staticClass:"btn btn-primary",class:{activeBtn:3==t.editContent},on:{click:function(e){t.editContent=3}}},[t._v("\n          Product\n          Image\n        ")])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[t.loading?a("h1",{staticStyle:{"text-align":"center","font-size":"50px"}},[a("i",{staticClass:"fa fa-spinner fa-spin"})]):t._e(),t._v(" "),t.error?a("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.error)+"\n        "),a("span",{staticClass:"close",staticStyle:{color:"#fff"},attrs:{"aria-hidden":"true","data-dismiss":"alert","aria-label":"Close"}},[t._v("×")])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.editContent,expression:"editContent==1"}],staticClass:"col-lg-8 col-lg-offset-2"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateBasicInformation(e)}}},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex:jean's pents"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sale_price,expression:"form.sale_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sale_price")},attrs:{type:"text",name:"sale_price",autocomplete:"off",placeholder:"sale_price"},domProps:{value:t.form.sale_price},on:{keyup:function(e){return t.salePrice()},input:function(e){e.target.composing||t.$set(t.form,"sale_price",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"sale_price"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category,expression:"form.category"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("category")},attrs:{name:"category"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"category",e.target.multiple?a:a[0])},function(e){return t.categoryWiseSubCategory()}]}},[a("option",{attrs:{value:""}},[t._v("select category")]),t._v(" "),t._l(t.categories,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"category"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Discount (BDT)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("discount")},attrs:{type:"text",name:"discount",autocomplete:"off",placeholder:"discount"},domProps:{value:t.form.discount},on:{keyup:function(e){return t.discount()},input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"discount"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("sale price")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"text",name:"price",autocomplete:"off",placeholder:"price",readonly:""},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"price"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[t._m(5),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_category,expression:"form.sub_category"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sub_category")},attrs:{name:"sub_category"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"sub_category",e.target.multiple?a:a[0])},function(e){return t.subCategoryWiseSubSUbCategory()}]}},[a("option",{attrs:{value:""}},[t._v("select sub category")]),t._v(" "),t._l(t.subcategories,(function(e){return t.subcategories?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"sub_category"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("sub sub category")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.sub_sub_category,expression:"form.sub_sub_category"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("sub_sub_category")},attrs:{name:"'sub_sub_category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"sub_sub_category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("select sub sub category")]),t._v(" "),t._l(t.subSubCategories,(function(e){return t.subSubCategories?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"sub_sub_category"}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("label",{attrs:{for:""}},[t._v("Merchant")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.merchant_id,expression:"form.merchant_id"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"merchant_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Merchant")]),t._v(" "),t._l(t.merchants,(function(e,r){return a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.company_name?e.company_name:e.name))])}))],2)]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Product Placement")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.campaign_id,expression:"form.campaign_id"}],staticClass:"form-control",attrs:{name:"campaign_id"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"campaign_id",e.target.multiple?a:a[0])},t.campaignSelection]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("select campaign")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("Normal Products")]),t._v(" "),t._l(t.saleCampaign,(function(e,r){return 1==e.status?a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2)]),t._v(" "),t.form.campaign_id?a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" Expired Date")]),t._v(" "),a("date-picker",{class:{"is-invaid":t.form.errors.has("expired_date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.expired_date,callback:function(e){t.$set(t.form,"expired_date",e)},expression:"form.expired_date"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"expired_date"}})],1)]):t._e()]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Product Position")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.product_position,expression:"form.product_position"}],staticClass:"form-control",attrs:{type:"number",name:"product_position"},domProps:{value:t.form.product_position},on:{input:function(e){e.target.composing||t.$set(t.form,"product_position",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Select Home Page")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.select_home_page,expression:"form.select_home_page"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"select_home_page",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1"}},[t._v("yes")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("no")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[t._m(6),t._v(" "),a("ckeditor",{class:{"is-invalid":t.form.errors.has("details")},attrs:{editor:t.editor,name:"details",config:t.editorConfig},model:{value:t.form.details,callback:function(e){t.$set(t.form,"details",e)},expression:"form.details"}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"details"}})],1)]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Save")])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.editContent,expression:"editContent==2"}],staticClass:"col-lg-7 col-lg-offset-2 animate__animated animate__backInLeft"},[a("div",{staticClass:"box box-primary"},[t._m(7),t._v(" "),a("div",{staticClass:"box-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateProductProperties(e)}}},[a("div",{staticClass:"form-group"},[t._m(8),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.attribute,expression:"form.attribute"}],staticClass:"form-control",attrs:{name:"attribute"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"attribute",e.target.multiple?a:a[0])},function(e){return t.attributeWiseVariants()}]}},[a("option",{attrs:{disabled:""}},[t._v("select attribute")]),t._v(" "),t._l(t.attributes,(function(e){return a("option",{class:{"is-invalid":t.form.errors.has("attribute")},domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"attribute"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[t._m(9),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.variant,expression:"form.variant"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("variant")},attrs:{name:"variant[]",multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"variant",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("select variant")]),t._v(" "),t._l(t.variants,(function(e){return t.variants?a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))],2),t._v(" "),a("has-error",{attrs:{form:t.form,field:"variant"}})],1),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Save")])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.editContent,expression:"editContent==3"}],staticClass:"col-lg-7 col-lg-offset-2 animate__animated animate__backInRight"},[a("div",{staticClass:"box box-primary"},[t._m(10),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateProductImage(e)}}},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"uploader",class:{draging:t.isDraging},on:{dragenter:t.onDragEnter,dragleave:t.onDragLeave,dragover:function(t){t.preventDefault()},drop:t.drop}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.form.files.length,expression:"form.files.length"}],staticClass:"upload-control"},[a("label",{staticClass:"label",attrs:{for:"file"}},[t._v("Select a file")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.form.files.length,expression:"!form.files.length"}]},[a("i",{staticClass:"fa fa-cloud-upload"}),t._v(" "),a("p",[t._v("Drag your file here")]),t._v(" "),a("div",[t._v("or")]),t._v(" "),a("div",{staticClass:"file-input"},[a("label",{staticClass:"label",attrs:{for:"file"}},[t._v("select a file")]),t._v(" "),a("input",{attrs:{type:"file",name:"image",id:"file",multiple:""},on:{change:t.uploadImage}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.form.files.length,expression:"form.files.length"}],staticClass:"images-preview"},t._l(t.form.files,(function(e,r){return a("div",{key:r,staticClass:"img-wrapper"},[a("img",{attrs:{src:e,alt:"Image Uplaoder "+r}}),t._v(" "),a("div",{staticClass:"cancel"},[a("span",{on:{click:function(e){return t.cancel(r)}}},[t._v("X")]),t._v(" "),a("span",[a("i",{staticClass:"fa fa-trash",on:{click:function(e){return t.DeleteProductImage(r)}}})])])])})),0),t._v(" "),a("has-error",{attrs:{form:t.form,field:"image"}})],1),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-primary btn-block mt-2",attrs:{type:"submit"}},[t._v("Save")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard\n          ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Edit product")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Basic Information")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                        Name\n                        "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                        price\n                        "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                        Category\n                        "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                        sub category\n                        "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"box-title"},[this._v("\n                      Product Details\n                      "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Attribute & variant")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                    attribute\n                    "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                    variant\n                    "),e("b",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Image Gallery")])])}],!1,null,"bff88b8a",null);e.default=d.exports},181:function(t,e,a){var r=a(703);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,o);r.locals&&(t.exports=r.locals)},702:function(t,e,a){"use strict";var r=a(181);a.n(r).a},703:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.mb-2[data-v-bff88b8a] {\r\n  margin-bottom: 5px !important;\n}\n.height[data-v-bff88b8a] {\r\n  height: 420px !important;\n}\n.uploader[data-v-bff88b8a] {\r\n  width: 100%;\r\n  background: #222d32;\r\n  color: #fff;\r\n  padding: 40px 15px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  border: 3px dashed;\r\n  font-size: 20px;\r\n  position: relative;\n}\n.draging[data-v-bff88b8a] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  border: 3px dashed #222d32;\n}\n.file-input label[data-v-bff88b8a] {\r\n  background: #222d32;\r\n  color: #fff;\n}\ni.fa.fa-cloud-upload[data-v-bff88b8a] {\r\n  font-size: 85px;\n}\n#file[data-v-bff88b8a] {\r\n  opacity: 0;\r\n  z-index: -1;\n}\n.file-input[data-v-bff88b8a] {\r\n  width: 280px;\r\n  margin: auto;\r\n  position: relative;\r\n  height: 86px;\n}\n.images-preview[data-v-bff88b8a] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 20px;\n}\n.img-wrapper[data-v-bff88b8a] {\r\n  width: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  height: 105px;\r\n  justify-content: space-between;\r\n  background: #fff;\r\n  box-shadow: 5px 5px 20px #3e3737;\r\n  margin-bottom: 32px;\n}\nimg[data-v-bff88b8a] {\r\n  max-height: 105px;\n}\n.files[data-v-bff88b8a] {\r\n  font-size: 12px;\r\n  background: #fff;\r\n  color: red;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n  padding: 3px 6px;\n}\n.name[data-v-bff88b8a] {\r\n  overflow: hidden;\r\n  height: 18px;\n}\n.upload-control[data-v-bff88b8a] {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  padding: 10px;\r\n  padding-bottom: 4px;\r\n  text-align: right;\n}\n.label[data-v-bff88b8a] {\r\n  padding: 2px 5px;\r\n  margin-right: 10px;\r\n  border: 2px solid #222d32;\r\n  border-radius: 3px;\r\n\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  color: #222d32;\n}\n.file-input label[data-v-bff88b8a] {\r\n  background: #fff;\r\n  color: #222d32;\r\n  padding: 10px 40px;\n}\n.cancel[data-v-bff88b8a] {\r\n  background: #fff;\r\n\r\n  cursor: pointer;\r\n  color: red;\r\n  width: 110px;\n}\n.activeBtn[data-v-bff88b8a] {\r\n  background: #d58512 !important;\r\n  color: #000 !important;\r\n  border: none;\n}\r\n",""])}}]);