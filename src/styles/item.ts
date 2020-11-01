import css from 'styled-jsx/css'
import { skyblue, yellow } from '~/styles/variables'

const itemStyles = css`
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
`

export default itemStyles
