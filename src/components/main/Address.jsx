import React from "react";
import styled from "styled-components";
import { ReactComponent as IconLocation } from "../../assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "../../assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";

const Address = ({ userData, modeToggle }) => {
  const errValue = "Not Available";
  const iconLighMode = "#ffffff";
  const iconDarkMode = "#4B6A9B";
  const iconArr = [
    <IconLocation fill={modeToggle ? iconLighMode : iconDarkMode} />,
    <IconWebsite fill={modeToggle ? iconLighMode : iconDarkMode} />,
    <IconTwitter fill={modeToggle ? iconLighMode : iconDarkMode} />,
    <IconCompany fill={modeToggle ? iconLighMode : iconDarkMode} />,
  ];

  const { location, blog, twitter_username, company } = userData;
  const valueArr = [location, blog, twitter_username, company];

  return (
    <Section>
      {valueArr.map((value, index) => {
        const opacity = value ? 1 : 0.5;
        return (
          <Wrapper key={index} opacity={opacity}>
            <IconWrapper>{iconArr[index]}</IconWrapper>
            <Value>{value ? value : errValue}</Value>
          </Wrapper>
        );
      })}
    </Section>
  );
};

export default Address;

const Section = styled.section`
  grid-area: address;
  display: grid;
  row-gap: 1.6rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    row-gap: 1.9rem;
    column-gap: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  opacity: ${(props) => props.opacity};

  @media (min-width: 576px) {
    &:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const Value = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.txtSecondary};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;
