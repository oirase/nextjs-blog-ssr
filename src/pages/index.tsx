import Link from 'next/link'
import Layout from '~/components/Layout'
import { getSortedPostsData } from '~/lib/posts'
import {
  useActiveArticleState,
  useActiveArticleDispatch } from '~/components/Context'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import ArticleItem from '~/components/ArticleItem'
import { PostMetaType } from '~/types/post'
import { useState } from 'react'
import { yellow, md } from '~/styles/variables'

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: PostMetaType[]
}

const Index = ({ allPostsData }: Props) => {

  const [offset, setOffset] = useState(1)

  return (
    <Layout>
      <Paginate
        offset={offset}
        length={allPostsData.length}
        setOffset={setOffset}
      />
      <p>New Page</p>
      <div className="contents">
        <ListRender
          data={allPostsData}
          offset={offset}
          render={
            (data)=>
              <ArticleItem {...data} />
          }
        />
      </div>
      <style jsx>{`
        %item--base {
          width: 27rem;
        }

        .contents {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 3rem 2rem 2rem 2rem;
          background: ${yellow};


          &:before{
            @extend %item--base;
            content:"";
            display: block;
            height:0;
            order: 1;
          }

          &:after{
            @extend %item--base;
            content:"";
            display: block;
            height:0;
            order: 0;

            @media(${md}) {
              width: 26rem;
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default Index
