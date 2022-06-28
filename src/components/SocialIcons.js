import { FaTwitter, FaFacebook, FaApple } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://Twitter.com/">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://Facebook.com/">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://LinkedIn.com/">
          <FaApple />
        </a>
      </li>
    </StyledSocialIcons>
  );
};
