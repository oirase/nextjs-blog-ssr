import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'
import ArticleItem from '~/components/ArticleItem'
import { PostMetaType } from '~/types/post'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type Props = {
  allPostsData: PostMetaType[]
}

const Index = ({ allPostsData }: Props) => {
  return (
    <Layout>
      <p>New Page</p>
      {allPostsData.map(({ id, ...rest }) => (
        <ArticleItem key={id} id={id} {...rest} />
      ))}
    </Layout>
  )
}

export default Index
