import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { SignInModal } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignInModal {...{ showModal, setShowModal }} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
