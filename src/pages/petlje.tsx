const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan
    /*if (inputValue & 2) {
      console.log("neparan broj");
    } else {
      console.log("paran broj");
    }*/
    //2. ispisati u konzolu brojeve od 0 do zadanog broja
    /*for (let i = 0; i < inputValue; i++) {
      console.log(i);
    }*/
    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
    /*let test = Math.PI * inputValue * 2;
    console.log(test);*/
    //4. ispisati string do zadanog broja
    /*let x = [0];
    for (let i = 0; i < inputValue; i++) {
      x.push(i);
    }
    console.log(x);*/
    //5. Ispiši brojeve od 0 do zadane vrijednosti
    /*for (let i = 0; i <= inputValue; i++) {
      console.log(i);
    }*/
    //6. Ispiši brojeve od 12 do zadane vrijednosti
    /*for (let i = 12; i <= inputValue; i++) {
      console.log("Vrijednost i je: " + i);
    }*/
    //7. Ispiši neparne brojeve od 7 do zadanog broja
    /*for (let i = 7; i <= inputValue; i++) {
      if (i % 2) {
        console.log("Vrijednost i je: " + i);
      }
    }*/
    //8. Ispiši parne brojeve od 10 do zadane negativne vrijednosti
    /*for (let i = 10; i >= inputValue; i--) {
      if (!(i % 2)) {
        console.log("Vrijednost i je: " + i);
      }
    }*/
    /*9. Iteriraj kroz sve brojeve od 1 do zadane vrijednosti. Ispiši sljedeće:
    - za višekratnike broja 3 ispiši "Fizz"
    - za višekratnike broja 5 ispiši "Buzz"
    - za višekratnike broja 3 i 5 ispiši "FizzBuzz"*/
    /*for (let i = 1; i <= inputValue; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
      } else if (i % 3 === 0) {
        console.log(i + " Fizz");
      } else if (i % 5 === 0) {
        console.log(i + " Buzz");
      }
    }*/
    //10. Ispiši sve elemente sljedećeg array-a
    /*const thisIsAnArray = ["element1", "element2", "element3", "element4"];
    thisIsAnArray.forEach((element) => {
      console.log(element);
    });*/
    //11. Izračunaj zbroj svih brojeva u array-u
    /*const numbersArray = [1, 13, 22, 123, 49];
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
      console.log("Zbroj brojeva u array-u iznosi: " + sum);
    }*/
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
