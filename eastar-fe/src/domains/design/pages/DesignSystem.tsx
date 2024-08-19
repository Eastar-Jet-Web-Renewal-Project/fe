import styled from "styled-components";
import { color } from "../../../styles/color.styles";
import theme from "../../../styles/Theme/light.theme";
import { ColorBox } from "../components/ColorBox";

const DesignSystemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function DesignSystem() {
  return (
    <>
      <h1>Design System</h1>
      <p>현재 테마는 Light 입니다</p>
      <DesignSystemWrapper>
        {Object.entries(theme).map(([name, value]) => (
          <ColorBox key={name} name={name} color={value} />
        ))}
      </DesignSystemWrapper>
    </>
  );
}
