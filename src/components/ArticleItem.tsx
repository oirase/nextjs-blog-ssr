import { FC } from 'react'
import Link from 'next/link'
import PostsType from '~/types/post'
import { skyblue, linkColor } from '~/styles/variables'

const ArticleItem: FC<PostsType> = ({ id, title, date, category, image }) => (
  <>
    <div className="item">
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
    </div>
    <style jsx>{`
      .item {
        margin-bottom: 4rem;
        font-size: 1.8rem;
        border-radius: 18px;
        overflow: hidden;
        position: relative;
        color: white;
        background: white;
        cursor: pointer;

        &:last-child {
          margin-bottom: auto;
        }

        &__contents {
          width: 27rem;
          background: ${skyblue};

          &::before {
            content: '';
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: ${skyblue};
          }

          &:hover {
            opacity: 0.7;
          }
        }

        %item__list {
          margin-bottom: 1.5rem;
          line-height: 1.9;
          color: white;
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

        &__link {
          text-decoration: none;
        }

        &__info {
          font-size: 1.4rem;
          text-align: center;
          padding: 2rem 2.5rem 3.5rem 2.5rem;
          //padding: 2rem 0 3.5rem 0;
          background: ${skyblue};
          position: relative;
          z-index: 1;
        }

        &__title {
          @extend %item__list;
        }

        &__date {
          @extend %item__list;
        }

        &__category--link {
          color: ${yellow};
          text-decoration: none;


          &:hover {
            text-decoration: underline;
          }
        }
      }
    `}</style>
  </>
)

export default ArticleItem
