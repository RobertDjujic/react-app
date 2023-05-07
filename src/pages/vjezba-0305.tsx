const Vjezba0305 = () => {
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
