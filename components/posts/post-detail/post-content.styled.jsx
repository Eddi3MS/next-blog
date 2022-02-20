import styled from "styled-components";

export const PostContentStyled = styled.article`
  width: min(95%, 60rem);
  margin: var(--size-8) auto;
  font-size: var(--size-5);

  background-color: var(--color-grey-030);
  border-radius: 6px;
  padding: var(--size-3);

  p {
    color: var(--color-grey-800);
  }

  h1,
  h2,
  h3,
  h4 {
    margin-block: var(--size-4);
  }

  @media (min-width: 768px) {
    padding: var(--size-8);
  }
`;

export const PostImageStyled = styled.div`
  margin: var(--size-4) auto;
  width: 100%;
  max-width: 600px;
`;
