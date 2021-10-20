// Libraries
import { useEffect } from "react";
import { Container } from "./styles";

// Component importswww
import Navbar from "./components/layout/Navbar";
import ReposList from "./components/ReposList";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("osranker-likes"))
      localStorage.setItem("osranker-likes", JSON.stringify([]));
  }, []);

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
