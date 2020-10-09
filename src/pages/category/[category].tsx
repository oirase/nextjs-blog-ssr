import Link from 'next/link'
import { useState } from 'react'
import Layout from '~/components/Layout'
import { getPostsData, getPostsSingleData } from '~/lib/posts'
import PostType from '~/types/post'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import Contents from '~/components/Contents'

export async function getStaticPaths() {

  let allPostsCategory = getPostsSingleData(({ category, url }) => {
    return url ?? category
  })
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
  const allPostsData = getPostsData(({ id, title, category, date, image, url })=>{
  if (!url) {
    return {
      id,
      title,
      category,
      date,
      image
    }
  } else {
    return {
      id,
      title,
      category,
      date,
      image,
      url
    }
  }})

  const categoryPostsData = allPostsData.filter(({ category, url }) =>
    category === params.category || url === params.category)
  return {
    props: {
      categoryPostsData
    }
  }
}

type Props = {
  categoryPostsData: PostType[]
}

const Category = ({ categoryPostsData }: Props) => {

  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <Paginate
              offset={offset}
              length={categoryPostsData.length}
              setOffset={setOffset}
            />
      <Contents>
        <ListRender
          data={categoryPostsData}
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

export default Category
