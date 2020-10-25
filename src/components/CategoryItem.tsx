import { FC } from 'react'
import Link from 'next/link'
import CategoryType from '~/types/category'
import { skyblue } from '~/styles/variables'
import styles from '~/styles/item'

const CategoryItem: FC<CategoryType> = ({ name, image }) => (
  <div className="item">
    <div className="item__contents">
      <Link href={`/category/${name}`}>
        <a className="item__link">
          <div className="item__image-view">
            <img className="item__image" src={`/images/category/${image}`} />
          </div>
          <p className="item__category--link">{name}</p>
        </a>
      </Link>
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default CategoryItem
