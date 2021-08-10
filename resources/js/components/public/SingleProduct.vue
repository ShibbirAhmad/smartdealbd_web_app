<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <frontend-header></frontend-header>
    <div id="container" v-if="!isLoading">
      <div class="container">
        <div class="single-product-box" >
          <div class="row">

            <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="product-image-viewer"  >
                  <image-zoom v-if="product_images.length"
                    :regular="base_url+product_images[0].product_image"
                    img-class="single_product_image"
                    >
                  </image-zoom>

                  </div>
              <div class="preview_img_box_container">
               <div v-for="(image,index) in product_images" :key="index" :class="{__active_border :index==0}" class="__preview_image_box">
                  <img   @click="displayeImageFromBox"  class="__preview_img"
                        :src="base_url+image.product_image"
                    />
              </div>

             </div>
            </div>

            <div class="col-lg-4 col-md-4 col-xs-12">
               <ul class="list-unstyled description">
                  <li>
                 <h2 class="title" itemprop="name">{{ product.name }}</h2>

                  </li>
                    <li>
                      <h4 class="p_code">
                        <b>Product Code:</b>
                        <span itemprop="mpn">{{ product.product_code }}</span>
                      </h4>
                    </li>

                  </ul>

                  <div id="product">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="s_price_container">
                              <h4> Price </h4>
                              <p >
                                    <span class="price-old price_in_small" v-if="product.discount">&#2547;{{product.sale_price}}</span>
                                    <span class="price-new price_in_small">&#2547;{{product.price}}</span>
                               </p>
                          </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-xs-12" v-if="product.product_variant.length>0 && product.product_attribute">

                        <div class="ps-product__variations">
                            <div class="pr_switch_wrap">
                                <div class="product-attributes">

                                            <div v-if="product.product_attribute.attribute.name.toLowerCase()=='size'" class="text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color"
                                                data-type="text">
                                                <label class="attribute-name">Size</label>
                                                <div class="attribute-values">
                                                    <ul class="text-swatch attribute-swatch color-swatch">
                                                            <li v-for="(variant,index) in product.product_variant" :key="index"
                                                                class="attribute-swatch-item pe-none">
                                                                <div>
                                                                    <label>
                                                                        <input class="product-filter-item variant_size"
                                                                            type="radio" v-model="cart.variant_id" name="size"
                                                                            :value="variant.variant.id" >
                                                                        <span>{{ variant.variant.name }}</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                    </ul>
                                                </div>
                                            </div>



                                </div>
                            </div>
                        </div>


                      </div>
                       <div class="col-lg-12 col-md-12 col-xs-12">
                        <div class="qty_container">
                          <h4 >
                            <b>Quantity</b>
                          </h4>

                          <div @click="dicrementQty" class="incrementor_plus">
                             <i  class="fa fa-plus"></i>
                          </div>

                              <input
                              type="text"
                              name="quantity"
                              v-model="cart.quantity"
                              value="1"
                              style="height: 36px !important;width:210px;"
                              class="form-control input_qty"
                              @change="validation"
                              @keyup="validation"
                            />
                           <div @click="incrementQty" class="incrementor_minus">
                             <i  class="fa fa-minus"></i>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="row">


                      <div class="col-lg-6">
                        <button
                          @click.prevent="CartToAdd"
                          type="button"
                          id="button-cart"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;"
                          >
                         <span>Add To Cart</span>
                        </button>
                      </div>

                         <div class="col-lg-6">
                        <button
                          @click.prevent="buyNow"
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;background:#000;"
                          >Buy Now</button>
                      </div>
                    </div>

                  </div>
            </div>

            <div class="col-lg-4 col-md-4 col-xs-12">

                <div class="order_now_container">
                       <p> <i class="fa fa-check"></i>  Order today and receive it within 02 - 05 days</p>
                 </div>

                 <div class="call_now_container">
                       <p>  Have question about this product ? please call</p>
                      <h1> <a  :href="'tel:'+general_setting.header_contact_number"><i class="fa fa-phone "></i> {{ general_setting.header_contact_number }}</a> </h1>
                 </div>


            </div>

         </div>
        </div>

          <div class="product-details-tabe">
               <ul class="details-tab-menu-list">
                  <li class="details-tab-menu-item"  @click="tab_content=1" :class="{'tab-menu-item-active':tab_content==1}">Description</li>
                    <li class="details-tab-menu-item" @click="tab_content=2" :class="{'tab-menu-item-active':tab_content==2}" >How To Buy</li>
                      <li class="details-tab-menu-item"  @click="tab_content=3" :class="{'tab-menu-item-active':tab_content==3}">Return Policy</li>
                 </ul>
              <div class="product-tab-content">
                <div v-html="product.details" class="product-details" :class="{block:tab_content==1}"></div>
                <div class="how-to-buy" :class="{block:tab_content==2}">
                  <ul>
                    <li class="h-b-li">Select number of product you want to buy.</li>
                    <li class="h-b-li">Click <strong>Add To Cart</strong> Button</li>
                    <li class="h-b-li">Then go to checkout page</li>
                    <li class="h-b-li">If you are a new user, please click on Sign Up.provide us uour valid inormation information.</li>
                    <li class="h-b-li">Complete your checkout, we received your order, and for order confirmation or customer service contact with you</li>
                  </ul>
                </div>
                 <div class="how-to-buy"  :class="{block:tab_content==3}">
                  <ul>
                    <li class="h-b-li">If your product is damaged, defective, incorrect or incomplete at the time of delivery, please file a return request on call to customer care support number within 3 days of the delivery date</li>
                    <li class="h-b-li">Change of mind is not applicable as a Return Reason for this product</li>

                  </ul>
                </div>

              </div>
              </div>


        <div class="row realted-producs">
            <h3 class="title" >Related Products</h3>
             <div class="col-lg-3 col-sm-4 col-md-3 col-xs-6 width_20 small_width" v-for="(product,index) in related_products" :key="index">
            <div class="product-card ">
              <div class="product-card-body">
                <router-link :to="{name: 'single', params: { slug: product.slug } }">

                 <img :src="  product_thumbnail_link + product.thumbnail_img "  :alt="product.name" />

                </router-link>
                <div class="product-detail small-detail">
                  <h4>   <router-link class="product-link" :to="{name: 'single', params: { slug: product.slug } }">{{ product.name }}</router-link ></h4>
                  <p class="price">
                    <span class="price-new">{{
                      product.price
                    }}</span>
                    <span
                      class="price-old"
                      v-if="product.discount"
                      >&#2547; {{ product.sale_price }}</span
                    >

                  </p>
                </div>
              </div>
               <div class="product-card-footer">
                    <button class="btn btn-primary btnQuick" style="cursor:pointer" @click="quick_v_product_id=product.id"  >view</button>
              </div>
            </div>
          </div>
           <infinite-loading @infinite="getRelatedProducts">
            <div slot="no-more"></div>
          </infinite-loading>

      </div>

      </div>
    </div>
    <frontend-footer></frontend-footer>
      <quick-view v-if="quick_v_product_id" v-on:clicked="closedModal($event)" :quick_v_p_id="quick_v_product_id">  </quick-view>

  </div>

