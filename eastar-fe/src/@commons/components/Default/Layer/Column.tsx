import { Remove$Prefix } from "../../../types/style";
import { attachPrefix } from "../../../utilities/style/propUtility";
import Flex, { FlexProps } from "./Flex";

type ColumnProps = Remove$Prefix<Omit<FlexProps, "$direction">> & {
  children: React.ReactNode;
};

/**
 * Column 컴포넌트는 자식 요소들을 세로로 배치하는 Flex 컨테이너를 생성합니다.
 *
 * @example
 * <Column justify="flex-start" align="center" gap={10}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Column>
 */
export default function Column(props: ColumnProps) {
  return (
    <Flex $direction="column" {...attachPrefix(props, "$")}>
      {props.children}
    </Flex>
  );
}
