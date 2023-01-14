import React from "react";

type StyleType = "primary" | "secondary" | "disabled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style_type: StyleType;
}

const Button = (props: ButtonProps) => {
  function StyleType(ButtonStyle: StyleType) {
    if (ButtonStyle === "primary") return "btn-primary";
    if (ButtonStyle === "disabled") return "btn-disabled";
    return "btn-secondary";
  }

  return (
    <button {...props} className={StyleType(props.style_type)}>
      {props.children}
    </button>
  );
};

export default Button;
