import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const [services,setServices]=useState([]);
  useEffect( ()=>{
    fetch('http://localhost:5000/service')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    
      <div id='Services'>
      <h1 className='title mt-4 mb-3'>Our Services </h1>
      <div className='services'>
      {
        services.map(service=><Service service={service} key={service._id}></Service>)
      }
      </div>
      
    </div>
  );
};

export default Services;