(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["st"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderStatus.vue */ "./resources/js/components/admin/order/OrderStatus.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.ordersList();
    this.others();
  },
  components: {
    OrderStatus: _OrderStatus_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      orders: {},
      loading: true,
      item: 30,
      courier: {
        order_id: "",
        courier_id: "",
        memo_no: "",
        order_index: ""
      },
      couriers: "",
      comments: "",
      search: "",
      start_date: "",
      end_date: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      status: 3,
      type: "all",
      page: 1,
      selected: false,
      //for biblk action
      select_order_id: [],
      bulk_status: "all",
      //heading in table
      heading: "Approved Orders",
      bulkActionType: "0",
      order_count: "",
      //for filtaring order
      courier_id: "",
      thumbnail_img_base_link: this.$store.state.image_thumbnail_link,
      order_note_list: "",
      order_note: "",
      order_id: ""
    };
  },
  methods: {
    getOrderStatistic: function getOrderStatistic() {
      var _this = this;

      axios.get('/api/get/order/statistic').then(function (resp) {
        _this.order_count = resp.data.order_count;
      });
    },
    dateFormatter: function dateFormatter(created_time) {
      var date = new Date(created_time);
      return date.toLocaleTimeString();
    },
    comment: function comment(order_id) {
      this.$modal.show("orderNote");
      this.order_id = order_id;
      this.orderNoteList();
    },
    orderNoteList: function orderNoteList() {
      var _this2 = this;

      axios.get('/api/get/order/note/list/' + this.order_id).then(function (resp) {
        if (resp.data.status == 'OK') {
          _this2.order_note_list = resp.data.notes;
        }
      });
    },
    addOrderComment: function addOrderComment() {
      var _this3 = this;

      axios.get('/api/add/order/note', {
        params: {
          order_id: this.order_id,
          note: this.order_note
        }
      }).then(function (resp) {
        //  console.log(resp);
        if (resp.data.status == 'OK') {
          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this3.orderNoteList();
        }
      });
    },
    orderAction: function orderAction(id) {
      console.log(id);
      document.getElementById('order_action_' + id).classList.toggle('toggle_order_action');
    },
    //get order list
    ordersList: function ordersList() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //start progress bar
      this.$Progress.start();
      axios.get("/orders?page=" + page, {
        params: {
          //send data
          status: this.status,
          item: this.item,
          type: this.type,
          start_date: this.start_date,
          end_date: this.end_date,
          courier_id: this.courier_id
        }
      }).then(function (resp) {
        //only success resp
        if (resp.data.status == "SUCCESS") {
          _this4.orders = resp.data.orders;
          _this4.order_count = resp.data.order_count;
          _this4.loading = false;
          _this4.page = _this4.page + 1;
          _this4.loading = false;

          _this4.$Progress.finish();
        } //else show a error
        else {
            _this4.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000
            });
          }
      })["catch"](function (error) {
        //finish progress bar after resp
        _this4.$Progress.finish();

        _this4.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initail others method for get courier list
    others: function others() {
      var _this5 = this;

      axios.get("/others").then(function (resp) {
        //only success resp
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this5.couriers = resp.data.couriers;
          _this5.comments = resp.data.comments;
        }
      });
    },
    //initial method for order approved
    approved: function approved(order, index) {
      var _this6 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/approved/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this6.$Progress.finish(); //if resp success then....


        if (resp.data.status == "SUCCESS") {
          _this6.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this6.orders.data[index].status = 3;

          _this6.getOrderStatistic();
        } //not resp success.....
        else {
            _this6.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        //end progress bar after resp
        _this6.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initial method for order cancel
    cancel: function cancel(order, index) {
      var _this7 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/cancel/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this7.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this7.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this7.orders.data[index].status = 6;

          _this7.getOrderStatistic();
        } //for any kind of error resp .......
        else {
            _this7.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        //end progress bar after resp
        _this7.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initial method for order return
    returnOrder: function returnOrder(order, index) {
      var _this8 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/return/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this8.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this8.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this8.orders.data[index].status = 7;

          _this8.getOrderStatistic();
        } //for any kind off error resp
        else {
            _this8.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this8.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    shipment: function shipment(order, index) {
      var _this9 = this;

      /////index initial for update order from orderLit or order arrow.
      if (!this.orders.data[index].courier_id) {
        alert("please select a courier");
        return;
      }

      if (!this.orders.data[index].memo_no) {
        alert("Must Be Need Memo Number");
        return;
      } //start progress bar


      this.$Progress.start();
      axios.get("/shipment/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this9.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this9.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this9.orders.data[index].status = 4;

          _this9.getOrderStatistic();
        } //any kind of error resp
        else {
            _this9.$Progress.finish();

            _this9.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this9.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    pending: function pending(order, index) {
      var _this10 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/pending/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this10.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this10.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this10.orders.data[index].status = 2;

          _this10.getOrderStatistic();
        } //any kibd off error resp
        else {
            _this10.$Progress.finish();

            _this10.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this10.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //method open for open courier modal
    courierModal: function courierModal(order, index) {
      //set courier list first
      this.others(); //set courier -> order id

      this.courier.order_id = order.id; // get courier from couerir order list by the index number

      this.courier.order_index = index;

      if (order.courier_id) {
        this.courier.courier_id = order.courier_id;
      } //after set all data, open courier modal .........


      this.$modal.show("example");
    },
    OrderCourier: function OrderCourier() {
      var _this11 = this;

      //start the progress bar
      this.$Progress.start();
      var order_index = this.courier.order_index;
      axios.post("/order/courier/update/" + this.courier.order_id, {
        courier_id: this.courier.courier_id,
        memo_no: this.courier.memo_no
      }).then(function (resp) {
        //end progressbar after resp...........
        _this11.$Progress.finish();

        if (resp.data.status == "SUCCESS") {
          _this11.$modal.hide("example");

          console.log(resp.data.courier);

          if (resp.data.order.courier_id) {
            _this11.orders.data[order_index].courier_id = resp.data.order.courier_id;
          }

          if (resp.data.order.memo_no) {
            _this11.orders.data[order_index].memo_no = resp.data.order.memo_no;
          }

          if (resp.data.courier) {
            _this11.orders.data[order_index].courier = resp.data.courier;
          }

          _this11.courier.courier_id = "";
          _this11.courier.memo_no = "";

          _this11.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });
        }
      })["catch"](function (error) {
        console.log(error);
        alert("something went wrong");
      });
    },
    //method initial for order search
    orderSearch: function orderSearch() {
      var _this12 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      //if search lenght minimum 2
      if (this.search.length > 1) {
        //show loader
        this.loading = true; //fetch data

        axios.get("/order/search/" + this.search + "?page=" + page).then(function (resp) {
          //if success resp
          if (resp.data.status == "SUCCESS") {
            _this12.orders = resp.data.orders;
            _this12.loading = false;
          }
        }) //for any kind of error
        ["catch"](function (error) {
          console.log(error);
          alert("something went wrong");
        });
      } //if search lenght smaller then 2, then excute orderist method .......
      else {
          this.loading = false;
          this.ordersList();
        }
    },
    //method initial for filter order, data to date, and single data......
    filterOrder: function filterOrder() {
      var _this13 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //start progressbar
      this.$Progress.start(); //show loader

      this.loading = true; //fetch data

      axios.get("/order/filter?page=" + page, {
        //send data
        params: {
          start_date: this.start_date,
          end_date: this.end_date,
          item: this.item,
          status: this.status
        }
      }).then(function (resp) {
        //only success resp ........
        _this13.$Progress.finish();

        _this13.loading = false;

        if (resp.data.status == "SUCCESS") {
          _this13.orders = resp.data.orders;
          _this13.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //method initial for rest all data, or order arrow
    resetAll: function resetAll() {
      location.reload();
    },
    //method inital for select all
    selectAll: function selectAll() {
      //first idnetify select true or false
      //we need a tooglee all select box
      //if select true we make selected false, or select true
      if (this.selected == true) {
        this.selected = false;
      } else {
        this.selected = true;
      } //elemnt find by the class name


      var checkBoxClass = document.getElementsByClassName("select-all");

      for (var i = 0; i < checkBoxClass.length; i++) {
        //if select active then element set attribute check==true
        //element set attribute check==false
        if (this.selected == true) {
          checkBoxClass[i].checked = true;
        } else {
          checkBoxClass[i].checked = false;
        }
      } //at last push order id in selected_order_id arrow....
      //and agin check selected true or false.....


      if (this.selected == true) {
        for (var _i = 0; _i < this.orders.data.length; _i++) {
          this.select_order_id.push(this.orders.data[_i].id);
        }
      } else {
        this.select_order_id = [];
      }
    },
    //method inital for a bulk action
    selectBulkAction: function selectBulkAction() {
      if (this.select_order_id.length <= 0) {
        Swal.fire({
          type: "warning",
          text: "Please select at least one row"
        });
        return;
      }

      var action_type = this.bulkActionType;

      if (action_type == "LABEL PRINT") {
        window.open("/order/label/print/" + this.select_order_id, "_blank");
      }

      if (action_type == "INVOICE PRINT") {
        window.open("/order/invoice/print/" + this.select_order_id, "_blank");
      }

      if (action_type == "EXPORT SELECTED ITEM") {
        window.open("/export/selected/item/" + this.select_order_id, "_blank");
      }

      if (action_type == "PENDING ALL") {
        if (confirm("are you sure")) {
          this.pendingAll(this.select_order_id);
        }

        return;
      }

      if (action_type == "APPROVED ALL") {
        if (confirm("are you sure")) {
          this.apprvedAll(this.select_order_id);
        }

        return;
      }

      if (action_type == "SHIPMENT ALL") {
        if (confirm("are you sure")) {
          this.shipmentAll(this.select_order_id);
        }

        return;
      }

      if (action_type == "DELIVERED ALL") {
        if (confirm("are you sure")) {
          this.deliveredAll(this.select_order_id);
        }

        return;
      }

      if (action_type == "CANCEL ALL") {
        if (confirm("are you sure")) {
          this.cancelAll(this.select_order_id);
        }

        return;
      }

      if (action_type == "RETURN ALLL") {
        if (confirm("are you sure")) {
          this.returnAll(this.select_order_id);
        }

        return;
      }
    },
    labelPrint: function labelPrint() {
      window.open("", "_self", "width=600,height=600");
    },
    pendingAll: function pendingAll(order_id) {
      var _this14 = this;

      axios.get("/pending/all/order/" + order_id).then(function (resp) {
        if (resp.data) {
          _this14.$toasted.show(resp.data, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this14.$router.push({
            name: "PendingOrder"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    shipmentAll: function shipmentAll(order_id) {
      var _this15 = this;

      axios.get("/shipment/all/order/" + order_id).then(function (resp) {
        if (resp.data.status == "OK") {
          _this15.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this15.$router.push({
            name: "ShipmentOrder"
          });
        } else {
          _this15.$toasted.show(resp.data, {
            type: "error",
            position: "top-center",
            duration: 4000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deliveredAll: function deliveredAll(order_id) {
      var _this16 = this;

      axios.get("/delivered/all/order/" + order_id).then(function (resp) {
        if (resp.data) {
          _this16.$toasted.show(resp.data, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this16.$router.push({
            name: "DeliveredOrder"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    returnAll: function returnAll(order_id) {
      var _this17 = this;

      axios.get("/return/all/order/" + order_id).then(function (resp) {
        if (resp.data) {
          _this17.$toasted.show(resp.data, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this17.$router.push({
            name: "ReturnOrder"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cancelAll: function cancelAll(order_id) {
      var _this18 = this;

      axios.get("/cancel/all/order/" + order_id).then(function (resp) {
        if (resp.data) {
          _this18.$toasted.show(resp.data, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this18.$router.push({
            name: "CancelOrder"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    commentBackup: function commentBackup(order_id, order_index, comment) {
      console.log(comment);
      var options = {};
      this.comments.forEach(function (element) {
        options[element.name] = element.name;
      });
      var sSelect = document.getElementsByClassName("swal2-select");
      Swal.fire({
        title: comment ? comment : "Select a comment",
        input: "select",
        inputOptions: options,
        inputPlaceholder: "Select or change a comment",
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          axios.get("/api/order/comment", {
            params: {
              order_id: order_id,
              comment: result.value
            }
          }).then(function (resp) {
            console.log(resp);
          })["catch"](function (e) {
            console.log(e);
          });
        } else {
          console.log("Ok");
        }
      });
    }
  },
  watch: {
    status: function status(value) {
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
    start_date: function start_date(value) {
      if (value.length > 1) {
        this.ordersList();
      }
    },
    end_date: function end_date(value) {
      if (value.length > 1) {
        this.ordersList();
      }
    },
    bulkActionType: function bulkActionType(value) {
      this.selectBulkAction();
    },
    courier_id: function courier_id(value) {
      this.ordersList();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    order_count: {}
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.orders-heading[data-v-601e8403] {\n    font-size: 22px;\n    text-transform: uppercase;\n    border-bottom: 2px solid #000;\n    margin-bottom: 10px;\n    margin-left: 30%;\n}\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("admin-main"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-wrapper" },
        [
          _c("OrderStatus", { attrs: { order_count: _vm.order_count } }),
          _vm._v(" "),
          _c("section", { staticClass: "content" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12 col-sm-12 col-xs-12 col-md-12" },
                  [
                    _c("div", { staticClass: "box box-primary" }, [
                      _c("div", { staticClass: "box-header with-border " }, [
                        _c("h3", { staticClass: "box-title orders-heading" }, [
                          _vm._v(_vm._s(_vm.heading))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search,
                                  expression: "search"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Enter Invoice, customer phone"
                              },
                              domProps: { value: _vm.search },
                              on: {
                                keyup: _vm.orderSearch,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.search = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c(
                              "form",
                              {
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.filterOrder($event)
                                  }
                                }
                              },
                              [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-lg-4" },
                                    [
                                      _c("date-picker", {
                                        attrs: {
                                          autocomplete: "off",
                                          placeholder: "start-date",
                                          config: _vm.options
                                        },
                                        model: {
                                          value: _vm.start_date,
                                          callback: function($$v) {
                                            _vm.start_date = $$v
                                          },
                                          expression: "start_date"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-lg-4",
                                      staticStyle: { "margin-left": "-20px" }
                                    },
                                    [
                                      _c("date-picker", {
                                        attrs: {
                                          autocomplete: "off",
                                          placeholder: "end-date",
                                          config: _vm.options
                                        },
                                        model: {
                                          value: _vm.end_date,
                                          callback: function($$v) {
                                            _vm.end_date = $$v
                                          },
                                          expression: "end_date"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-lg-4" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.courier_id,
                                            expression: "courier_id"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        staticStyle: { width: "120px" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.courier_id = $event.target
                                              .multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              value: "",
                                              selected: "",
                                              disabled: ""
                                            }
                                          },
                                          [_vm._v("Select Courier")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.couriers, function(courier) {
                                          return _c(
                                            "option",
                                            {
                                              key: courier.id,
                                              domProps: { value: courier.id }
                                            },
                                            [_vm._v(_vm._s(courier.name))]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-2" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.bulkActionType,
                                    expression: "bulkActionType"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.bulkActionType = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: {
                                      value: "0",
                                      selected: "",
                                      disabled: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Select Action\n                      "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "LABEL PRINT" } },
                                  [_vm._v("Label Print")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "INVOICE PRINT" } },
                                  [_vm._v("Invoice Print")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "EXPORT SELECTED ITEM" } },
                                  [_vm._v("Export Selected Item")]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-2" }, [
                            _vm.start_date.length > 0
                              ? _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.item,
                                        expression: "item"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.item = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.filterOrder
                                      ]
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "10" } }, [
                                      _vm._v("10")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "20" } }, [
                                      _vm._v("20")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "30" } }, [
                                      _vm._v("30")
                                    ])
                                  ]
                                )
                              : _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.item,
                                        expression: "item"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.item = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.ordersList
                                      ]
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "10" } }, [
                                      _vm._v("10")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "20" } }, [
                                      _vm._v("20")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "30" } }, [
                                      _vm._v("30")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "100" } }, [
                                      _vm._v("100")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "200" } }, [
                                      _vm._v("200")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "300" } }, [
                                      _vm._v("300")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "400" } }, [
                                      _vm._v("400")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "500" } }, [
                                      _vm._v("500")
                                    ])
                                  ]
                                )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "box-body" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered table-striped table-hover"
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { attrs: { width: "5%" } }, [
                                  _c("input", {
                                    attrs: { type: "checkbox" },
                                    on: { click: _vm.selectAll }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "10%" } }, [
                                  _vm._v("Customer")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "15%" } }, [
                                  _vm._v("Address")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "12%" } }, [
                                  _vm._v("Product")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "8%" } }, [
                                  _vm._v("Invoice")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "15%" } }, [
                                  _vm._v("Total")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "5%" } }, [
                                  _vm._v("Created")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "5%" } }, [
                                  _vm._v("Order_place")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "5%" } }, [
                                  _vm._v("Order_date")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "5%" } }, [
                                  _vm._v("Action")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "10%" } }, [
                                  _vm._v("Courier")
                                ]),
                                _vm._v(" "),
                                _c("th", { attrs: { width: "5%" } }, [
                                  _vm._v("Comment")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.loading
                                  ? _c("h1", [
                                      _c("i", {
                                        staticClass: "fa fa-spin fa-spinner"
                                      })
                                    ])
                                  : _vm._l(_vm.orders.data, function(
                                      order,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c(
                                          "td",
                                          { staticStyle: { width: "1%" } },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.select_order_id,
                                                  expression: "select_order_id"
                                                }
                                              ],
                                              staticClass: "select-all",
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                value: order.id,
                                                checked: Array.isArray(
                                                  _vm.select_order_id
                                                )
                                                  ? _vm._i(
                                                      _vm.select_order_id,
                                                      order.id
                                                    ) > -1
                                                  : _vm.select_order_id
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.select_order_id,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = order.id,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        (_vm.select_order_id = $$a.concat(
                                                          [$$v]
                                                        ))
                                                    } else {
                                                      $$i > -1 &&
                                                        (_vm.select_order_id = $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          ))
                                                    }
                                                  } else {
                                                    _vm.select_order_id = $$c
                                                  }
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("p", [
                                            _c("strong", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(order.customer_name) +
                                                  " "
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(order.customer_phone) +
                                                  "  "
                                              )
                                            ])
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(
                                                order.customer_address
                                                  ? order.customer_address
                                                  : "null"
                                              ) +
                                              "\n                      "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          order.order_item.length > 0
                                            ? _c("div", [
                                                _c("img", {
                                                  attrs: {
                                                    width: "50px",
                                                    height: "50px",
                                                    src:
                                                      _vm.thumbnail_img_base_link +
                                                      order.order_item[0]
                                                        .product.thumbnail_img
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "  " +
                                                      _vm._s(
                                                        order.order_item[0].product.name
                                                          .substring(0, 25)
                                                          .concat("...") +
                                                          "-" +
                                                          order.order_item[0]
                                                            .product
                                                            .product_code
                                                      ) +
                                                      "  "
                                                  )
                                                ])
                                              ])
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(order.invoice_no))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("b", [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                            Total:\n                            " +
                                                  _vm._s(
                                                    parseInt(order.total) -
                                                      parseInt(order.discount) +
                                                      parseInt(
                                                        order.shipping_cost
                                                      )
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("strong", [
                                              _vm._v(
                                                " Paid: " +
                                                  _vm._s(parseInt(order.paid)) +
                                                  " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("strong", [
                                              _vm._v(
                                                "\n                            Due:\n                            " +
                                                  _vm._s(
                                                    parseInt(order.total) -
                                                      (parseInt(
                                                        order.discount
                                                      ) +
                                                        parseInt(order.paid)) +
                                                      parseInt(
                                                        order.shipping_cost
                                                      )
                                                  ) +
                                                  "\n                          "
                                              )
                                            ])
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "two-percent" },
                                          [
                                            order.order_type == 1
                                              ? _c("p", [_vm._v("customer")])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.order_type == 2
                                              ? _c("p", [
                                                  _vm._v(
                                                    "\n                          Admin ||\n                          "
                                                  ),
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(
                                                        order.create_admin.name
                                                      )
                                                    )
                                                  ])
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.order_type == 3
                                              ? _c("p", [
                                                  _vm._v(
                                                    "\n                          Whole sale ||\n                          "
                                                  ),
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(
                                                        order.create_admin.name
                                                      )
                                                    )
                                                  ])
                                                ])
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "two-percent" },
                                          [
                                            order.status == 1
                                              ? _c(
                                                  "span",
                                                  { staticClass: "badge" },
                                                  [_vm._v("New")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 2
                                              ? _c(
                                                  "span",
                                                  { staticClass: "badge" },
                                                  [_vm._v("Pending")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 3
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-success"
                                                  },
                                                  [_vm._v("Approved")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 4
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-success"
                                                  },
                                                  [_vm._v("Shipment")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 5
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-warning"
                                                  },
                                                  [_vm._v("Delivered")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 6
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-danger"
                                                  },
                                                  [_vm._v("Cancel")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            order.status == 7
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-danger"
                                                  },
                                                  [_vm._v("Return")]
                                                )
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(order.created_at))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn btn-success",
                                              on: {
                                                click: function($event) {
                                                  return _vm.orderAction(
                                                    order.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(" -- "),
                                              _c("i", {
                                                staticClass: "fa fa-bars"
                                              }),
                                              _vm._v(" -- ")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "action_container",
                                              attrs: {
                                                id: "order_action_" + order.id
                                              }
                                            },
                                            [
                                              order.status == 2 ||
                                              order.status == 1 ||
                                              order.status == 6
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-success action-btn",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.approved(
                                                            order,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          Confirmed\n                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              order.status == 1 ||
                                              order.status == 7 ||
                                              order.status == 2
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-info action-btn",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.pending(
                                                            order,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          Pending\n                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              order.status == 3
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary action-btn",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.shipment(
                                                            order,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          Shipment\n                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              order.status == 1 ||
                                              order.status == 2 ||
                                              order.status == 3
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-danger action-btn",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.cancel(
                                                            order,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          Cancel\n                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              order.status == 4
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-warning action-btn",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.returnOrder(
                                                            order,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                          Return\n                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-warning",
                                                  staticStyle: {
                                                    width: "70px"
                                                  },
                                                  attrs: {
                                                    to: {
                                                      name: "orderEdit",
                                                      params: { id: order.id }
                                                    }
                                                  }
                                                },
                                                [_vm._v("Edit")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary action-btn",
                                                  staticStyle: {
                                                    color: "#fff"
                                                  },
                                                  attrs: {
                                                    to: {
                                                      name: "viewOrder",
                                                      params: { id: order.id }
                                                    }
                                                  }
                                                },
                                                [_vm._v("Print")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          order.print_status == 1
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-success"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-check"
                                                  }),
                                                  _vm._v(" Printed ")
                                                ]
                                              )
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticStyle: { width: "1%" } },
                                          [
                                            order.courier_id
                                              ? _c("small", [
                                                  _vm._v(
                                                    _vm._s(order.courier.name)
                                                  )
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "badge",
                                                attrs: { if: "order.memo_no" }
                                              },
                                              [_vm._v(_vm._s(order.memo_no))]
                                            ),
                                            _vm._v(" "),
                                            _c("i", {
                                              staticClass: "fa fa-edit",
                                              on: {
                                                click: function($event) {
                                                  return _vm.courierModal(
                                                    order,
                                                    index
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn ",
                                              on: {
                                                click: function($event) {
                                                  return _vm.comment(order.id)
                                                }
                                              }
                                            },
                                            [_vm._v("Comment")]
                                          ),
                                          _vm._v(" "),
                                          order.order_note.length > 0
                                            ? _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "12px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        order.order_note[0].note
                                                      ) +
                                                      " "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ])
                                    })
                              ],
                              2
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "box-footer" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-6" },
                            [
                              _c("pagination", {
                                attrs: { data: _vm.orders, limit: 5 },
                                on: { "pagination-change-page": _vm.ordersList }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-lg-6 mt-1",
                              staticStyle: {
                                "margin-top": "25px",
                                "text-align": "right"
                              }
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                      Showing\n                      "
                                ),
                                _c("strong", [_vm._v(_vm._s(_vm.orders.from))]),
                                _vm._v(" to\n                      "),
                                _c("strong", [_vm._v(_vm._s(_vm.orders.to))]),
                                _vm._v(" of total\n                      "),
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.orders.total))
                                ]),
                                _vm._v(" entries\n                    ")
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("modal", { attrs: { name: "example", width: 300, height: 250 } }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body", staticStyle: { padding: "10px" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.OrderCourier($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Courier")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.courier.courier_id,
                            expression: "courier.courier_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.courier,
                              "courier_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select Courier")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.couriers, function(courier) {
                          return _c(
                            "option",
                            { domProps: { value: courier.id } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(courier.name) +
                                  "\n              "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Memo_number")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.courier.memo_no,
                          expression: "courier.memo_no"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Enter memo number" },
                      domProps: { value: _vm.courier.memo_no },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.courier, "memo_no", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-block",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("\n            submit\n          ")]
                  )
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "orderNote", width: 600, height: 500 } }, [
        _c("div", { staticClass: "card", staticStyle: { padding: "20px" } }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addOrderComment($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    staticStyle: { display: "flex", "margin-top": "20px" }
                  },
                  [
                    _c("label", [_vm._v("Add Note")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.order_note,
                          expression: "order_note"
                        }
                      ],
                      staticClass: "form-control",
                      staticStyle: { height: "50px" },
                      attrs: {
                        type: "text",
                        placeholder: "write note",
                        required: ""
                      },
                      domProps: { value: _vm.order_note },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.order_note = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Update Note")]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "box-body" }, [
              _c(
                "table",
                {
                  staticClass: "table table-bordered table-striped table-hover "
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Created At")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Note")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Created By")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.order_note_list, function(note, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [
                          _vm._v(
                            " " +
                              _vm._s(_vm.dateFormatter(note.created_at)) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(note.note))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(note.admin_name) + " ")])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "order_statistic" },
    [
      _c(
        "router-link",
        { staticClass: "statistic_item ", attrs: { to: { name: "order" } } },
        [
          _c("h2", [_vm._v("  " + _vm._s(_vm.order_count.total) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" All Order ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        { staticClass: "statistic_item ", attrs: { to: { name: "NewOrder" } } },
        [
          _c("h2", [_vm._v(" " + _vm._s(_vm.order_count.new_order) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" New/Processing ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "PendingOrder" } }
        },
        [
          _c("h2", [_vm._v(" " + _vm._s(_vm.order_count.pending_order) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v("Payment Pending")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "stock_out_order" } }
        },
        [
          _c("h2", [_vm._v(" " + _vm._s(_vm.order_count.stock_out) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v("Stock Out")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item",
          attrs: { to: { name: "invoice_pending" } }
        },
        [
          _c("h2", [_vm._v("  " + _vm._s(_vm.order_count.pending_memo) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" Invoice Pending ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "ApprovedOrder" } }
        },
        [
          _c("h2", [
            _vm._v("  " + _vm._s(_vm.order_count.approved_order) + " ")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(" Ready To Ship ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "ShipmentOrder" } }
        },
        [
          _c("h2", [
            _vm._v("  " + _vm._s(_vm.order_count.shipment_order) + " ")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(" In Courier/Shipment  ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "DeliveredOrder" } }
        },
        [
          _c("h2", [
            _vm._v("  " + _vm._s(_vm.order_count.delivered_order) + " ")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(" Delivered  ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "ReturnOrder" } }
        },
        [
          _c("h2", [_vm._v("  " + _vm._s(_vm.order_count.return_order) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" Return  ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "ReturnOrder" } }
        },
        [
          _c("h2", [_vm._v("  " + _vm._s(_vm.order_count.return_order) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" Demage  ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "CancelOrder" } }
        },
        [
          _c("h2", [_vm._v("  " + _vm._s(_vm.order_count.cancel_order) + " ")]),
          _vm._v(" "),
          _c("p", [_vm._v(" Cancel  ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "statistic_item ",
          attrs: { to: { name: "customer_confirmation_pending" } }
        },
        [
          _c("h2", [
            _vm._v("  " + _vm._s(_vm.order_count.customer_confirmation) + " ")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v(" Customer Confirmation  ")])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/Approved.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/order/Approved.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Approved.vue?vue&type=template&id=601e8403&scoped=true& */ "./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true&");
/* harmony import */ var _Approved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Approved.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& */ "./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Approved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "601e8403",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/Approved.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approved.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=style&index=0&id=601e8403&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_style_index_0_id_601e8403_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Approved.vue?vue&type=template&id=601e8403&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Approved.vue?vue&type=template&id=601e8403&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Approved_vue_vue_type_template_id_601e8403_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/order/OrderStatus.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/order/OrderStatus.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderStatus.vue?vue&type=template&id=3e76ce78& */ "./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78&");
/* harmony import */ var _OrderStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/OrderStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/OrderStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderStatus.vue?vue&type=template&id=3e76ce78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/OrderStatus.vue?vue&type=template&id=3e76ce78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderStatus_vue_vue_type_template_id_3e76ce78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);