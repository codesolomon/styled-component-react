import {
  StyledHeader,
  Nav,
  Logo,
  Image,
} from "../components/styles/Header.styled";
import { Container } from "../components/styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love </h1>

            <p>
              Huddles re-imagines the way we build communities. You have a
              voice, but so does your audience. Create connections with your
              users as you engage in genuine discussion
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>

    // for props
    // <StyledHeader bg="red">
    //  </StyledHeader>
  );
};

export default Header;