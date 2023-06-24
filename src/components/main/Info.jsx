import React, { memo } from "react";
import styled from "styled-components";
import { Name } from "./Name";
import Statistic from "./Statistic";
import Address from "./Address";

const Info = ({ userData, modeToggle }) => {

  return (
    <Container>
      <Name userData={userData} />
      <Statistic userData={userData} />
      <Address userData={userData} modeToggle={modeToggle} />
    </Container>
  );
};

export default memo(Info);

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(7rem, auto) 1fr;
  grid-template-areas:
    "img name"
    "img join"
    "text text"
    "statistic statistic"
    "address address";

  padding: 3.2rem 2.4rem 4.8rem 2.4rem;
  background-color: ${({ theme }) => theme.appBG};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  @media (min-width: 1024px) {
    padding: 4.8rem;
    max-width: 73rem;
    display: grid;
    grid-template-columns: minma(11.7rem, auto) auto auto;
    grid-template-areas:
      "img name join"
      "img text text"
      ". statistic statistic"
      ". address address";
  }
`;
