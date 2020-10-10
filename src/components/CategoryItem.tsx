import { FC } from 'react'
import Link from 'next/link'
import CategoryType from '~/types/category'
import { white, skyblue } from '~/styles/variables'

const CategoryItem: FC<CategoryType> = ({ name, image }) => (

  <div className="item">
    <Link href={`/category/${name}`}>
    <a>
    <div className="item__image-view">
      <img className="item__image" src={`/images/category/${image}`} />
    </div>
    <ul className="item__info">
      <li className="item__title">
          {name}
      </li>
    </ul>
      </a>
      </Link>
      <style jsx>{`
        .item {
          width: 27rem;
          background: ${skyblue};
          margin-bottom: 4rem;
          font-size: 1.8rem;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          color: white;

          &:last-child {
            margin-bottom: auto;
          }

          %item__list {
            margin-bottom: 1.5rem;
            line-height: 1.9;

          }

          &__image-view {
            width: 100%;
            height: 18rem;
            overflow: hidden;
            position: relative;
          }

          &__image {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
          }

          &__info {
            font-size: 1.4rem;
            text-align: center;
            padding: 2rem 2.5rem 3.5rem 2.5rem;
          }

          &__title {
            @extend %item__list;
          }
        }

    `}</style>
    </div>

)

export default CategoryItem


