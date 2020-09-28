import Link from 'next/link'
import { useRef, useState } from 'react'
import Layout from '~/components/Layout'
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
  const [searchResult, setSearchResult] = useState(null)
  console.log(allPostsData)
  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.filter((data) => {
      const { id, ...rest } = data
      for (const key of Object.keys(rest)) {
        console.log(key)
        console.log(typeof rest[key])
        console.log('rest', rest)
        if (rest[key].includes(searchWord)) {
          return true
        }
      }
    })
    console.log('result', result)
    result && setSearchResult(result)
  }

  let result

  if (!searchResult) {
    result = <p>検索語句を入力して下さい</p>
  } else {
    result = <p>`検索結果${searchResult.length}件`</p>
  }

  return (
    <Layout>
      <p>search page</p>
      <input type="text" ref={inputSearch} />
      <button onClick={handleSearch}>検索</button>
      {result}
      {searchResult && searchResult.length ? (
        searchResult.map(({ id, date, title, category }) => (
          <ul key={id}>
            <li>
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
          </ul>
        ))
      ) : (
        <p>none</p>
      )}
    </Layout>
  )
}

export default Search
