export const attachPrefix = (props: { [key: string]: any }, prefix: string) => {
  const result: { [key: string]: any } = {};
  for (const key in props) {
    result[`${prefix}${key}`] = props[key];
  }
  return result;
};
