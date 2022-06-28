import Styled from "styled-components";

export const Flex = Styled.div`
  display: flex;
  align-items: center;

  h1, p, button{
    margin: 15px 0;
  }

  & > div,
  & > ul {
    flex: 1;

  }

  @media(max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
    text-align: center;
  }

`;
