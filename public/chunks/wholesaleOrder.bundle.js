(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wholesaleOrder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    setTimeout(function () {
      _this.ordersList();
    }, 500);
  },
  data: function data() {
    return {
      orders: {},
      loading: true,
      item: "10",
      courier: {
        order_id: "",
        courier_id: "",
        memo_no: "",
        order_index: ""
      },
      couriers: "",
      search: "",
      start_date: "",
      end_date: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      status: "all",
      type: 3,
      page: 1,
      selected: false,
      //for biblk action
      select_order_id: [],
      bulk_status: "all",
      order_count: "",
      //heading in table
      heading: "Wholesale Order",
      thumbnail_img_base_link: this.$store.state.image_thumbnail_link,
      order_note_list: "",
      order_note: "",
      order_id: ""
    };
  },
  methods: {
    getOrderStatistic: function getOrderStatistic() {
      var _this2 = this;

      axios.get('/api/get/order/statistic').then(function (resp) {
        _this2.order_count = resp.data.order_count;
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
      var _this3 = this;

      axios.get('/api/get/order/note/list/' + this.order_id).then(function (resp) {
        if (resp.data.status == 'OK') {
          _this3.order_note_list = resp.data.notes;
        }
      });
    },
    addOrderComment: function addOrderComment() {
      var _this4 = this;

      axios.get('/api/add/order/note', {
        params: {
          order_id: this.order_id,
          note: this.order_note
        }
      }).then(function (resp) {
        //  console.log(resp);
        if (resp.data.status == 'OK') {
          _this4.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this4.orderNoteList();
        }
      });
    },
    orderAction: function orderAction(id) {
      console.log(id);
      document.getElementById('order_action_' + id).classList.toggle('toggle_order_action');
    },
    //get order list
    ordersList: function ordersList() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //start progress bar
      this.$Progress.start();
      axios.get("/orders?page=" + page, {
        params: {
          //send data
          status: this.status,
          item: this.item,
          type: this.type
        }
      }).then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this5.orders = resp.data.orders;
          _this5.loading = false;
          _this5.page = _this5.page + 1;
          _this5.order_count = resp.data.order_count;

          _this5.$Progress.finish();
        } else {
          _this5.$toasted.show("something went to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        //finish progress bar after resp
        _this5.$Progress.finish();

        _this5.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initail others method for get courier list
    others: function others() {
      var _this6 = this;

      axios.get("/others").then(function (resp) {
        //only success resp
        if (resp.data.status == "SUCCESS") {
          _this6.couriers = resp.data.couriers;
        }
      });
    },
    //initial method for order approved
    approved: function approved(order, index) {
      var _this7 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/approved/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this7.$Progress.finish(); //if resp success then....


        if (resp.data.status == "SUCCESS") {
          _this7.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this7.orders.data[index].status = 3;

          _this7.getOrderStatistic();
        } //not resp success.....
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
    //initial method for order cancel
    cancel: function cancel(order, index) {
      var _this8 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/cancel/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this8.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this8.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this8.orders.data[index].status = 6;

          _this8.getOrderStatistic();
        } //for any kind of error resp .......
        else {
            _this8.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        //end progress bar after resp
        _this8.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initial method for order return
    returnOrder: function returnOrder(order, index) {
      var _this9 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/return/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this9.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this9.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this9.orders.data[index].status = 7;

          _this9.getOrderStatistic();
        } //for any kind off error resp
        else {
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
    OrderCourier: function OrderCourier() {
      var _this10 = this;

      //start the progress bar
      this.$Progress.start();
      var order_index = this.courier.order_index;
      axios.post("/order/courier/update/" + this.courier.order_id, {
        courier_id: this.courier.courier_id,
        memo_no: this.courier.memo_no
      }).then(function (resp) {
        //end progressbar after resp...........
        _this10.$Progress.finish();

        if (resp.data.status == "SUCCESS") {
          _this10.$modal.hide("example");

          console.log(resp.data.courier);

          if (resp.data.order.courier_id) {
            _this10.orders.data[order_index].courier_id = resp.data.order.courier_id;
          }

          if (resp.data.order.memo_no) {
            _this10.orders.data[order_index].memo_no = resp.data.order.memo_no;
          }

          if (resp.data.courier) {
            _this10.orders.data[order_index].courier = resp.data.courier;
          }

          _this10.courier.courier_id = "";
          _this10.courier.memo_no = "", _this10.$toasted.show(resp.data.message, {
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
    delivered: function delivered(order, index) {
      var _this11 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/delivered/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this11.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this11.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this11.orders.data[index].status = 5;

          _this11.getOrderStatistic();
        } //any kind of error resp
        else {
            _this11.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this11.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    shipment: function shipment(order_id, index) {
      var _this12 = this;

      if (!this.orders.data[index].courier_id) {
        alert('please select a courier');
        return;
      }

      if (!this.orders.data[index].memo_no) {
        alert('Must Be Need Memo Number');
        return;
      }

      this.$Progress.start();
      axios.get("/shipment/order/" + order_id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this12.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this12.orders.data[index].status = 4;

          _this12.getOrderStatistic();

          _this12.$Progress.finish();
        }
      });
    },
    pending: function pending(order, index) {
      var _this13 = this;

      /////index initial for update order from orderLit or order arrow.
      //start progress bar
      this.$Progress.start();
      axios.get("/pending/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this13.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this13.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this13.orders.data[index].status = 2;

          _this13.getOrderStatistic();
        } //any kibd off error resp
        else {
            _this13.$Progress.finish();

            _this13.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this13.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //method initial for order search
    orderSearch: function orderSearch() {
      var _this14 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      //if search lenght minimum 2
      if (this.search.length > 1) {
        //show loader
        this.loading = true; //fetch data

        axios.get("/order/search/" + this.search + "?page=" + page).then(function (resp) {
          //if success resp
          if (resp.data.status == "SUCCESS") {
            _this14.orders = resp.data.orders;
            _this14.loading = false;
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
      var _this15 = this;

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
        _this15.$Progress.finish();

        _this15.loading = false;

        if (resp.data.status == "SUCCESS") {
          _this15.orders = resp.data.orders;
          _this15.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //method initial for rest all data, or order arrow
    resetAll: function resetAll() {
      this.$Progress.start();
      this.start_date = "";
      this.end_date = "", this.search = "";
      this.status = "all";
      this.type = "all";
      this.ordersList();
      this.$Progress.finish();
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
      //if not select any item return wite a alert
      if (this.select_order_id.length <= 0) {
        this.bulk_status = "all";
        alert("please select atleast one item");
        return;
      }

      if (confirm("Are you sure ? use this bulick action")) {
        if (this.bulk_status == "print") {
          window.print();
          return;
        }

        axios.get("orders/bulk/action", {
          status: this.bulk_status,
          order_id: this.select_order_id
        }).then(function (resp) {
          console.log(resp);
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        console.log("no");
      }

      console.log(this.bulk_status);
    },
    //method open for open courier modal
    courierModal: function courierModal(order, index) {
      //set courier list first
      this.others(); //set courier -> order id

      this.courier.order_id = order.id; // get courier from couerir order list by the index number

      this.courier.order_index = index;

      if (order.courier_id) {
        //console.log(order.courier_id)
        this.courier.courier_id = order.courier_id;
      } //after set all data, open courier modal .........


      this.$modal.show("example");
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
        this.filterOrder();
      }
    },
    end_date: function end_date(value) {
      if (value.length > 1) {
        this.filterOrder();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.orders-heading[data-v-5d234b3c] {\n    font-size: 24px;\n    text-transform: uppercase;\n    border-bottom: 2px solid #000;\n    margin-bottom: 10px;\n    margin-left: 30%;\n}\n.router-link-active[data-v-5d234b3c] {\n      border: 1.5px dashed !important ;\n      color:#000 !important\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "div",
            { staticClass: "order_statistic" },
            [
              _c(
                "router-link",
                {
                  staticClass: "statistic_item ",
                  attrs: { to: { name: "NewOrder" } }
                },
                [
                  _c("h2", [
                    _vm._v(" " + _vm._s(_vm.order_count.new_order) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" New ")])
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
                  _c("h2", [
                    _vm._v(" " + _vm._s(_vm.order_count.pending_order) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Pending")])
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
                  _c("p", [_vm._v(" Shipment  ")])
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
                  _c("h2", [
                    _vm._v("  " + _vm._s(_vm.order_count.return_order) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" Return  ")])
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
                  _c("h2", [
                    _vm._v("  " + _vm._s(_vm.order_count.cancel_order) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" Cancel  ")])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "statistic_item ",
                  attrs: { to: { name: "order" } }
                },
                [
                  _c("h2", [
                    _vm._v("  " + _vm._s(_vm.order_count.total) + " ")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" All  ")])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-11 col-md-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border " }, [
                    _c("h3", { staticClass: "box-title orders-heading" }, [
                      _vm._v(_vm._s(_vm.heading))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.type,
                                expression: "type"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.type = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.ordersList
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "all" } }, [
                              _vm._v("All type")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Onely Admin")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Only Customer")
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
                                value: _vm.status,
                                expression: "status"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.status = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.ordersList
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "all" } }, [
                              _vm._v("All")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("New")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Pending")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Approved")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "4" } }, [
                              _vm._v("Shipment")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "5" } }, [
                              _vm._v("Delivired")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "7" } }, [
                              _vm._v("Retrun")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "6" } }, [
                              _vm._v("Cancel")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
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
                                    var val = "_value" in o ? o._value : o.value
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
                            _c("option", { attrs: { value: "LABEL PRINT" } }, [
                              _vm._v("Label Print")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "INVOICE PRINT" } },
                              [_vm._v("Invoice Print")]
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
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
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "40" } }, [
                                  _vm._v("40")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "50" } }, [
                                  _vm._v("50")
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
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
                          "table table-bordered table-striped table-hover "
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
                            _c("th", { attrs: { width: "15%" } }, [
                              _vm._v("Product")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "10%" } }, [
                              _vm._v("Invoice")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "15%" } }, [
                              _vm._v("Total")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "10%" } }, [
                              _vm._v("Created")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "5%" } }, [
                              _vm._v("Order_place")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "10%" } }, [
                              _vm._v("Order_date")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "5%" } }, [
                              _vm._v("Action")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { width: "10%" } }, [
                              _vm._v("Courier")
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
                              : _vm._l(_vm.orders.data, function(order, index) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { staticStyle: { width: "1%" } }, [
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
                                              $$c = $$el.checked ? true : false
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
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.select_order_id = $$c
                                            }
                                          }
                                        }
                                      })
                                    ]),
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
                                            _vm._s(order.customer_phone) + "  "
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
                                                  order.order_item[0].product
                                                    .thumbnail_img
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
                                                        .product.product_code
                                                  ) +
                                                  "  "
                                              )
                                            ])
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
                                      _vm._v(_vm._s(order.invoice_no))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
                                      _c("strong", [
                                        _vm._v(
                                          "\n                          Total: " +
                                            _vm._s(
                                              parseInt(order.total) -
                                                parseInt(order.discount) +
                                                parseInt(order.shipping_cost)
                                            ) +
                                            "\n\n                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(
                                          "\n                          Paid: " +
                                            _vm._s(parseInt(order.paid)) +
                                            "\n\n                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(
                                          "\n                          Due: " +
                                            _vm._s(
                                              parseInt(order.total) -
                                                (parseInt(order.discount) +
                                                  parseInt(order.paid)) +
                                                parseInt(order.shipping_cost)
                                            ) +
                                            "\n\n                        "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
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
                                                _vm._s(order.create_admin.name)
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
                                                _vm._s(order.create_admin.name)
                                              )
                                            ])
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.order_type == 4
                                        ? _c("p", [
                                            _vm._v(
                                              "\n                          Reseller\n                          "
                                            )
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
                                      order.status == 1
                                        ? _c("span", { staticClass: "badge" }, [
                                            _vm._v("New")
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 2
                                        ? _c("span", { staticClass: "badge" }, [
                                            _vm._v("Pending")
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v("Approved")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 4
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v("Shipment")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 5
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-warning"
                                            },
                                            [_vm._v("Delivered")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 6
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-danger"
                                            },
                                            [_vm._v("Cancel")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      order.status == 7
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-danger"
                                            },
                                            [_vm._v("Return")]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
                                      _vm._v(_vm._s(order.created_at))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
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
                                                  click: function($event) {
                                                    return _vm.approved(
                                                      order,
                                                      index
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          Approved\n                        "
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
                                                  click: function($event) {
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
                                        order.status == 4
                                          ? _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-success action-btn",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.delivered(
                                                      order,
                                                      index
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          Deliverd\n                        "
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
                                                  click: function($event) {
                                                    return _vm.shipment(
                                                      order.id,
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
                                                  click: function($event) {
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
                                                  click: function($event) {
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
                                              "btn btn-sm btn-primary action-btn",
                                            staticStyle: { color: "#fff" },
                                            attrs: {
                                              to: {
                                                name: "viewOrder",
                                                params: { id: order.id }
                                              }
                                            }
                                          },
                                          [_vm._v("View")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", { staticStyle: { width: "1%" } }, [
                                      order.courier_id
                                        ? _c("small", [
                                            _vm._v(_vm._s(order.courier.name))
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
                                      order.status == 3 || order.status == 4
                                        ? _c("i", {
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
                          _vm.start_date.length > 0
                            ? _c("pagination", {
                                attrs: { data: _vm.orders },
                                on: {
                                  "pagination-change-page": _vm.filterOrder
                                }
                              })
                            : _c("pagination", {
                                attrs: { data: _vm.orders },
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
                            _c("strong", [_vm._v(_vm._s(_vm.orders.total))]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "example", width: 300, height: 200 } }, [
        _c("div", { staticClass: "card", staticStyle: { padding: "10px" } }, [
          _c("div", { staticClass: "card-body" }, [
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
                _c("div", { staticClass: "form-group text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("submit")]
                  )
                ])
              ]
            )
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

/***/ "./resources/js/components/admin/order/Wholesale.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/order/Wholesale.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true& */ "./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true&");
/* harmony import */ var _Wholesale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wholesale.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& */ "./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Wholesale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d234b3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/Wholesale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=style&index=0&id=5d234b3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_style_index_0_id_5d234b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Wholesale.vue?vue&type=template&id=5d234b3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesale_vue_vue_type_template_id_5d234b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);