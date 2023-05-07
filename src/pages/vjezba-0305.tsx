const Vjezba0305 = () => {
  const handleClick = () => {
    let box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box.style.transform = "scale(0.1)";
  };

  return (
    <div className="container">
      <h1>Vježba 0305</h1>
      <hr />
      <div className="box"></div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default Vjezba0305;
