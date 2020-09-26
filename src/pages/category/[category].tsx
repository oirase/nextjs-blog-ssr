import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import { PostMetaType } from '~/types/post'

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

  return (
    <Layout>
      <p>category page</p>
      <ul>
          {categoryPostsData.map(({ id, date, title, category }) => (
            <li key={id}>
            <Link href={`/article/${id}`}>
              <a>{title}</a>
            </Link>
              <br />
              {id}
              <br />
              {date}
              <br />
              {category}
            </li>
          ))}
        </ul>
    </Layout>
  )
}

export default Category
