import { useState } from "react";
import { LoginForm } from "./loginform";
import { RegisterForm } from "./registerform";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="font-[sans-serif] flex items-center justify-center p-4 pt-7 h-auto"
      style={{
        background:
          "linear-gradient(239.55deg, #F3C623 -2.42%, #FDC752 27.13%, #10375C 68.51%)",
      }}
    >
      <div className="max-w-4xl max-md:max-w-lg w-full h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <LoginForm onToggle={() => setIsLogin(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <RegisterForm onToggle={() => setIsLogin(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
