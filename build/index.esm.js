import e,{useRef as a,useEffect as t,useState as n}from"react";import r from"joinclass";var l=function(a){var t=a.value,n=a.className,l=a.disabled,o=a.display,c=a.isSelected,i=a.neighbor,s=a.setSelected;return e.createElement("span",{className:r("picker-cell month-year-cell",n,l&&"disabled-over-range-time",c&&"date-is-selected",i&&"date-neighbor-target"),onClick:function(){return s(t)},onTouchCancel:function(){return s(t)},"aria-hidden":!0},e.createElement("span",{className:"date-cell-label-value"},o||t),e.createElement("div",{className:"date-cell-box-bullet"}),e.createElement("div",{tabIndex:!l&&c?0:-1,className:"date-cell-box-selection"}))},o=function(e){var a=e.children,t=e.ifCondition,n=e.elseChildren;return t?a:void 0===n?null:n},c=function(e){return null==e},i=function(e,a){void 0===a&&(a=50),e&&(e.classList.add("fade"),setTimeout((function(){return e.classList.remove("fade")}),a))},s=function(e){var a=e.minYear,t=e.maxYear,n=e.notBeforeTime,r=e.notAfterTime,l=new Date,o=l.getFullYear();if(a||(a=o-100),t||(t=o+100),n){var c=n.getFullYear();a=a<c?c:a}else n=new Date(a,0,1);if(r){var i=r.getFullYear();t=t>i?i:t}else r=new Date(t,11,31);return a>t&&(a=t),!e.minimumDayCanLargeThanToday&&a>o&&(a=o,n=l),{minYear:a,maxYear:t,minMonth:n.getMonth(),maxMonth:r.getMonth(),notBeforeTime:n,notAfterTime:r,beforeYearMonth:v([n.getFullYear(),n.getMonth()]),afterYearMonth:v([r.getFullYear(),r.getMonth()]),beforeAll:y(n.getFullYear(),n.getMonth(),n.getDate()),afterAll:y(r.getFullYear(),r.getMonth(),r.getDate())}},m=function(e,a){return e.reduce((function(e,t,n){return(n%a==0?e.push([t]):e[e.length-1].push(t))&&e}),[])},d=function(e,a){return a>11?(e++,a=0):a<0&&(e--,a=11),[e,a]},u=function(e,a,t,n,r){if(!n&&!r)return!1;var l=y(e,a,t);return r>0&&n>0?!(n<=l&&l<=r):r>0&&l>r||n>0&&l<n},h=function(e){return[31,e%4==0&&e%100!=0||e%400==0?29:28,31,30,31,30,31,31,30,31,30,31]},f=function(e,a){var t=d(e,a),n=t[0],r=t[1];return{year:n,month:r,maxDayOfMonth:h(n)[r],otherMonth:!0}},y=function(e,a,t){var n=e+"0".concat(a).slice(-2)+"0".concat(t).slice(-2);return Number(n)},v=function(e){var a=e[0]+"0".concat(e[1]).slice(-2);return Number(a)},N=function(e){var a=Number("".concat(e.toString()[2],"0")),t=e.toString().substring(0,2);return[a=Number(0===a?"".concat(t,"00"):"".concat(t).concat(a)),a+9]},g=["January","February","March","April","May","June","July","August","September","October","November","December"],p=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],b=[{name:"Sunday",shortName:"Su",dateClassName:"date-cell-sunday",keyName:"sun"},{name:"Monday",shortName:"Mo",dateClassName:"date-cell-monday",keyName:"mon"},{name:"Tuesday",shortName:"Tu",dateClassName:"date-cell-tuesday",keyName:"tue"},{name:"Wednesday",shortName:"We",dateClassName:"date-cell-wednesday",keyName:"wed"},{name:"Thursday",shortName:"Th",dateClassName:"date-cell-thursday",keyName:"thu"},{name:"Friday",shortName:"Fr",dateClassName:"date-cell-friday",keyName:"fri"},{name:"Saturday",shortName:"Sa",dateClassName:"date-cell-saturday",keyName:"sat"}],k=b.map((function(e){return e.dateClassName})),M=function(a){var t=a.weekLabels,n=void 0===t?[]:t,l=a.dayOfWeeks,c=void 0===l?[]:l,i=a.readOnly,s=a.neighborMonthClassName,m=a.showToday,d=a.todayClassName,u=a.selectedClassName,h=a.handleChangeDate,f=a.formartDayValue;return e.createElement(e.Fragment,null,c.map((function(a,t){return e.createElement("div",{key:t,className:"date-row date-line",role:"row"},a.map((function(a,t){var l,c=a.fitMonthDay||i;return e.createElement("span",{key:t,className:r("picker-cell date-cell","date-cell-".concat(y(a.year,a.month+1,a.dayDisplay)),null===(l=n[t])||void 0===l?void 0:l.dateClassName,a.isBookmark&&"date-is-bookmark",a.otherMonth&&"date-neighbor-target",a.otherMonth&&s,a.isToday&&m&&"date-is-today",a.isToday&&d,!c&&a.isSelected&&"date-is-selected",!c&&a.isSelected&&u,c&&"read-only",!c&&a.isOverRange&&"disabled-over-range-time"),onClick:function(e){return!c&&!a.isOverRange&&h(a)},onTouchEnd:function(){return!c&&!a.isOverRange&&h(a)},"aria-hidden":!0},e.createElement(o,{ifCondition:!a.fitMonthDay},e.createElement("span",{className:"date-cell-label-value"},f?f(a.dayDisplay):a.dayDisplay)),e.createElement("div",{className:"date-cell-box-bullet"}),e.createElement("div",{tabIndex:!c&&a.isSelected?0:-1,className:"date-cell-box-selection"}))})))})))},C=function(a){for(var t=a.decadeData,n=a.selected,r=a.minYear,o=a.maxYear,c=a.setSelected,i=void 0===c?function(){}:c,s=t[0],d=t[1],u=[],h=s-1;h<=d+1;h++)u.push(h);var f=m(u,3);return e.createElement(e.Fragment,null,f.map((function(a,t){return e.createElement("div",{key:t,className:"date-row",role:"row"},a.map((function(a,t){return e.createElement(l,{key:t,className:"year-cell-".concat(a),disabled:r>a||o<a,neighbor:a<s||a>d,isSelected:a===n,value:a,setSelected:i})})))})))},E=function(a){var t=a.labelMonths,n=void 0===t?[]:t,o=a.selected,c=a.isSameYear,i=a.year,s=a.minYearMonth,u=a.maxYearMonth,h=a.setSelected,f=void 0===h?function(){}:h,y=m(n,3);return e.createElement(e.Fragment,null,y.map((function(a,t){return e.createElement("div",{key:t,className:"date-row",role:"row"},a.map((function(a,n){var m=3*t+n,h=v(d(i,m));return e.createElement(l,{key:n,className:r("month-year-cell-".concat(h),"month-cell-".concat(p[m])),disabled:s>h||u<h,isSelected:m===o&&c,display:a,value:m,setSelected:f})})))})))},Y=function(a){var t=a.weekLabels,n=a.weekClassName,l=a.dayOfWeeks,o=void 0===l?[]:l,c=a.readOnly,i=a.neighborMonthClassName,s=a.showToday,m=a.todayClassName,d=a.selectedClassName,u=a.onClickWeekLabel,h=void 0===u?function(){}:u,f=a.handleChangeDate,y=a.formartDayValue;return e.createElement(e.Fragment,null,e.createElement("div",{className:"date-row date-label",role:"row"},t.map((function(a,t){return e.createElement("span",{key:t,className:r("week-label date-cell",a.dateClassName,n),onClick:function(){return h(a)},onTouchEnd:function(){return h(a)},"aria-hidden":!0},e.createElement("span",null,a.shortName),e.createElement("div",{className:"week-cell-box-selection"}))}))),e.createElement(M,{weekLabels:t,dayOfWeeks:o,readOnly:c,neighborMonthClassName:i,showToday:s,todayClassName:m,selectedClassName:d,formartDayValue:y,handleChangeDate:f}))},D=function(a){var t=a.children,n=a.className,l=a.disabled,o=a.show,c=a.index,i=a.handleNextBack;return o?e.createElement("span",{className:r("date-picker2-nav-button",n,l&&"button-disabled"),onClick:function(){return!l&&i(c)},onTouchEnd:function(){return!l&&i(c)}},t||e.createElement("span",{className:"date-picker2-arrow-inner"})):null},T=function(){return T=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},T.apply(this,arguments)};function w(e,a,t){if(t||2===arguments.length)for(var n,r=0,l=a.length;r<l;r++)!n&&r in a||(n||(n=Array.prototype.slice.call(a,0,r)),n[r]=a[r]);return e.concat(n||Array.prototype.slice.call(a))}"function"==typeof SuppressedError&&SuppressedError;var x,S=function(n){var l=n.currentDate,o=n.minYear,s=n.maxYear,m=n.minMonth,d=n.maxMonth,u=n.valueMonth,h=n.valueYear,f=n.className,y=n.i18nLabelMonth,v=n.minimumDayCanLargeThanToday,N=n.handleChange,p=a(null),b=a(null);if(t((function(){b.current&&i(b.current)}),[u]),t((function(){p.current&&i(p.current)}),[h]),c(u)||c(h))return null;var k=h===s?(y||g).slice(0,d+1):h===o?(y||g).slice(m):y||g,M=function(){var e,a=l.getFullYear();return o>s&&(o=(e=[s,o])[0],s=e[1]),(v&&o<a||a<o)&&(o=a),new Array(s-o+1).fill(0)}();return e.createElement("span",{className:r("date-picker2-select-month-year date-picker2-title-month-year",f)},e.createElement("span",{ref:b,className:"date-picker2-select-month"},e.createElement("select",{className:"date-picker2-select-month-control",value:u,onChange:function(e){i(e.target,100),N(h,Number(e.target.value))},"aria-hidden":!0},k.map((function(a,t){return e.createElement("option",{key:t,value:t},a)})))),e.createElement("span",{className:"date-picker2-select-split"}),e.createElement("span",{ref:p,className:"date-picker2-select-year"},e.createElement("select",{className:"date-picker2-select-year-control",value:h,onChange:function(e){i(e.target,100),N(Number(e.target.value),u)},"aria-hidden":!0},M.map((function(a,t){var n=s-t;return e.createElement("option",{key:n,value:n},n)})))))},B=((x={8:1,7:0})[-1]=6,x),F={monday:{numberWeek:1,plus:-1},sunday:{numberWeek:0,plus:0},saturday:{numberWeek:-1,plus:1},friday:{numberWeek:-2,plus:2}},O=function(l){var c=l.className,m=l.todayClassName,u=l.selectedClassName,f=l.neighborMonthClassName,p=l.labelMonthYearClassName,M=l.weekClassName,x=l.width,B=void 0===x?"343px":x,O=l.height,A=void 0===O?"auto":O,L=l.readOnly,V=void 0!==L&&L,j=l.show,R=void 0===j||j,I=l.showAnchor,J=void 0!==I&&I,P=l.labelNext,q=l.labelBack,z=l.weekStart,G=void 0===z?"sunday":z,H=l.fitMonthDay,K=void 0!==H&&H,Q=l.notBeforeTime,U=l.notAfterTime,X=l.value,Z=l.bookmarkDates,$=void 0===Z?[]:Z,_=l.showToday,ee=void 0===_||_,ae=l.i18nLabelWeek,te=l.i18nLabelMonth,ne=l.minYear,re=l.maxYear,le=l.minimumDayCanLargeThanToday,oe=void 0!==le&&le,ce=l.showMonthYearSelection,ie=void 0!==ce&&ce,se=l.showNextBack,me=void 0===se||se,de=l.rightNextBack,ue=l.onSelectedValue,he=void 0===ue?function(){}:ue,fe=l.onChangeView,ye=void 0===fe?function(){}:fe,ve=l.onClickWeekLabel,Ne=void 0===ve?function(){}:ve,ge=l.formatTittleYearMonth,pe=l.formartDayValue,be=a(null),ke=a(!0),Me=a({}),Ce=n(X||new Date),Ee=Ce[0],Ye=Ce[1],De=n([]),Te=De[0],we=De[1],xe=n([]),Se=xe[0],Be=xe[1],Fe=n([]),Oe=Fe[0],Ae=Fe[1],Le=n("date"),We=Le[0],Ve=Le[1],je=n([]),Re=je[0],Ie=je[1],Je="date"===We,Pe="month"===We,qe="year"===We;t((function(){Me.current=s({maxYear:re,minYear:ne,notAfterTime:U,notBeforeTime:Q,minimumDayCanLargeThanToday:oe});var e=X||new Date;X?oe||e<Me.current.notBeforeTime&&(ke.current=!1,e=Me.current.notBeforeTime):oe&&(ke.current=!1,e=new Date(Me.current.minYear,Me.current.minMonth,1)),Ye(e),W(e.getFullYear(),e.getMonth(),e,Me.current.notBeforeTime,Me.current.notAfterTime,G,K,Be,Ie,$,ke.current)}),[X,B,A,ee,Q,U,te,V,K,oe,ie,G]),t((function(){var e,a=(Array.isArray(ae)&&7===ae.length?ae:b).map((function(e,a){return T(T({},e),{dateClassName:k[a]})})),t=null===(e=F[G])||void 0===e?void 0:e.numberWeek,n=void 0===t?0:t;we(w(w([],a.slice(n),!0),a.slice(0,n),!0))}),[G,ae]),t((function(){(!R||!ie)&&Ve("date")}),[R,ie]);var ze,Ge,He=function(){var e="date";Pe&&(Ae(N(Re[0])),e="year"),Je&&(e="month"),Ve(e),ye(e),i(be.current)},Ke=function(e){i(be.current);var a=Re[0],t=Re[1];if(qe){var n=a+10*e;return Ae(N(n)),void Ie([n,t])}var r=Je||ie?d(a,t+e):d(a+e,t);W(r[0],r[1],Ee,Me.current.notBeforeTime,Me.current.notAfterTime,G,K,Be,Ie,$,ke.current)},Qe=function(){var e=Re[0],a=Re[1];if(qe)return{disabledBack:Oe[0]<Me.current.minYear,disabledNext:Oe[1]>Me.current.maxYear};if(Je){var t=h(e)[a];return{disabledBack:Me.current.beforeAll>=y(e,a,1),disabledNext:Me.current.afterAll<=y(e,a,t)}}var n=d(e,0),r=d(e,11);return{disabledBack:Me.current.beforeYearMonth>=v(n),disabledNext:Me.current.afterYearMonth<=v(r)}}(),Ue=Qe.disabledBack,Xe=Qe.disabledNext;return R?e.createElement("div",{style:{width:B,height:K?"auto":A},className:r("date-picker2",c)},e.createElement("div",{className:"date-picker2-header"},!de&&e.createElement(D,{show:me,className:"button-left",disabled:Ue,index:-1,handleNextBack:Ke},q),J&&e.createElement("span",{className:"date-picker2-anchor left-label"}),ie?e.createElement(S,{className:p,currentDate:Ee,maxYear:Me.current.maxYear,minYear:Me.current.minYear,minMonth:Me.current.minMonth,maxMonth:Me.current.maxMonth,valueYear:Re[0],valueMonth:Re[1],i18nLabelMonth:te,minimumDayCanLargeThanToday:oe,handleChange:function(e,a){W(e,a,Ee,Me.current.notBeforeTime,Me.current.notAfterTime,G,K,Be,Ie,$,ke.current)}}):e.createElement("span",{ref:be,className:r("date-picker2-title-month-year",Je&&"date-picker2-title-month",Pe&&"date-picker2-title-year",qe&&"date-picker2-title-decade",p),"aria-hidden":!0},e.createElement("span",{className:"date-picker2-label-month-year",onClick:He,onTouchEnd:He,"aria-hidden":!0},(ze=Re[0],Ge=Re[1],ge?Pe?ge(ze,-1):qe?ge(-1,-1,Oe):ge(ze,Ge+1):Pe?ze||"":qe?"".concat(Oe[0]," - ").concat(Oe[1]):"".concat((te||g)[Ge]||""," ").concat(ze||"").trim()))),J&&e.createElement("span",{className:"date-picker2-anchor right-label"}),de&&e.createElement(D,{show:me,className:"button-left",disabled:Ue,index:-1,handleNextBack:Ke},q),e.createElement(D,{show:me,className:"button-right",disabled:Xe,index:1,handleNextBack:Ke},P)),e.createElement("div",{className:"date-picker2-calendar",role:"grid"},e.createElement(o,{ifCondition:Je},e.createElement(Y,{weekLabels:Te,weekClassName:M,dayOfWeeks:Se,readOnly:V,showToday:ee,todayClassName:m,selectedClassName:u,neighborMonthClassName:f,onClickWeekLabel:Ne,handleChangeDate:function(e){if(!V){ke.current=!0;var a=new Date(e.year,e.month,e.dayDisplay,0,0,0);Ye(a),he(a),W(e.year,e.month,a,Me.current.notBeforeTime,Me.current.notAfterTime,G,K,Be,Ie,$,ke.current)}},formartDayValue:pe})),e.createElement(o,{ifCondition:Pe},e.createElement(E,{year:Re[0],labelMonths:te||g,minYearMonth:Me.current.beforeYearMonth,maxYearMonth:Me.current.afterYearMonth,selected:Ee.getMonth(),isSameYear:Ee.getFullYear()===Re[0],setSelected:function(e){var a=d(Re[0],e);W(a[0],a[1],Ee,Me.current.notBeforeTime,Me.current.notAfterTime,G,K,Be,Ie,$,ke.current),Ve("date"),ye("date")}})),e.createElement(o,{ifCondition:qe},e.createElement(C,{decadeData:Oe,selected:Ee.getFullYear(),minYear:Me.current.minYear,maxYear:Me.current.maxYear,setSelected:function(e){Ie([e,Re[1]]),Ve("month"),ye("month")}})))):e.createElement(e.Fragment,null)},A=function(e,a,t){return a===t.getDate()&&e.month===t.getMonth()&&e.year===t.getFullYear()},L=function(e,a,t,n){return void 0===n&&(n=[]),n.findIndex((function(n){return n.getFullYear()===e&&n.getMonth()===a&&n.getDate()===t}))>-1};function W(e,a,t,n,r,l,o,c,i,s,m){var d=new Date,v=d.getDate(),N=d.getMonth(),g=d.getFullYear(),p=new Date(e,a,1).getDay(),b=h(e)[a],k=f(e,a-1),M=f(e,a+1),C=n?y(n.getFullYear(),n.getMonth(),n.getDate()):0,E=r?y(r.getFullYear(),r.getMonth(),r.getDate()):0;"sunday"!==l&&F[l]&&(p+=F[l].plus,void 0!==B[p]&&(p=B[p]));var Y=[],D=[],x=1;if(0!==p||0===p&&28===b)for(var S=k.maxDayOfMonth-p+1;S<=k.maxDayOfMonth;S++)D.push(T(T({},k),{dayDisplay:S,isSelected:A(k,S,t),isOverRange:u(k.year,k.month,S,C,E),fitMonthDay:o,isBookmark:L(k.year,k.month,S,s)}));var O=D.length;x=D.length,7===D.length&&(Y.push(w([],D,!0)),D=[],x=1);for(S=1;S<=b;S++)D.push({year:e,month:a,maxDayOfMonth:b,dayDisplay:S,isToday:v===S&&N===a&&g===e,isSelected:A({year:e,month:a},S,t)&&m,isOverRange:u(e,a,S,C,E),isBookmark:L(e,a,S,s)}),++x>=7&&(Y.push(w([],D,!0)),D=[],x=0);var W=42-O-b;for(S=1;S<=W;S++)D.push(T(T({},M),{dayDisplay:S,isSelected:A(M,S,t),isOverRange:u(M.year,M.month,S,C,E),fitMonthDay:o,isBookmark:L(M.year,M.month,S,s)})),++x>=7&&(Y.push(w([],D,!0)),D=[],x=0);D.length>0&&Y.push(w([],D,!0)),c(Y),i([e,a])}export{l as CalendarCell,M as CalendarDayOfWeeks,C as CalendarDecade,E as CalendarMonth,D as CalendarNav,Y as CalendarWeek,i as animateLabelChange,k as datesClassName,O as default,y as fmtYearMonthDateToNum,v as fmtYearMonthToNum,N as getDecadesFromYear,h as getMaxDayOfMonth,s as getMiMaxYear,f as getPreNextOfMonth,d as getRealYearMonth,c as isNil,u as isOverCompareDate,p as keyMonths,g as labelMonths,b as labelWeekDays,m as toMatrix};
