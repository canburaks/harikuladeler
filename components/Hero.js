import React from "react";
import Link from 'next/link'

const Hero = ({categories}) => {
    //console.log("hero",categories)
    return (
        <div className="hero-section">
        <div className="flex-container">
          <div className="hero-text-block">
            <h1 className="hero-h1">Harikulade Uygulamalar</h1>
            <p className="hero-paragraph">Yazılım, tasarım, üretkenlik, no-code ve ofis uygulamaları kürasyonu.</p>
            <div className="w-embed w-script">
              <script async="" data-uid="93d8e4bf79" src="https://harikuladeler.ck.page/93d8e4bf79/index.js"></script>
            </div>
          </div>
          <div className="div-block-2"><img src="/images/Saly-12.png" loading="lazy" 
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 42vw, 33vw" 

          srcSet="/images/Saly-12-p-500.png 500w, /images/Saly-12.png 800w" alt="" className="image-3"/></div>
        </div>
        <div className="dropdown-wrapper dd2">
            {categories.map(c => (
                <Link href={`/category/${c.fields.slug}`} key={c.fields.slug}>
                    <a  className="dropdown-link-1 dd2 w-inline-block">
                        <div className="icon-wrap-2"><img src={`/images/${c.fields.slug}.png`} alt="" className="icon-5" /></div>
                        <div className="nav-content-wrap">
                            <div className="dropdown-title">{c.fields.name}</div>
                            <div className="nav-link-details" title={c.fields.bilgi}>{c.fields.bilgi.slice(0,40)}...</div>
                        </div>
                    </a>
                </Link>
            ))}

        </div>
      </div>
    )
}

export default Hero;