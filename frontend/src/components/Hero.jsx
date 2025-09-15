import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20'>
            <div className='flex flex-col items-center py-8'>
                <h1 className='font-bold text-6xl'>FloodGuard</h1>
                <h2 className='font-roboto-serif text-2xl text-blue-100 mt-2'>Dagupan City Smart Flood Management System</h2>
            </div>

            <div className='max-w-4xl py-8 text-center'>
                <p className='text-xl text-blue-100 leading-relaxed'>AI-powered flood prediction and emergency response system protecting Dagupan City residents through early warnings and evacuation routes</p>
            </div>
            <div className='flex gap-10 py-6'>
                <button className='px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg duration-500'>View Dashboard</button>
                <button className='px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-300 transition-colors border border-blue-300 duration-500'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero