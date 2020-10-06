import Link from 'next/link'
import { useState } from 'react'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import { PostMetaType } from '~/types/post'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData()
  let allPostsCategory = allPostsData.map(({ category }: PostMetaType) => category)
  allPostsCategory = Array.from(new Set(allPostsCategory))
  const paths = allPostsCategory.map(category => {
    return {
      params: {
        category
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData()
  const categoryPostsData = allPostsData.filter(({ category }) => category === params.category)
  return {
    props: {
      categoryPostsData
    }
  }
}

type Props = {
  categoryPostsData: PostMetaType[]
}

const Category = ({ categoryPostsData }: Props) => {

  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <p>category page</p>
      <Paginate
              offset={offset}
              length={categoryPostsData.length}
              setOffset={setOffset}
            />
      <ListRender
        data={categoryPostsData}
        offset={offset}
        render={
          (data)=>
            <ArticleItem {...data} />
        }
      />
    </Layout>
  )
}

export default Category
