import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';
import restaurantData from '../data/Resturantdata';

export default function Toprest() {
    const [slide,setSlide]=useState(0);
    const nextSlide=()=>{
        if(restaurantData.length-4==slide) return false;
        setSlide(slide+2);
    }
    const prevSlide=()=>{
        if(slide==0) return false;
        setSlide(slide-2);        
    }
  return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex my-5 items-center justify-between'>
            <div className='text-[25px] font-bold'>Top restaurant chains in Agra</div>
            <div className="flex">
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                    <FaArrowLeft/>
                </div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
        <div className="flex gap-5 overflow-hidden">
            {
                restaurantData.map(
                    (data,index)=>{
                        return <Card width="w-full md:w-[273px]" {...data} key={index} slide={slide}/>
                    }
                )
            }
        </div>
        <hr className='my-6 border-[1px]'/>
    </div>
  )
}
