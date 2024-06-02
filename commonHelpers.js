import{S as g,N as d,K as m,M as u,a as v,i as f}from"./assets/vendor-0177c146.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".projects-list"),t=document.querySelector(".load-more-button"),r=[{imgSrc1x:"../img/energy-1x.jpg",imgSrc2x:"../img/energy-2x.jpg",alt:"energy projects",stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/fruitbox-1x.jpg",imgSrc2x:"../img/fruitbox-2x.jpg",alt:"fruitbox projects",stack:"React, JavaScript, Node JS, Git",title:"FRUITBOX ONLINE STORE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/jewelry-1x.jpg",imgSrc2x:"../img/jewelry-2x.jpg",alt:"jewelry projects",stack:"React, JavaScript, Node JS, Git",title:"CHEGO JEWELRY WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/mimino-1x.jpg",imgSrc2x:"../img/mimino-2x.jpg",alt:"mimino projects",stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/power-1x.jpg",imgSrc2x:"../img/power-2x.jpg",alt:"power projects",stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/starlight-1x.jpg",imgSrc2x:"../img/starlight-2x.jpg",alt:"starlight projects",stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/vyshyvanka-1x.jpg",imgSrc2x:"../img/vyshyvanka-2x.jpg",alt:"vyshyvanka projects",stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"}];let o=0;const e=3,i=()=>{const a=Math.min(o+e,r.length);for(let n=o;n<a;n++){const c=r[n],l=document.createElement("li");l.classList.add("projects-list-items"),l.innerHTML=`
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
            `,s.appendChild(l)}o+=e,o>=r.length&&(t.style.display="none")};t.addEventListener("click",i)});const h={accordionWrappers:document.querySelectorAll(".ac"),acList:document.querySelector(".accordion-container")};function S(s){const t=s.target;if(t.closest(".ac-panel"))return;const o=t.closest(".ac"),e=document.querySelector(".is-active");e&&e.id!==o.id&&e.classList.remove("is-active"),o.classList.toggle("is-active")}h.acList.addEventListener("click",S);const p=document.querySelector(".reviews-list"),j=async()=>{const s="https://portfolio-js.b.goit.study/api/reviews";try{return(await v.get(s)).data}catch(t){f.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",progressBar:!1,message:"Error while fetching reviews"}),console.error("Error fetching reviews:",t),p.insertAdjacentHTML("beforeend",`
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `)}},x=async()=>{const s=await j();if(s){const t=s.map(r=>`
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${r.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${r.avatar_url}" alt="review from ${r.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${r.author}</p>
                </div>
            </li>
        `).join("");p.insertAdjacentHTML("beforeend",t)}};x();new g(".reviews .swiper",{modules:[d,m,u],mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});
//# sourceMappingURL=commonHelpers.js.map
