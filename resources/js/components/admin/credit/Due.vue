<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'creditAdd' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>

          <router-link :to="{ name: 'debit' }" class="btn btn-info"
            >Debit</router-link
          >
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Credit</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                   <h3 class="box-title">Due Table</h3>
                </div>
                <div class="box-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile No</th>
                        <th>Memo Number</th>

                        <th scope="col">Amount</th>

                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(due, index) in credit_dues.data" :key="index">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ due.created_at }}</td>

                        <td>{{ due.customer_name }}</td>
                        <td>{{ due.customer_mobile_no }}</td>
                        <td>

                            <router-link
                            :to="{
                              name: 'ViewSale',
                              params: { id: due.sale_id},
                            }">

                          {{ "S-" }} {{ due.sale_id  }}

                            </router-link>
                          </td>

                        <td>{{ due.amount }}</td>
                        <!-- <td><strong v-if="due.order_invoice_no">{{ due.order_invoice_no }}</strong></td> -->

                        <td>
                          <a
                            id="paid"
                            class="btn btn-sm btn-success"
                            @click="getPaid(due.id, index)"
                            >Get Paid</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="credit_dues"
                        @pagination-change-page="dueList"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ credit_dues.from }}</strong> to
                        <strong>{{ credit_dues.to }}</strong> of total
                        <strong>{{ credit_dues.total }}</strong> entries
                      </p>
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
      this.dueList();
      this.balanceList();
  },
  data() {
    return {
      credit_dues: {},
      loading: true,
      item: 20,
      search: "",
      status: "all",
      credit_in:'',
    };
  },
  methods: {
    balanceList() {
      axios
        .get("/api/balance/list")
        .then((resp) => {
            this.balance = resp.data.balance;
        })
    },

    dueList(page = 1) {
      this.loading = true;
      axios
        .get("/api/credit/due?page=" + page, {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.credit_dues = resp.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchCredit() {
      if (this.search.length >= 2) {
        this.status = "search";
        this.dueList();
      } else {
        this.status = "all";
        this.dueList();
      }
    },


     getPaid(id, index) {
      axios
        .get("/api/balance/list")
        .then((resp) => {
          console.log(resp)
          let options = {};
          resp.data.balance.forEach((element) => {
            options[element.id] = element.name ;
          });
          Swal.fire({
            title: "Select a balance",
            input: "select",
            inputOptions: options,
            inputPlaceholder: "Select One",
            showCancelButton: true,
          }).then((result) => {

            if (result.value) {
              this.credit_in= result.value;

               Swal.fire({
        // title:'Get  Paid',
        html: `
          <label>Amount</label>
          <input id="amount" value=${this.credit_dues.data[index].amount} class="swal2-input">
          `,
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          let amount = document.getElementById("amount").value;
          let credit_in = this.credit_in
          if (amount > 0 && amount.length > 0 && credit_in.length > 0) {
            //send a request
            axios
              .get("/api/due/to/paid/" + id, {
                params: {
                  credit_in: credit_in,
                  amount: amount,
                },
              })
              .then((resp) => {
                console.log(resp);
                //if resp success from serve
                if (resp.data.status == "SUCCESS") {
                  Swal.fire({
                    type: "info",
                    text: resp.data.message,
                  });
                  //if amount full paid
                  //remove form dom
                  //else update amount
                  if (resp.data.due.status == 1) {
                    this.credit_dues.data.splice(index, 1);
                  } else {
                    console.log(this.credit_dues.data[index].amount);
                    this.credit_dues.data[index].amount = resp.data.due.amount;
                  }
                } else {
                  Swal.fire({
                    type: "warning",
                    text: resp.data.message,
                  });
                }
              })

          }
        }
        console.log(result);
      });

            } else {
              this.credit_in = "";

            }
          });
        })


    },


  },
};
</script>

<style scoped>
label {
  position: absolute;
  text-align: left;
  margin-bottom: 0px;
}
</style>
