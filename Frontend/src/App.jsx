import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Auth/login"
import { Home } from "./pages/Home"
import { Payment } from "./pages/Payment";
import { TransactionTable } from "./pages/History";
import 'animate.css';
import { RegisterForm } from "./Auth/registerform";

function App() {
 

  return (

<Router>
  <Routes>
    <Route path="/" element={<Login />} />
  
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/home" element={<Home />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/history" element={<TransactionTable />} />
  </Routes>
</Router>
 
  )
}

export default App
