import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import formslogo from '../../Images/FormsLogo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.jsx';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      // Navigate the user to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      alert('Invalid email or password'); // Display an error message to the user
    }
    // Log the form data to the console for debugging purposes
    console.log('Form submitted:', { email, password });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email"  className="block mb-2 text-sm font-medium text-dark-purple ">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-dark-purple dark:text-white">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4 border border-purple-200 rounded bg-purple-50 focus:ring-3 focus:ring-border-purple-600"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
          </div>
        </div>

        <a href='#' className="text-sm font-medium text-purple-600 hover:underline dark:text-primary-500">Forgot password?</a>
      </div>
      <button
        
        type="submit"
        className={`w-full text-white bg-light-purple hover:bg-dark-purple-600 hover:bg-dark-purple focus:ring-700 focus:ring-4 focus:outline-none focus:ring-dark-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${email && password ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        disabled={!email || !password}
        onClick={handleSubmit} // Call the handleSubmit function on button click
      >
        Log In
      </button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account yet? <Link to="/signup" className="font-medium text-purple-600 hover:underline">Sign Up</Link>
      </p>

    </form>
  );
};

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" onClick={()=>navigate('/')} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={formslogo} alt="Zen-Vibe" className='w-28 h-auto' />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log In
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;