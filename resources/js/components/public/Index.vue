<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div class="row slider_row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <carousel
          v-if="sliders"
          :items="1"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="2000"
        >
          <a v-for="slider in sliders" :href="slider.url" :key="slider.id">
            <img :src="base_url + slider.image" />
          </a>
        </carousel>
      </div>
    </div>

    <div v-if="banner && banner.status == 1" class="row advertise_banner_row">
      <div class="col-lg-6 col-md-6 col-xs-6">
        <a :href="banner.url_1" target="_blank">
          <img class="advertise_banner_1" :src="base_url + banner.banner_1" />
        </a>
      </div>

      <div class="col-lg-6 col-md-6 col-xs-6">
        <a :href="banner.url_2" target="_blank">
          <img class="advertise_banner_2" :src="base_url + banner.banner_2" />
        </a>
      </div>
    </div>

    <div class="container">
      <div v-if="best_selling_produtcs.length" class="new_arrival_section">
        <h4 class="arrival_heading">Top Selling Products</h4>
        <div class="row">
          <vue-horizontal-list
            :items="best_selling_produtcs"
            :options="best_selling_options"
          >
            <template v-slot:default="{ item }">
              <div class="col-lg-2 col-md-6 item">
                <div class="new_arrival_container">
                  <div class="new_arrival_card">
                    <div class="new_arrival_card_body text-center">
                      <router-link
                        :to="{
                          name: 'single',
                          params: { slug: item.slug },
                        }"
                      >
                        <img
                          :src="product_thumbnail_link + item.thumbnail_img"
                        />
                      </router-link>
                      <p class="arrival_link">
                        <router-link
                          :to="{
                            name: 'single',
                            params: { slug: item.slug },
                          }"
                          >{{ item.name.substring(0, 20) }}
                          <span v-if="item.name.length > 20"> ... </span>
                        </router-link>
                      </p>
                      <p class="price">
                        <span class="price-new"> &#2547; {{ item.price }}</span>
                        <span class="price-old" v-if="item.discount">
                          &#2547; {{ item.sale_price }}</span
                        >

                        <span v-if="item.discount > 0" class="top_s_discount">
                          <i class="fa fa-star discount_star1"> </i>
                          <i class="fa fa-star discount_star2"> </i>
                          {{
                            ((item.discount / item.sale_price) * 100).toFixed(
                              0
                            )
                          }}% <span class="d_off">off</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </vue-horizontal-list>
        </div>
      </div>

      <div>
        <div
          class="product_carousel sale_campaign"
          v-if="campaign.campaign_products.length > 0"
          v-for="(campaign, index) in sale_campaign"
          :key="index"
          :style="{
            backgroundColor: campaign.background_color,
            border: campaign.border_width + 'px solid ' + campaign.border_color,
          }"
        >
          <div>
            <h3>{{ campaign.name }}</h3>
            <span class="campaign_clock">
              <flip-countdown
                :deadline="campaign.expired_date + ' 00:00:00'"
              ></flip-countdown>
            </span>
          </div>
          <carousel
            v-if="Object.keys(campaign.campaign_products).length"
            :nav="false"
            :autoplay="true"
            :autoplayTimeout="4000"
            :responsive="{ 0: { items: 2 }, 600: { items: 5 } }"
          >
            <div
              class="product-thumb clearfix"
              v-for="campaign_product in campaign.campaign_products"
              :key="campaign_product.id"
            >
              <div class="image">
                <router-link
                  :to="{
                    name: 'single',
                    params: { slug: campaign_product.slug },
                  }"
                >
                  <img
                    :src="
                      product_thumbnail_link + campaign_product.thumbnail_img
                    "
                  />
                </router-link>
              </div>
              <div class="caption">
                <h4>
                  <router-link
                    :to="{
                      name: 'single',
                      params: { slug: campaign_product.slug },
                    }"
                    >{{ campaign_product.name.substring(0, 20) }}
                    <span v-if="product.name.length > 20"
                      >...</span
                    ></router-link
                  >
                </h4>
                <p class="price">
                  <span class="price-new">
                    &#2547; {{ campaign_product.price }}</span
                  >
                  <span class="price-old" v-if="campaign_product.discount">
                    &#2547; {{ campaign_product.sale_price }}</span
                  >

                  <span
                    v-if="campaign_product.discount > 0"
                    class="flas_p_discount"
                  >
                    <i class="fa fa-star discount_star1"> </i>
                    <i class="fa fa-star discount_star2"> </i>
                    {{
                      (
                        (campaign_product.discount /
                          campaign_product.sale_price) *
                        100
                      ).toFixed(0)
                    }}% <span class="d_off">off</span>
                  </span>
                </p>
              </div>
            </div>
          </carousel>
        </div>

        <div>
          <div
            class="c-product"
            v-for="(category, idx) in home_page_products"
            :key="idx"
            v-if="category.products.length"
          >
            <div class="c-product-header">
              <h4 class="category-heading">{{ category.name }}</h4>
              <div class="category_view_all">
                <router-link
                  :to="{
                    name: 'PublcaCategory',
                    params: { slug: category.slug },
                  }"
                  class="c-v-all"
                  >View All
                </router-link>
              </div>
            </div>

            <div class="row landing_page_all_p_row">
              <div
                class="col-lg-2 col-md-2 col-xs-6 custom_width small_width"
                v-for="(product, index) in category.products"
                :key="index"
              >
                <div class="product-card">
                  <div class="product-card-body">
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug } }"
                    >
                      <img
                        :src="product_thumbnail_link + product.thumbnail_img"
                      />
                    </router-link>
                    <div class="product-detail">
                      <h4>
                        <router-link
                          class="product-link"
                          :to="{
                            name: 'single',
                            params: { slug: product.slug },
                          }"
                          >{{ product.name.substring(0, 20) }}
                          <span v-if="product.name.length > 20"
                            >...</span
                          ></router-link
                        >
                      </h4>
                      <p class="price">
                        <span class="price-new"
                          >&#2547;{{ product.price }}</span
                        >
                        <span class="price-old" v-if="product.discount">
                          &#2547;{{ product.sale_price }}</span
                        >
                      </p>
                    </div>
                  </div>

                  <div class="product-card-footer">

                    <router-link  v-if="product.product_attribute" :to="{ name:'single',params:{ slug: product.slug }}"  class="btn btn-primary btnQuick" style="cursor: pointer" >
                      অর্ডার করুন
                    </router-link>

                    <button v-else @click="buyNow(product.slug)"  class="btn btn-primary btnQuick" style="cursor: pointer" >
                      অর্ডার করুন
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @distange="1" @infinite="homeProduct">
            <div slot="no-more"></div>
          </infinite-loading>
        </div>
      </div>

      <div class="row service_row">
        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-thumbs-up service_icon"> </i>
              </div>
            </div>
            <h4>High-quality Goods</h4>
            <p>Enjoy top quality items for less</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-headphones service_icon"> </i>
              </div>
            </div>
            <h4>24/7 Livechat</h4>
            <p>Get instant assistance whenever you need it</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-truck service_icon"> </i>
              </div>
            </div>
            <h4>Express Shipping</h4>
            <p>Fast & reliable delivery options</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-credit-card service_icon"> </i>
              </div>
            </div>
            <h4>Secure Payment</h4>
            <p>Multiple safe payment methods</p>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer></frontend-footer>
    <quick-view
      v-if="quick_v_product_id"
      v-on:clicked="closedModal($event)"
      :quick_v_p_id="quick_v_product_id"
    >
    </quick-view>
  </div>
