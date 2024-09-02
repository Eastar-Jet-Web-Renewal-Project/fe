import { Option } from "@commons/types/commons";

export function mapValuesToLabels<T>(
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

export function mapValueToLabels<T>(
  labelValuePairs: Option<T>[],
  value: T,
  options: {
    keepOriginalIfNotFound?: boolean;
  } = {},
) {
  return mapValuesToLabels(labelValuePairs, [value], options)[0];
}
