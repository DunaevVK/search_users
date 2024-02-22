(function(){"use strict";var e={2622:function(e,t,A){var s=A(6848),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("main",{staticClass:"container"},[t("section",{staticClass:"sidebar"},[t("h1",{staticClass:"sidebar-title"},[e._v("Поиск сотрудников")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.querySearch,expression:"querySearch"}],staticClass:"sidebar-search",attrs:{type:"search",placeholder:"Введите Id или имя"},domProps:{value:e.querySearch},on:{change:e.searchHandler,input:function(t){t.target.composing||(e.querySearch=t.target.value)}}}),t("h2",{staticClass:"result-title"},[e._v("Результаты")]),e.$store.getters.isNewQuery?t("p",{staticClass:"sidepar-search-text"},[e._v("начните поиск")]):e._e(),t("Loader"),e.$store.getters.isNothingValue?t("p",{staticClass:"sidepar-search-text"},[e._v("ничего не найдено")]):e._e(),e._l(e.allUsers,(function(A){return t("PreviewCard",{key:A.id,attrs:{user:A},on:{openCard:e.openCard}})}))],2),t("section",{staticClass:"main-content"},[t("MainCard",{attrs:{user:e.currentUser,"main-card-visible":e.mainCardVisible}}),e.mainCardVisible?e._e():t("h3",{staticClass:"main-content-text"},[e._v("Выберите сотрудника, чтобы посмотреть его профиль")])],1)])],1)},i=[],r=A(3518),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-card"},[t("img",{attrs:{src:A(5214),alt:"Preview Img"}}),t("div",{staticClass:"card-info",on:{click:e.openCard}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.user.username))]),t("div",{staticClass:"card-mail"},[e._v(e._s(e.user.email))])])])},n=[],l={props:{user:{type:Object,required:!0}},mounted(){const e=document.querySelectorAll(".card-info");e.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".active")?.classList.remove("active"),e.classList.add("active")}))}))},methods:{openCard(){this.$emit("openCard",this.user)}}},c=l,u=A(1656),C=(0,u.A)(c,o,n,!1,null,"01ddbc73",null),m=C.exports,d=function(){var e=this,t=e._self._c;return e.mainCardVisible?t("div",{staticClass:"main-content-card"},[t("img",{attrs:{src:A(439),alt:"user card img"}}),t("div",{staticClass:"main-card-descr"},[t("h2",{staticClass:"main-content-title"},[e._v(e._s(e.user.name))]),t("p",{staticClass:"main-content-mail"},[t("span",[e._v("email:")]),e._v(" "+e._s(e.user.email))]),t("p",{staticClass:"main-content-phone"},[t("span",[e._v("phone:")]),e._v(" "+e._s(e.user.phone))]),t("h3",{staticClass:"main-content-descr"},[e._v("О себе:")]),t("p",{staticClass:"main-content-descr-text"},[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])]):e._e()},h=[],g={props:{user:{type:Object,required:!0},mainCardVisible:{type:Boolean,default:!1}}},v=g,J=(0,u.A)(v,d,h,!1,null,null,null),p=J.exports,U=function(){var e=this;e._self._c;return e._m(0)},f=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"header container"},[t("div",{staticClass:"header-logo"},[e._v("Жилфонд")]),t("div",{staticClass:"header-user"},[e._v("Пользователь")])])}],Q={},E=Q,b=(0,u.A)(E,U,f,!1,null,null,null),k=b.exports,S=function(){var e=this,t=e._self._c;return e.$store.getters.getIsLoading?t("span",{staticClass:"loader"}):e._e()},R=[],y={},I=y,w=(0,u.A)(I,S,R,!1,null,null,null),F=w.exports,L={name:"App",components:{PreviewCard:m,MainCard:p,Header:k,Loader:F},data(){return{querySearch:"",currentUser:{},mainCardVisible:!1}},mounted(){this.allUsers,this.$store.commit("showIsNew"),this.$store.commit("hideIsNothing")},methods:{...(0,r.i0)(["getUsersId","getMoreUsersId"]),searchHandler(){return 0==this.querySearch.length&&(this.$store.commit("hideIsNothing"),this.$store.commit("showIsNew")),this.getMoreUsersId(this.querySearch.split(",")),this.mainCardVisible=!1,this.allUsers},openCard(e){this.currentUser=e,this.mainCardVisible=!0,this.isActive=!0}},computed:{...(0,r.L8)(["allUsers"])}},K=L,x=(0,u.A)(K,a,i,!1,null,"1aa17e76",null),P=x.exports,O={state:{users:[],isNew:!0,isNothing:!1,isLoading:!1},getters:{allUsers(e){return e.users},isNewQuery(e){return e.isNew},isNothingValue(e){return e.isNothing},getIsLoading(e){return e.isLoading}},mutations:{updateUsers(e,t){e.users=t},showIsNew(e){e.isNew=!0},hideIsNew(e){e.isNew=!1},showIsNothing(e){e.isNothing=!0},hideIsNothing(e){e.isNothing=!1},showIsLoading(e){e.isLoading=!0},hideIsLoading(e){e.isLoading=!1}},actions:{async getMoreUsersId(e,t){let A=null,s="",a="";e.commit("showIsLoading"),t.map(((e,A)=>{if(String(e).match(/\d/))return A+1==t.length?s+=`id=${e.trim()}`:s+=`id=${e.trim()}&`,s;if(e.trim(),e){e[0].toUpperCase(),e.slice(1)}return A+1==t.length?a+=`username=${newElement}`:a+=`username=${newElement}&`,a}));try{if(A=s.length>0?await fetch("https://jsonplaceholder.typicode.com/users?"+s):await fetch("https://jsonplaceholder.typicode.com/users?"+a),200!=A.status)throw new Error(A.status)}catch(r){let e=new Error("Ого, ошибка! Неверный запрос или ошибка сервера. Статус ответа с сервера  "+r);alert(e)}const i=await A.json();0==i.length&&(e.commit("showIsNothing"),e.commit("hideIsNew")),i.length>0&&(e.commit("hideIsNew"),e.commit("hideIsNothing")),e.commit("hideIsLoading"),e.commit("updateUsers",i)}}};s.Ay.use(r.Ay);var Y=new r.Ay.Store({modules:{user:O}});s.Ay.config.productionTip=!1,new s.Ay({store:Y,render:e=>e(P)}).$mount("#app")},439:function(e){e.exports="data:image/png;base64,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"},5214:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIqSURBVHgB7ZlLSxxREIWPJjEhL5JFTAgkmJBAIIKK4FtXIu79mW5du3cjgjsRHFy4cCMoCoqvKrobX3Okha4aB84HB5qZ6enpr2/V7dsDiAe0Wq2rXoi2SAxBYggSQ5AYgsQQJIYgMQSJIUgMQWIIEkOQGILEECSGIDEEiSFIDEFiCBJDkBiCxBAkhvASzePf+Qa5nJVpjAgxk5Yflgvk8MJyaFlBg0SI8fLcsmwghwHLPzRMhBjnynJ+6xh9lhPEEDIyo8RUeEnNoRhF25Y1yyW6gMhZqccyiqIH+PZfy0d0CdnTdV/Nz/WU6RiRYrzPrOOmdHYs+zX289+0aFmyfECHiO4xu5ZlFOVUt/mOW76U2z71r+KmkaeRUUqnqC/lF4peVPHNMogO8JyWBN6Yx9q87mK+I5lsMa9QnOT7e697o52yvG6zT2/53lskki1mxDJvWcDdEx229D+yn392ColkivGRUvUPHzFD5fYA6vUR3/8/koielSreWWZRzE4VLskXf36yde9ZXOaBZQ/BZIwYP4ZLadc//M74KY8o/EJOIOGCZojxMulHc3gZziCYaDFfEXMf8tPyB4FEivESmUbcsPcy/IwgImvV1zmbiCXsEWqUmN9otq88hq/YG39YFSHGV9SfkMsxGiZCzFGZrkb/KxEkhiAxBIkhSAxBYggSQ5AYgsQQJIYgMQSJIUgMQWIIEkOQGILEECSGIDEEiSFIDEFiCBJDuAa7yS53wbYW1gAAAABJRU5ErkJggg=="}},t={};function A(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,A),i.exports}A.m=e,function(){var e=[];A.O=function(t,s,a,i){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],a=e[c][1],i=e[c][2];for(var o=!0,n=0;n<s.length;n++)(!1&i||r>=i)&&Object.keys(A.O).every((function(e){return A.O[e](s[n])}))?s.splice(n--,1):(o=!1,i<r&&(r=i));if(o){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,a,i]}}(),function(){A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,{a:t}),t}}(),function(){A.d=function(e,t){for(var s in t)A.o(t,s)&&!A.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};A.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,r=s[0],o=s[1],n=s[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in o)A.o(o,a)&&(A.m[a]=o[a]);if(n)var c=n(A)}for(t&&t(s);l<r.length;l++)i=r[l],A.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return A.O(c)},s=self["webpackChunkvue_search_users"]=self["webpackChunkvue_search_users"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=A.O(void 0,[504],(function(){return A(2622)}));s=A.O(s)})();
//# sourceMappingURL=app.133c1eaf.js.map