</template>

<script>
import Vue from "vue";
import FlipCountdown from "vue2-flip-countdown";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import carousel from "vue-owl-carousel";
import VueHorizontalList from "vue-horizontal-list";
Vue.use(Loading);
export default {

  data() {
    return {
      loading: true,
      page: 1,
      offers: [],
      product_id: null,
      base_url: this.$store.state.image_base_link,
      product_thumbnail_link: this.$store.state.image_thumbnail_link,
      isScroll: 0,
      quick_v_product_id: "",
      o_modal: false,
      home_page_products: [],
      best_selling_options: {
        responsive: [
          { end: 450, size: 3 },
          { start: 450, end: 768, size: 4 },
          { start: 768, end: 992, size: 4 },
          { size: 6 },
        ],
        list: {
          windowed: 600,
          padding: 24,
        },
        position: {
          start: 0,
        },
        autoplay: {
          play: true,
          speed: 1800,
          repeat: true,
        },
      },
    };
  },
  methods: {
     buyNow(slug) {
      axios
        .get("/_public/addToCart", {
          params: {
            slug:slug,
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
    homeProduct($state) {
      axios.get("/_public/products?page=" + this.page)
      .then((resp) => {
        console.log(resp);
        if (resp.data.data.length) {
          this.page += 1;
          this.home_page_products.push(...resp.data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    handleScrol() {
      this.isScroll = 1;
    },

    productDetals(product_id) {
      this.prdoct_modal = true;
      this.product_id = product_id;
    },
    closedModal(close) {
      this.quick_v_product_id = "";
    },
    showCategoryName(id) {
      var x = document.getElementById("subCategoryNameView" + id);
      console.log(x);
      console.log(id);
      x.classList.toggle("displayeBlok");
    },
  },
  components: {
    Loading,
    carousel,
    FlipCountdown,
    VueHorizontalList,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrol);
    this.$store.dispatch("category");
    this.$store.dispatch("sliders");
    this.$store.dispatch("sale_campaign");
  },

  computed: {
    banner() {
      return this.$store.getters.banner;
    },
    category() {
      return this.$store.getters.categories;
    },
    slider_banner() {
      return this.$store.getters.slider_banner;
    },
    best_selling_produtcs() {
      return this.$store.getters.best_selling_produtcs;
    },
    sliders() {
      return this.$store.getters.sliders;
    },

    sale_campaign() {
      return this.$store.getters.sale_campaign;
    },
  },

};

//show sub  menu in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(() => {
    //find the click element
    let sub_menu = document.getElementsByClassName("show-sub");

    for (let i = 0; i < sub_menu.length; i++) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        let show_sub_menu =
          sub_menu[i].parentElement.querySelector(".left-sub-menu");
        //set active class
        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    }
  }, 2000);
});
</script>

<style scoped>
.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.3s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
