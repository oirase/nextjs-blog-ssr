import { FC } from 'react'
import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import ItemList from '~/components/ItemList'
import ListRender from '~/components/ListRender'
import category from '~/lib/category'
import CategoryType from '~/types/category'
import CategoryItem from '~/components/CategoryItem'

export const getStaticProps: GetStaticProps = async () => {
  //let allPostsCategory = getPostsSingleData(({ category }) => category)

  //allPostsCategory = Array.from(new Set(allPostsCategory))

  return {
    props: {
      category,
    },
  }
}

type Props = {
  category: CategoryType[]
}

const Category: FC<Props> = ({ category }) => {
  return (
    <Layout>
      { console.log('CategoryIndexPage') }
      <ItemList>
        <ListRender
          data={category}
          render={(data: CategoryType) => <CategoryItem {...data} />}
        />
      </ItemList>
    </Layout>
  )
}

export default Category
