
import Navbar from "./Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/main-page";
import Catalog from "./Catalog/catalog";

function App() {
  return (
    <div>

      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
