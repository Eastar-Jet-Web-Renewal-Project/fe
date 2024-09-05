import { useHoverEvent } from "../../../hooks/useHoverEvent";
import { ButtonVariant, StyledButton } from "./Button.styled";

type ButtonProps = {
  content: string;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ButtonVariant;
};

/**
 * Button 컴포넌트는 클릭 가능한 버튼을 렌더링합니다.
 *
 * @example
 * <Button
 *   content="Click me"
 *   onClick={handleClick}
 *   style="Filled"
 *   isDisabled
 * />
 */
export default function Button({
  content,
  isDisabled,
  onClick,
  style,
}: ButtonProps) {
  const handleClick = () => {
    if (isDisabled) return;
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
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={content}
      aria-disabled={isDisabled}
      $variant={style || "Filled"}
      $isDisabled={isDisabled}
      $isHover={isHover}
    >
      {content}
    </StyledButton>
  );
}
