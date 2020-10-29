import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  


   

  return <Component { ...pageProps } />
}

export default MyApp


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