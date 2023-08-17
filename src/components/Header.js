import React from "react";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

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
            <h1>Build the Community Your Fans Will Love</h1>
            <p>
              asdsadsadsadashdasljkdals jdlasdsadasdjasbdbcfufh
              adasdasdasdsadsadasdsadsadfa-stacksdasda
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
