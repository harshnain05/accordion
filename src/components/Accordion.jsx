import React, { useState } from 'react'
import { ACCORDION_DATA } from '../utils/helper'

const Accordion = () => {
    const [value, setValue] = useState();
    const handler = (index) => (
        setValue(value === index ? "" : index)
    )
    return (
        <div className=' min-h-screen p-4'>
            <div className="container justify-center items-center ">
                <h1 className='text-center text-6xl  mb-[50px]'>Accordion</h1>
                <div>
                    {ACCORDION_DATA.map((obj, i) => (
                        <div key={i} className='max-w-[900px] cursor-pointer mx-auto border-2 border-solid rounded-2xl  p-4  mb-3'>
                            <div onClick={() => handler(i)} className='flex items-center justify-between'>
                                {obj.title}
                                <p className='text-2xl' >{value === i ? "-" : "+"}</p>
                            </div>
                            <div className={`${value === i ? "max-h-20 mt-4 bg-red-500" : "max-h-0 "} transition-all ease-in-out duration-1000 sm:overflow-hidden overflow-auto`}>
                                <p>{obj.discription}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Accordion