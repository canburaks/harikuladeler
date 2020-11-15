import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'


import Layout from "../components/Layout"

import Card from "../components/Card"
import Hero from "../components/Hero"
import CategoryPage from "./category/[slug]"

import Airdata  from "./api/hello"


export default function Home({ linkdata, categorydata, tagdata }) {
  const router = useRouter()
  const { pathname } = router
  console.log("home",  pathname )
  
  const [activeState, setActiveState] = useState("all")

  const favouriteTags = tagdata.filter(t => t.fields.fav === true)
  const existingTags = tagdata.filter(t => t.fields.link)
  const existingCategories =  categorydata.filter(c => c.fields.link)
  const tagNames = existingTags.map(t => t.fields.name)
  const categoryNames = existingCategories.map(c => c.fields.name)
  const favourites = linkdata.filter(link => link.fields.fav === true)
  const getTagNamesById = (tagId) => tagdata.filter(t => t.id === tagId).map(t => t.fields.name)[0]

  const getLinksByTagName = (tagSlug) => {
    const currentTag = existingTags.filter(t => t.fields.slug === tagSlug)[0]
    const currentLinkIds = currentTag.fields.link
    return linkdata.filter(l => currentLinkIds.includes(l.id))
  }
  const activeLinks = activeState === "all" ? favourites : getLinksByTagName(activeState)

  const handleClick = (e,tagname) => {
    //e.preventDefault()
    //router.push(tagname)
    console.log(tagname, )
    setActiveState(tagname)
  }



  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'G-YWQNTGMG9S');
  },[])

  
  return (
    <Layout>
      <Head>
        <title>Harikulade Uygulamalar</title>
        <meta name="description" content="Harikulade uygulamalar keşfedin.  Yazılım, tasarım, üretkenlik, iş ve no-code uygulamaları kürasyonu."></meta>
        <title>Awesome Digital Products</title>
        <meta name="description" content="Harikuladeler is a collection of bookmarks includes design, development, marketing, office and no-code web apps and sites."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero categories={categorydata} />


      <div className="Selector">
        {favouriteTags.map(t => (
          <input 
            key={t.fields.slug}   
            type="radio" 
            title={t.fields.name} 
            value={t.fields.slug} 
            onChange={(e) => handleClick(e,t.fields.slug)}
            checked={activeState === t.fields.slug} 
            name="selector" 
          />
          ))}
      </div>

      <div id="grid-container" class="w-layout-grid grid">
          {activeLinks.map(link => {
            const tagNames = link.fields.tag ? link.fields.tag.map(tid => getTagNamesById(tid)) : [];
            return (
              <Card 
                key={link.id}
                tagNames={tagNames}
                slug={link.fields.slug} 
                title={link.fields.title} 
                bilgi={link.fields.bilgi}
                description={link.fields.description}
                imageUrl={link.fields.imageUrl}
                url={link.fields.url}
            />
          )})}

        </div>
    
    </Layout>
  )
}

export async function getStaticProps(context) {
  const {linkdata, categorydata, tagdata } = await Airdata()
  //const data = await rawdata.json()
  //console.log("data", data)
  return {
    props: {
      linkdata, categorydata, tagdata
    }, // will be passed to the page component as props
  }
}