import React from 'react';

const Footer = () => {

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  return (
    <footer className='text-center mt-5 mb-4'>
      <p>Copyright @somonhasan !! Date:{date}/{month}/{year} !! Time={hour}:{minute}:{second}</p>
    </footer>
  );
};

export default Footer;