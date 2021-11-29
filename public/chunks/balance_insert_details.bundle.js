(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance_insert_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getBalanceInsertDetails();
  },
  data: function data() {
    return {
      balance: "",
      loading: true,
      basePath: this.$store.getters.image_base_link
    };
  },
  methods: {
    getBalanceInsertDetails: function getBalanceInsertDetails() {
      var _this = this;

      axios.get("/api/balance/insert/admin/details/" + this.$route.params.id).then(function (resp) {
        console.log(resp);
        _this.balance = resp.data.balance;
        _this.loading = false;
      });
    },
    //today total credit balance counter
    todayTotal: function todayTotal() {
      var amount = 0;
      this.balance.today.forEach(function (item) {
        amount += parseInt(item.amount);
      });
      return amount;
    },
    //today total credit balance counter
    inTotal: function inTotal() {
      var amount = 0;
      this.balance.all.forEach(function (item) {
        amount += parseInt(item.amount);
      });
      return amount;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-box[data-v-72ea300c] {\n  background: #fff;\n  padding: 13px;\n  min-height: 220px;\n  box-shadow: 3px 3px 3px #ddd;\n  border-radius: 6px;\n  margin-bottom: 10px;\n}\n.custom-box-body strong[data-v-72ea300c] {\n  position: absolute;\n  right: 10%;\n  color: blue;\n}\n.custom-box-footer[data-v-72ea300c] {\n  background: #00a65a;\n  color: #fff;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "balance_insert_admin" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-10 col-md-10" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _vm.loading
                      ? _c("h1")
                      : _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-lg-6" }, [
                            _c("div", { staticClass: "custom-box" }, [
                              _c(
                                "div",
                                { staticClass: "custom-box-body" },
                                _vm._l(_vm.balance.today, function(
                                  item,
                                  c_index
                                ) {
                                  return _c("h4", { key: c_index }, [
                                    _vm._v(
                                      "\n                        In " +
                                        _vm._s(item.balance.name) +
                                        " : "
                                    ),
                                    _c("strong", [_vm._v(_vm._s(item.amount))])
                                  ])
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "custom-box-footer" }, [
                                _c("h3", { staticClass: "text-uppercase" }, [
                                  _vm._v("Today Total  "),
                                  _c(
                                    "strong",
                                    {
                                      staticStyle: {
                                        float: "right",
                                        "padding-right": "20px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.todayTotal()) + " ")]
                                  )
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-6" }, [
                            _c("div", { staticClass: "custom-box" }, [
                              _c(
                                "div",
                                { staticClass: "custom-box-body" },
                                _vm._l(_vm.balance.all, function(
                                  item,
                                  c_index
                                ) {
                                  return _c("h4", { key: c_index }, [
                                    _vm._v(
                                      "\n                              In " +
                                        _vm._s(item.balance.name) +
                                        " : "
                                    ),
                                    _c("strong", [_vm._v(_vm._s(item.amount))])
                                  ])
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "custom-box-footer" }, [
                                _c("h3", { staticClass: "text-uppercase" }, [
                                  _vm._v("In Total "),
                                  _c(
                                    "strong",
                                    {
                                      staticStyle: {
                                        float: "right",
                                        "padding-right": "20px"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.inTotal()) + " ")]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
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
      _c("li", { staticClass: "active" }, [_vm._v("balance ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title heading" }, [
        _vm._v("Balance Insert History")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true& */ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true&");
/* harmony import */ var _BalanceInsertAdminDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalanceInsertAdminDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& */ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BalanceInsertAdminDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72ea300c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/balance/BalanceInsertAdminDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceInsertAdminDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=style&index=0&id=72ea300c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_style_index_0_id_72ea300c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/balance/BalanceInsertAdminDetails.vue?vue&type=template&id=72ea300c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceInsertAdminDetails_vue_vue_type_template_id_72ea300c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);