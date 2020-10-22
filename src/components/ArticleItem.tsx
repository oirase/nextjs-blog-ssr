import { FC } from 'react'
import Link from 'next/link'
import PostsType from '~/types/post'
import { white, skyblue, linkColor } from '~/styles/variables'

const ArticleItem: FC<PostsType> = ({ id, title, date, category, image }) => (

  <div className="item">
    <Link href={`/article/${id}`}>
    <a>
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
          <a className="item__category--link">{category}</a>
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
          background: ${skyblue};
          position: relative;
          cursor: pointer;

          &:last-child {
            margin-bottom: auto;
          }

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: ${white};
            opacity: 0;
            z-index: 100;
          }

          &:hover::before {
            opacity: .3;
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

          &__category--link {
            color: ${linkColor};

            &:hover {
              text-decoration: underline;
            }
          }
        }

    `}</style>
    </div>

)

export default ArticleItem


