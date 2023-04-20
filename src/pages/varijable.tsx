import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
    treca: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "BMW" | "Audi" | "Ferrari" = "BMW";

  const obj: UserType = {
    name: "Robert",
    lastName: "Đujić",
    age: 24,
    height: "181 cm",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Schecter",
    },
  };

  color = "green";

  //obje vrijednosti moraju biti true, kako bi program ušao
  if (pi & number) {
    console.log(pi);
  }
  //samo jedna vrijednosti od varijabli treba biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  const fruitName: string = "Banana";
  const fruitCalories: number = 88.7;
  const fruitColor: string = "Yellow";
  const fruitEdible: boolean = true;

  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h2>Vrijednost pi varijable je: {pi + 5}</h2>
        <h2>Vrijednost color varijable je: {color + "red"}</h2>
        <h2>Vrijednost car varijable je: {car}</h2>
      </div>
      <div>
        <h2>Vrijednost našeg statea je: {value}</h2>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>Rezultat naše funkcije je: {addOnOurValue(4, 5)}</div>
      <hr />
      <div>
        <h2>Vrijednosti našeg objekta su:</h2>
        <div>
          Ime i prezime: {obj.name} {obj.lastName}
        </div>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
        <div>
          Gitare: {obj.guitars.prva}, {obj.guitars.druga}, {obj.guitars.treca}
        </div>
        <hr />
        <div>
          <table className="container__table" title="Fruit">
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Color</th>
              <th>Edible</th>
            </tr>
            <tr>
              <td>{fruitName}</td>
              <td>{fruitCalories}</td>
              <td>{fruitColor}</td>
              <td>{fruitEdible ? "Yes" : "No"}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Varijable;
