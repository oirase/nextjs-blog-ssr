import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Index = ({ allPostsData }) => {
  const state = useActiveArticleState()
  const dispatch = useActiveArticleDispatch()

  return (
    <Layout>
      <p>New Page</p>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch('ssg-ssr')
        }}
      >
        post
      </button>
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
