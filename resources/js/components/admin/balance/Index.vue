<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'balance_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
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
            <div class="col-lg-8 col-lg-offset-2">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Balance Table</h3>
                </div>
                <div class="box-body">

                  <table class="table table-hover table-bordered text-center table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-else
                        v-for="(items, index) in balance"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>  {{ items.name }} </td>

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
    this.getbalanceStatements();
  },
  data() {
    return {
      balance:"",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      total_investment: "",
      total_profit_paid: "",
      total_due_amount: 0,
    };
  },
  methods: {
    getbalanceStatements() {
      axios
        .get("/api/balance/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
             this.balance = resp.data.balance;
             this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  computed: {},
};
</script>

<style scoped>
.box-primary {
  margin-left: -100px;
  overflow-x: scroll;
}

.total_style {
  border: 2px solid #ddd;
  padding: 4px 25px;
}
.total_row {
  padding-bottom: 20px;
}
</style>
