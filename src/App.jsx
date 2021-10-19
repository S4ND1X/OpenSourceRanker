// Libraries
import React from "react";
import { Container } from "./styles";

// Component importswww
import Navbar from "./components/layout/Navbar";
import ReposList from "./components/ReposList";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ReposList />
      </Container>
    </>
  );
}

export default App;
