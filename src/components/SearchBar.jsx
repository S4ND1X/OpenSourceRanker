import { useHistory } from "react-router";
import styled from "styled-components";

const SearchBar = ({ search, handleChange }) => {
  const history = useHistory();

  return (
    <Background>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button
        onClick={() => history.push(`/repo/${encodeURIComponent(search)}`)}
      >
        Search
      </button>
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
