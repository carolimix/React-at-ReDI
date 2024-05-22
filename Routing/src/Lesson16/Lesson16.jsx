import {
    Link,
    Route,
    BrowserRouter as Router,
    Routes,
    useNavigate,
  } from "react-router-dom";
import styles from '../Lesson16/Lesson16.module.css'


/**
 * Lesson 16 Exercise: Router with Navigation Bar
 *
 * 1. Create a nav bar with Links to two options, 'Home' and 'About Me', with components that route there.
 * 2. Have a fallback option if the route isn't found (404)
 * 3. In the 'About Me' section, write a few sentences about yourself and create a button called "Go Back Home"
 *    that links the user back home.
 */

/**
 *
 * Lesson 16 Homework:
 * 1. Create a Router around the App that routes "/" to <RestaurantView />
 * 2. Create another route called "meals/:id" that provide detailed information about a dish
 * 3. Add another button to the MenuItem component named "More Info" that routes to the more information url with useNavigate
 * 4. In the component for detailed information, use the fetch API to get information about that meal
 *    in a useEffect and display all the details about that meal on the page. Use useParams to get the id.
 * 5. Look through the API response from fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) to see the additional properties
 *    available, e.g. strInstructions, strIngredient1, strIngredient2, etc., and lay out as many details about the meal as possible.
 */

export const Home = () => {
    return (
        <><h1>Homepage</h1></>
    )
}

export const About = () => {
const navigate = useNavigate()
    return (
        <>
        <h1>About Me ME me</h1>
        <button onClick={() => navigate('/')}>Go back home</button>
        </>
    )
}




export const Lesson16 = () => {

  return (
         <Router>
      <div  className={styles["lesson16-bg"]}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
            <Route path="/*" element={<p>Not found!</p>} />
          </Routes>
      </div>
    </Router>

  );
};

export default Lesson16;
