(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1328:function(t,a,s){"use strict";s.r(a);var o={created:function(){this.getLoans()},data:function(){return{loan:{},loading:!0,basePath:this.$store.getters.image_base_link,item:"",search:"",total_loan:"",total_loan_paid:"",total_due_amount:0}},methods:{getLoans:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/loan?page="+a).then((function(a){console.log(a),"OK"==a.data.success&&(t.loan=a.data.loan,t.total_loan=a.data.total_loan,t.total_loan_paid=a.data.total_loan_paid,t.total_due_amount=a.data.due_amount,t.loading=!1)})).catch((function(t){console.log(t)}))},totalAmount:function(t){return Object.keys(t).forEach((function(t){console.log(t)})),0}},computed:{}},n=(s(820),s(1)),e=Object(n.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"loanAdd"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-10 col-lg-offset-1"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[s("div",{staticClass:"row total_row"},[t._m(2),t._v(" "),s("div",{staticClass:"col-md-3"},[s("h4",[t._v(" Total Loan : "),s("b",{staticClass:"total_style",staticStyle:{color:"red"}},[t._v(" "+t._s(t.total_loan)+" ")])])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("h4",[t._v(" Total Paid : "),s("b",{staticClass:"total_style",staticStyle:{color:"green"}},[t._v(" "+t._s(t.total_loan_paid))])])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("h4",[t._v(" Total Due : "),s("b",{staticClass:"total_style",staticStyle:{color:"purple"}},[t._v(" "+t._s(t.total_due_amount))])])])]),t._v(" "),s("table",{staticClass:"table"},[t._m(3),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.loan.data,(function(a,o){return s("tr",{key:o},[s("td",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),t._v(" "),s("td",[s("router-link",{attrs:{to:{name:"LoanerDetails",params:{id:a.id}}}},[t._v(t._s(a.name)+"\n                        \n                        ")])],1),t._v(" "),s("td",[t._v(t._s(a.mobile_no))]),t._v(" "),s("td",[t._v(t._s(a.address))]),t._v(" "),s("td",[t._v(t._s(a.taken_amount))]),t._v(" "),s("td",[t._v(t._s(a.paid_amount))]),t._v(" "),s("td",[t._v(" "+t._s(a.taken_amount-a.paid_amount)+" ")])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.loan},on:{"pagination-change-page":t.getLoans}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing "),s("strong",[t._v(t._s(t.loan.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.loan.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.loan.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Loaner")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title heading"},[this._v("Loan Table")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-3"},[a("a",{staticClass:"btn btn-success",attrs:{href:"/api/download/all/loan/pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download"}),this._v(" Export PDF ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Mobile Number")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Taken Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Paid Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Due Amount ")])])])}],!1,null,"d913cece",null);a.default=e.exports},238:function(t,a,s){var o=s(821);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(5)(o,n);o.locals&&(t.exports=o.locals)},820:function(t,a,s){"use strict";var o=s(238);s.n(o).a},821:function(t,a,s){(t.exports=s(4)(!1)).push([t.i,"\n.box-primary[data-v-d913cece]{\n\n   margin-left: -100px;\n   overflow-x: scroll;\n}\n.total_style[data-v-d913cece]{\n\n   border: 2px solid #ddd;\n   padding: 4px 15px;\n}\n.total_row[data-v-d913cece]{\n  padding-bottom: 20px;\n}\n\n\n",""])}}]);