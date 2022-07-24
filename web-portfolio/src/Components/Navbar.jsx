import React from 'react'
import { Link } from 'react-scroll'
import Sidebar from './Sidebar'

export default function Navbar() {
    return (
        <div className='xsm:pt-[25px] md:pt-[25px] md:px-[100px] sm:pt-[15px] pt-[10px] px-[32px] sticky top-0 z-[999]'>
            <header className='text-white flex text-xl items-center justify-between h-[4.75rem]'>
                <Link to='home' className='xsm:text-[1.8em] sm:text-[1.625em] text-[1.5em] font-Proxima font-extrabold tracking-[2px] z-10 xsm:ml-[100px] ml-[10px] cursor-pointer'>
                    <span className='after:content-[""] after:absolute after:mix-blend-lighten xsm:after:left-[-12px] after:left-[-15px] after:top-[-8px] after:bg-red-600 after:w-[46px] after:h-[44px] after:rounded-[50%] relative inline-block'>
                        <span className="relative tracking-[5px]">A</span>
                    </span>
                    hzam</Link>
                <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                    <Sidebar />
                </div>
            </header>
        </div>
    )
}
