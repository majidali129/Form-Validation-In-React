import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIstouched] = useState(false);


  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurChangeHandler = (event) => {
    setIstouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIstouched(false);
  };

  return {
    enteredValue,
    hasError,
    valueIsValid,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;
