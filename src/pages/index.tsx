import Link from 'next/link'
import Layout from '~/components/Layout'
import { getPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch } from '~/components/Context'
import ItemList from '~/components/ItemList'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ArticleItem from '~/components/ArticleItem'
import PostType from '~/types/post'
import { useState } from 'react'
import { yellow, md } from '~/styles/variables'
//import dotenv from 'dotenv'

//dotenv.config()

export async function getStaticProps () {
  const allPostsData = getPostsData(({ id, title, category, date, image })=>{
  return {
    id,
    title,
    category,
    date,
    image
  }})

  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: PostType[]
}

const Index = ({ allPostsData }: Props) => {

  const [offset, setOffset] = useState(1)

  return (
    <Layout>
    <p>{ENV_GMAIL_PASS}</p>
      <Paginate
        offset={offset}
        length={allPostsData.length}
        setOffset={setOffset}
      />
      <ItemList>
        <ListRender
          data={allPostsData}
          offset={offset}
          render={
            (data)=>
              <ArticleItem {...data} />
          }
        />
      </ItemList>
    </Layout>
  )
}

export default Index
