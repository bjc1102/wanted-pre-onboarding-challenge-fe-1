import React, { useEffect } from "react";
import { ChangeTypeOfKeys } from "../types/util";

interface FormProps<Type> {
  initialValue: Type;
  validate?: (initialValue: Type) => ChangeTypeOfKeys<Type>;
  onSubmit: (value: Type) => void;
}

function useForm<T>({ initialValue, validate, onSubmit }: FormProps<T>) {
  const [values, setValues] = React.useState(initialValue);

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

  return {
    values,
    handleChange,
    handleSubmit,
    error: validate && validate(values),
  };
}

export default useForm;
