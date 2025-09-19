//rfce
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Protfolio from "./pages/Protfolio"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/protfolio" element={<Protfolio/>}></Route>
      </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
