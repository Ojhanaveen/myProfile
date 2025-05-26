import React from 'react'
import HeroImage from '../assets/Myicon-removebg-preview-removebg-preview.png'

const Hero = () => {


  const handleContactClick = () => {
    window.location.href = 'mailto: nk9411123@gmail.com'
  }

  const handleResumeClick = () => {
    window.open('/Naveen--Resume.pdf', '_blank')
  }

  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Naveen Kumar</span>
            
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
        Learning how to build great product.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            onClick={handleContactClick}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            onClick={handleResumeClick}
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  )
}

export default Hero