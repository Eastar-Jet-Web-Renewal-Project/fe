import { StyledTableItem } from "./TableItem.styled";

type TableItemProps = {
  children: React.ReactNode;
};

export default function TableItem({ children }: TableItemProps) {
  return (
    <td>
      <StyledTableItem>{children}</StyledTableItem>
    </td>
  );
}
