import { StyledTbody } from "./Tbody.styled";

export type TbodyProps = {
  children?: React.ReactNode;
};

export default function Tbody({ children }: TbodyProps) {
  return <StyledTbody>{children}</StyledTbody>;
}
