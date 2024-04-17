(()=>{"use strict";var e=document.querySelector(".places__list"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__image_change-button"),o=document.querySelectorAll(".popup"),c=document.querySelector(".popup_type_new-card"),a=document.querySelector(".popup_type_edit"),u=document.querySelector(".popup_type_image"),i=document.querySelector(".popup_type_userpic"),l=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),d=document.querySelector(".profile__image"),p=u.querySelector(".popup__image"),f=u.querySelector(".popup__caption"),_=document.forms["new-place"],m=document.forms["edit-profile"],y=document.forms.userpic,h=_.querySelector(".popup__input_type_card-name"),v=_.querySelector(".popup__input_type_url"),S=m.querySelector(".popup__input_type_name"),b=m.querySelector(".popup__input_type_description"),g=y.querySelector(".popup__input_type_userpic-url"),q={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"0e96e934-c909-430b-b083-4ad1c5ba4cb9","Content-Type":"application/json"}},C=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},E=function(e){console.log(e)},L=function(){return fetch("".concat(q.baseUrl,"/users/me"),{headers:q.headers}).then(C).catch(E)},k=function(e,t,r,n,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".like-count");return a.src=e.link,u.textContent=e.name,a.alt="На фото ".concat(e.name),s.textContent=e.likes.length,t._id===e.owner._id?i.addEventListener("click",(function(){return o(e._id,c)})):i.remove(),e.likes.some((function(e){return e._id===t._id}))&&l.classList.add("card__like-button_is-active"),l.addEventListener("click",(function(t){return r(t.target,e,s)})),a.addEventListener("click",(function(){return n(a,u)})),c},x=function(e,t){var r;(r=e,fetch("".concat(q.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:q.headers}).then(C).catch(E)).then((function(){A(t)}))},A=function(e){e.remove()},w=likeButton.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(q.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:q.headers}).then(C).catch(E)}:function(e){return fetch("".concat(q.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:q.headers}).then(C).catch(E)},U=function(e,t,r){w(t._id).then((function(t){e.classList.remove("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){return console.log(e)}))};function B(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",j)}function T(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",j)}var j=function(e){"Escape"===e.key&&T(e.currentTarget.querySelector(".popup_is-opened"))},O=function(e,t,r){var n=t.querySelector(".".concat(r.name,"-error"));r.classList.remove(e.inputErrorClass),n.classList.remove(e.errorClass),n.textContent=""},P=function(e,t){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);!function(e,t){return t.some((function(e){return!e.validity.valid}))}(0,r)?(n.disabled=!1,n.classList.remove(e.inactiveButtonClass)):(n.disabled=!0,n.classList.add(e.inactiveButtonClass))};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Promise.all([fetch("".concat(q.baseUrl,"/cards"),{headers:q.headers}).then(C).catch(E),L()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];o.forEach((function(e){N(e,c)})),M()}));var M=function(){L().then((function(e){var t=document.querySelector(".profile__title"),r=document.querySelector(".profile__description"),n=document.querySelector(".profile__image");return t.textContent=e.name,r.textContent=e.about,n.style="background-image: url('".concat(e.avatar,"')"),e}))},N=function(t,r){e.append(k(t,r,U,I,x))},I=function(e,t){B(u),p.src=e.src,p.alt=e.alt,f.textContent=t.textContent},J=function(e,t){t.querySelector(".button").textContent=e?"Сохранение...":"Сохранить"};t.addEventListener("click",(function(){B(c)})),n.addEventListener("click",(function(){B(i)})),r.addEventListener("click",(function(){B(a),function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){O(t,e,r)})),e.querySelector(t.submitButtonSelector).classList.add(t.inactiveButtonClass)}(m,H),S.value=l.textContent,b.value=s.textContent})),y.addEventListener("submit",(function(e){var t;e.preventDefault(),J(!0,e.target),(t=g.value,fetch("".concat(q.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:q.headers,body:JSON.stringify({avatar:"".concat(t)})}).then(C).catch(E)).then((function(){e.target.reset()})).finally((function(){J(!1,e.target)})),d.style="background-image: url(".concat(g.value,")"),T(i),e.target.reset(),P(H,e.target)})),m.addEventListener("submit",(function(e){var t,r;e.preventDefault(),J(!0,e.target),l.textContent=S.value,s.textContent=b.value,(t=l.textContent,r=s.textContent,fetch("".concat(q.baseUrl,"/users/me"),{method:"PATCH",headers:q.headers,body:JSON.stringify({name:t,about:r})}).then(C).catch(E)).finally((function(){J(!1,e.target)})),T(a),e.target.reset(),P(H,e.target)})),_.addEventListener("submit",(function(t){var r,n;t.preventDefault(),J(!0,t.target),(r=h.value,n=v.value,fetch("".concat(q.baseUrl,"/cards"),{method:"POST",headers:q.headers,body:JSON.stringify({name:"".concat(r),link:"".concat(n)})}).then(C).catch(E)).then((function(t){e.prepend(k(t,t.owner,U,I,x))})).finally((function(){J(!1,t.target)})),T(c),t.target.reset(),P(H,t.target)})),o.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&T(e)}))}));var H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(t.querySelectorAll(e.inputSelector));t.querySelector(e.submitButtonSelector),P(e,t),r.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,r){r.validity.patternMismatch?r.setCustomValidity(r.dataset.errorMessage):r.setCustomValidity(""),r.validity.valid?O(e,t,r):function(e,t,r,n){var o=t.querySelector(".".concat(r.name,"-error"));r.classList.add(e.inputErrorClass),o.textContent=n,o.classList.add(e.errorClass)}(e,t,r,r.validationMessage)}(e,t,r),P(e,t)}))}))}(e,t)}))}(H)})();