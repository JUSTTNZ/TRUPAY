import tes1 from '../assets/tes1.png'
export const Tesmonial = () => {
    return(
        <div className="pt-15">
                    <h5 className="font-bold font-outfit text-[40px] text-center text-white  ">
                    What people say
</h5>
<div className='text-center flex justify-center items-center mb-7'>
<h5 className="font-normal font-outfit text-[16px] text-center text-white max-w-md w-full max-w-2xl ">
        Discover what our satisfied customers have to say 
        about their experience with our products/services
</h5>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px] p-5">
            <div className="rounded-[20px] p-5" style={{
                background:` linear-gradient(326.94deg, #F3C623 13.08%, #EB8317 96.17%)`

            }}>
                <img src={tes1} className="rounded-full w-[60px] h-[60px]" />
            <div className=''>
                <h5 className="text-[16px] text-[#10375C] font-bold font-outfit mb-3 mt-2 ">
                Emmanuel Chukwuebuka
                </h5>
                <span className="font-normal text-sm text-[#10375C]">
                “TRUPAY is an amazing website, it helps with purchase my textbooks without delay and in my comfort”
                </span>
            </div>
            </div>
            <div className="rounded-[20px] p-5" style={{
                background:` linear-gradient(326.94deg, #F3C623 13.08%, #EB8317 96.17%)`

            }}>
                <img src={tes1} className="rounded-full w-[60px] h-[60px]" />
            <div className=''>
                <h5 className="text-[16px] text-[#10375C] font-bold font-outfit mb-3 mt-2 ">
                Emmanuel Chukwuebuka
                </h5>
                <span className="font-normal text-sm text-[#10375C]">
                “TRUPAY is an amazing website, it helps with purchase my textbooks without delay and in my comfort”
                </span>
            </div>
            </div>
            <div className="rounded-[20px] p-5" style={{
                background:` linear-gradient(326.94deg, #F3C623 13.08%, #EB8317 96.17%)`

            }}>
                <img src={tes1} className="rounded-full w-[60px] h-[60px]" />
            <div className=''>
                <h5 className="text-[16px] text-[#10375C] font-bold font-outfit mb-3 mt-2 ">
                Emmanuel Chukwuebuka
                </h5>
                <span className="font-normal text-sm text-[#10375C]">
                “TRUPAY is an amazing website, it helps with purchase my textbooks without delay and in my comfort”
                </span>
            </div>
            </div>
        </div>
        </div>
      
    )
}