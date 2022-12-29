import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/main-page";
import Catalog from "./components/Catalog/catalog";
import BikeDetails from "./components/BikeDetails/bike-details";

function App() {
  return (
    <div>

      <Router>


        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/catalog/:id" element={<BikeDetails />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
