import Link from 'next/link'
import Layout from '~/components/Layout'
import ItemList from '~/components/ItemList'
import ListRender from '~/components/ListRender'
import category from '~/lib/category'
import CategoryType from '~/types/category'
import CategoryItem from '~/components/CategoryItem'

export function getStaticProps() {
  //let allPostsCategory = getPostsSingleData(({ category }) => category)

  //allPostsCategory = Array.from(new Set(allPostsCategory))

  return {
    props: {
      category
    }
  }
}

type Props = {
  category: CategoryType[]
}

const Category = ({ category }: Props) => {

  return (
    <Layout>
      <ItemList>
        <ListRender
          data={category}
          render={
            (data)=>
              <CategoryItem {...data} />
          }
        />
      </ItemList>
    </Layout>
  )
}

export default Category
