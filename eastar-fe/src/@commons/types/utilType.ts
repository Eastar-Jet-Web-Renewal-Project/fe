export type Object = { [key: string]: any };

export type RemovePrefix<
  T extends {
    [key: string]: any;
  },
  PREFIX extends string,
> = {
  [K in keyof T as K extends `${PREFIX}${infer U}` ? U : never]: any;
};

export type ObjectValueType<T extends Object> = T[keyof T];

export type OptionalObject<T extends Object> = {
  [K in keyof T]?: T[K];
};
