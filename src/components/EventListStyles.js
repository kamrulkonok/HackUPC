import styled from 'styled-components';

export const SliderWrapper = styled.div`
  .slick-slide div {
    margin: 0 10px;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);

    &:before {
      font-size: 20px;
      color: #333;
    }
  }

  .slick-prev {
    left: -45px;
  }

  .slick-next {
    right: -45px;
  }
`;
