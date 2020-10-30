import { ReactNode, FC } from 'react'

type Props = {
  render: (props: any) => ReactNode
  data: any[]
  offset?: number
  range?: number
}

const ListRender: FC<Props> = ({ render, data, offset, range }) => {
  const start = offset * range - range
  const end = offset * range

  return <>{data.slice(start, end).map((props) => render(props))}</>
}

ListRender.defaultProps = {
  range: 24,
  offset: 1,
}

export default ListRender
