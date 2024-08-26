import { Remove$Prefix } from "../../../types/style";
import { attachPrefix } from "../../../utilities/style/propUtility";
import Flex, { FlexProps } from "./Flex";

type RowProps = Remove$Prefix<Omit<FlexProps, "$direction">> & {
  children: React.ReactNode;
};

export default function Row(props: RowProps) {
  return (
    <Flex $direction="row" {...attachPrefix(props, "$")}>
      {props.children}
    </Flex>
  );
}
