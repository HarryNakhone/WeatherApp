import styled from "styled-components";

export const PrimaryWrapper = styled.div`
  .container {
    margin: 80px auto;
    width: 300px;
    padding: 38px 20px;
    border: 2px double #ccc;
    border-radius: 16%;
  }

  .weatherContent > span {
    font-size: 20px;
  }

  svg {
    font-size: 100px;
  }

  h2 {
    margin: 10px 0;
    font-size: 37px;
    .celcius {
      font-size: 37px;
    }
  }

  .high-low {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 10px;
    }
  }

  .temperature {
    display: flex;
    margin: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
