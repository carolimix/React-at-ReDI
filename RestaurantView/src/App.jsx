import "./App.css";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes } from "react-router-dom";
import RestaurantView from "./views/RestaurantView";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
  
    <Router>
    <nav>
      <ul>
        <li>
          <Link to='/'>Restaurant </Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<RestaurantView />} />
        <Route path="meals/:idMeal" element={<Meals />} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
