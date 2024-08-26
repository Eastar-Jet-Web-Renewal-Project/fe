import { Remove$Prefix } from "../../../types/style";
import { attachPrefix } from "../../../utilities/style/propUtility";
import Flex, { FlexProps } from "./Flex";

type RowProps = Remove$Prefix<Omit<FlexProps, "$direction">> & {
  children: React.ReactNode;
};

/**
 * Row 컴포넌트는 자식 요소들을 가로로 배치하는 Flex 컨테이너를 생성합니다.
 *
 * @example
 * <Row justify="flex-start" align="center" gap={10}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Row>
 */
export default function Row(props: RowProps) {
  return (
    <Flex $direction="row" {...attachPrefix(props, "$")}>
      {props.children}
    </Flex>
  );
}
