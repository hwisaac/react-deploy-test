import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import App from "./App";
import Header from "./routes/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Tt from "./routes/Tt";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId/*' element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
