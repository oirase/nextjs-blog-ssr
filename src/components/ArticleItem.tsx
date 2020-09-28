import { FC } from 'react'
import Link from 'next/link'
import { PostMetaType } from '~/types/post'

const ArticleItem = ({ id, title, date, category }: PostMetaType) => (
  <ul>
    <li>
      <Link href={`/article/${id}`}>
        <a>{title}</a>
      </Link>
    </li>
    <li>{date}</li>
    <li>
      <Link href={`/category/${category}`}>{category}</Link>
    </li>
  </ul>
)

export default ArticleItem
