(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-image-zoomer */ "./node_modules/vue-image-zoomer/dist/vueImageZoom.js");
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  beforeCreated: function beforeCreated() {
    var _this = this;

    this.validation();
    this.$store.dispatch("general_setting");
    window.scrollTo(0, 0);
    setTimeout(function () {
      _this.validation();
    }, 200);
  },
  data: function data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.image_base_link,
      product_thumbnail_link: this.$store.state.image_thumbnail_link,
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1
      },
      related_products: [],
      page: 1,
      tab_content: 1,
      quick_v_product_id: "",
      o_modal: false,
      zoomerOptions: {
        zoomFactor: 4,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_position: "bottom" // zoomer_pane_position: "right",

      }
    };
  },
  methods: {
    displayeImageFromBox: function displayeImageFromBox(e) {
      var target_element = e.target;
      var active_images = document.getElementsByClassName("__active_border");

      if (active_images.length > 0) {
        for (var i = 0; i < active_images.length; i++) {
          active_images[i].classList.remove("__active_border");
        }
      }

      target_element.classList.add("__active_border");
      var big_image = document.getElementsByClassName("single_product_image");
      big_image[0].setAttribute("src", target_element.src);
    },
    incrementQty: function incrementQty() {
      if (this.cart.quantity > 1) {
        var qty = this.cart.quantity;
        this.cart.quantity = qty - 1;
      }
    },
    dicrementQty: function dicrementQty() {
      var qty = this.cart.quantity;
      this.cart.quantity = qty + 1;
    },
    CartToAdd: function CartToAdd() {
      var _this2 = this;

      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;

        if (this.cart.variant_id < 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-center',
            icon: 'error',
            title: 'please,select product ' + this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500
          });
          return;
        }
      }

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        //  console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this2.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "success",
            duration: 2000
          });

          _this2.$store.dispatch("getCartContent");
        } else if (resp.data.status == "error") {
          _this2.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    },
    buyNow: function buyNow() {
      var _this3 = this;

      if (this.product.product_variant.length > 0) {
        this.cart.attrribute_id = this.product.product_attribute.attribute.id;

        if (this.cart.variant_id < 1) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-center',
            icon: 'error',
            title: 'please,select product ' + this.product.product_attribute.attribute.name,
            showConfirmButton: false,
            timer: 1500
          });
          return;
        }
      }

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this3.$store.dispatch("getCartContent");

          _this3.$toasted.show(resp.data.message, {
            position: "bottom-left",
            type: "success",
            duration: 2000
          });

          _this3.$router.push({
            name: "Chekout"
          });
        } else if (resp.data.status == "error") {
          _this3.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    },
    validation: function validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }

      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint: function SelectVaraint() {
      // this.product.product_variant.length=0;
      var index = this.variant_index;
      var variant_id = this.product.product_variant[index].variant_id;
      var attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },
    getRelatedProducts: function getRelatedProducts($state) {
      var _this4 = this;

      axios.get("/_public/related/products/?page=" + this.page, {
        params: {
          product_slug: this.$route.params.slug
        }
      }).then(function (resp) {
        if (resp.data.data.length) {
          var _this4$related_produc;

          _this4.page += 1;

          (_this4$related_produc = _this4.related_products).push.apply(_this4$related_produc, _toConsumableArray(resp.data.data));

          $state.loaded();
        } else {
          $state.complete();
        }
      })["catch"](function (error) {// console.log(error);
      });
    },
    closedModal: function closedModal(close) {
      this.quick_v_product_id = "";
    }
  },
  mounted: function mounted() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");
  },
  computed: {
    product: function product() {
      return this.$store.getters.single_product;
    },
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    },
    product_images: function product_images() {
      return this.$store.getters.product_images;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    imageZoom: vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  watch: {
    product_images: function product_images(value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg.responsive-image.preview-box[data-v-6e453e8c] {\r\n  width: 350px !important;\r\n  height: 350px !important;\n}\n.product-details-tabe[data-v-6e453e8c] {\r\n  margin-top: 20px;\n}\n.btnQuick[data-v-6e453e8c]:hover{\r\n\r\n   background: #ff4d03;\n}\n.v-lazy-image[data-v-6e453e8c] {\r\n  filter: blur(1px);\r\n  transition: filter 0.5s;\n}\n.v-lazy-image-loaded[data-v-6e453e8c] {\r\n  filter: blur(0);\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
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
    { staticClass: "wrapper-wide" },
    [
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": true,
          "is-full-page": _vm.fullPage
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("frontend-header"),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("div", { attrs: { id: "container" } }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "single-product-box" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4 col-md-4 col-xs-12" }, [
                    _c(
                      "div",
                      { staticClass: "product-image-viewer" },
                      [
                        _vm.product_images.length
                          ? _c("image-zoom", {
                              attrs: {
                                regular:
                                  _vm.base_url +
                                  _vm.product_images[0].product_image,
                                "img-class": "single_product_image"
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "preview_img_box_container" },
                      _vm._l(_vm.product_images, function(image, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "__preview_image_box",
                            class: { __active_border: index == 0 }
                          },
                          [
                            _c("img", {
                              staticClass: "__preview_img",
                              attrs: {
                                src: _vm.base_url + image.product_image
                              },
                              on: { click: _vm.displayeImageFromBox }
                            })
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 col-md-4 col-xs-12" }, [
                    _c("ul", { staticClass: "list-unstyled description" }, [
                      _c("li", [
                        _c(
                          "h2",
                          { staticClass: "title", attrs: { itemprop: "name" } },
                          [_vm._v(_vm._s(_vm.product.name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "s_price_container" }, [
                          _c("h4", [_vm._v(" মূল্যঃ  ")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm.product.discount
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "price-old price_in_small",
                                    staticStyle: { "font-size": "18px" }
                                  },
                                  [_vm._v("৳" + _vm._s(_vm.product.sale_price))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "price-new price_in_small" },
                              [_vm._v("৳" + _vm._s(_vm.product.price))]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h4", { staticClass: "p_code" }, [
                          _c("b", [
                            _vm._v(
                              " প্রোডাক্ট কোডঃ " +
                                _vm._s(_vm.product.product_code) +
                                " "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "product" } }, [
                      _c("div", { staticClass: "row" }, [
                        _vm.product.product_variant.length > 0 &&
                        _vm.product.product_attribute
                          ? _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-xs-12" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ps-product__variations" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "pr_switch_wrap" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "product-attributes" },
                                          [
                                            _vm.product.product_attribute.attribute.name.toLowerCase() ==
                                            "size"
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color",
                                                    attrs: {
                                                      "data-type": "text"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "attribute-name"
                                                      },
                                                      [_vm._v("Size")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "attribute-values"
                                                      },
                                                      [
                                                        _c(
                                                          "ul",
                                                          {
                                                            staticClass:
                                                              "text-swatch attribute-swatch color-swatch"
                                                          },
                                                          _vm._l(
                                                            _vm.product
                                                              .product_variant,
                                                            function(
                                                              variant,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "li",
                                                                {
                                                                  key: index,
                                                                  staticClass:
                                                                    "attribute-swatch-item pe-none"
                                                                },
                                                                [
                                                                  _c("div", [
                                                                    _c(
                                                                      "label",
                                                                      [
                                                                        _c(
                                                                          "input",
                                                                          {
                                                                            directives: [
                                                                              {
                                                                                name:
                                                                                  "model",
                                                                                rawName:
                                                                                  "v-model",
                                                                                value:
                                                                                  _vm
                                                                                    .cart
                                                                                    .variant_id,
                                                                                expression:
                                                                                  "cart.variant_id"
                                                                              }
                                                                            ],
                                                                            staticClass:
                                                                              "product-filter-item variant_size",
                                                                            attrs: {
                                                                              type:
                                                                                "radio",
                                                                              name:
                                                                                "size"
                                                                            },
                                                                            domProps: {
                                                                              value:
                                                                                variant
                                                                                  .variant
                                                                                  .id,
                                                                              checked: _vm._q(
                                                                                _vm
                                                                                  .cart
                                                                                  .variant_id,
                                                                                variant
                                                                                  .variant
                                                                                  .id
                                                                              )
                                                                            },
                                                                            on: {
                                                                              change: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.$set(
                                                                                  _vm.cart,
                                                                                  "variant_id",
                                                                                  variant
                                                                                    .variant
                                                                                    .id
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                variant
                                                                                  .variant
                                                                                  .name
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12 col-md-12 col-xs-12" },
                          [
                            _c("div", { staticClass: "qty_container" }, [
                              _vm._m(0),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "incrementor_plus",
                                  on: { click: _vm.dicrementQty }
                                },
                                [_c("i", { staticClass: "fa fa-plus" })]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cart.quantity,
                                    expression: "cart.quantity"
                                  }
                                ],
                                staticClass: "form-control input_qty",
                                staticStyle: {
                                  height: "36px !important",
                                  width: "210px"
                                },
                                attrs: {
                                  type: "text",
                                  name: "quantity",
                                  value: "1"
                                },
                                domProps: { value: _vm.cart.quantity },
                                on: {
                                  change: _vm.validation,
                                  keyup: _vm.validation,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.cart,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "incrementor_minus",
                                  on: { click: _vm.incrementQty }
                                },
                                [_c("i", { staticClass: "fa fa-minus" })]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-5 col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn  btn-lg btn-block btn_buy_cart",
                              staticStyle: {
                                background: "green",
                                color: "#fff"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.buyNow($event)
                                }
                              }
                            },
                            [_vm._v("অর্ডার করুন")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-5 col-md-5" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-primary btn-lg btn-block btn_buy_cart",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.CartToAdd($event)
                                }
                              }
                            },
                            [_c("span", [_vm._v("Add To Cart")])]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 col-md-4 col-xs-12" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "call_now_container" }, [
                      _c("p", [
                        _vm._v(
                          "  Have question about this product ? please call"
                        )
                      ]),
                      _vm._v(" "),
                      _c("h2", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href:
                                "tel:" +
                                _vm.general_setting.header_contact_number
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-phone " }),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.general_setting.header_contact_number
                                )
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-details-tabe" }, [
                _c("ul", { staticClass: "details-tab-menu-list" }, [
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 1 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 1
                        }
                      }
                    },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 2 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 2
                        }
                      }
                    },
                    [_vm._v("How To Buy")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 3 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 3
                        }
                      }
                    },
                    [_vm._v("Return Policy")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-tab-content" }, [
                  _c("div", {
                    staticClass: "product-details",
                    class: { block: _vm.tab_content == 1 },
                    domProps: { innerHTML: _vm._s(_vm.product.details) }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "how-to-buy",
                      class: { block: _vm.tab_content == 2 }
                    },
                    [_vm._m(4)]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "how-to-buy",
                      class: { block: _vm.tab_content == 3 }
                    },
                    [_vm._m(5)]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row realted-producs" },
                [
                  _c("h3", { staticClass: "title" }, [
                    _vm._v("Related Products")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.related_products, function(product, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass:
                          "col-lg-2 col-md-2 col-xs-6 custom_width small_width"
                      },
                      [
                        _c("div", { staticClass: "product-card " }, [
                          _c(
                            "div",
                            { staticClass: "product-card-body" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "single",
                                      params: { slug: product.slug }
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.product_thumbnail_link +
                                        product.thumbnail_img,
                                      alt: product.name
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "product-detail small-detail" },
                                [
                                  _c(
                                    "h4",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "product-link",
                                          attrs: {
                                            to: {
                                              name: "single",
                                              params: { slug: product.slug }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              product.name.substring(0, 20)
                                            ) + "\n                       "
                                          ),
                                          product.name.length > 20
                                            ? _c("span", [_vm._v("...")])
                                            : _vm._e()
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "price" }, [
                                    _c("span", { staticClass: "price-new" }, [
                                      _vm._v("৳" + _vm._s(product.price))
                                    ]),
                                    _vm._v(" "),
                                    product.discount
                                      ? _c(
                                          "span",
                                          { staticClass: "price-old" },
                                          [
                                            _vm._v(
                                              "৳" + _vm._s(product.sale_price)
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "product-card-footer" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary btnQuick",
                                  staticStyle: { cursor: "pointer" },
                                  attrs: {
                                    to: {
                                      name: "single",
                                      params: { slug: product.slug }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                    অর্ডার করুন\n                  "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "infinite-loading",
                    { on: { infinite: _vm.getRelatedProducts } },
                    [_c("div", { attrs: { slot: "no-more" }, slot: "no-more" })]
                  )
                ],
                2
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("frontend-footer"),
      _vm._v(" "),
      _vm.quick_v_product_id
        ? _c("quick-view", {
            attrs: { quick_v_p_id: _vm.quick_v_product_id },
            on: {
              clicked: function($event) {
                return _vm.closedModal($event)
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [_c("b", [_vm._v("Quantity")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "order_now_container" }, [
      _c("p", [
        _c("i", { staticClass: "fa fa-check" }),
        _vm._v("  Order today and receive it within 02 - 05 days")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _c("a", { attrs: { href: "tel:01945004004" } }, [
        _c("i", { staticClass: "fa fa-phone " }),
        _vm._v(" 01945004004 ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _c("a", { attrs: { href: "tel:01818357735" } }, [
        _c("i", { staticClass: "fa fa-phone " }),
        _vm._v(" 01818357735 ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Select number of product you want to buy.")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Click "),
        _c("strong", [_vm._v("Add To Cart")]),
        _vm._v(" Button")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [_vm._v("Then go to checkout page")]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "If you are a new user, please click on Sign Up.provide us uour valid inormation information."
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Complete your checkout, we received your order, and for order confirmation or customer service contact with you"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "If your product is damaged, defective, incorrect or incomplete at the time of delivery, please file a return request on call to customer care support number within 3 days of the delivery date"
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Change of mind is not applicable as a Return Reason for this product"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e453e8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);