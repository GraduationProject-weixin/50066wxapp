(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messages/liuyan"],{"10f0":function(t,e,n){"use strict";(function(t){n("fde4"),n("921b");r(n("66fd"));var e=r(n("b0e7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"16b0":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"2cf1":function(t,e,n){},4844:function(t,e,n){"use strict";var r=n("2cf1"),u=n.n(r);u.a},b0e7:function(t,e,n){"use strict";n.r(e);var r=n("16b0"),u=n("ffa6");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("4844");var i,s=n("f0c5"),o=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"31ce25b1",null,!1,r["a"],i);e["default"]=o.exports},fa2c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,u,a,i){try{var s=t[a](i),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(r,u)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var i=t.apply(e,n);function s(t){a(i,r,u,s,o,"next",t)}function o(t){a(i,r,u,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{ruleForm:{userid:"",username:"",content:"",reply:""},user:{}}},onLoad:function(){var e=i(r.default.mark((function e(n){var u,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=t.getStorageSync("nowTable"),e.next=3,this.$api.session(u);case 3:a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),"yonghu"==u&&(this.ruleForm.username=this.user.yonghuming),"jiazhengrenyuan"==u&&(this.ruleForm.username=this.user.zhanghao),this.styleChange();case 9:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.content){t.next=6;break}return t.next=3,this.$api.add("messages",this.ruleForm);case 3:this.$utils.msgBack("提交成功"),t.next=7;break;case 6:this.$utils.msg("请填写留言内容");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},ffa6:function(t,e,n){"use strict";n.r(e);var r=n("fa2c"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a}},[["10f0","common/runtime","common/vendor"]]]);