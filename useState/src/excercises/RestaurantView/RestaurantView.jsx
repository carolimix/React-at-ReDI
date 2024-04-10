import "./RestaruantView.css";
import { useState } from "react";
import WeatherItem from "./components/WeatherItem";
import Cart from "./components/Cart";

const RestaurantView = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("empty");

  const onMenuItemClicked = (name) => {
    setSelectedMenuItem(name);
  };

  return (
    <>
      <h1>Wie ist das Wetter heute?</h1>
      <Cart selectedMenuItem={selectedMenuItem} />
      <div className='menu'>
        <WeatherItem
          name='Es ist schlecht'
          image={spaghettiImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es regnet'
          image={lasagnaImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist klar'
          image={lasagnaImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist bewölkt'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist windig'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es schneit'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
        ß
        <WeatherItem
          name='Es ist kalt'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist warm'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
        <WeatherItem
          name='Es ist heiß'
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
      </div>
    </>
  );
};

export default RestaurantView;
