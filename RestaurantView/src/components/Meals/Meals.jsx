import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Meals() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    console.log("idMeal", idMeal);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Api response:", data);
        if (data.meals !== null) {
          setMeal(data.meals[0]);
        } else {
          setMeal(null);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setMeal(null);
      });
  }, [idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img style={{width: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <ul>
        {Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key) => (
            <li key={key}>{meal[key]}</li>
          ))}
      </ul>
    </div>
  );
}

export default Meals;
