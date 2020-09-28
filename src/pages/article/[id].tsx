import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '~/components/Layout'
import { getAllPostIds, getPostData } from '~/lib/posts'
import { useActiveArticleDispatch } from '~/components/Context'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const Article = ({ postData }) => {

  const router = useRouter()
  const dispatch = useActiveArticleDispatch()
  dispatch({ payload: router.query.id })

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <ul>
        <li>{postData.title}</li>
        <li>{postData.date}</li>
        <li>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </li>
        <li>
          <Link href={`/category/${postData.category}`}>
            <a>{postData.category}</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Article
