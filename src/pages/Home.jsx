import { Container } from "../styles";
import Navbar from "../components/layout/Navbar";
import ReposList from "../components/ReposList";

const Home = () => {
  return (
    <>
      <Container>
        <ReposList />
      </Container>
    </>
  );
};

export default Home;
