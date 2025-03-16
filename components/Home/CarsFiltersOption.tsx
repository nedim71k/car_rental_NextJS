import React, { useEffect, useState } from 'react'

function CarsFiltersOption({carsList, setBrand, orderCarList, clearFilters, selectedBrand, selectedOrder}:any) {

  const [brandList, setBrandList] = useState<any>();
  const BrandSet=new Set()

  useEffect(()=>{
    if(carsList)
    {
      filterCarList();
    }

  },[carsList])
  const filterCarList=()=>{
    carsList.forEach((element:any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet)
    setBrandList(Array.from(BrandSet));
  }
  return (
  <div id='cars' className='mt-10 flex items-center justify-between'>
    <div>
      <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
      <h2>Explore our cars you might like</h2>
    </div>
    <div className='flex gap-5'>
      <select className="select select-bordered w-full max-w-xs" value={selectedOrder}
      onChange={(e)=>orderCarList(e.target.value)}>  
      <option disabled value="Price">Price</option>
      <option value={-1}>Min to Max</option>
      <option value={1}>Max to Min</option>
      </select>
      <select className="select select-bordered w-full md:block max-w-xs hidden"
      value={selectedBrand}
      onChange={(e)=>setBrand(e.target.value)}>
      <option disabled value="Manufactural">Manufactural</option>
        {brandList?.map((brand:string,index:number)=>(
          <option key={index}>{brand}</option>
           ))}
        
      </select>
      <button
          className="btn bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600  text-white px-4 rounded-full hover:scale-105 transition-all"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
    </div>
  </div>
  
  )
}

export default CarsFiltersOption