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
import Breweries from "./pages/breweries";
import Europe from "./pages/europe";
import Chat from "./pages/chat";
import Pokemon from "./pages/pokemon";
import Region from "./pages/region";
import Vjezba1505 from "./pages/vjezba-1505";
import TodoList from "./pages/to-do-list";

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
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemon",
      element: <Pokemon />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/region",
      element: <Region />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/vjezba-1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/todo",
      element: <TodoList />,
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
