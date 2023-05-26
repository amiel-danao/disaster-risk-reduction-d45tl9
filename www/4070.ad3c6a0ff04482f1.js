"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4070],{4070:(dr,j,T)=>{T.r(j),T.d(j,{Tab1PageModule:()=>ir});var h=T(4556),Q=T(6895),z=T(433),u=T(8256);let de=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[Q.ez,z.u5,h.Pc]}),r})();var V=T(131),fe=T(655);function I(r){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function v(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function y(r){v(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||"object"===I(r)&&"[object Date]"===t?new Date(r.getTime()):"number"==typeof r||"[object Number]"===t?new Date(r):(("string"==typeof r||"[object String]"===t)&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(r){if(null===r||!0===r||!1===r)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var we=864e5;function E(r){v(1,arguments);var e=y(r),a=e.getUTCDay(),n=(a<1?7:0)+a-1;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function K(r){v(1,arguments);var t=y(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=E(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}var ye=6048e5;var ee={};function F(){return ee}function L(r,t){var e,a,n,i,o,s,d,l;v(1,arguments);var m=F(),f=D(null!==(e=null!==(a=null!==(n=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:m.weekStartsOn)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==e?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=y(r),g=w.getUTCDay(),b=(g<f?7:0)+g-f;return w.setUTCDate(w.getUTCDate()-b),w.setUTCHours(0,0,0,0),w}function te(r,t){var e,a,n,i,o,s,d,l;v(1,arguments);var m=y(r),f=m.getUTCFullYear(),w=F(),g=D(null!==(e=null!==(a=null!==(n=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:w.firstWeekContainsDate)&&void 0!==a?a:null===(d=w.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==e?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,g),b.setUTCHours(0,0,0,0);var _=L(b,t),P=new Date(0);P.setUTCFullYear(f,0,g),P.setUTCHours(0,0,0,0);var U=L(P,t);return m.getTime()>=_.getTime()?f+1:m.getTime()>=U.getTime()?f:f-1}var Ce=6048e5;function c(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}const C_y=function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return c("yy"===e?n%100:n,e.length)},C_M=function(t,e){var a=t.getUTCMonth();return"M"===e?String(a+1):c(a+1,2)},C_d=function(t,e){return c(t.getUTCDate(),e.length)},C_h=function(t,e){return c(t.getUTCHours()%12||12,e.length)},C_H=function(t,e){return c(t.getUTCHours(),e.length)},C_m=function(t,e){return c(t.getUTCMinutes(),e.length)},C_s=function(t,e){return c(t.getUTCSeconds(),e.length)},C_S=function(t,e){var a=e.length,n=t.getUTCMilliseconds();return c(Math.floor(n*Math.pow(10,a-3)),e.length)};function re(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(0===i)return e+String(n);var o=t||"";return e+String(n)+o+c(i,2)}function ae(r,t){return r%60==0?(r>0?"-":"+")+c(Math.abs(r)/60,2):O(r,t)}function O(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r);return a+c(Math.floor(n/60),2)+e+c(n%60,2)}const xe={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if("yo"===e){var n=t.getUTCFullYear();return a.ordinalNumber(n>0?n:1-n,{unit:"year"})}return C_y(t,e)},Y:function(t,e,a,n){var i=te(t,n),o=i>0?i:1-i;return"YY"===e?c(o%100,2):"Yo"===e?a.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){return c(K(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return C_M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=function Me(r,t){v(1,arguments);var e=y(r),a=L(e,t).getTime()-function De(r,t){var e,a,n,i,o,s,d,l;v(1,arguments);var m=F(),f=D(null!==(e=null!==(a=null!==(n=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==e?e:1),w=te(r,t),g=new Date(0);return g.setUTCFullYear(w,0,f),g.setUTCHours(0,0,0,0),L(g,t)}(e,t).getTime();return Math.round(a/Ce)+1}(t,n);return"wo"===e?a.ordinalNumber(i,{unit:"week"}):c(i,e.length)},I:function(t,e,a){var n=function Te(r){v(1,arguments);var t=y(r),e=E(t).getTime()-function be(r){v(1,arguments);var t=K(r),e=new Date(0);return e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0),E(e)}(t).getTime();return Math.round(e/ye)+1}(t);return"Io"===e?a.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(t,e,a){return"do"===e?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):C_d(t,e)},D:function(t,e,a){var n=function pe(r){v(1,arguments);var t=y(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime();return Math.floor((e-a)/we)+1}(t);return"Do"===e?a.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=0===n?7:n;switch(e){case"i":return String(i);case"ii":return c(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var i,n=t.getUTCHours();switch(i=12===n?"noon":0===n?"midnight":n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var i,n=t.getUTCHours();switch(i=n>=17?"evening":n>=12?"afternoon":n>=4?"morning":"night",e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return C_h(t,e)},H:function(t,e,a){return"Ho"===e?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):C_H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return"Ko"===e?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(t,e,a){return"mo"===e?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):C_m(t,e)},s:function(t,e,a){return"so"===e?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C_s(t,e)},S:function(t,e){return C_S(t,e)},X:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return ae(o);case"XXXX":case"XX":return O(o);default:return O(o,":")}},x:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return ae(o);case"xxxx":case"xx":return O(o);default:return O(o,":")}},O:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+re(o,":");default:return"GMT"+O(o,":")}},z:function(t,e,a,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+re(o,":");default:return"GMT"+O(o,":")}},t:function(t,e,a,n){return c(Math.floor((n._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,a,n){return c((n._originalDate||t).getTime(),e.length)}};var ne=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ie=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const ke={p:ie,P:function(t,e){var o,a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return ne(t,e);switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",ne(n,e)).replace("{{time}}",ie(i,e))}};var Ue=["D","DD"],Ye=["YY","YYYY"];function oe(r,t,e){if("YYYY"===r)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===r)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===r)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===r)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ee={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function q(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth;return r.formats[e]||r.formats[r.defaultWidth]}}var Qe={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Re={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(r){return function(t,e){var n;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=null!=e&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,d=null!=e&&e.width?String(e.width):r.defaultWidth;n=r.values[d]||r.values[s]}return n[r.argumentCallback?r.argumentCallback(t):t]}}function W(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.width,i=t.match(a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth]);if(!i)return null;var l,o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],d=Array.isArray(s)?function at(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}(s,function(f){return f.test(o)}):function rt(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}(s,function(f){return f.test(o)});return l=r.valueCallback?r.valueCallback(d):d,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(o.length)}}}const bt={code:"en-US",formatDistance:function(t,e,a){var n,i=Ee[t];return n="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n},formatLong:Qe,formatRelative:function(t,e,a,n){return Re[t]},localize:{ordinalNumber:function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function nt(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(n.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:W({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:W({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:W({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:W({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var yt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dt=/^'([^]*?)'?$/,Ct=/''/g,Mt=/[a-zA-Z]/;function Ot(r,t,e){var a,n,i,o,s,d,l,m,f,w,g,b,_,P,U,J,Z,B;v(2,arguments);var or=String(t),Y=F(),N=null!==(a=null!==(n=null==e?void 0:e.locale)&&void 0!==n?n:Y.locale)&&void 0!==a?a:bt,X=D(null!==(i=null!==(o=null!==(s=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(l=e.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:Y.firstWeekContainsDate)&&void 0!==o?o:null===(f=Y.locale)||void 0===f||null===(w=f.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==i?i:1);if(!(X>=1&&X<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var G=D(null!==(g=null!==(b=null!==(_=null!==(P=null==e?void 0:e.weekStartsOn)&&void 0!==P?P:null==e||null===(U=e.locale)||void 0===U||null===(J=U.options)||void 0===J?void 0:J.weekStartsOn)&&void 0!==_?_:Y.weekStartsOn)&&void 0!==b?b:null===(Z=Y.locale)||void 0===Z||null===(B=Z.options)||void 0===B?void 0:B.weekStartsOn)&&void 0!==g?g:0);if(!(G>=0&&G<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var $=y(r);if(!function he(r){if(v(1,arguments),!function me(r){return v(1,arguments),r instanceof Date||"object"===I(r)&&"[object Date]"===Object.prototype.toString.call(r)}(r)&&"number"!=typeof r)return!1;var t=y(r);return!isNaN(Number(t))}($))throw new RangeError("Invalid time value");var ur=function _e(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}($),sr=function ge(r,t){return v(2,arguments),function ve(r,t){v(2,arguments);var e=y(r).getTime(),a=D(t);return new Date(e+a)}(r,-D(t))}($,ur),lr={firstWeekContainsDate:X,weekStartsOn:G,locale:N,_originalDate:$},cr=or.match(Tt).map(function(p){var M=p[0];return"p"===M||"P"===M?(0,ke[M])(p,N.formatLong):p}).join("").match(yt).map(function(p){if("''"===p)return"'";var M=p[0];if("'"===M)return function Pt(r){var t=r.match(Dt);return t?t[1].replace(Ct,"'"):r}(p);var A=xe[M];if(A)return!(null!=e&&e.useAdditionalWeekYearTokens)&&function Ie(r){return-1!==Ye.indexOf(r)}(p)&&oe(p,t,String(r)),!(null!=e&&e.useAdditionalDayOfYearTokens)&&function Ne(r){return-1!==Ue.indexOf(r)}(p)&&oe(p,t,String(r)),A(sr,p,N.localize,lr);if(M.match(Mt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");return p}).join("");return cr}Math.pow(10,8);var ue=6e4,se=36e5;var H={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Yt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Nt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,It=/^([+-])(\d{2})(?::?(\d{2}))?$/;function k(r){return r?parseInt(r):1}function R(r){return r&&parseFloat(r.replace(",","."))||0}var Qt=[31,null,31,30,31,30,31,31,30,31,30,31];function ce(r){return r%400==0||r%4==0&&r%100!=0}var Xt=T(529);let Gt=(()=>{class r{constructor(e){this.httpClient=e,this.weatherStackApiKey="b794ccb3a99b9176a23e310d80dad0f0",this.openWeatherApiKey="db09a8b59086ff8679e55b17cbb88d4b"}getWeatherFromApi(e){return this.httpClient.get(`http://api.weatherstack.com/current?access_key=${this.weatherStackApiKey}&query=${e}`)}getForecastWeatherFromApi(e,a){return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${a}&appid=${this.openWeatherApiKey}`)}getCurrentLocationInfo(){return this.httpClient.get("https://ipinfo.io?token=4059f38bd20e75")}}return r.\u0275fac=function(e){return new(e||r)(u.LFG(Xt.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function jt(r,t){if(1&r&&u._UZ(0,"h1",14),2&r){const e=u.oxw();u.Q6J("innerHTML",e.locationInfo.city+", "+e.locationInfo.region,u.oJD)}}function zt(r,t){1&r&&u._uU(0,"Loading...")}function Vt(r,t){if(1&r&&u._UZ(0,"h2",14),2&r){const e=u.oxw();u.Q6J("innerHTML",e.weather.current.weather_descriptions[0],u.oJD)}}function Kt(r,t){if(1&r&&u._UZ(0,"img",15),2&r){const e=u.oxw();u.Q6J("src",e.weatherIcon,u.LSH)}}function er(r,t){1&r&&u._UZ(0,"img",16)}function tr(r,t){if(1&r&&u._UZ(0,"h1",17),2&r){const e=u.oxw();u.Q6J("innerHTML",e.weather.current.temperature+"\xb0C",u.oJD)}}const ar=[{path:"",component:(()=>{class r{constructor(e){this.service=e,this.currentDate="",this.weatherIcon="/assets/images/cloudy.png"}ngOnInit(){return(0,fe.mG)(this,void 0,void 0,function*(){yield this.service.getCurrentLocationInfo().subscribe(e=>{if(this.locationInfo=e,null!=this.locationInfo){console.log(e),console.log(this.locationInfo.city),this.locationInfo.city=this.locationInfo.city.replace(/\xf1/g,"n"),this.service.getWeatherFromApi(this.locationInfo.city).subscribe(n=>{console.log(n),this.weather=n,this.setCurrentDate(this.weather.location.localtime),this.weatherIcon=this.getIcon(this.weather.current.weather_descriptions[0])});const a=this.locationInfo.loc.split(",");this.lat=a[0],this.lng=a[1],this.service.getForecastWeatherFromApi(this.lat,this.lng).subscribe(n=>{this.forecastWeather=n,console.log(this.forecastWeather)})}})})}setCurrentDate(e){this.currentDate=Ot(function Ut(r,t){var e;v(1,arguments);var a=D(null!==(e=null==t?void 0:t.additionalDigits)&&void 0!==e?e:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof r&&"[object String]"!==Object.prototype.toString.call(r))return new Date(NaN);var i,n=function Et(r){var a,t={},e=r.split(H.dateTimeDelimiter);if(e.length>2)return t;if(/:/.test(e[0])?a=e[0]:(t.date=e[0],a=e[1],H.timeZoneDelimiter.test(t.date)&&(t.date=r.split(H.timeZoneDelimiter)[0],a=r.substr(t.date.length,r.length))),a){var n=H.timezone.exec(a);n?(t.time=a.replace(n[1],""),t.timezone=n[1]):t.time=a}return t}(r);if(n.date){var o=function Ft(r,t){var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=r.match(e);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:null===i?n:100*i,restDateString:r.slice((a[1]||a[2]).length)}}(n.date,a);i=function Lt(r,t){if(null===t)return new Date(NaN);var e=r.match(Yt);if(!e)return new Date(NaN);var a=!!e[4],n=k(e[1]),i=k(e[2])-1,o=k(e[3]),s=k(e[4]),d=k(e[5])-1;if(a)return function Jt(r,t,e){return t>=1&&t<=53&&e>=0&&e<=6}(0,s,d)?function At(r,t,e){var a=new Date(0);a.setUTCFullYear(r,0,4);var i=7*(t-1)+e+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+i),a}(t,s,d):new Date(NaN);var l=new Date(0);return function qt(r,t,e){return t>=0&&t<=11&&e>=1&&e<=(Qt[t]||(ce(r)?29:28))}(t,i,o)&&function Rt(r,t){return t>=1&&t<=(ce(r)?366:365)}(t,n)?(l.setUTCFullYear(t,i,Math.max(n,o)),l):new Date(NaN)}(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var l,s=i.getTime(),d=0;if(n.time&&(d=function Ht(r){var t=r.match(Nt);if(!t)return NaN;var e=R(t[1]),a=R(t[2]),n=R(t[3]);return function Zt(r,t,e){return 24===r?0===t&&0===e:e>=0&&e<60&&t>=0&&t<60&&r>=0&&r<25}(e,a,n)?e*se+a*ue+1e3*n:NaN}(n.time),isNaN(d)))return new Date(NaN);if(!n.timezone){var m=new Date(s+d),f=new Date(0);return f.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),f.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),f}return l=function $t(r){if("Z"===r)return 0;var t=r.match(It);if(!t)return 0;var e="+"===t[1]?-1:1,a=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function Bt(r,t){return t>=0&&t<=59}(0,n)?e*(a*se+n*ue):NaN}(n.timezone),isNaN(l)?new Date(NaN):new Date(s+d+l)}(e),"yyyy-MM-dd'T'HH:mm:ss'Z'")}getIcon(e){switch(e){case"Partly cloudy":default:return"/assets/images/cloudy.png";case"Sunny":return"/assets/images/sunny.png"}}}return r.\u0275fac=function(e){return new(e||r)(u.Y36(Gt))},r.\u0275cmp=u.Xpm({type:r,selectors:[["app-tab1"]],decls:26,vars:9,consts:[[1,"ion-page"],[1,"bg-yellow",3,"fullscreen"],[3,"translucent"],["slot","start"],["src","/assets/images/menu.png",2,"width","50px","height","50px"],[1,"bg-yellow"],[1,"ion-text-center"],[1,"ion-text-uppercase",3,"innerHTML"],[3,"innerHTML",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"innerHTML",4,"ngIf"],["alt","weather icon",3,"src",4,"ngIf","ngIfElse"],["class","temperature",3,"innerHTML",4,"ngIf"],["color","primary"],[3,"innerHTML"],["alt","weather icon",3,"src"],["src","https://ionicframework.com/docs/img/demos/card-media.png","alt","weather icon"],[1,"temperature",3,"innerHTML"]],template:function(e,a){if(1&e&&(u.TgZ(0,"div",0)(1,"ion-content",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-buttons",3)(5,"ion-menu-toggle"),u._UZ(6,"ion-img",4),u.qZA()()()(),u.TgZ(7,"ion-grid")(8,"ion-row")(9,"ion-col")(10,"ion-card",5)(11,"div",6)(12,"ion-card-header")(13,"ion-card-title"),u._UZ(14,"h1",7),u.qZA(),u.TgZ(15,"ion-card-subtitle"),u.YNc(16,jt,1,1,"h1",8),u.YNc(17,zt,1,0,"ng-template",null,9,u.W1O),u.YNc(19,Vt,1,1,"h2",10),u.qZA()(),u.YNc(20,Kt,1,1,"img",11),u.YNc(21,er,1,0,"ng-template",null,9,u.W1O),u.TgZ(23,"ion-card-content"),u.YNc(24,tr,1,1,"h1",12),u.qZA()()(),u._UZ(25,"ion-text",13),u.qZA()()()()()),2&e){const n=u.MAs(18);u.xp6(1),u.Q6J("fullscreen",!0),u.xp6(1),u.Q6J("translucent",!0),u.xp6(12),u.Q6J("innerHTML",a.currentDate,u.oJD),u.xp6(2),u.Q6J("ngIf",a.locationInfo&&a.weather)("ngIfElse",n),u.xp6(3),u.Q6J("ngIf",a.weather),u.xp6(1),u.Q6J("ngIf",a.weather)("ngIfElse",n),u.xp6(4),u.Q6J("ngIf",a.weather)}},dependencies:[h.Sm,h.PM,h.FN,h.Zi,h.tO,h.Dq,h.wI,h.W2,h.jY,h.Gu,h.Xz,h.zc,h.Nd,h.yW,h.sr,Q.O5],styles:[".weather-summary[_ngcontent-%COMP%]{position:absolute;left:50%;top:10%;text-align:left}.bg-yellow[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{background-color:#ffed8d;--background:#FFED8D;--ion-background-color:#FFED8D}ion-card[_ngcontent-%COMP%]{background-color:#ffed8d;box-shadow:none}.temperature[_ngcontent-%COMP%]{font-weight:bolder;font-size:45px}ion-menu[_ngcontent-%COMP%]{--background:white}"]}),r})()}];let nr=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[V.Bz.forChild(ar),V.Bz]}),r})(),ir=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[h.Pc,Q.ez,z.u5,de,nr]}),r})()}}]);