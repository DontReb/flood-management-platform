import React from 'react'
import alertIcon from '../assets/triangle-exclamation-solid-full.svg';


const Features = () => {

  const features = [
    {
      label: 'Real-time Alerts',
      description: 'Get instant notifications about warnings',
      icon: SirenIcon,
    },
    {

    }
  ]

  return (
    <section>
      <div>
        <p>Protecting Dagupan City</p>
        <p>Advanced flood management for our community</p>
      </div>
      <div>
        {features.icon}
      </div>
    </section>
  )
}

export default Features