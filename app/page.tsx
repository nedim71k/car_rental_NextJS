"use client";

import AboutUs from "@/components/Home/AboutUs";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {
  const [carsList, setCarsList]=useState<any>([])
  const [carsOrgList, setCarsOrgList]=useState<any>([])
  const [selectedBrand, setSelectedBrand] = useState<string>("Manufactural");
  const [selectedOrder, setSelectedOrder] = useState<string>("Price");
  
  useEffect(()=>{
    getCarList_();
  },[]);

  const getCarList_=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  };

  const filterCarList=(brand:string)=>{
    setSelectedBrand(brand);
    const filterList=carsOrgList.filter((item:any)=>item.carBrand==brand);
    setCarsList(filterList);
  };

  const orderCarList=(order:any)=>{
    setSelectedOrder(order)
    const sortedData = [...carsOrgList].sort((a, b)=>
    order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData)
  };

  const clearFilters = () => {
    setCarsList(carsOrgList); 
    setSelectedBrand("Manufactural");
    setSelectedOrder("Price"); 
  };

  

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <CarsFiltersOption carsList={carsOrgList}
      orderCarList={(value:string)=>orderCarList(value)} setBrand={(value:string)=>filterCarList(value)} clearFilters={clearFilters} selectedBrand={selectedBrand}
      selectedOrder={selectedOrder}/>
      <CarsList carsList={carsList}/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
