import React from "react";
import { AppRouter } from "./AppRouter";
import Theme from "./components/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
