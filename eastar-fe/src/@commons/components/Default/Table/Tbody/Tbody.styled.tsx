import styled from "styled-components";

type StyledTbodyProps = {
  $isClickable?: boolean;
};

export const StyledTbody = styled.tbody<StyledTbodyProps>`
  ${({ $isClickable }) => $isClickable && `cursor: pointer;`}
`;

export const StyledTbodyTd = styled.td`
  padding: 16px 0;
  text-align: center;
`;
