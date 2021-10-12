<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
             <div class="order_statistic">

            <router-link :to="{ name: 'NewOrder' }" class="statistic_item " >
              <h2> {{ order_count.new_order }} </h2>
               <p> New </p>
           </router-link >

        <router-link :to="{ name: 'PendingOrder' }" class="statistic_item " >
            <h2> {{ order_count.pending_order }} </h2>
            <p>Pending</p>
        </router-link>


        <router-link :to="{ name: 'ApprovedOrder' }" class="statistic_item " >
         <h2>  {{ order_count.approved_order }} </h2>
         <p> Ready To Ship </p>
        </router-link>



        <router-link :to="{ name: 'ShipmentOrder' }" class="statistic_item " >
         <h2>  {{ order_count.shipment_order }} </h2>
         <p> Shipment  </p>
        </router-link>


        <router-link :to="{ name: 'DeliveredOrder' }" class="statistic_item " >
         <h2>  {{ order_count.delivered_order }} </h2>
         <p> Delivered  </p>
        </router-link>


        <router-link :to="{ name: 'ReturnOrder' }" class="statistic_item " >
         <h2>  {{ order_count.return_order }} </h2>
         <p> Return  </p>
        </router-link>

        <router-link :to="{ name: 'CancelOrder' }" class="statistic_item " >
         <h2>  {{ order_count.cancel_order }} </h2>
         <p> Cancel  </p>
        </router-link>

        <router-link :to="{ name: 'order' }" class="statistic_item " >
         <h2>  {{ order_count.total }} </h2>
         <p> All  </p>
        </router-link>



        </div>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <div class="box box-primary">
              <div class="box-header with-border ">

                      <h3 class="box-title orders-heading">{{ heading }}</h3>

                  <div class="row">
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="type"
                        @change="ordersList"
                      >
                        <option value="all">All type</option>
                        <option value="2">Onely Admin</option>
                        <option value="1">Only Customer</option>
                      </select>
                    </div>


                  <div class="col-lg-4">
                      <input
                        class="form-control"
                        @keyup="orderSearch"
                        v-model="search"
                        placeholder="Enter Invoice, customer name, phone"
                      />
                    </div>

                    <div class="col-lg-4">
                      <form @submit.prevent="filterOrder">
                        <div class="row">
                          <div class="col-lg-4">
                            <date-picker
                              autocomplete="off"
                              v-model="start_date"
                              placeholder="start-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-4" style="margin-left: -20px">
                            <date-picker
                              autocomplete="off"
                              v-model="end_date"
                              placeholder="end-date"
                              :config="options"
                            ></date-picker>
                          </div>
                          <div class="col-lg-4">
                           <select class="form-control" v-model="courier_id" style="width:120px;">
                             <option value="" selected disabled>Select Courier</option>
                             <option v-for="courier in couriers" :value="courier.id" :key="courier.id">{{courier.name}}</option>
                           </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        v-if="start_date.length > 0"
                        @change="filterOrder"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                      <select
                        class="form-control"
                        v-model="item"
                        v-else
                        @change="ordersList"
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-striped table-hover ">
                    <thead>
                        <tr>
                        <th width="5%" >
                          <input type="checkbox" @click="selectAll" />
                        </th>
                        <!-- <th scope="col">Host Name</th> -->
                        <th width="10%" >Customer</th>
                        <th width="15%" >Address</th>
                        <th width="15%" >Product</th>
                        <th width="10%" >Invoice</th>
                        <th width="15%" >Total</th>
                        <th width="10%" >Created</th>
                        <th width="5%" >Order_place</th>
                        <th width="5%" >Order_date</th>
                        <th width="5%" >Action</th>
                        <th width="10%" >Courier</th>
                        <th width="5%" >Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr v-else v-for="(order, index) in orders.data" :key="index">
                        <td style="width: 1%">
                          <input
                            type="checkbox"
                            class="select-all"
                            v-model="select_order_id"
                            :value="order.id"
                          />
                        </td>
                        <!-- <td> {{ order.host_name }} </td>  -->
                        <td>
                         <p>  <strong> {{ order.customer_name }} </strong> </p>
                         <p>  <strong>{{ order.customer_phone }}  </strong> </p>
                        </td>
                        <td >
                          {{ order.customer_address ? order.customer_address : 'null' }}
                        </td>
                           <td>
                           <div v-if="order.order_item.length > 0" >
                                    <img width="50px" height="50px" :src="thumbnail_img_base_link+order.order_item[0].product.thumbnail_img" >
                                    <p>  {{ order.order_item[0].product.name.substring(0,25).concat('...')+"-"+order.order_item[0].product.product_code }}  </p>
                            </div>
                       </td>
                        <td class="two-percent">{{ order.invoice_no }}</td>
                        <td class="two-percent">
                          {{
                            order.total -
                            (order.discount + order.paid) +
                            order.shipping_cost
                          }}
                        </td>
                        <td class="two-percent">
                          <p v-if="order.order_type == 1">customer</p>
                          <p v-if="order.order_type == 2">
                            Admin ||
                            <strong>{{ order.create_admin.name }}</strong>
                          </p>
                          <p v-if="order.order_type == 3">
                            Whole sale ||
                            <strong>{{ order.create_admin.name }}</strong>
                          </p>

                        </td>
                        <td class="two-percent">
                          <span class="badge" v-if="order.status == 1">New</span>
                          <span class="badge" v-if="order.status == 2">Pending</span>

                          <span class="badge badge-success" v-if="order.status == 3"
                            >Approved</span
                          >
                          <span class="badge badge-success" v-if="order.status == 4"
                            >Shipment</span
                          >
                          <span class="badge badge-warning" v-if="order.status == 5"
                            >Delivered</span
                          >
                          <span class="badge badge-danger" v-if="order.status == 6"
                            >Cancel</span
                          >
                          <span class="badge badge-danger" v-if="order.status == 7"
                            >Return</span
                          >
                        </td>
                        <td class="two-percent">{{ order.created_at }}</td>
                        <td>
                          <button
                            class="btn btn-sm btn-success action-btn"
                            v-if="
                              order.status == 2 || order.status == 1 || order.status == 6
                            "
                            @click="approved(order, index)"
                          >
                            Approved
                          </button>
                          <button
                            class="btn btn-sm btn-info action-btn"
                            v-if="
                              order.status == 1 || order.status == 7 || order.status == 2
                            "
                            @click="pending(order, index)"
                          >
                            Pending
                          </button>
                          <button
                            class="btn btn-sm btn-success action-btn"
                            v-if="order.status == 4"
                            @click="delivered(order, index)"
                          >
                            Deliverd
                          </button>
                          <button
                            class="btn btn-sm btn-primary action-btn"
                            v-if="order.status == 3"
                            @click="shipment(order, index)"
                          >
                            Shipment
                          </button>
                          <button
                            class="btn btn-sm btn-danger action-btn"
                            v-if="
                              order.status == 1 || order.status == 2 || order.status == 3
                            "
                            @click="cancel(order, index)"
                          >
                            Cancel
                          </button>
                          <button
                            class="btn btn-sm btn-warning action-btn"
                            v-if="order.status == 4"
                            @click="returnOrder(order, index)"
                          >
                            Return
                          </button>


                        </td>
                        <td style="width: 1%">
                          <small v-if="order.courier_id">{{ order.courier.name }}</small>
                          <span class="badge" if="order.memo_no">{{
                            order.memo_no
                          }}</span>


                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="orders"
                        @pagination-change-page="ordersList"
                        :limit="5"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ orders.from }}</strong> to
                        <strong>{{ orders.to }}</strong> of total
                        <strong>{{ orders.total }}</strong> entries
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

    <modal name="orderNote" :width="600" :height="500">
      <div style="padding:20px" class="card">
        <div class="card-body">
          <form @submit.prevent="addOrderComment">
            <div style="display:flex;margin-top:20px;" class="form-group">
              <label>Add Note</label>
               <input type="text" style="height:50px" placeholder="write note" v-model="order_note" required class="form-control">
                 <button type="submit" class="btn btn-success">Update Note</button>
            </div>
          </form>

         <div class="box-body">
                <table class="table table-bordered table-striped table-hover ">
                    <thead>
                      <tr>
                        <th>Created At</th>
                        <th>Note</th>
                        <th>Created By</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr  v-for="(note,index) in order_note_list" :key="index">
                       <td> {{ dateFormatter(note.created_at) }} </td>
                       <td> {{ note.note }}</td>
                       <td> {{ note.admin_name }} </td>
                      </tr>
                   </tbody>

               </table>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>


