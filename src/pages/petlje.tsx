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
    let x = ["0"];
    for (let i = 0; i < inputValue; i++) {
      let test = x[i + 1];
      x.push(test);
      console.log(x);
    }
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
