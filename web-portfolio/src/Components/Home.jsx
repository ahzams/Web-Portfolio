import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

    return (
        <div className='flex xsm:flex-row flex-col-reverse md:flex-row md:px-[100px] md:ml-[10%] xsm:px-[100px] px-[20px] justify-center items-center h-[100vh] xsm:ml-[10%] ml-0' id='home'>
            <div className='text-white text-[1.5em] sm:text-[2em] xsm:text-[1.5em] font-bold xsm:font-extrabold xsm:w-[35%]'>
                <h2>I'm a <span className='text-red-500'>
                    <Typewriter
                        words={['Web Developer']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onType
                    />
                </span></h2>
            </div>
            <div className='xsm:flex hidden md:flex flex-col text-white font-bold leading-[9.688rem] w-[65%] z-20 mx-16'>
                <div className="text-red-600 text-[10.5em] flex">
                    <h2 className='mb-3'>Hello</h2>
                    <div className='flex items-end mb-4'>
                        <svg height={30} width={30} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='animate-[bounce_0.8s_ease-in-out_infinite]'>
                            <circle cx="60" cy="50" r="40" fill='white' />
                        </svg>
                    </div>
                </div>
                <div className="text-[9em] mb-3">
                    <h2>I am</h2>
                </div>
                <div className="text-red-600 text-[10.5em]">
                    <h2>Ahzam</h2>
                </div>
            </div>
            <div className='xsm:hidden md:hidden flex text-center justify-center'>
                <h1 className='text-base text-red-500 flex flex-col font-bold tracking-[4px] sm:text-[21px]'>HEY! I AM<span className='text-white sm:text-[50px] text-[35px] my-4 sm:my-8'>Ahzam</span></h1>
            </div>
        </div>
    )
}
