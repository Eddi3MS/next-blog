import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--color-grey-900);
  height: 6rem;
  padding-inline: 1rem;

  .header__container {
    flex-direction: column;
    gap: 1rem;

    justify-content: space-between;

    ul {
      display: flex;
      align-items: baseline;
    }

    li {
      margin-inline: var(--size-2);
    }

    a {
      color: var(--color-grey-000);
      font-size: var(--size-5);
      transition: color var(--transition);
    }

    a:hover,
    a:active,
    a.active {
      color: var(--color-primary-400);
    }
  }

  @media (min-width: 768px) {
    .header__container {
      flex-direction: row;
    }

    ul {
      gap: 0.5rem;
    }

    a {
      font-size: var(--size-5);
    }
  }
`;
