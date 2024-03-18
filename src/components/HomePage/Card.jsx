import React from 'react'

export default function Card({ service, description, image }) {
    return (
        <>
            <div className='h-28 flex justify-center items-center rounded-t-xl mb-4'>
                <img src={image} alt="" className='w-28 h-auto' />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
                <p className="card-title text-lg font-bold text-dark-purple ">{service}</p>
                <p className="card-body text-light-purple text-sm">
                    {description}
                </p>
            </div>

        </>
    )
}
