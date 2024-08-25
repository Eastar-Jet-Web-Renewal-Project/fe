import { useHoverEvent } from "../../../hooks/useHoverEvent";
import { ButtonVariant, StyledButton } from "./Button.styled";

type ButtonProps = {
  content: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: ButtonVariant;
};

export default function Button({
  content,
  disabled,
  onClick,
  style,
}: ButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  const { ref, isHover } = useHoverEvent<HTMLDivElement>();

  return (
    <StyledButton
      ref={ref}
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
      {content}
    </StyledButton>
  );
}
