import { SendStarWarsData } from "../types";
import classes from "./FormPage.module.css";
import FormInput from "../components/FormPage/FormInput";
import useValidateInput from "../hooks/use-validateInput";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import usePostData from "../hooks/use-postData";

const FormPage: React.FC<{
  sendData: SendStarWarsData;
}> = (props) => {
  const { name, created, vehicles } = props.sendData;
  const navigate = useNavigate();
  const { inputValue: loginInput, valueChangehandler: loginChangeHandler } =
    useValidateInput("");
  const {
    inputValue: passwordInput,
    valueChangehandler: passwordChangeHandler,
  } = useValidateInput("");
  const {
    inputValue: emailInput,
    isValid: emailValid,
    isTouched: emailIsTouched,
    valueChangehandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useValidateInput("email");

  const emailHasError = !emailValid && emailIsTouched;

  const {
    inputValue: numberInput,
    isValid: numberValid,
    isTouched: numberIsTouched,
    valueChangehandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
  } = useValidateInput("number");

  const numberHasError = !numberValid && numberIsTouched;

  const validForm = loginInput && passwordInput && emailValid && numberValid;

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [checkboxError, setCheckboxError] = useState(false);

  const checkboxHandler = () => {
    const inputElement: HTMLInputElement = document.querySelector(
      'input[name="check"]'
    )!;
    const isChecked = inputElement.checked;
    inputElement.checked = !isChecked;
  };

  const sendData = {
    login: loginInput,
    password: passwordInput,
    email: emailInput,
    telephoneNumber: +numberInput,
    star_wars_data: [name, created, vehicles],
  };

  const sendDatahandler = usePostData(sendData);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (validForm && checkboxRef.current!.checked) {
      sendDatahandler();
      navigate("/main");
    } else if (!checkboxRef.current!.checked) {
      setCheckboxError(true);
    }
  };

  return (
    <form className={classes.main} onSubmit={submitHandler}>
      <h1>FORMULARZ REJESTRACYJNY</h1>
      <div className={classes.main_headerUnderline} />
      <FormInput
        labelText="Login:"
        inputType="text"
        onChange={loginChangeHandler}
        value={loginInput}
      />
      <FormInput
        labelText="Hasło:"
        inputType="password"
        onChange={passwordChangeHandler}
        value={passwordInput}
      />
      <FormInput
        labelText="E-mail:"
        inputType="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailInput}
        hasError={emailHasError}
      />
      <FormInput
        labelText="Numer telefonu:"
        inputType="number"
        onChange={numberChangeHandler}
        onBlur={numberBlurHandler}
        value={numberInput}
        hasError={numberHasError}
      />
      <div className={classes.main_checkDiv}>
        <label htmlFor="check" className={classes.main_checkDivContainer}>
          Akceptuję regulamin
          <input name="check" type="checkbox" ref={checkboxRef} />
          <span
            className={classes.main_checkDivContainer__span}
            onClick={checkboxHandler}
          ></span>
        </label>
        {checkboxError && <p>Wymagana akceptacja regulaminu</p>}
      </div>
      <button className={classes.main_submit}>
        <p>zapisz</p>
      </button>
    </form>
  );
};

export default FormPage;
