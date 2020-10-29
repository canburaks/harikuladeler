import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'


import Layout from "../../components/Layout"

import Card from "../../components/Card"
import Hero from "../../components/Hero"

import Airdata  from "../api/hello"


export default function Home({ linkdata, categorydata, tagdata }) {
    const router = useRouter()
    const { pathname } = router
    const slug = pathname.split("/")[pathname.split("/").length - 1]
    console.log("home",  pathname, slug )

  
    const existingTags = tagdata.filter(t => t.fields.link)
    const existingCategories =  categorydata.filter(c => c.fields.link)
    const tagNames = existingTags.map(t => t.fields.name)
    const categoryNames = existingCategories.map(c => c.fields.name)
    const favourites = linkdata.filter(link => link.fields.fav === true)

    const categoryAndLinks = existingCategories.map(c => {
        const belongedLinks = linkdata.filter(l => c.fields.link.includes(l.id) )
        const updatedCategory = {links: belongedLinks, ...c}
        return updatedCategory
    })
    
    const currentCategoryData = categoryAndLinks.filter(c => c.fields.slug === slug)[0]
  //useEffect(() => {
  //  // Always do navigations after the first render
  //  router.push('/?counter=10', undefined, { shallow: true })
  //}, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

  return (
    <Layout categories={existingCategories}>
      <Head>
        <title>Harikulade Uygulamalar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero categories={existingCategories} />

      <div className="section main">
            <div className="w-layout-grid grid">
            { currentCategoryData.links.map(link => {
                //console.log("link", k);
                return ( <Card 
                key={link.id}
                slug={link.fields.slug} 
                title={link.fields.title} 
                bilgi={link.fields.bilgi}
                imageUrl={link.fields.imageUrl}
                />
                )})}
            </div>
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