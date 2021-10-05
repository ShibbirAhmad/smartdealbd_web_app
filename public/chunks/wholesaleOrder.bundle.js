(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1266:function(t,e,s){"use strict";s.r(e);var r={created:function(){var t=this;setTimeout((function(){t.ordersList()}),500)},data:function(){return{orders:{},loading:!0,item:"10",courier:{order_id:"",courier_id:"",memo_no:"",order_index:""},couriers:"",search:"",start_date:"",end_date:"",options:{format:"YYYY-MM-DD",useCurrent:!1},status:"all",type:3,page:1,selected:!1,select_order_id:[],bulk_status:"all",order_count:"",heading:"Wholesale Order",thumbnail_img_base_link:this.$store.state.image_thumbnail_link,order_note_list:"",order_note:"",order_id:""}},methods:{getOrderStatistic:function(){var t=this;axios.get("/api/get/order/statistic").then((function(e){t.order_count=e.data.order_count}))},dateFormatter:function(t){return new Date(t).toLocaleTimeString()},comment:function(t){this.$modal.show("orderNote"),this.order_id=t,this.orderNoteList()},orderNoteList:function(){var t=this;axios.get("/api/get/order/note/list/"+this.order_id).then((function(e){"OK"==e.data.status&&(t.order_note_list=e.data.notes)}))},addOrderComment:function(){var t=this;axios.get("/api/add/order/note",{params:{order_id:this.order_id,note:this.order_note}}).then((function(e){"OK"==e.data.status&&(t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3}),t.orderNoteList())}))},orderAction:function(t){console.log(t),document.getElementById("order_action_"+t).classList.toggle("toggle_order_action")},ordersList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/orders?page="+e,{params:{status:this.status,item:this.item,type:this.type}}).then((function(e){"SUCCESS"==e.data.status?(t.orders=e.data.orders,t.loading=!1,t.page=t.page+1,t.order_count=e.data.order_count,t.$Progress.finish()):t.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(e){t.$Progress.finish(),t.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},others:function(){var t=this;axios.get("/others").then((function(e){"SUCCESS"==e.data.status&&(t.couriers=e.data.couriers)}))},approved:function(t,e){var s=this;this.$Progress.start(),axios.get("/approved/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=3,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},cancel:function(t,e){var s=this;this.$Progress.start(),axios.get("/cancel/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=6,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},returnOrder:function(t,e){var s=this;this.$Progress.start(),axios.get("/return/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=7,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},OrderCourier:function(){var t=this;this.$Progress.start();var e=this.courier.order_index;axios.post("/order/courier/update/"+this.courier.order_id,{courier_id:this.courier.courier_id,memo_no:this.courier.memo_no}).then((function(s){t.$Progress.finish(),"SUCCESS"==s.data.status&&(t.$modal.hide("example"),console.log(s.data.courier),s.data.order.courier_id&&(t.orders.data[e].courier_id=s.data.order.courier_id),s.data.order.memo_no&&(t.orders.data[e].memo_no=s.data.order.memo_no),s.data.courier&&(t.orders.data[e].courier=s.data.courier),t.courier.courier_id="",t.courier.memo_no="",t.$toasted.show(s.data.message,{type:"success",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),alert("something went wrong")}))},delivered:function(t,e){var s=this;this.$Progress.start(),axios.get("/delivered/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=5,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},shipment:function(t,e){var s=this;this.orders.data[e].courier_id?this.orders.data[e].memo_no?(this.$Progress.start(),axios.get("/shipment/order/"+t).then((function(t){console.log(t),"SUCCESS"==t.data.status&&(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=4,s.getOrderStatistic(),s.$Progress.finish())}))):alert("Must Be Need Memo Number"):alert("please select a courier")},pending:function(t,e){var s=this;this.$Progress.start(),axios.get("/pending/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=2,s.getOrderStatistic()):(s.$Progress.finish(),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},orderSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.length>1?(this.loading=!0,axios.get("/order/search/"+this.search+"?page="+e).then((function(e){"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t),alert("something went wrong")}))):(this.loading=!1,this.ordersList())},filterOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.loading=!0,axios.get("/order/filter?page="+e,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item,status:this.status}}).then((function(e){t.$Progress.finish(),t.loading=!1,"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t)}))},resetAll:function(){this.$Progress.start(),this.start_date="",this.end_date="",this.search="",this.status="all",this.type="all",this.ordersList(),this.$Progress.finish()},selectAll:function(){1==this.selected?this.selected=!1:this.selected=!0;for(var t=document.getElementsByClassName("select-all"),e=0;e<t.length;e++)1==this.selected?t[e].checked=!0:t[e].checked=!1;if(1==this.selected)for(var s=0;s<this.orders.data.length;s++)this.select_order_id.push(this.orders.data[s].id);else this.select_order_id=[]},selectBulkAction:function(){if(this.select_order_id.length<=0)return this.bulk_status="all",void alert("please select atleast one item");if(confirm("Are you sure ? use this bulick action")){if("print"==this.bulk_status)return void window.print();axios.get("orders/bulk/action",{status:this.bulk_status,order_id:this.select_order_id}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}else console.log("no");console.log(this.bulk_status)},courierModal:function(t,e){this.others(),this.courier.order_id=t.id,this.courier.order_index=e,t.courier_id&&(this.courier.courier_id=t.courier_id),this.$modal.show("example")}},watch:{status:function(t){this.heading=1==t?"New Orders":2==t?"Pending Orders":3==t?"Approved Orders":4==t?"Shipment Orders":5==t?"Delivered Orders":7==t?"Return Orders":6==t?"Cancel Orders":"All Orders"},start_date:function(t){t.length>1&&this.filterOrder()},end_date:function(t){t.length>1&&this.filterOrder()}}},o=(s(728),s(1)),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("div",{staticClass:"order_statistic"},[s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"NewOrder"}}},[s("h2",[t._v(" "+t._s(t.order_count.new_order)+" ")]),t._v(" "),s("p",[t._v(" New ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"PendingOrder"}}},[s("h2",[t._v(" "+t._s(t.order_count.pending_order)+" ")]),t._v(" "),s("p",[t._v("Pending")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ApprovedOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.approved_order)+" ")]),t._v(" "),s("p",[t._v(" Ready To Ship ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ShipmentOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.shipment_order)+" ")]),t._v(" "),s("p",[t._v(" Shipment  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"DeliveredOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.delivered_order)+" ")]),t._v(" "),s("p",[t._v(" Delivered  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ReturnOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.return_order)+" ")]),t._v(" "),s("p",[t._v(" Return  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"CancelOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.cancel_order)+" ")]),t._v(" "),s("p",[t._v(" Cancel  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"order"}}},[s("h2",[t._v("  "+t._s(t.order_count.total)+" ")]),t._v(" "),s("p",[t._v(" All  ")])])],1)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-11 col-md-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border "},[s("h3",{staticClass:"box-title orders-heading"},[t._v(t._s(t.heading))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All type")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Onely Admin")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Only Customer")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Approved")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Shipment")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("Delivired")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Retrun")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Cancel")])])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Invoice, customer phone"},domProps:{value:t.search},on:{keyup:t.orderSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.bulkActionType,expression:"bulkActionType"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.bulkActionType=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("\n                        Select Action\n                      ")]),t._v(" "),s("option",{attrs:{value:"LABEL PRINT"}},[t._v("Label Print")]),t._v(" "),s("option",{attrs:{value:"INVOICE PRINT"}},[t._v("Invoice Print")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[t.start_date.length>0?s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.filterOrder]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),s("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),s("option",{attrs:{value:"50"}},[t._v("50")])]):s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-bordered table-striped table-hover "},[s("thead",[s("tr",[s("th",{attrs:{width:"5%"}},[s("input",{attrs:{type:"checkbox"},on:{click:t.selectAll}})]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Customer")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Address")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Product")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Total")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Created")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Order_place")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Order_date")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Action")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Courier")])])]),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.orders.data,(function(e,r){return s("tr",{key:r},[s("td",{staticStyle:{width:"1%"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.select_order_id,expression:"select_order_id"}],staticClass:"select-all",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.select_order_id)?t._i(t.select_order_id,e.id)>-1:t.select_order_id},on:{change:function(s){var r=t.select_order_id,o=s.target,a=!!o.checked;if(Array.isArray(r)){var i=e.id,n=t._i(r,i);o.checked?n<0&&(t.select_order_id=r.concat([i])):n>-1&&(t.select_order_id=r.slice(0,n).concat(r.slice(n+1)))}else t.select_order_id=a}}})]),t._v(" "),s("td",[s("p",[s("strong",[t._v(" "+t._s(e.customer_name)+" ")])]),t._v(" "),s("p",[s("strong",[t._v(t._s(e.customer_phone)+"  ")])])]),t._v(" "),s("td",[t._v("\n                        "+t._s(e.customer_address?e.customer_address:"null")+"\n                      ")]),t._v(" "),s("td",[e.order_item.length>0?s("div",[s("img",{attrs:{width:"50px",height:"50px",src:t.thumbnail_img_base_link+e.order_item[0].product.thumbnail_img}}),t._v(" "),s("p",[t._v("  "+t._s(e.order_item[0].product.name.substring(0,25).concat("...")+"-"+e.order_item[0].product.product_code)+"  ")])]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.invoice_no))]),t._v(" "),s("td",{staticClass:"two-percent"},[s("strong",[t._v("\n                          Total: "+t._s(parseInt(e.total)-parseInt(e.discount)+parseInt(e.shipping_cost))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          Paid: "+t._s(parseInt(e.paid))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          Due: "+t._s(parseInt(e.total)-(parseInt(e.discount)+parseInt(e.paid))+parseInt(e.shipping_cost))+"\n\n                        ")])]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.order_type?s("p",[t._v("customer")]):t._e(),t._v(" "),2==e.order_type?s("p",[t._v("\n                          Admin ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),3==e.order_type?s("p",[t._v("\n                          Whole sale ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),4==e.order_type?s("p",[t._v("\n                          Reseller\n                          ")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.status?s("span",{staticClass:"badge"},[t._v("New")]):t._e(),t._v(" "),2==e.status?s("span",{staticClass:"badge"},[t._v("Pending")]):t._e(),t._v(" "),3==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==e.status?s("span",{staticClass:"badge badge-warning"},[t._v("Delivered")]):t._e(),t._v(" "),6==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.created_at))]),t._v(" "),s("td",[2==e.status||1==e.status||6==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.approved(e,r)}}},[t._v("\n                          Approved\n                        ")]):t._e(),t._v(" "),1==e.status||7==e.status||2==e.status?s("button",{staticClass:"btn btn-sm btn-info action-btn",on:{click:function(s){return t.pending(e,r)}}},[t._v("\n                          Pending\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.delivered(e,r)}}},[t._v("\n                          Deliverd\n                        ")]):t._e(),t._v(" "),3==e.status?s("button",{staticClass:"btn btn-sm btn-primary action-btn",on:{click:function(s){return t.shipment(e.id,r)}}},[t._v("\n                          Shipment\n                        ")]):t._e(),t._v(" "),1==e.status||2==e.status||3==e.status?s("button",{staticClass:"btn btn-sm btn-danger action-btn",on:{click:function(s){return t.cancel(e,r)}}},[t._v("\n                          Cancel\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-warning action-btn",on:{click:function(s){return t.returnOrder(e,r)}}},[t._v("\n                          Return\n                        ")]):t._e(),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-primary action-btn",staticStyle:{color:"#fff"},attrs:{to:{name:"viewOrder",params:{id:e.id}}}},[t._v("View")])],1),t._v(" "),s("td",{staticStyle:{width:"1%"}},[e.courier_id?s("small",[t._v(t._s(e.courier.name))]):t._e(),t._v(" "),s("span",{staticClass:"badge",attrs:{if:"order.memo_no"}},[t._v(t._s(e.memo_no))]),t._v(" "),3==e.status||4==e.status?s("i",{staticClass:"fa fa-edit",on:{click:function(s){return t.courierModal(e,r)}}}):t._e()])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[t.start_date.length>0?s("pagination",{attrs:{data:t.orders},on:{"pagination-change-page":t.filterOrder}}):s("pagination",{attrs:{data:t.orders},on:{"pagination-change-page":t.ordersList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing\n                      "),s("strong",[t._v(t._s(t.orders.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.orders.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.orders.total))]),t._v(" entries\n                    ")])])])])])])])])])]),t._v(" "),s("modal",{attrs:{name:"example",width:300,height:200}},[s("div",{staticClass:"card",staticStyle:{padding:"10px"}},[s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.OrderCourier(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Courier")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.courier.courier_id,expression:"courier.courier_id"}],staticClass:"form-control",attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.courier,"courier_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select Courier")]),t._v(" "),t._l(t.couriers,(function(e){return s("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n              ")])}))],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Memo_number")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.courier.memo_no,expression:"courier.memo_no"}],staticClass:"form-control",attrs:{placeholder:"Enter memo number"},domProps:{value:t.courier.memo_no},on:{input:function(e){e.target.composing||t.$set(t.courier,"memo_no",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group text-center"},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("submit")])])])])])])],1)}),[],!1,null,"5ab48d8c",null);e.default=a.exports},193:function(t,e,s){var r=s(729);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(5)(r,o);r.locals&&(t.exports=r.locals)},728:function(t,e,s){"use strict";var r=s(193);s.n(r).a},729:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.orders-heading[data-v-5ab48d8c] {\n    font-size: 24px;\n    text-transform: uppercase;\n    border-bottom: 2px solid #000;\n    margin-bottom: 10px;\n    margin-left: 30%;\n}\n.router-link-active[data-v-5ab48d8c] {\n      border: 1.5px dashed !important ;\n      color:#000 !important\n}\n\n",""])}}]);