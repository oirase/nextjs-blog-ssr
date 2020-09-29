
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
      ? list.push(<li>@{i}</li>)
      : list.push(<li onClick={()=>setOffset(i)}>{i}</li>)
  }

  start !== 1 && list.unshift(<li onClick={()=>setOffset(1)}>1</li>)
  end !== totalPage && list.push(<li onClick={()=>setOffset(totalPage)}>{totalPage}</li>)

  offset !== 1 && list.unshift(<li onClick={()=>setOffset(offset - 1)}>PREV</li>)
  offset !== end && list.push(<li onClick={()=>setOffset(offset + 1)}>NEXT</li>)

  return (
    <ul>
      {list}
    </ul>
  )
}

Paginate.defaultProps = {
  range: 20,
  offset: 1
}

export default Paginate
