import { RiWaterPercentFill } from "react-icons/ri";
import { GiWindSlap } from "react-icons/gi";
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../WeatherContext";
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;

  .weatherDetails {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }

  .conIcon {
    display: flex;
    align-items: center;
    border: 2px double #ccc;
    padding: 16px;
    border-radius: 20px;
  }

  .humidDetail > h3 {
    margin: 0;
  }
  .humidDetail > p {
    margin: 5px;
  }
  .windDetail > h3 {
    margin: 0;
  }
  .windDetail > p {
    margin: 5px;
  }
  svg {
    font-size: 40px;
    padding: 10px 10px;
    padding-left: 4px;
  }
`;

const Description = () => {
  const { weatherData } = useContext(Context) || { weatherData: null };

  return (
    <DescriptionWrapper>
      {weatherData && (
        <div className="weatherDetails">
          <div className="conIcon">
            <RiWaterPercentFill />
            <div className="humidDetail">
              <h3>{`${weatherData.main.humidity} %`}</h3>
              <p>Humidty</p>
            </div>
          </div>

          <div className="conIcon">
            <GiWindSlap />
            <div className="windDetail">
              <h3>{`${weatherData.wind.speed} MPH`}</h3>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      )}
    </DescriptionWrapper>
  );
};

export default Description;
