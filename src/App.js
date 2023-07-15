import React, { useContext } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}
export default App;
