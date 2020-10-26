const AirtableAPI = {
  apiKey: "",
  base: "",
  url: "https://api.airtable.com/v0/",
  init: function ({ apiKey, base }) {
    this.apiKey = apiKey;
    this.base = base;
    //const records = await this.fetch("Link");
    return this
  },
  fetch: async function (table) {
    if (this.apiKey && this.base && table) {
      const endpoint = `${this.url}${this.base}/${table}?api_key=${this.apiKey}`;
      //console.log(endpoint);
      const res = await fetch(endpoint, {});
      const rj =  await res.json();
      //console.log("response", rj);
      return rj.records
    } else return null;
  },
}


const BookmarksAPI = {
  tagNames:[],
  categoryNames:[],
  records:[],
  tags:{},
  categories:{},
  colors:[
    //{color:"rgb(0, 178, 144)", bg:"rgba(0, 178, 144, 0.1)"},
    //{color:"rgb(81, 73, 230)", bg:"rgba(81, 73, 230, 0.2)"},
    //{color:"rgba(128, 78, 247, 1)", bg:"rgba(128, 78, 247,0.35)"},
    //{color:"rgba(251, 45, 45,  1)", bg:"rgba(251, 45, 45, 0.15)"},
    //{color:"rgba(243, 167, 46, 1)", bg:"rgba(243, 167, 46,0.1)"}
  ],
  activeColor:"rgba(50,50,50,0.8)",

  state:"All Star",
  actives:[],

  createLayout:function(){

    const app = document.getElementById("app");
    app.style.padding = "32px"

    //banner
    app.innerHTML = `
      <div class="py-5 service-32" style="min-height:300px; display:none;">
          <div class="container">
              <div class="row wrap-feature-32"> 
                  <div class="col-md-6"> <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature32/img1.jpg" class="img-fluid" width="100%"> </div>
                  <div class="col-md-6 align-self-center"> 
                                      <span class="badge badge-info rounded-pill px-3 py-1 font-weight-light">Awesome</span>
                      <h1 class="my-3">Harikulade Linkler</h1>
                      <p class="mt-3">Browser bookmarklarımı burada paylaşmaya karar verdim. Peyderpey burasını zenginleştireceğim.</p> 
                                      
                              </div>
              </div>
          </div>
      </div>
    `

    const menu = document.createElement("div")
    menu.id = "tag-box"
    menu.className = "Selector";

    const gridBox = document.createElement("div")
    gridBox.id = "grid-box"

    const styleEl = document.createElement("style")
    styleEl.innerHTML = `
      body {font-family:Helvetica}
      div {box-sizing:border-box;}
      #app {width:100%; display:flex; flex-direction:column; align-items:flex-start; padding:32px 10vw !important;}
      #app #grid-box {
        box-sizing:border-box;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto;
        min-height: 80vh;
        grid-column-gap: 48px;
        grid-row-gap: 64px;
      }
      @media (max-width: 640px) {
        #app {
          padding:32px 5vw !important;
        }
      }


      @media (max-width: 640px) {
        #grid-box {
          grid-template-columns: 1fr !important;
        }
      }
      @media (min-width: 740px) {
        #grid-box {
          grid-template-columns: 1fr 1fr !important;
      
        }
      }
      
      @media (min-width: 1280px) {
        #grid-box {
          grid-template-columns: 1fr 1fr 1fr !important;
        }
      }
      @import url(//fonts.googleapis.com/css?family=Montserrat:300,500);
      .service-32 {
      font-family: "Montserrat", sans-serif;
          color: #8d97ad;
      font-weight: 300;
      }

      .service-32 h1, .service-32 h2, .service-32 h3, .service-32 h4, .service-32 h5, .service-32 h6 {
      color: #3e4555;
      }

      .service-32 .font-weight-medium {
          font-weight: 500;
      }

      .service-32 .badge {
          line-height: 14px;
      }

      .service-32 .badge-info {
          background: #188ef4;
      }

      .service-32 .btn-info-gradiant {
          background: #188ef4;
          background: -webkit-linear-gradient(legacy-direction(to right), #188ef4 0%, #316ce8 100%);
          background: -webkit-gradient(linear, left top, right top, from(#188ef4), to(#316ce8));
          background: -webkit-linear-gradient(left, #188ef4 0%, #316ce8 100%);
          background: -o-linear-gradient(left, #188ef4 0%, #316ce8 100%);
          background: linear-gradient(to right, #188ef4 0%, #316ce8 100%);
          border: 0px;
          color: #ffffff;
      }

      .service-32 .btn-info-gradiant:hover {
              background: #316ce8;
          background: -webkit-linear-gradient(legacy-direction(to right), #316ce8 0%, #188ef4 100%);
          background: -webkit-gradient(linear, left top, right top, from(#316ce8), to(#188ef4));
          background: -webkit-linear-gradient(left, #316ce8 0%, #188ef4 100%);
          background: -o-linear-gradient(left, #316ce8 0%, #188ef4 100%);
          background: linear-gradient(to right, #316ce8 0%, #188ef4 100%);
      }

      .service-32 .btn-md {
          padding: 15px 45px;
          font-size: 16px;
      }
          .Selector {
            /* Layout */
                display: flex; flex-wrap:wrap;
            /* Sizes */
              box-sizing:border-box;
              width:100%;
                padding: 20px;
                margin: 16px 0 48px 0;
                
                border-bottom:4px solid rgba(180,180,180,0.8)
        }
        .Selector input {
          background-color: rgba(50,50,50,0.8);
            /* Layout */
                position: relative; 
            /* Reset */
                outline: none; appearance: none; -webkit-appearance: none; -moz-appearance: none;
            /* Sizes */
                height:auto;border-radius: 6px; background-size: cover; padding:0px 16px; margin: 8px;
        }
        /* Hidden */
        .Selector input::after { content: attr(title); display: block;}
        /* Label */
        .Selector input::after {
            /* Layout */
                position: relative; cursor: pointer; display: block; 
            /* Text */
                font-weight:bold;
                text-align: center; text-transform: uppercase; letter-spacing: 2px; color: #fff; font-size: 10px;
            /* Sizes */
                line-height:2.5; border-radius: 4px;
        }
        /* Hover */
        .Selector input:hover{ background: #333;}
        /* Active */
        .Selector input:checked:before {
            /* Position */
                position: absolute; right: -10px; top: -10px;
            /* Layout */
                z-index: 3; content: ""; display:block; box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
            /* Background */
                background: #fff; background-size: cover;
                background-image: url("data:image/svg+xml;utf8,<svg enable-background='new 0 0 512 512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(139, 139, 255)' d='m437.019 74.98c-48.352-48.351-112.639-74.98-181.019-74.98-68.381 0-132.668 26.629-181.02 74.98-48.351 48.352-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.019c48.352 48.352 112.64 74.981 181.02 74.981s132.667-26.629 181.019-74.98c48.352-48.353 74.981-112.64 74.981-181.02s-26.629-132.667-74.981-181.02zm-58.713 120.093-143.065 143.066c-2.929 2.929-6.768 4.393-10.606 4.393-3.839 0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354 0-21.213 5.857-5.858 15.355-5.858 21.213 0l69.728 69.727 132.458-132.46c5.857-5.858 15.355-5.858 21.213 0s5.858 15.355 0 21.213z'/></svg>");
            /* Sizes */
                border-radius:15px; height: 20px; width: 20px;
        }
 
    `

    //Append to DOM
    app.appendChild(styleEl);
    app.appendChild(menu);
    app.appendChild(gridBox);
  },
  fillSelectMenu:function(){
    const selectMenu = document.getElementById("tag-box");
    //const selectMenu = document.createElement("div");
    //selectMenu.id = "tag-box";
    //selectMenu.className = "Selector";
    //selectMenu.innerHTML = 
    const selectorAll = document.createElement("input")
    selectorAll.type = "radio"
    selectorAll.checked = true
    selectorAll.setAttribute("title", "All Star")
    selectorAll.dataset.name = "All Star"
    selectorAll.dataset.slug = "all-star"
    selectorAll.setAttribute("name", "selector")
    //console.log("all", selectorAll)

    // All
    selectorAll.addEventListener("change", function(){
    if (BookmarksAPI.slugify(BookmarksAPI.state) !== selectorAll.dataset.name){
        BookmarksAPI.state = selectorAll.dataset.name
        BookmarksAPI.update()
      }
    })
    selectMenu.appendChild(selectorAll)

    // Other tags
    BookmarksAPI.tags.forEach((tag, i) => {
        //console.log(tagname)
        const selectorEl = document.createElement("input")
        const selectorSlug = BookmarksAPI.slugify(tag.fields.name)
        selectorEl.type = "radio"
        selectorEl.setAttribute("name", "selector")
        selectorEl.setAttribute("title", tag.fields.name)
        selectorEl.dataset.id = tag.id;
        selectorEl.dataset.name = tag.fields.name;
        selectorEl.dataset.slug = selectorSlug;
        
        selectorEl.addEventListener("change", function(){
          if (BookmarksAPI.slugify(BookmarksAPI.state) !== selectorEl.dataset.name){
              BookmarksAPI.state = selectorEl.dataset.name
              BookmarksAPI.update()
          }
        })
        selectMenu.appendChild(selectorEl)
    })


  },
  update:function(){
    //BookmarksAPI.getActiveColor()
    const gridBox = document.getElementById("grid-box");
    gridBox.innerHTML =``;
    //console.log("state", BookmarksAPI)
    if (gridBox) {
      if (this.state === "All Star"){
        this.records.forEach(r => (r.fields.fav === true) && gridBox.appendChild(this.createRecordEl(r, "Favourite")))
      }
      else {
        const activeTag = this.tags.filter(t => t.fields.name === this.state)[0]
        //console.log("active tag", activeTag)
        if (activeTag){
          const activeLinks = this.records.filter(r => activeTag.fields.link.includes(r.id))
          //console.log("active tag", activeLinks)
          activeLinks.forEach(link => gridBox.appendChild(this.createRecordEl(link, activeTag.fields.name)))
        }
      }
    }
  },
  selectHandler:function(tagEl, tagname){
      //console.log("tagEL: ", BookmarksAPI.slugify(BookmarksAPI.state))
      if (BookmarksAPI.slugify(BookmarksAPI.state) !== tagEl.dataset.name){
        BookmarksAPI.state = tagname

        BookmarksAPI.update()
      }
  },
  slugify:function(name){
    return name.toLowerCase().replace(" ", "-")
  },

  createRecordEl:function(rec, activeTagName){
    //console.log("rec", rec)
    const box = document.createElement("div")
    box.innerHTML = `
        <cbs-card
            title="${rec.fields.title || rec.fields.name }"
            description="${rec.fields.bilgi}"
            url="${rec.fields.url}"
            imageUrl="${rec.fields.imageUrl}"
            tag="${activeTagName}"
            tagColor="${ "rgba(0,0,0,0.8)" /*BookmarksAPI.getTagColor(rec.fields.tag)*/}"
        ></cbs-card>
    `
    return box
  },
     
  postFetch: function(){
      //tags
      const tagIds = [...new Set(BookmarksAPI.records.map(r => r.fields.tag[0]))];
      const tags = tagIds.forEach(tn => {
        const existingTags = BookmarksAPI.tags.filter(r => r.id === tn)[0].fields.name
          BookmarksAPI.tagNames.push(existingTags)
      } )

      const categoryIds = [...new Set(BookmarksAPI.records.map(r => r.fields.category[0]))];
      const categories = categoryIds.forEach(tn => {
        const existingCategories = BookmarksAPI.categories.filter(r => r.id === tn)[0].fields.titl
        BookmarksAPI.categoryNames.push(existingCategories)
    } )
    //console.log("check", BookmarksAPI)

  },
};


