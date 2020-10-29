const template = document.createElement("template");
template.innerHTML = `
  <style>
    div.card {
      transform-style: preserve-3d;
      border-radius: 10px;
      overflow: hidden;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      align-items: flex-start;
      border:2px solid rgba(50,50,50,0);
      box-shadow:  9px 9px 28px #e3e3e3, 
      -9px -9px 28px #ffffff;
      transition:
        .2s ease-in-out transform,
        .2s ease-in-out box-shadow;
    }
    div.card:hover {
      transform:translate3d(0px, -16px, 0px);
      box-shadow:  9px 9px 26px -8px #d2d2d2, 
      -9px -9px 26px -8px #fbfbfb;
    }

    .card-title  { font-size: 24px; font-weight: bold; margin:4px 0;font-family:"Helvetica" sans;}
    .card-description { font-size: 16px; opacity:0.8; line-height:1.2;font-family:"Helvetica";min-height:80px; margin-top:8px;}
    .card-title, .card-description  {padding-left:16px; padding-right:16px;}
    .card-link  { min-height: 300px;text-decoration:none;color:unset;height:100%;position:relative; display:flex;flex-direction:column;align-items:flex-start;}

    .card-tag {font-size:12px;position:relative; bottom:16px;left:16px;margin-top:8px;color:white;font-weight:bold;padding:2px 8px; border-radius:4px;}
    .card-image {min-height:240px; margin-bottom:0;}
    .card-image {background-position:50% 50%; background-repeat:no-repeat; background-size:cover;width:100%; }
  </style>
  <div class="card">
      <a rel="nofollow noopener" target="_blank" class="card-link">
        <div class="card-image" ></div>
        <h3 class="card-title"></h3>
        <p class="card-description"></p>
        <div class="card-tag"></div>
      </a>
  </div>
  `;

class CbsCard extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title") || null;
    this.description = this.getAttribute("description") || null;
    this.imageUrl = this.getAttribute("imageUrl") || null;
    this.url = this.getAttribute("url") || null;
    this.tag = this.getAttribute("tag") || null;
    this.tagColor = this.getAttribute("tagColor") || null;
    //console.log(this.tagColor)
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.update();
  }

  update() {
    const description = this.description.length > 150 ? `${this.description.slice(0,150)} ...` : this.description.slice(0,150);
    this.shadowRoot.querySelector(".card-link").href = this.url;
    this.shadowRoot.querySelector(".card-image").style.backgroundImage = `url(${this.imageUrl})`;
    this.shadowRoot.querySelector(".card-title").textContent = this.title;
    this.shadowRoot.querySelector(".card-description").textContent = description
    this.shadowRoot.querySelector(".card-description").title = this.description;
    const cardtag = this.shadowRoot.querySelector(".card-tag")
    cardtag.textContent = `${this.tag}`;
    cardtag.style.backgroundColor =  this.tagColor; 

  }
}

customElements.define("cbs-card", CbsCard);
