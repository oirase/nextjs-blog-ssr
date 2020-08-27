import Head from 'next/head'
import Link from 'next/link'
import Posts from './posts'

export default () => {
  return (
  <>
  <Head>
    <title>next-blog</title>
  </Head>
    <Link href="/posts">
      <a>posts</a>
    </Link>
    <Posts />
    <style jsx>{`
      a {
        color: green;
      }
    `}</style>
  </>
  )
}
