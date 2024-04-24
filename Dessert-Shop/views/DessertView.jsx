import { useState } from "react";
import Cart from "../src/components/Cart/Cart.jsx";
import MenuItem from "../src/components/MenuItem/MenuItem.jsx";
import rawDesserts from "../src/mocks/desserts.json";

import styles from "./DessertView.module.css";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import SearchField from "../src/components/SearchField/SearchField.jsx";
import DiscountPopUp from "../src/components/DiscountPopUp/DiscountPopUp.jsx";

const DessertView = () => {
  const [desserts, setDesserts] = useState(rawDesserts);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleMenuClick = (name) => {
    let nextItems;

    if (selectedItems.includes(name)) {
      nextItems = selectedItems.filter((item) => item !== name);
    } else {
      nextItems = [...selectedItems, name];
    }

    setSelectedItems(nextItems);
  };

  const handleDessertsFilter = (query) => {
    const filteredDesserts = rawDesserts.filter((dessert) =>
      dessert.name.toLowerCase().includes(query.toLowerCase())
    );

    setDesserts(filteredDesserts);
    console.log(filteredDesserts)
  };

  return (
    <>
      <NavBar>
        <h1>Desserts Shop</h1>

        <SearchField filterDesserts={handleDessertsFilter} />
       

        <Cart
          selectedItems={selectedItems}
          onClear={() => setSelectedItems([])}
        />
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {desserts.length > 0 ? (
            desserts.map((dessert) => (
              <MenuItem
                key={dessert.name}
                name={dessert.name}
                image={dessert.image}
                onClick={handleMenuClick}
                isSelected={selectedItems.includes(dessert.name)}
              />
            ))
          ) : (
            <p>No desserts found :(</p>
          )}
        </div>
      </div>
      {selectedItems.length >= 3 && (
        <DiscountPopUp>
       <strong>Yey! You get a 10% discount. <br />
               <i>p.s: Don't forget to brush your teeths</i>  😜</strong>
        </DiscountPopUp>
      )}
    </>
  );
};

export default DessertView;
