import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Auth/login"
import { Home } from "./pages/Home"
import { Payment } from "./pages/Payment";
import { TransactionTable } from "./pages/History";
import 'animate.css';
import Register from "./Auth/register";

function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
  
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/history" element={<TransactionTable />} />
  </Routes>
</Router>
 
  )
}

export default App
