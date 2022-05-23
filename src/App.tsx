import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrementByOne = () => {
    dispatch(incremented());
  };

  const handleIncrementByAmount = (value: number) => {
    dispatch(amountAdded(value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button">count is: {count}</button>
        </p>

        <div>
          <button onClick={handleIncrementByOne} type="button">
            + 1
          </button>
          <button onClick={() => handleIncrementByAmount(5)} type="button">
            + 5
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
