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
  const [searchData, setSearchData] = useState<BreweryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [breweriesPage, setBreweriesPage] = useState<BreweryType[]>([]);

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

  const handleSearch = (searchValue: string) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries/search?query=${searchValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
        console.log("Search result: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  const handlePage = (pageValue: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?page=${pageValue}&per_page=10`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setBreweriesPage(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego", 4);
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
          <div>Nema niti jedna pivovara za zadani parametar.</div>
        )}
      </div>
      <hr />
      <h1>Breweries by City</h1>
      <div>
        {dataByCity.length > 0 ? (
          dataByCity.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar.</div>
        )}
      </div>
      <hr />
      <h1>Search Breweries</h1>
      <div>
        <input
          className="input input--brewery"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button
          className="button button--brewery"
          onClick={() => handleSearch(searchValue)}
        >
          Search
        </button>
      </div>
      <div>
        {searchData.length > 0 ? (
          searchData.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>
            Ne postoji pivovara s imenom: {searchValue}, pokušajte s nekom
            poznatijom markom.
          </div>
        )}
      </div>
      <hr />
      <h1>Breweries Pagination</h1>
      <div>
        {breweriesPage.length > 0 ? (
          breweriesPage.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Na ovoj stranici se ne mogu ispisati pivovare.</div>
        )}
        <hr />
        <div className="pagination">
          <div className="pagination__item">&laquo;</div>
          <div onClick={() => handlePage(1)} className="pagination__item">
            1
          </div>
          <div onClick={() => handlePage(2)} className="pagination__item">
            2
          </div>
          <div onClick={() => handlePage(3)} className="pagination__item">
            3
          </div>
          <div onClick={() => handlePage(4)} className="pagination__item">
            4
          </div>
          <div onClick={() => handlePage(5)} className="pagination__item">
            5
          </div>
          <div onClick={() => handlePage(6)} className="pagination__item">
            6
          </div>
          <div className="pagination__item">&raquo;</div>
        </div>
      </div>
    </div>
  );
};

export default Breweries;
