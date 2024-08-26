import { getLuminance } from "polished";
import styled from "styled-components";
import { color } from "../../../styles/color.styles";

type ColorBoxProps = {
  name: string;
  color: string;
};

export const ColorBox = styled.div<ColorBoxProps>`
  position: relative;
  width: 100%;
  height: 120px;

  background-color: ${(props) => props.color};

  &:after {
    content: "${(props) => props.name}";

    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 1;

    color: ${
      (props) =>
        getLuminance(props.color) > 0.3
          ? color.black // 어두운 텍스트
          : color.white // 밝은 텍스트
    };

    text-align: end;
  }
`;
