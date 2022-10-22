import { LightTheme } from "./themes/LightTheme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/Global";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div id="app">
        <GlobalStyles />
        <Navbar />
        <Home />
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
