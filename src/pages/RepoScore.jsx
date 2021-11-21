import { useParams } from "react-router";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Container } from "../styles";

const RepoScore = () => {
  const { url: encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Repo score page for:</h1>
        <p>{url}</p>
      </Container>
      <Footer />
    </>
  );
};

export default RepoScore;
