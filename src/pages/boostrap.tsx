import { useState } from "react";
import { Alert, Button, ProgressBar, Tab, Table, Tabs } from "react-bootstrap";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { chartData } from "../data/chart";
import { frontendRazred } from "../data/class";
import { StudentType } from "./vjezba-2804";

export type ChartType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const Bootstrap = () => {
  const [key, setKey] = useState<any>("home");
  const [alert, setAlert] = useState<boolean>(false);

  const alertAnimation = () => {
    setAlert(true);
    console.log("Neki tekst");
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  };

  return (
    <div className="container">
      <div className="bootstrap">
        <div
          className={alert ? "bootstrap__alert" : "bootstrap__alert--hidden"}
        >
          <Alert variant="danger">This is a danger alert!</Alert>
        </div>
        <header className="bootstrap__header">
          <h1>Hello Bootstrap!</h1>
          <Button variant="outline-danger" onClick={() => alertAnimation()}>
            Click Me
          </Button>
        </header>
        <div className="bootstrap__tabs">
          <Tabs
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
            <Tab eventKey="profile" title="Game"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;
