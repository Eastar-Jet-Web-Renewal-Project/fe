import { Remove$Prefix } from "../../../types/style";
import { attachPrefix } from "../../../utilities/style/propUtility";
import Flex, { FlexProps } from "./Flex";

type ColumnProps = Remove$Prefix<Omit<FlexProps, "$direction">> & {
  children: React.ReactNode;
};

export default function Column(props: ColumnProps) {
  return (
    <Flex $direction="column" {...attachPrefix(props, "$")}>
      {props.children}
    </Flex>
  );
}
