import { FC } from 'react'
import { AppProps } from 'next/app'
import { ActiveArticleProvider } from '~/components/Context'
import '../styles/global.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ActiveArticleProvider>
      { console.log('App') }
      <Component {...pageProps} />
    </ActiveArticleProvider>
  )
}

export default App
