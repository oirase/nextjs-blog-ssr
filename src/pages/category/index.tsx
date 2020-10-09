import Link from 'next/link'
import Layout from '~/components/Layout'
import { getPostsData } from '~/lib/posts'
import PostType from '~/types/post'

export function getStaticProps() {
  let allPostsCategory = getPostsData(({ category, url })=>{
    if(!url) {
      return {
        category
      }
    } else {
      return {
        category,
        url
      }
    }})

  //allPostsCategory = Array.from(new Set(allPostsCategory))

  let allPostsLink = []

  allPostsCategory.map(a => {
    if(!allPostsLink.some(b => {
      if(!a.url) {
        return b.category === a.category
      } else {
        return b.url === a.url
      }})
    ) {
      allPostsLink.push(a)
    }
  })



  return {
    props: {
      allPostsLink
    }
  }
}

type Props = {
  allPostsLink: PostType[]
}

const Category = ({ allPostsLink }: Props) => {

  return (
    <Layout>
      <ul>
      {allPostsLink.map(({ category, url }) => (
        <li key={category}>
          <Link href={`/category/${url ?? category}`}>
            <a>{category}</a>
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

export default Category
