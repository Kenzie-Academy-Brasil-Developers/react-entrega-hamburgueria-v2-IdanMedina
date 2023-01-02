import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    
  }

  :root {
    --color-white: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary:#EB5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --grey-opacity-100: #33333380; 
    --negative:#E60000;
    --warning:#FFCD07;
    --success:#168821;
    --information:#155BCB;
  }

  body {
    list-style: none;
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 700;
    font-size: 1.625rem;
    color: var(--grey-100)
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-secondary);
    margin-top: 0.25rem;
  }

  h3 {
    font-weight: 550;
    font-size: 1.125rem;
  }

  h4 {
    font-weight: 550;
    font-size: 0.875rem;
  }

  p{
    font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--grey-50);
  }

  label {
  position: absolute;
  background-color: var(--color-white);
  padding: 0.25rem;
  margin: -0.67rem 0 0 1rem ;
  font-weight: 500;
  font-size: 0.875rem;
  }

  hr{
    border: var(--grey-20);
    background: var(--grey-20);
    height: 0.25rem;
    margin-top: 1.333rem;
  }
`;
