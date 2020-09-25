import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Index = ({ allPostsData, glovalValue }) => {
  return (
    <Layout>
      <p>New Page</p>
      <p>{glovalValue}</p>
      <ul>
        {allPostsData.map(({ id, date, title, category }) => (
          <li key={id}>
            <Link href={`/articles/${id}`}>
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
