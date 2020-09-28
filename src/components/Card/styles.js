import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (min-width: 700px) {
    flex-direction: row;

    img {
      width: 40%;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  border: 1px solid;
  padding: 2rem;
  margin-bottom: 2rem;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h2 {
      font: 700 3.6rem Roboto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        font: 700 2.4rem Roboto;

        svg {
          margin-right: 0.8rem;
        }

        p {
          font-size: 1.8rem;
          color: #e6e6f0;
        }
      }
    }
  }

  article {
    font: 400 1.6rem Roboto;
    color: var(--color-text-base);
    margin-top: 1rem;

    p {
      text-align: justify;
      font: 400 1.4rem Roboto;

      span {
        font: 700 1.8rem Roboto;
        color: var(--color-text-title);
      }
    }
  }

  @media (min-width: 700px) {
    height: 100%;
    width: 50%;
    margin-bottom: 0;
  }
`;
