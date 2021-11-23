import { useHistory } from "react-router";
import styled from "styled-components";

// React toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Valid github url
import isGithubUrl from "is-github-url";

const SearchBar = ({ search, handleChange }) => {
  const history = useHistory();

  // Is a valid Github repository url
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isGithubUrl(search, { repository: true })) {
      history.push(`/repo/${encodeURIComponent(search)}`);
    } else {
      toast.warn("👻 Make sure that the url is a valid Github repository!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Background>
      <ToastContainer />
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto 1rem auto;

  input[type="text"] {
    margin-bottom: 0.3rem;
    width: 100%;
    border: 2px solid #344455;
    border-radius: 5px;
    font-size: 20px;
    background-image: url(/img/search.png);
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position: left 10px center;
    padding: 10px 20px 10px 40px;
    transition: width 0.3s ease-in-out;
  }

  input[type="text"]:focus {
    width: 100%;
  }

  button {
    background-color: #5e84ff;
    padding: 1rem;

    cursor: pointer;

    border: none;
    border-radius: 5px;

    color: white;
    font-size: 1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export default SearchBar;
