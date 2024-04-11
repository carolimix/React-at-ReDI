const WeatherItem = ({ name, image, onClick }) => {
  return (
    <li className='weatherItem'>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <button
        onClick={() => {
          onClick(name);
        }}
      >
        ➕
      </button>
    </li>
  );
};

export default WeatherItem;
