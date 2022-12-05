import classes from "./MainPage.module.css";
import FormButton from "../components/MainPage/FormButton";
import MainPageContent from "../components/MainPage/MainPageContent";
import { StarWarsData } from "../types";

const MainPage: React.FC<{
  starWarsData: StarWarsData;
  nextHandler: () => void;
}> = (props) => {
  const { starWarsData, nextHandler } = props;
  return (
    <>
      <div className={classes.main_header}>
        <p className={classes.main_header_signature}>Marcin Filipkowski</p>
        <FormButton />
      </div>
      <MainPageContent starWarsData={starWarsData} nextHandler={nextHandler} />
    </>
  );
};

export default MainPage;
