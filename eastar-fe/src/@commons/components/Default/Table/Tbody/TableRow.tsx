import { useHoverEvent } from "@commons/hooks/useHoverEvent";
import { StyledTableRow } from "./TableRow.styled";

type TableRowProps = {
  children?: React.ReactNode;
};

export default function TableRow({ children }: TableRowProps) {
  const { ref, isHover } = useHoverEvent<HTMLTableRowElement>();

  return (
    <StyledTableRow ref={ref} $isHovered={isHover}>
      {children}
    </StyledTableRow>
  );
}
