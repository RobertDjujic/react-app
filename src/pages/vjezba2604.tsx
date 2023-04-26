const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    /*if (arr[i] == "baka") {
      break;
    }
    console.log(arr[i]);*/
    /*if (arr[i] == "tata") {
      delete arr[i];
    }*/
  }

  //delete arr[1];
  /*arr.push("Robert");
  console.log("Naš array je: ", arr);*/

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
    marka: "Mercedes-Benz",
    model: "EQS",
    boja: "crna",
    cijena: 117850,
    domet: 782,
    snaga: "385 kW",
    vrijemePunjenja: "32 min",
    vrstaAutomobila: "Električni",
  };

  const recenica = `Moj auto je ${car.marka} ${car.model}. Njegova boja je ${car.boja}. Cijena mu je ${car.cijena} eura. Domet mu je ${car.domet}, a snaga ${car.snaga}.`;

  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak
  //Ispiši najveću vrijednost niza

  let brojevi = [12, 98, 65, 4, 63, 51, 71, 582, 13, 4, 6, 9, 65, 56];

  let maxNumber = brojevi[0];

  const largestNumber = () => {
    for (let i = 0; i < brojevi.length; i++)
      if (brojevi[i] > maxNumber) {
        maxNumber = brojevi[i];
      }
  };

  console.log(maxNumber);

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
