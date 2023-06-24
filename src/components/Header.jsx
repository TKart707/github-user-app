import React from "react";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";

const Header = ({ modeToggle, setModeToggle }) => {

  return (
    <Container>
      <Logo>devfinder</Logo>
      <Mode onClick={() => setModeToggle(!modeToggle)}>
        {modeToggle ? (
          <>
            <Span>light</Span>
            <StyledSunIcon />
          </>
        ) : (
          <>
            <Span>dark</Span>
            <StyledMoonIcon />
          </>
        )}
      </Mode>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5rem;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.logo};
`;

const StyledMoonIcon = styled(MoonIcon)`
  fill: ${({ theme }) => theme.txtMode};
`;

const StyledSunIcon = styled(SunIcon)`
  fill: ${({ theme }) => theme.txtMode};
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.txtMode};
  text-transform: uppercase;
`;

const Mode = styled.button`
  all: unset;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  transition: 0.4s;

  @media (min-width: 1024px) {
    cursor: pointer;
    &:hover ${StyledMoonIcon} {
      fill: ${({ theme }) => theme.iconHover};
    }
    &:hover ${StyledSunIcon} {
      fill: ${({ theme }) => theme.iconHover};
    }
    &:hover ${Span} {
      color: ${({ theme }) => theme.iconHover};
    }
  }
`;
