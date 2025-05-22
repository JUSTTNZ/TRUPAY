import {  LoginForm } from "./loginform";
import { RegisterForm } from "./registerform";
import { useState } from "react";
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    }
  
    return (
    <div style={{
          background:
            "linear-gradient(239.55deg, #F3C623 -2.42%, #FDC752 27.13%, #10375C 68.51%)",
        }}>
      {isLogin ? (
        <div>
           <LoginForm 
            toggleForm={toggleForm}
        />
        </div>
      ) : (
        <div>
          <RegisterForm
          href="/register"
         toggleForm={toggleForm} />
        </div>
        
      )}
    </div>
    );
  };
  
  export default Login;