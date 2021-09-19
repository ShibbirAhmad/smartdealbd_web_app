(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      comments: "",
      search: "",
      start_date: "",
      end_date: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      status: "all",
      type: "all",
      page: 1,
      selected: false,
      //for biblk action
      select_order_id: [],
      bulk_status: "all",
      //heading in table
      heading: "All Order",
      bulkActionType: "0",
      //for filtering order
      courier_id: "",
      credit_in: "",
      order_count: ""
    };
  },
  methods: {
    //get order list
    ordersList: function ordersList() {
      var _this = this;

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
        if (resp.data.status == "SUCCESS") {
          _this.orders = resp.data.orders;
          _this.loading = false;
          _this.page = _this.page + 1;
          _this.loading = false;
          _this.order_count = resp.data.order_count;

          _this.$Progress.finish();
        } //else show a error
        else {
            _this.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000
            });
          }
      })["catch"](function (error) {
        //finish progress bar after resp
        _this.$Progress.finish();

        _this.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initail others method for get courier list
    others: function others() {
      var _this2 = this;

      axios.get("/others").then(function (resp) {
        //only success resp
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this2.couriers = resp.data.couriers;
          _this2.comments = resp.data.comments;
        }
      });
    },
    //initial method for order approved
    approved: function approved(order, index) {
      var _this3 = this;

      //start progress bar
      this.$Progress.start();
      axios.get("/approved/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this3.$Progress.finish(); //if resp success then....


        if (resp.data.status == "SUCCESS") {
          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this3.orders.data[index].status = 3;
        } //not resp success.....
        else {
            _this3.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 5000
            });
          }
      })["catch"](function (error) {
        //end progress bar after resp
        _this3.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initial method for order cancel
    cancel: function cancel(order, index) {
      var _this4 = this;

      this.$Progress.start();
      axios.get("/cancel/order/" + order.id).then(function (resp) {
        //end progress bar after resp
        _this4.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this4.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this4.orders.data[index].status = 6;
        } //for any kind of error resp .......
        else {
            _this4.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        //end progress bar after resp
        _this4.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    //initial method for order return
    returnOrder: function returnOrder(order, index) {
      var _this5 = this;

      this.$Progress.start();
      axios.get("/return/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this5.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this5.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this5.orders.data[index].status = 7;
        } //for any kind off error resp
        else {
            _this5.$toasted.show("something went to wrong", {
              type: "error",
              position: "top-center",
              duration: 2000
            });
          }
      })["catch"](function (error) {
        console.log(error);

        _this5.$toasted.show("something went to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    delivered: function delivered(order, index) {
      var _this6 = this;

      axios.get("/api/balance/list").then(function (resp) {
        console.log(resp);
        var options = {};
        resp.data.balance.forEach(function (element) {
          options[element.id] = element.name;
        });
        Swal.fire({
          title: "Select a balance",
          input: "select",
          inputOptions: options,
          inputPlaceholder: "Select One",
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            _this6.credit_in = result.value;
            Swal.fire({
              title: 'CHECK IT',
              html: "\n                  <div class=\"form-group\">\n                    <label>Credit Amount</label>\n                    <input class=\"form-control\" readonly value=\"".concat(parseInt(order.total) - parseInt(order.paid) - parseInt(order.discount) + parseInt(order.shipping_cost), "\">\n                  </div>\n              ")
            }).then(function (result) {
              if (result.value) {
                _this6.$Progress.start();

                axios.get("/delivered/order/" + order.id, {
                  params: {
                    credit_in: _this6.credit_in
                  }
                }).then(function (resp) {
                  console.log(resp); //end progress bar after resp

                  _this6.$Progress.finish(); //only success resp .......


                  if (resp.data.status == "SUCCESS") {
                    _this6.$toasted.show(resp.data.message, {
                      type: "success",
                      position: "top-center",
                      duration: 2000
                    });

                    _this6.orders.data[index].status = 5;
                  } //any kind of error resp
                  else {
                      _this6.$toasted.show(resp.data, {
                        type: "error",
                        position: "top-center",
                        duration: 2000
                      });
                    }
                });
              }
            });
          }
        });
      });
    },
    shipment: function shipment(order_id, index) {
      var _this7 = this;

      if (!this.orders.data[index].courier_id) {
        alert("please select a courier");
        return;
      }

      if (!this.orders.data[index].memo_no) {
        alert("Must Be Need Memo Number");
        return;
      }

      this.$Progress.start();
      axios.get("/shipment/order/" + order_id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this7.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this7.orders.data[index].status = 4;

          _this7.$Progress.finish();
        }
      });
    },
    pending: function pending(order, index) {
      var _this8 = this;

      //start progress bar
      this.$Progress.start();
      axios.get("/pending/order/" + order.id).then(function (resp) {
        console.log(resp); //end progress bar after resp

        _this8.$Progress.finish(); //only success resp .......


        if (resp.data.status == "SUCCESS") {
          _this8.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          });

          _this8.orders.data[index].status = 2;
        } //any kibd off error resp
        else {
            _this8.$Progress.finish();

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
    },
    OrderCourier: function OrderCourier() {
      var _this9 = this;

      //start the progress bar
      this.$Progress.start();
      var order_index = this.courier.order_index;
      axios.post("/order/courier/update/" + this.courier.order_id, {
        courier_id: this.courier.courier_id,
        memo_no: this.courier.memo_no
      }).then(function (resp) {
        //end progressbar after resp...........
        _this9.$Progress.finish();

        if (resp.data.status == "SUCCESS") {
          _this9.$modal.hide("example");

          console.log(resp.data.courier);

          if (resp.data.order.courier_id) {
            _this9.orders.data[order_index].courier_id = resp.data.order.courier_id;
          }

          if (resp.data.order.memo_no) {
            _this9.orders.data[order_index].memo_no = resp.data.order.memo_no;
          }

          if (resp.data.courier) {
            _this9.orders.data[order_index].courier = resp.data.courier;
          }

          _this9.courier.courier_id = "";
          _this9.courier.memo_no = "", _this9.$toasted.show(resp.data.message, {
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
      var _this10 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      //if search lenght minimum 2
      if (this.search.length > 1) {
        //show loader
        this.loading = true; //fetch data

        axios.get("/order/search/" + this.search + "?page=" + page).then(function (resp) {
          //if success resp
          if (resp.data.status == "SUCCESS") {
            _this10.orders = resp.data.orders;
            _this10.loading = false;
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
      var _this11 = this;

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
        _this11.$Progress.finish();

        _this11.loading = false;

        if (resp.data.status == "SUCCESS") {
          _this11.orders = resp.data.orders;
          _this11.loading = false;
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
    },
    labelPrint: function labelPrint() {
      window.open("", "_self", "width=600,height=600");
    },
    comment: function comment(order_id, order_index, _comment) {
      var _this12 = this;

      console.log(_comment);
      var options = {};
      this.comments.forEach(function (element) {
        options[element.name] = element.name;
      });
      var sSelect = document.getElementsByClassName("swal2-select");
      Swal.fire({
        title: _comment ? _comment : "Select a comment",
        input: "select",
        inputOptions: options,
        inputPlaceholder: "Select or change a comment",
        showCancelButton: true
      }).then(function (result) {
        if (result.value == "others") {
          Swal.fire({
            input: "text"
          }).then(function (other) {
            if (other.value) {
              axios.get("/api/order/comment", {
                params: {
                  order_id: order_id,
                  comment: other.value
                }
              }).then(function (resp) {
                console.log(resp);

                if (resp.data.status == "OK") {
                  location.reload();

                  _this12.$toasted.show(resp.data.message, {
                    type: "success",
                    duration: 4000,
                    position: "top-center"
                  });
                }
              })["catch"](function (e) {
                // console.log
                console.log(e); // console.log(e);
              });
            }
          });
        }

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.orders-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-bottom: 2px solid #000;\r\n  margin-bottom: 10px;\n}\n.order_statistic a {\r\n    background:#fff;\r\n    color:#000 ;\r\n    box-shadow: 0 1pt 6pt rgb(150 165 237);\r\n    border: none ;\r\n    padding: 11px 46px;\r\n    margin: 5px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    font-family: serif;\n}\n.router-link-active {\r\n   border: 1.5px dashed !important ;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            "h1",
            { staticClass: "order_statistic" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "addOrder" } }
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v(" Add\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "NewOrder" } }
                },
                [
                  _vm._v("New "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.new_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "PendingOrder" } }
                },
                [
                  _vm._v("Pending "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.pending_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "ApprovedOrder" } }
                },
                [
                  _vm._v("Ready To Ship  "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.approved_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "ShipmentOrder" } }
                },
                [
                  _vm._v("Shipment  "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.shipment_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "DeliveredOrder" } }
                },
                [
                  _vm._v("Delivered "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.delivered_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "ReturnOrder" } }
                },
                [
                  _vm._v("Return  "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.return_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm",
                  attrs: { to: { name: "CancelOrder" } }
                },
                [
                  _vm._v("Cancel  "),
                  _c("sup", [
                    _vm._v(" " + _vm._s(_vm.order_count.cancel_order) + " ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm ",
                  attrs: { to: { name: "WholeSaleOrder" } }
                },
                [_vm._v("wholesale")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-sm  active",
                  staticStyle: { background: "#4aa316" },
                  attrs: { to: { name: "order" } }
                },
                [_vm._v("All")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row " }, [
              _c("div", { staticClass: "col-lg-11 col-md-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "margin-bottom": "3px" }
                      },
                      [
                        _c("div", { staticClass: "col-lg-3" }, [
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
                              attrs: { name: "", id: "" },
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
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 orders-heading" }, [
                          _c("h3", { staticClass: "box-title" }, [
                            _vm._v(_vm._s(_vm.heading))
                          ])
                        ])
                      ]
                    ),
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
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Whole Sale")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "4" } }, [
                              _vm._v("Only Reseller")
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
                      _c("div", { staticClass: "col-lg-2" }, [
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
                                        _vm.courier_id = $event.target.multiple
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
                                      [
                                        _vm._v(
                                          "\n                              Select Courier\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.couriers, function(courier) {
                                      return _c(
                                        "option",
                                        {
                                          key: courier.id,
                                          domProps: { value: courier.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                              " +
                                              _vm._s(courier.name) +
                                              "\n                            "
                                          )
                                        ]
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
                      _c("div", { staticClass: "col-lg-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            staticStyle: { "margin-left": "45px" },
                            attrs: { type: "button" },
                            on: { click: _vm.resetAll }
                          },
                          [_c("i", { staticClass: "fa fa-refresh" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-1" }, [
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
                            _c("th", { attrs: { scope: "col" } }, [
                              _c("input", {
                                attrs: { type: "checkbox" },
                                on: { click: _vm.selectAll }
                              })
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Host Name")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("customer_name")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("C_phone")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("C_address")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Invoice")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Total")
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("Create_by")
                            ]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { width: "2%" },
                                attrs: { scope: "col" }
                              },
                              [_vm._v("Order_place")]
                            ),
                            _vm._v(" "),
                            _c("th", [_vm._v("Order_date")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Action")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Courier")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Comment")])
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
                                      _vm._v(
                                        " " + _vm._s(order.host_name) + " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "three-percent" }, [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(order.customer_name) +
                                          "\n                      "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "three-percent" }, [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(order.customer_phone) +
                                          "\n                      "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "three-percent" }, [
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
                                    _c("td", { staticClass: "two-percent" }, [
                                      _vm._v(_vm._s(order.invoice_no))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "two-percent" }, [
                                      _c("b", [
                                        _c("strong", [
                                          _vm._v(
                                            "\n                            Total:\n                            " +
                                              _vm._s(
                                                parseInt(order.total) -
                                                  parseInt(order.discount) +
                                                  parseInt(order.shipping_cost)
                                              ) +
                                              "\n                          "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("strong", [
                                          _vm._v(
                                            " P: " +
                                              _vm._s(parseInt(order.paid)) +
                                              " "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("strong", [
                                          _vm._v(
                                            "\n                            D:\n                            " +
                                              _vm._s(
                                                parseInt(order.total) -
                                                  (parseInt(order.discount) +
                                                    parseInt(order.paid)) +
                                                  parseInt(order.shipping_cost)
                                              ) +
                                              "\n                          "
                                          )
                                        ])
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
                                            ),
                                            order.reseller.username
                                              ? _c("strong", [
                                                  _vm._v(
                                                    _vm._s(
                                                      order.reseller.username
                                                    )
                                                  )
                                                ])
                                              : _vm._e()
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
                                        order.status == 1 || order.status == 7
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
                                        order.status != 5 && order.status != 4
                                          ? _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-warning",
                                                staticStyle: { width: "70px" },
                                                attrs: {
                                                  to: {
                                                    name: "orderEdit",
                                                    params: { id: order.id }
                                                  }
                                                }
                                              },
                                              [_vm._v("Edit")]
                                            )
                                          : _vm._e()
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
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      order.comment
                                        ? _c("small", [
                                            _vm._v(_vm._s(order.comment))
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.comment(
                                                order.id,
                                                index,
                                                order.comment
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("CO")]
                                      )
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

/***/ "./resources/js/components/admin/order/Order.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/order/Order.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=42911132& */ "./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=42911132& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Order.vue?vue&type=template&id=42911132&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_42911132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);