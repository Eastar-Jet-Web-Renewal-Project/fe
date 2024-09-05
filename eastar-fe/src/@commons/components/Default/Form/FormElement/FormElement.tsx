import {
  StyledAstrik,
  StyledFormElement,
  StyledLabelElement,
} from "./FormElement.styled";

type FormElementProps = {
  label: string;
  children: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  isVertical?: boolean;
};

export default function FormElement({
  label,
  children,
  isRequired,
  isVertical,
}: FormElementProps) {
  return (
    <StyledFormElement $isVertical={isVertical ? true : false}>
      <StyledLabelElement htmlFor={label}>
        {label}
        {isRequired && <StyledAstrik> *</StyledAstrik>}
      </StyledLabelElement>

      {children}
    </StyledFormElement>
  );
}
