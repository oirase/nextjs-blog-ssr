import { AppProps } from 'next/app'
import { ActiveArticleProvider } from '~/components/Context'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveArticleProvider>
      <Component {...pageProps} />
    </ActiveArticleProvider>
  )
}
