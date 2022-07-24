import React from 'react'
import { DotLoader } from 'react-spinners'
import { motion } from 'framer-motion'

export default function Loader(props) {
    return (
        <motion.div className='fixed top-0 left-0 bottom-0 right-0 bg-red-600 z-[999999] w-[100vw] h-[100vh]' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0.8}} transition={{duration: 0}}>
            <motion.div className='absolute top-[48%] left-[48%]' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <DotLoader height={60} width={60} loading={props.loading} color="#1e293b" />
            </motion.div>
        </motion.div>
    )
}
