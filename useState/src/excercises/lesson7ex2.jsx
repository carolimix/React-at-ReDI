import { useState } from "react";

/**
 *  INSTRUCTIONS:
 *  We have some elements here that are repeated a lot. This is bad practice, one of the primary benefits of React
 *  are the _reusable_ components.
 *
 *  Please get rid of the code duplication by creating reusable components for the squares and buttons.
 * */

const Lesson7Exercise2 = () => {
  return (
    <>
      <h3>Lesson 7 Exercise 2</h3>
<SquareComponent color='red'/>
<SquareComponent color='yellow'/>
<SquareComponent color='blue'/>

    
    </>
  );
};


const ButtonComponent (name) => {
    return (
        <button onClick={() => alert(`${name} clicked!` )}>{name}</button>
    )
}

export default Lesson7Exercise2;
