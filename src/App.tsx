import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Header from "./components/header";
import Modal from "./components/modal";
import Navigation from "./components/navigation";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import "./styles/styles.scss";

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
            <Button />
            <Form />
            <Checkbox />
            <Tags />
            <Modal />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
