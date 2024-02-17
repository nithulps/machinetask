import React from 'react'
import logo from '../assets/real-estate-house.png'


const Header = () => {
    return (
        <div className="h-16 w-full bg-slate-200">
            <div className='flex items-center justify-around'>
                <img src={logo} alt="" className='w-auto h-16' />
                <div>XYZ SYSTEM LLP.</div>
            </div>

        </div>
    )
}

export default Header