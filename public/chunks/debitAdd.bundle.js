(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1138:function(t,e,o){"use strict";o.r(e);var i=o(2),n=o.n(i),s=o(0);class a{constructor(t,e,o){this.x=t,this.y=e,this.time=o||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,o,i,n,s){this.startPoint=t,this.control2=e,this.control1=o,this.endPoint=i,this.startWidth=n,this.endWidth=s}static fromPoints(t,e){const o=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],o,i,t[2],e.start,e.end)}static calculateControlPoints(t,e,o){const i=t.x-e.x,n=t.y-e.y,s=e.x-o.x,r=e.y-o.y,l=(t.x+e.x)/2,c=(t.y+e.y)/2,h=(e.x+o.x)/2,u=(e.y+o.y)/2,d=Math.sqrt(i*i+n*n),m=Math.sqrt(s*s+r*r),p=m/(d+m),f=h+(l-h)*p,v=u+(c-u)*p,_=e.x-f,g=e.y-v;return{c1:new a(l+_,c+g),c2:new a(h+_,u+g)}}length(){let t,e,o=0;for(let i=0;i<=10;i+=1){const n=i/10,s=this.point(n,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(n,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const i=s-t,n=a-e;o+=Math.sqrt(i*i+n*n)}t=s,e=a}return o}point(t,e,o,i,n){return e*(1-t)*(1-t)*(1-t)+3*o*(1-t)*(1-t)*t+3*i*(1-t)*t*t+n*t*t*t}}class l{constructor(t,e={}){this.canvas=t,this.options=e,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let o,i,n,s=0,a=null;const r=()=>{s=Date.now(),a=null,o=t.apply(i,n),a||(i=null,n=[])};return function(...l){const c=Date.now(),h=e-(c-s);return i=this,n=l,h<=0||h>e?(a&&(clearTimeout(a),a=null),s=c,o=t.apply(i,n),a||(i=null,n=[])):a||(a=window.setTimeout(r,h)),o}}(l.prototype._strokeUpdate,this.throttle):l.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},o){const i=new Image,n=e.ratio||window.devicePixelRatio||1,s=e.width||this.canvas.width/n,a=e.height||this.canvas.height/n;this._reset(),i.onload=()=>{this._ctx.drawImage(i,0,0,s,a),o&&o()},i.onerror=t=>{o&&o(t)},i.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:e})=>this._drawCurve({color:t,curve:e}),({color:t,point:e})=>this._drawDot({color:t,point:e})),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,o=t.clientY,i=this._createPoint(e,o),n=this._data[this._data.length-1],s=n.points,a=s.length>0&&s[s.length-1],r=!!a&&i.distanceTo(a)<=this.minDistance,l=n.color;if(!a||!a||!r){const t=this._addPoint(i);a?t&&this._drawCurve({color:l,curve:t}):this._drawDot({color:l,point:i}),s.push({time:i.time,x:i.x,y:i.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const o=this.canvas.getBoundingClientRect();return new a(t-o.left,e-o.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),o=r.fromPoints(e,t);return e.shift(),o}return null}_calculateCurveWidths(t,e){const o=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(o),n={end:i,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=i,n}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,o){const i=this._ctx;i.moveTo(t,e),i.arc(t,e,o,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const o=this._ctx,i=e.endWidth-e.startWidth,n=2*Math.floor(e.length());o.beginPath(),o.fillStyle=t;for(let t=0;t<n;t+=1){const o=t/n,s=o*o,a=s*o,r=1-o,l=r*r,c=l*r;let h=c*e.startPoint.x;h+=3*l*o*e.control1.x,h+=3*r*s*e.control2.x,h+=a*e.endPoint.x;let u=c*e.startPoint.y;u+=3*l*o*e.control1.y,u+=3*r*s*e.control2.y,u+=a*e.endPoint.y;const d=Math.min(e.startWidth+a*i,this.maxWidth);this._drawCurveSegment(h,u,d)}o.closePath(),o.fill()}_drawDot({color:t,point:e}){const o=this._ctx,i="function"==typeof this.dotSize?this.dotSize():this.dotSize;o.beginPath(),this._drawCurveSegment(e.x,e.y,i),o.closePath(),o.fillStyle=t,o.fill()}_fromData(t,e,o){for(const i of t){const{color:t,points:n}=i;if(n.length>1)for(let o=0;o<n.length;o+=1){const i=n[o],s=new a(i.x,i.y,i.time);this.penColor=t,0===o&&this._reset();const r=this._addPoint(s);r&&e({color:t,curve:r})}else this._reset(),o({color:t,point:n[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),o=this.canvas.width/e,i=this.canvas.height/e,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("width",this.canvas.width.toString()),n.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:e})=>{const o=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const i=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;o.setAttribute("d",i),o.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),o.setAttribute("stroke",t),o.setAttribute("fill","none"),o.setAttribute("stroke-linecap","round"),n.appendChild(o)}},({color:t,point:e})=>{const o=document.createElement("circle"),i="function"==typeof this.dotSize?this.dotSize():this.dotSize;o.setAttribute("r",i.toString()),o.setAttribute("cx",e.x.toString()),o.setAttribute("cy",e.y.toString()),o.setAttribute("fill",t),n.appendChild(o)});const s=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${o} ${i}" width="${o}" height="${i}">`;let a=n.innerHTML;if(void 0===a){const t=document.createElement("dummy"),e=n.childNodes;t.innerHTML="";for(let o=0;o<e.length;o+=1)t.appendChild(e[o].cloneNode(!0));a=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(s+a+"</svg>")}}var c=l,h={name:"vueSignature",props:{sigOption:{type:Object,default:()=>({backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"})},w:{type:String,default:"100%"},h:{type:String,default:"100%"},clearOnResize:{type:Boolean,default:!1},waterMark:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},defaultUrl:{type:String,default:""}},data:()=>({sig:()=>{},option:{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"},uid:""}),watch:{disabled(t){t?this.sig.off():this.sig.on()}},created(){this.uid="canvas"+this._uid;var t=Object.keys(this.sigOption);for(var e of t)this.option[e]=this.sigOption[e]},methods:{draw(){var t=this,e=document.getElementById(t.uid);function o(e){var o;t.isEmpty()||(o=t.save());var i=Math.max(window.devicePixelRatio||1,1);e.width=e.offsetWidth*i,e.height=e.offsetHeight*i,e.getContext("2d").scale(i,i),t.clear(),!t.clearOnResize&&void 0!==o&&t.fromDataURL(o),Object.keys(t.waterMark).length&&t.addWaterMark(t.waterMark)}t.sig=new c(e,t.option),window.addEventListener("resize",o(e)),o(e),""!==t.defaultUrl&&t.fromDataURL(t.defaultUrl),t.disabled?t.sig.off():t.sig.on()},clear(){this.sig.clear()},save(t){return t?this.sig.toDataURL(t):this.sig.toDataURL()},fromDataURL(t){this.sig.fromDataURL(t)},isEmpty(){return this.sig.isEmpty()},undo(){var t=this.sig.toData();t&&(t.pop(),this.sig.fromData(t))},addWaterMark(t){if("[object Object]"!=Object.prototype.toString.call(t))throw new Error("Expected Object, got "+typeof t+".");var e=document.getElementById(this.uid),o={text:t.text||"",x:t.x||20,y:t.y||20,sx:t.sx||40,sy:t.sy||40},i=e.getContext("2d");i.font=t.font||"20px sans-serif",i.fillStyle=t.fillStyle||"#333",i.strokeStyle=t.strokeStyle||"#333","all"==t.style?(i.fillText(o.text,o.x,o.y),i.strokeText(o.text,o.sx,o.sx)):"stroke"==t.style?i.strokeText(o.text,o.sx,o.sx):i.fillText(o.text,o.x,o.y),this.sig._isEmpty=!1}},mounted(){var t=this;this.$nextTick().then(()=>{t.draw()})}},u=(o(666),o(1)),d=Object(u.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{width:this.w,height:this.h},on:{touchmove:function(t){t.preventDefault()}}},[e("canvas",{staticClass:"canvas",attrs:{id:this.uid,"data-uid":this.uid,disabled:this.disabled}})])}),[],!1,null,null,null).exports;n.a.component(s.HasError.name,s.HasError);var m={name:"Add",created:function(){this.accountPurpose(),this.balanceList()},data:function(){return{form:new s.Form({purpose:"",amount:"",date:"",comment:"",employee_id:"",debit_from:"select one",supplier_id:"",signature:null,signature_write:!1,loaner_id:"",investor_id:"",investor_return_id:"",print_house_id:"",profit_month:"",bill_statement_id:""}),loading:!0,error:"",purposes:"",balance:"",options:{format:"YYYY-MM-DD",useCurrent:!1},months:{January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"Septembaer",October:"October",November:"November",December:"December"},option:{penColor:"rgb(0, 0, 0)",backgroundColor:"yellow"},disabled:!1}},methods:{balanceList:function(){var t=this;axios.get("/api/balance/list").then((function(e){t.balance=e.data.balance}))},accountPurpose:function(){var t=this;axios.get("/api/account/purpose").then((function(e){console.log(e),e.data&&(t.purposes=e.data,t.loading=!1)})).catch((function(t){console.log(t)}))},selectPurpose:function(){var t=this.form.purpose;1==t?this.employeeList():9==t?this.supplierList():11==t?this.loanerList():12==t?this.investorList():10==t?this.printHoueList():21==t?this.billStatementList():22==t?this.returnInvestorList():(this.form.employee_id="",this.form.supplier_id="")},employeeList:function(){var t=this;axios.get("/api/employee/list").then((function(e){var o={};e.data.forEach((function(t){o[t.id]=t.name+"-"+t.designation})),Swal.fire({title:"Select a employee",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.employee_id=e.value:(t.form.purpose="",t.form.employee_id="")}))})).catch((function(t){console.log(t)}))},loanerList:function(){var t=this;axios.get("/api/loaners").then((function(e){console.log(e);var o={};e.data.forEach((function(t){o[t.id]=t.name+"-"+t.mobile_no})),Swal.fire({title:"Select a Loaner",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.loaner_id=e.value:(t.form.purpose="",t.form.loaner_id="")}))})).catch((function(t){console.log(t)}))},supplierList:function(){var t=this;axios.get("/api/supplier/list").then((function(e){console.log(e);var o={};e.data.forEach((function(t){o[t.id]=t.company_name+"-"+t.name})),Swal.fire({title:"Select a supplier",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.supplier_id=e.value:t.form.supplier_id=""}))})).catch((function(t){console.log(t)}))},add:function(){var t=this;"string"!=typeof this.form.debit_from?(this.save(),console.log(this.form.signature),this.form.post("/debit/store").then((function(e){console.log(e),console.log("resp"),"SUCCESS"==e.data.status?(t.$router.push({name:"debit"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:2e3})):t.error="some thing want to wrong"})).catch((function(e){t.error="some thing want to wrong"}))):alert("selecet any balance")},investorList:function(){var t=this;axios.get("/api/company/investor/list").then((function(e){console.log(e);var o={};e.data.forEach((function(t){o[t.id]=t.name+"-"+t.mobile_no})),Swal.fire({title:"Select a Investor",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?(t.form.investor_id=e.value,Swal.fire({title:"Select Profit Month",input:"select",inputOptions:t.months,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.profit_month=e.value:t.form.profit_month=""}))):(t.form.purpose="",t.form.investor_id="")}))})).catch((function(t){console.log(t)}))},returnInvestorList:function(){var t=this;axios.get("/api/company/investor/list").then((function(e){console.log(e);var o={};e.data.forEach((function(t){o[t.id]=t.name+"-"+t.mobile_no})),Swal.fire({title:"Select a Investor",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.investor_return_id=e.value:(t.form.purpose="",t.form.investor_return_id="")}))})).catch((function(t){console.log(t)}))},printHoueList:function(){var t=this;axios.get("/api/print/house/list").then((function(e){console.log(e);var o={};e.data.forEach((function(t){o[t.id]=t.company_name+"-"+t.mobile_no})),Swal.fire({title:"Select a print-house",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.print_house_id=e.value:(t.form.purpose="",t.form.print_house_id="")}))}))},billStatementList:function(){var t=this;axios.get("/api/bill/statement/list").then((function(e){console.log(e);var o={};e.data.bills.forEach((function(t){o[t.id]=t.name})),Swal.fire({title:"Select a bill",input:"select",inputOptions:o,inputPlaceholder:"Select One",showCancelButton:!0}).then((function(e){e.value?t.form.bill_statement_id=e.value:(t.form.purpose="",t.form.bill_statement_id="")}))}))},pDate:function(){var t=new Date,e=t.getMonth()+1,o=t.getDate(),i=t.getFullYear()+"-"+((""+e).length<2?"0":"")+e+"-"+((""+o).length<2?"0":"")+o;this.form.date=i},save:function(){var t=this.$refs.signature.save();this.form.signature=t},clear:function(){this.$refs.signature.clear(),this.form.signature_write=!1},sigantureFocus:function(){document.getElementById("signatur-pad").classList.add("focus-signature")}},mounted:function(){this.pDate()},components:{sig:d}},p=(o(668),Object(u.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"debit"}}},[o("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10 col-lg-offset-1"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[t.loading?o("h1",[o("i",{staticClass:"fa fa-spinner fa-spin"})]):o("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.add(e)},keydown:function(e){return t.form.onKeydown(e)}}},[t.error?o("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Date")]),t._v(" "),o("date-picker",{class:{"is-invalid":t.form.errors.has("date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Purpose")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.purpose,expression:"form.purpose"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("purpose")},attrs:{name:"purpose"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"purpose",e.target.multiple?o:o[0])},t.selectPurpose]}},[o("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select Purpose")]),t._v(" "),t._l(t.purposes,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                      "+t._s(e.text)+"\n                    ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"purpose"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Amount")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("amount")},attrs:{type:"text",name:"amount",autocomplete:"off"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"amount"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Comment")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("comment")},attrs:{type:"text",name:"comment",autocomplete:"off"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"comment"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Debit From")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.debit_from,expression:"form.debit_from"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"debit_from",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"select one",disabled:""}},[t._v("select one")]),t._v(" "),t._l(t.balance,(function(e,i){return o("option",{key:i,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2),t._v(" "),o("has-error",{attrs:{form:t.form,field:"debit_from"}})],1),t._v(" "),o("div",{staticClass:"form-group",attrs:{id:"signatur-pad"}},[o("label",{attrs:{for:""}},[t._v("Signature")]),t._v(" "),o("sig",{ref:"signature",staticClass:"bg-warning",class:{"is-invalid":t.form.errors.has("signature")},staticStyle:{"margin-bottom":"5px"},attrs:{id:"sig",sigOption:t.option,disabled:t.disabled}}),t._v(" "),o("button",{staticClass:"m-1",staticStyle:{position:"absolute",right:"10px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.clear(e)}}},[t._v("\n                    clear\n                  ")]),t._v(" "),o("button",{staticClass:"m-1",staticStyle:{position:"absolute",right:"60px"},attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.form.signature_write=!0}}},[t._v("\n                    Perfect\n                  ")])],1),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy||0==t.form.signature_write,type:"submit"}},[t.form.busy?o("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Debit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header text-center with-border"},[e("h3",{staticClass:"box-title"},[this._v("Add Debit")])])}],!1,null,"69f71ee7",null));e.default=p.exports},162:function(t,e,o){var i=o(667);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(5)(i,n);i.locals&&(t.exports=i.locals)},163:function(t,e,o){var i=o(669);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(5)(i,n);i.locals&&(t.exports=i.locals)},666:function(t,e,o){"use strict";var i=o(162);o.n(i).a},667:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"\ncanvas {\n\twidth: 100%;\n\theight: 100%;\n}\n",""])},668:function(t,e,o){"use strict";var i=o(163);o.n(i).a},669:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"\n.mb-2[data-v-69f71ee7] {\r\n  margin-bottom: 5px !important;\n}\n#signatur-pad[data-v-69f71ee7] {\r\n  height: 300px;\n}\r\n",""])}}]);