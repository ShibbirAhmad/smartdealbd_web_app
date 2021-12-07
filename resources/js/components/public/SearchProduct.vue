<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" style="margin-left:30px">
            <div class="row">
              <div class="col-lg-8">
                <input
                  class="form-control"
                  placeholder="Search Product"
                  v-model="search"
                  @keyup="searchProducts"
                />
              </div>
              <div class="col-lg-4">
                <button
                  type="button"
                  class="btn btn-success"
                  @click.prevent="searchProducts"
                >Search More</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:15px;">

          <div
            class="col-lg-3 custom_padding col-sm-6 col-md-3 col-xs-6 width_20 small_width"
           v-for="product in products" v-if="products"
            :key="product.id"
          >
            <div class="product-card small-card">
              <div class="product-card-body">
                <router-link
                  :to="{ name: 'product_details', params: { id:product.id } }"
                >
                   <img :src="  product_thumbnail_link + product.thumbnail_img "  :alt="product.name" />
                </router-link>
                <div class="product-detail">
                  <h4>
                    <router-link
                      class="product-link"
                      :to="{ name: 'product_details', params: { id:product.id } }"
                      >{{ product.name.substring(0,20) }}
                         <span v-if="product.name.length > 20">...</span></router-link
                    >
                  </h4>
                  <p class="price">
                    <span class="price-new">&#2547;{{ product.price }}</span>
                    <span class="price-old" v-if="product.discount">&#2547; {{
                      product.sale_price
                    }}</span>


                  </p>
                </div>
              </div>
                <div class="product-card-footer">
                  <router-link  v-if="product.product_attribute" :to="{ name:'product_details',params:{ id:product.id }}"  class="btn btn-primary btnQuick" style="cursor: pointer" >
                  অর্ডার করুন
                </router-link>

                <button v-else @click="buyNow(product.id)"  class="btn btn-primary btnQuick" style="cursor: pointer" >
                  অর্ডার করুন
                </button>
                </div>
            </div>
          </div>



          <div class="col-lg-12 text-center" v-if="products.length < 1 ">
            <h3 class="alert alert-warning">No product Found</h3>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
    <quick-view v-if="quick_v_product_id" v-on:clicked="closedModal($event)" :quick_v_p_id="quick_v_product_id">  </quick-view>

  </div>
</template>
<script>
export default {
  created() {
    this.searchProducts();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      products: "",
      search: this.$route.params.search,
       product_thumbnail_link: this.$store.state.image_thumbnail_link,
       quick_v_product_id:"",
       o_modal:false
    };
  },

  methods: {
   buyNow(id) {
      axios
        .get("/_public/addToCart", {
          params: {
            id:id,
            quantity: 1,
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
    },
    searchProducts() {
      this.$Progress.start();
      axios
        .get("/_public/search/products/" + this.search)
        .then((resp) => {
          console.log(resp);
          this.products = resp.data;
          this.$Progress.finish();
        })
        .catch((error) => {
          console.log(error);
        });
    },


  closedModal(close){
       this.quick_v_product_id="";
    }


  },
};
</script>

<style  scoped>

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