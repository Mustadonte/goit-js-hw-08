function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,a,i,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function O(e){return c=e,f=setTimeout(j,t),l?y(e):i}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function j(){var e=v();if(h(e))return D(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,a-(e-c)):n}(e))}function D(e){return f=void 0,g&&r?y(e):(r=o=void 0,i)}function T(){var e=v(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return O(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=b(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?i:D(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form")};let O=localStorage.getItem("feedback-form-state");y.form.addEventListener("input",e(t)((function(){let e=new FormData(y.form);e.forEach(((t,n)=>{e[n]=t,localStorage.setItem("feedback-form-state",JSON.stringify(e)),O=e}))}),500)),y.form.addEventListener("submit",(function(e){const{email:t,message:n}=y.form.elements;if(""===t.value||""===n.value)return void alert("Заповніть всі поля");{e.preventDefault();const t={email:e.currentTarget.email.value,message:e.currentTarget.message.value};console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")}})),addEventListener("DOMContentLoaded",(function(e){if(!O)return;{storageData=JSON.parse(localStorage.getItem("feedback-form-state"));const{elements:e}=y.form;e.email.value=storageData.email,e.message.value=storageData.message}})),addEventListener("DOMContentLoaded",(function(){try{savedData=JSON.parse(O);const{elements:e}=y.form;Object.keys(savedData).forEach((t=>e[t].value=savedData[t]))}catch(e){}}));
//# sourceMappingURL=03-feedback.d63e492f.js.map