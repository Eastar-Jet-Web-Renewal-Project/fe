import styled from "styled-components";

type ColorBoxProps = {
  name: string;
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  position: relative;
  width: 120px;
  height: 120px;

  background-color: ${(props) => props.color};

  ::before {
    content: ${(props) => props.name};
    position: absolute;
    right: 10px;
    bottom: 10px;
    text-align: end;
  }
`;
