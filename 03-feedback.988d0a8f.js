function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=v();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function T(e){return f=void 0,g&&r?y(e):(r=o=void 0,a)}function w(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:T(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form")};var h;let j=null!==(h=localStorage.getItem("feedback-form-state"))&&void 0!==h?h:{};y.form.addEventListener("input",e(t)((function(){let e=new FormData(y.form);e.forEach(((t,n)=>{e[n]=t,localStorage.setItem("feedback-form-state",JSON.stringify(e)),j=e}))}),500)),y.form.addEventListener("submit",(function(e){const{email:t,message:n}=y.form.elements;if(""===t.value||""===n.value)return void alert("Заповніть всі поля");{e.preventDefault();const t={email:e.currentTarget.email.value,message:e.currentTarget.message.value};console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")}})),addEventListener("DOMContentLoaded",(function(){if(!1!==j.toString)try{savedData=JSON.parse(j);const{elements:e}=y.form;Object.keys(savedData).forEach((t=>e[t].value=savedData[t]))}catch(e){}}));
//# sourceMappingURL=03-feedback.988d0a8f.js.map
