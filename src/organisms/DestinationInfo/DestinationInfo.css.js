import styled from 'styled-components';

export const Wrapper = styled.div`
  .title {
    background-color: red;
  }

  .container {
    width: 80%;
    margin: auto;
  }
  .container-1 {
    border-bottom: 1px solid var(--dark-gray);
    padding: 20px 0 40px;

    h3 {
      padding-bottom: 20px;
    }
  }

  .container-2 {
    padding: 40px 0 0;

    
  }

  .data-section {
    padding-bottom: 30px;

    p {
      padding-bottom: 15px;
    }
  }

  @media screen and (min-width: 768px) {
    
    .container {
      width: 70%;
    }

    .container-2 {
      display: flex;
      justify-content: space-around;
    }
  }

`;