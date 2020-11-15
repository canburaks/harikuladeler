import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="tr">
        <Head >
        <script data-ad-client="ca-pub-9259748524746137" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YWQNTGMG9S"></script>
        <script data-ad-client="ca-pub-9259748524746137" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      */}
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f8f8affd13d373469d736e5" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/webflow.js" type="text/javascript"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument