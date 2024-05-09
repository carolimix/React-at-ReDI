import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard/CountryCard.jsx' 
import styles from '../views/CountriesView.module.css';

const CountriesView = () => {
    console.log("%c component rendered", "color:green");
const [countries, setCountries] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)


async function getCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        console.log('response:', response)

        if(!response.ok) {
            setIsError(true)
            throw new Error('...Something very bad happened... ')
        }
        const data = await response.json();
        setCountries(data)
        setIsError(false)
        console.log('data:',data)
    } catch (error) {
        setIsError(true)
        console.log("error inside catch block :>> ", error.message)
    } finally {
        setIsLoading(false)
    }

}

useEffect(() => {
    console.log("%c useEffect run", "color:red");
 getCountries()
}, [])


  return (
    <div className={styles.wrapper}>
    <h1>Rest Countries</h1>
    <div className={styles.container}>
      {console.log("%c JSX rendered", "color:orange")}
      {countries && countries.map((country, index) => (
          <CountryCard 
            key={index}
            name={country.name.official}
            image={country.flags.svg}
           /*  currency={country.currencies} */
            capital={country.capital}    
          />
      ))}
      {isLoading && <h1>...Loading...</h1>}
      {isError && <h1>...Something went wrong...</h1>}
    </div>
  </div>
  )
}

export default CountriesView
