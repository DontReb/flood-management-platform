import React from 'react';
import CountUp from "react-countup";

const Stats = () => {

    const stats = [
        {
            label: 'Barangays Covered',
            value: 31,
            description: 'All Dagupan City barangays',
            color: 'text-blue-600'
        },
        {
            label: 'Data Sources',
            value: 3,
            suffix: "+",
            description: 'Weather APIs integrated',
            color: 'text-green-600'
        },
        {
            label: 'Prediction Accuracy',
            value: 94,
            suffix: "%",
            description: 'AI model performance',
            color: 'text-purple-600'
        },
        {
            label: 'Update Frequency',
            value: 1,
            suffix: "hr",
            description: 'Real-time monitoring',
            color: 'text-orange-600'
        },
    ];

    return (
        <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='cursor-default text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                        System Capabilities
                    </h2>
                    <p className='text-lg text-gray-600'>
                        Advanced flood monitoring technology
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <div key={index}
                            className='cursor-pointer text-center p-6 rounded-lg border border-gray-400 hover:bg-blue-50 hover:shadow-[4px_4px_0_#000] transform hover:-translate-y-2 transition-all duration-300'>
                            <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                                <CountUp
                                    end={stat.value}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce />
                                {stat.suffix || ""}
                            </div>
                            <div className='text-sm md:text-base text-gray-900 mb-1 font-semibold'>
                                {stat.label}
                            </div>
                            <div className='text-xs md:text-sm text-gray-500 font-roboto-serif'>
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats