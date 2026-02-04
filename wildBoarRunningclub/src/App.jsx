import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Classification } from './components/Classification'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:urlDistance" element={<Classification />} />
      </Routes>
    </>
  )
}

export default App
