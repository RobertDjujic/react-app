import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  id: number;
  url: string;
};

type PokemonAbilityNameType = {
  name: string;
};

type PokemonAbilityType = {
  name: string;
  id: number;
  names: PokemonAbilityNameType[];
};

type BerryType = {
  name: string;
  url: string;
};

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType>();
  const [pokemonAbility, setPokemonAbility] = useState<PokemonAbilityType>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [berryData, setBerryData] = useState<BerryType[]>([]);
  // const [flag, setFlag] = useState<string>("");

  const getPokemonAbility = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/ability/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemonAbility(data);
      })
      .catch((err) => console.error(err));
  };

  const searchPokemon = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemonData(data);
        getPokemonAbility(data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBerryData(data.results);
      })
      .catch((err) => console.error(err));
  };

  // const getCapitalCity = () => {
  //   fetch("https://restcountries.com/v3.1/capital/zagreb")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setFlag(data[0].flags.png);
  //     })
  //     .catch((err) => console.error(err));
  // };

  useEffect(() => {
    getBerries();
  }, []);

  return (
    <div className="container">
      <h1 className="pokemon__title">Search Pokemon Abilities</h1>
      <div className="pokemon__header">
        <input
          className="pokemon__input"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="pokemon__btn"
          onClick={() => searchPokemon(searchValue)}
        >
          Find Pokemon ability
        </button>
      </div>
      <div className="pokemon__color-box">
        {pokemonAbility &&
          pokemonAbility.names.map((name) => {
            return <div>{name.name}</div>;
          })}
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
    </div>
  );
};

export default Pokemon;
