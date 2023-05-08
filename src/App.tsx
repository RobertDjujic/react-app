import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";
import Teorem from "./pages/teorem";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba-2604";
import Vjezba2804 from "./pages/vjezba-2804";
import Vjezba3004 from "./pages/vjezba-3004";
import Vjezba0305 from "./pages/vjezba-0305";
import Breweries from "./pages/breweries";

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
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/teorem",
      element: <Teorem />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba-2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba-2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/vjezba-3004",
      element: <Vjezba3004 />,
    },
    {
      path: "/vjezba-0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
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
