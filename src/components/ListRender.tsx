import { ReactNode, FC } from 'react'

type Props = {
  render: (props: any) => ReactNode
  data: any[]
  offset: number
  range: number
}

const ListRender = ({ render, data, offset, range }: Props) => {
  const start = offset * range
  const end = offset * range - range

  return <>{data.slice(start, end).map((props) => render(props))}</>
}

ListRender.defaultProps = {
  range: 20,
  offset: 1,
}

export default ListRender
