import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Auth/login"
import { Home } from "./pages/Home"
import { Payment } from "./pages/Payment";
import 'animate.css';

function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
  </Routes>
</Router>
 
  )
}

export default App
