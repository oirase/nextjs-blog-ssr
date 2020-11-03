import { FC } from 'react'
import Head from 'next/head'

const PageTitle: FC = ({ children }) => (
  <Head>
    <title>
      {children} | {process.env.APP_NAME}
    </title>
  </Head>
)

export default PageTitle
