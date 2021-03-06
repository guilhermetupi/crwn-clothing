import "./styles.scss";
import Home from "../../views/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "../navigation";
import Shop from "../../views/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
