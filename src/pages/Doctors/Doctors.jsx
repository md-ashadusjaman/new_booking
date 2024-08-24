import React from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import { doctors } from '../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';

const Doctors = () => {
  return (
    <div>
      <section className='bg-white'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-lime-200 rounded-md flex items-center justify-center'>
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>


      <section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">
        What our patients say
      </h2>
      <p className="text_para text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et porro quos id? Aperiam distinctio optio voluptatem! Excepturi, rerum maxime.
      </p>
    </div>
<Testimonial></Testimonial>
   
  </div>
</section>
    </div>
  );
}

export default Doctors;
