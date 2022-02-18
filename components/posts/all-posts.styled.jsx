import styled from "styled-components";

export const AllPostsStyled = styled.section`
  width: min(90%, 60rem);
  margin: var(--size-8) auto;

  h1 {
    font-size: var(--size-8);
    color: var(--color-grey-500);
    text-align: center;
    margin-bottom: var(--size-8);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--size-16);
    }
  }
`;
