import React from "react";
import { StyledDivider, StyledDividerList } from "./DividerList.styled";

type DividerListProps = {
  children: React.ReactNode;
  isVertical?: boolean;
};

export default function DividerList({
  children,
  isVertical,
}: DividerListProps) {
  // null과 undefined를 제외하고, 유효한 React 엘리먼트인지 확인
  const childrenArray = React.Children.toArray(children).filter(
    (child) =>
      child !== null && child !== undefined && React.isValidElement(child),
  );
  return (
    <StyledDividerList $isVertical={isVertical}>
      {childrenArray.map((content) => (
        <StyledDivider $isVertical={isVertical} key={content.key}>
          {content}
        </StyledDivider>
      ))}
    </StyledDividerList>
  );
}
