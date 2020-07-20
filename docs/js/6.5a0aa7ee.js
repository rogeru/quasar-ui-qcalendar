(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"543e":function(e,t,a){"use strict";var r=a("e9ba"),n=a.n(r);n.a},"5acd":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=e=>(e=Math.floor(e),e<10?"0"+e:e+"")},a2d6:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"column",staticStyle:{overflow:"hidden"}},[a("q-dialog",{model:{value:e.displayEvent,callback:function(t){e.displayEvent=t},expression:"displayEvent"}},[a("div",[e.event?a("q-card",[a("q-toolbar",{class:e.displayClasses(e.event),staticStyle:{"min-width":"400px"},style:e.displayStyles(e.event)},[a("q-toolbar-title",[e._v("\n            "+e._s(e.event.title)+"\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"delete"},on:{click:function(t){return e.deleteEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"edit"},on:{click:function(t){return e.editEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"close"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[e.event.allDay?a("div",{staticClass:"text-caption"},[e._v(e._s(e.getEventDate(e.event)))]):e._e(),e._v("\n          "+e._s(e.event.details)+"\n          "),e.event.time?a("div",{staticClass:"text-caption"},[a("div",{staticClass:"row full-width justify-start",staticStyle:{"padding-top":"12px"}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("Start Time:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.event.time)+"\n                  ")])]),a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("End Time:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.getEndTime(e.event))+"\n                  ")])]),a("div",{staticClass:"row full-width justify-start"},[a("div",{staticClass:"col-5",staticStyle:{"padding-left":"20px"}},[a("strong",[e._v("Duration:")])]),a("div",{staticClass:"col-7"},[e._v("\n                    "+e._s(e.convertDurationTime(e.event.duration))+"\n                  ")])])])])]):e._e()]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1):e._e()],1)]),a("q-dialog",{attrs:{"no-backdrop-dismiss":""},model:{value:e.addEvent,callback:function(t){e.addEvent=t},expression:"addEvent"}},[a("div",[e.contextDay?a("q-form",{ref:"event",on:{submit:e.onSubmit,reset:e.onReset}},[e.addEvent?a("q-card",{staticStyle:{width:"400px"}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-toolbar-title",[e._v("\n              "+e._s(e.addOrUpdateEvent)+" Event\n            ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"close"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[a("q-input",{attrs:{label:"Title",rules:[function(e){return e&&e.length>0||"Field cannot be empty"}],autofocus:""},model:{value:e.eventForm.title,callback:function(t){e.$set(e.eventForm,"title",t)},expression:"eventForm.title"}}),a("q-input",{attrs:{label:"Details"},model:{value:e.eventForm.details,callback:function(t){e.$set(e.eventForm,"details",t)},expression:"eventForm.details"}}),a("q-field",{staticStyle:{"padding-bottom":"20px"},model:{value:e.eventForm.allDay,callback:function(t){e.$set(e.eventForm,"allDay",t)},expression:"eventForm.allDay"}},[a("q-checkbox",{attrs:{label:"All-Day event?"},model:{value:e.eventForm.allDay,callback:function(t){e.$set(e.eventForm,"allDay",t)},expression:"eventForm.allDay"}})],1),e.eventForm.allDay?a("q-input",{staticStyle:{"padding-bottom":"20px"},attrs:{label:"Enter date",mask:"####-##-##",color:"blue-6",outlined:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateScrollerAllDay,callback:function(t){e.showDateScrollerAllDay=t},expression:"showDateScrollerAllDay"}},[a("q-scroller",{style:e.scrollerPopupStyle160,attrs:{view:"date",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3","text-color":"white",color:"primary","inner-text-color":"primary","inner-color":"white"},on:{close:function(){e.showDateScrollerAllDay=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,3100782098),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}):a("div",[a("q-input",{ref:"dateTimeStart",attrs:{label:"Event start date and time",mask:"####-##-## ##:##",rules:[function(t){return e.checkDateTimeStart()||"Start time cannot come after end time"}],outlined:"",color:"blue-6"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerStart,callback:function(t){e.showDateTimeScrollerStart=t},expression:"showDateTimeScrollerStart"}},[a("q-scroller",{style:e.scrollerPopupStyle280,attrs:{view:"date-time",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"primary","text-color":"white","inner-color":"white","inner-text-color":"primary "},on:{close:function(){e.showDateTimeScrollerStart=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,3793576423),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}),a("q-input",{ref:"dateTimeEnd",attrs:{label:"Event end date and time",mask:"####-##-## ##:##",rules:[function(t){return e.checkDateTimeEnd()||"Start time cannot come after end time"}],color:"blue-6",outlined:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerEnd,callback:function(t){e.showDateTimeScrollerEnd=t},expression:"showDateTimeScrollerEnd"}},[a("q-scroller",{style:e.scrollerPopupStyle280,attrs:{view:"date-time",locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"primary","text-color":"white","inner-color":"white","inner-text-color":"primary "},on:{close:function(){e.showDateTimeScrollerEnd=!1}},model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1)],1)]},proxy:!0}],null,!1,3480984584),model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1),a("q-input",{staticStyle:{"padding-bottom":"20px"},attrs:{label:"Icon",outlined:"",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"extension"}},[a("q-popup-proxy",{model:{value:e.showIconPicker,callback:function(t){e.showIconPicker=t},expression:"showIconPicker"}},[a("q-icon-picker",{staticStyle:{height:"300px",width:"300px","background-color":"white"},attrs:{filter:e.eventForm.icon,"icon-set":"fontawesome-v5",tooltips:"",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}})],1)],1)]},proxy:!0}],null,!1,839296791),model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}}),a("q-input",{attrs:{label:"Color",outlined:"",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[a("q-popup-proxy",[a("q-color",{model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1)],1)]},proxy:!0}],null,!1,2928914025),model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"OK",type:"submit",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",type:"reset",color:"primary"}})],1)],1):e._e()],1):e._e()],1)]),a("div",{staticClass:"calendar-container",style:e.containerStyle},[a("q-calendar",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.left.right",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,left:!0,right:!0}}],key:e.keyValue,ref:"calendar",staticClass:"calendar",attrs:{locale:e.locale,"max-days":e.maxDays,bordered:e.bordered,"interval-style":e.modifiedStyle,"day-style":e.modifiedStyle,"resource-style":e.modifiedStyle,animated:"","transition-prev":"slide-right","transition-next":"slide-left","drag-over-func":e.onDragOver,"drop-func":e.onDrop,theme:e.theme,view:e.calendarView,weekdays:e.weekdays,"interval-minutes":60*e.intervalRangeStep,"interval-start":e.intervalStart,"interval-count":e.intervalCount,"hour24-format":e.hour24Format,"short-month-label":e.shortMonthLabel,"show-day-of-year-label":e.showDayOfYearLabel,"hide-header":e.hideHeader,"no-scroll":e.noScroll,"short-weekday-label":e.shortWeekdayLabel,"short-interval-label":e.shortIntervalLabel,"interval-height":e.intervalHeight,"resource-height":e.resourceHeight,"resource-width":e.resourceWidth,"day-height":e.dayHeight,"show-month-label":e.showMonthLabel,"show-work-weeks":e.showWorkWeeks,"no-default-header-btn":e.noDefaultHeaderBtn,"no-default-header-text":e.noDefaultHeaderText,"enable-theme":!0===e.enableTheme,resources:e.resources,"day-padding":"35px 0 0 0"},on:{change:e.onChanged,moved:e.onMoved,"click:date":e.onDateChanged,"click:interval":e.addEventMenu,"click:time":e.addEventMenu,"click:day":e.addEventMenu,"click:week":e.addEventMenu,"click:resource":e.resourceClicked,"click:resource:day":e.resourceDayClicked},scopedSlots:e._u([{key:"day",fn:function(t){var r=t.timestamp;return[e.calendarView.indexOf("agenda")<0?[e._l(e.getEvents(r.date),(function(t,r){return[a("q-badge",{key:r,class:e.badgeClasses(t,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"day"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))]:e._e()]}},{key:"day-header",fn:function(t){var r=t.timestamp;return[e.calendarView.indexOf("agenda")<0?a("div",{staticClass:"row justify-center"},[e._l(e.eventsMap[r.date],(function(t,r){return[t.time?a("q-badge",{key:r,staticClass:"q-ma-xs self-end",class:e.badgeClasses(t,"header"),staticStyle:{width:"10px","max-width":"10px",height:"10px","max-height":"10px"},style:e.badgeStyles(t,"header")}):a("q-badge",{key:r,class:e.badgeClasses(t,"header"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"header"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))],2):e._e()]}},{key:"day-body",fn:function(t){var r=t.timestamp,n=t.timeStartPos,i=t.timeDurationHeight;return[e.calendarView.indexOf("agenda")<0?[e._l(e.getEvents(r.date),(function(t,r){return[t.time?a("q-badge",{key:r,staticClass:"my-event justify-center",class:e.badgeClasses(t,"body"),style:e.badgeStyles(t,"body",n,i),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1):e._e()]}))]:[e._l(e.getAgenda(r),(function(t){return[a("div",{key:r.date+t.time,staticClass:"justify-start q-ma-sm shadow-5 bg-grey-6",staticStyle:{overflow:"hidden"},attrs:{label:t.time}},[t.avatar?a("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"30px",width:"100%"}},[a("q-avatar",{staticStyle:{"margin-top":"-25px","margin-bottom":"10px","font-size":"60px","max-height":"50px"}},[a("img",{staticStyle:{border:"#9e9e9e solid 5px"},attrs:{src:t.avatar}})])],1):e._e(),a("div",{staticClass:"col-12 q-px-sm"},[a("strong",[e._v(e._s(t.time))])]),t.desc?a("div",{staticClass:"col-12 q-px-sm",staticStyle:{"font-size":"10px"}},[e._v("\n                "+e._s(t.desc)+"\n              ")]):e._e()])]}))]]}},{key:"intervals-header",fn:function(t){return[a("div",{staticClass:"fit flex justify-center items-end"},[a("span",{staticClass:"q-calendar-daily__interval-text"},[e._v(e._s(e.showOffset(t)))])])]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},n=[],i=(a("c975"),a("fb6a"),a("a434"),a("5319"),a("4082")),o=a.n(i),s=a("ded3"),l=a.n(s),d=a("2f62");const c=e=>!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/);var m=[{title:"April Fools Day",details:"Everything is funny as long as it is happening to someone else",date:"2019-04-01",bgcolor:"orange"},{title:"Sisters Birthday",details:"Buy a nice present",date:"2019-04-04",bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:"2019-04-08",time:"10:00",duration:120,bgcolor:"red",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:"2019-04-08",time:"11:30",duration:90,bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Visit mom",details:"Always a nice chat with mom",date:"2019-04-20",time:"17:00",duration:90,bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference",details:"Teaching Javascript 101",date:"2019-04-22",time:"08:00",duration:540,bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Girlfriend",details:"Meet GF for dinner at Swanky Restaurant",date:"2019-04-22",time:"19:00",duration:180,bgcolor:"teal",icon:"fas fa-utensils"},{title:"Fishing",details:"Time for some weekend R&R",date:"2019-04-27",bgcolor:"purple",icon:"fas fa-fish",days:2},{title:"Vacation",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:"2019-04-29",bgcolor:"purple",icon:"fas fa-plane",days:5}],h=a("5acd"),u=a("bd4c"),v=a("bc78"),p=a("0967"),g=a("d882"),f=a("384e");a("9b5a");const y={title:"",details:"",allDay:!1,dateTimeStart:"",dateTimeEnd:"",icon:"",bgcolor:"#0000FF"};var b={name:"PageIndex",data(){return{keyValue:0,direction:"next",weekdays:[0,1,2,3,4,5,6],disabledDays:["2019-04-02","2019-04-03","2019-04-04","2019-04-05"],addEvent:!1,contextDay:null,eventForm:l()({},y),displayEvent:!1,event:null,events:[],gmt:"",dragging:!1,draggedEvent:null,ignoreNextSwipe:!1,showDateScrollerAllDay:!1,showDateTimeScrollerStart:!1,showDateTimeScrollerEnd:!1,resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],agenda:{1:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",desc:"Meeting with CEO"},{time:"08:30",avatar:"https://cdn.quasar.dev/img/avatar.png",desc:"Meeting with HR"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",desc:"Meeting with Karen"}],2:[{time:"11:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",desc:"Meeting with Alisha"},{time:"17:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",desc:"Meeting with Sarah"}],3:[{time:"08:00",desc:"Stand-up SCRUM",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"10:00",desc:"Sprint planning",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}],4:[{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/material.png"}],5:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"09:30",avatar:"https://cdn.quasar.dev/img/avatar4.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar5.jpg"},{time:"11:30",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"},{time:"13:30",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"14:00",avatar:"https://cdn.quasar.dev/img/linux-avatar.png"},{time:"14:30",avatar:"https://cdn.quasar.dev/img/avatar.png"},{time:"15:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"15:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"16:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"}]},showIconPicker:!1,pagination:{itemsPerPage:35,page:0}}},mounted(){this.$root.$on("calendar:next",this.calendarNext),this.$root.$on("calendar:prev",this.calendarPrev),this.$root.$on("calendar:today",this.calendarToday),this.events=m,this.updateFormatters()},beforeDestroy(){this.$root.$off("calendar:next",this.calendarNext),this.$root.$off("calendar:prev",this.calendarPrev),this.$root.$off("calendar:today",this.calendarToday)},computed:l()(l()({},Object(d["b"])({locale:"calendar/locale",titlebarHeight:"common/titlebarHeight",maxDays:"calendar/maxDays",bordered:"calendar/bordered",fiveDayWorkWeek:"calendar/fiveDayWorkWeek",firstDayMonday:"calendar/firstDayMonday",shortMonthLabel:"calendar/shortMonthLabel",showDayOfYearLabel:"calendar/showDayOfYearLabel",shortWeekdayLabel:"calendar/shortWeekdayLabel",shortIntervalLabel:"calendar/shortIntervalLabel",hour24Format:"calendar/hour24Format",hideHeader:"calendar/hideHeader",noScroll:"calendar/noScroll",showMonthLabel:"calendar/showMonthLabel",showWorkWeeks:"calendar/showWorkWeeks",noDefaultHeaderBtn:"calendar/noDefaultHeaderBtn",noDefaultHeaderText:"calendar/noDefaultHeaderText",intervalRange:"calendar/intervalRange",intervalRangeStep:"calendar/intervalRangeStep",intervalHeight:"calendar/intervalHeight",resourceHeight:"calendar/resourceHeight",resourceWidth:"calendar/resourceWidth",dayHeight:"calendar/dayHeight",enableTheme:"calendar/enableTheme",theme:"calendar/theme"})),{},{intervalStart(){return this.intervalRange.min*(1/this.intervalRangeStep)},intervalCount(){return(this.intervalRange.max-this.intervalRange.min)*(1/this.intervalRangeStep)},selectedDate:{get(){return this.$store.state.calendar.selectedDate},set(e){this.$store.commit("calendar/selectedDate",e)}},calendarView:{get(){return this.$store.state.calendar.calendarView},set(e){this.$store.commit("calendar/calendarView",e)}},containerStyle(){const e={};return"month"===this.calendarView||this.calendarView.endsWith("resource")?e.height="auto":e.height=`calc(100vh - ${this.titlebarHeight}px)`,e.width="auto",e},eventsMap(){const e={};return this.events.forEach(t=>(e[t.date]=e[t.date]||[]).push(t)),e},addOrUpdateEvent(){return this.contextDay&&this.contextDay.bgcolor?"Update":"Add"},scrollerPopupStyle160(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"160px"}},scrollerPopupStyle280(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"280px"}}}),watch:{fiveDayWorkWeek(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},firstDayMonday(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},locale(){this.updateFormatters()}},methods:{calendarNext(){this.$refs.calendar.next()},calendarPrev(){this.$refs.calendar.prev()},calendarToday(e){this.selectedDate=e},modifiedStyle(e){let t=e;return"resource"in e&&(t=e.day),!0===t.disabled?{backgroundColor:"#efefef!important",cursor:"not-allowed"}:{}},onChanged(e){},onMoved(e){},getEvents(e){const t=f["e"].parseTimestamp(e),a=[];for(let r=0;r<this.events.length;++r){let n=!1;const i=this.events[r];if(i.date===e){if(void 0!==i.time&&a.length>0){const e=f["e"].parseTimestamp(i.date+" "+i.time),t=f["e"].addToDate(e,{minute:i.duration});for(let r=0;r<a.length;++r){const o=a[r];if(void 0!==o.time){const r=f["e"].parseTimestamp(o.date+" "+o.time),s=f["e"].addToDate(r,{minute:o.duration});if(f["e"].isBetweenDates(e,r,s)||f["e"].isBetweenDates(t,r,s)){o.side="left",i.side="right",a.push(i),n=!0;break}}}}n||(i.side=void 0,a.push(i))}else if(i.days){const e=f["e"].parseTimestamp(i.date),r=f["e"].addToDate(e,{day:i.days});f["e"].isBetweenDates(t,e,r)&&(a.push(i),n=!0)}}return a},checkDateTimeStart(){if(this.$refs.dateTimeEnd.resetValidation(),this.eventForm.dateTimeStart&&this.eventForm.dateTimeEnd){const e=f["e"].parseTimestamp(this.eventForm.dateTimeStart),t=f["e"].parseTimestamp(this.eventForm.dateTimeEnd),a=f["e"].getDayIdentifier(e),r=f["e"].getDayIdentifier(t);if(a<r)return!0;if(a>r)return!1;{const a=f["e"].getTimeIdentifier(e),r=f["e"].getTimeIdentifier(t);return a<=r}}return!1},checkDateTimeEnd(e){if(this.$refs.dateTimeStart.resetValidation(),this.eventForm.dateTimeStart&&this.eventForm.dateTimeEnd){const e=f["e"].parseTimestamp(this.eventForm.dateTimeEnd),t=f["e"].parseTimestamp(this.eventForm.dateTimeStart),a=f["e"].getDayIdentifier(e),r=f["e"].getDayIdentifier(t);if(a>r)return!0;if(a<r)return!1;{const a=f["e"].getTimeIdentifier(e),r=f["e"].getTimeIdentifier(t);return a>=r}}return!1},resetForm(){this.$set(this,"eventForm",l()({},y))},showEvent(e){this.calendarView.indexOf("agenda")<0&&(this.event=e,this.displayEvent=!0)},getEndTime(e){let t=f["e"].parseTimestamp(e.date+" "+e.time);return t=f["e"].addToDate(t,{minute:e.duration}),t=f["e"].getTime(t),t},getEventDate(e){const t=e.date.split("-"),a=new Date(t[0],t[1]-1,t[2]);return this.dateFormatter.format(a)},badgeClasses(e,t){const a=c(e.bgcolor),r="header"===t;return{["text-white bg-"+e.bgcolor]:!a,"full-width":!r&&(!e.side||"full"===e.side),"left-side":!r&&"left"===e.side,"right-side":!r&&"right"===e.side}},badgeStyles(e,t,a,r){const n={};return c(e.bgcolor)&&(n["background-color"]=e.bgcolor,n.color=v["a"].luminosity(e.bgcolor)>.5?"black":"white"),a&&(n.top=a(e.time)+"px",n.position="absolute",void 0!==e.side?(n.width="50%","right"===e.side&&(n.left="50%")):n.width="100%"),r&&(n.height=r(e.duration)+"px"),n["align-items"]="flex-start",n},displayClasses(e){return{["bg-"+e.bgcolor]:!c(e.bgcolor),"text-white":!c(e.bgcolor)}},displayStyles(e){const t={};return c(e.bgcolor)&&(t["background-color"]=e.bgcolor,t.color=v["a"].luminosity(e.bgcolor)>.5?"black":"white"),t},onDateChanged({scope:e,event:t}){this.calendarView.indexOf("scheduler")>-1?this.calendarView="day-scheduler":this.calendarView.indexOf("agenda")>-1?this.calendarView="day-agenda":this.calendarView="day"},resourceClicked({scope:e,event:t}){},resourceDayClicked({scope:e,event:t}){},addEventMenu({scope:e,event:t}){if(!0===e.disabled||this.calendarView.indexOf("scheduler")>-1||this.calendarView.indexOf("agenda")>-1)return;let a;if(this.resetForm(),this.contextDay=l()({},e),!0===this.contextDay.hasTime){a=this.adjustTimestamp(this.contextDay);const e=f["e"].addToDate(a,{hour:1});this.eventForm.dateTimeEnd=f["e"].getDateTime(e)}else a=f["e"].parseTimestamp(this.contextDay.date+" 00:00");this.eventForm.dateTimeStart=f["e"].getDateTime(a),this.eventForm.allDay=!1===this.contextDay.hasTime,this.eventForm.bgcolor="#0000FF",this.addEvent=!0},editEvent(e){let t;if(this.resetForm(),this.contextDay=l()({},e),e.time){t=f["e"].parseTimestamp(e.date+" "+e.time);const a=f["e"].addToDate(t,{minute:e.duration});this.eventForm.dateTimeEnd=f["e"].getDateTime(a)}else t=f["e"].parseTimestamp(this.contextDay.date+" 00:00");this.eventForm.dateTimeStart=f["e"].getDateTime(t),this.eventForm.allDay=!e.time,this.eventForm.bgcolor=e.bgcolor,this.eventForm.icon=e.icon,this.eventForm.title=e.title,this.eventForm.details=e.details,this.addEvent=!0},deleteEvent(e){const t=this.findEventIndex(e);t>=0&&this.events.splice(t,1)},findEventIndex(e){for(let t=0;t<this.events.length;++t)if(e.title===this.events[t].title&&e.details===this.events[t].details&&e.date===this.events[t].date)return t},getDuration(e,t,a){const r=f["e"].makeDateTime(f["e"].parseTimestamp(e)),n=f["e"].makeDateTime(f["e"].parseTimestamp(t)),i=u["b"].getDateDiff(n,r,a);return i},convertDurationTime(e){const t=e,a=Math.floor(t/60/24),r=t/60,n=Math.floor(r),i=Math.floor(r-24*a),o=60*(r-n),s=Math.round(o);return(a>0?a+" days and ":"")+(i>0?i+" hour(s) and ":"")+s+" minute(s)."},onSubmit(){this.saveEvent()},onReset(){},saveEvent(){const e=this;this.$refs.event.validate().then(t=>{if(t){e.addEvent=!1;const t=l()({},e.eventForm);let a=!1;e.contextDay.bgcolor&&(a=!0);const r={title:t.title,details:t.details,icon:t.icon,bgcolor:t.bgcolor,date:String(t.dateTimeStart).slice(0,10).replace(/\//g,"-")};if(!1===t.allDay&&(r.time=String(t.dateTimeStart).slice(11,16),r.duration=e.getDuration(t.dateTimeStart,t.dateTimeEnd,"minutes")),!0===a){const t=e.findEventIndex(e.contextDay);t>=0&&e.events.splice(t,1,l()({},r))}else e.events.push(r);e.contextDay=null}})},showOffset(e){if(0===e.length)return;const t=Object(h["a"])(new Date(this.getTimestampString(e[0])).getTimezoneOffset()/60);return isNaN(t)?"":"GMT-"+t},adjustTimestamp(e){return e.minute=e.minute<15||e.minute>=45?0:30,e.time=f["e"].getTime(e),e},getTimestampString(e){return f["e"].getDate(e)+" "+f["e"].getTime(e)},updateFormatters(){try{this.dateFormatter=new Intl.DateTimeFormat(this.locale||void 0,{weekday:this.shortWeekdayLabel?"short":"long",month:this.shortMonthLabel?"short":"long",day:"numeric",year:"numeric",timeZone:"UTC"})}catch(e){this.dateFormatter=void 0}},handleSwipe(e){let{evt:t}=e,a=o()(e,["evt"]);!1===this.dragging&&(a.duration>=30&&!1===this.ignoreNextSwipe?"right"===a.direction?this.calendarPrev():"left"===a.direction&&this.calendarNext():this.ignoreNextSwipe=!1),Object(g["l"])(t)},onDragEnter(e,t){Object(g["i"])(e)},onDragStart(e,t){this.dragging=!0,this.draggedEvent=t,Object(g["k"])(e)},onDragEnd(e,t){Object(g["l"])(e),this.resetDrag()},onDragOver(e,t,a){return"day"===a?(Object(g["l"])(e),this.draggedEvent.date!==t.date):"interval"===a?(Object(g["l"])(e),this.draggedEvent.date!==t.date&&this.draggedEvent.time!==t.time):void 0},onDrop(e,t,a){e.preventDefault(),e.stopPropagation(),"day"===a?(this.draggedEvent.date=t.date,this.draggedEvent.side=void 0):"interval"===a&&(this.draggedEvent.date=t.date,this.draggedEvent.time=t.time,this.draggedEvent.side=void 0)},resetDrag(){this.draggedEvent=void 0,this.dragging=!1,p["b"].is.desktop&&(this.ignoreNextSwipe=!0)},getAgenda(e){return this.agenda[parseInt(e.weekday,10)]}}},w=b,x=(a("543e"),a("2877")),D=a("9989"),S=a("24e8"),k=a("f09f"),T=a("65c6"),E=a("6ac5"),F=a("9c40"),q=a("a370"),C=a("4b7e"),_=a("0378"),$=a("27f9"),M=a("8572"),O=a("8f8e"),j=a("0016"),H=a("7cbe"),P=a("b498"),I=a("58a8"),W=a("cb32"),V=a("7f67"),R=a("12c5"),L=a("eebe"),N=a.n(L),Q=Object(x["a"])(w,r,n,!1,null,null,null);t["default"]=Q.exports;N()(Q,"components",{QPage:D["a"],QDialog:S["a"],QCard:k["a"],QToolbar:T["a"],QToolbarTitle:E["a"],QBtn:F["a"],QCardSection:q["a"],QCardActions:C["a"],QForm:_["a"],QInput:$["a"],QField:M["a"],QCheckbox:O["a"],QIcon:j["a"],QPopupProxy:H["a"],QColor:P["a"],QBadge:I["a"],QAvatar:W["a"]}),N()(Q,"directives",{ClosePopup:V["a"],TouchSwipe:R["a"]})},e9ba:function(e,t,a){}}]);