export type createObjType<T> = {
  [Property in keyof T]: T[Property];
};
