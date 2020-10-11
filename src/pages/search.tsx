import Link from 'next/link'
import { useRef, useState, KeyboardEvent } from 'react'
import Layout from '~/components/Layout'
import ItemList from '~/components/ItemList'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import { getPostsData } from '~/lib/posts'
import PostType from '~/types/post'


export async function getStaticProps () {
  const allPostsData = getPostsData(({ id, title, category, date, image, content })=>{
  return {
    id,
    title,
    category,
    date,
    image,
    content
  }})

  return {
    props: {
      allPostsData
    }
  }
}

const Search = ({ allPostsData }) => {

  const inputSearch = useRef(null)
  const [searchResult, setSearchResult] = useState<PostType[] | null>(null)
  const [offset, setOffset] = useState(1)

  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.filter(data=>{
      const {id, ...rest} = data
      for (let key of Object.keys(rest)) {
        if(rest[key].includes(searchWord)) {
          return true
        }
      }
    })
    result && setSearchResult(result)
  }

  const keyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Layout>
      <div className="searchBox">
        <input
          type="text"
          ref={inputSearch}
          onKeyPress={keyPress}
          autoFocus
        />
        <button onClick={handleSearch}>検索</button>
      </div>
      <div className="SearchResult">
      {searchResult
        ? <p>検索結果{searchResult.length}件</p>
        : <p>検索語句を入力して下さい</p>
      }
      </div>
      {searchResult && searchResult.length &&
          <>
            <Paginate
              offset={offset}
              length={searchResult.length}
              setOffset={setOffset}
            />
            <ItemList>
              <ListRender
                data={searchResult}
                offset={offset}
                render={
                  (data)=>
                    <ArticleItem {...data} />
                }
              />
            </ItemList>
          </>
      }
    </Layout>
  )
}

export default Search
