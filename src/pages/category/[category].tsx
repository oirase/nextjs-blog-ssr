import { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react'
import Layout from '~/components/Layout'
import PageTitle from '~/components/PageTitle'
import { getPostsData, getPostsSingleData } from '~/lib/posts'
import PostType from '~/types/post'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ItemList from '~/components/ItemList'

export const getStaticPaths: GetStaticPaths = async () => {
  let allPostsCategory = getPostsSingleData(({ category }) => category)
  allPostsCategory = Array.from(new Set(allPostsCategory))
  const paths = allPostsCategory.map((category) => {
    return {
      params: {
        category,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getPostsData(({ id, title, category, date, image }) => {
    return {
      id,
      title,
      category,
      date,
      image,
    }
  })

  const categoryPostsData = allPostsData.filter(
    ({ category }) => category === params.category
  )
  return {
    props: {
      categoryPostsData,
    },
  }
}

type Props = {
  categoryPostsData: PostType[]
}

const Category: FC<Props> = ({ categoryPostsData }) => {
  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <PageTitle>{categoryPostsData[0].category} | Category</PageTitle>
      <Paginate
        offset={offset}
        length={categoryPostsData.length}
        setOffset={setOffset}
      />
      <ItemList>
        <ListRender
          data={categoryPostsData}
          offset={offset}
          render={(data) => <ArticleItem {...data} />}
        />
      </ItemList>
    </Layout>
  )
}

export default Category
