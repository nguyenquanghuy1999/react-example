import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutDefault from "./layouts/LayoutDefault"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutDefault> <Home /> </LayoutDefault>} />
          <Route path='/about' element={<LayoutDefault> <About /> </LayoutDefault>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
