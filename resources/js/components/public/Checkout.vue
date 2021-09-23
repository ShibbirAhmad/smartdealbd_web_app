<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>

    <frontend-header :categories="categories"></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row" v-if="cart.total>0">
          <!--Middle Part Start-->
          <div id="content">
            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="custom-box">
                  <h3 style="text-align:center" >Please Order Now</h3>
                  <form @submit.prevent="chekout">
                    <div class="form-grop">
                      <label class="control-label" for="input-email">Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                         placeholder="আপনার নাম"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        v-model="form.name"
                        autofocus
                      />
                      <has-error :form="form" field="name"></has-error>
                    </div>
                    <br />
                    <div class="form-grop">
                      <label class="control-label" for="mobile_no">Mobile Number</label>
                      <input
                        type="text"
                        name="mobile_no"
                        placeholder=" মোবাইল নাম্বার "
                        class="form-control"
                        maxlength="11"
                        :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                        v-model="form.mobile_no"

                      />
                      <has-error :form="form" field="mobile_no"></has-error>
                    </div>
                    <br />
                    <div class="form-group">
                      <label class="control-label" for="input-password">Address</label>
                      <textarea
                        name="address"
                        placeholder=" সম্পূর্ণ ঠিকানা "
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('address') }"
                        v-model="form.address"
                        @keyup="validation"
                      ></textarea>
                      <has-error :form="form" field="address"></has-error>

                      <br />
                      <div class="form-group">
                        <label class="control-label" for="city">Select Your Area</label>
                        <select
                          name="city"
                         :class="{ 'is-invalid': form.errors.has('city') }"
                          class="form-control"
                          v-model="form.city"
                          @change="selectCity"
                        >

                           <option value="Inside-Dhaka">Inside Dhaka</option>
                           <option value="Outside-Dhaka">Outside Dhaka</option>
                        </select>
                        <has-error :form="form" field="city"></has-error>
                      </div>

                    </div>
                    <div class="form-group">
                       <button   class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="form.busy || disabled" >

                      <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>PLACE ORDER
                    </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-lg-5 col-md-5 col-xs-12 col-sm-12">
                <div class="custom-box">
                  <div class="cart-total">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span v-if="form.shipping_cost">&#2547;{{form.total}}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>

                        <br/>
                         <tr v-if="form.coupon_discount > 0">
                          <td>Coupon Discount</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span v-if="form.coupon_discount">&#2547;{{form.coupon_discount}}</span>
                          </td>
                        </tr>

                        <br />

                        <tr>
                          <td>Shipping cost</td>
                          <td colspan="4"></td>
                          <td>
                            :
                            <span v-if="form.shipping_cost">&#2547;{{ form.shipping_cost }}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td>Total</td>
                          <td colspan="4"></td>
                          <td>
                                 :
                            <span
                              v-if="form.shipping_cost"
                            >&#2547;{{(parseInt(form.total.replace(',','') - parseInt(form.coupon_discount )  )) + parseInt(form.shipping_cost)}}</span>
                            <span v-else>.....</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
               <div class="col-lg-5 col-md-5 col-xs-12 col-sm-12"  style="margin-top:10px;">

                <br/>
                <div class="custom-box" >
                   <ul class="list-group">

                     <li class="list-group-item">  <h5  class=" extra_d coupon-apply" @click.prevent="coupon = !coupon">Have you any cupon? <i class="fa fa-angle-down"></i> </h5>  </li>
                   </ul>

                  <div v-if="coupon" class="coupon">
                    <label for="">
                      <strong>Apply Coupon Here</strong>
                    </label>
                   <div style="display:flex">
                      <input id="coupon_code" style="width:60%" v-model="coupon_code" type="text" class="form-control">
                    <button :disabled="coupon_code.length <=0 " class="btn btn-primary" @click.prevent="applyCoupon" style="border-radius:0px;">Apply</button>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="empty-cart">
            <h4 class="text-uppercase">your cart is empty</h4>
            <img class="empty_cart_icon" src="https://mohasagor.com/public/storage//images/static/cartEmpty.jpg">
            <br/>
            <a href="/" class="home_btn"> Home Page</a>
          </div>
        </div>
      </div>

    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Form, HasError } from "vform";

