import Daily from "./components/Daily"
import Today from "./components/Today"
import Weekly from "./components/Weekly"
import Monthly from "./components/Monthly"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Occasional from "./components/Occasional"
import TodoView from "./components/TodoView"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/occasional" element={<Occasional />} />
          <Route path="/view" element={<TodoView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
