(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,i){},104:function(e,t,i){},107:function(e,t,i){},110:function(e,t,i){},111:function(e,t,i){},112:function(e,t,i){},113:function(e,t,i){},114:function(e,t,i){},115:function(e,t,i){},116:function(e,t,i){},117:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(10),c=i.n(s),r=(i(81),i(14)),o=i(15),l=i(17),d=i(16),u=i(13),h=i(9),j=i(42),m=i(8),b=i.n(m),v=function(e){e?b.a.defaults.headers.common.Autoryzacja=e:delete b.a.defaults.headers.common.Autoryzacja},p="ACTION_GET_ERRORS",O="ACTION_USER_LOADING",x="ACTION_SET_THE_CURRENT_USER",f=function(e){return{type:x,payload:e}},g=function(){return function(e){localStorage.removeItem("jwtToken"),v(!1),e(f({}))}},N=i(11),_=i(34),k=i(65),w=i(26),y=i(102),C={isAuthenticated:!1,user:{},loading:!1};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!y(t.payload),user:t.payload});case O:return Object(w.a)(Object(w.a)({},e),{},{loading:!0});default:return e}},S={};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;default:return e}},D=Object(_.b)({auth:E,errors:z}),A=[k.a],T=Object(_.d)(D,{},Object(_.c)(_.a.apply(void 0,A),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||_.c)),M=(i(103),i(45)),I=i(148),P=i.p+"static/media/1.ba4de645.PNG",L=(i(104),i(72)),U=i(1),F=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://ubezpieczenia-server.herokuapp.com/api/users/".concat(this.props.auth.user.id)).then((function(t){e.setState({role:t.data.role})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,i=this.props.auth.user;return Object(U.jsx)("nav",{children:Object(U.jsxs)("div",{className:"nav-container",children:[Object(U.jsx)("div",{className:"nav-logo ",to:"/",children:Object(U.jsx)("p",{children:"Agencja Ubezpieczeniowa"})}),Object(U.jsx)("div",{className:"bars",children:Object(U.jsx)(L.a,{})}),Object(U.jsxs)("div",{className:"nav-menu",children:[Object(U.jsx)(u.b,{className:"nv-element nv",to:"/home",activeStyle:!0,children:"Strona G\u0142\xf3wna"}),Object(U.jsx)(u.b,{className:"nv-element nv",to:"/calendar",activeStyle:!0,children:"Kalendarz"}),"admin"===(null===(e=this.state)||void 0===e?void 0:e.role)&&Object(U.jsx)(u.b,{className:"nv-element nv",to:"/statistics",children:"Statystyki"}),"admin"===(null===(t=this.state)||void 0===t?void 0:t.role)&&Object(U.jsx)(u.b,{className:"nv-element nv",to:"/confirmation",children:"Agenci"}),Object(U.jsx)(u.b,{className:"nv-element nv",to:"/archives",activeStyle:!0,children:"Archiwum"}),Object(U.jsxs)("div",{className:"nv-login nav-menu",children:[Object(U.jsxs)("div",{className:"nickname-home",children:[Object(U.jsx)("b",{children:"Cze\u015b\u0107, "})," ",i.name.split(" ")[0]]}),Object(U.jsx)("i",{className:"fas fa-power-off nv-plus",onClick:this.onLogoutClick})]})]})]})})}}]),i}(a.Component),R=Object(N.b)((function(e){return{auth:e.auth}}),{logoutUser:g})(F),q=(i(107),i(36)),B=(i(110),i(38)),V=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"container-footer",children:[Object(U.jsxs)("div",{className:"footer-social-media",children:[Object(U.jsx)(u.b,{className:"socials",to:"#",activeStyle:!0,children:Object(U.jsx)(q.a,{icon:B.a})}),Object(U.jsx)(u.b,{className:"socials",to:"#",activeStyle:!0,children:Object(U.jsx)(q.a,{icon:B.b})}),Object(U.jsx)(u.b,{className:"socials",to:"#",activeStyle:!0,children:Object(U.jsx)(q.a,{icon:B.c})}),Object(U.jsx)(u.b,{className:"socials",to:"#",activeStyle:!0,children:Object(U.jsx)(q.a,{icon:B.d})})]}),Object(U.jsx)("div",{className:"footer-text",children:Object(U.jsxs)("p",{children:["Wszelkie prawa zastrze\u017cone  ","\xa9","  ",(new Date).getFullYear()]})})]})}}]),i}(a.Component),W={hidden:{x:50,opacity:0},visible:{x:0,opacity:1,transition:{delay:.5,duration:.5}}},G=function(){var e=Object(a.useState)(1),t=Object(M.a)(e,2),i=t[0],n=t[1],s=function(){n(6===i?1:i+1)};return setTimeout(s,12e3),Object(U.jsxs)("div",{children:[Object(U.jsx)(R,{}),Object(U.jsx)("div",{className:"container-pages container-pages-home",children:Object(U.jsxs)("div",{className:"row-home",children:[Object(U.jsx)("i",{className:"fas fa-arrow-left arrow-home",onClick:function(){n(1===i?6:i-1)}}),1===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie na \u017cycie"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),2===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie zdrowotne"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),3===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie na podr\xf3\u017c"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),4===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie dla firm"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),5===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie samochodu"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),6===i&&Object(U.jsxs)(I.a.div,{className:"img-home",variants:W,initial:"hidden",animate:"visible",children:[Object(U.jsx)("img",{className:"home-image",src:P,alt:"img1"}),Object(U.jsxs)("div",{className:"home-text",children:[Object(U.jsx)("h2",{children:"Ubezpieczenie mieszkania/domu"}),Object(U.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos, molestiae magni voluptatem mollitia excepturi! Eveniet illo ab blanditiis placeat illum fugiat aut architecto aspernatur officiis, error porro vitae suscipit. ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam dignissimos, tenetur quas itaque sapiente. Maiores tempora harum veniam odit obcaecati mollitia, voluptas nemo fuga placeat odio optio maxime corporis!"})]})]}),Object(U.jsx)("i",{className:"fas fa-arrow-right arrow-home",onClick:s})]})}),Object(U.jsx)(V,{})]})},H=i(41),X=(i(111),i(46)),Z=i(43),J=i(67),K=i(51),Y=i(70),Q=i(52),$=i(68),ee=i(69),te=i(71),ie=i(47),ae=i(53),ne=i(150),se=i(149),ce="2021-08-01T10:30",re=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).nextMonth=function(){a.setState({currentMonth:Object(Z.a)(a.state.currentMonth,1)})},a.prevMonth=function(){a.setState({currentMonth:Object(J.a)(a.state.currentMonth,1)})},a.onNewEventTitleChange=function(e){a.setState({newEventTitle:e.target.value})},a.onNewEventDescChange=function(e){a.setState({newEventDescription:e.target.value})},a.onNewEventDateChange=function(e){a.setState({newEventDate:e.target.value})},a.onPickedEventTitleChange=function(e){var t=a.state.pickedEvent;t.title=e.target.value,a.setState({pickedEvent:t})},a.onPickedEventDescChange=function(e){var t=a.state.pickedEvent;t.description=e.target.value,a.setState({pickedEvent:t})},a.onPickedEventDateChange=function(e){var t=a.state.pickedEvent;t.date=e.target.value,a.setState({pickedEvent:t})},a.onDateClickBind=a.onDateClick.bind(Object(H.a)(a)),a.state={currentMonth:new Date,selectedDate:new Date,meetings:[],pickedMeeting:{},newEventTitle:"",newEventDescription:"",newEventDate:ce,pickedEvent:{},showEditBox:!1},a}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/meetings/".concat(this.props.auth.user.id)).then((function(t){e.setState({meetings:t.data})})).catch((function(e){console.log(e)}))}},{key:"addEvent",value:function(){var e={eventTitle:this.state.newEventTitle,authorId:this.props.auth.user.id,eventDescription:this.state.newEventDescription,date:this.state.newEventDate,status:"active"};b.a.post("https://ubezpieczenia-server.herokuapp.com/api/meetings/add",e).then((function(e){window.location.reload(!0)})).catch((function(e){console.log(e)}))}},{key:"onEventClick",value:function(e){var t=this.state.meetings.find((function(t){return t._id===e}));this.setState({pickedEvent:{title:t.eventTitle,description:t.eventDescription,id:e,date:t.date}})}},{key:"onCancelEventClick",value:function(e){b.a.put("https://ubezpieczenia-server.herokuapp.com/api/meetings/cancel/".concat(e)).then((function(e){window.location.reload(!0)})).catch((function(e){console.log(e.data)}))}},{key:"onEditEventClick",value:function(){var e=this;b.a.put("https://ubezpieczenia-server.herokuapp.com/api/meetings/edit/".concat(this.state.pickedEvent.id),this.state.pickedEvent).then((function(t){window.location.reload(!0),e.setState({showEditBox:!1})})).catch((function(e){console.log(e.data)}))}},{key:"renderNavbar",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)(R,{})})}},{key:"renderHeader",value:function(){return Object(U.jsxs)("div",{className:"",children:[Object(U.jsxs)("div",{className:"header-calendar",children:[Object(U.jsx)("i",{className:"fas fa-arrow-left check-calendar",onClick:this.prevMonth}),Object(U.jsx)("div",{children:Object(U.jsxs)("span",{children:[" ",Object(X.a)(this.state.currentMonth,"LLLL yyyy",{locale:ne.a})]})}),Object(U.jsx)("i",{className:"fas fa-arrow-right check-calendar",onClick:this.nextMonth})]}),Object(U.jsx)("div",{})]})}},{key:"renderDays",value:function(){for(var e=[],t=Object(K.a)(this.state.currentMonth),i=1;i<8;i++)e.push(Object(U.jsx)("div",{className:"titleDays",children:Object(X.a)(Object(Q.a)(t,i),"iiiiiii",{locale:ne.a})},i));return Object(U.jsx)("div",{className:"week",children:e})}},{key:"renderCells",value:function(){for(var e=this,t=this.state,i=t.currentMonth,a=t.selectedDate,n=Object($.a)(i),s=Object(ee.a)(n),c=Object(K.a)(n,{weekStartsOn:1}),r=Object(Y.a)(s),o=[],l=[],d=c,u="pl";d<=r;){for(var h=function(t){var i;u=Object(X.a)(d,"dd");var s=d,c=null===(i=e.state.meetings)||void 0===i?void 0:i.filter((function(e){return Object(ie.a)(d,Object(ae.a)(e.date))&&"canceled"!==e.status}));l.push(Object(U.jsxs)("div",{className:"".concat(Object(te.a)(d,n)?Object(ie.a)(d,a)?"day day--selected":"day day__card":"day day--disabled"),onClick:function(t){return e.onDateClick(s)},children:[Object(U.jsx)("span",{className:"day-date",children:u}),Object(U.jsx)("div",{className:"day__meetings",children:c.map((function(t,i){if(i<5)return Object(U.jsx)("div",{className:"day__meetings-item",onClick:function(i){return e.onEventClick(t._id)},children:t.eventTitle},i)}))})]},d)),d=Object(Q.a)(d,1)},j=0;j<7;j++)h();o.push(Object(U.jsx)("div",{className:"calendar-element ",children:l},d)),l=[]}return Object(U.jsx)("div",{className:"body",children:o})}},{key:"renderFooter",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)(V,{})})}},{key:"onDateClick",value:function(e){var t;this.setState({selectedDate:e});var i=null===(t=this.state.meetings)||void 0===t?void 0:t.filter((function(t){return Object(ie.a)(e,Object(ae.a)(t.date))}));this.setState({pickedMeeting:i[0]||{}})}},{key:"render",value:function(){var e,t,i,a,n,s,c,r=this;return this.state.pickedEvent.date&&(t=new Date(this.state.pickedEvent.date),i=new Intl.DateTimeFormat("pl",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("pl",{month:"2-digit"}).format(t),n=new Intl.DateTimeFormat("pl",{day:"2-digit"}).format(t),s=new Intl.DateTimeFormat("pl",{hour:"2-digit"}).format(t),1===(c=new Intl.DateTimeFormat("pl",{minute:"2-digit"}).format(t)).length&&(c="0".concat(c))),Object(U.jsxs)("div",{children:[this.renderNavbar(),Object(U.jsxs)("div",{className:"row-calendar-form",children:[Object(U.jsxs)("div",{className:"container-calendar",children:[this.renderHeader(),this.renderDays(),this.renderCells(),Object.keys(this.state.pickedMeeting).length>0&&Object(U.jsxs)("div",{className:"Calendar-meeting-info",children:[Object(U.jsx)("div",{className:"Calendar-meeting-info-icon"}),Object(U.jsx)("div",{children:Object(U.jsx)("div",{className:"Calendar-meeting-info-row",children:Object(U.jsx)("div",{className:"Calendar-meeting-info-title",children:null===(e=this.state.pickedMeeting)||void 0===e?void 0:e.eventName})})})]})]}),Object(U.jsxs)("div",{className:"calendar-form",children:[Object(U.jsxs)("div",{className:"calendar_contents_event-preview",children:[Object(U.jsx)("div",{className:"calendar_contents_event-preview-header",children:"Wybrane spotkanie:"}),0===Object.keys(this.state.pickedEvent).length&&Object(U.jsx)("div",{className:"calendar_contents_event-placeholder",children:"Kliknij w spotkanie aby zobaczy\u0107 szczeg\xf3\u0142y."}),Object(U.jsx)("div",{className:"calendar_contents_event-preview-title",children:this.state.pickedEvent.title}),Object(U.jsx)("div",{className:"calendar_contents_event-preview-description",children:this.state.pickedEvent.description}),Object(U.jsx)("div",{className:"calendar_contents_event-preview-date",children:this.state.pickedEvent.date?"".concat(n,"/").concat(a,"/").concat(i,", godz. ").concat(s,":").concat(c):""}),0!==Object.keys(this.state.pickedEvent).length&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("button",{className:"calendar_contents_event-preview-button",onClick:function(){return r.setState({showEditBox:!0})},children:"Edytuj"}),Object(U.jsx)("button",{className:"calendar_contents_event-preview-button",onClick:function(e){return r.onCancelEventClick(r.state.pickedEvent.id)},children:"Odwo\u0142aj"})]})]}),this.state.showEditBox&&Object(U.jsx)("form",{children:Object(U.jsxs)("div",{className:"calendar_contents_event",children:[Object(U.jsx)("h2",{children:"Edytuj event"}),Object(U.jsx)("input",{placeholder:"Tytu\u0142",value:this.state.pickedEvent.title,onChange:this.onPickedEventTitleChange.bind(this)}),Object(U.jsx)("textarea",{placeholder:"Opis",value:this.state.pickedEvent.description,onChange:this.onPickedEventDescChange.bind(this)}),Object(U.jsx)("form",{noValidate:!0,children:Object(U.jsx)(se.a,{id:"datetime-local",label:"Data",type:"datetime-local",value:this.state.pickedEvent.date,defaultValue:ce,onChange:this.onPickedEventDateChange.bind(this),InputLabelProps:{shrink:!0}})}),Object(U.jsx)("div",{className:"calendar_menu_event",children:Object(U.jsx)("i",{className:"fas fa-plus btw_calendar",onClick:this.onEditEventClick.bind(this),children:"Aktualizuj zmiany"})})]})}),!this.state.showEditBox&&Object(U.jsx)("form",{children:Object(U.jsxs)("div",{className:"calendar_contents_event",children:[Object(U.jsx)("h2",{children:"Dodaj nowy event"}),Object(U.jsx)("input",{placeholder:"Tytu\u0142",value:this.state.newEventTitle,onChange:this.onNewEventTitleChange.bind(this)}),Object(U.jsx)("textarea",{placeholder:"Opis",value:this.state.newEventDescription,onChange:this.onNewEventDescChange.bind(this)}),Object(U.jsx)("form",{noValidate:!0,children:Object(U.jsx)(se.a,{id:"datetime-local",label:"Data",type:"datetime-local",defaultValue:ce,value:this.state.newEventDate,onChange:this.onNewEventDateChange.bind(this),InputLabelProps:{shrink:!0}})}),Object(U.jsx)("div",{className:"calendar_menu_event",children:Object(U.jsx)("i",{className:"fas fa-plus btw_calendar",onClick:this.addEvent.bind(this),children:" Dodaj"})})]})})]})]}),this.renderFooter()]})}}]),i}(n.a.Component),oe=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}))(re),le=(i(112),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={meetings:[],meetingsCopy:[],users:[]},a}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://ubezpieczenia-server.herokuapp.com/api/meetings/").then((function(t){e.setState({meetings:t.data,meetingsCopy:t.data})})).catch((function(e){console.log(e)})),b.a.get("https://ubezpieczenia-server.herokuapp.com/api/users/").then((function(t){e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"getAuthorName",value:function(e){var t;return null===(t=this.state.users.find((function(t){return t._id===e})))||void 0===t?void 0:t.name}},{key:"getActiveMeetings",value:function(){return this.state.meetings.filter((function(e){return"active"===e.status}))}},{key:"getCanceledMeetings",value:function(){return this.state.meetings.filter((function(e){return"canceled"===e.status}))}},{key:"onAgentSelectActiveChange",value:function(e){if("all"!==e.target.value){var t=this.state.meetingsCopy.filter((function(t){return t.authorId===e.target.value}));this.setState({meetings:t})}else this.setState({meetings:this.state.meetingsCopy})}},{key:"onAgentInputActiveChange",value:function(e){if(""!==e.target.value){var t=new RegExp("^".concat(e.target.value)),i=this.state.meetingsCopy.filter((function(e){return t.test(e.eventTitle.toLowerCase())}));this.setState({meetings:i})}else this.setState({meetings:this.state.meetingsCopy})}},{key:"render",value:function(){var e=this;return Object(U.jsxs)("div",{className:"Statistics",children:[Object(U.jsx)(R,{}),Object(U.jsxs)("div",{className:"statistics-container",children:[Object(U.jsx)("h1",{children:"Statystyki"}),Object(U.jsxs)("div",{className:"Statistics__filter-items",children:[Object(U.jsxs)("div",{className:"Statistics__filter-item",children:[Object(U.jsx)("div",{className:"Statistics__filter-item-label",children:"Agent"}),Object(U.jsxs)("select",{onChange:this.onAgentSelectActiveChange.bind(this),children:[Object(U.jsx)("option",{default:!0,value:"all",children:"Wszyscy"}),this.state.users.map((function(e){return Object(U.jsx)("option",{value:e._id,children:e.name})}))]})]}),Object(U.jsxs)("div",{className:"Statistics__filter-item",children:[Object(U.jsx)("div",{className:"Statistics__filter-item-label",children:"Tytu\u0142 spotkania"}),Object(U.jsx)("input",{placeholder:"Wpisz tytu\u0142",onChange:this.onAgentInputActiveChange.bind(this)})]})]}),Object(U.jsxs)("div",{className:"Statistics__box",children:[Object(U.jsxs)("h2",{children:["Aktywne spotkania (",this.getActiveMeetings().length,")"]}),0===this.getActiveMeetings().length&&Object(U.jsx)("div",{children:"Brak spotka\u0144"}),Object(U.jsx)("ul",{children:this.getActiveMeetings().map((function(t,i){return Object(U.jsxs)("li",{className:"Statistics__box-item",children:[Object(U.jsx)("div",{className:"Statistics__box-item-title",children:t.eventTitle}),Object(U.jsx)("div",{className:"Statistics__box-item-description",children:t.eventDescription}),Object(U.jsx)("div",{className:"Statistics__box-item-author",children:e.getAuthorName(t.authorId)})]},i)}))})]}),Object(U.jsxs)("div",{className:"Statistics__box",children:[Object(U.jsxs)("h2",{children:["Odwo\u0142ane spotkania (",this.getCanceledMeetings().length,")"]}),0===this.getCanceledMeetings().length&&Object(U.jsx)("div",{children:"Brak spotka\u0144"}),Object(U.jsx)("ul",{children:this.getCanceledMeetings().map((function(t,i){return Object(U.jsxs)("li",{className:"Statistics__box-item",children:[Object(U.jsx)("div",{className:"Statistics__box-item-title",children:t.eventTitle}),Object(U.jsx)("div",{className:"Statistics__box-item-description",children:t.eventDescription}),Object(U.jsx)("div",{className:"Statistics__box-item-author",children:e.getAuthorName(t.authorId)})]},i)}))})]})]}),Object(U.jsx)(V,{})]})}}]),i}(n.a.Component)),de=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}))(le),ue=(i(113),Object(N.b)((function(e){return{auth:e.auth}}))((function(e){var t=Object(a.useState)([]),i=Object(M.a)(t,2),n=i[0],s=i[1],c=Object(a.useRef)(null);Object(a.useEffect)((function(){b.a.get("/api/archives").then((function(e){s(e.data)}))}),["items"]);return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{children:[Object(U.jsx)(R,{}),Object(U.jsx)("div",{className:"Archives_title_container",children:Object(U.jsx)("div",{className:"Archives_title",children:Object(U.jsx)("p",{children:"Dodaj dokument do Archiwum"})})}),Object(U.jsx)("div",{className:"Archives__form",children:Object(U.jsxs)("form",{action:"/api/archives",method:"post",encType:"multipart/form-data",onSubmit:function(t){return function(t){t.preventDefault();var i=c.current.files[0],a=e.auth.user;if(i){var n=new FormData;n.append("fileInput",i),n.append("userName",a.name),b()({method:"post",url:"/api/archives",data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){window.location.reload(!0)})).catch((function(e){console.log(e)}))}else alert("Nie wybrano pliku")}(t)},children:[Object(U.jsx)("input",{type:"file",name:"fileInput",ref:c}),Object(U.jsx)("button",{className:"Archives__new-file-button Archives_new-file-button",type:"submit",children:"Dodaj"})]})}),Object(U.jsx)("div",{className:"Archives_title_container",children:Object(U.jsx)("div",{className:"Archives_title",children:Object(U.jsx)("p",{children:"Archiwum"})})}),Object(U.jsx)("div",{className:"Archives__item-list",children:n.map((function(e,t){return Object(U.jsxs)("div",{className:"Archives__item",children:[Object(U.jsxs)("div",{className:"Archives__item-info",children:[Object(U.jsx)("div",{className:"Archives__item-name",children:e.name}),Object(U.jsx)("div",{className:"Archives__item-author",children:e.author})]}),Object(U.jsx)("button",{className:"Archives__item-button Archives_new-file-button",onClick:function(){return t=e.name,void window.open("https://ubezpieczenia-server.herokuapp.com/api/archives/download/".concat(t));var t},children:"Pobierz"}),Object(U.jsx)("button",{className:"Archives__item-button Archives_new-file-button",onClick:function(){return t=e._id,void b.a.delete("https://ubezpieczenia-server.herokuapp.com/api/archives/delete/".concat(t)).then((function(e){window.location.reload(!0)})).catch((function(e){console.log(e)}));var t},children:"Usu\u0144"})]},t)}))}),Object(U.jsx)(V,{})]})})}))),he=i(35),je=i(31),me=i.n(je),be=(i(114),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={email:"",password:"",errors:{}},a}return Object(o.a)(i,[{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/home"),e.errors&&this.setState({errors:e.errors})}},{key:"loginChangeOn_",value:function(e){this.setState(Object(he.a)({},e.target.id,e.target.value))}},{key:"loginSubmitOn_",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};this.props._auctionLoginUser_(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(U.jsx)("div",{className:"container-login",children:Object(U.jsxs)("div",{className:"row-login",children:[Object(U.jsxs)("div",{className:"tab-header",children:[Object(U.jsx)("div",{className:"l-title",children:"Agencja Ubezpieczeniowa"}),Object(U.jsx)("div",{className:"l-name",children:"Logowanie"})]}),Object(U.jsxs)("form",{className:"tab-content",noValidate:!0,onSubmit:this.loginSubmitOn_.bind(this),children:[Object(U.jsxs)("div",{className:"form-element element-login",children:[Object(U.jsx)("input",{onChange:this.loginChangeOn_.bind(this),value:this.state.email,placeholder:"E-mail",id:"email",type:"email",className:me()("",{invalid:e.email||e.emailnotfound})}),Object(U.jsxs)("span",{className:"red-text",children:[e.email,e.emailnotfound]})]}),Object(U.jsxs)("div",{className:"form-element element-login",children:[Object(U.jsx)("input",{onChange:this.loginChangeOn_.bind(this),value:this.state.password,placeholder:"Has\u0142o",id:"password",type:"password",className:me()("",{invalid:e.password||e.passwordincorrect})}),Object(U.jsxs)("span",{className:"red-text",children:[e.password,e.passwordincorrect,e.nonConfirmed]})]}),Object(U.jsxs)("div",{className:"form-element",children:[Object(U.jsx)("button",{type:"submit",children:"Zaloguj si\u0119"}),Object(U.jsxs)("div",{className:"l-quest",children:["Nie masz konta?",Object(U.jsx)(u.b,{to:"/register",children:Object(U.jsx)("b",{children:" Zarejestruj si\u0119"})})]})]})]})]})})}}]),i}(a.Component)),ve=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}),{_auctionLoginUser_:function(e){return function(t){b.a.post("https://ubezpieczenia-server.herokuapp.com/api/users/login",e).then((function(e){var i=e.data.token;localStorage.setItem("jwtToken",i),v(i);var a=Object(j.a)(i);t(f(a))})).catch((function(e){t({type:p,payload:e.response.data})}))}}})(be),pe=(i(115),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={name:"",email:"",password:"",password2:"",errors:{}},a}return Object(o.a)(i,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"_changeOn_",value:function(e){this.setState(Object(he.a)({},e.target.id,e.target.value))}},{key:"_submitOn_",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props._auctionRegisterUser_(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(U.jsx)("div",{className:"container-register",children:Object(U.jsxs)("div",{className:"row-register",children:[Object(U.jsxs)("div",{className:"tab-header",children:[Object(U.jsx)("div",{className:"r-title",children:"Agencja Ubezpieczeniowa"}),Object(U.jsx)("div",{className:"r-name",children:"Rejestracja"})]}),Object(U.jsxs)("form",{className:"tab-content-register",noValidate:!0,onSubmit:this._submitOn_.bind(this),children:[Object(U.jsxs)("div",{className:"form-element element-register",children:[Object(U.jsx)("input",{onChange:this._changeOn_.bind(this),value:this.state.name,id:"name",placeholder:"Podaj imi\u0119 i nazwisko",type:"text",className:me()("",{invalid:e.name})}),Object(U.jsx)("span",{className:"red-text",children:e.name})]}),Object(U.jsxs)("div",{className:"form-element element-register",children:[Object(U.jsx)("input",{onChange:this._changeOn_.bind(this),value:this.state.email,id:"email",placeholder:"Podaj e-mail",type:"email",className:me()("",{invalid:e.email})}),Object(U.jsx)("span",{className:"red-text",children:e.email})]}),Object(U.jsxs)("div",{className:"form-element element-register",children:[Object(U.jsx)("input",{onChange:this._changeOn_.bind(this),value:this.state.password,id:"password",placeholder:"Podaj has\u0142o",type:"password",className:me()("",{invalid:e.password})}),Object(U.jsx)("span",{className:"red-text",children:e.password})]}),Object(U.jsxs)("div",{className:"form-element element-register",children:[Object(U.jsx)("input",{onChange:this._changeOn_.bind(this),value:this.state.password2,id:"password2",placeholder:"Powt\xf3rz has\u0142o",type:"password",className:me()("",{invalid:e.password2})}),Object(U.jsx)("span",{className:"red-text",children:e.password2})]}),Object(U.jsxs)("div",{className:"form-element ",children:[Object(U.jsx)("button",{type:"submit",onClick:this._changeOn_.bind(this),children:"Zarejestruj si\u0119"}),Object(U.jsxs)("div",{className:"r-quest",children:["Posiadasz konto?",Object(U.jsx)(u.b,{to:"/login",children:Object(U.jsx)("b",{children:" Zaloguj si\u0119"})})]})]})]})]})})}}]),i}(a.Component)),Oe=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}),{_auctionRegisterUser_:function(e,t){return function(i){b.a.post("https://ubezpieczenia-server.herokuapp.com/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return i({type:p,payload:e.response.data})}))}}})(Object(h.g)(pe)),xe=i(73),fe=Object(N.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,i=e.auth,a=Object(xe.a)(e,["component","auth"]);return Object(U.jsx)(h.b,Object(w.a)(Object(w.a)({},a),{},{render:function(e){return!0===i.isAuthenticated?Object(U.jsx)(t,Object(w.a)({},e)):Object(U.jsx)(h.a,{to:"/login"})}}))})),ge=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={role:""},a}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/users/".concat(this.props.auth.user.id)).then((function(t){e.setState({role:t.data.role})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this;return Object(U.jsx)(a.Fragment,{children:(null===(e=this.state)||void 0===e?void 0:e.role)&&Object(U.jsx)(h.b,{render:function(){var e;return"admin"===(null===(e=t.state)||void 0===e?void 0:e.role)?Object(U.jsx)(t.props.component,Object(w.a)({},t.props)):Object(U.jsx)(h.a,{to:"/"})}})})}}]),i}(n.a.Component),Ne=Object(N.b)((function(e){return{auth:e.auth}}))(ge),_e=(i(116),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={meetings:[],users:[]},a}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://ubezpieczenia-server.herokuapp.com/api/users").then((function(t){e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"getPendingAgents",value:function(){return this.state.users.filter((function(e){return!e.confirmed}))}},{key:"getCanceledMeetings",value:function(){return this.state.meetings.filter((function(e){return"canceled"===e.status}))}},{key:"onConfirmButtonClick",value:function(e){b.a.put("https://ubezpieczenia-server.herokuapp.com/api/users/confirm/".concat(e)).then((function(e){window.location.reload(!0)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(U.jsxs)("div",{className:"Confirmation",children:[Object(U.jsx)(R,{}),Object(U.jsxs)("div",{className:"Confirmation-container",children:[Object(U.jsx)("h1",{children:"Agenci"}),Object(U.jsxs)("div",{className:"Confirmation__box",children:[Object(U.jsxs)("h2",{children:["Oczekuj\u0105cy agenci (",this.getPendingAgents().length,")"]}),Object(U.jsx)("ul",{children:this.getPendingAgents().map((function(t,i){return Object(U.jsxs)("li",{className:"Confirmation__box-item",children:[Object(U.jsx)("div",{className:"Confirmation__box-item-title",children:t.name}),Object(U.jsx)("div",{className:"Confirmation__box-item-description",children:t.email}),Object(U.jsx)("button",{className:"Confirmation__box-button",onClick:function(i){return e.onConfirmButtonClick(t._id)},children:"Akceptuj"})]},i)}))})]})]}),Object(U.jsx)(V,{})]})}}]),i}(n.a.Component)),ke=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}))(_e);if(localStorage.jwtToken){var we=localStorage.jwtToken;v(we);var ye=Object(j.a)(we);T.dispatch(f(ye));var Ce=Date.now()/2500;ye.exp<Ce&&(T.dispatch(g()),window.location.href="./login")}var Ee=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(U.jsx)(N.a,{store:T,children:Object(U.jsx)(u.a,{children:Object(U.jsxs)("div",{className:"main-all",children:[Object(U.jsx)(h.b,{path:"/",exact:!0,component:ve}),Object(U.jsx)(h.b,{path:"/login",component:ve}),Object(U.jsx)(h.b,{path:"/register",component:Oe}),Object(U.jsxs)(h.d,{children:[Object(U.jsx)(fe,{path:"/home",exact:!0,component:G}),Object(U.jsx)(fe,{exact:!0,path:"/calendar",component:oe}),Object(U.jsx)(fe,{path:"/archives",component:ue})]}),Object(U.jsxs)(h.d,{children:[Object(U.jsx)(Ne,{exact:!0,path:"/statistics",component:de}),Object(U.jsx)(Ne,{exact:!0,path:"/confirmation",component:ke})]})]})})})}}]),i}(a.Component),Se=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,151)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(Ee,{})}),document.getElementById("root")),Se()},81:function(e,t,i){}},[[117,1,2]]]);
//# sourceMappingURL=main.7174bae7.chunk.js.map