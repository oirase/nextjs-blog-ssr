import useSWR from 'swr'
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
    }
  }
}

//const fetcher = (...args) => fetch(...args).then(res => res.json());

const App = ({ server, stars }: Props) => {
/*
  const sendData = async() = {
    await fetch()
  }
*/
  const { data, error } = useSWR('https://nextjs-blog-ssr.herokuapp.com/api/hello', fetch)
  if (error) return <div>faild to load</div>
  if (!data) return <div>loading...</div>
    console.log(data)

    return (
      <>
        <h1>studySearch</h1>
        <p>server: {server && server}</p>
        <p>stars: {stars && stars}</p>
        {/*<p>{data.name}!</p>*/}
        {/*<p onClick={sendDtata}>send</p>*/}
      </>
      )
  }


export default App
