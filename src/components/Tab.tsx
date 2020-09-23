import { FC } from 'react'
import Link from 'next/link'

type Props = {
  href: string
}

const Tab: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button>{children}</button>
    </Link>
  )
}

export default Tab
