import styled from "styled-components";

export const PostHeaderStyled = styled.header`
  padding-bottom: var(--size-8);
  border-bottom: 2px solid var(--color-grey-000);
  margin-block: var(--size-4);
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: var(--size-8);
    color: var(--color-grey-500);
    margin: 0;
    line-height: initial;
    text-align: center;
  }

  img {
    object-fit: contain;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin-block: var(--size-8);
    flex-direction: row;
    align-items: flex-end;

    h1 {
      font-size: var(--size-16);
      text-align: left;
    }
  }
`;
