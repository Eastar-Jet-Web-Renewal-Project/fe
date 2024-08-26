export type RemovePrefix<
  T extends {
    [key: string]: any;
  },
  PREFIX extends string,
> = {
  [K in keyof T as K extends `${PREFIX}${infer U}` ? U : never]: any;
};
