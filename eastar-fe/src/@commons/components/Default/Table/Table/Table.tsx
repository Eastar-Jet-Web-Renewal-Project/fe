import { useState } from "react";
import Tbody from "../Tbody/Tbody";
import Thead from "../Thead/Thead";
import {
  StyledTable,
  StyledTableContainer,
  TableVariant,
} from "./Table.styled";

type TableProps<DataType extends { id: string; [key: string | number]: any }> =
  {
    columns: string[];
    datas: DataType[];
    isClickable?: boolean;
    onClickRow?: (data: DataType) => void;
    variant?: TableVariant;
  };

export default function Table<
  DataType extends { id: string; [key: string | number]: any },
>({ columns, datas, isClickable, onClickRow, variant }: TableProps<DataType>) {
  const [selectedData, setSelectedData] = useState<DataType | null>(null);

  return (
    <StyledTableContainer $variant={variant || "Filled"}>
      <StyledTable>
        <Thead columns={columns} />
        <Tbody datas={datas} isClickable={isClickable} />
      </StyledTable>
    </StyledTableContainer>
  );
}
