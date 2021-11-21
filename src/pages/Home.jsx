import { Container } from "../styles";
import Footer from "../components/layout/Footer";
import ReposList from "../components/ReposList";

const Home = () => {
  return (
    <>
      <Container>
        <ReposList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
