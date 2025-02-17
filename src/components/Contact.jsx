import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSendClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:nk9411123@gmail.com" className='hover:underline'>nk9411123@gmail.com</a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+917033051916</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>West Champaran, Bihar, India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={handleSendClick} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea 
                  name="message"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button 
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
