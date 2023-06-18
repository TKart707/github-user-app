import React from "react";
import styled from "styled-components";

export function Name({ userData }) {
  const { avatar_url, name, login, created_at, bio } = userData;
  const joinDate = new Date(created_at);
  const day = joinDate.getDay();
  const month = joinDate.toLocaleString("default", { month: "long" });
  const year = joinDate.getFullYear();
  const JoinTxt = `joined ${day} ${month} ${year}`;

  return (
    <>
      <Img src={avatar_url} />
      <NameWrapper>
        <UserName>{name}</UserName>
        <User>{login}</User>
      </NameWrapper>
      <JoinDate>{JoinTxt}</JoinDate>
      <Text>{bio ? bio : "I haven't bio yet."}</Text>
    </>
  );
}

const Img = styled.img`
  grid-area: img;
  margin-right: 1.9rem;
  width: 7rem;
  border-radius: 50%;

  @media (min-width: 768px) {
    margin-right: 4.1rem;
    width: 11.7rem;
  }

  @media (min-width: 1024px) {
    margin-right: 3.7rem;
    width: 11.7rem;
  }
`;

const NameWrapper = styled.div`
  grid-area: name;
`;

const UserName = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.txtPrimary};

  @media (min-width: 768px) {
    font-size: 2.6rem;
    line-height: 3.9rem;
  }
`;

const User = styled.h3`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.btn};

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

const JoinDate = styled.span`
  grid-area: join;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.txtSecondary};
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 3.9rem;
  }
`;

const Text = styled.p`
  grid-area: text;
  margin-top: 3.3rem;
  margin-bottom: 2.3rem;

  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.txtSecondary};

  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 3.2rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;
