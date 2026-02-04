import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Classification } from './components/Classification'
import runners from './data-example.json'


function App() {
  const [runnersList, setRunnersList] = useState([]);
  useEffect(() => {
    const orderByTime = (a, b) => {
      const aSegundos = a.marca
        .split(":")
        .reduce((acc, val) => acc * 60 + Number(val), 0);

      const bSegundos = b.marca
        .split(":")
        .reduce((acc, val) => acc * 60 + Number(val), 0);

      return aSegundos - bSegundos;
    };

    const ordered = [...runners].sort(orderByTime);
    setRunnersList(ordered);
  }, []);

  return (
    <>
      <Header />
      <Classification runners={runnersList} />
    </>
  )
}

export default App
