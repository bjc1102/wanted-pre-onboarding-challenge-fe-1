import React, { useEffect } from "react";
import { ErrorProps } from "../types/form";

interface SubmitType<Type> {
  API: (value: Type) => Promise<unknown>;
  onSuccess: (value: unknown) => void;
}
interface FormProps<Type> {
  initialValue: Type;
  validate?: (initialValue: Type) => ErrorProps;
  onSubmit: () => SubmitType<Type>;
}

function useForm<T>({ initialValue, validate, onSubmit }: FormProps<T>) {
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
    if (validate) setError(validate(values));
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    error,
  };
}

export default useForm;
