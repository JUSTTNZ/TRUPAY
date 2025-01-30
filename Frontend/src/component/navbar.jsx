import { useState, } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
export const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
         setMenuOpen(prevState => !prevState);
          console.log('Menu is open:', menuOpen);
        };
   
  
    return(
<header className={`flex justify-between z-50 items-center fixed top-0 p-4 lg:pl-[120px] lg:pr-[100px] z-10 w-full font-outfit  `}
    style={{
        background: 'linear-gradient(107.19deg, #10375C 79.13%, #EB8317 99.07%)',
    }}
>
  
    <a className="text-[24px] font-bold text-start font-outfit   text-[#EB8317]  p-2" href="/">
        <span>TRUPAY</span>
    </a>

   
    <nav className="flex-grow flex justify-end lg:justify-center relative">
<>
<button 
            className="block lg:hidden pr-5 bg-transparent border-none cursor-pointer z-30" 
        >
                <span ><BsCart className='w-[24px] h-[24px] text-white'  /></span>
      
        </button>
</>

        <button 
            className="block lg:hidden bg-transparent border-none cursor-pointer z-30" 
            onClick={toggleMenu}
        >
            {menuOpen ? (
                <MdOutlineCancel className=" text-white text-2xl" />
            ) : (
                <RxHamburgerMenu className=" text-white text-2xl" /> 
            )}
        </button>
       
      

        <ul 
            className={`flex-col lg:flex-row items-center m-2 p-2 transition-all duration-300 flex justify-center bg-[#EB8317] rounded-full
                ${menuOpen ? 'flex absolute top-0 left-0 w-full bg-[#457AD4] p-4 flex-col items-center z-20 shadow-lg rounded-lg' : 'hidden lg:flex flex justify-center '} 
                `}
        >
            <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/home" className={ ({isActive}) => ` ${isActive ? 'text-[#10375C] ':'text-white  '}   text-sm  px-4 py-1 transition-colors duration-200 `}>Home</NavLink>
            </li>
            
            <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/#"  className={ ({isActive}) => ` ${isActive ? 'text-[#10375C] ':'text-white  '}    text-sm  px-4 py-1 transition-colors duration-200   `}>Dashboard</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/#" className={({isActive}) =>` ${isActive ? 'text-[#10375C]' :'text-white  '}  text-sm text-base  px-4 py-1 transition-colors duration-200   `}>Admin</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/#" className={({isActive}) => ` ${isActive ?'text-[#10375C] ':'text-white  '}  text-sm text-base  px-4 py-1 transition-colors duration-200    `} >Payment</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/#" className={({isActive}) => ` ${isActive ?'text-[#10375C]':'text-white  '} text-sm text-base  px-4 py-1 transition-colors duration-200   `} >History</NavLink>
            </li>
        </ul>
    </nav>

    <ul className={`flex ml-auto lg:mr-10 ${menuOpen ? 'hidden' : 'hidden lg:flex'}`}>
        <li className={`${menuOpen ? 'mb-3' : ''}`}>
            <a 
                href='/#'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#EB8317] inline-flex items-center rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-transparent  transition-colors duration-200 hover:bg-[#EB8317] border-[#EB8317] border-1 hover:text-white cursor-pointer"
            >
          Login
            </a>


        </li>
        <li className={` lg:px-3${menuOpen ? 'mb-3 ' : ''}`}>
            <a 
                href='/#'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white inline-flex items-center rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-[#EB8317]  transition-colors duration-200 hover:bg-[#EB8317] border-[#EB8317] border-1 hover:text-white cursor-pointer"
            >
          Sign Up
            </a>


        </li>
       
    </ul>

</header>
    )
}