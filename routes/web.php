<?php


Route::get('/', function(){

   $exitCode = Artisan::call('optimize:clear');

return view('frontend.master');

});


Route::group([
    // 'middleware' => 'admin',
    'namespace' => 'Frontend',
    'prefix' => '_public/'
], function () {
    //occasion buy one get one and seasoanl campaign
    Route::get('api/get/only/category','HomeController@onlyCategories');
      // about foooter route
    Route::get('api/get/info/abou/contact','HomeController@get_about_and_contact');
    Route::get('api/get/info/order/return/shipment','HomeController@get_order_shipment_return');

    //setting route is here
    Route::get('api/get/footer/setting','HomeController@get_footer_setting');
    Route::get('api/get/general/setting','HomeController@get_general_setting');
    Route::get('api/get/theme/setting','HomeController@get_theme_setting');

     //chekout route
     Route::get('apply/coupon/code', 'HomeController@ApplyCoupon');

    // public carrier route
    Route::get('carrier/list','CarrierController@index');
    Route::get('carrier/details/{id}','CarrierController@carrier_details');
    Route::post('api/carrier/apply/by/job/{id}','CarrierController@job_apply');

    //route for get team
    Route::get('team/members','HomeController@get_team_members');

    //public product route
    Route::get('products', 'HomeController@products');
    Route::get('product/{slug}', 'HomeController@product');
    Route::get('product/id/wise/{id}', 'HomeController@productIdWise');
    Route::get('related/products', 'HomeController@relatedProduct');


    //route for subscirber and contact
    Route::post('add/subscriber','SubscriberController@addSubscriber');
    Route::post('customer/contact','ContactController@contactCustomer');

    //publc category route
    Route::get('category', 'HomeController@category');
    Route::get('category/wise/product', 'HomeController@categoryWiseProduct');
    Route::get('category/wise/product/price/filter', 'HomeController@categoryWiseProductPriceFilter');
    Route::get('api/sort/product/according/to/asc/desc', 'HomeController@sort_by_price');
    Route::get('api/sort/product/sub/category/according/to/asc/desc', 'HomeController@sub_category_sort_by_price');
    Route::get('api/sort/product/sub/sub/category/according/to/asc/desc', 'HomeController@sub_sub_category_sort_by_price');
    Route::get('api/get/single/prodocut/for/quick/view/{id}','HomeController@get_quick_view_product');


    //public sub category route
    Route::get('sub/category/{slug}', 'HomeController@subCategory');
    Route::get('sub/category/wise/product', 'HomeController@subCategoryWiseProduct');
    Route::get('sub/sub/category/product', 'HomeController@subSubSubCategoryProduct');


    //public sub-sub category route
    Route::get('sub/sub/category/{slug}', 'HomeController@subSubCategory');
    Route::get('sub/sub/category/wise/product', 'HomeController@subSubCategoryWiseProduct');

   //slider display route started here
    Route::get('slider', 'HomeController@slider');
    Route::get('api/display/category/slider', 'HomeController@display_category_slider');
    Route::get('api/display/sub/category/slider', 'HomeController@display_sub_category_slider');
    Route::get('api/display/sub/sub/category/slider', 'HomeController@display_sub_sub_category_slider');
   // slider route end

    Route::get('offers', 'HomeController@offers');
    Route::get('product', 'HomeController@product');
    Route::get('search/products/{search}', 'HomeController@SearchProduct');
    Route::get('product/images/{slug}', 'HomeController@productImage');

    //sale campaign
    Route::get('api/display/sale/campaign', 'HomeController@saleCampaignProducts');

    //cart route..........
    Route::get('addToCart', 'CartController@addCart');
    Route::get('cartToContent', 'CartController@carToContent');
    Route::get('cartToUpdate', 'CartController@carToUpdate');
    Route::get('cartToDestroy', 'CartController@carToDestroy');



    //user authentication route
    Route::post('userToRegister','AuthController@register');

    Route::post('userToLogin','AuthController@login');
    Route::get('userToCheck','AuthController@chekAuthUser');
    Route::post('api/user/password/reset/send/code','AuthController@resetCode');
    Route::post('api/user/password/verify/code/{mobile_no}','AuthController@codeVerify');
    Route::post('api/user/password/reset/{mobile_no}','AuthController@ResetPassword');
    Route::post('send/code/forgotten/user','AuthController@send_password_reset_code')->middleware(['guest']);

    //chekout route
     Route::get('apply/coupon/code', 'HomeController@ApplyCoupon');

 });


   Route::get('api/order/payment/{order_id}','Frontend\OrderController@onlinePayment');
   Route::get('online/payment/success','Frontend\OrderController@paymentSuccess');
   Route::get('online/payment/failed','Frontend\OrderController@paymentFailed');

//:::::authnticate user router::::::

