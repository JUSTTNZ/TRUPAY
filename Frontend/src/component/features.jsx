import feat from '../assets/feat.png'
import feat1 from '../assets/feat1.png'
import feat2 from '../assets/feat2.png'
import feat3 from '../assets/feat3.png'
export const Features = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:pl-[120px] lg:pr-[80px] gap-[80px] p-4 ">
            <div className='pt-26'>
<h5 className="font-bold font-outfit text-[40px] text-white mb-3">
Features
</h5>
<span className="font-outfit text-[16px] leading-loose font-normal text-white">
The features of TRUPAY are as seamless and convenient as possible. They help the students make easy payment with various options like paying with their bank card or mobile app, it has diverse range of textbooks to pick from
</span>
            </div>
<div className="grid grid-cols-2 lg:grid-cols-2 gap-[50px] p-10 ">
    <div className='flex-col'>
    <div className="rounded-[26px] w-[100px] h-[100px] flex  justify-center items-center " style={{
    background: `linear-gradient(143.2deg, #EB8317 22.06%, #10375C 84.07%)`

}}>
<img src={feat}  className="object-cover h-[68px] w-[68px]"/>

</div>
<span className='text-sm font-normal text-white'>Easy Payment Options.</span>
    </div>
<div className='flex-col'>
<div className="rounded-[26px] w-[100px] h-[100px] flex justify-center items-center " style={{
    background: `linear-gradient(143.2deg, #EB8317 22.06%, #10375C 84.07%)`

}}>
<img src={feat1}  className="object-cover h-[68px] w-[68px]"/>
</div>
<span className='text-sm font-normal text-white'>Wide Range of Textbooks.</span>
</div>

<div className='flex-col'>
<div className="rounded-[26px] w-[100px] h-[100px] flex justify-center items-center " style={{
    background: `linear-gradient(143.2deg, #EB8317 22.06%, #10375C 84.07%)`

}}>
<img src={feat2}  className="object-cover h-[68px] w-[68px]"/>
</div>
<span className='text-sm font-normal text-white'>Secure Transactions.</span>
</div>
<div className='flex-col'>
<div className="rounded-[26px] w-[100px] h-[100px] flex justify-center items-center " style={{
    background: `linear-gradient(143.2deg, #EB8317 22.06%, #10375C 84.07%)`

}}>
<img src={feat3}  className="object-cover h-[68px] w-[68px]"/>
</div>
<span className='text-sm font-normal text-white text-center'>Quick Pickup.</span>
</div>

</div>
        </div>
    )
}