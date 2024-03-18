import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutus from '../../Images/aboutus.png';

export default function AboutUs() {
  const [email,setEmail] = useState('')
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mx-9 mt-9 mb-16" id='about-us'>
      <div className="flex flex-col justify-center gap-5 pl-16">
        <h1 className="font-bold text-4xl text-light-purple">ZenVibe</h1>
        <p className='text-dark-purple font-semibold'>
        ZenVibe is a comprehensive mental health app featuring a chatbot for personalized advice and a rich library of articles and photos covering a wide range of emotional wellness topics. Users can explore mindfulness, self-care, anxiety management, resilience building, and more to enhance their mental well-being.
        </p>
        <div className="flex items-center">
          <input
            type="email"
            className="min-h-12 w-60 px-4 text-white text-base border border-r-0 border-light-purple rounded-l-3xl focus:border-dark-purple focus:outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="Email"
            name="Email"
            placeholder="example@example.com"
            autoComplete="off"
          />
          <input
            className="min-h-12 px-6 border-none rounded-r-3xl bg-light-purple text-white text-base cursor-pointer transition duration-300 hover:bg-dark-purple focus:outline-none"
            value="Join Us"
            onClick={() => navigate(`/signup?email=${encodeURIComponent(email)}`)}
            type="submit"
          />
        </div>

      </div>
      <img className="w-2/4 h-2/4" src={aboutus} alt="about us image" />
    </div>
  );
}
