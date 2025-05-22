//import { BsArrowDown } from "react-icons/bs"
import ArrowLeft from '../../assets/vectors/Vector (6).png'
import ArrowDown from '../../assets/vectors/Vector (5).png'
import Minus from '../../assets/vectors/Vector (3).png'
import Plus from '../../assets/vectors/Vector (4).png'
import WhiteBin from '../../assets/vectors/Vector (1).png'
import RedBin from '../../assets/vectors/Vector.png'
import Book from '../../assets/maths.png'
import MasterCard from '../../assets/vectors/logos_mastercard.png'
import VisaCard from '../../assets/vectors/Vector (2).png'
import VerveCard from '../../assets/vectors/image 11.png'
import PayPal from '../../assets/vectors/logos_paypal.png'
export const Cart= () => {
    return (
        <>
           <div className="bg-[#10375C] text-[#F4F6FF] min-h-[calc(100vh-4rem)] mt-16">
              <div className="flex justify-center items-center pt-20">
                    <div className="flex flex-col items-start w-120 ">
                        <div className='flex items-center space-x-3 mb-3'>
                            <img src={ArrowLeft} className="text-[#F4F6FF]" alt="" />
                            <p className="text-[22px]">Continue Shopping</p>
                        </div>
                        <hr className='w-100 h-[1px] mb-5' />

                        <div className='flex w-100 justify-between '>
                            <div>
                                <h1 className='text-[27px] font-bold'>Shopping Cart</h1>
                                <p className='pt-1'>You have 4 items in your cart</p>
                            </div>
                            <div className='flex items-center space-x-2 pt-11 '>
                                <p>Sort by price</p>
                                <img src={ArrowDown} alt="" />
                            </div>
                        </div>

                        <div className='flex mt-5 mb-1 items-center space-x-10 bg-[#10375e] shadow-2xl shadow-gray-900 py-4 px-3'>
                            <div className=''>
                                <img src={Book} alt="" className='w-12 h-12'/>
                            </div>
                            <div className=''>
                                <p>MEC 411</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <img src={Minus} alt="" className=''/>
                                <p className='text-[15px] border rounded-md border-[#fff] px-1 '>1</p>
                                <img src={Plus} alt="" className=''/>
                            </div>
                            <div>
                                <p className='text-[15px]'>3400</p>
                            </div>
                            <div>
                                <img src={WhiteBin} alt="" className=' items-center w-4 h-5'/>
                            </div>
                        </div>

                        <div className='flex mt-5 mb-1 items-center space-x-10 bg-[#10375e] shadow-2xl shadow-gray-900 py-4 px-3'>

                            <div className=''>
                                <img src={Book} alt="" className='w-12 h-12'/>
                            </div>
                            <div className=''>
                                <p>MEC 411</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <img src={Minus} alt="" className=''/>
                                <p className='text-[15px] border rounded-md border-[#fff] px-1 '>1</p>
                                <img src={Plus} alt="" className=''/>
                            </div>
                            <div>
                                <p className='text-[15px]'>3400</p>
                            </div>
                            <div>
                                <img src={WhiteBin} alt="" className=' items-center w-4 h-5'/>
                            </div>
                        </div>

                        <div className='flex mt-5 mb-1 items-center space-x-10 bg-[#10375e] shadow-2xl shadow-gray-900 py-4 px-3'>

                            <div className=''>
                                <img src={Book} alt="" className='w-12 h-12'/>
                            </div>
                            <div className=''>
                                <p>MEC 411</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <img src={Minus} alt="" className=''/>
                                <p className='text-[15px] border rounded-md border-[#fff] px-1 '>1</p>
                                <img src={Plus} alt="" className=''/>
                            </div>
                            <div>
                                <p className='text-[15px]'>3400</p>
                            </div>
                            <div>
                                <img src={WhiteBin} alt="" className=' items-center w-4 h-5'/>
                            </div>
                        </div>

                        <div className='flex mt-5 mb-1 items-center space-x-10 bg-[#10375e] shadow-2xl shadow-gray-900 py-4 px-3'>

                            <div className=''>
                                <img src={Book} alt="" className='w-12 h-12'/>
                            </div>
                            <div className=''>
                                <p>MEC 411</p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <img src={Minus} alt="" className=''/>
                                <p className='text-[15px] border rounded-md border-[#fff] px-1 '>1</p>
                                <img src={Plus} alt="" className=''/>
                            </div>
                            <div>
                                <p className='text-[15px]'>3400</p>
                            </div>
                            <div>
                                <img src={RedBin} alt="" className=' items-center w-4 h-5'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-120 bg-[#ffee00e7] pl-8 pt-8 rounded-md pb-6 '>
                        <p className='font-medium text-[#20px]'>Card Type</p>
                        <div className='flex items-center space-x-15 py-5 pl-3'>
                            <img src={MasterCard} alt=""  />
                            <img src={VisaCard} alt="" />
                            <img src={VerveCard} alt="" />
                            <img src={PayPal} alt="" />
                        </div>

                        <form action="">
                            <div className='space-y-5'>
                                <div className=''>
                                    <label htmlFor="name" className='font-medium text-[#20px]'>Name on card</label>
                                    <div className='w-100 pt-1'>
                                        <input type="text" 
                                        placeholder='Name'
                                        className='w-full bg-[#10375e] p-2 rounded-md outline-none text-gray-300'
                                    />
                                    </div>
                                    
                                </div>

                                <div className=''>
                                    <label htmlFor="name" className='font-medium text-[#20px]'>Expriration Number</label>
                                    <div className='w-100 pt-1'>
                                        <input type="text" 
                                        placeholder='1110 0000 5678 ****'
                                        className='w-full bg-[#10375e] p-2 rounded-md outline-none text-gray-300'
                                    />
                                    </div>
                                    
                                </div>
                                <div className='flex justify-between'>
                                    <div className='w-50 pr-5'>
                                        <label htmlFor="name" className='font-medium text-[#20px]'>Name on card</label>
                                        <div className=' pt-2'>
                                            <input type="text" 
                                            placeholder='Name'
                                            className='w-full bg-[#10375e] p-2 rounded-md outline-none text-gray-300'
                                            />
                                        </div>
                                    
                                    </div>

                                    <div className=' w-50 ml-5 pr-5'>
                                        <label htmlFor="name" className='font-medium text-[#20px]'>Expiration Date</label>
                                        <div className=' pt-2'>
                                            <input type="text" 
                                            placeholder='1110 0000 5678 *****'
                                            className='w-full bg-[#10375e] p-2 rounded-md outline-none text-gray-300'
                                            />
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className='space-x-3'>
                                    <div className='flex justify-between pr-3 font-bold '>
                                        <p>Sum Total</p>
                                        <p>N75000.00</p>
                                    </div>
                                    <div className='flex justify-between pr-3 font-bold '>
                                        <p>Sum Total</p>
                                        <p>N75000.00</p>
                                    </div>
                                    <div className='flex justify-between pr-6 font-bold '>
                                        <p>Sum Total</p>
                                        <p>N75000.00</p>
                                    </div>
                                </div>
                            </div>
                            
                            <p className='flex text-center justify-center bg-[#10375e] py-2 my-3 rounded-md w-100 cursor-pointer hover:bg-[#10377a] text-[18px] font-bold'>Checkout</p>
                        </form>
                    </div>
                </div>
           </div> 
        </>
    )
}