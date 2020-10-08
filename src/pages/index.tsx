import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch } from '~/components/Context'
import Contents from '~/components/Contents'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ArticleItem from '~/components/ArticleItem'
import { PostMetaType } from '~/types/post'
import { useState } from 'react'
import { yellow, md } from '~/styles/variables'

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: PostMetaType[]
}

const Index = ({ allPostsData }: Props) => {

  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <Paginate
        offset={offset}
        length={allPostsData.length}
        setOffset={setOffset}
      />
      <Contents>
        <ListRender
          data={allPostsData}
          offset={offset}
          render={
            (data)=>
              <ArticleItem {...data} />
          }
        />
      </Contents>
    </Layout>
  )
}

export default Index
