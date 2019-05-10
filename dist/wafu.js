!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.wafu=r():e.wafu=r()}(window,function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)n.d(t,a,function(r){return e[r]}.bind(null,a));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r){var n={_weekNames:{0:"日",1:"月",2:"火",3:"水",4:"木",5:"金",6:"土"},weekNames:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?n._weekNames:n.arrayValues(n._weekNames)},weekName:function(e){return"undefined"!=typeof moment&&e instanceof moment&&(e=e.day()),n.arrayGet(n._weekNames,e.toString())},hasWeekName:function(e){return""!==n.weekName(e)},longWeekNames:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=n.weekNames(),t={};for(var a in r)t[a]=r[a]+"曜日";return e?t:n.arrayValues(t)},longWeekName:function(e){return"undefined"!=typeof moment&&e instanceof moment&&(e=e.day()),n.arrayGet(n.longWeekNames(),e.toString())},_months:{1:"1月",2:"2月",3:"3月",4:"4月",5:"5月",6:"6月",7:"7月",8:"8月",9:"9月",10:"10月",11:"11月",12:"12月"},months:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?n._months:n.arrayValues(n._months)},month:function(e){return"undefined"!=typeof moment&&e instanceof moment&&(e=e.month()+1),n.arrayGet(n._months,e.toString())},hasMonth:function(e){return""!==n.month(e)},_oldMonths:{1:"睦月",2:"如月",3:"弥生",4:"卯月",5:"皐月",6:"水無月",7:"文月",8:"葉月",9:"長月",10:"神無月",11:"霜月",12:"師走"},oldMonths:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?n._oldMonths:n.arrayValues(n._oldMonths)},oldMonth:function(e){return"undefined"!=typeof moment&&e instanceof moment&&(e=e.month()+1),n.arrayGet(n._oldMonths,e.toString())},hasOldMonth:function(e){return""!==n.oldMonth(e)},_genders:[{id:"1",text:"男性"},{id:"2",text:"女性"},{id:"0",text:"その他"}],genders:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=n._genders;return e?r:[r[0],r[1]]},gender:function(e){for(var r in n._genders){var t=n._genders[r];if(t.id.toString()===e.toString())return t.text}return""},hasGender:function(e){return""!==n.gender(e)},_prefectures:{1:"北海道",2:"青森県",3:"岩手県",4:"宮城県",5:"秋田県",6:"山形県",7:"福島県",8:"茨城県",9:"栃木県",10:"群馬県",11:"埼玉県",12:"千葉県",13:"東京都",14:"神奈川県",15:"新潟県",16:"富山県",17:"石川県",18:"福井県",19:"山梨県",20:"長野県",21:"岐阜県",22:"静岡県",23:"愛知県",24:"三重県",25:"滋賀県",26:"京都府",27:"大阪府",28:"兵庫県",29:"奈良県",30:"和歌山県",31:"鳥取県",32:"島根県",33:"岡山県",34:"広島県",35:"山口県",36:"徳島県",37:"香川県",38:"愛媛県",39:"高知県",40:"福岡県",41:"佐賀県",42:"長崎県",43:"熊本県",44:"大分県",45:"宮崎県",46:"鹿児島県",47:"沖縄県"},prefectures:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=n._prefectures;if(e){var t={};for(var a in r){var o=r[a];t[a]=n.getShortPrefecture(o)}return t}return r},prefecture:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0!==n._prefectures[e]){var t=n._prefectures[e];return r?n.getShortPrefecture(t):t}return""},prefectureId:function(e){for(var r in n._prefectures){var t=n._prefectures[r],a=n.getShortPrefecture(t);if(t===e||a===e)return r}return-1},hasPrefecture:function(e){return""!==n.prefecture(e)},_regions:{1:"北海道",2:"東北",3:"関東",4:"中部",5:"関西",6:"中国",7:"四国",8:"九州"},_regionPrefectureIds:{1:[1],2:[2,3,4,5,6,7],3:[8,9,10,11,12,13,14],4:[15,16,17,18,19,20,21,22,23],5:[24,25,26,27,28,29,30],6:[31,32,33,34,35],7:[36,37,38,39],8:[40,41,42,43,44,45,46,47]},regions:function(){return n._regions},regionPrefectureIds:function(){return n._regionPrefectureIds},region:function(e){return n.arrayGet(n._regions,e.toString())},regionId:function(e){for(var r in n._regions){if(n._regions[r]===e)return r}return-1},hasRegion:function(e){return""!==n.region(e)},_eras:[{year:2018,name:"令和",initial:"R",symbol:"reiwa"},{year:1988,name:"平成",initial:"H",symbol:"heisei"},{year:1925,name:"昭和",initial:"S",symbol:"showa"},{year:1911,name:"大正",initial:"T",symbol:"taisho"},{year:1867,name:"明治",initial:"M",symbol:"meiji"}],era:function(e){for(var r in e=parseInt(e),n._eras){var t=n._eras[r],a=t.year,o=t.name;if(e>a){var i=e-a,u=1===i?"元":i;return{name:o,year:i,initial:t.initial,symbol:t.symbol,full:o+u+"年"}}}return null},eraYear:function(e){return n.era(e).full},eraYears:function(){var e={};for(var r in n._eras){var t=n._eras[r];e[t.symbol]=t.name}return e},eraNames:function(){var e=[];for(var r in n._eras){var t=n._eras[r];e.push(t.name)}return e},eraInitials:function(){var e=[];for(var r in n._eras){var t=n._eras[r];e.push(t.initial)}return e},eraSymbols:function(){var e=[];for(var r in n._eras){var t=n._eras[r];e.push(t.symbol)}return e},commonYear:function(e){e=n.singleByte(e).replace("元年","1年");var r=n.eraNames().join("|"),t=n.eraInitials().join("|"),a=new RegExp("("+r+"|"+t+")([0-9]+)[年]?"),o=e.match(a);if(o){var i=o[1],u=parseInt(o[2]);return"明治"===i||"M"===i?u+=1867:"大正"===i||"T"===i?u+=1911:"昭和"===i||"S"===i?u+=1925:"平成"===i||"H"===i?u+=1988:"令和"!==i&&"R"!==i||(u+=2018),u}return-1},date:function(e,r){r instanceof moment||(r=moment(r));var t=new RegExp("{([YymndjGgHhiswaEeFf])}","g");return e=e.replace(t,function(e,t){var a="";switch(t){case"Y":a="YYYY年";break;case"y":a="YY年";break;case"m":a="MM月";break;case"n":a="M月";break;case"d":a="DD日";break;case"j":a="D日";break;case"G":case"g":a="H時";break;case"H":case"h":a="HH時";break;case"i":a="mm分";break;case"s":a="ss秒";break;case"w":a=n.weekName(r.day());break;case"a":a="am"===r.format("a")?"午前":"午後";break;case"E":a=n.eraYear(r.year());break;case"e":var o=n.era(r.year());a="\\"+o.initial+o.year;break;case"F":a="YYYY年MM月DD日（"+n.weekName(r.day())+"） HH時MM分";break;case"f":a="YYYY年MM月DD日（"+n.weekName(r.day())+"） HH:MM"}return a}),r.format(e)},parseDate:function(e){e=n.singleByte(e).trim();var r=n.arrayValues(n._weekNames).join("|"),t=["（("+r+")）","\\(("+r+"\\))"];for(var a in t){var o=new RegExp(t[a]);e=e.replace(o,"")}var i=n.eraNames().join("|"),u=n.eraInitials().join("|"),s=["(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日 ([\\d]+)時([\\d]+)分([\\d]+)秒","(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日 ([\\d]+)時([\\d]+)分","(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日 ([\\d]+)時","(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日 ([\\d]+):([\\d]+):([\\d]+)","(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日 ([\\d]+):([\\d]+)","(("+i+")[\\d]+年)([\\d]+)月([\\d]+)日","(("+i+")[\\d]+年)([\\d]+)月","(("+i+")[\\d]+)年","(("+u+")[\\d]+).([\\d]+).([\\d]+) ([\\d]+)時([\\d]+)分([\\d]+)","(("+u+")[\\d]+).([\\d]+).([\\d]+) ([\\d]+)時([\\d]+)分","(("+u+")[\\d]+).([\\d]+).([\\d]+) ([\\d]+)時","(("+u+")[\\d]+).([\\d]+).([\\d]+) ([\\d]+):([\\d]+):([\\d]+)","(("+u+")[\\d]+).([\\d]+).([\\d]+) ([\\d]+):([\\d]+)","(("+u+")[\\d]+).([\\d]+).([\\d]+)","(("+u+")[\\d]+).([\\d]+)","(("+u+")[\\d]+)"];for(var d in s){var f=new RegExp(s[d]),m=e.match(f);if(m){var c=n.commonYear(m[1]),l=m.length;if(8===l)return moment({year:c,month:parseInt(m[3])-1,day:m[4],hour:m[5],minute:m[6],second:m[7]});if(7===l)return moment({year:c,month:parseInt(m[3])-1,day:m[4],hour:m[5],minute:m[6],second:0});if(6===l)return moment({year:c,month:parseInt(m[3])-1,day:m[4],hour:m[5],minute:0,second:0});if(5===l)return moment({year:c,month:parseInt(m[3])-1,day:m[4],hour:0,minute:0,second:0});if(4===l)return moment({year:c,month:parseInt(m[3])-1,day:1,hour:0,minute:0,second:0});if(3===l||2===l)return moment({year:c,month:0,day:1,hour:0,minute:0,second:0})}}return null},yen:function(e){var r="";switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"comma"){case"comma":r=n.numberFormat(e)+"円";break;case"noComma":r=e+"円";break;case"symbol":r="￥"+n.numberFormat(e);break;case"symbolNoComma":r="￥"+e;break;case"symbolCommaHyphen":r="￥"+n.numberFormat(e)+"-";break;case"symbolNoCommaHyphen":r="￥"+e+"-"}return r},consumptionTax:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=.08;e.isBefore(moment({year:1989,month:3,day:1}))?t=0:e.isBefore(moment({year:1997,month:3,day:1}))?t=.03:e.isBefore(moment({year:2014,month:3,day:1}))&&(t=.05);var a=Math.floor(r*t);return n?r+a:a},zip:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return 7===(e=n.singleByte(e)).length?e.substr(0,3)+r+e.substr(3,4):""},checkZip:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=new RegExp("^[0-9]{3}"+r+"[0-9]{4}$");return-1!==e.search(n)},singleByte:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["alphabet","numeric","space"];e=e.toString();var n=[],t={alphabet:"Ａ-Ｚａ-ｚ",numeric:"０-９",space:"　"};for(var a in t)if(-1!==r.indexOf(a)){var o=t[a];n.push(o)}if(0===n.length)return e;var i=new RegExp("["+n.join("|")+"]","g");return e.replace(i,function(e){return"　"===e?" ":String.fromCharCode(e.charCodeAt(0)-65248)})},arrayGet:function(e,r,n){return void 0===n&&(n=""),void 0===e[r]?n:e[r]},arrayValues:function(e){var r=[];for(var n in e)r.push(e[n]);return r},getShortPrefecture:function(e){return e.replace(/(県|府|都)$/,"")},numberFormat:function(e){return e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}};e.exports=n}])});