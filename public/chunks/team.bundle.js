(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{103:function(t,n,a){var i=a(546);"string"==typeof i&&(i=[[t.i,i,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(5)(i,e);i.locals&&(t.exports=i.locals)},1138:function(t,n,a){"use strict";a.r(n);var i=a(14),e=a.n(i),r=(a(25),{created:function(){this.getTeam()},data:function(){return{isLoading:!0,fullPage:!0,team:"",base_url:this.$store.state.image_base_link}},methods:{getTeam:function(){var t=this;axios.get("/_public/team/members").then((function(n){console.log(n),"OK"==n.data.status&&(t.team=n.data.team,t.isLoading=!1)})).catch()}},components:{Loading:e.a}}),o=(a(545),a(1)),s=Object(o.a)(r,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(n){t.isLoading=n}}}),t._v(" "),a("frontend-header"),t._v(" "),a("div",{staticClass:"row text-center"},[a("div",{staticClass:"background_image",style:{height:"400px",marginTop:"-10px",backgroundImage:"url(/public/images/mm.jpg)",backgroundPosition:"center center",backgroundSize:"cover"}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"container-fluid",staticStyle:{"background-color":"#eee"}},[a("div",{staticClass:"container",staticStyle:{"margin-bottom":"50px"}},t._l(t.team,(function(n,i){return a("div",{key:i,staticClass:"col-md-3 col-sm-6"},[a("div",{staticClass:"card box profile_container text-center shadow box-white"},[a("div",{staticClass:"inside_top"}),t._v(" "),a("img",{staticClass:"profile_image",attrs:{src:t.base_url+n.avator,alt:""}}),t._v(" "),a("div",{staticClass:"inside_bottom"}),t._v(" "),a("h4",{staticClass:"heading"},[t._v(t._s(n.name))]),t._v(" "),a("p",[t._v(t._s(n.designation))])])])})),0)])]),t._v(" "),a("frontend-footer")],1)}),[],!1,null,"1311b19f",null);n.default=s.exports},545:function(t,n,a){"use strict";var i=a(103);a.n(i).a},546:function(t,n,a){(t.exports=a(4)(!1)).push([t.i,"\n.profile_image[data-v-1311b19f] {\r\n  margin-top: -70px;\r\n  width: 150px;\r\n  height: 150px;\r\n  border-radius: 50%;\r\n  border: 5px solid #fff;\n}\n.desc_info p[data-v-1311b19f] {\r\n  padding: 5px;\r\n  margin: 10px;\r\n  padding-bottom: 20px;\n}\n.profile_container[data-v-1311b19f] {\r\n  border-radius: 10px;\r\n  margin-top: 50px;\r\n  background: #fff;\r\n  padding-bottom: 20px;\n}\n.inside_top[data-v-1311b19f] {\r\n  width: 100%;\r\n  height: 90px;\r\n  background: #ff4d03;\r\n  border-radius: 5px;\n}\n.inside_bottom[data-v-1311b19f] {\r\n  width: 100%;\r\n  background-color: #fff;\n}\nh4[data-v-1311b19f] {\r\n  font-size: 16px;\n}\np[data-v-1311b19f] {\r\n  font-size: 14px;\r\n  line-height: 10px;\n}\r\n",""])}}]);