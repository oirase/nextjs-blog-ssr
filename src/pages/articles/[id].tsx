import Head from 'next/head'
import Layout from '~/components/Layout'
import { getAllPostIds, getPostData } from '~/lib/posts'

export async function getStaticPaths() {
  //const paths = getAllPostIds()
  const paths = ['teast-a', 'test-b'].map(path => {
    return {
      params: {
        id: path
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  //const postData = await getPostData(params.id)
  const postData = params
  return {
    props: {
      postData
    }
  }
}

const Article = ({ postData }) => {

  console.log(postData)

  return (
    <Layout>
      <p>article</p>
      {/*<Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />it commiy
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <br />
      {postData.category} */}
    </Layout>
  )
}

export default Article
