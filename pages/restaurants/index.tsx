 'use client';
 
import Multiselect from "@/components/dropdown";
 
import { LocationIcon, SearchIcon } from "@/components/icons";
import ModalComp from "@/components/modal";
import { title } from "@/components/primitives";
import Standalone, { CardSkeleton } from "@/components/skeletons";
import { comfortaa } from "@/config/fonts";
import DefaultLayout from "@/layouts/default";
import { sampleData } from "@/lib/api/data";
import { fetchMarkersBySearch } from "@/lib/redux/reducers/markersReducer";
import store from "@/lib/redux/store";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { unwrapResult } from "@reduxjs/toolkit";
import { marker } from "leaflet";
 




import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MapLeaflet = dynamic(() => import('@/components/map'), {
  ssr: false,
});


export default function Restaurants() {

     const [isOpen, setIsOpen] = useState(false);
const [locationGrant,setLocationGrant]=useState(false);
const [userLocation,setUserLocation]=useState(null);
  const handleOpen = () => {
    setIsOpen(true);
   
  };

  const handleClose = (e) => {
 
    setIsOpen(false);
     if(e.target.getAttribute("data-permission")==="true"){
       setLocationGrant(true);
     } else{
      setLocationGrant(false);
     }
  };

const [searchKeyword,setSearchKeyword]=useState("");
 
   const markers = useSelector((state) => state.markers.markers);
  const status = useSelector((state) => state.markers.status);

  useEffect(() => {
    if (status === 'succeeded') {
      console.log("Async operation complete!");
      
      // You can perform any necessary actions here
    }
    // console.log(markers);
  }, [status, markers]);

  useEffect(()=>{
    if(!locationGrant){
       setTimeout(() => {
        setIsOpen(true);
       }, 1000);
    }
    if(locationGrant){
       if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
          console.log(latitude,longitude);
        },
        (error) => {
           console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    }

  },[locationGrant])

  function handleSearch() {
 
const action = fetchMarkersBySearch({ payload: searchKeyword });
store.dispatch(action);
// const result = await store.dispatch(action);
// const unwrappedResult = unwrapResult(result);
// console.log(unwrappedResult)

}




   const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search by city ..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onChange={(e)=>setSearchKeyword(e.target.value)}
    />
  );

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <DefaultLayout>
      
      
       
      <ModalComp isOpen={isOpen} onClose={(event)=>handleClose(event)} />

<section className={`${comfortaa.variable} pagewrapper restaurant-page`}>


       <div className="search   w-full">
      <h1><span className={title({color:"primary"})}>Pet</span>  &nbsp; Friendly Restaurants Near You</h1>
     <div className="flex gap-4">
      { searchInput }<Button size="md" onClick={handleSearch}>
        Search places.
      </Button > 
      <Multiselect/>
        <Button isIconOnly color="primary" aria-label="Like" onPress={handleOpen}>
        <LocationIcon />
      </Button>  
     </div>
      </div>
      <div className="leftColumn    ">
       
         
 
      
     {markers?.features?.length > 0 ? (
      <Accordion selectionMode="multiple">  
      {markers["features"].map((item,index)=>
       <AccordionItem key={index} aria-label={item.properties.name} subtitle={item.properties.categories.join(", ")} title={item.properties.name}>
        {item.properties.name}
     </AccordionItem>  )}
      </Accordion>
  
) : (
 <div> <Standalone />
   <Standalone />
    <Standalone /></div>
)}

    
    
      
      </div>
      <div className="rightColumn   ">
    {userLocation? <MapLeaflet  center={userLocation}/>:<CardSkeleton/>}
      
      </div>
      </section>
    </DefaultLayout>
  );
}
