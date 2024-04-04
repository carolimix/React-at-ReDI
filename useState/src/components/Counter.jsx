import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }
  console.log(count);
  return (
    <div>
      <h1>Set Count Button</h1>
      <button onClick={updateCounter}>Counter</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
