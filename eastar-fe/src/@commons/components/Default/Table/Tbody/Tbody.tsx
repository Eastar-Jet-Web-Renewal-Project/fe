import { useHoverEventList } from "@commons/hooks/useHoverEventList";
import { StyledTbody, StyledTbodyTd, StyledTbodyTr } from "./Tbody.styled";

export type TbodyProps<
  DataType extends { id: string; [key: string | number]: any },
> = {
  datas: DataType[];
  clickedData?: DataType | null;
  onClickRow?: (data: DataType) => void;
  isClickable?: boolean;
};

export default function Tbody<
  DataType extends { id: string; [key: string | number]: any },
>({ datas, isClickable, clickedData, onClickRow }: TbodyProps<DataType>) {
  const { setRef, hoverStates } = useHoverEventList(
    datas.map((data) => data.id),
  );

  return (
    <StyledTbody $isClickable={isClickable}>
      {datas.map((data) => (
        <StyledTbodyTr
          onClick={() => onClickRow && onClickRow(data)}
          $isHovered={hoverStates[data.id]}
          ref={setRef(data.id)}
          key={data.id}
        >
          {Object.values(data).map((value) => (
            <StyledTbodyTd key={value}>{value}</StyledTbodyTd>
          ))}
        </StyledTbodyTr>
      ))}
    </StyledTbody>
  );
}
