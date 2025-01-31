import maths from '../assets/maths.png'
import sci from '../assets/science.png'
import { TopPick } from './toppicks'
export const Categories = () => {
    return(
        <div className='pt-10' style={{
            background: `linear-gradient(180deg, #10375C 50%, #EB8317 120%)`

        }}>

   
        <div className="flex-col lg:pl-[120px] lg:pr-[100px]">
            <div className='mb-10'>
            <h5 className="font-bold font-outfit text-center text-[40px] text-white mb-5">Categories</h5>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
             <div className=" bg-[#EB8317] rounded-[35px] p-4 lg:w-[331px] w-full">
            <div className="">
            <img src={maths}  className='rounded-[20px] mb-3 w-full' />

            </div>
            <h4 className='text-[#10375C] font-normal text-[20px] font-outfit text-start mb-3'>Mathematics</h4>
            <div className='flex justify-center flex-col items-center mb-3 '>
            <button   className="text-[#F4F6FF] w-full rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-transparent  transition-colors duration-200 hover:border-[#10375C]  hover:text-[#10375C] border-[#F4F6FF] border-1  cursor-pointer">
            Browse Books Now
            </button>
            </div>
             </div>

             <div className=" bg-[#EB8317] rounded-[35px] p-4 lg:w-[331px] w-full">
            <div className="">
            <img src={sci}  className='rounded-[20px] mb-3 w-full' />

            </div>
            <h4 className='text-[#10375C] font-normal text-[20px] font-outfit text-start mb-3'>Science</h4>
            <div className='flex justify-center flex-col items-center mb-3 w-full'>
            <button   className="text-[#F4F6FF] w-full rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-transparent  transition-colors duration-200 hover:border-[#10375C]  hover:text-[#10375C] border-[#F4F6FF] border-1  cursor-pointer">
            Browse Books Now
            </button>
            </div>
             </div>


             <div className=" bg-[#EB8317] rounded-[35px] p-4 lg:w-[331px] w-full">
            <div className="">
            <img src={maths}  className='rounded-[20px] mb-3 w-full' />

            </div>
            <h4 className='text-[#10375C] font-normal text-[20px] font-outfit text-start mb-3'>Mathematics</h4>
            <div className='flex justify-center flex-col items-center mb-3 '>
            <button   className="text-[#F4F6FF] w-full rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-transparent  transition-colors duration-200 hover:border-[#10375C]  hover:text-[#10375C] border-[#F4F6FF] border-1  cursor-pointer">
            Browse Books Now
            </button>
            </div>
             </div>
            </div>
            </div>
          
        </div>
        <TopPick />
        </div>
    )
}