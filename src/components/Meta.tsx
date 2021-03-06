import { FC } from 'react'
import Head from 'next/head'

const Meta: FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans+Condensed"
      rel="stylesheet"
    />
    <title>{process.env.APP_NAME}</title>
  </Head>
)

export default Meta
