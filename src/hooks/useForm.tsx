import React, { useEffect } from "react";
import { ErrorProps } from "../types/form";

interface FormProps<Type> {
  initialValue: Type;
  validate?: (initialValue: Type) => ErrorProps;
  onSubmit: (value: Type) => void;
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
    onSubmit(values);
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
