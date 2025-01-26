import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Auth/login"
import { Home } from "./pages/Home"

function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</Router>
 
  )
}

export default App
