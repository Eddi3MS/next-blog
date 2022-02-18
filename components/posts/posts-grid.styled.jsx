import styled from "styled-components";

export const PostGridStyled = styled.ul`
  display: grid;
  grid-template-columns: 
  repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;
}`;
