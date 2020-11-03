import { FC } from 'react'
import Head from 'next/head'

const PageTitle: FC = ({ children }) => (
  <Head>
    <title>
      {children} | WebCreateBlog
    </title>
  </Head>
)

export default PageTitle
