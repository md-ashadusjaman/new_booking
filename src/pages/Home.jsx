import React from "react";
import heroImg01 from "../../src/assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../../src/assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from "../components/Doctors/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Our priority is a healthy and longer life
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti perspiciatis, sit laudantium repudiandae
                  necessitatibus id laborum incidunt aliquam assumenda a
                  deserunt eos temporibus labore ipsum sint exercitationem atque
                  impedit alias.
                </p>

                <button className="btn">For Appointment</button>
              </div>

              {/* Counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    40+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing best medical services
            </h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              totam, deleniti consequuntur dolores maiores animi atque quia, vel
              distinctio nostrum omnis ea. Explicabo dicta odio, vero nostrum
              maiores eum corporis?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="Search Doctor" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Search Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium incidunt nihil sunt voluptatibus vel autem a
                  eveniet fugiat assumenda nemo!
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Location" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium incidunt nihil sunt voluptatibus vel autem a
                  eveniet fugiat assumenda nemo!
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Booking" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Booking
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium incidunt nihil sunt voluptatibus vel autem a
                  eveniet fugiat assumenda nemo!
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Our Medical Services */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus suscipit atque asperiores alias, autem quos?
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Virtual Treatment Section */}
      <section className="container mx-auto my-12 px-4 lg:flex lg:items-center lg:justify-between">
        <div className="xl:w-[670px]">
          <h2 className="heading">
            Get Virtual treatment <br /> anytime.
          </h2>

          <ul className="pl-4">
            <li className="text_para">1. Directly Appointment</li>
            <li className="text_para">2. Search for Physician</li>
            <li className="text_para">
              3. Select an appointment time using the online platform
            </li>
          </ul>

          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>

        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
          <img src={featureImg} className="w-3/4" alt="Virtual Treatment Feature" />
          <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 x-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px] lg:gap-3">
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                  Wed, 24
                </p>

                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                  11.30AM
                </p>
              </div>

              <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                <img src={videoIcon} alt="Video Icon" />
              </span>
            </div>

            {/* Consultation icon */}
            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:pg-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 ">
              Consultation
            </div>
            {/* Avatar icon */}
            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
              <img src={avatarIcon} alt="Avatar Icon" />
            </div>
            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
              James Margon
            </h4>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Doctors</h2>
            <p className="text_para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus suscipit atque asperiores alias, autem quos?
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="FAQ" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequently asked questions
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

{/* testimoninal */}

      {/* <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">
            What out patinetn say 

          </h2>

          <p className="text_para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et porro quos id? Aperiam distinctio optio voluptatem! Excepturi, rerum maxime.

          </p>

        </div>

        <Testimonial></Testimonial>

      </div>
      </section> */}






      {/* Testimonial Section */}
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
};

export default Home;
