import { FC } from 'react'
import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import { getPostsData } from '~/lib/posts'
import ItemList from '~/components/ItemList'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ArticleItem from '~/components/ArticleItem'
import PostType from '~/types/post'
import { useState } from 'react'
//import * as env from '~/config/env'
//import dotenv from 'dotenv'

//dotenv.config()

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPostsData(({ id, title, category, date, image }) => {
    return {
      id,
      title,
      category,
      date,
      image,
    }
  })

  return {
    props: {
      allPostsData,
    },
  }
}

type Props = {
  allPostsData: PostType[]
}

const Index: FC<Props> = ({ allPostsData }) => {
  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      { console.log('IndexPage') }
      <Paginate
        offset={offset}
        length={allPostsData.length}
        setOffset={setOffset}
      />
      <ItemList>
        <ListRender
          data={allPostsData}
          offset={offset}
          render={(data) => <ArticleItem {...data} />}
        />
      </ItemList>
    </Layout>
  )
}

export default Index
