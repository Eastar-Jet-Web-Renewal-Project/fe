import React from "react";
import { StyledDivider, StyledDividerList } from "./DividerList.styled";

type DividerListProps = {
  children: React.ReactNode;
  isVertical?: boolean;
  gap?: number;
  className?: string;
};
/**
 * DividerList 컴포넌트는 자식 요소들 사이에 구분선을 포함하여 렌더링합니다.
 *
 * @example
 * <DividerList isVertical gap={10}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </DividerList>
 */
export default function DividerList({
  children,
  isVertical,
  gap,
  className,
}: DividerListProps) {
  // null과 undefined를 제외하고, 유효한 React 엘리먼트인지 확인
  const childrenArray = React.Children.toArray(children).filter(
    (child) =>
      child !== null && child !== undefined && React.isValidElement(child),
  );
  return (
    <StyledDividerList $isVertical={isVertical} className={className}>
      {childrenArray.map((content) => (
        <StyledDivider $isVertical={isVertical} $gap={gap} key={content.key}>
          {content}
        </StyledDivider>
      ))}
    </StyledDividerList>
  );
}
