import styles from './MenuItem.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

/**
 * INSTRUCTIONS:
 *
 * 1. Extract the <button> element into its own component called `Button`.
 * 2. Move the `Button` component into a new file called `Button.jsx` in a new folder called `Button`.
 * 3. Import the `Button` component into this file.
 * 4. Get the styles from the button in the `RestaurantView.css` file and move them to
 * the `Button.module.css` file, inside the same folder as the `Button.jsx` file.
 * 5. implement the css module in the `Button` component.
 */



const MenuItem = ({ idMeal, name, image, onClick, isSelected }) => {

  const navigate = useNavigate()
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <Button onClick={onClick} isSelected={isSelected} name={name}>
     {isSelected ? "Remove From Cart" : "Add To Cart"}  </Button>
     <button onClick={() => navigate(`/meals/${idMeal}`)}>More Info</button>
    </div>
  );
};

export default MenuItem;
