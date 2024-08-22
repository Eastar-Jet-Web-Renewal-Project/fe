import { useState } from "react";
import Button from "../../../@commons/components/Default/Button/Button";
import { ButtonVariant } from "../../../@commons/components/Default/Button/Button.styled";
import SingleLineInput from "../../../@commons/components/Default/Input/SingleLineInput";
import { SingleLineInputVariant } from "../../../@commons/components/Default/Input/SingleLineInput.styled";

export default function DesignComponentPage() {
  const ButtonStyles: ButtonVariant[] = [
    "Elevated",
    "Filled",
    "FilledTonal",
    "Outlined",
    "Text",
  ];
  const SingleLineInputStyles: SingleLineInputVariant[] = [
    "Filled",
    "Outlined",
    "Text",
  ];

  const [value, setValue] = useState<string>("");
  const onChangeValue = (value: string) => {
    setValue(value);
  };
  return (
    <>
      <h1>Styled Component List Page</h1>
      <p>현재 테마는 Light 입니다</p>
      <h2>Button</h2>
      {ButtonStyles.map((style) => (
        <div key={style}>
          <h3>{style}</h3>
          <Button style={style} content="Button" />
        </div>
      ))}
      <h3>diabled</h3>
      <Button content="Button" disabled />
      <h2>SingleLineInput</h2>
      {SingleLineInputStyles.map((style) => (
        <div key={style}>
          <h3>{style}</h3>
          <SingleLineInput
            style={style}
            value={value}
            onChange={onChangeValue}
          />
        </div>
      ))}
      <h3>diabled</h3>
      <SingleLineInput value={value} onChange={onChangeValue} disabled />
    </>
  );
}
