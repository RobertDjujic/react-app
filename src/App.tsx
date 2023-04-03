import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Card from "./components/card";
import Header from "./components/header";
import Modal from "./components/modal";
import Navigation from "./components/navigation";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import "./styles/styles.scss";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/flex-exe";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <div className="layout__aside">
          <Navigation />
        </div>
        <div className="layout__main">
          <div className="container">
            <div className="container--component">
              <h2>Button</h2>
              <Button />
            </div>
            <div className="container--component">
              <h2>Card</h2>
              <Card />
            </div>
            <div className="container--component">
              <h2>Checkbox</h2>
              <Checkbox />
            </div>
            <div className="container--component">
              <h2>Modal</h2>
              <Modal />
            </div>
            <div className="container--component">
              <h2>Pagination</h2>
              <Pagination />
            </div>
            <div className="container--component">
              <h2>Tags</h2>
              <Tags />
            </div>
            <div className="container--component">
              <h2>Transform property exercise</h2>
              <TransformExe />
            </div>
            <div className="container--component">
              <h2>Flex property exercise</h2>
              <FlexExe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
