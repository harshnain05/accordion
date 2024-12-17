import React, { useState } from 'react'
import { Accordion_Data } from '../utils/helper'

const Accordion = () => {
    const [value, setValue] = useState();
    const handler = (index) => (
        setValue(value === index ? "" : index)
    )
    return (
        <div className=' min-h-screen'>
            <h1 className='text-center text-8xl  mb-10'>Accordion</h1>
            <div>
                {Accordion_Data.map((obj, i) => (
                    <div key={i} className='max-w-[900px] mx-auto border-2 border-solid rounded-2xl  p-4  mb-3'>
                        <div onClick={() => handler(i)} className='flex items-center justify-between'>
                            {obj.title}
                            <p >{value === i ? "-" : "+"}</p>
                        </div>
                        <div className={`${value === i ? "max-h-20 mt-4 bg-red-500" : "max-h-0 "} transition-all ease-in-out duration-1000 sm:overflow-hidden overflow-auto`}>
                            <p>{obj.discription}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Accordion