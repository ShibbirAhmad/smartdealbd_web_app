<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <a @click="goBack" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></a>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Balance History </li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-lg-offset-2">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Balance Insert History </h3>
                </div>

                <div class="box-header with-border text-center">
                   <ul class="admin_order_menu" >
                    <li @click="adminOrderToday"     :class="{ active_border : admin_order_today == true }">  Today </li>
                    <li @click="adminOrderYesterday" :class="{ active_border : admin_order_yesterday == true }"> Yesterday </li>
                    <li @click="adminOrderThisWeek"  :class="{ active_border : admin_order_this_week == true }"> This Week </li>
                    <li @click="adminOrderThisMonth" :class="{ active_border : admin_order_this_month == true }">  This Month  </li>
                  </ul>
                </div>
                <div class="box-body">
                  <table class="table table-bordered text-center table-striped table-hover ">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Admin</th>
                        <th>Total Amount</th>
                      </tr>
                    </thead>

                    <tbody v-if="admin_order_today" >
                      <tr
                        v-for="(admin, index) in admins"
                        :key="index" >
                        <td>{{ index + 1 }}</td>
                        <td>
                          <router-link  style="color:blue" :to="{name:'balance_insert_details',params:{id:admin.id}}">
                          <img
                            :src="base_url + admin.image "
                            class="img-circle small-image"
                            style="width:40px;height:40px;margin-right:20px"
                            v-if="admin.image"
                          />
                          <strong> {{ admin.name }}  </strong>
                          </router-link>
                        </td>
                        <td> &#2547;{{ admin.insert_amount_today }}</td>
                      </tr>
                    </tbody>

                    <tbody v-if="admin_order_yesterday" >
                      <tr
                        v-for="(admin, index) in admins"
                        :key="index" >
                        <td>{{ index + 1 }}</td>
                        <td>

                         <router-link  style="color:blue" :to="{name:'balance_insert_details',params:{id:admin.id}}">
                          <img
                            :src="
                              base_url + admin.image
                            "
                            class="img-circle small-image"
                            style="width:60px;height:60px"
                            v-if="admin.image"
                          />
                          <strong> {{ admin.name }}  </strong>
                         </router-link>
                        </td>
                         <td>&#2547;{{ admin.insert_amount_yesterday }}</td>
                      </tr>
                    </tbody>


                    <tbody v-if="admin_order_this_week" >
                      <tr
                        v-for="(admin, index) in admins"
                        :key="index" >
                        <td>{{ index + 1 }}</td>
                        <td>

                       <router-link  style="color:blue" :to="{name:'balance_insert_details',params:{id:admin.id}}">

                          <img
                            :src="
                              base_url + admin.image
                            "
                            class="img-circle small-image"
                            style="width:60px;height:60px"
                            v-if="admin.image"
                          />
                          <strong> {{ admin.name }}  </strong>
                          </router-link>
                        </td>
                        <td>&#2547;{{ admin.insert_amount_this_week }}</td>
                      </tr>
                    </tbody>

                     <tbody v-if="admin_order_this_month" >
                      <tr
                        v-for="(admin, index) in admins"
                        :key="index" >
                        <td>{{ index + 1 }}</td>
                        <td>
                            <router-link  style="color:blue" :to="{name:'balance_insert_details',params:{id:admin.id}}">
                          <img
                            :src="
                              base_url + admin.image
                            "
                            class="img-circle small-image"
                            style="width:60px;height:60px"
                            v-if="admin.image"
                          />
                          <strong> {{ admin.name }}  </strong>
                            </router-link>
                        </td>
                        <td>&#2547;{{ admin.insert_amount_this_month }}</td>
                      </tr>
                    </tbody>

                  </table>

                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getBalanceHistory();
  },
  data() {
    return {
      admins:"",
      loading: true,
      base_url: this.$store.getters.image_base_link,
      admin_order_today:true,
      admin_order_yesterday:false,
      admin_order_this_week:false,
      admin_order_this_month:false,
    };
  },
  methods: {
    getBalanceHistory() {
      axios
        .get("/api/balance/insert/admin/records")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
             this.admins = resp.data.admins;
             this.loading = false;
          }
        })
    },


    adminOrderToday(){
       this.admin_order_today=true ;
       this.admin_order_yesterday=false ;
       this.admin_order_this_week=false ;
       this.admin_order_this_month=false ;
    },

      adminOrderYesterday(){
       this.admin_order_today=false ;
       this.admin_order_yesterday=true ;
       this.admin_order_this_week=false ;
       this.admin_order_this_month=false ;
    },

     adminOrderThisWeek(){
       this.admin_order_today=false ;
       this.admin_order_yesterday=false ;
       this.admin_order_this_week=true ;
       this.admin_order_this_month=false ;
    },


     adminOrderThisMonth(){
       this.admin_order_today=false ;
       this.admin_order_yesterday=false ;
       this.admin_order_this_week=false ;
       this.admin_order_this_month=true ;
    },


    goBack(){
     return  window.history.back();
    }

  },

};
</script>

<style scoped>

    .admin_order_menu {
      display: flex;
    }

    .admin_order_menu li {
        list-style-type: none;
        margin: 5px 14px;
        cursor: pointer;
        padding: 5px 10px;
        box-shadow: 0 1pt 12pt rgb(150 165 237);
    }

    .active_border {
      border: 2px dashed #000;
    }


</style>
