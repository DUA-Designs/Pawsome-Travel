 import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { sampleData } from '@/lib/api/data';
import L from 'leaflet';
import { useSelector } from 'react-redux';


interface Marker {
  position: number[];
  popup: string;
}


const MapLeaflet = (center) => {
  const [markerPoints,setMarkerPoints]=useState([]);
 
    const markers = useSelector((state) => state.markers.markers);

  const status = useSelector((state) => state.markers.status);

const customIcon = L.icon({
  iconUrl: '/media/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

try {
    useEffect(() => {
      console.log(center)
   
      var markerPointData=[];
     if( markers && markers["features"] && markers["features"].length > 0){
    markerPointData= markers["features"].map((feature) => {
        return {
          position: [feature.lat, feature.lon],
          popup: feature.properties.name,
        };
      });
   
    
  
     }
     
     setMarkerPoints(markerPointData)
    
    }, [markers]);
} catch (error) {
  console.log(error);
  
}
 

  return (
    <MapContainer center={[center.center.lat,center.center.lon]} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker key={"default"} position={[center.center.lat,center.center.lon]}
  icon={customIcon}
  >
    <Popup>Default</Popup>

  </Marker>
     {markerPoints.length>0?markerPoints.map((points, index) => (
  <Marker key={index} position={[points.position[1], points.position[0]]}
  icon={customIcon}
  >
    <Popup>{points.popup}</Popup>

  </Marker>
)):""}

    </MapContainer>
    
  );
};

export default MapLeaflet;
 