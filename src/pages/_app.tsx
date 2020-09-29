import { AppProps } from 'next/app'
import { ActiveArticleProvider } from '~/components/Context'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ActiveArticleProvider>
      <Component {...pageProps} />
    </ActiveArticleProvider>
  )
}
