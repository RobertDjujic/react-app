import { useEffect, useState } from "react";

type BerryType = {
  name: string;
  url: string;
};

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState<any>();
  const [berryData, setBerryData] = useState<BerryType[]>([]);
  const [flag, setFlag] = useState<string>("");

  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((err) => console.error(err));
  };

  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBerryData(data.results);
        console.log(data.results);
      })
      .catch((err) => console.error(err));
  };

  const getCapitalCity = () => {
    fetch("https://restcountries.com/v3.1/capital/zagreb")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFlag(data[0].flags.png);
        console.log(data[0].flags.png);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPokemons();
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h1>Pokemons</h1>
      <div>
        <input type="text" />
        <button>Get Color</button>
      </div>
      {/* <h1>All Berries</h1>
      <div>
        {berryData.map((berry) => {
          return (
            <div>
              <div>{berry.name}</div>
              <a href={berry.url}>URL</a>
            </div>
          );
        })}
      </div> */}
      <h1>Flag</h1>
      <img src={flag} alt="Flag of Estonia" />
    </div>
  );
};

export default Pokemons;
