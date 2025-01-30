import pick from '../assets/pick.png'
import pick1 from '../assets/pick1.png'
import pick2 from '../assets/pick2.png'
import pick3 from '../assets/pick3.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const TopPick= () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4 
        },
        largeDesktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 768, min: 464 },
            items: 1 
        },
        tablet: {
            breakpoint: { max: 464, min: 0 },
            items: 1 
        }
    };
    return(
        <div className='lg:pl-[120px] lg:pr-[100px]'>
                        <h5 className="font-bold font-outfit text-center text-[40px] text-white mb-5">Top Picks</h5>
                        <Carousel responsive={responsive} 
                        autoPlay={true}          
                        autoPlaySpeed={1000}    
                        infinite={true} 
                        swipeable={true}
                        arrows={false}      
                             
                       
                        className="pt-5 lg:pl-[120px] lg:pr-[100px]">
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick} alt="Pick 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick1} alt="Pick 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick2} alt="Pick 3" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick3} alt="Pick 4" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick} alt="Pick 3" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick1} alt="Pick 4" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick2} alt="Pick 4" className="w-full h-full object-cover" />
            </div>
            <div className="h-[322px] rounded-[28px] overflow-hidden">
                <img src={pick3} alt="Pick 4" className="w-full h-full object-cover" />
            </div>
        </Carousel>
        </div>
   
    )
}