import { StyledThead, StyledTheadTh } from "./Thead.styled";

type THeadProps = {
  columns: string[];
};

export default function Thead({ columns }: THeadProps) {
  return (
    <StyledThead>
      <tr>
        {columns.map((column) => (
          <StyledTheadTh scope="col" key={column}>
            {column}
          </StyledTheadTh>
        ))}
      </tr>
    </StyledThead>
  );
}
