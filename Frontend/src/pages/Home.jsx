import { Navbar } from "../component/navbar"
import homeImg from '../assets/home.png'
import homeImg1 from '../assets/vector.png'
export const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="bg-[#10375C] pt-20 z-10">
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] pt-5 lg:pl-[150px] lg:pr-[150px] p-7">
    <div className="relative ">
        <h4 className="text-[#F4F6FF] font-outfit font-bold text-[40px] md:text-[50px] leading-[1.2] tracking[-0.03em] mb-4">
            Purchasing books for your Academic success just got better.
        </h4>
        <div className="">
            <img src={homeImg1} alt="Home Image 1" className=" h-auto" />
        </div>
    </div>

    <div className="relative lg:right-[60px] lg:top-[-20px]">
        <img src={homeImg} alt="Home Image" className="lg:w-[500px] lg:h-[500px] w-full h-full" />
    </div>
</div>
        </div>
        </div>
        </>
    )
}