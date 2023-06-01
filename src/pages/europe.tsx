import { useEffect, useState } from "react";

type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrenciesType;
  capital: string[];
};

type CountryNameType = {
  common: string;
  official: string;
};

type FlagsType = {
  png: string;
  svg: string;
};

type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

const Europe = () => {
  const [europeData, setEuropeData] = useState<CountryType[]>([]);

  const getEurope = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEuropeData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getEurope();
  });

  return (
    <div className="container">
      <h1>Europe</h1>
      <div>
        <table className="my-table--countries">
          <thead>
            <tr>
              <th>Name</th>
              <th>Flag</th>
              <th>Currencies</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {europeData.map((country: CountryType) => {
              return (
                <tr>
                  <td>
                    <a href="#">
                      {country.name.common}, {country.name.official}
                    </a>
                  </td>
                  <td>
                    <img
                      className="my-table--countries__flag"
                      src={country.flags.png}
                      alt="A flag of a country"
                    />
                  </td>
                  <td>
                    {Object.keys(country.currencies).map((key) => {
                      return (
                        <>
                          {key}, {country.currencies[key].name},{" "}
                          {country.currencies[key].symbol}{" "}
                        </>
                      );
                    })}
                  </td>
                  <td>{country.capital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Europe;
