import theme from "../../../styles/Theme/light.theme";
import { Theme } from "../../types/style";

/**
 * getColorWithTheme 함수는 주어진 입력이 테마 값이라면 테마 색상, 아니라면 입력값을 그대로 반환합니다.
 * 만약, 존재하지 않는 color의 경우에 css에서 알아서 이를 무시함을 참고하세요.
 *
 * @param color - 색상 문자열 혹은 테마값 입니다.
 * @returns 테마 색상 문자열 또는 주어진 색상 문자열입니다.
 */
export const getColorWithTheme = (color?: string) =>
  color && color in theme ? theme[color as Theme] : color;
