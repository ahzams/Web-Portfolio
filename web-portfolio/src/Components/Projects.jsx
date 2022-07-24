import React, { useState } from 'react'
import Shoez from '../assets/images/Shoez-logos_white.png'
import youtube from '../assets/images/youtube_logo.png'
import text from '../assets/images/textutils_logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Projects() {

    const [isShoezHover, setisShoezHover] = useState(false)
    const [isTextHover, setisTextHover] = useState(false)

    return (
        <div className='text-white xsm:ml-[11%] ml-0 h-[100vh] flex xsm:flex-row flex-col justify-center xsm:justify-start items-center /*border border-white*/ ' id='project'>
            <div className='xsm:w-[700px] w-[95%] /*border border-white*/ mt-10 sm:mt-16 xsm:mt-0'>
                <div className='ml-5 sm:ml-11 sm:mb-2'>
                    <h1 className='xsm:text-[7.5rem] text-[3rem] sm:text-[5rem] text-center sm:text-left xsm:text-left font-extrabold' data-aos="fade-right">My Projects</h1>
                </div>
                <div className='mb-2 xsm:ml-0 ml-5'>
                    <div className='w-20 h-1 bg-red-600 mb-3 rounded' data-aos="fade-right" data-aos-delay={100}></div>
                    <div className='w-20 h-1 bg-red-600 ml-14 rounded' data-aos="fade-right" data-aos-delay={200}></div>
                </div>
                <div className='ml-5 xsm:w-[625px] w-full'>
                    <div className='xsm:my-10 mb-0'>
                        <p className='text-[15px] sm:text-xl' data-aos="fade-right">Here is a showcase of some of my projects that I made. They can be found on my <a href='https://github.com/ahzams' className='underline'>GitHub</a>!</p>
                    </div>
                </div>
            </div>
            <div className='/*border border-white*/ z-50 xsm:w-[50%] w-full flex flex-col items-center text-[18px] text-center'>
                <div className='flex justify-center items-center w-[300px] h-[200px] text-2xl' data-aos="fade-left" onMouseLeave={() => setisShoezHover(false)} >
                    <div className='absolute'>
                        <div className={`transition ease-in-out duration-[0.5s] m-5 ${isShoezHover ? "-translate-y-0 opacity-100" : "-translate-y-full h-0 w-0 overflow-hidden opacity-0"}`}>
                            <a href='https://github.com/ahzams/Ecommerce-website' className='m-4 ease-in-out duration-[0.5s] hover:text-red-600'>Github Link</a>
                        </div>
                        <div className={`transition ease-in-out duration-[0.5s] m-5 ${isShoezHover ? "translate-y-0 opacity-100" : "translate-y-full h-0 w-0 overflow-hidden opacity-0"}`}>
                            <a href='https://ahzams.github.io/Ecommerce-website/' className='m-4 ease-in-out duration-[0.5s] hover:text-red-600'>Project Link</a>
                        </div>
                    </div>
                    <LazyLoadImage effect='opacity' delayTime={500} className={`xsm:w-[300px] sm:w-[250px] w-[150px] ${isShoezHover ? "hidden" : ""}`} src={Shoez} alt="" onMouseEnter={() => setisShoezHover(true)} />
                </div>
                <div className='flex xsm:flex-row flex-col sm:flex-row items-center'>
                    <div className='flex flex-col items-center xsm:p-5 sm:my-2 p-0 xsm:mr-5 mr-0 bg-white rounded-[50%] xsm:h-[190px] sm:h-[140px] h-[110px] xsm:w-[300px] sm:w-[270px] w-[230px] justify-center' data-aos="fade-left">
                        <LazyLoadImage effect='opacity' delayTime={500} className='xsm:w-[250px] sm:w-[220px] w-[170px]' src={youtube} alt="" />
                        <div className='relative xsm:bottom-10 bottom-7 left-3 xsm:left-0 xsm:text-3xl text-2xl font-mono font-extrabold text-black'>
                            <h2>CLONE</h2>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[300px] h-[200px] text-2xl' data-aos="fade-left" onMouseLeave={() => setisTextHover(false)} onMouseEnter={() => setisTextHover(true)}>
                        <div className='absolute'>
                            <div className={`transition ease-in-out duration-[0.5s] m-5 ${isTextHover ? "-translate-y-0 opacity-100" : "-translate-y-full h-0 w-0 overflow-hidden opacity-0"}`}>
                                <a href='https://github.com/ahzams/textutils' className='m-4 ease-in-out duration-[0.5s] hover:text-red-600'>Github Link</a>
                            </div>
                            <div className={`transition ease-in-out duration-[0.5s] m-5 ${isTextHover ? "translate-y-0 opacity-100" : "translate-y-full h-0 w-0 overflow-hidden opacity-0"}`}>
                                <a href='https://ahzams.github.io/textutils/' className='m-4 ease-in-out duration-[0.5s] hover:text-red-600'>Project Link</a>
                            </div>
                        </div>
                        <LazyLoadImage effect='opacity' delayTime={500} className={`xsm:w-[200px] sm:w-[170px] w-[100px] invert ${isTextHover ? "hidden" : ""}`} src={text} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
