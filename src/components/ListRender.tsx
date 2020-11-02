import { ReactNode, FC } from 'react'
import ItemType from '~/types/item'

type Props = {
  render: (props: ItemType) => ReactNode
  data: ItemType[]
  offset?: number
  range?: number
}

const ListRender: FC<Props> = ({ render, data, offset, range }) => {
  const start = offset * range - range
  const end = offset * range

  console.log('ListRender')

  return <>{data.slice(start, end).map((props) => render(props)')}</>
}

ListRender.defaultProps = {
  range: 24,
  offset: 1,
}

export default ListRender
