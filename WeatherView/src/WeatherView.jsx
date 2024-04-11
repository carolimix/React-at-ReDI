import "./WeatherView.css";
import Sunny from "../src/assets/Sunny.png";
import Rainy from "../src/assets/Rainy.png";
import Windy from "../src/assets/Windy.png";
import Cloudy from "../src/assets/Cloudy.png";
import Warm from "../src/assets/Warm.png";
import Kalt from "../src/assets/Kalt.png";
import Snow from "../src/assets/Snow.png";
import April from "../src/assets/April.png";
import { useState } from "react";
import WeatherItem from "./components/WeatherItem";
import Cart from "./components/Cart";

const WeatherView = () => {
  const [selectedWeatherItem, setSelectedWeatherItem] = useState("");

  const onMenuItemClicked = (name) => {
    setSelectedWeatherItem(name);
  };

  return (
    <>
      <h1>Wie ist das Wetter heute?</h1>
      <Cart selectedWeatherItem={selectedWeatherItem} />
      <div className='menu'>
        <WeatherItem
          name='Es ist sonnig'
          image={Sunny}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es regnet'
          image={Rainy}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist bewölkt'
          image={Cloudy}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist windig'
          image={Windy}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es schneit'
          image={Snow}
          onClick={onMenuItemClicked}
        />
        ß
        <WeatherItem
          name='Es ist kalt'
          image={Kalt}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist warm'
          image={Warm}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist April'
          image={April}
          onClick={onMenuItemClicked}
        />
      </div>
    </>
  );
};

export default WeatherView;
