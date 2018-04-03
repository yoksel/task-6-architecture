!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=[]}return r(e,[{key:"subscribe",value:function(e){this.observers.push(e)}},{key:"unsubscribe",value:function(e){this.observers=this.observers.filter(function(t){return t!==e})}},{key:"broadcast",value:function(e){this.observers.forEach(function(t){return t(e)})}}]),e}();t.Observer=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.dispatcher=e,n.response={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),r(t,[{key:"sendRequest",value:function(e){this.response.event="CONTROLLER_SEND_TO_SERVER",this.response.message="➡️ Контроллер получил событие "+e.event+" и передаёт запрос диспетчеру",this.broadcast(this.response),this.dispatcher.dispatch({event:e.event,data:e.content})}},{key:"addItem",value:function(e){this.sendRequest({event:"ADD_ITEM",content:e})}},{key:"getItems",value:function(){this.sendRequest({event:"GET_ITEMS"})}},{key:"deleteItems",value:function(){this.sendRequest({event:"DELETE_ITEMS"})}}]),t}();t.Controller=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.dispatcher=e,n.dispatchToken=e.register(function(e){n.invokeOnDispatch(e)}),n.changed=!1,n.response={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),r(t,[{key:"hasChanged",value:function(){if(this.dispatcher.isDispatching)return this.changed;console.log("Команда должна выпполняться только во время обработки запроса")}},{key:"invokeOnDispatch",value:function(e){this.response.event="SERVER_GETS_DATA",this.response.message="⤵️ Хранилище получило запрос",this.broadcast(this.response),this.onDispatch(e),this.emitChange(e)}},{key:"onDispatch",value:function(e){return console.log("Эта функция должна быть переопределена в расширении класса"),!1}},{key:"emitChange",value:function(e){this.dispatcher.isDispatching?(this.response.event=e.event,this.broadcast(this.response)):console.log("Команда должна выпполняться только во время обработки запроса")}}]),t}();t.Store=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MyStore=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.items=[],n.actions={ADD_ITEM:n.addItem,GET_ITEMS:n.getItems,DELETE_ITEMS:n.deleteItems},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Store),r(t,[{key:"onDispatch",value:function(e){this.actions[e.event].bind(this)(e.data)}},{key:"addItem",value:function(e){this.items.push(e),this.response.message="📥 Текст «"+e+"» добавлен в хранилище",this.changed=!0}},{key:"getItems",value:function(){this.changed?(this.response.data=this.items,this.response.message="📦 Получено содержимое хранилища"):this.response.message="📦 Cодержимое хранилища не менялось",this.changed=!1}},{key:"deleteItems",value:function(){this.items=[],this.response.data=this.items,this.response.message="🗑 Cодержимое хранилища удалено",this.changed=!0}}]),t}();t.MyStore=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isStarted=!1,this.elem=r,t.forEach(function(e){e.subscribe(function(e){n.update(e)})})}return r(e,[{key:"update",value:function(e){this.isStarted||(this.elem&&(this.elem.innerHTML=""),this.isStarted=!0),this.printToPage(e),console.log(e.message)}},{key:"printToPage",value:function(e){if(this.elem){var t='<span class="log__event">'+e.event+"</span>",n='<div class="log__message">'+e.message+" "+t+"</div>";this.elem.innerHTML=""+n+this.elem.innerHTML}}}]),e}();t.Log=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dispatcher=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.lastId=1,e.isDispatching=!1,e.isHandled={},e.isPending={},e.pendingPayload={},e.callbacks={},e.response={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Observer),r(t,[{key:"register",value:function(e){var t="disp-"+this.lastId;return this.callbacks[t]=e,this.lastId++,t}},{key:"unRegister",value:function(e){delete this.callbacks[e]}},{key:"dispatch",value:function(e){var t=void 0;if(this.isDispatching)return console.log("Запрос не может быть выполнен во время обработки другого запроса"),!1;for(t in this.startDispatching(e),this.response.event="DISPATCHER_DISPATCH",this.response.message="➡️ Диспетчер получил запрос и передаёт его хранилищам",this.broadcast(this.response),this.callbacks)this.isPending[t]||(this.pendingPayoad=e,this.invokeCallback(t));this.stopDispatching()}},{key:"invokeCallback",value:function(e){this.isPending[e]=!0,this.callbacks[e](this.pendingPayoad),this.isHandled[e]=!0}},{key:"isDispatching",value:function(){return this.isDispatching}},{key:"startDispatching",value:function(e){var t=void 0;for(t in this.callbacks)this.isPending[t]=!1,this.isHandled[t]=!1;this.pendingPayload=e,this.isDispatching=!0}},{key:"stopDispatching",value:function(){delete this.pendingPayload,this.isDispatching=!1}}]),t}();t.Dispatcher=o},function(e,t,n){"use strict";n(11);var r=n(5),i=n(4),o=n(3),s=n(1),a=new r.Dispatcher,c=new o.MyStore(a),u=new s.Controller(a,c),l=document.querySelector(".stream__log"),f=document.querySelector(".stream__btn-reverse"),p=!1,h=(new i.Log([a,u,c],l),document.querySelector(".view-stub__input")),d=document.querySelector(".view-stub__btn--apply"),v=document.querySelector(".view-stub__btn--all"),b=document.querySelector(".view-stub__btn--delete"),y=document.querySelector(".view-stub__response"),g=document.querySelector(".stream__result"),_=document.querySelector(".stream__item--result"),m=!1;function O(e){e.length>0?g.innerHTML=e.join("<br>"):g.innerHTML="<i>(Пусто)</i>"}d.disabled=!h.value,h.addEventListener("input",function(){d.disabled=!h.value}),d.addEventListener("click",function(){var e=h.value;u.addItem(e),h.value="",d.disabled=!h.value}),v.addEventListener("click",function(){m?(_.classList.remove("stream__item--result-expanded"),v.innerHTML=v.dataset.textShow):(u.getItems(),v.innerHTML=v.dataset.textHide),m=!m}),b.addEventListener("click",function(){u.deleteItems()}),f.addEventListener("click",function(){l.classList.toggle("log--reverse"),f.innerHTML=p?f.dataset.textNew:f.dataset.textOld,p=!p}),c.subscribe(function(e){var t;y.innerHTML=e.message,"GET_ITEMS"===e.event?(t=e.data,_.classList.add("stream__item--result-expanded"),O(t)):m&&O(e.data)})},,,,,function(e,t){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL215Rmx1eC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlGbHV4L1N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9NeVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9teUZsdXgvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9teUZsdXgvRGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsInZhbHVlIiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJPYnNlcnZlciIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJvYnNlcnZlcnMiLCJmbiIsInB1c2giLCJmaWx0ZXIiLCJzdWJzY3JpYmVyIiwiZGF0YSIsImZvckVhY2giLCJvYnNlcnZlciIsIl9PYnNlcnZlcjIiLCJDb250cm9sbGVyIiwiZGlzcGF0Y2hlciIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJnZXRQcm90b3R5cGVPZiIsInJlc3BvbnNlIiwiZXZlbnQiLCJtZXNzYWdlIiwiYnJvYWRjYXN0IiwiZGlzcGF0Y2giLCJjb250ZW50Iiwic2VuZFJlcXVlc3QiLCJTdG9yZSIsImRpc3BhdGNoVG9rZW4iLCJyZWdpc3RlciIsInBheWxvYWQiLCJpbnZva2VPbkRpc3BhdGNoIiwiY2hhbmdlZCIsImlzRGlzcGF0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwib25EaXNwYXRjaCIsImVtaXRDaGFuZ2UiLCJfU3RvcmUyIiwiTXlTdG9yZSIsIml0ZW1zIiwiYWN0aW9ucyIsIkFERF9JVEVNIiwiYWRkSXRlbSIsIkdFVF9JVEVNUyIsImdldEl0ZW1zIiwiREVMRVRFX0lURU1TIiwiZGVsZXRlSXRlbXMiLCJiaW5kIiwiZnVuYyIsIml0ZW0iLCJMb2ciLCJlbWl0dGVycyIsImVsZW0iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpc1N0YXJ0ZWQiLCJlbWl0dGVyIiwic3Vic2NyaWJlIiwidXBkYXRlIiwiaW5uZXJIVE1MIiwicHJpbnRUb1BhZ2UiLCJuZXdNZXNzYWdlIiwiRGlzcGF0Y2hlciIsImxhc3RJZCIsImlzSGFuZGxlZCIsImlzUGVuZGluZyIsInBlbmRpbmdQYXlsb2FkIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2siLCJpZCIsInN0YXJ0RGlzcGF0Y2hpbmciLCJwZW5kaW5nUGF5b2FkIiwiaW52b2tlQ2FsbGJhY2siLCJzdG9wRGlzcGF0Y2hpbmciLCJfRGlzcGF0Y2hlciIsIl9Mb2ciLCJfTXlTdG9yZSIsIl9Db250cm9sbGVyIiwic3RvcmUiLCJjb250cm9sbGVyIiwibG9nc0VsZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dSZXZlcnNlQnRuIiwiaXNMb2dzUmV2ZXJzZWQiLCJpbnB1dCIsImFwcGx5QnRuIiwiYWxsQnRuIiwiZGVsZXRlQnRuIiwicmVzcG9uc2VFbGVtIiwicmVzdWx0RWxlbSIsInJlc3VsdEVsZW1Db250YWluZXIiLCJpc1Jlc3VsdHNTaG93biIsInVwZGF0ZUl0ZW1zIiwiam9pbiIsImRpc2FibGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRleHQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJkYXRhc2V0IiwidGV4dFNob3ciLCJ0ZXh0SGlkZSIsInRvZ2dsZSIsInRleHRO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QUFzQlYsU0FBU0MsY0FBYyx5QkFDL0NVLEdBQWlCLEVBb0VyQixTQUFTQyxFQUFZckYsR0FDYkEsRUFBSzZDLE9BQVMsRUFDZHFDLEVBQVcvQixVQUFZbkQsRUFBS3NGLEtBQUssUUFFakNKLEVBQVcvQixVQUFZLGlCQXRFL0IyQixFQUFTUyxVQUFZVixFQUFNOUYsTUFJM0I4RixFQUFNVyxpQkFBaUIsUUFBUyxXQUM1QlYsRUFBU1MsVUFBWVYsRUFBTTlGLFFBRy9CK0YsRUFBU1UsaUJBQWlCLFFBQVMsV0FDL0IsSUFBTUMsRUFBT1osRUFBTTlGLE1BQ25Cd0YsRUFBV3RDLFFBQVF3RCxHQUNuQlosRUFBTTlGLE1BQVEsR0FDZCtGLEVBQVNTLFVBQVlWLEVBQU05RixRQUcvQmdHLEVBQU9TLGlCQUFpQixRQUFTLFdBRXpCSixHQTRESkQsRUFBb0JPLFVBQVVDLE9BQU8saUNBMURqQ1osRUFBTzVCLFVBQVk0QixFQUFPYSxRQUFRQyxXQUVsQ3RCLEVBQVdwQyxXQUNYNEMsRUFBTzVCLFVBQVk0QixFQUFPYSxRQUFRRSxVQUd0Q1YsR0FBa0JBLElBR3RCSixFQUFVUSxpQkFBaUIsUUFBUyxXQUNoQ2pCLEVBQVdsQyxnQkFHZnNDLEVBQWNhLGlCQUFpQixRQUFTLFdBQ3BDaEIsRUFBU2tCLFVBQVVLLE9BQU8sZ0JBR3RCcEIsRUFBY3hCLFVBRGR5QixFQUMwQkQsRUFBY2lCLFFBQVFJLFFBRXRCckIsRUFBY2lCLFFBQVFLLFFBR3BEckIsR0FBa0JBLElBS3RCTixFQUFNckIsVUFBVSxTQUFDdkMsR0FZakIsSUFBbUJWLEVBWGZpRixFQUFhOUIsVUFBWXpDLEVBQVNFLFFBRVgsY0FBbkJGLEVBQVNDLE9BU0VYLEVBUkRVLEVBQVNWLEtBU3ZCbUYsRUFBb0JPLFVBQVVRLElBQUksaUNBRWxDYixFQUFZckYsSUFWRG9GLEdBQ1BDLEVBQVkzRSxFQUFTViIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsImNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZm4pIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUoZm4pIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5maWx0ZXIoc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyICE9PSBmbik7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlcihkYXRhKSk7XG4gICAgfVxufVxuXG5leHBvcnQge09ic2VydmVyfTtcbiIsImltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJy4vbXlGbHV4L09ic2VydmVyJztcblxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIE9ic2VydmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0ge307XG4gICAgfVxuXG4gICAgc2VuZFJlcXVlc3QoZGF0YSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlLmV2ZW50ID0gJ0NPTlRST0xMRVJfU0VORF9UT19TRVJWRVInO1xuICAgICAgICB0aGlzLnJlc3BvbnNlLm1lc3NhZ2UgPSBg4p6h77iPINCa0L7QvdGC0YDQvtC70LvQtdGAINC/0L7Qu9GD0YfQuNC7INGB0L7QsdGL0YLQuNC1ICR7ZGF0YS5ldmVudH0g0Lgg0L/QtdGA0LXQtNCw0ZHRgiDQt9Cw0L/RgNC+0YEg0LTQuNGB0L/QtdGC0YfQtdGA0YNgO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdCh0aGlzLnJlc3BvbnNlKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgICAgICAgZXZlbnQ6IGRhdGEuZXZlbnQsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmNvbnRlbnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgZXZlbnQ6ICdBRERfSVRFTScsXG4gICAgICAgICAgICBjb250ZW50OiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0KHtcbiAgICAgICAgICAgIGV2ZW50OiAnR0VUX0lURU1TJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVJdGVtcygpIHtcbiAgICAgICAgdGhpcy5zZW5kUmVxdWVzdCh7XG4gICAgICAgICAgICBldmVudDogJ0RFTEVURV9JVEVNUydcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQge0NvbnRyb2xsZXJ9O1xuIiwiaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAnLi9PYnNlcnZlcic7XG5cbmNsYXNzIFN0b3JlIGV4dGVuZHMgT2JzZXJ2ZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoVG9rZW4gPSBkaXNwYXRjaGVyLnJlZ2lzdGVyKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSB7fTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzcGF0Y2hlci5pc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0JrQvtC80LDQvdC00LAg0LTQvtC70LbQvdCwINCy0YvQv9C/0L7Qu9C90Y/RgtGM0YHRjyDRgtC+0LvRjNC60L4g0LLQviDQstGA0LXQvNGPINC+0LHRgNCw0LHQvtGC0LrQuCDQt9Cw0L/RgNC+0YHQsCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlZDtcbiAgICB9XG5cbiAgICBpbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZS5ldmVudCA9ICdTRVJWRVJfR0VUU19EQVRBJyxcbiAgICAgICAgdGhpcy5yZXNwb25zZS5tZXNzYWdlID0gJ+Kkte+4jyDQpdGA0LDQvdC40LvQuNGJ0LUg0L/QvtC70YPRh9C40LvQviDQt9Cw0L/RgNC+0YEnO1xuXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0KHRoaXMucmVzcG9uc2UpO1xuXG4gICAgICAgIHRoaXMub25EaXNwYXRjaChwYXlsb2FkKTtcblxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UocGF5bG9hZCk7XG4gICAgfVxuXG4gICAgb25EaXNwYXRjaChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfQrdGC0LAg0YTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC/0LXRgNC10L7Qv9GA0LXQtNC10LvQtdC90LAg0LIg0YDQsNGB0YjQuNGA0LXQvdC40Lgg0LrQu9Cw0YHRgdCwJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBlbWl0Q2hhbmdlKHBheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc3BhdGNoZXIuaXNEaXNwYXRjaGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ca0L7QvNCw0L3QtNCwINC00L7Qu9C20L3QsCDQstGL0L/Qv9C+0LvQvdGP0YLRjNGB0Y8g0YLQvtC70YzQutC+INCy0L4g0LLRgNC10LzRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0LfQsNC/0YDQvtGB0LAnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzcG9uc2UuZXZlbnQgPSBwYXlsb2FkLmV2ZW50O1xuICAgICAgICB0aGlzLmJyb2FkY2FzdCh0aGlzLnJlc3BvbnNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7U3RvcmV9O1xuIiwiaW1wb3J0IHtTdG9yZX0gZnJvbSAnLi9teUZsdXgvU3RvcmUnO1xuXG5jbGFzcyBNeVN0b3JlIGV4dGVuZHMgU3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IoZGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcihkaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSB7XG4gICAgICAgICAgICAnQUREX0lURU0nOiB0aGlzLmFkZEl0ZW0sXG4gICAgICAgICAgICAnR0VUX0lURU1TJzogdGhpcy5nZXRJdGVtcyxcbiAgICAgICAgICAgICdERUxFVEVfSVRFTVMnOiB0aGlzLmRlbGV0ZUl0ZW1zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25EaXNwYXRjaChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmFjdGlvbnNbcGF5bG9hZC5ldmVudF0uYmluZCh0aGlzKTtcbiAgICAgICAgZnVuYyhwYXlsb2FkLmRhdGEpO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMucmVzcG9uc2UubWVzc2FnZSA9IGDwn5OlINCi0LXQutGB0YIgwqske2l0ZW19wrsg0LTQvtCx0LDQstC70LXQvSDQsiDRhdGA0LDQvdC40LvQuNGJ0LVgO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkKXtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2UuZGF0YSA9IHRoaXMuaXRlbXM7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlLm1lc3NhZ2UgPSAn8J+TpiDQn9C+0LvRg9GH0LXQvdC+INGB0L7QtNC10YDQttC40LzQvtC1INGF0YDQsNC90LjQu9C40YnQsCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlLm1lc3NhZ2UgPSAn8J+TpiBD0L7QtNC10YDQttC40LzQvtC1INGF0YDQsNC90LjQu9C40YnQsCDQvdC1INC80LXQvdGP0LvQvtGB0YwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNwb25zZS5kYXRhID0gdGhpcy5pdGVtcztcbiAgICAgICAgdGhpcy5yZXNwb25zZS5tZXNzYWdlID0gJ/Cfl5EgQ9C+0LTQtdGA0LbQuNC80L7QtSDRhdGA0LDQvdC40LvQuNGJ0LAg0YPQtNCw0LvQtdC90L4nO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuXG5leHBvcnQge015U3RvcmV9O1xuIiwiY2xhc3MgTG9nIHtcblxuICAgIGNvbnN0cnVjdG9yKGVtaXR0ZXJzLCBlbGVtID0gbnVsbCkge1xuICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW0gPSBlbGVtO1xuXG4gICAgICAgIGVtaXR0ZXJzLmZvckVhY2goZW1pdHRlciA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByaW50VG9QYWdlKHJlc3BvbnNlKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcmludFRvUGFnZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGA8c3BhbiBjbGFzcz1cImxvZ19fZXZlbnRcIj4ke3Jlc3BvbnNlLmV2ZW50fTwvc3Bhbj5gO1xuICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZSA9IGA8ZGl2IGNsYXNzPVwibG9nX19tZXNzYWdlXCI+JHtyZXNwb25zZS5tZXNzYWdlfSAke2V2ZW50fTwvZGl2PmA7XG4gICAgICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gYCR7bmV3TWVzc2FnZX0ke3RoaXMuZWxlbS5pbm5lckhUTUx9YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtMb2d9O1xuIiwiaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAnLi9PYnNlcnZlcic7XG5cbmNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBPYnNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmxhc3RJZCA9IDE7XG4gICAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSGFuZGxlZCA9IHt9O1xuICAgICAgICB0aGlzLmlzUGVuZGluZyA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdQYXlsb2FkID0ge307XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSB7fTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBpZCA9IGBkaXNwLSR7dGhpcy5sYXN0SWR9YDtcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbaWRdID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1blJlZ2lzdGVyKGlkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tpZF07XG4gICAgfVxuXG4gICAgZGlzcGF0Y2gocGF5bG9hZCkge1xuICAgICAgICBsZXQgaWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwYXRjaGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CX0LDQv9GA0L7RgSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LLRi9C/0L7Qu9C90LXQvSDQstC+INCy0YDQtdC80Y8g0L7QsdGA0LDQsdC+0YLQutC4INC00YDRg9Cz0L7Qs9C+INC30LDQv9GA0L7RgdCwJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0RGlzcGF0Y2hpbmcocGF5bG9hZCk7XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZS5ldmVudCA9ICdESVNQQVRDSEVSX0RJU1BBVENIJztcbiAgICAgICAgdGhpcy5yZXNwb25zZS5tZXNzYWdlID0gJ+Keoe+4jyDQlNC40YHQv9C10YLRh9C10YAg0L/QvtC70YPRh9C40Lsg0LfQsNC/0YDQvtGBINC4INC/0LXRgNC10LTQsNGR0YIg0LXQs9C+INGF0YDQsNC90LjQu9C40YnQsNC8JztcbiAgICAgICAgdGhpcy5icm9hZGNhc3QodGhpcy5yZXNwb25zZSk7XG5cbiAgICAgICAgZm9yIChpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQZW5kaW5nW2lkXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdQYXlvYWQgPSBwYXlsb2FkO1xuICAgICAgICAgICAgdGhpcy5pbnZva2VDYWxsYmFjayhpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3BEaXNwYXRjaGluZygpO1xuICAgIH1cblxuICAgIGludm9rZUNhbGxiYWNrKGlkKSB7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nW2lkXSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW2lkXSh0aGlzLnBlbmRpbmdQYXlvYWQpO1xuICAgICAgICB0aGlzLmlzSGFuZGxlZFtpZF0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlzRGlzcGF0Y2hpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzcGF0Y2hpbmc7XG4gICAgfVxuXG4gICAgc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkKSB7XG4gICAgICAgIGxldCBpZDtcbiAgICAgICAgZm9yIChpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xuICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmdbaWRdID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzSGFuZGxlZFtpZF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmdQYXlsb2FkID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5pc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdG9wRGlzcGF0Y2hpbmcoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdQYXlsb2FkO1xuICAgICAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7RGlzcGF0Y2hlcn07XG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7RGlzcGF0Y2hlcn0gZnJvbSAnLi9teUZsdXgvRGlzcGF0Y2hlcic7XG5pbXBvcnQge0xvZ30gZnJvbSAnLi9teUZsdXgvTG9nJztcblxuaW1wb3J0IHtNeVN0b3JlfSBmcm9tICcuL015U3RvcmUnO1xuaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICcuL0NvbnRyb2xsZXInO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIoKTtcbmNvbnN0IHN0b3JlID0gbmV3IE15U3RvcmUoZGlzcGF0Y2hlcik7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoZGlzcGF0Y2hlciwgc3RvcmUpO1xuXG5jb25zdCBsb2dzRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlYW1fX2xvZycpO1xuY29uc3QgbG9nUmV2ZXJzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlYW1fX2J0bi1yZXZlcnNlJyk7XG5sZXQgaXNMb2dzUmV2ZXJzZWQgPSBmYWxzZTtcbmNvbnN0IGxvZyA9IG5ldyBMb2coW2Rpc3BhdGNoZXIsIGNvbnRyb2xsZXIsIHN0b3JlXSwgbG9nc0VsZW0pO1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2lucHV0Jyk7XG5jb25zdCBhcHBseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2J0bi0tYXBwbHknKTtcbmNvbnN0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2J0bi0tYWxsJyk7XG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19idG4tLWRlbGV0ZScpO1xuXG5jb25zdCByZXNwb25zZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1zdHViX19yZXNwb25zZScpO1xuY29uc3QgcmVzdWx0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlYW1fX3Jlc3VsdCcpO1xuY29uc3QgcmVzdWx0RWxlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlYW1fX2l0ZW0tLXJlc3VsdCcpO1xubGV0IGlzUmVzdWx0c1Nob3duID0gZmFsc2U7XG5cbmFwcGx5QnRuLmRpc2FibGVkID0gIWlucHV0LnZhbHVlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgYXBwbHlCdG4uZGlzYWJsZWQgPSAhaW5wdXQudmFsdWU7XG59KTtcblxuYXBwbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnRyb2xsZXIuYWRkSXRlbSh0ZXh0KTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIGFwcGx5QnRuLmRpc2FibGVkID0gIWlucHV0LnZhbHVlO1xufSk7XG5cbmFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmIChpc1Jlc3VsdHNTaG93bikge1xuICAgICAgICBoaWRlSXRlbXMoKTtcbiAgICAgICAgYWxsQnRuLmlubmVySFRNTCA9IGFsbEJ0bi5kYXRhc2V0LnRleHRTaG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRyb2xsZXIuZ2V0SXRlbXMoKTtcbiAgICAgICAgYWxsQnRuLmlubmVySFRNTCA9IGFsbEJ0bi5kYXRhc2V0LnRleHRIaWRlO1xuICAgIH1cblxuICAgIGlzUmVzdWx0c1Nob3duID0gIWlzUmVzdWx0c1Nob3duO1xufSk7XG5cbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250cm9sbGVyLmRlbGV0ZUl0ZW1zKCk7XG59KTtcblxubG9nUmV2ZXJzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2dzRWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdsb2ctLXJldmVyc2UnKTtcblxuICAgIGlmIChpc0xvZ3NSZXZlcnNlZCkge1xuICAgICAgICBsb2dSZXZlcnNlQnRuLmlubmVySFRNTCA9IGxvZ1JldmVyc2VCdG4uZGF0YXNldC50ZXh0TmV3O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ1JldmVyc2VCdG4uaW5uZXJIVE1MID0gbG9nUmV2ZXJzZUJ0bi5kYXRhc2V0LnRleHRPbGQ7XG4gICAgfVxuXG4gICAgaXNMb2dzUmV2ZXJzZWQgPSAhaXNMb2dzUmV2ZXJzZWQ7XG59KTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnN0b3JlLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZUVsZW0uaW5uZXJIVE1MID0gcmVzcG9uc2UubWVzc2FnZTtcblxuICAgIGlmIChyZXNwb25zZS5ldmVudCA9PT0gJ0dFVF9JVEVNUycpIHtcbiAgICAgICAgc2hvd0l0ZW1zKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoaXNSZXN1bHRzU2hvd24pIHtcbiAgICAgICAgdXBkYXRlSXRlbXMocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzaG93SXRlbXMoZGF0YSkge1xuICAgIHJlc3VsdEVsZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RyZWFtX19pdGVtLS1yZXN1bHQtZXhwYW5kZWQnKTtcblxuICAgIHVwZGF0ZUl0ZW1zKGRhdGEpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdXBkYXRlSXRlbXMoZGF0YSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0RWxlbS5pbm5lckhUTUwgPSBkYXRhLmpvaW4oJzxicj4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRFbGVtLmlubmVySFRNTCA9ICc8aT4o0J/Rg9GB0YLQvik8L2k+JztcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBoaWRlSXRlbXMoKSB7XG4gICAgcmVzdWx0RWxlbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdHJlYW1fX2l0ZW0tLXJlc3VsdC1leHBhbmRlZCcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==