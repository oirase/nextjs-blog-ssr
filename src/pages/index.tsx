import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch } from '~/components/Context'

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Index = ({ allPostsData }) => {

  return (
    <Layout>
      <p>New Page</p>
        <ul>
          {allPostsData.map(({ id, date, title, category }) => (
            <li key={id}>
            <Link href={`/article/${id}`}>
              <a>{title}</a>
            </Link>
              <br />
              {id}
              <br />
              {date}
              <br />
              {category}
            </li>
          ))}
        </ul>
    </Layout>
  )
}

export default Index
