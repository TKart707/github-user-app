// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightMode = {
  bodyBG: "#F6F8FF",
  appBG: "#FEFEFE",
  infoBG: "#F6F8FF",
  txtPrimary: "#2B3442",
  txtSecondary: "#4B6A9B",
  logo: "#222731",
  input: "#222731",
  txtMode: "#4B6A9B",
  iconHover: "#222731",
  btn: "#0079FF",
  btnHover: "#60ABFF",
  boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  white: "#FFFFFF",
  err: "#F74646",
};

export const darkMode = {
  bodyBG: "#141D2F",
  appBG: "#1E2A47",
  infoBG: "#141D2F",
  txtPrimary: "#FFFFFF",
  txtSecondary: "#FFFFFF",
  logo: "#FFFFFF",
  input: "#FFFFFF",
  txtMode: "#FFFFFF",
  iconHover: "#90A4D4",
  btn: "#0079FF",
  btnHover: "#60ABFF",
  boxShadow: "none",
  white: "#FFFFFF",
  err: "#F74646",
};

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-family: 'Space Mono', monospace;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.bodyBG}
    }
`;