Route::group([
    //  'middleware' => 'auth',
    'namespace' => 'Frontend',
    'prefix' => '_public/'
], function () {

    //checkout route
    Route::post('checkout', 'OrderController@checkout');
    //cutomer order list route
    Route::get('customer/order/list', 'OrderController@orderList');
    Route::get('api/user/order/details/{id}', 'OrderController@user_order_details');
    Route::get('customer/order/invoice/print/{id}', 'OrderController@customer_invoice_print');
    //user profile update
    Route::post('update/user/profile', 'AuthController@userProfileUpdate');
    Route::post('user/password/update', 'AuthController@updatePassword');
    //logout route
    Route::get('user/logout', 'AuthController@logout');
    Route::post('user/set/new/password', 'AuthController@user_set_new_password');

});

//others route
Route::get('_public/others', 'Admin\OthersController@others');


//:::::start the backend route::::::
Route::group([
    'middleware' => 'admin',
    'namespace' => 'Admin',
    //'prefix' => 'backend/'
], function () {

     //start dashboard route

    Route::get('dashboard', 'DashboardController@index');
    Route::get('api/load/more/dashboard/data', 'DashboardController@dashboradData');

    //started user
    Route::get('list/user/all','UserController@getUser');
    Route::get('user/search/{data}','UserController@search_user');
    Route::get('api/export/users','UserController@export_users');
    Route::get('deactive/user/{id}','UserController@deActiveUser');
    Route::get('active/user/{id}','UserController@activeUser');
    //end user

   //send message url is here
   Route::post('api/send/message/to/customer','MessageController@send_message');

   //route for display subscriber
   Route::get('api/display/subscribers','OthersController@subscribers');
   Route::get('api/subscriber/search/{data}','OthersController@search_subscribers');
   Route::get('api/subscriber/remove/{id}','OthersController@remove_subscriber');
   Route::get('api/subscriber/exports','OthersController@export_subscriber');

   //route for contact user message dispaly
   Route::get('api/display/contacts','OthersController@contact_message');
   Route::get('api/get/contacted/customer/{id}','OthersController@get_contacted_customer');
   Route::get('api/contacted/customer/search/{data}','OthersController@search_contacted_customer');
   Route::get('api/reply/message/to/contacted/customer/{to}/{subject}/{message}','Contact_replyController@reply_contacted_customer');


  // start team route here
   Route::get('team/members/list','TeamController@index');
   Route::post('team/members/add','TeamController@addTeamMember');
   Route::get('team/members/edit/{id}','TeamController@getEditTeamMember');
   Route::post('team/members/update/{id}','TeamController@updateTeamMember');
   Route::get('team/members/trash/{id}','TeamController@destroyTeamMember');
   Route::get('team/members/active/{id}','TeamController@activeTeamMember');
   Route::get('team/members/deactive/{id}','TeamController@deactiveTeamMember');
   Route::get('api/team/members/search/{data}','TeamController@search_team_member');

   Route::get('api/member/salary/list/{id}','TeamController@salary');
   Route::get('api/member/salary/list/{id}/{month}','TeamController@salaryDetails');
   Route::get('/api/employee/salary/paid','TeamController@paidSalary');


   // end team route here


  //start account  route here....
  Route::get('api/account/purpose/list','AccountController@get_purpose_list');
  Route::post('api/account/purpose/add','AccountController@add_purpose');
  Route::get('api/account/purpose/edit/{id}','AccountController@get_edit_purpose');
  Route::post('api/account/purpose/update/{id}','AccountController@update_purpose');
  // end  account route here


    //start merchant route
    Route::get('api/merchant/list','MerchantController@index');
    Route::post('api/merchant/add','MerchantController@addMerchant');
    Route::get('api/merchant/edit/{id}','MerchantController@getEditMerchant');
    Route::post('api/merchant/update/{id}','MerchantController@updateMerchant');
    Route::get('api/merchant/trash/{id}','MerchantController@destroyMerchant');
    Route::get('api/merchant/active/{id}','MerchantController@activeMerchant');
    Route::get('api/merchant/deactive/{id}','MerchantController@deactiveMerchant');
    Route::get('api/search/merchant/{data}','MerchantController@searchMerchant');
    Route::get('api/admin/to/merchant/{id}','MerchantController@adminAccessMerchant');
    Route::get('api/export/merchants','MerchantController@exportMerchant');
    // end merchant route here

  //start carrier controller here

  Route::get('carrier/list','CarrierController@index');
  Route::post('carrier/add','CarrierController@add_carrier');
  Route::get('carrier/edit/{id}','CarrierController@getEdit_carrier');
  Route::post('carrier/update/{id}','CarrierController@update_carrier');
  Route::get('carrier/trash/{id}','CarrierController@destroy_carrier');
  Route::get('carrier/active/{id}','CarrierController@active_carrier');
  Route::get('carrier/deactive/{id}','CarrierController@deactive_carrier');
  Route::get('api/applied/applier/job/{id}','CarrierController@job_applied');
  Route::get('api/download/user/resume/{id}','CarrierController@download_applied_user_resume');

  // end carrier controller here





    //started customer
    Route::get('/list/customer','CustomerController@getCustomer');
    Route::get('/search/customer/{data}','CustomerController@searchCustomer');
    Route::get('api/export/customers','CustomerController@export_customers');
    Route::get('api/export/retail/customers','CustomerController@export_retail_customers');
    Route::get('api/customers/export/wholesale','CustomerController@export_wholesale_customers');
    Route::get('api/export//customers/officesale','CustomerController@export_officesale_customers');
    //end customer


    //start the category route
    Route::post('/category/add', 'CategoryController@store');
    Route::get('list/category', 'CategoryController@index');
    Route::get('selected/category/{id}', 'CategoryController@selected');
    Route::get('unselected/category/{id}', 'CategoryController@unselected');
    Route::get('active/category/{id}', 'CategoryController@active');
    Route::get('deActive/category/{id}', 'CategoryController@deActive');
    Route::get('search/category/{search}', 'CategoryController@search');
    Route::get('edit/category/{id}', 'CategoryController@edit');
    Route::post('update/category/{id}', 'CategoryController@update');


    //depended route
    Route::get('/category/wise/subCategory/{id}', 'CategoryController@categoryWiseSubCategory');
    Route::get('/subCategory/wise/subSubCategory/{id}', 'SubCategoryController@subCategoryWiseSubCategory');
    Route::get('/attribute/wise/variant/{id}', 'AttributeAndVariantController@attributeWiseVariant');


    //start the sub-category route
    Route::get('list/subCategory', 'SubCategoryController@index');
    Route::post('/subCategory/add', 'SubCategoryController@store');
    Route::get('active/subCategory/{id}', 'SubCategoryController@active');
    Route::get('deActive/subCategory/{id}', 'SubCategoryController@deActive');
    Route::get('search/subCategory/{search}', 'SubCategoryController@search');
    Route::get('edit/subCategory/{id}', 'SubCategoryController@edit');
    Route::post('update/subCategory/{id}', 'SubCategoryController@update');
     //apply discount
    Route::post('api/sub-category/discount/add/{id}', 'SubCategoryController@addDiscount');



    //start the sub-sub category route
    Route::get('/list/subSubCategory', 'SubSubCategoryController@index');
    Route::post('/subSubCategory/add', 'SubSubCategoryController@store');
    Route::get('active/subSubCategory/{id}', 'SubSubCategoryController@active');
    Route::get('deActive/subSubCategory/{id}', 'SubSubCategoryController@deActive');
    Route::get('search/subSubCategory/{search}', 'SubSubCategoryController@search');
    Route::get('edit/subSubCategory/{id}', 'SubSubCategoryController@edit');
    Route::post('update/subSubCategory/{id}', 'SubSubCategoryController@update');
    //apply discount
    Route::post('api/sub-sub-category/discount/add/{id}', 'SubSubCategoryController@addDiscount');


     //start the slider route
    Route::get('/list/slider', 'SliderController@index');
    Route::post('/slider/add', 'SliderController@store');
    Route::get('/get/edit/slider/{id}', 'SliderController@getEditSlider');
    Route::post('/slider/update/{id}', 'SliderController@updateSlider');
    Route::get('active/slider/{id}', 'SliderController@active');
    Route::get('deActive/slider/{id}', 'SliderController@deActive');
    Route::get('delete/slider/{id}', 'SliderController@destroy');


    //start the category slider route
    Route::get('api/category/list/slider', 'SliderController@category_slider_index');
    Route::post('api/category/slider/add', 'SliderController@category_slider_store');
    Route::get('api/category/get/edit/slider/{id}', 'SliderController@get_category_slider_edit');
    Route::post('api/category/slider/update/{id}', 'SliderController@update_category_slider');
    Route::get('api/category/active/slider/{id}', 'SliderController@active_category_slider');
    Route::get('api/category/deActive/slider/{id}', 'SliderController@deActive_category_slider');
    Route::get('api/category/delete/slider/{id}', 'SliderController@destroy_category_slider');

      //start teh attribute route route
    Route::get('/list/attribute', 'AttributeAndVariantController@index');
    Route::post('/attribute/add', 'AttributeAndVariantController@store');
    Route::get('api/attribute/item/{id}', 'AttributeAndVariantController@edit');
    Route::post('api/attribute/update/{id}', 'AttributeAndVariantController@update');
    Route::get('active/attribute/{id}', 'AttributeAndVariantController@active');
    Route::get('deActive/attribute/{id}', 'AttributeAndVariantController@deActive');
    Route::get('delete/attribute/{id}', 'AttributeAndVariantController@destroy');


     //start the variant route route
    Route::get('/list/variant', 'AttributeAndVariantController@variant');
    Route::post('/variant/add', 'AttributeAndVariantController@storeVariant');
    Route::get('/api/get/edit/item/{id}', 'AttributeAndVariantController@getVariantItem');
    Route::post('/api/variant/update/{id}', 'AttributeAndVariantController@updateVariant');
    Route::get('active/variant/{id}', 'AttributeAndVariantController@activeVariant');
    Route::get('deActive/variant/{id}', 'AttributeAndVariantController@deActiveVariant');


    //start the merchant route
    Route::get('/list/supplier', 'SupplierController@index');
    Route::post('supplier/add', 'SupplierController@store');
    Route::get('/active/supplier/{id}', 'SupplierController@active');
    Route::get('/deActive/supplier/{id}', 'SupplierController@deActive');
    Route::get('/edit/supplier/{id}', 'SupplierController@edit');
    Route::post('/update/supplier/{id}', 'SupplierController@update');
    Route::get('api/search/supplier/{data}', 'SupplierController@search_supplier');
    Route::get('/api/suplier/amount/{id}', 'SupplierController@supplierAmountList');
    Route::get('/api/pdf/suplier/amount/{id}', 'SupplierController@pdfSupplierAmount');
    Route::get('/api/pdf/suplier/purchase/{id}', 'SupplierController@pdfSupplierPurchase');


    Route::get('api/supplier/list', 'SupplierController@supplierList');


    Route::get('api/export/supplier', 'SupplierController@export_supplier');



    //start the city route
    Route::get('/list/city', 'CityController@index');
    Route::post('city/add', 'CityController@store');
    Route::get('/active/city/{id}', 'CityController@active');
    Route::get('/deActive/city/{id}', 'CityController@deActive');
    Route::get('/edit/city/{id}', 'CityController@edit');
    Route::get('api/search/city/{data}', 'CityController@search_city');
    Route::post('/update/city/{id}', 'CityController@update');


     //start herer the sub city route
    Route::get('api/list/sub/city','SubCityController@get_sub_city_list');
    Route::post('api/sub/city/add','SubCityController@store_sub_city');
    Route::get('api/active/sub/city/{id}','SubCityController@active_city');
    Route::get('api/deActive/sub/city/{id}','SubCityController@de_active_city');
    Route::get('api/edit/sub/city/{id}','SubCityController@get_edit_item');
    Route::get('api/search/sub/city/{data}','SubCityController@search_sub_city');
    Route::post('api/update/sub/city/{id}','SubCityController@update_sub_city');
    Route::get('api/city/wise/sub/city/{id}','SubCityController@cityWiseSubCity');


    //start the offer route
    Route::post('offer/add', 'OfferController@store');
    Route::get('api/edit/offer/item/get/{id}', 'OfferController@get_edit_offer_item');
    Route::post('api/offer/edit/{id}', 'OfferController@edit_offer_item');
    Route::get('/list/offer', 'OfferController@index');
    Route::get('/active/offer/{id}', 'OfferController@active');
    Route::get('/deActive/offer/{id}', 'OfferController@deActive');
    Route::get('/delete/offer/{id}', 'OfferController@destroy');


    //start the courier route
    Route::get('/list/courier', 'CourierController@index');
    Route::post('courier/add', 'CourierController@store');
    Route::get('/active/courier/{id}', 'CourierController@active');
    Route::get('/deActive/courier/{id}', 'CourierController@deActive');
    Route::get('/edit/courier/{id}', 'CourierController@edit');
    Route::get('api/search/courier/{data}', 'CourierController@search_courier');
    Route::post('/update/courier/{id}', 'CourierController@update');


    //start the comment route
    Route::get('/list/comment', 'CommentController@index');
    Route::post('comment/add', 'CommentController@store');
    Route::get('/active/comment/{id}', 'CommentController@active');
    Route::get('/deActive/comment/{id}', 'CommentController@deActive');
    Route::get('/edit/comment/{id}', 'CommentController@edit');
    Route::post('/update/comment/{id}', 'CommentController@update');
    Route::get('/destroy/comment/{id}', 'CommentController@destroy');



     //start the factory route
     Route::get('api/list/factory', 'FactoryController@index');
     Route::post('api/factory/add', 'FactoryController@store');
     Route::get('api/active/factory/{id}', 'FactoryController@active');
     Route::get('api/deActive/factory/{id}', 'FactoryController@deActive');
     Route::get('api/edit/factory/{id}', 'FactoryController@edit');
     Route::post('api/update/factory/{id}', 'FactoryController@update');


    //start the product route
    Route::get('/list/product', 'ProductController@index');
    Route::post('product/add', 'ProductController@store');
    Route::get('/approved/product/{id}', 'ProductController@approved');
    Route::get('/pending/product/{id}', 'ProductController@pending');
    Route::get('/deny/product/{id}', 'ProductController@deny');
    Route::get('api/copy/product/{id}/{copy_items}','ProductController@copyProduct');
    Route::post('/stock/update/product/{id}', 'ProductController@stockUpdate');
    Route::get('/edit/product/{id}', 'ProductController@edit');
    Route::post('/update/product/basicInformation/{id}', 'ProductController@updateBasicInformation');
    Route::post('/update/product/properties/{id}', 'ProductController@updateProperties');
    Route::post('/update/product/image/{id}', 'ProductController@UpdateProductImage');
    Route::get('/delete/product/image/{id}', 'ProductController@deleteImage');
    Route::get('/destroy/product/{id}', 'ProductController@destroy');
    Route::get('search/product/{search}', 'ProductController@search');
    Route::get('search/single/product/{search}', 'ProductController@searchSingleProduct');
    Route::get('/search/product/with/code/{search}', 'ProductController@searchWithCode')->name('search.product.with.code');

    Route::get('api/get/seggested/product/for/order','ProductController@get_suggested_product');
    Route::get('api/search/seggested/product/for/order/{product_code}','ProductController@search_suggested_product');
    Route::get('api/product/stock', 'ProductController@productStock');
    Route::get('api/get/stock/product/pdf', 'ProductController@stock_report_pdf');
    Route::get('/product/print/barcode/{id}/{how_many}', 'ProductController@printBarcode');
    Route::get('api/search/seggested/product/with/name/code/{data}','ProductController@search_suggested_product_code_name');




    //start the coupon route
    Route::get('api/get/coupon/list', 'CouponController@index');
    Route::post('api/coupon/code/add', 'CouponController@store');
    Route::get('api/coupon/active/{id}', 'CouponController@active');
    Route::get('api/coupon/de-active/{id}', 'CouponController@deActive');
    Route::get('api/get/edit/coupon/{id}', 'CouponController@get_edit_item');
    Route::post('api/coupon/code/update/{id}', 'CouponController@update');
    Route::get('api/coupon/delete/{id}', 'CouponController@destroy');




     //start the purchase route
    Route::get('api/list/purchase', 'PurchaseController@index');
    Route::post('add/purchase', 'PurchaseController@store');
    Route::get('/active/purchase/{id}', 'PurchaseController@active');
    Route::get('/deActive/purchase/{id}', 'PurchaseController@deActive');
    Route::get('/edit/purchase/{id}', 'PurchaseController@edit');
    Route::post('/update/purchase/{id}', 'PurchaseController@update');
    Route::get('/destroy/purchase/{id}', 'PurchaseController@destroy');
    Route::get('details/purchase/{id}', 'PurchaseController@details');
    Route::get('api/purchase/search/data/{data}', 'PurchaseController@search_according_data');
    Route::get('api/purchase/date/wise/filter', 'PurchaseController@according_date_wise');
    Route::post('api/purchase/memo/upload','PurchaseController@uploadFile');



  //start the sale route
    Route::post('/sale/store', 'SaleController@store');
    Route::post('api/get/company/sale/payment', 'SaleController@companySalePayment');
    Route::get('api/company/sale/payment/details/{id}', 'SaleController@companyPayment');
    Route::post('/sale/exchange/store', 'SaleController@exchangeStore');
    Route::get('/api/office/sales/list', 'SaleController@office_sale_index');
    Route::get('/api/company/sales/list', 'SaleController@company_sale_index');
    Route::get('/sale/view/{id}', 'SaleController@show');
    Route::get('/sale/paid/{id}', 'SaleController@paid');
    Route::get('/sale/returned/{id}', 'SaleController@return');
    Route::get('api/company/sale/details/{id}', 'SaleController@CompanySaleDetails');
    // this route for office sale
    Route::get('api/office/sale/search/data/{data}', 'SaleController@office_sale_search_according_data');
    Route::get('api/officeSale/date/wise/filter', 'SaleController@office_sale_search_according_date_wise');
    //this route for company sale
    Route::get('api/company/sale/search/data/{data}', 'SaleController@company_sale_search_according_data');
    Route::get('api/company/sale/date/wise/filter', 'SaleController@company_sale_search_according_date_wise');

   Route::get('api/print/sale/invoice/{id}','OrderController@officeSaleInvoicePrint') ;

   //start the order  route
     Route::post('create/order', 'OrderController@store');
      Route::get('search/customer/with/phone/number/{number}', 'OrderController@searchCustomer');
      Route::get('search/office/sale/customer/{number}', 'OrderController@searchOfficeSaleCustomer');
     Route::post('update/order/{id}', 'OrderController@update');

    Route::get('orders', 'OrderController@index');
    Route::get('order/view/{id}', 'OrderController@orderView');

    Route::get('approved/order/{id}', 'OrderController@approved');
    Route::get('pending/order/{id}', 'OrderController@pending');
    Route::get('delivered/order/{id}', 'OrderController@delivered');
    Route::get('shipment/order/{id}', 'OrderController@shipment');
    Route::get('return/order/{id}', 'OrderController@return');
    Route::get('cancel/order/{id}', 'OrderController@cancel');

    Route::post('order/courier/update/{id}', 'OrderController@OrderCoutierUpdate');
    Route::get('/order/search/{saerch}', 'OrderController@orderSearch');
    Route::get('/order/filter', 'OrderController@OrderFilter');


    Route::get('/order/status/wise', 'OrderController@OrderStatusWise');
    Route::get('/order/search/status/wise/{saerch}', 'OrderController@orderSearchStatusWise');
    Route::get('/order/filter/status/wise', 'OrderController@OrderFilterStatusWise');

    Route::get('api/order/comment', 'OrderController@comment');

    //order bulk action route
    Route::get('order/label/print/{id}', 'OrderController@labelPrint');
    Route::get('order/invoice/print/{id}', 'OrderController@invoicePrint');
    Route::get('export/selected/item/{id}', 'OrderController@exportOrderSelectedItem');

    Route::get('pending/all/order/{id}', 'OrderController@pendingAll');
    Route::get('approved/all/order/{id}', 'OrderController@approvedAll');
    Route::get('shipment/all/order/{id}', 'OrderController@shipmentAll');
    Route::get('delivered/all/order/{id}', 'OrderController@deliveredAll');
    Route::get('cancel/all/order/{id}', 'OrderController@cancellAll');
    Route::get('return/all/order/{id}', 'OrderController@returnAll');

    Route::get('update/commision/reseller/order/{id}', 'OrderController@updateResellerCommison');
    Route::get('order/return/item/{id}', 'OrderController@returnItem');




   //selling offer has start
   Route::get('selling/offer/list','Selling_offerController@getSellingOffer');
   Route::post('selling/offer/add','Selling_offerController@addSellingOffer');
   Route::get('selling/offer/get/{id}','Selling_offerController@findEditSellingOffer');
   Route::post('selling/offer/edit/{id}','Selling_offerController@editSellingOffer');
   Route::get('selling/offer/active/{id}','Selling_offerController@activeSellingOffer');
   Route::get('selling/offer/deactive/{id}','Selling_offerController@deactiveSellingOffer');





    //start the others  route
    Route::get('/others', 'OthersController@others');


    //start the admin route
    Route::get('/single/admin', 'LoginController@admin');
    Route::get('/logout/admin', 'LoginController@logout');
    Route::get('/list/admin', 'AdminController@index');
    Route::post('/add/admin', 'AdminController@store');
    Route::get('/api/role/get/admin/{id}', 'AdminController@getAdminRole');
    Route::post('/api/role/update/admin/{id}', 'AdminController@updateAdminRole');

    Route::get('api/get/admin/permission/list/{id}', 'AdminController@getAdminPermission');
    Route::post('api/assign/admin/permissions/{id}', 'AdminController@assignAdminPermission');


    Route::get('api/search/admin/{data}', 'AdminController@search_admin');
    Route::get('deactive/admin/{id}', 'AdminController@deactive');
    Route::get('active/admin/{id}', 'AdminController@active');
    Route::get('/edit/admin/{id}', 'AdminController@edit');
    Route::post('/update/admin/{id}', 'AdminController@update');
    Route::post('/update/admin/password/{id}', 'AdminController@updatePassword');


    //start the accounts route
    //start credit route
    Route::get('credits', 'AccountController@get_credit');
    Route::post('credit/store', 'AccountController@store_credit');
    Route::get('credit/edit/{id}', 'AccountController@edit_credit');
    Route::post('credit/update/{id}', 'AccountController@update_credit');
    Route::get('credit/destroy/{id}', 'AccountController@destroy_credit');
    Route::get('api/export/credit', 'AccountController@export_credit');

    //credit due route......
    Route::get('api/credit/due', 'CreditDueController@index');
    Route::get('api/due/to/paid/{id}', 'CreditDueController@duePaid');



    //start debit route
    Route::get('debits', 'AccountController@get_debit');
    Route::post('debit/store', 'AccountController@store_debit');
    Route::get('debit/edit/{id}', 'AccountController@edit_debit');
    Route::get('api/export/debit', 'AccountController@export_debit');
    Route::post('debit/update/{id}', 'AccountController@update_debit');
    Route::get('debit/destroy/{id}', 'AccountController@destroy_debit');
    Route::get('api/account/purpose', 'AccountController@accountPurpose');
    Route::get('api/employee/list', 'AccountController@employeeList');



    //start company route
    Route::get('company', 'CompanyController@index');
    Route::post('company/store', 'CompanyController@store');
    Route::get('company/edit/{id}', 'CompanyController@edit');
    Route::post('company/update/{id}', 'CompanyController@update');


   //start the report route
   Route::get('api/order/report', 'ReportController@orderReport');
   Route::get('api/sale/report/office', 'ReportController@officeSaleReport');
   Route::get('api/get/office/sale/pdf/{start_date}/{end_date}', 'ReportController@office_sale_report_pdf');
   Route::get('api/get/sale/order/pdf/{start_date}/{end_date}', 'ReportController@order_sale_report_pdf');
   Route::get('api/get/purchase/pdf/{start_date}/{end_date}', 'ReportController@purchase_report_pdf');
   Route::get('supplier/report', 'ReportController@supplierReport');
   Route::get('account/report', 'ReportController@accountReport');
   Route::get('purchase/report', 'ReportController@purchaseReport');
   Route::get('profite/report', 'ReportController@profitReport');
   Route::get('sale/profite/report', 'ReportController@saleProfite');
   Route::get('order/profite/report', 'ReportController@orderProfite');




  //start the admin reseller route
  Route::resource('admin/reseller','ResellerController');
  Route::post('/reseller/update/{id}','ResellerController@updateRseller');
  Route::get('/admin/to/reseller/{id}','ResellerController@accountAccess');
  Route::get('/api/active/reseller/{id}','ResellerController@active');
  Route::get('/api/deactive/reseller/{id}','ResellerController@deActive');
  Route::get('api/unpaid/payment/','ResellerController@unpaidPayment');
  Route::get('api/paid/payment/','ResellerController@paidPayment');

  Route::get('/api/reseller/to/paid','ResellerController@toPaid');

  Route::get('api/payment/invoice','ResellerController@paymentInvoice');
  Route::get('api/details/payment/invoice/{id}','ResellerController@paymentInvoiceDetails');




  // Route::resource('/reseller','ResellerController');

  Route::get('api/reseller/list','ResellerController@getReseller');
  Route::get('api/reseller/remove/{id}','ResellerController@destroy');
  Route::post('api/reseller/add','ResellerController@addReseller');
  Route::get('api/reseller/edit/{id}','ResellerController@get_edit_Rseller');
  Route::post('api/reseller/update/{id}','ResellerController@updateRseller');
  Route::get('api/admin/to/reseller/{id}','ResellerController@accountAccess');
  Route::get('api/search/reseller/{data}','ResellerController@reseller_search');
  Route::get('api/export/resellers','ResellerController@export_reseller');


  //start role and permission route
 Route::post('api/role/store','RoleController@store');
 Route::get('api/roles','RoleController@index');
 Route::get('api/permissions/edit/role/{id}','RoleController@editRolePermissons');
 Route::post('api/permissions/update/role/{id}','RoleController@updateRolePermissons');


 Route::post('api/fond/transfer','FondTransferController@store');
 Route::get('api/fond/transfer','FondTransferController@index');



   //start the loan route
    Route::get('api/loan','LoanController@index');
    Route::post('api/loand/store','LoanController@store');
    Route::get('api/loaners','LoanController@loaners');
    Route::get('api/loaners/details/{id}','LoanController@loanersdetails');
    Route::get('api/loan/store/{id}','LoanController@storeloan');
    Route::get('api/download/all/loan/pdf','LoanController@download_all_record');
    Route::get('api/loan/history/download/pdf/{id}','LoanController@download_loan_history');
    Route::get('api/loand/paid/history/download/pdf/{id}','LoanController@download_loan_paid_history');


    //company assets route is here
    Route::get('api/company/assets','AssetsController@get_assets');
    Route::post('api/company/assets/add','AssetsController@store_assets');
    Route::get('api/company/assets/edit/{id}','AssetsController@get_asset_item');
    Route::post('api/company/assets/update/{id}','AssetsController@update_asset_item');
    Route::get('api/company/assets/delete/{id}','AssetsController@delete_asset_item');
    Route::get('api/download/assets/pdf','AssetsController@download_assets');


     //company ivestment route is here
    Route::get('api/company/investor','InvestmentController@get_ivestors');
    Route::post('api/company/investor/add','InvestmentController@store');
    Route::get('api/company/investor/details/{id}','InvestmentController@get_ivestor_details');
    Route::get('api/add/more/invest/{id}','InvestmentController@add_more_invest');
    Route::get('api/company/investor/list','InvestmentController@investor_list');
    Route::get('api/download/all/investment/pdf','InvestmentController@download_investors');
    Route::get('api/investor/paid/history/download/pdf/{id}','InvestmentController@download_profit_paid');
    Route::get('api/invest/history/download/pdf/{id}','InvestmentController@download_investor_record');


   //print house route is here
    Route::get('api/print/houses','PrintHouseController@index');
    Route::post('api/print/house/add','PrintHouseController@store');
    Route::get('api/print/house/details/{id}','PrintHouseController@get_print_house_details');
    Route::post('api/add/product/for/print','PrintHouseController@add_product_for_print');
    Route::get('api/print/house/list','PrintHouseController@print_house_list');
    Route::get('api/get/print/details','PrintHouseController@print_details');
    Route::get('api/get/receive/product/details','PrintHouseController@recieve_print_details');
    Route::get('api/get/printed/products/{id}','PrintHouseController@printed_product_list');
    Route::post('api/receive/printed/product/{id}','PrintHouseController@receive_printed_products');


    //company bill statements route is here
    Route::get('api/bill/statement/list','BillStatementController@bill_list');
    Route::post('api/bll/statement/add','BillStatementController@store');
    Route::get('api/bll/per/month/add','BillStatementController@store_bill_per_month');
    Route::get('api/bll/statement/details/{id}','BillStatementController@bill_statement_details');

    //account balance
    Route::get('api/balance/list','BillStatementController@balance');
    Route::post('api/balance/add','BillStatementController@store_balance');


    // sale campaign route is start from here
    Route::get('api/sale/campaign/list','SaleCampaignController@get_sale_campaign_list');
    Route::post('api/sale/campaign/add','SaleCampaignController@store_sale_campaign');
    Route::get('api/campaign/sale/edit/item/{id}','SaleCampaignController@get_edit_campaign');
    Route::post('api/sale/campaign/edit/{id}','SaleCampaignController@update_sale_campaign');
    Route::get('api/sale/campaign/active/{id}','SaleCampaignController@active_sale_campaign');
    Route::get('api/sale/campaign/deActive/{id}','SaleCampaignController@de_active_sale_campaign');
    Route::get('api/sale/campaign/remove/{id}','SaleCampaignController@destroy_sale_campaign');
    //banner route is here
    Route::get('api/get/banner','SaleCampaignController@get_banner');
    Route::post('api/edit/banner/{id}','SaleCampaignController@update_banner');



    // general setting route is start from here
    Route::get('api/get/site/info','GeneralSettingController@get_site_info');
    Route::post('api/edit/site/info/{id}','GeneralSettingController@edit_site_info');

    //footer setting route is start form here
    Route::get('api/get/site/footer/info','FooterSettingController@get_footer_info');
    Route::post('api/edit/site/footer/info/{id}','FooterSettingController@edit_footer_info');

    //theme setting route is start form here
    Route::get('api/get/site/theme/info','ThemeSettingController@get_theme_info');
    Route::post('api/edit/site/theme/info/{id}','ThemeSettingController@edit_theme_info');


  //page setting route is start form here
  Route::get('api/get/about/contact','PageInfoController@get_about_and_contact_info');
  Route::post('api/edit/about/contact/info/{id}','PageInfoController@edit_about_and_contact_info');

  Route::get('api/get/shipment/order/return','PageInfoController@get_order_shipment_return_info');
  Route::post('api/edit/shipment/return/order/{id}','PageInfoController@edit_order_shipment_return_info');


  Route::get('api/get/occasion/campaign','SaleCampaignController@get_occasional_campaign');
  Route::post('api/edit/occasion/campaign/{id}','SaleCampaignController@edit_occasional_campaign');


  Route::get('api/get/seasional/campaign','SaleCampaignController@get_seasional_campaign');
  Route::post('api/edit/seasional/campaign/{id}','SaleCampaignController@edit_seasional_campaign');

  Route::get('api/get/buy/one/get/one/offer','SaleCampaignController@get_buy_one_get_one_campaign');
  Route::post('api/edit/buy/one/get/one/offer/{id}','SaleCampaignController@edit_buy_one_get_one_campaign');



    //showroom routes
    Route::get('api/showroom/list','ShowroomController@index');
    Route::post('api/showroom/add','ShowroomController@addShowroom');
    Route::get('api/showroom/edit/item/{id}','ShowroomController@showroomItem');
    Route::post('api/showroom/update/{id}','ShowroomController@updateShowroom');
    //showroom manager routes
    Route::get('api/showroom/manager/list','ShowroomController@managers');
    Route::post('api/showroom/manager/add','ShowroomController@addManager');
    Route::get('api/showroom/manager/edit/item/{id}','ShowroomController@getManager');
    Route::get('api/showroom/manager/delete/{id}','ShowroomController@removeManager');
    Route::post('api/showroom/manager/update/{id}','ShowroomController@updateManager');
    Route::get('api/showroom/transaction/list','ShowroomController@showroomTransactions');
    Route::get('api/get/product/transfer/details/{id}','ShowroomController@transactionDetails');
    Route::post('api/transfer/product/into/showroom','ShowroomController@transferProducts');


    Route::post('api/apply/membership','CustomerController@addMemberShip');
    Route::get('api/get/membership/list','CustomerController@membersipList');
    Route::get('api/remove/membership/{id}','CustomerController@removeMemberShip');

    //balane history
    Route::get('api/balance/insert/admin/records','DashboardController@BalanceInsertHistory');
    Route::get('api/balance/insert/admin/details/{id}','DashboardController@BalanceInsertHistoryDetails');

    //order note routes
    Route::get('api/add/order/note','OrderController@StoreOrderNote');
    Route::get('api/get/order/note/list/{id}','OrderController@OrderNoteList');

});

