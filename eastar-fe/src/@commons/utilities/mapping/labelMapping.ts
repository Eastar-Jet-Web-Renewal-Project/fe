import { Option } from "@commons/types/commons";

/**
 * 주어진 값 배열을 해당하는 라벨 배열로 매핑합니다.
 *
 * @param labelValuePairs - 라벨과 값의 쌍 배열
 * @param values - 매핑할 값들의 배열
 * @param options - 옵션 객체 (keepOriginalIfNotFound: 라벨을 찾지 못했을 때 원래 값을 유지할지 여부)
 * @returns 라벨 배열
 */
export function mapValuesToLabel<T>(
  labelValuePairs: Option<T>[],
  values: T[],
  options: {
    keepOriginalIfNotFound?: boolean;
  } = {},
) {
  // 빠른 검색을 위해 Map 객체 생성
  const valueToLabelMap = new Map(
    labelValuePairs.map((pair) => [pair.value, pair.label]),
  );

  return values.map((value) => {
    const label = valueToLabelMap.get(value);
    if (label !== undefined) {
      return label;
    } else if (options.keepOriginalIfNotFound) {
      return value;
    } else {
      return "NULL";
    }
  });
}

/**
 * 주어진 값을 해당하는 라벨로 매핑합니다.
 *
 * @param labelValuePairs - 라벨과 값의 쌍 배열
 * @param value - 매핑할 값
 * @param options - 옵션 객체 (keepOriginalIfNotFound: 라벨을 찾지 못했을 때 원래 값을 유지할지 여부)
 * @returns 라벨
 */
export function mapValueToLabels<T>(
  labelValuePairs: Option<T>[],
  value: T,
  options: {
    keepOriginalIfNotFound?: boolean;
  } = {},
) {
  return mapValuesToLabel(labelValuePairs, [value], options)[0];
}

export function mapValueToOption<T>(
  labelValuePairs: Option<T>[],
  value: T,
  options: {
    default?: boolean;
  } = {},
) {
  return (
    labelValuePairs.find((pair) => pair.value === value) ||
    options.default ||
    null
  );
}
