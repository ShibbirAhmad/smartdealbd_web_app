(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investor_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getinvests();
  },
  data: function data() {
    return {
      invest: "",
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      investMode: true,
      receiveMode: false,
      paymentMode: false,
      invests: "",
      invest_profit_paid: "",
      investment_return: "",
      total_return: "",
      investor_id: ""
    };
  },
  methods: {
    i_mode: function i_mode() {
      this.investMode = true;
      this.receiveMode = false;
      this.paymentMode = false;
    },
    r_mode: function r_mode() {
      this.receiveMode = true;
      this.paymentMode = false;
      this.investMode = false;
    },
    p_mode: function p_mode() {
      this.paymentMode = true;
      this.investMode = false;
      this.receiveMode = false;
    },
    getinvests: function getinvests() {
      var _this = this;

      axios.get("/api/company/investor/details/" + this.$route.params.id).then(function (resp) {
        console.log(resp);
        _this.invests = resp.data.invests;
        _this.invest_profit_paid = resp.data.invest_profit_paid;
        _this.investment_return = resp.data.investment_return;
        _this.total_return = resp.data.total_return;
        _this.investor_id = _this.$route.params.id;
        _this.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    totalinvestAmount: function totalinvestAmount() {
      var total = 0;

      if (this.invests.length > 0) {
        this.invests.forEach(function (element) {
          total += parseInt(element.amount);
        });
      }

      return total - parseInt(this.total_return);
    },
    totalPaidAmount: function totalPaidAmount() {
      var total = 0;

      if (this.invest_profit_paid.length > 0) {
        this.invest_profit_paid.forEach(function (element) {
          total += parseInt(element.amount);
        });
      }

      return total;
    },
    addMore: function addMore() {
      var _this2 = this;

      var amount = prompt("Enter Amount: ");

      if (parseInt(amount) > 0) {
        var purpose = prompt("Enter purpose: ");
        axios.get("/api/add/more/invest/" + this.$route.params.id, {
          params: {
            amount: amount,
            purpose: purpose
          }
        }).then(function (resp) {
          console.log(resp);

          if (resp.data.success == "OK") {
            alert("invest added successfully");

            _this2.getinvests();
          } else {
            alert("Error Found");
          }
        })["catch"](function (e) {
          console.log(e);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.col-lg-3.__c_box {\r\n  padding: 10px;\r\n  background: #fff;\r\n  width: 250px;\r\n  height: 85px;\r\n  margin-right: 15px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 3px #ddd;\n}\n.box-title {\r\n  padding: 5px 6px;\r\n  cursor: pointer;\n}\n.bb {\r\n  border-bottom: 2px solid #000;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvestorDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59& ***!
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
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c("h1", [
            _c(
              "a",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addMore($event)
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-plus" })]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-1" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 __c_box" }, [
                _c("h4", [
                  _vm._v(
                    "\n              Total Invested Amount:\n\n              " +
                      _vm._s(_vm.totalinvestAmount()) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 __c_box" }, [
                _c("h4", [
                  _vm._v(
                    "\n              Total Profit Paid Amount:\n\n              " +
                      _vm._s(_vm.totalPaidAmount()) +
                      "\n            "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-8 col-lg-offset-1" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "box-title",
                            class: { bb: _vm.investMode },
                            on: { click: _vm.i_mode }
                          },
                          [
                            _vm._v(
                              "\n                      Invest History\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-success",
                            attrs: {
                              href:
                                "/api/invest/history/download/pdf/" +
                                _vm.investor_id,
                              target: "_blank"
                            }
                          },
                          [_c("i", { staticClass: "fa fa-download" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "box-title",
                            on: { click: _vm.r_mode }
                          },
                          [
                            _vm._v(
                              "\n                      Profit Paid History\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-success",
                            attrs: {
                              href:
                                "/api/investor/paid/history/download/pdf/" +
                                _vm.investor_id,
                              target: "_blank"
                            }
                          },
                          [_c("i", { staticClass: "fa fa-download" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "box-title",
                            on: { click: _vm.p_mode }
                          },
                          [_vm._v(" Return History\n                    ")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _vm.investMode
                      ? _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm.loading
                                ? _c("h1", { staticClass: "text-center" }, [
                                    _c("i", {
                                      staticClass: "fa fa-spin fa-spinner"
                                    })
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.invests, function(items, index) {
                                return _c("tr", { key: index }, [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(items.date))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(items.purpose))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(items.amount))])
                                ])
                              }),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [
                                    _vm._v(
                                      " =" + _vm._s(_vm.totalinvestAmount())
                                    )
                                  ])
                                ])
                              ])
                            ],
                            2
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.receiveMode
                      ? _c(
                          "table",
                          { staticClass: "table text-center table-striped " },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.loading
                                  ? _c("h1", { staticClass: "text-center" }, [
                                      _c("i", {
                                        staticClass: "fa fa-spin fa-spinner"
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.invest_profit_paid, function(
                                  investpaid,
                                  index
                                ) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(investpaid.date))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(investpaid.profit_month))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(investpaid.comment))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(investpaid.paid_by))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(investpaid.amount))
                                    ])
                                  ])
                                }),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "5" } }, [
                                    _vm._v(" Total profit paid ")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("strong", [
                                      _vm._v(
                                        " =" + _vm._s(_vm.totalPaidAmount())
                                      )
                                    ])
                                  ])
                                ])
                              ],
                              2
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.paymentMode
                      ? _c(
                          "table",
                          { staticClass: "table text-center table-striped " },
                          [
                            _vm._m(3),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.loading
                                  ? _c("h1", { staticClass: "text-center" }, [
                                      _c("i", {
                                        staticClass: "fa fa-spin fa-spinner"
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.investment_return, function(
                                  item,
                                  index
                                ) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.date))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.comment))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.paid_by))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.amount))])
                                  ])
                                }),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "4" } }, [
                                    _vm._v(" Total Return Amount ")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("strong", [
                                      _vm._v(" =" + _vm._s(_vm.total_return))
                                    ])
                                  ])
                                ])
                              ],
                              2
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ])
          ])
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Investor")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Purpose")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Profit Month  ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Comment")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Paid By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Comment")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Paid By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Investment/InvestorDetails.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/admin/Investment/InvestorDetails.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvestorDetails.vue?vue&type=template&id=31f73f59& */ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59&");
/* harmony import */ var _InvestorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvestorDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvestorDetails.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvestorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Investment/InvestorDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvestorDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvestorDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvestorDetails.vue?vue&type=template&id=31f73f59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Investment/InvestorDetails.vue?vue&type=template&id=31f73f59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvestorDetails_vue_vue_type_template_id_31f73f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);