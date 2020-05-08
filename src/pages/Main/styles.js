import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 21px;

  h1 {
    font-size: 2em;
    color: var(--theme-color);
  }
`;

export const Content = styled.main`
  flex: 2;

  h1 {
    font-size: 2em;
    color: #079fc5;
  }

  button {
    outline: none;
    background: var(--theme-color);
    border: none;
    border-radius: 0.8rem;
    padding: 0.8rem;
    color: var(--bg-color);
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 0.2rem var(--hover-color);

    &:hover {
      background: var(--hover-color);
    }
  }
  input {
    outline: none;
    background: #fff;
    border: 0.1rem solid var(--header-color);
    border-radius: 0.8rem;
    padding: 0.8rem;
  }

  output {
    color: var(--theme-color);
    border-bottom: 0.1rem solid var(--theme-color);
  }

  form {
    display: flex;
    flex-wrap: wrap;

    input {
      flex: 1;
      text-align: center;

      &:first-child {
        margin-right: 0.8rem;
      }

      &:last-child {
        margin-left: 0.8rem;
      }
    }

    button {
      margin: 0.8rem 0;
      min-width: 100%;
    }
  }

  table {
    width: 100%;
    border: 0.1rem solid var(--header-color);
    border-radius: 0.8rem;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0.5rem 1rem;
    text-align: center;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    height: 5rem;
  }

  .result {
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin: 2rem 0 1rem 0;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const Footer = styled.footer`
  display: block;
  text-align: center;

  a {
    text-decoration: none;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--hover-color);
    }
  }
`;
