import React from "react"
import Link from 'next/link'

const Card = ({title, bilgi, slug, url, imageUrl, tagNames}) => (
  <Link href={url}>
    <a  target="_blank" rel="nofollow noopener" className="card-link w-inline-block">
    <div className="card">
      <div className="card-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
      <div className="card-info-box">
        <h3 className="heading-3">{title}</h3>
        <p className="paragraph-2">{bilgi}</p>
      </div>
      <div class="card-tag-box">
      {tagNames.map(tn => (
        <div class="card-tag" key={tn}>
          <div class="card-tag-text">{tn}</div>
        </div>
      ))}
      </div>
    </div>
  </a>
  </Link>
)

export default Card