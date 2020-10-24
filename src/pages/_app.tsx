import { AppProps } from 'next/app'
import { ActiveArticleProvider } from '~/components/Context'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveArticleProvider>
      <Component {...pageProps} />
    </ActiveArticleProvider>
  )
}
