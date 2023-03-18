"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_cart_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  mounted: function mounted() {
    $(document).trigger('changed');
    this.getCartProducts();
  },
  data: function data() {
    return {
      products: [],
      name: '',
      email: '',
      address: ''
    };
  },
  computed: {
    totalPrice: function totalPrice() {
      var total = 0;
      this.products.forEach(function (product) {
        total += product.price;
      });
      return total;
    }
  },
  methods: {
    storeOrder: function storeOrder() {
      this.axios.post('/api/orders', {
        'products': this.products,
        'name': this.name,
        'email': this.email,
        'address': this.address,
        'total_price': this.totalPrice
      }).then(function (res) {
        console.log(res);
        // this.products = res.data.data
        // this.pagination = res.data.meta
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    getCartProducts: function getCartProducts() {
      this.products = JSON.parse(localStorage.getItem('cart'));
      console.log(this.products);
    },
    minusQty: function minusQty(product) {
      if (product.qty === 0) return;
      product.qty--;
      this.updateCart();
    },
    plusQty: function plusQty(product) {
      product.qty++;
      this.updateCart();
    },
    removeProduct: function removeProduct(id) {
      this.products = this.products.filter(function (product) {
        return product.id !== id;
      });
      this.updateCart();
    },
    updateCart: function updateCart() {
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-hidden"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"breadcrumb-area\" style=\"background-image:url(/assets/images/inner-pages/breadcum-bg.png);\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"breadcrumb-content text-center wow fadeInUp animated\"><h2>Cart</h2><div class=\"breadcrumb-menu\"><ul><li><a href=\"index.html\"><i class=\"flaticon-home pe-2\"></i>Home</a></li><li><i class=\"flaticon-next\"></i></li><li class=\"active\">Cart</li></ul></div></div></div></div></div></section>", 1);
var _hoisted_3 = {
  "class": "cart-area pt-120 pb-120"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row wow fadeInUp animated"
};
var _hoisted_6 = {
  "class": "col-xl-12 col-lg-12 col-md-12 col-sm-12"
};
var _hoisted_7 = {
  "class": "cart-table-box"
};
var _hoisted_8 = {
  "class": "table-outer"
};
var _hoisted_9 = {
  "class": "cart-table"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "cart-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": ""
}, "Product Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "price"
}, "Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Quantity"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Subtotal"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "hide-me"
})])], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "thumb-box"
};
var _hoisted_12 = ["src", "alt"];
var _hoisted_13 = {
  "class": "qty"
};
var _hoisted_14 = {
  "class": "qtySelector text-center"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-minus"
}, null, -1 /* HOISTED */);
var _hoisted_17 = [_hoisted_16];
var _hoisted_18 = ["value"];
var _hoisted_19 = ["onClick"];
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-plus"
}, null, -1 /* HOISTED */);
var _hoisted_21 = [_hoisted_20];
var _hoisted_22 = {
  "class": "sub-total"
};
var _hoisted_23 = ["onClick"];
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cross"
}, null, -1 /* HOISTED */);
var _hoisted_25 = [_hoisted_24];
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-xl-12\"><div class=\"cart-button-box\"><div class=\"apply-coupon wow fadeInUp animated\"><div class=\"apply-coupon-input-box mt-30\"><input type=\"text\" name=\"coupon-code\" value=\"\" placeholder=\"Coupon Code\"></div><div class=\"apply-coupon-button mt-30\"><button class=\"btn--primary style2\" type=\"submit\">Apply Coupon </button></div></div><div class=\"cart-button-box-right wow fadeInUp animated\"><button class=\"btn--primary mt-30\" type=\"submit\">Continue Shopping </button><button class=\"btn--primary mt-30\" type=\"submit\">Update Cart </button></div></div></div></div>", 1);
var _hoisted_27 = {
  "class": "row w-25"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row pt-120\"><div class=\"col-xl-6 col-lg-7 wow fadeInUp animated\"><div class=\"cart-total-box\"><div class=\"inner-title\"><h3>Cart Totals</h3></div></div></div></div><div class=\"row mt--30\"><div class=\"col-xl-6 col-lg-7 wow fadeInUp animated\"><div class=\"cart-total-box mt-30\"><div class=\"table-outer\"><table class=\"cart-table2\"><thead class=\"cart-header clearfix\"><tr><th colspan=\"1\" class=\"shipping-title\">Shipping</th><th class=\"price\">$2500.00</th></tr></thead><tbody><tr><td class=\"shipping\"> Shipping</td><td class=\"selact-box1\"><ul class=\"shop-select-option-box-1\"><li><input type=\"checkbox\" name=\"free_shipping\" id=\"option_1\" checked=\"\"> <label for=\"option_1\"><span></span>Free Shipping</label></li><li><input type=\"checkbox\" name=\"flat_rate\" id=\"option_2\"> <label for=\"option_2\"><span></span>Flat Rate</label></li><li><input type=\"checkbox\" name=\"local_pickup\" id=\"option_3\"><label for=\"option_3\"><span></span>Local Pickup</label></li></ul><div class=\"inner-text\"><p>Shipping options will be updated during checkout</p></div><h4>Calculate Shipping</h4></td></tr><tr><td><h4 class=\"total\">Total</h4></td><td class=\"subtotal\">$2500.00</td></tr></tbody></table></div></div></div><div class=\"col-xl-6 col-lg-5 wow fadeInUp animated\"><div class=\"cart-check-out mt-30\"><h3>Check Out</h3><ul class=\"cart-check-out-list\"><li><div class=\"left\"><p>Subtotal</p></div><div class=\"right\"><p>$2500.00</p></div></li><li><div class=\"left\"><p>Shipping</p></div><div class=\"right\"><p><span>Flat rate:</span> $50.00</p></div></li><li><div class=\"left\"><p>Total Price:</p></div><div class=\"right\"><p>$2550.00</p></div></li></ul></div></div></div>", 2);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Breadcrumb Style2"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start cart area"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'products.show',
        params: {
          id: product.id
        }
      },
      "class": "thumb"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: product.image_url,
          alt: product.title
        }, null, 8 /* PROPS */, _hoisted_12)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'products.show',
        params: {
          id: product.id
        }
      },
      href: "",
      "class": "title"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.minusQty(product);
      }, ["prevent"]),
      "class": "decreaseQty"
    }, _hoisted_17, 8 /* PROPS */, _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      "class": "qtyValue",
      value: product.qty
    }, null, 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.plusQty(product);
      }, ["prevent"]),
      "class": "increaseQty"
    }, _hoisted_21, 8 /* PROPS */, _hoisted_19)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price * product.qty), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeProduct(product.id);
      }, ["prevent"]),
      "class": "remove"
    }, _hoisted_25, 8 /* PROPS */, _hoisted_23)])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])])]), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.name = $event;
    }),
    placeholder: "name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.email = $event;
    }),
    placeholder: "email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.address = $event;
    }),
    placeholder: "address"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.address]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.storeOrder();
    }, ["prevent"])),
    type: "submit",
    "class": "btn btn-primary",
    value: "Офорление"
  })]), _hoisted_28])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End cart area")])]);
}

/***/ }),

/***/ "./resources/js/views/cart/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/cart/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1fb659c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1fb659c2 */ "./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/views/cart/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_1fb659c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/cart/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/cart/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/views/cart/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2":
/*!*************************************************************************!*\
  !*** ./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_1fb659c2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_1fb659c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=1fb659c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/cart/Index.vue?vue&type=template&id=1fb659c2");


/***/ })

}]);