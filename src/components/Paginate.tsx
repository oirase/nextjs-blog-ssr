type Props = {
  offset: number
  length: number
  range: number
}

const Paginate = ({ offset, length, range, setOffset }) => {
  const totalPage = Math.ceil(length / range)
  const start = offset < 10 ? 1 : Math.floor(offset / 10) * 10
  const end = start + 10
  const list = []

  for (let i = start; i <= end; ++i) {
    if (i === offset) {
      list.push(<li>@{i}</li>)
    } else {
      list.push(<li onClick={() => setOffset(i)}>{i}</li>)
    }
  }

  return <ul>{list}</ul>
}

Paginate.defaultProps = {
  range: 20,
  offset: 1,
}

export default Paginate
