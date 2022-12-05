import { useState, useCallback } from "react";

const useFetchData = (number: number) => {
  const [mainPageData, setMainPageData] = useState({
    name: "",
    birth_year: "",
    eye_color: "",
  });
  const [formPageData, setFormPageData] = useState({
    name: '',
    created: "",
    vehicles: [""],
  });
  const url = `https://swapi.py4e.com/api/people/${number}`;
  const fetchDatahandler = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setMainPageData({
        name: data.name,
        birth_year: data.birth_year,
        eye_color: data.eye_color,
      });
      setFormPageData({
        name: data.name,
        created: data.created,
        vehicles: data.vehicles,
      });
    } catch (error) {
        alert('Error occured while fetching data!')
      throw new Error("Something went wrong!");
    }
  }, [url]);
  return { mainPageData, formPageData, fetchDatahandler }
};

export default useFetchData;