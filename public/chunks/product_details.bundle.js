(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{101:function(t,a,i){var e=i(547);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(5)(e,r);e.locals&&(t.exports=e.locals)},1154:function(t,a,i){"use strict";i.r(a);var e=i(15),r=i.n(e),s=(i(27),i(375)),n=i.n(s),o=(i(545),i(283)),c=i.n(o);function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,a){if(!t)return;if("string"==typeof t)return l(t,a);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(t,a)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,a){(null==a||a>t.length)&&(a=t.length);for(var i=0,e=new Array(a);i<a;i++)e[i]=t[i];return e}var u={beforeCreated:function(){var t=this;this.validation(),this.$store.dispatch("general_setting"),window.scrollTo(0,0),setTimeout((function(){t.validation()}),200)},data:function(){return{isLoading:!0,fullPage:!0,disabled:!0,variant_index:"",base_url:this.$store.state.image_base_link,product_thumbnail_link:this.$store.state.image_thumbnail_link,cart:{product_id:"",variant_id:"",attrribute_id:"",quantity:1},related_products:[],page:1,tab_content:1,quick_v_product_id:"",o_modal:!1,zoomerOptions:{zoomFactor:4,pane:"pane",hoverDelay:300,namespace:"zoomer-left",move_by_click:!0,scroll_items:4,choosed_thumb_border_color:"#ff3d00",scroller_position:"bottom"}}},methods:{displayeImageFromBox:function(t){var a=t.target,i=document.getElementsByClassName("__active_border");if(i.length>0)for(var e=0;e<i.length;e++)i[e].classList.remove("__active_border");a.classList.add("__active_border"),document.getElementsByClassName("single_product_image")[0].setAttribute("src",a.src)},incrementQty:function(){if(this.cart.quantity>1){var t=this.cart.quantity;this.cart.quantity=t-1}},dicrementQty:function(){var t=this.cart.quantity;this.cart.quantity=t+1},CartToAdd:function(){var t=this;this.product.product_variant.length>0&&(this.cart.attrribute_id=this.product.product_attribute.attribute.id,this.cart.variant_id<1)?c.a.fire({position:"top-center",icon:"error",title:"please,select product "+this.product.product_attribute.attribute.name,showConfirmButton:!1,timer:1500}):axios.get("/_public/addToCart",{params:{id:this.$route.params.id,attribute_id:this.cart.attrribute_id,variant_id:this.cart.variant_id,quantity:this.cart.quantity}}).then((function(a){"SUCCESS"==a.data.status?(t.$toasted.show(a.data.message,{position:"top-center",type:"success",duration:2e3}),t.$store.dispatch("getCartContent")):"error"==a.data.status&&t.$toasted.show(a.data.message,{position:"top-center",type:"error",duration:4e3})})).then((function(t){}))},buyNow:function(){var t=this;this.product.product_variant.length>0&&(this.cart.attrribute_id=this.product.product_attribute.attribute.id,this.cart.variant_id<1)?c.a.fire({position:"top-center",icon:"error",title:"please,select product "+this.product.product_attribute.attribute.name,showConfirmButton:!1,timer:1500}):axios.get("/_public/addToCart",{params:{id:this.$route.params.id,attribute_id:this.cart.attrribute_id,variant_id:this.cart.variant_id,quantity:this.cart.quantity}}).then((function(a){"SUCCESS"==a.data.status?(t.$store.dispatch("getCartContent"),t.$toasted.show(a.data.message,{position:"bottom-left",type:"success",duration:2e3}),t.$router.push({name:"Chekout"})):"error"==a.data.status&&t.$toasted.show(a.data.message,{position:"top-center",type:"error",duration:4e3})})).then((function(t){}))},validation:function(){if(this.cart.quantity<1)return this.cart.quantity=1,void alert("Quantity at least 1");this.product.product_attribute&&this.cart.attrribute_id<1?this.disabled=!0:this.disabled=!1},SelectVaraint:function(){var t=this.variant_index,a=this.product.product_variant[t].variant_id,i=this.product.product_variant[t].variant.attribute_id;this.cart.attrribute_id=i,this.cart.variant_id=a,this.validation()},getRelatedProducts:function(t){var a=this;axios.get("/_public/related/products/?page="+this.page,{params:{product_id:this.$route.params.id}}).then((function(i){var e;i.data.data.length?(a.page+=1,(e=a.related_products).push.apply(e,d(i.data.data)),t.loaded()):t.complete()})).catch((function(t){}))},closedModal:function(t){this.quick_v_product_id=""}},created:function(){this.getRelatedProducts(),this.$store.dispatch("product_images",this.$route.params.id),this.$store.dispatch("single_product",this.$route.params.id),this.$store.dispatch("user")},computed:{product:function(){return this.$store.getters.single_product},general_setting:function(){return this.$store.getters.general_setting},product_images:function(){return this.$store.getters.product_images},user:function(){return this.$store.getters.user}},components:{Loading:r.a,imageZoom:n.a},watch:{product_images:function(t){Object.keys(t).length>0&&(this.isLoading=!1)}}},_=(i(546),i(1)),p=Object(_.a)(u,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrapper-wide"},[i("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),i("frontend-header"),t._v(" "),t.isLoading?t._e():i("div",{attrs:{id:"container"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"single-product-box"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-md-4 col-xs-12"},[i("div",{staticClass:"product-image-viewer"},[t.product_images.length?i("image-zoom",{attrs:{regular:t.base_url+t.product_images[0].product_image,"img-class":"single_product_image"}}):t._e()],1),t._v(" "),i("div",{staticClass:"preview_img_box_container"},t._l(t.product_images,(function(a,e){return i("div",{key:e,staticClass:"__preview_image_box",class:{__active_border:0==e}},[i("img",{staticClass:"__preview_img",attrs:{src:t.base_url+a.product_image},on:{click:t.displayeImageFromBox}})])})),0)]),t._v(" "),i("div",{staticClass:"col-lg-4 col-md-4 col-xs-12"},[i("ul",{staticClass:"list-unstyled description"},[i("li",[i("h2",{staticClass:"title",attrs:{itemprop:"name"}},[t._v(t._s(t.product.name))])]),t._v(" "),i("li",[i("div",{staticClass:"s_price_container"},[i("h4",[t._v(" মূল্যঃ  ")]),t._v(" "),i("p",[t.product.discount?i("span",{staticClass:"price-old price_in_small",staticStyle:{"font-size":"18px"}},[t._v("৳"+t._s(t.product.sale_price))]):t._e(),t._v(" "),i("span",{staticClass:"price-new price_in_small"},[t._v("৳"+t._s(t.product.price))])])])]),t._v(" "),i("li",[i("h4",{staticClass:"p_code"},[i("b",[t._v(" প্রোডাক্ট কোডঃ "+t._s(t.product.product_code)+" ")])])])]),t._v(" "),i("div",{attrs:{id:"product"}},[i("div",{staticClass:"row"},[t.product.product_variant.length>0&&t.product.product_attribute?i("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[i("div",{staticClass:"ps-product__variations"},[i("div",{staticClass:"pr_switch_wrap"},[i("div",{staticClass:"product-attributes"},["size"==t.product.product_attribute.attribute.name.toLowerCase()?i("div",{staticClass:"text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color",attrs:{"data-type":"text"}},[i("label",{staticClass:"attribute-name"},[t._v("Size")]),t._v(" "),i("div",{staticClass:"attribute-values"},[i("ul",{staticClass:"text-swatch attribute-swatch color-swatch"},t._l(t.product.product_variant,(function(a,e){return i("li",{key:e,staticClass:"attribute-swatch-item pe-none"},[i("div",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.variant_id,expression:"cart.variant_id"}],staticClass:"product-filter-item variant_size",attrs:{type:"radio",name:"size"},domProps:{value:a.variant.id,checked:t._q(t.cart.variant_id,a.variant.id)},on:{change:function(i){return t.$set(t.cart,"variant_id",a.variant.id)}}}),t._v(" "),i("span",[t._v(t._s(a.variant.name))])])])])})),0)])]):t._e()])])])]):t._e(),t._v(" "),i("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[i("div",{staticClass:"qty_container"},[t._m(0),t._v(" "),i("div",{staticClass:"incrementor_plus",on:{click:t.dicrementQty}},[i("i",{staticClass:"fa fa-plus"})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cart.quantity,expression:"cart.quantity"}],staticClass:"form-control input_qty",staticStyle:{height:"36px !important",width:"210px"},attrs:{type:"text",name:"quantity",value:"1"},domProps:{value:t.cart.quantity},on:{change:t.validation,keyup:t.validation,input:function(a){a.target.composing||t.$set(t.cart,"quantity",a.target.value)}}}),t._v(" "),i("div",{staticClass:"incrementor_minus",on:{click:t.incrementQty}},[i("i",{staticClass:"fa fa-minus"})])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-5 col-md-5"},[i("button",{staticClass:"btn  btn-lg btn-block btn_buy_cart",staticStyle:{background:"green",color:"#fff"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.buyNow(a)}}},[t._v("অর্ডার করুন")])]),t._v(" "),i("div",{staticClass:"col-lg-5 col-md-5"},[i("button",{staticClass:"btn btn-primary btn-lg btn-block btn_buy_cart",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.CartToAdd(a)}}},[i("span",[t._v("Add To Cart")])])])])])]),t._v(" "),i("div",{staticClass:"col-lg-4 col-md-4 col-xs-12"},[t._m(1),t._v(" "),i("div",{staticClass:"call_now_container"},[i("p",[t._v("  Have question about this product ? please call")]),t._v(" "),i("h2",[i("a",{attrs:{href:"tel:"+t.general_setting.header_contact_number}},[i("i",{staticClass:"fa fa-phone "}),t._v(" "+t._s(t.general_setting.header_contact_number))])])])])])]),t._v(" "),i("div",{staticClass:"product-details-tabe"},[i("ul",{staticClass:"details-tab-menu-list"},[i("li",{staticClass:"details-tab-menu-item",class:{"tab-menu-item-active":1==t.tab_content},on:{click:function(a){t.tab_content=1}}},[t._v("Description")]),t._v(" "),i("li",{staticClass:"details-tab-menu-item",class:{"tab-menu-item-active":2==t.tab_content},on:{click:function(a){t.tab_content=2}}},[t._v("How To Buy")]),t._v(" "),i("li",{staticClass:"details-tab-menu-item",class:{"tab-menu-item-active":3==t.tab_content},on:{click:function(a){t.tab_content=3}}},[t._v("Return Policy")])]),t._v(" "),i("div",{staticClass:"product-tab-content"},[i("div",{staticClass:"product-details",class:{block:1==t.tab_content},domProps:{innerHTML:t._s(t.product.details)}}),t._v(" "),i("div",{staticClass:"how-to-buy",class:{block:2==t.tab_content}},[t._m(2)]),t._v(" "),i("div",{staticClass:"how-to-buy",class:{block:3==t.tab_content}},[t._m(3)])])]),t._v(" "),i("div",{staticClass:"row realted-producs"},[i("h3",{staticClass:"title"},[t._v("Related Products")]),t._v(" "),t._l(t.related_products,(function(a,e){return i("div",{key:e,staticClass:"col-lg-2 col-md-2 col-xs-6 custom_width small_width"},[i("div",{staticClass:"product-card "},[i("div",{staticClass:"product-card-body"},[i("router-link",{attrs:{to:{name:"product_details",params:{id:a.id}}}},[i("img",{attrs:{src:t.product_thumbnail_link+a.thumbnail_img,alt:a.name}})]),t._v(" "),i("div",{staticClass:"product-detail small-detail"},[i("h4",[i("router-link",{staticClass:"product-link",attrs:{to:{name:"product_details",params:{id:a.id}}}},[t._v(t._s(a.name.substring(0,20))+"\n                       "),a.name.length>20?i("span",[t._v("...")]):t._e()])],1),t._v(" "),i("p",{staticClass:"price"},[i("span",{staticClass:"price-new"},[t._v("৳"+t._s(a.price))]),t._v(" "),a.discount?i("span",{staticClass:"price-old"},[t._v("৳"+t._s(a.sale_price))]):t._e()])])],1),t._v(" "),i("div",{staticClass:"product-card-footer"},[i("router-link",{staticClass:"btn btn-primary btnQuick",staticStyle:{cursor:"pointer"},attrs:{to:{name:"product_details",params:{id:a.id}}}},[t._v("\n                    অর্ডার করুন\n                  ")])],1)])])})),t._v(" "),i("infinite-loading",{on:{infinite:t.getRelatedProducts}},[i("div",{attrs:{slot:"no-more"},slot:"no-more"})])],2)])]),t._v(" "),i("frontend-footer"),t._v(" "),t.quick_v_product_id?i("quick-view",{attrs:{quick_v_p_id:t.quick_v_product_id},on:{clicked:function(a){return t.closedModal(a)}}}):t._e()],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h4",[a("b",[this._v("Quantity")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"order_now_container"},[a("p",[a("i",{staticClass:"fa fa-check"}),this._v("  Order today and receive it within 02 - 05 days")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",[i("li",{staticClass:"h-b-li"},[t._v("Select number of product you want to buy.")]),t._v(" "),i("li",{staticClass:"h-b-li"},[t._v("Click "),i("strong",[t._v("Add To Cart")]),t._v(" Button")]),t._v(" "),i("li",{staticClass:"h-b-li"},[t._v("Then go to checkout page")]),t._v(" "),i("li",{staticClass:"h-b-li"},[t._v("If you are a new user, please click on Sign Up.provide us uour valid inormation information.")]),t._v(" "),i("li",{staticClass:"h-b-li"},[t._v("Complete your checkout, we received your order, and for order confirmation or customer service contact with you")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",{staticClass:"h-b-li"},[this._v("If your product is damaged, defective, incorrect or incomplete at the time of delivery, please file a return request on call to customer care support number within 3 days of the delivery date")]),this._v(" "),a("li",{staticClass:"h-b-li"},[this._v("Change of mind is not applicable as a Return Reason for this product")])])}],!1,null,"48433dbb",null);a.default=p.exports},546:function(t,a,i){"use strict";var e=i(101);i.n(e).a},547:function(t,a,i){(t.exports=i(4)(!1)).push([t.i,"\nimg.responsive-image.preview-box[data-v-48433dbb] {\r\n  width: 350px !important;\r\n  height: 350px !important;\n}\n.product-details-tabe[data-v-48433dbb] {\r\n  margin-top: 20px;\n}\n.btnQuick[data-v-48433dbb]:hover{\r\n\r\n   background: #ff4d03;\n}\n.v-lazy-image[data-v-48433dbb] {\r\n  filter: blur(1px);\r\n  transition: filter 0.5s;\n}\n.v-lazy-image-loaded[data-v-48433dbb] {\r\n  filter: blur(0);\n}\r\n\r\n\r\n",""])}}]);