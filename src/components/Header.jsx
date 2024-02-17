import React from 'react'
import logo from '../assets/real-estate-house.png'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    function clickHandler() {
        navigate('/')
    }
    return (
        <div className="h-16 w-full bg-slate-200">
            <div className='flex items-center justify-around'>
                <img src={logo} alt="" className='w-auto h-16 cursor-pointer' onClick={clickHandler}/>
                <div>XYZ SYSTEM LLP.</div>
            </div>

        </div>
    )
}

export default Header