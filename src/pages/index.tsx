import Head from 'next/head'
import Link from 'next/link'

export default () => {
  return (
  <>
  <Head>
    <title>next-blog</title>
  </Head>
    <Link href="/posts">
      <a>posts</a>
    </Link>
  </>
  )
}
