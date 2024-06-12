import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import catogaryData from "../data/catogaryData"

export default function Catogary() {
    // const [catorgary,setCatogary]=useState([]);
    // const fetchCatogary=async()=>{
    //     const response= await fetch("./data/catogary.json");
    //     const data=await response.json();
    //     setCatogary(data);
    // }
    // useEffect(
    //     ()=>{
    //         fetchCatogary();
    //     },[]
    // )
    const [slide,setSlide]=useState(0);
    const nextSlide=()=>{
        if(catogaryData.length-8==slide) return false;
        setSlide(slide+3);
    }
    const prevSlide=()=>{
        if(slide==0) return false;
        setSlide(slide-3);        
    }
  return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex my-5 items-center justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind?</div>
            <div className="flex">
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                    <FaArrowLeft/>
                </div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={nextSlide}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
        <div className="flex overflow-hidden">
            {
                catogaryData.map(
                    (cat,index)=>{
                        return(
                            <div style={{
                                transform:`translateX(-${slide*100}%)`
                            }} key={index} className="w-[150px] shrink-0 duration-500">
                                <img src={cat.images} alt="" />
                            </div>
                        )
                    }
                )
            }
        </div>
        <hr className='my-6 border-[1px]'/>
    </div>
  )
}
