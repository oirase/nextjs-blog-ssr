import * as React from 'react'
import { GetServerSideProps } from 'next'
import serverSideProps from '~/lib/serverSideProps'

interface Props {
  server: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      server: context.params
    }
  }
}

const App: React.FC<Props> = ({ server }) => {
/*
  const sendData = async() = {
    await fetch()
  }
*/
  return (
    <>
      <h1>studySearch</h1>
      <p>{server && server}</p>
      {/*<p onClick={sendDtata}>send</p>*/}
    </>
    )
}


export default App
