import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  position: relative;

  h1 {
    font: 700 3.6rem Roboto;
    color: var(--color-text-title);
    position: absolute;
    top: 2rem;
    left: 2rem;

    span {
      color: var(--color-text-title-span);
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      top: 4rem;
      left: 4rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 700px) {
    width: 45%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg.exit {
    align-self: flex-start;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    height: 100%;
    width: 50%;

    svg.exit {
      margin-top: 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fieldset {
    border: 0;
    width: 100%;
    padding: 3rem 1rem;

    legend {
      font: 700 2.4rem Roboto;
      color: var(--color-text-title);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-border);
    }

    input {
      width: 100%;
      height: 5rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-border);
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Roboto;

      &:focus-within {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid var(--color-text-green);
      }
    }
    span {
      font: 400 1.4rem Roboto;
      color: var(--color-text-error);
    }
  }

  @media (min-width: 700px) {
    fieldset {
      width: 80%;
      padding: 3rem 4rem;
    }
  }
`;

export const Button = styled.button`
  width: 95%;
  height: 5rem;
  border: 0;
  border-radius: 0.8rem;
  font: 700 2rem Roboto;
  box-shadow: 0.6rem 0.6rem 0 var(--color-border);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fbfbff;

  background: var(--color-primary);

  transition: background-color 0.2s;

  /*   &:hover {
    background: var(--color-primary-dark);
  } */

  @media (min-width: 700px) {
    margin: 0;
    width: 28rem;
  }
`;