(async function(){

  AirtableAPI.init({apiKey:"keym6ehWNZnQzpS4m" , base:"appq9CwhpYOjOv4tQ"})
  
  //FETCH TAGS (for color)
  const tagdata = await AirtableAPI.fetch("Tag")
  const existingTags = tagdata.filter(t => t.fields.link)
  const tagNames = existingTags.map(t => t.fields.name)
  //console.log("tag", tagNames)
  if (tagdata && tagdata.length > 0){
    BookmarksAPI.tags = existingTags;
    BookmarksAPI.tagNames = existingTags;
  }

  // CATEGORY
  const categorydata = await AirtableAPI.fetch("Category")
  const existingCategories =  categorydata.filter(t => t.fields.link)
  const categoryNames = existingCategories.map(c => c.fields.name)
  //console.log("category", categorydata)
  if (categorydata && categorydata.length > 0){
    BookmarksAPI.categories = existingCategories;
    BookmarksAPI.categoryNames = categoryNames;
  }
  // LINKS
  const data = await AirtableAPI.fetch("Link")
  const records = data
  //console.log("fetcher: ", records)
  if (records && records.length > 0){
    BookmarksAPI.records = records.sort();
    //BookmarksAPI.postFetch()
    BookmarksAPI.createLayout()
    BookmarksAPI.fillSelectMenu()
    //BookmarksAPI.getActiveColor()
    BookmarksAPI.update()
  }
//Bookmarks.fetchtags()
window.Bookmarks = BookmarksAPI

})()