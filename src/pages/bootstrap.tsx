import { useEffect, useRef, useState } from "react";
// import { Alert, Button, ProgressBar, Tab, Table, Tabs } from "react-bootstrap";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { chartData } from "../data/chart";
import { frontendRazred } from "../data/class";
import { StudentType } from "./vjezba-2804";
import roboCop from "./../assets/robo-cop.png";
import coolGuy from "./../assets/cool-guy.png";
import grass from "./../assets/grass.png";

export type ChartType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type PositionType = {
  x: number;
  y: number;
};

const Bootstrap = () => {
  const [key, setKey] = useState<any>("home");
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const roboCopRef = useRef<HTMLDivElement | null>(null);
  const coolGuyRef = useRef<HTMLDivElement | null>(null);
  const [roboCopPosition, setRoboCopPosition] = useState<PositionType>({
    x: 0,
    y: 0,
  });
  const [coolGuyPosition, setCoolGuyPosition] = useState<PositionType>({
    x: 0,
    y: 0,
  });

  const alertAnimation = () => {
    setIsAlertVisible(true);
    console.log("Neki tekst");
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 10000);
  };

  useEffect(() => {
    const moveCoolGuy = () => {
      if (coolGuyRef.current) {
        const newPosition = coolGuyPosition.x + 10;
        setCoolGuyPosition((prevPosition) => ({
          ...prevPosition,
          x: newPosition,
        }));
      }
    };

    const handleCoolGuy = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        moveCoolGuy();
      }
    };

    document.addEventListener("keyup", handleCoolGuy);
    return () => {
      document.removeEventListener("keyup", handleCoolGuy);
    };
  }, [coolGuyPosition]);

  useEffect(() => {
    const moveRoboCop = () => {
      if (roboCopRef.current) {
        const newPosition = roboCopPosition.x + 10;
        setRoboCopPosition((prevPosition) => ({
          ...prevPosition,
          x: newPosition,
        }));
      }
    };

    const handleRoboCop = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        moveRoboCop();
      }
    };

    document.addEventListener("keyup", handleRoboCop);
    return () => {
      document.removeEventListener("keyup", handleRoboCop);
    };
  }, [roboCopPosition]);

  useEffect(() => {
    if (roboCopPosition.x >= 882) {
      alert("Pobijedio je lik 1!");
    }
  }, [roboCopPosition.x]);

  useEffect(() => {
    if (coolGuyPosition.x >= 882) {
      alert("Pobijedio je lik 2!");
    }
  }, [coolGuyPosition.x]);

  return (
    <div className="container">
      <div className="bootstrap">
        <div
          className={
            isAlertVisible ? "bootstrap__alert" : "bootstrap__alert--hidden"
          }
        >
          {/* <Alert variant="danger">This is a danger alert!</Alert> */}
        </div>
        <header className="bootstrap__header">
          <h1>Hello Bootstrap!</h1>
          {/* <Button variant="outline-danger" onClick={() => alertAnimation()}>
            Click Me
          </Button> */}
        </header>
        <div className="bootstrap__tabs">
          {/* <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Dashboard">
              <div className="bootstrap__dashboard">
                <div className="bootstrap__dashboard__cards">
                  <div className="bootstrap__dashboard__cards__item flex">
                    <div>
                      <div className="bootstrap__dashboard__cards__item__number">
                        45
                      </div>
                      <div className="bootstrap__dashboard__cards__item__text">
                        <div>Ovo je neki tekst.</div>
                        <div>Koji nešto objašnjava.</div>
                      </div>
                    </div>
                    <div>
                      <ProgressBar now={60} />
                    </div>
                  </div>
                  <div className="bootstrap__dashboard__cards__item">
                    <LineChart
                      width={450}
                      height={200}
                      data={chartData}
                      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                    </LineChart>
                  </div>
                </div>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Ime</th>
                      <th>Prezime</th>
                      <th>Visina</th>
                      <th>Hobby</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frontendRazred.map((student: StudentType) => {
                      return (
                        <tr>
                          <td>{student.name}</td>
                          <td>{student.lastName}</td>
                          <td>{student.height}</td>
                          <td>{student.hobby}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Game">
              <div className="bootstrap__game">
                <div className="bootstrap__game__pole">
                  <div className="bootstrap__game__pole__banner">Finish</div>
                </div>
                <div className="bootstrap__game__lane">
                  <div className="bootstrap__game__lane__title">Player 1</div>
                  <div
                    className="bootstrap__game__lane__robo-cop"
                    ref={roboCopRef}
                    style={{ transform: `translateX(${roboCopPosition.x}px)` }}
                  >
                    <img src={roboCop} alt="Image of Robo-Cop." />
                  </div>
                  <div>
                    <img src={grass} alt="Image of a grass line" />
                  </div>
                </div>
                <div className="bootstrap__game__lane">
                  <div className="bootstrap__game__lane__title">Player 2</div>
                  <div
                    className="bootstrap__game__lane__cool-guy"
                    ref={coolGuyRef}
                    style={{ transform: `translateX(${coolGuyPosition.x}px)` }}
                  >
                    <img src={coolGuy} alt="Image of a cool guy." />
                  </div>
                  <div>
                    <img src={grass} alt="Image of a grass line" />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs> */}
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
