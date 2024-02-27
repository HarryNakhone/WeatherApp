import { RiSearchEyeLine } from "react-icons/ri";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { api_endPoint, api_key } from "./DisplayWeather";
import { Context } from "../WeatherContext";
import { error } from "console";
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px;
  width: 600px;
  border: 1px double #ccc;
  border-radius: 12px;
  margin: auto;
  background: rgb(206, 198, 198);

  .searchBox {
    display: flex;
    align-items: center;
    width: 300px;
  }
  .searchBox > input {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    margin: 10px;
    border: 2px double #ccc;
    box-sizing: border-box;
    transition: border 5s;
  }

  .searchBox:hover {
    border-color: #3498db;
  }

  svg {
    font-size: 30px;
  }
`;


const SearchPlace = () => {
  const [search, setSearch] = useState<string>("");
  const { setWeather } = useContext(Context) || { setWeather: () => {} };

  const fetchSearchWeather = async (city: string) => {
    try {
      const url = `${api_endPoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const reponse = await axios.get(url);

      const searchedWeather = reponse.data;

      return { searchedWeather };
    } catch (error) {
      console.error("Error from axios");
      throw new Error("Error failed to fetch data from searching");
    }
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      return;
    }
    try {
      const { searchedWeather } = await fetchSearchWeather(search);
      setWeather(searchedWeather);
    } catch (error) {
      console.log("Fetched failed");
    }
  };
  return (
    <SearchWrapper>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="searchIconBox">
          s
          <RiSearchEyeLine className="searchIcon" onClick={handleSearch} />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default SearchPlace;
