import styled from "styled-components";

export const HeroStyled = styled.section`
  text-align: center;
  background-color: var(--color-grey-800);
  padding-block: var(--size-16);

  .image {
    width: 350px;
    height: 350px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
    margin-inline: auto;
  }

  .image img {
    object-fit: cover;
  }

  h1 {
    font-size: var(--size-8);
    margin: var(--size-3) 0;
    color: var(--color-grey-030);
  }

  p {
    font-size: var(--size-5);
    color: var(--color-grey-050);
    width: min(90%, 50ch);
    margin-inline: auto;
  }
`;
