import './Card.css'
import { HiChevronRight } from "react-icons/hi";
import icon from '../../assets/Images/right corner icon.png'
import img from '../../assets/Images/Young woman working on a computer.png'


const Card = () => {
  return (
    <div className="relative bg-[#081847] h-[400px] w-auto border-[#74758D] border-[7px] sm:rounded-[90px] rounded-[90px] px-10 py-4 sm:px-16 sm:py-8 flex flex-col justify-between overflow-hidden">
        <img src={icon} className=" w-20 sm:w-24 absolute top-0 right-0"/>
        <div className="mt-10 flex flex-col items-center justify-center">
            <h2 className="text-white text-2xl font-sans font-semibold mb-3">Sample text</h2>
            <h2 className="text-[#5C7BF4] text-lg font-medium"> Session Name</h2>
        </div>
        <div className="relative mb-8 sm:mb-3">
            <img src={img} className="w-16 sm:w-24 absolute -top-12 -left-9 sm:-top-[4.8rem] sm:-left-14 z-0"/>
            <div className="relative z-10">
                <button className="mx-auto flex justify-center bg-white px-2 sm:px-5 py-1">
                    <p className="uppercase sm:text-lg text-xs font-medium">Know More</p>
                    <HiChevronRight className="text-3xl"/>
                </button>
            </div>
        </div>
    </div>
  )
}
export default Card

