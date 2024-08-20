import Button from "../../../@commons/components/Default/Button/Button";
import { ButtonVariant } from "../../../@commons/components/Default/Button/Button.styled";

export default function DesignComponentPage() {
  const ButtonStyles: ButtonVariant[] = [
    "Elevated",
    "Filled",
    "FilledTonal",
    "Outlined",
    "Text",
  ];
  return (
    <>
      <h1>Styled Component List Page</h1>
      <p>현재 테마는 Light 입니다</p>
      <h2>Button</h2>
      {ButtonStyles.map((style) => (
        <>
          <h3>{style}</h3>
          <Button style={style} content="Button" />
        </>
      ))}
      <h3>diabled</h3>
      <Button content="Button" disabled />
    </>
  );
}
