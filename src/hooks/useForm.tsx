import React, { useEffect } from "react";
import { ErrorProps, SignType } from "../types/form";
import { TodoType } from "../types/todo";

interface FormProps {
  initialValue: SignType | TodoType;
  validate?: (initialValue: SignType) => ErrorProps;
  onSubmit: (value: SignType | TodoType) => void;
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
    onSubmit(values);
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
