import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wuvhtvj', 'template_6i1xddf', form.current, 'VoKgwreWyV7UJbngt')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Sent!", {
                    position: "bottom-right"
                })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='text-white xsm:ml-[11%] ml-0 flex flex-col xsm:flex-row justify-center xsm:justify-between h-[100vh] items-center /*border border-white*/' id='contact'>
            <div className='xsm:w-[700px] w-full /*border border-white*/ '>
                <div className='ml-5 text-center xsm:text-left sm:text-left sm:ml-11'>
                    <h1 className='xsm:text-[7.3rem] text-[3.255rem] sm:text-[5rem] font-semibold' data-aos="fade-right">Contact Me</h1>
                </div>
                <div className='mb-2 xsm:ml-0 ml-10 sm:ml-11' >
                    <div className='w-20 h-1 bg-red-600 mb-3 rounded' data-aos="fade-right" data-aos-delay={100}></div>
                    <div className='w-20 h-1 bg-red-600 ml-14 rounded' data-aos="fade-right" data-aos-delay={200}></div>
                </div>
                <div className='xsm:ml-8 ml-0 xsm:w-[625px] w-full'>
                    <div className='flex xsm:flex-row flex-col items-center md-items-start xsm:items-start my-10 xsm:text-xl text-xl sm:text-2xl' data-aos="fade-right">
                        <div className='flex flex-col'>
                            <p className='sm:text-xl sm:text-center sm:mb-3 hidden sm:block sm:mx-5 xsm:text-left xsm:mx-0 xsm:mb-5'>I am available for development related work. I am also open to opportunities from Spring 2022.</p>
                            <div className='flex flex-col xsm:flex-row items-center xsm:items-start'>
                                <span className='sm:my-5 xsm:my-0 xsm:mb-0 mb-5'>Email : </span>
                                <div className='flex flex-col items-center xsm:items-start ml-5 xsm:ml-5'>
                                    <a href='mailto: ahzam183@gmail.com' className='transition-all duration-[0.5s] ease-in-out mb-2 bg-[#5B253A] p-4 rounded-[10px] text-[#FF404D] md:hover:text-white xsm:bg-inherit xsm:p-0'>ahzam183@gmail.com</a>
                                    <a href="mailto: ahzam.syed.e21@nsut.ac.in" className='transition-all duration-[0.5s] ease-in-out bg-[#5B253A] p-4 rounded-[10px] text-[#FF404D] md:hover:text-white xsm:bg-inherit xsm:p-0'>ahzam.syed.e21@nsut.ac.in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='/*border border-white*/ z-50 w-[45%] xsm:flex flex-col items-center text-[18px] text-center mt-8 hidden' data-aos='fade-left'>
                <h1 className='mb-4'>Have a question or want to work together ?</h1>
                <div className='/*border border-white*/ w-[78%]'>
                    <div className='my-5'>
                        <input type="text" placeholder='Name' name='user_name' className='w-full py-[15px] px-[10px] bg-[#021d44] text-red-600 placeholder-red-600 rounded-[5px] outline-none border-0 focus:border-[1px] focus:border-red-600 placeholder:font-medium' required />
                    </div>
                    <div className='my-5'>
                        <input type="email" placeholder='Email' name='user_email' className='w-full py-[15px] px-[10px] bg-[#021d44] text-red-600 placeholder-red-600 rounded-[5px] outline-none border-0 focus:border-[1px] focus:border-red-600 placeholder:font-mediu' required />
                    </div>
                    <div className='my-5'>
                        <textarea name="message" id="message" rows="4" placeholder='Message...' className='w-full py-[15px] px-[10px] bg-[#021d44] text-red-600 placeholder-red-600 rounded-[5px] outline-none border-0 focus:border-[1px] focus:border-red-600 placeholder:font-medium' required></textarea>
                    </div>
                </div>
                <div className=''>
                    <button type="submit" className='flex uppercase font-semibold items-center xsm:py-4 py-3 xsm:px-7 px-5 mr-3 bg-red-600 rounded-[50px] xsm:text-[18px] text-[17px] leading-none tracking-widest shadow-[rgb(220,_38,_38,_0.1)_inset_5px_10px_4px_0px] transition ease-out duration-[0.3s] hover:shadow-[rgb(2,_29,_68,_1)_inset_160px_0px_0px_0px]'>Submit</button>
                </div>
                <ToastContainer toastClassName={() => "flex p-3 bg-[#04611c]"} />
            </form>
        </div>
    )
}
