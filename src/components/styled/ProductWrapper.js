import styled from 'styled-components';

export const ProductWrapper = styled.div`
.card {
  min-height: 500px;
  max-height: 550px;
  border-color: transparent;
  transition: all .5s linear;
}

.card-footer {
  bottom: 0;
  background: transparent;
  border-top: transparent;
  transition: all .5s linear;
}

&:hover {
  .card {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .card-footer {
    background: rgba(247, 247, 247);
  }
}

.img-container {
  position: relative;
  overflow: hidden;
}

.card-img-top {
  transition: all .5s linear;
}

.img-container:hover .card-img-top {
  transform: scale(1.2);
}
`;
