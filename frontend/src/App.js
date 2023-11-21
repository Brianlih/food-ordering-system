import { HashRouter as Router } from "react-router-dom";
import { CartContextProvider } from "./contexts/cart_context";
import Routes from "./routes";
import ThemeCustomization from "./themes/";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <ThemeCustomization>
          <ScrollTop>
            <Routes />
          </ScrollTop>
        </ThemeCustomization>
      </Router>
    </CartContextProvider>
  );
}

export default App;
