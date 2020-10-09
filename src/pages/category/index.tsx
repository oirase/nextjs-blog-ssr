import Link from 'next/link'
import Layout from '~/components/Layout'
import Contents from '~/components/Contents'
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
      <Contents>
        <ListRender
          data={category}
          render={
            (data)=>
              <CategoryItem {...data} />
          }
        />
      </Contents>
    </Layout>
  )
}

export default Category
