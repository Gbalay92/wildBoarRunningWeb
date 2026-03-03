import { Routes, Route, Navigate  } from "react-router-dom";
import { Header } from './components/Header'
import { Classification } from './components/Classification'
import { DistanceNav } from './components/DistanceNav'

function App() {
  return (
    <>
      <Header />
      <DistanceNav />
      <Routes>
        <Route path="/" element={<Navigate to="/42k" replace />} />
        <Route path="/:urlDistance" element={<Classification />} />
      </Routes>
    </>
  )
}

export default App
