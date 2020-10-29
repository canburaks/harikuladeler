import React from  "react";

function Footer(){
    return (
      <div className="footer">
      <div className="flex-container">
        <div className="w-layout-grid footer-grid">
          <div className="footer-block"><img src="/images/Group-1.png" alt="Harikuladeler logo" className="footer-logo"/>
            <div className="paragraph-basic">Harikulade yazılım, tasarım, ofis, üretkenlik ve no-code uygulamaları.</div>
          </div>
          {/* 
          <div id="w-node-813f6d9a3b48-6d9a3b38" className="footer-block">
            <a href="#" className="paragraph-basic _40-bottom-padding">Yazılım</a>
            <a href="#" className="paragraph-basic _40-bottom-padding">Tasarım</a>
            <a href="#" className="paragraph-basic _40-bottom-padding">No-Code</a>
          </div>
          <div id="w-node-813f6d9a3b53-6d9a3b38" className="footer-block">
            <a href="#" className="paragraph-basic _40-bottom-padding">İş/Ofis</a>
            <a href="#" className="paragraph-basic _40-bottom-padding">Üretkenlik</a>
            <a href="#" className="paragraph-basic _40-bottom-padding">Pazarlama</a>
          </div>
          */}
        </div>
      </div>
      <div className="div-block">
        <p className="paragraph">Harikuladeler 2020. Curated by <a href="https://www.cbsofyalioglu.com" rel="me" className="link">CBS</a> with </p><img src="/images/like.png" loading="lazy" alt="like icon" className="image-2"/>
      </div>
    </div>
    )
}


export default Footer;