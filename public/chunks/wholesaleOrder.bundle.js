(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1257:function(t,e,s){"use strict";s.r(e);var r=s(10),a=(s(0),{components:{Index:r.default},created:function(){var t=this;setTimeout((function(){t.ordersList()}),500)},data:function(){return{orders:{},loading:!0,item:"10",courier:{order_id:"",courier_id:"",memo_no:"",order_index:""},couriers:"",search:"",start_date:"",end_date:"",options:{format:"YYYY-MM-DD",useCurrent:!1},status:"all",type:3,page:1,selected:!1,select_order_id:[],bulk_status:"all",heading:"All Order"}},methods:{ordersList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/orders?page="+e,{params:{status:this.status,item:this.item,type:this.type}}).then((function(e){console.log(e),t.$Progress.finish(),"SUCCESS"==e.data.status?(t.orders=e.data.orders,t.loading=!1,t.page=t.page+1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(e){t.$Progress.finish(),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status&&(t.couriers=e.data.couriers)}))},approved:function(t,e){var s=this;this.$Progress.start(),axios.get("/approved/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=3):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},cancel:function(t,e){var s=this;this.$Progress.start(),axios.get("/cancel/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=6):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},returnOrder:function(t,e){var s=this;this.$Progress.start(),axios.get("/return/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=7):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},OrderCourier:function(){var t=this;this.$Progress.start();var e=this.courier.order_index;axios.post("/order/courier/update/"+this.courier.order_id,{courier_id:this.courier.courier_id,memo_no:this.courier.memo_no}).then((function(s){t.$Progress.finish(),"SUCCESS"==s.data.status&&(t.$modal.hide("example"),console.log(s.data.courier),s.data.order.courier_id&&(t.orders.data[e].courier_id=s.data.order.courier_id),s.data.order.memo_no&&(t.orders.data[e].memo_no=s.data.order.memo_no),s.data.courier&&(t.orders.data[e].courier=s.data.courier),t.courier.courier_id="",t.courier.memo_no="",t.$toasted.show(s.data.message,{type:"success",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),alert("some thing want wrong")}))},delivered:function(t,e){var s=this;this.$Progress.start(),axios.get("/delivered/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=5):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},shipment:function(t,e){var s=this;this.orders.data[e].courier_id?this.orders.data[e].memo_no?(this.$Progress.start(),axios.get("/shipment/order/"+t).then((function(t){console.log(t),"SUCCESS"==t.data.status&&(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=4,s.$Progress.finish())}))):alert("Must Be Need Memo Number"):alert("please select a courier")},pending:function(t,e){var s=this;this.$Progress.start(),axios.get("/pending/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=2):(s.$Progress.finish(),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},orderSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.length>1?(this.loading=!0,axios.get("/order/search/"+this.search+"?page="+e).then((function(e){"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t),alert("some thing want wrong")}))):(this.loading=!1,this.ordersList())},filterOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.loading=!0,axios.get("/order/filter?page="+e,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item,status:this.status}}).then((function(e){t.$Progress.finish(),t.loading=!1,"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t)}))},resetAll:function(){this.$Progress.start(),this.start_date="",this.end_date="",this.search="",this.status="all",this.type="all",this.ordersList(),this.$Progress.finish()},selectAll:function(){1==this.selected?this.selected=!1:this.selected=!0;for(var t=document.getElementsByClassName("select-all"),e=0;e<t.length;e++)1==this.selected?t[e].checked=!0:t[e].checked=!1;if(1==this.selected)for(var s=0;s<this.orders.data.length;s++)this.select_order_id.push(this.orders.data[s].id);else this.select_order_id=[]},selectBulkAction:function(){if(this.select_order_id.length<=0)return this.bulk_status="all",void alert("please select atleast one item");if(confirm("Are you sure ? use this bulick action")){if("print"==this.bulk_status)return void window.print();axios.get("orders/bulk/action",{status:this.bulk_status,order_id:this.select_order_id}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}else console.log("no");console.log(this.bulk_status)},courierModal:function(t,e){this.others(),this.courier.order_id=t.id,this.courier.order_index=e,t.courier_id&&(this.courier.courier_id=t.courier_id),this.$modal.show("example")}},watch:{status:function(t){this.heading=1==t?"New Orders":2==t?"Pending Orders":3==t?"Approved Orders":4==t?"Shipment Orders":5==t?"Delivered Orders":7==t?"Return Orders":6==t?"Cancel Orders":"All Orders"},start_date:function(t){t.length>1&&this.filterOrder()},end_date:function(t){t.length>1&&this.filterOrder()}}}),o=(s(725),s(1)),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"addWholeSale"}}},[s("i",{staticClass:"fa fa-plus"})]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"NewOrder"}}},[t._v("New")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"PendingOrder"}}},[t._v("Pending")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"ApprovedOrder"}}},[t._v("Approved")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"ShipmentOrder"}}},[t._v("Shipment")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"DeliveredOrder"}}},[t._v("Delivered")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"ReturnOrder"}}},[t._v("Return")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"CancelOrder"}}},[t._v("Cancel")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success active",attrs:{to:{name:"WholeSaleOrder"}}},[t._v("whole sale")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"order"}}},[t._v("All")])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-11 col-md-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-lg-offset-4 orders-heading"},[s("h3",{staticClass:"box-title"},[t._v(t._s(t.heading))])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All type")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Onely Admin")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Only Customer")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Whole Sale")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Only Reseller")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("all")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("new")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("approved")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("shipment")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("Delivired")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Retrun")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Cancel")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Invoice,customer_phone"},domProps:{value:t.search},on:{keyup:t.orderSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.filterOrder(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"start-date",config:t.options},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-5",staticStyle:{"margin-left":"-20px"}},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"end-date",config:t.options},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-2"})])])]),t._v(" "),s("div",{staticClass:"col-lg-1"},[s("button",{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-left":"45px"},attrs:{type:"button"},on:{click:t.resetAll}},[s("i",{staticClass:"fa fa-refresh"})])]),t._v(" "),s("div",{staticClass:"col-lg-1"},[t.start_date.length>0?s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.filterOrder]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])]):s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("input",{attrs:{type:"checkbox"},on:{click:t.selectAll}})]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Host Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("C_name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("C_phone")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("C_address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Total(BDT)")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Create_by")]),t._v(" "),s("th",{staticStyle:{width:"2%"},attrs:{scope:"col"}},[t._v("Order_place")]),t._v(" "),s("th",[t._v("Order_date")]),t._v(" "),s("th",[t._v("Action")]),t._v(" "),s("th",[t._v("Courier")])])]),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.orders.data,(function(e,r){return s("tr",{key:r},[s("td",{staticStyle:{width:"1%"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.select_order_id,expression:"select_order_id"}],staticClass:"select-all",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.select_order_id)?t._i(t.select_order_id,e.id)>-1:t.select_order_id},on:{change:function(s){var r=t.select_order_id,a=s.target,o=!!a.checked;if(Array.isArray(r)){var n=e.id,i=t._i(r,n);a.checked?i<0&&(t.select_order_id=r.concat([n])):i>-1&&(t.select_order_id=r.slice(0,i).concat(r.slice(i+1)))}else t.select_order_id=o}}})]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                         "+t._s(e.host_name)+"\n                      ")]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                         "+t._s(e.customer_name)+"\n                      ")]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                        "+t._s(e.customer_phone)+"\n                      ")]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                        "+t._s(e.customer_address?e.customer_address:"null")+"\n                      ")]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.invoice_no))]),t._v(" "),s("td",{staticClass:"two-percent"},[s("strong",[t._v("\n                          Total: "+t._s(parseInt(e.total)-parseInt(e.discount)+parseInt(e.shipping_cost))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          P: "+t._s(parseInt(e.paid))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          D: "+t._s(parseInt(e.total)-(parseInt(e.discount)+parseInt(e.paid))+parseInt(e.shipping_cost))+"\n\n                        ")])]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.order_type?s("p",[t._v("customer")]):t._e(),t._v(" "),2==e.order_type?s("p",[t._v("\n                          Admin ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),3==e.order_type?s("p",[t._v("\n                          Whole sale ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),4==e.order_type?s("p",[t._v("\n                          Reseller\n                          ")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.status?s("span",{staticClass:"badge"},[t._v("New")]):t._e(),t._v(" "),2==e.status?s("span",{staticClass:"badge"},[t._v("Pending")]):t._e(),t._v(" "),3==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==e.status?s("span",{staticClass:"badge badge-warning"},[t._v("Delivered")]):t._e(),t._v(" "),6==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.created_at))]),t._v(" "),s("td",[2==e.status||1==e.status||6==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.approved(e,r)}}},[t._v("\n                          Approved\n                        ")]):t._e(),t._v(" "),1==e.status||7==e.status||2==e.status?s("button",{staticClass:"btn btn-sm btn-info action-btn",on:{click:function(s){return t.pending(e,r)}}},[t._v("\n                          Pending\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.delivered(e,r)}}},[t._v("\n                          Deliverd\n                        ")]):t._e(),t._v(" "),3==e.status?s("button",{staticClass:"btn btn-sm btn-primary action-btn",on:{click:function(s){return t.shipment(e.id,r)}}},[t._v("\n                          Shipment\n                        ")]):t._e(),t._v(" "),1==e.status||2==e.status||3==e.status?s("button",{staticClass:"btn btn-sm btn-danger action-btn",on:{click:function(s){return t.cancel(e,r)}}},[t._v("\n                          Cancel\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-warning action-btn",on:{click:function(s){return t.returnOrder(e,r)}}},[t._v("\n                          Return\n                        ")]):t._e(),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-primary action-btn",staticStyle:{color:"#fff"},attrs:{to:{name:"viewOrder",params:{id:e.id}}}},[t._v("View")])],1),t._v(" "),s("td",{staticStyle:{width:"1%"}},[e.courier_id?s("small",[t._v(t._s(e.courier.name))]):t._e(),t._v(" "),s("span",{staticClass:"badge",attrs:{if:"order.memo_no"}},[t._v(t._s(e.memo_no))]),t._v(" "),3==e.status||4==e.status?s("i",{staticClass:"fa fa-edit",on:{click:function(s){return t.courierModal(e,r)}}}):t._e()])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[t.start_date.length>0?s("pagination",{attrs:{data:t.orders},on:{"pagination-change-page":t.filterOrder}}):s("pagination",{attrs:{data:t.orders},on:{"pagination-change-page":t.ordersList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing\n                      "),s("strong",[t._v(t._s(t.orders.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.orders.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.orders.total))]),t._v(" entries\n                    ")])])])])])])])])])]),t._v(" "),s("modal",{attrs:{name:"example",width:300,height:200}},[s("div",{staticClass:"card",staticStyle:{padding:"10px"}},[s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.OrderCourier(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Courier")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.courier.courier_id,expression:"courier.courier_id"}],staticClass:"form-control",attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.courier,"courier_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select Courier")]),t._v(" "),t._l(t.couriers,(function(e){return s("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])}))],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Memo_number")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.courier.memo_no,expression:"courier.memo_no"}],staticClass:"form-control",attrs:{placeholder:"Enter memo number"},domProps:{value:t.courier.memo_no},on:{input:function(e){e.target.composing||t.$set(t.courier,"memo_no",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group text-center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("submit")])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("All Order")])])}],!1,null,null,null);e.default=n.exports},193:function(t,e,s){var r=s(726);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(5)(r,a);r.locals&&(t.exports=r.locals)},725:function(t,e,s){"use strict";var r=s(193);s.n(r).a},726:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.orders-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-bottom: 2px solid #000;\r\n  margin-bottom: 10px;\n}\n.box{\r\n  width:100%;\r\n  overflow-x: scroll;\n}\r\n\r\n",""])}}]);