import { Navbar } from "../component/navbar"
import homeImg from '../assets/home.png'
import homeImg1 from '../assets/vector1.png'
import { Features } from "../component/features"
import { Categories } from "../component/categories"
import { Works } from "../component/work"

export const Home = () => {
    return(
        <>
        <Navbar/>
        <div className=" pt-20 z-10"     style={{
        background: 'linear-gradient(107.19deg, #10375C 52.13%, #EB8317 89.07%)',
    }} >
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[80px] pt-5 lg:pl-[120px] lg:pr-[100px] p-7">
    <div className="relative ">
        <h4 className="text-[#F4F6FF] font-outfit font-bold text-[40px] md:text-[50px] lg:text-[50px]  leading-[1.2] tracking[-0.03em] mb-4">
        Get your textbooks
        without the hassle!
        </h4>
        <div className="relative top-[-20px]">
            <img src={homeImg1} alt="Home Image 1" className=" h-auto mb-6" />
        </div>
        <div className="pt-3 mb-8">
            <h5 className="text-white font-bold text-[15px]">
            Pay for your textbooks at affordable prices and at your convenience
            </h5>
            <span className=" lg:text-[14px] text-white leading-[16.8px] tracking-[-0.03em]">
            With TRUPAY, you don’t need to stand on the queue to make payments 
            and get your textbooks.
            </span>
        </div>
        <div className="pt-10">
            <button   className="text-[#EB8317] inline-flex items-center rounded-full text-sm  font-poppins   font-semibold px-6 py-2 bg-transparent  transition-colors duration-200 hover:bg-[#EB8317] border-[#EB8317] border-1 hover:text-white cursor-pointer">
            Browse Books Now
            </button>
        </div>
    </div>

    <div className="relative lg:right-[60px] lg:top-[-20px]">
        <img src={homeImg} alt="Home Image" className="lg:w-[500px] lg:h-[500px] w-full h-full" />
    </div>
</div>
        </div>
     <Features />
        </div>
        <Categories />
        <Works />
        </>
    )
}