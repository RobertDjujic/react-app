import { useEffect, useState } from "react";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataSearch, setDataSearch] = useState<BreweryType[]>([]);

  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweryByCity = (city: string, page: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
        console.log("byCity: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  const searchBreweries = () => {
    fetch(
      "https://api.openbrewerydb.org/v1/breweries/search?query=heineken&per_page=3"
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataSearch(jsonData);
        console.log("Search result: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("london", 10);
    searchBreweries();
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>Breweries by city</h1>
      <div>
        {dataByCity.length > 0 ? (
          dataByCity.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>Breweries search</h1>
      <div>
        {dataSearch.length > 0 ? (
          dataSearch.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
    </div>
  );
};

export default Breweries;
