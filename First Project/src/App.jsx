import { useState } from "react";
import "./App.css";

const user = {
  name: "Carolina Acuña",
  imageUrl:
    "https://drive.google.com/file/d/1CMN4SRoTwEwynYYTFiBM1vBH4Zj2JRXg/view?usp=drive_link",
  imageSize: 90,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Carolina's Portfolio</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          Click if you visited {count}
        </button>
      </div>
    </>
  );
}

export default App;
