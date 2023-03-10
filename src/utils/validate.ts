import { SignFormType } from "../types/form";
import { ChangeTypeOfKeys } from "../types/util";

export default function signValidation({ email, password }: SignFormType) {
  const errors: ChangeTypeOfKeys<SignFormType> = {};

  if (!email) {
    errors.email = "이메일이 입력되지 않았습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "이메일 형식이 아닙니다.";
  }

  if (!password) {
    errors.password = "비밀번호가 입력되지 않았습니다.";
  } else if (password.length < 8) {
    errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
  }

  return errors;
}

export function isFormValidate<T>(error: ChangeTypeOfKeys<T>) {
  //error가 있다면, value값이 입력되지 않았다면
  if (!!Object.keys(error).length) return true;
  return false;
}
