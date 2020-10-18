import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import ContactForm from '~/components/ContactForm'
import Layout from '~/components/Layout'

type contactFormType = {
  name: string
  email: string
  subject: string
  body: string
}

const Contact = () => {

  const [state, setState] = useState<contactFormType | null>(null)
  const { data, error } = useSWR(state ? '/api/contact' : null, ()=> fetcher(state), {
    revalidateOnFocus: false
  })

  const fetcher =  async (data: contactFormType) => {
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

  const handleClick = (data: contactFormType) => {
    setState(data)
  }

  const complete = <>
        <p>送信が完了しました</p>
        <Link　href="/">
          <a>トップページ</a>
        </Link>
      </>

  const loading = <p>送信中...</p>

  return (
    <Layout>
      <div className="result-info">
      { error && <p>error</p>}
      </div>
      { !state ? null
               : data ? complete
                      : loading }
      { !data ? <ContactForm onSubmit={handleClick} /> : null }
      <style jsx>{`
        .result-info {
          text-align: center;
          padding: 2rem 0;
          line-height: 2;
        }
      `}</style>
    </Layout>
  )
}

export default  Contact


