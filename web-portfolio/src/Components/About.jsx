import React from 'react'
import dp from '../assets/images/ahzam.png'
import Resume from '../assets/Ahzam_Resume.pdf'

export default function About() {
  return (
    <div className='text-white xsm:ml-[11%] ml-0 flex xsm:flex-row flex-col-reverse h-[100vh] items-center justify-center xsm:justify-start' id='about'>
      <div className='xsm:w-[600px] w-[90%] /*border border-white*/'>
        <div className='xsm:ml-5 ml-0 text-center sm:text-left sm:ml-11'>
          <h1 className='xsm:text-[7.3rem] text-[3.438rem] font-extrabold' data-aos="fade-right">About Me</h1>
        </div>
        <div className='mb-2 xsm:ml-0 ml-5'>
          <div className='w-20 h-1 bg-red-600 mb-3 rounded' data-aos="fade-right" data-aos-delay={100}></div>
          <div className='w-20 h-1 bg-red-600 ml-14 rounded' data-aos="fade-right" data-aos-delay={200}></div>
        </div>
        <div className='ml-5'>
          <div className='my-5 xsm:mb-5 mb-0'>
            <p className='xsm:text-xl text-sm sm:text-xl' data-aos="fade-right">I am a final-year student at NSUT East Campus, New Delhi pursuing B.Tech in Electronics & Communication, programming since freshman year of college.</p>
          </div>
          <div className='flex xsm:flex-col flex-row items-center xsm:items-start justify-between xsm:justify-start'>
            <div className='my-7' data-aos="fade-right">
              <a href="https://github.com/ahzams" className='fab fa-github mr-4 xsm:fa-3x text-4xl'> </a>
              <a href="https://www.linkedin.com/in/ahzam-syed/" className='fab fa-linkedin mr-4 xsm:fa-3x text-4xl'> </a>
            </div>
            <div className='inline-block' data-aos="fade-right">
              <a className='flex items-center xsm:py-4 py-3 xsm:px-7 px-5 mr-3 bg-red-600 rounded-[50px] xsm:text-[18px] text-[17px] leading-none tracking-widest shadow-[rgb(220,_38,_38,_0.1)_inset_5px_10px_4px_0px] transition ease-out duration-[0.3s] hover:shadow-[rgb(9,_35,_73,_1)_inset_160px_0px_0px_0px]' href={Resume} download={Resume}><span className="material-symbols-outlined mr-1">download</span>Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className='/*border border-white*/ xsm:w-[47%] w-[60%] sm:w-[280px] flex flex-col xsm:items-center text-[18px] text-center z-20'>
        <div className='mb-2 xsm:mb-6 bg-red-600 rounded-[50%] flex justify-center' data-aos="fade-left">
          <img className='rounded-[50%] w-[285px] sm:w-[300px] xsm:w-[340px]' src={dp} alt="" />
        </div>
        <div className='xsm:flex w-full hidden'>
          <div className='/*border border-white*/ flex flex-col items-center p-3 w-full'>
            <div className='bg-red-700 w-[46px] h-20 relative z-0 flex items-center justify-center my-3 before:content-[""] before:absolute before:w-full before:h-full before:bg-red-700 before:-z-10 before:rotate-[60deg] after:content-[""] after:absolute after:w-full after:h-full after:bg-red-700 after:-z-10 after:rotate-[-60deg]' data-aos="flip-up">
              <i className='fas fa-flag text-[33px]'></i>
            </div>
            <div data-aos="fade-up">
              Leadership Skills
            </div>
          </div>
          <div className='/*border border-white*/ flex flex-col items-center p-3 w-full'>
            <div className='bg-red-700 w-[46px] h-20 relative z-0 flex items-center justify-center my-3 before:content-[""] before:absolute before:w-full before:h-full before:bg-red-700 before:-z-10 before:rotate-[60deg] after:content-[""] after:absolute after:w-full after:h-full after:bg-red-700 after:-z-10 after:rotate-[-60deg]' data-aos="flip-up">
              <i className='fas fa-lightbulb text-[33px]'></i>
            </div>
            <div data-aos="fade-up">
              Problem Solving
            </div>
          </div>
          <div className='/*border border-white*/ flex flex-col items-center p-3 w-full'>
            <div className='bg-red-700 w-[46px] h-20 relative z-0 flex items-center justify-center my-3 before:content-[""] before:absolute before:w-full before:h-full before:bg-red-700 before:-z-10 before:rotate-[60deg] after:content-[""] after:absolute after:w-full after:h-full after:bg-red-700 after:-z-10 after:rotate-[-60deg]' data-aos="flip-up">
              <i className='fas fa-stopwatch text-[33px]'></i>
            </div>
            <div data-aos="fade-up">
              Time Management
            </div>
          </div>
          <div className='/*border border-white*/  flex flex-col items-center p-3 w-full'>
            <div className='bg-red-700 w-[46px] h-20 relative z-0 flex items-center justify-center my-3 before:content-[""] before:absolute before:w-full before:h-full before:bg-red-700 before:-z-10 before:rotate-[60deg] after:content-[""] after:absolute after:w-full after:h-full after:bg-red-700 after:-z-10 after:rotate-[-60deg]' data-aos="flip-up">
              <i className="material-symbols-outlined text-[40px]">psychology</i>
            </div>
            <div data-aos="fade-up">
              Communication Skills
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
