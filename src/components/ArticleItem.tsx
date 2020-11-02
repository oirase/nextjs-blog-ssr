import { FC } from 'react'
import Link from 'next/link'
import PostsType from '~/types/post'
import styles from '~/styles/item'

const ArticleItem: FC<PostsType> = ({ id, title, date, category, image }) => (
  <div className="item">
  { console.log('ArticleItem') }
    <div className="item__contents">
      <Link href={`/article/${id}`}>
        <a className="item__link">
          <div className="item__image-view">
            <img className="item__image" src={`/images/article/${image}`} />
          </div>
          <ul className="item__info">
            <li className="item__title">{title}</li>
            <li className="item__date">{date}</li>
            <li className="item__category">
              <Link href={`/category/${category}`}>
                <a className="item__category--link">{category}</a>
              </Link>
            </li>
          </ul>
        </a>
      </Link>
    </div>
    <style jsx>{styles}</style>
  </div>

)

export default ArticleItem