Route::post('/admin/login', 'Admin\LoginController@login');

Route::get('check/session/admin', 'Admin\LoginController@sessionCheck');

Route::get('/resller', 'Reseller\HomeController@home');


//social login
Route::get('auth/redirect/{provider}', 'Admin\SocialAuthController@redirect');
Route::get('{provider}/callback', 'Admin\SocialAuthController@callback');

//opt verify
Route::post('send/otp', 'Frontend\HomeController@SendOtp');
Route::get('/verify/otp/code', 'Frontend\HomeController@verifyCodeOtp');


 Route::get('api/city/wise/sub/city/{id}','Admin\SubCityController@cityWiseSubCity');


// laravel and vue mix routing
// when any one type backend / anything as url
// then laravel router transfer  to vue-routing

Route::get('/backend/{any}', function () {
     return view('admin.master');
})->where('any', '^(?!api\/)[\/\w\.\,-]*');



// laravel and vue mix routing
// when any one type public / anything as url
// then laravel router transfer  to vue-routing

Route::get('/{any}', function () {

    // $categories = Category::orderBy('id', 'DESC')->where(['status' => 1, 'is_selected' => 1])->with(['subCategory.SubSubCategory'])->get();
    // $sliders = Slider::orderBy('id', 'DESC')->where('status', 1)->get();
    return view('frontend.master');

})->where('any', '^(?!api\/)[\/\w\.\,-]*');


Route::get('/storage/{filename}', function ($filename)
{
    $path = storage_path('public/' . $filename);

   // return $path;

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});