export default {
  created() {
    this.getCartContent();
    this.$store.dispatch('general_setting');
    setTimeout(() => {
      this.isLoading = false;
      this.validation();
    }, 1500);
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
        name: "",
        address: "",
        city: "Inside-Dhaka",
        total: "",
        cart: "",
        shipping_cost: "",
        coupon_discount: 0,
        coupon_type: "",
        coupon_id: "",
      }),
      isLoading: true,
      fullPage: true,
      cities: "",
      cart_content: {},
      product_discount:0,
      cart: {
        total: 0,
      },
      disabled: true,
       coupon_code: "",
       coupon:false
    };
  },
  methods: {

    chekout() {
      this.form
        .post("/_public/checkout")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {

            window.open('/user/Checkout/success','_self')

          } else {
            this.$toasted.show("something went to wrong", {
                type: "error",
                position: "top-center",
                duration: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },

    selectCity() {

      if (this.form.city == "Inside-Dhaka") {
           this.form.shipping_cost = 70 ;
        }else if(this.form.city == "Outside-Dhaka"){
           this.form.shipping_cost = 120 ;
        }

      this.validation();
    },

    getCartContent(context) {
      axios.get("/_public/cartToContent").then((resp) => {
        // console.log(resp.data)
        this.cart.total = resp.data.cart_total;
        this.form.total = resp.data.cart_total;
      });
    },
    validation() {
      if (this.form.address.length < 3) {
        this.disabled = true;
        return;
      }
      if (this.form.city.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.total.length <= 0) {
        this.disabled = true;
        return;
      }
      if (this.form.city <= 0) {
        this.disabled = true;
        return;
      }

      this.disabled = false;
    },

     applyCoupon() {
      if (this.coupon_code.length <= 0) {
        alert("Coupon Code Is Empty");
        document.getElementById("coupon_code").focus();
        return;
      }

      if (this.form.city.length <= 0) {
        alert("Please Select City First");
        return;
      }
      axios
        .get("/_public/apply/coupon/code", {
          params: {
            coupoon_code: this.coupon_code,
          },
        })
        .then((resp) => {
          if (resp.data.success == "OK") {
            console.log(resp);

            let discount = 0;
            let coupon = resp.data.coupon;
            let total = this.form.total;
            if (coupon.discount_type == "percentage") {
              discount =
                (parseInt(total) / parseInt(100)) *
                parseInt(coupon.discount_amount);
            } else {
              discount = parseInt(coupon.discount_amount);
            }

            this.form.coupon_discount = discount.toFixed(2);
            this.form.coupon_id = coupon.id;

            this.$toasted.show(resp.data.message, {
                type: "success",
                position: "top-center",
                duration: 2000,
            });
            this.coupon_code = "";
          } else {
            this.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((e) => {
          this.$toasted.show("something went to Wrong ", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },
    applyMemberDiscount(){
       if (this.product_discount > 0) {
          this.$toasted.show('cart item products has already discount. your mimbership discount only apply if product has no discount',{
             type: 'error',
             position: 'top-center',
             duration: 5000,
          });
       }else{
            let total = parseInt(this.form.total) ;
            let discount = parseInt(this.member_discount) ; //this is parcent value
            this.form.premium_member_discount = ( (discount*total) / 100) ;
            this.$toasted.show('membership discount applied successfully',{
              type : 'success' ,
              position : 'top-center' ,
              duration : 3000 ,
            });
       }

    }
  },
  components: {
    Loading,
    HasError
  },
  computed:{
     general_setting(){
       return this.$store.getters.general_setting;
     }
  },
  mounted() {
    setTimeout(() => {
      this.selectCity();
    }, 1000);
  },
};
</script>

<style >

.swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0,100%);
    width: 50em !important;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
}


.extra_d {
  cursor: pointer;
  font-size: 16px;
}

.extra_d a {
 	height: 31px;
	position: absolute;
	margin: -8px 10px;
	border-radius: 5px;
	width: 34%;

}

.extra_d i {
    font-size: 25px;
    position: absolute;
    margin: -3px 10px;
}


.empty-cart {
    width: 50%;
    background: #fff;
    text-align: center;
    margin-left: 25%;
    padding: 50px 50px;
    box-shadow: 3px 3px 3px #ddd;
}

.home_btn{
    background: #ff4d03;
    color: #fff;
    padding: 12px 15px;
    border-radius: 5px;
}

.empty_cart_icon{
    margin-bottom: 50px;
    margin-top: 50px;
}

@media screen and (max-width:768px) {

  .empty-cart {
      width: 100%;
      height: 430px;
      background: #fff;
      text-align: center;
      margin-left: 1%;
      padding: 10px 10px;
      box-shadow: 3px 3px 3px #ddd;
  }


  .empty_cart_icon{
      margin-bottom:30px;
      margin-top: 5px;
  }



 .extra_d a {
    height: 32px;
    position: relative;
    margin: 10px 0px;
    border-radius: 5px;
    width: 72%;

}


}
</style>