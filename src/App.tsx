import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./router/routes";
import { AppProvider } from "./contexts/app/index";
import { AuthProvider } from "./contexts/auth/index";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <AppProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
