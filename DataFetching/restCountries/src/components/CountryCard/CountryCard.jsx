import styles from '../CountryCard/CountryCard.module.css'

const CountryCard = ({ name, image, capital, currency }) => {
  return (
    <div className={styles.countries}>
        <img
          alt={name}
          height="200"
          src={image}
          width="300"
        />
      <div>
          <h3>{name}</h3>
{/* <h3>{currency}</h3> */}
        </div>
<div className={styles.extras}> <h4><span>Capital: </span> {capital}</h4></div>
         
        </div>
   );
};

export default CountryCard;
