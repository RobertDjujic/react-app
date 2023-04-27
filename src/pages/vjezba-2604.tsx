const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    //if (arr[i] == "baka") {
    //  break;
    //}
    //console.log(arr[i]);
    if (arr[i] == "tata") {
      delete arr[i];
    }
  }

  //delete arr[1];
  //arr.push("Robert");
  //console.log("Naš array je: ", arr);

  //Funkcije
  let baka;

  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //Objekti
  type CarType = {
    [key: string]: number | string;
  };

  let car: CarType = {
    boja: "crna",
    cijena: "117.850,00€",
    domet: "782 km",
    marka: "Mercedes-Benz",
    model: "EQS",
    snaga: "385 kW",
    vrijemePunjenja: "32 min",
    vrstaMotora: "električni",
  };

  const recenica = `Moj auto je ${car.marka} ${car.model}. Njegova boja je ${car.boja}. Cijena mu je ${car.cijena}. Domet mu je ${car.domet}, a snaga ${car.snaga}.`;

  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak
  //Ispiši najveću vrijednost niza

  const numbers = [12, 98, 65, 4, 63, 51, 71, 582, 13, 4, 6, 9, 65, 56];
  let largestNumber = 0;

  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }

  console.log(largestNumber);

  //Zadaća
  //ispiši najdužu i najkraću riječ iz niza
  const rijeci = [
    "balance",
    "biscuit",
    "side",
    "grind",
    "refund",
    "cast",
    "circulate",
    "accumulation",
    "fold",
    "cut",
    "entertainment",
  ];

  let longestWord = rijeci[0];
  let shortestWord = rijeci[0];

  for (let i = 0; i < rijeci.length; i++) {
    if (rijeci[i].length > longestWord.length) {
      longestWord = rijeci[i];
    }
    if (rijeci[i].length < shortestWord.length) {
      shortestWord = rijeci[i];
    }
  }

  console.log(longestWord);
  console.log(shortestWord);

  return (
    <div className="container">
      <h1>Funkcije</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <div>{printValue("marka")}</div>
      <h1>Objekti</h1>
      <hr />
      <div>{recenica}</div>
      <h2>JSON objekt</h2>
      <pre>{JSON.stringify(car, null, 2)}</pre>
    </div>
  );
};

export default Vjezba2604;
