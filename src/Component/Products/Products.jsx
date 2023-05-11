import React from 'react';
import data from '../../store';

export default function Products(props) {
  return (
    <>
      <div className='row mt-5 pt-5'>
        {data.map((value, index) => (
          <div key={value.id} className='col-md-4 text-center'>
            <img height='299' className='w-100' src={value.image} alt='' />
            <div className='cartTitle'>
              <h6 className='my-4'>{value.title.split(' ').splice(0, 5).join(' ')}</h6>
              <span className='d-block'>{value.price}</span>
            </div>
            <div onClick={()=>{
                props.addItem(value)
            }} className='btn btn-info w-100 my-3'>
              Add
            </div> 
          </div>
        ))}
      </div>
    </>
  );
}
