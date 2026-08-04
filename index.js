import{a as i,S as f,i as l}from"./assets/vendor-S2qh7U4E.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();i.defaults.baseURL="https://pixabay.com/api/";i.defaults.params={key:"57006451-3abf85bc482cc3cca5bb0ea9f",image_type:"photo",orientation:"horizontal",safesearch:"true"};function p(o){return i.get(`?q=${o}`).then(s=>s.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function d(o){const s=o.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> <span>${t.likes}</span></p>
        <p class="info-item"><b>Views</b> <span>${t.views}</span></p>
        <p class="info-item"><b>Comments</b> <span>${t.comments}</span></p>
        <p class="info-item"><b>Downloads</b> <span>${t.downloads}</span></p>
      </div>
    </li>
  `).join("");c.innerHTML=s,m.refresh()}function y(){c.innerHTML=""}function g(){u.classList.add("is-visible")}function h(){u.classList.remove("is-visible")}document.querySelector(".form").addEventListener("submit",b);function b(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();s!==""&&(y(),g(),p(s).then(t=>{if(t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(t.hits)}).catch(()=>{l.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{h()}),o.target.reset())}
//# sourceMappingURL=index.js.map
