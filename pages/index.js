import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'


import Layout from "../components/Layout"

import Card from "../components/Card"
import Hero from "../components/Hero"
import CategoryPage from "./category/[slug]"

import Airdata  from "./api/hello"


export default function Home({ linkdata, categorydata, tagdata }) {
  const router = useRouter()
  const { pathname } = router
  console.log("home",  pathname )

  
  const existingTags = tagdata.filter(t => t.fields.link)
  const existingCategories =  categorydata.filter(c => c.fields.link)
  const tagNames = existingTags.map(t => t.fields.name)
  const categoryNames = existingCategories.map(c => c.fields.name)
  const favourites = linkdata.filter(link => link.fields.fav === true)

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'G-YWQNTGMG9S');
  },[])

  return (
    <Layout categories={existingCategories}>
      <Head>
        <title>Harikulade Uygulamalar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero categories={existingCategories} />
    
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