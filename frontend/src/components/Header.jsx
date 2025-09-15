import React from 'react'

const Header = () => {

    const navButtons = ['Dashboard', 'Flood Map', 'Alerts', 'Reports']

    const authButtons = ['Login', 'Sign Up']

    return (
        <nav className='flex justify-between items-center px-8 py-4 '>
            {/* name & logo section */}
            <div>
                <h1 className='text-2xl font-bold text-blue-600 m-0'>
                    FloodGuard
                </h1>
                <p className='text-sm text-gray-500 m-0 font-roboto-serif'>
                    Dagupan City
                </p>
            </div>

            {/* nav buttons */}
            <div className='flex gap-10'>
                {navButtons.map((buttonName, index) => (
                    <button key={index}
                    className=' text-gray-600 hover:text-blue-600 rounded-full transition-colors cursor-pointer'>
                        {buttonName}
                    </button>
                ))}
            </div>

            {/* Auth Buttons */}
            <div className='flex gap-2'>
                {authButtons.map((buttonName, index) => (
                    <button key={index}
                    className={`px-4 py-1 rounded-full border transition-colors cursor-pointer ${
                        index === 1
                            ? 'bg-blue-600 font-bold text-white border-blue-600 hover:bg-blue-700'
                            : 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}>
                        {buttonName}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Header