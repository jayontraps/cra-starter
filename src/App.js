import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { 
  SignInModal, 
  Test, 
  Child, 
  Modal, 
  ModalWrapper, 
  Tooltip } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false)
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
          height: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <SignInModal {...{ showModal, setShowModal }} /> */}
      </div>

      <Modal {...{show}}>
        <ModalWrapper {...{show, setShow}}>
          <Test />          
        </ModalWrapper>
      </Modal>
        
      <Child {...{setShow, show}} />

     
      <div style={{
        display: 'flex', 
        width: '50%', 
        justifyContent: 'space-between'}}>
        <Tooltip id="lhzdfls" title="test the first tooltip">        
          <button>Button one</button>
        </Tooltip>
        <Tooltip id="hkh" title="hello tooltip">        
          <button>Button two</button>
        </Tooltip>
        <Tooltip id="hclxhl" title="tooltip number three...">        
          <button>Button three</button>
        </Tooltip>
      </div>
  


      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
