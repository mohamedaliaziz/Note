import React from 'react';
import styles from './Navbar.module.css'
// import Nav from './../nav/nav';

export default function Navbar(props) {
    return <>

        <nav class="navbar navbar-expand-sm navbar-light min-color">
            <div class="container">
                <a class="navbar-brand fs-4 text-white" href="#">storeApp</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item text-white">

                            <span className='p-2'>{props.totlePrace.toFixed(2)}</span>
                            <span className='p-2'>cart</span>
                            <i class="fa-solid fa-cart-shopping position-relative ">


                                <span class=" cart position-absolute  translate-middle badge rounded-pill bg-danger">
                                    {props.totle}

                                </span>
                            </i>
                        </li>




                    </ul>

                </div>
            </div>
        </nav>


    </>


}


