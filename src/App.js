import { LightTheme } from "./themes/LightTheme";
import Home from "./components/Home";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/Global";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div id="app">
        <GlobalStyles />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
