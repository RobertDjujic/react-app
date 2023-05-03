const Vjezba0305 = () => {
  //Zadatci
  //1. Dohvatimo box i promjenimo mu background-color (kroz JS)
  //2. Dodamo dodatnu klasu na box koja će povećati njegove dimenzije
  //3. animiramo box do 30px i nazad (kroz JS)
  //3.2. Želimo animirati box dijagonalno do (30px, 30px) i nazad do 50px
  //4. Kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izračunati sumu 2 parametra i rezulat ispisati unutar box-a
  //5. Dodaj onClick event i na klik smanji dimenzije box-a

  //   let position = 0;
  //   let reverse = false;

  //   const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  //   const frame = () => {
  //     if (reverse) {
  //       position--;
  //     } else {
  //       position++;
  //     }
  //     const currentPosition = position + "px";

  //     if (position == 30) {
  //       reverse = true;
  //     }
  //     if (position == 0) {
  //       reverse = false;
  //     }

  //     box.style.marginLeft = currentPosition;
  //   };

  //   const animate = setInterval(frame, 30);

  //   let box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  //   box.style.backgroundColor = "red";

  const handleClick = () => {
    let box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box.style.transform = "scale(0.5)";
  };

  const sum = (x: number, y: number) => {
    return x + y;
  };

  return (
    <div className="container">
      <h1>Vježba 0305</h1>
      <hr />
      <div className="box">{sum(5, 10)}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default Vjezba0305;
