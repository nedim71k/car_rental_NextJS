import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';

const PiSteeringWheelFill = dynamic(() => import('react-icons/pi').then(mod => mod.PiSteeringWheelFill), { ssr: false });
const MdAirlineSeatReclineNormal = dynamic(() => import('react-icons/md').then(mod => mod.MdAirlineSeatReclineNormal), { ssr: false });
const FaGasPump = dynamic(() => import('react-icons/fa').then(mod => mod.FaGasPump), { ssr: false });


function CarCard(props:any) {
  const [car,setCar]=useState<any>();

  useEffect(()=>{
    if(props.car)
    {
      setCar(props.car)
    }
  },[props.car])
  return car&&(
    <div className='group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5 hover:bg-white hover:border-[1px] cursor-pointer duration-50 border-yellow-500'>
      <h2 className='text-[20px] font-bold mb-2'>{car?.name}</h2>
      <span className='text-[20px] font-light'>$</span>
      <span className='text-[20px] font-bold'>{car.price}</span>
      <span className='text-[12px] font-light'> /day</span>
      <Image src={car.image?.url || "/logo.jpg"}
        alt={car.name || "car image"}
        width={220}
        height={200}
        className='w-[250px] h-[150px] mb-3 object-contain' />
      <div className='flex justify-around group-hover:hidden'>
        <div className='text-center text-gray-500'>
          <PiSteeringWheelFill className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
        </div>
        <div className='text-center text-gray-500'>
          <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat</h2>
        </div>
        <div className='text-center text-gray-500'>
          <FaGasPump className='w-full text-[22px] mb-2'/>
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} KMPL </h2>
        </div>
      </div>
      <button className='hidden group-hover:flex bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 p-2 rounded-lg text-white w-full px-5 justify-between items-center'>Rent Now
        <span className='bg-yellow-400 p-1 rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
  <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        </span>
      </button>
    </div>
    
  )
}

export default CarCard