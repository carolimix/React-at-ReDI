import { useState } from "react";
import "./App.css";

const user = {
  name: "Carolina Acuña",
  imageUrl: "https://64.media.tumblr.com/tumblr_lz7vjoPGsL1qztbpfo1_500.jpg",
  imageSize: 200,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          heigth: user.imageSize,
        }}
      />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          Click if you are here {count}
        </button>
      </div>
    </>
  );
}

export default App;
