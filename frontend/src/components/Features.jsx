import React from 'react'


const Features = () => {

  const features = [
    {
      label: 'Real-time Alerts',
      description: 'Get instant notifications about warnings',
      icon: '🚨',
    },
    {
      label: 'Interactive Flood Maps',
      description: 'View live flood risk areas and evacuation routes',
      icon: '📍',
    },
    {
      label: 'AI Predictions & Monitoring',
      description: 'Advanced ML algorithms for accurate forecasts',
      icon: '🌊',
    },
    {
      label: 'Mobile Friendly',
      description: 'Access on any device anywhere anytime',
      icon: '📱',
    },
    {
      label: 'Community Reports',
      description: 'Help Community with crowd-sourced data',
      icon: '👥',
    },
    {
      label: '24/7 System Monitoring',
      description: 'Continuous automated monitoring',
      icon: '⏰',
    },
    
  ]

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 cursor-default'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Protecting Dagupan City</h2>
          <p className='text-lg text-gray-600'>Advanced flood management for our community</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'>
        {features.map((feature, index) => (
          <div key={index} className='bg-white rounded-lg p-6 border border-gray-400 hover:bg-blue-50 hover:shadow-[4px_4px_0_#000] transform hover:-translate-y-2 transition-all duration-300'>
            <div className='text-4xl mb-4'>{feature.icon}</div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.label}</h3>
            <p className='text-gray-600 font-roboto-serif'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features