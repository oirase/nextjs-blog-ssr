import { FC } from 'react'
import Link from 'next/link'
import { PostMetaType } from '~/types/post'

const ArticleItem: FC<PostMetaType> = ({ id, title, date, category }) => (
  <ul>
    <li>
      <Link href={`/article/${id}`}>
        <a>{title}</a>
      </Link>
    </li>
    <li>{date}</li>
    <li>
      <Link href={`/category/${category}`}>
        {category}
      </Link>
    </li>
    <style jsx>{`
      $red: red;
      li {
        color: red;
        background: red;
      }

  `}</style>
  </ul>
)

export default ArticleItem


