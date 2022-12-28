import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { createObjType, ErrorProps, SignType } from "../types/util";

interface FormProps {
  initialValue: createObjType<SignType>;
  validate: (initialValue: ErrorProps) => ErrorProps;
  onSubmit: (value: createObjType<SignType>) => void;
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
    setError(validate(values));
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useForm;
