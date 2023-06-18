import React from "react";
import styled from "styled-components";

const Statistic = ({ userData }) => {
  const { public_repos, followers, following } = userData;
  return (
    <Section>
      <TitleWrapper>
        <Title>repos</Title>
        <Value>{public_repos}</Value>
      </TitleWrapper>
      <TitleWrapper>
        <Title>followers</Title>
        <Value>{followers}</Value>
      </TitleWrapper>
      <TitleWrapper>
        <Title>following</Title>
        <Value>{following}</Value>
      </TitleWrapper>
    </Section>
  );
};

export default Statistic;

const Section = styled.section`
  grid-area: statistic;
  display: flex;
  justify-content: space-evenly;

  margin-bottom: 2.4rem;
  padding: 18px 0;
  background-color: ${({ theme }) => theme.infoBG};
  border-radius: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const Title = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.txtSecondary};

  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;

const Value = styled.h4`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.txtPrimary};

  @media (min-width: 768px) {
    font-size: 2.2rem;
    line-height: 3.3rem;
  }
`;
