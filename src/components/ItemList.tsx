import { FC } from 'react'
import { yellow, md } from '~/styles/variables'

const ItemList: FC = ({ children }) => (
  <div className="item-list">
    { console.log('ItemList') }
    {children}
    <style jsx>{`
      %item--base {
        width: 27rem;
      }

      .item-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 3rem 2rem 2rem 2rem;
        //background: ${yellow};

        &:before,
        &:after {
          @extend %item--base;
          content: '';
          display: block;
          height: 0;
        }

        &:before {
          order: 1;
        }

        &:after {
          order: 0;

          @media (${md}) {
            width: 26rem;
          }
        }
      }
    `}</style>
  </div>
)

export default ItemList
