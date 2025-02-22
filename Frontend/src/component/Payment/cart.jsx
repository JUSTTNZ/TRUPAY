//import { BsArrowDown } from "react-icons/bs"
import ArrowLeft from '../../assets/vectors/Vector (6).png'
export const Cart= () => {
    return (
        <>
           <div className="bg-[#10375C] text-[#F4F6FF] min-h-[calc(100vh-4rem)] mt-16">
              <div className="container mx-auto pt-20">
                <div className="flex flex-col justify-center items-center">
                    <div className='flex items-center space-x-3'>
                        <img src={ArrowLeft} className="text-[#F4F6FF]" alt="" />
                        <p className="text-[22px]">Continue Shopping</p>
                    </div>
                    <hr className='w-100 h-[1px]' />
                </div>
                
              </div>
           </div> 
        </>
    )
}