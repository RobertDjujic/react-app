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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

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

  const handlePage = () => {
    fetch(`https://api.openbrewerydb.org/v1/breweries`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setBreweriesPage(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: any, pageNumber: number) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego", 4);
    handlePage();
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
      <ul>
        {currentItems.map((brewery: BreweryType) => (
          <li key={brewery.id}>{brewery.name}</li>
        ))}
      </ul>
      <ul id="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a href="#" onClick={(e) => handleClick(e, pageNumber)}>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breweries;
