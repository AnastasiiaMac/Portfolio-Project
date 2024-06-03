import{S as y,N as E,K as L,M as k,a as v,i as f}from"./assets/vendor-0177c146.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const x=document.getElementById("menu-open_btn"),a=document.getElementById("mobile-menu"),j=document.getElementById("close-mobile-menu"),b=document.querySelectorAll(".mob-nav-list li");x.addEventListener("click",function(){a.style.transform="translateY(0)"});j.addEventListener("click",function(){a.style.transform="translateY(-100%)"});b.forEach(e=>{e.addEventListener("click",function(){a.style.transform="translateY(-100%)"})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(e){if(e.target.matches('a[href^="#"]')){e.preventDefault();const o=e.target.getAttribute("href"),s=document.querySelector(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})}})});const p=document.querySelector(".check-input"),n=document.body;n.classList.add("light-mode");p.checked=!1;localStorage.removeItem("theme");const h=localStorage.getItem("theme");h&&(n.classList.add(h),h==="dark-mode"&&(p.checked=!0));p.addEventListener("change",()=>{p.checked?(n.classList.remove("light-mode"),n.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(n.classList.remove("dark-mode"),n.classList.add("light-mode"),localStorage.setItem("theme","light-mode"))});const w=()=>{n.classList.contains("dark-mode")?(a.classList.add("dark-mode"),a.classList.remove("light-mode")):(a.classList.add("light-mode"),a.classList.remove("dark-mode"))};w();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".projects-list"),o=document.querySelector(".load-more-button"),s=[{imgSrc1x:"../img/energy-1x.jpg",imgSrc2x:"../img/energy-2x.jpg",alt:"energy projects",stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/fruitbox-1x.jpg",imgSrc2x:"../img/fruitbox-2x.jpg",alt:"fruitbox projects",stack:"React, JavaScript, Node JS, Git",title:"FRUITBOX ONLINE STORE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/jewelry-1x.jpg",imgSrc2x:"../img/jewelry-2x.jpg",alt:"jewelry projects",stack:"React, JavaScript, Node JS, Git",title:"CHEGO JEWELRY WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/mimino-1x.jpg",imgSrc2x:"../img/mimino-2x.jpg",alt:"mimino projects",stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/power-1x.jpg",imgSrc2x:"../img/power-2x.jpg",alt:"power projects",stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/starlight-1x.jpg",imgSrc2x:"../img/starlight-2x.jpg",alt:"starlight projects",stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/vyshyvanka-1x.jpg",imgSrc2x:"../img/vyshyvanka-2x.jpg",alt:"vyshyvanka projects",stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"}];let r=0;const t=3,i=()=>{const m=Math.min(r+t,s.length);for(let u=r;u<m;u++){const c=s[u],g=document.createElement("li");g.classList.add("projects-list-items"),g.innerHTML=`
                <picture>
                    <source srcset="${c.imgSrc1x} 1x", 
                    ${c.imgSrc2x} 2x />
                    <img src="${c.imgSrc1x}" alt="${c.alt}" class="projects-item-img">
                </picture>
                <div class="tech-stack">${c.stack}</div>
                <div class="projects-item-conteiner">
                    <div class="projects-item-title">${c.title}</div>
                    <a href="${c.link}" class="projects-btn" target="_blank">VISIT
                        <svg class="projects-icon" width="24" height="24">
                            <use href="../img/icons.svg#icon-arrow-visit"></use>
                        </svg>
                    </a>
                </div>
            `,e.appendChild(g)}r+=t,r>=s.length&&(o.style.display="none")};o.addEventListener("click",i)});const I={accordionWrappers:document.querySelectorAll(".ac"),acList:document.querySelector(".accordion-container")};function M(e){const o=e.target;if(o.closest(".ac-panel"))return;const r=o.closest(".ac"),t=document.querySelector(".is-active");t&&t.id!==r.id&&t.classList.remove("is-active"),r.classList.toggle("is-active")}I.acList.addEventListener("click",M);const S=document.querySelector(".reviews-list"),N=async()=>{const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await v.get(e)).data}catch(o){f.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",progressBar:!1,message:"Error while fetching reviews"}),console.error("Error fetching reviews:",o),S.insertAdjacentHTML("beforeend",`
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `)}},R=async()=>{const e=await N();if(e){const o=e.map(s=>`
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${s.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${s.avatar_url}" alt="review from ${s.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${s.author}</p>
                </div>
            </li>
        `).join("");S.insertAdjacentHTML("beforeend",o)}};R();new y(".reviews .swiper",{modules:[E,L,k],mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});const A=document.querySelector(".form");document.querySelector(".form-btn");const B=document.querySelector(".modal-close-btn"),q=document.querySelector(".form-input-name"),O=document.querySelector(".input-textarea"),d=document.querySelector(".backdrop"),P="https://portfolio-js.b.goit.study/api/requests",l={email:"",comment:""},T=e=>{l.email=e.target.value};q.addEventListener("input",T);const J=e=>{l.comment=e.target.value};O.addEventListener("input",J);const G=async()=>v.post(P,l),K=async e=>{if(e.preventDefault(),l.comment===""||l.email===""){f.error({message:"All fields must be completed!",position:"topRight",maxWidth:"300px"});return}G();try{d.classList.add("is-open")}catch{f.error({message:"Ops! Something went wrong. Please try again!",position:"topRight",maxWidth:"300px"})}e.currentTarget.reset(),l.comment="",l.email=""};A.addEventListener("submit",K);const $=e=>{d.classList.remove("is-open")};B.addEventListener("click",$);const C=e=>{e.target===d&&d.classList.remove("is-open")};d.addEventListener("click",C);document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map