import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import { PostMetaType } from '~/types/post'

export function getStaticProps() {
  const allPostsData = getSortedPostsData()
  let allPostsCategory = allPostsData.map(({ category }: PostMetaType) => category)
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
