import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobie}) {
    flex-direction: colums;
    text-align: center;
  } ;
`;
