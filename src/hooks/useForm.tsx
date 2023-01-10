import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { ErrorProps, SignType } from "../types/form";
import { TodoType } from "../types/todo";
import { ValueType } from "../types/util";

interface SubmitType {
  API: (value: ValueType) => Promise<AxiosResponse<any, any>>;
  onSuccess: (value: any) => void;
}
interface FormProps {
  initialValue: ValueType;
  validate?: (initialValue: SignType) => ErrorProps;
  onSubmit: () => SubmitType;
}

const useForm = ({ initialValue, validate, onSubmit }: FormProps) => {
  const [values, setValues] = React.useState(initialValue);
  const [error, setError] = React.useState<ErrorProps>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { API, onSuccess } = onSubmit();

    API(values)
      .then((response) => {
        onSuccess(response);
      })
      .catch((error) => setError({ error: "에러가 발생했습니다." }));
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
