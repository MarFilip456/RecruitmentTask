import { Routes, Route, Navigate } from "react-router-dom";
import FormPage from "./pages/FormPage";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import useFetchData from "./hooks/use-fetchData";

import classes from "./App.module.css";

function App() {
  const [number, setNumber] = useState(1);
  const { mainPageData, formPageData, fetchDatahandler } = useFetchData(number);
  const incrementHandler = () => {
    if (number === 16) {
      setNumber(0);
    }
    setNumber((prevState) => prevState + 1);
  };
  useEffect(() => {
    fetchDatahandler();
  }, [fetchDatahandler]);
  return (
    <div className={classes.main}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route
          path="/main"
          element={
            <MainPage
              nextHandler={incrementHandler}
              starWarsData={mainPageData}
            />
          }
        />
        <Route path="/form" element={<FormPage sendData={formPageData} />} />
      </Routes>
    </div>
  );
}

export default App;
