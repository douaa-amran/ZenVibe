import React, { useEffect,useState } from 'react';
import Profil2 from '../../Images/Profil2.png';

const UserProfile = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="p-5 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-dark-purple text-xl">12</p>
              <p className="text-light-purple">Friends</p>
            </div>
            <div>
              <p className="font-bold text-dark-purple text-xl">2</p>
              <p className="text-light-purple">Photos</p>
            </div>
            <div>
              <p className="font-bold text-dark-purple text-xl">9</p>
              <p className="text-light-purple">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-purple-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center ">
              <img  src={Profil2} alt="profile "  className='w-35 h-32 rounded-full object-cover'/>
                
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-purple-300 hover:bg-light-purple shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
             Edit 
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-light-purple hover:bg-dark-purple shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
             Delete
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-dark-purple">Layla Al-Zarhouni, <span className="font-light text-light-purple">24</span></h1>
          <p className="font-light text-light-purple mt-3">Tétouan, Morocco</p>
          <p className="mt-8 text-light-purple">Software Engineer - TechSolve Innovations</p>
          <p className="mt-2 text-light-purple">University of Computer Science</p>
        </div>
          <div className="mt-5 text-center">
            <h4 className='text-xl font-medium text-dark-purple'>About me </h4>
          </div>
        <div className="mt-7 flex flex-col justify-center">
        <p className={`text-light-purple text-center font-light px-12 ${showMore ? 'block' : 'hidden'}`}>
        I am a passionate Software Engineer with a knack for problem-solving and a keen eye for detail. With a strong background in computer science and years of experience in developing innovative software solutions, I am dedicated to creating efficient and user-friendly applications that make a positive impact on people's lives. I thrive in collaborative environments and enjoys exploring new technologies to stay ahead of industry trends. Outside of work, I am an avid traveler and a food enthusiast who loves exploring different cuisines and cultures around the world..</p>
        <button className="text-light-purple py-2 px-4 font-medium mt-4" onClick={handleShowMore}>
            {showMore ? '...Show less' : 'Show more...'}
          </button>
        </div>
        {/*showEditForm && <EditProductForm onClose={() => setShowEditForm(false)} />*/}
      </div>
    </div>
  );
};

export default UserProfile;
