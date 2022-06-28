import Styled from "styled-components";

export const StyledHeader = Styled.header`
/* passing props in styledComponent */
    /* background-color: ${(props) => props.bg};
    background-color: ${({ bg }) => bg};*/

    background-color: ${({ theme }) => theme.colors.header};
    padding: 40 0px;


    /* nested StyledComponent */
/*
    h1{
      color: red;

    }
    &:hover{
      background: black;
    } */
`;

export const Nav = Styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0 40px 0;

  @media(max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
  }
`;

export const Logo = Styled.img`
@media(max-width: ${({ theme }) => theme.mobile}){
    margin: 0 0 40px 0;
  }
`;

export const Image = Styled.img`
  width: 375px;
  margin: 0 40px 0 0;

  @media(max-width: ${({ theme }) => theme.mobile}){
    margin: 40px 0 30px;
  }
`;
