<template>
  <div >
    <div class="header" id="__header_main">
    <div class="main-header">
      <div class="container flex">
        <div class="main-header-left">
          <li >
            <i @click.prevent="menuShow" class="fa fa-bars mobile_menu_bar" id="__icon_fa_menu"></i>
          </li>
          <li>
            <a href="/">
            <img :src="base_url+general_setting.logo" class="site-logo" />
            </a>
          </li>
          <li>
            <form   id="search_form"  @submit.prevent="subMitAutoComppleteForm">
             <vue-typer id="type_writer" class="auto_writer" text=' HOME, LIVING KITCHEN, GADGET, ELECTRONICS '></vue-typer>
              <input
                type="text"
                class="search-input"
                @keyup="autocomplteSearch"
                @mouseover="hideAutoWriting"
                @mouseout="displayAutoWriting"
                v-model="search"
              />
              <button class="search-btn"><i class="fa fa-search"></i></button>
              <div class="search-content" v-if="search_products.length >= 1">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="(product, index) in search_products"
                    :key="index"
                  >
                     <router-link
                      :to="{ name: 'single', params: { slug: product.slug } }"
                      class="search-router-link"
                      >
                        <div class="__search_porducts_details">
                        <img :src="base_url+product.product_image[0].product_image" class="search_result_img">
                          <div class="search_name_price">
                            <p> {{ product.name }} </p>
                          <p>
                             &#2547;{{ product.price }}
                            <small><del>&#2547;{{ product.sale_price }} </del></small></p>
                          </div>
                         </div>

                      </router-link >

                  </li>
                </ul>
              </div>
            </form>
          </li>
        </div>
        <div class="main-header-right">

          <li>
             <a class="contact_no_heading" :href="'tel:'+general_setting.header_contact_number"><i class="fa fa-phone "></i> {{ general_setting.header_contact_number }}</a>
          </li>

        </div>
      </div>
    </div>
     <!-- code here -->

    <div class="menu" id="navbar">

     <!-- left menus start  -->
        <div class="left_menu_container">
          <h4 class="left_menu_headidng" > <i class="fa fa-bars" id="left_menu_icon"></i>  Categories </h4>
          <ul class="left_category_menu">
                <li v-for="(left_category,l_c_index) in categories" :key="l_c_index" >
                      <img :src="base_url+left_category.icon_image" class="c_icon_image">
                      <router-link :to="{ name: 'PublcaCategory', params: { slug: left_category.slug } }">
                        {{ left_category.name }}
                      </router-link>
                </li>
          </ul>
        </div>

      <!-- left menus end  -->

      <ul class="menu-list" id="menu_list">
        <li v-for="(category,category_index) in categories" :key="category_index" class="menu-item">
          <router-link v-if="category_index < 10"
            :to="{ name: 'PublcaCategory', params: { slug: category.slug } }"
            class="menu-item-link"
          >
            {{ category.name }}
          </router-link>
          <i
            class="fa fa-angle-down menu-icon"
            @click="shownextElement"
            v-if="category.sub_category.length > 0"
          ></i>
          <ul class="sub-item-list" v-if="category.sub_category.length > 0">
            <li
              class="sub-item"
              v-for="sub_category in category.sub_category"
              :key="sub_category.id"
            >
              <router-link
                :to="{
                  name: 'PublicSubCategory',
                  params: { slug: sub_category.slug },
                }"
                class="sub-item-link"
                >{{ sub_category.name }}</router-link
              >
              <i
                class="fa fa-angle-down sub-menu-icon"
                v-if="sub_category.sub_sub_category.length"
                @click="shownextElement"
              ></i>
              <ul
                class="sub-sub-item-list"
                v-if="sub_category.sub_sub_category.length"
              >
                <li
                  class="sub-sub-item"
                  v-for="sub_sub_category in sub_category.sub_sub_category"
                  :key="sub_sub_category.id"
                >
                  <router-link
                    :to="{
                      name: 'PublicSubSUbCategory',
                      params: { slug: sub_sub_category.slug },
                    }"
                    class="sub-sub-item-link"
                    >{{ sub_sub_category.name }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>


  </div>
  <div class="cart" id="s-cart">
      <div class="cart-header" @click="cartClosed">
        <h4 id="exitcart" class="exitC">CLOSED</h4>
      </div>
      <div class="cart-body">
        <div
          class="row cart_row"
          v-for="(cart_content, index) in cart.content"
          :key="index"
          style="border-bottom: 1px solid #ddd"
        >
          <div class="col-lg-5 col-sm-5 flex" style="align-items: center">
            <ul
              class="p-image-name"
              style="display: flex; margin: 0; padding: 0px 0px"
            >
              <li>
                <img
                  :src="base_url + cart_content.options.image[0].product_image"
                  style="max-width: 35px; max-height: 35px"
                  alt=""
                />
              </li>
              <li>{{ cart_content.name }}</li>
            </ul>
          </div>
          <div class="col-lg-2 col-sm-2 cart_responsive_item flex">
            <u style="text-decoration: none">
              <li class="q-i-d" @click="increamentQuantity(cart_content)">
                <i class="fa fa-angle-up"></i>
              </li>
              <li>{{ cart_content.qty }}</li>
              <li class="q-i-d" @click="decreamentQuantity(cart_content)">
                <i class="fa fa-angle-down"></i>
              </li>
            </u>
          </div>
          <div class="col-lg-2 col-sm-2 cart_responsive_price">
            <h6>{{ cart_content.price }}</h6>
          </div>
          <div class="col-lg-2 col-sm-2 cart_responsive_total">
            <h6>{{ cart_content.price * cart_content.qty }}</h6>
          </div>
          <div class="col-lg-1 col-sm-1 cart_responsive_remove">
            <h6
              class="text-danger"
              style="cursor: pointer"
              @click="cartRemove(cart_content)"
            >
              X
            </h6>
          </div>
        </div>
      </div>
      <div class="cart-empy" v-if="cart.itemCount <= 0">
        <img :src="base_url + 'images/static/cartEmpty.jpg'" />
        <p>Your cart is empty</p>
      </div>
      <div class="cart-footer">
        <router-link  :to="{name:'Chekout'}" class="btn btn-block placebtn"
          >Place Order | <span> {{ cart.total }}</span></router-link>

      </div>
    </div>

    <div class="cart-open" @click="cartOpen">
      <div class="cart-total">
        <i class="fa fa-shopping-bag"></i>
        <h5>{{ cart.total }}</h5>
      </div>
      <div class="cart-item-total">{{ cart.itemCount }} items</div>
    </div>



  <div class="__footer_nav">
    <ul>
      <li> <a href="/"> Home   </a> </li>

      <li> <a @click="cartOpen" >  Cart <sup>{{cart.itemCount}}</sup> </a> </li>

      <li>  <a :href="'tel:'+general_setting.header_contact_number">Call Now</a> </li>

    </ul>
  </div>



  </div>
</template>

<script>
import { VueTyper } from 'vue-typer' ;
export default {
  name: "main-header",
  //props: ["categories"],

  data() {
    return {
      renderComponent: false,
      cartContents: null,
      cartTotal: "",
      display: "none",
      base_url: this.$store.state.image_base_link,
      search_products: [],
      search: "",
    };
  },
  methods: {

   hideAutoWriting(){
       document.getElementById("type_writer").style.display="none";
   },

  displayAutoWriting(){
        document.getElementById("type_writer").style.display="block";
    },

    category() {
      axios
        .get("_public/category")
        .then((resp) => {
          //  this.categories = resp.data.categories;
          this.renderComponent = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    increamentQuantity(cartContent) {
      let quantity = parseInt(cartContent.qty) + parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    decreamentQuantity(cartContent) {
      if (cartContent.qty == 1) {
        alert("Qauntity shoud be at least 1");
        return;
      }

      let quantity = parseInt(cartContent.qty) - parseInt(1);
      axios
        .get("/_public/cartToUpdate", {
          params: {
            qty: quantity,
            rowId: cartContent.rowId,
          },
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.$store.dispatch("getCartContent");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cartRemove(cartContent) {
      if (confirm("are you sure remove this item?")) {
        axios
          .get("/_public/cartToDestroy", {
            params: {
              rowId: cartContent.rowId,
            },
          })
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.$store.dispatch("getCartContent");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    changeDisplay() {
      if (this.display == "block") {
        this.display = "none";
      } else {
        this.display = "block";
      }
    },

    Logout() {
      axios
        .get("/_public/user/logout")
        .then((resp) => {
          console.log(resp);
          this.user = null;
          localStorage.removeItem("user_token");
          location.reload();
        })
        .catch();
    },

    autocomplteSearch() {
      if (this.search.length > 2 ) {
        axios
          .get("/_public/search/products/" + this.search)
          .then((resp) => {
            if (resp.data.length > 0 ) {
              this.search_products = [];
              this.search_products.push(...resp.data);
            } else {
              this.search_products = [];
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.search_products = [];
      }
    },
    subMitAutoComppleteForm() {
      this.$router.push({
        name: "PublicProductSearch",
        params: { search: this.search },
      });
    },
    menuShow() {
      let clickMenu = document.getElementById("toggle-menu");
      let main_menu = document.getElementById("menu_list");
      main_menu.classList.toggle("collapse-manu");
      let menu_icon = document.getElementById("__icon_fa_menu");

      if (menu_icon.classList.contains("fa-bars")) {
        menu_icon.classList.remove("fa-bars");
        menu_icon.classList.add("fa-close");
      } else {
        menu_icon.classList.add("fa-bars");
        menu_icon.classList.remove("fa-close");
      }
    },
    cartOpen() {
      document.getElementById("s-cart").classList.toggle("colapse-cart");
    },
    cartClosed() {
      document.getElementById("s-cart").classList.remove("colapse-cart");
    },
    shownextElement(e) {

      e.target.nextSibling.nextElementSibling.classList.toggle("show");

    },
    handleScrol(){
        let header=document.getElementById('__header_main');

            // if (window.pageYOffset > 1500 ) {
            //   header.classList.add("__sticky");
            // } else {
            //   header.classList.remove("__sticky");
            // }
    }
  },

  mounted() {
    this.$store.dispatch("getCartContent");
    this.$store.dispatch("user");
    this.$store.dispatch("category");
    this.$store.dispatch("general_setting");
   window.addEventListener("scroll", this.handleScrol);

  },
  components : {
    'vue-typer': VueTyper
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    categories() {
      return this.$store.getters.categories;
    },
    cart() {
      return this.$store.getters.cartContent;
    },
    general_setting(){
       return this.$store.getters.general_setting;
    }
  },
};
</script>


<style>
.nav-active {
  display: block !important;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999999999;
}
.q-i-d {
  cursor: pointer;
}
ul.p-image-name li {
  padding: 0px 2px;
  font-size: 12px;
}









</style>
