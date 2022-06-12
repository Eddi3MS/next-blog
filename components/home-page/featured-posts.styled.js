import styled from "styled-components";

export const FeaturedStyled = styled.section`
  width: min(90%, 80rem);
  margin: var(--size-8) auto;

  h2 {
    font-size: var(--size-8);
    color: var(--color-grey-800);
    text-align: center;
    margin-bottom: var(--size-8);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--size-16);
    }
  }
`;
