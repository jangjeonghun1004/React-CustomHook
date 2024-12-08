import './App.css';
import useCounter from './hooks/useCounter';
import useWindowSize from './hooks/useWindowSize';
import useFetch from './hooks/useFetch';
import { useState } from 'react';

function App() {
  
  type Book = {
      id: number,
      title: string
  }

  const {count, increment, decrement} = useCounter(0);
  const [data, setData] = useState<Book[]>([]);
  const {loading, error} = useFetch("./src/hooks/data.json", setData);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>isLoading: {String(loading)}</p>
      {error && <p>{error}</p>}
      {data.map(item => <p key={item.id}>{item.title}</p> )}
    </>
  )
}

export default App
