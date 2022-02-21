System.register(["./chunk-vendor.js","./chunk-frameworks.js"],function(){"use strict";var p,i,m,c;return{setters:[function(n){p=n.o,i=n.a},function(n){m=n.A,c=n.v}],execute:function(){var n=Object.defineProperty,a=(e,t)=>n(e,"name",{value:t,configurable:!0});p(".js-structured-issue-multi-select-option[aria-checked='true']",{add:e=>l(e),remove:e=>l(e)});function l(e){y(e),S(e)}a(l,"processSelection");function y(e){const t=e.closest(".form-group");if(t){const r=t.querySelectorAll(".js-structured-issue-multi-select-option[aria-checked='true']"),u=t==null?void 0:t.querySelector(".js-structured-issue-multi-select-summary-button > span[data-menu-button]");if(u){const o=[];for(const f of r){const b=f.querySelector("input");b&&o.push(b.value)}u.textContent=o.join(", ")}}}a(y,"updateSelectionText");function S(e){if(e.getAttribute("data-required")!=="true")return;const t=e.closest(".form-group");if(t){const r=t.querySelectorAll(".js-structured-issue-multi-select-option[data-required='true']");for(const u of r){const o=u.querySelector("input");o&&(e.getAttribute("aria-checked")==="true"?o.removeAttribute("required"):Array.from(r).every(f=>f.getAttribute("aria-checked")!=="true")&&o.setAttribute("required","required"))}}}a(S,"updateRequiredStatus");var j=Object.defineProperty,s=(e,t)=>j(e,"name",{value:t,configurable:!0});i("focusin",".js-structured-issue-textarea-expander",function({currentTarget:e}){q(),v(e)}),m(".comment-form-textarea",function({currentTarget:e}){d(e);const t=document.querySelector(".new_issue");!t||c(t)}),i("change",".js-comment-field",function({currentTarget:e}){d(e);const t=document.querySelector(".new_issue");!t||c(t)});function v(e){w();const t=document.querySelector(".js-wysiwyg-container"),r=e.closest(".form-group-body");if(!r||!t)return;const u=r.querySelector(".js-wysiwyg-target");if(u){u.appendChild(t),t.hidden=!1;const o=r.querySelector(".comment-form-textarea");o.value=e.value,o.placeholder=e.placeholder,e.hidden=!0,r.querySelector(".js-write-tab").click(),o.focus()}}s(v,"appendAndSyncWysiwyg");function d(e){const t=e.closest(".form-group-body");if(!t)return;const r=t.querySelector(".js-structured-issue-textarea-expander");!r||(r.value=e.value)}s(d,"syncInputValues");function q(){const e=document.querySelectorAll(".js-structured-issue-textarea-expander");for(const t of e)t.hidden=!1}s(q,"resetTextareas");function w(){const e=document.querySelector(".js-preview-panel");e&&e.classList.contains("border-bottom")&&e.classList.remove("border-bottom")}s(w,"styleMarkdownPreview")}}});
//# sourceMappingURL=structured-issues-e4ebddf1.js.map
