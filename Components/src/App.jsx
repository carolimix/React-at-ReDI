import Navbar from "./components/Navbar";

function App() {
  const dinnerPreference = "Hamburguesas";
  let dinnerPlan;
  /* 
  if (dinnerPreference === 'Hamburguesas') {
    dinnerPlan = 'Vamos a comer a un americano'
  } else {
    dinnerPlan = 'Vamos a comer Pizza'
  } */

  const favMeals = ["pizza", "sushi", "burger", "papitas"];
  return (
    <>
      <Navbar />
      <h1>Hola</h1>
      {/* {dinnerPreference === "Hamburguesas" ? (
        <h2>Vamos a Burgermeister</h2>
      ) : (
        <h2>Vamos a comer Pizza</h2>
      )} */}

      {favMeals.map((meal, id) => (
        <h2 key={id}>{meal}</h2>
      ))}
      {/* siempre pide id cuando devolves un elemento ne react */}
    </>
  );
}

export default App;
