import { ChangeTypeOfKeys, ErrorProps, SignType } from "../types/form";

export default function signValidation({ email, password }: SignType) {
  const errors: ChangeTypeOfKeys<SignType> = {};

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

export const isFormValidate = (error: ErrorProps) => {
  //error가 있다면, value값이 입력되지 않았다면
  if (!!Object.keys(error).length) return true;
  return false;
};
