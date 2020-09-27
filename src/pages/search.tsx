import Link from 'next/link'
import Layout from '~/components/Layout'
import { getPostData } from '~/lib/posts'
import { useRef } from 'react'

const Search = () => {

  const inputSearch = useRef()

  const handleSearch = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ id: 10 })
    }
    fetch('api/getSearch', requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
        }
      )
    event.preventDefault()
  }

  return (
    <Layout>
      <p>search page</p>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          ref={inputSearch}
        />
      <button type="submit">検索</button>
      </form>
    </Layout>
  )
}

export default Search
