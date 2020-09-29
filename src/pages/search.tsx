import Link from 'next/link'
import { useRef, useState } from 'react'
import Layout from '~/components/Layout'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import { getAllPostsData } from '~/lib/posts'
import { PostMetaType } from '~/types/post'

export function getStaticProps() {
  const allPostsData = getAllPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Search = ({ allPostsData }) => {
  const inputSearch = useRef(null)
  const [searchResult, setSearchResult] = useState<PostMetaType[] | null>(null)
  const [offset, setOffset] = useState(1)

  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.filter((data) => {
      const { id, ...rest } = data
      for (const key of Object.keys(rest)) {
        if (rest[key].includes(searchWord)) {
          return true
        }
      }
    })
    result && setSearchResult(result)
  }

  return (
    <Layout>
      <p>search page</p>
      <input type="text" ref={inputSearch} />
      <button onClick={handleSearch}>検索</button>
      {searchResult ? (
        <p>検索結果{searchResult.length}件</p>
      ) : (
        <p>検索語句を入力して下さい</p>
      )}
      {searchResult && searchResult.length && (
        <>
          <Paginate
            offset={offset}
            length={searchResult.length}
            setOffset={setOffset}
          />
          <ListRender
            data={searchResult}
            offset={offset}
            render={(data) => <ArticleItem {...data} />}
          />
        </>
      )}
    </Layout>
  )
}

export default Search
