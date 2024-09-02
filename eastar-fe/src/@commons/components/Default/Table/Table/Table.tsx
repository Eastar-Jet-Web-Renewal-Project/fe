import {
  StyledTable,
  StyledTableContainer,
  TableVariant,
} from "./Table.styled";

type TableProps = {
  children?: React.ReactNode;
  variant?: TableVariant;
  isDisabled?: boolean;
};

export default function Table({ children, variant, isDisabled }: TableProps) {
  return (
    <StyledTableContainer
      $variant={variant || "Filled"}
      $isDisabled={isDisabled}
    >
      <StyledTable>{children}</StyledTable>
    </StyledTableContainer>
  );
}
