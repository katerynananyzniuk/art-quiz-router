"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[777],{814:(e,t,n)=>{n.r(t),n.d(t,{type:()=>l,renderHome:()=>r});var s=n(350),o=n(870);const a=new s.Z("artists"),c=new s.Z("pictures");let l;function r(){console.log("Hello from home.js");const e=document.createElement("div");e.classList.add("home"),e.classList.add("page"),e.innerHTML=`\n  <h2>Hello from home.js</h2>\n  <button class="page-btn" data-btn="type">${a.title}</button>\n  <button class="page-btn" data-btn="type">${c.title}</button>\n  `;const t=document.getElementById("app");t.innerHTML="",t.append(e),document.addEventListener("click",(e=>{"type"===e.target.dataset.btn&&(l=e.target.innerText.toLowerCase(),console.log("Chosen type is",l),o.Z.modules.categories().then((e=>e.renderCategories())))}))}}}]);