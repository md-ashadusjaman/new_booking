import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    // You can add more fields here as needed
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

            <form>
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
                  value={formData.name}
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
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                  required
                />
              </div>


             <div className='mb-5 flex items-center jsutify-between'>
              <label  className='text-headingColor font-bold text-[16px] leading-7'>
                Select one option
                <select name='role' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="Patient"> Patient</option>
                  <option value="Doctor"> Doctor</option>

                </select>

              </label>



              <label  className='text-headingColor font-bold text-[16px] leading-7'>
                Gender
                <select name='gender' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value=""> Select</option>
                  <option value="male"> male</option>
                  <option value="female"> Female</option>
                  <option value="others"> Others</option>

                </select>

              </label>

             </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
