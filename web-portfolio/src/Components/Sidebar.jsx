import React, { useState } from 'react'
import { Link } from 'react-scroll'

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)
    const [line1, setLine1] = useState(`xsm:w-full w-[85%] rounded-[10px] h-1 bg-white rotate-[0deg]`)
    const [line2, setLine2] = useState(`xsm:w-full w-[85%] rounded-[10px] h-1 bg-white rotate-[0deg]`)

    const handleLines = () => {
        const t = "transition duration-[0.5s]"
        return (!isOpen ?
            (
                setLine1(`xsm:w-full w-[75%] h-1 rounded-[10px] bg-white mx-auto rotate-[45deg] ${t}`),
                setLine2(`xsm:w-full w-[75%] xsm:-translate-y-[1.2rem] -translate-y-[1.15rem] h-1 rounded-[10px] bg-white mx-auto rotate-[-45deg] ${t}`),
                setIsOpen(!isOpen)
            ) :
            (
                setLine1(`w-full h-1 rounded-[10px] bg-white mx-auto rotate-[0deg] ${t}`),
                setLine2(`w-full h-1 rounded-[10px] bg-white mx-auto rotate-[0deg] ${t}`),
                setIsOpen(!isOpen)
            )
        )
    }

    return (
        <>
            <div className='flex items-center flex-col justify-evenly cursor-pointer relative w-[50px] h-[50px] xsm:right-[5.5rem] right-[0.5rem] z-[999]' onClick={handleLines}>
                <div className={line1}></div>
                <div className={line2}></div>
            </div>

            <div className={`top-0 right-0 fixed bg-[#021d44] w-[100vw] h-full flex place-content-center items-center px-[5%] z-[998] ease-in-out duration-[0.5s] ${isOpen ? "-translate-y-0" : "-translate-y-full"}`}>
                <div className='flex flex-col items-center '>
                    <ul className='text-center xsm:text-[70px] text-[50px] my-14 font-Neue uppercase font-FuturaBt'>
                        <li className='leading-[60px] py-[20px] cursor-pointer'><Link className='' to="home" onClick={handleLines}>Home</Link></li>
                        <li className='leading-[60px] py-[20px] cursor-pointer'><Link className='' to="about" onClick={handleLines}>About</Link></li>
                        <li className='leading-[60px] py-[20px] cursor-pointer'><Link className='' to="skills" onClick={handleLines}>Skills</Link></li>
                        <li className='leading-[60px] py-[20px] cursor-pointer'><Link className='' to="project" onClick={handleLines}>Projects</Link></li>
                        <li className='leading-[60px] py-[20px] cursor-pointer'><Link className='' to="contact" onClick={handleLines}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
