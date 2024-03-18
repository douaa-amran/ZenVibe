import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import formslogo from '../../Images/FormsLogo.png';
import { DatePicker, Space } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from './firebase.jsx';
function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullName] = useState('');
    const [role, setRole] = useState('');
    const [field, setField] = useState('');
    const [institut, setInstitut] = useState('');
    const [address, setAddress] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [terms, setTerms] = useState(false);
    const location = useLocation();

    // Set email field on page load if it is passed as a URL parameter
    useEffect(() => {
        // Use the URLSearchParams API to parse the search string
        const searchParams = new URLSearchParams(location.search);
        // Extract the email parameter from the URL
        const emailParam = searchParams.get('email');
        // If the email parameter exists, set the email field to its value
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [location.search]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user.uid);

            // Create user document in Firestore
            const db = getFirestore();
            const newUser = {
                birthDate: birthDate,
                institut: institut,
                fullname: fullname,
                role: role,
                field: field,
                address: address,
                // Add other user data fields here
            };
            await addDoc(collection(db, 'users'), newUser);
            console.log("User data added to Firestore");

            // Navigate to the dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <section className="bg-gray-50 py-6 ">
            <div className="w-9/12 flex flex-col items-center mx-auto justify-center px-6 py-8">
                <a href="#" onClick={()=>navigate('/')} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src={formslogo} alt="Zen-Vibe" className='w-28 h-auto' />
                </a>
                <div className="bg-white rounded-lg shadow md:mt-0 xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-dark-purple md:text-2xl ">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-purple">Your email</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="name@company.com" required />
                            </div>
                            {/* Password input */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-dark-purple">Password</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " required />
                            </div>
                            {/* Confirm password input */}
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-dark-purple">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " required />
                            </div>
                            {/* Full Name input */}
                            <div>
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-dark-purple">Full Name</label>
                                <input type="text" name="fullname" id="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Enter you full name..." required />
                            </div>
                            {/* Birth date input */}
                            <div>
                                <label htmlFor="birth-day" className="block mb-2 text-sm font-medium text-dark-purple">Birth Date:</label>
                                <div className="dropdown w-96">
                                    <Space direction="vertical ">
                                        <DatePicker onChange={(date, dateString) => setBirthDate(dateString)} style={{ width: 634, height: 44, backgroundColor: '#FAF5FF', borderRadius: 7, borderColor: '#e9d5ff' }} />
                                    </Space>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-7'>
                                <div>
                                    {/* Address input */}
                                    <div className='mb-5'>
                                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-dark-purple">Address</label>
                                        <input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Address..." required />
                                    </div>
                                    {/* Role input */}
                                    <div>
                                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-dark-purple">Role</label>
                                        <input type="text" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Role..." required />
                                    </div>
                                </div>
                                <div>
                                    {/* Field input */}
                                    <div className='mb-5'>
                                        <label htmlFor="field" className="block mb-2 text-sm font-medium text-dark-purple">Field</label>
                                        <input type="text" name="field" id="field" value={field} onChange={(e) => setField(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Field..." required />
                                    </div>
                                    {/* Institut input */}
                                    <div>
                                        <label htmlFor="institut" className="block mb-2 text-sm font-medium text-dark-purple">Institut</label>
                                        <input type="text" name="institut" id="institut" value={institut} onChange={(e) => setInstitut(e.target.value)} className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " placeholder="Institut..." required />
                                    </div>
                                </div>
                            </div>
                            {/* Terms and conditions checkbox */}
                            <div className="flex items-start ml-4">
                                <div className="flex items-center h-5">
                                    <input id="terms" onChange={(e) => setTerms(!terms)} aria-describedby="terms" type="checkbox" className="bg-purple-50 border border-purple-200 text-dark-purple sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 " required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <a className="font-medium text-purple-600 hover:underline" href="https://www.termsandconditionsgenerator.com/live.php?token=SqYFmys83d4pA0O8OKdJ060Wgi1zEqkU">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className={`w-full text-white bg-light-purple hover:bg-dark-purple-600 hover:bg-dark-purple focus:ring-700 focus:ring-4 focus:outline-none focus:ring-dark-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${email && password && confirmPassword && birthDate && terms ? '' : 'opacity-50 cursor-not-allowed'}`}>Create an account</button>
                            {/* Already have an account link */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-purple-600 hover:underline">Log in here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
