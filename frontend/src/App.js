import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ItemsListPage from "./pages/ItemsListPage";
import Itempage from "./pages/Itempage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Routes>
          <Route exact path="/" Component={ItemsListPage} />
          <Route path="/items/:id" Component={Itempage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
