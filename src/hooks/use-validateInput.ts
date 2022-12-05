import { useState, useEffect } from "react";

const useValidateInput = (valueType: string) => {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
  };

  const inputBlurHandler = () => {
    setisTouched(true);
  };

  useEffect(() => {
    if (valueType === "email") {
      setIsValid(inputValue.includes("@"));
    } else if (valueType === "number") {
      setIsValid(
        inputValue.toString().length === 9 &&
          !inputValue.toString().match(/[-+.]|[eE]/)
      );
    } else {
      setIsValid(true);
    }
  }, [inputValue, valueType]);

  return {
    inputValue,
    isValid,
    isTouched,
    valueChangehandler,
    inputBlurHandler,
  };
};

export default useValidateInput;
