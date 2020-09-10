//import * as React from 'react'
import { GetServerSideProps } from 'next'
import serverSideProps from '~/lib/serverSideProps'

interface Props {
  server: string
  stars: number
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()

  return {
    props: {
      server: context.params,
      stars: json.stargazers_count,
    },
  }
}

const App = ({ server, stars }: Props) => {
  /*
  const sendData = async() = {
    await fetch()
  }
*/
  return (
    <>
      <h1>studySearch</h1>
      <p>server: {server && server}</p>
      <p>stars: {stars && stars}</p>
      {/*<p onClick={sendDtata}>send</p>*/}
    </>
  )
}

export default App
