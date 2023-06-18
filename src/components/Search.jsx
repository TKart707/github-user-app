import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const Search = ({ input, setInput, fetchData, error }) => {

  return (
    <Section>
      <StyledSearchIcon />
      <Input
        type="text"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <Error>{error}</Error>}
      <Button onClick={fetchData}>search</Button>
    </Section>
  );
};

export default Search;

const Section = styled.section`
  display: grid;
  grid-template-columns: auto minmax(140px, 1fr) auto auto;

  padding: 0.65rem 0.7rem 0.75rem 1.6rem;
  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.appBG};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 0.95rem 1rem 0.95rem 3.2rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  transform: scale(0.83);
  align-self: center;
`;

const Button = styled.button`
  padding: 1.25rem 1.4rem 1.25rem 1.8rem;

  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;

  background-color: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  border: none;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 1.25rem 2.3rem 1.35rem 2.4rem;
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    &:hover {
      transition: 0.4s;
      background-color: ${({ theme }) => theme.btnHover};
    }
  }
`;

const Input = styled.input`
  all: unset;
  margin-left: 0.9rem;
  margin-right: 0.7rem;

  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.input};

  &:focus ~ ${Button} {
    background-color: ${({ theme }) => theme.btnHover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.txtSecondary};
  }

  @media (min-width: 768px) {
    margin-left: 2.4rem;
    font-size: 1.8rem;
  }
`;

const Error = styled.span`
  margin-right: 0.5rem;
  align-self: center;

  font-weight: 700;
  font-size: 0.8rem;
  line-height: 2.2rem;

  color: ${({ theme }) => theme.err};
  @media (min-width: 768px) {
    margin-right: 1rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;
