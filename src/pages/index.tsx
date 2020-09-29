import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ArticleItem from '~/components/ArticleItem'
import { PostMetaType } from '~/types/post'
import { useState, useEffect } from 'react'

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
  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <Paginate offset={offset} length={60} />
      <p>New Page</p>
      <ListRender
        data={allPostsData}
        offset={offset}
        render={(data) => <ArticleItem {...data} />}
      />
    </Layout>
  )
}

export default Index
