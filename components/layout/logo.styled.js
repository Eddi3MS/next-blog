import styled from "styled-components";

export const LogoStyled = styled.div`
  font-size: var(--size-5);

  transition: color var(--transition);
  color: var(--color-grey-000);

  &:hover {
    color: var(--color-primary-400);
  }

  @media (min-width: 768px) {
    font-size: var(--size-8);
  }
`;
