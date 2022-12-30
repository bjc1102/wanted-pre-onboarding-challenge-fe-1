import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { ErrorProps, SignType } from "../types/form";
import { ValueType } from "../types/util";

interface FormProps {
  initialValue: ValueType;
  validate?: (initialValue: SignType) => ErrorProps;
  onSubmit: (
    value: ValueType
  ) => Promise<AxiosError<any, any> | AxiosResponse<any, any>>;
}

const useForm = ({ initialValue, validate, onSubmit }: FormProps) => {
  const [values, setValues] = React.useState(initialValue);
  const [error, setError] = React.useState<ErrorProps>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await onSubmit(values);
    if (result instanceof AxiosError<any, any>)
      setError({ ...error, error: "에러가 발생했습니다" });
    else console.log("실행성공");
  };

  useEffect(() => {
    if (validate) setError(validate(values as SignType));
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useForm;
