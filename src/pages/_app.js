import { AppProps } from 'next/app'
import '../styles/global.css'

export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
