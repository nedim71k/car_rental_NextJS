import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import CarCardSkeleton from './CarCardSkeleton';
import BookingModal from '../CarBooking/BookingModal';

function CarsList(props: any) {
  const [isLoaded, setIsLoaded]=useState(true)
  const [selectedCar, setSelectedCar]=useState<any>([]);

  useEffect(()=>{
    console.log(props.carsList);
    if(props.carsList)
    {
      setIsLoaded(false)
    }
  },[props.carsList])

  return (
    
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {!isLoaded && props.carsList?.map((car:any) => (
    <div key={car.id} onClick={()=>{(window as any).my_modal_4.showModal()
      setSelectedCar(car)}}> 
      <CarCard car={car} />
    </div>
    ))}
    {isLoaded?
    [1,2,3,4,5].map((item)=>(
    <CarCardSkeleton key={item} />
    ))
    :null}
     
    <dialog id="my_modal_4" className="modal">
      <BookingModal car={selectedCar}/>
    </dialog>

  </div>
  )

  


}

export default CarsList;