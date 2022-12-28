import { initialValue } from "../pages/Auth";

type createObjType<T> = {
  [Property in keyof T]: T[Property];
};

type valueType = typeof initialValue;

type validationProps = {
  email?: typeof initialValue.email;
  password?: typeof initialValue.password;
};
