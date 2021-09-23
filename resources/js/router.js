import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import welcome from './components/public/Index';

const routes = [

    {
        path: '/',
        component: welcome,
        name: 'welcome',
        props: true,
        meta: {
            title: "Online Shopping In Bangladesh"
        }

    },

    {
        path: '/sub/sub/caetgory/products/:slug',
        component: () => import(/* webpackChunkName: "public_sub_sub_category" */'./components/public/SubSubCategoryProduct'),
        name: 'PublicSubSUbCategory',

        meta: {
            title: 'sub-sub-category wise product'
        }
    },

    {
        path: '/products/search/:search',
        component: () => import(/* webpackChunkName: "public_product_search" */'./components/public/SearchProduct'),
        name: 'PublicProductSearch',

        meta: {
            title: 'search product'
        }
    },


    {
        path: '/sub/caetgory/products/:slug',
        component: () => import(/* webpackChunkName: "public_sub_category" */'./components/public/SubCategoryProduct'),
        name: 'PublicSubCategory',

        meta: {
            title: 'sub-category wise product'
        }
    },


    {
        path: '/category/products/:slug',
        component: () => import(/* webpackChunkName: "public_category" */'./components/public/CategoryWiseProduct'),
        name: 'PublcaCategory',

        meta: {
            title: 'Category wise product'
        }
    },


    {
        path: '/product/:slug',
        component: () => import(/* webpackChunkName: "single_product" */'./components/public/SingleProduct.vue'),
        name: 'single',
        props: true,
        meta: {
            title: 'product details'
        }
    },


    {
        path: '/how/to/buy',
        component: () => import(/* webpackChunkName: "how_to_buy" */'./components/public/policy_and_info/how_to_buy'),
        name: 'how_to_buy',

        meta: {
            title: 'How To Buy|| Product '
        }
    },

    {
        path: '/return/policy',
        component: () => import(/* webpackChunkName: "return_policy" */'./components/public/policy_and_info/return_policy'),
        name: 'return_policy',

        meta: {
            title: ' Return || Policy '
        }
    },

       {
        path: '/public/team',
        component: () => import(/* webpackChunkName: "team" */'./components/public/policy_and_info/Team.vue'),
        name: 'team',

        meta: {
            title: ' our team '
        }
    },

    {
        path: '/shipment',
        component: () => import(/* webpackChunkName: "shipment" */'./components/public/policy_and_info/Shipment'),
        name: 'shipment',

        meta: {
            title: ' shipment '
        }
    },


    {
        path: '/about/seller',
        component: () => import(/* webpackChunkName: "about_seller" */'./components/public/policy_and_info/About_seller'),
        name: 'about_seller',

        meta: {
            title: ' About Seller '
        }
    },


    {
        path: '/about/us',
        component: () => import(/* webpackChunkName: "about_us" */'./components/public/Aboutus'),
        name: 'AboutUs',

        meta: {
            title: 'About||us'
        }
    },
    {
        path: '/contact/us',
        component: () => import(/* webpackChunkName: "contact_us" */'./components/public/Contactus'),
        name: 'ContactUs',

        meta: {
            title: 'Contact||us'
        }
    },

    {
        path: '/user/dashboard',
        component: () => import(/* webpackChunkName: "user_dashboard" */'./components/public/user/Dashboard'),
        name: 'UserDashboard',
        meta: {
            title: 'Customer || Dashboard ',
            requiresAuthUser: true,

        }
    },


    {
        path: '/user/login',
        component: () => import(/* webpackChunkName: "userLogin" */'./components/public/Login'),
        name: 'UserLogin',
        meta: {
            title: 'Login || User'
        }

    },

    {
        path: '/otp/login',
        component: () => import(/* webpackChunkName: "otp_login" */'./components/public/otp'),
        name: 'otpLogin',
        meta: {
            title: "Login With OTP"
        }
    },
    {
        path: '/user/new/set/password',
        component: () => import(/* webpackChunkName: "user_password_reset" */'./components/public/user/SetNewPassword'),
        name: 'user_new_password_set',
        meta: {
            title: 'set new password ',
            requiresAuthUser: true,

        }

    },


    {
        path: '/user/code/verify/:mobile_no',
        component: () => import(/* webpackChunkName: "code_verified" */'./components/public/CodeVerified'),
        name: 'CodeVerified',
        meta: {
            title: 'Password Reset',

        }
    },


    {
        path: '/user/register',
        component: () => import(/* webpackChunkName: "user_register" */'./components/public/user/Register'),
        name: 'UserRegister',
        meta: {
            title: 'Register || User',
        }

    },
    {
        path: '/user/Checkout',
        component: () => import(/* webpackChunkName: "checkout" */'./components/public/Checkout.vue'),
        name: 'Chekout',
        meta: {
            title: 'Checkout || User',
        }

    },
    {
        path: '/user/order/history',
        component: () => import(/* webpackChunkName: "order_history" */'./components/public/user/OrderHistory'),
        name: 'OrderHistory',
        meta: {
            title: 'Order || History',
            requiresAuthUser: true,

        }

    },

    {
        path: '/user/order/details/:id',
        component: () => import(/* webpackChunkName: "order_details" */'./components/public/user/OrderDetails'),
        name: 'order_details',
        meta: {
            title: 'Order || Details',
            requiresAuthUser: true,

        }

    },

    {
        path: '/user/password',
        component: () => import(/* webpackChunkName: "user_password" */'./components/public/user/Password'),
        name: 'PasswordEdit',
        meta: {
            title: 'password || Update',
            requiresAuthUser: true,

        }

    },

    {
        path: '/user/profile',
        component: () => import(/* webpackChunkName: "user_profile" */'./components/public/user/Profile'),
        name: 'UserProfile',
        meta: {
            title: 'Prilfe || User',
            requiresAuthUser: true,

        }

    },

    {
        path: '/user/profile/edit',
        component: () => import(/* webpackChunkName: "user_profile_edit" */'./components/public/user/Edit'),
        name: 'UserProfileEdit',
        meta: {
            title: 'Prilfe || Edit',
            requiresAuthUser: true,

        }

    },








    {
        path: '/merchant/backend/login',
        component: () => import(/* webpackChunkName: "merchnat_login" */'./components/merchant/Login'),
        name: 'merchant_login',
        meta: {
            title: 'Merchant|Login'
        }
    },


    {
        path: '/public/merchant/password/reset',
        component: () => import(/* webpackChunkName: "merchant_password_reset" */'./components/merchant/PasswordReset'),
        name: 'merchant_password_reset',
        meta: {
            title: 'Merchant Password Reset'
        }
    },
    {
        path: '/public/merchant/code/verify/:phone',
        component: () => import(/* webpackChunkName: "merchnat_code_verified" */'./components/merchant/CodeVerified'),
        name: 'merchant_code_verified',
        meta: {
            title: 'Merchant Password Reset'
        }
    },

    {
        path: '/public/merchant/reset/new/password/:phone',
        component: () => import(/* webpackChunkName: "new_password_merchant" */'./components/merchant/NewPassword'),
        name: 'new_password_merchant',
        meta: {
            title: 'Update Merchant Password'
        }

    },


    {
        path: '/public/merchant/register',
        component: () => import(/* webpackChunkName: "merchant_register" */'./components/merchant/Register'),
        name: 'merchant_register',
        meta: {
            title: 'Merchant | Register '
        }
    },

    {
        path: '/merchant/backend/home',
        component: () => import(/* webpackChunkName: "merchant_dashboard" */'./components/merchant/Dashboard'),
        name: 'merchant_dashboard',
        meta: {
            title: 'Merchant|Dashboard',
            authMerchant: true ,
        }

    },


    {
        path: '/merchant/backend/product/menage',
        component: () => import(/* webpackChunkName: "merchnat_product_manage" */'./components/merchant/product/Menage'),
        name: 'merchant_product_menage',
        meta: {
            title: 'Product|Manage',
            authMerchant: true ,
        }
    },

    {
        path: '/merchant/backend/product/add',
        component: () => import(/* webpackChunkName: "merchant_product_add" */'./components/merchant/product/Add'),
        name: 'merchant_product_add',
        meta: {
            title: ' Product | Add ',
            authMerchant: true ,
        }

    },


    {
        path: '/merchant/backend/product/edit/:id',
        component: () => import(/* webpackChunkName: "merchant_product_edit" */'./components/merchant/product/Edit'),
        name: 'merchant_product_edit',
        meta: {
            title: ' Product | Edit ',
            authMerchant: true ,
        }

    },

    {
        path: '/merchant/backend/order',
        component: () => import(/* webpackChunkName: "merchant_order" */'./components/merchant/order/Index'),
        name: 'merchant_order',
        meta: {
            title: 'Order Info',
            authMerchant: true ,
        }
    },

    {
        path: '/merchant/backend/order/view/:id',
        component: () => import(/* webpackChunkName: "merchant_order_view" */'./components/merchant/order/View'),
        name: 'merchant_order_view',
        meta: {
            title: 'order details info ',
            authMerchant: true ,
        }

    },
    {
        path: '/merchant/backend/profile',
        component: () => import(/* webpackChunkName: "merchant_profile" */'./components/merchant/profile/Profile'),
        name: 'merchant_profile',
        meta: {
            title: ' Profile info ',
            authMerchant: true ,
        }
    },

    {
        path: '/merchant/backend/profile/edit',
        component: () => import(/* webpackChunkName: "merchant_profile_edit" */'./components/merchant/profile/Change_profile.vue'),
        name: 'merchant_profile_edit',
        meta: {
            title: ' Profile info | Edit ',
            authMerchant: true ,
        }

    },

    {
        path: '/merchant/backend/security/edit',
        component: () => import(/* webpackChunkName: "merchant_password_edit" */'./components/merchant/profile/Change_password.vue'),
        name: 'merchant_password_edit',
        meta: {
            title: ' Password | Edit ',
            authMerchant: true ,
        }

    },






    {
        path: '/backend/dashboard',
        component: () => import(/* webpackChunkName: "admin_dashboard" */'./components/admin/Index.vue'),
        name: 'dashboard',
        meta: {
            requiresAuthAdmin: true,
            title: 'Dashboard'

        }
    },
    {
        path: '/backend/category',
        component: () => import(/* webpackChunkName: "category" */'./components/admin/category/Category'),
        name: "category",
        meta: {
            requiresAuthAdmin: true,
            title: 'category'
        }
    },
    {
        path: '/backend/categoryEdit/:categoryId',
        component: () => import(/* webpackChunkName: "categoryedit" */'./components/admin/category/Edit'),
        name: "CategoryEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'category || edit'
        }
    },
    {
        path: '/backend/categoryAdd',
        component: () => import(/* webpackChunkName: "categoryAdd" */'./components/admin/category/Add'),
        name: "categoryAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'category || add'

        }
    },

    {
        path: '/backend/subcategory',
        component: () => import(/* webpackChunkName: "sub_category" */'./components/admin/subCategory/SubCategory'),
        name: 'SubCategory',
        meta: {
            requiresAuthAdmin: true,
            title: 'subCategory'
        }
    },
    {
        path: '/backend/subcategoryAdd',
        component: () => import(/* webpackChunkName: "sub_category_add" */'./components/admin/subCategory/Add'),
        name: "subcategoryAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'sub category add'
        }
    },
    {
        path: '/backend/subcategoryEdit/:id',
        component: () => import(/* webpackChunkName: "sub_category_edit" */'./components/admin/subCategory/Edit'),
        name: "subcategoryEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'sub category edit'
        }
    },

    {
        path: '/backend/subSubCategory',
        component: () => import(/* webpackChunkName: "sub_sub_category" */'./components/admin/subSubCategory/SubSubCategory'),
        name: 'subSubCategory',
        meta: {
            requiresAuthAdmin: true,
            title: 'sub sub category'
        }
    },
    {
        path: '/backend/subSubCategoryAdd',
        component: () => import(/* webpackChunkName: "sub_sub_category_add" */'./components/admin/subSubCategory/Add'),
        name: "subSubCategoryAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'sub sub category add'
        }
    },
    {
        path: '/backend/subSubCategoryEdit/:id',
        component: () => import(/* webpackChunkName: "sub_sub_category_edit" */'./components/admin/subSubCategory/Edit'),
        name: "subSubCategoryEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'sub sub subcategory || Edit'
        }
    },


    {
        path: '/backend/slider',
        component: () => import(/* webpackChunkName: "slider" */'./components/admin/slider/Slider'),
        name: 'slider',
        meta: {
            requiresAuthAdmin: true,
            title: 'slider'
        }
    },
    {
        path: '/backend/sliderAdd',
        component: () => import(/* webpackChunkName: "slider_add" */'./components/admin/slider/Add'),
        name: "sliderAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'slider || add'
        }
    },
    {
        path: '/backend/sliderEdit/:id',
        component: () => import(/* webpackChunkName: "slider_edit" */'./components/admin/slider/Edit'),
        name: 'sliderEdit',
        meta: {

            requiresAuthAdmin: true,
            title: 'slider || edit'
        }
    },


    {
        path: '/backend/category/slider',
        component: () => import(/* webpackChunkName: "category_slider" */'./components/admin/Category_slider/Index'),
        name: 'category_slider',
        meta: {
            requiresAuthAdmin: true,
            title: 'category slider'
        }
    },
    {
        path: '/backend/category/slider/add',
        component: () => import(/* webpackChunkName: "category_slider_add" */'./components/admin/Category_slider/Add'),
        name: "category_slider_add",
        meta: {
            requiresAuthAdmin: true,
            title: 'category slider || add'
        }
    },
    {
        path: '/backend/category/slider/edit/:id',
        component: () => import(/* webpackChunkName: "category_slider_edit" */'./components/admin/Category_slider/Edit'),
        name: 'category_slider_edit',
        meta: {

            requiresAuthAdmin: true,
            title: 'category slider || edit'
        }
    },


    {
        path: '/backend/attribute',
        component: () => import(/* webpackChunkName: "attribute" */'./components/admin/attribute/Attribute'),
        name: "attribute",
        meta: {
            requiresAuthAdmin: true,
            title: 'attribute'
        }
    },
    {
        path: '/backend/attributeAdd',
        component: () => import(/* webpackChunkName: "attributeAdd" */'./components/admin/attribute/Add'),
        name: "attributeAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'attribute || add'
        }
    },
        {
        path: '/backend/attribute/edit/:id',
        component: () => import('./components/admin/attribute/Edit.vue'),
        name: "attributeEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'attribute || edit'
        }
    },
    {
        path: '/backend/reseller/menage',
        component: () => import(/* webpackChunkName: "resellerHome" */'./components/admin/reseller/index'),
        name: 'resellerHome',
        props: true,
        meta: {
            title: 'Reseller | Menage',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/reseller/add',
        component: () => import(/* webpackChunkName: "resellerAdd" */'./components/admin/reseller/Add'),
        name: 'resellerAdd',
        props: true,
        meta: {
            title: 'Reseller | Add',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/reseller/edit/:id',
        component: () => import(/* webpackChunkName: "resellerEdit" */'./components/admin/reseller/Edit'),
        name: 'resellerEdit',
        meta: {
            title: 'Reseller | Edit',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/reseller/un/paid/payment',
        component: () => import(/* webpackChunkName: "unpaidPayment" */'./components/admin/reseller/UnpaidPayment'),
        name: 'UnpaidPayment',
        props: true,
        meta: {
            title: 'Unpaid|payment|Reseller',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/reseller/paid/payment',
        component: () => import(/* webpackChunkName: "paidPayment" */'./components/admin/reseller/paidPayment'),
        name: 'paidPayment',
        props: true,
        meta: {
            title: 'paid|payment|Reseller',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/reseller/payment/invoice',
        component: () => import(/* webpackChunkName: "paymentInvoice" */'./components/admin/reseller/PaymentInvoice'),
        name: 'PaymentInvoice',
        props: true,
        meta: {
            title: 'paid|payment|Reseller',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/reseller/payment/invoice/:id',
        component: () => import(/* webpackChunkName: "paymnetDetails" */'./components/admin/reseller/paymentDetails'),
        name: 'paymentDetails',
        props: true,
        meta: {
            title: 'paid|payment|Reseller',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/user/list',
        component: () => import(/* webpackChunkName: "user"*/'./components/admin/user/index'),
        name: 'user',
        meta: {
            title: 'User | List',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/customer/list',
        component: () => import(/* webpackChunkName: "customer"*/'./components/admin/customer/index'),
        name: 'customer',
        meta: {
            title: 'customer | List',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/variant',
        component: () => import(/* webpackChunkName: "variant"*/'./components/admin/variant/Variant'),
        name: "variant",
        meta: {
            requiresAuthAdmin: true,
            title: 'variant'
        }
    },
    {
        path: '/backend/variantAdd',
        component: () => import(/* webpackChunkName: "variaantAdd" */'./components/admin/variant/Add'),
        name: "variantAdd",
        meta: {
            requiresAuthAdmin: true,
            title: 'variant add'
        }
    },


    {
        path: '/backend/variant/edit/:id',
        component: () => import('./components/admin/variant/Edit.vue'),
        name: "variantEdit",
        meta: {
            requiresAuthAdmin: true,
            title: 'variant edit'
        }
    },

    {
        path: '/backend/adminLogin',
        component: () => import(/* webpackChunkName: "admin_login" */'./components/admin/Login.vue'),
        name: 'adminLogin',
        meta: {
            title: 'Login || Admin'
        }

    },

    {
        path: '/backend/merchant',
        component: () => import(/* webpackChunkName: "merchant" */'./components/admin/merchant/index'),
        name: 'merchant',
        meta: {
            title: 'Merchant ',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/merchant/add',
        component: () => import(/* webpackChunkName: "add_merchant" */'./components/admin/merchant/Add'),
        name: 'add_merchant',
        meta: {
            title: 'Merchant | Add ',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/merchant/edit/:id',
        component: () => import(/* webpackChunkName: "edit_merchant" */'./components/admin/merchant/Edit'),
        name: 'edit_merchant',
        meta: {
            title: 'Merchant | edit ',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/supplier',
        component: () => import(/* webpackChunkName: "supplier" */'./components/admin/supplier/Supplier'),
        name: 'supplier',
        meta: {
            requiresAuthAdmin: true,
            title: 'suppler'
        }

    },
    {
        path: '/backend/fabrics/add/fabrics/supplier/',
        component: () => import(/* webpackChunkName: "addFabricsSupplier" */'./components/admin/supplier/AddFabricsSupplier'),
        name: 'AddFabricsSupplier',
        meta: {
            requiresAuthAdmin: true,
            title: 'Fabrics| Supplier'
        }

    },
    {
        path: '/backend/fabrics/supplier',
        component: () => import(/* webpackChunkName: "fabricsSupplier" */'./components/admin/supplier/FabricsSupplier'),
        name: 'FabricsSupplier',
        meta: {
            requiresAuthAdmin: true,
            title: 'Fabrics| Supplier'
        }

    },


    {
        path: '/backend/supplier/:id/amount',
        component: () => import(/* webpackChunkName: "SupplierAmount" */'./components/admin/supplier/Amount'),
        name: 'SupplierAmount',
        meta: {
            requiresAuthAdmin: true,
            title: 'suppler'
        }

    },

    {
        path: '/backend/Supplier/Add',
        component: () => import(/* webpackChunkName: "supplierAdd" */'./components/admin/supplier/Add'),
        name: 'supllierAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add|suppleir'
        }
    },
    {

        path: '/backend/edit/supplier/:id',
        component: () => import(/* webpackChunkName: "supplierEdit" */'./components/admin/supplier/Edit'),
        name: 'supplierEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit| Supplier'
        }
    },

    {
        path: '/backend/credit',
        component: () => import(/* webpackChunkName: "credit" */'./components/admin/credit/Credit'),
        name: 'credit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Credit'
        }

    },
    {
        path: '/backend/credit/due',
        component: () => import(/* webpackChunkName: "creditDue" */'./components/admin/credit/Due'),
        name: 'CreditDue',
        meta: {
            requiresAuthAdmin: true,
            title: 'Due| Credit'
        }

    },

    {
        path: '/backend/credit/add',
        component: () => import(/* webpackChunkName: "creditAdd" */'./components/admin/credit/Add'),
        name: 'creditAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add|credit'
        }

    },

    {
        path: '/backend/credit/edit/:id',
        component: () => import(/* webpackChunkName: "creditEdit" */'./components/admin/credit/Edit'),
        name: 'creditEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit"credit'
        }

    },

    {
        path: '/backend/debit',
        component: () => import(/* webpackChunkName: "debit" */'./components/admin/debit/Debit'),
        name: 'debit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Debit'
        }

    },
    {
        path: '/backend/debit/add',
        component: () => import(/* webpackChunkName: "debitAdd" */'./components/admin/debit/Add'),
        name: 'debitAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add|debit'
        }

    },

    {
        path: '/backend/debit/edit/:id',
        component: () => import(/* webpackChunkName: "debitEdit" */'./components/admin/debit/Edit'),
        name: 'debitEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit|Debit'
        }

    },


    {
        path: '/backend/city',
        component: () => import(/* webpackChunkName: "city" */'./components/admin/city/City'),
        name: 'city',
        meta: {
            requiresAuthAdmin: true,
            title: 'city'
        }
    },

    {
        path: '/backend/sub/city',
        component: () => import(/* webpackChunkName: "sub_city" */'./components/admin/sub_city/Index.vue'),
        name: 'sub_city',
        meta: {
            requiresAuthAdmin: true,
            title: 'sub city'
        }
    },

    {
        path: '/backend/add/sub/city',
        component: () => import(/* webpackChunkName: "sub_city_add" */'./components/admin/sub_city/Add.vue'),
        name: 'add_sub_city',
        meta: {
            requiresAuthAdmin: true,
            title: 'add sub city'
        }
    },
    {
        path: '/backend/edit/sub/city/:id',
        component: () => import(/* webpackChunkName: "edit_sub_city" */'./components/admin/sub_city/Edit.vue'),
        name: 'edit_sub_city',
        meta: {
            requiresAuthAdmin: true,
            title: 'edit sub city'
        }
    },
    {
        path: '/backend/role',
        component: () => import(/* webpackChunkName: "role" */'./components/admin/role/Role'),
        name: 'role',
        meta: {
            requiresAuthAdmin: true,
            title: 'Role'
        }

    },

    {
        path: '/backend/role/add',
        component: () => import(/* webpackChunkName: "roleAdd" */'./components/admin/role/Add'),
        name: 'roleAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add ROle'
        }

    },

    {
        path: '/backend/permissions/edit/role/:id',
        component: () => import(/* webpackChunkName: "editPermission" */'./components/admin/role/Permissions'),
        name: 'EditPermissions',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit| Permissions'
        }

    },

    {
        path: '/backend/addCity',
        component: () => import(/* webpackChunkName: "cityAdd" */'./components/admin/city/Add'),
        name: 'cityAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add city'
        }
    },
    {
        path: '/backend/editCity/:id',
        component: () => import(/* webpackChunkName: "cityEdit" */'./components/admin/city/Edit'),
        name: 'editCity',
        meta: {
            requiresAuthAdmin: true,
            title: 'edit city'
        }
    },

    {
        path: '/backend/company',
        component: () => import(/* webpackChunkName: "company" */'./components/admin/company/Company'),
        name: 'company',
        meta: {
            requiresAuthAdmin: true,
            title: 'company'
        }

    },
    {
        path: '/backend/add/company',
        component: () => import(/* webpackChunkName: "addCompany" */'./components/admin/company/Add'),
        name: 'addCompany',
        meta: {
            requiresAuthAdmin: true,
            title: 'add company'
        }
    },
    {
        path: '/backend/edit/company/:id',
        component: () => import( /* webpackChunkName: "editCompany" */'./components/admin/company/Edit'),
        name: 'editCompany',
        meta: {
            requiresAuthAdmin: true,
            title: 'edit company'
        }
    },

    {
        path: '/backend/company/payment/details/:id',
        component: () => import(/* webpackChunkName: "company_payment_details" */'./components/admin/sale/CompanyPaymentDetails.vue'),
        name: 'company_payment_details',
        meta: {
            requiresAuthAdmin: true,
            title: 'Company  | Payment  Details'
        }
    },



    {
        path: '/backend/found/transfer',
        component: () => import(/* webpackChunkName: "fondtransfer" */'./components/admin/fondtransfer/Index'),
        name: 'fondtransfer',
        meta: {
            requiresAuthAdmin: true,
            title: 'fondtransfer'
        }

    },
    {
        path: '/backend/found/transfer/add',
        component: () => import(/* webpackChunkName: "fondtransferAdd" */'./components/admin/fondtransfer/Add'),
        name: 'fondtransferAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add|ondtransfer'
        }

    },

    {
        path: '/backend/offer',
        component: () => import(/* webpackChunkName: "offer" */'./components/admin/offer/Offer'),
        name: 'offer',
        meta: {
            requiresAuthAdmin: true,
            title: 'offer'
        }

    },
    {
        path: '/backend/add',
        component: () => import(/* webpackChunkName: "offerAdd" */'./components/admin/offer/Add'),
        name: 'offerAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add offer'
        }
    },
    {
        path: '/backend/edit/Offer/:id',
        component: () => import(/* webpackChunkName: "edit_offer" */'./components/admin/offer/Edit'),
        name: 'edit_offer',
        meta: {
            requiresAuthAdmin: true,
            title: 'edit offer'
        }
    },

    {
        path: '/backend/courier',
        component: () => import(/* webpackChunkName: "courier" */'./components/admin/courier/Courier'),
        name: 'courier',
        meta: {
            requiresAuthAdmin: true,
            title: 'courier'
        }

    },
    {
        path: '/backend/addCourier',
        component: () => import(/* webpackChunkName: "courierAdd" */'./components/admin/courier/Add'),
        name: 'courierAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'add courier'
        }
    },
    {
        path: '/backend/editCourier/:id',
        component: () => import(/* webpackChunkName: "editCourier" */'./components/admin/courier/Edit'),
        name: 'editCourier',
        meta: {
            requiresAuthAdmin: true,
            title: 'Courier edit'
        }
    },

    {
        path: '/backend/comment',
        component: () => import(/* webpackChunkName: "comment" */'./components/admin/comment/Comment'),
        name: 'comment',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment'
        }

    },
    {
        path: '/backend/addComment',
        component: () => import(/* webpackChunkName: "commentAdd" */'./components/admin/comment/Add'),
        name: 'commentAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment || add'
        }
    },
    {
        path: '/backend/editComment/:id',
        component: () => import(/* webpackChunkName: "editComment" */'./components/admin/comment/Edit'),
        name: 'editComment',
        meta: {
            requiresAuthAdmin: true,
            title: 'comment edit'
        }
    },

    {
        path: '/backend/factory/list',
        component: () => import(/* webpackChunkName: "factory_list" */'./components/admin/factory/Index'),
        name: 'factory_list',
        meta: {
            requiresAuthAdmin: true,
            title: 'factory'
        }

    },
    {
        path: '/backend/factory/add',
        component: () => import(/* webpackChunkName: "add_factory" */'./components/admin/factory/Add'),
        name: 'add_factory',
        meta: {
            requiresAuthAdmin: true,
            title: 'factory || add'
        }
    },
    {
        path: '/backend/edit/factory/:id',
        component: () => import(/* webpackChunkName: "edit_factory" */'./components/admin/factory/Edit'),
        name: 'edit_factory',
        meta: {
            requiresAuthAdmin: true,
            title: 'factroy edit'
        }
    },

    {
        path: '/backend/product',
        component: () => import(/* webpackChunkName: "product" */'./components/admin/product/Product'),
        name: 'product',
        meta: {
            requiresAuthAdmin: true,
            title: 'Product'
        }

    },


    {
        path: '/backend/report/product/stock',
        component: () => import(/* webpackChunkName: "productStock" */'./components/admin/Report/ProductStock'),
        name: 'productStcok',
        meta: {
            requiresAuthAdmin: true,
            title: 'Product||stock'
        }

    },


    {
        path: '/backend/addProduct',
        component: () => import(/* webpackChunkName: "productAdd" */'./components/admin/product/Add'),
        name: 'productAdd',
        meta: {
            requiresAuthAdmin: true,
            title: 'product || add'
        }
    },
    {
        path: '/backend/product/edit/:id',
        component: () => import(/* webpackChunkName: "productEdit" */'./components/admin/product/Edit'),
        name: 'productEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'product edit'
        }
    },


    {
        path: '/backend/purchase',
        component: () => import(/* webpackChunkName: "purchase" */'./components/admin/purchase/Purchase'),
        name: 'purchase',
        meta: {
            requiresAuthAdmin: true,
            title: 'Purchase'
        }

    },
    {
        path: '/backend/addPurchase',
        component: () => import(/* webpackChunkName: "addPurchase" */'./components/admin/purchase/Add'),
        name: 'addPurchase',
        meta: {
            requiresAuthAdmin: true,
            title: 'purchase || add'
        }
    },
    {
        path: '/backend/addPurchase/fabrics',
        component: () => import(/* webpackChunkName: "addPurchasefabrics" */'./components/admin/purchase/AddFabricsPurchase'),
        name: 'AddPurchaseFabrics',
        meta: {
            requiresAuthAdmin: true,
            title: 'Fabrics||Purchase'
        }
    },
    {
        path: '/backend/purchase/manage/fabrics',
        component: () => import(/* webpackChunkName: "managefabricsPurchase" */'./components/admin/purchase/ManageFabricsPurchase'),
        name: 'ManagePurchaseFabrics',
        meta: {
            requiresAuthAdmin: true,
            title: 'Fabrics||Purchase'
        }
    },
    {
        path: '/backend/purchaseEdit/:id',
        component: () => import(/* webpackChunkName: "purchaseEdit" */'./components/admin/purchase/Edit'),
        name: 'purchaseEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'purchase edit'
        }
    },

    {
        path: '/backend/order',
        component: () => import(/* webpackChunkName: "order" */'./components/admin/order/Order'),
        name: 'order',
        meta: {
            requiresAuthAdmin: true,
            title: 'Order'
        }

    },

    {
        path: '/backend/new/order',
        component: () => import(/* webpackChunkName: "newOrder" */'./components/admin/order/New'),
        name: 'NewOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'New | Order'
        }

    },


    {
        path: '/backend/order/pending',
        component: () => import(/* webpackChunkName: "pendingOrder" */'./components/admin/order/Pending'),
        name: 'PendingOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'Pending | Order'
        }

    },

    {
        path: '/backend/order/approved',
        component: () => import(/* webpackChunkName: "approvedOrder" */'./components/admin/order/Approved'),
        name: 'ApprovedOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'Approved | Order'
        }

    },

    {
        path: '/backend/order/shipment',
        component: () => import(/* webpackChunkName: "shipmentOrder" */'./components/admin/order/Shipment'),
        name: 'ShipmentOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'ShipmentOrder | Order'
        }

    },
    {
        path: '/backend/order/delivered',
        component: () => import(/* webpackChunkName: "DeliveredOrder" */'./components/admin/order/Delivered'),
        name: 'DeliveredOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'DeliveredOrder | Order'
        }

    },
    {
        path: '/backend/order/return',
        component: () => import(/* webpackChunkName: "ReturnOrder" */'./components/admin/order/Return'),
        name: 'ReturnOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'ReturnOrder | Order'
        }

    },
    {
        path: '/backend/order/cancel',
        component: () => import(/* webpackChunkName: "cancelOrder" */'./components/admin/order/Cancel'),
        name: 'CancelOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'CancelOrder | Order'
        }

    },
    {
        path: '/backend/order/wholesale',
        component: () => import(/* webpackChunkName: "wholesaleOrder" */'./components/admin/order/Wholesale'),
        name: 'WholeSaleOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'WholeSaleOrder | Order'
        }

    },

    {
        path: '/backend/addOrder',
        component: () => import(/* webpackChunkName: "addOrder" */'./components/admin/order/Add'),
        name: 'addOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'order || add'
        }
    },

    {
        path: '/backend/add/wholesale',
        component: () => import(/* webpackChunkName: "addwholesale" */'./components/admin/order/AddWholeSale'),
        name: 'addWholeSale',
        meta: {
            requiresAuthAdmin: true,
            title: 'wholesale || add'
        }
    },

    {
        path: '/backend/view/order/:id',
        component: () => import(/* webpackChunkName: "viewOrder" */'./components/admin/order/View'),
        name: 'viewOrder',
        meta: {
            requiresAuthAdmin: true,
            title: 'order || view'
        }
    },
    {
        path: '/backend/orderEdit/:id',
        component: () => import(/* webpackChunkName: "orderEdit" */'./components/admin/order/Edit'),
        name: 'orderEdit',
        meta: {
            requiresAuthAdmin: true,
            title: 'order edit'
        }
    },

    {
        path: '/backend/purchaseView/:id',
        component: () => import(/* webpackChunkName: "purchaseView" */'./components/admin/purchase/View'),
        name: 'purchaseView',
        meta: {
            requiresAuthAdmin: true,
            title: 'view | purchase'
        }
    },

    {
        path: '/backend/sale/office',
        component: () => import(/* webpackChunkName: "officesale" */'./components/admin/sale/OfficeSale'),
        name: 'officeSale',
        meta: {
            requiresAuthAdmin: true,
            title: 'Office | Sale'
        }
    },

    {
        path: '/backend/sale/company',
        component: () => import(/* webpackChunkName: "companysale" */'./components/admin/sale/CompanySale'),
        name: 'compnaySale',
        meta: {
            requiresAuthAdmin: true,
            title: 'Company  | Sale'
        }
    },

        {
        path: '/backend/company/sale/details/:id',
        component: () => import(/* webpackChunkName: "company_sale_details" */'./components/admin/sale/CompanySaleDetails.vue'),
        name: 'company_sale_details',
        meta: {
            requiresAuthAdmin: true,
            title: 'Company  | Sale Details'
        }
    },


    {
        path: '/backend/selling/offer',
        component: () => import(/* webpackChunkName: "selling_offer" */'./components/admin/selling_offer/index'),
        name: 'selling_offer',
        meta: {
            requiresAuthAdmin: true,
            title: 'selling | offer'
        }
    },

    {
        path: '/backend/selling/offer/add',
        component: () => import(/* webpackChunkName: "add_selling_offer" */'./components/admin/selling_offer/Add'),
        name: 'add_selling_offer',
        meta: {
            requiresAuthAdmin: true,
            title: 'add | offer'
        }
    },

    {
        path: '/backend/carrier',
        component: () => import(/* webpackChunkName: "home_carrier" */'./components/admin/carrier/index'),
        name: 'home_carrier',
        meta: {
            title: 'Carrier | Home',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/add',
        component: () => import(/* webpackChunkName: "add_carrier" */'./components/admin/carrier/Add'),
        name: 'add_carrier',
        meta: {
            title: 'Carrier | Add',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/show/:id',
        component: () => import(/* webpackChunkName: "show_carrier" */'./components/admin/carrier/Show'),
        name: 'show_carrier',
        meta: {
            title: 'Carrier | show',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/carrier/edit/:id',
        component: () => import(/* webpackChunkName: "edit_carrier" */'./components/admin/carrier/Edit'),
        name: 'edit_carrier',
        meta: {
            title: 'Carrier | Home',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/job/post/applied/users/:id',
        component: () => import(/* webpackChunkName: "applied_user" */'./components/admin/carrier/jobApplied'),
        name: 'applied_users',
        meta: {
            title: 'Carrier | Applied User',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/selling/offer/edit/:id',
        component: () => import(/* webpackChunkName: "edit_selling_offer" */'./components/admin/selling_offer/Edit'),
        name: 'edit_selling_offer',
        meta: {
            requiresAuthAdmin: true,
            title: 'Edit | offer'
        }
    },


    {
        path: '/backend/account/purpose',
        component: () => import(/* webpackChunkName: "account_purpose" */'./components/admin/account/accountPurpose'),
        name: 'account_purpose',
        meta: {
            title: 'Account | Purpose',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/account/purpose/add',
        component: () => import(/* webpackChunkName: "account_purpose_add" */'./components/admin/account/Add'),
        name: 'account_purpose_add',
        meta: {
            title: 'Account | Purpose Add',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/account/purpose/edit/:id',
        component: () => import(/* webpackChunkName: "accoun_purpose_edit" */'./components/admin/account/Edit'),
        name: 'account_purpose_edit',
        meta: {
            title: 'Account | Purpose edit',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/member',
        component: () => import(/* webpackChunkName: "team_member" */'./components/admin/team/index'),
        name: 'team_member',
        meta: {
            title: 'Team | Members',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/member/add',
        component: () => import(/* webpackChunkName: "add_team_member" */'./components/admin/team/Add'),
        name: 'add_team_member',
        meta: {
            title: 'Add | Member',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/member/edit/:id',
        component: () => import(/* webpackChunkName: "edit_team_member" */'./components/admin/team/Edit'),
        name: 'edit_team_member',
        meta: {
            title: 'Edit | Member',
            requiresAuthAdmin: true,
        }
    },


    {
        path: '/backend/team/salary/:id',
        component: () => import(/* webpackChunkName: "teamsalary" */'./components/admin/team/Salary'),
        name: 'teamSalary',
        meta: {
            title: 'Team| Salary',
            requiresAuthAdmin: true,
        }
    },

    {
        path: '/backend/team/salary/:id/:month',
        component: () => import(/* webpackChunkName: "salaryDetails" */'./components/admin/team/SalaryDetails'),
        name: 'SalaryDetails',
        meta: {
            title: 'Team| Salary',
            requiresAuthAdmin: true,
        }
    },
    {
        path: '/backend/sale/add',
        component: () => import(/* webpackChunkName: "addSale" */'./components/admin/sale/Add'),
        name: 'AddSale',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add | Sale'
        }
    },
    {
        path: '/backend/sale/exchnage/add',
        component: () => import(/* webpackChunkName: "AddSaleExchange" */'./components/admin/sale/Exchange'),
        name: 'AddSaleExchange',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add | Sale'
        }
    },

    {
        path: '/backend/sale/add/company',
        component: () => import(/* webpackChunkName: "addCompanySale" */'./components/admin/sale/AddCompanySale'),
        name: 'AddCompanySale',
        meta: {
            requiresAuthAdmin: true,
            title: 'Add | Sale'
        }
    },

    {
        path: '/backend/sale/view/:id',
        component: () => import(/* webpackChunkName: "viewSale" */'./components/admin/sale/View'),
        name: 'ViewSale',
        meta: {
            requiresAuthAdmin: true,
            title: 'View | Sale'
        }
    },

    {
        path: '/backend/order/report',
        component: () => import(/* webpackChunkName: "orderReport" */'./components/admin/Report/OrderReport'),
        name: 'OrderReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Order | Report'
        }
    },

    {
        path: '/backend/office/sale/report',
        component: () => import(/* webpackChunkName: "officesaleReport" */'./components/admin/Report/OfficeSale'),
        name: 'OfficeSaleReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Office|sale | Report'
        }
    },
    {
        path: '/backend/purchase/report',
        component: () => import(/* webpackChunkName: "purchaseReport" */'./components/admin/Report/Purchase'),
        name: 'PurchaseReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Purchase Report'
        }
    },
    {
        path: '/backend/supplier/report',
        component: () => import(/* webpackChunkName: "supplier_Report" */'./components/admin/Report/SupplierReport'),
        name: 'SupplierReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Purhase Report'
        }
    },
    {
        path: '/backend/profite/report',
        component: () => import(/* webpackChunkName: "profiteReport" */'./components/admin/Report/Profite'),
        name: 'ProfiteReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },

    {
        path: '/backend/sale/profite/report',
        component: () => import(/* webpackChunkName: "SaleProfite" */'./components/admin/Report/SaleProfite'),
        name: 'SaleProfite',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },
    {
        path: '/backend/order/profite/report',
        component: () => import(/* webpackChunkName: "OrderProfite" */'./components/admin/Report/OrderProfite'),
        name: 'OrderProfite',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profite Report'
        }
    },

    {
        path: '/backend/account/report',
        component: () => import(/* webpackChunkName: "AccountReport" */'./components/admin/Report/Account'),
        name: 'AccountReport',
        meta: {
            requiresAuthAdmin: true,
            title: 'Office|sale | Report'
        }
    },

    {
        path: '/backend/listAdmin',
        component: () => import(/* webpackChunkName: "admin" */'./components/admin/admin/Admin'),
        name: 'admin',
        meta: {
            requiresAuthAdmin: true
        }

    },


    {
        path: '/backend/admin/profile',
        component: () => import(/* webpackChunkName: "adminProfile" */'./components/admin/admin/Profile.vue'),
        name: 'adminProfile',
        meta: {
            requiresAuthAdmin: true,
            title: 'Profile | Admin'
        }

    },
    {
        path: '/backend/addAdmin',
        component: () => import(/* webpackChunkName: "adminAdd" */'./components/admin/admin/Add'),
        name: 'adminAdd',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/editAdmin/:adminId',
        component: () => import(/* webpackChunkName: "editAdmin" */'./components/admin/admin/Edit'),
        name: 'editAdmin',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/assign/role/admin/:id',
        component: () => import(/* webpackChunkName: "assingRoleAdmin" */'./components/admin/admin/Role'),
        name: 'AssignRoleAdmin',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/assign/admin/permission/:id',
        component: () => import(/* webpackChunkName: "assign_admin_permission" */'./components/admin/admin/AdminPermission'),
        name: 'assign_admin_permission',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/admin/password/:id',
        component: () => import(/* webpackChunkName: "passwordChange" */'./components/admin/admin/Password'),
        name: 'passwordChange',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/sms/campaign',
        component: () => import(/* webpackChunkName: "sms_campaign" */'./components/admin/sms/Send'),
        name: 'sms_campaign',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/subscriber/list',
        component: () => import(/* webpackChunkName: "subscriber_list" */'./components/admin/subscriber/Index'),
        name: 'subscriber_list',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/contact/message',
        component: () => import(/* webpackChunkName: "contact_messgae" */'./components/admin/contact/Index'),
        name: 'contact_message',
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/contact/message/reply/:id',
        component: () => import(/* webpackChunkName: "contact_messgae_reply" */'./components/admin/contact/Reply'),
        name: 'contact_message_reply',
        meta: {
            requiresAuthAdmin: true
        }
    },


    {
        path: '/backend/loan/add',
        component: () => import(/* webpackChunkName: "addLoan" */'./components/admin/loan/Add'),
        name: 'loanAdd',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/loan/manage',
        component: () => import(/* webpackChunkName: "Loan" */'./components/admin/loan/Loan'),
        name: 'loan',
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/loaner/detaials/:id',
        component: () => import(/* webpackChunkName: "LoanDetails" */'./components/admin/loan/LoanerDetails'),
        name: 'LoanerDetails',
        meta: {
            requiresAuthAdmin: true
        }
    },



    {
        path: '/backend/general/setting',
        component: () => import(/* webpackChunkName: "generl setting" */'./components/admin/general_setting/General.vue'),
        name: 'general_setting',
        meta: {
            requiresAuthAdmin: true
        }
    },



    {
        path: '/backend/footer/info',
        name: 'footer_setting',
        component: () => import(/* webpackChunkName: "footer_setting" */'./components/admin/footer_setting/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


     {
        path: '/backend/about/contact/info',
        name: 'about_and_contact',
        component: () => import(/* webpackChunkName: "about_and_contact"*/'./components/admin/page_info/AboutContact.vue'),
        meta: {
            requiresAuthAdmin: true
          }
     },

     {
        path: '/backend/order/return/shipment/info',
        name: 'order_shipment_return',
        component: () => import(/* webpackChunkName: "order_shipment_return"*/'./components/admin/page_info/OrderShipmentReturn.vue'),
        meta: {
            requiresAuthAdmin: true
        }
      },

    {
        path: '/backend/flash/deals',
        name: 'flash_deals',
        component: () => import(/* webpackChunkName: "flash_deals" */'./components/admin/flash_deals/FlashDeals.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },

    {
        path: '/backend/seasional/campaign/menage',
        name: 'seasonal_campaign',
        component: () => import(/* webpackChunkName: "seasonal campaign" */'./components/admin/seasonal/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


    {
        path: '/backend/occasional/campaign/menage',
        name: 'occasional_campaign',
        component: () => import(/* webpackChunkName: "occasional_campaign" */'./components/admin/occasional/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


    {
        path: '/backend/buy/one/get/one/campaign',
        name: 'buy_one_get_one',
        component: () => import(/* webpackChunkName: "buy_one_get_one" */'./components/admin/buy_one_get_one/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


     {
        path: '/backend/showroom',
        name: 'showroom',
        component: () => import(/* webpackChunkName: "showroom" */'./components/admin/showroom/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom'
        }
    },


     {
        path: '/backend/showroom/add',
        name: 'showroom_add',
        component: () => import(/* webpackChunkName: "showroom_add" */'./components/admin/showroom/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom add'
        }
    },

    {
        path: '/backend/showroom/edit/:id',
        name: 'showroom_edit',
        component: () => import(/* webpackChunkName: "showroom_edit" */'./components/admin/showroom/Edit.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom edit'
        }
    },

    {
        path: '/backend/showroom_manager',
        name: 'showroom_manager',
        component: () => import(/* webpackChunkName: "showroom_manager" */'./components/admin/showroom_manager/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom manager'
        }
    },


     {
        path: '/backend/showroom_manager/add',
        name: 'showroom_manager_add',
        component: () => import(/* webpackChunkName: "showroom_manager_add" */'./components/admin/showroom_manager/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom manager add'
        }
    },

    {
        path: '/backend/showroom_manager/edit/:id',
        name: 'showroom_manager_edit',
        component: () => import(/* webpackChunkName: "showroom_manager_edit" */'./components/admin/showroom_manager/Edit.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom manager edit'
        }
    },



   {
        path: '/backend/product/transfer',
        name: 'product_transfer',
        component: () => import(/* webpackChunkName: "product_transfer" */'./components/admin/product_transfer/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom product transfer'
        }
    },


     {
        path: '/backend/product/transfer/add',
        name: 'product_transfer_add',
        component: () => import(/* webpackChunkName: "product_transfer_add" */'./components/admin/product_transfer/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom product transfer'
        }
    },

     {
        path: '/backend/product/transfer/details/:id',
        name: 'product_transfer_details',
        component: () => import(/* webpackChunkName: "product_transfer_details" */'./components/admin/product_transfer/Details.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'showroom product transfer details'
        }
    },


    {
        path: '/backend/sale/campaigns',
        name: 'sale_campaign',
        component: () => import(/* webpackChunkName: "sale_campaign" */'./components/admin/sale_campaign/Index.vue'),
        meta: {
            requiresAuthAdmin: true
          }
    },


    {
        path: '/backend/sale/campaign/add',
        name: 'add_sale_campaign',
        component: () => import(/* webpackChunkName: "add_sale_campaign" */'./components/admin/sale_campaign/Add.vue'),
        meta: {
            requiresAuthAdmin: true
          }
    },

     {
        path: '/backend/sale/campaign/item/:id',
        name: 'edit_sale_campaign',
        component: () => import(/* webpackChunkName: "edit_sale_campaign"*/'./components/admin/sale_campaign/Edit.vue'),
        meta: {
            requiresAuthAdmin: true
          }
    },


    {
        path: '/backend/coupon/code',
        name: 'coupon',
        component: () => import(/* webpackChunkName: "coupon" */'./components/admin/coupon/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
     },

    {
        path: '/backend/coupon/code/add',
        name: 'coupon_add',
        component: () => import(/* webpackChunkName: "coupon_add" */'./components/admin/coupon/Add.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/coupon/code/edit/:id',
        name: 'coupon_edit',
        component: () => import(/* webpackChunkName: "coupon_edit" */'./components/admin/coupon/Edit.vue'),
        meta: { requiresAuthAdmin: true,  }
    },



      {
        path: '/backend/theme/setting',
        name: 'theme_setting',
        component: () => import(/* webpackChunkName: "theme_setting" */'./components/admin/background_and_color/Index.vue'),
        meta: {
            requiresAuthAdmin: true
          }
    },


        {
        path: '/backend/company/investment',
        name: 'investment',
        component: () => import(/* webpackChunkName: "investment" */'./components/admin/Investment/Index.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
     },

    {
        path: '/backend/company/investment/add',
        name: 'investment_add',
        component: () => import(/* webpackChunkName: "investment_add" */'./components/admin/Investment/Add.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },
    {
        path: '/backend/company/investment/edit/:id',
        name: 'investment_edit',
        component: () => import(/* webpackChunkName: "investment_edit" */'./components/admin/Investment/Edit.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/company/investor/details/:id',
        name: 'investor_details',
        component: () => import(/*webpackChunkName: "investor_details" */'./components/admin/Investment/InvestorDetails.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

{
        path: '/backend/print/house',
        name: 'print_house',
        component: () => import(/*webpackChunkName: "print_house" */'./components/admin/print_house/Index.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
     },

    {
        path: '/backend/print/house/add',
        name: 'print_house_add',
        component: () => import(/*webpackChunkName: "print_house_add" */'./components/admin/print_house/Add.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/print/house/details/:id',
        name: 'print_house_details',
        component: () => import(/*webpackChunkName:"print_house_details"*/'./components/admin/print_house/PrintHouseDetails.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/add/product/for/print/:id',
        name: 'print_product_add',
        component: () => import(/*webpackChunkName: "print_product_add" */'./components/admin/print_house/AddPrintProduct.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/receieve/printed/product/:id',
        name: 'receieve_printed_product',
        component: () => import(/*webpackChunkName: "receieve_printed_product" */'./components/admin/print_house/ReceievePrinted.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

     {
        path: '/backend/details/print/product/:name',
        name: 'print_details',
        component: () => import(/*webpackChunkName: "print_details" */'./components/admin/print_house/PrintDetails.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
      },

      {
        path: '/backend/details/receive/print/product/:name',
        name: 'receive_print_details',
        component: () => import(/*webpackChunkName: "receive_print_details" */'./components/admin/print_house/ReceivePrintDetails.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
      },


       {
        path: '/backend/bill/statement',
        name: 'bill_statement',
        component: () => import(/*webpackChunkName: "bill_statement" */'./components/admin/bill_statement/Index.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
     },

    {
        path: '/backend/bill/statement/add',
        name: 'bill_statement_add',
        component: () => import(/*webpackChunkName: "bill_statement_add" */'./components/admin/bill_statement/Add.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/bill/statement/details/:id',
        name: 'bill_statement_details',
        component: () => import(/*webpackChunkName:"bill_statement_details"*/'./components/admin/bill_statement/BillDetails.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },

    {
        path: '/backend/balance',
        name: 'balance',
        component: () => import(/*webpackChunkName: "balance" */'./components/admin/balance/Index.vue'),
        meta: {
            requiresAuthAdmin: true,
             title : 'balance'
        }
     },

    {
        path: '/backend/balance/insert/history',
        name: 'balance_insert_admin',
        component: () => import(/*webpackChunkName: "balance_insert_admin" */'./components/admin/balance/BalanceInsertAdmin.vue'),
        meta: {
            requiresAuthAdmin: true,
             title : 'balance insert by admin'
        }
    },

    {
        path: '/backend/balance/insert/details/:id',
        name: 'balance_insert_details',
        component: () => import(/*webpackChunkName: "balance_insert_details" */'./components/admin/balance/BalanceInsertAdminDetails.vue'),
        meta: {
            requiresAuthAdmin: true,
             title : 'balance insert details'
        }
    },

    {
        path: '/backend/bill/statement/add',
        name: 'balance_add',
        component: () => import(/*webpackChunkName: "balance_add" */'./components/admin/balance/Add.vue'),
        meta: {
            requiresAuthAdmin: true,
            title : 'balance add'
        }
    },



     {
        path: '/backend/company/assets',
        name: 'company_assets',
        component: () => import(/* webpackChunkName: "company_assets" */'./components/admin/company_assets/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
     },

    {
        path: '/backend/company/assets/add',
        name: 'company_assets_add',
        component: () => import(/* webpackChunkName: "company_assets_add" */'./components/admin/company_assets/Add.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },
    {
        path: '/backend/company/assets/edit/:id',
        name: 'company_assets_edit',
        component: () => import(/* webpackChunkName: "company_assets_edit" */'./components/admin/company_assets/Edit.vue'),
        meta: {
            requiresAuthAdmin: true ,
        }
    },


     {
        path: '/backend/add/banner/campaign',
        name: 'banner',
        component: () => import(/* webpackChunkName: "banner" */'./components/admin/banner/Index.vue'),
        meta: {
            requiresAuthAdmin: true
        }
    },


     {
        path: '/user/Checkout/success',
        component: () =>
            import( /* webpackChunkName: "successCheckout" */ './components/public/Success'),
        name: 'checkoutSuccess',
        meta: {
            title: 'Checkout || Success',
          //  requiresAuthUser: true,

        }
    },



]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    if (to.matched.some(record => record.meta.requiresAuthAdmin)) {
        if (localStorage.getItem('admin_token')) {
            next()
            return
        }
        next('/backend/adminLogin')
    }
    else {
        next()
    }

    if (to.matched.some(record => record.meta.requiresAuthUser)) {
        if (localStorage.getItem('user_token')) {
            next()
            return
        }
        next('/user/login')
    } else {
        next()
    }

   if (to.matched.some(record => record.meta.authMerchant)) {
        if (localStorage.getItem('merchant_token')) {
            next()
            return
        }
        next('/merchant/backend/login')
    } else {
        next()
    }


    // if (to.matched.some(record=>record.meta.progressbar)){
    //     progress: {
    //         func: [
    //             {call: 'color', modifier: 'temp', argument: '#ffb000'},
    //             {call: 'fail', modifier: 'temp', argument: '#6e0000'},
    //             {call: 'location', modifier: 'temp', argument: 'top'},
    //             {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
    //         ]
    //     }
    // }
})

export default router
