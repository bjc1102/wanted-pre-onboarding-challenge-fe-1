import React from "react";
import Input from "./Input";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const SignForm = (props: FormProps) => {
  return (
    <form
      {...props}
      className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
    >
      {props.children}
    </form>
  );
};

export default SignForm;
