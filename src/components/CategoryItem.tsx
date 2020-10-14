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
    <div className="item__info">
      <p className="item__title">{name}</p>
    </div>
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
            text-align: center;
            padding: 4rem 0;
          }

          &__title {
            margin-bottom: 1.5rem;
            line-height: 1.9;
            color: ${skyblue};
            background: ${white};
            font-size: 1.4rem;
            //padding: 2rem 2.5rem;
            padding: 0.6rem 1.5rem;
            border-radius: 5px;
            display: inline-block;
          }
        }

    `}</style>
    </div>

)

export default CategoryItem


