import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '~/components/Layout'
import { getAllPostIds, getPostData } from '~/lib/posts'
import { useActiveArticleDispatch } from '~/components/Context'
import { yellow } from '~/styles/variables'

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
  dispatch(router.query.id)

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="article">
        <div className="article__body">
          <h2 className="article__title">{postData.title}</h2>
          <p className="article__date">{postData.date}</p>
          <div className="article__content">
            <p className="article__text" dangerouslySetInnerHTML={{ __html: postData.content }} />
          </div>
            <Link href={`/category/${postData.category}`}>
              <a className="article__tag">{postData.category}</a>
            </Link>
        </div>
      </div>
      <style jsx>{`
        .article {
          background: ${yellow};

          &__ {

          }
        }
      `}</style>
    </Layout>
  )
}

export default Article
