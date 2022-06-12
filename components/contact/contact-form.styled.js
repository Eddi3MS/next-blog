import styled from "styled-components";

export const ContactStyle = styled.section`
  margin: var(--size-16) auto;
  border-radius: 6px;
  background-color: var(--color-grey-050);
  width: min(90%, 50rem);
  padding: var(--size-3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: var(--size-6);

  h1 {
    color: var(--color-grey-500);
    font-size: var(--size-8);
    margin: var(--size-4) 0;
    text-align: left;
  }

  .form label {
    display: block;
    color: var(--color-grey-400);

    margin-block: var(--size-2) var(--size-1);
  }

  .form input,
  .form textarea {
    font: inherit;
    padding: var(--size-1);
    border-radius: 4px;
    width: 100%;
    border: 2px solid var(--color-grey-400);
    background-color: var(--color-grey-020);
    resize: none;

    &:focus {
      border: 2px solid var(--color-primary-500);
      outline: none;
    }
  }

  .controls {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
  }

  .control {
    flex: 1;
    min-width: 10rem;
  }

  .actions {
    margin-top: var(--size-4);
    text-align: right;
  }

  .form button {
    cursor: pointer;
    background-color: var(--color-primary-500);
    border: 1px solid var(--color-primary-500);
    padding: var(--size-2) var(--size-4);
    border-radius: 4px;
    color: var(--color-primary-50);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: var(--color-primary-050);

    &:hover {
      background-color: var(--color-primary-600);
      border-color: var(--color-primary-600);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--size-16);
      text-align: center;
    }
  }
`;
