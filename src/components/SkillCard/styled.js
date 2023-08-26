import { styled } from "styled-components";

export const Card = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: .5rem;
  border: 1px solid var(--second-color);
  border-radius: .5rem;
  box-shadow: 0 0 2rem -.5rem var(--second-color);
            
  p {
      color: var(--second-color);
      font-weight: 700;
      text-transform: uppercase;
    }
`