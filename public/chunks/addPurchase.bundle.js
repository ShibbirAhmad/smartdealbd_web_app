(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPurchase"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Add",
  created: function created() {
    this.pDate();
    this.supplierList();
    this.balanceList();
  },
  data: function data() {
    return {
      purchase_date: "",
      error: "",
      loading: true,
      status: 1,
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      },
      supplier_id: "",
      productItems: [],
      automcomplete: false,
      search: "",
      suppliers: "",
      invoice_no: "",
      validationPreview: true,
      submitValidation: true,
      products: [],
      preview_products: {
        product_name: "",
        product_id: "",
        product_code: "",
        price: "",
        quantity: "",
        total: "",
        alert_quantity: ""
      },
      AmountTotal: 0,
      paid: 0,
      due: 0,
      purchase_type: 1,
      paid_by: "select one",
      balance: "",
      memo: ""
    };
  },
  methods: {
    balanceList: function balanceList() {
      var _this = this;

      axios.get("/api/balance/list").then(function (resp) {
        _this.balance = resp.data.balance;
      });
    },
    add: function add() {
      var _this2 = this;

      if (typeof this.form.paid_by == 'string') {
        alert('selecet any balance');
        return;
      }

      this.$Progress.start();
      axios.post("/add/purchase", {
        purchase_date: this.purchase_date,
        supplier_id: this.supplier_id,
        total: this.AmountTotal,
        paid: this.paid,
        invoice_no: this.invoice_no,
        products: this.products,
        status: this.status,
        paid_by: this.paid_by,
        memo: this.memo
      }).then(function (resp) {
        _this2.$Progress.finish();

        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          console.log(resp);

          _this2.$router.push({
            name: "purchase"
          });

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });
        } else {
          _this2.error = "dont saved data. please try again";
        }
      })["catch"](function (error) {
        _this2.$Progress.finish();

        console.log(error);
        _this2.error = "some thing want to wrong";
      });
    },
    supplierList: function supplierList() {
      var _this3 = this;

      axios.get("/others", {
        params: {
          type: 1
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this3.suppliers = resp.data.suppliers;
          _this3.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    autocompleteSearh: function autocompleteSearh() {
      var _this4 = this;

      var length = this.search.length;
      this.validation();

      if (length > 3) {
        axios.get("/search/product/" + this.search).then(function (resp) {
          if (resp.data.status == "SUCCESS") {
            var x = resp.data.products.data.length;
            var i = 0;

            if (x >= 1) {
              _this4.productItems = [];

              for (i; i < x; i++) {
                _this4.productItems.push(resp.data.products.data[i]);
              }
            } else {
              var no_found = {
                name: "No product found",
                product_code: "404"
              };
              _this4.productItems = [];

              _this4.productItems.push(no_found);
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
        this.automcomplete = true;
      } else {
        this.automcomplete = false;
      }
    },
    selectedProduct: function selectedProduct(productItem) {
      if (productItem.name == "No product found") {
        alert("please enter product valid code or name");
        this.validation();
        return;
      } else {
        this.automcomplete = false;
        this.preview_products.product_name = productItem.name;
        this.preview_products.product_id = productItem.id;
        this.preview_products.product_code = productItem.product_code;
        this.search = productItem.product_code + "-" + productItem.name;
        this.validation();
      }
    },
    total: function total() {
      if (this.preview_products.price.length <= 0) {
        this.$toasted.show("sorry! price filed fille up first", {
          type: "error",
          position: "top-center",
          duration: 5000
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

        var total = price * quantity;
        this.preview_products.total = total;
        this.validation();
      }
    },
    productAdd: function productAdd() {
      this.products.push(this.preview_products);
      this.preview_products = {
        product_id: "",
        product_code: "",
        product_name: "",
        price: "",
        total: "",
        quantity: "",
        alert_quantity: ""
      };
      this.search = "";
      this.totalAmount();
      this.amountDue();
      this.validation();
    },
    validation: function validation() {
      //console.log(this.preview_products.price)
      if (this.preview_products.price.length > 0 && this.preview_products.quantity.length > 0 && this.invoice_no.length > 0 && this.preview_products.product_id && this.search.length > 0 && this.supplier_id) {
        this.validationPreview = false;
      } else {
        this.validationPreview = true; // this.submitValidation=true;
      }

      if (this.products.length > 0 && this.invoice_no.length > 0 && this.supplier_id) {
        this.submitValidation = false;
      } else {
        this.submitValidation = true;
      } // this.submitValidation();

    },
    totalAmount: function totalAmount() {
      var i = 0;
      var total = 0;
      var products = this.products;

      for (i; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
      }

      this.AmountTotal = total;
      this.due = total;
    },
    amountDue: function amountDue() {
      var paid = this.paid;
      var total = this.AmountTotal;
      var due = total - paid;
      this.due = due;
    },
    cancel: function cancel(index) {
      this.products.splice(index, 1);
      this.totalAmount();
      this.amountDue();
      this.validation();
    },
    pDate: function pDate() {
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var output = d.getFullYear() + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + (("" + day).length < 2 ? "0" : "") + day;
      this.purchase_date = output;
    },
    uploadImage: function uploadImage(e) {
      var _this5 = this;

      var file = e.target.files[0];

      if (!file.type.match("image.*")) {
        Swal.fire({
          type: 'warning',
          text: 'this is not any kind of image'
        });
        this.memo = "";
        this.validation();
        return;
      }

      var reader = new FileReader();

      reader.onload = function (e) {
        _this5.memo = e.target.result;

        _this5.validation();
      };

      reader.readAsDataURL(file);
    }
  },
  computed: {},
  components: {
    datePicker: vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  watch: {
    purchase_type: function purchase_type(value) {
      var _this6 = this;

      if (value == 2) {
        Swal.fire({
          title: "Enter CM Rate 1/pieces",
          input: "text"
        }).then(function (result) {
          if (result.value) {
            var quantity = 0;
            console.log(_this6.products);
            console.log(_this6.products.length);

            if (_this6.products.length > 0) {
              _this6.products.forEach(function (element) {
                quantity += parseInt(element.quantity); //console.log(element.quantity)
              });
            }

            _this6.AmountTotal = parseInt(quantity) * parseInt(result.value);
            _this6.due = parseInt(quantity) * parseInt(result.value) - parseInt(_this6.paid);
          }
        });
      }
    }
  }
}); //Date picker

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-0f5aad3e] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-0f5aad3e] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-0f5aad3e]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "purchase" } }
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
            _c("div", { staticClass: "col-lg-10 col-lg-offset-1" }, [
              _c("div", { staticClass: "box box-primary" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "box-body" }, [
                  _vm.loading
                    ? _c("h1", [
                        _c("i", { staticClass: "fa fa-spin fa-spinner" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.error
                    ? _c("div", { staticClass: "alert-danger alert" }, [
                        _vm._v(_vm._s(_vm.error))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Purchase_date")]),
                          _vm._v(" "),
                          _c("date-picker", {
                            attrs: { autocomplete: "off", config: _vm.options },
                            model: {
                              value: _vm.purchase_date,
                              callback: function($$v) {
                                _vm.purchase_date = $$v
                              },
                              expression: "purchase_date"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Invoice_no")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.invoice_no,
                              expression: "invoice_no"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "invoice", autofocus: "" },
                          domProps: { value: _vm.invoice_no },
                          on: {
                            keyup: _vm.validation,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.invoice_no = $event.target.value
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Supplier")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.supplier_id,
                                expression: "supplier_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "supplier" },
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
                                  _vm.supplier_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.validation
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Supplier")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.suppliers, function(supplier) {
                              return _c(
                                "option",
                                {
                                  key: supplier.id,
                                  domProps: { value: supplier.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(supplier.company_name) +
                                      "\n                      "
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
                    _c("div", { staticClass: "col-lg-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Document/Memo")]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", name: "document" },
                          on: { change: _vm.uploadImage }
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
                              maxlength: "4",
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
                          _c("label", [_vm._v("Purchase_price")]),
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
                              placeholder: "quantity"
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
                  _vm.products.length > 0
                    ? _c("div", { staticClass: "product_preview" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm._l(_vm.products.slice().reverse(), function(
                                product,
                                index
                              ) {
                                return _c("tr", [
                                  _c("td", [_vm._v(_vm._s(index + 1))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        product.product_code +
                                          "-" +
                                          product.product_name
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(product.price))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(product.quantity))]),
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
                              }),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("purchase_type")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.purchase_type,
                                          expression: "purchase_type"
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
                                          _vm.purchase_type = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "1" } }, [
                                        _vm._v("FOB")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "2" } }, [
                                        _vm._v("CM")
                                      ])
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Amount")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(this.AmountTotal))])
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
                                        value: _vm.paid,
                                        expression: "paid"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { placeholder: "Paid" },
                                    domProps: { value: _vm.paid },
                                    on: {
                                      keyup: _vm.amountDue,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.paid = $event.target.value
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "3" } }),
                                _vm._v(" "),
                                _c("td", [_vm._v("Paid By")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.paid_by,
                                          expression: "paid_by"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { name: "debit_from", id: "" },
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
                                          _vm.paid_by = $event.target.multiple
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
                                _c("td", [_vm._v(_vm._s(_vm.due))])
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
      _c("li", { staticClass: "active" }, [_vm._v("Purchase")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Add Purchase")])
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

/***/ "./resources/js/components/admin/purchase/Add.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/purchase/Add.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=0f5aad3e&scoped=true& */ "./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& */ "./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f5aad3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/purchase/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=style&index=0&id=0f5aad3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0f5aad3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=0f5aad3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/purchase/Add.vue?vue&type=template&id=0f5aad3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0f5aad3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);