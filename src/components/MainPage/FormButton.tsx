import classes from "./FormButton.module.css";
import { useNavigate } from "react-router-dom";

const FormButton = () => {
  const navigate = useNavigate();
  const formButtonClickhandler = () => {
    navigate("/form");
  };

  return (
    <button
      className={classes.main}
      onClick={formButtonClickhandler}
    >
        <p className={classes.main_paragraph} >formularz rejestracyjny</p>
    </button>
  );
};
export default FormButton;
