import styled from "styled-components";

export const PostItemStyled = styled.li`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: var(--color-grey-800);
  text-align: center;
  transition: transform var(--transition);
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }
  a {
    color: var(--color-grey-020);
  }

  .image {
    width: 100%;
    max-height: 20rem;
    overflow: hidden;
  }

  .image img {
    object-fit: cover;
    object-position: center;
  }

  .content {
    padding: var(--size-3);
  }

  .content h3 {
    margin-top: var(--size-3);
    font-size: var(--size-6);
  }

  .content time {
    display: block;
    color: var(--color-grey-200);
    margin-bottom: var(--size-3);
  }
`;