export default {

  created() {
    this.ordersList();
    this.others();
  },
  data() {
    return {
      orders: {},
      loading: true,
      item: 30,
      courier: {
        order_id: "",
        courier_id: "",
        memo_no: "",
        order_index: "",
      },
      couriers: "",
      comments: "",
      search: "",
      start_date: "",
      end_date: "",

      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      status: 5,
      type: "all",
      page: 1,
      selected: false,
      //for biblk action
      select_order_id: [],
      bulk_status: "all",
      //heading in table
      heading: "Delivered Oders",
      bulkActionType: "0",
       order_count: "",
      //for filtaring order
      courier_id: "",
      thumbnail_img_base_link:this.$store.state.image_thumbnail_link,
      order_note_list:"",
      order_note:"",
      order_id:"",
    };
  },
  methods: {

   getOrderStatistic(){
     axios.get('/api/get/order/statistic')
     .then((resp)=>{
          this.order_count = resp.data.order_count ;
     })
  },


  dateFormatter(created_time){
    var date=new Date(created_time);
    return date.toLocaleTimeString();
  },

  comment(order_id){
      this.$modal.show("orderNote");
      this.order_id = order_id ;
      this.orderNoteList();
  },

  orderNoteList(){
     axios.get('/api/get/order/note/list/'+this.order_id)
     .then((resp)=>{
       if (resp.data.status=='OK') {
          this.order_note_list = resp.data.notes ;
       }
     })
  },

   addOrderComment(){
     axios.get('/api/add/order/note',{
       params : {
         order_id: this.order_id ,
         note: this.order_note ,
       }
     })
     .then((resp)=>{
      //  console.log(resp);
       if (resp.data.status=='OK') {
           this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
           this.orderNoteList();
       }
     })
  },


   orderAction(id){
      console.log(id);
      document.getElementById('order_action_'+id).classList.toggle('toggle_order_action');

   },


    //get order list
    ordersList(page = 1) {
      //start progress bar
      this.$Progress.start();
      axios
        .get("/orders?page=" + page, {
          params: {
            //send data
            status: this.status,
            item: this.item,
            type: this.type,
            start_date: this.start_date,
            end_date: this.end_date,
            courier_id: this.courier_id,
          },
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.orders = resp.data.orders;
            this.loading = false;
            this.page = this.page + 1;
            this.loading = false;
            this.order_count = resp.data.order_count;
            this.$Progress.finish();
          }

          //else show a error
          else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          //finish progress bar after resp
          this.$Progress.finish();
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

    //initail others method for get courier list
    others() {
      axios.get("/others").then((resp) => {
        //only success resp
        console.log(resp);
        if (resp.data.status == "SUCCESS") {
          this.couriers = resp.data.couriers;
          this.comments = resp.data.comments;
        }
      });
    },

    //initial method for order approved
    approved(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/approved/order/" + order.id)
        .then((resp) => {
          //end progress bar after resp
          this.$Progress.finish();

          //if resp success then....
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 3;
              this.getOrderStatistic();
          }
          //not resp success.....
          else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          //end progress bar after resp
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

    //initial method for order cancel

    cancel(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/cancel/order/" + order.id)
        .then((resp) => {
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 6;
              this.getOrderStatistic();
          }
          //for any kind of error resp .......
          else {
            this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          //end progress bar after resp
          this.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

    //initial method for order return

    returnOrder(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/return/order/" + order.id)
        .then((resp) => {
          console.log(resp);
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 7;
              this.getOrderStatistic();
          }
          //for any kind off error resp
          else {
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
            duration: 4000,
          });
        });
    },

    delivered(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/delivered/order/" + order.id)
        .then((resp) => {
          console.log(resp);
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 5;
              this.getOrderStatistic();
          }
          //any kind of error resp
          else {
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
            duration: 4000,
          });
        });
    },

    shipment(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/shipment/order/" + order.id)
        .then((resp) => {
          console.log(resp);
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 4;
              this.getOrderStatistic();
          }
          //any kind of error resp
          else {
            this.$Progress.finish();

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
            duration: 4000,
          });
        });
    },

    pending(order, index) {
      /////index initial for update order from orderLit or order arrow.

      //start progress bar
      this.$Progress.start();
      axios
        .get("/pending/order/" + order.id)
        .then((resp) => {
          console.log(resp);
          //end progress bar after resp
          this.$Progress.finish();

          //only success resp .......
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.orders.data[index].status = 2;
              this.getOrderStatistic();
          }
          //any kibd off error resp
          else {
            this.$Progress.finish();

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
            duration: 4000,
          });
        });
    },

    //method open for open courier modal

    // courierModal(order, index) {
    //   //set courier list first
    //   this.others();

    //   //set courier -> order id
    //   this.courier.order_id = order.id;

    //   // get courier from couerir order list by the index number
    //   this.courier.order_index = index;

    //   //after set all data, open courier modal .........
    //   this.$modal.show("example");
    // },
    // OrderCourier() {
    //   //start the progress bar
    //   this.$Progress.start();
    //   let order_index = this.courier.order_index;
    //   axios
    //     .post("/order/courier/update/" + this.courier.order_id, {
    //       courier_id: this.courier.courier_id,
    //       memo_no: this.courier.memo_no,
    //     })
    //     .then((resp) => {
    //       //end progressbar after resp...........
    //       this.$Progress.finish();
    //       if (resp.data.status == "SUCCESS") {
    //         this.$modal.hide("example");
    //         console.log(resp.data.courier);

    //         if (resp.data.order.courier_id) {
    //           this.orders.data[order_index].courier_id =
    //             resp.data.order.courier_id;
    //         }
    //         if (resp.data.order.memo_no) {
    //           this.orders.data[order_index].memo_no = resp.data.order.memo_no;
    //         }
    //         if (resp.data.courier) {
    //           this.orders.data[order_index].courier = resp.data.courier;
    //         }
    //         this.$toasted.show(resp.data.message, {
    //           type: "success",
    //           position: "top-center",
    //           duration: 2000,
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       alert("something went wrong");
    //     });
    // },

    //method initial for order search
    orderSearch(page = 1) {
      //if search lenght minimum 2
      if (this.search.length > 1) {
        //show loader
        this.loading = true;

        //fetch data
        axios
          .get("/order/search/" + this.search + "?page=" + page)

          .then((resp) => {
            //if success resp
            if (resp.data.status == "SUCCESS") {
              this.orders = resp.data.orders;
              this.loading = false;
            }
          })
          //for any kind of error
          .catch((error) => {
            console.log(error);
            alert("something went wrong");
          });
      }
      //if search lenght smaller then 2, then excute orderist method .......
      else {
        this.loading = false;
        this.ordersList();
      }
    },

    //method initial for filter order, data to date, and single data......
    filterOrder(page = 1) {
      //start progressbar
      this.$Progress.start();

      //show loader
      this.loading = true;

      //fetch data
      axios
        .get("/order/filter?page=" + page, {
          //send data
          params: {
            start_date: this.start_date,
            end_date: this.end_date,
            item: this.item,
            status: this.status,
          },
        })
        .then((resp) => {
          //only success resp ........
          this.$Progress.finish();
          this.loading = false;
          if (resp.data.status == "SUCCESS") {
            this.orders = resp.data.orders;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //method initial for rest all data, or order arrow
    resetAll() {
      location.reload();
    },

    //method inital for select all
    selectAll() {
      //first idnetify select true or false
      //we need a tooglee all select box

      //if select true we make selected false, or select true
      if (this.selected == true) {
        this.selected = false;
      } else {
        this.selected = true;
      }

      //elemnt find by the class name
      let checkBoxClass = document.getElementsByClassName("select-all");

      for (let i = 0; i < checkBoxClass.length; i++) {
        //if select active then element set attribute check==true
        //element set attribute check==false
        if (this.selected == true) {
          checkBoxClass[i].checked = true;
        } else {
          checkBoxClass[i].checked = false;
        }
      }

      //at last push order id in selected_order_id arrow....
      //and agin check selected true or false.....
      if (this.selected == true) {
        for (let i = 0; i < this.orders.data.length; i++) {
          this.select_order_id.push(this.orders.data[i].id);
        }
      } else {
        this.select_order_id = [];
      }
    },

    //method inital for a bulk action
    selectBulkAction() {
      if (this.select_order_id.length <= 0) {
        Swal.fire({
          type: "warning",
          text: "Please select at least one row",
        });
        return;
      }
      let action_type = this.bulkActionType;
      if (action_type == "LABEL PRINT") {
        window.open("/order/label/print/" + this.select_order_id, "_blank");
      }
      if (action_type == "INVOICE PRINT") {
        window.open("/order/invoice/print/" + this.select_order_id, "_blank");
      }
    },

    labelPrint() {
      window.open("", "_self", "width=600,height=600");
    },

    comment(order_id, order_index, comment) {
      console.log(comment);
      let options = {};
      this.comments.forEach((element) => {
        options[element.name] = element.name;
      });

      let sSelect = document.getElementsByClassName("swal2-select");
      Swal.fire({
        title: comment ? comment : "Select a comment",
        input: "select",
        inputOptions: options,
        inputPlaceholder: "Select or change a comment",
        showCancelButton: true,
      }).then((result) => {
        if (result.value == "others") {
          Swal.fire({
            input: "text",
          }).then((other) => {
            if (other.value) {
              axios
                .get("/api/order/comment", {
                  params: {
                    order_id,
                    comment: other.value,
                  },
                })
                .then((resp) => {
                  console.log(resp);
                  if (resp.data.status == "OK") {
                    location.reload();
                    this.$toasted.show(resp.data.message, {
                      type: "success",
                      duration: 4000,
                      position: "top-center",
                    });
                  }
                })
                .catch((e) => {
                  // console.log
                  console.log(e);
                  // console.log(e);
                });
            }
          });
        }

        if (result.value) {
          axios
            .get("/api/order/comment", {
              params: {
                order_id,
                comment: result.value,
              },
            })
            .then((resp) => {
              console.log(resp);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          console.log("Ok");
        }
      });
    },
  },

  watch: {
    status: function (value) {
      if (value == 1) {
        this.heading = "New Orders";
      } else if (value == 2) {
        this.heading = "Pending Orders";
      } else if (value == 3) {
        this.heading = "Approved Orders";
      } else if (value == 4) {
        this.heading = "Shipment Orders";
      } else if (value == 5) {
        this.heading = "Delivered Orders";
      } else if (value == 7) {
        this.heading = "Return Orders";
      } else if (value == 6) {
        this.heading = "Cancel Orders";
      } else {
        this.heading = "All Orders";
      }
    },

    start_date: function (value) {
      if (value.length > 1) {
        this.ordersList();
      }
    },
    end_date: function (value) {
      if (value.length > 1) {
        this.ordersList();
      }
    },
    bulkActionType: function (value) {
      this.selectBulkAction();
    },
    courier_id: function (value) {
      this.ordersList();
    },
  },
};
</script>

<style scoped>

  .orders-heading {
      font-size: 24px;
      text-transform: uppercase;
      border-bottom: 2px solid #000;
      margin-bottom: 10px;
      margin-left: 30%;
  }

  .router-link-active {
        border: 1.5px dashed !important ;
        color:#000 !important
     }

</style>

