import Link from 'next/link'
import { useRef, useState } from 'react'
import Layout from '~/components/Layout'
import { getAllPostsData } from '~/lib/posts'
import { PostMetaType } from '~/types/post'

export function getStaticProps () {
  const allPostsData = getAllPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Search = ({ allPostsData }) => {

  const inputSearch = useRef(null)
  const [searchResult, setSearchResult] = useState([])
  console.log(allPostsData)
  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.filter(data=>{
      for (let key of Object.keys(data)) {
        console.log(key)
        console.log( typeof data[key])
        const value = data[key]
        if(value.includes(searchWord)) {
          return true
        }
      }
    })
    console.log(result)
    result && setSearchResult(result)
  }

  return (
    <Layout>
      <p>search page</p>
        <input
          type="text"
          ref={inputSearch}
        />
      <button onClick={handleSearch}>検索</button>
      {searchResult.length ?
          searchResult.map(({ id, date, title, category }) => (
          <ul  key={id}>
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
          )) :
      <p>none</p>}
    </Layout>
  )
}

export default Search
