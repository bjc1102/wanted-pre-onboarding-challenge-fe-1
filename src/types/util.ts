export type createObjType<T> = {
  [Property in keyof T]: T[Property];
};

export type ChangeTypeOfKeys<T> = {
  [key in keyof T]?: T[key];
};
