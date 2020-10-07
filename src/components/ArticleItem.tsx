import { FC } from 'react'
import Link from 'next/link'
import { PostMetaType } from '~/types/post'
import { green } from '~/styles/variables'

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
      $blue: blue;
      li {
        color: $blue;
        background: ${green};
      }

  `}</style>
  </ul>
)

export default ArticleItem


