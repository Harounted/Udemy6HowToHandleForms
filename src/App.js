import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter);
    };
  }, [counter]);

  return (
    <div>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        Click To Increase +
      </button>
      <button className="button" onClick={() => setCounter(counter - 1)}>
        Click To Decrease -
      </button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;
