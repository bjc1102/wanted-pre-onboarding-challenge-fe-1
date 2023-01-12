import React from "react";
import Button from "./Button";

interface FormButtonProps {
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormButton = () => {
  return (
    <div className="flex float-right mt-3 gap-1 text-base">
      <Button style_type="primary" type="submit">
        등록하기
      </Button>
      <Button style_type="secondary" type="button">
        취소하기
      </Button>
    </div>
  );
};

export default FormButton;
