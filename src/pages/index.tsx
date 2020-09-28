import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch,
} from '~/components/Context'
import ArticleItem from '~/components/ArticleItem'
import { PostMetaType } from '~/types/post'
import ReactPaginate from 'react-paginate'

/*
Copyright (c) 2016 Adèle Delamarche
Released under the MIT license
https://github.com/AdeleD/react-paginate/blob/master/LICENSE
*/

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type Props = {
  allPostsData: PostMetaType[]
}

const Index = ({ allPostsData }: Props) => {
  return (
    <Layout>
      <ReactPaginate
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
      <p>New Page</p>
      {allPostsData.map(({ id, ...rest }) => (
        <ArticleItem key={id} id={id} {...rest} />
      ))}
    </Layout>
  )
}

export default Index
