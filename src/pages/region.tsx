import { useState } from "react";
import LeftSide from "../assets/left-side";
import PopulationIcon from "../assets/population-icon";
import RightSide from "../assets/right-side";

type CountryType = {
  name: CountryNameType;
  maps: CountryMapType;
  population: number;
  borders: string[];
  car: CountryCarType;
};

type CountryNameType = {
  common: string;
  nativeName: NativeNameType;
  official: string;
};

type NativeNameType = {
  [nativeName: string]: {
    common: string;
    official: string;
  };
};

type CountryMapType = {
  googleMaps: string;
  openStreetMaps: string;
};

type CountryCarType = {
  side: string;
  signs: string[];
};

const Region = () => {
  const [regionData, setRegionData] = useState<CountryType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getRegion = (regionName: string) => {
    fetch(`https://restcountries.com/v3.1/region/${regionName.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRegionData(data);
      })
      .catch((err) => console.error(err));
  };

  const checkSide = (side: string) => {
    if (side == "right") {
      return <RightSide />;
    } else {
      return <LeftSide />;
    }
  };

  return (
    <div className="container">
      <h1>Countries by Region</h1>
      <div>
        <input
          className="input input--inline"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="button button--inline"
          onClick={() => getRegion(inputValue)}
        >
          Set Region
        </button>
      </div>
      <div>
        <table className="my-table--countries">
          <thead>
            <tr>
              <th>Name</th>
              <th>Maps</th>
              <th>Population</th>
              <th>Borders</th>
              <th>Car</th>
            </tr>
          </thead>
          <tbody>
            {regionData.length > 0 ? (
              regionData.map((country: CountryType) => {
                return (
                  <tr>
                    <td>
                      {country.name.common},{" "}
                      {Object.keys(country.name.nativeName).map((key) => {
                        return (
                          <>
                            {country.name.nativeName[key].official}
                            {", "} {country.name.nativeName[key].common}
                          </>
                        );
                      })}
                      {", "}
                      {country.name.official}
                    </td>
                    <td>
                      <a
                        className="my-table--countries__links"
                        href={country.maps.googleMaps}
                      >
                        Google Maps
                      </a>
                      {", "}
                      <a
                        className="my-table--countries__links"
                        href={country.maps.openStreetMaps}
                      >
                        Open Street Maps
                      </a>
                    </td>
                    <td>
                      <PopulationIcon />
                      {country.population.toLocaleString("en-US")}
                    </td>
                    <td>
                      {country.borders
                        ? country.borders.map((borders) => {
                            return borders + ", ";
                          })
                        : "Ova zemlja ne dijeli granicu s drugim zemljama."}
                    </td>
                    <td>
                      {checkSide(country.car.side)}
                      {", "}
                      {country.car.side}
                      {", "}
                      {country.car.signs}
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Ne postoji ova regija.</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Region;
