import { useHoverEvent } from "@commons/hooks/useHoverEvent";
import { StyledTableRow } from "./TableRow.styled";

type TableRowProps = {
  children?: React.ReactNode;
  isClickable?: boolean;
  isClicked?: boolean;
  onClick?: () => void;
};

export default function TableRow({
  children,
  isClickable,
  isClicked,
  onClick,
}: TableRowProps) {
  const { ref, isHover } = useHoverEvent<HTMLTableRowElement>();
  return (
    <StyledTableRow
      ref={ref}
      onClick={onClick}
      $isHovered={isHover}
      $isClicked={isClicked}
      $isClickable={isClickable}
    >
      {children}
    </StyledTableRow>
  );
}
