import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/avatar-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary.js';

import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    gender: '',
    role: 'patient'
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);

      try {
        const data = await uploadImageToCloudinary(file);
        if (data && data.secure_url) {
          setFormData({ ...formData, photo: data.secure_url });
          setSelectedFile(data.secure_url); // Save the secure URL from Cloudinary
          toast.success('Image uploaded successfully!');
        } else {
          throw new Error('Image upload failed');
        }
      } catch (error) {
        toast.error('Error uploading image: ' + error.message);
        console.error('Error uploading image:', error);
      }
    }
  };

  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="Signup illustration" className='w-full rounded-l-lg' />
            </figure>
          </div>

          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input
                  type="text"
                  placeholder='Enter your Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>

              <div className='mb-5'>
                <input
                  type="email"
                  placeholder='Enter your valid email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>

              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='Enter your password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Select one option
                  <select name='role' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none' value={formData.role}
                    onChange={handleInputChange}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender
                  <select name='gender' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none' value={formData.gender}
                    onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && (
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                    <img src={previewURL || avatar} alt="Avatar" className='w-full rounded-full' />
                  </figure>
                )}

                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type='file'
                    name='photo'
                    id='customFile'
                    onChange={handleFileChange}
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />

                  <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button disabled={loading}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  {loading ? <HashLoader size={35} color="yellow" /> : 'Sign Up'}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to="/login" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
