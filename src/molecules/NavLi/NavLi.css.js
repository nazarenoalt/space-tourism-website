import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: var(--white);
  }

  a:visited {
    text-decoration: none;
    color: var(--white);
  }

  li {
    margin-bottom: 30px;
    cursor: pointer; 
    
    .order-number {
        margin-right: 7px;
    }
  }
`;