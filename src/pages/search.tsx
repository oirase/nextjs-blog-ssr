import Link from 'next/link'
import Layout from '~/components/Layout'
import { getAllPostsData } from '~/lib/posts'
import { useRef, useState } from 'react'

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

  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.find(data=>{
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
    //setSearchResult(result)
  }

  return (
    <Layout>
      <p>search page</p>
        <input
          type="text"
          ref={inputSearch}
        />
      <button onClick={handleSearch}>検索</button>
      <ul>
        {searchResult.length ?
          searchResult.map(({ id, date, title, category }) => (
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
        )) :
        <li>none</li>}
      </ul>
    </Layout>
  )
}

export default Search
