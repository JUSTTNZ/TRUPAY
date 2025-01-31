import { Tesmonial } from "./testmonial"


export const Works = () => {
    return(
        <div className="pt-10 p-4 lg:pl-[120px] lg:pr-[100px]" style={{
            background: `linear-gradient(313.05deg, #10375C 0.84%, #F3C623 110.8%)`

        }}>
            <div>
            <h5 className="font-bold font-outfit text-[40px] text-center text-white mb-8 animate__animated animate__fadeInUp ">
How it works
</h5>
            <div className="bg-[#EB8317]">
                <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-4">
                    <div className="flex-col animate-fadeInLeft">
                        <div className="flex ">
                        <div className="bg-[#F3C623] rounded-full w-[34px] h-[34px] flex justify-center items-center">
                            
<span className=" text-[#EB8317] text-[22px] font-outfit font-bold">1</span>
                        </div>
                        <h4 className="text-[20px] font-bold text-white pl-2">Search for book</h4>
                        </div>

                        <p className="font-normal text-[16px] text-white p-4 pl-10">
                        Lorem ipsum dolor sit amet consectetur.
                         Malesuada morbi turpis risus sed et lacus. Lectus turpis sit faucibus enim.
                        </p>
                    </div>

                    <div className="flex-col animate-fadeUp">
                    <div className="flex animate-fadeUp">
                        <div className="bg-[#F3C623] rounded-full w-[34px] h-[34px] flex justify-center items-center">
                            
<span className=" text-[#EB8317] text-[22px] font-outfit font-bold">2</span>
                        </div>
                        <h4 className="text-[20px] font-bold text-white pl-2">Make payment online</h4>
                        </div>

                        <p className="font-normal text-[16px] text-white p-4 pl-10">
                        Lorem ipsum dolor sit amet consectetur. Malesuada morbi turpis risus sed et lacus. Lectus turpis sit faucibus enim.
                        </p>
                    </div>
                    <div className="flex-col">
                    <div className="flex ">
                        <div className="bg-[#F3C623] rounded-full w-[34px] h-[34px] flex justify-center items-center">
                            
<span className=" text-[#EB8317] text-[22px] font-outfit font-bold">3</span>
                        </div>
                        <h4 className="text-[20px] font-bold text-white pl-2">Pickup order.</h4>
                        </div>

                        <p className="font-normal text-[16px] text-white p-4 pl-10">
                        Lorem ipsum dolor sit amet consectetur. Malesuada morbi turpis risus sed et lacus. Lectus turpis sit faucibus enim.
                        </p>
                    </div>
                
                </div>

            </div>
            </div>
            <Tesmonial />
  
        </div>
    )
}