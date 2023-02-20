import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openmodal } from '../Redux/HomeRedux';

const Navbar = () => {
    const {carddata} = useSelector((state) => state.reduxhome)
    const dispatch = useDispatch()
    return (
        <nav className='container py-3'>
            <div className="logo"><img src="./img/icon3.png" alt="" /></div>
            <button onClick={()=>dispatch(openmodal(true))} type="button" className="btn btn-outline-primary position-relative">
                My card
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carddata.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </nav>
    )
}

export default Navbar
