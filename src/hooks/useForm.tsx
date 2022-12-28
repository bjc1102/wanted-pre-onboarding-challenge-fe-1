import React, { useEffect } from "react";
import { createObjType, ErrorProps, SignType } from "../types/util";

interface FormProps {
  initialValue: createObjType<SignType>;
  validate: (initialValue: ErrorProps) => ErrorProps;
}

const useForm = ({ initialValue, validate }: FormProps) => {
  const [values, setValues] = React.useState(initialValue);
  const [error, setError] = React.useState<ErrorProps>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
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
