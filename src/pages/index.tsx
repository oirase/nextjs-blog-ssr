import Head from 'next/head'
import Link from 'next/link'
import Posts from './posts'
import Layout from '../../components/layout'

export default () => {
  return (
  <>
  <Layout>
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
    </Layout>
  </>
  )
}
