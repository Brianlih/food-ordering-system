import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ItemsListPage from "./pages/ItemsListPage";
import Itempage from "./pages/Itempage";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={ItemsListPage} />
          <Route path="/items/:id" Component={Itempage} />
          <Route path="/menu" Component={Menu} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
