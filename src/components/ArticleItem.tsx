import { FC } from 'react'
import Link from 'next/link'
import PostsType from '~/types/post'
import { white, skyblue } from '~/styles/variables'

const ArticleItem: FC<PostsType> = ({ id, title, date, category, image }) => (

  <div className="item">
    <Link href={`/article/${id}`}>
    <a className="item__link">
    <div className="item__image-view">
      <img className="item__image" src={`/images/article/${image}`} />
    </div>
    <ul className="item__info">
      <li className="item__title">
          {title}
      </li>
      <li className="item__date">{date}</li>
      <li className="item__category">
        <Link href={`/category/${category}`}>
          {category}
        </Link>
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
          color: ${white};
          background: ${white};

          &:last-child {
            margin-bottom: auto;
          }

          &__link {

            &:hover {
              opacity: .7;
            }
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
            background: ${skyblue};
          }

          &__title {
            @extend %item__list;
          }

          &__date {
            @extend %item__list;
          }
        }

    `}</style>
    </div>

)

export default ArticleItem


