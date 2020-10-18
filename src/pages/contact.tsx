import { useState } from 'react'
import useSWR from 'swr'
import ContactForm from '~/components/ContactForm'
import Layout from '~/components/Layout'



const Contact = () => {

  const [state, setState] = useState(false)
  const { data, error } = useSWR(state ? '/api/contact' : null, ()=> fetcher())

  const fetcher =  async () => {
    const data = {
      test: 'swr-test'
    }
    const url = '/api/contact'
    //const data = { test: "api-test" }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await res.json()
    console.log(json)
    return json
  }


  const setData = async (data) => {
    /*
    const url = '/api/contact'
    //const data = { test: "api-test" }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log(json)
    setState(true)
    */
  }

  const handleClick = (data) => {
    setState(true)
  }

  const complete =
    <div>
      <p>送信が完了しました</p>
    </div>

  const loading =
    <div>
      <p>送信中...</p>
    </div>

  return (
    <Layout>
      { error && <p>error</p>}
      { data ? complete : loading }
      { !state ? <ContactForm onSubmit={handleClick} /> : null }
    </Layout>
  )
}

export default  Contact


