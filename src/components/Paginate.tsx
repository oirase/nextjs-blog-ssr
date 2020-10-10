import { FC } from 'react'
import { fontBase,
         yellow,
         darkbrown
      } from '~/styles/variables'

type Props = {
  offset: number
  length: number
  range: number
}

const Paginate = ({ offset, length, range, setOffset }) => {

  const totalPage = Math.ceil(length / range)
  if (totalPage === 1) return null
  const start = offset < 10 ? 1 : Math.floor(offset / 10) * 10
  let end = start === 1 ? start + 9 : start + 10
  if (end > totalPage) end = totalPage
  const list = []

  for (let i=start; i<=end; ++i) {
    i === offset
      ? list.push(<li className="paginate__li">@{i}</li>)
      : list.push(<li className="paginate__li" onClick={()=>setOffset(i)}>{i}</li>)
  }

  start !== 1 && list.unshift(<li className="paginate__li" onClick={()=>setOffset(1)}>1</li>)
  end !== totalPage && list.push(<li className="paginate__li" onClick={()=>setOffset(totalPage)}>{totalPage}</li>)

  offset !== 1 && list.unshift(<li className="paginate__li" onClick={()=>setOffset(offset - 1)}>PREV</li>)
  offset !== end && list.push(<li className="paginate__li" onClick={()=>setOffset(offset + 1)}>NEXT</li>)

  return (
  <div className="paginate">
    <ul  className="paginate__ul">
      {list}
    </ul>
    <style jsx>{`
      .paginate {
        width: 100%;
        color: ${yellow};
        padding: 4rem 3.5rem 0 5rem;
        background: ${yellow};
        font-family: 'Abril Fatface', ${fontBase};

        &__ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 80rem;
          max-width: 100%;
        }

        &__li {
          display: flex;
          justify-content: center;
          margin: 0 1.5rem 1.5rem 0;
          align-items: center;
          background: ${darkbrown};
          border-radius: 100%;
          height: 4rem;
          width: 4rem;
        }
      }
    `}</style>
  </div>
  )
}

Paginate.defaultProps = {
  range: 20,
  offset: 1
}

export default Paginate
