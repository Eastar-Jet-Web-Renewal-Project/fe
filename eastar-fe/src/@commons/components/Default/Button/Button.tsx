import { useRef } from "react";
import { useHoverEvent } from "../../../hooks/useHoverEvent";
import Icon, { IconProps } from "../Icon/Icon";
import { ButtonVariant, StyledButton } from "./Button.styled";

type ButtonProps = {
  content: string;
  icon?: IconProps;
  disabled?: boolean;
  onClick?: () => void;
  style?: ButtonVariant;
};

export default function Button({
  content,
  icon,
  disabled,
  onClick,
  style,
}: ButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  const isHover = useHoverEvent(buttonRef);

  return (
    <StyledButton
      ref={buttonRef}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={content}
      aria-disabled={disabled}
      $variant={style || "Filled"}
      $isDisabled={disabled}
      $isHover={isHover}
    >
      {icon && <Icon {...icon} />}
      {content}
    </StyledButton>
  );
}
