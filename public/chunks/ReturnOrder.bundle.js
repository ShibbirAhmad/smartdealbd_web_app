(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1261:function(t,e,s){"use strict";s.r(e);var a=s(10),o=(s(0),{components:{Index:a.default},created:function(){this.ordersList(),this.others()},data:function(){return{orders:{},loading:!0,item:"10",courier:{order_id:"",courier_id:"",memo_no:"",order_index:""},couriers:"",comments:"",search:"",start_date:"",end_date:"",options:{format:"YYYY-MM-DD",useCurrent:!1},status:7,type:"all",page:1,selected:!1,select_order_id:[],bulk_status:"all",heading:"All Order",bulkActionType:"0",courier_id:""}},methods:{ordersList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/orders?page="+e,{params:{status:this.status,item:this.item,type:this.type,start_date:this.start_date,end_date:this.end_date,courier_id:this.courier_id}}).then((function(e){console.log(e),t.$Progress.finish(),"SUCCESS"==e.data.status?(t.orders=e.data.orders,t.loading=!1,t.page=t.page+1,t.loading=!1):t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(e){t.$Progress.finish(),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},others:function(){var t=this;axios.get("/others").then((function(e){console.log(e),"SUCCESS"==e.data.status&&(t.couriers=e.data.couriers,t.comments=e.data.comments)}))},approved:function(t,e){var s=this;this.$Progress.start(),axios.get("/approved/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=3):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},cancel:function(t,e){var s=this;this.$Progress.start(),axios.get("/cancel/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=6):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},returnOrder:function(t,e){var s=this;this.$Progress.start(),axios.get("/return/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=7):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},delivered:function(t,e){var s=this;this.$Progress.start(),axios.get("/delivered/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=5):s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},shipment:function(t,e){var s=this;this.$Progress.start(),axios.get("/shipment/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=4):(s.$Progress.finish(),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},pending:function(t,e){var s=this;this.$Progress.start(),axios.get("/pending/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=2):(s.$Progress.finish(),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:4e3})}))},orderSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.length>1?(this.loading=!0,axios.get("/order/search/"+this.search+"?page="+e).then((function(e){"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t),alert("some thing want wrong")}))):(this.loading=!1,this.ordersList())},filterOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.loading=!0,axios.get("/order/filter?page="+e,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item,status:this.status}}).then((function(e){t.$Progress.finish(),t.loading=!1,"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t)}))},resetAll:function(){location.reload()},selectAll:function(){1==this.selected?this.selected=!1:this.selected=!0;for(var t=document.getElementsByClassName("select-all"),e=0;e<t.length;e++)1==this.selected?t[e].checked=!0:t[e].checked=!1;if(1==this.selected)for(var s=0;s<this.orders.data.length;s++)this.select_order_id.push(this.orders.data[s].id);else this.select_order_id=[]},selectBulkAction:function(){if(this.select_order_id.length<=0)Swal.fire({type:"warning",text:"Please select at least one row"});else{var t=this.bulkActionType;"LABEL PRINT"==t&&window.open("/order/label/print/"+this.select_order_id,"_blank"),"INVOICE PRINT"==t&&window.open("/order/invoice/print/"+this.select_order_id,"_blank")}},labelPrint:function(){window.open("","_self","width=600,height=600")},comment:function(t,e,s){console.log(s);var a={};this.comments.forEach((function(t){a[t.name]=t.name}));document.getElementsByClassName("swal2-select");Swal.fire({title:s||"Select a comment",input:"select",inputOptions:a,inputPlaceholder:"Select or change a comment",showCancelButton:!0}).then((function(e){e.value?axios.get("/api/order/comment",{params:{order_id:t,comment:e.value}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})):console.log("Ok")}))}},watch:{status:function(t){this.heading=1==t?"New Orders":2==t?"Pending Orders":3==t?"Approved Orders":4==t?"Shipment Orders":5==t?"Delivered Orders":7==t?"Return Orders":6==t?"Cancel Orders":"All Orders"},start_date:function(t){t.length>1&&this.ordersList()},end_date:function(t){t.length>1&&this.ordersList()},bulkActionType:function(t){this.selectBulkAction()},courier_id:function(t){this.ordersList()}}}),n=(s(725),s(1)),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"addOrder"}}},[s("i",{staticClass:"fa fa-plus"})]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"NewOrder"}}},[t._v("New")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"PendingOrder"}}},[t._v("Pending")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"ApprovedOrder"}}},[t._v("Approved")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"ShipmentOrder"}}},[t._v("Shipment")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"DeliveredOrder"}}},[t._v("Delivered")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success active",attrs:{to:{name:"ReturnOrder"}}},[t._v("Return")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"CancelOrder"}}},[t._v("Cancel")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success ",attrs:{to:{name:"WholeSaleOrder"}}},[t._v("whole sale")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-success ",attrs:{to:{name:"order"}}},[t._v("All")])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[t._v("\\\n      "),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row",staticStyle:{"margin-bottom":"3px"}},[s("div",{staticClass:"col-lg-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.bulkActionType,expression:"bulkActionType"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.bulkActionType=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("Select Action")]),t._v(" "),s("option",{attrs:{value:"LABEL PRINT"}},[t._v("Label Print")]),t._v(" "),s("option",{attrs:{value:"INVOICE PRINT"}},[t._v("Invoice Print")])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-lg-offset-1 orders-heading"},[s("h3",{staticClass:"box-title"},[t._v(t._s(t.heading))])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All type")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Onely Admin")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Only Customer")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Whole Sale")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Only Reseller")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Approved")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Shipment")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("Delivired")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Retrun")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Cancel")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Invoice,customer_phone"},domProps:{value:t.search},on:{keyup:t.orderSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.filterOrder(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"start-date",config:t.options},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-4",staticStyle:{"margin-left":"-20px"}},[s("date-picker",{attrs:{autocomplete:"off",placeholder:"end-date",config:t.options},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.courier_id,expression:"courier_id"}],staticClass:"form-control",staticStyle:{width:"120px"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.courier_id=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select Courier")]),t._v(" "),t._l(t.couriers,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])])]),t._v(" "),s("div",{staticClass:"col-lg-1"},[s("button",{staticClass:"btn btn-primary btn-sm",staticStyle:{"margin-left":"45px"},attrs:{type:"button"},on:{click:t.resetAll}},[s("i",{staticClass:"fa fa-refresh"})])]),t._v(" "),s("div",{staticClass:"col-lg-1"},[t.start_date.length>0?s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.filterOrder]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])]):s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("input",{attrs:{type:"checkbox"},on:{click:t.selectAll}})]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("customer_name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("C_phone")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("C_address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Create_by")]),t._v(" "),s("th",{staticStyle:{width:"2%"},attrs:{scope:"col"}},[t._v("Order_place")]),t._v(" "),s("th",[t._v("Order_date")]),t._v(" "),s("th",[t._v("Action")]),t._v(" "),s("th",[t._v("Courier")]),t._v(" "),s("th",[t._v("CMNT")])])]),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.orders.data,(function(e,a){return s("tr",{key:a},[s("td",{staticStyle:{width:"1%"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.select_order_id,expression:"select_order_id"}],staticClass:"select-all",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.select_order_id)?t._i(t.select_order_id,e.id)>-1:t.select_order_id},on:{change:function(s){var a=t.select_order_id,o=s.target,n=!!o.checked;if(Array.isArray(a)){var r=e.id,i=t._i(a,r);o.checked?i<0&&(t.select_order_id=a.concat([r])):i>-1&&(t.select_order_id=a.slice(0,i).concat(a.slice(i+1)))}else t.select_order_id=n}}})]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                        "+t._s(e.customer_name)+"\n                      ")]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                        "+t._s(e.customer_phone)+"\n                      ")]),t._v(" "),s("td",{staticClass:"three-percent"},[t._v("\n                        "+t._s(e.customer_address?e.customer_address:"null")+"\n                      ")]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.invoice_no))]),t._v(" "),s("td",{staticClass:"two-percent"},[s("strong",[t._v("\n                          Total: "+t._s(parseInt(e.total)-parseInt(e.discount)+parseInt(e.shipping_cost))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          P: "+t._s(parseInt(e.paid))+"\n\n                        ")]),t._v(" "),s("strong",[t._v("\n                          D: "+t._s(parseInt(e.total)-(parseInt(e.discount)+parseInt(e.paid))+parseInt(e.shipping_cost))+"\n\n                        ")])]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.order_type?s("p",[t._v("customer")]):t._e(),t._v(" "),2==e.order_type?s("p",[t._v("\n                          Admin ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),3==e.order_type?s("p",[t._v("\n                          Whole sale ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),4==e.order_type?s("p",[t._v("\n                          Reseller "),e.reseller.username?s("strong",[t._v(t._s(e.reseller.username))]):t._e()]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.status?s("span",{staticClass:"badge"},[t._v("New")]):t._e(),t._v(" "),2==e.status?s("span",{staticClass:"badge"},[t._v("Pending")]):t._e(),t._v(" "),3==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==e.status?s("span",{staticClass:"badge badge-warning"},[t._v("Delivered")]):t._e(),t._v(" "),6==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.created_at))]),t._v(" "),s("td",[2==e.status||1==e.status||6==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.approved(e,a)}}},[t._v("\n                          Approved\n                        ")]):t._e(),t._v(" "),1==e.status||7==e.status||2==e.status?s("button",{staticClass:"btn btn-sm btn-info action-btn",on:{click:function(s){return t.pending(e,a)}}},[t._v("\n                          Pending\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.delivered(e,a)}}},[t._v("\n                          Deliverd\n                        ")]):t._e(),t._v(" "),3==e.status?s("button",{staticClass:"btn btn-sm btn-primary action-btn",on:{click:function(s){return t.shipment(e,a)}}},[t._v("\n                          Shipment\n                        ")]):t._e(),t._v(" "),1==e.status||2==e.status||3==e.status?s("button",{staticClass:"btn btn-sm btn-danger action-btn",on:{click:function(s){return t.cancel(e,a)}}},[t._v("\n                          Cancel\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-warning action-btn",on:{click:function(s){return t.returnOrder(e,a)}}},[t._v("\n                          Return\n                        ")]):t._e(),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-warning",attrs:{to:{name:"orderEdit",params:{id:e.id}}}},[t._v("Edit")]),t._v(" "),s("router-link",{staticClass:"btn btn-sm btn-primary action-btn",staticStyle:{color:"#fff"},attrs:{to:{name:"viewOrder",params:{id:e.id}}}},[t._v("View")])],1),t._v(" "),s("td",{staticStyle:{width:"1%"}},[e.courier_id?s("small",[t._v(t._s(e.courier.name))]):t._e(),t._v(" "),s("span",{staticClass:"badge",attrs:{if:"order.memo_no"}},[t._v(t._s(e.memo_no))])]),t._v(" "),s("td",[e.comment?s("small",[t._v(t._s(e.comment))]):t._e(),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(s){return t.comment(e.id,a,e.comment)}}},[t._v("CO")])])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.orders,limit:5},on:{"pagination-change-page":t.ordersList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing\n                      "),s("strong",[t._v(t._s(t.orders.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.orders.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.orders.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("All Order")])])}],!1,null,null,null);e.default=r.exports},192:function(t,e,s){var a=s(726);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,o);a.locals&&(t.exports=a.locals)},725:function(t,e,s){"use strict";var a=s(192);s.n(a).a},726:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.orders-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-bottom: 2px solid #000;\r\n  margin-bottom: 10px;\n}\n.box{\r\n  width:90%;\r\n  overflow-x: scroll;\n}\r\n\r\n",""])}}]);