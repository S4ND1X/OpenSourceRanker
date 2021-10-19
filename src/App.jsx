// Libraries
import React from "react";
import { Container } from "./styles";

// Component imports
import Navbar from "./components/layout/Navbar";
import ReposList from "./components/containers/ReposList";

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
