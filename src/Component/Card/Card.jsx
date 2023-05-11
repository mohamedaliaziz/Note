import React from 'react';
import styles from './Card.module.css'
export default function Card(props) {

    return (
        <div className=''>
            <h2 className='cartItems mt-5 py-5 color '>cart items</h2>
            {props.selectedItems.map((value, index) => {
                return (
                    <div key={value.id} className='row text-center'>
                        <div className='col-md-3'>
                            <img className='w-100' src={value.image} alt="" />
                        </div>
                        <div className='col-md-9 px-4 mb-3'>
                            <h6>{value.title.split(' ').splice(0, 5).join(' ')}</h6>
                            <span className='my-3 d-block color prace'>{value.price}</span>
                            <div className='d-flex justify-content-evenly align-items-center  '>
                                <button onClick={() => {
                                    props.addItem(value)
                                }} className='btn btn-info'>+</button>
                                <span>{value.qty}</span>
                                <button onClick={() => {
                                    props.removeItem(value)
                                }} className='btn btn-danger'>-</button>
                                <button onClick={() => {
                                    props.removeProducts(value)
                                }} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

