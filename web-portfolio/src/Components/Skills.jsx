import React from 'react'
import js from '../assets/images/js_logo.png'
import react from '../assets/images/react_logo.png'
import git from '../assets/images/git_logo.png'
import html from '../assets/images/html_logo.png'
import css from '../assets/images/css_logo.png'
import tailwind from '../assets/images/tailwind_logo.png'
import bootstrap from '../assets/images/bootstrap_logo.png'
import jquery from '../assets/images/jquery_logo.png'
import mongo from '../assets/images/mongo_logo.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Skills() {
    return (
        <div className='text-white xsm:ml-[11%] ml-0 flex flex-col xsm:flex-row justify-center xsm:justify-start items-center h-[100vh] /*/*border border-white*/*/' id='skills'>
            <div className='xsm:w-[600px] w-[95%] /*/*border border-white*/*/ '>
                <div className='ml-5 sm:mt-5'>
                    <h1 className='xsm:text-[7.5rem] text-[3.625rem] xsm:ml-0 ml-4 font-extrabold' data-aos="fade-right">Skills</h1>
                </div>
                <div className='mb-2 xsm:ml-0 ml-5'>
                    <div className='w-20 h-1 bg-red-600 mb-3 rounded' data-aos="fade-right" data-aos-delay={100}></div>
                    <div className='w-20 h-1 bg-red-600 ml-14 rounded' data-aos="fade-right" data-aos-delay={200}></div>
                </div>
                <div className='ml-5 xsm:w-[450px] w-full'>
                    <div className='xsm:my-10 my-5'>
                        <p className='xsm:text-xl text-[17px] sm:text-xl' data-aos="fade-right">An individual eager to learn and explore new fields of life and technology, with good listening skills and fast learning abilities.</p>
                    </div>
                    <div className='my-7 bg-red-800 xsm:flex hidden flex-col text-center w-[90%] text-xl rounded-[11px] shadow-[rgb(0,_0,_0,_0.25)_6px_10px_5px_0px]'  data-aos="fade-right">
                        <div className='mt-3'>
                            <h1 className='uppercase font-bold'>Interests</h1>
                        </div>
                        <div className='flex flex-col my-5'>
                            <span>Full Stack Development</span>
                            <span>Android Development</span>
                            <span>Machine Learning</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='/*border border-white*/ z-50 xsm:w-[50%] w-[90%] flex flex-col items-center xsm:text-[16px] sm:text-[17px] text-[11px] text-center xsm:mb-0'>
                <div className='flex flex-col w-full mt-6 uppercase'>
                    <div className='flex' data-aos="fade-left">
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={html} alt="" />
                            </div>
                            <div>
                                Html5
                            </div>
                        </div>
                        <div className='/*border border-white*/  flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={css} alt="" />
                            </div>
                            <div>
                                Css3
                            </div>
                        </div>
                        <div className='/*border border-white*/  flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[60px] xsm:h-[100px] w-[60px] h-[100px] sm:w-[80px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={js} alt="" />
                            </div>
                            <div>
                                JavaScript
                            </div>
                        </div>
                    </div>
                    <div className='flex' data-aos="fade-left">
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={react} alt="" />
                            </div>
                            <div>
                                React JS
                            </div>
                        </div>
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={tailwind} alt="" />
                            </div>
                            <div>
                                Tailwind CSS
                            </div>
                        </div>
                        <div className='/*border border-white*/  flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={git} alt="" />
                            </div>
                            <div>
                                Git
                            </div>
                        </div>
                    </div>
                    <div className='flex' data-aos="fade-left">
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={bootstrap} alt="" />
                            </div>
                            <div>
                                Bootstrap
                            </div>
                        </div>
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={jquery} alt="" />
                            </div>
                            <div>
                                jQuery
                            </div>
                        </div>
                        <div className='/*border border-white*/ flex flex-col items-center xsm:p-3 p-0 w-[33.33%]'>
                            <div className='xsm:w-[80px] xsm:h-[100px] w-[70px] h-[100px] sm:w-[100px] sm:h-[140px] relative z-0 flex items-center justify-center xsm:my-3 my-0 rounded-[50%]'>
                                <LazyLoadImage effect='opacity'  delay={500} src={mongo} alt="" />
                            </div>
                            <div>
                                Mongo dB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
