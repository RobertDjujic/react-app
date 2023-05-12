import { useEffect, useState } from "react";
import LeftSide from "../assets/left-side";
import PopulationIcon from "../assets/population-icon";
import RightSide from "../assets/right-side";

type AfricaType = {
  name: AfricaNameType;
  maps: AfricaMapsType;
  population: number;
  borders: string[];
  car: AfricaCarType;
};

type AfricaNameType = {
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

type AfricaMapsType = {
  googleMaps: string;
  openStreetMaps: string;
};

type AfricaCarType = {
  side: string;
  signs: string[];
};

const Africa = () => {
  const [africaData, setAfricaData] = useState<AfricaType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getAfrica = (regionName: string) => {
    fetch(`https://restcountries.com/v3.1/region/${regionName.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAfricaData(data);
      })
      .catch((err) => console.error(err));
  };

  const checkSide = (carSide: string) => {
    if (carSide == "left") {
      return <LeftSide />;
    }
    if (carSide == "right") {
      return <RightSide />;
    }
  };

  useEffect(() => {});

  return (
    <div className="container">
      <h1>Africa</h1>
      <div>
        <input
          className="input input--brewery"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="button button--brewery"
          onClick={() => getAfrica(inputValue)}
        >
          Set Region
        </button>
      </div>
      <div>
        <table className="table--countries">
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
            {africaData.length > 0 ? (
              africaData.map((country: AfricaType) => {
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
                        className="table--countries__links"
                        href={country.maps.googleMaps}
                      >
                        Google Maps
                      </a>
                      {", "}
                      <a
                        className="table--countries__links"
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

export default Africa;
