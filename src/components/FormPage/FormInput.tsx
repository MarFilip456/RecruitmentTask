import classes from "./FormInput.module.css";

const FormInput: React.FC<{
  labelText: string;
  inputType: string;
  value?: string | number;
  hasError?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}> = (props) => {
  const { labelText, inputType, onChange, onBlur, value, hasError } = props;
  const inputClass = hasError ? classes.main_inputError : classes.main_input;
  const errorMessageContent =
    inputType === "email"
      ? "Nieprawidłowy format adresu e-mail"
      : "Nieprawidłowy numer telefonu";

  return (
    <div className={classes.main}>
      <label htmlFor={inputType}>{labelText}</label>
      <input
        name={inputType}
        type={inputType}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={inputClass}
      />
      {hasError && <p>{errorMessageContent}</p>}
    </div>
  );
};

export default FormInput;
