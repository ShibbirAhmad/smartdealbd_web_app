<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'balance_insert_admin' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">balance </li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Balance Insert History</h3>
                </div>
                <div class="box-body">

                  <h1 v-if="loading">

                  </h1>
                  <div v-else class="row">
                  <div class="col-lg-6">
                    <div class="custom-box">

                      <div class="custom-box-body">
                        <h4 v-for="(item,c_index) in balance.today" :key="c_index">
                          In {{ item.balance.name }} : <strong>{{ item.amount }}</strong>
                        </h4>
                      </div>

                      <div class="custom-box-footer">
                        <h3 class="text-uppercase">Today Total  <strong style="float:right;padding-right:20px;">{{ todayTotal() }} </strong>  </h3>
                      </div>
                    </div>
                  </div>

                       <div class="col-lg-6">
                          <div class="custom-box">

                            <div class="custom-box-body">
                              <h4 v-for="(item,c_index) in balance.all" :key="c_index">
                                In {{ item.balance.name }} : <strong>{{ item.amount }}</strong>
                              </h4>
                            </div>

                            <div class="custom-box-footer">
                              <h3 class="text-uppercase">In Total <strong style="float:right;padding-right:20px;">{{ inTotal() }} </strong>   </h3>
                            </div>
                          </div>
                        </div>

                  </div>






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
    this.getBalanceInsertDetails();
  },
  data() {
    return {
      balance:"",
      loading: true,
      basePath: this.$store.getters.image_base_link,
    };
  },
  methods: {
    getBalanceInsertDetails() {
      axios
        .get("/api/balance/insert/admin/details/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          this.balance = resp.data.balance;
          this.loading = false;
        })
    },


    //today total credit balance counter
    todayTotal(){
          let amount = 0 ;
          this.balance.today.forEach(item => {
              amount += parseInt(item.amount) ;
          });
          return amount ;
    },


    //today total credit balance counter
    inTotal(){
          let amount = 0 ;
          this.balance.all.forEach(item => {
              amount += parseInt(item.amount) ;
          });
          return amount ;
    },



  },

};
</script>

<style scoped>


    .custom-box {
      background: #fff;
      padding: 13px;
      min-height: 220px;
      box-shadow: 3px 3px 3px #ddd;
      border-radius: 6px;
      margin-bottom: 10px;

    }
    .custom-box-body strong {
      position: absolute;
      right: 10%;
      color: blue;
    }
    .custom-box-footer {
      background: #00a65a;
      color: #fff;
    }

</style>
