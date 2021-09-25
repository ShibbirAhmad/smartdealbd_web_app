(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Index",
  data: function data() {
    return {
      load_more: false,
      orders: {},
      loading: true,
      due: "",
      balance: {},
      stock: "",
      admin_orders: "",
      top_selling_products_today: "",
      base_url: this.$store.state.image_base_link,
      analysis: "",
      analysisshow: 1,
      admin_order_today: true,
      admin_order_yesterday: false,
      admin_order_this_week: false,
      admin_order_this_month: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.dispatch("admin");
    this.dashboard();
  },
  methods: {
    adminOrderToday: function adminOrderToday() {
      this.admin_order_today = true;
      this.admin_order_yesterday = false;
      this.admin_order_this_week = false;
      this.admin_order_this_month = false;
    },
    adminOrderYesterday: function adminOrderYesterday() {
      this.admin_order_today = false;
      this.admin_order_yesterday = true;
      this.admin_order_this_week = false;
      this.admin_order_this_month = false;
    },
    adminOrderThisWeek: function adminOrderThisWeek() {
      this.admin_order_today = false;
      this.admin_order_yesterday = false;
      this.admin_order_this_week = true;
      this.admin_order_this_month = false;
    },
    adminOrderThisMonth: function adminOrderThisMonth() {
      this.admin_order_today = false;
      this.admin_order_yesterday = false;
      this.admin_order_this_week = false;
      this.admin_order_this_month = true;
    },
    loadMoreData: function loadMoreData(e) {
      var _this = this;

      e.target.innerText = "Loading......";
      this.$Progress.start();
      axios.get("/api/load/more/dashboard/data").then(function (resp) {
        console.log(resp);
        _this.stock = resp.data.stock;
        _this.admin_orders = resp.data.admin_order;
        _this.top_selling_products_today = resp.data.top_selling_products_today;
        _this.analysis = resp.data.analysis;
        _this.due = resp.data.due;
        _this.load_more = true;

        _this.$Progress.finish();
      });
    },
    dashboard: function dashboard() {
      var _this2 = this;

      axios.get("/dashboard").then(function (resp) {
        console.log(resp);
        _this2.orders = resp.data.orders;
        _this2.balance = resp.data.balance;
        _this2.loading = false;
      });
    },
    //today credit balance counter
    todayCreditBalance: function todayCreditBalance(balance) {
      var amount = 0;
      balance.today_credit_balance.forEach(function (element) {
        amount += element.amount;
      });
      return amount;
    },
    //today total credit balance counter
    todayTotalCredit: function todayTotalCredit() {
      var amount = 0;
      this.balance.forEach(function (item) {
        item.today_credit_balance.forEach(function (credit) {
          amount += credit.amount;
        });
      });
      return amount;
    },
    //today debit balance counter
    todayDebitBalance: function todayDebitBalance(balance) {
      var amount = 0;
      balance.today_debit_balance.forEach(function (element) {
        amount += element.amount;
      });
      return amount;
    },
    //today total debit balance counter
    todayTotalDebit: function todayTotalDebit() {
      var amount = 0;
      this.balance.forEach(function (item) {
        item.today_debit_balance.forEach(function (debit) {
          amount += debit.amount;
        });
      });
      return amount;
    },
    // afet debit credit substruction
    debitCreditSubstraction: function debitCreditSubstraction(balance) {
      var debit_amount = 0;
      var credit_amount = 0;
      balance.total_debit_balance.forEach(function (debit) {
        debit_amount += debit.amount;
      });
      balance.total_credit_balance.forEach(function (credit) {
        credit_amount += credit.amount;
      });
      var amount = parseInt(credit_amount) - parseInt(debit_amount);
      return amount;
    },
    //total balance
    totalBalance: function totalBalance() {
      var debit_amount = 0;
      var credit_amount = 0;
      this.balance.forEach(function (item) {
        item.total_debit_balance.forEach(function (debit) {
          debit_amount += debit.amount;
        });
      });
      this.balance.forEach(function (item) {
        item.total_credit_balance.forEach(function (credit) {
          credit_amount += credit.amount;
        });
      });
      var amount = parseInt(credit_amount) - parseInt(debit_amount);
      return amount;
    }
  },
  components: {
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {
    admin: function admin() {
      return this.$store.getters.admin;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box-gradiant {\n  background: linear-gradient(to right, #c33764, #1d2671);\n}\n.small-box .icon {\n  color: #fff !important;\n  opacity: 0.6;\n}\n.product-thumb.clearfix {\n  padding: 12px 13px;\n  margin-right: 10px;\n  margin-right: 10px;\n  border: 1px solid #eee;\n  box-shadow: 2px 2px 2px #eee;\n}\n.custom-box {\n  background: #fff;\n  padding: 13px;\n  min-height: 220px;\n  box-shadow: 3px 3px 3px #ddd;\n  border-radius: 6px;\n  margin-bottom: 10px;\n}\n.custom-box-body strong {\n  position: absolute;\n  right: 10%;\n  color: blue;\n}\n.custom-box-footer {\n  background: #00a65a;\n  color: #fff;\n}\n.analysis-item {\n  display: flex;\n  list-style-type: none;\n  float: right;\n}\n.analysis-item li {\n  padding: 10px 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n.analysis-item .active {\n  border-bottom: 2px solid #000;\n}\n.admin_order_menu {\n  display: flex;\n}\n.admin_order_menu li {\n    list-style-type: none;\n    margin: 5px 14px;\n    cursor: pointer;\n    padding: 5px 10px;\n    box-shadow: 0 1pt 12pt rgb(150 165 237);\n}\n.active_border {\n  border: 2px dashed #000;\n}\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "h1",
              { staticStyle: { "text-align": "center", "font-size": "50px" } },
              [_c("i", { staticClass: "fa fa-spinner fa-spin" })]
            )
          : _c("section", { staticClass: "content" }, [
              _vm.$can("view dashboard")
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", {}, [
                              _vm._v(_vm._s(_vm.orders.new_order))
                            ]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("New Orders")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "NewOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.orders.pending_order))
                            ]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Pending Order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "PendingOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.orders.approved_order))
                            ]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Ready To Ship")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "ApprovedOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-sm-6 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.orders.shipment_order))
                            ]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Shipment order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "ShipmentOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-sm-6 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.orders.delivered_order))
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Delivered order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "DeliveredOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-sm-6 col-xs-6" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-yellow" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [_vm._v(_vm._s(_vm.orders.return_order))]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Return order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "ReturnOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-sm-12 col-xs-12" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-red" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [_vm._v(_vm._s(_vm.orders.cancel_order))]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("Cancel order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "CancelOrder" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-sm-12 col-xs-12" }, [
                      _c(
                        "div",
                        { staticClass: "small-box bg-green" },
                        [
                          _c("div", { staticClass: "inner" }, [
                            _c("h3", [_vm._v(_vm._s(_vm.orders.total))]),
                            _vm._v(" "),
                            _c("h4", [_vm._v("All order")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "icon" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "small-box-footer",
                              attrs: { to: { name: "order" } }
                            },
                            [
                              _vm._v("More info "),
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("Manage accounts")
                ? _c("div", { staticClass: "row" }, [
                    _c("h1", { staticStyle: { "margin-left": "15px" } }, [
                      _vm._v("Accounts")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "custom-box" }, [
                        _c(
                          "div",
                          { staticClass: "custom-box-body" },
                          [
                            _vm._l(_vm.balance, function(balance, c_index) {
                              return _c("h4", { key: c_index }, [
                                _vm._v(
                                  "\n                In " +
                                    _vm._s(balance.name) +
                                    " : "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      parseInt(_vm.todayCreditBalance(balance))
                                    )
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v(" In  Total : "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.todayTotalCredit()) + " ")
                              ])
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "custom-box" }, [
                        _c(
                          "div",
                          { staticClass: "custom-box-body" },
                          [
                            _vm._l(_vm.balance, function(balance, c_index) {
                              return _c("h4", { key: c_index }, [
                                _vm._v(
                                  "\n                In " +
                                    _vm._s(balance.name) +
                                    " : "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      parseInt(_vm.todayDebitBalance(balance))
                                    )
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v(" In Total  : "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.todayTotalDebit()) + " ")
                              ])
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._m(2)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4" }, [
                      _c("div", { staticClass: "custom-box" }, [
                        _c(
                          "div",
                          { staticClass: "custom-box-body" },
                          [
                            _vm._l(_vm.balance, function(balance, c_index) {
                              return _c("h4", { key: c_index }, [
                                _vm._v(
                                  "\n                In " +
                                    _vm._s(balance.name) +
                                    " : "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      parseInt(
                                        _vm.debitCreditSubstraction(balance)
                                      )
                                    )
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v(" In Total   "),
                              _c("strong", [
                                _vm._v(" " + _vm._s(_vm.totalBalance()) + " ")
                              ])
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.load_more
                ? _c(
                    "div",
                    {
                      staticClass: "row mt-5",
                      staticStyle: { "margin-top": "30px" }
                    },
                    [
                      _c("div", { staticClass: "col-log-12 text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.loadMoreData($event)
                              }
                            }
                          },
                          [_vm._v("Load More Data")]
                        )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.load_more
                ? _c("div", [
                    _vm.$can("Manage accounts")
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-lg-6" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "h1",
                                { staticStyle: { "margin-left": "15px" } },
                                [_vm._v("Due Summary")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-6" }, [
                                _c("div", { staticClass: "custom-box" }, [
                                  _c(
                                    "div",
                                    { staticClass: "custom-box-body" },
                                    [
                                      _c("h4", [
                                        _vm._v(
                                          "\n                    Office Sale Due "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.due.office_sale_due)
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", [
                                        _vm._v(
                                          "\n                    Whole Sale Due "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.due.whole_sale_due)
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", [
                                        _vm._v(
                                          "\n                    Order Due "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(parseInt(_vm.due.order_due))
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", [
                                        _c("strong", [
                                          _vm._v(
                                            "=\n                      " +
                                              _vm._s(
                                                parseInt(
                                                  _vm.due.office_sale_due
                                                ) +
                                                  parseInt(
                                                    _vm.due.whole_sale_due
                                                  ) +
                                                  parseInt(_vm.due.order_due)
                                              )
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(4)
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-6" }, [
                                _c("div", { staticClass: "custom-box" }, [
                                  _c(
                                    "div",
                                    { staticClass: "custom-box-body" },
                                    [
                                      _c("h4", [
                                        _vm._v(
                                          "\n                    Product Supplier\n                    "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.due.product_supplier)
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", [
                                        _vm._v(
                                          "\n                    Fabrics Supplier\n                    "
                                        ),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.due.fabrics_supplier)
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("h4", [
                                        _c("strong", [
                                          _vm._v(
                                            "=\n                      " +
                                              _vm._s(
                                                parseInt(
                                                  _vm.due.product_supplier
                                                ) +
                                                  parseInt(
                                                    _vm.due.fabrics_supplier
                                                  )
                                              )
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._m(5)
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-6" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg-12" }, [
                                _c(
                                  "h1",
                                  {
                                    staticStyle: {
                                      "text-align": "right",
                                      "margin-top": "30px"
                                    }
                                  },
                                  [_vm._v("Order Analysis")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "custom-box" }, [
                                  _c(
                                    "div",
                                    { staticClass: "custom-box-body" },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "analysis-item" },
                                        [
                                          _c(
                                            "li",
                                            {
                                              class: {
                                                active: _vm.analysisshow == 1
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.analysisshow = 1
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Today\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              class: {
                                                active: _vm.analysisshow == 4
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.analysisshow = 4
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      yesterday\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              class: {
                                                active: _vm.analysisshow == 2
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.analysisshow = 2
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      This week\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "li",
                                            {
                                              class: {
                                                active: _vm.analysisshow == 3
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.analysisshow = 3
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      This Month\n                    "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("table", { staticClass: "table" }, [
                                        _vm._m(6),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          [
                                            _vm._l(_vm.analysis, function(
                                              item,
                                              index
                                            ) {
                                              return _c("tr", { key: index }, [
                                                _c("td", [
                                                  _vm._v(_vm._s(index))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm.analysisshow == 1
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.today
                                                                .order_quantity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.yesterday
                                                                .order_quantity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_week
                                                                .order_quantity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_month
                                                                .order_quantity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm.analysisshow == 1
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.today
                                                                .product_quanity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.yesterday
                                                                .product_quanity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_week
                                                                .product_quanity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_month
                                                                .product_quanity
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm.analysisshow == 1
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.today.amount
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.yesterday
                                                                .amount
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_week
                                                                .amount
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                " +
                                                            _vm._s(
                                                              item.this_month
                                                                .amount
                                                            ) +
                                                            "\n                              "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              ])
                                            }),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c("td"),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("span", [
                                                  _vm._v(" = "),
                                                  _vm.analysisshow == 1
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale.today
                                                                  .order_quantity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .today
                                                                      .order_quantity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .today
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .today
                                                                        .order_quantity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order.today
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .today
                                                                        .order_quantity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .yesterday
                                                                  .order_quantity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .yesterday
                                                                      .order_quantity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .yesterday
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .yesterday
                                                                        .order_quantity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .yesterday
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .yesterday
                                                                        .order_quantity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_week
                                                                  .order_quantity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_week
                                                                      .order_quantity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_week
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_week
                                                                        .order_quantity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_week
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_week
                                                                        .order_quantity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                 "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_month
                                                                  .order_quantity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_month
                                                                      .order_quantity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_month
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_month
                                                                        .order_quantity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_month
                                                                    .order_quantity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_month
                                                                        .order_quantity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                  "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("span", [
                                                  _vm._v(" = "),
                                                  _vm.analysisshow == 1
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale.today
                                                                  .product_quanity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .today
                                                                      .product_quanity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .today
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .today
                                                                        .product_quanity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order.today
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .today
                                                                        .product_quanity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .yesterday
                                                                  .product_quanity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .yesterday
                                                                      .product_quanity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .yesterday
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .yesterday
                                                                        .product_quanity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .yesterday
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .yesterday
                                                                        .product_quanity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_week
                                                                  .product_quanity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_week
                                                                      .product_quanity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_week
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_week
                                                                        .product_quanity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_week
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_week
                                                                        .product_quanity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                 "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_month
                                                                  .product_quanity
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_month
                                                                      .product_quanity
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_month
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_month
                                                                        .product_quanity
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_month
                                                                    .product_quanity
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_month
                                                                        .product_quanity
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                  "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("span", [
                                                  _vm._v(" = "),
                                                  _vm.analysisshow == 1
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale.today
                                                                  .amount
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .today
                                                                      .amount
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .today
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .today
                                                                        .amount
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order.today
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .today
                                                                        .amount
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 4
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                               " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .yesterday
                                                                  .amount
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .yesterday
                                                                      .amount
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .yesterday
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .yesterday
                                                                        .amount
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .yesterday
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .yesterday
                                                                        .amount
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 2
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_week
                                                                  .amount
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_week
                                                                      .amount
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_week
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_week
                                                                        .amount
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_week
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_week
                                                                        .amount
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                 "
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.analysisshow == 3
                                                    ? _c("b", [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              parseInt(
                                                                _vm.analysis
                                                                  .sale
                                                                  .this_month
                                                                  .amount
                                                                  ? _vm.analysis
                                                                      .sale
                                                                      .this_month
                                                                      .amount
                                                                  : 0
                                                              ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .wholesale
                                                                    .this_month
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .wholesale
                                                                        .this_month
                                                                        .amount
                                                                    : 0
                                                                ) +
                                                                parseInt(
                                                                  _vm.analysis
                                                                    .order
                                                                    .this_month
                                                                    .amount
                                                                    ? _vm
                                                                        .analysis
                                                                        .order
                                                                        .this_month
                                                                        .amount
                                                                    : 0
                                                                )
                                                            ) +
                                                            "\n\n                                  "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ])
                                              ])
                                            ])
                                          ],
                                          2
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$can("manage product")
                      ? _c("div", { staticClass: "row" }, [
                          _c("h1", { staticStyle: { "margin-left": "15px" } }, [
                            _vm._v("Stock")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4 col-xs-6" }, [
                            _c("div", { staticClass: "small-box bg-green" }, [
                              _c("div", { staticClass: "inner" }, [
                                _c("h3", {}, [
                                  _vm._v(_vm._s(_vm.stock.total_quantity))
                                ]),
                                _vm._v(" "),
                                _c("h4", [_vm._v("Total Stock Quantity")])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4 col-xs-6" }, [
                            _c("div", { staticClass: "small-box bg-green" }, [
                              _c("div", { staticClass: "inner" }, [
                                _c("h3", {}, [
                                  _vm._v(
                                    _vm._s(parseInt(_vm.stock.total_price))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", [_vm._v("Total Stock Amount")])
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("h3", { staticClass: "text-center text-uppercase" }, [
                        _vm._v("Create Analysis")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 col-md-4" }, [
                        _c("div", { staticClass: "box box-primary" }, [
                          _c(
                            "div",
                            {
                              staticClass: "box-header with-border text-center"
                            },
                            [
                              _vm.admin.image
                                ? _c("img", {
                                    staticClass: "img-circle small-image",
                                    attrs: {
                                      src: _vm.base_url + _vm.admin.image,
                                      alt: _vm.admin.name
                                    }
                                  })
                                : _c("img", {
                                    staticClass: "img-circle small-image",
                                    attrs: {
                                      src:
                                        _vm.base_url +
                                        "images/static/user2-160x160.jpg",
                                      alt: _vm.admin.name
                                    }
                                  }),
                              _vm._v(" "),
                              _c("h4", { staticClass: "text-center" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      "Hi " +
                                        _vm.admin.name +
                                        " see your order create history"
                                    ) +
                                    "\n              "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "box-body" }, [
                            _c("table", { staticClass: "table" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.admin_orders.session_admin, function(
                                  session_admin_order,
                                  index
                                ) {
                                  return _c("tr", { key: index }, [
                                    _c("td", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(session_admin_order.created_at)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(session_admin_order.total))
                                    ])
                                  ])
                                }),
                                0
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-8 col-md-8" }, [
                        _c("div", { staticClass: "box box-success" }, [
                          _c(
                            "div",
                            {
                              staticClass: "box-header with-border text-center"
                            },
                            [
                              _c("ul", { staticClass: "admin_order_menu" }, [
                                _c(
                                  "li",
                                  {
                                    class: {
                                      active_border:
                                        _vm.admin_order_today == true
                                    },
                                    on: { click: _vm.adminOrderToday }
                                  },
                                  [_vm._v("  Today ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    class: {
                                      active_border:
                                        _vm.admin_order_yesterday == true
                                    },
                                    on: { click: _vm.adminOrderYesterday }
                                  },
                                  [_vm._v(" Yesterday ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    class: {
                                      active_border:
                                        _vm.admin_order_this_week == true
                                    },
                                    on: { click: _vm.adminOrderThisWeek }
                                  },
                                  [_vm._v(" This Week ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    class: {
                                      active_border:
                                        _vm.admin_order_this_month == true
                                    },
                                    on: { click: _vm.adminOrderThisMonth }
                                  },
                                  [_vm._v("  This Month  ")]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "box-body" }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-bordered table-striped table-hover "
                              },
                              [
                                _vm._m(8),
                                _vm._v(" "),
                                _vm.admin_order_today
                                  ? _c(
                                      "tbody",
                                      _vm._l(_vm.admin_orders.today, function(
                                        order_create_count,
                                        index
                                      ) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [_vm._v(_vm._s(index + 1))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            order_create_count.create_admin
                                              .image
                                              ? _c("img", {
                                                  staticClass:
                                                    "img-circle small-image",
                                                  staticStyle: {
                                                    width: "60px",
                                                    height: "60px"
                                                  },
                                                  attrs: {
                                                    src:
                                                      _vm.base_url +
                                                      order_create_count
                                                        .create_admin.image
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(
                                                  order_create_count
                                                    .create_admin.name
                                                ) +
                                                "\n                      "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(order_create_count.total)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " ৳" +
                                                _vm._s(
                                                  order_create_count.total_amount
                                                )
                                            )
                                          ])
                                        ])
                                      }),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.admin_order_yesterday
                                  ? _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.admin_orders.yesterday,
                                        function(order_create_count, index) {
                                          return _c("tr", { key: index }, [
                                            _c("td", [
                                              _vm._v(_vm._s(index + 1))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              order_create_count.create_admin
                                                .image
                                                ? _c("img", {
                                                    staticClass:
                                                      "img-circle small-image",
                                                    staticStyle: {
                                                      width: "60px",
                                                      height: "60px"
                                                    },
                                                    attrs: {
                                                      src:
                                                        _vm.base_url +
                                                        order_create_count
                                                          .create_admin.image
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(
                                                    order_create_count
                                                      .create_admin.name
                                                  ) +
                                                  "\n                      "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(order_create_count.total)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "৳" +
                                                  _vm._s(
                                                    order_create_count.total_amount
                                                  )
                                              )
                                            ])
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.admin_order_this_week
                                  ? _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.admin_orders.this_week,
                                        function(order_create_count, index) {
                                          return _c("tr", { key: index }, [
                                            _c("td", [
                                              _vm._v(_vm._s(index + 1))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              order_create_count.create_admin
                                                .image
                                                ? _c("img", {
                                                    staticClass:
                                                      "img-circle small-image",
                                                    staticStyle: {
                                                      width: "60px",
                                                      height: "60px"
                                                    },
                                                    attrs: {
                                                      src:
                                                        _vm.base_url +
                                                        order_create_count
                                                          .create_admin.image
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(
                                                    order_create_count
                                                      .create_admin.name
                                                  ) +
                                                  "\n                      "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(order_create_count.total)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "৳" +
                                                  _vm._s(
                                                    order_create_count.total_amount
                                                  )
                                              )
                                            ])
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.admin_order_this_month
                                  ? _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.admin_orders.this_month,
                                        function(order_create_count, index) {
                                          return _c("tr", { key: index }, [
                                            _c("td", [
                                              _vm._v(_vm._s(index + 1))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              order_create_count.create_admin
                                                .image
                                                ? _c("img", {
                                                    staticClass:
                                                      "img-circle small-image",
                                                    staticStyle: {
                                                      width: "60px",
                                                      height: "60px"
                                                    },
                                                    attrs: {
                                                      src:
                                                        _vm.base_url +
                                                        order_create_count
                                                          .create_admin.image
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(
                                                    order_create_count
                                                      .create_admin.name
                                                  ) +
                                                  "\n                      "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(order_create_count.total)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "৳" +
                                                  _vm._s(
                                                    order_create_count.total_amount
                                                  )
                                              )
                                            ])
                                          ])
                                        }
                                      ),
                                      0
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.$can("view dashboard")
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "h3",
                            { staticClass: "text-center text-uppercase" },
                            [_vm._v("Top Sell Product Today")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c("div", { staticClass: "box box-primary" }, [
                              _c("div", {
                                staticClass: "bx-header with-border"
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "box-body" },
                                [
                                  _vm.top_selling_products_today.length
                                    ? _c(
                                        "carousel",
                                        {
                                          attrs: {
                                            nav: false,
                                            autoplay: true,
                                            autoplayTimeout: 4000,
                                            responsive: {
                                              0: { items: 3 },
                                              600: { items: 7 }
                                            }
                                          }
                                        },
                                        _vm._l(
                                          _vm.top_selling_products_today,
                                          function(top_s_product) {
                                            return _c(
                                              "div",
                                              {
                                                key: top_s_product.id,
                                                staticClass:
                                                  "product-thumb clearfix"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "image" },
                                                  [
                                                    _c("img", {
                                                      staticClass:
                                                        "img-responsive",
                                                      attrs: {
                                                        src:
                                                          _vm.base_url +
                                                          top_s_product.product
                                                            .product_image[0]
                                                            .product_image
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "caption" },
                                                  [
                                                    _c("h6", [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href:
                                                              "/public/product/view/" +
                                                              top_s_product
                                                                .product.slug
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              top_s_product
                                                                .product.name +
                                                                "" +
                                                                top_s_product
                                                                  .product
                                                                  .product_code
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("h4", [
                                                      _vm._v(
                                                        "\n                      order today: "
                                                      ),
                                                      _c("b", [
                                                        _vm._v(
                                                          _vm._s(
                                                            top_s_product.total
                                                          ) + " "
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Order")]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v("Home")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today credit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("today debit")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-box-footer" }, [
      _c("h3", { staticClass: "text-center text-uppercase" }, [
        _vm._v("total balance")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "custom-box-footer",
        staticStyle: { "margin-top": "70px" }
      },
      [
        _c("h3", { staticClass: "text-center text-uppercase" }, [
          _vm._v("GET it")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "custom-box-footer",
        staticStyle: { "margin-top": "100px" }
      },
      [
        _c("h3", { staticClass: "text-center text-uppercase" }, [
          _vm._v("To Pay")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td"),
        _vm._v(" "),
        _c("td", [_vm._v("O.Qty")]),
        _vm._v(" "),
        _c("td", [_vm._v("P.Qty")]),
        _vm._v(" "),
        _c("td", [_vm._v("Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Create")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Admin")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Create")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/admin/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3d8603f7& */ "./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3d8603f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Index.vue?vue&type=template&id=3d8603f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d8603f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);