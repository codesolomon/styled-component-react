import { SocialIcons } from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dolorem animi ea amet tempore illum veniam quisquam ab adipisci
              repellat dolorum sit, odio eveniet sed? Commodi dolorem doloribus
              et iusto?
            </li>
            <li>+1-543-123-4567</li>
            <li>example@example.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2022 Athelstan. All rights reserved </p>
      </Container>
    </StyledFooter>
  );
};
