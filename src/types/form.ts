import { SignInitialValue as initialValue } from "../static/const";
import { createObjType } from "./util";

export type SignType = createObjType<typeof initialValue>;

export type ErrorProps = {
  email?: typeof initialValue.email;
  password?: typeof initialValue.password;
  error?: string;
};
