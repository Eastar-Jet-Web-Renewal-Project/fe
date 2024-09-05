import Button from "@commons/components/Default/Button/Button";
import { ButtonVariant } from "@commons/components/Default/Button/Button.styled";
import { DefaultStyleFormElementVariant } from "@commons/components/Default/Form/DefaultFormElementStyle";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import Typography from "@commons/components/Default/Typography/Typography";
import { TypographyType, TypographySize } from "@commons/types/font";
import { fontSize } from "@styles/font.styles";
import { useState } from "react";

export default function DesignComponentPage() {
  const ButtonStyles: ButtonVariant[] = [
    "Elevated",
    "Filled",
    "FilledTonal",
    "Outlined",
    "Text",
  ];
  const SingleLineInputStyles: DefaultStyleFormElementVariant[] = ["Filled"];

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
      <Button content="Button" isDisabled />
      <h2>SingleLineInput</h2>
      {SingleLineInputStyles.map((style) => (
        <div key={style}>
          <h3>{style}</h3>
          <SingleLineInput
            style={style}
            value={value}
            onChange={onChangeValue}
            placeholder={"아무 말이나 입력해봐요.."}
          />
        </div>
      ))}
      <h3>diabled</h3>
      <SingleLineInput value={value} onChange={onChangeValue} isDisabled />
      <h2>Typography</h2>
      {Object.entries(fontSize).map(([size, detailedSizeObj]) =>
        Object.keys(detailedSizeObj).map((detailedSize) => (
          <Typography
            key={`${size}-${detailedSize}`}
            type={size as TypographyType}
            size={detailedSize as unknown as TypographySize}
            color="primary"
          >
            {`${size} - ${detailedSize}`}
            <br />
            <span style={{ color: "blue", fontSize: "12px" }}>
              children도 가능
            </span>
          </Typography>
        )),
      )}
    </>
  );
}
