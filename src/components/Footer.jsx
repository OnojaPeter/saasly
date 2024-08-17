import React from 'react'

const socialsIcon = [
    {
        name: 'website',
        icon: 'globe.png',
    },
    {
        name: 'facebook',
        icon: 'facebook.png',
    },
    {
        name: 'twitter',
        icon: 'twitter.png',
    },
    {
        name: 'google',
        icon: 'google.png',
    },
    {
        name: 'linkedin',
        icon: 'linkedin.png',
    }
]

const Footer = () => {
  return (
    <footer className='text-white z-20'>
        <div className='flex flex-col md:flex-row justify-between w-full'>
            <div className='text-center md:text-start  flex flex-col justify-center sm:mx-20 md:mx-0 md:w-1/3'>
                <div className="font-bold text-[32px]">Saasly</div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, odio voluptates autem a blanditiis cupiditate exercitationem!</p>

                <div className='flex justify-center gap-x-5 md:mx-0 mt-10'>
                    {socialsIcon.map((icon, index) => {
                        return (
                            <div key={index} className='bg-white bg-opacity-20  flex place-content-center rounded-md'>
                                <img className='w-10 lg:w-14 h-10 lg:h-14 p-2' src={`/images/${icon.icon}`} alt={`${icon.name}`} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='  flex justify-between sm:mx-20 md:mx-0 mt-10 md:mt-0'>
                <div>
                    <h5 className='font-bold'>Pages</h5>
                    <ul className='flex flex-col '>
                        <li>Home V1</li>
                        <li>Home V2</li>
                        <li>Home V3</li>
                        <li>About 1</li>
                        <li>About 2</li>
                        <li>Blog 1</li>
                        <li>Blog 2</li>
                        <li>Blog Single</li>
                        <li>Job 1</li>
                        <li>Job 2</li>
                        <li>Job Single</li>
                        <li>Pricing 1</li>
                        <li>Pricing 2</li>
                        <li>Help Center 1</li>
                        <li>Help Center 2</li>
                        <li>Faq</li>
                        <li>Contact</li>
                        <li>Checkout</li>
                    </ul>
                </div>
                
                <div className='md:hidden'>
                    <ul className='flex flex-col flex-wrap h-[400px]'>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                        <li>Forgot Password</li>
                        <li>Reset Password</li>
                        <li>Email Confirmation</li>
                        <li>Coming Soon</li>
                        <li>Style Guide</li>
                    </ul>
                </div>
            </div>
            
            <div className='  hidden md:block'>
                <h5 className='font-bold'>Utility Pages</h5>
                <ul className='flex flex-col flex-wrap h-[400px]'>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                    <li>Forgot Password</li>
                    <li>Reset Password</li>
                    <li>Email Confirmation</li>
                    <li>Coming Soon</li>
                    <li>Style Guide</li>
                </ul>
            </div>
            
        </div>

        <hr className='my-20 ' />

        <div>
            <p className='text-center'>Copyright | Developed by <a className='text-blue-400 underline' target='_blank' href="https://onoja-peter.vercel.app">Onoja Peter</a></p>
        </div>
    </footer>
  )
}

export default Footer