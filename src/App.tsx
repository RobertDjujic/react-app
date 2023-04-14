import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/exe",
      element: <Mlinar />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <div className="layout__aside">
          <Navigation />
        </div>
        <div className="layout__main">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
};

export default App;
