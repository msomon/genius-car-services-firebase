import React from 'react';

const Expert = ({expert}) => {
  const {name,img}= expert
  return (
    <div className=' m-10 g-5 m-10 col-sm-12 col-md-6 col-lg-4  '>

 <div className="card align-items-center p-3 " >
  <img src={img} className="card-img-top w-75  " alt="..."/>
  <div className="card-body">
    <h5>{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  );
};

export default Expert;