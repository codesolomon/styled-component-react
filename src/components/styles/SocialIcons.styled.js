import Styled from "styled-components";

export const StyledSocialIcons = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li{
    list-style: none;
  }

  a{
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 0;
    height: 40px;
    width: 40px;
  }
`;
