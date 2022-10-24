import { LightTheme } from "./themes/LightTheme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import SpecialDishes from "./components/SpecialDishes";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/Global";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div id="app">
        <GlobalStyles />
        <Navbar theme={LightTheme} />
        <Home />
        <Menu />
        <About />
        <SpecialDishes />
        <Services />
        <Contact />
        <Info />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
