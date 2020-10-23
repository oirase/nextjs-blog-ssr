import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '~/components/Layout'
import { getAllPostIds, getPostData } from '~/lib/posts'
import { useActiveArticleDispatch } from '~/components/Context'
import { yellow, md } from '~/styles/variables'

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
    <Layout background="white">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="article">
          <h2 className="article__title">{postData.title}</h2>
          <p className="article__date">{postData.date}</p>
          <div className="article__content">
            <p className="article__text" dangerouslySetInnerHTML={{ __html: postData.content }} />
          </div>
            <Link href={`/category/${postData.category}`}>
              <a className="article__tag">{postData.category}</a>
            </Link>
      </div>
      <style jsx>{`
        .article {
          background: white;
          padding: 3rem 3rem 4.5rem 3rem;
          line-height: 2;
          //min-height: 60rem;
          min-height: 100%;


          @media(${md}){
            padding: 3rem 4rem 4.5rem 4rem;
          }

          &__title {
            margin-bottom: 1rem;
            font-size: 3rem;
            text-align: center;
          }

          &__date {
            margin-bottom: 2rem;
            font-size: 1.6rem;
            text-align: center;
            color: #666;
          }

          &__tag {

          }
        }
      `}</style>
    </Layout>
  )
}

export default Article
