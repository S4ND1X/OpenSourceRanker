import React from "react";
import { Container } from "./styles";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <p>Cleanedup React App</p>
        </div>
      </Container>
    </>
  );
}

export default App;
