(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addSale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-bootstrap-datetimepicker */ "./node_modules/vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.js");
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.balanceList();
  },
  data: function data() {
    return {
      //form submit data
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        type: 1,
        name: "",
        mobile_no: "",
        address: "",
        //multiple product data
        products: [],
        // culation data
        AmountTotal: 0,
        paid: 0,
        due: 0,
        discount: 0,
        company_id: "",
        paid_by: 'select one',
        invoice_no: ""
      }),
      companies: "",
      balance: "",
      error: "",
      //store product item from to get db when user type product code or product name
      productItems: [],
      //auto complete
      automcomplete: false,
      search: "",
      //for check product reltaed property validation
      validationPreview: true,
      submitValidation: true,
      //first store product as obejct, when user select a sepecific product from auto complete serach box
      //and this object pust form.product arraw
      preview_products: {
        product_name: "",
        product_id: "",
        product_code: "",
        price: "",
        quantity: "",
        total: "",
        alert_quantity: "",
        stock: ''
      }
    };
  },
  methods: {
    balanceList: function balanceList() {
      var _this = this;

      axios.get("/api/balance/list").then(function (resp) {
        _this.balance = resp.data.balance;
      });
    },
    //method initial for add sale
    add: function add() {
      var _this2 = this;

      if (typeof this.form.paid_by == 'string') {
        alert('selecet any balance');
        return;
      }

      this.$Progress.start();
      this.form.post("/sale/store").then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this2.$Progress.finish();

          _this2.$router.push({
            name: "officeSale"
          });

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });
        } else {
          _this2.error = "dont saved data. please try again";
        }
      });
    },
    //method initial for get product data when admin type product code or name
    autocompleteSearh: function autocompleteSearh() {
      var _this3 = this;

      var length = this.search.length;
      this.validation();

      if (length >= 4) {
        axios.get("/search/single/product/" + this.search).then(function (resp) {
          console.log(resp);

          if (resp.data.product) {
            var product = resp.data.product;

            if (product.stock > 0) {
              _this3.preview_products.product_name = product.name;
              _this3.preview_products.product_id = product.id;
              _this3.preview_products.product_code = product.product_code;
              _this3.preview_products.stock = product.stock;
              _this3.preview_products.price = product.price;
              _this3.preview_products.quantity = 1;
              _this3.preview_products.total = parseInt(product.price) * parseInt(1);
              document.getElementById('product_quanitty').focus();
              _this3.search = product.product_code + "-" + product.name;
              _this3.validationPreview = false;
            } else {
              _this3.$toasted.show("".concat(product.name, "-").concat(product.product_code, "-Stock Out"), {
                type: "error",
                position: "top-center",
                duration: 4000
              });
            }
          } else {
            _this3.$toasted.show("".concat(_this3.search, "-Not Found"), {
              type: "error",
              position: "top-center",
              duration: 4000
            });
          } // if (resp.data.status == "SUCCESS") {
          //   let x = resp.data.products.data.length;
          //   let i = 0;
          //   if (x >= 1) {
          //     this.productItems = [];
          //     for (i; i < x; i++) {
          //       this.productItems.push(resp.data.products.data[i]);
          //     }
          //   } else {
          //     let no_found = {
          //       name: "No product found",
          //       product_code: "404",
          //     };
          //     this.productItems = [];
          //     this.productItems.push(no_found);
          //   }
          // }

        })["catch"](function (error) {
          console.log(error);
        });
        this.automcomplete = true;
      } else {
        this.automcomplete = false;
      }
    },
    //method initial for set product item when admin select specific product item
    selectedProduct: function selectedProduct(productItem) {
      if (productItem.name == "No product found") {
        alert("please enter product valid code or name");
        this.validation();
        return;
      } else if (productItem.stock <= 0) {
        alert('This Product All ready stock out');
      } else {
        this.automcomplete = false;
        this.preview_products.product_name = productItem.name;
        this.preview_products.product_id = productItem.id;
        this.preview_products.product_code = productItem.product_code;
        this.preview_products.stock = productItem.stock;
        this.search = productItem.product_code + "-" + productItem.name;
        this.validation();
      }
    },
    //method initial for calulate sub total  amount, prodict price*quantity
    total: function total() {
      console.log(this.preview_products.quantity);

      if (parseInt(this.preview_products.quantity) > parseInt(this.preview_products.stock)) {
        this.$toasted.show("product max quantity ".concat(this.preview_products.stock), {
          type: "error",
          position: "top-center",
          duration: 3000
        });
        this.preview_products.quantity = this.preview_products.stock; // this.$refs.quantity.focus();
      }

      if (this.preview_products.price.length <= 0) {
        this.$toasted.show("sorry! price filed fille up first", {
          type: "error",
          position: "top-center",
          duration: 3000
        });
        this.$refs.price.focus();
        this.validation();
        return;
      } else {
        var price = this.preview_products.price;
        var quantity = this.preview_products.quantity;

        if (quantity <= 1) {
          quantity = 1;
        }

        var total = parseInt(price) * parseInt(quantity);
        this.preview_products.total = parseInt(total);
        this.validation();
      }
    },
    //method initial for product add on form.prodcut arraw
    productAdd: function productAdd() {
      this.form.products.push(this.preview_products);
      this.preview_products = {
        product_id: "",
        product_code: "",
        product_name: "",
        price: "",
        total: "",
        quantity: "",
        alert_quantity: "",
        stock: ''
      };
      this.search = "";
      this.totalAmount();
      this.amountDue();
      this.validation();
      this.finalValidation();
    },
    //method initial for validation product data
    validation: function validation() {
      //console.log(this.preview_products.price)
      if (this.preview_products.price.length > 0 && this.preview_products.quantity.length > 0 && this.preview_products.product_id && this.search.length > 0 && parseInt(this.preview_products.quantity) <= parseInt(this.preview_products.stock)) {
        this.validationPreview = false;
        return;
      } else {
        this.validationPreview = true;
        return; // this.submitValidation=true;
      }
    },
    finalValidation: function finalValidation() {
      if (this.form.products.length <= 0) {
        this.submitValidation = true;
        return;
      }

      if (this.form.name.length <= 0) {
        this.submitValidation = true;
        return;
      }

      if (this.form.mobile_no.length != 11) {
        this.submitValidation = true;
        return;
      }

      if (this.form.address.length <= 0) {
        this.submitValidation = true;
        return;
      }

      this.submitValidation = false;
    },
    totalAmount: function totalAmount() {
      var i = 0;
      var total = 0;
      var products = this.form.products;

      for (i; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
      }

      this.form.AmountTotal = total;
      this.form.due = total;
    },
    amountDue: function amountDue() {
      var paid = this.form.paid;
      var total = this.form.AmountTotal;
      var due = parseInt(total) - parseInt(paid) - parseInt(this.form.discount);
      this.form.due = due;
    },
    cancel: function cancel(index) {
      this.form.products.splice(index, 1);
      this.totalAmount();
      this.amountDue();
      this.validation();
      this.finalValidation();
    },
    pDate: function pDate() {
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var output = d.getFullYear() + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + (("" + day).length < 2 ? "0" : "") + day;
      this.purchase_date = output;
    },
    //method initial search customer
    searchCustomer: function searchCustomer() {
      var _this4 = this;

      // console.log('serach')
      if (this.form.mobile_no.length == 11) {
        axios.get("/search/office/sale/customer/" + this.form.mobile_no).then(function (resp) {
          console.log(resp); //when com data from t resp

          if (resp.data.customer) {
            _this4.form.name = resp.data.customer.name, _this4.form.address = resp.data.customer.address;

            _this4.$toasted.show('Registered customer', {
              type: "info",
              position: "top-center",
              duration: 3000
            });
          } else {
            _this4.$toasted.show('New Customer', {
              type: "info",
              position: "top-center",
              duration: 3000
            });
          }

          _this4.finalValidation();
        })["catch"](function (error) {//console.log(error);
        });
      }
    }
  },
  components: {
    datePicker: vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2___default.a
  }
}); //Date picker

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-127d9404] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-127d9404] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-127d9404]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "officeSale" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-right" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "box box-primary" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "box-body" }, [
                  _vm.error
                    ? _c("div", { staticClass: "alert-danger alert" }, [
                        _vm._v(_vm._s(_vm.error))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _vm.form.type == 1
                      ? _c("div", [
                          _c("div", { staticClass: "col-lg-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v("Mobile_no\n\n                      ")
                              ]),
                              _vm._v(" "),
                              _c("small", { staticStyle: { float: "right" } }, [
                                _vm._v(
                                  _vm._s(_vm.form.mobile_no.length) + "/11"
                                )
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.mobile_no,
                                    expression: "form.mobile_no"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "017xx-xxxxxx",
                                  autocomplete: "off",
                                  type: "text",
                                  maxlength: "11",
                                  autofocus: ""
                                },
                                domProps: { value: _vm.form.mobile_no },
                                on: {
                                  keyup: _vm.searchCustomer,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "mobile_no",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.name,
                                    expression: "form.name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "Name" },
                                domProps: { value: _vm.form.name },
                                on: {
                                  keyup: _vm.finalValidation,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Address")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.address,
                                    expression: "form.address"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { placeholder: "address" },
                                domProps: { value: _vm.form.address },
                                on: {
                                  keyup: _vm.finalValidation,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "address",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ])
                      : _c("div", [
                          _c("div", { staticClass: "col-lg-5" }, [
                            _c("label", [_vm._v("Company")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.company_id,
                                    expression: "form.company_id"
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
                                      _vm.$set(
                                        _vm.form,
                                        "company_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    _vm.finalValidation
                                  ]
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
                                      "\n                        Select Company\n                      "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.companies, function(company) {
                                  return _c(
                                    "option",
                                    {
                                      key: company.id,
                                      domProps: { value: company.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(company.name) +
                                          "\n                      "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-5" }, [
                            _c("label", [_vm._v("Invvoice_no")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.invoice_no,
                                  expression: "form.invoice_no"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.invoice_no },
                              on: {
                                keydown: _vm.finalValidation,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "invoice_no",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product_information" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Product_code")]),
                          _vm._v(" "),
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
                              autocomplete: "off",
                              name: "product",
                              placeholder: "type product code"
                            },
                            domProps: { value: _vm.search },
                            on: {
                              keyup: _vm.autocompleteSearh,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.search = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.automcomplete,
                                  expression: "automcomplete"
                                }
                              ],
                              staticClass: "autocomplete"
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "list-group" },
                                _vm._l(_vm.productItems, function(productItem) {
                                  return _c(
                                    "li",
                                    {
                                      key: productItem.id,
                                      staticClass: "list-group-item",
                                      on: {
                                        click: function($event) {
                                          return _vm.selectedProduct(
                                            productItem
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            productItem.product_code +
                                              "-" +
                                              productItem.name
                                          ) +
                                          "\n                          "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.preview_products.price,
                                expression: "preview_products.price"
                              }
                            ],
                            ref: "price",
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "price",
                              autocomplete: "off",
                              placeholder: "price"
                            },
                            domProps: { value: _vm.preview_products.price },
                            on: {
                              keyup: _vm.total,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.preview_products,
                                  "price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Quantity")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.preview_products.quantity,
                                expression: "preview_products.quantity"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "quantity",
                              autocomplete: "off",
                              placeholder:
                                "max quantity:" +
                                _vm.preview_products.stock +
                                " pcs",
                              id: "product_quanitty"
                            },
                            domProps: { value: _vm.preview_products.quantity },
                            on: {
                              keyup: _vm.total,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.preview_products,
                                  "quantity",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Total")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.preview_products.total,
                                expression: "preview_products.total"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "total",
                              autocomplete: "off",
                              placeholder: "total",
                              readonly: ""
                            },
                            domProps: { value: _vm.preview_products.total },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.preview_products,
                                  "total",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            staticStyle: { "margin-top": "25px" },
                            attrs: { disabled: _vm.validationPreview },
                            on: { click: _vm.productAdd }
                          },
                          [
                            _vm._v(
                              "\n                      Add\n                    "
                            )
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.form.products.length > 0
                    ? _c("div", { staticClass: "product_preview" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(
                                _vm.form.products.slice().reverse(),
                                function(product, index) {
                                  return _c("tr", [
                                    _c("td", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            product.product_code +
                                              "-" +
                                              product.product_name
                                          ) +
                                          "\n                      "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(product.price))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(product.quantity))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(product.total))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "text-danger",
                                        on: {
                                          click: function($event) {
                                            return _vm.cancel(index)
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ])
                                }
                              ),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Amount")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(this.form.AmountTotal))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Paid")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.paid,
                                        expression: "form.paid"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { placeholder: "Paid" },
                                    domProps: { value: _vm.form.paid },
                                    on: {
                                      keyup: _vm.amountDue,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "paid",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Discount")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.discount,
                                        expression: "form.discount"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { placeholder: "Paid" },
                                    domProps: { value: _vm.form.discount },
                                    on: {
                                      keyup: _vm.amountDue,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "discount",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Paid_by")]),
                                _vm._v(" "),
                                _c("td", { staticStyle: { display: "flex" } }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.paid_by,
                                          expression: "form.paid_by"
                                        }
                                      ],
                                      staticClass: "form-control",
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
                                          _vm.$set(
                                            _vm.form,
                                            "paid_by",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "select one",
                                            disabled: ""
                                          }
                                        },
                                        [_vm._v("select one")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.balance, function(
                                        balance,
                                        index
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: index,
                                            domProps: { value: balance.id }
                                          },
                                          [
                                            _vm._v(
                                              " " + _vm._s(balance.name) + " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Amount Due")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.form.due))])
                              ])
                            ],
                            2
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { disabled: _vm.submitValidation, type: "submit" },
                      on: {
                        click: function($event) {
                          return _vm.add()
                        }
                      }
                    },
                    [_vm._v("\n                Submit\n              ")]
                  )
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
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Sale")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Add Sale")])
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
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("price")]),
        _vm._v(" "),
        _c("th", [_vm._v("quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("total")]),
        _vm._v(" "),
        _c("th", [_vm._v("X")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/sale/Add.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/sale/Add.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=127d9404&scoped=true& */ "./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& */ "./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "127d9404",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sale/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=style&index=0&id=127d9404&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_127d9404_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=127d9404&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/Add.vue?vue&type=template&id=127d9404&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_127d9404_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);