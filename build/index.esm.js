import e,{useState as t,useRef as a,useEffect as n}from"react";import r from"joinclass";var o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};function l(e,t,a){if(a||2===arguments.length)for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}function c(t){var a=t.value,n=t.display,o=t.isSelected,l=t.neighbor,c=t.setSelected;return e.createElement("div",{role:"row",className:r("picker-cell month-year-cell",o&&"date-is-today",l&&"date-neighbor-target"),onClick:function(){return c(a)},onTouchCancel:function(){return c(a)}},n||a)}var i=function(t){var a=t.labelMonths,n=void 0===a?[]:a,r=t.selected,o=t.isSameYear,l=t.setSelected,i=void 0===l?function(){}:l;return e.createElement("div",{className:"date-picker2-month-year"},n.map((function(t,a){return e.createElement(c,{key:a,isSelected:a===r&&o,display:t,value:a,setSelected:i})})))},s=function(t){var a=t.decadeData,n=t.selected,r=t.setSelected,o=void 0===r?function(){}:r,i=a[0],s=a[1];return e.createElement("div",{className:"date-picker2-month-year"},e.createElement(c,{neighbor:!0,value:i-1,setSelected:o}),l([],Array(s-i),!0).map((function(t,a){var r=a+i;return e.createElement(c,{key:a,isSelected:r===n,value:r,setSelected:o})})),e.createElement(c,{neighbor:!0,value:s+1,setSelected:o}))};function u(e,t){return t>11?(e++,t=0):t<0&&(e--,t=11),[e,t]}function d(e){return[31,e%4==0&&e%100!=0||e%400==0?29:28,31,30,31,30,31,31,30,31,30,31]}function m(e,t){var a=u(e,t),n=a[0],r=a[1];return{year:n,month:r,maxDayOfMonth:d(n)[r],otherMonth:!0}}function h(e,t,a){var n=e+"0".concat(t).slice(-2)+"0".concat(a).slice(-2);return Number(n)}function y(e){var t=Number("".concat(e.toString()[2],"0")),a=e.toString().substring(0,2);return[t=Number(0===t?"".concat(a,"00"):"".concat(a).concat(t)),t+10]}var f=["January","February","March","April","May","June","July","August","September","October","November","December"],v=[{name:"Sunday",shortName:"Sun"},{name:"Monday",shortName:"Mon"},{name:"Tuesday",shortName:"Tue"},{name:"Wednesday",shortName:"Wed"},{name:"Thursday",shortName:"Thu"},{name:"Friday",shortName:"Fri"},{name:"Saturday",shortName:"Sat"}],g=function(c){var g=c.className,p=c.todayClassName,N=c.selectedClassName,b=c.neighborMonthClassName,E=c.labelMonthYearClassName,S=c.width,k=c.readOnly,D=void 0!==k&&k,M=c.show,w=void 0===M||M,T=c.showAnchor,F=void 0!==T&&T,O=c.labelNext,Y=c.labelBack,C=c.weekStart,A=void 0===C?"sunday":C,x=c.notBeforeTime,R=c.notAfterTime,L=c.value,j=c.showToday,J=void 0===j||j,W=c.i18nLabelWeek,B=c.i18nLabelMonth,V=c.onSelectedValue,P=void 0===V?function(){}:V,q=c.formatTittleYearMonth,z=c.formartDayValue,G=t(L||new Date),H=G[0],I=G[1],K=a(null),Q=t([]),U=Q[0],X=Q[1],Z=t([]),$=Z[0],_=Z[1],ee=t([]),te=ee[0],ae=ee[1],ne=t("date"),re=ne[0],oe=ne[1],le=t([]),ce=le[0],ie=le[1],se=Array.isArray(W)&&7===W.length;n((function(){var e=L||new Date;I(L||new Date),he(e.getFullYear(),e.getMonth(),e)}),[L]),n((function(){var e=se?W:v;X("monday"!==A?l([],e,!0):l(l([],e.slice(1),!0),[e[0]],!1))}),[A,W]),n((function(){!w&&oe("date")}),[w]);var ue,de,me=function(e,t,a,n,r){if(!n&&!r)return!1;var o=h(e,t,a);return r>0&&n>0?!(n<=o&&o<=r):r>0&&o>r||n>0&&o<n},he=function(e,t,a){var n=new Date,r=n.getDate(),c=n.getMonth(),i=n.getFullYear(),s=new Date(e,t,1).getDay(),u=d(e)[t],y=m(e,t-1),f=m(e,t+1),v=function(e,t){return t===a.getDate()&&e.month===a.getMonth()&&e.year===a.getFullYear()},g=x?h(x.getFullYear(),x.getMonth(),x.getDate()):0,p=R?h(R.getFullYear(),R.getMonth(),R.getDate()):0;"monday"===A&&(0===s?s=6:s-=1);var N=[],b=[],E=1;if(0!==s||0===s&&28===u)for(var S=y.maxDayOfMonth-s+1;S<=y.maxDayOfMonth;S++)b.push(o(o({},y),{dayDisplay:S,isSelected:v(y,S),isOverRange:me(y.year,y.month,S,g,p)}));var k=b.length;E=b.length,7===b.length&&(N.push(l([],b,!0)),b=[],E=1);for(S=1;S<=u;S++)b.push({year:e,month:t,maxDayOfMonth:u,dayDisplay:S,isToday:r===S&&c===t&&i===e,isSelected:v({year:e,month:t},S),isOverRange:me(e,t,S,g,p)}),++E>=7&&(N.push(l([],b,!0)),b=[],E=0);var D=42-k-u;for(S=1;S<=D;S++)b.push(o(o({},f),{dayDisplay:S,isSelected:v(f,S),isOverRange:me(f.year,f.month,S,g,p)})),++E>=7&&(N.push(l([],b,!0)),b=[],E=0);b.length>0&&N.push(l([],b,!0)),_(N),ie([e,t])},ye=function(){K.current.classList.add("fade"),setTimeout((function(){return K.current.classList.remove("fade")}),50)},fe=function(e){if(!D){var t=new Date(e.year,e.month,e.dayDisplay,0,0,0);I(t),P(t),he(e.year,e.month,t)}},ve=function(){return"month"===re?(ae(y(ce[0])),oe("year"),void ye()):"date"===re?(oe("month"),void ye()):void 0},ge=function(e){ye();var t=ce[0],a=ce[1];if("date"!==re){if("year"===re){var n=t+10*e;return ae(y(n)),void ie([n,a])}var r=u(t+e,a),o=r[0],l=r[1];he(o,l,H)}else{var c=u(t,a+e),i=c[0],s=c[1];he(i,s,H)}};return w?e.createElement("div",{style:{width:S},className:r("date-picker2",g)},e.createElement("div",{className:"date-picker2-header"},e.createElement("span",{className:"date-picker2-nav-button button-left",onClick:function(){return ge(-1)},onTouchEnd:function(){return ge(-1)}},Y?e.createElement(e.Fragment,null,Y):e.createElement(e.Fragment,null," 〈")),F&&e.createElement("span",{className:"date-picker2-anchor left-label"}),e.createElement("span",{ref:K,className:r("date-picker2-title-month-year",E),onClick:ve,onTouchEnd:ve},(ue=ce[0],de=ce[1],q?q(ue,de+1,te):"month"===re?ue||"":"year"===re?"".concat(te[0]," - ").concat(te[1]):"".concat((B||f)[de]||""," ").concat(ue||"").trim())),F&&e.createElement("span",{className:"date-picker2-anchor right-label"}),e.createElement("span",{className:"date-picker2-nav-button button-right",onClick:function(){return ge(1)},onTouchEnd:function(){return ge(1)}},O?e.createElement(e.Fragment,null,O):e.createElement(e.Fragment,null,"〉"))),e.createElement("div",{className:"date-picker2-calendar",role:"grid"},"date"===re?e.createElement((function(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"date-row",role:"row"},U.map((function(t,a){return e.createElement("span",{key:a,className:"week-label date-cell","aria-readonly":"true"},t.shortName)}))),$.map((function(t,a){return e.createElement("div",{key:a,className:"date-row",role:"row"},t.map((function(t,a){return e.createElement("span",{key:a,className:r("picker-cell date-cell",t.otherMonth&&"date-neighbor-target",t.otherMonth&&b,t.isToday&&J&&"date-is-today",t.isToday&&p,!D&&t.isSelected&&"date-is-selected",!D&&t.isSelected&&N,D&&"read-only",!D&&t.isOverRange&&"disabled-over-range-time"),onClick:function(){return!t.isOverRange&&fe(t)},onTouchEnd:function(){return!t.isOverRange&&fe(t)}},z?z(t.dayDisplay):t.dayDisplay)})))})))}),null):"month"===re?e.createElement(i,{labelMonths:B||f,selected:H.getMonth(),isSameYear:H.getFullYear()===ce[0],setSelected:function(e){var t=u(ce[0],e),a=t[0],n=t[1];he(a,n,H),oe("date")}}):e.createElement(s,{decadeData:te,selected:H.getFullYear(),setSelected:function(e){ie([e,ce[1]]),oe("month")}}))):e.createElement(e.Fragment,null)};export{g as DateTimePicker,g as default};