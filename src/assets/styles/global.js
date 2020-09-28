import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #FBFBFF;
    --color-primary: #FF6969;
    --color-text-title: #32264D;
    --color-text-title-span: #ffc100;
    --color-text-base: #37474F;
    --color-text-green: #32BF84;
    --color-text-error: #FF5151;
    --color-border: #E6E6F0;
    --color-input-background: #F8F8FC;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1.6rem Roboto;
    color: var(--color-text-base);
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
