(function(t){function e(e){for(var a,i,c=e[0],o=e[1],d=e[2],l=0,m=[];l<c.length;l++)i=c[l],r[i]&&m.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0820":function(t,e,n){},"0f72":function(t,e,n){"use strict";var a=n("766c"),r=n.n(a);r.a},1:function(t,e){},2:function(t,e){},"27ff":function(t,e,n){"use strict";var a=n("6159"),r=n.n(a);r.a},3:function(t,e){},3374:function(t,e,n){},"33d4":function(t,e,n){},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container",attrs:{id:"app"}},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary",staticStyle:{display:"flex"}},[n("div",{staticClass:"md-toolbar-row"},[n("div",{staticClass:"md-toolbar-section-start"},[n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"md-icon-button",on:{click:t.goback}},[n("md-icon",[t._v("keyboard_arrow_left")])],1),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}]},[t._v("   ")]),n("span",{on:{click:function(e){return t.login()}}},[t._v(t._s(t.Account))])],1),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[n("md-icon",[t._v("menu")])],1)],1)])]),n("md-app-drawer",{attrs:{"md-permanent":"full","md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[n("md-list",[n("md-list-item",[n("md-icon",[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("home")])],1),n("span",{staticClass:"md-list-item-text"},[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("首页")])],1)],1),n("md-list-item",[n("md-icon",[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/account"}},[t._v("face")])],1),n("span",{staticClass:"md-list-item-text"},[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/account"}},[t._v("我的账户")])],1)],1),n("md-list-item",[n("md-icon",[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/allmembers"}},[t._v("supervisor_account")])],1),n("span",{staticClass:"md-list-item-text"},[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/member"}},[t._v("成员信息")])],1)],1)],1)],1),n("md-app-content",[n("router-view")],1)],1),n("md-dialog-alert",{attrs:{"md-active":t.first,"md-content":"Please unlock your scatter!","md-confirm-text":"OK!"},on:{"update:mdActive":function(e){t.first=e},"update:md-active":function(e){t.first=e}}})],1)},s=[],i=(n("7f7f"),n("7514"),n("96cf"),n("3b8d")),c=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shouye"},[n("div",{attrs:{id:"content1","md-layout":"","md-gutter":""}},[n("div",{staticClass:"md-layout-item md-layout md-gutter"},[n("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100",staticStyle:{"margin-top":"0vw"}},[n("md-card",{staticClass:"zjutokeninfo",staticStyle:{"margin-top":"1vw","margin-left":"3vw","margin-right":"3vw"}},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title",staticStyle:{"text-align":"center"}},[t._v("Token合约账户")])])],1),n("md-card-content",[n("md-table",[n("md-table-row",[n("md-table-cell",[t._v("总量")]),n("md-table-cell",[t._v(t._s(t.max))])],1),n("md-table-row",[n("md-table-cell",[t._v("释放")]),n("md-table-cell",[t._v(t._s(t.supply))])],1),n("md-table-row",[n("md-table-cell",[t._v("锁仓")]),n("md-table-cell",[t._v(t._s(t.frozen_amount))])],1),n("md-table-row",[n("md-table-cell",[t._v("发行者")]),n("md-table-cell",[t._v(t._s(t.issuer))])],1)],1)],1)],1)],1),n("div",{staticClass:"md-layout-item md-medium-size-36 md-small-size-50 md-xsmall-size-100"},[n("md-card",{staticClass:"zjutokeninfo",staticStyle:{"margin-top":"1vw","margin-left":"3vw","margin-right":"3vw"}},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title",staticStyle:{"text-align":"center"}},[t._v("下一次解锁")])])],1),n("md-card-content",[n("md-table",[n("md-table-row",[n("md-table-cell",[t._v("时间")]),n("md-table-cell",[t._v(t._s(t.next_release_day))])],1),n("md-table-row",[n("md-table-cell",[t._v("数量")]),n("md-table-cell",[t._v(t._s(t.release_amount_pertime))])],1),n("md-table-row",[n("md-table-cell",[t._v("释放次数")]),n("md-table-cell",[t._v(t._s(t.released_times))])],1)],1)],1)],1)],1)]),n("md-card",{staticStyle:{"margin-top":"4vw"},attrs:{id:"recent-action"}},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("最近交易")])]),n("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.toall()}}},[t._v("所有交易")])],1)],1),n("md-card-content",[n("div",{staticClass:"table-responsive",staticStyle:{"margin-top":"0vw"}},[t.ok?n("md-progress-spinner",{staticClass:"md-size-1",staticStyle:{"margin-left":"37vw"},attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":3}}):n("table",{staticClass:"table",staticStyle:{"table-layout":"fixed"}},[n("thead",[n("tr",[n("th",[t._v("from")]),n("th",[t._v("to")]),n("th",[t._v("quantity")]),n("th",{staticClass:"hidden-xs"},[t._v("备忘")]),n("th",{staticClass:"hidden-xs"},[t._v("区块高度")]),n("th",{staticClass:"hidden-xs"},[t._v("时间")])])]),n("tbody",t._l(t.actions,function(e){return n("tr",{key:e.id,on:{click:function(n){return t.onSelect(e)}}},[n("td",[t._v(t._s(e.from))]),n("td",[t._v(t._s(e.to))]),n("td",[t._v(t._s(e.quantity))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.memo))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.height))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.time))])])}),0)])],1)])],1)],1)])},d=[],u=n("e814"),l=n.n(u),m=(n("a481"),function(t){return new Date(1e3*l()(t)).toLocaleString().replace(/:\d{1,2}$/," ")}),h={name:"shouye",data:function(){return{actions:[],actionss:[],ok:0,max_supply:"",supply:"",frozen_amount:"",issuer:"",next_release_day:"",release_amount_pertime:"",released_times:"",transactions:[]}},computed:{max:function(){return this.getTotalNum(),this.max_supply}},methods:{getTotalNum:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return jt.getTableRows({code:"zjubcatokens",scope:"ZJUBCA",table:"stat",json:"true"}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.max_supply=e.rows[0].max_supply,n.supply=e.rows[0].supply,n.frozen_amount=e.rows[0].frozen_amount,n.issuer=e.rows[0].issuer,n.release_amount_pertime=e.rows[0].release_amount_pertime,n.released_times=e.rows[0].released_times,n.next_release_day=m(e.rows[0].next_release_day);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.next=3,jt.getControlledAccounts("zjubcatokens").then(function(t){console.log(t)});case 3:return t.next=5,jt.getActions({account_name:"zjubcatokens",pos:-1,offset:-50}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){var r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log(a),e=a.actions.length,r=0,s=0;case 4:if(!(s<e)){t.next=13;break}if("transfer"!==a.actions[e-s-1].action_trace.act.name||"zjubcatokens"!==a.actions[e-s-1].action_trace.receipt.receiver){t.next=10;break}if(n.actions[r]={time:a.actions[e-s-1].block_time,from:a.actions[e-s-1].action_trace.act.data.from,to:a.actions[e-s-1].action_trace.act.data.to,quantity:a.actions[e-s-1].action_trace.act.data.quantity,memo:a.actions[e-s-1].action_trace.act.data.memo,height:a.actions[e-s-1].block_num,id:r},r+=1,20!=r){t.next=10;break}return t.abrupt("break",13);case 10:s++,t.next=4;break;case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 5:this.ok=!this.ok;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSelect:function(t){this.$router.push({name:"SearchAction",query:{item:t}})},toall:function(){this.$router.push({name:"pages",query:{account:"zjubcatokens"}})}}},f=h,p=(n("cb55"),n("2877")),v=Object(p["a"])(f,o,d,!1,null,null,null),b=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centered-container",staticStyle:{"margin-left":"4vw","margin-right":"4vw"}},[n("md-content",{staticClass:"md-elevation-3"},[n("div",{staticClass:"title"},[n("div",{staticClass:"md-title"},[t._v("ZJUBCA")]),n("div",{staticClass:"md-body-1"},[t._v("注册")])]),n("div",{staticClass:"form"},[n("md-field",[n("label",[t._v("真实姓名")]),n("md-input",{attrs:{autofocus:""},model:{value:t.studentInfo.FullName,callback:function(e){t.$set(t.studentInfo,"FullName",e)},expression:"studentInfo.FullName"}})],1),n("md-field",[n("label",[t._v("学号")]),n("md-input",{model:{value:t.studentInfo.studentId,callback:function(e){t.$set(t.studentInfo,"studentId",e)},expression:"studentInfo.studentId"}})],1)],1),n("md-card-actions",[n("md-button",{staticClass:"md-raised md-primary",staticStyle:{"margin-right":"0"},on:{click:t.regis}},[t._v("注册")])],1),t.loading?n("div",{staticClass:"loading-overlay"},[n("md-progress-spinner",{attrs:{"md-mode":"indeterminate","md-stroke":2}})],1):t._e()],1),n("div",{staticClass:"background"}),n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":4e3,"md-active":t.first,"md-persistent":""},on:{"update:mdActive":function(e){t.first=e},"update:md-active":function(e){t.first=e}}},[n("span",[t._v("注册失败!")]),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.first=!1,t.loading=!1}}},[t._v("ok")])],1),n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":4e3,"md-active":t.second,"md-persistent":""},on:{"update:mdActive":function(e){t.second=e},"update:md-active":function(e){t.second=e}}},[n("span",[t._v("注册成功!")]),n("md-button",{staticClass:"md-primary",on:{click:t.jump}},[t._v("ok")])],1)],1)},g=[],w=n("d3b7"),k=n.n(w),y={name:"App",data:function(){return{loading:!1,first:!1,position:"center",second:!1,studentInfo:{studentId:"",EosId:"",FullName:""}}},methods:{auth:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1},3e3)},jump:function(){this.second=!0,this.$router.push({name:"member"})},regis:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e={blockchain:"eos",protocol:"https",host:"api-kylin.eoslaomao.com",port:443,chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"},console.log(this.$store.state.scatter),t.next=5,this.$store.state.scatter.eos(e,k.a,{expireInSeconds:20});case 5:return n=t.sent,t.next=8,n.transaction({actions:[{account:"zjubcatokens",name:"transfer",authorization:[{actor:this.$store.state.account.name,permission:this.$store.state.account.authority}],data:{from:this.$store.state.account.name,to:"zjubcamember",quantity:"10000.0000 ZJUBCA",memo:"enroll$"+this.studentInfo.FullName+"$"+this.studentInfo.studentId}}]}).then(function(t){a.loading=!1,a.second=!0}).catch(function(t){a.first=!0,console.log(t)});case 8:t.sent;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},x=y,C=(n("0f72"),Object(p["a"])(x,_,g,!1,null,null,null)),S=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div"),n("div",[n("md-card",{attrs:{"md-with-hover":""}},[n("md-ripple",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("我的账户")])]),n("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:t.renew}},[t._v("续期")])],1)],1),n("md-card-content",[n("md-table",[n("md-table-row",[n("md-table-cell",[t._v("账户名")]),n("md-table-cell",[t._v(t._s(t.name))])],1),n("md-table-row",[n("md-table-cell",[t._v("学号")]),n("md-table-cell",[t._v(t._s(t.StudentId))])],1),n("md-table-row",[n("md-table-cell",[t._v("姓名")]),n("md-table-cell",[t._v(t._s(t.studentname))])],1),n("md-table-row",[n("md-table-cell",[t._v("注册时间")]),n("md-table-cell",[t._v(t._s(t.registration_date))])],1),n("md-table-row",[n("md-table-cell",[t._v("注册到期时间")]),n("md-table-cell",[t._v(t._s(t.expiration_date))])],1),n("md-table-row",[n("md-table-cell",[t._v("余额")]),n("md-table-cell",[t._v(t._s(t.left))])],1)],1)],1)],1)],1),n("md-card",{staticStyle:{"margin-top":"5vw"}},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("最近交易")])]),n("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.toall()}}},[t._v("所有交易")])],1)],1),n("md-card-content",[n("div",{staticClass:"table-responsive",staticStyle:{"margin-top":"1vw"}},[t.ok?n("md-progress-spinner",{staticClass:"md-size-1",staticStyle:{"margin-left":"37vw"},attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":3}}):n("table",{staticClass:"table",staticStyle:{"table-layout":"fixed"}},[n("thead",[n("tr",[n("th",[t._v("转帐方")]),n("th",[t._v("收款方")]),n("th",[t._v("数量")]),n("th",{staticClass:"hidden-xs"},[t._v("备忘")]),n("th",{staticClass:"hidden-xs"},[t._v("区块高度")]),n("th",{staticClass:"hidden-xs"},[t._v("时间")])])]),n("tbody",t._l(t.actions,function(e){return n("tr",{key:e.id,on:{click:function(n){return t.onSelect(e)}}},[n("td",[t._v(t._s(e.from))]),n("td",[t._v(t._s(e.to))]),n("td",[t._v(t._s(e.quantity))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.memo))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.height))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.time))])])}),0)])],1)])],1),n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":4e3,"md-active":t.success,"md-persistent":""},on:{"update:mdActive":function(e){t.success=e},"update:md-active":function(e){t.success=e}}},[n("span",[t._v("续期失败!")]),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.success=!1}}},[t._v("ok")])],1),n("md-dialog-confirm",{attrs:{"md-active":t.third,"md-content":"请先注册!","md-cancel-text":"以后再说","md-confirm-text":"前往注册"},on:{"update:mdActive":function(e){t.third=e},"update:md-active":function(e){t.third=e},"md-cancel":t.onCancel,"md-confirm":t.onConfirm}})],1)])},$=[],z=n("c7cc"),A=n.n(z),O=n("1112"),R=n.n(O),I=function(t){return new Date(1e3*l()(t)).toLocaleString().replace(/:\d{1,2}$/," ")},q={data:function(){return{ok:0,name:"",StudentId:"",pk:"",leftnum:"",actions:[],actionss:[],transactions:[],studentname:"",registration_date:"",expiration_date:"",success:!1,second:!1,third:!1,position:"center"}},computed:{left:function(){return this.mess(),this.leftnum}},methods:{onConfirm:function(){this.$router.push({name:"regis"})},onCancel:function(){this.$router.go(-1)},mess:function(){this.name=this.$store.state.account.name,this.getAccountInfo()},getAccountInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.getTableRows({code:"zjubcamember",scope:"zjubcamember",table:"members",json:"true"}).then(function(t){var e,a=t.rows.length;for(e=0;e<a;e++)if(t.rows[e].eosaccount===n.name){n.StudentId=t.rows[e].studentid,n.studentname=t.rows[e].studentname,n.registration_date=I(t.rows[e].registration_date),n.expiration_date=I(t.rows[e].expiration_date),t.rows[e].expiration_date<Date.parse(new Date)/1e3&&(n.expiration_date=n.expiration_date+"(注册已过期，请renew！）");break}e===a&&(n.third=!0)});case 2:return jt.getCurrencyBalance({code:"zjubcatokens",account:this.name,symbol:"ZJUBCA"}).then(function(t){n.leftnum=t[0]}),t.next=5,jt.getActions({account_name:this.name,pos:-1,offset:-50}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){var r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=a.actions.length,r=0,s=0;case 3:if(!(s<e)){t.next=12;break}if("transfer"!==a.actions[e-s-1].action_trace.act.name||"zjubcatokens"!==a.actions[e-s-1].action_trace.receipt.receiver){t.next=9;break}if(n.actions[r]={time:a.actions[e-s-1].block_time,from:a.actions[e-s-1].action_trace.act.data.from,to:a.actions[e-s-1].action_trace.act.data.to,quantity:a.actions[e-s-1].action_trace.act.data.quantity,memo:a.actions[e-s-1].action_trace.act.data.memo,height:a.actions[e-s-1].block_num,id:r},r+=1,20!=r){t.next=9;break}return t.abrupt("break",12);case 9:s++,t.next=3;break;case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 5:this.ok=!this.ok;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSelect:function(t){this.$router.push({name:"SearchAction",query:{item:t}})},toall:function(){this.$router.push({name:"pages",query:{account:this.name}})},renew:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={blockchain:"eos",protocol:"https",host:"api-kylin.eoslaomao.com",port:443,chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"},t.next=3,this.$store.state.scatter.eos(e,k.a,{expireInSeconds:20});case 3:return n=t.sent,t.next=6,n.transaction({actions:[{account:"zjubcatokens",name:"transfer",authorization:[{actor:this.$store.state.account.name,permission:this.$store.state.account.authority}],data:{from:this.$store.state.account.name,to:"zjubcamember",quantity:"10000.0000 ZJUBCA",memo:"renew$my$account"}}]}).catch(function(t){console.log(t),a.success=!0});case 6:t.sent;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},P=q,T=(n("a85f"),Object(p["a"])(P,j,$,!1,null,"27b0cd07",null)),M=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-card",{attrs:{"md-with-hover":""}},[n("md-ripple",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.message))])]),n("md-card-content",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"table-responsive",staticStyle:{"margin-top":"1vw"}},[t.ok?n("md-progress-spinner",{staticClass:"md-size-1",staticStyle:{"margin-left":"37vw"},attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":3}}):n("table",{staticClass:"table",staticStyle:{"table-layout":"fixed"}},[n("thead",[n("tr",[n("th",[t._v("from")]),n("th",[t._v("to")]),n("th",[t._v("quantity")]),n("th",{staticClass:"hidden-xs"},[t._v("memo")]),n("th",{staticClass:"hidden-xs"},[t._v("区块高度")]),n("th",{staticClass:"hidden-xs"},[t._v("time")])])]),n("tbody",t._l(t.actions,function(e){return n("tr",{key:e.id,on:{click:function(n){return t.onSelect(e)}}},[n("td",[t._v(t._s(e.from))]),n("td",[t._v(t._s(e.to))]),n("td",[t._v(t._s(e.quantity))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.memo))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.height))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.time))])])}),0)])],1)]),n("md-card-actions",[n("span",[t._v(t._s(this.message))]),n("span",[t._v("第"+t._s(this.currentpage)+" 页")]),n("md-button",{on:{click:function(e){return t.prepage()}}},[n("md-icon",[t._v("keyboard_arrow_left")])],1),n("md-button",{on:{click:function(e){return t.nextpage()}}},[n("md-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)],1),n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":4e3,"md-active":t.first,"md-persistent":""},on:{"update:mdActive":function(e){t.first=e},"update:md-active":function(e){t.first=e}}},[n("span",[t._v("这是第一页了!")]),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.first=!1}}},[t._v("ok")])],1),n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":4e3,"md-active":t.last,"md-persistent":""},on:{"update:mdActive":function(e){t.last=e},"update:md-active":function(e){t.last=e}}},[n("span",[t._v("这是最后一页了!")]),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.last=!1}}},[t._v("ok")])],1)],1)},N=[],B={data:function(){return{currentpage:1,actions:[],actionss:[],transactions:[],loadpertime:10,ok:1,total:0,pagenum:0,allpage:0,account:"",actionindex:[],first:!1,last:!1,position:"center"}},computed:{message:function(){return this.actionindex[0]=-1,this.account=this.$route.query.account,this.getPage(),"Actions"}},methods:{getPage:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(1!=this.currentpage&&this.actionindex[this.currentpage-1]<0)){t.next=5;break}return this.last=!0,this.currentpage=this.currentpage-1,this.getPage(),t.abrupt("return");case 5:return t.next=7,jt.getActions({account_name:this.account,pos:this.actionindex[this.currentpage-1],offset:-60}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){var r,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=a.actions.length,1===n.currentpage&&(n.actionindex[0]=a.actions[e-1].account_action_seq),0!=e){t.next=7;break}return n.last=!0,n.currentpage=n.currentpage-1,n.getPage(),t.abrupt("return");case 7:for(r=0,s=0;i<10;i++)actions[i]={};s=0;case 11:if(!(s<e)){t.next=20;break}if("transfer"!==a.actions[e-s-1].action_trace.act.name||"zjubcatokens"!==a.actions[e-s-1].action_trace.receipt.receiver){t.next=17;break}if(n.actions[r]={time:a.actions[e-s-1].block_time,from:a.actions[e-s-1].action_trace.act.data.from,to:a.actions[e-s-1].action_trace.act.data.to,quantity:a.actions[e-s-1].action_trace.act.data.quantity,memo:a.actions[e-s-1].action_trace.act.data.memo,height:a.actions[e-s-1].block_num,id:r},r+=1,10!=r){t.next=17;break}return t.abrupt("break",20);case 17:s++,t.next=11;break;case 20:n.actionindex[n.currentpage]=n.actionindex[n.currentpage-1]-s;case 21:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 7:this.ok=!this.ok;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),nextpage:function(){this.currentpage=this.currentpage+1,this.ok=0,this.getPage()},prepage:function(){this.currentpage-1>=1?(this.currentpage=this.currentpage-1,this.ok=0,this.getPage()):this.first=!0},onSelect:function(t){this.$router.push({name:"SearchAction",query:{item:t}})}}},D=B,J=(n("27ff"),Object(p["a"])(D,E,N,!1,null,null,null)),U=J.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("md-card",{staticClass:"md-alignment-space-between",attrs:{"md-with-hover":""}},[n("md-ripple",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("账户信息")])]),n("md-card-content",[n("md-table",{staticStyle:{"table-layout":"fixed",overflow:"hidden"}},[n("md-table-row",[n("md-table-cell",[t._v("账户名")]),n("md-table-cell",[t._v(t._s(t.name))])],1),n("md-table-row",[n("md-table-cell",[t._v("学号")]),n("md-table-cell",[t._v(t._s(t.StudentId))])],1),n("md-table-row",[n("md-table-cell",[t._v("姓名")]),n("md-table-cell",[t._v(t._s(t.studentname))])],1),n("md-table-row",[n("md-table-cell",[t._v("注册时间")]),n("md-table-cell",[t._v(t._s(t.registration_date))])],1),n("md-table-row",[n("md-table-cell",[t._v("余额")]),n("md-table-cell",[t._v(t._s(t.left))])],1)],1)],1)],1)],1),n("md-card",{staticStyle:{"margin-top":"4vw"}},[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("最近交易")])]),n("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.toall()}}},[t._v("所有交易")])],1)],1),n("md-card-content",[n("div",{staticClass:"table-responsive"},[t.ok?n("md-progress-spinner",{staticClass:"md-size-1",staticStyle:{"margin-left":"37vw"},attrs:{"md-mode":"indeterminate","md-diameter":30,"md-stroke":3}}):n("table",{staticClass:"table",staticStyle:{"table-layout":"fixed"}},[n("thead",[n("tr",[n("th",[t._v("转帐方")]),n("th",[t._v("收款方")]),n("th",[t._v("数量")]),n("th",{staticClass:"hidden-xs"},[t._v("备忘")]),n("th",{staticClass:"hidden-xs"},[t._v("区块高度")]),n("th",{staticClass:"hidden-xs"},[t._v("时间")])])]),n("tbody",t._l(t.actions,function(e){return n("tr",{key:e.id,on:{click:function(n){return t.onSelect(e)}}},[n("td",[t._v(t._s(e.from))]),n("td",[t._v(t._s(e.to))]),n("td",[t._v(t._s(e.quantity))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.memo))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.height))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.time))])])}),0)])],1)])],1)],1)])},F=[],V=function(t){return new Date(1e3*l()(t)).toLocaleString().replace(/:\d{1,2}$/," ")},L={data:function(){return{ok:0,name:"",StudentId:"",pk:"",leftnum:"",actions:[],actionss:[],transactions:[],studentname:"",registration_date:""}},computed:{left:function(){return this.name=this.$route.query.Account,this.getAccountInfo(),this.leftnum}},methods:{getAccountInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.getTableRows({code:"zjubcamember",scope:"zjubcamember",table:"members",json:"true"}).then(function(t){var e,a=t.rows.length;for(e=0;e<a;e++)if(t.rows[e].eosaccount===n.name){n.StudentId=t.rows[e].studentid,n.studentname=t.rows[e].studentname,n.registration_date=V(t.rows[e].registration_date);break}});case 2:return jt.getCurrencyBalance({code:"zjubcatokens",account:this.name,symbol:"ZJUBCA"}).then(function(t){n.leftnum=t[0]}),t.next=5,jt.getActions({account_name:this.name,pos:-1,offset:-50}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(a){var r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=a.actions.length,r=0,s=0;case 3:if(!(s<e)){t.next=12;break}if("transfer"!==a.actions[e-s-1].action_trace.act.name||"zjubcatokens"!==a.actions[e-s-1].action_trace.receipt.receiver){t.next=9;break}if(n.actions[r]={time:a.actions[e-s-1].block_time,from:a.actions[e-s-1].action_trace.act.data.from,to:a.actions[e-s-1].action_trace.act.data.to,quantity:a.actions[e-s-1].action_trace.act.data.quantity,memo:a.actions[e-s-1].action_trace.act.data.memo,height:a.actions[e-s-1].block_num,id:r},r+=1,20!=r){t.next=9;break}return t.abrupt("break",12);case 9:s++,t.next=3;break;case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 5:this.ok=!this.ok;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSelect:function(t){this.$router.push({name:"SearchAction",query:{item:t}})},toall:function(){this.$router.push({name:"pages",query:{account:this.name}})}}},K=L,G=Object(p["a"])(K,Z,F,!1,null,"30623def",null),H=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-card",{attrs:{"md-with-hover":""}},[n("md-ripple",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("协会成员")])]),n("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.regis()}}},[t._v("注册")])],1)],1),n("md-card-content",[n("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[n("md-input",{attrs:{placeholder:"Search by name..."},on:{input:t.searchOnTable},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("姓名")]),n("th",{staticClass:"hidden-xs"},[t._v("学号")]),n("th",{staticClass:"hidden-xs"},[t._v("EOS账号")]),n("th",[t._v("注册时间")]),n("th",{staticClass:"hidden-xs"},[t._v("到期时间")])])]),n("tbody",t._l(t.searched,function(e){return n("tr",{key:e.height,on:{click:function(n){return t.onSelect(e)}}},[n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.studentid))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.eosid))]),n("td",[t._v(t._s(e.registime))]),n("td",{staticClass:"hidden-xs"},[t._v(t._s(e.endtime))])])}),0)])],1)],1)],1)],1)},W=[],X=(n("386d"),n("6762"),n("2fdb"),n("6b54"),function(t){return t.toString().toLowerCase()}),Y=function(t,e){return e?t.filter(function(t){return X(t.name).includes(X(e))}):t},tt=function(t){return new Date(1e3*l()(t)).toLocaleString().replace(/:\d{1,2}$/," ")},et={name:"TableSearch",data:function(){return{search:null,searched:[],users:[],ok:0}},methods:{newUser:function(){this.$router.push({name:"regis"})},searchOnTable:function(){this.searched=Y(this.users,this.search)},getMembers:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.getTableRows({code:"zjubcamember",scope:"zjubcamember",table:"members",json:"true"}).then(function(t){var n,a=t.rows.length;for(n=0;n<a;n++)e.users[n]={name:t.rows[a-n-1].studentname,studentid:t.rows[a-n-1].studentid,eosid:t.rows[a-n-1].eosaccount,registime:tt(t.rows[a-n-1].registration_date),endtime:tt(t.rows[a-n-1].expiration_date)},t.rows[a-n-1].expiration_date<Date.parse(new Date)/1e3&&(e.users[n].name=e.users[n].name+"(已过期）");e.searched=e.users});case 2:this.ok=!this.ok;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSelect:function(t){this.$router.push({name:"SearchAccount",query:{Account:t.eosid}})},regis:function(){this.$router.push({name:"regis"})}},created:function(){this.getMembers()}},nt=et,at=(n("c2fc"),Object(p["a"])(nt,Q,W,!1,null,"ee434a3a",null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("交易信息")])]),n("md-card-content",{staticStyle:{overflow:"hidden"}},[n("md-table",{staticStyle:{overflow:"hidden"}},[n("md-table-row",{key:1},[n("md-table-cell",[t._v("交易时间")]),n("md-table-cell",[t._v(t._s(t.item.time))])],1),n("md-table-row",{key:2},[n("md-table-cell",[t._v("转帐方")]),n("md-table-cell",[t._v(t._s(t.triger))])],1),n("md-table-row",{key:3},[n("md-table-cell",[t._v("收款方")]),n("md-table-cell",[t._v(t._s(t.item.to))])],1),n("md-table-row",{key:4},[n("md-table-cell",[t._v("数目")]),n("md-table-cell",[t._v(t._s(t.item.quantity))])],1),n("md-table-row",{key:5},[n("md-table-cell",[t._v("备忘")]),n("md-table-cell",[t._v(t._s(t.item.memo))])],1),n("md-table-row",{key:6},[n("md-table-cell",[t._v("区块高度")]),n("md-table-cell",[t._v(t._s(t.item.height))])],1)],1)],1)],1)},it=[],ct={data:function(){return{item:{}}},computed:{triger:function(){return this.getParams(),this.item.from}},methods:{getParams:function(){this.item=this.$route.query.item}}},ot=ct,dt=(n("d7cd"),Object(p["a"])(ot,st,it,!1,null,null,null)),ut=dt.exports;a["default"].use(c["a"]);var lt=new c["a"]({base:"/app/",routes:[{path:"/",name:"shouye",component:b},{path:"/regis",name:"regis",component:S},{path:"/account",name:"account",component:M},{path:"/pages",name:"pages",component:U},{path:"/SearchAccount",name:"SearchAccount",component:H},{path:"/member",name:"member",component:rt},{path:"/SearchAction",name:"SearchAction",component:ut}]}),mt=n("2f62");a["default"].use(mt["a"]);var ht={account:null,login:!1,scatter:null,eos:null,searchaccount:null,item:null,pageaccount:null},ft=new mt["a"].Store({state:ht}),pt={name:"Normal",data:function(){return{Account:null,menuVisible:!1,isShow:!1,first:!1}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initialize();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),watch:{$route:function(t,e){"/"==t.path||"/account"==t.path||"/member"==t.path?this.isShow=!1:this.isShow=!0}},methods:{login:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!=this.$store.state.login){t.next=6;break}return this.first=!0,t.next=4,this.initialize();case 4:t.next=7;break;case 6:return t.abrupt("return");case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goback:function(){lt.go(-1)},initialize:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1!=this.$store.state.login){t.next=3;break}return console.log("login"),t.abrupt("return");case 3:return t.next=5,A.a.plugins(new R.a);case 5:return t.next=7,A.a.scatter.connect("ZJUBCA.TOKEN",{initTimeout:1e4}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=4;break}return e.first=!0,e.Account="登陆",t.abrupt("return",!1);case 4:return a={blockchain:"eos",protocol:"https",host:"api-kylin.eoslaomao.com",port:443,chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"},r=A.a.scatter,t.next=8,r.getIdentity({accounts:[a]}).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(n){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=r.identity.accounts.find(function(t){return"eos"===t.blockchain}),console.log(a),e.$store.state.scatter=r,e.$store.state.account=a,e.$store.state.login=!0,e.Account=a.name;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},vt=pt,bt=(n("d03d"),Object(p["a"])(vt,r,s,!1,null,"8df05d36",null)),_t=bt.exports,gt=n("9c30"),wt=(n("51de"),n("e094"),n("487a")),kt=n.n(wt),yt=n("43f9"),xt=n.n(yt);n.d(e,"eos",function(){return jt}),a["default"].config.productionTip=!1,a["default"].use(gt["MdButton"]),a["default"].use(gt["MdTabs"]),a["default"].use(gt["MdIcon"]),a["default"].use(gt["MdProgress"]),a["default"].use(gt["MdSnackbar"]),a["default"].use(gt["MdDialog"]),a["default"].use(gt["MdField"]),a["default"].use(gt["MdRadio"]),a["default"].use(xt.a),a["default"].use(lt),a["default"].use(ft),a["default"].use(kt.a);var Ct=n("2d76"),St={chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",keyProvider:[],httpEndpoint:"https://api-kylin.eoslaomao.com",expireInSeconds:60,broadcast:!0,verbose:!1,sign:!0},jt=Ct(St);new a["default"]({router:lt,store:ft,render:function(t){return t(_t)}}).$mount("#app")},6159:function(t,e,n){},"6a06":function(t,e,n){},"6e74":function(t,e,n){},"766c":function(t,e,n){},a85f:function(t,e,n){"use strict";var a=n("0820"),r=n.n(a);r.a},c2fc:function(t,e,n){"use strict";var a=n("3374"),r=n.n(a);r.a},cb55:function(t,e,n){"use strict";var a=n("6e74"),r=n.n(a);r.a},d03d:function(t,e,n){"use strict";var a=n("6a06"),r=n.n(a);r.a},d7cd:function(t,e,n){"use strict";var a=n("33d4"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a10ffe98.js.map