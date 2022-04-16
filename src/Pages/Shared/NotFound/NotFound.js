import React from 'react';
import img from '../../../images/sleep.jpg'

const NotFound = () => {
  return (
    <div className='text-center mt-4'>
      <h3 className='text-primary'>Mechanics Is Sleeping</h3>
      <img  height={400} width ={900} src={img} alt="" />
    </div>
  );
};

export default NotFound;