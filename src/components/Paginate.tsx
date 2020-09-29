type Props = {
  offset: number
  length: number
  range: number
}

const Paginate = ({ offset, length, range, setOffset }) => {
  const totalPage = Math.ceil(length / range)
  const list = []

  for (let i = 1; i <= totalPage; ++i) {
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
