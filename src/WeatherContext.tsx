import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
export const Context = createContext<StateVarTypes | null>(null);

export interface StateVarTypes {
  weatherData: WeatherDataTypes | null;
  setWeather: Dispatch<SetStateAction<WeatherDataTypes | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface WeatherDataTypes {
  // Types for WeatherData from fecthing
  name: string;

  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };

  weather: {
    main: string;
  }[];

  wind: {
    speed: number;
  };

  sys: {
    country: string;
  };
}
interface WeatherChildren {
  // Type for children component wrap by this context tsx
  children: ReactNode;
}

const WeatherContext: React.FC<WeatherChildren> = ({ children }) => {
  const [weatherData, setWeather] = useState<WeatherDataTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contextValue: StateVarTypes = {
    weatherData,
    setWeather,
    isLoading,
    setIsLoading,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default WeatherContext;
