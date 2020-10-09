import Link from 'next/link'
import Layout from '~/components/Layout'
import { getPostsSingleData } from '~/lib/posts'
import PostType from '~/types/post'

export function getStaticProps() {
  let allPostsCategory = getPostsSingleData(({ category, url })=>{
    return url ?? category
  })

  allPostsCategory = Array.from(new Set(allPostsCategory))
  return {
    props: {
      allPostsCategory
    }
  }
}

type Props = {
  allPostsCategory: string[]
}

const Category = ({ allPostsCategory }: Props) => {

  return (
    <Layout>
      <ul>
      {allPostsCategory.map(category => (
        <li key={category}>
          <Link href={`/category/${category}`}>
            <a>{category}</a>
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

export default Category
