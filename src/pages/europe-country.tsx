import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EuropeCountry = () => {
  let { capitalId } = useParams();

  const getCountry = (name: string) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCountry("");
  });

  return <div className="component"></div>;
};

export default EuropeCountry;
