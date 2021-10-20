import styled from "styled-components";

const SearchBar = ({ search, handleChange }) => {
  return (
    <Background>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </Background>
  );
};

const Background = styled.div`
  input[type="text"] {
    margin-bottom: 1rem;

    width: 50%;
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
`;

export default SearchBar;
