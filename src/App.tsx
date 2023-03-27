import Header from "./components/header";
import Main from "./components/main";
import Navigation from "./components/navigation";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
