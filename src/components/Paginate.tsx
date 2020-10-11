import { FC } from 'react'
import css from 'styled-jsx/css'
import { fontBase,
         yellow,
         darkbrown
      } from '~/styles/variables'

type Props = {
  offset: number
  length: number
  range: number
}

type LiType = {
  active: boolean
}

const scoped = css.resolve`
.paginate__li {
    display: flex;
    justify-content: center;
    margin: 0 1.5rem 1.5rem 0;
    align-items: center;
    background: ${darkbrown};
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
}
`

const Li: FC<any> = ({ children, active, ...rest }) => (
  <li  className={`paginate__li${active ? '--active' : ''}`} {...rest}>
    {children}
    <style jsx>{`
      .paginate__li {
          display: flex;
          justify-content: center;
          margin: 0 1.5rem 1.5rem 0;
          align-items: center;
          background: ${darkbrown};
          border-radius: 100%;
          height: 4rem;
          width: 4rem;
          cursor: pointer;

          &--active {
            @extend .paginate__li;
            background: ${yellow};
            border: 1px solid ${darkbrown};
            color: ${darkbrown};
          }
      }
    `}</style>
  </li>
)

const Paginate = ({ offset, length, range, setOffset }) => {

  const totalPage = Math.ceil(length / range)
  if (totalPage === 1) return null
  const start = offset < 10 ? 1 : Math.floor(offset / 10) * 10
  let end = start === 1 ? start + 9 : start + 10
  if (end > totalPage) end = totalPage
  const list = []

  for (let i=start; i<=end; ++i) {
    i === offset
      ? list.push(<Li active={true}>{i}</Li>)
      : list.push(<Li onClick={()=>setOffset(i)}>{i}</Li>)
  }

  start !== 1 && list.unshift(<Li onClick={()=>setOffset(1)}>1</Li>)
  end !== totalPage && list.push(<Li onClick={()=>setOffset(totalPage)}>{totalPage}</Li>)

  offset !== 1 && list.unshift(<Li onClick={()=>setOffset(offset - 1)}>&#9664;</Li>)
  offset !== end && list.push(<Li onClick={()=>setOffset(offset + 1)}>&#9654;</Li>)

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
  range: 24,
  offset: 1
}

export default Paginate
