import { createGlobalStyle } from "styled-components";
import { device } from "./devices";
import { CenterColumn, CenterRow } from "./utils.styles";

export enum FlexCenter {
  ROW = "row",
  COLUMN = "column",
}
export interface FlexLayout {
  flexCenter?: string;
}
export const GlobalStyles = createGlobalStyle`
:root {
  --primary: #252526;
  --primaryLight: #858586;
  --secondary: #BEAF87;
  --light: #F6F6F6;

  --navbarHeight: 50px;

  @media ${device.laptop} {
  --navbarHeight: 80px;
  }
}

* {
  box-sizing: border-box;

  &[flexCenter=${FlexCenter.ROW}] {
    ${CenterRow}
  }

  &[flexCenter=${FlexCenter.COLUMN}] {
    ${CenterColumn}
  }

  .center-row {
    ${CenterRow}   
  }
  .center-column{
    ${CenterColumn}
  }
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--light);
}
h1, h2, h3, h4, p, ul, li {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--secondary);
}

section header {
  font-size: 1.3rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.3rem;
}

h4 {
  font-size: 1.1rem;
}

p {
  font-size: 1.7rem;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
}
`;
