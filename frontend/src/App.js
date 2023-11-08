import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import ItemsListPage from "./pages/ItemsListPage";
import { CartContextProvider } from "./contexts/cart_context";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="wrapper">
          <div className="wrapper-in">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/:restaurantId" element={<ItemsListPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
