import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  margin: 30px auto;
  filter: drop-shadow(5px 10px 4px rgba(0,0,0,0.5));

  :before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    border-bottom: 2px solid var(--dark-gray);
    bottom: 0;
  }

  .crewmate-image {
    height: 200px;
    max-width: 100%;
  }

  @media screen and (min-width:768px) {
    position: absolute;
    bottom: 0;
    margin: 0;
    width: 100%;
    z-index: 0;
    .crewmate-image {
      height: 500px;
    }

    :before {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    position: static;

    .crewmate-image {
      height: 700px;
    }
  }
`;