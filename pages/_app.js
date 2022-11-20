import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div dir='rtl' lang='ar'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