</template>


<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import imageZoom from 'vue-image-zoomer';
import 'lazysizes' ;
import Swal from 'sweetalert2' ;

export default {
  beforeCreated() {
    this.validation();
    this.$store.dispatch("general_setting");
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.validation();
    }, 200);
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.image_base_link,
      product_thumbnail_link: this.$store.state.image_thumbnail_link,
       cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
      related_products: [],
      page: 1,
      tab_content:1,
      quick_v_product_id:"",
      o_modal:false,
      zoomerOptions: {
        zoomFactor: 4,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_position: "bottom",

        // zoomer_pane_position: "right",
      },
    };
  },
  methods: {

    displayeImageFromBox(e){
      let target_element = e.target;
      let active_images = document.getElementsByClassName("__active_border");

      if (active_images.length > 0) {
        for (let i = 0; i < active_images.length; i++) {
          active_images[i].classList.remove("__active_border");
        }
      }

      target_element.classList.add("__active_border");
        let big_image = document.getElementsByClassName("single_product_image");
         big_image[0].setAttribute("src",target_element.src);
    },

    incrementQty(){
      if (this.cart.quantity > 1) {
          let qty = this.cart.quantity
          this.cart.quantity= qty - 1 ;
      }
    },
    dicrementQty(){
           let qty = this.cart.quantity
          this.cart.quantity= qty + 1 ;
    },

    CartToAdd() {
         if (this.product.product_variant ) {
         this.cart.attrribute_id = this.product.product_attribute.attribute.id ;
        if (this.cart.variant_id < 1) {
             Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'please,select product '+this.product.product_attribute.attribute.name,
                showConfirmButton: false,
                timer: 1500
              })
            return ;
        }
      }
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
         // console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("getCartContent");
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
     buyNow() {
       if (this.product.product_variant ) {
         this.cart.attrribute_id = this.product.product_attribute.attribute.id ;
        if (this.cart.variant_id < 1) {
             Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'please,select product '+this.product.product_attribute.attribute.name,
                showConfirmButton: false,
                timer: 1500
              })
            return ;
        }
      }
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
         // console.log(resp);
          if (resp.data.status == "SUCCESS") {
              this.$store.dispatch("getCartContent");
              this.$toasted.show(resp.data.message, {
              position: "bottom-left",
              type: "success",
              duration: 2000,
            });
           this.$router.push({ name: "Chekout" });
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
    validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }
      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint() {
     // this.product.product_variant.length=0;
      let index = this.variant_index;
      let variant_id = this.product.product_variant[index].variant_id;
      let attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },

    getRelatedProducts($state) {
      axios
        .get("/_public/related/products/?page="+this.page, {
          params: {
            product_slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.related_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
         // console.log(error);
        });
    },
  closedModal(close){
       this.quick_v_product_id="";
    },




  },

  mounted() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");

  },

  computed: {
    product() {
      return this.$store.getters.single_product;
    },
     general_setting() {
      return this.$store.getters.general_setting;
    },

    product_images(){

      return this.$store.getters.product_images;
    },
     user() {
      return this.$store.getters.user;
    },

  },

  components: {
    Loading,
    imageZoom
  },

  watch:{
    product_images:function(value){

      if(Object.keys(value).length>0){
       this.isLoading=false;
      }

    }
  }
};
</script>

<style scoped>
img.responsive-image.preview-box {
  width: 350px !important;
  height: 350px !important;

}

.product-details-tabe {
  margin-top: 20px;
}


.btnQuick:hover{

   background: #ff4d03;

}

.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}


</style>

