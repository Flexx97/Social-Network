(this["webpackJsonpit-react-kabzda-1"]=this["webpackJsonpit-react-kabzda-1"]||[]).push([[0],{10:function(e,a,t){e.exports={message:"Dialogs_message__3AC4Y",active:"Dialogs_active__2E0jx",dialogs:"Dialogs_dialogs__352bg",dialog:"Dialogs_dialog__23Eoq",chats:"Dialogs_chats__32Bm0",send:"Dialogs_send__2F9xy",btn:"Dialogs_btn__1YHVM"}},13:function(e,a,t){e.exports={uBlock:"users_uBlock__32N58",avatar:"users_avatar__3c1ry",blockName:"users_blockName__85_SX",btn:"users_btn__28Nfk",number:"users_number__151KN",numberActive:"users_numberActive__nPGYg"}},23:function(e,a,t){e.exports={best:"BestFriends_best__1S-FN",decor:"BestFriends_decor__1DJmK",frpos:"BestFriends_frpos__3xBWG",img:"BestFriends_img__1nllb"}},24:function(e,a,t){e.exports={item:"Post_item__2OxKC",block:"Post_block__aBsxY",likely:"Post_likely__2z6NV",img:"Post_img__2Uoru"}},25:function(e,a,t){e.exports={myp:"myPosts_myp__3efv-",textarea:"myPosts_textarea__227XI",btn:"myPosts_btn__3Kk4N",post:"myPosts_post__14ouh"}},3:function(e,a,t){e.exports={nav:"nav-bar_nav__3sa2Y",item:"nav-bar_item__1qPG_",active:"nav-bar_active__2WyWO",best:"nav-bar_best__2K3__"}},45:function(e,a,t){e.exports=t.p+"static/media/user.65d84bf5.png"},46:function(e,a,t){e.exports=t.p+"static/media/audio.8f8f3d19.svg"},47:function(e,a,t){e.exports={avatar:"userinfo_avatar__2WOm7"}},48:function(e,a,t){e.exports={header:"header_header__2nDLm"}},49:function(e,a,t){e.exports=t(81)},55:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(21),c=t(28),o=t(2),l={PostData:[{like:20,message:"Hi, how are you?"},{like:15486,message:"It's my first post"}],NewPostText:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0445\u043e\u0447\u0443 \u0432\u0430\u043c \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c...",profile:null},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_TEXT_POST":return Object(o.a)({},e,{NewPostText:a.NewPostText});case"ADD_POST":var t={like:0,message:e.NewPostText};return Object(o.a)({},e,{PostData:[].concat(Object(c.a)(e.PostData),[t]),NewPostText:""});case"NEW_PROFILE":return Object(o.a)({},e,{profile:a.profile});default:return e}},u={Data:[{id:1,name:"Katya"},{id:2,name:"Fedor"},{id:3,name:"Alexey"}],MesData:[{message:"what are you doing"},{message:"You suck"}],updateMessage:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_MESSAGE_TEXT":return Object(o.a)({},e,{updateMessage:a.newMessage});case"ADD_TEXT":return Object(o.a)({},e,{MesData:[].concat(Object(c.a)(e.MesData),[{message:e.updateMessage}]),updateMessage:""});default:return e}},p={NavBestFriends:[{name:"Katya",img:"https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg"},{name:"Stepa",img:"https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"},{name:"Vitya",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;arguments.length>1&&arguments[1];return e},g={users:[],pageNumber:1,PageSize:5,totalCount:50,loaded:!0,page:[1,2,3,4]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(o.a)({},e,{users:e.users.map((function(e){return e.id===a.userID?Object(o.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(o.a)({},e,{users:e.users.map((function(e){return e.id===a.userID?Object(o.a)({},e,{followed:!1}):e}))});case"SETUSERS":return Object(o.a)({},e,{users:a.users});case"CHANGEPAGE":return Object(o.a)({},e,{pageNumber:a.num});case"SET_TOTAL_COUNT":return Object(o.a)({},e,{totalCount:a.totalCount});case"UPDATEPAGE":return Object(o.a)({},e,{pageNumber:a.updateNumber});case"UPDATEPAGENUMBER":return Object(o.a)({},e,{page:void 0===a.newPage?e.page:a.newPage});case"TOGGLE_LOADING":return Object(o.a)({},e,{loaded:a.val});case"LOAD_USERS":return Object(o.a)({},e,{users:[]});default:return e}},E={userId:null,login:null,isAuth:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object(o.a)({},e,{userId:a.userId,login:a.login,isAuth:!0});default:return e}},_=Object(s.b)({profilePage:i,messagePage:m,BestFriends:d,UsersPage:f,auth:b}),v=Object(s.c)(_),h=t(26),N=t.n(h),P=(t(55),t(3)),O=t.n(P),y=t(4),w=t(23),j=t.n(w),T=function(e){var a=e.FriendsWay.map((function(e){return r.a.createElement("div",null,r.a.createElement("img",{className:j.a.img,src:e.img}),r.a.createElement("div",null,e.name))}));return r.a.createElement("div",{className:j.a.best},r.a.createElement("div",{className:j.a.decor},"Best Friends"),r.a.createElement("div",{className:j.a.frpos},a))},A=t(5),D=Object(A.b)((function(e){return{FriendsWay:e.BestFriends.NavBestFriends}}),(function(e){return{changeFriends:function(a){e(d(a))}}}))(T),C=function(e){return r.a.createElement("nav",{className:O.a.nav},r.a.createElement(y.b,{to:"/profile",className:O.a.item,activeClassName:O.a.active},"Profile"),r.a.createElement(y.b,{to:"/dialogs",className:O.a.item,activeClassName:O.a.active},"Messages"),r.a.createElement(y.b,{to:"/users",className:O.a.item,activeClassName:O.a.active},"Users"),r.a.createElement(y.b,{to:"/news",className:O.a.item,activeClassName:O.a.active},"News"),r.a.createElement(y.b,{to:"/music",className:O.a.item,activeClassName:O.a.active},"Music"),r.a.createElement(y.b,{to:"settings",className:"".concat(O.a.item," ").concat(O.a.important),activeClassName:O.a.active},"Settings"),r.a.createElement("div",{className:"".concat(O.a.best," ").concat(O.a.item)},r.a.createElement(D,null)))},S=t(12),k=(t(60),function(){return r.a.createElement("div",null,r.a.createElement("p",null,"News"))}),U=(t(61),function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Music"))}),x=(t(62),function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Settings"))}),M=t(10),L=t.n(M),F=function(e){return r.a.createElement("div",{className:"".concat(L.a.dialog," ").concat(L.a.active)},r.a.createElement(y.b,{to:"/dialogs/"+e.id},e.name))},I=function(e){return r.a.createElement("div",{className:L.a.message},e.message)},W=function(e){var a=r.a.createRef(),t=e.Data.map((function(e){return r.a.createElement(F,{name:e.name,id:e.id})})),n=e.newMessageWay.map((function(e){return r.a.createElement(I,{message:e.message,id:e.id})}));return r.a.createElement("div",{className:L.a.message},r.a.createElement("div",{className:L.a.dialogs},t),r.a.createElement("div",{className:L.a.chats},n,r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.changeMessageWay(t)},ref:a,className:L.a.send,value:e.updateMessage}),r.a.createElement("button",{onClick:e.addMessageWay,className:L.a.btn},"send"))))},B=Object(A.b)((function(e){return{newMessageWay:e.messagePage.MesData,updateMessage:e.messagePage.updateMessage,Data:e.messagePage.Data}}),(function(e){return{addMessageWay:function(){e({type:"ADD_TEXT"})},changeMessageWay:function(a){e({type:"UPDATE_MESSAGE_TEXT",newMessage:a})}}}))(W),G=t(16),z=t(17),R=t(19),X=t(18),Y=t(20),K=t(13),H=t.n(K),V=t(45),J=t.n(V),q=function(e){var a=Math.ceil(e.totalCount/e.PageSize);return e.page.splice(3,1,a),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return function(){var a=e.pageNumber-1,t=e.page.map((function(e){return e-1}));e.ChangePage(a,t)}()}},"Next"),r.a.createElement("span",null,e.page.map((function(a){return r.a.createElement("span",{className:"".concat(a===e.pageNumber&&H.a.numberActive," ").concat(H.a.number),onClick:function(){e.ChangePage(a)}},a)}))),r.a.createElement("span",{onClick:function(){return function(){var a=e.pageNumber+1,t=e.page.map((function(e){return e+1}));e.ChangePage(a,t)}()}},"Next")),e.userState.map((function(a){return r.a.createElement("div",{className:H.a.uBlock,key:a.id},r.a.createElement(y.b,{to:"profile/".concat(a.id)},r.a.createElement("img",{src:null==a.photos.small?J.a:a.photos.small,className:H.a.avatar})),r.a.createElement("div",{className:H.a.blockName},r.a.createElement("h5",null,a.name),r.a.createElement("p",null,a.status)),a.followed?r.a.createElement("button",{onClick:function(){e.unfollow(a.id)},className:H.a.btn},"Unfollow"):r.a.createElement("button",{onClick:function(){e.follow(a.id)},className:H.a.btn},"Follow"))})))},Q=t(14),Z=t(46),$=t.n(Z),ee=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:$.a}))},ae=function(e){function a(){var e,t;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(R.a)(this,(e=Object(X.a)(a)).call.apply(e,[this].concat(r)))).ChangePage=function(e,a){t.props.usersLoad(),t.props.toggleLoad(!0),t.props.updateChangePage(e),t.props.updateNumberPage(a),Q.get("https://social-network.samuraijs.com/api/1.0/users?api-key=5e1194d8-e287-47d0-9255-6744293aab45&page=".concat(e,"&count=").concat(t.props.PageSize)).then((function(e){t.props.toggleLoad(!1),t.props.getSetUsers(e.data.items)}))},t}return Object(Y.a)(a,e),Object(z.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.usersLoad(),this.props.toggleLoad(!0),Q.get("https://social-network.samuraijs.com/api/1.0/users?api-key=5e1194d8-e287-47d0-9255-6744293aab45&page=".concat(this.props.pageNumber,"&count=").concat(this.props.PageSize)).then((function(a){e.props.toggleLoad(!1),e.props.getSetUsers(a.data.items),e.props.setCountTotal(a.data.totalCount)}))}},{key:"render",value:function(){return r.a.createElement("div",null,!0===this.props.loaded?r.a.createElement(ee,null):null,r.a.createElement(q,{page:this.props.page,pageNumber:this.props.pageNumber,userState:this.props.userState,totalCount:this.props.totalCount,PageSize:this.props.PageSize,ChangePage:this.ChangePage,follow:this.props.follow,unfollow:this.props.unFollow,UpdateNumber:this.props.UpdateNumber}))}}]),a}(r.a.Component),te=Object(A.b)((function(e){return{userState:e.UsersPage.users,pageNumber:e.UsersPage.pageNumber,PageSize:e.UsersPage.PageSize,totalCount:e.UsersPage.totalCount,page:e.UsersPage.page,loaded:e.UsersPage.loaded}}),{follow:function(e){return{type:"FOLLOW",userID:e}},unFollow:function(e){return{type:"UNFOLLOW",userID:e}},getSetUsers:function(e){return{type:"SETUSERS",users:e}},updateChangePage:function(e){return{type:"CHANGEPAGE",num:e}},setCountTotal:function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}},pageUpdate:function(e){return{type:"UPDATEPAGE",updateNumber:e}},updateNumberPage:function(e){return{type:"UPDATEPAGENUMBER",newPage:e}},toggleLoad:function(e){return{type:"TOGGLE_LOADING",val:e}},usersLoad:function(){return{type:"LOAD_USERS"}}})(ae),ne=(t(80),t(47)),re=t.n(ne),se=function(e){return e.userProfile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:re.a.avatar},r.a.createElement("img",{src:e.userProfile.photos.small,height:"100px",width:"100px"}),r.a.createElement("div",null,e.userProfile.fullName)))):r.a.createElement(ee,null)},ce=t(24),oe=t.n(ce),le=function(e){return r.a.createElement("div",{className:oe.a.block},r.a.createElement("div",{className:oe.a.item},e.message),r.a.createElement("span",{className:oe.a.likely},r.a.createElement("img",{src:"https://1.bp.blogspot.com/-d3LozscUMBY/Vtz13aLffMI/AAAAAAAALp0/Y9pFym980s0/s1600/love.png",className:oe.a.img}),e.like))},ie=t(25),ue=t.n(ie),me=function(e){var a=e.newPostWay.map((function(e){return r.a.createElement(le,{message:e.message,like:e.like})})),t=r.a.createRef();return r.a.createElement("div",null,r.a.createElement("div",{className:ue.a.myp},r.a.createElement("div",null,"New posts"),r.a.createElement("textarea",{ref:t,className:ue.a.textarea,onChange:function(){var a=t.current.value;e.ChangeAction(a)},value:e.PostText}),r.a.createElement("button",{className:ue.a.btn,onClick:e.onAddPost},"send")),r.a.createElement("div",{className:ue.a.post},"My post"),a)},pe=Object(A.b)((function(e){return{newPostWay:e.profilePage.PostData,PostText:e.profilePage.NewPostText}}),(function(e){return{onAddPost:function(){e({type:"ADD_POST"})},ChangeAction:function(a){e(function(e){return{type:"UPDATE_TEXT_POST",NewPostText:e}}(a))}}}))(me),de=function(e){return r.a.createElement("div",null,r.a.createElement(se,{userProfile:e.userProfile}),r.a.createElement(pe,{store:e.store}))},ge=function(e){function a(){return Object(G.a)(this,a),Object(R.a)(this,Object(X.a)(a).apply(this,arguments))}return Object(Y.a)(a,e),Object(z.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.userId;a=a?this.props.match.params.userId:2,Q.get("https://social-network.samuraijs.com/api/1.0/profile/"+a,{}).then((function(a){e.props.profileUpdate(a.data)}))}},{key:"render",value:function(){return r.a.createElement(de,this.props)}}]),a}(r.a.Component),fe=Object(A.b)((function(e){return{userProfile:e.profilePage.profile}}),{profileUpdate:function(e){return{type:"NEW_PROFILE",profile:e}}})(Object(S.e)(ge)),Ee=t(48),be=t.n(Ee),_e=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:be.a.header},e.login))},ve=function(e){function a(){return Object(G.a)(this,a),Object(R.a)(this,Object(X.a)(a).apply(this,arguments))}return Object(Y.a)(a,e),Object(z.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.get("https://social-network.samuraijs.com/api/1.0/profile/auth/me",{withCredentials:!0,credentials:"include",referrerPolicy:origin}).then((function(a){e.props.setUserState(a.data.data.userId,a.data.data.login)}))}},{key:"render",value:function(){return r.a.createElement(_e,this.props)}}]),a}(r.a.Component),he=Object(A.b)((function(e){}),{setUserState:function(e,a){return{type:"SET_USER",userId:e,login:a}}})(ve),Ne=function(){return r.a.createElement(y.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(he,null),r.a.createElement(C,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(S.a,{path:"/dialogs",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(S.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(S.a,{path:"/users",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(S.a,{path:"/news",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(S.a,{path:"/music",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(S.a,{path:"/settings",render:function(){return r.a.createElement(x,null)}}))))};N.a.render(r.a.createElement(y.a,null,r.a.createElement(A.a,{store:v},r.a.createElement(Ne,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.722dcabd.chunk.js.map