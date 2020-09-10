export default function Post({ data }) {
  return <p>{data}</p>
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: 'apple',
      },
    },
    {
      params: {
        id: 'melon',
      },
    },
    {
      params: {
        id: 'banana',
      },
    },
  ]
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      data: 'path test',
    },
  }
}
