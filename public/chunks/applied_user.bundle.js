(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1275:function(t,i,n){"use strict";n.r(i);var a={created:function(){this.getApplierList()},data:function(){return{jobTitle:"",appliers:"",coverLetter:""}},methods:{getApplierList:function(){var t=this;axios.get("/api/applied/applier/job/"+this.$route.params.id).then((function(i){console.log(i),"OK"==i.data.status&&(t.appliers=i.data.appliers,t.jobTitle=i.data.appliers.data[0].job.title)}))},downloadCV:function(t){window.open("/api/download/user/resume/"+t)}}},s=(n(748),n(1)),e=Object(s.a)(a,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("admin-main"),t._v(" "),n("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),n("section",{staticClass:"content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-11"},[n("div",{staticClass:"job_heading  divShadow text-center"},[n("h4",{staticClass:"heading"},[t._v(t._s(t.jobTitle))])])])]),t._v(" "),t._l(t.appliers.data,(function(i,a){return n("div",{key:a,staticClass:"row applier"},[n("div",[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"job-content bg-white text-center divShadow"},[n("h4",{staticStyle:{"margin-top":"10px","margin-bottom":"15px"}},[t._v("\n                  "+t._s(i.name)+"\n                ")]),t._v(" "),n("p",[t._v("\n                  "+t._s(i.phone)+"\n                ")]),t._v(" "),n("p",[t._v("\n                  "+t._s(i.email)+"\n                ")]),t._v(" "),n("button",{staticClass:"btn btn-lg btnCV",attrs:{download:""},on:{click:function(n){return t.downloadCV(i.id)}}},[n("i",{staticClass:"fa fa-lg fa-file",staticStyle:{"font-size":"54px"}})])])]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("div",{staticClass:"job-content bg-white divShadow"},[n("p",{staticStyle:{"line-height":"25px"},domProps:{innerHTML:t._s(i.message)}})])])])])}))],2)])])],1)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("section",{staticClass:"content-header"},[i("ol",{staticClass:"breadcrumb"},[i("li",[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),i("li",{staticClass:"active"},[this._v("Applied appliers of jobs")])])])}],!1,null,null,null);i.default=e.exports},204:function(t,i,n){var a=n(749);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(5)(a,s);a.locals&&(t.exports=a.locals)},748:function(t,i,n){"use strict";var a=n(204);n.n(a).a},749:function(t,i,n){(t.exports=n(4)(!1)).push([t.i,"\n.job_heading {\r\n  min-height: 60px;\r\n  margin-top: 20px;\r\n  margin-bottom: 30px;\n}\n.job_heading h4 {\r\n  padding-top: 20px;\n}\n.divShadow {\r\n  box-shadow: 2px 1px 3px #3c8dbc;\r\n  margin-bottom: 30px;\n}\n.divShadow p {\r\n  line-height: 15px;\n}\n.btnCV {\r\n  background: #3c8dbc;\r\n  color: #fff;\r\n  width: 76px;\r\n  height: 76px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n  border: dashed 2px;\n}\n.bg-white{\r\n  background: #fff;\n}\r\n",""])}}]);