import Head from 'next/head'
import { useRef, useState, KeyboardEvent, FC } from 'react'
import { GetStaticProps } from 'next'
import Layout from '~/components/Layout'
import PageTitle from '~/components/PageTitle'
import ItemList from '~/components/ItemList'
import ArticleItem from '~/components/ArticleItem'
import Paginate from '~/components/Paginate'
import ListRender from '~/components/ListRender'
import { getPostsData } from '~/lib/posts'
import PostType from '~/types/post'
import { yellow, darkbrown, fontBase } from '~/styles/variables'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPostsData(
    ({ id, title, category, date, image, content }) => {
      return {
        id,
        title,
        category,
        date,
        image,
        content,
      }
    }
  )

  return {
    props: {
      allPostsData,
    },
  }
}

type Props = {
  allPostsData: PostType[]
}

const Search: FC<Props> = ({ allPostsData }) => {
  const inputSearch = useRef(null)
  const [searchResult, setSearchResult] = useState<PostType[] | null>(null)
  const [offset, setOffset] = useState(1)

  const handleSearch = () => {
    const searchWord = inputSearch.current.value
    const result = allPostsData.filter((data) => {
      const { id, ...rest } = data
      for (const key of Object.keys(rest)) {
        if (rest[key].includes(searchWord)) {
          return true
        }
      }
    })
    result && setSearchResult(result)
  }

  const keyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Layout>
      <PageTitle>Search</PageTitle>
      <div className="search">
        <div className="search__box">
          <input
            type="text"
            className="search__input"
            ref={inputSearch}
            onKeyPress={keyPress}
            autoFocus
          />
          <button className="search__button" onClick={handleSearch}>
            検索
          </button>
        </div>
        <div className="search__result">
          {searchResult ? (
            <p>{searchResult.length} search results</p>
          ) : (
            <p>please enter a search term</p>
          )}
        </div>
      </div>
      {searchResult && searchResult.length && (
        <>
          <Paginate
            offset={offset}
            length={searchResult.length}
            setOffset={setOffset}
          />
          <ItemList>
            <ListRender
              data={searchResult}
              offset={offset}
              render={(data) => <ArticleItem {...data} />}
            />
          </ItemList>
        </>
      )}
      <style jsx>{`
        .search {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          padding: 3rem 0;

          &__box {
            border: 1px solid ${darkbrown};
            height: 3.3rem;
            display: flex;
            border-radius: 4px;
            over-flow: hidden;
          }

          &__input {
            background: white;
            display: block;
            width: 17rem;
            padding: 2px 4px;
            height: 100%;
          }

          &__button {
            background: ${darkbrown};
            display: block;
            width: 9rem;
            color: ${yellow};
            height: 100%;
            font-size: 1.8rem;
            font-family: Georgia, ${fontBase};
          }
        }
      `}</style>
    </Layout>
  )
}

export default Search
