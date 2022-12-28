import { initialValue } from "../pages/Auth";

type createObjType<T> = {
  [Property in keyof T]: T[Property];
};

type SignType = typeof initialValue;

type ErrorProps = {
  email?: typeof initialValue.email;
  password?: typeof initialValue.password;
};
