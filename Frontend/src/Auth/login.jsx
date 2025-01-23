import {  LoginForm } from "./loginform";

const Login = () => {

  
    return (
    <div className="font-[sans-serif]  flex items-center justify-center  p-4 pt-8  h-auto"   style={{
        background: "linear-gradient(239.55deg, #F3C623 -2.42%, #FDC752 27.13%, #10375C 68.51%)",
        
      }}>
      <div className="max-w-4xl max-md:max-w-lg w-full h-screen">   
    <LoginForm />

      </div>
    </div>
    );
  };
  
  export default Login;
