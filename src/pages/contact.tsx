import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import ContactForm from '~/components/ContactForm'
import Layout from '~/components/Layout'
import Loader from '~/components/Loader'
import contactFormType from '~/types/contactForm'

const Contact = () => {

  const [state, setState] = useState<contactFormType | null>(null)
  const { data, error } = useSWR(state ? '/api/contact' : null, ()=> fetcher(state), {
    revalidateOnFocus: false
  })

  const fetcher =  async (data: contactFormType) => {
    const url = '/api/contact'
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
        <p className="result-info__text">送信が完了しました</p>
        <Link　href="/">
          <a>トップページ</a>
        </Link>
        <style jsx>{`
          .result-info__text {
            margin-bottom: 2rem;
          }
      `}</style>
      </>

  const errorMessage = <p>お問い合わせの送信に失敗しました。しばらく時間を置いてから再度お試し下さい。</p>

  return (
    <Layout padding='5rem 0 2rem 0' >
      { !data ? <ContactForm onSubmit={handleClick} /> : null }
      <div className="result-info">
      { error ? errorMessage　
              : !state ? null
                       : data ? complete
                              : <Loader /> }
      </div>
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


