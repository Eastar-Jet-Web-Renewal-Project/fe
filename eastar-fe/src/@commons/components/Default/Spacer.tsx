import styled from "styled-components";

type StyledSpacerProps = {
  $size: number;
  $isHorizontal?: boolean;
};

const StyledSpacer = styled.div.attrs<StyledSpacerProps>(() => ({
  "aria-hidden": true,
}))`
  width: ${(props) => (props.$isHorizontal ? `${props.$size}px` : "1px")};
  height: ${(props) => (!props.$isHorizontal ? `${props.$size}px` : "1px")};
  display: inline-block;
  box-sizing: border-box;
`;

type SpacerProps = {
  size: number;
  isHorizontal?: boolean;
};

export default function Spacer({ size, isHorizontal }: SpacerProps) {
  return <StyledSpacer $size={size} $isHorizontal={isHorizontal} />;
}
