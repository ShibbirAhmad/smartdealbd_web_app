(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1263:function(t,e,s){"use strict";s.r(e);var o,r,a,n={created:function(){this.ordersList(),this.others()},data:function(){return{orders:{},loading:!0,item:30,courier:{order_id:"",courier_id:"",memo_no:"",order_index:""},couriers:"",comments:"",search:"",start_date:"",end_date:"",options:{format:"YYYY-MM-DD",useCurrent:!1},status:5,type:"all",page:1,selected:!1,select_order_id:[],bulk_status:"all",heading:"Delivered Oders",bulkActionType:"0",order_count:"",courier_id:"",thumbnail_img_base_link:this.$store.state.image_thumbnail_link,order_note_list:"",order_note:"",order_id:""}},methods:(o={getOrderStatistic:function(){var t=this;axios.get("/api/get/order/statistic").then((function(e){t.order_count=e.data.order_count}))},dateFormatter:function(t){return new Date(t).toLocaleTimeString()},comment:function(t){this.$modal.show("orderNote"),this.order_id=t,this.orderNoteList()},orderNoteList:function(){var t=this;axios.get("/api/get/order/note/list/"+this.order_id).then((function(e){"OK"==e.data.status&&(t.order_note_list=e.data.notes)}))},addOrderComment:function(){var t=this;axios.get("/api/add/order/note",{params:{order_id:this.order_id,note:this.order_note}}).then((function(e){"OK"==e.data.status&&(t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3}),t.orderNoteList())}))},orderAction:function(t){console.log(t),document.getElementById("order_action_"+t).classList.toggle("toggle_order_action")},ordersList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),axios.get("/orders?page="+e,{params:{status:this.status,item:this.item,type:this.type,start_date:this.start_date,end_date:this.end_date,courier_id:this.courier_id}}).then((function(e){"SUCCESS"==e.data.status?(t.orders=e.data.orders,t.loading=!1,t.page=t.page+1,t.loading=!1,t.order_count=e.data.order_count,t.$Progress.finish()):t.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(e){t.$Progress.finish(),t.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},others:function(){var t=this;axios.get("/others").then((function(e){console.log(e),"SUCCESS"==e.data.status&&(t.couriers=e.data.couriers,t.comments=e.data.comments)}))},approved:function(t,e){var s=this;this.$Progress.start(),axios.get("/approved/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=3,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},cancel:function(t,e){var s=this;this.$Progress.start(),axios.get("/cancel/order/"+t.id).then((function(t){s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=6,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},returnOrder:function(t,e){var s=this;this.$Progress.start(),axios.get("/return/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=7,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},delivered:function(t,e){var s=this;this.$Progress.start(),axios.get("/delivered/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=5,s.getOrderStatistic()):s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3})})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},shipment:function(t,e){var s=this;this.$Progress.start(),axios.get("/shipment/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=4,s.getOrderStatistic()):(s.$Progress.finish(),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},pending:function(t,e){var s=this;this.$Progress.start(),axios.get("/pending/order/"+t.id).then((function(t){console.log(t),s.$Progress.finish(),"SUCCESS"==t.data.status?(s.$toasted.show(t.data.message,{type:"success",position:"top-center",duration:2e3}),s.orders.data[e].status=2,s.getOrderStatistic()):(s.$Progress.finish(),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:2e3}))})).catch((function(t){console.log(t),s.$toasted.show("something went to wrong",{type:"error",position:"top-center",duration:4e3})}))},orderSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.search.length>1?(this.loading=!0,axios.get("/order/search/"+this.search+"?page="+e).then((function(e){"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t),alert("something went wrong")}))):(this.loading=!1,this.ordersList())},filterOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$Progress.start(),this.loading=!0,axios.get("/order/filter?page="+e,{params:{start_date:this.start_date,end_date:this.end_date,item:this.item,status:this.status}}).then((function(e){t.$Progress.finish(),t.loading=!1,"SUCCESS"==e.data.status&&(t.orders=e.data.orders,t.loading=!1)})).catch((function(t){console.log(t)}))},resetAll:function(){location.reload()},selectAll:function(){1==this.selected?this.selected=!1:this.selected=!0;for(var t=document.getElementsByClassName("select-all"),e=0;e<t.length;e++)1==this.selected?t[e].checked=!0:t[e].checked=!1;if(1==this.selected)for(var s=0;s<this.orders.data.length;s++)this.select_order_id.push(this.orders.data[s].id);else this.select_order_id=[]},selectBulkAction:function(){if(this.select_order_id.length<=0)Swal.fire({type:"warning",text:"Please select at least one row"});else{var t=this.bulkActionType;"LABEL PRINT"==t&&window.open("/order/label/print/"+this.select_order_id,"_blank"),"INVOICE PRINT"==t&&window.open("/order/invoice/print/"+this.select_order_id,"_blank")}},labelPrint:function(){window.open("","_self","width=600,height=600")}},r="comment",a=function(t,e,s){var o=this;console.log(s);var r={};this.comments.forEach((function(t){r[t.name]=t.name})),document.getElementsByClassName("swal2-select"),Swal.fire({title:s||"Select a comment",input:"select",inputOptions:r,inputPlaceholder:"Select or change a comment",showCancelButton:!0}).then((function(e){"others"==e.value&&Swal.fire({input:"text"}).then((function(e){e.value&&axios.get("/api/order/comment",{params:{order_id:t,comment:e.value}}).then((function(t){console.log(t),"OK"==t.data.status&&(location.reload(),o.$toasted.show(t.data.message,{type:"success",duration:4e3,position:"top-center"}))})).catch((function(t){console.log(t)}))})),e.value?axios.get("/api/order/comment",{params:{order_id:t,comment:e.value}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})):console.log("Ok")}))},r in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a,o),watch:{status:function(t){this.heading=1==t?"New Orders":2==t?"Pending Orders":3==t?"Approved Orders":4==t?"Shipment Orders":5==t?"Delivered Orders":7==t?"Return Orders":6==t?"Cancel Orders":"All Orders"},start_date:function(t){t.length>1&&this.ordersList()},end_date:function(t){t.length>1&&this.ordersList()},bulkActionType:function(t){this.selectBulkAction()},courier_id:function(t){this.ordersList()}}},i=(s(722),s(1)),d=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("div",{staticClass:"order_statistic"},[s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"NewOrder"}}},[s("h2",[t._v(" "+t._s(t.order_count.new_order)+" ")]),t._v(" "),s("p",[t._v(" New ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"PendingOrder"}}},[s("h2",[t._v(" "+t._s(t.order_count.pending_order)+" ")]),t._v(" "),s("p",[t._v("Pending")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ApprovedOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.approved_order)+" ")]),t._v(" "),s("p",[t._v(" Ready To Ship ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ShipmentOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.shipment_order)+" ")]),t._v(" "),s("p",[t._v(" Shipment  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"DeliveredOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.delivered_order)+" ")]),t._v(" "),s("p",[t._v(" Delivered  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"ReturnOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.return_order)+" ")]),t._v(" "),s("p",[t._v(" Return  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"CancelOrder"}}},[s("h2",[t._v("  "+t._s(t.order_count.cancel_order)+" ")]),t._v(" "),s("p",[t._v(" Cancel  ")])]),t._v(" "),s("router-link",{staticClass:"statistic_item ",attrs:{to:{name:"order"}}},[s("h2",[t._v("  "+t._s(t.order_count.total)+" ")]),t._v(" "),s("p",[t._v(" All  ")])])],1)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border "},[s("h3",{staticClass:"box-title orders-heading"},[t._v(t._s(t.heading))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All type")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Onely Admin")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Only Customer")])])]),t._v(" "),s("div",{staticClass:"col-lg-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"all"}},[t._v("All")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Approved")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Shipment")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("Delivired")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Retrun")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Cancel")])])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"Enter Invoice, customer name, phone"},domProps:{value:t.search},on:{keyup:t.orderSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-lg-2"},[t.start_date.length>0?s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.filterOrder]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),s("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),s("option",{attrs:{value:"50"}},[t._v("50")])]):s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=e.target.multiple?s:s[0]},t.ordersList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-bordered table-striped table-hover "},[s("thead",[s("tr",[s("th",{attrs:{width:"5%"}},[s("input",{attrs:{type:"checkbox"},on:{click:t.selectAll}})]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Customer")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Address")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Product")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{width:"15%"}},[t._v("Total")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Created")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Order_place")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Order_date")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Action")]),t._v(" "),s("th",{attrs:{width:"10%"}},[t._v("Courier")]),t._v(" "),s("th",{attrs:{width:"5%"}},[t._v("Comment")])])]),t._v(" "),s("tbody",[t.loading?s("h1",[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.orders.data,(function(e,o){return s("tr",{key:o},[s("td",{staticStyle:{width:"1%"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.select_order_id,expression:"select_order_id"}],staticClass:"select-all",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.select_order_id)?t._i(t.select_order_id,e.id)>-1:t.select_order_id},on:{change:function(s){var o=t.select_order_id,r=s.target,a=!!r.checked;if(Array.isArray(o)){var n=e.id,i=t._i(o,n);r.checked?i<0&&(t.select_order_id=o.concat([n])):i>-1&&(t.select_order_id=o.slice(0,i).concat(o.slice(i+1)))}else t.select_order_id=a}}})]),t._v(" "),s("td",[s("p",[s("strong",[t._v(" "+t._s(e.customer_name)+" ")])]),t._v(" "),s("p",[s("strong",[t._v(t._s(e.customer_phone)+"  ")])])]),t._v(" "),s("td",[t._v("\n                        "+t._s(e.customer_address?e.customer_address:"null")+"\n                      ")]),t._v(" "),s("td",[e.order_item.length>0?s("div",[s("img",{attrs:{width:"50px",height:"50px",src:t.thumbnail_img_base_link+e.order_item[0].product.thumbnail_img}}),t._v(" "),s("p",[t._v("  "+t._s(e.order_item[0].product.name.substring(0,25).concat("...")+"-"+e.order_item[0].product.product_code)+"  ")])]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.invoice_no))]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v("\n                        "+t._s(e.total-(e.discount+e.paid)+e.shipping_cost)+"\n                      ")]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.order_type?s("p",[t._v("customer")]):t._e(),t._v(" "),2==e.order_type?s("p",[t._v("\n                          Admin ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),3==e.order_type?s("p",[t._v("\n                          Whole sale ||\n                          "),s("strong",[t._v(t._s(e.create_admin.name))])]):t._e(),t._v(" "),4==e.order_type?s("p",[t._v("\n                          Reseller\n                          "),e.reseller.username?s("strong",[t._v(t._s(e.reseller.username))]):t._e()]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[1==e.status?s("span",{staticClass:"badge"},[t._v("New")]):t._e(),t._v(" "),2==e.status?s("span",{staticClass:"badge"},[t._v("Pending")]):t._e(),t._v(" "),3==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==e.status?s("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==e.status?s("span",{staticClass:"badge badge-warning"},[t._v("Delivered")]):t._e(),t._v(" "),6==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==e.status?s("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),s("td",{staticClass:"two-percent"},[t._v(t._s(e.created_at))]),t._v(" "),s("td",[2==e.status||1==e.status||6==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.approved(e,o)}}},[t._v("\n                          Approved\n                        ")]):t._e(),t._v(" "),1==e.status||7==e.status||2==e.status?s("button",{staticClass:"btn btn-sm btn-info action-btn",on:{click:function(s){return t.pending(e,o)}}},[t._v("\n                          Pending\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-success action-btn",on:{click:function(s){return t.delivered(e,o)}}},[t._v("\n                          Deliverd\n                        ")]):t._e(),t._v(" "),3==e.status?s("button",{staticClass:"btn btn-sm btn-primary action-btn",on:{click:function(s){return t.shipment(e,o)}}},[t._v("\n                          Shipment\n                        ")]):t._e(),t._v(" "),1==e.status||2==e.status||3==e.status?s("button",{staticClass:"btn btn-sm btn-danger action-btn",on:{click:function(s){return t.cancel(e,o)}}},[t._v("\n                          Cancel\n                        ")]):t._e(),t._v(" "),4==e.status?s("button",{staticClass:"btn btn-sm btn-warning action-btn",on:{click:function(s){return t.returnOrder(e,o)}}},[t._v("\n                          Return\n                        ")]):t._e()]),t._v(" "),s("td",{staticStyle:{width:"1%"}},[e.courier_id?s("small",[t._v(t._s(e.courier.name))]):t._e(),t._v(" "),s("span",{staticClass:"badge",attrs:{if:"order.memo_no"}},[t._v(t._s(e.memo_no))])])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.orders,limit:5},on:{"pagination-change-page":t.ordersList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing\n                      "),s("strong",[t._v(t._s(t.orders.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.orders.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.orders.total))]),t._v(" entries\n                    ")])])])])])])])])])]),t._v(" "),s("modal",{attrs:{name:"orderNote",width:600,height:500}},[s("div",{staticClass:"card",staticStyle:{padding:"20px"}},[s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addOrderComment(e)}}},[s("div",{staticClass:"form-group",staticStyle:{display:"flex","margin-top":"20px"}},[s("label",[t._v("Add Note")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.order_note,expression:"order_note"}],staticClass:"form-control",staticStyle:{height:"50px"},attrs:{type:"text",placeholder:"write note",required:""},domProps:{value:t.order_note},on:{input:function(e){e.target.composing||(t.order_note=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Update Note")])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table table-bordered table-striped table-hover "},[s("thead",[s("tr",[s("th",[t._v("Created At")]),t._v(" "),s("th",[t._v("Note")]),t._v(" "),s("th",[t._v("Created By")])])]),t._v(" "),s("tbody",t._l(t.order_note_list,(function(e,o){return s("tr",{key:o},[s("td",[t._v(" "+t._s(t.dateFormatter(e.created_at))+" ")]),t._v(" "),s("td",[t._v(" "+t._s(e.note))]),t._v(" "),s("td",[t._v(" "+t._s(e.admin_name)+" ")])])})),0)])])])])])],1)}),[],!1,null,"5ec0f1f8",null);e.default=d.exports},190:function(t,e,s){var o=s(723);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(5)(o,r);o.locals&&(t.exports=o.locals)},722:function(t,e,s){"use strict";var o=s(190);s.n(o).a},723:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.orders-heading[data-v-5ec0f1f8] {\n    font-size: 24px;\n    text-transform: uppercase;\n    border-bottom: 2px solid #000;\n    margin-bottom: 10px;\n    margin-left: 30%;\n}\n.router-link-active[data-v-5ec0f1f8] {\n      border: 1.5px dashed !important ;\n      color:#000 !important\n}\n\n",""])}}]);